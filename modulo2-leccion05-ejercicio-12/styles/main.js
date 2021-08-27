/*EJERCICIO 12 BONUS
Un listener para todos
Vamos a refactorizar el EJERCICIO 9 para mejorarlo. Tenemos que quitar ese mogollón de listeners en los lis, reemplazarlos por uno solo en la etiqueta madre (ul) y trabajar con event.target.
¡A por ello!
Nota: esta técnica de poner un listener en la madre y acceder a la hija sobre la que se ha hecho click se llama event delegation.*/

'use.strict';

const teacherIsra = document.querySelector('.teacher--isra');
const teacherTuerto = document.querySelector('.teacher--tuerto');
const teacherNasi = document.querySelector('.teacher--nasi');

function selectTeacher(event){
    const selectedTeacher = event.currentTarget;
    selectedTeacher.classList.toggle('teacher--selected');

    const fav = selectedTeacher.querySelector('.favorite');
    console.log(fav);

    if (fav.innerHTML === 'Quitar'){
        fav.innerHTML = 'Añadir';
    } 
    else {
        fav.innerHTML = 'Quitar';
    }
}

teacherIsra.addEventListener('click', selectTeacher);
teacherTuerto.addEventListener('click', selectTeacher);
teacherNasi.addEventListener('click', selectTeacher);