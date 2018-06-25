var unitPriceTotal = 0;
init();

function init(){
	var buttons = document.getElementsByTagName('button');
	for (var i = 0; i < buttons.length; i++){
		buttons[i].onclick = fillChart;
	}
}

function fillChart(eventObj){
	var chartUnitName = document.getElementById('chart_1');
	var eventElement = eventObj.target; 
	var goodIdArray = eventElement.id.split('_');
	var unitIdName = 'unit_' + goodIdArray[1] + '_name';
	var unitName = document.getElementById(unitIdName);
	var newElementName = document.createElement('div');
	newElementName.innerText = unitName.innerText;
	chartUnitName.appendChild(newElementName);
	
	var chartUnitPrice = document.getElementById('chart_2');
	var unitIdPrice = 'unit_' + goodIdArray[1] + '_price';
	var unitPrice = document.getElementById(unitIdPrice);
	var newElementPrice = document.createElement('div');
	newElementPrice.innerText = unitPrice.innerText;
	chartUnitPrice.appendChild(newElementPrice);
	var unitPriceNumber = parseInt(unitPrice.innerText);
	unitPriceTotal = unitPriceTotal + unitPriceNumber;
	
	var chartTotal = document.getElementById('chart_3');
	var total = document.createElement('div');
	total.innerText = unitPriceTotal;
	chartTotal.innerText = '';
	chartTotal.appendChild(total);
	
	
	
	
}

//alert(unitPriceTotal);


window.onload=init;


