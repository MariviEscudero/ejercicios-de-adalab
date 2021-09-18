/*EJERCICIO 9
Favoritos
Hemos preparado un HTML con tres tarjetas. Al pinchar en un elemento del listado tenemos que:
Añadir la clase .teacher--selected si no la tiene, o quitarla si la tiene.
Modificar el texto del span .favorite sustituyéndolo por 'Quitar' si en ese momento contiene 'Añadir', o por 'Añadir' si contiene 'Quitar'.
Nota: con querySelector buscamos un elemento dentro de otro. Hasta ahora lo habíamos usado para buscar dentro de document (todo nuestro documento HTML), con document.querySelector().
Si tuviéramos una constante llamada, por ejemplo, sectionAboutElement en la que hemos guardado un elemento de HTML, podríamos buscar dentro él otro elemento, tal que así sectionAboutElement.querySelector().*/

'use.strict';

/*const teacherIsra = document.querySelector('.teacher--isra');
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
teacherNasi.addEventListener('click', selectTeacher);*/

const list = document.querySelector('.teacher');

function paintSelected(ev){
    console.log(ev.currentTarget);
    console.log(ev.target);

    const elemento = ev.currentTarget;
    elemento.classList.toggle('teacher--selected');
    if(text.innerHTML ==='Añadir'){
        text.innerHTML = 'Quitar';
    }else{
        text.innerHTML ='Añadir';
    }  
}

for (item of list){
    item.addEventListener('click', paintSelected);
}