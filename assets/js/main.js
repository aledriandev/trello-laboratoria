var titulo = document.getElementById('nombre-tarea');
var listaTareas = document.getElementById('lista-tarjeta');
var addTareas = document.getElementById('add-tarjeta');
var first = document.getElementById('first');
//var listaTareasP = document.getElementById('lista-tarea');
var tareas = [];
var tarjetas = [];
first.onclick = function(){
	first.innerHTML = '';
	var entrada = document.createElement('div');
		entrada.setAttribute('class','tareas')
	var nuevaTarea = document.createElement('input')
		nuevaTarea.setAttribute('placeholder', 'Añadir una lista...');
	var botones = document.createElement('div');
	var agregar = document.createElement('button');
		agregar.setAttribute('id','agregar');
		agregar.innerHTML = "Guardar"
	var borrar = document.createElement('button');
		borrar.setAttribute('id','borrar');
		borrar.innerHTML = "x";
	botones.appendChild(agregar);
	botones.appendChild(borrar);
	entrada.appendChild(nuevaTarea);
	entrada.appendChild(botones);
	first.appendChild(entrada);
}

var guardar = document.getElementById('guardar')

/*
	if(nuevaTarea.value =! ''){
		tareas.push(nuevaTarea);
	}
for (var i = 0; i tareas.length; i++) {
	tareas[i]
}
*/
//