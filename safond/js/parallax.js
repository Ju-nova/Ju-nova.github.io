window.onload = function () {
  const mainBanner = document.querySelector(".main-banner");

  if (mainBanner) {
    const dustWrapper = document.querySelector(
      ".main-banner__animation-wrapper--dust"
    );
    const shipWrapper = document.querySelector(
      ".main-banner__animation-wrapper--ship"
    );

    // Коэффициенты
    const forDust = 10;
    const forShip = 30;

    // Скорость анимации
    const speed = 0.05;

    // Объявление переменных
    let positionX = 0;
    let positionY = 0;
    let coordXprocent = 0;
    let coordYprocent = 0;

    function setMouseParallaxStyle() {
      const distX = coordXprocent - positionX;
      const distY = coordYprocent - positionY;

      positionX = positionX + distX * speed;
      positionY = positionY + distY * speed;

      // Передаём стили
      dustWrapper.style.cssText = `transform: translate(${
        -positionX / forDust
      }%,${-positionY / forDust}%)`;

      shipWrapper.style.cssText = `transform: translate(${
        positionX / forShip
      }%,${positionY / forShip}%)`;

      requestAnimationFrame(setMouseParallaxStyle);
    }
    setMouseParallaxStyle();

    mainBanner.addEventListener("mousemove", function (e) {
      // Получение ширины и высоты блока
      const mainBannerWidth = mainBanner.offsetWidth;
      const mainBannerHeight = mainBanner.offsetHeight;

      // Ноль по середине
      const coordX = e.pageX - mainBannerWidth / 2;
      const coordY = e.pageY - mainBannerHeight / 2;

      // Получаем проценты
      coordXprocent = (coordX / mainBannerWidth) * 100;
      coordYprocent = (coordY / mainBannerHeight) * 100;
    });

    // Parallax при скролле

    let thresholdSets = [];

    for (let i = 0; i <= 1.0; i += 0.005) {
      thresholdSets.push(i);
    }

    const callback = function (entries, observer) {
      const scrollTopProcent =
        (window.pageYOffset / mainBanner.offsetHeight) * 100;
      setParallaxItemsStyle(scrollTopProcent);
    };

    const observer = new IntersectionObserver(callback, {
      threshold: thresholdSets,
    });

    observer.observe(document.querySelector(".main-banner"));

    const content = document.querySelector(".main-banner__wrapper");
    shipWrapper.classList.add("main-banner__scroll-move--ship");
    const shipAnimation = document.querySelector(
      ".main-banner__scroll-animation--ship"
    );

    function setParallaxItemsStyle(scrollTopProcent) {
      content.style.cssText = `transform: translate(-${
        scrollTopProcent / 1
      }%, 0%); transition: 1s`;

      shipAnimation.style.cssText = `transform: translate(${
        scrollTopProcent / 2
      }%, 0%); position: absolute; width: 100%; height: 100%; bottom: 0; transition: 1s`;
    }
  }
};
