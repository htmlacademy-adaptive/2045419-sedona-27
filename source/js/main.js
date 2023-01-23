const navMain = document.querySelector('.navigation');
const navToggle = document.querySelector('.navigation__button');
const mapImg = document.querySelector('.map__img');
const mapIframe = document.querySelector('.map__iframe');
navMain.classList.remove('navigation--no-js');
const initMap = () => {
  const mapImg = document.querySelector('.map__img');
  const mapIframe = document.querySelector('.map__iframe');
  if (mapImg && mapIframe) {
    mapImg.classList.remove('map__img--no-js');
    mapIframe.classList.remove('map__iframe--no-js');
  } else {
    return;
  }
}

const menuOpenClose = () => {
  if (navMain.classList.contains('navigation--is-closed')) {
    navMain.classList.remove('navigation--is-closed');
    navMain.classList.add('navigation--is-opened');
  } else {
    navMain.classList.add('navigation--is-closed');
    navMain.classList.remove('navigation--is-opened');
  }
};

navToggle.addEventListener('click', menuOpenClose);
initMap();
