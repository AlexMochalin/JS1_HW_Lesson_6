
init();

function init(){
	var images = document.getElementsByTagName('img');
	for (var i = 0; i < images.length; i++){
		images[i].onclick = changeBigPicture;
	}
}

function changeBigPicture(eventObj){
	var appDiv = document.getElementById('big_picture');//получаем елемент #big_picture
	appDiv.innerHTML='';//очищаем div c id='big_picture'//очищаем #big_picture 
	var eventElement = eventObj.target // записываем элемент с маленькой картинкой у которого событие click
	var imageNameParts = eventElement.id.split('_');//парсим его id
	var src = 'img/bigGallery/' + imageNameParts[1] + '.jpg';//делаем ссылку к большому файлу
	var imageDomElement = document.createElement('img');//Создаем новый элемент с тегом img
	imageDomElement.src = src;//Добавляем свойство src
	appDiv.appendChild(imageDomElement);//Добавляем в big_picture ссылку
	imageDomElement.onerror=errorFunc;//приваиваем  функцию ошибки, на случай, если не будет найден файл с изображением
}

function errorFunc(){
	alert('Ошибка. Указанный автомобиль не найден!');
}

window.onload=init;


