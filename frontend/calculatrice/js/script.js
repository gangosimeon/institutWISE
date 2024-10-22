let un=document.getElementById("1");
let deux=document.getElementById("2");
let trois=document.getElementById("3");
let quatre=document.getElementById("4");
let cinq = document.getElementById("5");
let six=document.getElementById("6");
let sept=document.getElementById("7");
let huit=document.getElementById("8");
let neuf=document.getElementById("9");
let zero=document.getElementById("0");
let point=document.getElementById(".");
let plus=document.getElementById("addition");
let moins=document.getElementById("soustraction");
let division=document.getElementById("/");
let multi=document.getElementById("multiplication");
let sup=document.getElementById("sup");
let ce=document.getElementById("CE");
let c=document.getElementById("C");
let egal=document.getElementById("egal")

let val = 0;
let result=0;
let vale='';
let display = document.getElementById("display");

un.onclick = function(){
  val+="1";
  display.innerHTML +=1;
  console.log(val+e);
}

deux.onclick = function(){
  val+="2";
  display.innerHTML +=2;
}

trois.onclick = function(){
  val+="3";
  display.innerHTML +=3;
}

quatre.onclick = function(){
  val+="4";
  display.innerHTML +=4;
} 

cinq.onclick = function(){
  val+="5";
  display.innerHTML +=5;
}

six.onclick = function(){
  val+="6";
  display.innerHTML +=6;
}

sept.onclick = function(){
  val+="7";
  display.innerHTML +=7; 
}

huit.onclick = function(){
  val+="8";
  display.innerHTML +=8;
}

neuf.onclick =function(){
  val+="9";
  console.log(`${typeof(val)} ${val}`);
  display.innerHTML +=9;
}

// plus.onclick=function(){
//   result+=Number(val);
//   val=0;
//   display.innerHTML+="+";
//   console.log(result);
// }

// Fonctions pour les calculs 

// multiplication();
// addition();
soustraction();


// sup.onclick = function(){
//   result=1;
//   val='';
//   display.innerHTML = '';
// }



// egal.onclick=function () {
//   result*=Number(val);
//   val='1';
//   display.innerHTML=result;
//   console.log(result);
//   result=0; 
// }
