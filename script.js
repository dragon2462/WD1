const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('show-menu');
  menu.classList.toggle('show-menu');
});
