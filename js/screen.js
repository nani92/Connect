gameScreen = (function(){

	function Init(){
		SetWrapperSize();
		SetHeader();
		SetPositionOfWordDivs();
		SetPositionOfPicDivs();
	}
	
	function Resize(){
		SetWrapperSize();
		SetHeader();
		SetPositionOfWordDivs();
		SetPositionOfPicDivs();
		SetPicDivHeight();
		SetWordDivHeight();
		ResizeFont();
		ResizePictures();
	}
	
	function ResizeFont(){
		$(".word").each(function(){
			SetFontSize($(this));
		});
	}
	
	function SetPositionOfWordDivs(){
		//for mobiles
		if($(window).height()> $(window).width()){
			console.log("yes");
			$(".word").each(function(){
				$(this).css("margin-left", 2/100*$(this).parent().height());
				$(this).css("width", 80/100*$(this).parent().width());
			});
		}
		else{
			$(".word").each(function(){
				$(this).css("margin-left", 20/100*$(this).parent().height());
				$(this).css("width", 50/100*$(this).parent().width());
			});
		}
	}
	
	function SetPositionOfPicDivs(){
		if($(window).height()> $(window).width()){
			$("[myclass=\"pic\"]").each(function(){
				$(this).css("margin-left", 2/100*$(this).parent().height());
				$(this).css("width", 90/100*$(this).parent().width());
			});
		}
		else{
			$("[myclass=\"pic\"]").each(function(){
				$(this).css("margin-left", 20/100*$(this).parent().height());
				$(this).css("width", 60/100*$(this).parent().width());
			});
		}
	}
	

	function SetWrapperSize(){
		$("#wrapper").height($(window).height());
		if($(window).height()> $(window).width())
			$("#wrapper").css("padding-top", 10/100 * $(window).height());
	}
	
	function SetHeader(){
		if($(window).height()> $(window).width())
			$("#header").css("top", 0);
	}
	
	function ResizePictures(){
		$("[myclass=\"pic\"]").each(function(){
			SetImgSize($(this).children()[0]);
		});
	}
	
	function SetImgSize(img){
		div = img.parentNode;
		if (img.height > (div.clientHeight-5) ){
			SetImageHeight(img, div);
		}
		if (img.width > (div.clientWidth-5)) {
			SetImageWidth(img, div);
		}
	}

	return{
		init: Init,
		resize: Resize
	};
})();