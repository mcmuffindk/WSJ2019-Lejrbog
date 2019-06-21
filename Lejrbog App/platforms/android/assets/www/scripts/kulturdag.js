function languageChange(){
                var sel = document.getElementById("language")
                var opt = sel.options[sel.selectedIndex].value;
                if(opt == "Dansk"){
                    $("#games").load("games/danish.html");
                }else if(opt =="Fransk"){
                    $("#games").load("games/french.html");
                }else if(opt == "Spansk"){
                    $("#games").load("games/spanish.html");
                }else if(opt == "Engelsk"){
                    $("#games").load("games/english.html");
                }
            }