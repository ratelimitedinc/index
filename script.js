/* ============================================
   SaFE Production — Global Scripts
   ============================================ */

// ---- Navbar scroll effect ----
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  lastScroll = currentScroll;
});

// ---- Mobile nav toggle ----
const navElem = document.querySelector('nav');
const navToggle = document.querySelector('.nav-toggle');
const navOverlay = document.getElementById('navOverlay');

function closeNav() {
  navElem.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

function openNav() {
  navElem.classList.add('open');
  navToggle.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

if (navToggle) {
  navToggle.addEventListener('click', () => {
    if (navElem.classList.contains('open')) {
      closeNav();
    } else {
      openNav();
    }
  });

  navOverlay.addEventListener('click', closeNav);

  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', closeNav);
  });

  // Close nav on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navElem.classList.contains('open')) {
      closeNav();
    }
  });
}

// ---- Smooth scroll for same-page anchor links ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ---- Scroll reveal ----
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ---- Hero animations trigger on load ----
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.hero-eyebrow, .hero-title, .hero-sub, .hero-actions, .hero-scroll, .page-hero-eyebrow, .page-hero-title, .page-hero-sub').forEach(el => {
    el.style.animationPlayState = 'running';
  });
});

// ---- Floating contact button: hide when on contact page ----
const floatBtn = document.getElementById('floatContact');
if (floatBtn) {
  const currentPage = window.location.pathname.split('/').pop();
  if (currentPage === 'contact.html') {
    floatBtn.style.display = 'none';
  }
}
