//Variables
const formulario = document.querySelector("#formulario");
const lista_notas = document.querySelector("#lista_notas");

let notas = [];

//EventListeners
eventListeners ();
function eventListeners(){
    formulario.addEventListener("submit", agregarNota);

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

        const li = document.createElement("li");

        // Añadir el texto
        li.innerText = nota.nota;

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

function limpiarHTML() {
    while (lista_notas.firstChild) {
        lista_notas.removeChild(lista_notas.firstChild);
    }
}

