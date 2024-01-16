$(document).ready(function () {
	// ВАЛИДАЦИЯ ФОРМ
	$('.main-form__form').validate({
		messages: {
			name: {
				required: "Поле обязательно к заполнению",
			},
			company: {
				required: "Поле обязательно к заполнению",
			},
			message: {
				required: "Поле обязательно к заполнению",
			},
			privacy: {
				required: "Поле обязательно к заполнению",
			},
			email: {
				required: "Поле обязательно к заполнению",
				email: "Неверный формат"
			},
			phone: {
				required: "Поле обязательно к заполнению",
				phone: "Неверный формат"
			}
		},
		errorElement: "div",
		errorPlacement: function (error, element) {
			error.appendTo(element.parent(".main-form__form .validate").next("div"));
		}
	});

})