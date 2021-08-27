"use strict";
/*EJERCICIO 3
Dame ipsum
Crear una página HTML con un párrafo con lorem ipsum. Al poner el ratón sobre el párrafo, vamos a añadir un nuevo párrafo a la página con lorem ipsum.*/
const loremIpsum = document.querySelector('.lorem');
const loremNew = document.querySelector('.js_lorem');
function addLorem(){
    loremIpsum.innerHTML += ('<p class"js_lorem>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A deserunt rerum, molestias, iste veniam earum quasi sequi nulla autem nisi ea exercitationem repellat et temporibus eveniet sed ut maiores modi.</p>')
   
   
}


loremIpsum.addEventListener('mouseover', addLorem);



