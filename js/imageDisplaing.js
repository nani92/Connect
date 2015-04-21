function RandomImages() {
	randomedNumbers = [];
	for (i = 0; i < 3; i++) {
		randomedNumbers.push(RandomNumber(5));
	}
}

function PutImagesIntoDivs() {
	for (i = 0; i < randomedNumbers.length; i++) {
		RemoveFromWordList(questionList[randomedNumbers[i]]);
		img = CreateImageTag(questionList[randomedNumbers[i]]);
		id = "pic" + (i + 1);
		div = document.getElementById(id);
		if(div.hasChildNodes)
			$(div).empty();
		div.appendChild(img);
	}
}

function RemoveFromWordList(word){
	wordList = wordList.filter(function(el){
		return el.word !== word.word;
	});
}

function CreateImageTag(word) {
	img = document.createElement('img');
	SetImageSize(img);
	img.id = word.word;
	img.src = word.imgPath;
	$(img).css("margin-top", 5);
	return img;
}

function SetImageSize(img) {
	img.onload = function () {
		div = img.parentNode;
		if (img.height > (div.clientHeight-10) ){
			SetImageHeight(img, div);
		}
		if (img.width > (div.clientWidth-10)) {
			SetImageWidth(img, div);
		}
	}
}


function SetImageHeight(img, div) {
	imgW = img.width;
	imgH = img.height;
	img.height = div.clientHeight-10;
	imgW = imgW / (imgH / (div.clientHeight-10));
	img.width = imgW;
}


function SetImageWidth(img, div) {
	imgW = img.width;
	imgH = img.height;
	img.width = div.clientWidth-10;
	imgH = imgH / (imgW / (div.clientWidth-10));
	img.height = imgH;
}