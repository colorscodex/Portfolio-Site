/*
    For creating an event listener:
    ===============================

	1- <event-target>: It is the element with id="open-drawer/close-drawer 
	Store inside a variable called x/y using the method document.getElementById(). 

	2- Define the function open/close.

	3- <event-target>.addEventListener(<event-to-listen-for>, function-to-run-when-an-event-happens>);
*/

const x = document.getElementById("open-drawer");
function open() {
	document.getElementById("curriculum").style.display= "block";	
}

x.addEventListener ("click", open);

const y = document.getElementById("close-drawer");
function close () {
	document.getElementById("curriculum").style.display= "none";	
}

y.addEventListener ("click", close);

/*	
	For rotating an image.
	====================== 
*/
/*	jQuery: .toggleClass(className)  for adding or removing one or more classes from each element. 
	============================================================================================== */

$( "#rotation" ).click(function(e) {
	
	e.preventDefault();
	$( this ).toggleClass( "open");

});
