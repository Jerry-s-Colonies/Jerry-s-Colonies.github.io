const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const publishedNation = {
    id: 'nation', name: 'Test Nation', leaderName: 'Leader_123', memberCount: 27, treasury: 0,
    color: '#cc3333', flag: [['base', 'crimson']], capital: { x: 0, z: 0 }, claims: [[0, 0]]
};

async function setup(nation = publishedNation, savedSettings = {}) {
    class Element {
        constructor() { this.children = []; this.events = {}; this.open = false; }
        append(...children) { this.children.push(...children); }
        replaceChildren() { this.children = []; }
        setAttribute() {}
        addEventListener(name, callback) { this.events[name] = callback; }
        showModal() { this.open = true; }
        close() { this.open = false; }
        getContext() { return { measureText: text => ({ width: text.length * 8 }) }; }
    }
    class VectorSource {
        constructor() { this.features = []; }
        clear() { this.features = []; }
        addFeatures(features) { this.features.push(...features); }
        getFeatures() { return this.features; }
    }
    class VectorLayer {
        constructor({ source, declutter }) { this.source = source; this.declutter = declutter; }
        getSource() { return this.source; }
        setZIndex() {}
        setVisible(value) { this.visible = value; }
        changed() {}
    }
    class Feature {
        constructor(properties) { this.properties = properties; }
        get(name) { return this.properties[name]; }
        getGeometry() { return this.properties.geometry; }
        setStyle(style) { this.style = style; }
    }
    class Style {
        constructor(options) { Object.assign(this, options); }
        getImage() { return this.image; }
        getText() { return this.text; }
        setScale(scale) { this.scale = scale; }
        setFont(font) { this.font = font; }
        setOffsetY(offset) { this.offsetY = offset; }
    }
    class Geometry {
        constructor(coordinates) { this.coordinates = coordinates; }
        getCoordinates() { return this.coordinates; }
        setCoordinates(coordinates) { this.coordinates = coordinates; }
    }
    class Color {
        constructor(options) { Object.assign(this, options); }
        setColor(color) { this.color = color; }
    }
    const settings = {
        showMarkers: true, showNationFlags: true, showNationNames: true,
        showTerritories: true, territoryOpacity: 0.22, ...savedSettings
    };
    const listeners = {};
    const viewListeners = {};
    const view = {
        zoom: 0, resolution: 64,
        on(name, callback) { viewListeners[name] = callback; },
        getZoom() { return this.zoom; },
        getResolution() { return this.resolution; }
    };
    const storage = new Map();
    let response = { cellSize: 100, nations: [nation] };
    const unmined = {
        updateNationClaims() { this.nationClaims.updateSettings(settings); },
        olMap: {
            addLayer() {},
            getView() { return view; },
            on(name, callback) { listeners[name] = callback; },
            forEachFeatureAtPixel(pixel, callback, options) {
                assert.equal(options.layerFilter(unmined.nationClaims.markersLayer), true);
                assert.equal(options.layerFilter(unmined.nationClaims.claimsLayer), false);
                return callback(unmined.nationClaims.markersLayer.getSource().getFeatures()[0]);
            }
        }
    };
    const context = vm.createContext({
        unmined,
        document: { createElement: () => new Element(), body: new Element() },
        console,
        setInterval() {},
        localStorage: { getItem: () => null, setItem: (key, value) => storage.set(key, value) },
        fetch: async () => ({ ok: true, json: async () => response }),
        ol: {
            source: { Vector: VectorSource }, layer: { Vector: VectorLayer }, Feature,
            style: { Style, Fill: Color, Stroke: Color, Icon: Style, Text: Style },
            geom: { Point: Geometry, Polygon: Geometry, LineString: Geometry },
            proj: { transform: coordinates => coordinates }
        }
    });
    vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'claims.js'), 'utf8'), context);
    vm.runInContext("NationClaims.composeFlag = async () => 'data:image/png;base64,test'; var claims = new NationClaims(unmined);", context);
    await new Promise(resolve => setImmediate(resolve));
    return {
        claims: context.claims, settings, listeners, storage, view, viewListeners, unmined,
        refresh: async next => { response = next; await context.claims.refresh(); }
    };
}

