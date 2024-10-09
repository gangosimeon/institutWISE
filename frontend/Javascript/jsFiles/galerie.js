let getImages=document.querySelectorAll('#galerie img');
console.log(getImages);
for(i=0;i<getImages.length;i++){
  let image=getImages[i];
  image.addEventListener('click',showImage,false);
}

function showImage(e) {
  let image=e.target
  let imageContainer=document.getElementById('imageContainer');
  let bigImage=imageContainer.querySelector('img');
  bigImage.src=image.src;
  imageContainer.classList.toggle('visible')
  imageContainer.addEventListener('click',closeImage,false);
}

function closeImage(e) {
  let imageContainer=document.getElementById('imageContainer');
  imageContainer.classList.toggle('visible');
}