$(document).ready( function() {
	

		if ($("#space").mousemove()) { $("#space").on("mousemove", function(m) {

			window.i = $("#space").children().size();

			$("#space").on("mousemove", function( event ) {
			$("#space").append( "<div class='container" + window.i.toString() + "'></div>" );
			$(".container" + window.i.toString()).css({"top": event.pageY, "left": event.pageX});


		$(".container").on("mouseleave", function() {
			 window.color = Math.floor(Math.random()*16777215).toString(16);
			 

			 $("#space").append(" <div class='container"+ window.i.toString() +"'> </div>");
			 $(".container"+ window.i.toString()).css({"top": m.pageY, "left": m.pageX, "background-color": "#"+window.color});

	});	

	});

	});		
		};

			
});
