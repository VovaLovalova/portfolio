let button = document.querySelector(".nav-bar__button");

function onClickNavBarButton() {
    let navBar = document.querySelector(".nav-bar__list");
    if (navBar.classList.contains('nav-bar__list--closed')) {
        navBar.classList.remove('nav-bar__list--closed');
    } else {
        navBar.classList.add('nav-bar__list--closed');
    }
}

button.addEventListener("click", onClickNavBarButton);
