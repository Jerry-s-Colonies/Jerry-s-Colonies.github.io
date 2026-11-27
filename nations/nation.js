/* ============================================================================
 * THE FRONTIER — Dedicated Nation Showcase Page
 * Hero Banner (Flag background + 3D Pyramid Formation), Leader Description Editor,
 * Real Role Roster, Research Level, Diplomacy (Allies/Enemies/Wars), Org & Win/Loss
 * ========================================================================== */
(function () {
  "use strict";

  const W = window.FrontierWiki;
  const S = window.FrontierNationsShared;
  const A = window.FrontierAccount;
  const SKIN3D = window.FrontierSkin3D;

  const state = {
    nation: null,
    allNations: [],
    continents: [],
    profilesMap: {},
    nationDescriptions: {},
    memberSearch: "",
    showLabels: true,
    editingDesc: false,
    pyramidViewer: null,
  };

  function fmt(v) {
    if (v === null || v === undefined || !Number.isFinite(v)) return "--";
    return Number(v).toLocaleString();
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

  function renderRecruitBadge(status, lang) {
    if (status === "closed") return `<span class="badge badge-crimson">${lang === "fr" ? "Ferme" : "Closed"}</span>`;
    if (status === "apply") return `<span class="badge badge-gold">${lang === "fr" ? "Candidature" : "Apply"}</span>`;
    return `<span class="badge badge-green">${lang === "fr" ? "Ouvert" : "Open"}</span>`;
  }

  function getTargetIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const qId = params.get("id") || params.get("nation") || "";
    if (qId) return qId.trim();
    if (window.location.hash.startsWith("#nation=")) {
      return decodeURIComponent(window.location.hash.slice("#nation=".length)).trim();
    }
    return "";
  }

  function isCurrentUserNationLeader(n) {
    if (!n || !A) return false;
    const snap = A.getAuthSnapshot();
    if (!snap.loggedIn || !snap.user) return false;
    const uname = String(snap.user.lowerName || snap.user.name || "").toLowerCase();
    if (uname && n.leaderName && n.leaderName.toLowerCase() === uname) return true;
    return Array.isArray(snap.ledNations) && snap.ledNations.some((ln) => ln.id === n.id);
  }

  async function hydrateMemberHeads(container) {
    if (!SKIN3D || !A) return;
    const relay = A.getRelayUrl();
    const defaultHead = SKIN3D.getDefaultGreyHeadDataUrl(24);
    container.querySelectorAll("img[data-member-head]").forEach((img) => {
      const name = img.getAttribute("data-member-head") || "";
      const lower = name.toLowerCase();
      const prof = state.profilesMap[lower];
      if (prof?.hasSkin && relay) {
        const url = `${relay}/api/public/skin/${encodeURIComponent(lower)}?v=${Number(prof.skinVersion) || 1}`;
        SKIN3D.getSkinHeadDataUrl(url, 24).then((dataUrl) => {
          img.src = dataUrl;
        });
      } else {
        img.src = defaultHead;
      }
    });
  }

  function renderNationRelationsHtml(list, emptyLabel, badgeCls = "badge-green") {
    if (!Array.isArray(list) || list.length === 0) {
      return `<span style="font-size:12.5px; color:var(--text-muted);">${W.escapeHtml(emptyLabel)}</span>`;
    }
    return `<div class="nation-rel-pills">${list
      .map((item) => {
        const id = String(item?.id || "");
        const name = String(item?.name || id);
        const extra = [];
        if (item?.viaOrg) extra.push("Org");
        if (item?.battleCount > 0) extra.push(`Siege x${item.battleCount}`);
        const tagText = extra.length ? ` <small style="opacity:0.8">(${extra.join(", ")})</small>` : "";
        return `<a class="badge ${badgeCls} nation-rel-link" href="./nation.html?id=${encodeURIComponent(id)}">${W.escapeHtml(name)}${tagText}</a>`;
      })
      .join("")}</div>`;
  }

  function renderMemberRosterHtml(n, lang) {
    if (!n.members || n.members.length === 0) {
      return `<p style="margin:0; font-size:12.5px; color:var(--text-muted);">${
        lang === "fr"
          ? `Dirigeant : ${W.escapeHtml(n.leaderName)} (liste complete apres prochaine synchronisation).`
          : `Leader: ${W.escapeHtml(n.leaderName)} (full roster populates on next server sync).`
      }</p>`;
    }
    const q = state.memberSearch.trim().toLowerCase();
    const filtered = q
      ? n.members.filter((m) => {
          const rLabel = S.resolveMemberRoleDisplay(m, n, lang).toLowerCase();
          return m.name.toLowerCase().includes(q) || rLabel.includes(q);
        })
      : n.members;

    if (!filtered.length) {
      return `<p style="margin:0; font-size:12.5px; color:var(--text-muted);">${lang === "fr" ? "Aucun membre trouve." : "No matching members."}</p>`;
    }

    return `
      <div class="nation-members-list">
        ${filtered
          .map((m) => {
            const roleLabel = S.resolveMemberRoleDisplay(m, n, lang);
            return `
              <a class="nation-member-pill ${m.isLeader ? "is-leader" : ""}" href="../players/?player=${encodeURIComponent(m.name)}" style="text-decoration:none;">
                <span style="display:flex; align-items:center; gap:8px; min-width:0;">
                  <img class="nation-member-head" data-member-head="${W.escapeHtml(m.name)}" alt="" />
                  <strong style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${W.escapeHtml(m.name)}</strong>
                </span>
                <span class="badge ${m.isLeader ? "badge-gold" : ""}">${W.escapeHtml(roleLabel)}</span>
              </a>
            `;
          })
          .join("")}
      </div>
    `;
  }

  async function renderDetail() {
    const main = document.getElementById("nationDetailMain");
    if (!main) return;
    const lang = W.getLang();
    const n = state.nation;

    if (state.pyramidViewer) {
      state.pyramidViewer.destroy();
      state.pyramidViewer = null;
    }

    if (!n) {
      main.innerHTML = `
        <section class="oreui-panel nations-empty-state">
          <h2 style="margin-top:0">${lang === "fr" ? "Nation introuvable" : "Nation Not Found"}</h2>
          <p>${lang === "fr" ? "Cette nation n'existe plus ou n'est pas encore synchronisee." : "This nation could not be found in public data."}</p>
          <a class="oreui-btn oreui-btn-gold" href="./index.html">${lang === "fr" ? "Retour au classement des Nations" : "Back to Nations Rankings"}</a>
        </section>
      `;
      return;
    }

    document.title = `${n.name} — The Frontier`;
    const topTitle = document.getElementById("nationTopbarTitle");
    if (topTitle) topTitle.textContent = n.name.toUpperCase();

    const tm = n.tier !== null ? S.getTierMeta(n.tier) : null;
    const xpProg = n.xp !== null ? S.getXpProgress(n.xp, n.level) : null;
    const leaderDisplayTitle = S.resolveLeaderTitleDisplay(n.leaderTitle, lang);
    const customDescRecord = state.nationDescriptions[n.id];
    const customDesc = customDescRecord?.description ? customDescRecord.description.trim() : "";
    const isLeaderUser = isCurrentUserNationLeader(n);

    const org = n.organization;
    const orgDoctrine = org ? (S.DOCTRINE_LABELS[org.doctrine]?.[lang] || org.doctrine) : "";
    const ws = n.warStats;
    const res = n.research;

    const coordsText = n.capital
      ? `X ${n.capital.x}, Z ${n.capital.z}`
      : (lang === "fr" ? "Inconnue" : "Unknown");

    main.innerHTML = `
      <!-- 1. HERO BANNER: Flag Backdrop + Interactive 3D Pyramid Formation -->
      <section class="oreui-panel nation-showcase-banner" id="nationShowcaseBanner">
        <div class="nation-banner-flag-bg" id="nationBannerFlagBg"></div>
        <div class="nation-banner-vignette"></div>

        <canvas class="nation-pyramid-canvas" id="nationPyramidCanvas"></canvas>
        <div class="nation-pyramid-labels" id="nationPyramidLabels"></div>

        <div class="nation-banner-top-bar">
          <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
            <span class="nation-rank-badge ${n.serverRank <= 3 ? `rank-${n.serverRank}` : ""}">#${n.serverRank}</span>
            ${tm ? `<span class="badge ${tm.badgeCls}">Tier ${tm.id} • ${W.escapeHtml(lang === "fr" ? tm.fr : tm.en)}</span>` : ""}
            ${org ? `<span class="badge badge-purple">[${W.escapeHtml(org.tag || "ORG")}] ${W.escapeHtml(org.name)}</span>` : ""}
          </div>
          <div style="display:flex; gap:6px; flex-wrap:wrap;">
            <button type="button" class="oreui-btn oreui-btn-sm" id="btnToggle3dLabels">${state.showLabels ? (lang === "fr" ? "Noms: ON" : "Labels: ON") : (lang === "fr" ? "Noms: OFF" : "Labels: OFF")}</button>
            <button type="button" class="oreui-btn oreui-btn-sm oreui-btn-info" id="btnReset3dCam">${lang === "fr" ? "Recentrer 3D" : "Reset 3D"}</button>
          </div>
        </div>

        <div class="nation-banner-bottom-ribbon">
          <div style="display:flex; align-items:center; gap:14px; min-width:0;">
            <img class="nation-banner-mini-flag" id="nationBannerMiniFlag" alt="${W.escapeHtml(n.name)}" />
            <div style="min-width:0;">
              <h1 class="nation-showcase-title" style="color:${W.escapeHtml(n.color || "#ffffff")};">${W.escapeHtml(n.name)}</h1>
              <div class="nation-showcase-sub">
                <span>${W.escapeHtml(leaderDisplayTitle)} : <strong>${W.escapeHtml(n.leaderName)}</strong></span>
                <span>•</span>
                <span>${W.escapeHtml(n.continent)}${n.capitalName ? ` (${W.escapeHtml(n.capitalName)})` : ""}</span>
                ${n.level !== null ? `<span>•</span><span>${lang === "fr" ? `Niveau ${n.level}` : `Level ${n.level}`}</span>` : ""}
              </div>
            </div>
          </div>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            ${renderRecruitBadge(n.recruitmentStatus, lang)}
            <a class="oreui-btn oreui-btn-sm oreui-btn-info" href="../map/">${lang === "fr" ? "Voir sur la Carte" : "Open Map"}</a>
            <a class="oreui-btn oreui-btn-sm" href="./index.html">${lang === "fr" ? "Classement" : "Rankings"}</a>
          </div>
        </div>
      </section>

      <!-- 2. LEADER DESCRIPTION + EDIT PANEL -->
      <section class="oreui-card nation-desc-card">
        <div class="nation-desc-head">
          <div>
            <h2 class="nation-sec-title">${lang === "fr" ? "Description de la Nation" : "Nation Description"}</h2>
            ${customDescRecord?.updatedAt ? `<span style="font-size:11.5px; color:var(--text-muted);">${lang === "fr" ? "Mise a jour par" : "Updated by"} ${W.escapeHtml(customDescRecord.updatedBy || n.leaderName)} (${formatDateShort(customDescRecord.updatedAt, lang)})</span>` : ""}
          </div>
          ${isLeaderUser
            ? `<button type="button" class="oreui-btn oreui-btn-sm oreui-btn-gold" id="btnToggleDescEdit">${
                state.editingDesc
                  ? (lang === "fr" ? "Annuler" : "Cancel")
                  : (lang === "fr" ? "Editer la description" : "Edit Description")
              }</button>`
            : `<span style="font-size:11.5px; color:var(--text-muted);">${
                lang === "fr" ? "Seul le chef connecte via /frontier:account peut editer" : "Only leader signed in via /frontier:account can edit"
              }</span>`}
        </div>

        ${state.editingDesc && isLeaderUser ? `
          <div style="margin-top:10px;">
            <textarea id="nationDescTextarea" class="fe-acct-textarea" maxlength="1200" placeholder="${lang === "fr" ? "Presentez votre nation, ses lois, son histoire ou son recrutement..." : "Describe your nation, lore, laws or recruitment rules..."}">${W.escapeHtml(customDesc)}</textarea>
            <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; margin-top:8px; flex-wrap:wrap;">
              <span style="font-size:11.5px; color:var(--text-muted);"><span id="nationDescCount">${customDesc.length}</span>/1200</span>
              <div style="display:flex; gap:8px;">
                <span id="nationDescMsg" style="font-size:12px;"></span>
                <button type="button" class="oreui-btn oreui-btn-sm oreui-btn-primary" id="btnSaveNationDesc">${lang === "fr" ? "Enregistrer" : "Save Description"}</button>
              </div>
            </div>
          </div>
        ` : `
          <p class="nation-desc-body">${
            customDesc
              ? W.escapeHtml(customDesc).replace(/\n/g, "<br>")
              : `<span style="color:var(--text-muted); font-style:italic;">${
                  lang === "fr"
                    ? "Aucune description officielle redigee par le dirigeant pour le moment."
                    : "No official description has been written by the leader yet."
                }</span>`
          }</p>
        `}

        ${n.recruitmentNote ? `<div class="nation-recruit-note"><strong>${lang === "fr" ? "Note de recrutement :" : "Recruitment note:"}</strong> ${W.escapeHtml(n.recruitmentNote)}</div>` : ""}
      </section>

      <!-- 3. CORE STATS + MILITARY WIN/LOSS + RESEARCH + ORG -->
      <section class="nation-detail-grid">
        <div class="oreui-card">
          <h3 class="nation-sec-title">${lang === "fr" ? "Informations Generales" : "General Overview"}</h3>
          <div class="nation-modal-stats" style="margin-top:10px; margin-bottom:10px;">
            <div class="nation-stat-cell">
              <span class="nation-stat-lbl">${lang === "fr" ? "Membres" : "Members"}</span>
              <span class="nation-stat-val">${n.memberCount} / ${tm ? tm.maxMembers : "--"}</span>
            </div>
            <div class="nation-stat-cell">
              <span class="nation-stat-lbl">${lang === "fr" ? "Citoyens NPC" : "NPC Citizens"}</span>
              <span class="nation-stat-val">${n.citizenCount !== null ? n.citizenCount : "--"}</span>
            </div>
            <div class="nation-stat-cell">
              <span class="nation-stat-lbl">${lang === "fr" ? "Parcelles" : "Parcels"}</span>
              <span class="nation-stat-val">${fmt(n.claimCount)}</span>
            </div>
            <div class="nation-stat-cell">
              <span class="nation-stat-lbl">${lang === "fr" ? "Fondation" : "Founded"}</span>
              <span class="nation-stat-val">${formatDateShort(n.createdAt, lang)}</span>
            </div>
          </div>

          ${xpProg ? `
            <div class="nation-xp-box" style="margin-bottom:10px;">
              <div class="nation-xp-head">
                <span><strong>${lang === "fr" ? `Niveau ${n.level}` : `Level ${n.level}`}</strong> (${fmt(n.xp)} XP)</span>
                <span>${xpProg.pct}% -> Lv.${Math.min(S.MAX_NATION_LEVEL, n.level + 1)}</span>
              </div>
              <div class="nation-xp-track"><div class="nation-xp-fill" style="width:${xpProg.pct}%"></div></div>
            </div>
          ` : ""}

          <div style="font-size:12.5px; color:var(--text-secondary);">
            <strong>${lang === "fr" ? "Capitale :" : "Capital:"}</strong> ${W.escapeHtml(n.capitalName || n.name)} • ${W.escapeHtml(coordsText)} (${W.escapeHtml(n.continent)})
          </div>
          ${n.subCities.length ? `
            <div class="nation-subcities-row" style="margin-top:8px;">
              ${n.subCities.map((sc) => `<span class="badge badge-blue">${W.escapeHtml(sc.name)} (${W.escapeHtml(sc.type)})</span>`).join("")}
            </div>
          ` : ""}
        </div>

        <div class="oreui-card">
          <h3 class="nation-sec-title">${lang === "fr" ? "Recherche & Technologie" : "Research & Tech Level"}</h3>
          <div class="nation-xp-box" style="margin-top:10px; margin-bottom:10px;">
            <div class="nation-xp-head">
              <span><strong>${lang === "fr" ? `Niveau Recherche : ${res.level}` : `Research Level: ${res.level}`}</strong></span>
              <span>${res.unlockedCount} / ${res.totalNodes} (${res.pct}%)</span>
            </div>
            <div class="nation-xp-track"><div class="nation-xp-fill" style="width:${res.pct}%"></div></div>
          </div>
          ${res.categories.length ? `
            <div class="nation-research-cats">
              ${res.categories
                .map((c) => {
                  const lbl = S.CATEGORY_LABELS[c.id]?.[lang] || c.id;
                  return `<div class="nation-stat-cell" style="text-align:left; display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size:12px;">${W.escapeHtml(lbl)}</span>
                    <strong>${c.unlocked}/${c.total}</strong>
                  </div>`;
                })
                .join("")}
            </div>
          ` : `<p style="font-size:12px; color:var(--text-muted); margin:6px 0 0;">${lang === "fr" ? "Details par branche disponibles apres synchronisation serveur." : "Branch breakdown populates after server sync."}</p>`}
        </div>
      </section>

      <!-- 4. WAR RECORD + ORGANIZATION + DIPLOMACY -->
      <section class="nation-detail-grid">
        <div class="oreui-card">
          <h3 class="nation-sec-title">${lang === "fr" ? "Palmares Militaire & Organisation" : "War Record & Organization"}</h3>
          <div class="nation-modal-stats" style="margin-top:10px; margin-bottom:12px;">
            <div class="nation-stat-cell">
              <span class="nation-stat-lbl">${lang === "fr" ? "Victoires" : "Victories"}</span>
              <span class="nation-stat-val" style="color:var(--ok);">${fmt(ws.totalWins)}</span>
            </div>
            <div class="nation-stat-cell">
              <span class="nation-stat-lbl">${lang === "fr" ? "Defaites" : "Defeats"}</span>
              <span class="nation-stat-val" style="color:var(--crimson-bright);">${fmt(ws.totalLosses)}</span>
            </div>
            <div class="nation-stat-cell">
              <span class="nation-stat-lbl">${lang === "fr" ? "Guerres (G/P)" : "Wars (W/L)"}</span>
              <span class="nation-stat-val">${ws.warsWon} / ${ws.warsLost}</span>
            </div>
            <div class="nation-stat-cell">
              <span class="nation-stat-lbl">${lang === "fr" ? "Batailles (G/P)" : "Battles (W/L)"}</span>
              <span class="nation-stat-val">${ws.battlesWon} / ${ws.battlesLost}</span>
            </div>
          </div>

          <div class="nation-org-box">
            <div style="font-size:11.5px; text-transform:uppercase; color:var(--text-muted); margin-bottom:4px;">${lang === "fr" ? "Organisation Internationale" : "International Organization"}</div>
            ${org ? `
              <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap;">
                <div>
                  <strong style="font-size:15px;">[${W.escapeHtml(org.tag || "ORG")}] ${W.escapeHtml(org.name)}</strong>
                  <div style="font-size:12px; color:var(--text-secondary);">${W.escapeHtml(orgDoctrine)} • Lv.${org.level || 1} • ${org.memberCount || 0} ${lang === "fr" ? "nations" : "nations"}</div>
                </div>
                <span class="badge badge-purple">Alliance Lv.${org.level || 1}</span>
              </div>
            ` : `<span style="font-size:12.5px; color:var(--text-muted);">${lang === "fr" ? "Aucune organisation internationale" : "No international organization"}</span>`}
          </div>
        </div>

        <div class="oreui-card">
          <h3 class="nation-sec-title">${lang === "fr" ? "Diplomatie & Guerres en Cours" : "Diplomacy & Active Wars"}</h3>
          <div class="nation-diplo-stack" style="margin-top:10px;">
            <div>
              <div class="nation-diplo-lbl">${lang === "fr" ? "En Guerre Avec :" : "At War With:"}</div>
              ${renderNationRelationsHtml(n.atWarWith, lang === "fr" ? "Aucune guerre active" : "No active wars", "badge-crimson")}
            </div>
            <div>
              <div class="nation-diplo-lbl">${lang === "fr" ? "Nations Alliees :" : "Allied Nations:"}</div>
              ${renderNationRelationsHtml(n.allies, lang === "fr" ? "Aucun allie" : "No allies", "badge-green")}
            </div>
            <div>
              <div class="nation-diplo-lbl">${lang === "fr" ? "Nations Ennemies :" : "Enemy Nations:"}</div>
              ${renderNationRelationsHtml(n.enemies, lang === "fr" ? "Aucun ennemi declare" : "No declared enemies", "badge-crimson")}
            </div>
            ${n.nap.length ? `
              <div>
                <div class="nation-diplo-lbl">${lang === "fr" ? "Pactes de Non-Agression (PNA) :" : "Non-Aggression Pacts (NAP):"}</div>
                ${renderNationRelationsHtml(n.nap, "--", "badge-blue")}
              </div>
            ` : ""}
          </div>
        </div>
      </section>

      <!-- 5. MEMBERS ROSTER WITH REAL ROLES -->
      <section class="oreui-card nation-members-box" style="margin-top:14px;">
        <div class="nation-members-head">
          <strong style="font-size:15px;">${lang === "fr" ? `Membres & Roles (${n.memberCount})` : `Members & Roles (${n.memberCount})`}</strong>
          <input class="ore-input" id="nationDetailMemberSearch" type="search" value="${W.escapeHtml(state.memberSearch)}"
            placeholder="${lang === "fr" ? "Rechercher membre ou role..." : "Filter member or role..."}"
            style="max-width:250px; padding:5px 9px; font-size:12.5px;" />
        </div>
        <div id="nationDetailMemberRoster">${renderMemberRosterHtml(n, lang)}</div>
      </section>
    `;

    // Compose Banner Flag Backdrop + Mini Flag
    if (n.flag.length > 0) {
      S.composeFlagUrl(n.flag, 384, 240).then((bigUrl) => {
        const bgEl = document.getElementById("nationBannerFlagBg");
        if (bgEl && bigUrl) bgEl.style.backgroundImage = `url("${bigUrl}")`;
      });
      S.composeFlagUrl(n.flag, 96, 60).then((smallUrl) => {
        const imgEl = document.getElementById("nationBannerMiniFlag");
        if (imgEl && smallUrl) imgEl.src = smallUrl;
      });
    }

    // Mount 3D Pyramid Formation (Leader center front, members ranked behind with depth)
    const pyrCanvas = document.getElementById("nationPyramidCanvas");
    const pyrLabels = document.getElementById("nationPyramidLabels");
    if (SKIN3D && pyrCanvas) {
      const sortedMembers = n.members.length
        ? [...n.members].sort((a, b) => (a.isLeader === b.isLeader ? 0 : a.isLeader ? -1 : 1))
        : [{ name: n.leaderName !== "--" ? n.leaderName : "Leader", isLeader: true, role: "leader" }];

      const labelEls = new Map();
      if (pyrLabels) {
        sortedMembers.slice(0, 21).forEach((m) => {
          const el = document.createElement("a");
          el.className = `nation-3d-tag ${m.isLeader ? "is-leader" : ""}`;
          el.href = `../players/?player=${encodeURIComponent(m.name)}`;
          const rLbl = S.resolveMemberRoleDisplay(m, n, lang);
          el.innerHTML = `<span class="tag-role">${W.escapeHtml(rLbl)}</span> <strong>${W.escapeHtml(m.name)}</strong>`;
          pyrLabels.appendChild(el);
          labelEls.set(m.name, el);
        });
      }

      state.pyramidViewer = SKIN3D.mountNationPyramidViewer(pyrCanvas, {
        members: sortedMembers,
        profilesMap: state.profilesMap,
        relayUrl: A ? A.getRelayUrl() : "",
        onSelectMember(m) {
          if (m?.name) window.location.href = `../players/?player=${encodeURIComponent(m.name)}`;
        },
        onFrameProject(list) {
          if (!pyrLabels) return;
          pyrLabels.style.display = state.showLabels ? "block" : "none";
          if (!state.showLabels) return;
          const hero = pyrLabels.parentElement;
          const cLeft = pyrCanvas.offsetLeft || 0;
          const cTop = pyrCanvas.offsetTop || 0;
          const cW = pyrCanvas.offsetWidth || pyrCanvas.clientWidth || 1;
          const cH = pyrCanvas.offsetHeight || pyrCanvas.clientHeight || 1;
          const hW = hero?.clientWidth || cW;
          const minTop = Math.max(38, cTop + 22);
          const maxTop = cTop + cH - 8;

          const ordered = [...list].sort((a, b) => a.row - b.row || a.depth - b.depth);
          const placed = [];

          for (const item of ordered) {
            const el = labelEls.get(item.member?.name);
            if (!el) continue;
            const s = Math.max(0.82, Math.min(1.06, 1.05 - Math.min(item.row, 5) * 0.035));
            const tagW = (el.offsetWidth || Math.max(76, String(item.member?.name || "").length * 7 + 44)) * s;
            const tagH = (el.offsetHeight || 22) * s;
            const halfW = tagW * 0.5 + 4;
            const rawX = cLeft + (item.xPct / 100) * cW;
            const cx = Math.max(halfW + 6, Math.min(hW - halfW - 6, rawX));
            const baseBottomY = cTop + (item.yPct / 100) * cH - 6;

            let chosenY = Math.max(minTop + tagH, Math.min(maxTop, baseBottomY));
            const offsets = [0, -(tagH + 5), -(tagH + 5) * 2, tagH + 5, -(tagH + 5) * 3];
            for (const off of offsets) {
              const cand = baseBottomY + off;
              if (cand - tagH < 36 || cand > maxTop) continue;
              const x1 = cx - tagW * 0.5 - 3;
              const x2 = cx + tagW * 0.5 + 3;
              const y1 = cand - tagH - 3;
              const y2 = cand + 3;
              const collides = placed.some((p) => !(x2 < p.x1 || x1 > p.x2 || y2 < p.y1 || y1 > p.y2));
              if (!collides) {
                chosenY = cand;
                break;
              }
            }

            placed.push({
              x1: cx - tagW * 0.5 - 3,
              x2: cx + tagW * 0.5 + 3,
              y1: chosenY - tagH - 3,
              y2: chosenY + 3,
            });
            el.style.left = `${cx.toFixed(1)}px`;
            el.style.top = `${chosenY.toFixed(1)}px`;
            el.style.zIndex = String(Math.max(1, 50 - item.row * 4));
            el.style.transform = `translate(-50%, -100%) scale(${s.toFixed(2)})`;
          }
        },
      });
    }

    document.getElementById("btnToggle3dLabels")?.addEventListener("click", () => {
      state.showLabels = !state.showLabels;
      const b = document.getElementById("btnToggle3dLabels");
      if (b) b.textContent = state.showLabels ? (lang === "fr" ? "Noms: ON" : "Labels: ON") : (lang === "fr" ? "Noms: OFF" : "Labels: OFF");
    });

    document.getElementById("btnReset3dCam")?.addEventListener("click", () => {
      if (state.pyramidViewer) state.pyramidViewer.resetCamera();
    });

    document.getElementById("btnToggleDescEdit")?.addEventListener("click", () => {
      state.editingDesc = !state.editingDesc;
      renderDetail();
    });

    const descTa = document.getElementById("nationDescTextarea");
    const descCount = document.getElementById("nationDescCount");
    if (descTa && descCount) {
      descTa.addEventListener("input", () => {
        descCount.textContent = String(descTa.value.length);
      });
    }

    document.getElementById("btnSaveNationDesc")?.addEventListener("click", async () => {
      const btn = document.getElementById("btnSaveNationDesc");
      const msg = document.getElementById("nationDescMsg");
      if (!btn || !descTa || !A) return;
      btn.disabled = true;
      if (msg) msg.textContent = lang === "fr" ? "Sauvegarde..." : "Saving...";
      try {
        const res = await A.saveNationDescription(n.id, descTa.value);
        state.nationDescriptions[n.id] = {
          description: res.description,
          updatedBy: res.updatedBy,
          updatedAt: res.updatedAt,
        };
        state.editingDesc = false;
        renderDetail();
      } catch (err) {
        if (msg) {
          msg.style.color = "var(--danger)";
          msg.textContent = err.message || "Error";
        }
        btn.disabled = false;
      }
    });

    document.getElementById("nationDetailMemberSearch")?.addEventListener("input", (e) => {
      state.memberSearch = e.target.value;
      const rosterBox = document.getElementById("nationDetailMemberRoster");
      if (rosterBox) {
        rosterBox.innerHTML = renderMemberRosterHtml(n, W.getLang());
        hydrateMemberHeads(rosterBox);
      }
    });

    hydrateMemberHeads(main);
  }

  async function loadAllData() {
    state.continents = await S.loadContinents();
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
    } catch {}

    if (!raw) {
      try {
        const res = await fetch(`../claims.json?t=${Date.now()}`, { cache: "no-store" });
        if (res.ok) raw = await res.json();
      } catch {}
    }

    const normalized = (raw?.nations || [])
      .map((item) => S.sanitizeNation(item, isRich, state.continents))
      .filter(Boolean);
    const ranked = S.computeServerRanking(normalized);
    ranked.forEach((n, idx) => { n.serverRank = idx + 1; });
    state.allNations = ranked;

    const targetId = getTargetIdFromUrl();
    state.nation = ranked.find((n) => n.id === targetId || n.name.toLowerCase() === targetId.toLowerCase()) || null;

    if (A) {
      const pub = await A.fetchPublicProfiles(true);
      state.profilesMap = pub.profiles || {};
      state.nationDescriptions = pub.nationDescriptions || {};
    }
  }

  async function init() {
    W.initThemeAndLangControls();
    await loadAllData();
    W.applyStaticTranslations(W.getLang());
    await renderDetail();

    window.addEventListener("frontier:langchange", () => {
      W.applyStaticTranslations(W.getLang());
      renderDetail();
    });
    window.addEventListener("frontier:auth-changed", () => renderDetail());
    window.addEventListener("frontier:profile-updated", async () => {
      if (A) {
        const pub = await A.fetchPublicProfiles(true);
        state.profilesMap = pub.profiles || {};
      }
      renderDetail();
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
