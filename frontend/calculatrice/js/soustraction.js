function soustraction() {
  moins.onclick=function(){
    
    display.innerHTML+="-";
    console.log(result);
  }

  sup.onclick = function(){
    result=0;
    val='';
    display.innerHTML = '';
  }
  
  egal.onclick=function () {
    result-=Number(val);
    val='';
    display.innerHTML=result;
    console.log(result);
    result=0; 
  }
}

