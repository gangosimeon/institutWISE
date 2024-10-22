
// Récupération des boutons
let display = document.getElementById("display");
display.value = "";
console.log(display.value);
let input=0;
function operationEffect(valeur) {
  display.value+= valeur;
  display.innerHTML=display.value
}
 
function effacer(){
  display.value = "";
  display.innerHTML= display.value;
}

function calculer(){
  try{
    display.value=eval(display.value);
  }
  catch(err){
    display.value="Erreur";
  }
  display.innerHTML= display.value;

}
