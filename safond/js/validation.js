$(document).ready(function () {
	// ВАЛИДАЦИЯ ФОРМ
    $('#form-contacts').validate({
    messages: {
      name: {
        required: "Поле обязательно к заполнению",
      },
      theme: {
        required: "Поле обязательно к заполнению",
      },
      mail: {
        required: "Поле обязательно к заполнению",
        email: "Неверный формат" 
      },
      phone: {
        required: "Поле обязательно к заполнению",
        phone: "Неверный формат" 
      },
      message: {
        required: "Поле обязательно к заполнению",
      },
      privacy: {
        required: "Необходимо дать согласие",
      }
    },
        errorElement: "div",
  errorPlacement: function(error, element) {
    error.appendTo( element.parent(".contacts-form-validate").next("div") );
  }
  });

        $('#news-form').validate({
    messages: {
      name: {
        required: "Поле обязательно к заполнению",
      },
      mail: {
        required: "Поле обязательно к заполнению",
        email: "Неверный формат" 
      },
      phone: {
        required: "Поле обязательно к заполнению",
        phone: "Неверный формат" 
      },
      privacy: {
        required: "Необходимо дать согласие",
      }
    },
        errorElement: "div",
  errorPlacement: function(error, element) {
    error.appendTo( element.parent(".contacts-form-validate").next("div") );
  }
  });
          $('#charity-form').validate({
    messages: {
      name: {
        required: "Поле обязательно к заполнению",
      },
      mail: {
        required: "Поле обязательно к заполнению",
        email: "Неверный формат" 
      },
      summa: {
        required: "Поле обязательно к заполнению", 
      }
    },
        errorElement: "div",
  errorPlacement: function(error, element) {
    error.appendTo( element.parent(".contacts-form-validate").next("div") );
  }
  });
})