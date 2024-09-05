//Variables
const formulario = document.querySelector("#formulario");

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
