var maxNameImage = 5;
var minNameImage = 1;

var i = parseInt(Math.random()*(maxNameImage-minNameImage)+minNameImage);

function init(){

	cicle();

	var nextImg = document.getElementById('nextImg');
	nextImg.onclick = function(){
			i++;
			if (i > maxNameImage){
				i = minNameImage;	
			}
			cicle();
		}

	var preImg = document.getElementById('previousImg');
	preImg.onclick = function(){
			i--;
			if (i < minNameImage){
				i = maxNameImage;	
			}
			cicle();
		}
}

function cicle(){
	var img = document.getElementById('img');
	img.innerHTML = '';
	var image = document.getElementById('img');
	var newImage = document.createElement('img');
	var src = 'img/bigGallery/' + i + '.jpg'; 
	newImage.src = src;
	image.appendChild(newImage);	
}

window.onload=init;


