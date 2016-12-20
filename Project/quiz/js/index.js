
$(function() {
    $('.product').draggable();
    $('.favourites').droppable({
    	activeClass: "highlight",
    	appendTo: "body",
      	drop: function(event, ui) {

        $(this).addClass('highlight');

        var favourite 	=	ui.draggable.css('background-image');
        	miniFav		=	'<span style="background-image:'+favourite+';"></span>';

		$(miniFav).appendTo('.favourites-container');
		ui.draggable.fadeOut();
  		}


	});
});
$(function() {
  // this initializes the dialog (and uses some common options that I do)
  $("#dialog").dialog({
    autoOpen : false, modal : true, show : "blind", hide : "blind"
  });

  // next add the onclick handler
  $("#contactUs").click(function() {
    $("#dialog").dialog("open");
    return false;
  });
});
