/* ============================================================================
 * THE FRONTIER — Public Nations Directory Logic
 * Strictly public nation telemetry only (no treasury / balance data exposed).
 * ========================================================================== */

(function () {
  "use strict";

  const W = window.FrontierWiki;
  const S = window.FrontierNationsShared;
  const TIER_DEFS = S.TIER_DEFS;
  const MAX_NATION_LEVEL = S.MAX_NATION_LEVEL;
  const getLevelRequiredXp = S.getLevelRequiredXp;
  const computeGlobalLevel = S.computeGlobalLevel;
  const getXpProgress = S.getXpProgress;
  const composeFlagUrl = S.composeFlagUrl;
  const getTierMeta = S.getTierMeta;
  const computeServerRanking = S.computeServerRanking;
  const loadContinents = S.loadContinents;

  const state = {
    nations: [],
    continents: [],
    updated: "",
    hasRichData: false,
    query: "",
    tierFilter: "all",
    continentFilter: "all",
    recruitFilter: "all",
    sortBy: "rank",
    viewMode: "cards",
    selectedNationId: null,
    memberSearch: "",
  };

  function openNationDetailPage(nationId) {
    if (!nationId) return;
    window.location.href = `./nation.html?id=${encodeURIComponent(nationId)}`;
  }

  function sanitizeNation(raw, isRich) {
    return S.sanitizeNation(raw, isRich, state.continents);
  }

  function formatNumber(val) {
    if (val === null || val === undefined || !Number.isFinite(val)) return "--";
    return Number(val).toLocaleString();
  }

  function formatDateShort(val, lang) {
    if (!val) return "--";
    const d = new Date(val);
    if (Number.isNaN(d.getTime())) return "--";
    return d.toLocaleDateString(lang === "fr" ? "fr-FR" : "en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  function formatDateTime(val, lang) {
    if (!val) return "--";
    const d = new Date(val);
    if (Number.isNaN(d.getTime())) return "--";
    return d.toLocaleString(lang === "fr" ? "fr-FR" : "en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function renderRecruitBadge(status, lang) {
    if (status === "apply") {
      return `<span class="badge badge-gold">${lang === "fr" ? "Sur candidature" : "By Application"}</span>`;
    }
    if (status === "closed") {
      return `<span class="badge badge-muted">${lang === "fr" ? "Ferme" : "Closed"}</span>`;
    }
    return `<span class="badge badge-green">${lang === "fr" ? "Recrute" : "Open"}</span>`;
  }

  function getIsoWeekInfo(lang) {
    const now = new Date();
    const utc = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
    const dayNum = utc.getUTCDay() || 7;
    const monday = new Date(utc);
    monday.setUTCDate(utc.getUTCDate() - (dayNum - 1));
    const sunday = new Date(monday);
    sunday.setUTCDate(monday.getUTCDate() + 6);

    utc.setUTCDate(utc.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(utc.getUTCFullYear(), 0, 1));
    const week = Math.ceil(((utc - yearStart) / 86400000 + 1) / 7);
    const fmt = (d) => d.toLocaleDateString(lang === "fr" ? "fr-FR" : "en-US", { month: "short", day: "numeric", timeZone: "UTC" });
    return { week, range: `${fmt(monday)} - ${fmt(sunday)}` };
  }

  function renderFilterOptions() {
    const lang = W.getLang();
    const tierSel = document.getElementById("nationTierFilter");
    const contSel = document.getElementById("nationContinentFilter");
    const recSel = document.getElementById("nationRecruitFilter");
    const sortSel = document.getElementById("nationSortSelect");

    if (tierSel) {
      const prev = state.tierFilter;
      const opts = [`<option value="all">${lang === "fr" ? "Tous les Tiers" : "All Tiers"}</option>`];
      for (const td of TIER_DEFS) {
        opts.push(`<option value="${td.id}">Tier ${td.id} - ${W.escapeHtml(lang === "fr" ? td.fr : td.en)}</option>`);
      }
      tierSel.innerHTML = opts.join("");
      tierSel.value = prev;
    }

    if (contSel) {
      const prev = state.continentFilter;
      const seen = [...new Set(state.nations.map((n) => n.continent).filter(Boolean))].sort();
      const opts = [`<option value="all">${lang === "fr" ? "Tous les Continents" : "All Continents"}</option>`];
      for (const c of seen) {
        opts.push(`<option value="${W.escapeHtml(c)}">${W.escapeHtml(c)}</option>`);
      }
      contSel.innerHTML = opts.join("");
      contSel.value = seen.includes(prev) ? prev : "all";
      state.continentFilter = contSel.value;
    }

    if (recSel) {
      const prev = state.recruitFilter;
      const recOpts = [
        ["all", lang === "fr" ? "Recrutement : Tous" : "Recruitment: All"],
        ["open", lang === "fr" ? "Recrutement : Ouvert" : "Recruitment: Open"],
        ["apply", lang === "fr" ? "Recrutement : Sur candidature" : "Recruitment: By Application"],
        ["closed", lang === "fr" ? "Recrutement : Ferme" : "Recruitment: Closed"],
      ];
      recSel.innerHTML = recOpts
        .map(([v, lbl]) => `<option value="${v}">${W.escapeHtml(lbl)}</option>`)
        .join("");
      recSel.value = ["all", "open", "apply", "closed"].includes(prev) ? prev : "all";
    }

    if (sortSel) {
      const prev = state.sortBy;
      const sortOpts = [
        ["rank", lang === "fr" ? "Tri : Classement Serveur" : "Sort: Server Ranking"],
        ["members", lang === "fr" ? "Tri : Membres" : "Sort: Members"],
        ["claims", lang === "fr" ? "Tri : Parcelles 100x100" : "Sort: Territory Claims"],
        ["citizens", lang === "fr" ? "Tri : Citoyens PNJ" : "Sort: NPC Citizens"],
        ["name", lang === "fr" ? "Tri : Nom (A-Z)" : "Sort: Name (A-Z)"],
      ];
      sortSel.innerHTML = sortOpts
        .map(([v, lbl]) => `<option value="${v}">${W.escapeHtml(lbl)}</option>`)
        .join("");
      sortSel.value = prev;
    }
  }

  function renderKpis() {
    const lang = W.getLang();
    const totalNations = state.nations.length;
    const totalMembers = state.nations.reduce((s, n) => s + (n.memberCount || 0), 0);
    const totalClaims = state.nations.reduce((s, n) => s + (n.claimCount || 0), 0);
    const topNation = state.nations[0];

    const badge = document.getElementById("nationsUpdatedBadge");
    if (badge) {
      const prefix = lang === "fr" ? "Synchro : " : "Sync: ";
      badge.textContent = `${prefix}${formatDateTime(state.updated, lang)}`;
    }

    const notice = document.getElementById("nationsSyncNotice");
    if (notice) notice.classList.toggle("hidden", state.hasRichData);

    const kpi = document.getElementById("nationsKpiStrip");
    if (!kpi) return;
    const topLabel = topNation
      ? (topNation.level !== null ? `Lv.${topNation.level} (${topNation.name})` : `${topNation.name} (${topNation.memberCount})`)
      : "--";

    kpi.innerHTML = `
      <div class="nations-kpi-tile">
        <span class="nations-kpi-lbl">${lang === "fr" ? "Nations Actives" : "Active Nations"}</span>
        <div class="nations-kpi-val">${formatNumber(totalNations)}</div>
      </div>
      <div class="nations-kpi-tile">
        <span class="nations-kpi-lbl">${lang === "fr" ? "Membres Joueurs" : "Player Members"}</span>
        <div class="nations-kpi-val">${formatNumber(totalMembers)}</div>
      </div>
      <div class="nations-kpi-tile">
        <span class="nations-kpi-lbl">${lang === "fr" ? "Parcelles (100x100)" : "Claimed Parcels"}</span>
        <div class="nations-kpi-val">${formatNumber(totalClaims)}</div>
      </div>
      <div class="nations-kpi-tile">
        <span class="nations-kpi-lbl">${lang === "fr" ? "Nation #1" : "#1 Nation"}</span>
        <div class="nations-kpi-val" style="font-size:15px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${W.escapeHtml(topLabel)}</div>
      </div>
    `;
  }

  function getFilteredSortedNations() {
    const q = state.query.trim().toLowerCase();
    const list = state.nations.filter((n) => {
      if (state.tierFilter !== "all" && String(n.tier) !== state.tierFilter) return false;
      if (state.continentFilter !== "all" && n.continent !== state.continentFilter) return false;
      if (state.recruitFilter !== "all" && n.recruitmentStatus !== state.recruitFilter) return false;
      if (!q) return true;
      if (n.name.toLowerCase().includes(q)) return true;
      if (n.leaderName.toLowerCase().includes(q)) return true;
      if (n.capitalName.toLowerCase().includes(q)) return true;
      if (n.continent.toLowerCase().includes(q)) return true;
      if (n.members.some((m) => m.name.toLowerCase().includes(q))) return true;
      if (n.subCities.some((sc) => sc.name.toLowerCase().includes(q))) return true;
      return false;
    });

    list.sort((a, b) => {
      if (state.sortBy === "members") return b.memberCount - a.memberCount || a.serverRank - b.serverRank;
      if (state.sortBy === "claims") return b.claimCount - a.claimCount || a.serverRank - b.serverRank;
      if (state.sortBy === "citizens") return (b.citizenCount ?? -1) - (a.citizenCount ?? -1) || a.serverRank - b.serverRank;
      if (state.sortBy === "name") return a.name.localeCompare(b.name);
      return a.serverRank - b.serverRank;
    });
    return list;
  }

  function renderNations() {
    const lang = W.getLang();
    const list = getFilteredSortedNations();
    const countEl = document.getElementById("nationsCountLabel");
    if (countEl) {
      countEl.textContent = lang === "fr"
        ? `${list.length} nation(s) affichee(s) sur ${state.nations.length}`
        : `Showing ${list.length} of ${state.nations.length} nations`;
    }

    const container = document.getElementById("nationsContainer");
    if (!container) return;

    if (list.length === 0) {
      container.innerHTML = `
        <div class="oreui-card nations-empty-state">
          ${lang === "fr" ? "Aucune nation ne correspond a votre recherche." : "No nations match your current filters."}
        </div>
      `;
      return;
    }

    if (state.viewMode === "weekly") {
      const wk = getIsoWeekInfo(lang);
      const rankedList = [...list].sort((a, b) => a.serverRank - b.serverRank);
      const top3 = rankedList.slice(0, 3);
      const podiumOrder = [top3[1], top3[0], top3[2]].filter(Boolean);
      const rest = rankedList.slice(3);

      container.innerHTML = `
        <div class="oreui-card nations-weekly-banner">
          <div>
            <strong style="font-family:'MinecraftTen',sans-serif;font-size:17px;letter-spacing:0.07em;">
              ${lang === "fr" ? `Classement Hebdomadaire — Semaine ${wk.week}` : `Weekly Ranking — Week ${wk.week}`}
            </strong>
            <div style="font-size:12px;color:var(--text-muted);">${W.escapeHtml(wk.range)} • ${
              lang === "fr"
                ? "Base actuellement sur le classement general serveur (niveau, XP, membres et parcelles)."
                : "Currently based on live server standing (level, XP, members, and claims)."
            }</div>
          </div>
          <span class="badge badge-gold">${lang === "fr" ? `${rankedList.length} nations classees` : `${rankedList.length} ranked nations`}</span>
        </div>

        ${podiumOrder.length > 0 ? `
          <div class="nations-podium-grid">
            ${podiumOrder.map((n, idx) => {
              const rankNum = n.serverRank;
              const tm = n.tier !== null ? getTierMeta(n.tier) : null;
              return `
                <article class="nations-podium-card podium-${rankNum}" data-nation-id="${W.escapeHtml(n.id)}">
                  <div class="nation-card-head">
                    <div class="nation-flag-frame">
                      <img data-flag-id="${W.escapeHtml(n.id)}" src="${n.flagUrl || ""}" alt="${W.escapeHtml(n.name)}" />
                    </div>
                    <div class="nation-title-col">
                      <div class="nation-rank-row">
                        <span class="nation-rank-badge rank-${rankNum}">#${rankNum}</span>
                        ${renderRecruitBadge(n.recruitmentStatus, lang)}
                      </div>
                      <h2 class="nation-card-title">${W.escapeHtml(n.name)}</h2>
                      <div class="nation-leader-line">${lang === "fr" ? "Chef" : "Leader"}: <strong>${W.escapeHtml(n.leaderName)}</strong></div>
                    </div>
                  </div>
                  <div class="nation-stats-mini">
                    <div class="nation-stat-cell">
                      <span class="nation-stat-lbl">${lang === "fr" ? "Niveau" : "Level"}</span>
                      <span class="nation-stat-val">${n.level !== null ? `Lv.${n.level}` : "--"}</span>
                    </div>
                    <div class="nation-stat-cell">
                      <span class="nation-stat-lbl">${lang === "fr" ? "Membres" : "Members"}</span>
                      <span class="nation-stat-val">${n.memberCount}</span>
                    </div>
                    <div class="nation-stat-cell">
                      <span class="nation-stat-lbl">${lang === "fr" ? "Parcelles" : "Parcels"}</span>
                      <span class="nation-stat-val">${n.claimCount}</span>
                    </div>
                  </div>
                  ${tm ? `<div style="font-size:11.5px;color:var(--text-muted);">Tier ${tm.id} • ${W.escapeHtml(lang === "fr" ? tm.fr : tm.en)}</div>` : ""}
                </article>
              `;
            }).join("")}
          </div>
        ` : ""}

        ${rest.length > 0 ? `
          <div class="table-wrap">
            <table class="wiki-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>${lang === "fr" ? "Nation" : "Nation"}</th>
                  <th>${lang === "fr" ? "Dirigeant" : "Leader"}</th>
                  <th>${lang === "fr" ? "Niveau" : "Level"}</th>
                  <th>${lang === "fr" ? "Recrutement" : "Recruiting"}</th>
                  <th>${lang === "fr" ? "Membres" : "Members"}</th>
                  <th>${lang === "fr" ? "Parcelles" : "Parcels"}</th>
                </tr>
              </thead>
              <tbody>
                ${rest.map((n) => {
                  const tm = n.tier !== null ? getTierMeta(n.tier) : null;
                  const lvlStr = n.level !== null ? `Lv.${n.level} <span class="badge ${tm?.badgeCls || ""}">T${n.tier}</span>` : "--";
                  return `
                    <tr class="nation-table-row" data-nation-id="${W.escapeHtml(n.id)}">
                      <td><strong>#${n.serverRank}</strong></td>
                      <td>
                        <div class="nation-table-name">
                          <img class="nation-table-flag" data-flag-id="${W.escapeHtml(n.id)}" src="${n.flagUrl || ""}" alt="" />
                          <strong style="color:${W.escapeHtml(n.color || "#fff")};">${W.escapeHtml(n.name)}</strong>
                        </div>
                      </td>
                      <td>${W.escapeHtml(n.leaderName)}</td>
                      <td>${lvlStr}</td>
                      <td>${renderRecruitBadge(n.recruitmentStatus, lang)}</td>
                      <td><strong>${n.memberCount}</strong></td>
                      <td>${n.claimCount}</td>
                    </tr>
                  `;
                }).join("")}
              </tbody>
            </table>
          </div>
        ` : ""}
      `;
    } else if (state.viewMode === "table") {
      container.innerHTML = `
        <div class="table-wrap">
          <table class="wiki-table">
            <thead>
              <tr>
                <th>#</th>
                <th>${lang === "fr" ? "Nation" : "Nation"}</th>
                <th>${lang === "fr" ? "Dirigeant" : "Leader"}</th>
                <th>${lang === "fr" ? "Niveau" : "Level"}</th>
                <th>${lang === "fr" ? "Recrutement" : "Recruiting"}</th>
                <th>${lang === "fr" ? "Membres" : "Members"}</th>
                <th>${lang === "fr" ? "Parcelles" : "Parcels"}</th>
                <th>${lang === "fr" ? "Citoyens" : "Citizens"}</th>
                <th>${lang === "fr" ? "Continent" : "Continent"}</th>
              </tr>
            </thead>
            <tbody>
              ${list.map((n) => {
                const tm = n.tier !== null ? getTierMeta(n.tier) : null;
                const lvlStr = n.level !== null
                  ? `Lv.${n.level} <span class="badge ${tm?.badgeCls || ""}">T${n.tier}</span>`
                  : "--";
                return `
                  <tr class="nation-table-row" data-nation-id="${W.escapeHtml(n.id)}">
                    <td><strong>#${n.serverRank}</strong></td>
                    <td>
                      <div class="nation-table-name">
                        <img class="nation-table-flag" data-flag-id="${W.escapeHtml(n.id)}" src="${n.flagUrl || ""}" alt="" />
                        <div>
                          <strong style="color:${W.escapeHtml(n.color || "#fff")};">${W.escapeHtml(n.name)}</strong>
                          ${n.capitalName ? `<div style="font-size:11px;color:var(--text-muted);">${W.escapeHtml(n.capitalName)}</div>` : ""}
                        </div>
                      </div>
                    </td>
                    <td>${W.escapeHtml(n.leaderName)}</td>
                    <td>${lvlStr}</td>
                    <td>${renderRecruitBadge(n.recruitmentStatus, lang)}</td>
                    <td><strong>${n.memberCount}</strong></td>
                    <td>${n.claimCount}</td>
                    <td>${formatNumber(n.citizenCount)}</td>
                    <td>${W.escapeHtml(n.continent)}</td>
                  </tr>
                `;
              }).join("")}
            </tbody>
          </table>
        </div>
      `;
    } else {
      container.innerHTML = `
        <div class="nations-grid">
          ${list.map((n) => {
            const rankCls = n.serverRank <= 3 ? `rank-${n.serverRank}` : "";
            const tm = n.tier !== null ? getTierMeta(n.tier) : null;
            const prog = n.level !== null ? getXpProgress(n.xp ?? 0, n.level) : null;
            const tierBadge = tm
              ? `<span class="badge ${tm.badgeCls}">Tier ${tm.id} • ${W.escapeHtml(lang === "fr" ? tm.fr : tm.en)}</span>`
              : `<span class="badge">${lang === "fr" ? "Niveau en attente" : "Level pending sync"}</span>`;
            const xpHtml = prog
              ? `
                <div class="nation-xp-box">
                  <div class="nation-xp-head">
                    <span><strong>${lang === "fr" ? "Niveau" : "Level"} ${n.level}</strong> / 100</span>
                    <span>${formatNumber(n.xp ?? 0)} XP (${prog.pct}%)</span>
                  </div>
                  <div class="nation-xp-track"><div class="nation-xp-fill" style="width:${prog.pct}%;"></div></div>
                </div>
              `
              : "";

            return `
              <article class="nation-card" data-nation-id="${W.escapeHtml(n.id)}" style="border-top-color:${W.escapeHtml(n.color || "var(--accent)")};">
                <div class="nation-card-head">
                  <div class="nation-flag-frame">
                    <img data-flag-id="${W.escapeHtml(n.id)}" src="${n.flagUrl || ""}" alt="${W.escapeHtml(n.name)}" />
                  </div>
                  <div class="nation-title-col">
                    <div class="nation-rank-row">
                      <span class="nation-rank-badge ${rankCls}">#${n.serverRank}</span>
                      ${tierBadge}
                      ${renderRecruitBadge(n.recruitmentStatus, lang)}
                    </div>
                    <h2 class="nation-card-title">${W.escapeHtml(n.name)}</h2>
                    <div class="nation-leader-line">${lang === "fr" ? "Chef" : "Leader"}: <strong>${W.escapeHtml(n.leaderName)}</strong></div>
                  </div>
                </div>

                ${xpHtml}

                <div class="nation-stats-mini">
                  <div class="nation-stat-cell">
                    <span class="nation-stat-lbl">${lang === "fr" ? "Membres" : "Members"}</span>
                    <span class="nation-stat-val">${n.memberCount}${tm ? `/${tm.maxMembers}` : ""}</span>
                  </div>
                  <div class="nation-stat-cell">
                    <span class="nation-stat-lbl">${lang === "fr" ? "Parcelles" : "Parcels"}</span>
                    <span class="nation-stat-val">${n.claimCount}</span>
                  </div>
                  <div class="nation-stat-cell">
                    <span class="nation-stat-lbl">${lang === "fr" ? "Citoyens" : "Citizens"}</span>
                    <span class="nation-stat-val">${formatNumber(n.citizenCount)}</span>
                  </div>
                </div>

                <div class="nation-card-foot">
                  <span>${W.escapeHtml(n.continent)}${n.subCities.length ? ` • ${n.subCities.length} ${lang === "fr" ? "ville(s)" : "city(ies)"}` : ""}</span>
                  <span style="color:var(--accent-bright);font-weight:700;">${lang === "fr" ? "Voir la fiche ->" : "Inspect ->"}</span>
                </div>
              </article>
            `;
          }).join("")}
        </div>
      `;
    }

    container.querySelectorAll("[data-nation-id]").forEach((el) => {
      el.addEventListener("click", () => {
        const nid = el.getAttribute("data-nation-id");
        openNationDetailPage(nid);
      });
    });

    hydrateVisibleFlags(container, list);
  }

  function hydrateVisibleFlags(root, list) {
    const byId = new Map(list.map((n) => [n.id, n]));
    root.querySelectorAll("img[data-flag-id]").forEach(async (imgEl) => {
      const n = byId.get(imgEl.getAttribute("data-flag-id"));
      if (!n || n.flagUrl || n.flag.length === 0) return;
      const url = await composeFlagUrl(n.flag);
      if (url) {
        n.flagUrl = url;
        imgEl.src = url;
      }
    });
  }

  function renderMemberRosterHtml(n) {
    const lang = W.getLang();
    if (!n.members || n.members.length === 0) {
      return `<p style="margin:0;font-size:12.5px;color:var(--text-muted);">${
        lang === "fr"
          ? `Dirigeant : ${W.escapeHtml(n.leaderName)} (liste complete des ${n.memberCount} membres disponible apres synchro nations.json).`
          : `Leader: ${W.escapeHtml(n.leaderName)} (full ${n.memberCount}-member roster populates once nations.json syncs).`
      }</p>`;
    }
    const q = state.memberSearch.trim().toLowerCase();
    const filtered = q ? n.members.filter((m) => m.name.toLowerCase().includes(q) || m.role.toLowerCase().includes(q)) : n.members;
    if (filtered.length === 0) {
      return `<p style="margin:0;font-size:12px;color:var(--text-muted);">${lang === "fr" ? "Aucun membre trouve." : "No matching members."}</p>`;
    }
    return `
      <div class="nation-members-list">
        ${filtered.map((m) => {
          const cleanRole = m.isLeader
            ? (lang === "fr" ? "Chef" : "Leader")
            : m.role.replace(/^role_/, "");
          return `
            <div class="nation-member-pill ${m.isLeader ? "is-leader" : ""}">
              <strong>${W.escapeHtml(m.name)}</strong>
              <span class="badge ${m.isLeader ? "badge-gold" : ""}">${W.escapeHtml(cleanRole)}</span>
            </div>
          `;
        }).join("")}
      </div>
    `;
  }

  function openNationModal(nationId) {
    openNationDetailPage(nationId);
  }

  function closeModal() {
    state.selectedNationId = null;
    document.getElementById("nationModal")?.classList.remove("open");
  }

  async function loadNationsData() {
    let raw = null;
    let isRich = false;
    try {
      const res = await fetch(`../nations.json?t=${Date.now()}`, { cache: "no-store" });
      if (res.ok) {
        const parsed = await res.json();
        if (parsed && Array.isArray(parsed.nations) && parsed.nations.length > 0) {
          raw = parsed;
          isRich = true;
        }
      }
    } catch { /* fallback to claims.json */ }

    if (!raw) {
      try {
        const res = await fetch(`../claims.json?t=${Date.now()}`, { cache: "no-store" });
        if (res.ok) {
          raw = await res.json();
        }
      } catch { /* ignore */ }
    }

    state.hasRichData = isRich;
    state.updated = raw?.updated || "";
    const normalized = (raw?.nations || [])
      .map((item) => sanitizeNation(item, isRich))
      .filter(Boolean);
    const ranked = computeServerRanking(normalized);
    ranked.forEach((n, idx) => { n.serverRank = idx + 1; });
    state.nations = ranked;
  }

  function refreshAll() {
    W.applyStaticTranslations(W.getLang());
    renderFilterOptions();
    renderKpis();
    renderNations();
    if (state.selectedNationId) openNationModal(state.selectedNationId);
  }

  async function init() {
    W.initThemeAndLangControls();

    state.continents = await loadContinents();
    await loadNationsData();
    refreshAll();

    document.getElementById("nationSearchInput")?.addEventListener("input", (e) => {
      state.query = e.target.value;
      renderNations();
    });
    document.getElementById("nationTierFilter")?.addEventListener("change", (e) => {
      state.tierFilter = e.target.value;
      renderNations();
    });
    document.getElementById("nationContinentFilter")?.addEventListener("change", (e) => {
      state.continentFilter = e.target.value;
      renderNations();
    });
    document.getElementById("nationRecruitFilter")?.addEventListener("change", (e) => {
      state.recruitFilter = e.target.value;
      renderNations();
    });
    document.getElementById("nationSortSelect")?.addEventListener("change", (e) => {
      state.sortBy = e.target.value;
      renderNations();
    });
    const setView = (mode, activeId) => {
      state.viewMode = mode;
      ["btnViewCards", "btnViewTable", "btnViewWeekly"].forEach((id) => {
        document.getElementById(id)?.classList.toggle("active", id === activeId);
      });
      renderNations();
    };
    document.getElementById("btnViewCards")?.addEventListener("click", () => setView("cards", "btnViewCards"));
    document.getElementById("btnViewTable")?.addEventListener("click", () => setView("table", "btnViewTable"));
    document.getElementById("btnViewWeekly")?.addEventListener("click", () => setView("weekly", "btnViewWeekly"));

    document.getElementById("nationModalClose")?.addEventListener("click", closeModal);
    document.getElementById("nationModal")?.addEventListener("click", (e) => {
      if (e.target.id === "nationModal") closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });

    window.addEventListener("frontier:langchange", refreshAll);

    const urlParams = new URLSearchParams(window.location.search);
    const paramNation = urlParams.get("nation") || urlParams.get("id");
    if (paramNation) {
      const target = state.nations.find((n) => n.id === paramNation || n.name.toLowerCase() === paramNation.toLowerCase());
      window.location.replace(`./nation.html?id=${encodeURIComponent(target ? target.id : paramNation)}`);
      return;
    }
    if (window.location.hash.startsWith("#nation=")) {
      const targetId = decodeURIComponent(window.location.hash.slice("#nation=".length));
      window.location.replace(`./nation.html?id=${encodeURIComponent(targetId)}`);
      return;
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
