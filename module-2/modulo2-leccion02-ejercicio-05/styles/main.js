"use strict";
/*Calcular el número total de horas que hemos vivido
En este caso vamos a crear un código que nos diga cuántas horas en total hemos vivido. Por ejemplo, si alguien tiene 60 años, este código debería mostrar un mensaje con el número 525600.*/
const years = 43;
const daysYear = 365;
const hoursDay = 24;
const hoursOfLife = years * daysYear * hoursDay;
console.log(`Ha vivido ${hoursOfLife} horas`);
