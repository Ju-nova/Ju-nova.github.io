$(document).ready(function () {
    $(".burger:not(.active)").click(function (e) {
        $(this).toggleClass("active");
        $(".menu").toggleClass("active");
        $("body").toggleClass("hidden-mob");
        $(".yoga-guy.active").on("animationiteration webkitAnimationIteration", function () {
            var $this = $(this);
            $this.removeClass("active");
            $this.off();
        });
    });
    $(".burger.active").click(function (e) {
        $(".yoga-guy:not(.active)").toggleClass("active");
    });
    // $(".burger.active").on("click", function (e) {
    //     $(".yoga-guy").addClass("active");
    //     alert("Hello ");
    // });

    $(".form-trigger").click(function (e) {
        $(".main-form").toggleClass("active");
        $(".yoga-guy.active").on("animationiteration webkitAnimationIteration", function () {
            var $this = $(this);
            $this.removeClass("active");
            $this.off();
        });
    });
    $(".main-form__close").click(function (e) {
        $(".main-form").toggleClass("active");
        $(".yoga-guy").toggleClass("active");
    });
    $(".burger").mouseenter(function (e) {
        $(".yoga-guy.active").on("animationiteration webkitAnimationIteration", function () {
            var $this = $(this);
            $this.removeClass("active");
            $this.off();
        });
    });
    $(".burger").mouseleave(function () {
        $(".yoga-guy").addClass("active");
    });
    $(".main-banner__tabs").mouseenter(function (e) {
        $(".yoga-guy.active").on("animationiteration webkitAnimationIteration", function () {
            var $this = $(this);
            $this.removeClass("active");
            $this.off();
        });
    });
    $(".main-banner__tabs").mouseleave(function () {
        $(".yoga-guy").addClass("active");
    });
    $("#privacy").click(function () {
        if ($(this).prop("checked")) {
            $(".main-form__submit").removeAttr("disabled");
        } else {
            $(".main-form__submit").attr("disabled", "disabled");
        }
    });
    $(window).scroll(function () {
        // Если отступ сверху больше 50px то показываем кнопку "Наверх"
        if ($(this).scrollTop() > 50) {
            $(".footer__scroll").fadeIn();
        } else {
            $(".footer__scroll").fadeOut();
        }
    });
    $(".footer__scroll").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
    // Событие когда textarea получил фокус.
    $("#textarea").focus(function () {
        $(".main-form__input--textarea").addClass("active");
    });

    // = Вешаем событие прокрутки к нужному месту
    // на все ссылки якорь которых начинается на #

$(function(){

$('a[href^="#"]').on('click', function(e){
  $heightHeader = $('header').height() + 30;
  var target = this.hash,
        $target = $(target);
  $('html,body').stop().animate({
      scrollTop: $target.offset().top - $heightHeader 
  }, 1000);
  e.preventDefault();
});

});
    // $(window).scroll(function () {
    //     // Если отступ сверху больше 50px то показываем кнопку "Наверх"
    //     if ($(this).scrollTop() > $(".main-banner").height()) {
    //         $(".footer-btn").fadeIn(2000);
    //         $(".footer-copyright").addClass("active");
    //     } else {
    //         $(".footer-btn").fadeOut(1000);
    //         $(".footer-copyright").removeClass("active");
    //     }
    // });
});
