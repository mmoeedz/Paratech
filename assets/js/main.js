'use strict';

/* =====================================================
   PARATECH — Shared JS (multi-page safe)
   ===================================================== */
const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- LOADER ---------- */
window.addEventListener('load', () => {
  const loader = $('#loader');
  if (loader) setTimeout(() => loader.classList.add('hidden'), 500);
});

/* ---------- YEAR ---------- */
(() => { const y = $('#year'); if (y) y.textContent = new Date().getFullYear(); })();

/* =====================================================
   NAVBAR — scroll glass + active link + mobile menu
   ===================================================== */
(() => {
  const navbar = $('#navbar');
  if (!navbar) return;
  const hamburger = $('#hamburger');
  const mobileMenu = $('#mobileMenu');
  const navLinks = $$('.nav-links a, .mobile-menu a');
  const sections = $$('section[id]');
  const backTop = $('#backTop');

  const isHomePage = sections.length > 1;

  const onScroll = () => {
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 30);
    if (backTop) backTop.classList.toggle('show', y > 600);

    // Active link tracking only on homepage with anchor links
    if (isHomePage) {
      let current = sections[0] ? sections[0].id : '';
      for (const sec of sections) {
        const top = sec.offsetTop - 120;
        if (y >= top) current = sec.id;
      }
      navLinks.forEach(a => {
        const href = a.getAttribute('href') || '';
        if (href.startsWith('#')) {
          a.classList.toggle('active', href === '#' + current);
        }
      });
    }
  };
  window.addEventListener('scroll', () => requestAnimationFrame(onScroll), { passive: true });
  onScroll();

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isActive = hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active', isActive);
      hamburger.setAttribute('aria-expanded', isActive);
    });
    $$('.mobile-menu a').forEach(a => a.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }));
  }
})();

/* =====================================================
   SERVICES MEGA MENU — click/tap toggle + outside close
   ===================================================== */
(() => {
  const mega = $('#servicesMega');
  if (!mega) return;
  const trigger = mega.querySelector(':scope > a');
  if (!trigger) return;

  trigger.addEventListener('click', (e) => {
    if (window.matchMedia('(min-width: 901px)').matches) {
      if (!mega.classList.contains('open')) {
        e.preventDefault();
        mega.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    }
  });

  document.addEventListener('click', (e) => {
    if (!mega.contains(e.target)) {
      mega.classList.remove('open');
      trigger.setAttribute('aria-expanded', 'false');
    }
  });

  mega.querySelectorAll('.mega-link').forEach(l => l.addEventListener('click', () => {
    mega.classList.remove('open');
    trigger.setAttribute('aria-expanded', 'false');
  }));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      mega.classList.remove('open');
      trigger.setAttribute('aria-expanded', 'false');
    }
  });
})();

