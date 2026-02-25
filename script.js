/* ================================================================
   ALAATTIN KIRBAHÇESI – MAIN JAVASCRIPT
================================================================ */

// ── Navbar scroll effect ────────────────────────────────────────
const navbar = document.getElementById('navbar');
const scrollThreshold = 80;

window.addEventListener('scroll', () => {
  if (window.scrollY > scrollThreshold) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

// ── Mobile burger menu ──────────────────────────────────────────
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  burger.setAttribute('aria-expanded', isOpen);
  // Prevent body scroll when menu is open
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close menu when a nav link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// Close menu on outside click
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target) && navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  }
});

// ── Smooth scroll for anchor links ─────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const navH = navbar.offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - navH - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ── Scroll reveal animation ─────────────────────────────────────
const revealElements = document.querySelectorAll(
  '.badge-item, .about-text, .about-images, .event-card, .pkg-card, ' +
  '.gallery-item, .testimonial-card, .contact-info, .contact-form'
);

revealElements.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger siblings
      const siblings = [...entry.target.parentElement.children];
      const idx = siblings.indexOf(entry.target);
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, idx * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealElements.forEach(el => revealObserver.observe(el));

// ── Gallery filter ──────────────────────────────────────────────
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Active state
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    galleryItems.forEach(item => {
      const cat = item.dataset.cat;
      if (filter === 'all' || cat === filter) {
        item.classList.remove('hidden');
        item.style.animation = 'fadeIn .4s ease forwards';
      } else {
        item.classList.add('hidden');
      }
    });
  });
});

// ── Lightbox ────────────────────────────────────────────────────
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let currentIndex = 0;
let visibleItems = [];

function openLightbox(index) {
  visibleItems = [...galleryItems].filter(item => !item.classList.contains('hidden'));
  currentIndex = index;
  updateLightbox();
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

function updateLightbox() {
  const item = visibleItems[currentIndex];
  if (!item) return;
  const img = item.querySelector('img');
  const caption = item.querySelector('.gallery-overlay span');
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightboxCaption.textContent = caption ? caption.textContent : '';
}

galleryItems.forEach((item) => {
  item.addEventListener('click', () => {
    visibleItems = [...galleryItems].filter(i => !i.classList.contains('hidden'));
    const idx = visibleItems.indexOf(item);
    if (idx !== -1) openLightbox(idx);
  });
});

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

lightboxPrev.addEventListener('click', (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
  updateLightbox();
});

lightboxNext.addEventListener('click', (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % visibleItems.length;
  updateLightbox();
});

document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') lightboxPrev.click();
  if (e.key === 'ArrowRight') lightboxNext.click();
});

// ── Contact form ────────────────────────────────────────────────
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Basic validation
  const required = contactForm.querySelectorAll('[required]');
  let valid = true;

  required.forEach(field => {
    field.style.borderColor = '';
    if (!field.value.trim()) {
      field.style.borderColor = '#e53935';
      valid = false;
    }
  });

  if (!valid) return;

  // Simulate submission
  const submitBtn = contactForm.querySelector('[type="submit"]');
  const btnText = submitBtn.querySelector('.btn-text');
  const original = btnText.textContent;

  submitBtn.disabled = true;
  btnText.textContent = 'Gönderiliyor…';

  setTimeout(() => {
    submitBtn.disabled = false;
    btnText.textContent = original;
    formSuccess.classList.add('show');
    contactForm.reset();

    setTimeout(() => formSuccess.classList.remove('show'), 6000);
  }, 1200);
});

// ── Animate numbers (badges) ────────────────────────────────────
function animateNumber(el, target, suffix = '') {
  const duration = 1500;
  const start = performance.now();
  const isFloat = String(target).includes('.');

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const value = isFloat
      ? (ease * target).toFixed(1)
      : Math.round(ease * target);
    el.textContent = value + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

const badgeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const strongs = entry.target.querySelectorAll('.badge-item strong');
      strongs.forEach(el => {
        const text = el.textContent;
        const num = parseFloat(text.replace(/[^0-9.]/g, ''));
        const suffix = text.replace(/[0-9.]/g, '');
        if (!isNaN(num)) animateNumber(el, num, suffix);
      });
      badgeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const badgesSection = document.querySelector('.badges');
if (badgesSection) badgeObserver.observe(badgesSection);

// ── Active nav link highlight on scroll ────────────────────────
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => {
        a.style.fontWeight = a.getAttribute('href') === `#${entry.target.id}` ? '700' : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));
