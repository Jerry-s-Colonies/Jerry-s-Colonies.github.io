class NetherbeamMarker {
    static dataUrl = 'netherbeam.json';
    static cacheKey = 'netherbeamPosition';
    static refreshInterval = 5 * 60 * 1000;
    static rotationPeriod = 60;

    // FrontierEngine publishes {"x": number, "z": number} whenever the beam moves.
    static parsePosition(data) {
        if (!data || !Number.isFinite(data.x) || !Number.isFinite(data.z)) return null;
        return [data.x, data.z];
    }

    constructor(unmined) {
        let rotation = 0;
        let previousTime;
        let feature;
        let geometry;
        let icon;

        const place = (position) => {
            const coordinates = ol.proj.transform(position, unmined.dataProjection, unmined.viewProjection);
            if (feature) {
                geometry.setCoordinates(coordinates);
                return;
            }
            geometry = new ol.geom.Point(coordinates);
            icon = new ol.style.Icon({
                src: 'assets/icons/netherbeam.png',
                anchor: [0.5, 0.5],
                scale: 1
            });
            feature = new ol.Feature({ geometry });
            feature.setStyle(new ol.style.Style({ image: icon }));

            if (!unmined.markersLayer) {
                unmined.markersLayer = unmined.createMarkersLayer([]);
                unmined.olMap.addLayer(unmined.markersLayer);
            }
            unmined.markersLayer.getSource().addFeature(feature);
            unmined.updateMarkersLayer();
            requestAnimationFrame(animate);
        };

        const animate = (time) => {
            // Avoid a jump when returning from a hidden or suspended tab.
            const elapsed = previousTime === undefined ? 0 : Math.min((time - previousTime) / 1000, 0.25);
            previousTime = time;
            rotation = (rotation + elapsed * Math.PI * 2 / NetherbeamMarker.rotationPeriod) % (Math.PI * 2);
            icon.setRotation(rotation);
            feature.changed();
            requestAnimationFrame(animate);
        };

        const refresh = async () => {
            try {
                const response = await fetch(`${NetherbeamMarker.dataUrl}?t=${Date.now()}`, { cache: 'no-store' });
                if (!response.ok) throw new Error(`Nether beam request failed: ${response.status}`);
                const position = NetherbeamMarker.parsePosition(await response.json());
                if (!position) throw new Error('Invalid published Nether beam position');
                place(position);
                try {
                    localStorage.setItem(NetherbeamMarker.cacheKey, JSON.stringify({ x: position[0], z: position[1] }));
                } catch (error) {
                    console.warn('Unable to cache the Nether beam position.', error);
                }
            } catch (error) {
                console.warn('Unable to refresh the Nether beam position; keeping the last known location.', error);
            }
        };

        let cachedPosition;
        try {
            const cached = localStorage.getItem(NetherbeamMarker.cacheKey);
            if (cached !== null) {
                cachedPosition = NetherbeamMarker.parsePosition(JSON.parse(cached));
                if (!cachedPosition) throw new Error('Invalid cached Nether beam position');
            }
        } catch (error) {
            console.warn('Unable to load the cached Nether beam position.', error);
        }
        if (cachedPosition) place(cachedPosition);

        refresh();
        setInterval(refresh, NetherbeamMarker.refreshInterval);
    }
}
