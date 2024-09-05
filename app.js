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

    // textarea donde el usuario escribe
    const nota = document.querySelector("#nota").value.trim();

    // Validación...
    if (nota === "") {
        mostrarError("La nota no puede ir vacía");
        return;
    }

}

//Mostrar mensaje de error
function mostrarError (error){
    const mensajeError = document.createElement("P");
    mensajeError.textContent = error;
    mensajeError.classList.add("error")

    //Se inserta el mensaje de error en el contenido
    const contenido = document.querySelector("#contenido");
    contenido.appendChild(mensajeError);

    //Elimina la alerta despues de 3s

    setTimeout(() => {
        mensajeError.remove();
    }, 3000);

}
