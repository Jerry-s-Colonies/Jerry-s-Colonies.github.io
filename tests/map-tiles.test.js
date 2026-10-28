const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const context = {};
vm.runInNewContext(
    fs.readFileSync(path.join(root, 'unmined.map.properties.js'), 'utf8'),
    context
);
const properties = context.UnminedMapProperties;

test('configured zoom levels match the published tile directories', () => {
    const zooms = fs.readdirSync(path.join(root, 'tiles'), { withFileTypes: true })
        .filter(entry => entry.isDirectory() && /^zoom\.-?\d+$/.test(entry.name))
        .map(entry => Number(entry.name.slice('zoom.'.length)))
        .sort((a, b) => a - b);
    const expected = Array.from(
        { length: properties.maxZoom - properties.minZoom + 1 },
        (_, index) => properties.minZoom + index
    );

    assert.deepEqual(zooms, expected);
    assert.ok(properties.defaultZoom >= properties.minZoom);
    assert.ok(properties.defaultZoom <= properties.maxZoom);
});

test('published site stays below 1 GB, excluding Git history', () => {
    function sizeOf(directory) {
        return fs.readdirSync(directory, { withFileTypes: true })
            .filter(entry => entry.name !== '.git')
            .reduce((total, entry) => {
                const filename = path.join(directory, entry.name);
                return total + (entry.isDirectory()
                    ? sizeOf(filename)
                    : fs.statSync(filename).size);
            }, 0);
    }

    const bytes = sizeOf(root);
    assert.ok(bytes < 1_000_000_000, `Published site is ${bytes} bytes; must be below 1 GB`);
});
