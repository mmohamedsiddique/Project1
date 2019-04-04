// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});
function confirm() {
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");

if (button1.checked){
   alert("Thank you for signing up for our newsletter!\n" +
    "We will update you as soon as new sales season starts!");
}else if (button2.checked) {
    alert("Sorry, to hear you are leaving Android Phone\n" +
    "Thank you for signing up for our newsletter!\n" +
    "We will update you as soon as new sales season starts!");
}
  
}