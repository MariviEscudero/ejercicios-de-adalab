'use.strict';

//variables de la pagina

//menu hamburguesa
const menuDropDown = document.querySelector('.js_menudropdown');
const clickHamburgerMenu = document.querySelector('.js_clickhamburgermenu');
//crear nuevo bookmark
const viewNewBookmark = document.querySelector('.js_shownewbookmark');
const buttonViewNewBookmark = document.querySelector('.js_newbookmark');
//vista tabla o tarjetas
const boardData = document.querySelector('.js_boarddata');
const dataCardView = document.querySelector('.js_cardviewbutton');
const dataTableView = document.querySelector('.js_tableviewbutton');
//escribir bookmarks
const listData = document.querySelector('.js_list_data');

//abrir menu hamburguesa

function toggleDropdownMenu(){
   menuDropDown.classList.toggle('collapsed')
}
function handleClickDropdownMenu(event){
   event.preventDefault();
   toggleDropdownMenu();
}

clickHamburgerMenu.addEventListener('click', handleClickDropdownMenu);

//ver menu crear nuevo bookmark

function handleClickShowNewBookmark(){
   viewNewBookmark.classList.remove('hidden');
}
buttonViewNewBookmark.addEventListener('click', handleClickShowNewBookmark);

//vista de tarjetas o tabla (no usamos toggle porque son dos botones, antes el addeventlistener se iba a usar solo en un boton) event.preventdefault porque son botones pero estan dentro de un formulario
//boton lista

function setCardListView(){
   boardData.classList.remove('tableview');
   boardData.classList.add('listview');
}

function handleClickDataCardView(event){
   event.preventDefault();
   setCardListView();
   dataTableView.classList.remove('selected');
   dataCardView.classList.add('selected');
}
dataCardView.addEventListener('click', handleClickDataCardView);

//boton tabla
function setTableView(){
   boardData.classList.remove('listview');
   boardData.classList.add('tableview');
}

function handleClickDataTableView(event){
   event.preventDefault();
   setTableView();
   dataCardView.classList.remove('selected');
   dataTableView.classList.add('selected');
}
dataTableView.addEventListener('click', handleClickDataTableView);



//variables para cada bookmark
const bmk_1_url   = 'https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion';
const bmk_1_desc   = 'JS en los materiales de Adalab';
const bmk_1_seen   = 'checked';
const bmk_1_tags_1 = 'javascript';
const bmk_1_tags_2 = '';

const bmk_2_url    = "https://thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/";
const bmk_2_desc   = 'Ideas de proyectos JS';
const bmk_2_seen   = 'checked';
const bmk_2_tags_1 = 'javascript';
const bmk_2_tags_2 = 'portfolio';

const bmk_3_url    = "https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web";
const bmk_3_desc   = 'HTML en los materiales de Adalab';
const bmk_3_seen   = 'checked';
const bmk_3_tags_1 = 'HTML';
const bmk_3_tags_2 = 'CSS'; 

//funcion render bookmarks

//funcion para tags, para que no pinte los li cuando no estan rellenos por ninguna etiqueta, la vamos a invocar en la funcion que pinta el bookmark

function renderTags(tags_1, tags_2){

   let htmlTags =
   `<ul class="item__tags">`;

   if(tags_1 !== ''){ 
      htmlTags +=
  ` <li class="item__tag">${tags_1}</li>`;
}
   if(tags_2 !== ''){ 
      htmlTags +=
   `<li class="item__tag">${tags_2}</li>`;
}
   htmlTags +=
   `</ul>`;

   return htmlTags;

}

//funcion render bookmarks, pinta los bookmarks, los parametros son generales y en la variable let siguente metemos los parametros de cada bookmark

function renderBookmark(url, desc, seen, tags_1, tags_2){
   const htmlTags = renderTags(tags_1, tags_2);
   const htmlBookmark = `<li class="data__listitem">
   <article class="data__item">
   <p class="item__url">
      <a href= ${url} target="_blank" rel="noopener noreferrer">
      ${url}
      </a>
   </p>
   <p class="item__seen">
      <input type="checkbox" ${seen} name="item_imp_2" id="item_imp_2">
   </p>
   <p class="item__desc">${desc}</p>

   ${htmlTags}
   </article>
   </li>`;


return htmlBookmark;
}

// variable en la que metemos el resultado de la funcion anterior

let html = renderBookmark(bmk_1_url,bmk_1_desc ,bmk_1_seen,bmk_1_tags_1, bmk_1_tags_2);
html += renderBookmark(bmk_2_url,bmk_2_desc ,bmk_2_seen,bmk_2_tags_1, bmk_2_tags_2);
html +=renderBookmark(bmk_3_url,bmk_3_desc ,bmk_3_seen,bmk_3_tags_1, bmk_3_tags_2);

//innerhtml para pintar en el html la funcion de bookmarks

listData.innerHTML = html;


