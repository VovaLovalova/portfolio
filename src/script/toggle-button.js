let button = document.querySelector(".nav-bar__button");
let navBar = document.querySelector(".nav-bar__list");
let avatar = document.querySelector(".avatar__img");

function onClickNavBarButton () {
    navBar.classList.toggle('nav-bar__list--closed');
    button.classList.toggle('nav-bar__button--open');
    button.classList.toggle('nav-bar__button--closed');
    avatar.classList.toggle('avatar__img--hide');
}

function onClickDocument (e) {
    if (e.target != button) {
        navBar.classList.add('nav-bar__list--closed');
        button.classList.add('nav-bar__button--open');
        button.classList.remove('nav-bar__button--closed');
        avatar.classList.remove('avatar__img--hide');
    }
}

button.addEventListener("click", onClickNavBarButton);
document.addEventListener("click", onClickDocument);