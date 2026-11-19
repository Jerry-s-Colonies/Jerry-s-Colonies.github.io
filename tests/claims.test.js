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
    }
    class VectorSource {
        constructor() { this.features = []; }
        clear() { this.features = []; }
        addFeatures(features) { this.features.push(...features); }
        getFeatures() { return this.features; }
    }
    class VectorLayer {
        constructor({ source }) { this.source = source; }
        getSource() { return this.source; }
        setZIndex() {}
        setVisible(value) { this.visible = value; }
        changed() {}
    }
    class Feature {
        constructor(properties) { this.properties = properties; }
        get(name) { return this.properties[name]; }
        setStyle(style) { this.style = style; }
    }
    class Style {
        constructor(options) { Object.assign(this, options); }
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
    const storage = new Map();
    let response = { cellSize: 100, nations: [nation] };
    const unmined = {
        updateNationClaims() { this.nationClaims.updateSettings(settings); },
        olMap: {
            addLayer() {},
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
            geom: { Point: Style, Polygon: Style },
            proj: { transform: coordinates => coordinates }
        }
    });
    vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'claims.js'), 'utf8'), context);
    vm.runInContext("NationClaims.composeFlag = async () => 'data:image/png;base64,test'; var claims = new NationClaims(unmined);", context);
    await new Promise(resolve => setImmediate(resolve));
    return {
        claims: context.claims, settings, listeners, storage,
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
