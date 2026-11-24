/* ==========================================================================
   ÁREA 71 · MOTOR DE MOTION, CANVAS VIVO, FÍSICA E SCROLL CINEMATOGRÁFICO
   --------------------------------------------------------------------------
   Responsável por:
   - Canvas de Aurora Mesh fluido + Constelação de partículas reativa
   - Canvas de celebração (burst de partículas ao concluir checklists)
   - Smooth scroll via Lenis integrado ao GSAP ScrollTrigger
   - Cursor magnético com rótulos contextuais
   - Spotlight border tracking (--mx, --my) & 3D Tilt nos cards
   - Botões magnéticos, Split-Text Reveal, Scroll-Scrub Verse e Odômetros
   - Cortina cinematográfica de transição entre páginas
   ========================================================================== */

window.AREA71_MOTION = (function () {
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasFinePointer = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  let lenis = null;
  let scrollVelocity = 0;
  let pointer = { x: window.innerWidth * 0.5, y: window.innerHeight * 0.4, active: false };
  let cursorRingPos = { x: window.innerWidth * 0.5, y: window.innerHeight * 0.4 };
  let cursorDotPos = { x: window.innerWidth * 0.5, y: window.innerHeight * 0.4 };

  // Paleta interpolada suavemente no Canvas de fundo
  let currentColor1 = [234, 179, 8];
  let currentColor2 = [249, 115, 22];
  let targetColor1 = [234, 179, 8];
  let targetColor2 = [249, 115, 22];

  // Partículas da constelação + partículas de celebração
  let stars = [];
  let bursts = [];
  let ambientCtx = null;
  let fxCtx = null;
  let ambientCanvas = null;
  let fxCanvas = null;
  let rafId = null;

  /* ------------------------------------------------------------------------
     1. ATUALIZAÇÃO DE ATMOSFERA CROMÁTICA POR CAPÍTULO
     ------------------------------------------------------------------------ */
  function parseRgb(str) {
    const parts = (str || '234, 179, 8').split(',').map(n => parseFloat(n.trim()));
    return parts.length === 3 ? parts : [234, 179, 8];
  }

  function setChapterTheme(theme) {
    if (!theme) return;
    const root = document.documentElement;
    root.style.setProperty('--accent', theme.accent);
    root.style.setProperty('--accent-2', theme.accent2);
    root.style.setProperty('--accent-rgb', theme.rgb);
    root.style.setProperty('--accent2-rgb', theme.rgb2);
    targetColor1 = parseRgb(theme.rgb);
    targetColor2 = parseRgb(theme.rgb2);
  }

  /* ------------------------------------------------------------------------
     2. CANVAS DE FUNDO VIVO (AURORA MESH + CONSTELAÇÃO REATIVA)
     ------------------------------------------------------------------------ */
  function initCanvases() {
    ambientCanvas = document.getElementById('ambient-canvas');
    fxCanvas = document.getElementById('fx-canvas');
    if (!ambientCanvas || !fxCanvas) return;

    ambientCtx = ambientCanvas.getContext('2d');
    fxCtx = fxCanvas.getContext('2d');

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      ambientCanvas.width = w * dpr;
      ambientCanvas.height = h * dpr;
      ambientCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

      fxCanvas.width = w * dpr;
      fxCanvas.height = h * dpr;
      fxCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

      seedStars(w, h);
    }

    resize();
    window.addEventListener('resize', resize);

    if (!prefersReduced) {
      let time = 0;
      function loop() {
        time += 0.006;
        // Interpolação suave das cores da aurora
        for (let i = 0; i < 3; i++) {
          currentColor1[i] += (targetColor1[i] - currentColor1[i]) * 0.045;
          currentColor2[i] += (targetColor2[i] - currentColor2[i]) * 0.045;
        }
        scrollVelocity *= 0.9;

        drawAmbient(time);
        drawBursts();
        updateCursorFrame();
        updateVelocitySkew();
        rafId = requestAnimationFrame(loop);
      }
      rafId = requestAnimationFrame(loop);
    }
  }

  function seedStars(w, h) {
    const count = Math.min(58, Math.max(24, Math.floor((w * h) / 26000)));
    stars = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.34,
        vy: (Math.random() - 0.5) * 0.34,
        r: Math.random() * 1.65 + 0.6,
        alpha: Math.random() * 0.45 + 0.18,
        phase: Math.random() * Math.PI * 2
      });
    }
  }

  function drawAmbient(t) {
    if (!ambientCtx) return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    const isLight = document.documentElement.classList.contains('light');

    ambientCtx.clearRect(0, 0, w, h);

    const c1 = `${Math.round(currentColor1[0])}, ${Math.round(currentColor1[1])}, ${Math.round(currentColor1[2])}`;
    const c2 = `${Math.round(currentColor2[0])}, ${Math.round(currentColor2[1])}, ${Math.round(currentColor2[2])}`;

    // 3 orbes aurora orgânicos
    const orbs = [
      {
        x: w * (0.18 + Math.sin(t * 0.7) * 0.09) + (pointer.x - w * 0.5) * 0.03,
        y: h * (0.22 + Math.cos(t * 0.55) * 0.08) + (pointer.y - h * 0.5) * 0.03,
        radius: Math.max(w, h) * 0.46,
        color: c1,
        alpha: isLight ? 0.12 : 0.14
      },
      {
        x: w * (0.82 + Math.cos(t * 0.6) * 0.09) - (pointer.x - w * 0.5) * 0.025,
        y: h * (0.28 + Math.sin(t * 0.45) * 0.1),
        radius: Math.max(w, h) * 0.42,
        color: c2,
        alpha: isLight ? 0.09 : 0.11
      },
      {
        x: w * (0.52 + Math.sin(t * 0.4 + 2) * 0.14),
        y: h * (0.85 + Math.cos(t * 0.5) * 0.07),
        radius: Math.max(w, h) * 0.38,
        color: c1,
        alpha: isLight ? 0.07 : 0.08
      }
    ];

    orbs.forEach(o => {
      const grad = ambientCtx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.radius);
      grad.addColorStop(0, `rgba(${o.color}, ${o.alpha})`);
      grad.addColorStop(0.55, `rgba(${o.color}, ${o.alpha * 0.25})`);
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ambientCtx.fillStyle = grad;
      ambientCtx.fillRect(0, 0, w, h);
    });

    // Constelação de partículas que reage ao scroll e ao mouse
    const linkDist = 115;
    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];
      s.x += s.vx;
      s.y += s.vy - scrollVelocity * 0.16;

      // Suave interação gravitacional com o cursor
      if (pointer.active) {
        const dx = pointer.x - s.x;
        const dy = pointer.y - s.y;
        const dist = Math.hypot(dx, dy);
        if (dist > 18 && dist < 170) {
          s.x += (dx / dist) * 0.28;
          s.y += (dy / dist) * 0.28;
        }
      }

      if (s.x < -10) s.x = w + 10;
      if (s.x > w + 10) s.x = -10;
      if (s.y < -10) s.y = h + 10;
      if (s.y > h + 10) s.y = -10;

      const twinkle = 0.65 + 0.35 * Math.sin(t * 4 + s.phase);
      const a = s.alpha * twinkle * (isLight ? 0.65 : 1);

      ambientCtx.beginPath();
      ambientCtx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ambientCtx.fillStyle = `rgba(${c1}, ${a})`;
      ambientCtx.fill();

      // Conexões tênues próximas
      for (let j = i + 1; j < stars.length; j++) {
        const s2 = stars[j];
        const d = Math.hypot(s.x - s2.x, s.y - s2.y);
        if (d < linkDist) {
          const lineA = (1 - d / linkDist) * (isLight ? 0.09 : 0.12);
          ambientCtx.beginPath();
          ambientCtx.moveTo(s.x, s.y);
          ambientCtx.lineTo(s2.x, s2.y);
          ambientCtx.strokeStyle = `rgba(${c1}, ${lineA})`;
          ambientCtx.lineWidth = 0.7;
          ambientCtx.stroke();
        }
      }
    }
  }

  /* ------------------------------------------------------------------------
     3. PARTÍCULAS CELEBRATÓRIAS (BURST AO CONCLUIR CHECKLISTS)
     ------------------------------------------------------------------------ */
  function spawnBurst(x, y, count = 24, celebratory = false) {
    if (prefersReduced || !fxCtx) return;
    const palette = celebratory
      ? ['#EAB308', '#10B981', '#38BDF8', '#F43F5E', '#FFFBEB']
      : ['#10B981', '#EAB308', '#FFFBEB'];

    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
      const speed = (celebratory ? 4.8 : 2.6) + Math.random() * (celebratory ? 5.5 : 3.2);
      bursts.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (celebratory ? 2.2 : 1.0),
        size: Math.random() * 3.2 + 1.8,
        color: palette[i % palette.length],
        life: 1,
        decay: 0.018 + Math.random() * 0.016
      });
    }
  }

  function drawBursts() {
    if (!fxCtx) return;
    fxCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (let i = bursts.length - 1; i >= 0; i--) {
      const p = bursts[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.14;
      p.vx *= 0.97;
      p.life -= p.decay;
      if (p.life <= 0) {
        bursts.splice(i, 1);
        continue;
      }
      fxCtx.save();
      fxCtx.globalAlpha = Math.max(0, p.life);
      fxCtx.fillStyle = p.color;
      fxCtx.beginPath();
      fxCtx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
      fxCtx.fill();
      fxCtx.restore();
    }
  }

  /* ------------------------------------------------------------------------
     4. SMOOTH SCROLL (LENIS) + SINCRONIA GSAP SCROLLTRIGGER + BARRA TOPO
     ------------------------------------------------------------------------ */
  function initSmoothScroll() {
    if (window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);
    }

    if (!prefersReduced && typeof window.Lenis === 'function') {
      lenis = new window.Lenis({
        duration: 1.15,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.5
      });

      lenis.on('scroll', e => {
        scrollVelocity = Math.max(-28, Math.min(28, e.velocity || 0));
        updateScrollProgress();
        if (window.ScrollTrigger) window.ScrollTrigger.update();
      });

      if (window.gsap) {
        window.gsap.ticker.add(time => {
          lenis.raf(time * 1000);
        });
        window.gsap.ticker.lagSmoothing(0);
      } else {
        function raf(t) {
          lenis.raf(t);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      }
    } else {
      let lastY = window.scrollY;
      window.addEventListener('scroll', () => {
        const y = window.scrollY;
        scrollVelocity = Math.max(-20, Math.min(20, (y - lastY) * 0.5));
        lastY = y;
        updateScrollProgress();
      }, { passive: true });
    }
  }

  function updateScrollProgress() {
    const bar = document.getElementById('scroll-progress-line');
    if (!bar) return;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const pct = Math.min(100, Math.max(0, (window.scrollY / maxScroll) * 100));
    bar.style.width = `${pct}%`;
  }

  function scrollToTop(immediate = true) {
    if (lenis) {
      lenis.scrollTo(0, { immediate });
    } else {
      window.scrollTo({ top: 0, behavior: immediate ? 'auto' : 'smooth' });
    }
    updateScrollProgress();
  }

  function scrollToElement(selector) {
    const el = typeof selector === 'string' ? document.querySelector(selector) : selector;
    if (!el) return;
    if (lenis) {
      lenis.scrollTo(el, { offset: -96, duration: 1.1 });
    } else {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function pauseScroll(paused) {
    if (!lenis) return;
    if (paused) lenis.stop();
    else lenis.start();
  }

  /* ------------------------------------------------------------------------
     5. CURSOR MAGNÉTICO CUSTOMIZADO
     ------------------------------------------------------------------------ */
  function initCursor() {
    if (!hasFinePointer || prefersReduced) return;
    const dot = document.getElementById('custom-cursor-dot');
    const ring = document.getElementById('custom-cursor-ring');
    const ringText = ring ? ring.querySelector('.cursor-text') : null;
    if (!dot || !ring) return;

    window.addEventListener('mousemove', e => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
      dot.style.opacity = '1';
      ring.style.opacity = '1';

      const target = e.target;
      const labelEl = target && target.closest ? target.closest('[data-cursor]') : null;
      const clickEl = target && target.closest ? target.closest('button, a, [role="button"]') : null;

      if (labelEl) {
        const txt = labelEl.getAttribute('data-cursor');
        if (ringText) ringText.textContent = txt;
        document.body.classList.add('cursor-label-active');
        document.body.classList.remove('cursor-hover');
      } else if (clickEl) {
        document.body.classList.remove('cursor-label-active');
        document.body.classList.add('cursor-hover');
      } else {
        document.body.classList.remove('cursor-label-active', 'cursor-hover');
      }
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
      pointer.active = false;
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    });
  }

  function updateCursorFrame() {
    if (!hasFinePointer || !pointer.active) return;
    const dot = document.getElementById('custom-cursor-dot');
    const ring = document.getElementById('custom-cursor-ring');
    if (!dot || !ring) return;

    cursorDotPos.x += (pointer.x - cursorDotPos.x) * 0.42;
    cursorDotPos.y += (pointer.y - cursorDotPos.y) * 0.42;
    cursorRingPos.x += (pointer.x - cursorRingPos.x) * 0.16;
    cursorRingPos.y += (pointer.y - cursorRingPos.y) * 0.16;

    dot.style.transform = `translate3d(${cursorDotPos.x}px, ${cursorDotPos.y}px, 0) translate(-50%, -50%)`;
    ring.style.transform = `translate3d(${cursorRingPos.x}px, ${cursorRingPos.y}px, 0) translate(-50%, -50%)`;
  }

  function updateVelocitySkew() {
    const marquee = document.querySelector('.kinetic-marquee-band');
    if (!marquee) return;
    const skew = Math.max(-5, Math.min(5, scrollVelocity * 0.24));
    marquee.style.transform = Math.abs(skew) > 0.05 ? `skewX(${skew.toFixed(2)}deg)` : '';
  }

  /* ------------------------------------------------------------------------
     6. SPOTLIGHT TRACKING, 3D TILT E BOTÕES MAGNÉTICOS
     ------------------------------------------------------------------------ */
  function bindInteractivePhysics(container) {
    if (!hasFinePointer || prefersReduced || !container) return;

    // Spotlight border + surface tracking em todos os .motion-surface
    container.querySelectorAll('.motion-surface').forEach(card => {
      if (card.dataset.physBound) return;
      card.dataset.physBound = '1';

      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mx', `${x}px`);
        card.style.setProperty('--my', `${y}px`);

        // Micro 3D Tilt nos cards marcados com data-tilt
        if (card.hasAttribute('data-tilt')) {
          const rx = ((y / rect.height) - 0.5) * -6.5;
          const ry = ((x / rect.width) - 0.5) * 6.5;
          card.style.transform = `perspective(950px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateY(-4px)`;
        }
      });

      card.addEventListener('mouseleave', () => {
        if (card.hasAttribute('data-tilt')) {
          card.style.transform = '';
        }
      });
    });

    // Botões magnéticos
    container.querySelectorAll('[data-magnetic]').forEach(btn => {
      if (btn.dataset.magBound) return;
      btn.dataset.magBound = '1';
      btn.addEventListener('mousemove', e => {
        const rect = btn.getBoundingClientRect();
        const dx = (e.clientX - rect.left - rect.width / 2) * 0.24;
        const dy = (e.clientY - rect.top - rect.height / 2) * 0.24;
        btn.style.transform = `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }

  /* ------------------------------------------------------------------------
     7. ANIMAÇÕES DE ENTRADA, SPLIT-TEXT, SCROLL-SCRUB E ODÔMETROS
     ------------------------------------------------------------------------ */
  function splitTextIntoMasks(el) {
    if (!el || el.dataset.splitDone) return [];
    el.dataset.splitDone = '1';
    const html = el.innerHTML;
    // Se contém tags HTML internas (ex: <span class="accent-gradient">), divide cada nó de texto preservando tags
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
    const textNodes = [];
    let node;
    while ((node = walker.nextNode())) {
      if (node.nodeValue.trim().length > 0) textNodes.push(node);
    }
    const inners = [];
    textNodes.forEach(tNode => {
      const frag = document.createDocumentFragment();
      const parts = tNode.nodeValue.split(/(\s+)/);
      parts.forEach(part => {
        if (/^\s+$/.test(part)) {
          frag.appendChild(document.createTextNode(part));
        } else if (part.length) {
          const mask = document.createElement('span');
          mask.className = 'word-mask';
          const inner = document.createElement('span');
          inner.className = 'word-inner';
          inner.textContent = part;
          mask.appendChild(inner);
          frag.appendChild(mask);
          inners.push(inner);
        }
      });
      tNode.parentNode.replaceChild(frag, tNode);
    });
    return inners;
  }

  function animatePageEntrance(container) {
    if (!container) return;

    // Limpa ScrollTriggers antigos antes de criar novos
    if (window.ScrollTrigger) {
      window.ScrollTrigger.getAll().forEach(st => st.kill());
    }

    bindInteractivePhysics(container);
    bindInteractivePhysics(document.body);

    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    // 1. Split-Text Reveal nos títulos principais
    container.querySelectorAll('[data-split-reveal]').forEach(el => {
      const words = splitTextIntoMasks(el);
      if (gsap && !prefersReduced && words.length) {
        gsap.fromTo(
          words,
          { yPercent: 115, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.045,
            ease: 'power4.out',
            clearProps: 'transform'
          }
        );
      }
    });

    // 2. Hero Entrance imediata
    const heroEls = container.querySelectorAll('[data-hero-enter]');
    if (gsap && !prefersReduced && heroEls.length) {
      gsap.fromTo(
        heroEls,
        { y: 26, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.075,
          delay: 0.08,
          ease: 'power3.out',
          clearProps: 'transform,opacity'
        }
      );
    }

    // 3. Scroll-Scrub Verse Illumination (cada palavra do versículo acende ao rolar!)
    container.querySelectorAll('[data-scrub-verse]').forEach(quoteEl => {
      if (quoteEl.dataset.scrubDone) return;
      quoteEl.dataset.scrubDone = '1';
      const raw = quoteEl.textContent.trim();
      const words = raw.split(/\s+/);
      quoteEl.innerHTML = words
        .map(w => `<span class="scrub-word">${w}</span>`)
        .join(' ');
      const wordSpans = quoteEl.querySelectorAll('.scrub-word');

      if (gsap && ScrollTrigger && !prefersReduced) {
        gsap.fromTo(
          wordSpans,
          { opacity: 0.22, y: 6 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.05,
            ease: 'none',
            scrollTrigger: {
              trigger: quoteEl.closest('.scripture-stage') || quoteEl,
              start: 'top 84%',
              end: 'bottom 58%',
              scrub: 0.6
            }
          }
        );
      }
    });

    // 4. Odômetro / Counter-Up nos números
    container.querySelectorAll('[data-counter]').forEach(el => {
      const targetVal = parseInt(el.getAttribute('data-counter'), 10) || 0;
      const suffix = el.getAttribute('data-suffix') || '';

      function runCount() {
        if (el.dataset.counted) return;
        el.dataset.counted = '1';
        if (gsap && !prefersReduced) {
          const obj = { val: 0 };
          gsap.to(obj, {
            val: targetVal,
            duration: 1.35,
            ease: 'power3.out',
            onUpdate: () => {
              el.textContent = `${Math.round(obj.val)}${suffix}`;
            }
          });
        } else {
          el.textContent = `${targetVal}${suffix}`;
        }
      }

      if (ScrollTrigger && !prefersReduced) {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 90%',
          once: true,
          onEnter: runCount
        });
      } else {
        runCount();
      }
    });

    // 5. Scroll-Triggered Reveal para seções e cards abaixo da dobra
    const revealEls = container.querySelectorAll('[data-reveal]');
    if (gsap && ScrollTrigger && !prefersReduced) {
      revealEls.forEach(el => {
        const delay = parseFloat(el.getAttribute('data-delay') || '0');
        gsap.fromTo(
          el,
          { y: 34, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.78,
            delay,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              once: true
            }
          }
        );
      });
      setTimeout(() => ScrollTrigger.refresh(), 80);
    }

    // 6. Scroll-Driven Parallax sutil em elementos marcados com [data-parallax]
    if (gsap && ScrollTrigger && !prefersReduced) {
      container.querySelectorAll('[data-parallax]').forEach(el => {
        const dist = parseFloat(el.getAttribute('data-parallax') || '36');
        gsap.to(el, {
          y: dist,
          ease: 'none',
          scrollTrigger: {
            trigger: el.closest('section') || el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      });
    }

    updateScrollProgress();
  }

  /* ------------------------------------------------------------------------
     8. TRANSIÇÃO CINEMATOGRÁFICA DE CORTINA ENTRE CAPÍTULOS
     ------------------------------------------------------------------------ */
  let isTransitioning = false;

  function transitionTo(page, swapFn) {
    const curtain = document.getElementById('page-curtain');
    const gsap = window.gsap;

    if (!curtain || !gsap || prefersReduced || isTransitioning) {
      setChapterTheme(page.theme);
      swapFn();
      scrollToTop(true);
      return;
    }

    isTransitioning = true;
    setChapterTheme(page.theme);

    const kicker = curtain.querySelector('.curtain-kicker');
    const title = curtain.querySelector('.curtain-title');
    if (kicker) kicker.textContent = `CAPÍTULO ${page.chapterNum} · ${page.category}`;
    if (title) title.textContent = page.shortTitle;

    const tl = gsap.timeline({
      onComplete: () => {
        isTransitioning = false;
      }
    });

    tl.set(curtain, { opacity: 1, clipPath: 'inset(100% 0% 0% 0%)' })
      .to(curtain, {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 0.36,
        ease: 'power4.inOut'
      })
      .add(() => {
        swapFn();
        scrollToTop(true);
      })
      .to(curtain, {
        clipPath: 'inset(0% 0% 100% 0%)',
        duration: 0.44,
        delay: 0.08,
        ease: 'power4.inOut'
      })
      .set(curtain, { opacity: 0 });
  }

  /* ------------------------------------------------------------------------
     9. PRELOADER INICIAL
     ------------------------------------------------------------------------ */
  function dismissPreloader() {
    const pre = document.getElementById('preloader');
    if (!pre) return;
    setTimeout(() => {
      pre.classList.add('is-done');
    }, prefersReduced ? 50 : 880);
  }

  function init() {
    initCanvases();
    initSmoothScroll();
    initCursor();
    dismissPreloader();
  }

  return {
    init,
    setChapterTheme,
    animatePageEntrance,
    bindInteractivePhysics,
    transitionTo,
    spawnBurst,
    scrollToTop,
    scrollToElement,
    pauseScroll,
    updateScrollProgress
  };
})();
