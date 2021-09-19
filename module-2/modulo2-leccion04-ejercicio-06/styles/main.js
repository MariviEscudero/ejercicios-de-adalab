"use.strict";

function getEl(selector) {
  const elemento = document.querySelector(selector);
  if(elemento){
   console.error('no existe ningun elemento con clase, id o tag llamado ' + selector);
  }else{
    return elemento;
  }
}
const parrafo = getEl('.js-parra');
parrafo.addEventListener('click', conslole.log(parrafo));

