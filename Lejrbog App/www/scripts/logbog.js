function onLoad() {
	dataText = JSON.parse(localStorage.getItem("dataText"));
    
	for (var i = 0; i < 11; i++) {
		var dag = document.getElementById("dag0").cloneNode(true);
		dag.children[0].innerHTML = "Dag " + (i + 2);
		dag.id = "dag" + (i + 1);
		document.getElementById("main").appendChild(dag);
        if(i == 2){
            var ele = document.createElement("h2");
            var text = document.createTextNode("Lejren");
            ele.appendChild(text);
            document.getElementById("main").appendChild(ele);
        }
	}

	if (dataText != null) {
		var dag = document.getElementById("dag0").cloneNode(true);
		dag.childNodes[3].value = dataText[0];
		for (var i = 0; i < 12; i++) {
			document.getElementById("dag" + i).childNodes[3].value = dataText[i];

		}
	}
/*
	if (dataNums != null) {
		var dag = document.getElementById("dag0").cloneNode(true);
		dag.childNodes[3].value = dataNums[0];
		for (var i = 0; i < 12; i++) {
			document.getElementById("dag" + i).childNodes[3].value = dataNums[i];

		}
	}*/

}

function saveReflection() {
	var dataText = [];
    for (var i = 0; i < 12; i++) {
		dataText[i] = document.getElementById("dag" + i).childNodes[3].value;
	}
	localStorage.setItem("dataText", JSON.stringify(dataText));
}

function saveScore() {
	var dataNums = [];
	for (var i = 0; i < 12; i++) {
		dataNums[i] = document.getElementById("dag" + i).childNodes[3].value;
	}
	localStorage.setItem("dataNums", JSON.stringify(dataNums));
}

$(onLoad);