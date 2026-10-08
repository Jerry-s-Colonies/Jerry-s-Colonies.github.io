class NetherbeamMarker {
    static radius = 10000;
    static speed = 0.05; // Three Minecraft blocks per minute.
    static rotationPeriod = 60;

    static randomPosition() {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.sqrt(Math.random()) * NetherbeamMarker.radius;
        return [Math.cos(angle) * radius, Math.sin(angle) * radius];
    }

    constructor(unmined) {
        let position = NetherbeamMarker.randomPosition();
        let destination = NetherbeamMarker.randomPosition();
        let directionTime = 0;
        let directionDuration = 45 + Math.random() * 45;
        let rotation = 0;
        let previousTime;

        const geometry = new ol.geom.Point(
            ol.proj.transform(position, unmined.dataProjection, unmined.viewProjection)
        );
        const icon = new ol.style.Icon({
            src: 'assets/icons/netherbeam.png',
            anchor: [0.5, 0.5],
            scale: 1
        });
        const feature = new ol.Feature({ geometry });
        feature.setStyle(new ol.style.Style({ image: icon }));

        if (!unmined.markersLayer) {
            unmined.markersLayer = unmined.createMarkersLayer([]);
            unmined.olMap.addLayer(unmined.markersLayer);
        }
        unmined.markersLayer.getSource().addFeature(feature);
        unmined.updateMarkersLayer();

        const animate = (time) => {
            // Avoid a jump when returning from a hidden or suspended tab.
            const elapsed = previousTime === undefined ? 0 : Math.min((time - previousTime) / 1000, 0.25);
            previousTime = time;
            directionTime += elapsed;

            if (directionTime >= directionDuration) {
                destination = NetherbeamMarker.randomPosition();
                directionTime = 0;
                directionDuration = 45 + Math.random() * 45;
            }

            const dx = destination[0] - position[0];
            const dz = destination[1] - position[1];
            const distance = Math.hypot(dx, dz);
            if (distance > 0) {
                // A segment between points inside the disk cannot cross its boundary.
                const fraction = Math.min(NetherbeamMarker.speed * elapsed / distance, 1);
                position = [position[0] + dx * fraction, position[1] + dz * fraction];
                geometry.setCoordinates(
                    ol.proj.transform(position, unmined.dataProjection, unmined.viewProjection)
                );
            }

            rotation = (rotation + elapsed * Math.PI * 2 / NetherbeamMarker.rotationPeriod) % (Math.PI * 2);
            icon.setRotation(rotation);
            feature.changed();
            requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }
}
