

$(document).ready(function () {
	
	var $overlay = $('<div id="overlay"></div>');
	var $img = $('<img width="700px" height="465px">');	

	$overlay.append($img);

	$("body").append($overlay)

	$("#inventory a").click(function (event) {
		event.preventDefault();
		var href = $(this).attr("href");
		$img.attr("src", href);

		$overlay.show();

	});

	
	$("#overlay").click(function () {
	$overlay.hide();
});
});