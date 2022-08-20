/*$(document).ready(function() {
	$(".gallery").magnificPopup({
		delegate: "a",
		type: "image",
		tLoading: "Loading image #%curr%...",
		mainClass: "mfp-img-mobile",
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
		}
	});
});
*/

function myFunction(){
	console.log("Page loaded");
	var dir = "../imgtest";
	//var dir = "https://drive.google.com/drive/folders/1eVqv9Yt16M2Aal9kHaq-TBs9_RbmqA2h";
	var fileextension = ".jpg";
	let imageArray = [];
	$.ajax({
	    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
	    url: dir,
	    credentials:true, 
	    success: function (data) {
	        //List all .png file names in the page
	        $(data).find("a:contains(" + fileextension + ")").each(function () {
	            var filename = this.href.replace(window.location.host, "").replace("http://", "");
	            console.log(dir + filename,"filename");
	            let imgPath = dir + filename;
	            imageArray.push(imgPath);
	            console.log(imageArray,"imageArray");
	            localStorage.setItem('imageArray',JSON.stringify(imageArray));
	            $('#imgBulk').append(
	            	$('<div/>')
	            	.attr("id", "newDiv1")
    				.addClass("col-lg-3 col-md-4 col-xs-6 thumb")
    				.append("<span/>")
      				//.text("hello world")
      				.append("<img src='" + dir + filename + "'>")
	            	);
	            //$("body").append("<img src='" + dir + filename + "'>");
	        });
	    }
	});
}

function slider(){
	console.log("slider is clicked");
	document.getElementById("carouselExampleControls").style.display = 'block';
	let carouselImg = document.getElementById("carouselImg");
	let getImg = JSON.parse(localStorage.getItem('imageArray'));
	console.log(getImg,"getImg");
	for (var i = 0; i < getImg.length; i++) {
		var caroActive = document.createElement('div');
		caroActive.className = 'carousel-item';
		var caroSlide = document.createElement('div');
		caroSlide.className = 'col-md-3 slide_item';
		var caroCard = document.createElement('div');
		caroCard.className = 'card mb-2';
		var img = document.createElement('img');
		img.src = getImg[i];
		console.log(img.src,"img.src");
		caroCard.appendChild(img);
		caroSlide.appendChild(caroCard);
		caroActive.appendChild(caroSlide);
		carouselImg.append(caroActive);
	}
}