"use.strict";

function getEl() {
  if(getEl===true){
    return document.querySelector();
  }else{
    console.error(`No existe ningun elemento con clase, id o tag llamado ${getEl()}`);
  }
}
const btnEl = getEl(".btn");
console.log(btnEl)

