'use.strict';

function getEl(a) {
  return document.querySelector(a);
}


const btnEl = getEl(".number");
const number = parseInt(btnEl);

function pairodd(a) {
  return a % 2;
}
const valorResto = pairodd(number);
if (valorResto !== 0) {
  console.log("Impar");
} else {
  console.log("Par");
}
