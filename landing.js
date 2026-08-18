const SERVER_ADDRESS = 'play.thefrontiermc.net';
const SERVER_PORT = 19132;
const STATS_ENDPOINT = `https://api.mcsrvstat.us/bedrock/3/${SERVER_ADDRESS}:${SERVER_PORT}`;

const DISCORD_SERVER_ID = '1202257363747213343';
const DISCORD_WIDGET_ENDPOINT = `https://discord.com/api/guilds/${DISCORD_SERVER_ID}/widget.json`;

const HERO_BACKGROUND_COUNT = 20;
const HERO_BACKGROUND_INTERVAL = 8000;

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
    if (!layerA || !layerB) return;

    const available = await loadAvailableBackgrounds();
    if (available.length === 0) return;

    let index = 0;
    let showingA = true;

    layerA.style.backgroundImage = `url('${available[0]}')`;
    layerA.classList.add('is-active');

    if (available.length === 1) return;

    setInterval(() => {
        index = (index + 1) % available.length;
        const nextLayer = showingA ? layerB : layerA;
        const currentLayer = showingA ? layerA : layerB;

        nextLayer.style.backgroundImage = `url('${available[index]}')`;
        nextLayer.classList.add('is-active');
        currentLayer.classList.remove('is-active');
        showingA = !showingA;
    }, HERO_BACKGROUND_INTERVAL);
}

async function loadAvailableBackgrounds() {
    const candidates = Array.from({ length: HERO_BACKGROUND_COUNT }, (_, i) => `assets/backgrounds/${i + 1}.png`);
    const loaded = new Array(candidates.length).fill(null);

    await Promise.all(candidates.map((src, i) => new Promise((resolve) => {
        const img = new Image();
        img.onload = () => { loaded[i] = src; resolve(); };
        img.onerror = () => resolve();
        img.src = src;
    })));

    return loaded.filter(Boolean);
}

async function setupScreenshotCarousel() {
    const image = document.getElementById('carousel-image');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    if (!image || !prevBtn || !nextBtn) return;

    const available = await loadAvailableBackgrounds();
    if (available.length === 0) return;

    let index = 0;

    const show = (newIndex) => {
        index = (newIndex + available.length) % available.length;
        image.style.opacity = '0';
        setTimeout(() => {
            image.src = available[index];
            image.style.opacity = '1';
        }, 150);
    };

    prevBtn.addEventListener('click', () => show(index - 1));
    nextBtn.addEventListener('click', () => show(index + 1));

    if (available.length <= 1) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    }

    image.src = available[0];
}

function setStatValue(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
}

async function refreshServerStats() {
    const statusDot = document.getElementById('status-dot');
    const statusLabel = document.getElementById('status-label');
    const playerBarFill = document.getElementById('player-bar-fill');

    try {
        const response = await fetch(STATS_ENDPOINT, { cache: 'no-store' });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();

        if (!data || !data.online) throw new Error('offline');

        statusDot.classList.remove('is-offline');
        statusDot.classList.add('is-online');
        statusLabel.textContent = 'Online';

        const online = data.players?.online ?? 0;
        const max = data.players?.max ?? 0;

        setStatValue('stat-players', `${online} / ${max}`);
        setStatValue('stat-version', data.version || 'Unknown');
        setStatValue('stat-gamemode', data.gamemode || 'Survival');
        setStatValue('stat-map', data.map?.clean || 'New World');

        if (playerBarFill && max > 0) {
            playerBarFill.style.width = `${Math.min(100, (online / max) * 100)}%`;
        }
    } catch (err) {
        statusDot.classList.remove('is-online');
        statusDot.classList.add('is-offline');
        statusLabel.textContent = 'Offline';

        setStatValue('stat-players', '--');
        setStatValue('stat-version', '--');
        setStatValue('stat-gamemode', '--');
        setStatValue('stat-map', '--');

        if (playerBarFill) playerBarFill.style.width = '0%';
    }
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
    setupHeroBackground();
    setupScreenshotCarousel();
    refreshServerStats();
    refreshDiscordStats();
    setInterval(refreshServerStats, 60000);
    setInterval(refreshDiscordStats, 60000);
});
