/*El primer año de un perro equivale a
    15 años de humano El segundo año de un perro equivale a nueve años de
    humano A partir del tercero, cada año de perro equivale a 5 años de
    humano.*/
"use strict";
let dogAge = 3.5;

if (dogAge <= 1) {
  console.log(15 * dogAge);
} else if (dogAge > 1 && dogAge <= 2) {
  console.log(15 + 9 * (dogAge - 1));
} else {
  console.log(15 + 9 + 5 * (dogAge - 2));
}
