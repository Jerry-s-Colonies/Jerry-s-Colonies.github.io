class RegionMap {

    constructor(regionMap, tileSize, worldMinX, worldMinZ, worldWidth, worldHeight) {
        this.regionMap = regionMap;
        this.tileSize = tileSize;
        this.worldMinX = worldMinX;
        this.worldMinZ = worldMinZ;
        this.worldWidth = worldWidth;
        this.worldHeight = worldHeight;
    }

    hasTile(tileX, tileZ, unminedZoomLevel) {
        const zoomFactor = Math.pow(2, unminedZoomLevel);

        const minTileX = Math.floor(this.worldMinX * zoomFactor / this.tileSize);
        const minTileZ = Math.floor(this.worldMinZ * zoomFactor / this.tileSize);
        const maxTileX = Math.ceil((this.worldMinX + this.worldWidth) * zoomFactor / this.tileSize) - 1;
        const maxTileZ = Math.ceil((this.worldMinZ + this.worldHeight) * zoomFactor / this.tileSize) - 1;

        if (tileX < minTileX || tileZ < minTileZ || tileX > maxTileX || tileZ > maxTileZ) {
            return false;
        }

        const tileBlockSize = this.tileSize / zoomFactor;
        const tileBlockPoint = {
            x: tileX * tileBlockSize,
            z: tileZ * tileBlockSize
        };


        const tileRegionPoint = {
            x: Math.floor(tileBlockPoint.x / 512),
            z: Math.floor(tileBlockPoint.z / 512)
        };
        const tileRegionSize = Math.ceil(tileBlockSize / 512);

        for (let x = tileRegionPoint.x; x < tileRegionPoint.x + tileRegionSize; x++) {
            for (let z = tileRegionPoint.z; z < tileRegionPoint.z + tileRegionSize; z++) {
                const group = {
                    x: Math.floor(x / 32),
                    z: Math.floor(z / 32)
                };
                const regionMap = this.regionMap.find(e => e.x == group.x && e.z == group.z);
                if (regionMap) {
                    const relX = x - group.x * 32;
                    const relZ = z - group.z * 32;
                    const inx = relZ * 32 + relX;
                    var b = regionMap.m[Math.floor(inx / 32)];
                    var bit = inx % 32;
                    var found = (b & (1 << bit)) != 0;
                    if (found) return true;
                }
            }
        }
        return false;
    };
}

class RedDotMarker {

    #source = undefined;
    #layer = undefined;
    #map = undefined;
    #dataProjection = undefined;
    #viewProjection = undefined;

    constructor(map, dataProjection, viewProjection) {
        this.#map = map;
        this.#dataProjection = dataProjection;
        this.#viewProjection = viewProjection;

        this.#source = new ol.source.Vector({
            features: []
        });
        this.#layer = new ol.layer.Vector({
            source: this.#source,
            zIndex: 1000
        });

        this.#map.addLayer(this.#layer);

        window.addEventListener('hashchange', (e) => { this.#hashChanged(e.newURL) });
        this.#hashChanged(window.location.href);
    }

    getCoordinates() {
        return RedDotMarker.getCoordinatesFromUrlHash(window.location.hash);
    }

    static getCoordinatesFromUrlHash(hash) {
        if (!hash || hash.length <= 1) return undefined;

        const q = new URLSearchParams(hash.substring(1))
        const rx = q.get('rx');
        const rz = q.get('rz');
        if (!rx || !rz) return undefined;
       
        const c = [parseInt(rx), parseInt(rz)];
        return c;
    }

    static getUrlHashWithCoordinates(hash, coordinates) {
        hash ??= '#';
        const q = new URLSearchParams(hash.substring(1));
        if (!coordinates) {
            q.delete('rx');
            q.delete('rz');
        } else {
            q.set('rx', coordinates[0]);
            q.set('rz', coordinates[1]);
        }
        const s = q.toString();
        return '#' + s;
    }

    setCoordinates(coordinates) {        
        const url = new URL(window.location.href);
        url.hash = RedDotMarker.getUrlHashWithCoordinates(url.hash, coordinates);
        window.location.replace(url);
    }

    #hashChanged(newURL) {
        const c = RedDotMarker.getCoordinatesFromUrlHash(new URL(newURL).hash);
        this.#setRedDotMarker(c);
    }

    #setRedDotMarker(coordinates) {
        this.#source.clear();

        if (!coordinates) return;

        const marker = new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.transform(coordinates, this.#dataProjection, this.#viewProjection))
        });

        marker.setStyle(new ol.style.Style({
            image: new ol.style.Circle({
                radius: 6,
                fill: new ol.style.Fill({
                    color: 'red'
                }),
                stroke: new ol.style.Stroke({
                    color: '#ffffff',
                    width: 2
                })
            }),
            text: new ol.style.Text({
                text: coordinates[0] + ', ' + coordinates[1],
                font: "bold 14px Arial",
                offsetY: 25,
                fill: new ol.style.Fill({ color: '#000000' }),
                stroke: new ol.style.Stroke({
                    color: '#ffffff',
                    width: 3
                }),
                padding: [4, 6, 4, 6],
                //backgroundFill: new ol.style.Fill({ color: '#ffff00' })
            })
        }));

        this.#source.addFeature(marker);
    }

}

class TerritoryDrawer {

    static #storageKey = 'territoryDrawings';
    static #collapsedKey = 'territoryPanelCollapsed';
    static #configsMetaKey = 'territoryConfigsMeta';
    static #tutorialSeenKey = 'territoryTutorialSeen';
    static #defaultConfigLoadedKey = 'territoryDefaultConfigLoaded';
    static #defaultConfigUrl = 'default-continents.json';
    static #defaultConfigName = 'Continents';
    // Shared with flagbuilder.js - both pages are same-origin, so localStorage bridges them.
    static #stickerLibraryKey = 'jcServerMapFlagStickers';
    static #defaultColor = '#e6194b';
    static #defaultScale = 16;

