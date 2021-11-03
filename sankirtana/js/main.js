$(document).ready(function(){
  // = Вешаем событие прокрутки к нужному месту
        // на все ссылки якорь которых начинается на #
      $('a[href^="#"]').click(function (e) {
        e.preventDefault();
    
        var target = this.hash,
        $target = $(target);
    
        $('html, body').stop().animate({
          'scrollTop': $target.offset().top - ($('.site-header').height())
        }, 900)
      });


       //получаем высоту панели
    // var headerHeight = $('.site-header').outerHeight();
 
    // $('a[href^="#"]').on('click', function(e) {
    //     // определяем все якорные ссылки и высчитываем высоту к блоку прокрутки
    //     var $anchor = $(this);
    //     $('html, body').stop().animate({
    //         scrollTop: $($anchor.attr('href')).offset().top - headerHeight
    //     }, 1500, 'easeInOutExpo');
    //     event.preventDefault();
 
    //     //добавляем якорь в url
    //     history.pushState({}, "", this.href);
    // });     


$('.menu-toggle').click(function() {
 $(this).toggleClass('open');
  $('.menu__contacts').toggleClass('open');
  $('body').toggleClass('open');
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
    });