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

    const notaObj = {
        id: Date.now(),
        nota
    }

    //Añadir al arreglo de notas
    notas = [...notas, notaObj];

    //Crear HTML
    crearHTML();


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

//Muestra un listado de las notas
function crearHTML (){
    if (notas.length > 0){
        notas.forEach( nota => {

        const li = document.createElement("li");

        // Añadir el texto
        li.innerText = nota.nota;

        //Insertar en el HTML
        lista_notas.appendChild(li);

        });
    }
}
