let button = document.querySelector(".nav-bar__button");
let navBar = document.querySelector(".nav-bar__list");

function onClickNavBarButton () {
    navBar.classList.toggle('nav-bar__list--closed');
    button.classList.toggle('nav-bar__button--open');
    button.classList.toggle('nav-bar__button--closed');
}

function onClickDocument (e) {
    if (e.target != button) {
        navBar.classList.add('nav-bar__list--closed');
        button.classList.add('nav-bar__button--open');
        button.classList.remove('nav-bar__button--closed');
    }
}

button.addEventListener("click", onClickNavBarButton);
document.addEventListener("click", onClickDocument);