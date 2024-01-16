 ymaps.ready(init);

      function init () {
          var myMap = new ymaps.Map("map", {
              // Центр карты, указываем коордианты
              center:[51.676142, 39.185797],
              // Масштаб, тут все просто
              zoom: 16,
              // Отключаем все элементы управления
              controls: []
          }); 
                  
          var myGeoObjects = [];
          
          // Наша метка, указываем коордианты
          myGeoObjects = new ymaps.Placemark([51.676142, 39.185797],{
                          balloonContentBody: '394030, г. Воронеж, ул. Плехановская, 66 Б, офис 320',
                          },{
                          iconLayout: 'default#image',
                          // Путь до нашей картинки
                          iconImageHref: 'img/icon-location-red.svg', 
                          // Размер по ширине и высоте
                          iconImageSize: [48, 67],
                          // Смещение левого верхнего угла иконки относительно
                          // её «ножки» (точки привязки).
                          iconImageOffset: [-35, -35]
          });
                      
          var clusterer = new ymaps.Clusterer({
              clusterDisableClickZoom: false,
              clusterOpenBalloonOnClick: false,
          });
          
          clusterer.add(myGeoObjects);
          myMap.geoObjects.add(clusterer);
          // Отлючаем возможность изменения масштаба
          myMap.behaviors.disable('scrollZoom');
          //так отключаются мультитач жесты
                myMap.behaviors.disable('multiTouch');
                // а так перетаскивание карты
        // myMap.behaviors.disable('drag');
          myMap.controls.add('zoomControl');

      }