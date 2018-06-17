/*
    For creating an event listener:
    ===============================

	1- <event-target>: It is the element with id="open-drawer/close-drawer 
	Store inside a variable called x/y using the method document.getElementById(). 

	2- Define the function open/close.

	3- <event-target>.addEventListener(<event-to-listen-for>, function-to-run-when-an-event-happens>);
*/

// The jQuery .ready() method waits until the HTML page's DOM is ready to manipulate.
// This will make sure the web page is rendered in the browser before any jQuery code executes. 

$(document).ready(function () {
	const $openDrawer = $('#open-drawer');
	const $closeDrawer = $('#close-drawer');

	$openDrawer.on('click', function(){
		$('#curriculum').show();   // If no argument is given, the default animation duration is 400 milliseconds.

	});

//When hide an element, your browser will render the HTML as if the hidden element does not exist.

	$closeDrawer.on('click', function(){
		$('#curriculum').hide();
	});


/*	with javaScript
	===============

	function open () {
	document.getElementById("curriculum").style.display= "block";	
	}

	x.addEventListener ("click", open);

	const y = document.getElementById("close-drawer");

	function close () {
	document.getElementById("curriculum").style.display= "none";	
	}

	y.addEventListener ("click", close); 

	====================================== */


/* 	For rotating an image.
	====================== */
/*	jQuery: .addClass(className) for adding and removeClass() for removing  
	======================================================================== */


	$( "#rotation" ).click(function(e) {

		e.preventDefault();
		$( this ).addClass( "rot-image");

	});

	$( "#reset-alembic" ).click(function(e) {

		e.preventDefault();
		$("#rotation").removeClass( "rot-image");

	});


/*	To stop the infinite moving.
	============================ */

	$( "#stop-moving" ).click(function(e) {

		e.preventDefault();
		$(".circle").css( "animation-iteration-count","0");	

		/*
		$("#circle-1").css( "animation-iteration-count","0");
		$("#circle-2").css( "animation-iteration-count","0");
		$("#circle-3").css( "animation-iteration-count","0");
		$("#circle-4").css( "animation-iteration-count","0");
		*/


	// for Safari iOS 9.3.5 and iOS 11 works well

		$(".circle").css( "-webkit-animation-iteration-count","0");
		
		/*
		$("#circle-1").css( "-webkit-animation-iteration-count","0");
		$("#circle-2").css( "-webkit-animation-iteration-count","0");
		$("#circle-3").css( "-webkit-animation-iteration-count","0");
		$("#circle-4").css( "-webkit-animation-iteration-count","0");
		*/

	});	

/*	To restat the infinite moving.
	============================ */

	$(".box").click(function(e) {

		e.preventDefault();
		$(".circle").css( "animation-iteration-count","infinite");

		/*
		$("#circle-1").css( "animation-iteration-count","infinite");
		$("#circle-2").css( "animation-iteration-count","infinite");
		$("#circle-3").css( "animation-iteration-count","infinite");
		$("#circle-4").css( "animation-iteration-count","infinite");
		*/
	
	// for Safari
		$(".circle").css( "-webkit-animation-iteration-count","infinite");

		/*
		$("#circle-1").css( "-webkit-animation-iteration-count","infinite");
		$("#circle-2").css( "-webkit-animation-iteration-count","infinite");
		$("#circle-3").css( "-webkit-animation-iteration-count","infinite");
		$("#circle-4").css( "-webkit-animation-iteration-count","infinite");
		*/
	});	

	//	The hover() method specifies two functions to run when the mouse pointer hovers over the selected elements.
	//	This method triggers both the mouseenter and mouseleave events.
	//	Syntax: $(selector).hover(inFunction,outFunction) 
	//	To modify the background 

	// document.querySelector("a[target]"); 
		//$("a[title]").hover(function(){
        //$(this).css("background-color", "yellow");
        //}, function(){
        //$(this).css("background-color", "pink");
    //});

});




