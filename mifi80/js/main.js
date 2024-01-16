// скролл внутри выпадающего меню
$(window).on("load", function () {
      $(".modal-persona__container").mCustomScrollbar({
    theme: "theme-3"
  });
      $(".modal-text__wrapper").mCustomScrollbar({
    theme: "theme-3"
  });
      $(".filtr__btn").mCustomScrollbar({
    axis:"x",
  theme:"theme-3",

   advanced:{ autoExpandHorizontalScroll:true }

  });
                $('#modal-img').zoom({
 magnify:2
 });
});
$(document).ready(function(){
$('.js-example-basic-single').select2();

	    $('.menu-toggle').click(function() {
 $(this).toggleClass('open');
  $('.menu').toggleClass('open');
  $('body').toggleClass('open');
}); 

      // ПЕРЕКЛЮЧЕНИЕ ТАБОВ
	 $('.tab-link').on('click', function () {
        var container = $(this).parent().parent().parent().parent().parent();
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

	$('.slider').css({
		overflow: 'visible',
		opacity: '1',
		height: 'auto'
	});
$('.event__slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    infinite: true,
    asNavFor: '.event__slider-nav'
  });
  $('.event__slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.event__slider-for',
    dots: false,
    centerMode: false,
    arrows: false,
    focusOnSelect: true,
    infinite: true,
    variableWidth: true,
    draggable:true,

    responsive: [
      {
        breakpoint: 1385,
        settings: {
          slidesToShow: 4
        
        }       
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3
        
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

// MASONRY    
    $('.photo__wrapper').masonry({
        // options
        itemSelector: '.photo-item',
        columnWidth: '.photo-size',
        percentPosition: true
    });

});

let fields = document.querySelectorAll('.field__file');
    Array.prototype.forEach.call(fields, function (input) {
      let label = input.nextElementSibling,
        labelVal = label.querySelector('.field__file-fake').innerText;
  
      input.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1)
          countFiles = this.files.length;
  
        if (countFiles)
          label.querySelector('.field__file-fake').innerText = 'Выбрано файлов: ' + countFiles;
        else
          label.querySelector('.field__file-fake').innerText = labelVal;
      });
    });