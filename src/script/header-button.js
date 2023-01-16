const btnUp = {
    el: document.querySelector('.main-header__button'),
    show() {
      this.el.classList.remove('main-header__button--hide');
    },
    hide() {
      this.el.classList.add('main-header__button--hide');
    },
    addEventListener() {
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        scrollY > 600 ? this.show() : this.hide();
      });
      document.querySelector('.main-header__button').onclick = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  
  btnUp.addEventListener();