            var fileNames = ["allegodegaver", "alleskalsynge", "bakkened", "baronogbaronesse", "bpspirit", "brevfraenjuniorspejder","countryroads", "dansensherre", "dansknational", "einsogaarastreymur", "faeroesknational", "hvalenhvalborg", "idanmarkerjeg", "iliketheflowers", "ingentingdermaner", "javierdanskespejdere","jomereviersammen", "lejrbaallejrbaal","letitbe","livstraeet","lyseblaabananer","manersommaner","menneskedinegenmagt","mitskoennesteland","nogleharmad","nuerdettiden","nuflyvermoerketsfugle","papirklip","saalaengesomkartofler","sensommervisen","sjatublanar","skotasangurin","takgud","thewildrover","vajhøjtvajstolt","vortdannebrog","wonderwall"];
            var songNames = ["Alle gode gaver", "Alle skal synge", "Bakke ned og bakke op", "Baron og baronesse", "BP spirit", "Brev fra en juniorspejder", "Take Me Home, Country Roads", "Dansens herre", "Der er et yndigt land", "Eins og áarastreymur rennur" , "Tú alfagra land mítt", "Hvalen hvalborg", "I Danmark er jeg født", "I like the flowers", "Ingenting der maner", "Ja vi er danske spejdere", "Jo mere vi er sammen", "Lejrbål lejrbål", "Let it be", "Livstræet", "Lyseblå bananer","Man er som man er", "Menneske din egen magt", "Mit Skønneste Land", "Nogle har mad", "Nu er det tiden, flaget skal op!", "Nu flyver mørkets fugle ud", "Papirklip","Så længe som kartofler", "Sensommervisen", "Sjá tú blána", "Skótasangurin", "Tak gud", "The wild rover","Vaj højt vaj stolt", "Vort dannebrog", "Wonderwall"];
            function searchSong(){
                $('#searched').empty();
                var term = document.getElementById("query").value;
                var searchedFiles = [];
                var searchedNames = [];
                for(var i = 0; i < fileNames.length; i++){
                    if(songNames[i].toLowerCase().includes(term.toLowerCase())){
                        searchedFiles.push(fileNames[i]);
                        searchedNames.push(songNames[i]);
                    }
                }
                if(term.length != 0){
                    //document.getElementById("categories").style.visibility = "collapse";
                    $('#categories').hide();
                    for(var i = 0; i < searchedNames.length; i++){
                        var path = "sange/sange/" + searchedFiles[i] + ".html";
                        var a = document.getElementById("sangElement").cloneNode(true);
                        a.innerHTML = "<h3>" + searchedNames[i] + "</h3";
                        a.href = path;
                        a.style.visibility = "visible";
                        $('#searched').append(a);
                    }
                }else{
                    $('#categories').show();
                    $('#searched').empty();
                }
            }