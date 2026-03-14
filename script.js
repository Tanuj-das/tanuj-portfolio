document.addEventListener('DOMContentLoaded', () => {

  // ── Particle Network Background ──
  const canvas = document.getElementById('particleCanvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let animId;
  const PARTICLE_COUNT = 60;
  const CONNECT_DIST = 140;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.r = Math.random() * 2 + 1;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

  function getParticleColor() {
    const style = getComputedStyle(document.documentElement);
    return style.getPropertyValue('--particle-color').trim();
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const rgb = getParticleColor();

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.update();
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${rgb}, 0.3)`;
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECT_DIST) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(${rgb}, ${0.12 * (1 - dist / CONNECT_DIST)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    animId = requestAnimationFrame(drawParticles);
  }
  drawParticles();

  // ── Dynamic Experience Calculation (career start: July 2018) ──
  const CAREER_START = new Date(2018, 6, 1);
  function getExperienceYears() {
    const now = new Date();
    const diff = now - CAREER_START;
    const years = diff / (1000 * 60 * 60 * 24 * 365.25);
    return Math.floor(years * 2) / 2; // rounds to nearest 0.5
  }
  const expYears = getExperienceYears();
  document.getElementById('heroYears').textContent = expYears;
  document.getElementById('statYears').dataset.target = Math.floor(expYears);

  // ── Typewriter Effect ──
  const phrases = [
    'build CI/CD pipelines.',
    'automate everything.',
    'architect cloud infrastructure.',
    'containerize with Kubernetes.',
    'deploy with ArgoCD.',
    'love Infrastructure as Code.',
    'build with Gen-AI.',
  ];
  const el = document.getElementById('typewriter');
  let phraseIdx = 0, charIdx = 0, deleting = false;

  function type() {
    const current = phrases[phraseIdx];
    el.textContent = current.substring(0, charIdx);

    if (!deleting) {
      charIdx++;
      if (charIdx > current.length) {
        deleting = true;
        setTimeout(type, 1800);
        return;
      }
      setTimeout(type, 60);
    } else {
      charIdx--;
      if (charIdx < 0) {
        deleting = false;
        charIdx = 0;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        setTimeout(type, 400);
        return;
      }
      setTimeout(type, 30);
    }
  }
  type();

  // ── Theme Toggle ──
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;

  const savedTheme = localStorage.getItem('td-theme') || 'dark';
  root.setAttribute('data-theme', savedTheme);

  themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('td-theme', next);
  });

  // ── Navbar scroll effect ──
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // ── Mobile nav toggle ──
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => links.classList.remove('open'))
  );

  // ── Animated stat counters ──
  const stats = document.querySelectorAll('.stat-number');
  let statsCounted = false;

  function countStats() {
    if (statsCounted) return;
    const heroSection = document.getElementById('hero');
    const rect = heroSection.getBoundingClientRect();
    if (rect.bottom < window.innerHeight + 200) {
      statsCounted = true;
      stats.forEach(stat => {
        const target = +stat.dataset.target;
        const duration = 1500;
        const step = target / (duration / 16);
        let current = 0;
        const counter = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(counter);
          }
          stat.textContent = Math.round(current);
        }, 16);
      });
    }
  }

  // ── Scroll-triggered fade-in ──
  const faders = document.querySelectorAll(
    '.timeline-item, .skill-category, .cert-card, .edu-card, .detail-card, .contact-card, .project-card'
  );
  faders.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  faders.forEach(el => observer.observe(el));

  window.addEventListener('scroll', countStats);
  countStats();

  // ── Active nav link highlight ──
  const sections = document.querySelectorAll('.section, .hero');
  const navAnchors = document.querySelectorAll('.nav-links a:not(.nav-cta)');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 150;
      if (window.scrollY >= top) current = sec.getAttribute('id');
    });
    navAnchors.forEach(a => {
      a.style.color = '';
      if (a.getAttribute('href') === '#' + current) {
        a.style.color = 'var(--text-primary)';
      }
    });
  });
});
