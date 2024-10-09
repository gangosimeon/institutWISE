/**
 * @subject #1 (alphabet-sum) - Votre programme doit imprimer la somme totale de la position alphabetique (index basE sur zero) de tous les caracteres de la chaine donnEe "n"
 * @exemple n = "HELLO WORLD !" | result -> 114 | n = "AAAA =-" | result -> 0
 * @feat - indexOf() | map()
 */

//Proposition 1

// function alphabetSum(n) {
//   let alphabetList=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
//   let nouveauN=n.toLowerCase();
//   let nArray=nouveauN.split('');
//   let result=0
//   for (let index = 0; index < nArray.length; index++) {
//     if (alphabetList.indexOf(nArray[index])>=0) {
//       result=result+alphabetList.indexOf(nArray[index])
//     }
//   }
//   console.log(`result -> ${result}`);
// }
// alphabetSum("AAAAAAAAAAAAAA !")
//Proposition 2

function alphabetSum(n) {
  const alphabetList=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let nouveauN=n.toLowerCase();
  let nArray=nouveauN.split('');
  let result=0
  let nouveauArryN= nArray.map(x=>alphabetList.indexOf(x));
  nouveauArryN.forEach(element => {
    if(element>=0){
      result+=element
    }
  });
  console.log(`result -> ${result}`);
}
alphabetSum("AAAAAAAAAAAAAA !")

// ========================================

/**
 * @subject #2 (bin-inverse) - Le but est de retourner tous les bits d'un nombre. N'inversez pas les zéros non significatifs.
 * @exemple -  n = 9, en binaire 1001, si on inverse tout les bits on obtient 0110 | result -> 6 (en decimal)
 * @feat - toString() | join() | parseInt() | map()
 */
function binInverse(nombre) {
  let bin=(nombre.toString(2)).split('')
  // let biN=[...nombre.toString(2)]
  let binArray=bin.map(x=>{

    if (x==="1") {
      return 0;
    } else {
      return 1;
    }
  })
  let nouveauBin=Number(binArray.join(''))
  let result=parseInt(nouveauBin,2)
  console.log(` result -> ${result}`);
}

binInverse(0)


// ========================================

/**
 * @subject #3 (dentist) - On vous donne un patient, chaque patient a un nombre unique de dents. Chaque dent est doit saine 1, porri 0 ou tirE -, retirez toutes les dents pourries que vous trouvez
 * @exemple
 * input:
 ----01---1----0
 ----0111-00---0
 * output:
 -----1---1-----
 -----111-------
 * @feat - replaceAll() | map() | forEach()
 */
 function enleverDent(d){
  let nouveauDents= d.replaceAll("0","-")
  console.log(nouveauDents); 
}
enleverDent('----01---1----0')
//Travail revu
function enleveDent(){
  const d=["----01---1----0","----0111-00---0"]
  let nouveauDents= d.map(x=>x.replaceAll("0","-"))
  nouveauDents.forEach(element=>console.log(element))
}

enleveDent()
// =========================================

/**
 * @subject #4 (flight) - Un vol devait arriver a une heure particuliere et on estime maintenant qu'il arrivera a une autre heure. Ecrire une fonction qui revoie le statut du vol: "EARLY", "DELAYED" ou "ON TIME"
 * @exemple - t = "22:13:55", t2 = "22:12:23" | result -> "EARLY"
 * @feat - split() | join()
 */
function arrivee(t2){
  const t= "22:13:55"
  let nt=Number((t.split(':')).join(''))
  let nt2=Number((t2.split(':')).join(''))
  if(nt2<nt){
    console.log("EARLY")
  }else if(nt2===nt){
    console.log("ON TIME")
  }else{
    console.log("DELAYED")
  }
}
arrivee("22:12:23")


//Travail revu 
function arrivee(t,t2){

  const regEx=/([0-2][0-3]:[0-6][0-9]:[0-6][0-9])/g;

  if (t.match(regEx) && t2.match(regEx)) {
    
    const [heure1,minute1,seconde1] = t.split(':').map(Number)
    const [heure2,minute2,seconde2]=t2.split(':').map(Number)
  
    const total1=heure1*3600+minute1*60+seconde1
    const total2=heure2*3600+minute2*60+seconde2
  
    return total1>total2 ? "EARLY" : total1===total2 ? "ON TIME" : "DELAYED"

  } else {
    return `${t} ou ${t2} est incorrect !`
  }

}
const t= "22:13:55"
const t2="22:13:55"
console.log(arrivee(t,t2))

