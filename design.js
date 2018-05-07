/*
	.show() Method for opening the drawer with the Curriculum,
	which has display: none in the style document.
	========================================================== */

$(document).ready(function(){

	$('#open-drawer').on('click', function(){
		$('#curriculum').show();

	});
});

/*
	.hide() method for closing the drawer,
	======================================================== */

$(document).ready(function(){
	
	$('#close-drawer').on('click', function(){
		$('#curriculum').hide();
	});

});

/*	
	For rotating an image.
	====================== 
*/
/*	jQuery: .addClass(className) for adding and removeClass() for removing.
	======================================================================= */

$(document).ready(function(){
	
	$( "#rotation" ).click(function(e) {
		e.preventDefault();
		$( this ).addClass( "rot-image");
	});
});

$(document).ready(function(){
	
	$( "#reset-alembic" ).click(function(e) {
		e.preventDefault();
		$("#rotation").removeClass( "rot-image");
	});
});
	

