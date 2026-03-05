/* ================================================================
   ULTRA PREMIUM JS — Ajay Shingadiya Portfolio
   Features: Particle canvas · Typing effect · Scroll reveals
             Counter animation · Smooth navbar · Theme toggle
   ================================================================ */

document.addEventListener("DOMContentLoaded", () => {
  /* ── 1. THEME ─────────────────────────────────────────── */
  const initTheme = () => {
    // Always default to dark mode on first visit
    const saved = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", saved);
    updateThemeIcon(saved);
  };

  const toggleTheme = () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateThemeIcon(next);
  };

  const updateThemeIcon = (theme) => {
    const icon = document.querySelector(".theme-toggle i");
    if (!icon) return;
    icon.setAttribute("data-lucide", theme === "dark" ? "sun" : "moon");
    if (window.lucide) window.lucide.createIcons();
  };

  initTheme();
  document
    .querySelector(".theme-toggle")
    ?.addEventListener("click", toggleTheme);

  /* ── 2. MOBILE MENU ───────────────────────────────────── */
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  menuToggle?.addEventListener("click", () => {
    navMenu?.classList.toggle("open");
    const icon = menuToggle.querySelector("i");
    if (icon) {
      const isOpen = navMenu?.classList.contains("open");
      icon.setAttribute("data-lucide", isOpen ? "x" : "menu");
      if (window.lucide) window.lucide.createIcons();
    }
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!menuToggle?.contains(e.target) && !navMenu?.contains(e.target)) {
      navMenu?.classList.remove("open");
    }
  });

  /* ── 3. STICKY HEADER ─────────────────────────────────── */
  const header = document.querySelector(".header");
  const onScroll = () => {
    if (window.scrollY > 30) header?.classList.add("scrolled");
    else header?.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ── 4. SCROLL REVEAL ─────────────────────────────────── */
  const revealEls = document.querySelectorAll(
    ".bento-item, .process-step, .section-title, .section-label, .section-subtitle, .trust-stat, .reveal",
  );

  revealEls.forEach((el, i) => {
    el.classList.add("reveal");
    if (i % 4 === 1) el.classList.add("reveal-delay-1");
    if (i % 4 === 2) el.classList.add("reveal-delay-2");
    if (i % 4 === 3) el.classList.add("reveal-delay-3");
  });

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
  );

  revealEls.forEach((el) => revealObserver.observe(el));

  /* ── 5. PARTICLE CANVAS ───────────────────────────────── */
  const canvas = document.getElementById("particle-canvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let W,
      H,
      particles = [],
      animId;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const isDark = () =>
      document.documentElement.getAttribute("data-theme") !== "light";

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.r = Math.random() * 1.5 + 0.3;
        this.a = Math.random() * 0.6 + 0.1;
        const palette = isDark()
          ? ["99,102,241", "168,85,247", "6,182,212"]
          : ["99,102,241", "168,85,247"];
        this.color = palette[Math.floor(Math.random() * palette.length)];
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color},${this.a})`;
        ctx.fill();
      }
    }

    const COUNT = Math.min(180, Math.floor((W * H) / 7000));
    for (let i = 0; i < COUNT; i++) particles.push(new Particle());

    const MAX_DIST = 120;
    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_DIST) {
            const alpha = (1 - d / MAX_DIST) * (isDark() ? 0.15 : 0.08);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = isDark()
              ? `rgba(99,102,241,${alpha})`
              : `rgba(99,102,241,${alpha * 0.5})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
    };

    const loop = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      drawLines();
      animId = requestAnimationFrame(loop);
    };
    loop();
  }

  /* ── 6. TYPING EFFECT ─────────────────────────────────── */
  const typedEl = document.getElementById("typed-text");
  if (typedEl) {
    // Read per-page phrases from data-phrases attribute, else use defaults
    let phrases;
    try {
      const raw = typedEl.getAttribute("data-phrases");
      phrases = raw ? JSON.parse(raw) : null;
    } catch (e) {
      phrases = null;
    }

    if (!phrases || !phrases.length) {
      phrases = [
        "Massive Data Extraction.",
        "Intelligent Automation.",
        "Chemical Intelligence.",
        "Enterprise Scale.",
        "Python Engineering.",
      ];
    }

    let pIdx = 0,
      cIdx = 0,
      deleting = false;
    const cursor = document.createElement("span");
    cursor.className = "typed-cursor";
    typedEl.after(cursor);

    const typeLoop = () => {
      const phrase = phrases[pIdx];
      if (!deleting) {
        typedEl.textContent = phrase.slice(0, ++cIdx);
        if (cIdx === phrase.length) {
          deleting = true;
          setTimeout(typeLoop, 1800);
          return;
        }
        setTimeout(typeLoop, 65);
      } else {
        typedEl.textContent = phrase.slice(0, --cIdx);
        if (cIdx === 0) {
          deleting = false;
          pIdx = (pIdx + 1) % phrases.length;
          setTimeout(typeLoop, 300);
          return;
        }
        setTimeout(typeLoop, 35);
      }
    };
    typeLoop();
  }

  /* ── 7. COUNTER ANIMATION ─────────────────────────────── */
  const counters = document.querySelectorAll("[data-count]");
  if (counters.length) {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const end = +el.getAttribute("data-count");
          const suffix = el.getAttribute("data-suffix") || "";
          const dur = 1800;
          const step = 16;
          const inc = end / (dur / step);
          let cur = 0;
          const timer = setInterval(() => {
            cur = Math.min(cur + inc, end);
            el.textContent =
              (Number.isInteger(end) ? Math.round(cur) : cur.toFixed(1)) +
              suffix;
            if (cur >= end) clearInterval(timer);
          }, step);
          counterObserver.unobserve(el);
        });
      },
      { threshold: 0.5 },
    );
    counters.forEach((c) => counterObserver.observe(c));
  }

  /* ── 8. SMOOTH ACTIVE NAV ─────────────────────────────── */
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-menu a").forEach((link) => {
    const href = link.getAttribute("href")?.split("/").pop();
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });

  /* ── 9. BUTTON RIPPLE ─────────────────────────────────── */
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.cssText = `
        position:absolute; border-radius:50%; background:rgba(255,255,255,0.2);
        width:${size}px; height:${size}px;
        left:${e.clientX - rect.left - size / 2}px;
        top:${e.clientY - rect.top - size / 2}px;
        animation: rippleOut 0.6s linear forwards; pointer-events:none;
      `;
      this.style.position = "relative";
      this.style.overflow = "hidden";
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Inject ripple keyframe
  if (!document.getElementById("ripple-style")) {
    const s = document.createElement("style");
    s.id = "ripple-style";
    s.textContent = `@keyframes rippleOut { to { transform: scale(2.5); opacity: 0; } }`;
    document.head.appendChild(s);
  }
});
