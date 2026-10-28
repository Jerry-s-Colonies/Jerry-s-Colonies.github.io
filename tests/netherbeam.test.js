const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

async function createMarker({
    existingLayer = false,
    responses = [{ x: 1200, z: -3400 }],
    storage = new Map(),
    storageReadError,
    storageWriteError
} = {}) {
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
    const urls = [];
    const fetchOptions = [];
    const warnings = [];
    const messages = [];
    let visibilityUpdates = 0;
    let refreshInterval;
    let frame;
    let refresh;
    let call = 0;
    const context = vm.createContext({
        ol: {
            geom: { Point }, style: { Icon, Style }, Feature,
            proj: { transform: ([x, z]) => [x / 100, -z / 100] }
        },
        requestAnimationFrame: callback => { frame = callback; },
        setInterval: (callback, interval) => { refresh = callback; refreshInterval = interval; },
        console: {
            warn: (...args) => warnings.push(args),
            info: (...args) => messages.push(args)
        },
        localStorage: {
            getItem: key => {
                if (storageReadError) throw storageReadError;
                return storage.has(key) ? storage.get(key) : null;
            },
            setItem: (key, value) => {
                if (storageWriteError) throw storageWriteError;
                storage.set(key, value);
            }
        },
        fetch: async (url, options) => {
            urls.push(url);
            fetchOptions.push(options);
            const body = responses[Math.min(call++, responses.length - 1)];
            if (body instanceof Error) throw body;
            return { ok: body !== null, json: async () => body };
        }
    });
    vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'netherbeam.js'), 'utf8'), context);
    context.unmined = {
        dataProjection: 'DATA', viewProjection: 'VIEW',
        markersLayer: existingLayer ? layer : null,
        createMarkersLayer: () => layer,
        olMap: { addLayer: value => layers.push(value) },
        updateMarkersLayer: () => { visibilityUpdates++; }
    };
    vm.runInContext('new NetherbeamMarker(unmined)', context);
    const initialPosition = features.length ? Array.from(features[0].geometry.coordinates, value => value * 100) : null;
    if (initialPosition) initialPosition[1] = -initialPosition[1];
    const settle = () => new Promise(resolve => setImmediate(resolve));
    await settle();
    return {
        features, layers, urls, context, settle, storage, warnings, messages, initialPosition, refreshInterval, fetchOptions,
        visibilityUpdates: () => visibilityUpdates,
        refresh: async () => { refresh(); await settle(); },
        tick: time => frame(time),
        position: () => {
            const [x, y] = features[0].geometry.coordinates;
            return [x * 100, -y * 100];
        }
    };
}

test('places a centered 32px marker at the published position and keeps visibility control', async () => {
    for (const existing of [false, true]) {
        const marker = await createMarker({ existingLayer: existing });
        assert.equal(marker.features.length, 1);
        assert.equal(marker.layers.length, existing ? 0 : 1);
        assert.equal(marker.visibilityUpdates(), 1);
        assert.deepEqual(marker.position(), [1200, -3400]);
        const icon = marker.features[0].style.image;
        assert.equal(icon.src, 'assets/icons/netherbeam.png');
        assert.equal(icon.scale, 1);
        assert.deepEqual(Array.from(icon.anchor), [0.5, 0.5]);
        assert.match(marker.urls[0], /^netherbeam\.json\?t=\d+$/);
    }
});

test('shows no marker until a valid position is published', async () => {
    for (const body of [{}, { x: 'a', z: 1 }, null, new Error('offline')]) {
        const marker = await createMarker({ responses: [body] });
        assert.equal(marker.features.length, 0);
        assert.equal(marker.layers.length, 0);
    }
});

test('the unpublished placeholder reports pending publication and continues polling', async () => {
    const marker = await createMarker({ responses: [{}, { x: 10, z: 20 }] });
    assert.equal(marker.warnings.length, 0);
    assert.match(marker.messages[0][0], /has not been published yet/);
    assert.equal(marker.features.length, 0);
    assert.equal(marker.storage.has('netherbeamPosition'), false);
    await marker.refresh();
    assert.deepEqual(marker.position(), [10, 20]);
    assert.deepEqual(JSON.parse(marker.storage.get('netherbeamPosition')), { x: 10, z: 20 });
});

test('an unpublished position preserves the cached location without an invalid-data warning', async () => {
    const cached = JSON.stringify({ x: 0, z: -200 });
    const storage = new Map([['netherbeamPosition', cached]]);
    const marker = await createMarker({ storage, responses: [{}] });
    assert.deepEqual(marker.position(), [0, -200]);
    assert.equal(storage.get('netherbeamPosition'), cached);
    assert.equal(marker.warnings.length, 0);
    assert.equal(marker.messages.length, 1);
});

test('moves the existing marker when the published position changes', async () => {
    const marker = await createMarker({ responses: [{ x: 10, z: 20 }, { x: -500, z: 800 }, new Error('offline')] });
    await marker.refresh();
    assert.equal(marker.features.length, 1);
    assert.deepEqual(marker.position(), [-500, 800]);
    await marker.refresh();
    assert.deepEqual(marker.position(), [-500, 800]);
});

test('stays in place and rotates once per minute', async () => {
    const marker = await createMarker();
    marker.tick(0);
    for (let i = 1; i <= 120; i++) marker.tick(i * 250);
    assert.deepEqual(marker.position(), [1200, -3400]);
    assert.ok(Math.abs(marker.features[0].style.image.rotation - Math.PI) < 1e-10);
});

test('restores the cached position synchronously and still fetches a fresh position on load', async () => {
    const storage = new Map([['netherbeamPosition', JSON.stringify({ x: 10, z: 20 })]]);
    const marker = await createMarker({ storage });
    assert.deepEqual(marker.initialPosition, [10, 20]);
    assert.deepEqual(marker.position(), [1200, -3400]);
    assert.equal(marker.features.length, 1);
    assert.equal(marker.visibilityUpdates(), 1);
    assert.equal(marker.urls.length, 1);
    assert.equal(marker.fetchOptions[0].cache, 'no-store');
    assert.equal(marker.refreshInterval, 5 * 60 * 1000);
    assert.deepEqual(JSON.parse(storage.get('netherbeamPosition')), { x: 1200, z: -3400 });
});

test('persists new locations across reloads and keeps polling after failures', async () => {
    const marker = await createMarker({
        responses: [{ x: 10, z: 20 }, new Error('offline'), { x: -500, z: 800 }]
    });
    await marker.refresh();
    assert.deepEqual(marker.position(), [10, 20]);
    assert.deepEqual(JSON.parse(marker.storage.get('netherbeamPosition')), { x: 10, z: 20 });
    await marker.refresh();
    assert.deepEqual(marker.position(), [-500, 800]);
    const reloaded = await createMarker({ storage: marker.storage, responses: [new Error('offline')] });
    assert.deepEqual(reloaded.initialPosition, [-500, 800]);
    assert.deepEqual(reloaded.position(), [-500, 800]);
    assert.equal(marker.features.length, 1);
});

test('invalid or unavailable updates do not overwrite a valid cached position', async () => {
    for (const body of [[], '', false, { updated: 'incomplete' }, { x: 1 }, { z: 2 }, { x: 'a', z: 1 }, { x: Infinity, z: 2 }, null, new Error('offline')]) {
        const cached = JSON.stringify({ x: 0, z: -200 });
        const storage = new Map([['netherbeamPosition', cached]]);
        const marker = await createMarker({ storage, responses: [body] });
        assert.deepEqual(marker.position(), [0, -200]);
        assert.equal(storage.get('netherbeamPosition'), cached);
        assert.equal(marker.warnings.length, 1);
    }
});

test('invalid cached data is reported and replaced by a valid published position', async () => {
    for (const cached of ['{broken', 'null', '{}', '{"x":"10","z":20}']) {
        const storage = new Map([['netherbeamPosition', cached]]);
        const marker = await createMarker({ storage });
        assert.equal(marker.initialPosition, null);
        assert.deepEqual(marker.position(), [1200, -3400]);
        assert.deepEqual(JSON.parse(storage.get('netherbeamPosition')), { x: 1200, z: -3400 });
        assert.equal(marker.warnings.length, 1);
    }
});

test('storage failures are reported without preventing live updates', async () => {
    for (const errors of [
        { storageReadError: new Error('storage blocked') },
        { storageWriteError: new Error('storage full') }
    ]) {
        const marker = await createMarker({
            ...errors,
            responses: [{ x: 10, z: 20 }, { x: -500, z: 800 }]
        });
        assert.deepEqual(marker.position(), [10, 20]);
        await marker.refresh();
        assert.deepEqual(marker.position(), [-500, 800]);
        assert.equal(marker.features.length, 1);
        assert.ok(marker.warnings.length > 0);
    }
});
