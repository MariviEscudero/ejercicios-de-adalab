"use strict";
/*Vamos a duplicar el ejercicio 5 y a modificarlo. En este caso en vez de tener nuestra edad en una constante dentro del fichero de JavaScript, debemos crear un párrafo en el fichero HTML, escribir en él nuestra edad. Desde JavaScript debemos leer la edad para calcular el número de horas que hemos vivido.*/

const years = document.querySelector(".years");
const daysYear = 365;
const hoursDay = 24;
const hoursOfLife = parseInt(years.innerHTML) * daysYear * hoursDay;
console.log(`Ha vivido ${hoursOfLife} horas`);
