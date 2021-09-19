'use strict';

//elementos de HTML
const bodyColor = document.querySelector('.container');
const faceWrite = document.querySelector('.smilyface');
const button = document.querySelector('.update');
const face = document.querySelector('.face');

//funcion para cambio de cara
function faceChange() {
  if (face.value === ':)') {
    faceWrite.innerHTML = face.value;
  } else if (face.value === ':(') {
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


//cambio de bgc con numero random par o impar, no poner parseInt porque el resultado de getRandomNumber ya es un numero, no es un string

function bcgColor() {
  
  if (getRandomNumber() % 2 !== 0) {
    bodyColor.classList.add('bodyorange');
    bodyColor.classList.remove('bodyyellow');
  } else bodyColor.classList.remove('bodyorange');
  bodyColor.classList.add('bodyyellow');
}

// listener sobre el elemento, con tipo de evento y handler
//una funcion que engloba a las anteriores para poner un solo listener, si no, que esta comentado mas abajo, habria que poner 2 listeners para el mismo elemento, uno para cada funcion por separado

function handleUpdateBtn(){
  bcgColor();
  faceChange();
}

button.addEventListener('click', handleUpdateBtn);
//button.addEventListener('click', faceChange);
//button.addEventListener('click', bcgColor);
