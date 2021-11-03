const themes = ['raspberry', 'vanila', 'mango', 'choco', 'strawberry', 'caramel'];
var nowTheme = localStorage.getItem('theme') || 0;
$(document).ready(function(){
    $('html').addClass(themes[nowTheme]);
    $('body').addClass(themes[nowTheme]);
    console.log('ready', $('body').attr('class'));
});