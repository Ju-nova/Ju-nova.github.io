// скролл внутри выпадающего меню
$(window).on("load", function () {
	$(".main-menu__right").mCustomScrollbar({
		theme: "dark-3"
	});
	$(".main-menu__left").mCustomScrollbar({
		theme: "minimal-dark"
	});
	$(".poroda__info-text").mCustomScrollbar({
		theme: "dark-3"
	});
	$(".category__filtr-porody").mCustomScrollbar({
		theme: "minimal-dark"
	});

});
// ПОЛЗУНОК ЦЕН В ФИЛЬТРЕ
$(function () {
	const sliderRange = $("#slider-range");

	sliderRange.slider({
		range: true,
		min: 0,
		max: 100000,
		animate: "slow",
		values: [0, 30000],
		change: function (event, ui) {
			$("#amount_min").val(ui.values[0]);
			$("#amount_max").val(ui.values[1]);
		},
		create: function () {
			let values = $(this).slider("option", "values");
			$("#amount_min").val(values[0]);
			$("#amount_max").val(values[1]);
		}
	});

	// Input value to Integer.
	const toInt = input => {
		let val = Number(input);

		if (Number.isInteger(val)) {
			return Number(val);
		} else {
			return 0;
		}
	};

	// Bind onchange event to inputs.
	$("#amount_min").change(function () {
		let amount_min = toInt($(this).val());
		let amount_max = toInt($("#amount_max").val());

		if (amount_min >= amount_max) {
			amount_min = amount_max;
		}

		sliderRange.slider("values", 0, amount_min);
	});

	$("#amount_max").change(function () {
		let amount_max = toInt($(this).val());
		let amount_min = toInt($("#amount_min").val());

		if (amount_max <= amount_min) {
			amount_max = amount_min;
		}

		sliderRange.slider("values", 1, amount_max);
	});
});


$('.checkbox-ios input').focusout(function () {
	$(this).parent().removeClass('focused');
});


$(document).ready(function () {
	// МЕНЮ
	$('.menu__burger').click(function (e) {
		$(this).toggleClass('active');
		$('.main-menu').fadeToggle();
		$('.shadow').fadeToggle();
		$('body').toggleClass('hidden');
		$('body').removeClass('hidden-mob');
	});
	// АККОРДЕОН В МЕНЮ
	$(".main-menu__sub-accordion__header-icon").click(
		function () {
			$(this).parent().parent().toggleClass('active');

		},
	);
	$(".category__filtr-accordion__header-icon").click(
		function () {
			$(this).parent().parent().toggleClass('active');

		},
	);
	// ОБЩИЙ АККОРДЕОН

	$(".tab-icon").click(
		function () {
			$(this).parent().parent().toggleClass('active');
		},
	);
	$('.punc').click(function () {
		$('.punc').removeClass('active');
		$(this).addClass('active')
	});
    $('.cabinet-settings__question-btn').hover(function () {
    $('.registration__form-add-answer').toggleClass('active');
  });

	// ВЫПАДАЮЩЕЕ МЕНЮ ДЕСКТОП

	var withSub = $('a[data-toggle="with-sub"]');

	withSub.hover(function () {

		var part = $(this).data("id");
		var subMenu = "#" + part;
		$(withSub).removeClass('active');
		$(this).addClass('active');
		$('.main-menu__sub').removeClass('active');
		$(subMenu).addClass('active');       // навели курсор на объект (не учитываются переходы внутри элемента)         
	},
	);


	$('.main-menu__with-sub').click(function () {

		var part = $(this).data("id");
		var subMenu = "#" + part;
		$('.main-menu__sub').removeClass('show');
		$(subMenu).addClass('show');
		$('.main-menu').toggleClass('noscroll');
	},
	);

	$('.main-menu__sub-back').click(function () {
		$(this).parent().parent().removeClass('show');
		$('.main-menu').toggleClass('noscroll');
	});

	$('.menu__user-img--logout').click(function () {
		$('.menu__user-list--logout').fadeToggle();
		$('body').toggleClass('hidden-mob');
	});
	$('.menu__user-img--login').click(function () {
		$('.menu__user-list--login').fadeToggle();
		$('body').toggleClass('hidden-mob');
	});
	$(document).mouseup(function (e) {
		if (!$('.menu__user-img').is(e.target) && $('.menu__user-img').has(e.target).length === 0 &&
			!$('.menu__user-list').is(e.target) && $('.menu__user-list').has(e.target).length === 0

		) {
			$('.menu__user-list').fadeOut();
		}
	});
	// СЕЛЕКТ В СОРТИРОВКЕ ОБЪЯВЛЕНИЙ
	$('.js-example-basic-single').select2();
	// СКРЫВАЕМ ПОИСК ПРИ СКРОЛЛЕ НА МОБИЛЕ
	window.addEventListener('scroll', function () {

		if (window.scrollY > 277) {
			$('.menu').addClass("hide-form");
		} else {
			$('.menu').removeClass("hide-form");
		}
	});
	// ЗНАЧОК ИЗБРАННОЕ/СЕРДЕЧКО
	$('.animal-card__fav').click(function (e) {
		e.stopPropagation();
		$(this).toggleClass('active');
	});

	$('.slider').css({
		overflow: 'visible',
		opacity: '1',
		height: 'auto'
	});
	// слайдер баннера на главной странице

	$('.main-banner').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		autoplay: true,
		rows: 0,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		infinite: true,
		autoplaySpeed: 2000
	});
	// слайдер рекомендаций на главной странице
	$('.rec__wrapper').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		autoplay: false,
		rows: 0,
		centerMode: false,
		infinite: false,
		responsive: [
			{
				breakpoint: 769,
				settings: "unslick"
			}]
	});
	//Слайдер преимуществ на главной странице
	$('.advantages__wrapper').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		autoplay: false,
		rows: 0,
		variableWidth: true,

		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 4,
					variableWidth: true,
				}
			}]
	});
	// Слайдер каталога на главной странице
	$('.main-catalog__wrapper').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		autoplay: false,
		centerMode: true,
		rows: 0,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false
				}
			}]
	});

	// СЛАЙДЕР ОБЪЯВЛЕНИЙ
	$('.advert-slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		infinite: true,
		asNavFor: '.advert-slider-nav'
	});
	$('.advert-slider-nav').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		asNavFor: '.advert-slider-for',
		dots: false,
		centerMode: false,
		arrows: false,
		focusOnSelect: true,
		infinite: true,
		variableWidth: true,
		draggable:true,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 5
				
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

	$(link).click(function () {
		event.preventDefault();
		var modal = $(this).attr('data-modal');
		$(modal).fadeIn(300);
		$('body').addClass('modal-body');
	});
	$('.modal-container').click(function (e) {
		$(this).fadeOut(300);
		$('body').removeClass('modal-body');
		// location.reload();
		console.log('parent function');
	})
		.on('click', 'div', function (e) {
			e.stopPropagation();
		});
	$('.close').click(function () {
		$(".modal-container").fadeOut(300);
		$('body').removeClass('modal-body');
	});
});
