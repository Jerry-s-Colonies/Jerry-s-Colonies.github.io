/**
 * The Frontier — Shared Nations Utilities (Tiers, XP, Flag Rendering, Role Translations)
 */
(function (global) {
  "use strict";

  const TIER_DEFS = [
    { id: 0, requiredXp: 0, maxMembers: 10, en: "Settlement", fr: "Colonie", badgeCls: "" },
    { id: 1, requiredXp: 500, maxMembers: 15, en: "Commonwealth", fr: "Communaute", badgeCls: "badge-green" },
    { id: 2, requiredXp: 1500, maxMembers: 20, en: "State", fr: "Etat", badgeCls: "badge-green" },
    { id: 3, requiredXp: 3500, maxMembers: 30, en: "Developing State", fr: "Etat en Essor", badgeCls: "badge-blue" },
    { id: 4, requiredXp: 7000, maxMembers: 40, en: "Advanced State", fr: "Etat Avance", badgeCls: "badge-blue" },
    { id: 5, requiredXp: 12000, maxMembers: 50, en: "Nation", fr: "Nation", badgeCls: "badge-blue" },
    { id: 6, requiredXp: 20000, maxMembers: 65, en: "Rising Nation", fr: "Nation Emergente", badgeCls: "badge-gold" },
    { id: 7, requiredXp: 32000, maxMembers: 80, en: "Established Nation", fr: "Nation Etablie", badgeCls: "badge-gold" },
    { id: 8, requiredXp: 50000, maxMembers: 100, en: "Great Nation", fr: "Grande Nation", badgeCls: "badge-crimson" },
    { id: 9, requiredXp: 75000, maxMembers: 150, en: "Superpower", fr: "Superpuissance", badgeCls: "badge-purple" },
  ];

  const MAX_NATION_LEVEL = 100;
  const LEVELS_PER_TIER = 10;

  const ROLE_TRANSLATIONS = {
    // Leader titles
    "ui.jn.title.leader": { en: "Leader", fr: "Dirigeant" },
    "ui.jn.title.king": { en: "King", fr: "Roi" },
    "ui.jn.title.queen": { en: "Queen", fr: "Reine" },
    "ui.jn.title.emperor": { en: "Emperor", fr: "Empereur" },
    "ui.jn.title.empress": { en: "Empress", fr: "Imperatrice" },
    "ui.jn.title.president": { en: "President", fr: "President" },
    "ui.jn.title.president_f": { en: "President (F)", fr: "Presidente" },
    "ui.jn.title.lord": { en: "Lord", fr: "Seigneur" },
    "ui.jn.title.lady": { en: "Lady", fr: "Dame" },
    "ui.jn.title.duke": { en: "Duke", fr: "Duc" },
    "ui.jn.title.duchess": { en: "Duchess", fr: "Duchesse" },
    "ui.jn.title.chancellor": { en: "Chancellor", fr: "Chancelier" },
    "ui.jn.title.governor": { en: "Governor", fr: "Gouverneur" },
    "ui.jn.title.commander": { en: "Commander", fr: "Commandant" },
    "ui.jn.title.mayor": { en: "Mayor", fr: "Maire" },
    "ui.jn.title.sultan": { en: "Sultan", fr: "Sultan" },
    "ui.jn.title.chieftain": { en: "Chieftain", fr: "Chef de Tribu" },
    "ui.jn.title.sovereign": { en: "Sovereign", fr: "Souverain" },
    // Preset member roles
    "ui.jn.roles.preset.leader": { en: "Leader", fr: "Dirigeant" },
    "ui.jn.roles.preset.officer": { en: "Officer", fr: "Officier" },
    "ui.jn.roles.preset.moderator": { en: "Moderator", fr: "Moderateur" },
    "ui.jn.roles.preset.citizen": { en: "Citizen", fr: "Citoyen" },
    "ui.jn.roles.preset.builder": { en: "Architect", fr: "Architecte" },
    "ui.jn.roles.preset.treasurer": { en: "Treasurer", fr: "Tresorier" },
    "ui.jn.roles.preset.guest": { en: "Guest", fr: "Invite" },
    "ui.jn.roles.preset.custom": { en: "Member", fr: "Membre" },
  };

  const DOCTRINE_LABELS = {
    diplomatic: { en: "Peace Council", fr: "Conseil de Paix" },
    military: { en: "Military Pact", fr: "Alliance Militaire" },
    coalition: { en: "Global Coalition", fr: "Coalition Globale" },
  };

  const CATEGORY_LABELS = {
    farming: { en: "Agriculture & Food", fr: "Agriculture & Vivres" },
    construction: { en: "Construction & Stations", fr: "Construction & Stations" },
    diplomacy: { en: "Diplomacy", fr: "Diplomatie" },
    economics: { en: "Economics", fr: "Economie" },
    research: { en: "Research Methods", fr: "Methodes de Recherche" },
    defense: { en: "Defense & Military", fr: "Defense & Armee" },
    misc: { en: "Sanitary & Medicine", fr: "Sante & Medecine" },
  };

  const RESEARCH_TOTAL_IMPLEMENTED = 62;

  function getLevelRequiredXp(globalLevel) {
    const level = Math.max(1, Math.min(MAX_NATION_LEVEL, Math.floor(globalLevel || 1)));
    if (level === 1) return 0;
    const tierIndex = Math.floor((level - 1) / LEVELS_PER_TIER);
    const subLevelIndex = (level - 1) % LEVELS_PER_TIER;
    const currentTier = TIER_DEFS[tierIndex] || TIER_DEFS[0];
    const nextTierXp = tierIndex + 1 < TIER_DEFS.length
      ? TIER_DEFS[tierIndex + 1].requiredXp
      : currentTier.requiredXp + 3000 * LEVELS_PER_TIER;
    const step = Math.round((nextTierXp - currentTier.requiredXp) / LEVELS_PER_TIER);
    return currentTier.requiredXp + subLevelIndex * step;
  }

  function computeGlobalLevel(xp) {
    const val = Math.max(0, Math.floor(Number(xp) || 0));
    for (let lvl = MAX_NATION_LEVEL; lvl >= 1; lvl--) {
      if (val >= getLevelRequiredXp(lvl)) return lvl;
    }
    return 1;
  }

  function getXpProgress(xp, level) {
    const curLvl = Math.max(1, Math.min(MAX_NATION_LEVEL, Math.floor(level || 1)));
    const val = Math.max(0, Math.floor(Number(xp) || 0));
    if (curLvl >= MAX_NATION_LEVEL) return { pct: 100, cur: val, next: getLevelRequiredXp(MAX_NATION_LEVEL) };
    const startXp = getLevelRequiredXp(curLvl);
    const nextXp = getLevelRequiredXp(curLvl + 1);
    const span = Math.max(1, nextXp - startXp);
    const pct = Math.max(0, Math.min(100, Math.round(((val - startXp) / span) * 100)));
    return { pct, cur: val, next: nextXp };
  }

  function getTierMeta(tierId) {
    const idx = Number.isInteger(tierId) ? Math.max(0, Math.min(9, tierId)) : 0;
    return TIER_DEFS[idx] || TIER_DEFS[0];
  }

  const flagImageCache = new Map();
  const composedFlagCache = new Map();

  function loadFlagLayerImg(patternId, colorId) {
    const p = String(patternId || "").replace(/[^a-zA-Z0-9_]/g, "");
    const c = String(colorId || "").replace(/[^a-zA-Z0-9_]/g, "");
    if (!p || !c) return Promise.resolve(null);
    const key = `${p}:${c}`;
    if (flagImageCache.has(key)) return flagImageCache.get(key);
    const prom = new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => resolve(null);
      img.src = `../flags/${p}/${p}_${c}.png`;
    });
    flagImageCache.set(key, prom);
    return prom;
  }

  async function composeFlagUrl(layers, w = 96, h = 60) {
    if (!Array.isArray(layers) || layers.length === 0) return "";
    const cacheKey = `${w}x${h}:${JSON.stringify(layers)}`;
    if (composedFlagCache.has(cacheKey)) return composedFlagCache.get(cacheKey);

    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;

    let drawn = 0;
    for (const layer of layers) {
      if (!Array.isArray(layer) || layer.length < 2) continue;
      const img = await loadFlagLayerImg(layer[0], layer[1]);
      if (!img) continue;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      drawn++;
    }
    const dataUrl = drawn > 0 ? canvas.toDataURL() : "";
    composedFlagCache.set(cacheKey, dataUrl);
    return dataUrl;
  }

  function resolveLeaderTitleDisplay(leaderTitle, lang) {
    const l = lang === "fr" ? "fr" : "en";
    if (!leaderTitle || typeof leaderTitle !== "object") {
      return ROLE_TRANSLATIONS["ui.jn.title.leader"][l];
    }
    if (leaderTitle.type === "custom" && typeof leaderTitle.customText === "string" && leaderTitle.customText.trim()) {
      return leaderTitle.customText.trim();
    }
    const cleanKey = String(leaderTitle.key || "title_leader").replace(/^title_/, "");
    const tKey = `ui.jn.title.${cleanKey}`;
    return ROLE_TRANSLATIONS[tKey]?.[l] || ROLE_TRANSLATIONS["ui.jn.title.leader"][l];
  }

  function resolveMemberRoleDisplay(member, nation, lang) {
    const l = lang === "fr" ? "fr" : "en";
    if (member?.roleName && String(member.roleName).trim()) {
      return String(member.roleName).trim();
    }
    if (member?.roleTitleKey && ROLE_TRANSLATIONS[member.roleTitleKey]) {
      return ROLE_TRANSLATIONS[member.roleTitleKey][l];
    }
    if (member?.isLeader) {
      return resolveLeaderTitleDisplay(nation?.leaderTitle, l);
    }
    const raw = String(member?.role || "").trim();
    const cleaned = raw.replace(/^role_/, "").toLowerCase();
    const presetKey = `ui.jn.roles.preset.${cleaned}`;
    if (ROLE_TRANSLATIONS[presetKey]) {
      return ROLE_TRANSLATIONS[presetKey][l];
    }
    // If legacy unmapped generated ID like role_mwh2td5l_6r, show localized Member fallback until sync
    if (!raw || /^role_[a-z0-9]+_[a-z0-9]+$/i.test(raw)) {
      return l === "fr" ? "Citoyen" : "Citizen";
    }
    return raw.replace(/^role_/, "");
  }

  function resolveContinent(capital, continents) {
    if (!capital || !Number.isFinite(capital.x) || !Number.isFinite(capital.z) || !Array.isArray(continents) || continents.length === 0) {
      return "Unknown";
    }
    let best = continents[0];
    let bestDist = Infinity;
    for (const c of continents) {
      const dx = capital.x - c.x;
      const dz = capital.z - c.z;
      const d = dx * dx + dz * dz;
      if (d < bestDist) {
        bestDist = d;
        best = c;
      }
    }
    return best ? best.name : "Unknown";
  }

  async function loadContinents() {
    try {
      const r = await fetch(`../default-continents.json?t=${Date.now()}`, { cache: "no-store" });
      if (!r.ok) return [];
      const data = await r.json();
      const feats = data?.territories?.features || [];
      return feats
        .filter((f) => f?.geometry?.type === "Point" && Array.isArray(f.geometry.coordinates) && f?.properties?.text)
        .map((f) => ({
          name: String(f.properties.text),
          x: Number(f.geometry.coordinates[0]),
          z: Number(f.geometry.coordinates[1]),
        }));
    } catch {
      return [];
    }
  }

  function sanitizeNation(raw, isRich, continents = []) {
    if (!raw || typeof raw.id !== "string" || typeof raw.name !== "string") return null;
    // Deliberately never copy or retain raw.treasury
    const claimsList = Array.isArray(raw.claims) ? raw.claims : [];
    const claimCount = Number.isFinite(raw.claimCount) ? raw.claimCount : claimsList.length;
    const hasLevel = Number.isFinite(raw.level) || Number.isFinite(raw.xp) || Number.isFinite(raw.tier);
    const tier = Number.isInteger(raw.tier) ? Math.max(0, Math.min(9, raw.tier)) : null;
    const xp = Number.isFinite(raw.xp) ? Math.max(0, Math.floor(raw.xp)) : null;
    const level = Number.isFinite(raw.level)
      ? Math.max(1, Math.min(MAX_NATION_LEVEL, Math.floor(raw.level)))
      : (xp !== null ? computeGlobalLevel(xp) : (tier !== null ? tier * 10 + 1 : null));
    const members = Array.isArray(raw.members)
      ? raw.members
          .filter((m) => m && typeof m.name === "string" && m.name.trim().length > 0)
          .map((m) => ({
            name: m.name.trim(),
            isLeader: Boolean(m.isLeader),
            role: String(m.role || "citizen"),
            roleName: typeof m.roleName === "string" ? m.roleName.trim() : "",
            roleTitleKey: typeof m.roleTitleKey === "string" ? m.roleTitleKey.trim() : "",
            roleColor: typeof m.roleColor === "string" ? m.roleColor.trim() : "",
          }))
      : [];
    const memberCount = Number.isSafeInteger(raw.memberCount) ? raw.memberCount : members.length;
    const subCities = Array.isArray(raw.subCities)
      ? raw.subCities.map((sc) => ({
          name: String(sc?.name || sc?.id || "").trim(),
          type: String(sc?.type || sc?.typeId || "city"),
        })).filter((sc) => sc.name.length > 0)
      : [];
    const capital = raw.capital && Number.isFinite(raw.capital.x) && Number.isFinite(raw.capital.z)
      ? { x: Math.round(raw.capital.x), z: Math.round(raw.capital.z) }
      : null;

    const recruitmentStatus = ["open", "apply", "closed"].includes(raw.recruitmentStatus)
      ? raw.recruitmentStatus
      : "open";
    const recruitmentNote = typeof raw.recruitmentNote === "string"
      ? raw.recruitmentNote.trim().slice(0, 120)
      : "";

    const rawRes = raw.research && typeof raw.research === "object" ? raw.research : {};
    const unlockedCount = Math.max(0, Math.floor(Number(rawRes.unlockedCount) || 0));
    const totalNodes = Math.max(1, Math.floor(Number(rawRes.implementedNodes || rawRes.totalNodes) || RESEARCH_TOTAL_IMPLEMENTED));
    const research = {
      unlockedCount,
      totalNodes,
      level: Math.max(0, Math.floor(Number(rawRes.level ?? unlockedCount) || 0)),
      pct: Math.max(0, Math.min(100, Math.round(Number(rawRes.pct ?? (unlockedCount / totalNodes) * 100) || 0))),
      categories: Array.isArray(rawRes.categories) ? rawRes.categories : [],
    };

    const rawWs = raw.warStats && typeof raw.warStats === "object" ? raw.warStats : {};
    const warsWon = Math.max(0, Math.floor(Number(rawWs.warsWon) || 0));
    const warsLost = Math.max(0, Math.floor(Number(rawWs.warsLost) || 0));
    const battlesWon = Math.max(0, Math.floor(Number(rawWs.battlesWon) || 0));
    const battlesLost = Math.max(0, Math.floor(Number(rawWs.battlesLost) || 0));

    return {
      id: raw.id,
      name: raw.name,
      capitalName: typeof raw.capitalName === "string" ? raw.capitalName : "",
      leaderName: typeof raw.leaderName === "string" && raw.leaderName ? raw.leaderName : "--",
      leaderTitle: raw.leaderTitle && typeof raw.leaderTitle === "object" ? raw.leaderTitle : null,
      memberCount,
      members,
      citizenCount: Number.isFinite(raw.citizenCount) ? raw.citizenCount : null,
      tier,
      level,
      xp,
      recruitmentStatus,
      recruitmentNote,
      hasLevelData: isRich && hasLevel,
      color: typeof raw.color === "string" ? raw.color : "#63c74d",
      flag: Array.isArray(raw.flag) ? raw.flag : [],
      flagUrl: "",
      capital,
      continent: resolveContinent(capital, continents),
      claimCount,
      subCities,
      research,
      allies: Array.isArray(raw.allies) ? raw.allies : [],
      nap: Array.isArray(raw.nap) ? raw.nap : [],
      enemies: Array.isArray(raw.enemies) ? raw.enemies : [],
      atWarWith: Array.isArray(raw.atWarWith) ? raw.atWarWith : [],
      organization: raw.organization && typeof raw.organization === "object" ? raw.organization : null,
      warStats: {
        warsWon,
        warsLost,
        battlesWon,
        battlesLost,
        totalWins: Math.max(warsWon + battlesWon, Math.floor(Number(rawWs.totalWins) || 0)),
        totalLosses: Math.max(warsLost + battlesLost, Math.floor(Number(rawWs.totalLosses) || 0)),
      },
      createdAt: raw.createdAt || null,
    };
  }

  function computeServerRanking(list) {
    return [...list].sort((a, b) => {
      const lvlA = a.level ?? -1;
      const lvlB = b.level ?? -1;
      if (lvlB !== lvlA) return lvlB - lvlA;
      const xpA = a.xp ?? -1;
      const xpB = b.xp ?? -1;
      if (xpB !== xpA) return xpB - xpA;
      if (b.memberCount !== a.memberCount) return b.memberCount - a.memberCount;
      if (b.claimCount !== a.claimCount) return b.claimCount - a.claimCount;
      return a.name.localeCompare(b.name);
    });
  }

  global.FrontierNationsShared = {
    TIER_DEFS,
    MAX_NATION_LEVEL,
    ROLE_TRANSLATIONS,
    DOCTRINE_LABELS,
    CATEGORY_LABELS,
    getLevelRequiredXp,
    computeGlobalLevel,
    getXpProgress,
    getTierMeta,
    composeFlagUrl,
    resolveLeaderTitleDisplay,
    resolveMemberRoleDisplay,
    resolveContinent,
    loadContinents,
    sanitizeNation,
    computeServerRanking,
  };
})(window);
