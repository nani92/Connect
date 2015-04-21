function RandomImages() {
	randomedNumbers = [];
	for (droppedOnImage = 0; droppedOnImage < 3; droppedOnImage++) {
		randomedNumbers.push(RandomNumber(5));
	}
}

function PutImagesIntoDivs() {
	for (droppedOnImage = 0; droppedOnImage < randomedNumbers.length; droppedOnImage++) {
		img = CreateImageTag(wordList[randomedNumbers[droppedOnImage]]);
		id = "pic" + (droppedOnImage + 1);
		div = document.getElementById(id);
		div.appendChild(img);
	}
}

function CreateImageTag(word) {
	img = document.createElement('img');
	SetImageSize(img);
	img.id = word.word;
	img.src = word.imgPath;
	return img;
}

function SetImageSize(img) {
	img.onload = function () {
		div = img.parentNode;
		if (img.height > div.clientHeight) {
			SetImageHeight(img, div);
		}
		if (img.width > div.clientWidth) {
			SetImageWidth(img, div);
		}
	}
}

function SetImageHeight(img, div) {
	imgW = img.width;
	imgH = img.height;
	img.height = div.clientHeight;
	imgW = imgW / (imgH / div.clientHeight);
	img.width = imgW;
}


function SetImageWidth(img, div) {
	imgW = img.width;
	imgH = img.height;
	img.width = div.clientWidth;
	imgH = imgH / (imgW / div.clientWidth);
	img.height = imgH;
}