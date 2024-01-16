$(document).ready(function(){
	 new WOW().init();
	 
    $('.js-example-basic-single').select2();

	    $('.menu-toggle').click(function() {
 $(this).toggleClass('open');
  $('.menu').toggleClass('open');
  $('body').toggleClass('open');
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

	$('.slider').css({
		overflow: 'visible',
		opacity: '1',
		height: 'auto'
	});
		//Слайдер мероприятий на главной странице
	$('.events-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		autoplay: false,
		rows: 0,
		centerMode: false,
		infinite: true,

		responsive: [
			{
		breakpoint: 1440,
		settings: {
			slidesToShow: 3
		}
	},{
				breakpoint: 1000,
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
$('.news__wrapper').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		autoplay: false,
		rows: 0,
		centerMode: false,
		infinite: true,

		responsive: [
			{
		breakpoint: 1440,
		settings: {
			slidesToShow: 3
		}
	},{
				breakpoint: 1000,
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
});