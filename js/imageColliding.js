function IsOnImage(word) {
	droppedOnImage = false;
	$("[myclass=\"pic\"]").each(function () {
		if (IsRightEdgeOnImage(word, $(this)) && 
					IsLeftEdgeOnImage(word, $(this)) && 
					IsTopEdgeOnImage(word, $(this)) && 
					IsBottomEdgeOnImage(word, $(this))) {
			droppedOnImage = true;
			HighlightImageDiv($(this));
		}
		else
			UnHighlightImageDiv($(this));
	});
	return droppedOnImage;
}

function IsRightEdgeOnImage(word, pic) {
	return (word.offset().left + word.width()) > pic.offset().left;
}

function IsLeftEdgeOnImage(word, pic) {
	return word.offset().left < (pic.offset().left + pic.width());
}

function IsTopEdgeOnImage(word, pic) {
	return word.offset().top < (pic.offset().top + pic.height());
}

function IsBottomEdgeOnImage(word, pic) {
	return (word.offset().top + word.height()) > pic.offset().top;
}

function HighlightImageDiv(pic){
	pic.css("border-width", "5px");
}

function UnHighlightImageDiv(pic){
	if(pic.attr("solved")=="no"){
		pic.css("border-color", "#e68c3f");
		pic.css("border-width", "2px");
	}
}