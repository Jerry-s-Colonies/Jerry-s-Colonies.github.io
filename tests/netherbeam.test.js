const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

function createMarker(existingLayer = false, edgeStart = false) {
    let seed = 12345;
    const math = Object.create(Math);
    math.random = () => {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
    };
    class Point {
        constructor(coordinates) { this.coordinates = coordinates; }
        setCoordinates(coordinates) { this.coordinates = coordinates; }
    }
    class Icon {
        constructor(options) { Object.assign(this, options); this.rotation = 0; }
        setRotation(rotation) { this.rotation = rotation; }
    }
    class Style {
        constructor(options) { Object.assign(this, options); }
    }
    class Feature {
        constructor(options) { Object.assign(this, options); }
        setStyle(style) { this.style = style; }
        changed() {}
    }
    const features = [];
    const layer = { getSource: () => ({ addFeature: feature => features.push(feature) }) };
    const layers = [];
    let visibilityUpdates = 0;
    let frame;
    const context = vm.createContext({
        Math: math,
        ol: {
            geom: { Point }, style: { Icon, Style }, Feature,
            proj: { transform: ([x, z]) => [x / 100, -z / 100] }
        },
        requestAnimationFrame: callback => { frame = callback; }
    });
    vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'netherbeam.js'), 'utf8'), context);
    if (edgeStart) {
        vm.runInContext(`
            const randomPosition = NetherbeamMarker.randomPosition;
            NetherbeamMarker.randomPosition = () => {
                NetherbeamMarker.randomPosition = randomPosition;
                return [10000, 0];
            };
        `, context);
    }
    const unmined = {
        dataProjection: 'DATA', viewProjection: 'VIEW',
        markersLayer: existingLayer ? layer : null,
        createMarkersLayer: () => layer,
        olMap: { addLayer: value => layers.push(value) },
        updateMarkersLayer: () => { visibilityUpdates++; }
    };
    context.unmined = unmined;
    vm.runInContext('new NetherbeamMarker(unmined)', context);
    return {
        feature: features[0], layers, visibilityUpdates, context,
        tick: time => frame(time),
        position: () => {
            const [x, y] = features[0].geometry.coordinates;
            return [x * 100, -y * 100];
        }
    };
}

test('adds a centered 32px marker and preserves the marker visibility control', () => {
    for (const existing of [false, true]) {
        const marker = createMarker(existing);
        assert.equal(marker.layers.length, existing ? 0 : 1);
        assert.equal(marker.visibilityUpdates, 1);
        const icon = marker.feature.style.image;
        assert.equal(icon.src, 'assets/icons/netherbeam.png');
        assert.equal(icon.scale, 1);
        assert.deepEqual(Array.from(icon.anchor), [0.5, 0.5]);
    }
});

test('moves at three blocks per minute and rotates once per minute', () => {
    const marker = createMarker();
    marker.tick(0);
    const start = marker.position();
    for (let i = 1; i <= 120; i++) marker.tick(i * 250);
    const end = marker.position();
    assert.ok(Math.abs(Math.hypot(end[0] - start[0], end[1] - start[1]) - 1.5) < 1e-8);
    assert.ok(Math.abs(marker.feature.style.image.rotation - Math.PI) < 1e-10);
    assert.equal(marker.feature.style.image.scale, 1);
    marker.tick(3600000);
    const resumed = marker.position();
    assert.ok(Math.hypot(resumed[0] - end[0], resumed[1] - end[1]) <= 0.01250001);
});

test('spawns and wanders within the 10000-block disk, including its edge', () => {
    const marker = createMarker(false, true);
    assert.ok(Math.hypot(...marker.position()) <= 10000);
    marker.tick(0);
    let previous = marker.position();
    let changedDirection = false;
    let previousHeading;
    for (let i = 1; i <= 100000; i++) {
        marker.tick(i * 250);
        const position = marker.position();
        assert.ok(Math.hypot(...position) <= 10000 + 1e-8);
        const dx = position[0] - previous[0];
        const dz = position[1] - previous[1];
        assert.ok(Math.hypot(dx, dz) <= 0.01250001);
        const heading = Math.atan2(dz, dx);
        if (previousHeading !== undefined && Math.abs(heading - previousHeading) > 0.01) changedDirection = true;
        previousHeading = heading;
        previous = position;
    }
    assert.ok(changedDirection);
});
