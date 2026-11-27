/* ============================================================================
 * THE FRONTIER — Public Player Leaderboard Logic
 * Strictly public player stats (hours, nation, profession & progress, money).
 * ========================================================================== */

(function () {
  "use strict";

  const W = window.FrontierWiki;
  const PLAYERS_API_URL = "https://frontier-webpanel-relay.frontiermc.workers.dev/api/public/players";
  const COIN_ICON_PATH = "../wiki/frontier-extension/assets/items/coin.png";

  const JOBS_META = {
    miner: {
      id: "miner",
      maxSkills: 23,
      en: "Miner",
      fr: "Mineur",
      icon: "../wiki/assets/vanilla/diamond_pickaxe.png",
    },
    lumberjack: {
      id: "lumberjack",
      maxSkills: 14,
      en: "Lumberjack",
      fr: "Bucheron",
      icon: "../wiki/assets/vanilla/diamond_axe.png",
    },
    blacksmith: {
      id: "blacksmith",
      maxSkills: 19,
      en: "Blacksmith",
      fr: "Forgeron",
      icon: "../wiki/assets/vanilla/anvil.png",
    },
    rancher: {
      id: "rancher",
      maxSkills: 20,
      en: "Rancher",
      fr: "Eleveur",
      icon: "../wiki/assets/vanilla/wheat.png",
    },
    farmer: {
      id: "farmer",
      maxSkills: 20,
      en: "Farmer",
      fr: "Fermier",
      icon: "../wiki/assets/vanilla/diamond_hoe.png",
    },
    fisher: {
      id: "fisher",
      maxSkills: 20,
      en: "Fisher",
      fr: "Pecheur",
      icon: "../wiki/assets/vanilla/fishing_rod.png",
    },
    hunter: {
      id: "hunter",
      maxSkills: 20,
      en: "Hunter",
      fr: "Chasseur",
      icon: "../wiki/assets/vanilla/bow.png",
    },
    knight: {
      id: "knight",
      maxSkills: 20,
      en: "Knight",
      fr: "Chevalier",
      icon: "../wiki/assets/vanilla/diamond_sword.png",
    },
  };

  const RANKS_META = {
    roturier: { en: "Commoner", fr: "Roturier", limit: 10000, img: "../wiki/frontier-extension/assets/ranks/rank_roturier.png" },
    bourgeois: { en: "Burgher", fr: "Bourgeois", limit: 250000, img: "../wiki/frontier-extension/assets/ranks/rank_bourgeois.png" },
    noble: { en: "Noble", fr: "Noble", limit: 1000000, img: "../wiki/frontier-extension/assets/ranks/rank_noble.png" },
    conqueror: { en: "Conqueror", fr: "Conquerant", limit: 1000000, img: "../wiki/frontier-extension/assets/ranks/rank_conqueror.png" },
    sovereign: { en: "Sovereign", fr: "Souverain", limit: 1500000, img: "../wiki/frontier-extension/assets/ranks/rank_sovereign.png" },
    emperor: { en: "Emperor", fr: "Empereur", limit: 2000000, img: "../wiki/frontier-extension/assets/ranks/rank_emperor.png" },
    fre_og: { en: "FRE-OG", fr: "FRE-OG", limit: 1000000, img: "../wiki/frontier-extension/assets/ranks/rank_fre_og.png" },
    frost: { en: "Frost", fr: "Frost", limit: 1000000, img: "../wiki/frontier-extension/assets/ranks/rank_frost.png" },
    champion: { en: "Champion", fr: "Champion", limit: 1500000, img: "../wiki/frontier-extension/assets/ranks/rank_champion.png" },
    hero: { en: "Hero", fr: "Hero", limit: 2000000, img: "../wiki/frontier-extension/assets/ranks/rank_hero.png" },
    astral: { en: "Astral", fr: "Astral", limit: 2000000, img: "../wiki/frontier-extension/assets/ranks/rank_astral.png" },
    youtuber: { en: "YouTuber", fr: "YouTuber", limit: 1000000, img: "../wiki/frontier-extension/assets/ranks/rank_youtuber.png" },
    helper: { en: "Helper", fr: "Helper", limit: 2000000, img: "../wiki/frontier-extension/assets/ranks/rank_helper.png" },
    mod: { en: "Mod", fr: "Mod", limit: 2000000, img: "../wiki/frontier-extension/assets/ranks/rank_mod.png" },
    smod: { en: "S-Mod", fr: "S-Mod", limit: 2000000, img: "../wiki/frontier-extension/assets/ranks/rank_smod.png" },
    admin: { en: "Admin", fr: "Admin", limit: 2000000, img: "../wiki/frontier-extension/assets/ranks/rank_admin.png" },
    manager: { en: "Manager", fr: "Manager", limit: 2000000, img: "../wiki/frontier-extension/assets/ranks/rank_manager.png" },
    owner: { en: "Owner", fr: "Owner", limit: 2000000, img: "../wiki/frontier-extension/assets/ranks/rank_owner.png" },
  };

  function esc(val) {
    return String(val ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function fmtInt(n) {
    const lang = W.getLang() === "fr" ? "fr-FR" : "en-US";
    return Math.max(0, Math.floor(Number(n) || 0)).toLocaleString(lang);
  }

  function fmtHours(seconds) {
    const sec = Math.max(0, Math.floor(Number(seconds) || 0));
    const hours = sec / 3600;
    if (hours === 0) return "0 h";
    if (hours < 0.1) return "< 0.1 h";
    const lang = W.getLang() === "fr" ? "fr-FR" : "en-US";
    return `${hours.toLocaleString(lang, { minimumFractionDigits: 1, maximumFractionDigits: 1 })} h`;
  }

  function fmtExactDuration(seconds) {
    const sec = Math.max(0, Math.floor(Number(seconds) || 0));
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    if (h > 0) return `${h}h ${String(m).padStart(2, "0")}m`;
    return `${m}m`;
  }

  const flagLayerCache = new Map();
  const composedFlagCache = new Map();

  function loadFlagLayer(patternId, colorId) {
    const p = String(patternId || "").replace(/[^a-zA-Z0-9_]/g, "");
    const c = String(colorId || "").replace(/[^a-zA-Z0-9_]/g, "");
    if (!p || !c) return Promise.resolve(null);
    const key = `${p}:${c}`;
    if (flagLayerCache.has(key)) return flagLayerCache.get(key);
    const prom = new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => resolve(null);
      img.src = `../flags/${p}/${p}_${c}.png`;
    });
    flagLayerCache.set(key, prom);
    return prom;
  }

  async function composeFlagUrl(layers) {
    if (!Array.isArray(layers) || layers.length === 0) return "";
    const key = JSON.stringify(layers);
    if (composedFlagCache.has(key)) return composedFlagCache.get(key);

    const canvas = document.createElement("canvas");
    canvas.width = 96;
    canvas.height = 60;
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;

    let drawn = 0;
    for (const layer of layers) {
      if (!Array.isArray(layer) || layer.length < 2) continue;
      const img = await loadFlagLayer(layer[0], layer[1]);
      if (!img) continue;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      drawn++;
    }
    const url = drawn > 0 ? canvas.toDataURL() : "";
    composedFlagCache.set(key, url);
    return url;
  }

  const state = {
    players: [],
    nationsById: new Map(),
    nationsByName: new Map(),
    memberNationMap: new Map(),
    serverOnline: false,
    onlineCount: 0,
    updatedAt: 0,
    fetchError: false,
    query: "",
    jobFilter: "all",
    nationFilter: "all",
    sortBy: "hours",
    viewMode: "table",
    selectedPlayerName: null,
  };

  function resolvePlayerNationInfo(player) {
    const lower = player.name.toLowerCase();
    const mapped = state.memberNationMap.get(lower);
    if (mapped) return mapped;

    if (player.nation) {
      const byName = state.nationsByName.get(player.nation.toLowerCase());
      if (byName) {
        return {
          nationId: byName.id,
          nationName: byName.name,
          isLeader: String(byName.leaderName || "").toLowerCase() === lower,
          flagLayers: byName.flagLayers || [],
        };
      }
      return {
        nationId: "",
        nationName: player.nation,
        isLeader: false,
        flagLayers: [],
      };
    }

    return null;
  }

  function computeRanks(players) {
    const hoursSorted = [...players].sort(
      (a, b) => b.playTimeSeconds - a.playTimeSeconds || b.bankBalance - a.bankBalance || a.name.localeCompare(b.name),
    );
    const hoursRankMap = new Map(hoursSorted.map((p, i) => [p.name.toLowerCase(), i + 1]));
    for (const p of players) {
      p.hoursRank = hoursRankMap.get(p.name.toLowerCase()) || 9999;
    }
  }

  function getFilteredAndSorted() {
    const q = state.query.trim().toLowerCase();
    const filtered = state.players.filter((p) => {
      if (state.jobFilter === "__none__" && p.jobId) return false;
      if (state.jobFilter !== "all" && state.jobFilter !== "__none__" && p.jobId !== state.jobFilter) return false;

      if (state.nationFilter === "__none__" && p.nationName) return false;
      if (state.nationFilter !== "all" && state.nationFilter !== "__none__" && p.nationName !== state.nationFilter) {
        return false;
      }

      if (q) {
        const jobMeta = JOBS_META[p.jobId];
        const rankMeta = RANKS_META[p.rankId];
        const haystack = [
          p.name,
          p.nationName,
          p.rankId,
          rankMeta?.en || "",
          rankMeta?.fr || "",
          p.jobId,
          jobMeta?.en || "",
          jobMeta?.fr || "",
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });

    filtered.sort((a, b) => {
      if (state.sortBy === "money") {
        return b.bankBalance - a.bankBalance || b.playTimeSeconds - a.playTimeSeconds || a.name.localeCompare(b.name);
      }
      if (state.sortBy === "job") {
        return b.jobSkills - a.jobSkills || b.jobPct - a.jobPct || b.playTimeSeconds - a.playTimeSeconds || a.name.localeCompare(b.name);
      }
      if (state.sortBy === "pass") {
        return b.passTier - a.passTier || b.playTimeSeconds - a.playTimeSeconds || a.name.localeCompare(b.name);
      }
      if (state.sortBy === "name") {
        return a.name.localeCompare(b.name);
      }
      return b.playTimeSeconds - a.playTimeSeconds || b.bankBalance - a.bankBalance || a.name.localeCompare(b.name);
    });

    return filtered;
  }

  function renderFilterOptions() {
    const isFr = W.getLang() === "fr";

    const jobSel = document.getElementById("playerJobFilter");
    if (jobSel) {
      const opts = [
        `<option value="all">${isFr ? "Toutes professions" : "All professions"}</option>`,
        ...Object.values(JOBS_META).map((j) => `<option value="${esc(j.id)}">${esc(isFr ? j.fr : j.en)}</option>`),
        `<option value="__none__">${isFr ? "Sans profession" : "No profession"}</option>`,
      ];
      jobSel.innerHTML = opts.join("");
      jobSel.value = state.jobFilter;
    }

    const nationSel = document.getElementById("playerNationFilter");
    if (nationSel) {
      const nationNames = [...new Set(state.players.map((p) => p.nationName).filter(Boolean))].sort((a, b) =>
        a.localeCompare(b),
      );
      const opts = [
        `<option value="all">${isFr ? "Toutes nations" : "All nations"}</option>`,
        ...nationNames.map((n) => `<option value="${esc(n)}">${esc(n)}</option>`),
        `<option value="__none__">${isFr ? "Independants (Sans nation)" : "Independent (No nation)"}</option>`,
      ];
      nationSel.innerHTML = opts.join("");
      if ([...nationSel.options].some((o) => o.value === state.nationFilter)) {
        nationSel.value = state.nationFilter;
      } else {
        state.nationFilter = "all";
        nationSel.value = "all";
      }
    }

    const sortSel = document.getElementById("playerSortSelect");
    if (sortSel) {
      sortSel.innerHTML = [
        `<option value="hours">${isFr ? "Tri : Heures de jeu" : "Sort: Playtime Hours"}</option>`,
        `<option value="money">${isFr ? "Tri : Argent (Banque)" : "Sort: Vault Money"}</option>`,
        `<option value="job">${isFr ? "Tri : Niveau Metier" : "Sort: Profession Level"}</option>`,
        `<option value="pass">${isFr ? "Tri : Palier FrontierPass" : "Sort: FrontierPass Tier"}</option>`,
        `<option value="name">${isFr ? "Tri : Nom (A-Z)" : "Sort: Name (A-Z)"}</option>`,
      ].join("");
      sortSel.value = state.sortBy;
    }
  }

  function renderKpis() {
    const isFr = W.getLang() === "fr";
    const totalPlayers = state.players.length;
    const onlinePlayers = state.players.filter((p) => p.online).length;
    const totalHours = state.players.reduce((s, p) => s + p.playTimeSeconds, 0) / 3600;
    const totalCoins = state.players.reduce((s, p) => s + p.bankBalance, 0);
    const withJob = state.players.filter((p) => Boolean(p.jobId)).length;
    const withNation = state.players.filter((p) => Boolean(p.nationName)).length;

    const kpiStrip = document.getElementById("playersKpiStrip");
    if (kpiStrip) {
      kpiStrip.innerHTML = [
        {
          lbl: isFr ? "Joueurs Enregistres" : "Tracked Players",
          val: `${fmtInt(totalPlayers)} (${fmtInt(onlinePlayers)} ${isFr ? "en ligne" : "online"})`,
        },
        {
          lbl: isFr ? "Heures Cumulees" : "Total Playtime",
          val: `${Math.round(totalHours).toLocaleString(isFr ? "fr-FR" : "en-US")} h`,
        },
        {
          lbl: isFr ? "Total Argent en Banque" : "Total Vault Coins",
          val: `${fmtInt(totalCoins)} Coins`,
        },
        {
          lbl: isFr ? "Metiers / Nations" : "Jobs / Nations",
          val: `${fmtInt(withJob)} / ${fmtInt(withNation)}`,
        },
      ]
        .map(
          (k) => `<div class="nations-kpi-tile"><span class="nations-kpi-lbl">${esc(k.lbl)}</span><span class="nations-kpi-val">${esc(k.val)}</span></div>`,
        )
        .join("");
    }

    const updatedBadge = document.getElementById("playersUpdatedBadge");
    if (updatedBadge) {
      if (state.updatedAt) {
        const dt = new Date(state.updatedAt);
        const timeStr = Number.isNaN(dt.getTime())
          ? "--"
          : dt.toLocaleTimeString(isFr ? "fr-FR" : "en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
        updatedBadge.textContent = `${isFr ? "Synchro" : "Synced"}: ${timeStr}`;
      } else {
        updatedBadge.textContent = isFr ? "En attente..." : "Waiting...";
      }
    }

    const liveBadge = document.getElementById("playersLiveBadge");
    if (liveBadge) {
      const dotCls = state.serverOnline ? "players-live-dot is-online" : "players-live-dot";
      const label = state.serverOnline
        ? isFr
          ? `Serveur en ligne (${fmtInt(onlinePlayers)} joueurs)`
          : `Server online (${fmtInt(onlinePlayers)} online)`
        : isFr
          ? "Serveur hors ligne"
          : "Server offline";
      liveBadge.innerHTML = `<span class="${dotCls}"></span><span>${esc(label)}</span>`;
    }

    const notice = document.getElementById("playersSyncNotice");
    if (notice) {
      notice.classList.toggle("hidden", !state.fetchError);
    }
  }

  function renderNationHtml(player, isFr) {
    if (!player.nationName) {
      return `<span class="badge badge-muted">${isFr ? "Sans nation" : "Independent"}</span>`;
    }
    const flagAttr = player.flagLayers?.length
      ? `data-flag-layers="${esc(JSON.stringify(player.flagLayers))}"`
      : "";
    const flagImg = player.flagLayers?.length
      ? `<img class="player-nation-flag js-flag-img" ${flagAttr} alt="" />`
      : "";
    const leaderMark = player.isNationLeader
      ? ` <span class="badge badge-gold">${isFr ? "Chef" : "Leader"}</span>`
      : "";

    if (player.nationId) {
      return `<a class="player-nation-link" href="../nations/?nation=${encodeURIComponent(player.nationId)}" onclick="event.stopPropagation()">${flagImg}<span>${esc(player.nationName)}</span>${leaderMark}</a>`;
    }
    return `<span class="player-nation-pill">${flagImg}<span>${esc(player.nationName)}</span></span>`;
  }

  function renderJobHtml(player, isFr) {
    const jobMeta = JOBS_META[player.jobId];
    if (!jobMeta) {
      return `<span class="badge badge-muted">${isFr ? "Aucun metier" : "No profession"}</span>`;
    }
    const label = isFr ? jobMeta.fr : jobMeta.en;
    return `<span class="player-job-cell"><img class="player-job-icon" src="${esc(jobMeta.icon)}" alt="" /><span>${esc(label)}</span></span>`;
  }

  function renderJobProgressHtml(player, isFr) {
    if (!player.jobId) {
      return `<span class="badge badge-muted">--</span>`;
    }
    const max = Math.max(1, player.jobMaxSkills);
    const cur = Math.min(max, Math.max(0, player.jobSkills));
    const pct = Math.min(100, Math.round((cur / max) * 100));
    const lvlPrefix = isFr ? "Niv." : "Lv.";
    return `
      <div class="player-progress-wrap">
        <div class="player-progress-head">
          <strong>${lvlPrefix} ${cur}/${max}</strong>
          <span>${pct}%</span>
        </div>
        <div class="player-progress-track">
          <div class="player-progress-fill" style="width:${pct}%"></div>
        </div>
      </div>`;
  }

  async function hydrateFlags() {
    const imgs = document.querySelectorAll("img.js-flag-img[data-flag-layers]");
    for (const img of imgs) {
      if (img.dataset.hydrated === "1") continue;
      img.dataset.hydrated = "1";
      try {
        const layers = JSON.parse(img.dataset.flagLayers || "[]");
        const url = await composeFlagUrl(layers);
        if (url) img.src = url;
        else img.style.display = "none";
      } catch {
        img.style.display = "none";
      }
    }
  }

  function renderPlayers() {
    const isFr = W.getLang() === "fr";
    const list = getFilteredAndSorted();

    const countEl = document.getElementById("playersCountLabel");
    if (countEl) {
      countEl.textContent = isFr
        ? `${fmtInt(list.length)} joueur(s) affiche(s) sur ${fmtInt(state.players.length)}`
        : `Showing ${fmtInt(list.length)} of ${fmtInt(state.players.length)} player(s)`;
    }

    const container = document.getElementById("playersContainer");
    if (!container) return;

    if (list.length === 0) {
      container.innerHTML = `<div class="oreui-panel nations-empty-state">${isFr ? "Aucun joueur ne correspond a ces filtres." : "No players match the current filters."}</div>`;
      return;
    }

    if (state.viewMode === "cards") {
      container.innerHTML = `<div class="players-grid">${list
        .map((p, idx) => {
          const rankNo = idx + 1;
          const podiumCls = rankNo <= 3 ? ` podium-${rankNo}` : "";
          const badgeCls = rankNo <= 3 ? ` rank-${rankNo}` : "";
          const rankMeta = RANKS_META[p.rankId] || RANKS_META.roturier;
          const onlineText = p.online ? (isFr ? "En ligne" : "Online") : isFr ? "Hors ligne" : "Offline";
          return `
            <article class="player-card${podiumCls}" data-player-name="${esc(p.name)}">
              <div class="player-card-head">
                <div style="min-width:0;flex:1;">
                  <div class="nation-rank-row">
                    <span class="nation-rank-badge${badgeCls}">#${rankNo}</span>
                    ${rankMeta.img ? `<img class="player-rank-icon" src="${esc(rankMeta.img)}" alt="${esc(isFr ? rankMeta.fr : rankMeta.en)}" />` : ""}
                    <span class="badge ${p.online ? "badge-green" : "badge-muted"}">${esc(onlineText)}</span>
                  </div>
                  <h3 class="player-card-title">${esc(p.name)}</h3>
                </div>
              </div>
              <div class="player-card-stats">
                <div class="nation-stat-cell">
                  <span class="nation-stat-lbl">${isFr ? "Heures" : "Playtime"}</span>
                  <span class="nation-stat-val">${esc(fmtHours(p.playTimeSeconds))}</span>
                </div>
                <div class="nation-stat-cell">
                  <span class="nation-stat-lbl">${isFr ? "Banque" : "Vault"}</span>
                  <span class="nation-stat-val"><span class="player-money-cell" style="justify-content:center;"><img class="player-coin-icon" src="${COIN_ICON_PATH}" alt="" />${fmtInt(p.bankBalance)}</span></span>
                </div>
              </div>
              <div class="nation-xp-box">
                <div class="nation-xp-head">
                  <span>${renderJobHtml(p, isFr)}</span>
                  <span>${p.jobId ? `${p.jobSkills}/${p.jobMaxSkills}` : "--"}</span>
                </div>
                ${p.jobId ? `<div class="nation-xp-track"><div class="nation-xp-fill" style="width:${p.jobPct}%"></div></div>` : ""}
              </div>
              <div class="nation-card-foot">
                <span>${renderNationHtml(p, isFr)}</span>
                <span>Pass #${fmtInt(p.passTier)}</span>
              </div>
            </article>`;
        })
        .join("")}</div>`;
    } else {
      container.innerHTML = `
        <div class="oreui-panel players-table-wrap">
          <table class="wiki-table">
            <thead>
              <tr>
                <th>#</th>
                <th>${isFr ? "Joueur" : "Player"}</th>
                <th>${isFr ? "Heures de jeu" : "Hours"}</th>
                <th>${isFr ? "Nation" : "Nation"}</th>
                <th>${isFr ? "Profession" : "Profession"}</th>
                <th>${isFr ? "Niveau Metier" : "Profession Level"}</th>
                <th>${isFr ? "Argent (Banque)" : "Vault Money"}</th>
              </tr>
            </thead>
            <tbody>
              ${list
                .map((p, idx) => {
                  const rankNo = idx + 1;
                  const badgeCls = rankNo <= 3 ? ` rank-${rankNo}` : "";
                  const rankMeta = RANKS_META[p.rankId] || RANKS_META.roturier;
                  return `
                    <tr class="player-row-clickable" data-player-name="${esc(p.name)}">
                      <td><span class="nation-rank-badge${badgeCls}">#${rankNo}</span></td>
                      <td>
                        <div class="player-name-cell">
                          <span class="player-status-dot ${p.online ? "is-online" : ""}" title="${p.online ? (isFr ? "En ligne" : "Online") : isFr ? "Hors ligne" : "Offline"}"></span>
                          ${rankMeta.img ? `<img class="player-rank-icon" src="${esc(rankMeta.img)}" alt="${esc(isFr ? rankMeta.fr : rankMeta.en)}" />` : ""}
                          <strong>${esc(p.name)}</strong>
                        </div>
                      </td>
                      <td><strong>${esc(fmtHours(p.playTimeSeconds))}</strong></td>
                      <td>${renderNationHtml(p, isFr)}</td>
                      <td>${renderJobHtml(p, isFr)}</td>
                      <td>${renderJobProgressHtml(p, isFr)}</td>
                      <td>
                        <span class="player-money-cell">
                          <img class="player-coin-icon" src="${COIN_ICON_PATH}" alt="" />
                          <span>${fmtInt(p.bankBalance)}</span>
                        </span>
                      </td>
                    </tr>`;
                })
                .join("")}
            </tbody>
          </table>
        </div>`;
    }

    container.querySelectorAll("[data-player-name]").forEach((el) => {
      el.addEventListener("click", () => openPlayerModal(el.dataset.playerName));
    });

    hydrateFlags();
  }

  function openPlayerModal(playerName) {
    const isFr = W.getLang() === "fr";
    const p = state.players.find((x) => x.name.toLowerCase() === String(playerName || "").toLowerCase());
    if (!p) return;
    state.selectedPlayerName = p.name;

    const modal = document.getElementById("playerModal");
    const body = document.getElementById("playerModalBody");
    if (!modal || !body) return;

    const rankMeta = RANKS_META[p.rankId] || RANKS_META.roturier;
    const jobMeta = JOBS_META[p.jobId];
    const vaultCap = rankMeta.limit || 10000;
    const onlineBadge = p.online
      ? `<span class="badge badge-green">${isFr ? "En ligne" : "Online"}</span>`
      : `<span class="badge badge-muted">${isFr ? "Hors ligne" : "Offline"}</span>`;

    const nationBtn = p.nationId
      ? `<a class="oreui-btn oreui-btn-sm oreui-btn-green" href="../nations/?nation=${encodeURIComponent(p.nationId)}">${isFr ? "Voir sa Nation" : "View Nation"}: ${esc(p.nationName)}</a>`
      : "";
    const jobBtn = `<a class="oreui-btn oreui-btn-sm oreui-btn-gold" href="../wiki/jobs-skills/">${isFr ? "Guide Metiers" : "Jobs Wiki"}</a>`;

    body.innerHTML = `
      <div class="player-modal-head">
        <div>
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:6px;">
            <span class="nation-rank-badge">#${p.hoursRank}</span>
            ${rankMeta.img ? `<img class="player-rank-icon-lg" src="${esc(rankMeta.img)}" alt="" />` : ""}
            <span class="badge badge-gold">${esc(isFr ? rankMeta.fr : rankMeta.en)}</span>
            ${onlineBadge}
          </div>
          <h2 style="margin:0;">${esc(p.name)}</h2>
        </div>
        <div>${renderNationHtml(p, isFr)}</div>
      </div>

      <div class="player-modal-stats">
        <div class="nation-stat-cell">
          <span class="nation-stat-lbl">${isFr ? "Temps de jeu" : "Playtime"}</span>
          <span class="nation-stat-val">${esc(fmtHours(p.playTimeSeconds))} (${esc(fmtExactDuration(p.playTimeSeconds))})</span>
        </div>
        <div class="nation-stat-cell">
          <span class="nation-stat-lbl">${isFr ? "Banque Protegee" : "Protected Vault"}</span>
          <span class="nation-stat-val">${fmtInt(p.bankBalance)} / ${fmtInt(vaultCap)}</span>
        </div>
        <div class="nation-stat-cell">
          <span class="nation-stat-lbl">${isFr ? "Profession" : "Profession"}</span>
          <span class="nation-stat-val">${jobMeta ? esc(isFr ? jobMeta.fr : jobMeta.en) : (isFr ? "Aucune" : "None")}</span>
        </div>
        <div class="nation-stat-cell">
          <span class="nation-stat-lbl">${isFr ? "Progression Metier" : "Job Mastery"}</span>
          <span class="nation-stat-val">${p.jobId ? `${p.jobSkills}/${p.jobMaxSkills} (${p.jobPct}%)` : "--"}</span>
        </div>
      </div>

      <div class="nation-xp-box">
        <div class="nation-xp-head">
          <span><strong>${isFr ? "Palier FrontierPass" : "FrontierPass Tier"}</strong></span>
          <span>#${fmtInt(p.passTier)}</span>
        </div>
        ${p.jobId ? `<div class="nation-xp-head" style="margin-top:8px;"><span><strong>${esc(isFr ? jobMeta.fr : jobMeta.en)}</strong></span><span>${p.jobSkills} / ${p.jobMaxSkills} (${p.jobPct}%)</span></div><div class="nation-xp-track"><div class="nation-xp-fill" style="width:${p.jobPct}%"></div></div>` : ""}
      </div>

      <div class="player-modal-actions">
        ${nationBtn}
        ${jobBtn}
      </div>`;

    modal.classList.add("open");
    hydrateFlags();
  }

  function closeModal() {
    state.selectedPlayerName = null;
    document.getElementById("playerModal")?.classList.remove("open");
  }

  async function loadNationsLookup() {
    let raw = null;
    try {
      const res = await fetch(`../nations.json?t=${Date.now()}`, { cache: "no-store" });
      if (res.ok) raw = await res.json();
    } catch { /* ignore */ }
    if (!raw) {
      try {
        const res = await fetch(`../claims.json?t=${Date.now()}`, { cache: "no-store" });
        if (res.ok) raw = await res.json();
      } catch { /* ignore */ }
    }

    const byId = new Map();
    const byName = new Map();
    const memberMap = new Map();

    for (const n of raw?.nations || []) {
      if (!n || typeof n.id !== "string" || typeof n.name !== "string") continue;
      const item = {
        id: n.id,
        name: n.name.trim(),
        leaderName: typeof n.leaderName === "string" ? n.leaderName.trim() : "",
        flagLayers: Array.isArray(n.flagLayers) ? n.flagLayers : [],
      };
      byId.set(item.id, item);
      byName.set(item.name.toLowerCase(), item);
      if (Array.isArray(n.members)) {
        for (const m of n.members) {
          if (!m || typeof m.name !== "string" || !m.name.trim()) continue;
          memberMap.set(m.name.trim().toLowerCase(), {
            nationId: item.id,
            nationName: item.name,
            isLeader: Boolean(m.isLeader),
            flagLayers: item.flagLayers,
          });
        }
      }
      if (item.leaderName && !memberMap.has(item.leaderName.toLowerCase())) {
        memberMap.set(item.leaderName.toLowerCase(), {
          nationId: item.id,
          nationName: item.name,
          isLeader: true,
          flagLayers: item.flagLayers,
        });
      }
    }

    state.nationsById = byId;
    state.nationsByName = byName;
    state.memberNationMap = memberMap;
  }

  async function loadPlayersData() {
    try {
      const [playersRes] = await Promise.all([
        fetch(`${PLAYERS_API_URL}?t=${Date.now()}`, { cache: "no-store" }),
        loadNationsLookup(),
      ]);
      if (!playersRes.ok) throw new Error(`HTTP ${playersRes.status}`);
      const payload = await playersRes.json();
      if (!payload || !payload.ok || !Array.isArray(payload.players)) {
        throw new Error("Invalid players payload");
      }

      state.fetchError = false;
      state.serverOnline = Boolean(payload.serverOnline);
      state.onlineCount = Number(payload.onlineCount) || 0;
      state.updatedAt = Number(payload.updatedAt) || Date.now();

      const list = payload.players.map((raw) => {
        const jobId = typeof raw.jobId === "string" && JOBS_META[raw.jobId] ? raw.jobId : "";
        const jobMeta = jobId ? JOBS_META[jobId] : null;
        const jobSkills = Math.max(0, Math.floor(Number(raw.jobSkills) || 0));
        const rawMax = Math.max(0, Math.floor(Number(raw.jobMaxSkills) || 0));
        const jobMaxSkills = rawMax > 0 ? rawMax : (jobMeta ? jobMeta.maxSkills : 0);
        const jobPct = jobMaxSkills > 0 ? Math.min(100, Math.round((jobSkills / jobMaxSkills) * 100)) : 0;

        const base = {
          name: String(raw.name || "").trim(),
          online: Boolean(raw.online),
          rankId: RANKS_META[raw.rankId] ? raw.rankId : "roturier",
          playTimeSeconds: Math.max(0, Math.floor(Number(raw.playTimeSeconds) || 0)),
          nation: String(raw.nation || "").trim(),
          jobId,
          jobSkills,
          jobMaxSkills,
          jobPct,
          bankBalance: Math.max(0, Math.floor(Number(raw.bankBalance) || 0)),
          passTier: Math.max(0, Math.floor(Number(raw.passTier) || 0)),
          lastSeen: Math.max(0, Math.floor(Number(raw.lastSeen) || 0)),
        };

        const nat = resolvePlayerNationInfo(base);
        base.nationId = nat?.nationId || "";
        base.nationName = nat?.nationName || "";
        base.isNationLeader = Boolean(nat?.isLeader);
        base.flagLayers = nat?.flagLayers || [];
        return base;
      }).filter((p) => p.name.length > 0);

      computeRanks(list);
      state.players = list;
    } catch {
      state.fetchError = true;
    }
  }

  function refreshAll() {
    W.applyStaticTranslations(W.getLang());
    renderFilterOptions();
    renderKpis();
    renderPlayers();
    if (state.selectedPlayerName) openPlayerModal(state.selectedPlayerName);
  }

  async function init() {
    W.initThemeAndLangControls();

    await loadPlayersData();
    refreshAll();

    document.getElementById("playerSearchInput")?.addEventListener("input", (e) => {
      state.query = e.target.value;
      renderPlayers();
    });
    document.getElementById("playerJobFilter")?.addEventListener("change", (e) => {
      state.jobFilter = e.target.value;
      renderPlayers();
    });
    document.getElementById("playerNationFilter")?.addEventListener("change", (e) => {
      state.nationFilter = e.target.value;
      renderPlayers();
    });
    document.getElementById("playerSortSelect")?.addEventListener("change", (e) => {
      state.sortBy = e.target.value;
      renderPlayers();
    });

    const setView = (mode, activeId) => {
      state.viewMode = mode;
      ["btnViewTable", "btnViewCards"].forEach((id) => {
        document.getElementById(id)?.classList.toggle("active", id === activeId);
      });
      renderPlayers();
    };
    document.getElementById("btnViewTable")?.addEventListener("click", () => setView("table", "btnViewTable"));
    document.getElementById("btnViewCards")?.addEventListener("click", () => setView("cards", "btnViewCards"));

    document.getElementById("playerModalClose")?.addEventListener("click", closeModal);
    document.getElementById("playerModal")?.addEventListener("click", (e) => {
      if (e.target.id === "playerModal") closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });

    window.addEventListener("frontier:langchange", refreshAll);

    setInterval(async () => {
      if (document.visibilityState === "visible") {
        await loadPlayersData();
        refreshAll();
      }
    }, 60000);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
