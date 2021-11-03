$(document).ready(function(){
    OpenBox({
        wrap: '#nav',
        link: '.toogle-menu',
        box: '.menu-holder',
        openClass: 'open'
    });
    OpenBox({
        wrap: '#nav',
        link: '.nav-overlay',
        box: '.menu-holder',
        openClass: 'open'
    });
    $('.menu.nav-list li a').click(function() {
       $('#nav').removeClass('open')
   });
    $('a[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();
    
        var target = this.hash,
        $target = $(target);
    
        $('html, body').stop().animate({
          'scrollTop': $target.offset().top - ($('.menu-wrapper').height())
        }, 900, 'swing', function () {
          // window.location.hash = target;
        });
      });
});


function OpenBox(obj){
    $(obj.wrap).each(function(){
        var hold = $(this);
        var link = hold.find(obj.link);
        var box = hold.find(obj.box);
        var w = obj.w;
        var close = hold.find(obj.close);

        link.click(function(){
            $(obj.wrap).not(hold).removeClass(obj.openClass);
            if (!hold.hasClass(obj.openClass)) {
                hold.addClass(obj.openClass);
            }
            else {
                hold.removeClass(obj.openClass);
            }
            return false;
        });

        hold.hover(function(){
            $(this).addClass('hovering');
        }, function(){
            $(this).removeClass('hovering');
        });

        $("body").click(function(){
            if (!hold.hasClass('hovering')) {
                hold.removeClass(obj.openClass);
            }
        });
        close.click(function(){
            hold.removeClass(obj.openClass);

            return false;
        });
    });
}
