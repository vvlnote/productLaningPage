var cOrder = 0;
var fOrder = 0;
var iOrder = 0;
var orderText = "";

function orderCaliforniaRoll(){
	var elem = document.getElementById("orderDetail");
	var cOrder = document.getElementsByName('cOrder')[0].value;

	orderText = (`${orderText}
		California Roll: ${cOrder} orders`); 
	document.getElementsByName("subject")[0].value = orderText;
}

function orderInar(){
	iOrder = document.getElementsByName('iOrder')[0].value;
	orderText = (`${orderText}
		Inarizushi: ${iOrder} orders`);
	document.getElementsByName("subject")[0].value = orderText;
}

function orderFutomaki(){
	fOrder = document.getElementsByName('fOrder')[0].value;
	orderText = (`${orderText}
		Futomaki: ${fOrder} orders`);
	document.getElementsByName("subject")[0].value = orderText;
}