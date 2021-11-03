 $(window).on("scroll", function() {
  // Если высота больше 200px 
  // Добавляем классу header класс fixed
    if ($(window).scrollTop() > 10) $('.main-header').addClass('gray');
  // Иначе удаляем класс fixed
          else $('.main-header').removeClass('gray');
    });
$(document).ready(function(){


    $('.menu-toggle').click(function() {
 $(this).toggleClass('open');
  $('.menu').toggleClass('open');
  $('body').toggleClass('open');
});  
  $('.slider').css({
     overflow: 'visible',
     opacity: '1',
     height: 'auto'
   });

// СЛАЙДЕР ПРОЕКТ
$('.slider-project').slick({
  dots:false,
 autoplay:false,
 autoplaySpeed:5000,
 infinite:true,
 easing:'linear',
 speed:1000,
   fade: true,
     rows: 0,
});  
// СЛАЙДЕР ЭКСПЕРТЫ
     $('.slider-experts').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
     autoplay:false,
     autoplaySpeed:3000,
     // infinite:true,
     easing:'linear',
     speed:1000,
     arrows:true,
    // centerMode: false,
    rows: 0,
    // fade: true,
 responsive: [
           {
      breakpoint: 769,
      settings: {
    slidesToShow: 2
      }
    },
               {
      breakpoint: 500,
      settings: {
                     
        slidesToShow: 1

      }
    }

  ]

  });
// СЛАЙДЕР НОВОСТИ
     $('.news-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
     autoplay:false,
     autoplaySpeed:3000,

     // infinite:true,
     easing:'linear',
     speed:1000,
     arrows:true,

    rows: 0,
    // fade: true,
 responsive: [
           {
      breakpoint: 769,
      settings: {
    slidesToShow: 2
      }
    },
               {
      breakpoint: 520,
      settings: {
                     
        slidesToShow: 1

      }
    }

  ]

  });
     // СЛАЙДЕР ПАРТНЕРЫ
          $('.slider-partners').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
     autoplay:false,
     autoplaySpeed:3000,
     // infinite:true,
     easing:'linear',
     speed:1000,
     arrows:true,
    // centerMode: false,
    rows: 0,
    // fade: true,
 responsive: [
           {
      breakpoint: 769,
      settings: {
    slidesToShow: 2
      }
    },
               {
      breakpoint: 500,
      settings: {
                     
        slidesToShow: 1

      }
    }

  ]

  });
// ПЕРЕКЛЮЧЕНИЕ ТАБОВ

   $('.tab-link').on('click', function () {
        var container = $(this).parent().parent().parent();
        var curid = $(this).data('id'),
                tabs = $('.tab-link'),
                holderTab = $('.tab-info');
        // holderTab.hide();
        // $('#'+ curid).fadeIn(700);
        container.find('.tab-info').addClass('hide');
        $('#' + curid).removeClass('hide');
        container.find('.tab-link').removeClass('active');
        $(this).addClass('active');
        return false;
    });       
});

