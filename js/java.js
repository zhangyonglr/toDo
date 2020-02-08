
var listaTareas = new Array();

listaTareas = [
	{
		id: 0,
		titulo: 'Salir a comer',
		prioridad: 'diaria'

	},
	{
		idTarea: 1,
		titulo: 'Javascript',
		prioridad: 'urgente'
	},
	{
		idTarea: 2,
		titulo: 'Dormir',
		prioridad: 'diaria'
	},
	{
		idTarea: 3,
		titulo: 'Estudiar',
		prioridad: 'diario'
	},
	{
		idTarea: 4,
		titulo: 'Compra',
		prioridad: 'mensual'
	}
];

var seccionTareas = document.getElementById('tareas')
var mensaje = document.getElementById('mensaje')
var btnGuardar = document.getElementById('guardar')
var prioridad = document.getElementById('prioridad')

var ultimoId = 1

btnGuardar.addEventListener('click', e => {
	e.preventDefault()
	var nombreTarea = tituloTarea.value
	var prioridadTarea = prioridad.value

	if (nombreTarea == "" || prioridadTarea == "nulo" || nombreTarea[0] == " ") {
		console.log(nombreTarea)
		mensaje.innerText = 'No es posible guardar la tarea, rellene todos los campos'
		/* document.getElementById('form').reset() */

	} else {
		mensaje.innerText = ''
		guardarDatos(nombreTarea, prioridadTarea)
		/* document.getElementById('form').reset() */
	}
	document.querySelector('#form').reset();
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
	var textoInterior = document.createTextNode(`${pObjeto.pTarea}`);

	h2.appendChild(textoInterior);
	article.appendChild(h2);
	article.classList.add + `${pObjeto.pPrioridad}`;

	seccionTareas.appendChild(article);
}