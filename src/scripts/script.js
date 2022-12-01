const burgerMenu = document.querySelector('.header__burger-menu');
const navigationMenu = document.querySelector('.nav-menu');
const buttonCloseNavigationMenu = document.querySelector('.nav-menu__close-button');

burgerMenu.addEventListener('click', () => {
  navigationMenu.style.right = '0';
})

buttonCloseNavigationMenu.addEventListener('click', () => {
  navigationMenu.style.right = '-100%';
})

