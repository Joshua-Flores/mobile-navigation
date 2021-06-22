import anime from 'animejs/lib/anime.es';

document.querySelector('.button-nav').addEventListener('click', () => {
  const nav = document.querySelector('nav');
  nav.classList.toggle('hidden');
  if (!nav.classList.contains('hidden')) {
    toggleNav();
  } else {
    reverseNav();
  }
});

const toggleNav = () => {
  anime({
    targets: 'nav',
    opacity: 1,
    duration: 0,
  });

  anime({
    targets: '.button-nav',
    backgroundColor: '#7fffd4',
    easing: 'easeInOutQuad',
    rotate: 135,
    duration: 700,
  });

  anime({
    targets: '.button-nav div',
    backgroundColor: 'hsla(0,0%,10%,1)',
    easing: 'easeInOutQuad',
    duration: 200,
  });

  anime({
    targets: '.button-nav div:nth-child(1)',
    rotate: 90,
    translateX: 8,
    translateY: 0,
    easing: 'easeInOutQuad',
    duration: 200,
  });

  anime({
    targets: '.button-nav div:nth-child(2)',
    opacity: 0,
    easing: 'easeInOutQuad',
    duration: 200,
  });

  anime({
    targets: '.button-nav div:nth-child(3)',
    rotate: 180,
    translateX: 0,
    translateY: 8,
    easing: 'easeInOutQuad',
    duration: 200,
  });

  anime({
    targets: 'nav ul li',
    translateX: 48,
    opacity: 1,
    color: '#7fffd4',
    delay: anime.stagger(100), // increase delay by 100ms for each elements.
  });
};