/* ---------- BACK TO TOP ---------- */
(() => {
  const btn = $('#backTop');
  if (!btn) return;
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

/* ---------- THEME TOGGLE ---------- */
(() => {
  const toggle = $('#themeToggle');
  if (!toggle) return;

  const applyTheme = (isLight) => {
    document.documentElement.classList.toggle('light-theme', isLight);
    toggle.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  };

  // Check for saved theme preference or default to dark
  const savedTheme = localStorage.getItem('theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const isLight = savedTheme === 'light' || (!savedTheme && prefersLight);
  applyTheme(isLight);

  toggle.addEventListener('click', () => {
    const isLight = !document.documentElement.classList.contains('light-theme');
    applyTheme(isLight);
  });
})();

(() => {
  const targets = $$('.reveal');
  if (!targets.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('in');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  targets.forEach(el => io.observe(el));
})();

/* =====================================================
   COUNTER ANIMATION
   ===================================================== */
(() => {
  const targets = $$('[data-count]');
  if (!targets.length) return;
  const animate = (el) => {
    const target = +el.dataset.count;
    const suffix = el.dataset.suffix || '';
    const dur = 1800;
    const start = performance.now();
    const step = (t) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(eased * target) + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target + suffix;
    };
    requestAnimationFrame(step);
  };
  const io = new IntersectionObserver(ents => {
    ents.forEach(e => {
      if (e.isIntersecting) {
        animate(e.target);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  targets.forEach(el => io.observe(el));
})();

/* =====================================================
   PORTFOLIO FILTER
   ===================================================== */
(() => {
  const tabs = $$('.filter-tab');
  const items = $$('.portfolio-item');
  if (!tabs.length || !items.length) return;
  tabs.forEach(tab => tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const f = tab.dataset.filter;
    items.forEach(it => {
      const match = f === 'all' || it.dataset.category === f;
      it.classList.toggle('hide', !match);
    });
  }));
})();

/* =====================================================
   TESTIMONIAL SLIDER — auto + dots
   ===================================================== */
(() => {
  const track = $('#sliderTrack');
  const slider = $('#slider');
  const dotsEl = $('#sliderDots');
  if (!track || !slider || !dotsEl) return;

  const slides = $$('.slide', track);
  if (!slides.length) return;
  let i = 0, timer;

  slides.forEach((_, idx) => {
    const d = document.createElement('button');
    d.className = 'dot' + (idx === 0 ? ' active' : '');
    d.setAttribute('aria-label', 'Go to slide ' + (idx + 1));
    d.addEventListener('click', () => go(idx, true));
    dotsEl.appendChild(d);
  });
  const dots = $$('.dot', dotsEl);

  const go = (idx, manual = false) => {
    i = (idx + slides.length) % slides.length;
    track.style.transform = `translateX(-${i * 100}%)`;
    dots.forEach((d, k) => d.classList.toggle('active', k === i));
    if (manual) restart();
  };
  const next = () => go(i + 1);
  const start = () => { timer = setInterval(next, 5500); };
  const stop = () => clearInterval(timer);
  const restart = () => { stop(); start(); };

  start();
  slider.addEventListener('mouseenter', stop);
  slider.addEventListener('mouseleave', start);

  let sx = 0, dx = 0;
  slider.addEventListener('touchstart', e => { sx = e.touches[0].clientX; dx = 0; stop(); }, { passive: true });
  slider.addEventListener('touchmove',  e => { dx = e.touches[0].clientX - sx; }, { passive: true });
  slider.addEventListener('touchend',   () => {
    if (Math.abs(dx) > 50) go(i + (dx < 0 ? 1 : -1), true);
    else start();
  });
})();

/* =====================================================
   CONTACT FORM VALIDATION
   ===================================================== */
(() => {
  const form = $('#contactForm');
  if (!form) return;
  const success = $('#formSuccess');

  const setError = (id, msg) => {
    const field = $('#' + id);
    const err = $('#err-' + id);
    if (field) field.classList.toggle('error', !!msg);
    if (err) err.textContent = msg || '';
  };

  const isEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let ok = true;

    ['name', 'email', 'service', 'message', 'phone'].forEach(f => setError(f, ''));

    const name = $('#name').value.trim();
    const email = $('#email').value.trim();
    const phone = $('#phone').value.trim();
    const service = $('#service').value;
    const message = $('#message').value.trim();

    if (name.length < 2)        { setError('name', 'Please enter your name.'); ok = false; }
    if (!isEmail(email))        { setError('email', 'Please enter a valid email.'); ok = false; }
    if (phone && !/^[\d\s+()\-]{7,}$/.test(phone)) { setError('phone', 'Please enter a valid phone number.'); ok = false; }
    if (!service)               { setError('service', 'Please select a service.'); ok = false; }
    if (message.length < 10)    { setError('message', 'Please tell us a bit more (min 10 chars).'); ok = false; }

    if (!ok) return;

    const btn = form.querySelector('.submit-btn');
    const label = btn.querySelector('.btn-label');
    const original = label.textContent;
    label.textContent = 'Sending…';
    btn.disabled = true;

    setTimeout(() => {
      if (success) success.classList.add('show');
      form.reset();
      label.textContent = original;
      btn.disabled = false;
      if (success) {
        success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        setTimeout(() => success.classList.remove('show'), 6000);
      }
    }, 900);
  });

  ['name','email','phone','service','message'].forEach(id => {
    const el = $('#' + id);
    if (el) el.addEventListener('input', () => setError(id, ''));
  });
})();

/* =====================================================
   SMOOTH SCROLL — only same-page anchor links
   ===================================================== */
$$('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id.length <= 1) return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
