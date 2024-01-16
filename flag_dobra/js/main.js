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

    $('.js-example-basic-single').select2();
// ОСНОВНАЯ НАВИГАЦИЯ САЙТА (ВЕРХНЕЕ МЕНЮ)
  var navMain    = $('.content');
  var navToggle  = $('.main-nav__toggle');

 $(navToggle).on('click', function() {
 $(navMain).toggleClass('main-nav--closed'); 
 $('body').toggleClass('hidden');
 });


  var subItem = $('.with-submenu');
  
 $(subItem).on('click', function() {
  
  var ThisSubMenu = $(this).find('.nav__submenu');
  var subMenu     = $('.nav__submenu').not(ThisSubMenu);

 $(subMenu).removeClass('open'); 
 $(ThisSubMenu).toggleClass('open');
 $(this).toggleClass('open');
 $(subItem).not(this).removeClass('open');

});

 $('.news-inner__select-main-item').on('click', function(){
  $('.news-inner__select-dropdown').toggleClass('active');

 });

 $('.news-inner__select a').on('click', function(){
  $('.news-inner__select-dropdown').toggleClass('active');
  
 });
$(document).click( function(e){
    if ( $(e.target).closest('.news-inner__select-dropdown').length ) {
        // клик внутри элемента 
        return;
    }
    // клик снаружи элемента 
    $('.news-inner__select-dropdown').removeClass('active');
});
 var element = document.getElementById('nav-wrapper');
window.addEventListener('scroll', function () {

   if (window.scrollY > 277) {
        element.classList.add("white");
    } else {
        element.classList.remove("white");
    }
});

 $('.nav__list-item a').on('click', function(e) {
 e.stopPropagation();
         });
// МОДАЛЬНЫЕ ОКНА
    var link = $('.simplebox');
     
      $(link).click(function() {
        event.preventDefault();
        var modal = $(this).attr('href');
      $(modal).fadeIn(300);
        $('body').addClass('modal-body');
  });    
  $('.modal-container').click(function(e) {
         $(this).fadeOut(300);
         $('body').removeClass('modal-body');
    // location.reload();
     console.log('parent function');
     })
    .on('click','div', function(e) { 
       e.stopPropagation();       
   });
    $('.close').click(function() {
  $(".modal-container").fadeOut(300);
$('body').removeClass('modal-body');
});
//скролл в модалке
   $('.modal__person-text').mCustomScrollbar(
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
//скролл в модалке
   $('.news-inner__select').mCustomScrollbar(
{
theme:"dark",
scrollButtons:{
enable:true,
advanced:{
updateOnBrowserResize:true,
updateOnContentResize:true
}
} 
}      
); 

var timeVar='';
        body           = document.querySelector('body');
        button         = document.querySelector('#nav__search');
        my_blok        = document.querySelector('#form-search');
         
        button.onclick = function()
        {
            if(my_blok.style.display == "flex")
            {
             my_blok.style = "display: none"; 
            }
            else
            {
             my_blok.style = "display: flex"; timeVar = 1;  
            }
        }
        my_blok.onclick = function()
        {
        timeVar = 1;  
        }
        body.onclick = function()
        {
            if(!timeVar)
            {
             my_blok.style = "display: none"; 
            }
            if(timeVar) { setTimeout(function(){ timeVar=''; }, 100);}  
        }
var timeVar='';
        body           = document.querySelector('body');
        button         = document.querySelector('#nav__search-mob');
        my_blok        = document.querySelector('#form-search');
         
        button.onclick = function()
        {
            if(my_blok.style.display == "flex")
            {
             my_blok.style = "display: none"; 
            }
            else
            {
             my_blok.style = "display: flex"; timeVar = 1;  
            }
        }
        my_blok.onclick = function()
        {
        timeVar = 1;  
        }
        body.onclick = function()
        {
            if(!timeVar)
            {
             my_blok.style = "display: none"; 
            }
            if(timeVar) { setTimeout(function(){ timeVar=''; }, 100);}  
        }

// Кнопка пожертвовать
 $('.fix-btn__img').on('click', function() {
$('.fix-btn').toggleClass('active')
         });


$('.donate__sum-outline').click(function() {
  $('.donate__sum-outline').removeClass('active');
  $(this).addClass('active')
});
  $('.slider').css({
     overflow: 'visible',
     opacity: '1',
     height: 'auto'
   });



$('.rukovodstvo-slider').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: false,
                arrows:true,
                 autoplay:false,
                 autoplaySpeed:3000,
                 infinite:true,
                 speed:1000,
                centerMode: false,
                rows: 0,
                responsive: [               
                    {
                        breakpoint: 1400,
                        settings: {
                            slidesToShow:3

                        }
                    },
                    {
                        breakpoint: 1000,
                        settings: {
                            infinite:false,                        
                            slidesToShow: 2

                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            infinite:false,                        
                            slidesToShow: 1,
                            arrows: false


                        }
                    }
                ]
            });
