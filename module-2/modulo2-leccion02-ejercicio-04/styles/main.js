"use strict";
const cenaPrecio = 128;
const cenaPersonas = 9;
const cenaAna = 2;
const precioPersona = cenaPrecio / cenaPersonas;
console.log(`Cada persona tiene que pagar ${precioPersona} euros`);
const precioAna = precioPersona + cenaAna;
console.log(`Ana tiene que pagar ${precioAna} euros`);
