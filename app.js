// ===== Mobile nav toggle =====
document.querySelectorAll('.nav-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('open');
  });
});

// ===== Scroll reveal =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ===== Animated counters =====
document.querySelectorAll('[data-counter]').forEach(el => {
  let target = +el.dataset.counter;
  let current = 0;
  let step = Math.ceil(target / 50); // ~50 frames
  let update = () => {
    current += step;
    if (current >= target) {
      current = target;
    } else {
      requestAnimationFrame(update);
    }
    el.textContent = current;
  };
  update();
});

// ===== Portfolio Lightbox =====
const lightbox = document.querySelector('.lightbox');
if (lightbox) {
  const img = lightbox.querySelector('.lightbox-img');
  const closeBtn = lightbox.querySelector('.lightbox-close');

  document.querySelectorAll('[data-lightbox] a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      img.src = link.href;
      lightbox.hidden = false;
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.hidden = true;
    img.src = '';
  });

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
      lightbox.hidden = true;
      img.src = '';
    }
  });

  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      lightbox.hidden = true;
      img.src = '';
    }
  });
}
