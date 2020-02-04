
var listaTareas = new Array();

listaTareas = [
	{
		'idTarea': 0,
		'titulo': 'Salir a comer',
		'prioridad': 'diaria'

	},
	{
		'idTarea': 1,
		'titulo': 'Javascript',
		'prioridad': 'urgente'
	},
	{
		'idTarea': 2,
		'titulo': 'Dormir',
		'prioridad': 'diaria'
	},
	{
		'idTarea': 3,
		'titulo': 'Estudiar',
		'prioridad': 'diario'
	},
	{
		'idTarea': 4,
		'titulo': 'Compra',
		'prioridad': 'mensual'
	}
];

var seccionTareas = document.getElementById('tareas')
var mensaje = document.getElementById('mensaje')
var mensajeFiltro = document.getElementById('mensajeFiltro')
var tituloTarea = document.getElementById('tituloTarea')
var btnGuardar = document.getElementById('botonGuardar')
var prioridad = document.getElementById('prioridad')
var busqueda = document.querySelector('#search')

var seleccionarPrioridad = document.getElementById('prioridadSelect')

var eliminar

var ultimoId = 1

btnGuardar.addEventListener('click', e => {
	e.preventDefault();
	var tarea = document.getElementById('nuevatarea').value;
	var prioridad = document.getElementById('prioridad').value;

	if (tarea.length == 0 || prioridad.length == 0 || tarea[0] == " " || prioridad[0] == " ") {
		document.getElementById('mensaje').innerText = "Los campos no pueden estar vacios";
		document.getElementById('form').reset();

	}
	else {

		guardarDatos(tarea, prioridad);
		document.getElementById('mensaje').innerText = "";
		document.getElementById('form').reset();
	}
})

function guardarDatos(pTarea, pPrioridad) {

	let registro = {
		id: ultimoId,
		titulo: pTarea,
		prioridad: pPrioridad
	}

	listaTareas.push(registro);
	pintarTarea(registro);
	ultimoId++;

}


function pintarTarea(pObjeto) {
	var article = document.createElement('article');
	var h2 = document.createElement('h2');
	var textoInterior = document.createTextNode(`${pObjeto.tarea}`);

	h2.appendChild(textoInterior);
	article.appendChild(h2);
	article.classList.add + `${pObjeto.pPrioridad}`;

	seccionTareas.appendChild(article);
}