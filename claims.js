class NationClaims {
    static dataUrl = 'claims.json';
    static cacheKey = 'nationClaims';
    static refreshInterval = 5 * 60 * 1000;
    static flagWidth = 64;   // Source textures are 32x20; composed at 2x, pixel-crisp.
    static flagHeight = 40;

    // {} means not yet published; FrontierEngine publishes { updated, cellSize, nations }.
    static parseData(data) {
        if (!data || !Array.isArray(data.nations)) return null;
        const cellSize = Number.isFinite(data.cellSize) ? data.cellSize : 100;
        const nations = data.nations.filter(nation =>
            nation && typeof nation.id === 'string' && typeof nation.name === 'string' &&
            Array.isArray(nation.claims) && Array.isArray(nation.flag));
        return { cellSize, nations };
    }

    static colorChannels(hex) {
        const match = /^#([0-9a-f]{6})$/i.exec(typeof hex === 'string' ? hex : '');
        const value = match ? parseInt(match[1], 16) : 0xffffff;
        return [(value >> 16) & 255, (value >> 8) & 255, value & 255];
    }

    static hexToRgba(hex, alpha) {
        return `rgba(${NationClaims.colorChannels(hex).join(', ')}, ${alpha})`;
    }

    /** Keeps label hues while ensuring 7:1 contrast against their black outline. */
    static readableTextColor(hex) {
        let channels = NationClaims.colorChannels(hex);
        const luminance = rgb => {
            const linear = rgb.map(channel => {
                const value = channel / 255;
                return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
            });
            return linear[0] * 0.2126 + linear[1] * 0.7152 + linear[2] * 0.0722;
        };
        if (luminance(channels) < 0.3) {
            if (channels[0] === channels[1] && channels[1] === channels[2]) return '#ffffff';
            const lighten = amount => channels.map(channel => Math.ceil(channel + (255 - channel) * amount));
            let low = 0, high = 1;
            for (let step = 0; step < 12; step++) {
                const middle = (low + high) / 2;
                if (luminance(lighten(middle)) < 0.3) low = middle;
                else high = middle;
            }
            channels = lighten(high);
        }
        return `#${channels.map(channel => channel.toString(16).padStart(2, '0')).join('')}`;
    }

    static layerImageUrl(patternId, colorId) {
        if (!/^[a-zA-Z0-9_]+$/.test(patternId) || !/^[a-zA-Z0-9_]+$/.test(colorId)) return null;
        return `flags/${patternId}/${patternId}_${colorId}.png`;
    }

    static loadImage(url) {
        return new Promise(resolve => {
            const image = new Image();
            image.onload = () => resolve(image);
            // Unknown layers (e.g. extension packs) are skipped rather than failing the flag.
            image.onerror = () => resolve(null);
            image.src = url;
        });
    }

    /** Stacks a nation's flag layers into a crisp data-URL image. */
    static async composeFlag(flagLayers) {
        const canvas = document.createElement('canvas');
        canvas.width = NationClaims.flagWidth;
        canvas.height = NationClaims.flagHeight;
        const context = canvas.getContext('2d');
        context.imageSmoothingEnabled = false;

        let drawn = 0;
        for (const layer of flagLayers) {
            if (!Array.isArray(layer) || layer.length < 2) continue;
            const url = NationClaims.layerImageUrl(String(layer[0]), String(layer[1]));
            if (!url) continue;
            const image = await NationClaims.loadImage(url);
            if (!image) continue;
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
            drawn++;
        }
        return drawn > 0 ? canvas.toDataURL() : null;
    }

    constructor(unmined) {
        this.unmined = unmined;
        this.territoryStyles = [];
        this.renderVersion = 0;

        const source = new ol.source.Vector();
        this.claimsLayer = new ol.layer.Vector({ source });
        this.claimsLayer.setZIndex(400); // Below the parcel grid (500).
        unmined.olMap.addLayer(this.claimsLayer);

        const markerSource = new ol.source.Vector();
        this.markersLayer = new ol.layer.Vector({ source: markerSource, declutter: true });
        this.markersLayer.setZIndex(9000); // Above the grid, below coordinate labels.
        unmined.olMap.addLayer(this.markersLayer);
        unmined.nationClaims = this;
        unmined.updateNationClaims();
        this.createDetailsDialog();
        unmined.olMap.on('singleclick', event => {
            const nation = unmined.olMap.forEachFeatureAtPixel(
                event.pixel, feature => feature.get('nation'),
                { layerFilter: layer => layer === this.markersLayer, hitTolerance: 6 });
            if (nation) this.showDetails(nation);
        });

        let cachedData;
        try {
            const cached = localStorage.getItem(NationClaims.cacheKey);
            if (cached !== null) {
                cachedData = NationClaims.parseData(JSON.parse(cached));
                if (!cachedData) throw new Error('Invalid cached nation claims');
            }
        } catch (error) {
            console.warn('Unable to load the cached nation claims.', error);
        }
        if (cachedData) this.render(cachedData);

        this.refresh();
        setInterval(() => this.refresh(), NationClaims.refreshInterval);
    }

    async refresh() {
        try {
            const response = await fetch(`${NationClaims.dataUrl}?t=${Date.now()}`, { cache: 'no-store' });
            if (!response.ok) throw new Error(`Nation claims request failed: ${response.status}`);
            const raw = await response.json();
            if (raw && typeof raw === 'object' && !Array.isArray(raw) && Object.keys(raw).length === 0) {
                console.info('Nation claims have not been published yet; keeping any cached data and retrying on the next refresh.');
                return;
            }
            const data = NationClaims.parseData(raw);
            if (!data) throw new Error('Invalid published nation claims');
            await this.render(data);
            try {
                localStorage.setItem(NationClaims.cacheKey, JSON.stringify(raw));
            } catch (error) {
                console.warn('Unable to cache the nation claims.', error);
            }
        } catch (error) {
            console.warn('Unable to refresh the nation claims; keeping the last known data.', error);
        }
    }

    toView(x, z) {
        return ol.proj.transform([x, z], this.unmined.dataProjection, this.unmined.viewProjection);
    }

    cellPolygon(gridX, gridZ, cellSize) {
        const minX = gridX * cellSize;
        const minZ = gridZ * cellSize;
        return new ol.geom.Polygon([[
            this.toView(minX, minZ),
            this.toView(minX + cellSize, minZ),
            this.toView(minX + cellSize, minZ + cellSize),
            this.toView(minX, minZ + cellSize),
            this.toView(minX, minZ)
        ]]);
    }

    createDetailsDialog() {
        this.detailsDialog = document.createElement('dialog');
        this.detailsDialog.className = 'map-dialog nation-details-dialog';
        this.detailsDialog.setAttribute('aria-labelledby', 'nation-details-title');
        this.detailsTitle = document.createElement('h2');
        this.detailsTitle.id = 'nation-details-title';
        this.detailsList = document.createElement('dl');
        const note = document.createElement('p');
        note.className = 'map-dialog-note';
        note.textContent = 'Last published snapshot. Nation data is published hourly.';
        const close = document.createElement('button');
        close.type = 'button';
        close.textContent = 'Close';
        close.addEventListener('click', () => this.detailsDialog.close());
        this.detailsDialog.append(this.detailsTitle, this.detailsList, note, close);
        document.body.append(this.detailsDialog);
    }

    showDetails(nation) {
        this.detailsTitle.textContent = nation.name;
        this.detailsList.replaceChildren();
        const values = [
            ['Leader', nation.leaderName || 'Unavailable'],
            ['Members', Number.isSafeInteger(nation.memberCount) && nation.memberCount >= 0
                ? nation.memberCount.toLocaleString() : 'Unavailable'],
            ['Treasury', Number.isFinite(nation.treasury) ? `${nation.treasury.toLocaleString()} coins` : 'Unavailable']
        ];
        for (const [label, value] of values) {
            const term = document.createElement('dt');
            const description = document.createElement('dd');
            term.textContent = label;
            description.textContent = value;
            this.detailsList.append(term, description);
        }
        if (!this.detailsDialog.open) this.detailsDialog.showModal();
    }

    updateSettings(settings) {
        this.settings = settings;
        this.claimsLayer.setVisible(settings.showTerritories && settings.territoryOpacity > 0);
        for (const { fill, stroke, color } of this.territoryStyles) {
            fill.setColor(NationClaims.hexToRgba(color, settings.territoryOpacity));
            stroke.setColor(NationClaims.hexToRgba(color, Math.min(0.8, settings.territoryOpacity * 4)));
        }
        this.claimsLayer.changed();
        this.markersLayer.setVisible(settings.showMarkers && (settings.showNationFlags || settings.showNationNames));
        for (const feature of this.markersLayer.getSource().getFeatures()) {
            const styles = [];
            if (settings.showNationFlags && feature.get('flagStyle')) styles.push(feature.get('flagStyle'));
            if (settings.showNationNames) styles.push(feature.get('nameStyle'));
            feature.setStyle(styles);
        }
    }

    async render(data) {
        const version = ++this.renderVersion;
        const claimFeatures = [];
        const markerFeatures = [];
        const territoryStyles = [];

        for (const nation of data.nations) {
            const fill = new ol.style.Fill({ color: NationClaims.hexToRgba(nation.color, 0.22) });
            const stroke = new ol.style.Stroke({ color: NationClaims.hexToRgba(nation.color, 0.8), width: 1 });
            const cellStyle = new ol.style.Style({ fill, stroke });
            territoryStyles.push({ fill, stroke, color: nation.color });

            let sumX = 0, sumZ = 0, count = 0;
            for (const cell of nation.claims) {
                if (!Array.isArray(cell) || !Number.isFinite(cell[0]) || !Number.isFinite(cell[1])) continue;
                const feature = new ol.Feature({ geometry: this.cellPolygon(cell[0], cell[1], data.cellSize) });
                feature.setStyle(cellStyle);
                claimFeatures.push(feature);
                sumX += cell[0] * data.cellSize + data.cellSize / 2;
                sumZ += cell[1] * data.cellSize + data.cellSize / 2;
                count++;
            }

            const anchor = nation.capital && Number.isFinite(nation.capital.x) && Number.isFinite(nation.capital.z)
                ? [nation.capital.x, nation.capital.z]
                : (count > 0 ? [sumX / count, sumZ / count] : null);
            if (!anchor) continue;

            const flagUrl = await NationClaims.composeFlag(nation.flag);
            const styles = [];
            if (flagUrl) {
                styles.push(new ol.style.Style({
                    image: new ol.style.Icon({ src: flagUrl, anchor: [0.5, 1], scale: 1 })
                }));
            }
            styles.push(new ol.style.Style({
                text: new ol.style.Text({
                    text: nation.name,
                    font: 'bold 14px sans-serif',
                    fill: new ol.style.Fill({ color: NationClaims.readableTextColor(nation.color) }),
                    stroke: new ol.style.Stroke({ color: '#000000', width: 3 }),
                    offsetY: 12,
                    overflow: true
                })
            }));

            const marker = new ol.Feature({
                geometry: new ol.geom.Point(this.toView(anchor[0], anchor[1])),
                nation,
                flagStyle: flagUrl ? styles[0] : null,
                nameStyle: styles[styles.length - 1]
            });
            marker.setStyle(styles);
            markerFeatures.push(marker);
        }

        if (version !== this.renderVersion) return;
        this.territoryStyles = territoryStyles;
        this.claimsLayer.getSource().clear();
        this.claimsLayer.getSource().addFeatures(claimFeatures);
        this.markersLayer.getSource().clear();
        this.markersLayer.getSource().addFeatures(markerFeatures);
        this.updateSettings(this.settings);
    }
}
