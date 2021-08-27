"use strict";
const parWrite = document.querySelector(".paragr");
const button = document.querySelector(".button");
const nameInput = document.querySelector('.input_name');
const showText = () => (parWrite.innerHTML = 'Hola, '+ nameInput.value);
button.addEventListener("click", showText);
