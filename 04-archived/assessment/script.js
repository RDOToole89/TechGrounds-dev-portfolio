const hamburgerMenu = document.querySelector('.hamburger');
const hiddenMenu = document.querySelector('.hamburger-nav-list');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('open');
  hiddenMenu.classList.toggle('show-hidden-nav');
});
