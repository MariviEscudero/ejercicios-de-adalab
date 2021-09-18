'use strict';
/*EJERCICIO 1
1, 2, 3, lo hacemos otra vez
Crear una página HTML con una lista ul vacía. Vamos a partir de un array con 3 elementos const numbers = [1, 2, 3]. Vamos a añadir a la lista tres elementos li, que corresponden al contenido del array. Usaremos los métodos avanzados para manipular el DOM, no innerHTML.*/

const ulList = document.querySelector('.list');
const numbers = [1,2,3];
for (let i = 0; i < numbers.length; i++) {
    const newList = document.createElement('li');
    const newContent = document.createTextNode(numbers[i]);
    newList.appendChild(newContent);
    ulList.appendChild(newList);
}

