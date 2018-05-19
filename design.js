// The jQuery .ready() method waits until the HTML page's DOM is ready to manipulate.
$(document).ready(function(){
	/*
	.show() Method for opening the drawer with the Curriculum,
	which has display: none in the style document.
	========================================================== */
	
	$('#open-drawer').on('click', function(){
		$('#curriculum').show();
	});

	/*
	.hide() method for closing the drawer.
	====================================== */
	
	$('#close-drawer').on('click', function(){
		$('#curriculum').hide();
	});

	/*	
	For rotating an image.
	====================== */
	/*
	jQuery: .addClass(className) for adding and removeClass() for removing.
	======================================================================= */
	
	$( "#rotation" ).click(function(e) {
		e.preventDefault();
		$( this ).addClass( "rot-image");
	});

	
	$( "#reset-alembic" ).click(function(e) {
		e.preventDefault();
		$("#rotation").removeClass( "rot-image");
	});
	
	
	/*
	To stop the infinite moving.
	============================ */
	
	$( "#stop-moving" ).click(function(e) {

		e.preventDefault();
		$("#circle-1").css( "animation-iteration-count","0");
		$("#circle-2").css( "animation-iteration-count","0");
		$("#circle-3").css( "animation-iteration-count","0");
		$("#circle-4").css( "animation-iteration-count","0");
		
		// for Safari iOS 9.3.5 and iOS 11 works well
		$("#circle-1").css( "-webkit-animation-iteration-count","0");
		$("#circle-2").css( "-webkit-animation-iteration-count","0");
		$("#circle-3").css( "-webkit-animation-iteration-count","0");
		$("#circle-4").css( "-webkit-animation-iteration-count","0");
	});
	
	// For restart the moving, click on the table with circles.
	
	$( ".box" ).click(function(e) {

		e.preventDefault();
		$("#circle-1").css( "animation-iteration-count","infinite");
		$("#circle-2").css( "animation-iteration-count","infinite");
		$("#circle-3").css( "animation-iteration-count","infinite");
		$("#circle-4").css( "animation-iteration-count","infinite");
		// for Safari
		$("#circle-1").css( "-webkit-animation-iteration-count","infinite");
		$("#circle-2").css( "-webkit-animation-iteration-count","infinite");
		$("#circle-3").css( "-webkit-animation-iteration-count","infinite");
		$("#circle-4").css( "-webkit-animation-iteration-count","infinite");
	});	
	
});
	