    // Named text tiers, ordered from largest/broadest to smallest/most specific.
    // minZoom is the lowest map zoom level (see UnminedMapProperties.minZoom/maxZoom)
    // at which labels of that tier start to appear, similar to place labels on Google Maps.
    static #textTiers = [
        { key: 'continent', label: 'Continent', fontSize: 48, minZoom: -6 },
        { key: 'region', label: 'Region', fontSize: 36, minZoom: -4 },
        { key: 'nation', label: 'Nation', fontSize: 28, minZoom: -2 },
        { key: 'town', label: 'Town', fontSize: 20, minZoom: 0 },
        { key: 'landmark', label: 'Landmark', fontSize: 14, minZoom: 1 }
    ];

    #map = undefined;
    #dataProjection = undefined;
    #viewProjection = undefined;
    #worldZoomOffset = 0;
    #source = undefined;
    #layer = undefined;
    #draw = undefined;
    #currentColor = TerritoryDrawer.#defaultColor;
    #mode = null;
    #configs = [];

    #panel = undefined;
    #selectButton = undefined;
    #selectOverlay = undefined;
    #selectClickHandler = undefined;
    #selectedFeature = null;
    #selectFeatures = undefined;
    #translateInteraction = undefined;
    #selectSizeRow = undefined;
    #selectSizeInput = undefined;
    #selectSizeValue = undefined;
    #drawButton = undefined;
    #freehandButton = undefined;
    #textButton = undefined;
    #stickerButton = undefined;
    #stickerBadge = undefined;
    #stickers = [];
    #pendingSticker = null;
    #manageBadge = undefined;
    #snapshotOverlay = undefined;
    #snapshotImage = undefined;
    #tierModalOverlay = undefined;
    #tierModalResolve = undefined;
    #manageModalOverlay = undefined;
    #manageModalList = undefined;
    #stickerModalOverlay = undefined;
    #stickerModalGrid = undefined;
    #tutorialModalOverlay = undefined;

    constructor(map, mapElement, dataProjection, viewProjection, worldZoomOffset) {
        this.#map = map;
        this.#dataProjection = dataProjection;
        this.#viewProjection = viewProjection;
        this.#worldZoomOffset = worldZoomOffset ?? 0;

        this.#source = new ol.source.Vector({ features: [] });
        this.#layer = new ol.layer.Vector({
            source: this.#source,
            zIndex: 50,
            style: (feature) => this.#styleForFeature(feature)
        });
        this.#map.addLayer(this.#layer);

        this.#selectFeatures = new ol.Collection();
        this.#translateInteraction = new ol.interaction.Translate({ features: this.#selectFeatures });
        this.#translateInteraction.on('translating', (evt) => this.#onSelectedFeatureMoved(evt));
        this.#translateInteraction.on('translateend', () => this.#saveTerritories());
        this.#map.addInteraction(this.#translateInteraction);

        this.#loadTerritories();
        this.#loadConfigsMeta();
        this.#createPanel(mapElement);
        this.#createSnapshotModal(mapElement);
        this.#createTierModal(mapElement);
        this.#createManageModal(mapElement);
        this.#createStickerModal(mapElement);
        this.#createSelectOverlay(mapElement);
        this.#loadStickerLibrary();
        this.#renderConfigList();
        this.#loadDefaultConfig();

        this.#createTutorialModal(mapElement);
        if (localStorage.getItem(TerritoryDrawer.#tutorialSeenKey) !== 'true') {
            this.#showTutorialModal();
        }
    }

    // Seeds the map with the bundled continents config the first time a visitor loads the page.
    async #loadDefaultConfig() {
        if (localStorage.getItem(TerritoryDrawer.#defaultConfigLoadedKey) === 'true') return;
        localStorage.setItem(TerritoryDrawer.#defaultConfigLoadedKey, 'true');

        try {
            const response = await fetch(TerritoryDrawer.#defaultConfigUrl);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const config = await response.json();
            this.#applyConfig(config, TerritoryDrawer.#defaultConfigName);
        } catch (e) {
            console.error('Failed to load default map config', e);
        }
    }

    #styleForFeature(feature) {
        const color = feature.get('color') || this.#currentColor;

        if (feature.getGeometry().getType() === 'Point') {
            const tierIndex = TerritoryDrawer.#textTiers.findIndex(t => t.key === feature.get('tier'));
            const tier = tierIndex >= 0 ? TerritoryDrawer.#textTiers[tierIndex] : undefined;

            if (feature.get('type') === 'sticker') {
                if (tier) {
                    const zoom = (this.#map.getView().getZoom() ?? 0) + this.#worldZoomOffset;
                    const nextTier = TerritoryDrawer.#textTiers[tierIndex + 1];
                    const maxZoom = nextTier ? nextTier.minZoom : Infinity;
                    if (zoom < tier.minZoom || zoom >= maxZoom) return null;
                }
                return new ol.style.Style({
                    image: new ol.style.Icon({
                        src: feature.get('stickerImage'),
                        width: 60,
                        height: 42
                    })
                });
            }

            let fontSize;
            if (tier) {
                // Each tier is only visible within its own zoom band, up to the next tier's minZoom.
                // The OL view zoom is 0-based; convert it to the world zoom scale tier.minZoom uses.
                const zoom = (this.#map.getView().getZoom() ?? 0) + this.#worldZoomOffset;
                const nextTier = TerritoryDrawer.#textTiers[tierIndex + 1];
                const maxZoom = nextTier ? nextTier.minZoom : Infinity;
                if (zoom < tier.minZoom || zoom >= maxZoom) return null;
                // A manually adjusted size (via the select tool) overrides the tier default.
                fontSize = feature.get('scale') || tier.fontSize;
            } else {
                // Backward compatibility with labels created before named tiers existed.
                fontSize = feature.get('scale') || TerritoryDrawer.#defaultScale;
            }

            return new ol.style.Style({
                text: new ol.style.Text({
                    text: feature.get('text') || '',
                    font: `${fontSize}px 'MinecraftRegular', monospace`,
                    fill: new ol.style.Fill({ color: color }),
                    stroke: new ol.style.Stroke({ color: '#000000', width: Math.max(2, Math.round(fontSize / 6)) }),
                    overflow: true
                })
            });
        }

        return new ol.style.Style({
            fill: new ol.style.Fill({ color: TerritoryDrawer.#hexToRgba(color, 0.35) }),
            stroke: new ol.style.Stroke({ color: color, width: 2 })
        });
    }

    static #hexToRgba(hex, alpha) {
        const h = (hex || TerritoryDrawer.#defaultColor).replace('#', '');
        const r = parseInt(h.substring(0, 2), 16);
        const g = parseInt(h.substring(2, 4), 16);
        const b = parseInt(h.substring(4, 6), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    #iconButton(iconFile, label, title) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'territory-btn';
        button.title = title;
        button.setAttribute('aria-label', title);

        const icon = document.createElement('img');
        icon.className = 'territory-btn-icon';
        icon.src = `icons/${iconFile}`;
        icon.alt = '';

        const text = document.createElement('span');
        text.className = 'territory-btn-label';
        text.textContent = label;

        button.appendChild(icon);
        button.appendChild(text);
        return button;
    }

    #divider() {
        const divider = document.createElement('span');
        divider.className = 'territory-divider';
        return divider;
    }

    #createPanel(mapElement) {
        const panel = document.createElement('div');
        panel.className = 'territory-panel';

        const header = document.createElement('div');
        header.className = 'territory-header';

        const title = document.createElement('span');
        title.className = 'territory-title';
        title.textContent = 'Territory Tools';

        const toggleButton = document.createElement('button');
        toggleButton.type = 'button';
        toggleButton.className = 'territory-toggle-btn';
        toggleButton.title = 'Show/hide the toolbar';
        toggleButton.setAttribute('aria-label', 'Show/hide the toolbar');
        toggleButton.textContent = '▾';

        header.appendChild(title);
        header.appendChild(toggleButton);

        const body = document.createElement('div');
        body.className = 'territory-body';

        const toolsRow = document.createElement('div');
        toolsRow.className = 'territory-row';

        const colorInput = document.createElement('input');
        colorInput.type = 'color';
        colorInput.className = 'territory-color';
        colorInput.value = this.#currentColor;
        colorInput.title = 'Color';
        colorInput.addEventListener('input', () => {
            this.#currentColor = colorInput.value;
        });

        const selectButton = this.#iconButton('select.png', 'Select', 'Select an item to delete it');
        selectButton.addEventListener('click', () => this.#setMode(this.#mode === 'select' ? null : 'select'));

        const drawButton = this.#iconButton('linedraw.png', 'Draw', 'Draw territory (click to place points)');
        drawButton.addEventListener('click', () => this.#setMode(this.#mode === 'draw' ? null : 'draw'));

        const freehandButton = this.#iconButton('freedraw.png', 'Free Draw', 'Free draw territory (click and drag)');
        freehandButton.addEventListener('click', () => this.#setMode(this.#mode === 'freehand' ? null : 'freehand'));

        const textButton = this.#iconButton('text.png', 'Text', 'Add text label');
        textButton.addEventListener('click', () => this.#setMode(this.#mode === 'text' ? null : 'text'));

        const stickerButton = this.#iconButton('sticker.png', 'Stickers', 'Place a saved flag sticker (visible on the nation layer)');
        const stickerBadge = document.createElement('span');
        stickerBadge.className = 'territory-badge territory-badge-hidden';
        stickerBadge.textContent = '0';
        stickerButton.appendChild(stickerBadge);
        stickerButton.addEventListener('click', () => {
            if (this.#mode === 'sticker') {
                this.#setMode(null);
            } else {
                this.#showStickerModal();
            }
        });

        const undoButton = this.#iconButton('undo.png', 'Undo', 'Undo last item');
        undoButton.addEventListener('click', () => this.#undoLast());

        const clearButton = this.#iconButton('clear.png', 'Clear', 'Clear everything');
        clearButton.addEventListener('click', () => this.#clearAll());

        toolsRow.appendChild(colorInput);
        toolsRow.appendChild(selectButton);
        toolsRow.appendChild(drawButton);
        toolsRow.appendChild(freehandButton);
        toolsRow.appendChild(textButton);
        toolsRow.appendChild(stickerButton);
        toolsRow.appendChild(undoButton);
        toolsRow.appendChild(clearButton);
        toolsRow.appendChild(this.#divider());

        const saveButton = this.#iconButton('download.png', 'Save', 'Save map config to a file');
        saveButton.addEventListener('click', () => this.#exportConfig());

        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.json,application/json';
        fileInput.className = 'territory-file-input';
        fileInput.addEventListener('change', (evt) => this.#importConfig(evt));

        const loadButton = this.#iconButton('upload.png', 'Load', 'Load map config from a file');
        loadButton.addEventListener('click', () => fileInput.click());

        const manageButton = this.#iconButton('configs.png', 'Configs', 'Manage loaded configs');
        manageButton.classList.add('territory-manage-btn');

        const manageBadge = document.createElement('span');
        manageBadge.className = 'territory-badge territory-badge-hidden';
        manageBadge.textContent = '0';

        manageButton.appendChild(manageBadge);
        manageButton.addEventListener('click', () => this.#showManageModal());

        const snapshotButton = this.#iconButton('screenshot.png', 'Screenshot', 'Preview a screenshot of the current view');
        snapshotButton.addEventListener('click', () => this.#takeSnapshot());

        const helpButton = this.#iconButton('help.png', 'Help', 'Show the tutorial');
        helpButton.addEventListener('click', () => this.#showTutorialModal());

        toolsRow.appendChild(saveButton);
        toolsRow.appendChild(loadButton);
        toolsRow.appendChild(manageButton);
        toolsRow.appendChild(snapshotButton);
        toolsRow.appendChild(helpButton);
        toolsRow.appendChild(fileInput);

        body.appendChild(toolsRow);

        panel.appendChild(header);
        panel.appendChild(body);

        const collapsed = localStorage.getItem(TerritoryDrawer.#collapsedKey) === 'true';
        const setCollapsed = (value) => {
            panel.classList.toggle('territory-panel-collapsed', value);
            toggleButton.textContent = value ? '▸' : '▾';
            localStorage.setItem(TerritoryDrawer.#collapsedKey, String(value));
        };
        toggleButton.addEventListener('click', () => setCollapsed(!panel.classList.contains('territory-panel-collapsed')));
        setCollapsed(collapsed);

        mapElement.appendChild(panel);

        this.#panel = panel;
        this.#selectButton = selectButton;
        this.#drawButton = drawButton;
        this.#freehandButton = freehandButton;
        this.#textButton = textButton;
        this.#stickerButton = stickerButton;
        this.#stickerBadge = stickerBadge;
        this.#manageBadge = manageBadge;
    }

    #createSelectOverlay(mapElement) {
        const wrapper = document.createElement('div');
        wrapper.className = 'territory-select-overlay';

        const sizeRow = document.createElement('div');
        sizeRow.className = 'territory-select-size territory-row';

        const sizeInput = document.createElement('input');
        sizeInput.type = 'range';
        sizeInput.className = 'territory-scale';
        sizeInput.min = '8';
        sizeInput.max = '72';
        sizeInput.step = '1';
        sizeInput.title = 'Text size';
        sizeInput.setAttribute('aria-label', 'Text size');

        const sizeValue = document.createElement('span');
        sizeValue.className = 'territory-scale-value territory-label';

        sizeInput.addEventListener('input', () => {
            if (!this.#selectedFeature) return;
            this.#selectedFeature.set('scale', Number(sizeInput.value));
            sizeValue.textContent = sizeInput.value;
        });
        sizeInput.addEventListener('change', () => this.#saveTerritories());

        sizeRow.appendChild(sizeInput);
        sizeRow.appendChild(sizeValue);

        const deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.className = 'territory-select-delete';
        deleteButton.title = 'Delete this item';
        deleteButton.setAttribute('aria-label', 'Delete this item');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', () => {
            if (this.#selectedFeature) {
                this.#source.removeFeature(this.#selectedFeature);
                this.#saveTerritories();
                this.#renderConfigList();
            }
            this.#clearSelection();
        });

        wrapper.appendChild(sizeRow);
        wrapper.appendChild(deleteButton);

        const overlay = new ol.Overlay({
            element: wrapper,
            positioning: 'center-center',
            stopEvent: true,
            offset: [0, -6]
        });
        overlay.setPosition(undefined);
        this.#map.addOverlay(overlay);

        this.#selectOverlay = overlay;
        this.#selectSizeRow = sizeRow;
        this.#selectSizeInput = sizeInput;
        this.#selectSizeValue = sizeValue;
    }

    // Drag handle for the selected feature - keeps the delete/size overlay following the geometry as it's moved.
    #onSelectedFeatureMoved(evt) {
        const feature = evt.features.item(0);
        if (!feature) return;
        const geometry = feature.getGeometry();
        const coordinate = geometry.getType() === 'Point' ? geometry.getFirstCoordinate() : evt.coordinate;
        this.#selectOverlay.setPosition(coordinate);
    }

    #selectFeature(feature, coordinate) {
        this.#selectedFeature = feature;
        this.#selectFeatures.clear();
        this.#selectFeatures.push(feature);
        this.#selectOverlay.setPosition(coordinate);

        const isText = feature.get('text') !== undefined && feature.get('type') !== 'sticker';
        this.#selectSizeRow.style.display = isText ? '' : 'none';
        if (isText) {
            const tier = TerritoryDrawer.#textTiers.find(t => t.key === feature.get('tier'));
            const size = feature.get('scale') || tier?.fontSize || TerritoryDrawer.#defaultScale;
            this.#selectSizeInput.value = size;
            this.#selectSizeValue.textContent = size;
        }
    }

    #clearSelection() {
        this.#selectedFeature = null;
        if (this.#selectFeatures) this.#selectFeatures.clear();
        if (this.#selectOverlay) this.#selectOverlay.setPosition(undefined);
        if (this.#selectSizeRow) this.#selectSizeRow.style.display = 'none';
    }

    #createTierModal(mapElement) {
        const overlay = document.createElement('div');
        overlay.className = 'territory-modal-overlay';
        overlay.addEventListener('click', (evt) => {
            if (evt.target === overlay) this.#resolveTierModal(null);
        });

        const modal = document.createElement('div');
        modal.className = 'territory-modal';

        const header = document.createElement('div');
        header.className = 'territory-modal-header';

        const title = document.createElement('span');
        title.textContent = 'Choose a Label Tier';

        const closeButton = document.createElement('button');
        closeButton.type = 'button';
        closeButton.className = 'territory-btn';
        closeButton.title = 'Cancel';
        closeButton.textContent = 'X';
        closeButton.addEventListener('click', () => this.#resolveTierModal(null));

        header.appendChild(title);
        header.appendChild(closeButton);

        const hint = document.createElement('div');
        hint.className = 'territory-label territory-modal-hint';
        hint.textContent = 'Pick the zoom tier this label should appear at.';

        const optionsRow = document.createElement('div');
        optionsRow.className = 'territory-tier-modal-options';

        TerritoryDrawer.#textTiers.forEach(tier => {
            const option = document.createElement('button');
            option.type = 'button';
            option.className = 'territory-btn territory-tier-modal-option';
            option.textContent = tier.label;
            option.addEventListener('click', () => this.#resolveTierModal(tier.key));
            optionsRow.appendChild(option);
        });

        modal.appendChild(header);
        modal.appendChild(hint);
        modal.appendChild(optionsRow);
        overlay.appendChild(modal);

        mapElement.appendChild(overlay);

        this.#tierModalOverlay = overlay;
    }

    #promptForTier() {
        this.#tierModalOverlay.classList.add('territory-modal-visible');
        return new Promise(resolve => {
            this.#tierModalResolve = resolve;
        });
    }

    #resolveTierModal(tierKey) {
        this.#tierModalOverlay.classList.remove('territory-modal-visible');
        const resolve = this.#tierModalResolve;
        this.#tierModalResolve = undefined;
        if (resolve) resolve(tierKey ?? null);
    }

    #createManageModal(mapElement) {
        const overlay = document.createElement('div');
        overlay.className = 'territory-modal-overlay';
        overlay.addEventListener('click', (evt) => {
            if (evt.target === overlay) this.#hideManageModal();
        });

        const modal = document.createElement('div');
        modal.className = 'territory-modal territory-manage-modal';

        const header = document.createElement('div');
        header.className = 'territory-modal-header';

        const title = document.createElement('span');
        title.textContent = 'Loaded Configs';

        const closeButton = document.createElement('button');
        closeButton.type = 'button';
        closeButton.className = 'territory-btn';
        closeButton.title = 'Close';
        closeButton.textContent = 'X';
        closeButton.addEventListener('click', () => this.#hideManageModal());

        header.appendChild(title);
        header.appendChild(closeButton);

        const hint = document.createElement('div');
        hint.className = 'territory-label territory-modal-hint';
        hint.textContent = 'Each file you load is tracked here. Remove one without touching the others, or hit Save to merge everything into a single file.';

        const list = document.createElement('div');
        list.className = 'territory-config-list';

        modal.appendChild(header);
        modal.appendChild(hint);
        modal.appendChild(list);
        overlay.appendChild(modal);

        mapElement.appendChild(overlay);

        this.#manageModalOverlay = overlay;
        this.#manageModalList = list;
    }

    #renderConfigList() {
        if (this.#manageBadge) {
            this.#manageBadge.textContent = String(this.#configs.length);
            this.#manageBadge.classList.toggle('territory-badge-hidden', this.#configs.length === 0);
        }

        if (!this.#manageModalList) return;
        this.#manageModalList.innerHTML = '';

        if (this.#configs.length === 0) {
            const empty = document.createElement('div');
            empty.className = 'territory-label territory-config-empty';
            empty.textContent = 'No configs loaded yet.';
            this.#manageModalList.appendChild(empty);
            return;
        }

        const features = this.#source.getFeatures();
        this.#configs.forEach(config => {
            const count = features.filter(f => f.get('configId') === config.id).length;

            const row = document.createElement('div');
            row.className = 'territory-config-row';

            const info = document.createElement('span');
            info.className = 'territory-config-name';
            info.textContent = `${config.name} (${count})`;
            info.title = config.name;

            const deleteButton = document.createElement('button');
            deleteButton.type = 'button';
            deleteButton.className = 'territory-btn territory-config-delete';
            deleteButton.title = `Remove "${config.name}"`;
            deleteButton.textContent = 'X';
            deleteButton.addEventListener('click', () => this.#deleteConfig(config.id));

            row.appendChild(info);
            row.appendChild(deleteButton);
            this.#manageModalList.appendChild(row);
        });
    }

    #showManageModal() {
        this.#renderConfigList();
        this.#manageModalOverlay.classList.add('territory-modal-visible');
    }

    #hideManageModal() {
        this.#manageModalOverlay.classList.remove('territory-modal-visible');
    }

    #deleteConfig(id) {
        const config = this.#configs.find(c => c.id === id);
        if (!config) return;
        if (!window.confirm(`Remove "${config.name}" and everything it added?`)) return;

        this.#source.getFeatures()
            .filter(f => f.get('configId') === id)
            .forEach(f => this.#source.removeFeature(f));

        this.#configs = this.#configs.filter(c => c.id !== id);
        this.#saveConfigsMeta();
        this.#saveTerritories();
        this.#renderConfigList();
        this.#clearSelection();
        Unmined.toast(`Removed "${config.name}"`);
    }

    #loadConfigsMeta() {
        try {
            const s = localStorage.getItem(TerritoryDrawer.#configsMetaKey);
            this.#configs = s ? JSON.parse(s) : [];
        } catch (e) {
            console.error('Failed to load config list', e);
            this.#configs = [];
        }
    }

    #saveConfigsMeta() {
        try {
            localStorage.setItem(TerritoryDrawer.#configsMetaKey, JSON.stringify(this.#configs));
        } catch (e) {
            console.error('Failed to save config list', e);
        }
    }

    #loadStickerLibrary() {
        try {
            const s = localStorage.getItem(TerritoryDrawer.#stickerLibraryKey);
            this.#stickers = s ? JSON.parse(s) : [];
        } catch (e) {
            console.error('Failed to load sticker library', e);
            this.#stickers = [];
        }
        if (this.#stickerBadge) {
            this.#stickerBadge.textContent = String(this.#stickers.length);
            this.#stickerBadge.classList.toggle('territory-badge-hidden', this.#stickers.length === 0);
        }
    }

    #createStickerModal(mapElement) {
        const overlay = document.createElement('div');
        overlay.className = 'territory-modal-overlay';
        overlay.addEventListener('click', (evt) => {
            if (evt.target === overlay) this.#hideStickerModal();
        });

        const modal = document.createElement('div');
        modal.className = 'territory-modal territory-manage-modal';

        const header = document.createElement('div');
        header.className = 'territory-modal-header';

        const title = document.createElement('span');
        title.textContent = 'Place a Flag Sticker';

        const closeButton = document.createElement('button');
        closeButton.type = 'button';
        closeButton.className = 'territory-btn';
        closeButton.title = 'Cancel';
        closeButton.textContent = 'X';
        closeButton.addEventListener('click', () => this.#hideStickerModal());

        header.appendChild(title);
        header.appendChild(closeButton);

        const hint = document.createElement('div');
        hint.className = 'territory-label territory-modal-hint';
        hint.textContent = 'Pick a flag saved from the Flag Builder, then click the map to place it. It will only show up on the nation layer.';

        const grid = document.createElement('div');
        grid.className = 'territory-sticker-grid';

        modal.appendChild(header);
        modal.appendChild(hint);
        modal.appendChild(grid);
        overlay.appendChild(modal);

        mapElement.appendChild(overlay);

        this.#stickerModalOverlay = overlay;
        this.#stickerModalGrid = grid;
    }

    #renderStickerGrid() {
        this.#stickerModalGrid.innerHTML = '';

        if (this.#stickers.length === 0) {
            const empty = document.createElement('div');
            empty.className = 'territory-label territory-config-empty';
            empty.textContent = 'No saved flags yet. Save one from the Flag Builder first.';
            this.#stickerModalGrid.appendChild(empty);
            return;
        }

        this.#stickers.forEach(sticker => {
            const item = document.createElement('div');
            item.className = 'territory-sticker-item';
            item.title = `Place "${sticker.name}"`;

            const img = document.createElement('img');
            img.className = 'territory-sticker-thumb';
            img.src = sticker.dataUrl;
            img.alt = sticker.name;
            item.appendChild(img);

            const deleteButton = document.createElement('button');
            deleteButton.type = 'button';
            deleteButton.className = 'territory-sticker-delete';
            deleteButton.title = `Remove "${sticker.name}" from the library`;
            deleteButton.textContent = 'X';
            deleteButton.addEventListener('click', (evt) => {
                evt.stopPropagation();
                this.#deleteSticker(sticker.id);
            });
            item.appendChild(deleteButton);

            item.addEventListener('click', () => this.#pickSticker(sticker));
            this.#stickerModalGrid.appendChild(item);
        });
    }

    #deleteSticker(id) {
        this.#stickers = this.#stickers.filter(s => s.id !== id);
        try {
            localStorage.setItem(TerritoryDrawer.#stickerLibraryKey, JSON.stringify(this.#stickers));
        } catch (e) {
            console.error('Failed to update sticker library', e);
        }
        if (this.#stickerBadge) {
            this.#stickerBadge.textContent = String(this.#stickers.length);
            this.#stickerBadge.classList.toggle('territory-badge-hidden', this.#stickers.length === 0);
        }
        this.#renderStickerGrid();
    }

    #pickSticker(sticker) {
        this.#pendingSticker = sticker;
        this.#hideStickerModal();
        this.#setMode('sticker');
        Unmined.toast(`Click the map to place "${sticker.name}"`);
    }

    #showStickerModal() {
        this.#loadStickerLibrary();
        this.#renderStickerGrid();
        this.#stickerModalOverlay.classList.add('territory-modal-visible');
    }

    #hideStickerModal() {
        this.#stickerModalOverlay.classList.remove('territory-modal-visible');
    }

    static #tutorialSections = [
        {
            title: 'Getting Around',
            body: 'Scroll to zoom, drag to pan, and use the +/- buttons in the corner. Labels and stickers fade in and out as you zoom, just like place names on a real map.'
        },
        {
            title: 'Color',
            body: 'Pick the color used for the next territory outline or text label you create.'
        },
        {
            title: 'Select',
            body: 'Click any territory, label, or sticker to select it, then tap the red X that appears over it to delete just that item.'
        },
        {
            title: 'Draw',
            body: 'Click to place points for a territory outline, then double-click (or click the last point) to finish the shape.'
        },
        {
            title: 'Free Draw',
            body: 'Click and drag to sketch a territory outline freehand instead of placing points one by one.'
        },
        {
            title: 'Text',
            body: 'Click the map to add a text label. You will be asked for the label text and a zoom tier (Continent, Region, Nation, Town, or Landmark) that controls how far you need to zoom in before it appears.'
        },
        {
            title: 'Stickers',
            body: 'Place a flag you saved from the Flag Builder page as a sticker on the map. Flag stickers always appear on the Nation zoom tier.'
        },
        {
            title: 'Undo / Clear',
            body: 'Undo removes the last thing you added. Clear wipes everything you have drawn on this map.'
        },
        {
            title: 'Save / Load / Configs',
            body: 'Save downloads everything you have drawn as a JSON file. Load adds a JSON file back onto the map. Configs lets you see every file you have loaded and remove one without affecting the others.'
        },
        {
            title: 'Screenshot',
            body: 'Capture a snapshot of the current map view that you can save as an image.'
        }
    ];

    #createTutorialModal(mapElement) {
        const overlay = document.createElement('div');
        overlay.className = 'territory-modal-overlay';
        overlay.addEventListener('click', (evt) => {
            if (evt.target === overlay) this.#hideTutorialModal();
        });

        const modal = document.createElement('div');
        modal.className = 'territory-modal territory-manage-modal';

        const header = document.createElement('div');
        header.className = 'territory-modal-header';

        const title = document.createElement('span');
        title.textContent = 'Welcome to Territory Tools';

        const closeButton = document.createElement('button');
        closeButton.type = 'button';
        closeButton.className = 'territory-btn';
        closeButton.title = 'Close';
        closeButton.textContent = 'X';
        closeButton.addEventListener('click', () => this.#hideTutorialModal());

        header.appendChild(title);
        header.appendChild(closeButton);

        const hint = document.createElement('div');
        hint.className = 'territory-label territory-modal-hint';
        hint.textContent = 'Here is what every tool on this map does. You can reopen this any time with the Help button.';

        const list = document.createElement('div');
        list.className = 'territory-tutorial-list';

        TerritoryDrawer.#tutorialSections.forEach(section => {
            const item = document.createElement('div');
            item.className = 'territory-tutorial-item';

            const itemTitle = document.createElement('div');
            itemTitle.className = 'territory-tutorial-item-title';
            itemTitle.textContent = section.title;

            const itemBody = document.createElement('div');
            itemBody.className = 'territory-tutorial-item-body';
            itemBody.textContent = section.body;

            item.appendChild(itemTitle);
            item.appendChild(itemBody);
            list.appendChild(item);
        });

        const gotItButton = document.createElement('button');
        gotItButton.type = 'button';
        gotItButton.className = 'territory-btn territory-btn-active territory-tutorial-close';
        gotItButton.textContent = "Got it!";
        gotItButton.addEventListener('click', () => this.#hideTutorialModal());

        modal.appendChild(header);
        modal.appendChild(hint);
        modal.appendChild(list);
        modal.appendChild(gotItButton);
        overlay.appendChild(modal);

        mapElement.appendChild(overlay);

        this.#tutorialModalOverlay = overlay;
    }

    #showTutorialModal() {
        this.#tutorialModalOverlay.classList.add('territory-modal-visible');
    }

    #hideTutorialModal() {
        this.#tutorialModalOverlay.classList.remove('territory-modal-visible');
        localStorage.setItem(TerritoryDrawer.#tutorialSeenKey, 'true');
    }

    #setMode(mode) {
        this.#mode = mode;

        if (this.#draw) {
            this.#map.removeInteraction(this.#draw);
            this.#draw = undefined;
        }

        if (this.#selectClickHandler) {
            this.#map.un('click', this.#selectClickHandler);
            this.#selectClickHandler = undefined;
        }
        this.#clearSelection();

        this.#selectButton.classList.toggle('territory-btn-active', mode === 'select');
        this.#drawButton.classList.toggle('territory-btn-active', mode === 'draw');
        this.#freehandButton.classList.toggle('territory-btn-active', mode === 'freehand');
        this.#textButton.classList.toggle('territory-btn-active', mode === 'text');
        this.#stickerButton.classList.toggle('territory-btn-active', mode === 'sticker');
        if (mode !== 'sticker') this.#pendingSticker = null;

        if (mode === 'select') {
            const clickHandler = (evt) => {
                const feature = this.#map.forEachFeatureAtPixel(evt.pixel, (f) => f, {
                    layerFilter: (l) => l === this.#layer,
                    hitTolerance: 6
                });
                if (feature) {
                    const geometry = feature.getGeometry();
                    const coordinate = geometry.getType() === 'Point' ? geometry.getFirstCoordinate() : evt.coordinate;
                    this.#selectFeature(feature, coordinate);
                } else {
                    this.#clearSelection();
                }
            };
            this.#map.on('click', clickHandler);
            this.#selectClickHandler = clickHandler;
        } else if (mode === 'draw') {
            this.#draw = new ol.interaction.Draw({
                source: this.#source,
                type: 'Polygon'
            });
            this.#draw.on('drawend', (evt) => {
                evt.feature.set('color', this.#currentColor);
                this.#saveTerritories();
            });
            this.#map.addInteraction(this.#draw);
        } else if (mode === 'freehand') {
            this.#draw = new ol.interaction.Draw({
                source: this.#source,
                type: 'Polygon',
                freehand: true
            });
            this.#draw.on('drawend', (evt) => {
                evt.feature.set('color', this.#currentColor);
                this.#saveTerritories();
            });
            this.#map.addInteraction(this.#draw);
        } else if (mode === 'text') {
            this.#draw = new ol.interaction.Draw({
                source: this.#source,
                type: 'Point'
            });
            this.#draw.on('drawend', async (evt) => {
                const feature = evt.feature;
                const text = window.prompt('Label text:', '');
                if (!text) {
                    setTimeout(() => this.#source.removeFeature(feature), 0);
                    return;
                }
                const tier = await this.#promptForTier();
                if (!tier) {
                    setTimeout(() => this.#source.removeFeature(feature), 0);
                    return;
                }
                feature.set('text', text);
                feature.set('color', this.#currentColor);
                feature.set('tier', tier);
                this.#saveTerritories();
            });
            this.#map.addInteraction(this.#draw);
        } else if (mode === 'sticker') {
            this.#draw = new ol.interaction.Draw({
                source: this.#source,
                type: 'Point'
            });
            this.#draw.on('drawend', (evt) => {
                const sticker = this.#pendingSticker;
                const feature = evt.feature;
                // OL fires drawend before adding the feature to the source, so defer until it lands.
                setTimeout(() => {
                    if (!sticker) {
                        this.#source.removeFeature(feature);
                        return;
                    }
                    feature.set('type', 'sticker');
                    feature.set('stickerId', sticker.id);
                    feature.set('stickerImage', sticker.dataUrl);
                    feature.set('stickerName', sticker.name);
                    feature.set('tier', 'nation');
                    this.#saveTerritories();
                    this.#layer.changed();
                }, 0);
            });
            this.#map.addInteraction(this.#draw);
        }
    }

    #undoLast() {
        const features = this.#source.getFeatures();
        const last = features[features.length - 1];
        if (last) {
            this.#source.removeFeature(last);
            this.#saveTerritories();
            this.#renderConfigList();
            this.#clearSelection();
        }
    }

    #clearAll() {
        if (this.#source.getFeatures().length === 0) return;
        if (!window.confirm('Clear all drawn territories and labels?')) return;
        this.#source.clear();
        this.#configs = [];
        this.#saveConfigsMeta();
        this.#saveTerritories();
        this.#renderConfigList();
        this.#clearSelection();
    }

    #saveTerritories() {
        try {
            const format = new ol.format.GeoJSON();
            const geojson = format.writeFeaturesObject(this.#source.getFeatures(), {
                dataProjection: this.#dataProjection,
                featureProjection: this.#viewProjection
            });
            localStorage.setItem(TerritoryDrawer.#storageKey, JSON.stringify(geojson));
        } catch (e) {
            console.error('Failed to save territories', e);
        }
    }

    #loadTerritories() {
        try {
            const s = localStorage.getItem(TerritoryDrawer.#storageKey);
            if (!s) return;
            const geojson = JSON.parse(s);
            const format = new ol.format.GeoJSON();
            const features = format.readFeatures(geojson, {
                dataProjection: this.#dataProjection,
                featureProjection: this.#viewProjection
            });
            this.#source.addFeatures(features);
        } catch (e) {
            console.error('Failed to load territories', e);
        }
    }

    #downloadBlob(blob, fileName) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
    }

    #exportConfig() {
        try {
            const format = new ol.format.GeoJSON();
            const territories = format.writeFeaturesObject(this.#source.getFeatures(), {
                dataProjection: this.#dataProjection,
                featureProjection: this.#viewProjection
            });

            const view = this.#map.getView();
            const center = ol.proj.transform(view.getCenter(), this.#viewProjection, this.#dataProjection);

            const config = {
                type: 'jcservermap-config',
                version: 1,
                territories: territories,
                view: {
                    centerX: Math.round(center[0]),
                    centerZ: Math.round(center[1]),
                    zoom: view.getZoom()
                }
            };

            const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
            this.#downloadBlob(blob, `map-config-${Date.now()}.json`);
            Unmined.toast('Map config saved');
        } catch (e) {
            console.error('Failed to save map config', e);
            Unmined.toast('Failed to save map config');
        }
    }

    // Adds a config's territories/view to the map, tagging features with a configId so they can be managed/deleted together.
    #applyConfig(config, name) {
        const territoriesGeojson = config.territories ?? config;

        const format = new ol.format.GeoJSON();
        const features = format.readFeatures(territoriesGeojson, {
            dataProjection: this.#dataProjection,
            featureProjection: this.#viewProjection
        });

        const id = crypto.randomUUID ? crypto.randomUUID() : `cfg-${Date.now()}-${Math.round(Math.random() * 1e6)}`;
        features.forEach(f => f.set('configId', id));

        this.#source.addFeatures(features);
        this.#configs.push({ id, name });
        this.#saveConfigsMeta();
        this.#saveTerritories();
        this.#renderConfigList();

        if (config.view) {
            const view = this.#map.getView();
            const center = ol.proj.transform(
                [config.view.centerX, config.view.centerZ],
                this.#dataProjection,
                this.#viewProjection
            );
            view.setCenter(center);
            if (typeof config.view.zoom === 'number') view.setZoom(config.view.zoom);
        }

        return id;
    }

    #importConfig(evt) {
        const file = evt.target.files && evt.target.files[0];
        evt.target.value = '';
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => {
            try {
                const config = JSON.parse(reader.result);
                const name = file.name.replace(/\.[^/.]+$/, '') || `Config ${this.#configs.length + 1}`;
                this.#applyConfig(config, name);
                Unmined.toast(`Loaded "${name}"`);
            } catch (e) {
                console.error('Failed to load map config', e);
                Unmined.toast('Invalid map config file');
            }
        };
        reader.readAsText(file);
    }

    #takeSnapshot() {
        const map = this.#map;
        map.once('rendercomplete', () => {
            try {
                const mapCanvas = document.createElement('canvas');
                const size = map.getSize();
                mapCanvas.width = size[0];
                mapCanvas.height = size[1];
                const mapContext = mapCanvas.getContext('2d');

                map.getViewport().querySelectorAll('.ol-layer canvas, canvas').forEach((canvas) => {
                    if (canvas.width <= 0) return;

                    const opacity = canvas.parentNode.style.opacity || canvas.style.opacity;
                    mapContext.globalAlpha = opacity === '' ? 1 : Number(opacity);

                    const transform = canvas.style.transform;
                    const matrix = transform
                        ? transform.match(/^matrix\(([^\(]*)\)$/)[1].split(',').map(Number)
                        : [1, 0, 0, 1, 0, 0];

                    mapContext.setTransform(...matrix);
                    mapContext.drawImage(canvas, 0, 0);
                });

                mapContext.globalAlpha = 1;
                mapContext.setTransform(1, 0, 0, 1, 0, 0);

                this.#showSnapshotModal(mapCanvas.toDataURL('image/png'));
            } catch (e) {
                console.error('Failed to capture screenshot', e);
                Unmined.toast('Failed to capture screenshot');
            }
        });
        map.renderSync();
    }

    #createSnapshotModal(mapElement) {
        const overlay = document.createElement('div');
        overlay.className = 'territory-modal-overlay';
        overlay.addEventListener('click', (evt) => {
            if (evt.target === overlay) this.#hideSnapshotModal();
        });

        const modal = document.createElement('div');
        modal.className = 'territory-modal';

        const header = document.createElement('div');
        header.className = 'territory-modal-header';

        const title = document.createElement('span');
        title.textContent = 'Screenshot';

        const closeButton = document.createElement('button');
        closeButton.type = 'button';
        closeButton.className = 'territory-btn';
        closeButton.title = 'Close';
        closeButton.textContent = 'X';
        closeButton.addEventListener('click', () => this.#hideSnapshotModal());

        header.appendChild(title);
        header.appendChild(closeButton);

        const hint = document.createElement('div');
        hint.className = 'territory-label territory-modal-hint';
        hint.textContent = 'Right-click (or press and hold) the image and choose "Save image as..." to save it.';

        const img = document.createElement('img');
        img.className = 'territory-modal-image';
        img.alt = 'Map screenshot';

        modal.appendChild(header);
        modal.appendChild(hint);
        modal.appendChild(img);
        overlay.appendChild(modal);

        mapElement.appendChild(overlay);

        this.#snapshotOverlay = overlay;
        this.#snapshotImage = img;
    }

    #showSnapshotModal(dataUrl) {
        this.#snapshotImage.src = dataUrl;
        this.#snapshotOverlay.classList.add('territory-modal-visible');
    }

    #hideSnapshotModal() {
        this.#snapshotOverlay.classList.remove('territory-modal-visible');
        this.#snapshotImage.src = '';
    }

}

