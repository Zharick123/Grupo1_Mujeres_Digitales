//Variables
const formulario = document.querySelector("#formulario");
const lista_notas = document.querySelector("#lista_notas");

let notas = [];

//EventListeners
eventListeners ();
function eventListeners(){

    //Agrega nota
    formulario.addEventListener("submit", agregarNota);

    // Cuando el documento está listo
    document.addEventListener("DOMContentLoaded", () => {
        notas = JSON.parse(localStorage.getItem("notas")) || [];
        console.log(notas);
        crearHTML();
    });

};

//Funciones
function agregarNota (e){
    e.preventDefault();

    // textarea donde el usuario escribe
    const nota = document.querySelector("#nota").value.trim();

    // Validación...
    if (nota === "") {
        mostrarError("La nota no puede ir vacía");
        return;
    };

    const notaObj = {
        id: Date.now(),
        nota
    };

    //Añadir al arreglo de notas
    notas = [...notas, notaObj];

    //Crear HTML
    crearHTML();

    //Reiniciar el formulario
    formulario.reset()

};



function mostrarError (error){

    // Comprueba si existe una alerta
    const alerta = document.querySelector(".error");
    if (alerta) {
        alerta.remove();
    };

    //Se genera la alerta
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

};

//Muestra un listado de las notas
function crearHTML (){

    limpiarHTML();

    if (notas.length > 0){
        notas.forEach( nota => {

        // Agregar botón para eliminar nota
        const btnEliminar = document.createElement("a");
        btnEliminar.classList.add("borrar-nota");
        btnEliminar.textContent = "X";

        // Añadir la función de eliminar
        btnEliminar.onclick = () => {
            borrarNota(nota.id);
        };

        //Crea el HTML
        const li = document.createElement("li");

        // Añadir el texto
        li.innerText = nota.nota;

        // Asignar el botón
        li.appendChild(btnEliminar);

        //Insertar en el HTML
        lista_notas.appendChild(li);

        });
    }

    sincronizarStorage();
}

//Agrega las notas actuales al localStorage
function sincronizarStorage() {
    localStorage.setItem("notas", JSON.stringify(notas));
}

//Elimina la nota
function borrarNota(id) {
    notas = notas.filter(nota => nota.id !== id);
    crearHTML();
}

function limpiarHTML() {
    while (lista_notas.firstChild) {
        lista_notas.removeChild(lista_notas.firstChild);
    }
}

