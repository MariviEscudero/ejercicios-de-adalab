/*El primer año de un perro equivale a
    15 años de humano El segundo año de un perro equivale a nueve años de
    humano A partir del tercero, cada año de perro equivale a 5 años de
    humano.*/
"use strict";
let dogAge = 3.5;
console.log(`La edad perrete es: ${dogAge}`);

if (dogAge <= 1) {
  console.log('La edad humana es: '+ (15 * dogAge));
} else if (dogAge > 1 && dogAge <= 2) {
  console.log('La edad humana es: '+ (15 + 9 * (dogAge - 1)));
} else {
  console.log('La edad humana es: '+ (15 + 9 + 5 * (dogAge - 2)));
}
