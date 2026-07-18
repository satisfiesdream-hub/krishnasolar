// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu when a nav link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
  document.querySelector('.navbar').style.boxShadow =
    window.scrollY > 10 ? '0 2px 20px rgba(0,0,0,.10)' : 'none';
});

// Quote form submission
document.getElementById('quoteForm').addEventListener('submit', function (e) {
  e.preventDefault();
  this.querySelectorAll('input, select, textarea').forEach(el => el.disabled = true);
  this.querySelector('button[type=submit]').textContent = 'Submitting…';
  setTimeout(() => {
    document.getElementById('formSuccess').classList.remove('hidden');
    this.querySelector('button[type=submit]').style.display = 'none';
  }, 800);
});

// Scroll-reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.12 });

document.querySelectorAll('.card, .feature, .step, .gallery-card, .contact-form, .contact-info')
  .forEach(el => { el.classList.add('reveal'); observer.observe(el); });

// Gallery tab filter
document.querySelectorAll('.gtab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.gtab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const filter = tab.dataset.filter;
    document.querySelectorAll('.gallery-card').forEach(card => {
      card.classList.toggle('hidden', filter !== 'all' && card.dataset.cat !== filter);
    });
  });
});
