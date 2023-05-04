// Add or remove class to show or hide the hamburger menu based on the viewport width
function toggleHamburgerMenu() {
  var hamburger = document.querySelector('.hamburger');
  var navBar = document.querySelector('.nav-bar');

  if (window.innerWidth <= 768) {
    hamburger.classList.add('active');
    navBar.classList.add('active');
  } else {
    hamburger.classList.remove('active');
    navBar.classList.remove('active');
  }
}

// Set the document title to the value of the page title
function setPageTitle() {
  var pageTitle = document.querySelector('#title').textContent;
  document.title = pageTitle;
}

// Event listeners
window.addEventListener('resize', toggleHamburgerMenu);
window.addEventListener

