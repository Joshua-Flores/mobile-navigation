document.querySelector('.button-nav').addEventListener('click', () => {
  toggleNav();
});

const toggleNav = () => {
  const nav = document.querySelector('nav');
  nav.classList.toggle('hidden');
};
