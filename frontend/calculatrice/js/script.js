
// Récupération des boutons
let display = document.getElementById("display");
let operation = document.getElementById("operation");
display.value = ""; 
// console.log(display.value=null);
let input=0;
function operationEffect(valeur) {
  if(display.value=="Erreur"){
    display.value="";
  }else{
    display.value+= valeur;
    display.innerHTML=display.value
    operation.innerHTML="";
  }
}


function sup() {
  let element = "";
  let val=display.value;
  let array= (val.toString()).split('');
  array.pop();
  console.log(val);
  for (let index = 0; index < array.length; index++) {
   element += array[index];
   display.innerHTML=element
  }
  display.value=element;
  display.innerHTML=display.value
} 

function effacer(){
  display.value = "";
  operation.value = "";
  operation.innerHTML= operation.value;
  display.innerHTML= display.value;
}
function effacerCE(){
  let element = "";
  let val=display.value;
  let array= (val.toString()).split('');
  array.pop();
  console.log(val);
  for (let index = 0; index < array.length; index++) {
   element += array[index];
   display.innerHTML=element
  }
  display.value=element;
  operation.innerHTML= display.value;
  display.innerHTML="";
  console.log(display.value);
}
function calculer(){
  let result;
  try{
    result=eval(display.value);
    if(isNaN(result)){
      result="Erreur";
      operation.value="";
    }
    operation.value= display.value;
  }
  catch(err){
    result="Erreur";
    operation.value="";
  }
  display.value=result;
  display.innerHTML= result;
  operation.value= operation.value+"=";
  operation.innerHTML= operation.value;
  
  

  console.log(display.value);
}
