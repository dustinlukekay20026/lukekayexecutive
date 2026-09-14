const items = document.querySelectorAll('.case-card, .lead-item, .recognition-list > div, .contact-card');
items.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
items.forEach(el => observer.observe(el));
