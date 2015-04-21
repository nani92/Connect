var questionList = [];
var randomedNumbers = [];
var wordList = [];
points = 0;
$(document).ready(function () {
	gameScreen.init();
	SetWordDivHeight();
	SetPicDivHeight();
	AddDraggable();
	DisplayPoints();
	
	
	var jsonURL = "word.json";
	$.getJSON(jsonURL, function (json) {
		$("[myclass=\"pic\"]").each(function () {
			$(this).droppable();
		});
		wordList = json.words;
		StartGame();
	});
});

$( window ).resize(function(){
	gameScreen.resize();
});



function SetFontSizesForWords(){
	$(".word").each(function(){
		SetFontSize($(this));
	});
}

function SetImageSizes(){
	$("[myclass=\"pic\"]").each(function(){
		//SetImageHeight($(this).children()[0], $(this));
	});
}

function SetWordDivHeight() {
	divH = $("#wordBox").height();

	$(".word").each(function () {
		$(this).height(10 * divH / 100);
		$(this).css("margin-top", 5 * divH / 100);
		$(this).css("margin-bottom", 5 * divH / 100);
	});
}

function SetPicDivHeight() {
	divH = $("#picBox").height();

	$(".pic").each(function () {
		$(this).height(20 * divH / 100);
		$(this).css("margin-top", 5 * divH / 100);
		$(this).css("margin-bottom", 10 * divH / 100);
	});
}


function AddDraggable() {
	$(".word").each(function () {
		$(this).draggable({
			start: function () {},
			drag: function () {IsOnImage($(this))},
			revert: function(){
				if(IsOnImage($(this)) && IsOnCorrectImage($(this)))
					return false;
				return true;
			},
			stop: function () {}
		});
	});
}

function RandomNumber(len) {
	random = Math.floor((Math.random() * len));
	if (randomedNumbers.indexOf(random) != -1)
		random = RandomNumber(len);
	return random;
}



