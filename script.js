//Creer une fonction qui fera le travail apres avoir recu la reponse du serveur
function Requete(){

    let req = new XMLHttpRequest()
   
    //verifier l'etat de requete
    if(!req){//si la requête a échoué
        alert('Abandon:(Imossible de creer une instance XMLHTTP')
        return false;
    }

    req.onreadystatechange = function() {alertContents(req);}
     //Lancer la requete avec la methode GET
     req.open('GET', ' https://thatsthespir.it/api');
     //envoi la requete
     req.send();

    //Si la reponse est correct on lance la fonction alertContents
    function alertContents(req){
        if(req.readyState==XMLHttpRequest.DONE){
            if(req.status == 200){
                //variable pour recolter les donnee json
                let response = JSON.parse(req.responseText)
                document.getElementById("quote").innerHTML = response["quote"];
                document.getElementById("photo").innerHTML = `<img class="tof" src = ${response["photo"]}/>`;
                document.getElementById("auteur").innerHTML = response["author"];
            }
            else{
                alert("Il y a un problème")
            }
        }
    }
}




