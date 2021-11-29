// Hamburger Menu

const hamburgerMenu = document.querySelector('.hamburger');
const navigation = document.querySelector('.nav');
const listItems = document.querySelectorAll('.nav__list-item');

hamburgerMenu.addEventListener('click', () => {
  console.log('hamburger button clicked!');

  hamburgerMenu.classList.toggle('open');
  navigation.classList.toggle('nav-open');
  navigation.classList.toggle('open');

  [...listItems].forEach((item) => item.classList.toggle('open-item'));
});

console.log('Script.JS loaded...');