class Unmined {

    olMap = null;

    gridLayer = null;
    coordinateLayer = null;
    viewProjection = null;
    dataProjection = null;
    regionMap = null;
    markersLayer = null;
    playerMarkersLayer = null;

    #scaleLine = null;
    #options = null;

    static defaultOptions = {
        enableGrid: true,
        showGrid: true,
        binaryGrid: true,
        showScaleBar: true,
        denseGrid: false,
        showMarkers: true,
        showPlayers: true,
        centerX: 0,
        centerZ: 0
    }

    constructor(mapElement, options, regions) {

        const worldTileSize = 256;

        this.#options = { ...Unmined.defaultOptions, ...options };

        this.loadSettings();

        const worldMinX = this.#options.minRegionX * 512;
        const worldMinZ = this.#options.minRegionZ * 512;
        const worldWidth = (this.#options.maxRegionX + 1 - this.#options.minRegionX) * 512;
        const worldHeight = (this.#options.maxRegionZ + 1 - this.#options.minRegionZ) * 512;

        this.regionMap = new RegionMap(regions, worldTileSize, worldMinX, worldMinZ, worldWidth, worldHeight);

        const dpiScale = window.devicePixelRatio ?? 1.0;

        this.#initProjections(
            Math.max(
                Math.abs(worldMinX),
                Math.abs(worldMinZ),
                Math.abs(worldMinX + worldWidth),
                Math.abs(worldMinX + worldHeight)
            )
        );
        const mapExtent = ol.proj.transformExtent(
            ol.extent.boundingExtent([
                [worldMinX, worldMinZ],
                [worldMinX + worldWidth, worldMinZ + worldHeight]]),
            this.dataProjection,
            this.viewProjection);

        const mapZoomLevels = this.#options.maxZoom - this.#options.minZoom;
        const resolutions = new Array(mapZoomLevels + 1);
        for (let z = 0; z <= mapZoomLevels; ++z) {

            let b = 1 * Math.pow(2, mapZoomLevels - z - this.#options.maxZoom);
            b = ol.proj.transform([b, b], this.dataProjection, this.viewProjection)[0];
            resolutions[z] = b * dpiScale;
        }


        var tileGrid = new ol.tilegrid.TileGrid({
            extent: mapExtent,
            origin: [0, 0],
            resolutions: resolutions,
            tileSize: worldTileSize / dpiScale
        });

        var unminedLayer =
            new ol.layer.Tile({
                source: new ol.source.XYZ({
                    projection: this.viewProjection,
                    tileGrid: tileGrid,
                    tilePixelRatio: dpiScale,
                    tileSize: worldTileSize / dpiScale,

                    tileUrlFunction: (coordinate) => {
                        const tileX = coordinate[1];
                        const tileY = coordinate[2];

                        const worldZoom = -(mapZoomLevels - coordinate[0]) + this.#options.maxZoom;

                        if (this.regionMap.hasTile(tileX, tileY, worldZoom)) {
                            const url = ('tiles/zoom.{z}/{xd}/{yd}/tile.{x}.{y}.' + this.#options.imageFormat)
                                .replace('{z}', worldZoom)
                                .replace('{yd}', Math.floor(tileY / 10))
                                .replace('{xd}', Math.floor(tileX / 10))
                                .replace('{y}', tileY)
                                .replace('{x}', tileX);
                            return url;
                        }
                        else
                            return undefined;
                    }
                })
            });

        var mousePositionControl = new ol.control.MousePosition({
            coordinateFormat: ol.coordinate.createStringXY(0),
            projection: this.dataProjection
        });

        const map = new ol.Map({
            target: mapElement,
            controls: ol.control.defaults.defaults().extend([
                mousePositionControl
            ]),
            layers: [
                unminedLayer,
                /*
                new ol.layer.Tile({
                    source: new ol.source.TileDebug({
                        tileGrid: unminedTileGrid,
                        projection: viewProjection
                    })
                })
                */

            ],
            view: new ol.View({
                center: ol.proj.transform([this.#options.centerX, this.#options.centerZ], this.dataProjection, this.viewProjection),
                extent: mapExtent,
                projection: this.viewProjection,
                resolutions: tileGrid.getResolutions(),
                maxZoom: mapZoomLevels,
                zoom: mapZoomLevels - this.#options.maxZoom,
                constrainResolution: true,
                showFullExtent: true,
                constrainOnlyCenter: true,
                enableRotation: false
            })
        });

        if (this.#options.markers && this.#options.markers.length > 0) {
            this.markersLayer = this.createMarkersLayer(this.#options.markers);
            map.addLayer(this.markersLayer);
        }

        if (this.#options.playerMarkers && this.#options.playerMarkers.length > 0) {
            this.playerMarkersLayer = this.createMarkersLayer(this.#options.playerMarkers);
            map.addLayer(this.playerMarkersLayer);
        }

        if (this.#options.background) {
            mapElement.style.backgroundColor = this.#options.background;
        }

        this.olMap = map;

        this.updateGraticule();
        this.updateScaleBar();
        this.updateMarkersLayer();
        this.updatePlayerMarkersLayer();
        this.olMap.addControl(this.createContextMenu());

        this.redDotMarker = new RedDotMarker(this.olMap, this.dataProjection, this.viewProjection);
        this.territoryDrawer = new TerritoryDrawer(this.olMap, mapElement, this.dataProjection, this.viewProjection, this.#options.minZoom);

        this.centerOnRedDotMarker();
    }

    center(blockCoordinates) {
        const view = this.olMap.getView();
        const v = ol.proj.transform(blockCoordinates, this.dataProjection, this.viewProjection);
        view.setCenter(v);
    }

    centerOnRedDotMarker() {                
        const c = this.redDotMarker.getCoordinates();
        if (!c) return;
        
        this.center(c);
    }

    placeRedDotMarker(coordinates) {
        this.redDotMarker.setCoordinates(coordinates);
    }

    createMarkersLayer(markers) {
        var features = [];

        for (var i = 0; i < markers.length; i++) {
            var item = markers[i];
            var longitude = item.x;
            var latitude = item.z;

            var feature = new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.transform([longitude, latitude], this.dataProjection, this.viewProjection))
            });

            var style = new ol.style.Style();
            if (item.image)
                style.setImage(new ol.style.Icon({
                    src: item.image,
                    anchor: item.imageAnchor,
                    scale: item.imageScale
                }));

            if (item.text) {
                style.setText(new ol.style.Text({
                    text: item.text,
                    font: item.font,
                    offsetX: item.offsetX,
                    offsetY: item.offsetY,
                    fill: item.textColor ? new ol.style.Fill({
                        color: item.textColor
                    }) : null,
                    padding: item.textPadding ?? [2, 4, 2, 4],
                    stroke: item.textStrokeColor ? new ol.style.Stroke({
                        color: item.textStrokeColor,
                        width: item.textStrokeWidth
                    }) : null,
                    backgroundFill: item.textBackgroundColor ? new ol.style.Fill({
                        color: item.textBackgroundColor
                    }) : null,
                    backgroundStroke: item.textBackgroundStrokeColor ? new ol.style.Stroke({
                        color: item.textBackgroundStrokeColor,
                        width: item.textBackgroundStrokeWidth
                    }) : null,
                }));
            }

            feature.setStyle(style);

            features.push(feature);
        }

        var vectorSource = new ol.source.Vector({
            features: features
        });

        var vectorLayer = new ol.layer.Vector({
            source: vectorSource
        });
        return vectorLayer;
    }

    static defaultPlayerMarkerStyle = {
        image: "playerimages/default.png",
        imageAnchor: [0.5, 0.5],
        imageScale: 0.25,

        textColor: "white",
        offsetX: 0,
        offsetY: 20,
        font: "14px Arial",
        //textStrokeColor: "black",
        //textStrokeWidth: 2,
        textBackgroundColor: "#00000088",
        //textBackgroundStrokeColor: "black",
        //textBackgroundStrokeWidth: 1,
        textPadding: [2, 4, 2, 4],
    }

    static playerToMarker(player) {
        var marker = Object.assign({}, Unmined.defaultPlayerMarkerStyle);
        marker.x = player.x;
        marker.z = player.z;
        marker.text = player.name;
        return marker;
    }

    static createPlayerMarkers(players) {
        let markers = players.map(player => Unmined.playerToMarker(player));
        return markers;
    }

    updateGraticule() {
        if (!this.olMap) return;

        if (this.gridLayer) this.olMap.removeLayer(this.gridLayer);
        if (this.coordinateLayer) this.olMap.removeLayer(this.coordinateLayer);

        this.gridLayer = null;
        if (!this.#options.enableGrid) return;

        this.gridLayer = this.#createGraticuleLayer(false);
        this.coordinateLayer = this.#createGraticuleLayer(true);

        this.gridLayer?.setVisible(this.#options.showGrid);
        this.coordinateLayer?.setVisible(this.#options.showGrid);

        this.gridLayer.setZIndex(500);
        this.coordinateLayer.setZIndex(10000);

        this.olMap.addLayer(this.gridLayer);
        this.olMap.addLayer(this.coordinateLayer);
    }

    #createGraticuleLayer(coord) {
        const bgColor = "#ffffff";
        const fgColor = "#222222";

        const intervalCount = this.olMap.getView().getMaxZoom() + 2;
        const graticuleIntervals = new Array(intervalCount);

        if (this.#options.binaryGrid) {
            let base = 16;
            for (let z = 0; z < intervalCount; ++z) {
                const intervalInBlocks = base;
                const intervalInDegrees = ol.proj.transform([intervalInBlocks, intervalInBlocks], this.dataProjection, this.viewProjection)[0];
                graticuleIntervals[intervalCount - 1 - z] = intervalInDegrees;
                base *= 2;
            }
        } else {
            const factors = [1, 2, 5];
            let base = 10;
            let factorIndex = 0;
            for (let z = 0; z < intervalCount; ++z) {
                const intervalInBlocks = base * factors[factorIndex++ % factors.length]
                const intervalInDegrees = ol.proj.transform([intervalInBlocks, intervalInBlocks], this.dataProjection, this.viewProjection)[0];
                graticuleIntervals[intervalCount - 1 - z] = intervalInDegrees;
                if (factorIndex % factors.length == 0) base *= 10;
            }
        }

        const graticuleLabelStyle = new ol.style.Text({
            //font: '14px "Finlandica"',
            font: '14px sans-serif',
            placement: "point",
            //fill: new ol.style.Fill({ color: fgColor }),
            //stroke: new ol.style.Stroke({ color: bgColor, width: 20 }),

            fill: new ol.style.Fill({ color: "#fff" }),
            stroke: new ol.style.Stroke({ color: "#000", width: 2 }),

            //padding: [10, 10],
            //backgroundFill: new ol.style.Fill({ color: bgColor }),
            //backgroundStroke: new ol.style.Stroke({ color: fgColor, width: 20 }),
        });

        const graticuleLonLabelStyle = graticuleLabelStyle.clone()
        graticuleLonLabelStyle.setOffsetY(10)

        const graticuleLatLabelStyle = graticuleLabelStyle.clone()
        graticuleLatLabelStyle.setOffsetX(-2)
        graticuleLatLabelStyle.setTextAlign('right')

        const graticuleStrokeStyle = coord
            ? new ol.style.Stroke({
                color: 'rgba(0, 0, 0, 0)',
                width: 0
            })
            : new ol.style.Stroke({
                //color: 'rgba(255,255,255,.6)',
                color: 'rgb(0,0,0)',
                width: .5,
                //lineDash: [2, 4],
            })

        const graticuleLayer = new ol.layer.Graticule({
            strokeStyle: graticuleStrokeStyle,
            showLabels: coord,
            wrapX: false,
            targetSize: this.#options.denseGrid ? 60 : 120,
            intervals: graticuleIntervals,
            lonLabelFormatter: coord ? (lon) => {
                const c = new ol.geom.Point(ol.proj.transform([lon, 0], this.viewProjection, this.dataProjection)).getFirstCoordinate()
                let l = Math.round(c[0])
                if (l == 0) return "x = 0";
                return l.toString()
            } : undefined,
            latLabelFormatter: coord ? (lat) => {
                const c = new ol.geom.Point(ol.proj.transform([0, lat], this.viewProjection, this.dataProjection)).getFirstCoordinate()
                let l = Math.round(c[1])
                if (l == 0) return "z = 0";
                return l.toString()
            } : undefined,
            lonLabelStyle: coord ? graticuleLonLabelStyle : undefined,
            latLabelStyle: coord ? graticuleLatLabelStyle : undefined,
            lonLabelPosition: 1, // 0 = bottom, 1 = top
            latLabelPosition: 1, // 0 = left, 1 = right                        
        })
        return graticuleLayer
    }

    static copyToClipboard(text, toast) {
        if (!navigator || !navigator.clipboard || !navigator.clipboard.writeText) {
            Unmined.toast('Clipboard is not accessible')
            return;
        }

        navigator.clipboard.writeText(text);
        Unmined.toast(toast ?? "Copied!");
    }

    static toast(message) {
        Toastify({
            text: message,
            duration: 2000,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`                        
        }).showToast();
    }


    createContextMenu() {
        const contextmenu = new ContextMenu({
            width: 220,
            defaultItems: false,
            items: [],
        });
        contextmenu.on('open', (evt) => {
            const coordinates = ol.proj.transform(this.olMap.getEventCoordinate(evt.originalEvent), this.viewProjection, this.dataProjection);

            coordinates[0] = Math.round(coordinates[0]);
            coordinates[1] = Math.round(coordinates[1]);

            contextmenu.clear();
            contextmenu.push({
                text: `Copy /tp ${coordinates[0]} ~ ${coordinates[1]}`,
                callback: () => {
                    Unmined.copyToClipboard(`/tp ${coordinates[0]} ~ ${coordinates[1]}`);
                }
            })
            contextmenu.push('-');

            contextmenu.push({
                text: `Place red dot marker here`,
                classname: 'menuitem-reddot',
                callback: () => {
                    this.placeRedDotMarker(coordinates);
                }
            });
            if (this.redDotMarker.getCoordinates()) {
                contextmenu.push({
                    text: `Copy marker link`,
                    callback: () => {
                        Unmined.copyToClipboard(window.location.href);
                    }
                });
                contextmenu.push({
                    text: `Clear marker`,
                    callback: () => {
                        this.placeRedDotMarker(undefined);
                    }
                });
            }
            contextmenu.push('-');

            if (this.playerMarkersLayer) {
                contextmenu.push(
                    {
                        classname: this.#options.showPlayers ? 'menuitem-checked' : 'menuitem-unchecked',
                        text: 'Show players',
                        callback: () => this.togglePlayers()
                    })
            }

            if (this.markersLayer) {
                contextmenu.push(
                    {
                        classname: this.#options.showMarkers ? 'menuitem-checked' : 'menuitem-unchecked',
                        text: 'Show markers',
                        callback: () => this.toggleMarkers()
                    })
            }


            if (this.markersLayer || this.playerMarkersLayer) {
                contextmenu.push('-');
            }

            if (this.#options.enableGrid) {
                contextmenu.push(
                    {
                        classname: this.#options.showGrid ? 'menuitem-checked' : 'menuitem-unchecked',
                        text: 'Show grid',
                        callback: () => this.toggleGrid()
                    })
                contextmenu.push(
                    {
                        classname: this.#options.denseGrid ? 'menuitem-checked' : 'menuitem-unchecked',
                        text: 'Dense grid',
                        callback: () => this.toggleGridInterval()
                    })
                contextmenu.push(
                    {
                        classname: this.#options.binaryGrid ? 'menuitem-checked' : 'menuitem-unchecked',
                        text: 'Binary coordinates',
                        callback: () => this.toggleBinaryGrid()
                    })
            }

            contextmenu.push(
                {
                    classname: this.#options.showScaleBar ? 'menuitem-checked' : 'menuitem-unchecked',
                    text: 'Show scalebar',
                    callback: () => this.toggleScaleBar()
                })


        })
        return contextmenu;
    }

    toggleGridInterval() {
        this.#options.denseGrid = !this.#options.denseGrid;
        this.updateGraticule();
        this.saveSettings();
    }

    toggleBinaryGrid() {
        this.#options.binaryGrid = !this.#options.binaryGrid;
        this.updateGraticule();
        this.saveSettings();
    }

    toggleGrid() {
        this.#options.showGrid = !this.#options.showGrid;
        this.updateGraticule();
        this.saveSettings();
    }

    toggleScaleBar() {
        this.#options.showScaleBar = !this.#options.showScaleBar;
        this.updateScaleBar();
        this.saveSettings();
    }

    toggleMarkers() {
        this.#options.showMarkers = !this.#options.showMarkers;
        this.updateMarkersLayer();
        this.saveSettings();
    }

    togglePlayers() {
        this.#options.showPlayers = !this.#options.showPlayers;
        this.updatePlayerMarkersLayer();
        this.saveSettings();
    }

    loadSettings() {
        const mapSettings = (() => {
            try {
                const s = localStorage.getItem("mapSettings");
                if (!s) return undefined;
                return JSON.parse(s);
            } catch {
                return undefined;
            }
        })();

        if (!mapSettings) return;
        this.#options.showScaleBar = mapSettings.showScaleBar ?? this.#options.showScaleBar;
        this.#options.showGrid = mapSettings.showGrid ?? this.#options.showGrid;
        this.#options.binaryGrid = mapSettings.binaryGrid ?? this.#options.binaryGrid;
        this.#options.denseGrid = mapSettings.denseGrid ?? this.#options.denseGrid;
        this.#options.showMarkers = mapSettings.showMarkers ?? this.#options.showMarkers;
        this.#options.showPlayers = mapSettings.showPlayers ?? this.#options.showPlayers;

    }

    saveSettings() {
        const mapSettings = {
            showScaleBar: this.#options.showScaleBar,
            showGrid: this.#options.showGrid,
            binaryGrid: this.#options.binaryGrid,
            denseGrid: this.#options.denseGrid,
            showMarkers: this.#options.showMarkers,
            showPlayers: this.#options.showPlayers,
        }
        localStorage.setItem("mapSettings", JSON.stringify(mapSettings))
    }

    updateMarkersLayer() {
        this.markersLayer?.setVisible(this.#options.showMarkers);
    }

    updatePlayerMarkersLayer() {
        this.playerMarkersLayer?.setVisible(this.#options.showPlayers);
    }

    updateScaleBar() {
        if (!this.#options.showScaleBar && this.#scaleLine) {
            this.olMap.removeControl(this.#scaleLine)
            this.#scaleLine = undefined;
        }
        else if (this.#options.showScaleBar && !this.#scaleLine) {
            this.#scaleLine = new ol.control.ScaleLine({
                bar: true,
                minWidth: 200,
            });
            this.olMap.addControl(this.#scaleLine);

        }
    }

    #initProjections(maxCoordValue) {
        const blocksPerDegrees = Math.max(30000000, maxCoordValue) / 270;
        const radius = 270;

        this.viewProjection = new ol.proj.Projection({
            code: 'VIEW',
            units: 'degrees',
            extent: [-radius, -radius, +radius, +radius],
            worldExtent: [-radius, -radius, +radius, +radius],
            global: true,
            //metersPerUnit: 1 * blocksPerDegrees
        });

        this.dataProjection = new ol.proj.Projection({
            code: 'DATA',
            units: 'pixels',
            metersPerUnit: 1
        });

        // Coordinate transformation between view and data
        // OpenLayers Y is positive up, world Y is positive down
        ol.proj.addCoordinateTransforms(this.viewProjection, this.dataProjection,
            function (coordinate) {
                return [coordinate[0] * blocksPerDegrees, -coordinate[1] * blocksPerDegrees];
            },
            function (coordinate) {
                return [coordinate[0] / blocksPerDegrees, -coordinate[1] / blocksPerDegrees];
            });

    }


}