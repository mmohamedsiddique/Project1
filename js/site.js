// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});
function confirm() {
var x = document.getElementById("bday").value;
if (x == "") {
alert("Your format is incorrect, please enter is at mm/dd/yyyy or choose from the calendar");
return false;
}
else
{
  alert("Thank you for signing up for our newsletter!\n" +
    "We will update you as sooon as new sales season starts!");
}
}