/* ============================================================
   PULSE AGENCY — script.js
   Funcionalidades: Canvas "pulse grid", nav scroll,
   hamburger, scroll reveal, counter animation, form submit
   ============================================================ */

(function () {
  'use strict';

  // ==================== CANVAS — PULSE GRID ====================
  (function initPulseCanvas() {
    const canvas = document.getElementById('pulseCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height, cols, rows, nodes;
    const CELL = 60;

    function resize() {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      buildGrid();
    }

    function buildGrid() {
      cols = Math.ceil(width / CELL) + 1;
      rows = Math.ceil(height / CELL) + 1;
      nodes = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          nodes.push({
            x: c * CELL,
            y: r * CELL,
            phase: Math.random() * Math.PI * 2,
            speed: 0.3 + Math.random() * 0.6,
          });
        }
      }
    }

    function draw(t) {
      ctx.clearRect(0, 0, width, height);
      const time = t * 0.001;

      // Draw grid lines
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = 'rgba(108,99,255,0.12)';

      for (let r = 0; r < rows; r++) {
        ctx.beginPath();
        ctx.moveTo(0, r * CELL);
        ctx.lineTo(width, r * CELL);
        ctx.stroke();
      }
      for (let c = 0; c < cols; c++) {
        ctx.beginPath();
        ctx.moveTo(c * CELL, 0);
        ctx.lineTo(c * CELL, height);
        ctx.stroke();
      }

      // Draw pulsing dots at intersections
      nodes.forEach(node => {
        const pulse = (Math.sin(time * node.speed + node.phase) + 1) / 2;
        const radius = 1.5 + pulse * 3;
        const alpha = 0.1 + pulse * 0.45;

        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(108,99,255,${alpha})`;
        ctx.fill();

        // Glow for brighter nodes
        if (pulse > 0.7) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(108,99,255,${alpha * 0.15})`;
          ctx.fill();
        }
      });

      // Occasional "pulse wave" line connecting two random bright nodes
      if (Math.floor(time * 2) % 3 === 0) {
        const brightNodes = nodes.filter(n => {
          const p = (Math.sin(time * n.speed + n.phase) + 1) / 2;
          return p > 0.85;
        });
        if (brightNodes.length >= 2) {
          const a = brightNodes[0];
          const b = brightNodes[Math.min(3, brightNodes.length - 1)];
          const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
          grad.addColorStop(0, 'rgba(108,99,255,0.25)');
          grad.addColorStop(0.5, 'rgba(255,107,107,0.35)');
          grad.addColorStop(1, 'rgba(108,99,255,0.25)');
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      }

      requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener('resize', resize);
    requestAnimationFrame(draw);
  })();

  // ==================== HEADER SCROLL ====================
  (function initHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;

    function onScroll() {
      header.classList.toggle('scrolled', window.scrollY > 40);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  })();

  // ==================== HAMBURGER MENU ====================
  (function initHamburger() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    if (!hamburger || !navMenu) return;

    function toggleMenu(open) {
      hamburger.classList.toggle('is-open', open);
      navMenu.classList.toggle('is-open', open);
      hamburger.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    }

    hamburger.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('is-open');
      toggleMenu(!isOpen);
    });

    // Close on nav link click
    navMenu.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => toggleMenu(false));
    });

    // Close on outside click
    document.addEventListener('click', e => {
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        toggleMenu(false);
      }
    });

    // Close on Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') toggleMenu(false);
    });
  })();

  // ==================== ACTIVE NAV LINK ON SCROLL ====================
  (function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link:not(.nav__link--cta)');
    if (!sections.length || !navLinks.length) return;

    function update() {
      const scrollY = window.scrollY + 120;
      let current = '';

      sections.forEach(section => {
        if (scrollY >= section.offsetTop) {
          current = section.id;
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    }

    window.addEventListener('scroll', update, { passive: true });
    update();
  })();

  // ==================== SCROLL REVEAL ====================
  (function initReveal() {
    const elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach(el => observer.observe(el));
  })();

  // ==================== COUNTER ANIMATION ====================
  (function initCounters() {
    const counters = document.querySelectorAll('.stat-card__number[data-target]');
    if (!counters.length) return;

    const DURATION = 1800;

    function animateCounter(el) {
      const target = parseFloat(el.dataset.target);
      const isFloat = String(target).includes('.');
      const decimals = isFloat ? 1 : 0;
      const start = performance.now();

      function easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
      }

      function tick(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / DURATION, 1);
        const value = target * easeOutCubic(progress);
        el.textContent = value.toFixed(decimals);

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          el.textContent = target.toFixed(decimals);
        }
      }

      requestAnimationFrame(tick);
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach(el => observer.observe(el));
  })();

  // ==================== CONTACT FORM ====================
  (function initContactForm() {
    const form = document.getElementById('contactForm');
    const successMsg = document.getElementById('formSuccess');
    if (!form || !successMsg) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Basic validation visual feedback
      let isValid = true;
      const inputs = form.querySelectorAll('[required]');

      inputs.forEach(input => {
        input.style.borderColor = '';
        if (!input.value.trim()) {
          input.style.borderColor = '#FF6B6B';
          isValid = false;
        }
      });

      if (!isValid) return;

      // Simulate submit (no backend)
      const btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.querySelector('.btn__text').textContent = 'Enviando...';

      setTimeout(() => {
        form.reset();
        btn.disabled = false;
        btn.querySelector('.btn__text').textContent = 'Enviar mensaje';
        successMsg.classList.add('is-visible');

        setTimeout(() => {
          successMsg.classList.remove('is-visible');
        }, 5000);
      }, 1200);
    });
  })();

})();
