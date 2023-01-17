let button = document.querySelector(".nav-bar__button");

function onClickNavBarButton() {
    let navBar = document.querySelector(".nav-bar__list");
    if (navBar.classList.contains('nav-bar__list--closed')) {
        navBar.classList.remove('nav-bar__list--closed');
        button.classList.remove('nav-bar__button--open');
        button.classList.add('nav-bar__button--closed');
    } else {
        navBar.classList.add('nav-bar__list--closed');
        button.classList.remove('nav-bar__button--closed');
        button.classList.add('nav-bar__button--open');
    }
}

button.addEventListener("click", onClickNavBarButton);
