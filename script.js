
	$(document).ready( function() {

		var csize = $(".container").width() * $(".container").height();
		var space = $(window).width() * $(window).height();


		while ( csize * $(".container").length < space) {
			$("#space").append("<div class='container'></div>");
		};

		$(document).on("mousemove", function() { 
			window.color = Math.floor(Math.random()*16777215).toString(16);
		}); 
		
		$(".container").on("mouseover", function() {
			$(this).css("background-color", "#" + window.color);
			
			//setTimeout(function(){ $(this).css('background-color','none'); },200);
		});		






});

// http://stackoverflow.com/questions/12781205/live-detect-browser-size-jquery-javascript // 