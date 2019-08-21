$(function() {
	var tab = $('a[data-toggle="tab"]');

	tab.on('click', function() {
		event.preventDefault();
		$('.submenu__list-item--current').removeClass('submenu__list-item--current');
		$(this).parent().toggleClass('submenu__list-item--current');
		var target = $(this).attr('href');
		$('.active').removeClass('active');
		$(target).toggleClass('active');
	});
    
    var block = $('a[data-toggle="block"]');
 
    block.hover(function(){

   
      var part = $(this).attr('href');
      $('.submenu__block').removeClass('active');
      $(part).addClass('active');        // навели курсор на объект (не учитываются переходы внутри элемента)         
        },
     
      //   function(){ 
      //    var part = $(this).attr('href');          
      // $(part).removeClass('active');    // отвели курсор с объекта (не учитываются переходы внутри элемента)            
      //   }
      );

   
var tabBlock = $('a[data-toggle="t1"]');

  tabBlock.on('click', function() {
    event.preventDefault();
    $('.tab-block--active').removeClass('tab-block--active');
    $(this).parent().toggleClass('tab-block--active');
    var karies = $(this).attr('href');
    $('.tab-block--current').removeClass('tab-block--current');
    $(karies).toggleClass('tab-block--current');
  });

 $('.review__wrapper').slick({
  centerMode: true,
  // centerPadding: '60px',
  slidesToShow: 1,
  variableWidth:true,
  arrows:false,
  autoplay:true
  
  
});  
$('.column2__slider').slick({
  fade:true,
  slidesToShow: 1,
  arrows:true,
  autoplay:false,
  speed:500,
  dots:true,
  autoplaySpeed:5000,
  
  
});
  $('.personal__slider').slick({

   centerMode: true,
   centerPadding: '60px',
  slidesToShow: 3,
  variableWidth:true,
  arrows:true,
 // autoplay:true,
  speed:500,
   lazyLoad: 'profressive',
  autoplaySpeed:5000,
  cssEase: 'linear',



}); 
 var slider = $('.sl-fb');
  $('.sl-count__total').text( slider.slick("getSlick").slideCount);
  $(".sl-fb").on('afterChange', function(event, slick, currentSlide){
       $(".sl-count__num").text(currentSlide + 1);
  });

   $('.main-block__slider').slick({

  fade:true,
  slidesToShow: 1,
  arrows:true,
  autoplay:false,
  speed:500,
  dots:true,
  autoplaySpeed:5000
 

}); 
  var slider = $('.sl-mb');
  $('.sl-count__total__main').text( slider.slick("getSlick").slideCount);
  $(".sl-mb").on('afterChange', function(event, slick, currentSlide){
       $(".sl-count__num__main").text(currentSlide + 1);
  });

  $( ".spoiler__click" ).click(
  function() {
    $(this).next('.faq__answer').slideToggle(1000)
    $(this).toggleClass('spoiler__click--open');
  
       $(this).next('.spoiler__text').slideToggle()

  }, 
);
    });
$(window).on("scroll", function () {
    var scrolled = $(this).scrollTop();
    if( scrolled > 132) {
        $('.logo1').addClass('none');
         $('.logo2').removeClass('none');
         $('.header').addClass('header__scrolled');
          $('.header__first-work').addClass('none');
    }   
    if( scrolled <= 132) {     
       $('.logo1').removeClass('none');
         $('.logo2').addClass('none');
         $('.header').removeClass('header__scrolled');
          $('.header__first-work').removeClass('none');
    }


});
  $(window).on('load', function() {
    
     $('.news__slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  // variableWidth:true,
  focusOnSelect:true,
  // centerMode: true,
// centerPadding: '30px'

autoplay:true,

 responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow:3,
        slidesToScroll: 1,
        arrows:true

      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow:2,
        slidesToScroll: 1,
        arrows:true

      }
    },
     {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
      
   
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  
  
});
     });


 var header = document.querySelector('.header__first');
  var headerToggle = document.querySelector('.header__toggle');

  header.classList.remove('header--no-js');

  headerToggle.addEventListener('click', function() {
    if (header.classList.contains('header--closed')) {
      header.classList.remove('header--closed');
      header.classList.add('header--opened');
    } else {
      header.classList.add('header--closed');
      header.classList.remove('header--opened');
    }
  });