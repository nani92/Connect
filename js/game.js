function StartGame(){
	SetQuestions();
	WriteWords();
	RandomImages();
	PutImagesIntoDivs();
}

function SetQuestions(){
	questionList=[];
	RandomWordsIndexes(wordList.length);
	for (i = 0; i < randomedNumbers.length; i++) {
		questionList.push(wordList[randomedNumbers[i]]);
	}
}

function DisplayPoints(){
	$("#points").html(points);
	SetFontSize($("#points"));
}

function ContinueGame(){
	if(wordList.length>=5){
		UnSolvePicDivs();
		RevertWordDivsPositions();
		RestoreBorderStylesPicDivs();
		SetQuestions();
		WriteWords();
		RandomImages();
		PutImagesIntoDivs();
		AddDraggable();
	}
	else{
		GratulationScreen();
	}
}

function GratulationScreen(){
	div = document.createElement('div');
	div.id = "congr";
	$(div).height($(window).height()*9/10);
	$(div).width($(window).width()*9/10);
	$(div).css("position", "absolute");
	$(div).css("top", 5/100 *$(window).height());
	$(div).css("left",5/100 *$(window).width());
	AddHeaderToGratultionScreen(div);
	AddTextToGratultionScreen(div);
	document.getElementById("wrapper").appendChild(div);
}

function AddHeaderToGratultionScreen(div){
	p = document.createElement('p');
	if($(window).height()> $(window).width())
		p.innerHTML = "Good Work!";
	else
		p.innerHTML = "Congratulations!";
	$(p).css("font-size", 1/10 * $(div).height());
	div.appendChild(p);
}

function AddTextToGratultionScreen(div){
	p = document.createElement('p');
	p.innerHTML = "You scored <b>" + points + "</b> points.";
	$(p).css("font-size", 1/10 * $(div).height());
	div.appendChild(p);
}


function UnSolvePicDivs(){
	$("[myclass=\"pic\"]").each(function(){
		$(this).attr("solved", "no");
	});
}

function RevertWordDivsPositions(){
	template = $("#wordBox").children()[0];
	$("[myclass=\"pic\"]").each(function(){
		wordDiv = $(this).children()[1];
		$("#wordBox").append(wordDiv);
		RestoreBorderStylesWordDivs(wordDiv, template);
		$(wordDiv).css("margin-top", $(template).css("margin-top"));
		$(wordDiv).css("margin-bottom", $(template).css("margin-bottom"));
		$(wordDiv).position($(template).position().top, $(template).position().left);
		$(wordDiv).css("left", $(template).css("left"));
		$(wordDiv).css("top", $(template).css("top"));
		$(wordDiv).css("margin-left", $(template).css("margin-left"));
		$(wordDiv).css("opacity", 1.0);
	});
}
function RestoreBorderStylesWordDivs(wordDiv, template){
	$(wordDiv).css("border-width", $(template).css("border-width"));
	$(wordDiv).css("border-color", $(template).css("border-color"));
	}
	
function RestoreBorderStylesPicDivs(wordDiv, template){
	$("[myclass=\"pic\"]").each(function(){
		UnHighlightImageDiv($(this));
	});
}
