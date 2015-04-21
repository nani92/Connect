function IsOnCorrectImage(word) {
	imageId = "";
	$("[myclass=\"pic\"]").each(function () {
		if (IsRightEdgeOnImage(word, $(this)) && 
					IsLeftEdgeOnImage(word, $(this)) && 
					IsTopEdgeOnImage(word, $(this)) && 
					IsBottomEdgeOnImage(word, $(this))) 
			imageId = $(this).children()[0].id;
	});
	if(imageId == word.html()){
		ChangeStyleOfSolvedPicDiv($("#"+imageId).closest("div"));
		ChangeStyleOfSolvedWordDiv($("#"+imageId).closest("div"), word);
		ChangeDraggingOptionsForWordDiv(word);
		points+=10;
		DisplayPoints();
		if(ShouldRandomNewWords())
			ContinueGame();
		return true;
	}
	else{
		points-=2;
		DisplayPoints();
		ChangeStyleOfWrongAnswerPicDiv($("#"+imageId).closest("div"));
		return false;
	}
}

function ChangeStyleOfSolvedPicDiv(picDiv){
	picDiv.css("border-color", "#59ed18");
	picDiv.attr("solved", "yes");
}

function ChangeStyleOfWrongAnswerPicDiv(picDiv){
	picDiv.css("border-color", "#ed1d18");
}

function ChangeStyleOfSolvedWordDiv(picDiv, wordDiv){
	wordDiv.css("border-color", "#59ed18");
	wordDiv.css("border-width", 5);
	picDiv.append(wordDiv);
	if($(window).height()> $(window).width()){
		wordDiv.css("margin-top", 0);
		wordDiv.css("top", -wordDiv.height());
		wordDiv.css("left", 0);
		wordDiv.css("margin-left", 0);
		wordDiv.css("opacity", 0.8);
	}
	else{
		
		wordDiv.css("top", (-3/5 * wordDiv.height()));
		wordDiv.css("left", (1/2 *picDiv.width()));
		wordDiv.css("margin-left", 0);
		wordDiv.css("margin-top", 0);
		wordDiv.css("margin-bottom", 0);
	}
}

function ChangeDraggingOptionsForWordDiv(wordDiv){
	wordDiv.draggable( 'destroy' );
}

function ShouldRandomNewWords(){
	counter = 0;
	$("[myclass=\"pic\"]").each(function(){
		if($(this).attr("solved")=="yes")
			counter++;
	});
	
	console.log("SHOULD?" + counter);
	if(counter==3)
		return true;
	else
		return false;
}