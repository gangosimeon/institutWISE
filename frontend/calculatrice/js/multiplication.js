function multiplication() {
  let result=1;
  multi.onclick=function(){
    result*=Number(val);
    val='';
    display.innerHTML+="x";
    console.log(result);
  }


  sup.onclick = function(){
    result=1;
    val='';
    display.innerHTML = '';
  }
  
  
  
  egal.onclick=function () {
    result*=Number(val);
    val='1';
    display.innerHTML=result;
    console.log(result);
    result=0; 
  }
}