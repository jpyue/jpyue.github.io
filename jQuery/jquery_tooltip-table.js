// JQUERY: TOOLIP SCRIPT
	
$(document).ready(function() {

	var icon	= $(".table table .icon");					// SELECT ICON IN TABLE CELL
	
	icon.hover(												// ON MOUSEOVER (HOVER)...
		function () {
					
			var button	= $(this).find('a');				// FIND CORRESPONDING ICON BUTTON
			var title	= button.attr('title');				// RETRIEVE DESCIPTION IN TITLE ATTRIBUTE
			
			var tooltip	='	<div class="tooltip">' + title + '</div><div class="arrow"></div>';
			
			$(tooltip).hide().appendTo(this).fadeIn(150)	// SHOW TOOLTIP (WITH FADE IN EFFECT)
         }, 
         function () {										// REMOVE TOOLTIP BOX (WITH ARROW)	 
			 $('.tooltip').remove();
			 $('.arrow').remove();
         }
     );
	 
});