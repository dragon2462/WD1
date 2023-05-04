const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-bar');
const links = document.querySelectorAll('.nav-bar li');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});