test('clicking a nation marker displays public details, including a zero balance', async () => {
    const { claims, listeners } = await setup();
    listeners.singleclick({ pixel: [0, 0] });
    assert.equal(claims.detailsDialog.open, true);
    assert.equal(claims.detailsTitle.textContent, 'Test Nation');
    assert.deepEqual(claims.detailsList.children.map(child => child.textContent),
        ['Leader', 'Leader_123', 'Members', '27', 'Treasury', '0 coins']);
    claims.detailsDialog.children.at(-1).events.click();
    assert.equal(claims.detailsDialog.open, false);
});

test('old snapshots show unavailable statistics, not fabricated zeros or markup', async () => {
    const nation = { ...publishedNation, name: '<img src=x>', leaderName: '', memberCount: undefined, treasury: undefined };
    const { claims } = await setup(nation);
    claims.showDetails(nation);
    assert.equal(claims.detailsTitle.textContent, '<img src=x>');
    assert.deepEqual(claims.detailsList.children.map(child => child.textContent),
        ['Leader', 'Unavailable', 'Members', 'Unavailable', 'Treasury', 'Unavailable']);
});

test('saved overlay choices and opacity apply to asynchronous renders and refreshes', async () => {
    const { claims, settings, refresh } = await setup(publishedNation, {
        showNationFlags: false, territoryOpacity: 0.67
    });
    const marker = () => claims.markersLayer.getSource().getFeatures()[0];
    assert.equal(marker().style.length, 1);
    assert.equal(marker().style[0].text.text, 'Test Nation');
    assert.equal(claims.territoryStyles[0].fill.color, 'rgba(204, 51, 51, 0.67)');
    settings.showNationFlags = true;
    settings.showNationNames = false;
    claims.updateSettings(settings);
    assert.equal(marker().style.length, 1);
    assert.equal(marker().style[0].image.src, 'data:image/png;base64,test');
    settings.showMarkers = false;
    settings.territoryOpacity = 0;
    claims.updateSettings(settings);
    assert.equal(claims.markersLayer.visible, false);
    assert.equal(claims.claimsLayer.visible, false);
    await refresh({ cellSize: 100, nations: [{ ...publishedNation, memberCount: 30, treasury: -20 }] });
    assert.equal(claims.markersLayer.visible, false);
    assert.equal(claims.claimsLayer.visible, false);
    settings.showMarkers = true;
    settings.showNationFlags = false;
    settings.showNationNames = true;
    settings.territoryOpacity = 1;
    claims.updateSettings(settings);
    assert.equal(claims.markersLayer.visible, true);
    assert.equal(claims.claimsLayer.visible, true);
    assert.equal(claims.territoryStyles[0].fill.color, 'rgba(204, 51, 51, 1)');
    claims.showDetails(marker().get('nation'));
    assert.equal(claims.detailsList.children.at(-1).textContent, '-20 coins');
});

test('dark nation labels have readable contrast while keeping their hue and territory color', async () => {
    for (const color of ['#000000', '#36454f', '#4b0082', '#000080', '#8e4585', '#0047ab', '#008080', '#a52a2a']) {
        const { claims } = await setup({ ...publishedNation, color });
        const marker = claims.markersLayer.getSource().getFeatures()[0];
        const textColor = marker.get('nameStyle').text.fill.color;
        const channels = textColor.slice(1).match(/../g).map(channel => parseInt(channel, 16));
        const linear = channels.map(channel => {
            const value = channel / 255;
            return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
        });
        const contrast = (0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2] + 0.05) / 0.05;
        assert.ok(contrast >= 7, `${color} became ${textColor}, with only ${contrast}:1 contrast`);
        if (color === '#000000') assert.equal(textColor, '#ffffff');
        if (color === '#4b0082') {
            assert.ok(channels[2] > channels[0] && channels[0] > channels[1], 'Dark purple should remain purple');
        }
        assert.equal(claims.territoryStyles[0].fill.color, `rgba(${[
            color.slice(1, 3), color.slice(3, 5), color.slice(5, 7)
        ].map(channel => parseInt(channel, 16)).join(', ')}, 0.22)`);
        assert.equal(marker.get('nation').color, color);
        assert.equal(marker.get('flagStyle').image.src, 'data:image/png;base64,test');
    }
});

