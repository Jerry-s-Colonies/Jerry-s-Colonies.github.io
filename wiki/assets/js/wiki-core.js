/* ============================================================================
 * THE FRONTIER WIKI — Core Runtime (EN/FR, Dark/Light OreUI, Search, Recipes)
 * ========================================================================== */

(function () {
  "use strict";

  const LANG_KEY = "frontier_wiki_lang";
  const THEME_KEY = "frontier_wiki_theme";
  const VANILLA_BASE = (() => {
    try {
      const s = document.currentScript && document.currentScript.src;
      if (s) return new URL("../vanilla/", s).href;
    } catch {
      /* ignore */
    }
    return "../assets/vanilla/";
  })();

  const ITEM_ABBR = {
    "minecraft:planks": "Planks",
    "minecraft:oak_planks": "Oak Plk",
    "minecraft:log": "Log",
    "minecraft:oak_log": "Oak Log",
    "minecraft:wooden_slab": "Slab",
    "minecraft:cobblestone": "Cobble",
    "minecraft:cobblestone_slab": "Cob.Slb",
    "minecraft:stone_bricks": "StnBrk",
    "minecraft:brick": "Brick",
    "minecraft:iron_ingot": "Iron",
    "minecraft:gold_ingot": "Gold",
    "minecraft:gold_nugget": "G.Nug",
    "minecraft:diamond": "Diamond",
    "minecraft:amethyst_shard": "Ameth.",
    "minecraft:paper": "Paper",
    "minecraft:book": "Book",
    "minecraft:empty_map": "Map",
    "minecraft:lapis_lazuli": "Lapis",
    "minecraft:stick": "Stick",
    "minecraft:wheat": "Wheat",
    "minecraft:wheat_seeds": "Seeds",
    "minecraft:wool": "Wool",
    "minecraft:leather": "Leather",
    "minecraft:feather": "Feather",
    "minecraft:chest": "Chest",
    "minecraft:campfire": "Campfr",
    "minecraft:furnace": "Furnace",
    "minecraft:crafting_table": "CraftTbl",
    "minecraft:iron_pickaxe": "I.Pick",
    "minecraft:iron_axe": "I.Axe",
    "minecraft:iron_hoe": "I.Hoe",
    "minecraft:iron_sword": "I.Sword",
    "minecraft:bow": "Bow",
    "minecraft:arrow": "Arrow",
    "minecraft:hay_block": "HayBlk",
    "minecraft:glass_bottle": "Bottle",
    "minecraft:honey_bottle": "Honey",
    "minecraft:dandelion": "Dandel.",
    "minecraft:charcoal": "Charcl",
    "minecraft:apple": "Apple",
    "minecraft:bowl": "Bowl",
    "minecraft:brown_mushroom": "B.Mush",
    "minecraft:short_grass": "Grass",
    "minecraft:slime_ball": "Slime",
    "minecraft:fermented_spider_eye": "F.Eye",
    "minecraft:blaze_powder": "BlazeP",
    "minecraft:dye": "Dye",
    "minecraft:fence": "Fence",
    "minecraft:iron_block": "IronBlk",
    "minecraft:stone": "Stone",
    "minecraft:bedrock": "Bedrock",
    "minecraft:string": "String",
    "minecraft:gunpowder": "Powder",
    "minecraft:clay_ball": "Clay",
    "minecraft:ender_pearl": "Pearl",
    "minecraft:stone_button": "Button",
    "minecraft:flint": "Flint",
    "minecraft:redstone": "Redstn",
    "minecraft:white_wool": "W.Wool",
  };

  const MEM_STORE = {};
  function safeGet(key) {
    try {
      return window.localStorage.getItem(key);
    } catch {
      return MEM_STORE[key] ?? null;
    }
  }
  function safeSet(key, val) {
    MEM_STORE[key] = val;
    try {
      window.localStorage.setItem(key, val);
    } catch {
      /* file:// or restricted storage */
    }
  }

  function getLang() {
    const v = safeGet(LANG_KEY);
    return v === "fr" ? "fr" : "en";
  }

  function setLang(lang) {
    const next = lang === "fr" ? "fr" : "en";
    safeSet(LANG_KEY, next);
    applyStaticTranslations(next);
    window.dispatchEvent(new CustomEvent("frontier:langchange", { detail: { lang: next } }));
    return next;
  }

  function getTheme() {
    const v = safeGet(THEME_KEY);
    return v === "light" ? "light" : "dark";
  }

  function setTheme(theme) {
    const next = theme === "light" ? "light" : "dark";
    safeSet(THEME_KEY, next);
    if (next === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    const btn = document.getElementById("btnThemeToggle");
    if (btn) {
      const lang = getLang();
      btn.textContent = next === "light"
        ? (lang === "fr" ? "Sombre" : "Dark")
        : (lang === "fr" ? "Clair" : "Light");
    }
    return next;
  }

  function t(val) {
    if (val === null || val === undefined) return "";
    if (typeof val === "string") return val;
    const lang = getLang();
    return val[lang] ?? val.en ?? val.fr ?? "";
  }

  function escapeHtml(str) {
    return String(str ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function applyStaticTranslations(lang) {
    document.documentElement.lang = lang;
    const nodes = document.querySelectorAll("[data-en], [data-fr]");
    for (const el of nodes) {
      const text = lang === "fr" ? el.getAttribute("data-fr") : el.getAttribute("data-en");
      if (text !== null) el.textContent = text;
    }
    const phNodes = document.querySelectorAll("[data-ph-en], [data-ph-fr]");
    for (const el of phNodes) {
      const ph = lang === "fr" ? el.getAttribute("data-ph-fr") : el.getAttribute("data-ph-en");
      if (ph !== null) el.setAttribute("placeholder", ph);
    }
    const langBtn = document.getElementById("btnLangToggle");
    if (langBtn) {
      langBtn.textContent = lang === "fr" ? "EN / FR [FR]" : "EN / FR [EN]";
    }
    setTheme(getTheme());
  }

  function formatIngredientLabel(rawId) {
    if (!rawId) return "";
    if (ITEM_ABBR[rawId]) return ITEM_ABBR[rawId];
    const clean = String(rawId).replace(/^(minecraft:|jn:|tag:)/, "");
    if (clean.includes("_fence")) return "Fence";
    if (clean.includes("dye")) return clean.replace("_dye", "").slice(0, 6) + " Dye";
    if (clean.includes("planks")) return "Planks";
    return clean.replace(/_/g, " ").slice(0, 10);
  }

  function renderRecipeHtml(recipe, catalog, assetBase) {
    if (!recipe) return "";
    const cells = new Array(9).fill("");
    if (recipe.type === "shaped" && Array.isArray(recipe.pattern)) {
      for (let r = 0; r < Math.min(3, recipe.pattern.length); r++) {
        const row = recipe.pattern[r] || "";
        for (let c = 0; c < Math.min(3, row.length); c++) {
          const ch = row[c];
          if (ch && ch !== " " && recipe.key && recipe.key[ch]) {
            cells[r * 3 + c] = recipe.key[ch];
          }
        }
      }
    } else if (recipe.type === "shapeless" && Array.isArray(recipe.ingredients)) {
      for (let i = 0; i < Math.min(9, recipe.ingredients.length); i++) {
        cells[i] = recipe.ingredients[i];
      }
    }

    const renderSlot = (itemId, count, extraClass) => {
      if (!itemId) return `<div class="craft-slot ${extraClass || ""}"></div>`;
      const jnItem = catalog?.byId?.[itemId];
      const vanillaFile = window.FRONTIER_VANILLA_ICONS && window.FRONTIER_VANILLA_ICONS[itemId];
      let inner = "";
      if (jnItem?.render3d) {
        inner = `<img src="${assetBase}${jnItem.render3d}" alt="${escapeHtml(itemId)}" title="${escapeHtml(itemId)}">`;
      } else if (jnItem?.icon) {
        inner = `<img src="${assetBase}${jnItem.icon}" alt="${escapeHtml(itemId)}" title="${escapeHtml(itemId)}">`;
      } else if (vanillaFile) {
        inner = `<img src="${VANILLA_BASE}${vanillaFile}" alt="${escapeHtml(itemId)}" title="${escapeHtml(itemId)}">`;
      } else {
        inner = `<span class="slot-abbr" title="${escapeHtml(itemId)}">${escapeHtml(formatIngredientLabel(itemId))}</span>`;
      }
      const badge = count && count > 1 ? `<span class="craft-count">${count}</span>` : "";
      return `<div class="craft-slot ${extraClass || ""}" title="${escapeHtml(itemId)}">${inner}${badge}</div>`;
    };

    if (recipe.type === "stonecutter") {
      const ing = recipe.ingredients?.[0] || "";
      return `
        <div class="recipe-box">
          ${renderSlot(ing, 1)}
          <span class="craft-arrow" title="Stonecutter">&#10142;</span>
          ${renderSlot(recipe.resultItem, recipe.resultCount || 1, "craft-output")}
        </div>
      `;
    }

    return `
      <div class="recipe-box">
        <div class="craft-grid">
          ${cells.map((id) => renderSlot(id, 1)).join("")}
        </div>
        <span class="craft-arrow">&#10142;</span>
        ${renderSlot(recipe.resultItem, recipe.resultCount || 1, "craft-output")}
      </div>
    `;
  }

  function initThemeAndLangControls() {
    setTheme(getTheme());
    applyStaticTranslations(getLang());

    const langBtn = document.getElementById("btnLangToggle");
    if (langBtn) {
      langBtn.addEventListener("click", () => {
        setLang(getLang() === "en" ? "fr" : "en");
      });
    }
    const themeBtn = document.getElementById("btnThemeToggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        setTheme(getTheme() === "dark" ? "light" : "dark");
      });
    }
  }

  window.FrontierWiki = {
    getLang,
    setLang,
    getTheme,
    setTheme,
    t,
    escapeHtml,
    applyStaticTranslations,
    renderRecipeHtml,
    initThemeAndLangControls,
  };
})();
