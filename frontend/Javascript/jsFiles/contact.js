let formContent = document.getElementById('formContent');
let fields= document.querySelectorAll("input[required], textarea[required]");
//Permet de reintialiser les champs automatiquement lorsqu'ils sont valide 
fields.forEach((field)=>{
  field.addEventListener('focus',()=>{resetField(field)},false);
  field.addEventListener('blur',()=>{validateField(field)},false);
});

formContent.addEventListener('submit',(e)=>{
  e.preventDefault();
  fields.forEach((field)=>{resetField(field)});
 let valid=true;

 fields.forEach((field)=>{
  console.log(field);
  if(!validateField(field)){
    valid=false;
  }
  });
  if (valid) {
    e.target.submit();
  }
},false);

function validateField(field) {
  if(field.checkValidity()){
    return true;
  }else{
    field.classList.add('invalid');
    field.previousElementSibling.insertAdjacentHTML('beforeend',`<span class="msg">${field.validationMessage}</sp`)
    return false;
  }
}


function resetField(field) {
  field.classList.remove('invalid');
  let labelField=field.previousElementSibling;
  while (labelField.firstElementChild) {
    labelField.removeChild(labelField.firstElementChild);
  }
  valid=true;
}