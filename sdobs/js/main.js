$(document).on("select2:open", "select", function() {
// Unbind mousewheel event from select2 result lists
  $(".select2-results ul.select2-results__options").unbind("mousewheel"); 
          advanced:{
            updateOnContentResize: true
          } 
  $('.select2-results').mCustomScrollbar(
{
theme:"minimal-dark",
scrollButtons:{
enable:true,
advanced:{
updateOnBrowserResize:true,
updateOnContentResize:true
}
} 
}      
);

});


$(document).ready(function(){

$(function() {
    $('#burger').click(function(){
        $(this).toggleClass('open');
        $('.menu-catalog').toggleClass('open');
        $('.header-wrapper').toggleClass('open');
        $('body').toggleClass('open');
        // $('.content').toggleClass('animate__slideOutRight');
        //         $('.anim').toggleClass('open');

    });
});
$('.slider').css({

     opacity: '1'

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

// $('#datepicker_value').click(function(event) {
// $('#datepicker').css('display', 'block');
// });
$.datepicker.regional['ru'] = {
  closeText: 'Закрыть',
  prevText: 'Пред',
  nextText: 'След',
  currentText: 'Сегодня',
  monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
  monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
  dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
  dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
  dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
  weekHeader: 'Не',
  dateFormat: 'dd.mm.yy',
  firstDay: 1,
  isRTL: false,
  showMonthAfterYear: false,
  yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['ru']);
 $('#datepicker').datepicker({//инициализация c параметрами и т.д.
            dateFormat: "dd.mm.yy",//формат даты

            onSelect: function(dateText, inst) { //пишем в инпут по событию
              document.getElementById('datepicker_value').value = dateText;
            }
          });

   //   $('.ui-datepicker-next').on('click', function(f) { 
   //     f.stopImmediatePropagation();       
   // });
// $('.ui-datepicker-next').on('click','.form-modal' function(e) {
//   //e.preventDefault();
//     e.preventDefault();
//   e.stopPropagation();
//   console.log('child');

// });
// function parentfun(sender) {
//   console.log('parent');
// }

$('.tab-link').on('click', function () {
        var container = $(this).parent().parent().parent();
        var curid = $(this).data('id'),
                tabs = $('.tab-link'),
                holderTab = $('.tab-info');
        container.find('.tab-info').addClass('hide');
        $('#' + curid).removeClass('hide');
        container.find('.tab-link').removeClass('active');
        $(this).addClass('active');
        return false;
    });


    $('.catalog-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    centerMode: false,
    rows: 0,
    infinite:false,
    responsive: [

       {
      breakpoint: 1200,
      settings: 'unslick'
    },
           

  ]

  });

$('.product-slider').slick({
  slidesToShow: 1,
    slidesToScroll: 1,
  dots:true,
 autoplay:false,
 autoplaySpeed:5000,
 // infinite:true,
 easing:'linear',
 speed:1000,
 fade:true,
 rows:0
});
$('.product-slider-rel span').click(function() {
 $('body').toggleClass('gallery');
 $('.product-slider-rel').toggleClass('open');
});

  // СТИЛИЗАЦИЯ СЕЛЕКСТА
    $('.select').select2();
    
    // $("body").css("display", "none");

    // $("body").fadeIn(2000);

  // $("a.transition").click(function(event){
  //   event.preventDefault();
  //   linkLocation = this.href;
  //   $("body").fadeOut(1000, redirectPage);
  // });

  // function redirectPage() {
  //   window.location = linkLocation;
  // }



  $('#datepicker').on('click',  function(e) {
    e.stopPropagation();

     });


$('#datepicker_value').on('click',  function() {
 $('#datepicker').toggleClass('open');
});

// $('.form-modal ').on('click',  function(event) {
//    e.stopPropagation();
//  $('#datepicker').removeClass('open');
// });

$('.ui-datepicker-calendar a ').on('click',   function() {
  console.log('child function');

 $('#datepicker').toggleClass('open');

});


        // ВАЛИДАЦИЯ ФОРМ
   jQuery.validator.addMethod("checkMask", function(value, element) {
    return /\+\d{1} \d{3} \d{3} \d{4}/g.test(value); 
});

  $('#form-presentation').validate({
    messages: {
      fio: {
        required: "Поле обязательно к заполнению",
      },
     name: {
        required: "Поле обязательно к заполнению",
      },
            address: {
        required: "Поле обязательно к заполнению",
      }
    }
  });

    $('#form-callback').validate({
    messages: {
      fio: {
        required: "Поле обязательно к заполнению",
      },
      phone: {
        required: "Поле обязательно к заполнению",
        tel: "Неверный номер телефона" 
      }
    }
  });
        $('#form-call').validate({
    messages: {
       phone: {
 required: "Поле обязательно к заполнению",
        tel: "Неверный номер телефона"  
      },

            fio: {
        required: "Поле обязательно к заполнению",
      },
     name: {
        required: "Поле обязательно к заполнению",
      },
            address: {
        required: "Поле обязательно к заполнению",
      }
    }

  });

$.validator.addClassRules({
    'js-phone': {
        checkMask: true
    }
});

$('.js-phone').mask("+7 999 999 9999", {autoclear: false});


            // $(".product-body").mCustomScrollbar(
            //   {
            //     theme:"minimal"
            //   });

$('.product-review--step1 .product-review__arrow').on('click', function(event) {
$('.product-review--step1').addClass('none');
$('.product-review--step2').removeClass('none').addClass('block');
});
$('.product-review--step2 .product-review__arrow').on('click', function(event) {
$('.product-review--step2').addClass('none').removeClass('block');
$('.product-review--step3').removeClass('none').addClass('block');
});
$('.product-review--step3 .product-review__arrow').on('click', function(event) {
$('.product-review--step3').addClass('none').removeClass('block');
$('.product-review--step4').removeClass('none').addClass('block');
});
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let number = Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  console.log(number);
}

getRandomIntInclusive(2, 150);
});	
