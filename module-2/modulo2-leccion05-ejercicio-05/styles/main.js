
/*EJERCICIO 5
Jugando con el teclado
Tenemos que crear una página vacía. Al pulsar la tecla 'r' su color de fondo cambia a rojo y al pulsar la 'm' a morado. Vamos a escuchar un evento de teclado directamente sobre el elemento document.*/

"use strict";
const bodyColor = document.querySelector('.body');
function changeColor(event){
    if(event.key === 'r'){
        bodyColor.classList.remove('body_purple');
        bodyColor.classList.add('body_red');
    }else if(event.key === 'm'){
        bodyColor.classList.remove('body_red');
        bodyColor.classList.add('body_purple');
        
    }
    
}
document.addEventListener('keydown', changeColor);