$('.breaking-news__slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows:true,
                 autoplay:false,
                 autoplaySpeed:3000,
                 infinite:false,
                 speed:1000,
                fade: true,
                cssEase: 'linear',
                rows: 0,
                responsive: [
                {
                   breakpoint:1000,
                   settings: {
                    arrows:false
                   }
                }]
            });




$('.napravlenia-slider').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                arrows:true,
                 autoplay:false,
                 autoplaySpeed:3000,
                 infinite:true,
                 speed:1000,
                centerMode: false,
                rows: 0,
                responsive: [               
                    {
                        breakpoint: 1400,
                        settings: {
                            slidesToShow:3

                        }
                    },
                    {
                        breakpoint: 1000,
                        settings: {
                            infinite:false,                        
                            slidesToShow: 2

                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            infinite:false,                        
                            slidesToShow: 1,
                            arrows: false,
                            centerMode: true


                        }
                    }
                ]
            });

  var article__img_gallery = false;
  initArticleGallerySlider = function() {
    selector2 = '.article__gallery';
    if ($(window).width()<426) {
$(selector2).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows:false,
                 autoplay:false,
                 autoplaySpeed:3000,
                 infinite:false,
                 speed:1000,
                 variableWidth: true,
                rows: 0
                
            });
 article__img_gallery = true;
        }
     else {
        if (article__img_gallery) {
            $(selector2).slick('unslick');
            article__img_gallery = false;
        }
    };


};

  var program_slider = false;
initProgramSlider = function() {
    selector1 = '.programs-slider';
    if ($(window).width()<1001) {
        if (!program_slider) {
            $(selector1).slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
                arrows:false,
                 autoplay:false,
                 autoplaySpeed:3000,
                 infinite:false,
                 easing:'linear',
                 speed:1000,
                centerMode: false,
                rows: 0,
                responsive: [               
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow:1,
                            centerMode:true,
                            infinite:true
                        }
                    },
                    {
                        breakpoint: 500,
                        settings: {
                            infinite:false,                        
                            slidesToShow: 1,
                            centerMode:true
                        }
                    }
                ]
            });
            program_slider = true;
        }
    } else {
        if (program_slider) {
            $(selector1).slick('unslick');
            program_slider = false;
        }
    };

};

var news_slider = false;

initNewsSlider = function() {
    new_slider = '.news-slider';
    if ($(window).width()>600) {
        if (!news_slider) {
            $(new_slider).slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                arrows:true,
                 autoplay:false,
                 autoplaySpeed:3000,
                 infinite:true,
                 speed:1000,
                centerMode: false,
                rows: 0,
                responsive: [               
                    {
                        breakpoint: 1400,
                        settings: {
                            slidesToShow:3

                        }
                    },
                    {
                        breakpoint: 1000,
                        settings: {
                            infinite:false,                        
                            slidesToShow: 2

                        }
                    }
                ]
            });
            news_slider = true;
        }
    } else {
        if (news_slider) {
            $(new_slider).slick('unslick');
            news_slider = false;
        }
    };

};


$(function() {
  initProgramSlider();
});
$(function() {
  initNewsSlider();
});
$(function() {
initArticleGallerySlider();
});

var doresizepage;
$(window).resize(function(){
    clearTimeout(doresizepage);
    doit = setTimeout(resizepage, 100);
});
function resizepage(){
    initProgramSlider('.programs-slider');

};

function resizepage(){
    initNewsSlider('.news-slider');
};

function resizepage(){
    initArticleGallerySlider('.article__gallery');
};


    $('#form-contacts').validate({
    messages: {
      name: {
        required: "Поле обязательно к заполнению",
      },
      theme: {
        required: "Поле обязательно к заполнению",
      },
      mail: {
        required: "Поле обязательно к заполнению",
        email: "Неверный формат" 
      },
      message: {
        required: "Поле обязательно к заполнению",
      },
      privacy: {
        required: "Необходимо дать согласие",
      }
    },
        errorElement: "div",
  errorPlacement: function(error, element) {
    error.appendTo( element.parent(".contacts-form-validate").next("div") );
  }
  });
    $('#donations-form').validate({
    messages: {

      mail: {
        required: "Поле обязательно к заполнению",
        email: "Неверный формат" 
      },
     payment: {
        required: "Поле обязательно к заполнению" 
      }
    },
        errorElement: "div",
  errorPlacement: function(error, element) {
    error.appendTo( element.parent(".donations-form-validate").next("div") );
  }
  });

});


