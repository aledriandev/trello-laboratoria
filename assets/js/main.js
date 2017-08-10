var titulo = document.getElementById('nombre-tarea');
var listaTareas = document.getElementById('lista-tarjeta');
var addTareas = document.getElementById('add-tarjeta');
var tareas = document.getElementById('tarea');
var i=0 //id de cada div

function crearDiv(){
	var tarea = document.createElement('div');
		tarea.setAttribute('id',i)
	var first = document.createElement('button');
		first.setAttribute('id','crea'+i)
		first.innerHTML="Añadir una lista...";
	tarea.appendChild(first);
	tareas.appendChild(tarea);	
}
crearDiv();

var tareaCreada = document.getElementById(i);
var buttonCreado = document.getElementById('crea'+i);
//var listaTareasP = document.getElementById('lista-tarea');

buttonCreado.onclick = function(){
	//var evento = event.target;
	var entrada = document.createElement('div');
		entrada.setAttribute('class','tareas');
		entrada.setAttribute('id','entrada'+i);
	var nuevaTarea = document.createElement('input');
		nuevaTarea.setAttribute('placeholder', 'Añadir una lista...');
		nuevaTarea.setAttribute('id','nombreTarea'+i);
	var botones = document.createElement('div');
	var agregar = document.createElement('button');
		agregar.setAttribute('id','agregar'+i);
		agregar.setAttribute('onclick','guardar()')
		agregar.innerHTML = "Guardar"
	var borrar = document.createElement('button');
		borrar.setAttribute('id','borrar'+i);
		borrar.innerHTML = "x";
	botones.appendChild(agregar);
	botones.appendChild(borrar);
	entrada.appendChild(nuevaTarea);
	entrada.appendChild(botones);
	tareaCreada.appendChild(entrada);
	//remueve el boton creado
	tareaCreada.removeChild(buttonCreado);
}
//var guardar = document.getElementById('agregar');
function guardar(){
	var nombreTarea = document.getElementById('nombreTarea'+i);
	var entradaDatos = document.getElementById('entrada'+i);
	if(nombreTarea.value != ''){
		var final = document.createElement('div');
			final.setAttribute('id','final')
		var nombre = document.createElement('div');
			nombre.innerHTML = nombreTarea.value;
		var listaTarjeta = document.createElement('div');
		var addTarjeta = document.createElement('button');
			addTarjeta.setAttribute('onclick','agregarTarjeta()')
			addTarjeta.innerHTML = "Añadir tarjeta..."

		final.appendChild(nombre);
		final.appendChild(listaTarjeta);
		final.appendChild(addTarjeta);

		tareaCreada.replaceChild(final,entradaDatos);
		crearDiv();
		i++;
	}
}


/*
	if(nuevaTarea.value =! ''){
		tareas.push(nuevaTarea);
	}
for (var i = 0; i tareas.length; i++) {
	tareas[i]
}
*/
//