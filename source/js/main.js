const navMain = document.querySelector('.navigation');
const navToggle = document.querySelector('.navigation__button');

const menuOpenClose = () => {
  if (navMain.classList.contains('navigation--is-closed')) {
    navMain.classList.remove('navigation--is-closed');
    navMain.classList.add('navigation--is-opened');
  } else {
    navMain.classList.add('navigation--is-closed');
    navMain.classList.remove('navigation--is-opened');
  }
};

navToggle.addEventListener('click', menuOpenClose)
