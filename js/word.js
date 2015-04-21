function RandomWordsIndexes(len) {
	randomedNumbers=[];
	for (i = 0; i < 5; i++) {
		randomedNumbers.push(RandomNumber(len));
	}
}

function WriteWords() {
	for (i = 0; i < questionList.length; i++) {
		console.log("write words" + i );
		id = "word" + (i + 1);
		div = document.getElementById(id);
		div.innerHTML = questionList[i].word;
		SetFontSize($("#" + id));
	}
}

function SetFontSize(wordDiv){
	$(wordDiv).css("font-size", wordDiv.height() - 10 + "px");
}