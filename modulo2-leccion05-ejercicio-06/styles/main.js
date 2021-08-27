/*EJERCICIO 6
Información instantánea
Crear una página con un input de texto y un párrafo vacío. Cada vez que la usuaria escriba una letra tenemos que recoger el valor del input al que le pusimos el listener y escribirlo en el párrafo.
Nota: el objetivo es hacerlo utilizando event.currentTarget.*/

"use strict";
const input = document.querySelector('.input');
const parWrite = document.querySelector('.writeevent');


function writeEvent(event){
    const eventLog = event.currentTarget;
    parWrite.innerHTML = eventLog.value;
}
input.addEventListener('keyup',writeEvent);