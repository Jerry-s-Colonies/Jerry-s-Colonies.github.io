/**
 * The Frontier — Shared Website Account & Profile Manager
 * Adds the top-corner grey player-head login button on every page +
 * Profile / Skin Upload / Bio + Nation Description management modal.
 */
(function (global) {
  "use strict";

  const DEFAULT_RELAY = "https://frontier-webpanel-relay.frontiermc.workers.dev";
  const STORAGE_TOKEN_KEY = "frontier_player_jwt_v1";
  const STORAGE_USER_KEY = "frontier_player_meta_v1";

  function getRelayUrl() {
    const cfg = global.FRONTIER_WEB_CONFIG || {};
    return String(cfg.defaultRelayUrl || DEFAULT_RELAY).replace(/\/+$/, "");
  }

  function resolveSiteRoot() {
    const scripts = document.querySelectorAll('script[src*="frontier-account.js"]');
    const el = scripts[scripts.length - 1];
    if (el && el.src) {
      try {
        return new URL("../../", el.src).href.replace(/\/+$/, "");
      } catch {}
    }
    return "";
  }

  const SITE_ROOT = resolveSiteRoot();

  function siteUrl(relPath) {
    const clean = String(relPath || "").replace(/^\/+/, "");
    return SITE_ROOT ? `${SITE_ROOT}/${clean}` : `/${clean}`;
  }

  function getPageLang() {
    try {
      const saved =
        localStorage.getItem("frontier_lang") ||
        localStorage.getItem("frontier_admin_lang") ||
        document.documentElement.getAttribute("lang") ||
        "fr";
      return String(saved).toLowerCase().startsWith("en") ? "en" : "fr";
    } catch {
      return "fr";
    }
  }

  const I18N = {
    fr: {
      loginBtn: "Connexion",
      loginTip: "Connexion & Profil joueur (/frontier:account)",
      loginTitle: "CONNEXION COMPTE JOUEUR",
      loginSub: "Connectez-vous avec votre pseudo Minecraft et le mot de passe defini en jeu.",
      loginHint:
        "En jeu sur The Frontier, tapez <code>/frontier:account</code> (ou <code>!account</code> dans le chat) pour definir votre mot de passe web securise.",
      userLabel: "Pseudo Minecraft",
      userPh: "Votre gamertag exact",
      passLabel: "Mot de passe Web (defini en jeu)",
      passPh: "Votre mot de passe",
      submitLogin: "Se connecter",
      signingIn: "Connexion...",
      profileTitle: "MON PROFIL THE FRONTIER",
      logout: "Deconnexion",
      bioLabel: "Description personnelle / Bio (visible sur votre fiche)",
      bioPh: "Presentez votre personnage, votre parcours ou vos ambitions sur The Frontier...",
      skinTitle: "Skin Minecraft (.png)",
      skinDrop: "Cliquez ou deposez votre fichier skin .png ici (64x64, 64x32 ou 128x128)",
      skinRemove: "Retirer mon skin",
      skinModel: "Modele de bras :",
      modelClassic: "Classique (Steve 4px)",
      modelSlim: "Fin (Alex 3px)",
      saveProfile: "Enregistrer le profil",
      saving: "Enregistrement...",
      savedOk: "Profil et skin enregistres sur le site !",
      skinCleared: "Skin retire. Enregistrez pour confirmer ou choisissez un autre fichier.",
      skinBadType: "Veuillez selectionner un fichier image PNG (.png).",
      skinBadSize: "Dimensions invalides (%wx%h). Formats acceptes : 64x64, 64x32, 128x128 ou 128x64.",
      skinTooBig: "Fichier trop lourd (max 128 Ko).",
      nationsLedTitle: "Direction de Nation (Chef)",
      nationsLedHint: "Vous dirigez les nations suivantes. Editez leur description directement sur leur page :",
      openNationPage: "Ouvrir & Editer",
      dragHint: "Glissez pour faire pivoter votre skin 3D",
      noNationLed: "Aucune nation dirigee actuellement.",
    },
    en: {
      loginBtn: "Sign In",
      loginTip: "Player Account & Profile (/frontier:account)",
      loginTitle: "PLAYER ACCOUNT LOGIN",
      loginSub: "Sign in using your Minecraft username and the website password set in-game.",
      loginHint:
        "In-game on The Frontier, run <code>/frontier:account</code> (or type <code>!account</code> in chat) to set your website password.",
      userLabel: "Minecraft Username",
      userPh: "Your exact gamertag",
      passLabel: "Website Password (set in-game)",
      passPh: "Your password",
      submitLogin: "Sign In",
      signingIn: "Signing in...",
      profileTitle: "MY THE FRONTIER PROFILE",
      logout: "Sign Out",
      bioLabel: "Personal Bio / Description (shown on your player card)",
      bioPh: "Write a short bio about your character, builds or ambitions...",
      skinTitle: "Minecraft Skin (.png)",
      skinDrop: "Click or drop your .png skin file here (64x64, 64x32 or 128x128)",
      skinRemove: "Remove skin",
      skinModel: "Arm model:",
      modelClassic: "Classic (Steve 4px)",
      modelSlim: "Slim (Alex 3px)",
      saveProfile: "Save Profile",
      saving: "Saving...",
      savedOk: "Profile & skin saved live on the site!",
      skinCleared: "Skin cleared. Save to apply or choose another PNG.",
      skinBadType: "Please choose a valid PNG image (.png).",
      skinBadSize: "Invalid dimensions (%wx%h). Expected 64x64, 64x32, 128x128 or 128x64.",
      skinTooBig: "PNG file too large (max 128 KB).",
      nationsLedTitle: "Nation Leadership",
      nationsLedHint: "You lead the nations below. Open their page to edit their public description:",
      openNationPage: "Open & Edit",
      dragHint: "Drag to rotate your 3D skin",
      noNationLed: "You do not currently lead a nation.",
    },
  };

  function tr(key) {
    const lang = getPageLang();
    return (I18N[lang] && I18N[lang][key]) || I18N.fr[key] || key;
  }

  let authState = {
    token: "",
    user: null,
    profile: null,
    ledNations: [],
  };
  let publicProfilesCache = null;
  let pendingSkinData = undefined;
  let clearSkinRequested = false;
  let viewerInstance = null;

  function loadStoredSession() {
    try {
      authState.token = localStorage.getItem(STORAGE_TOKEN_KEY) || "";
      const rawUser = localStorage.getItem(STORAGE_USER_KEY);
      if (rawUser) {
        const parsed = JSON.parse(rawUser);
        if (parsed && typeof parsed === "object") {
          authState.user = parsed.user || null;
          authState.profile = parsed.profile || null;
          authState.ledNations = Array.isArray(parsed.ledNations) ? parsed.ledNations : [];
        }
      }
    } catch {}
  }

  function persistSession() {
    try {
      if (!authState.token || !authState.user) {
        localStorage.removeItem(STORAGE_TOKEN_KEY);
        localStorage.removeItem(STORAGE_USER_KEY);
      } else {
        localStorage.setItem(STORAGE_TOKEN_KEY, authState.token);
        localStorage.setItem(
          STORAGE_USER_KEY,
          JSON.stringify({
            user: authState.user,
            profile: authState.profile,
            ledNations: authState.ledNations,
          }),
        );
      }
    } catch {}
  }

  function clearSession() {
    authState = { token: "", user: null, profile: null, ledNations: [] };
    persistSession();
    refreshTriggerButton();
    dispatchAuthChange();
  }

  function dispatchAuthChange() {
    global.dispatchEvent(new CustomEvent("frontier:auth-changed", { detail: getAuthSnapshot() }));
  }

  function getAuthSnapshot() {
    return {
      loggedIn: Boolean(authState.token && authState.user),
      token: authState.token,
      user: authState.user,
      profile: authState.profile,
      ledNations: authState.ledNations,
      relayUrl: getRelayUrl(),
    };
  }

  function getGreySvgHeadDataUri() {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8" shape-rendering="crispEdges">
      <rect width="8" height="8" fill="#8b909a"/>
      <rect x="0" y="0" width="8" height="2" fill="#5d626b"/>
      <rect x="0" y="2" width="1" height="1" fill="#5d626b"/>
      <rect x="7" y="2" width="1" height="1" fill="#5d626b"/>
      <rect x="1" y="4" width="1" height="1" fill="#d0d4dc"/>
      <rect x="2" y="4" width="1" height="1" fill="#464b54"/>
      <rect x="5" y="4" width="1" height="1" fill="#464b54"/>
      <rect x="6" y="4" width="1" height="1" fill="#d0d4dc"/>
      <rect x="3" y="5" width="2" height="1" fill="#707580"/>
      <rect x="3" y="6" width="2" height="1" fill="#5c616a"/>
    </svg>`;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  }

  async function apiFetch(path, { method = "GET", body = null, auth = false } = {}) {
    const headers = {};
    if (body !== null) headers["Content-Type"] = "application/json";
    if (auth && authState.token) headers["Authorization"] = `Bearer ${authState.token}`;
    const res = await fetch(`${getRelayUrl()}${path}`, {
      method,
      headers,
      body: body !== null ? JSON.stringify(body) : undefined,
    });
    const data = await res.json().catch(() => ({ ok: false, error: `HTTP ${res.status}` }));
    if (res.status === 401 && auth) {
      clearSession();
    }
    if (!res.ok || !data.ok) {
      throw new Error(data.error || `HTTP ${res.status}`);
    }
    return data;
  }

  async function fetchPublicProfiles(force = false) {
    if (!force && publicProfilesCache) return publicProfilesCache;
    try {
      const res = await fetch(`${getRelayUrl()}/api/public/profiles`, { cache: "no-store" });
      if (!res.ok) throw new Error("Failed profiles");
      const data = await res.json();
      if (data?.ok) {
        publicProfilesCache = {
          profiles: data.profiles || {},
          nationDescriptions: data.nationDescriptions || {},
        };
        return publicProfilesCache;
      }
    } catch {}
    return publicProfilesCache || { profiles: {}, nationDescriptions: {} };
  }

  async function refreshMe() {
    if (!authState.token) return false;
    try {
      const data = await apiFetch("/api/player/me", { auth: true });
      authState.user = data.user;
      authState.profile = data.profile;
      authState.ledNations = Array.isArray(data.ledNations) ? data.ledNations : [];
      persistSession();
      refreshTriggerButton();
      dispatchAuthChange();
      return true;
    } catch {
      return false;
    }
  }

  // ---------------------------------------------------------------------------
  // UI: Top-right Grey Head Trigger & Modal
  // ---------------------------------------------------------------------------
  let triggerBtn = null;
  let triggerImg = null;
  let triggerLabel = null;
  let modalBackdrop = null;

  function ensureHeaderMount() {
    if (triggerBtn && document.body.contains(triggerBtn)) return;

    const wrap = document.createElement("div");
    wrap.className = "fe-acct-mount";
    const btn = document.createElement("button");
    btn.type = "button";
    btn.id = "feAccountTriggerBtn";
    btn.className = "fe-acct-trigger";
    btn.title = tr("loginTip");

    const img = document.createElement("img");
    img.className = "fe-acct-avatar";
    img.alt = "Player Account";
    img.src = getGreySvgHeadDataUri();

    const lbl = document.createElement("span");
    lbl.className = "fe-acct-trigger-label";
    lbl.textContent = tr("loginBtn");

    btn.appendChild(img);
    btn.appendChild(lbl);
    btn.addEventListener("click", () => openAccountModal());
    wrap.appendChild(btn);

    const topbarActions = document.querySelector(".topbar-actions");
    const landingNav = document.querySelector(".landing-nav-links");
    if (topbarActions) {
      topbarActions.appendChild(wrap);
    } else if (landingNav) {
      landingNav.appendChild(wrap);
    } else {
      wrap.classList.add("fe-acct-floating");
      document.body.appendChild(wrap);
    }

    triggerBtn = btn;
    triggerImg = img;
    triggerLabel = lbl;
    refreshTriggerButton();
  }

  function refreshTriggerButton() {
    if (!triggerBtn) return;
    if (authState.token && authState.user) {
      triggerBtn.classList.add("is-logged-in");
      triggerLabel.textContent = authState.user.name;
      const hasSkin = authState.profile?.hasSkin;
      const ver = Number(authState.profile?.skinVersion) || 1;
      if (hasSkin && global.FrontierSkin3D) {
        const skinUrl = `${getRelayUrl()}/api/public/skin/${encodeURIComponent(authState.user.lowerName)}?v=${ver}`;
        global.FrontierSkin3D.getSkinHeadDataUrl(skinUrl, 24).then((dataUrl) => {
          if (triggerImg) triggerImg.src = dataUrl;
        });
      } else if (triggerImg) {
        triggerImg.src = getGreySvgHeadDataUri();
      }
    } else {
      triggerBtn.classList.remove("is-logged-in");
      if (triggerLabel) triggerLabel.textContent = tr("loginBtn");
      if (triggerImg) triggerImg.src = getGreySvgHeadDataUri();
    }
    if (triggerBtn) triggerBtn.title = tr("loginTip");
  }

  function closeModal() {
    if (viewerInstance) {
      viewerInstance.destroy();
      viewerInstance = null;
    }
    if (modalBackdrop) {
      modalBackdrop.classList.remove("open");
    }
  }

  function ensureModal() {
    if (modalBackdrop && document.body.contains(modalBackdrop)) return modalBackdrop;
    const backdrop = document.createElement("div");
    backdrop.id = "feAccountModalBackdrop";
    backdrop.className = "fe-acct-backdrop";
    backdrop.innerHTML = `<div class="fe-acct-dialog" role="dialog" aria-modal="true" id="feAccountModalDialog"></div>`;
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && backdrop.classList.contains("open")) closeModal();
    });
    document.body.appendChild(backdrop);
    modalBackdrop = backdrop;
    return backdrop;
  }

  function escapeHtml(s) {
    return String(s ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function openAccountModal() {
    const backdrop = ensureModal();
    const dialog = document.getElementById("feAccountModalDialog");
    if (viewerInstance) {
      viewerInstance.destroy();
      viewerInstance = null;
    }

    if (!authState.token || !authState.user) {
      dialog.className = "fe-acct-dialog is-login";
      dialog.innerHTML = `
        <button type="button" class="fe-acct-close" id="feAcctCloseBtn">X</button>
        <h2 class="fe-acct-title">${escapeHtml(tr("loginTitle"))}</h2>
        <p class="fe-acct-sub">${escapeHtml(tr("loginSub"))}</p>
        <div class="fe-acct-hint">${tr("loginHint")}</div>
        <div id="feAcctAlert" class="fe-acct-alert"></div>
        <form id="feAcctLoginForm">
          <div class="fe-acct-field">
            <label for="feAcctUserInput">${escapeHtml(tr("userLabel"))}</label>
            <input id="feAcctUserInput" class="fe-acct-input" type="text" placeholder="${escapeHtml(tr("userPh"))}" required autocomplete="username" />
          </div>
          <div class="fe-acct-field">
            <label for="feAcctPassInput">${escapeHtml(tr("passLabel"))}</label>
            <input id="feAcctPassInput" class="fe-acct-input" type="password" placeholder="${escapeHtml(tr("passPh"))}" required autocomplete="current-password" />
          </div>
          <button id="feAcctLoginSubmit" class="fe-acct-btn fe-acct-btn-primary" style="width:100%" type="submit">${escapeHtml(tr("submitLogin"))}</button>
        </form>
      `;
      document.getElementById("feAcctCloseBtn").onclick = closeModal;
      const alertBox = document.getElementById("feAcctAlert");
      const form = document.getElementById("feAcctLoginForm");
      const submitBtn = document.getElementById("feAcctLoginSubmit");

      form.onsubmit = async (e) => {
        e.preventDefault();
        alertBox.className = "fe-acct-alert";
        alertBox.textContent = "";
        const username = document.getElementById("feAcctUserInput").value.trim();
        const password = document.getElementById("feAcctPassInput").value;
        submitBtn.disabled = true;
        submitBtn.textContent = tr("signingIn");
        try {
          const data = await apiFetch("/api/player/login", {
            method: "POST",
            body: { username, password },
          });
          authState.token = data.token;
          authState.user = data.user;
          authState.profile = data.profile;
          authState.ledNations = Array.isArray(data.ledNations) ? data.ledNations : [];
          persistSession();
          refreshTriggerButton();
          dispatchAuthChange();
          openAccountModal();
        } catch (err) {
          alertBox.className = "fe-acct-alert show err";
          alertBox.textContent = err.message || "Error";
          submitBtn.disabled = false;
          submitBtn.textContent = tr("submitLogin");
        }
      };
      backdrop.classList.add("open");
      return;
    }

    // Logged-in Profile / Skin Studio Modal
    pendingSkinData = undefined;
    clearSkinRequested = false;
    const prof = authState.profile || { bio: "", slim: false, hasSkin: false, skinVersion: 0 };
    const currentSkinUrl = prof.hasSkin
      ? `${getRelayUrl()}/api/public/skin/${encodeURIComponent(authState.user.lowerName)}?v=${Number(prof.skinVersion) || 1}`
      : "";

    const ledListHtml = authState.ledNations.length
      ? authState.ledNations
          .map(
            (n) => `
          <a class="fe-acct-btn fe-acct-btn-gold" href="${siteUrl(`nations/nation.html?id=${encodeURIComponent(n.id)}`)}">
            ${escapeHtml(n.name || n.id)} — ${escapeHtml(tr("openNationPage"))}
          </a>`,
          )
          .join("")
      : `<span style="font-size:12.5px; color:var(--text-muted,#989fa9)">${escapeHtml(tr("noNationLed"))}</span>`;

    dialog.className = "fe-acct-dialog";
    dialog.innerHTML = `
      <button type="button" class="fe-acct-close" id="feAcctCloseBtn">X</button>
      <div class="fe-acct-userbar">
        <div>
          <h2 class="fe-acct-title" style="margin-bottom:2px">${escapeHtml(tr("profileTitle"))}</h2>
          <div style="font-size:13px; color:var(--text-secondary,#cfd4dd)">
            <strong>${escapeHtml(authState.user.name)}</strong>
          </div>
        </div>
        <button type="button" class="fe-acct-btn fe-acct-btn-danger" id="feAcctLogoutBtn">${escapeHtml(tr("logout"))}</button>
      </div>

      <div id="feAcctAlert" class="fe-acct-alert"></div>

      <div class="fe-acct-profile-grid">
        <div class="fe-acct-preview-box">
          <canvas id="feAcctSkinCanvas" class="fe-acct-preview-canvas" width="206" height="250"></canvas>
          <div style="font-size:11px; color:var(--text-muted,#989fa9); margin-top:4px">${escapeHtml(tr("dragHint"))}</div>
        </div>

        <div>
          <div class="fe-acct-field">
            <label>${escapeHtml(tr("skinTitle"))}</label>
            <div id="feAcctSkinDrop" class="fe-acct-skin-drop">
              <div style="font-size:12.5px">${escapeHtml(tr("skinDrop"))}</div>
              <input id="feAcctSkinFile" type="file" accept="image/png" style="display:none" />
            </div>
            <div class="fe-acct-row">
              <label style="font-size:12px; display:inline-flex; align-items:center; gap:6px; cursor:pointer">
                <span>${escapeHtml(tr("skinModel"))}</span>
                <select id="feAcctSlimSelect" class="fe-acct-input" style="width:auto; padding:4px 8px; font-size:12px">
                  <option value="0"${prof.slim ? "" : " selected"}>${escapeHtml(tr("modelClassic"))}</option>
                  <option value="1"${prof.slim ? " selected" : ""}>${escapeHtml(tr("modelSlim"))}</option>
                </select>
              </label>
              <button type="button" class="fe-acct-btn fe-acct-btn-danger" id="feAcctClearSkinBtn" style="padding:5px 10px; font-size:11px">${escapeHtml(tr("skinRemove"))}</button>
            </div>
          </div>

          <div class="fe-acct-field">
            <label for="feAcctBioInput">${escapeHtml(tr("bioLabel"))}</label>
            <textarea id="feAcctBioInput" class="fe-acct-textarea" maxlength="400" placeholder="${escapeHtml(tr("bioPh"))}">${escapeHtml(prof.bio || "")}</textarea>
            <div style="text-align:right; font-size:11px; color:var(--text-muted,#989fa9)"><span id="feAcctBioCount">${(prof.bio || "").length}</span>/400</div>
          </div>

          <button type="button" class="fe-acct-btn fe-acct-btn-primary" id="feAcctSaveProfileBtn" style="width:100%">${escapeHtml(tr("saveProfile"))}</button>

          <div style="margin-top:16px; padding-top:12px; border-top:1px solid var(--border-soft,#31353c)">
            <div style="font-family:'MinecraftRegular',monospace; font-size:12px; text-transform:uppercase; color:var(--gold,#f5b942); margin-bottom:4px">
              ${escapeHtml(tr("nationsLedTitle"))}
            </div>
            <div style="font-size:12px; color:var(--text-secondary,#cfd4dd)">${escapeHtml(tr("nationsLedHint"))}</div>
            <div class="fe-acct-nations-list">${ledListHtml}</div>
          </div>
        </div>
      </div>
    `;

    document.getElementById("feAcctCloseBtn").onclick = closeModal;
    document.getElementById("feAcctLogoutBtn").onclick = async () => {
      try {
        await apiFetch("/api/player/logout", { method: "POST", auth: true });
      } catch {}
      clearSession();
      openAccountModal();
    };

    const alertBox = document.getElementById("feAcctAlert");
    const showMsg = (msg, type = "ok") => {
      alertBox.className = `fe-acct-alert show ${type}`;
      alertBox.textContent = msg;
    };

    const skinCanvas = document.getElementById("feAcctSkinCanvas");
    if (global.FrontierSkin3D) {
      viewerInstance = global.FrontierSkin3D.mountSingleSkinViewer(skinCanvas, {
        skinUrl: currentSkinUrl,
        slim: Boolean(prof.slim),
      });
    }

    const bioInput = document.getElementById("feAcctBioInput");
    const bioCount = document.getElementById("feAcctBioCount");
    bioInput.addEventListener("input", () => {
      bioCount.textContent = String(bioInput.value.length);
    });

    const slimSelect = document.getElementById("feAcctSlimSelect");
    slimSelect.addEventListener("change", () => {
      if (viewerInstance) viewerInstance.update({ slim: slimSelect.value === "1" });
    });

    const handleFile = (file) => {
      if (!file) return;
      if (file.type && file.type !== "image/png" && !file.name.toLowerCase().endsWith(".png")) {
        showMsg(tr("skinBadType"), "err");
        return;
      }
      if (file.size > 131072) {
        showMsg(tr("skinTooBig"), "err");
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = String(reader.result || "");
        const img = new Image();
        img.onload = () => {
          const w = img.naturalWidth || img.width;
          const h = img.naturalHeight || img.height;
          const valid = (w === 64 && (h === 64 || h === 32)) || (w === 128 && (h === 128 || h === 64));
          if (!valid) {
            showMsg(tr("skinBadSize").replace("%w", w).replace("%h", h), "err");
            return;
          }
          pendingSkinData = dataUrl;
          clearSkinRequested = false;
          alertBox.className = "fe-acct-alert";
          if (viewerInstance) viewerInstance.update({ customCanvasOrImg: img });
        };
        img.onerror = () => showMsg(tr("skinBadType"), "err");
        img.src = dataUrl;
      };
      reader.readAsDataURL(file);
    };

    const dropZone = document.getElementById("feAcctSkinDrop");
    const fileInput = document.getElementById("feAcctSkinFile");
    dropZone.addEventListener("click", () => fileInput.click());
    dropZone.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropZone.classList.add("dragover");
    });
    dropZone.addEventListener("dragleave", () => dropZone.classList.remove("dragover"));
    dropZone.addEventListener("drop", (e) => {
      e.preventDefault();
      dropZone.classList.remove("dragover");
      if (e.dataTransfer?.files?.[0]) handleFile(e.dataTransfer.files[0]);
    });
    fileInput.addEventListener("change", () => {
      if (fileInput.files?.[0]) handleFile(fileInput.files[0]);
    });

    document.getElementById("feAcctClearSkinBtn").onclick = () => {
      pendingSkinData = undefined;
      clearSkinRequested = true;
      if (viewerInstance) viewerInstance.update({ skinUrl: "" });
      showMsg(tr("skinCleared"), "ok");
    };

    const saveBtn = document.getElementById("feAcctSaveProfileBtn");
    saveBtn.onclick = async () => {
      saveBtn.disabled = true;
      saveBtn.textContent = tr("saving");
      alertBox.className = "fe-acct-alert";
      try {
        const body = {
          bio: bioInput.value,
          slim: slimSelect.value === "1",
        };
        if (clearSkinRequested) body.clearSkin = true;
        else if (typeof pendingSkinData === "string") body.skinData = pendingSkinData;

        const res = await apiFetch("/api/player/profile", {
          method: "POST",
          body,
          auth: true,
        });
        authState.profile = res.profile;
        pendingSkinData = undefined;
        clearSkinRequested = false;
        publicProfilesCache = null;
        persistSession();
        refreshTriggerButton();
        dispatchAuthChange();
        global.dispatchEvent(new CustomEvent("frontier:profile-updated", { detail: res.profile }));
        showMsg(tr("savedOk"), "ok");
      } catch (err) {
        showMsg(err.message || "Error", "err");
      } finally {
        saveBtn.disabled = false;
        saveBtn.textContent = tr("saveProfile");
      }
    };

    backdrop.classList.add("open");
  }

  function init() {
    loadStoredSession();
    ensureHeaderMount();
    if (authState.token) {
      refreshMe();
    }
    const langBtns = document.querySelectorAll("#btnLangToggle, .lang-toggle-btn");
    langBtns.forEach((b) => {
      b.addEventListener("click", () => setTimeout(refreshTriggerButton, 30));
    });
  }

  global.FrontierAccount = {
    getRelayUrl,
    getAuthSnapshot,
    openAccountModal,
    fetchPublicProfiles,
    getGreySvgHeadDataUri,
    async saveNationDescription(nationId, description) {
      const res = await apiFetch("/api/nation/description", {
        method: "POST",
        body: { nationId, description },
        auth: true,
      });
      publicProfilesCache = null;
      global.dispatchEvent(new CustomEvent("frontier:nation-desc-updated", { detail: res }));
      return res;
    },
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})(window);
