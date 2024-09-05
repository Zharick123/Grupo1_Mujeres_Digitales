//Variables
const formulario = document.querySelector("#formulario");
const lista_notas = document.querySelector("#lista_notas");

let notas = [];

//EventListeners
eventListeners ();
function eventListeners(){
    formulario.addEventListener("submit", agregarNota);

}

//Funciones
function agregarNota (e){
    e.preventDefault();
    console.log("Agregando nota...")

}
