const SERVER_ADDRESS = 'play.thefrontiermc.net';
const SERVER_PORT = 19132;

const DISCORD_SERVER_ID = '1202257363747213343';
const DISCORD_WIDGET_ENDPOINT = `https://discord.com/api/guilds/${DISCORD_SERVER_ID}/widget.json`;
const PUBLIC_STATUS_ENDPOINT = 'https://frontier-webpanel-relay.frontiermc.workers.dev/api/public/status';
const MCSR_FALLBACK_ENDPOINT = `https://api.mcsrvstat.us/bedrock/3/${SERVER_ADDRESS}`;

const HERO_BACKGROUNDS = Array.from({ length: 10 }, (_, i) => `assets/backgrounds/${i + 1}.png`);
const HERO_BACKGROUND_INTERVAL = 8000;
const imageCache = new Map();

function preloadImage(src) {
    if (imageCache.has(src)) return imageCache.get(src);
    const promise = new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(src);
        img.onerror = () => resolve(null);
        img.src = src;
    });
    imageCache.set(src, promise);
    return promise;
}

function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(showToast._timer);
    showToast._timer = setTimeout(() => toast.classList.remove('is-visible'), 2200);
}

async function copyServerAddress() {
    const address = `${SERVER_ADDRESS}:${SERVER_PORT}`;
    try {
        await navigator.clipboard.writeText(address);
    } catch (err) {
        const input = document.createElement('textarea');
        input.value = address;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
    }
    showToast('Server address copied!');
}

function setupCopyButton() {
    const btn = document.getElementById('copy-ip-btn');
    if (btn) btn.addEventListener('click', copyServerAddress);

    const serverHalf = document.getElementById('server-half-btn');
    if (serverHalf) {
        serverHalf.addEventListener('click', copyServerAddress);
        serverHalf.addEventListener('keydown', (e) => {
            if (e.target === serverHalf && (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault();
                copyServerAddress();
            }
        });
    }

    const mapBtn = document.getElementById('server-map-btn');
    if (mapBtn) mapBtn.addEventListener('click', (e) => e.stopPropagation());
}

function setupNavDropdown() {
    const dropdown = document.getElementById('nav-more-dropdown');
    const btn = document.getElementById('nav-more-btn');
    const menu = document.getElementById('nav-more-menu');
    if (!dropdown || !btn) return;

    const setOpen = (open) => {
        dropdown.classList.toggle('is-open', open);
        btn.setAttribute('aria-expanded', String(open));
    };

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        setOpen(!dropdown.classList.contains('is-open'));
    });

    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) setOpen(false);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') setOpen(false);
    });

    if (menu) {
        menu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => setOpen(false));
        });
    }
}

function setupNavToggle() {
    const toggle = document.getElementById('nav-toggle');
    const links = document.getElementById('nav-links');
    if (!toggle || !links) return;

    toggle.addEventListener('click', () => {
        const isOpen = links.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(isOpen));
    });

    links.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            links.classList.remove('is-open');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });
}

async function setupHeroBackground() {
    const layerA = document.getElementById('hero-bg-a');
    const layerB = document.getElementById('hero-bg-b');
    if (!layerA || !layerB || HERO_BACKGROUNDS.length === 0) return;

    let index = 0;
    let showingA = true;

    const first = await preloadImage(HERO_BACKGROUNDS[0]);
    if (first) {
        layerA.style.backgroundImage = `url('${first}')`;
        layerA.classList.add('is-active');
    }

    if (HERO_BACKGROUNDS.length <= 1) return;

    setInterval(async () => {
        const nextIndex = (index + 1) % HERO_BACKGROUNDS.length;
        const nextSrc = await preloadImage(HERO_BACKGROUNDS[nextIndex]);
        index = nextIndex;
        if (!nextSrc) return;

        const nextLayer = showingA ? layerB : layerA;
        const currentLayer = showingA ? layerA : layerB;

        nextLayer.style.backgroundImage = `url('${nextSrc}')`;
        nextLayer.classList.add('is-active');
        currentLayer.classList.remove('is-active');
        showingA = !showingA;
    }, HERO_BACKGROUND_INTERVAL);
}

