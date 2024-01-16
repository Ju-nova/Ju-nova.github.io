$(window).on("scroll", function () {
    var scrolled = $(this).scrollTop();
    if( scrolled > 140) {
      
         $('.main-header').addClass('main-header__scrolled');
          
    }   
    if( scrolled <= 140) {     
       
         $('.main-header').removeClass('main-header__scrolled');

    }


});

$(document).ready(function(){
	    $('.menu-toggle').click(function() {
 $(this).toggleClass('open');
  $('.menu').toggleClass('open');
  $('body').toggleClass('hidden');
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
    .on('click','div', function(e) { 
       e.stopPropagation();       
   });
    $('.close').click(function() {
  $(".modal-container").removeClass('z-index');
$('body').removeClass('modal-body');
 $('html').removeClass('modal-body');

});

$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  arrows:false,
  rows:0,
  centerMode: true,
  focusOnSelect: true
});
    // $('.hosting__product-more').on('click', function () {
    //     // var container = $(this).parent().parent();
    //     var curid = $(this).data('id'),
    //             tabs = $('.hosting__product-more'),
    //             holderTab = $('.hosting-slide');
    //     // holderTab.hide();
    //     // $('#'+ curid).fadeIn(700);
    //     $('.hosting-slide').removeClass('slick-current');
    //     $('.hosting-slide').removeClass('slick-active');
    //     $('.hosting-slide').attr("aria-hidden", "false");
    //     $('#' + curid).attr("aria-hidden", "true");
    //     $('#' + curid).addClass('slick-current');
    //     $('#' + curid).add('slick-active');
    //     return false;
    // });

	  $('.slider').css({
     overflow: 'visible',
     opacity: '1',
     height: 'auto'
   });
         $('.services').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    arrows:true,
    rows:0,
    infinite:true,
    responsive: [               
                    {
      breakpoint: 1700,
      settings: {
         arrows:true,
        slidesToShow:5,
        slidesToScroll: 3,
      }
    },
           {
      breakpoint:1450,
      settings: {
       arrows:true,
                                
        slidesToShow: 4,
         slidesToScroll: 2,

      }
    },
     {
      breakpoint:1025,
      settings: {
       arrows:true,
                                
        slidesToShow: 3,
         slidesToScroll: 1,

      }
    },
     {
      breakpoint:800,
      settings: {
       arrows:true,
                                
        slidesToShow: 2,
         slidesToScroll: 1,

      }
    },
     {
      breakpoint:600,
      settings: {
       arrows:true,
                                
        slidesToShow: 1,
         slidesToScroll: 1,

      }
    }


  ]

  });

     $('.hosting-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows:true,
    rows:0,
    infinite:false,
    easing:'linear',
    fade:true

  });
     $('.main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows:false,
    rows:0,
    infinite:false,
    easing:'linear',
    fade:true

  });

var main_product_slider = false;
initMainProductSlider = function() {
    selector = '.head-nav';
    if ($(window).width()<1025) {
        if (!main_product_slider) {
            $(selector).slick({
                 dots: false,
    arrows:true,
    rows:0,
    infinite:false,
    arrows:true,
        slidesToShow:8,
        slidesToScroll: 1,
                responsive: [               
                    {
      breakpoint: 850,
      settings: {
         arrows:true,
        slidesToShow:6,
        slidesToScroll: 3,
      }
    },
           {
      breakpoint:700,
      settings: {
       arrows:true,
                                
        slidesToShow: 4,
         slidesToScroll: 2,

      }
    },
    {
      breakpoint:515,
      settings: {
       arrows:true,                       
        slidesToShow: 3,
        slidesToScroll: 2,

      }
    },
        {
      breakpoint:376,
      settings: {
       arrows:true,                       
        slidesToShow: 2,
        slidesToScroll: 2,

      }
    }

  ]
            });
            main_product_slider = true;
        }
    } else {
        if (main_product_slider) {
            $(selector).slick('unslick');
            main_product_slider = false;
        }
    };

};

$(function() {
  initMainProductSlider();
});
var doresizepage;
$(window).resize(function(){
    clearTimeout(doresizepage);
    doit = setTimeout(resizepage, 100);
});
function resizepage(){
    initMainProductSlider('.head-nav');
}


// ТАБЫ в блоке с характеристиками
$('.tab').on('click', function () {
        var container = $(this).parent().parent();
        var curid = $(this).data('id'),
                tabs = $('.tab'),
                holderTab = $('.tab-info');
        // holderTab.hide();
        // $('#'+ curid).fadeIn(700);
        container.find('.tab-info').addClass('hide');
        $('#' + curid).removeClass('hide');
        container.find('.tab').removeClass('active');
        $(this).addClass('active');
        return false;
    });

     $( '.sidebar-menu > li' ).click(
  function() {

    $('.sidebar-menu > li').not($(this)).removeClass('rotate');
    $(this).toggleClass('rotate');
  }, 
);
});	

