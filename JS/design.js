
// The jQuery .ready() method waits until the HTML page's DOM is ready to manipulate.
// This will make sure the web page is rendered in the browser before any jQuery code executes. 

$(document).ready(function () {
    
    const $openDrawer = $('#open-drawer');
    const $closeDrawer = $('#close-drawer');
    
    $openDrawer.on('click', function(){
        $('#curriculum').show();   // If no argument is given, the default animation duration is 400 milliseconds.
    });
    

// When hide an element, your browser will render the HTML as if the hidden element does not exist.
    
    $closeDrawer.on('click', function(){
        $('#curriculum').hide();
    });


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
        
        // for Safari iOS 9.3.5 and iOS 11 works well.
        
        $(".circle").css( "-webkit-animation-iteration-count","0");
    });	
    

/*	To restat the infinite moving.
    ============================ */
    
    $(".box").click(function(e) {
        e.preventDefault();
        $(".circle").css( "animation-iteration-count","infinite");
        
        // for Safari
        $(".circle").css( "-webkit-animation-iteration-count","infinite");
    });	
});




