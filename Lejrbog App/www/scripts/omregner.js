var rate = 0;
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		var myObj = JSON.parse(this.responseText);
		rate = myObj.dataset.data[0][1];
	}
};
xmlhttp.open("GET", "https://www.quandl.com/api/v3/datasets/BOE/XUDLDKD.json", true);
xmlhttp.send();

function convert(inputEle) {
	var input = inputEle.value.replace(",", ".");
	if (inputEle.id == "USD") {
		convertWrite(document.getElementById("DKK"), input, rate, true);
	}
	if (inputEle.id == "DKK") {
		convertWrite(document.getElementById("USD"), input, rate, false);
	}
	if (inputEle.id == "yard") {
		convertWrite(document.getElementById("meter"), input, 0.9144, true);
	}
	if (inputEle.id == "meter") {
		convertWrite(document.getElementById("yard"), input, 0.9144, true);
	}
	if (inputEle.id == "mile") {
		convertWrite(document.getElementById("km"), input, 1.6093, true);
	}
	if (inputEle.id == "km") {
		convertWrite(document.getElementById("mile"), input, 1.6093, false);
	}
	if (inputEle.id == "inch") {
		convertWrite(document.getElementById("centimeter"), input, 2.56, true);
	}
	if (inputEle.id == "centimeter") {
		convertWrite(document.getElementById("inch"), input, 2.56, false);
	}
	if (inputEle.id == "tipInput") {
		if (input == "") {
			document.getElementById("tip").innerHTML = "";
		} else {
			document.getElementById("tip").innerHTML = "Det vil være god stil at betale mellem <span class=\"bold\">" + ((input * 0.1).toFixed(2)).replace(".", ",") + "$</span> og <span class=\"bold\">" + ((input * 0.15).toFixed(2)).replace(".", ",") + "$</span> i drikkepenge. Hvis i er på restaurent, vil det derimod være <span class=\"bold\">" + ((input * 0.25).toFixed(2)).replace(".", ",") + "$</span>";
		}
	}
	if (inputEle.id == "ounce") {
		convertWrite(document.getElementById("gram"), input, 28.35, true);
	}
	if (inputEle.id == "gram") {
		convertWrite(document.getElementById("ounce"), input, 28.35, false);
	}
	if (inputEle.id == "flounce") {
		convertWrite(document.getElementById("ml"), input, 29.5735, true);
	}
	if (inputEle.id == "ml") {
		convertWrite(document.getElementById("flounce"), input, 29.5735, false);
	}
}

function convertWrite(element, input, rate, multiply) {
	if (input == "") {
		element.value = "";
	} else if (multiply) {
		element.value = ((input * rate).toFixed(2)).replace(",", ".");
	} else if (!multiply) {
		element.value = ((input / rate).toFixed(2)).replace(",", ".");
	}
}
