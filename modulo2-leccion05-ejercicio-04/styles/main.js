
/*EJERCICIO 4
Scroll es de colores
Cambiar el color de fondo de la página cuando se haga scroll. Para ello tenemos que:
Añadir un div con suficiente texto dentro para que haya scroll. Podéis usar el siguiente comando de emmet para hacerlo p*50>lorem.
Preparar classes para cambiar el color de fondo del div.
Escuchar el evento scroll sobre la ventana window.
Cuando la posición del scroll vertical supere 250 píxeles poner un color de fondo, cuando sea inferior a 250 píxeles poner otro.
Nota: window.scrollY nos devuelve la posición del scroll vertical.*/

"use strict";

//elemento que necesitamos de html

const bodyColor = document.querySelector('.body');

//funcion que se va a ejecutar con el listener

function changeColor(){
    if(window.scrollY < 250){
        bodyColor.classList.add('scroll_green');
        bodyColor.classList.remove('scroll_red');

    }else{
        bodyColor.classList.remove('scroll_green');

        bodyColor.classList.add('scroll_red');
    }
}

//eventlistener

window.addEventListener('scroll', changeColor);
