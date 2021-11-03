ymaps.ready(init);
var myMap;
myMap.behaviors.disable('scrollZoom');
function init () {
    myMap = new ymaps.Map(
        'map',
        {
            center: [55.742042, 37.646220],
            // Масштаб, тут все просто
            zoom:16,
            // Отключаем все элементы управления
            controls: ['zoomControl'],
            behaviors: ["drag", "dblClickZoom", "rightMouseButtonMagnifier", "multiTouch"] 
        }, 

    );

//    var myGeoObjects = [];
//         var clusterer = new ymaps.Clusterer({
//          clusterDisableClickZoom: false,
//        clusterOpenBalloonOnClick: false,
//     });
    
//     clusterer.add(myGeoObjects);
//     myMap.geoObjects.add(clusterer);

//     //так отключаются мультитач жесты
//     myMap.behaviors.disable('multiTouch');
//     // а так перетаскивание карты
//     myMap.behaviors.add('drag');
//     myMap.controls.disable('zoomControl');
// myMap.behaviors.disable('scrollZoom');

  myPlacemark1 = new ymaps.Placemark([55.742042, 37.646220],{
                                balloonContentBody: 'Россия, Москва, Котельническая набережная, 29',
                                },{
                                iconLayout: 'default#image',
                                // Путь до нашей картинки
                                iconImageHref: 'img/pin.png', 
                                // Размер по ширине и высоте
                                iconImageSize: [64, 64],
                                // Смещение слоя с содержимым относительно слоя с картинкой.
                                 iconContentOffset: [0, 0],
                                // Смещение левого верхнего угла иконки относительно
                                // её «ножки» (точки привязки).
                                iconImageOffset: [-30, -65]

          });



    // Добавляем метку в коллекцию.
    // myMap.geoObjects.add(myPlacemark);
  myMap.geoObjects.add(myPlacemark1);




}
