var i = 1;
//init();

//function init(){
	//var nextImg = document.getElementByIdName('nextImg');
	//nextImg.onclick = nextImgFunc;
//}

function init(){
var nextImg = document.getElementById('nextImg');
nextImg.onclick = function(){
	var image = document.getElementById('img');
	var newImage = document.createElement('img');
	var src = 'img/bigGallery/' + i + '.jpg'; 
	//newImage.innerHTML = imagesArray[i];
	newImage.src = ' ';
	image.appendChild(newImage);
	newImage.src = src;
	image.appendChild(newImage);
	i++;

	}
}





window.onload=init;


