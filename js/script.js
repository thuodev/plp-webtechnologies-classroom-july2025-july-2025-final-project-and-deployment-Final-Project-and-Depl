// Toggle navigation on mobile
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('show');
});

// Auto-update year in footer
document.getElementById('year').textContent = new Date().getFullYear();
