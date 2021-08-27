/*EJERCICIO 10
¿Qué vemos esta noche?
Vamos a partir de un HTML con un botón 'Empezar'. Al hacer click, vamos a pintar en el HTML un listado de películas que tenemos en JavaScript:

Después vamos a escuchar eventos sobre cada elemento de la lista, de forma que al hacer click sobre el nombre de una película aparezca en la consola el nombre de esa película.*/

'use.strict';
const buttonElement = document.querySelector('.button');
const writeDocument = document.querySelector('.js_list');
const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';
function writeFilm(){
    writeDocument.innerHTML = `<ul><li class="film1">${inception}</li><li class="film2">${theButterFlyEffect}</li><li class="film3">${eternalSunshineOfTheSM}</li><li class="film4">${blueVelvet}</li><li class="film5">${split}</li></ul>`;
    
}
buttonElement.addEventListener('click', writeFilm);

const film1 = writeDocument.querySelector('.film1');
const film2 = writeDocument.querySelector('.film2');
const film3 = writeDocument.querySelector('.film3');
const film4 = writeDocument.querySelector('.film4');
const film5 = writeDocument.querySelector('.film5');
function viewFilm(event){
    const selectedFilm = event.currentTarget;
    console.log(selectedFilm);
}
film1.addEventListener('click', viewFilm);
film2.addEventListener('click', viewFilm);
film3.addEventListener('click', viewFilm);
film4.addEventListener('click', viewFilm);
film5.addEventListener('click', viewFilm);