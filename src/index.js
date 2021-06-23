import anime from 'animejs/lib/anime.es';

document.querySelector('.button-nav').addEventListener('click', () => {
  const nav = document.querySelector('nav');
  if (nav.classList.contains('hidden')) {
    openMenu()
    nav.classList.remove('hidden')
  } else {
    closeMenu()
    nav.classList.add('hidden')
  }
});

const openMenu = () => {
  anime({
    targets: 'nav',
    opacity: 1,
    duration: 500,
  });
  anime({
    targets: 'nav ul li',
    translateX: 48,
    opacity: 1,
    delay: anime.stagger(200)
  });
  anime({
    targets: '.button-nav',
    backgroundColor: '#7fffd4',
    duration: 500
  });
  const button = document.querySelector('.button-nav img')
  button.setAttribute("src", "./images/close_black_24dp.svg")
}

const closeMenu = () => {
  anime({
    targets: 'nav',
    opacity: 0,
    duration: 500,
  });
  anime({
    targets: 'nav ul li',
    translateX: -48,
    opacity: 0,
  });
  anime({
    targets: '.button-nav',
    backgroundColor: 'hsla(0,0%,10%,1)',
    duration: 0
  });
  const button = document.querySelector('.button-nav img')
  button.setAttribute("src", "./images/menu_white_24dp.svg")
}