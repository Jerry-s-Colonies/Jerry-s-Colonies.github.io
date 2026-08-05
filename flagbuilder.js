// flagbuilder.js
// Recreates the in-game colony flag customizer (JCBP/scripts/ui/flagCustomizerUI.js)
// as a web UI so players can assemble a flag from the same background / border / emblem
// layers and export the result as a PNG.

(function () {
    "use strict";

    // ---- Data tables, mirrored 1:1 from flagCustomizerUI.js ---------------

    const BG_NAMES = [
        "White", "Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink",
        "Black", "Gray", "Light Gray", "Brown", "Cyan", "Light Blue", "Lime", "Magenta",
        "Bangladesh", "Brazil", "China", "Colombia", "DR Congo", "Egypt", "Ethiopia",
        "France", "Germany", "India", "Indonesia", "Iran", "Italy", "Japan", "Kenya",
        "Mexico", "Myanmar", "Nigeria", "Pakistan", "Philippines", "Russia",
        "South Africa", "South Korea", "Spain", "Tanzania", "Thailand", "Turkey",
        "United Kingdom", "United States", "Vietnam", "Poland", "Canada", "New Zealand",
        "Greece", "Sweden", "Australia", "Together", "Hope", "Intelligent", "Free",
        "Friendly", "Funity", "Power", "Strength", "Legion", "Minute", "Order", "Control",
        "Bandit", "Marauder", "Flower", "Symbol", "Dark", "Nature", "Solar", "Holy", "Sea", "Royal",
        "Jeffycat - Blue", "Jeffycat - Green", "Jeffycat - Yellow", "Jeffycat - Orange",
        "Jeffycat - Purple", "Jeffycat - Pink", "Jeffycat - Red", "Jeffycat - Gray",
        "Jeffycat - White", "Jeffycat - Brown", "Jeffycat - Cyan", "Jeffycat - Line",
        "Smooth - Black", "Smooth - Blue", "Smooth - Brown", "Smooth - Cyan",
        "Smooth - Green", "Smooth - Grey", "Smooth - Light Blue", "Smooth - Light Green",
        "Smooth - Orange", "Smooth - Pink", "Smooth - Purple", "Smooth - White", "Smooth - Yellow"
    ];

    const BG_GROUPS = [
        { label: "Solid Colors", start: 0, end: 15 },
        { label: "National Flags", start: 16, end: 51 },
        { label: "Themes", start: 52, end: 73 },
        { label: "Jeffycat Pack", start: 74, end: 85 },
        { label: "Smooth Pack", start: 86, end: 98 },
    ];

    const BORDER_TYPES = [
        { name: "None", index: 0, folder: null, colors: null },
        { name: "Classic", index: 1, folder: "classic", colors: ["Black", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Red", "Gray", "White", "Brown", "Cyan", "Light Blue", "Lime"] },
        { name: "Flutted", index: 15, folder: "flutted", colors: ["White", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Red", "Gray", "Brown", "Cyan", "Light Blue", "Lime", "Black"] },
        { name: "Stripped", index: 29, folder: "stripped", colors: ["White", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Red", "Gray", "Brown", "Cyan", "Light Blue", "Lime", "Black"] },
        { name: "Framed", index: 43, folder: "framed", colors: ["White", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Red", "Gray", "Brown", "Cyan", "Light Blue", "Lime", "Black"] },
    ];

    const EMBLEM_OPTIONS = ["None"];
    for (let i = 1; i <= 32; i++) EMBLEM_OPTIONS.push("Emblem " + i);

    // ---- Asset path resolvers ----------------------------------------------

    function slug(name) {
        return name.toLowerCase().replace(/\s+/g, "_");
    }

    const BG_SPECIAL_FILES = { Bandit: "banditflag", Marauder: "marauderflag", Symbol: "symbol" };

    function bgImagePath(index) {
        const name = BG_NAMES[index];
        if (name.startsWith("Jeffycat - ")) {
            return "flags/bg/jeffycat/" + slug(name.slice("Jeffycat - ".length)) + ".png";
        }
        if (name.startsWith("Smooth - ")) {
            return "flags/bg/smooth/" + slug(name.slice("Smooth - ".length)) + ".png";
        }
        if (BG_SPECIAL_FILES[name]) {
            return "flags/bg/" + BG_SPECIAL_FILES[name] + ".png";
        }
        return "flags/bg/f" + slug(name) + ".png";
    }

    function colorSlug(color) {
        return color === "Light Blue" ? "lblue" : color.toLowerCase();
    }

    function borderTypeForIndex(index) {
        for (let i = BORDER_TYPES.length - 1; i >= 0; i--) {
            const t = BORDER_TYPES[i];
            if (t.colors && index >= t.index) return t;
        }
        return BORDER_TYPES[0];
    }

    function borderImagePath(index) {
        if (index === 0) return null;
        const t = borderTypeForIndex(index);
        const color = t.colors[index - t.index];
        return "flags/border/" + t.folder + "/" + colorSlug(color) + ".png";
    }

    function borderName(index) {
        if (index === 0) return "None";
        const t = borderTypeForIndex(index);
        return t.name + " - " + t.colors[index - t.index];
    }

    function emblemImagePath(index) {
        return "flags/emblem/emblem" + index + ".png";
    }

    // ---- State --------------------------------------------------------------

    const state = { bg: 0, border: 0, emblem: 0 };

    // ---- DOM setup ------------------------------------------------------------

    document.addEventListener("DOMContentLoaded", () => {
        const bgSelect = document.getElementById("bg-select");
        const borderStyleSelect = document.getElementById("border-style-select");
        const borderColorSelect = document.getElementById("border-color-select");
        const emblemSelect = document.getElementById("emblem-select");
        const summary = document.getElementById("flag-summary");
        const previewCanvas = document.getElementById("preview-canvas");
        const bgLayer = document.getElementById("layer-bg");
        const borderLayer = document.getElementById("layer-border");
        const emblemLayer = document.getElementById("layer-emblem");
        const randomizeBtn = document.getElementById("randomize-btn");
        const resetBtn = document.getElementById("reset-btn");
        const exportBtn = document.getElementById("export-btn");
        const saveStickerBtn = document.getElementById("save-sticker-btn");

        // Populate background select with optgroups
        BG_GROUPS.forEach(group => {
            const optgroup = document.createElement("optgroup");
            optgroup.label = group.label;
            for (let i = group.start; i <= group.end; i++) {
                const opt = document.createElement("option");
                opt.value = String(i);
                opt.textContent = BG_NAMES[i];
                optgroup.appendChild(opt);
            }
            bgSelect.appendChild(optgroup);
        });

        // Populate border style select
        BORDER_TYPES.forEach((t, i) => {
            const opt = document.createElement("option");
            opt.value = String(i);
            opt.textContent = t.name;
            borderStyleSelect.appendChild(opt);
        });

        // Populate emblem select
        EMBLEM_OPTIONS.forEach((name, i) => {
            const opt = document.createElement("option");
            opt.value = String(i);
            opt.textContent = name;
            emblemSelect.appendChild(opt);
        });

        function populateBorderColors(typeIndex) {
            borderColorSelect.innerHTML = "";
            const t = BORDER_TYPES[typeIndex];
            if (!t.colors) {
                borderColorSelect.disabled = true;
                const opt = document.createElement("option");
                opt.textContent = "-";
                borderColorSelect.appendChild(opt);
                return;
            }
            borderColorSelect.disabled = false;
            t.colors.forEach((c, i) => {
                const opt = document.createElement("option");
                opt.value = String(t.index + i);
                opt.textContent = c;
                borderColorSelect.appendChild(opt);
            });
        }

        // The bg/border/emblem source PNGs are 128x128 sprite sheets that each embed the
        // actual flag artwork as a small icon at a fixed offset, not a full-canvas image.
        // Background swatches live in one region; border + emblem art share another.
        const BG_CROP = { x: 48, y: 48, w: 46, h: 32 };
        const FRAME_CROP = { x: 0, y: 96, w: 46, h: 32 };

        // Native flag resolution, matching the real 3:2 aspect ratio of the cropped artwork.
        const NATIVE_W = BG_CROP.w;
        const NATIVE_H = BG_CROP.h;
        // Final export is upscaled from the native canvas for a crisper, more shareable image.
        const EXPORT_SCALE = 40;
        // Map stickers only need to look crisp at map-marker size, so a smaller upscale is enough.
        const STICKER_SCALE = 8;
        // Shared with unmined.js/TerritoryDrawer - both pages are same-origin, so localStorage bridges them.
        const STICKER_LIBRARY_KEY = "jcServerMapFlagStickers";

        function activeLayers() {
            const layers = [{ img: bgLayer, crop: BG_CROP }];
            if (borderImagePath(state.border)) layers.push({ img: borderLayer, crop: FRAME_CROP });
            if (state.emblem !== 0) layers.push({ img: emblemLayer, crop: FRAME_CROP });
            return layers;
        }

        function waitForLayers(layers) {
            return Promise.all(layers.map(({ img }) => (img.complete && img.naturalWidth)
                ? Promise.resolve()
                : new Promise(res => { img.onload = res; img.onerror = res; })));
        }

        // Composites the active layers onto a single native-resolution canvas, shared by the preview and export.
        function compositeNative() {
            const layers = activeLayers();
            return waitForLayers(layers).then(() => {
                const canvas = document.createElement("canvas");
                canvas.width = NATIVE_W;
                canvas.height = NATIVE_H;
                const ctx = canvas.getContext("2d");
                ctx.imageSmoothingEnabled = false;
                layers.forEach(({ img, crop }) => ctx.drawImage(img, crop.x, crop.y, crop.w, crop.h, 0, 0, NATIVE_W, NATIVE_H));
                return canvas;
            });
        }

        function updatePreview() {
            compositeNative().then(nativeCanvas => {
                previewCanvas.width = NATIVE_W;
                previewCanvas.height = NATIVE_H;
                const ctx = previewCanvas.getContext("2d");
                ctx.imageSmoothingEnabled = false;
                ctx.clearRect(0, 0, NATIVE_W, NATIVE_H);
                ctx.drawImage(nativeCanvas, 0, 0);
            });
        }

        function render() {
            bgLayer.src = bgImagePath(state.bg);

            const bPath = borderImagePath(state.border);
            if (bPath) borderLayer.src = bPath;

            emblemLayer.src = emblemImagePath(state.emblem);

            summary.textContent =
                "Background: " + BG_NAMES[state.bg] + "\n" +
                "Border: " + borderName(state.border) + "\n" +
                "Emblem: " + (state.emblem === 0 ? "None" : "Emblem " + state.emblem);

            updatePreview();
        }

        bgSelect.addEventListener("change", () => {
            state.bg = parseInt(bgSelect.value, 10);
            render();
        });

        borderStyleSelect.addEventListener("change", () => {
            const typeIndex = parseInt(borderStyleSelect.value, 10);
            populateBorderColors(typeIndex);
            const t = BORDER_TYPES[typeIndex];
            state.border = t.colors ? t.index : 0;
            render();
        });

        borderColorSelect.addEventListener("change", () => {
            state.border = parseInt(borderColorSelect.value, 10);
            render();
        });

        emblemSelect.addEventListener("change", () => {
            state.emblem = parseInt(emblemSelect.value, 10);
            render();
        });

        randomizeBtn.addEventListener("click", () => {
            state.bg = Math.floor(Math.random() * BG_NAMES.length);
            const typeIndex = Math.floor(Math.random() * BORDER_TYPES.length);
            const t = BORDER_TYPES[typeIndex];
            state.border = t.colors ? t.index + Math.floor(Math.random() * t.colors.length) : 0;
            state.emblem = Math.floor(Math.random() * EMBLEM_OPTIONS.length);

            bgSelect.value = String(state.bg);
            borderStyleSelect.value = String(typeIndex);
            populateBorderColors(typeIndex);
            borderColorSelect.value = String(state.border);
            emblemSelect.value = String(state.emblem);
            render();
        });

        resetBtn.addEventListener("click", () => {
            state.bg = 0;
            state.border = 0;
            state.emblem = 0;
            bgSelect.value = "0";
            borderStyleSelect.value = "0";
            populateBorderColors(0);
            emblemSelect.value = "0";
            render();
        });

        exportBtn.addEventListener("click", () => {
            compositeNative().then(nativeCanvas => {
                const exportCanvas = document.createElement("canvas");
                exportCanvas.width = NATIVE_W * EXPORT_SCALE;
                exportCanvas.height = NATIVE_H * EXPORT_SCALE;
                const exportCtx = exportCanvas.getContext("2d");
                exportCtx.imageSmoothingEnabled = false;
                exportCtx.drawImage(nativeCanvas, 0, 0, exportCanvas.width, exportCanvas.height);

                const link = document.createElement("a");
                link.download = "colony-flag.png";
                link.href = exportCanvas.toDataURL("image/png");
                link.click();
            });
        });

        function flagLabel() {
            const borderText = state.border === 0 ? "" : " / " + borderName(state.border);
            const emblemText = state.emblem === 0 ? "" : " / Emblem " + state.emblem;
            return BG_NAMES[state.bg] + borderText + emblemText;
        }

        function loadStickerLibrary() {
            try {
                const s = localStorage.getItem(STICKER_LIBRARY_KEY);
                return s ? JSON.parse(s) : [];
            } catch (e) {
                console.error("Failed to load sticker library", e);
                return [];
            }
        }

        saveStickerBtn.addEventListener("click", () => {
            compositeNative().then(nativeCanvas => {
                const stickerCanvas = document.createElement("canvas");
                stickerCanvas.width = NATIVE_W * STICKER_SCALE;
                stickerCanvas.height = NATIVE_H * STICKER_SCALE;
                const stickerCtx = stickerCanvas.getContext("2d");
                stickerCtx.imageSmoothingEnabled = false;
                stickerCtx.drawImage(nativeCanvas, 0, 0, stickerCanvas.width, stickerCanvas.height);

                const library = loadStickerLibrary();
                library.push({
                    id: crypto.randomUUID ? crypto.randomUUID() : "sticker-" + Date.now() + "-" + Math.round(Math.random() * 1e6),
                    name: flagLabel(),
                    dataUrl: stickerCanvas.toDataURL("image/png")
                });

                try {
                    localStorage.setItem(STICKER_LIBRARY_KEY, JSON.stringify(library));
                    const original = saveStickerBtn.textContent;
                    saveStickerBtn.textContent = "Saved!";
                    setTimeout(() => { saveStickerBtn.textContent = original; }, 1200);
                } catch (e) {
                    console.error("Failed to save sticker", e);
                    window.alert("Failed to save sticker (storage may be full).");
                }
            });
        });

        // Initial population + render
        populateBorderColors(0);
        render();
    });
})();
