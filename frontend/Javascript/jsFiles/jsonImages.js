let pageContent= document.getElementById('pageContent');
let pictInfo=document.getElementById('pictInfo');
let imagesJson=[
  {
    "format": "jpeg",
    "width": 5616,
    "height": 3744,
    "filename": "0000_yC-Yzbqy7PY.jpeg",
    "author": "Alejandro Escamilla",
  },
  {
    "format": "jpg",
    "width": 5616,
    "height": 3744,
    "filename": "1f83ae2d5a3e0173d19983a03bda228.jpg",
    "author": "Alejandro Escamilla",
  },
  {
    "format": "jpg",
    "width": 5616,
    "height": 3744,
    "filename": "1f83ae2d5a3e0173d19983a03bda22.jpg",
    "author": "Gango Simeon",
  },
  {
    "format": "jpg",
    "width": 5616,
    "height": 3744,
    "filename": "1f83ae2d5a3e0173d19983a03bda2.jpg",
    "author": "Gango Simeon",
  },
  {
    "format": "jpg",
    "width": 5616,
    "height": 3744,
    "filename": "1f83ae2d5a3e0173d19983a03bda.jpg",
    "author": "Guigma Paulin",
  },
  {
    "format": "gif",
    "width": 5616,
    "height": 3744,
    "filename": "1f83ae2d5a3e0173d19983a03bda2288.gif",
    "author": "Guigma Paulin",
  },
  {
    "format": "jpeg",
    "width": 5616,
    "height": 3744,
    "filename": "0011_Cm7oKel-X2Q.jpeg",
    "author": "Ouedraogo Aime",
  },
  {
    "format": "jpeg",
    "width": 5616,
    "height": 3744,
    "filename": "0012_I_9ILwtsl_k.jpeg",
    "author": "Ouedraogo Aime",
  },
  {
    "format": "jpeg",
    "width": 5616,
    "height": 3744,
    "filename": "0014_IQ1kOQTJrOQ.jpeg",
    "author": "Ouedraogo Aime",
  },
  {
    "format": "jpeg",
    "width": 5616,
    "height": 3744,
    "filename": "0020_nJdwUHmaY8A.jpeg",
    "author": "Gango Simeon",
  },
  {
    "format": "jpg",
    "width": 5616,
    "height": 3744,
    "filename": "soi.jpg",
    "author": "Gango Simeon",
  },
  {
    "format": "png",
    "width": 5616,
    "height": 3744,
    "filename": "2.png",
    "author": "Gango Simeon",
  }
];
//Choisir l'image
let randomImage=imagesJson[Math.floor(Math.random()*imagesJson.length)];
//Mettre l4image dans le background de pageContent
pageContent.style.backgroundImage=`url(/images/${randomImage.filename})`;
console.log(pictInfo);
if (pictInfo) {
  let pictAuthor=document.createElement('h2');
  let pictAuthorContent=document.createTextNode(randomImage.author);
  pictAuthor.appendChild(pictAuthorContent);
  pictInfo.appendChild(pictAuthor)
  console.log(pictInfo.firstChild);
}
