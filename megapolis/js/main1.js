$(document).ready(function () {
	$('.burger').click(function(e) {
		$(this).toggleClass('active');
		$('.menu').toggleClass('active');
		$('body').toggleClass('hidden-mob');
     $('.yoga-guy').toggleClass('active');
  //   $('.yoga-guy').on('animationiteration webkitAnimationIteration', function () {
  //   var $this = $(this);

  //   $this.removeClass('active');

  //   $this.off();
  // });
});
        $('.burger.active').on('click', function(e) {
             $('.yoga-guy').addClass('active');
             alert( "Hello " );
        });

	$('.form-trigger').click(function(e) {
		$('.main-form').toggleClass('active');
    $('.yoga-guy').removeClass('active');
	});
		$('.main-form__close').click(function(e) {
		$('.main-form').toggleClass('active');
    $('.yoga-guy').addClass('active');
	});
    $('.main-banner__tabs').hover(function(e) {
     $('.yoga-guy').toggleClass('active');
    });
$("#privacy").click(function() {
  if (($(this).prop("checked"))) {
    $(".main-form__submit").removeAttr("disabled");
  } else {
    $(".main-form__submit").attr("disabled", "disabled");
  }
})
	 $(window).scroll(function () {
        // Если отступ сверху больше 50px то показываем кнопку "Наверх"
        if ($(this).scrollTop() > 50) {
            $('.footer__scroll').fadeIn();
        } else {
            $('.footer__scroll').fadeOut();
        }
    });
	 $('.footer__scroll').click(function(){
		$('html, body').animate({scrollTop: 0}, 600);
		return false;
	});
	 // Событие когда textarea получил фокус.
$('#textarea').focus(function(){
	$('.main-form__input--textarea').addClass('active');
});

   // = Вешаем событие прокрутки к нужному месту
        // на все ссылки якорь которых начинается на #
      $('a[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();
    
        var target = this.hash,
        $target = $(target);
    
        $('html, body').stop().animate({
          'scrollTop': $target.offset().top - ($('header').height())
        }, 900, 'swing', function () {
          window.location.hash = target;
        });
      });


$(window).scroll(function () {
        // Если отступ сверху больше 50px то показываем кнопку "Наверх"
        if ($(this).scrollTop() > $('.main-banner').height()) {
            $('.footer-btn').fadeIn(2000);
            $('.footer-copyright').addClass('active')();
        } else {
            $('.footer-btn').fadeOut(1000);
            $('.footer-copyright').removeClass('active')();
        }
    });
});