function setupScreenshotCarousel() {
    const image = document.getElementById('carousel-image');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    if (!image || !prevBtn || !nextBtn || HERO_BACKGROUNDS.length === 0) return;

    let index = 0;
    image.src = HERO_BACKGROUNDS[0];

    const show = async (newIndex) => {
        const target = (newIndex + HERO_BACKGROUNDS.length) % HERO_BACKGROUNDS.length;
        const loaded = await preloadImage(HERO_BACKGROUNDS[target]);
        if (!loaded) return;
        index = target;
        image.style.opacity = '0';
        setTimeout(() => {
            image.src = loaded;
            image.style.opacity = '1';
        }, 150);
    };

    prevBtn.addEventListener('click', () => show(index - 1));
    nextBtn.addEventListener('click', () => show(index + 1));

    if (HERO_BACKGROUNDS.length <= 1) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    }
}

function setStatValue(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
}

async function fetchJsonWithTimeout(url, timeoutMs = 4000) {
    const ctrl = typeof AbortController !== 'undefined' ? new AbortController() : null;
    const timer = ctrl ? setTimeout(() => ctrl.abort(), timeoutMs) : null;
    try {
        const res = await fetch(url, { cache: 'no-store', signal: ctrl ? ctrl.signal : undefined });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return await res.json();
    } finally {
        if (timer) clearTimeout(timer);
    }
}

function applyServerStatusUi({ online, players, version }) {
    const badge = document.getElementById('hero-badge');
    const badgeLbl = document.getElementById('hero-badge-label');
    const statusDot = document.getElementById('server-status-dot');
    const statusLabel = document.getElementById('server-status-label');

    if (badge) badge.classList.toggle('is-offline', !online);
    if (badgeLbl) {
        badgeLbl.textContent = online
            ? (Number.isFinite(players) ? `Online Now · ${players} Players` : 'Online Now')
            : 'Offline';
    }

    if (statusDot) {
        statusDot.classList.toggle('is-online', online);
        statusDot.classList.toggle('is-offline', !online);
    }
    if (statusLabel) statusLabel.textContent = online ? 'Online' : 'Offline';

    setStatValue('stat-server-players', online && Number.isFinite(players) ? String(players) : '--');
    if (version) setStatValue('stat-server-version', version);
}

async function refreshServerStats() {
    try {
        const data = await fetchJsonWithTimeout(PUBLIC_STATUS_ENDPOINT, 4000);
        if (data && data.ok) {
            if (data.serverOnline) {
                applyServerStatusUi({
                    online: true,
                    players: Number(data.playersOnline),
                    version: data.version || '1.26.66',
                });
                return;
            }
        }
    } catch { /* fall through to public Bedrock query */ }

    try {
        const mc = await fetchJsonWithTimeout(MCSR_FALLBACK_ENDPOINT, 4500);
        if (mc && mc.online) {
            applyServerStatusUi({
                online: true,
                players: Number(mc.players?.online),
                version: mc.version || '1.26.66',
            });
            return;
        }
    } catch { /* offline or unreachable */ }

    applyServerStatusUi({ online: false, players: NaN, version: null });
}

async function refreshDiscordStats() {
    const statusDot = document.getElementById('discord-status-dot');
    const statusLabel = document.getElementById('discord-status-label');

    try {
        const response = await fetch(DISCORD_WIDGET_ENDPOINT, { cache: 'no-store' });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();

        statusDot.classList.remove('is-offline');
        statusDot.classList.add('is-online');
        statusLabel.textContent = 'Online';

        setStatValue('stat-discord-online', data.presence_count ?? '--');
        setStatValue('stat-discord-name', data.name || 'The Frontier');
    } catch (err) {
        statusDot.classList.remove('is-online');
        statusDot.classList.add('is-offline');
        statusLabel.textContent = 'Unavailable';

        setStatValue('stat-discord-online', '--');
        setStatValue('stat-discord-name', '--');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setupCopyButton();
    setupNavToggle();
    setupNavDropdown();
    setupHeroBackground();
    setupScreenshotCarousel();
    refreshServerStats();
    refreshDiscordStats();
    setInterval(refreshServerStats, 30000);
    setInterval(refreshDiscordStats, 60000);
});
