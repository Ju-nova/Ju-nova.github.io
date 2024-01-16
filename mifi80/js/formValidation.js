$(document).ready(function () {
	// ВАЛИДАЦИЯ ФОРМ
	
	$('.zal-slavy-form').validate({
		messages: {

			name: {
				required: "Поле обязательно к заполнению",
			},
			category: {
				required: "Поле обязательно к заполнению",
			},
			message: {
				required: "Поле обязательно к заполнению",
			}
		},
		errorElement: "div",
		errorPlacement: function (error, element) {
			error.appendTo(element.parent(".zal-slavy-form .validate").next("div"));
		}
	});
	$('.send-congrat-form').validate({
		messages: {

			name: {
				required: "Поле обязательно к заполнению",
			},
			file: {
				required: "Поле обязательно к заполнению",
			},
			message: {
				required: "Поле обязательно к заполнению",
			}
		},
		errorElement: "div",
		errorPlacement: function (error, element) {
			error.appendTo(element.parent(".send-congrat-form .validate").next("div"));
		}
	});
	
})