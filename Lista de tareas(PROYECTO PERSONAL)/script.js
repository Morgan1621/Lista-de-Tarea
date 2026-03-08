// Seleccionar elementos del DOM 
const inputTarea = document.getElementById("nuevaTarea"); const botonAgregar = document.getElementById("agregarTarea"); const listaTareas = document.getElementById("listaTareas"); 
// Función para agregar una nueva tarea 
function agregarTarea() { 
 // Obtener el valor del input 
 const textoTarea = inputTarea.value.trim(); 
 // Validar que el input no esté vacío 
 if (textoTarea !== "") { 
 // Crear un nuevo elemento <li> 
 const nuevaTarea = document.createElement("li");  nuevaTarea.textContent = textoTarea; 
 // Crear botón para eliminar la tarea 
 const botonEliminar = document.createElement("button");  botonEliminar.textContent = "Eliminar"; 
 botonEliminar.className = "botonEliminar"; 
 // Añadir el botón de eliminar al <li> 
 nuevaTarea.appendChild(botonEliminar);
 // Añadir la tarea a la lista 
 listaTareas.appendChild(nuevaTarea); 
 // Limpiar el input 
 inputTarea.value = ""; 
 // Añadir evento al botón de eliminar 
 botonEliminar.addEventListener("click", function () {  listaTareas.removeChild(nuevaTarea);  }); 
 } 
} 
// Añadir evento al botón de agregar 
botonAgregar.addEventListener("click", agregarTarea); 
// Permitir agregar tareas al presionar "Enter" inputTarea.addEventListener("keypress", function (event) {  if (event.key === "Enter") { 
 agregarTarea(); 
 

