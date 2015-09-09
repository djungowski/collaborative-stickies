$(window).on('load', function() {

	var mainDocument = $(document);

	mainDocument.on('click', function(event) {
		var x = event.pageX;
		var y = event.pageY;
		var newStickyNote = $('<div class="sticky-note">Foo</div>');
		newStickyNote.css('left', x);
		newStickyNote.css('top', y);
		$(document.body).append(newStickyNote);
	});

});