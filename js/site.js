// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});
function confirm() {
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");

if (button1.checked){
    alert("radio1 selected");
}else if (button2.checked) {
    alert("radio2 selected");
}
}