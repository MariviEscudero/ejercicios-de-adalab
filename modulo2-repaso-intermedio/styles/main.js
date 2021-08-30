"use strict";

//elementos de HTML
const bodyColor = document.querySelector('.body');
const faceWrite = document.querySelector('.smilyface');
const button = document.querySelector('.update');
const face = document.querySelector('.face');
const faceSmile = document.querySelector('.smile');
const faceAngry = document.querySelector('.angry');

//funcion para cambio de cara
function faceChange() {
  if(face.value === ':)'){
    faceWrite.innerHTML = face.value;
  }else if(face.value === ':('){
    faceWrite.innerHTML = face.value;
  }
}

//funciones para color de background
//numero random entre 0 y 100 incluidos

function getRandomNumber(min, max) {
  min = Math.ceil(0);
  max = Math.floor(100);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//cambio de bgc con numero random par o impar

function bcgColor(){
  if(parseInt(getRandomNumber())%2 !==0){
    bodyColor.classList.add('bodyorange');
    bodyColor.classList.remove('bodyyellow')
  }else 
   bodyColor.classList.remove('bodyorange');
   bodyColor.classList.add('bodyyellow')
}

// listener sobre el elemento, con tipo de evento y handler
button.addEventListener('click', faceChange);
button.addEventListener('click', bcgColor);


