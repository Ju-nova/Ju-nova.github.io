

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

  
// СЛАЙДЕР ПЛАТЕЖНЫЕ СИСТЕМЫ
     $('.methods__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
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
      breakpoint: 1440,
      settings: {
    slidesToShow: 3,
    slidesToScroll: 3
      }
    },
               {
      breakpoint: 762,
      settings: {
                     
        slidesToShow: 2,
        slidesToScroll: 2

      }
    },
               {
      breakpoint: 426,
      settings: {
                     
        slidesToShow: 1,
        slidesToScroll: 1

      }
    }    

  ]

  });
// МОДАЛЬНЫЕ ОКНА
    var link = $('.simplebox');
     
      $(link).click(function() {
        event.preventDefault();
        var modal = $(this).attr('href');
      $(modal).addClass('z-index');
        $('body').addClass('modal-body');
        $('html').addClass('modal-body');
  });    
  $('.modal-container').click(function(e) {
         $(this).removeClass('z-index');
         $('body').removeClass('modal-body');
          $('html').removeClass('modal-body');
         
    // location.reload();
     console.log('parent function');
     })
    .on('click','.form-modal', function(e) { 
       e.stopPropagation();       
   });

    $('.close').click(function() {
  $(".modal-container").removeClass('z-index');
$('body').removeClass('modal-body');


});

        // ВАЛИДАЦИЯ ФОРМ
   jQuery.validator.addMethod("checkMask", function(value, element) {
    return /\+\d{1} \d{3} \d{3} \d{4}/g.test(value); 
});

  $('#form-login').validate({
    messages: {
    phone: {
        required: "Поле обязательно к заполнению",
        tel: "Неверный номер телефона" 
      },
     password: {
        required: "Поле обязательно к заполнению",
      }
    },
    errorElement: "div",
  errorPlacement: function(error, element) {
    error.appendTo( element.parent(".form__input-wrapper").next("div") );
  }

  });

    $('#form-contacts').validate({
    messages: {
      name: {
        required: "Поле обязательно к заполнению",
      },
      surname: {
        required: "Поле обязательно к заполнению",
      },
      mail: {
        required: "Поле обязательно к заполнению",
        email: "Неверный формат" 
      },
      message: {
        required: "Поле обязательно к заполнению",
      }
    },
        errorElement: "div",
  errorPlacement: function(error, element) {
    error.appendTo( element.parent(".form__input-wrapper").next("div") );
  }
  });

$.validator.addClassRules({
    'js-phone': {
        checkMask: true
    }
});

$('.js-phone').mask("+7 xxx xxx xx xx", {autoclear: false});

});

