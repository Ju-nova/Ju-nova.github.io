$(document).ready(function () {
	// ВАЛИДАЦИЯ ФОРМ
	$('.registration__form').validate({
		messages: {
			name: {
				required: "<br> Поле обязательно к заполнению",
			},
			nik: {
				required: "<br> Поле обязательно к заполнению",
			},
			password: {
				required: "<br> Поле обязательно к заполнению",
			},
			repeatPassword: {
				required: "<br> Поле обязательно к заполнению",
			},
			privacy: {
				required: "<br> Поле обязательно к заполнению",
			},
			email: {
				required: "<br> Поле обязательно к заполнению",
				email: "<br> Неверный формат"
			},
			phone: {
				required: "<br> Поле обязательно к заполнению",
				phone: "<br> Неверный формат"
			}
		},
		errorElement: "div",
		errorPlacement: function (error, element) {
			error.appendTo(element.parent(".registration__form .validate").next("div"));
		}
	});
	$('.cabinet-add').validate({
		messages: {

			name: {
				required: "<br> Поле обязательно к заполнению",
			},
			title: {
				required: "<br> Поле обязательно к заполнению",
			}
		},
		errorElement: "div",
		errorPlacement: function (error, element) {
			error.appendTo(element.parent(".cabinet-add .validate").next("div"));
		}
	});
	$('.cabinet-settings__form').validate({
		messages: {

			password: {
				required: "<br> Поле обязательно к заполнению",
			},
			repeatPassword: {
				required: "<br> Поле обязательно к заполнению",
			}
		},
		errorElement: "div",
		errorPlacement: function (error, element) {
			error.appendTo(element.parent(".cabinet-settings__form .validate").next("div"));
		}
	});
	$('.form__enter').validate({
		messages: {

			password: {
				required: "<br> Поле обязательно к заполнению",
			},
			email: {
				required: "<br> Поле обязательно к заполнению",
			}
		},
		errorElement: "div",
		errorPlacement: function (error, element) {
			error.appendTo(element.parent(".form__enter .validate").next("div"));
		}
	});
	$('.forget__password').validate({
		messages: {

			emailPassword: {
				required: "<br> Поле обязательно к заполнению",
			}
		},
		errorElement: "div",
		errorPlacement: function (error, element) {
			error.appendTo(element.parent(".forget__password .validate").next("div"));
		}
	});
})