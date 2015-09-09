$(window).on('load', function() {

	var mainDocument = $(document);

	mainDocument.on('click', function(event) {
		var clickTarget = $(event.target);
		// Do nothing if the user clicked inside a sticky note
		var clickedInsideStickyNote = clickTarget.hasClass('sticky-note') || clickTarget.parent('.sticky-note').size() > 0;
		if (clickedInsideStickyNote) {
			return;
		}

		var x = event.pageX;
		var y = event.pageY;
		var newStickyNote = $('<div class="sticky-note"></div>');
		var newStickyNoteTextArea = $('<textarea placeholder="empty sticky note"></textarea>');
		newStickyNote.append(newStickyNoteTextArea);
		newStickyNote.css('left', x);
		newStickyNote.css('top', y);
		$(document.body).append(newStickyNote);
		newStickyNoteTextArea.focus();
		newStickyNote.draggable();
	});

});