test('already bright nation text colors stay unchanged', async () => {
    for (const color of ['#ffffff', '#ffbf00', '#50c878', '#87ceeb']) {
        const { claims } = await setup({ ...publishedNation, color });
        const marker = claims.markersLayer.getSource().getFeatures()[0];
        assert.equal(marker.get('nameStyle').text.fill.color, color);
    }
});

test('crowded nations shrink and stay close to their capitals without overlapping', async () => {
    const { claims, refresh, settings, view, viewListeners } = await setup();
    const nations = Array.from({ length: 5 }, (_, i) => ({
        ...publishedNation, id: `nation-${i}`, name: `Nation ${i}`
    }));
    await refresh({ cellSize: 100, nations });
    const markers = claims.markersLayer.getSource().getFeatures();
    assert.notEqual(claims.markersLayer.declutter, true);

    let initialPositions;
    for (const [zoom, resolution] of [[0, 64], [4, 4], [6, 1], [0, 64]]) {
        view.zoom = zoom;
        view.resolution = resolution;
        viewListeners['change:resolution']();
        const rectangles = markers.map(marker => {
            const flag = marker.get('flagStyle').image;
            const text = marker.get('nameStyle').text;
            assert.ok(marker.style.includes(marker.get('flagStyle')));
            assert.ok(marker.style.includes(marker.get('nameStyle')));
            assert.equal(text.scale, flag.scale);
            assert.equal(text.offsetY, 12 * flag.scale);
            const [x, y] = marker.getGeometry().getCoordinates();
            const [anchorX, anchorY] = marker.get('anchorCoordinate');
            const dx = (x - anchorX) / resolution, up = (y - anchorY) / resolution;
            assert.ok(Math.hypot(dx, up) <= 8);
            assert.ok(flag.scale > 0 && flag.scale < 1);
            const width = (Math.max(64, marker.get('nation').name.length * 8 + 3) + 4) * flag.scale;
            return { left: dx - width / 2, right: dx + width / 2,
                top: -up - 42 * flag.scale, bottom: -up + 21 * flag.scale };
        });
        for (let i = 0; i < rectangles.length; i++) {
            for (let j = 0; j < i; j++) {
                const a = rectangles[i], b = rectangles[j];
                assert.ok(a.right <= b.left || a.left >= b.right || a.bottom <= b.top || a.top >= b.bottom);
            }
        }
        const positions = markers.map(marker => [...marker.getGeometry().getCoordinates()]);
        if (!initialPositions) initialPositions = positions;
        else if (zoom === 0) assert.deepEqual(positions, initialPositions);
    }
    settings.showNationNames = false;
    claims.updateSettings(settings);
    assert.ok(markers.every(marker => marker.style.length === 1 && marker.style[0] === marker.get('flagStyle')));
    settings.showNationNames = true;
    settings.showNationFlags = false;
    claims.updateSettings(settings);
    assert.ok(markers.every(marker => !marker.style.includes(marker.get('flagStyle'))));
    settings.showNationNames = false;
    claims.updateSettings(settings);
    assert.ok(markers.every(marker => marker.style.length === 0));
});

test('isolated nations retain their normal size and exact capital position', async () => {
    const { claims, view, viewListeners } = await setup();
    view.zoom = 6;
    view.resolution = 1;
    viewListeners['change:resolution']();
    const marker = claims.markersLayer.getSource().getFeatures()[0];
    assert.equal(marker.get('flagStyle').image.scale, 1);
    assert.deepEqual(marker.getGeometry().getCoordinates(), marker.get('anchorCoordinate'));
});

test('clicks prefer an exact marker hit over nearby markers', async () => {
    const { claims, listeners, unmined } = await setup();
    const tolerances = [];
    unmined.olMap.forEachFeatureAtPixel = (pixel, callback, options) => {
        tolerances.push(options.hitTolerance);
        return callback({ get: () => ({ ...publishedNation, name: options.hitTolerance ? 'Nearby' : 'Exact' }) });
    };
    listeners.singleclick({ pixel: [0, 0] });
    assert.equal(claims.detailsTitle.textContent, 'Exact');
    assert.deepEqual(tolerances, [0]);
});
