function onLoad() {
	dataText = JSON.parse(localStorage.getItem("dataText"));
	dataNums = JSON.parse(localStorage.getItem("dataNums"));

	for (var i = 0; i < 11; i++) {
		var dag = document.getElementById("dag0").cloneNode(true);
		dag.children[0].innerHTML = "Dag " + (i + 2);
		dag.id = "dag" + (i + 1);
		document.getElementById("main").appendChild(dag);
	}

	if (dataText != null) {
		var dag = document.getElementById("dag0").cloneNode(true);
		dag.childNodes[5].value = dataText[0];
		for (var i = 0; i < 12; i++) {
			document.getElementById("dag" + i).childNodes[5].value = dataText[i];

		}
	}

	if (dataNums != null) {
		var dag = document.getElementById("dag0").cloneNode(true);
		dag.childNodes[3].value = dataNums[0];
		for (var i = 0; i < 12; i++) {
			document.getElementById("dag" + i).childNodes[3].value = dataNums[i];

		}
	}

}

function saveReflection() {
	var dataText = [];
	for (var i = 0; i < 12; i++) {
		dataText[i] = document.getElementById("dag" + i).childNodes[5].value;
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