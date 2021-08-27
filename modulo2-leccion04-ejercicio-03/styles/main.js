"use strict";
function iva(a) {
  return a * 1.21;
}
function resto(b) {
  return b * 0.21;
}
const valorIva = iva(10);
const valorResto = resto(10);
console.log("precio sin IVA:", 10, "IVA:", valorResto, "TOTAL:", valorIva);
