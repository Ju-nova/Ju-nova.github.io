
    var feed = document.querySelector(".feed-form");
    var popup = document.querySelector(".modal"); 
    var close = document.querySelector(".feedback-close");
    var autofocus = document.querySelector(".feed-input");
    
    var form = document.querySelector(".user-form form");
    var login = document.querySelector("[name=login]");
    var password = document.querySelector("[name=password]");
    var storage = localStorage.getItem("login");

    feed.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("modal-show");
        autofocus.focus();

});
    close.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
    
    });


    form.addEventListener("submit", function (evt) {
       if (!login.value || !password.value) {
evt.preventDefault();
    	console.log ("Нужно отправить логин и пароль");}
   });
  

  window.addEventListener("keydown", function(evt) {
  	if (evt.keyCode === 27) {
  		evt.preventDefault();
  	if (popup.classList.contains("modal-show")) 
  		{popup.classList.remove("modal-show");}
 
   }
  });
  



    

     