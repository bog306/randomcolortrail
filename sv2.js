
$( "#space" ).mousemove(function( event ) {
var msg = "Handler for .mousemove() called at ";
msg += event.pageX + ", " + event.pageY;
$( "#space" ).append( "<div>" + msg + "</div>" );
});




