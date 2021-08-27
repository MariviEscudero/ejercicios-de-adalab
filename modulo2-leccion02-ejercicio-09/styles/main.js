"use strict";
/*Con todo lo aprendido hasta ahora vamos a hacer un programa que pinte en HTML lo siguiente: El nombre de mi compañera es Leticia Fernández Sánchez, y está compuesto por 23 caracteres, remplazando Leticia Fernández Sánchez por el nombre de nuestra compañera y 23 por la longitud de la cadena con su nombre.
Nota: tendremos que guardar el nombre de nuestra compañera en una constante para poder trabajar con él.*/
const nameLog = 'Leticia Fernandez Sanchez';
const element = document.querySelector('.divelement');
const nameLenght = nameLog.length;
element.innerHTML = `<p>El nombre de mi compañera es ${nameLog} y esta compuesto por ${nameLenght} caracteres.</p>`
