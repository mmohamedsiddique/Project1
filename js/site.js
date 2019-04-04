// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});
function confirm() {
var x = document.getElementbyId("fname").value;
if (x == "") {
alert("Your name does not exist in this world");
return false;
}
else
{
  alert("Thank you for signing up for our newsletter!\n" +
    "We will update you as sooon as new sales season starts!");
}
}