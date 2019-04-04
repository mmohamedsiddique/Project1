// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});
function confirm() {
var x = document.getElementById("bday").value;
var fname = document.getElementById("fname").value ;
 	if ( x < 18 ) {
 	
 		alert("We are sorry to inform you are not eligible for this promotion");
 		
 		}
 	 else if ( x > 18 ) { 
 	
 		alert("Thank you for signing up for this," + fname + ". You rock!");
 		}

