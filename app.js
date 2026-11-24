/* ==========================================================================
   ÁREA 71 · IEADAM — ORQUESTRADOR DA EXPERIÊNCIA INTERATIVA (2027)
   ========================================================================== */

(function () {
  const DATA = window.AREA71_DATA;
  const MOTION = window.AREA71_MOTION;

  /* ------------------------------------------------------------------------
     1. BIBLIOTECA DE ÍCONES SVG INLINE
     ------------------------------------------------------------------------ */
  const ICONS = {
    search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
    menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="7" y2="7"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="15" y1="17" y2="17"/></svg>`,
    grid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1.5"/><rect width="7" height="7" x="14" y="3" rx="1.5"/><rect width="7" height="7" x="14" y="14" rx="1.5"/><rect width="7" height="7" x="3" y="14" rx="1.5"/></svg>`,
    x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
    sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
    moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
    presentation: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/></svg>`,
    arrowLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>`,
    arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
    arrowUpRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>`,
    chevronRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
    check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
    compass: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
    door: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M13 4h3a2 2 0 0 1 2 2v14"/><path d="M2 20h3"/><path d="M13 20h9"/><path d="M10 12v.01"/><path d="M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"/></svg>`,
    hammer: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9"/><path d="m18 15 4-4"/><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"/></svg>`,
    heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
    flame: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
    shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>`,
    crown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"/><path d="M5 21h14"/></svg>`,
    sparkles: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
    music: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
    network: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="3"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/><path d="M10.5 7.5 6.5 16.5"/><path d="M13.5 7.5 17.5 16.5"/><path d="M8 19h8"/></svg>`,
    book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>`,
    calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>`,
    users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    alert: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`,
    target: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
    clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    quote: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>`,
    checkSquare: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="3"/><path d="m9 12 2 2 4-4"/></svg>`,
    layers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`
  };

  function icon(name, size = 18) {
    const svg = ICONS[name] || ICONS.sparkles;
    return `<span style="width:${size}px;height:${size}px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;">${svg}</span>`;
  }

  /* ------------------------------------------------------------------------
     2. ESTADO GLOBAL & PERSISTÊNCIA
     ------------------------------------------------------------------------ */
  const PAGE_ORDER = DATA.NAV_GROUPS.flatMap(g => g.ids);
  const STORAGE_KEYS = {
    theme: 'area71_motion_theme_v2',
    checks: 'area71_portal_checks_v1',
    page: 'area71_portal_last_page_v1'
  };

  const state = {
    currentPage: 'visao-geral',
    theme: 'dark', // Obsidiana Cinematográfica por padrão
    stageMode: false,
    portalMenuOpen: false,
    commandOpen: false,
    commandIndex: 0,
    galleryFilter: 'all',
    portasFilter: 'all',
    selectedPortaIdx: 0,
    activePhaseByPage: {},
    checks: {},
    orbitalTimer: null
  };

  function loadState() {
    try {
      const savedTheme = localStorage.getItem(STORAGE_KEYS.theme);
      if (savedTheme === 'light' || savedTheme === 'dark') state.theme = savedTheme;

      const savedChecks = localStorage.getItem(STORAGE_KEYS.checks);
      if (savedChecks) state.checks = JSON.parse(savedChecks) || {};

      const hash = window.location.hash.replace('#', '');
      if (hash && DATA.PAGES[hash]) {
        state.currentPage = hash;
      } else {
        const savedPage = localStorage.getItem(STORAGE_KEYS.page);
        if (savedPage && DATA.PAGES[savedPage]) state.currentPage = savedPage;
      }
    } catch (e) {}
  }

  function saveChecks() {
    try { localStorage.setItem(STORAGE_KEYS.checks, JSON.stringify(state.checks)); } catch (e) {}
  }

  /* ------------------------------------------------------------------------
     3. PROGRESSO DOS CHECKLISTS
     ------------------------------------------------------------------------ */
  function getCheckKey(pageId, idx) { return `${pageId}::${idx}`; }

  function getPageProgress(pageId) {
    const p = DATA.PAGES[pageId];
    if (!p || !p.checklist || !p.checklist.length) return { done: 0, total: 0, pct: 0 };
    const total = p.checklist.length;
    let done = 0;
    p.checklist.forEach((_, idx) => {
      if (state.checks[getCheckKey(pageId, idx)]) done++;
    });
    return { done, total, pct: Math.round((done / total) * 100) };
  }

  function getGlobalProgress() {
    let total = 0, done = 0;
    PAGE_ORDER.forEach(id => {
      const p = getPageProgress(id);
      total += p.total;
      done += p.done;
    });
    return { done, total, pct: total ? Math.round((done / total) * 100) : 0 };
  }

  /* ------------------------------------------------------------------------
     4. TEMA, TOASTS E MODO PALCO (KEYNOTE)
     ------------------------------------------------------------------------ */
  function applyTheme() {
    const html = document.documentElement;
    if (state.theme === 'light') html.classList.add('light');
    else html.classList.remove('light');

    const iconSlot = document.getElementById('theme-icon-slot');
    const label = document.getElementById('theme-label');
    if (iconSlot) iconSlot.innerHTML = icon(state.theme === 'dark' ? 'sun' : 'moon', 15);
    if (label) label.textContent = state.theme === 'dark' ? 'Claro' : 'Escuro';
  }

  function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem(STORAGE_KEYS.theme, state.theme); } catch (e) {}
    applyTheme();
    showToast(state.theme === 'dark' ? 'Atmosfera Obsidiana ativada' : 'Atmosfera Alabastro ativada');
  }

  function showToast(msg) {
    const box = document.getElementById('toast-container');
    if (!box) return;
    const el = document.createElement('div');
    el.className = 'toast-pill';
    el.innerHTML = `<span style="color:var(--accent)">${icon('sparkles', 14)}</span><span>${msg}</span>`;
    box.appendChild(el);
    setTimeout(() => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(8px)';
      el.style.transition = 'all 0.28s ease';
      setTimeout(() => el.remove(), 300);
    }, 2200);
  }

  function toggleStageMode(force) {
    const next = typeof force === 'boolean' ? force : !state.stageMode;
    state.stageMode = next;
    if (next) {
      document.body.classList.add('stage-mode');
      closePortalMenu();
      showToast('Modo Palco ativado · Setas ← → navegam capítulos');
    } else {
      document.body.classList.remove('stage-mode');
      showToast('Modo Palco encerrado');
    }
    renderDock();
  }

  /* ------------------------------------------------------------------------
     5. TOPBAR & BOTTOM SPATIAL DOCK
     ------------------------------------------------------------------------ */
  function updateChrome() {
    const page = DATA.PAGES[state.currentPage];
    const crumbText = document.getElementById('topbar-chapter-text');
    if (crumbText && page) {
      crumbText.textContent = `${page.chapterNum} · ${page.shortTitle}`;
    }
    renderDock();
  }

  function renderDock() {
    const dock = document.getElementById('bottom-dock');
    if (!dock) return;
    const idx = PAGE_ORDER.indexOf(state.currentPage);
    const prog = getGlobalProgress();
    const dashOffset = 37.7 - (37.7 * prog.pct) / 100;

    dock.innerHTML = `
      <button class="dock-step-btn" onclick="window.AREA71_APP.step(-1)" ${idx === 0 ? 'disabled' : ''} title="Capítulo Anterior (←)">
        ${icon('arrowLeft', 15)}
      </button>

      <div class="dock-dots">
        ${PAGE_ORDER.map(id => {
          const p = DATA.PAGES[id];
          const active = id === state.currentPage;
          return `<button class="dock-dot ${active ? 'is-active' : ''}" onclick="window.AREA71_APP.go('${id}')" title="${p.chapterNum} · ${p.shortTitle}"></button>`;
        }).join('')}
      </div>

      <button class="dock-step-btn" onclick="window.AREA71_APP.step(1)" ${idx === PAGE_ORDER.length - 1 ? 'disabled' : ''} title="Próximo Capítulo (→)">
        ${icon('arrowRight', 15)}
      </button>

      <button class="dock-progress-pill" onclick="window.AREA71_APP.scrollToChecklist()" title="Progresso Global dos Checklists 2027">
        <svg class="dock-ring" viewBox="0 0 16 16">
          <circle cx="8" cy="8" r="6" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="2"></circle>
          <circle cx="8" cy="8" r="6" fill="none" stroke="var(--accent)" stroke-width="2" stroke-dasharray="37.7" stroke-dashoffset="${dashOffset.toFixed(1)}" stroke-linecap="round"></circle>
        </svg>
        <span>${idx + 1}/${PAGE_ORDER.length}</span>
        <span style="opacity:.45">·</span>
        <span>${prog.pct}%</span>
      </button>
    `;
  }

  /* ------------------------------------------------------------------------
     6. FULLSCREEN PORTAL MENU (COM PREVIEW AO VIVO)
     ------------------------------------------------------------------------ */
  function openPortalMenu() {
    const menu = document.getElementById('portal-menu');
    if (!menu) return;
    state.portalMenuOpen = true;
    renderPortalMenu(state.currentPage);
    menu.classList.add('is-open');
    MOTION.pauseScroll(true);
  }

  function closePortalMenu() {
    const menu = document.getElementById('portal-menu');
    if (!menu) return;
    state.portalMenuOpen = false;
    menu.classList.remove('is-open');
    MOTION.pauseScroll(false);
  }

  function togglePortalMenu() {
    if (state.portalMenuOpen) closePortalMenu();
    else openPortalMenu();
  }

  function renderPortalPreview(pageId) {
    const slot = document.getElementById('portal-preview-slot');
    const p = DATA.PAGES[pageId];
    if (!slot || !p) return;
    const prog = getPageProgress(pageId);
    slot.innerHTML = `
      <div class="portal-preview-card">
        <div class="portal-preview-banner" style="background-image:${p.theme.gradient};">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <span class="project-card-badge">${p.category}</span>
            <span class="project-card-chap">CAP. ${p.chapterNum}</span>
          </div>
          <div style="width:48px;height:48px;border-radius:14px;background:rgba(0,0,0,0.35);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.28);display:grid;place-items:center;color:#fff;">
            ${icon(p.icon, 22)}
          </div>
        </div>
        <div class="portal-preview-body">
          <h3 style="margin:0;font-family:var(--font-display);font-size:21px;font-weight:800;letter-spacing:-0.03em;color:var(--text-1);">${p.title}</h3>
          <p style="margin:10px 0 18px;font-size:13.5px;line-height:1.6;color:var(--text-2);">${p.subtitle}</p>
          <div style="display:flex;justify-content:space-between;align-items:center;padding-top:14px;border-top:1px solid var(--border);font-family:var(--font-mono);font-size:11px;color:var(--text-3);">
            <span>CHECKLIST: <strong style="color:${p.theme.accent}">${prog.done}/${prog.total} (${prog.pct}%)</strong></span>
            <span>ÁREA 71 · 2027</span>
          </div>
        </div>
      </div>
    `;
  }

  function renderPortalMenu(previewId) {
    const content = document.getElementById('portal-menu-content');
    if (!content) return;
    const progGlobal = getGlobalProgress();

    content.innerHTML = `
      <div class="portal-menu-header">
        <div>
          <div class="section-kicker" style="margin-bottom:4px;">ÍNDICE INTERATIVO · 11 CAPÍTULOS</div>
          <div style="font-family:var(--font-display);font-size:clamp(1.4rem,2.6vw,2rem);font-weight:800;letter-spacing:-0.03em;">
            Portal Visão & Projetos 2027
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:12px;">
          <span class="kbd-chip">Implantação: ${progGlobal.pct}%</span>
          <button class="nav-pill-btn" onclick="window.AREA71_APP.closePortalMenu()">
            ${icon('x', 15)} <span>Fechar</span> <span class="kbd-chip">Esc</span>
          </button>
        </div>
      </div>

      <div class="portal-menu-inner">
        <div>
          ${DATA.NAV_GROUPS.map(g => `
            <div class="portal-group">
              <div class="portal-group-label">${g.label}</div>
              ${g.ids.map(id => {
                const p = DATA.PAGES[id];
                const isActive = id === state.currentPage;
                const pr = getPageProgress(id);
                return `
                  <button class="portal-link-row ${isActive ? 'is-active' : ''}"
                          onmouseenter="window.AREA71_APP.previewPortal('${id}')"
                          onclick="window.AREA71_APP.go('${id}')"
                          data-cursor="ABRIR">
                    <div class="portal-link-left">
                      <span class="portal-link-num">${p.chapterNum}</span>
                      <span style="width:34px;height:34px;border-radius:10px;background:rgba(${p.theme.rgb},0.16);color:${p.theme.accent};display:grid;place-items:center;flex-shrink:0;">
                        ${icon(p.icon, 16)}
                      </span>
                      <span class="portal-link-title">${p.shortTitle}</span>
                    </div>
                    <div class="portal-link-meta">
                      ${pr.done > 0 ? `<span class="kbd-chip" style="color:${p.theme.accent};border-color:rgba(${p.theme.rgb},0.35)">${pr.pct}%</span>` : ''}
                      <span style="color:var(--text-3)">${icon('arrowUpRight', 15)}</span>
                    </div>
                  </button>
                `;
              }).join('')}
            </div>
          `).join('')}
        </div>

        <div id="portal-preview-slot"></div>
      </div>
    `;
    renderPortalPreview(previewId || state.currentPage);
  }

  /* ------------------------------------------------------------------------
     7. COMPONENTES REUTILIZÁVEIS (BÚSSOLA ORBITAL, ESCRITURA, PILARES, FASES, TOGGLES, CHECKLIST)
     ------------------------------------------------------------------------ */
  function renderOrbitalCompass(containerId, selectedIdx, compact = false) {
    const porta = DATA.DOZE_PORTAS_2027[selectedIdx] || DATA.DOZE_PORTAS_2027[0];
    const radiusPct = 42.5; // % a partir do centro
    const angleDeg = (selectedIdx / 12) * 360 - 90;
    const rad = (angleDeg * Math.PI) / 180;
    const lineX = 200 + Math.cos(rad) * 168;
    const lineY = 200 + Math.sin(rad) * 168;

    return `
      <div class="orbital-stage" id="${containerId}">
        <div class="orbital-halo" style="background:radial-gradient(circle, ${porta.color}38, transparent 68%);"></div>

        <svg class="orbital-svg" viewBox="0 0 400 400" aria-hidden="true">
          <circle cx="200" cy="200" r="170" fill="none" stroke="var(--border-strong)" stroke-width="1" stroke-dasharray="4 7" class="orbital-ring-dash"></circle>
          <circle cx="200" cy="200" r="144" fill="none" stroke="var(--border)" stroke-width="1" class="orbital-ring-slow"></circle>
          <line x1="200" y1="200" x2="${lineX.toFixed(1)}" y2="${lineY.toFixed(1)}" stroke="${porta.color}" stroke-width="2" stroke-opacity="0.7"></line>
          <circle cx="${lineX.toFixed(1)}" cy="${lineY.toFixed(1)}" r="5" fill="${porta.color}"></circle>
        </svg>

        ${DATA.DOZE_PORTAS_2027.map((item, idx) => {
          const deg = (idx / 12) * 360 - 90;
          const r = (deg * Math.PI) / 180;
          const left = 50 + Math.cos(r) * radiusPct;
          const top = 50 + Math.sin(r) * radiusPct;
          const active = idx === selectedIdx;
          return `
            <button class="orbital-node ${active ? 'is-selected' : ''}"
                    style="left:${left.toFixed(2)}%;top:${top.toFixed(2)}%;--node-color:${item.color};"
                    onclick="window.AREA71_APP.selectPorta(${idx}, true)"
                    onmouseenter="window.AREA71_APP.selectPorta(${idx}, false)"
                    data-cursor="${item.mesCurto}"
                    title="${item.mes} · ${item.porta}">
              <span>${item.mesCurto}</span>
            </button>
          `;
        }).join('')}

        <div class="orbital-center">
          <div class="orbital-center-mes" style="color:${porta.color}">PORTA ${porta.num} · ${porta.mes}</div>
          <div class="orbital-center-porta">${porta.porta}</div>
          <div class="orbital-center-foco">${porta.foco}</div>
          <div class="orbital-center-date" style="background:${porta.color}22;color:${porta.color}">
            Fruto Fiel · ${porta.frutoFiel.replace(' (a alinhar)', '*')}
          </div>
          ${compact ? `
            <button onclick="window.AREA71_APP.go('doze-portas')"
                    style="margin-top:8px;font-family:var(--font-mono);font-size:10px;font-weight:700;color:var(--text-1);display:inline-flex;align-items:center;gap:4px;opacity:.85;">
              <span>Ver todas as 12</span> ${icon('arrowUpRight', 12)}
            </button>
          ` : ''}
        </div>
      </div>
    `;
  }

  function renderScriptureBlock(callout) {
    return `
      <section class="scripture-stage" data-reveal>
        <div class="scripture-line-accent"></div>
        <div class="scripture-ref-badge">
          ${icon('quote', 15)}
          <span>FUNDAMENTO BÍBLICO · ${callout.ref}</span>
        </div>
        <blockquote class="scripture-quote" data-scrub-verse>
          ${callout.verse}
        </blockquote>
        <p class="scripture-note stage-scale">${callout.note}</p>
      </section>
    `;
  }

  function renderChapterHero(page) {
    return `
      <section class="chapter-hero" data-hero-enter>
        <div class="chapter-hero-bg" style="background-image:${page.theme.gradient};"></div>
        <div class="chapter-hero-grid"></div>
        <div class="chapter-hero-content">
          <div class="chapter-hero-top">
            <span class="chapter-badge">
              ${icon(page.icon, 14)}
              <span>CAPÍTULO ${page.chapterNum} · ${page.category}</span>
            </span>
            <span class="chapter-badge">ÁREA 71 · IEADAM · 2027</span>
          </div>

          <div class="chapter-icon-orb">
            ${icon(page.icon, 32)}
          </div>

          <h1 class="chapter-title" data-split-reveal>${page.title}</h1>
          <p class="chapter-subtitle stage-scale" data-hero-enter>${page.subtitle}</p>
        </div>
      </section>

      <section class="props-strip" data-hero-enter>
        ${page.properties.map(prop => `
          <div class="motion-surface prop-tile" data-tilt>
            <div class="prop-tile-label">${prop.label}</div>
            <div class="prop-tile-value">${prop.value}</div>
          </div>
        `).join('')}
      </section>
    `;
  }

  function renderPillars(page) {
    if (!page.pillars || !page.pillars.length) return '';
    return `
      <section style="margin-top:54px;">
        <div class="section-head" data-reveal>
          <div>
            <div class="section-kicker">ARQUITETURA DA FRENTE</div>
            <h2 class="section-title">Pilares Estratégicos & Estrutura</h2>
          </div>
          <span class="kbd-chip">${page.pillars.length} FRENTES VIVAS</span>
        </div>

        <div class="pillars-grid">
          ${page.pillars.map((item, i) => `
            <div class="motion-surface pillar-card" data-tilt data-reveal data-delay="${(i * 0.07).toFixed(2)}">
              <div class="pillar-head">
                <div class="pillar-icon-box">${icon(item.icon, 22)}</div>
                <span class="pillar-index">0${i + 1}</span>
              </div>
              <h3 class="pillar-title">${item.title}</h3>
              <p class="pillar-desc stage-scale">${item.desc}</p>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  function renderPhasesInner(page) {
    const activeIdx = state.activePhaseByPage[page.id] || 0;
    const ph = page.phases[activeIdx] || page.phases[0];
    return `
      <div class="phase-tabs-rail">
        ${page.phases.map((item, i) => `
          <button class="phase-tab-btn ${i === activeIdx ? 'is-active' : ''}"
                  onclick="window.AREA71_APP.selectPhase('${page.id}', ${i})"
                  data-cursor="FASE 0${i + 1}">
            <span class="phase-tab-num">ETAPA 0${i + 1} · ${item.period.split('·')[0].trim()}</span>
            <span class="phase-tab-name">${item.tab}</span>
          </button>
        `).join('')}
      </div>

      <div class="motion-surface phase-stage" id="active-phase-card">
        <div class="phase-stage-top">
          <span class="phase-period-chip">
            ${icon('calendar', 14)}
            <span>${ph.period}</span>
          </span>
          <span class="kbd-chip">FASE ${activeIdx + 1} DE ${page.phases.length} · TECLAS 1–4</span>
        </div>

        <h3 style="margin:0;font-family:var(--font-display);font-size:clamp(1.35rem,2.4vw,1.95rem);font-weight:800;letter-spacing:-0.03em;color:var(--text-1);">
          ${ph.title}
        </h3>
        <p class="stage-scale" style="margin:10px 0 0;font-size:15px;line-height:1.65;color:var(--text-2);max-width:780px;">
          ${ph.summary}
        </p>

        <ul class="phase-bullets">
          ${ph.bullets.map(b => `
            <li class="phase-bullet stage-scale">
              <span class="phase-bullet-check">${icon('check', 13)}</span>
              <span>${b}</span>
            </li>
          `).join('')}
        </ul>

        <div class="phase-nav-footer">
          <button class="nav-pill-btn" onclick="window.AREA71_APP.selectPhase('${page.id}', ${Math.max(0, activeIdx - 1)})" ${activeIdx === 0 ? 'disabled style="opacity:.35;cursor:not-allowed"' : ''}>
            ${icon('arrowLeft', 14)} <span>Fase Anterior</span>
          </button>
          <button class="nav-pill-btn is-primary" onclick="window.AREA71_APP.selectPhase('${page.id}', ${(activeIdx + 1) % page.phases.length})">
            <span>${activeIdx === page.phases.length - 1 ? 'Voltar à Fase 1' : 'Próxima Fase'}</span> ${icon('arrowRight', 14)}
          </button>
        </div>
      </div>
    `;
  }

  function renderPhases(page) {
    if (!page.phases || !page.phases.length) return '';
    return `
      <section class="phases-shell" data-reveal>
        <div class="section-head">
          <div>
            <div class="section-kicker">SEQUÊNCIA EXECUTIVA · 2027</div>
            <h2 class="section-title">${page.phasesTitle || 'Jornada em Fases'}</h2>
            <p class="section-sub">Navegue pelas etapas abaixo ou use as teclas 1, 2, 3 e 4 durante a apresentação.</p>
          </div>
        </div>
        <div id="phases-container">${renderPhasesInner(page)}</div>
      </section>
    `;
  }

  function renderToggles(page) {
    if (!page.toggles || !page.toggles.length) return '';
    return `
      <section class="toggles-section" data-reveal>
        <div class="section-head">
          <div>
            <div class="section-kicker">ROTEIROS & MANUAL OPERACIONAL</div>
            <h2 class="section-title">Detalhamento Prático</h2>
          </div>
          <span class="kbd-chip">CLIQUE PARA EXPANDIR</span>
        </div>

        <div>
          ${page.toggles.map((tg, i) => `
            <div class="accordion-item" data-open="${i === 0 ? 'true' : 'false'}">
              <button class="accordion-trigger" onclick="window.AREA71_APP.toggleAccordion(this)">
                <span class="accordion-left">
                  <span class="accordion-num">0${i + 1}</span>
                  <span class="accordion-title">${tg.title}</span>
                </span>
                <span style="display:flex;align-items:center;gap:10px;flex-shrink:0;">
                  ${tg.badge ? `<span class="accordion-badge hide-sm">${tg.badge}</span>` : ''}
                  <span class="accordion-chevron">${icon('chevronRight', 15)}</span>
                </span>
              </button>
              <div class="accordion-body">
                <div class="accordion-inner">
                  <div class="accordion-content stage-scale">${tg.content}</div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  function renderChecklistInner(page) {
    if (!page.checklist || !page.checklist.length) return '';
    const prog = getPageProgress(page.id);
    return `
      <div class="motion-surface checklist-panel" id="checklist-anchor">
        <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:14px;">
          <div>
            <div class="section-kicker" style="margin-bottom:4px;">AÇÃO IMEDIATA · SALVO NO NAVEGADOR</div>
            <h2 style="margin:0;font-family:var(--font-display);font-size:clamp(1.25rem,2.2vw,1.7rem);font-weight:800;letter-spacing:-0.025em;display:flex;align-items:center;gap:10px;">
              <span style="color:var(--accent)">${icon('checkSquare', 22)}</span>
              <span>Checklist da Liderança</span>
            </h2>
          </div>
          <span class="kbd-chip" style="padding:7px 13px;font-size:12px;${prog.pct === 100 ? 'background:rgba(16,185,129,0.16);color:#10B981;border-color:rgba(16,185,129,0.4)' : ''}">
            ${prog.done} DE ${prog.total} CONCLUÍDOS (${prog.pct}%)
          </span>
        </div>

        <div class="checklist-bar-track">
          <div class="checklist-bar-fill" style="width:${prog.pct}%"></div>
        </div>

        <div>
          ${page.checklist.map((txt, idx) => {
            const done = !!state.checks[getCheckKey(page.id, idx)];
            return `
              <button class="check-row ${done ? 'is-done' : ''}"
                      onclick="window.AREA71_APP.toggleCheck('${page.id}', ${idx}, event)"
                      data-cursor="${done ? 'DESMARCAR' : 'CONCLUIR'}">
                <span class="check-box">${done ? icon('check', 13) : ''}</span>
                <span class="check-text stage-scale">${txt}</span>
              </button>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  function renderFooterNav(pageId) {
    const idx = PAGE_ORDER.indexOf(pageId);
    const prev = idx > 0 ? DATA.PAGES[PAGE_ORDER[idx - 1]] : null;
    const next = idx < PAGE_ORDER.length - 1 ? DATA.PAGES[PAGE_ORDER[idx + 1]] : null;
    return `
      <nav class="chapter-footer-nav" data-reveal>
        ${prev ? `
          <button class="motion-surface footer-nav-card" onclick="window.AREA71_APP.go('${prev.id}')" data-tilt data-cursor="ANTERIOR">
            <span class="footer-nav-circle">${icon('arrowLeft', 18)}</span>
            <div>
              <div class="footer-nav-kicker">CAPÍTULO ${prev.chapterNum} · ANTERIOR</div>
              <div class="footer-nav-title">${prev.shortTitle}</div>
            </div>
          </button>
        ` : '<div></div>'}

        ${next ? `
          <button class="motion-surface footer-nav-card is-next" onclick="window.AREA71_APP.go('${next.id}')" data-tilt data-cursor="PRÓXIMO">
            <span class="footer-nav-circle">${icon('arrowRight', 18)}</span>
            <div>
              <div class="footer-nav-kicker">CAPÍTULO ${next.chapterNum} · PRÓXIMO</div>
              <div class="footer-nav-title">${next.shortTitle}</div>
            </div>
          </button>
        ` : ''}
      </nav>
    `;
  }

  /* ------------------------------------------------------------------------
     8. PÁGINA 1: HOME FLAGSHIP (EXPERIÊNCIA CINEMATOGRÁFICA DE IMPACTO)
     ------------------------------------------------------------------------ */
  function renderGalleryCards() {
    const ids = PAGE_ORDER.filter(id => id !== 'visao-geral').filter(id =>
      state.galleryFilter === 'all' ? true : DATA.PAGES[id].group === state.galleryFilter
    );

    return ids.map((id, i) => {
      const p = DATA.PAGES[id];
      const prog = getPageProgress(id);
      return `
        <button class="motion-surface project-card"
                style="--card-accent:${p.theme.accent};"
                onclick="window.AREA71_APP.go('${p.id}')"
                data-tilt
                data-cursor="EXPLORAR"
                data-reveal
                data-delay="${((i % 3) * 0.06).toFixed(2)}">
          <div class="project-card-visual" style="background-image:${p.theme.gradient};">
            <span class="project-card-badge">${p.category}</span>
            <span class="project-card-chap">${p.chapterNum}</span>
          </div>
          <div class="project-card-body">
            <div class="project-card-icon" style="background:linear-gradient(135deg,${p.theme.accent},${p.theme.accent2});">
              ${icon(p.icon, 21)}
            </div>
            <h3 class="project-card-title">${p.shortTitle}</h3>
            <p class="project-card-desc">${p.subtitle}</p>
            <div class="project-card-footer">
              <span style="font-family:var(--font-mono);font-size:11px;color:var(--text-3);">CHECKLIST ${prog.pct}%</span>
              <span class="project-card-arrow"><span>Abrir</span> ${icon('arrowRight', 14)}</span>
            </div>
          </div>
        </button>
      `;
    }).join('');
  }

  function renderHomePage(page) {
    const marqueePortas = DATA.DOZE_PORTAS_2027.map(p =>
      `<span class="marquee-item"><span>${p.porta}</span><span class="marquee-sep"></span></span>`
    ).join('');

    const marqueeRedes = PAGE_ORDER.filter(id => id !== 'visao-geral').map(id =>
      `<span class="marquee-item outline"><span>${DATA.PAGES[id].shortTitle}</span><span class="marquee-sep"></span></span>`
    ).join('');

    return `
      <!-- FLAGSHIP HERO -->
      <section class="flagship-hero">
        <div>
          <div class="hero-kicker" data-hero-enter>
            <span class="hero-kicker-ping"></span>
            <span>${DATA.SITE_META.heroKicker}</span>
          </div>

          <h1 class="hero-mega-title" data-split-reveal>
            <span>${DATA.SITE_META.heroDisplayTop}</span><br/>
            <span class="accent-gradient">${DATA.SITE_META.heroDisplayBottom}</span>
          </h1>

          <p class="hero-lead stage-scale" data-hero-enter>${page.subtitle}</p>

          <div class="hero-cta-row" data-hero-enter>
            <button class="cta-magnetic primary" data-magnetic data-cursor="INICIAR" onclick="window.AREA71_APP.go('doze-portas')">
              <span>Explorar As 12 Portas</span>
              ${icon('arrowRight', 17)}
            </button>
            <button class="cta-magnetic secondary" data-magnetic data-cursor="VER MAPA" onclick="window.AREA71_APP.scrollTo('#home-gallery')">
              ${icon('grid', 16)}
              <span>Mapa de Projetos</span>
            </button>
          </div>

          <div class="hero-meta-strip" data-hero-enter>
            ${page.properties.map(pr => `
              <div class="hero-meta-item">
                <span class="hero-meta-label">${pr.label}</span>
                <span class="hero-meta-val">${pr.value}</span>
              </div>
            `).join('')}
          </div>

          <button class="scroll-cue" data-hero-enter onclick="window.AREA71_APP.scrollTo('#home-metrics')">
            <span class="scroll-cue-mouse"><span class="scroll-cue-wheel"></span></span>
            <span>Role para explorar a experiência</span>
          </button>
        </div>

        <div data-hero-enter data-parallax="-26" id="home-orbital-slot">
          ${renderOrbitalCompass('home-orbital', state.selectedPortaIdx, true)}
        </div>
      </section>

      <!-- MARQUEE CINÉTICO DUPLO -->
      <section class="kinetic-marquee-band" aria-hidden="true">
        <div class="marquee-track dir-left">${marqueePortas}${marqueePortas}</div>
        <div class="marquee-track dir-right">${marqueeRedes}${marqueeRedes}</div>
      </section>

      <!-- BENTO GRID DE MÉTRICAS ANIMADAS -->
      <section id="home-metrics">
        <div class="section-head" data-reveal>
          <div>
            <div class="section-kicker">VISÃO PANORÂMICA · 2027</div>
            <h2 class="section-title">A Arquitetura em Números</h2>
          </div>
          <span class="kbd-chip">NÚCLEO 17 · REDE NORTE</span>
        </div>

        <div class="metrics-bento">
          ${DATA.HOME_METRICS.map((m, idx) => `
            <div class="motion-surface metric-card" data-tilt data-reveal data-delay="${(idx * 0.07).toFixed(2)}">
              <div class="metric-top">
                <div class="metric-icon" style="color:${m.accent};border-color:${m.accent}44;background:${m.accent}1a;">
                  ${icon(m.icon, 20)}
                </div>
                <span class="kbd-chip">2027</span>
              </div>
              <div>
                <div class="metric-num" data-counter="${m.num}" data-suffix="${m.suffix}">0</div>
                <div class="metric-label">${m.label}</div>
                <div class="metric-sub">${m.sub}</div>
                <div class="metric-sparkbars">
                  ${Array.from({ length: 12 }, (_, k) => `<span style="height:${35 + ((k * 23 + idx * 17) % 65)}%"></span>`).join('')}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- ESCRITURA MONUMENTAL COM ILUMINAÇÃO NO SCROLL -->
      ${renderScriptureBlock(page.callout)}

      <!-- GALERIA INTERATIVA DE PROJETOS -->
      <section id="home-gallery" style="margin-top:68px;">
        <div class="section-head" data-reveal>
          <div>
            <div class="section-kicker">PORTFÓLIO MINISTERIAL · 10 FRENTES</div>
            <h2 class="section-title">Mapa de Projetos & Redes</h2>
            <p class="section-sub">Filtre por categoria e clique em qualquer card para entrar na experiência daquela frente.</p>
          </div>
          <div class="filter-pills">
            <button class="filter-pill ${state.galleryFilter === 'all' ? 'is-active' : ''}" onclick="window.AREA71_APP.setGalleryFilter('all')">Todos (10)</button>
            <button class="filter-pill ${state.galleryFilter === 'arquitetura' ? 'is-active' : ''}" onclick="window.AREA71_APP.setGalleryFilter('arquitetura')">Arquitetura</button>
            <button class="filter-pill ${state.galleryFilter === 'redes' ? 'is-active' : ''}" onclick="window.AREA71_APP.setGalleryFilter('redes')">5 Redes</button>
            <button class="filter-pill ${state.galleryFilter === 'pilares' ? 'is-active' : ''}" onclick="window.AREA71_APP.setGalleryFilter('pilares')">Eventos & Pilares</button>
          </div>
        </div>

        <div class="gallery-grid" id="home-gallery-grid">
          ${renderGalleryCards()}
        </div>
      </section>

      <!-- CENTRAL DE DECISÕES & RADAR DE CONFLITOS 2027 -->
      <section style="margin-top:76px;">
        <div class="section-head" data-reveal>
          <div>
            <div class="section-kicker">MISSION CONTROL · AGENDA 2027</div>
            <h2 class="section-title">Decisões & Alinhamentos Pendentes</h2>
            <p class="section-sub">Pontos-chave da planilha Agenda Área 71 prontos para fechamento com a liderança. Clique em qualquer item para ir ao projeto.</p>
          </div>
        </div>

        <div class="mission-grid">
          <div class="motion-surface mission-panel" data-reveal>
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;">
              <span class="section-kicker" style="margin:0;">6 DATAS ESTRATÉGICAS A DEFINIR</span>
              <span class="kbd-chip">CLIQUE PARA ABRIR</span>
            </div>
            ${DATA.PENDENCIAS_DATAS.map(item => `
              <button class="decision-row" onclick="window.AREA71_APP.go('${item.targetPage}')" data-cursor="ABRIR">
                <div>
                  <div style="font-family:var(--font-heading);font-size:14.5px;font-weight:700;color:var(--text-1);">${item.evento}</div>
                  <div style="font-size:12.5px;color:var(--text-2);margin-top:3px;">${item.obs}</div>
                </div>
                <span class="decision-month">${item.mes}</span>
              </button>
            `).join('')}
          </div>

          <div class="motion-surface mission-panel" data-reveal data-delay="0.1">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:18px;">
              <span class="radar-ping"></span>
              <span class="section-kicker" style="margin:0;color:#FB7185;">2 SÁBADOS PARA ALINHAR · IEADAM</span>
            </div>

            ${DATA.CONFLITOS_IEADAM.map(c => `
              <button class="conflict-card" onclick="window.AREA71_APP.go('${c.targetPage}')" data-cursor="VER DETALHE">
                <div class="conflict-date">
                  <span class="radar-ping"></span>
                  <span>${c.data}</span>
                </div>
                <div style="font-family:var(--font-display);font-size:16px;font-weight:800;color:var(--text-1);margin-top:8px;">${c.titulo}</div>
                <p style="margin:8px 0 0;font-size:13px;line-height:1.55;color:var(--text-2);">${c.desc}</p>
              </button>
            `).join('')}

            <div style="padding:16px;border-radius:16px;background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.28);margin-top:12px;">
              <div style="font-family:var(--font-mono);font-size:10.5px;font-weight:700;letter-spacing:0.12em;color:#10B981;text-transform:uppercase;">PROJETOS ESTRUTURADOS HOJE</div>
              <p style="margin:6px 0 0;font-size:13px;line-height:1.55;color:var(--text-2);">
                <strong>Mentoria com Homens</strong> e <strong>Geração 60+</strong> já possuem capítulos completos e prontos para validação!
              </p>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  /* ------------------------------------------------------------------------
     9. PÁGINA 2: AS 12 PORTAS (RODA 360° + PAINEL VIVO + FLUXO VERTICAL + GRADE)
     ------------------------------------------------------------------------ */
  function renderPortaDetailCard(idx) {
    const p = DATA.DOZE_PORTAS_2027[idx] || DATA.DOZE_PORTAS_2027[0];
    const relPage = DATA.PAGES[p.relatedPage];
    return `
      <div class="motion-surface porta-detail-card">
        <div class="porta-accent-bar" style="background:linear-gradient(90deg, ${p.color}, ${p.color2});"></div>
        <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;">
          <span style="font-family:var(--font-mono);font-size:11px;font-weight:700;letter-spacing:0.18em;color:${p.color};text-transform:uppercase;">
            PORTA ${p.num} · ${p.mes} 2027
          </span>
          <span class="kbd-chip">${p.tri}º TRIMESTRE</span>
        </div>

        <h3 style="margin:10px 0 8px;font-family:var(--font-display);font-size:clamp(1.6rem,2.8vw,2.3rem);font-weight:800;letter-spacing:-0.035em;color:var(--text-1);">
          ${p.porta}
        </h3>
        <p class="stage-scale" style="margin:0;font-size:15px;line-height:1.65;color:var(--text-2);">${p.foco}</p>

        <div class="porta-dates-grid">
          <div class="porta-date-box">
            <span class="porta-date-label">Reunião Ministério</span>
            <span class="porta-date-val">${p.reuniaoMin}</span>
          </div>
          <div class="porta-date-box">
            <span class="porta-date-label">Fruto Fiel</span>
            <span class="porta-date-val" style="${p.frutoFiel.includes('alinhar') ? 'color:#FB7185' : ''}">${p.frutoFiel}</span>
          </div>
        </div>

        <div style="font-family:var(--font-mono);font-size:10.5px;font-weight:700;letter-spacing:0.15em;color:var(--text-3);text-transform:uppercase;margin-bottom:10px;">
          MARCOS DO MÊS
        </div>
        <div style="display:grid;gap:8px;margin-bottom:22px;">
          ${p.marcos.map(m => `
            <div style="display:flex;align-items:flex-start;gap:10px;font-size:13.5px;color:var(--text-1);line-height:1.5;">
              <span style="width:7px;height:7px;border-radius:50%;background:${p.color};margin-top:7px;flex-shrink:0;box-shadow:0 0 10px ${p.color};"></span>
              <span>${m}</span>
            </div>
          `).join('')}
        </div>

        <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px;padding-top:16px;border-top:1px solid var(--border);">
          <div style="display:flex;gap:8px;">
            <button class="nav-pill-btn" onclick="window.AREA71_APP.selectPorta(${(idx + 11) % 12}, true)">
              ${icon('arrowLeft', 14)} <span>Anterior</span>
            </button>
            <button class="nav-pill-btn" onclick="window.AREA71_APP.selectPorta(${(idx + 1) % 12}, true)">
              <span>Próxima</span> ${icon('arrowRight', 14)}
            </button>
          </div>
          ${relPage && relPage.id !== 'doze-portas' ? `
            <button class="nav-pill-btn is-primary" onclick="window.AREA71_APP.go('${relPage.id}')">
              <span>${relPage.shortTitle}</span> ${icon('arrowUpRight', 14)}
            </button>
          ` : ''}
        </div>
      </div>
    `;
  }

  function renderPortasGridItems() {
    const list = DATA.DOZE_PORTAS_2027.filter(item =>
      state.portasFilter === 'all' ? true : String(item.tri) === state.portasFilter
    );
    return list.map(p => {
      const idx = DATA.DOZE_PORTAS_2027.indexOf(p);
      const isSelected = idx === state.selectedPortaIdx;
      return `
        <button class="motion-surface porta-grid-card"
                style="${isSelected ? `border-color:${p.color};box-shadow:0 0 32px -12px ${p.color}80;` : ''}"
                onclick="window.AREA71_APP.focusPortaFromGrid(${idx})"
                data-tilt
                data-cursor="${p.mesCurto}">
          <div style="height:3px;width:100%;border-radius:99px;background:linear-gradient(90deg,${p.color},${p.color2});margin-bottom:14px;"></div>
          <div style="display:flex;justify-content:space-between;align-items:center;width:100%;margin-bottom:6px;">
            <span style="font-family:var(--font-mono);font-size:11px;font-weight:700;color:${p.color};">${p.num} · ${p.mes.toUpperCase()}</span>
            <span class="kbd-chip">${p.tri}º TRI</span>
          </div>
          <h4 style="margin:0;font-family:var(--font-display);font-size:18px;font-weight:800;color:var(--text-1);">${p.porta}</h4>
          <p style="margin:8px 0 14px;font-size:13px;line-height:1.55;color:var(--text-2);flex:1;">${p.foco}</p>
          <div style="width:100%;display:flex;justify-content:space-between;font-family:var(--font-mono);font-size:10.5px;color:var(--text-3);padding-top:10px;border-top:1px solid var(--border);">
            <span>Min: ${p.reuniaoMin.slice(0, 5)}</span>
            <span style="${p.frutoFiel.includes('alinhar') ? 'color:#FB7185' : 'color:var(--text-1)'}">Fruto: ${p.frutoFiel.slice(0, 5)}</span>
          </div>
        </button>
      `;
    }).join('');
  }

  function renderPortasPage(page) {
    const flowSteps = [
      { tag: '01 · RAIZ', title: 'Porta do Mês', desc: '1 eixo bíblico claro' },
      { tag: '02 · ALTAR', title: 'Púlpito & Ensino', desc: 'Terças & Domingos' },
      { tag: '03 · CLAMOR', title: 'Fruto Fiel', desc: '1º Sábado consagrado' },
      { tag: '04 · CASAS', title: 'Células', desc: 'Roteiros sincronizados' },
      { tag: '05 · GERAÇÕES', title: '5 Redes', desc: 'Mesma voz, cada idade' }
    ];

    return `
      ${renderChapterHero(page)}
      ${renderScriptureBlock(page.callout)}

      <!-- RODA INTERATIVA 360° + PAINEL DA PORTA -->
      <section id="portas-wheel-section" style="margin-top:54px;">
        <div class="section-head" data-reveal>
          <div>
            <div class="section-kicker">RELÓGIO ARQUITETÔNICO · 360° INTERATIVO</div>
            <h2 class="section-title">Explore Cada Uma das 12 Portas</h2>
            <p class="section-sub">Passe o mouse ou clique em qualquer mês no anel orbital para inspecionar o foco, datas fixas e marcos de 2027.</p>
          </div>
        </div>

        <div class="portas-showcase" data-reveal>
          <div id="portas-orbital-slot">
            ${renderOrbitalCompass('portas-orbital', state.selectedPortaIdx, false)}
          </div>
          <div id="porta-detail-slot">
            ${renderPortaDetailCard(state.selectedPortaIdx)}
          </div>
        </div>
      </section>

      <!-- FLUXO DE ALINHAMENTO VERTICAL -->
      <section class="motion-surface alignment-flow" data-reveal>
        <div class="section-kicker">SINCRONIA TOTAL · ZERO SOBRECARGA</div>
        <h3 style="margin:0;font-family:var(--font-display);font-size:clamp(1.25rem,2.3vw,1.8rem);font-weight:800;">
          Como 1 Porta Alinha Toda a Área 71
        </h3>
        <div class="flow-nodes">
          ${flowSteps.map(s => `
            <div class="flow-node">
              <div class="flow-step-tag">${s.tag}</div>
              <div style="font-family:var(--font-heading);font-size:14.5px;font-weight:700;color:var(--text-1);">${s.title}</div>
              <div style="font-size:12px;color:var(--text-3);margin-top:4px;">${s.desc}</div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- GRADE FILTRÁVEL POR TRIMESTRE -->
      <section style="margin-top:64px;">
        <div class="section-head" data-reveal>
          <div>
            <div class="section-kicker">VISÃO ANUAL COMPLETA</div>
            <h2 class="section-title">Mapa por Trimestre · 2027</h2>
          </div>
          <div class="filter-pills">
            ${[
              { k: 'all', l: 'Todos (12)' },
              { k: '1', l: '1º Tri' },
              { k: '2', l: '2º Tri' },
              { k: '3', l: '3º Tri' },
              { k: '4', l: '4º Tri' }
            ].map(f => `
              <button class="filter-pill ${state.portasFilter === f.k ? 'is-active' : ''}" onclick="window.AREA71_APP.setPortasFilter('${f.k}')">${f.l}</button>
            `).join('')}
          </div>
        </div>

        <div class="portas-grid" id="portas-grid-slot">
          ${renderPortasGridItems()}
        </div>
      </section>

      ${renderToggles(page)}
    `;
  }

  /* ------------------------------------------------------------------------
     10. RENDERIZAÇÃO GERAL DO CAPÍTULO ATUAL
     ------------------------------------------------------------------------ */
  function stopOrbitalAutoPlay() {
    if (state.orbitalTimer) {
      clearInterval(state.orbitalTimer);
      state.orbitalTimer = null;
    }
  }

  function startOrbitalAutoPlay() {
    stopOrbitalAutoPlay();
    if (state.currentPage !== 'visao-geral') return;
    state.orbitalTimer = setInterval(() => {
      if (state.currentPage !== 'visao-geral' || state.portalMenuOpen || state.commandOpen) return;
      state.selectedPortaIdx = (state.selectedPortaIdx + 1) % 12;
      const slot = document.getElementById('home-orbital-slot');
      if (slot) slot.innerHTML = renderOrbitalCompass('home-orbital', state.selectedPortaIdx, true);
    }, 4400);
  }

  function renderPageImmediate() {
    const page = DATA.PAGES[state.currentPage] || DATA.PAGES['visao-geral'];
    const stage = document.getElementById('app-stage');
    if (!stage) return;

    stopOrbitalAutoPlay();
    MOTION.setChapterTheme(page.theme);

    let bodyHtml = '';
    if (page.specialType === 'home') {
      bodyHtml = renderHomePage(page);
    } else if (page.specialType === 'portas') {
      bodyHtml = renderPortasPage(page);
    } else {
      bodyHtml = `
        ${renderChapterHero(page)}
        ${renderScriptureBlock(page.callout)}
        ${renderPillars(page)}
        ${renderPhases(page)}
        ${renderToggles(page)}
      `;
    }

    stage.innerHTML = `
      <div class="page-shell">
        ${bodyHtml}
        <div id="checklist-slot">${renderChecklistInner(page)}</div>
        ${renderFooterNav(page.id)}
      </div>
    `;

    updateChrome();
    MOTION.animatePageEntrance(stage);
    startOrbitalAutoPlay();
  }

  function go(pageId, skipCurtain = false) {
    if (!DATA.PAGES[pageId]) return;
    if (pageId === state.currentPage && !skipCurtain) {
      closePortalMenu();
      closeCommand();
      MOTION.scrollToTop(false);
      return;
    }

    state.currentPage = pageId;
    try {
      localStorage.setItem(STORAGE_KEYS.page, pageId);
      history.replaceState(null, '', `#${pageId}`);
    } catch (e) {}

    closePortalMenu();
    closeCommand();

    if (skipCurtain) {
      renderPageImmediate();
      MOTION.scrollToTop(true);
    } else {
      MOTION.transitionTo(DATA.PAGES[pageId], renderPageImmediate);
    }
  }

  function step(delta) {
    const idx = PAGE_ORDER.indexOf(state.currentPage);
    const next = idx + delta;
    if (next >= 0 && next < PAGE_ORDER.length) {
      go(PAGE_ORDER[next]);
    }
  }

  /* ------------------------------------------------------------------------
     11. INTERAÇÕES INTERNAS (ORBITAL, FASES, FILTROS, ACCORDION, CHECKLIST)
     ------------------------------------------------------------------------ */
  function selectPorta(idx, userClicked) {
    state.selectedPortaIdx = idx;
    if (userClicked) stopOrbitalAutoPlay();

    const homeSlot = document.getElementById('home-orbital-slot');
    if (homeSlot) {
      homeSlot.innerHTML = renderOrbitalCompass('home-orbital', idx, true);
    }

    const portasSlot = document.getElementById('portas-orbital-slot');
    const detailSlot = document.getElementById('porta-detail-slot');
    if (portasSlot && detailSlot) {
      portasSlot.innerHTML = renderOrbitalCompass('portas-orbital', idx, false);
      detailSlot.innerHTML = renderPortaDetailCard(idx);
      MOTION.bindInteractivePhysics(detailSlot);

      if (window.gsap) {
        window.gsap.fromTo(detailSlot.firstElementChild, { opacity: 0.35, y: 12 }, { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out' });
      }
      const gridSlot = document.getElementById('portas-grid-slot');
      if (gridSlot) {
        gridSlot.innerHTML = renderPortasGridItems();
        MOTION.bindInteractivePhysics(gridSlot);
      }
    }
  }

  function focusPortaFromGrid(idx) {
    selectPorta(idx, true);
    MOTION.scrollToElement('#portas-wheel-section');
  }

  function setPortasFilter(key) {
    state.portasFilter = key;
    const gridSlot = document.getElementById('portas-grid-slot');
    if (gridSlot) {
      gridSlot.innerHTML = renderPortasGridItems();
      MOTION.bindInteractivePhysics(gridSlot);
    }
    // Atualiza botões ativos
    document.querySelectorAll('#portas-grid-slot').forEach(() => {});
    const section = gridSlot ? gridSlot.previousElementSibling : null;
    if (section) {
      section.querySelectorAll('.filter-pill').forEach(btn => {
        const match = btn.getAttribute('onclick').includes(`'${key}'`);
        btn.classList.toggle('is-active', match);
      });
    }
  }

  function setGalleryFilter(key) {
    state.galleryFilter = key;
    const grid = document.getElementById('home-gallery-grid');
    if (!grid) return;
    grid.innerHTML = renderGalleryCards();
    MOTION.bindInteractivePhysics(grid);
    if (window.gsap) {
      window.gsap.fromTo(grid.children, { opacity: 0, y: 20, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.45, stagger: 0.045, ease: 'power3.out', clearProps: 'transform,opacity' });
    }
    const parent = document.getElementById('home-gallery');
    if (parent) {
      parent.querySelectorAll('.filter-pill').forEach(btn => {
        const match = btn.getAttribute('onclick').includes(`'${key}'`);
        btn.classList.toggle('is-active', match);
      });
    }
  }

  function selectPhase(pageId, idx) {
    const page = DATA.PAGES[pageId];
    if (!page || !page.phases || !page.phases[idx]) return;
    state.activePhaseByPage[pageId] = idx;
    const container = document.getElementById('phases-container');
    if (!container) return;
    container.innerHTML = renderPhasesInner(page);
    MOTION.bindInteractivePhysics(container);
    const card = document.getElementById('active-phase-card');
    if (card && window.gsap) {
      window.gsap.fromTo(card, { opacity: 0.25, y: 14, scale: 0.99 }, { opacity: 1, y: 0, scale: 1, duration: 0.38, ease: 'power3.out', clearProps: 'transform,opacity' });
    }
  }

  function toggleAccordion(btn) {
    const item = btn.closest('.accordion-item');
    if (!item) return;
    const open = item.getAttribute('data-open') === 'true';
    item.setAttribute('data-open', open ? 'false' : 'true');
  }

  function toggleCheck(pageId, idx, evt) {
    const key = getCheckKey(pageId, idx);
    const nextVal = !state.checks[key];
    state.checks[key] = nextVal;
    saveChecks();

    const page = DATA.PAGES[pageId];
    const prog = getPageProgress(pageId);

    if (nextVal && evt) {
      const cx = evt.clientX || window.innerWidth / 2;
      const cy = evt.clientY || window.innerHeight / 2;
      if (prog.pct === 100) {
        MOTION.spawnBurst(cx, cy, 46, true);
        showToast(`100% concluído em ${page.shortTitle}!`);
      } else {
        MOTION.spawnBurst(cx, cy, 18, false);
      }
    }

    const slot = document.getElementById('checklist-slot');
    if (slot) {
      slot.innerHTML = renderChecklistInner(page);
      MOTION.bindInteractivePhysics(slot);
    }
    renderDock();
  }

  /* ------------------------------------------------------------------------
     12. COMMAND PALETTE TURBINADA (PÁGINAS + 12 PORTAS + AÇÕES)
     ------------------------------------------------------------------------ */
  function openCommand() {
    const modal = document.getElementById('command-modal');
    const input = document.getElementById('command-input');
    if (!modal || !input) return;
    closePortalMenu();
    state.commandOpen = true;
    state.commandIndex = 0;
    modal.classList.add('is-open');
    input.value = '';
    renderCommandList('');
    MOTION.pauseScroll(true);
    setTimeout(() => input.focus(), 40);
  }

  function closeCommand() {
    const modal = document.getElementById('command-modal');
    if (!modal) return;
    state.commandOpen = false;
    modal.classList.remove('is-open');
    MOTION.pauseScroll(false);
  }

  function norm(s) {
    return (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function getCommandItems(query) {
    const q = norm(query).trim();
    const items = [];

    // 1. Páginas
    PAGE_ORDER.forEach(id => {
      const p = DATA.PAGES[id];
      const hay = norm(`${p.title} ${p.shortTitle} ${p.category} ${p.subtitle} ${p.keywords}`);
      if (!q || hay.includes(q)) {
        items.push({
          type: 'CAPÍTULO',
          title: `${p.chapterNum} · ${p.shortTitle}`,
          sub: p.subtitle,
          icon: p.icon,
          color: p.theme.accent,
          run: () => go(p.id)
        });
      }
    });

    // 2. As 12 Portas (buscáveis por mês, porta ou marcos!)
    if (q.length >= 2) {
      DATA.DOZE_PORTAS_2027.forEach((p, idx) => {
        const hay = norm(`${p.mes} ${p.porta} ${p.foco} ${p.marcos.join(' ')}`);
        if (hay.includes(q)) {
          items.push({
            type: p.mesCurto,
            title: `${p.mes} · ${p.porta}`,
            sub: p.foco,
            icon: 'door',
            color: p.color,
            run: () => {
              state.selectedPortaIdx = idx;
              go('doze-portas');
            }
          });
        }
      });
    }

    // 3. Ações Rápidas
    const actions = [
      { title: 'Alternar Tema Claro / Escuro', sub: 'Alterna entre Obsidiana Cinematográfica e Alabastro Editorial', icon: state.theme === 'dark' ? 'sun' : 'moon', color: 'var(--accent)', keys: 'tema claro escuro dark light', run: () => { closeCommand(); toggleTheme(); } },
      { title: state.stageMode ? 'Sair do Modo Palco' : 'Ativar Modo Palco (Apresentação)', sub: 'Visual limpo para telão e projetor com navegação por setas', icon: 'presentation', color: 'var(--accent)', keys: 'apresentar palco keynote telao projetor', run: () => { closeCommand(); toggleStageMode(); } },
      { title: 'Abrir Índice Cinematográfico (Capítulos)', sub: 'Menu em tela cheia com preview de todos os 11 capítulos', icon: 'grid', color: 'var(--accent)', keys: 'menu capitulos indice', run: () => { closeCommand(); openPortalMenu(); } }
    ];

    actions.forEach(a => {
      if (!q || norm(`${a.title} ${a.keys}`).includes(q)) {
        items.push({ type: 'AÇÃO', ...a });
      }
    });

    return items;
  }

  let currentCmdItems = [];

  function renderCommandList(query) {
    const box = document.getElementById('command-results');
    if (!box) return;
    currentCmdItems = getCommandItems(query);
    if (!currentCmdItems.length) {
      box.innerHTML = `<div style="padding:32px;text-align:center;font-size:13px;color:var(--text-3);">Nenhum resultado para "<strong>${query}</strong>".</div>`;
      return;
    }
    if (state.commandIndex >= currentCmdItems.length) state.commandIndex = 0;

    box.innerHTML = currentCmdItems.map((item, i) => `
      <button class="cmd-row ${i === state.commandIndex ? 'is-selected' : ''}"
              onmouseenter="window.AREA71_APP.hoverCmd(${i})"
              onclick="window.AREA71_APP.execCmd(${i})">
        <div style="display:flex;align-items:center;gap:12px;min-width:0;">
          <span style="width:34px;height:34px;border-radius:10px;background:var(--bg-pill);color:${item.color};display:grid;place-items:center;flex-shrink:0;">
            ${icon(item.icon, 16)}
          </span>
          <div style="min-width:0;">
            <div style="font-weight:700;font-size:14px;color:var(--text-1);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${item.title}</div>
            <div style="font-size:12px;color:var(--text-3);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${item.sub}</div>
          </div>
        </div>
        <span class="kbd-chip">${item.type}</span>
      </button>
    `).join('');
  }

  /* ------------------------------------------------------------------------
     13. EVENTOS GLOBAIS E BOOT
     ------------------------------------------------------------------------ */
  function hydrateStaticIcons() {
    document.querySelectorAll('[data-icon]').forEach(el => {
      const name = el.getAttribute('data-icon');
      const size = parseInt(el.getAttribute('data-size') || '16', 10);
      el.innerHTML = icon(name, size);
    });
  }

  function bindGlobalEvents() {
    const modal = document.getElementById('command-modal');
    if (modal) {
      modal.addEventListener('click', e => {
        if (e.target === modal) closeCommand();
      });
    }

    const input = document.getElementById('command-input');
    if (input) {
      input.addEventListener('input', e => {
        state.commandIndex = 0;
        renderCommandList(e.target.value);
      });
      input.addEventListener('keydown', e => {
        if (!currentCmdItems.length) return;
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          state.commandIndex = (state.commandIndex + 1) % currentCmdItems.length;
          renderCommandList(input.value);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          state.commandIndex = (state.commandIndex - 1 + currentCmdItems.length) % currentCmdItems.length;
          renderCommandList(input.value);
        } else if (e.key === 'Enter') {
          e.preventDefault();
          if (currentCmdItems[state.commandIndex]) currentCmdItems[state.commandIndex].run();
        }
      });
    }

    document.addEventListener('keydown', e => {
      const tag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
      const typing = tag === 'input' || tag === 'textarea';

      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (state.commandOpen) closeCommand();
        else openCommand();
        return;
      }

      if (e.key === 'Escape') {
        if (state.commandOpen) return closeCommand();
        if (state.portalMenuOpen) return closePortalMenu();
        if (state.stageMode) return toggleStageMode(false);
        return;
      }

      if (typing) return;

      if (e.key.toLowerCase() === 'm') {
        e.preventDefault();
        togglePortalMenu();
      } else if (e.key.toLowerCase() === 'p') {
        e.preventDefault();
        toggleStageMode();
      } else if (e.key === 'ArrowRight') {
        if (state.stageMode) {
          e.preventDefault();
          step(1);
        }
      } else if (e.key === 'ArrowLeft') {
        if (state.stageMode) {
          e.preventDefault();
          step(-1);
        }
      } else if (['1', '2', '3', '4'].includes(e.key)) {
        const page = DATA.PAGES[state.currentPage];
        const idx = parseInt(e.key, 10) - 1;
        if (page && page.phases && page.phases[idx]) {
          selectPhase(page.id, idx);
        }
      }
    });
  }

  window.AREA71_APP = {
    go,
    step,
    toggleTheme,
    toggleStageMode,
    openPortalMenu,
    closePortalMenu,
    togglePortalMenu,
    previewPortal: renderPortalPreview,
    openCommand,
    closeCommand,
    hoverCmd: i => { state.commandIndex = i; },
    execCmd: i => { if (currentCmdItems[i]) currentCmdItems[i].run(); },
    selectPorta,
    focusPortaFromGrid,
    setPortasFilter,
    setGalleryFilter,
    selectPhase,
    toggleAccordion,
    toggleCheck,
    scrollTo: sel => MOTION.scrollToElement(sel),
    scrollToChecklist: () => MOTION.scrollToElement('#checklist-anchor')
  };

  window.addEventListener('DOMContentLoaded', () => {
    loadState();
    hydrateStaticIcons();
    applyTheme();
    MOTION.init();
    bindGlobalEvents();
    renderPageImmediate();
  });
})();
