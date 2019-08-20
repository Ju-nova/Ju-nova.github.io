(function() {
   const overlayModal = document.querySelector('.modal-overlay');
  const catalogBlock = document.querySelector('.catalog');
  const orderButton = document.querySelector('.week-goods__button');

  if (overlayModal) {
    if (catalogBlock) {
      catalogBlock.addEventListener('click', openOrderForm);
    }

    if (orderButton) {
      orderButton.addEventListener('click', openOrderForm);
    }

    overlayModal.addEventListener('click', closeOrderForm);
    window.addEventListener('keydown', closeOrderForm);
  }

  function openOrderForm(event) {
    let element = event.target;

    if (
      element.classList.contains('card-product__button') ||
      element.classList.contains('week-goods__button')
    ) {
      event.preventDefault();
      overlayModal.classList.add('modal-overlay--opened');
    }
  }

  function closeOrderForm(event) {
    let element = event.target;

    if (element.classList.contains('modal-overlay') || event.keyCode === 27) {
      overlayModal.classList.remove('modal-overlay--opened');
    }
  }
})();

  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--no-js');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });
