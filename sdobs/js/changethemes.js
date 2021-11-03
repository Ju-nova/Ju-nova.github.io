const themes = ['raspberry', 'vanila', 'mango', 'choco', 'strawberry', 'caramel'];
var nowTheme = localStorage.getItem('theme') || 0;
nowTheme++;
if (nowTheme >= themes.length) {
  nowTheme = 0;
};
localStorage.setItem('theme', nowTheme);
$(document).ready(function(){
  $('html').addClass(themes[nowTheme]);
  $('body').addClass(themes[nowTheme]);
  console.log('ready document', $('html').attr('class'));
});
