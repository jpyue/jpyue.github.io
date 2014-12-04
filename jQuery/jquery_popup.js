// JQUERY POPUP WINDOW & OVERLAY
	
$(document).ready(function() {
	  $(".popup_overlay").hide();
	
	$(".table .process").click(function(){
	  $("#1").fadeIn(250);
	  $(".popup_overlay").fadeIn(250);
	});
	
	$(".table .info").click(function(){
	  $("#2").fadeIn(250);
	  $(".popup_overlay").fadeIn(250);
	});
	
	$(".popup .popup_close").click(function(){
	  $(".popup").fadeOut(250);
	  $(".popup_overlay").fadeOut(250);
	});
	
	$(".popup #close").click(function(){
	  $(".popup").fadeOut(250);
	  $(".popup_overlay").fadeOut(250);
	});
	
});