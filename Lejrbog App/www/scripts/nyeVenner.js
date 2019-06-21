var stuff = [];

function start(){
    if(localStorage.getItem("data") != null){
        stuff = JSON.parse(localStorage.getItem("data"));
        for(var i = 0; i < stuff.length; i++){
            appendRow(stuff[i].name,stuff[i].email,stuff[i].number);
        }
    }
}

function addNew(){
    var name = prompt("Navn?");
    var email = prompt("E-mail?");
    var number = prompt("Nummer?");
    appendRow(name, email, number);
    stuff.push({"name": name, "email": email, "number": number});
    localStorage.setItem("data", JSON.stringify(stuff));
}

function appendRow(name1, email1, number1){
    var x=document.getElementById('venner').insertRow(this.length-1);
    var y = x.insertCell(0);
    var z = x.insertCell(1);
    var w = x.insertCell(2);
    var q = x.insertCell(3);
    q.style.width = '1em';
    q.id = document.getElementById('venner').rows.length-1;
    y.innerHTML=name1;
    z.innerHTML=email1;
    w.innerHTML=number1;
    q.innerHTML="X";
    q.width="1px";
    q.addEventListener("click", function(){del(this)}); 
}

function del(id){
    var index = id.parentNode.rowIndex;
    console.log(stuff);
    console.log(index);
    if(confirm("Er du sikker på at du vil slette " + stuff[index-2].name + "?")){
        if(confirm("Er du helt sikker? Det kan ikke blive gjort om")){
            document.getElementById('venner').deleteRow(index);   
            stuff.splice(index-2,1);
            localStorage.setItem("data", JSON.stringify(stuff));
        }
    }
}