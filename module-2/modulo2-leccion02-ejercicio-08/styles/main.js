"use strict";
/*El objetivo de este ejercicio es pintar tres elementos dentro de una lista. Cada uno de ellos contendrá una imagen. Las imágenes y textos los obtendremos a partir de los siguientes datos:*/
const firstDogImage =
  "https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg";
const firstDogName = "Dina";

const secondDogImage =
  "https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg";
const secondDogName = "Luna";

const thirdDogImage =
  "https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg";
const thirdDogName = "Lana";
/*En este caso para añadir cada uno de los elementos utilizaremos la propiedad innerHTML y la interpolación de cadenas.*/
const div = document.querySelector(".divelement");
div.innerHTML = `<ul><li><p>${firstDogName}</p><img src=${firstDogImage}></img></li><li><p>${secondDogName}</p><img src=${secondDogImage}></img></li><li><p>${thirdDogName}</p><img src=${thirdDogImage}></img></li></ul>`;
