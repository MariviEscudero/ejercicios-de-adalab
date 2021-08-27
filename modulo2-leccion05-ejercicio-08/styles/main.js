/*EJERCICIO 8
Más botones
Partiendo del ejercicio anterior vamos a añadir un nuevo botón a nuestra página. Tenemos que ponerle un listener y a reutilizar el handler que ya teníamos. Es decir, los dos botones deben tener el mismo handler.
Cuando la usuaria pulse un botón el cambio de clase sucederá solamente sobre el botón pulsado.*/

'use.strict';

const buttonHtml = document.querySelector('.button');
const buttonHtml1 = document.querySelector('.button1');

function changeClass(event){
    const buttonClick = event.currentTarget;
    buttonClick.classList.toggle('buttonbg');
}

buttonHtml.addEventListener('click', changeClass);
buttonHtml1.addEventListener('click', changeClass);
