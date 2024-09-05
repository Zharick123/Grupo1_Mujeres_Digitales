document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    const notaInput = document.getElementById('nota');
    const listaNotas = document.getElementById('notas');
    const filtro = document.getElementById('filtro-notas');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        agregarNota(notaInput.value);
        notaInput.value = ''; // Limpiar el campo de texto
    });

    filtro.addEventListener('input', function(event) {
        filtrarNotas(event.target.value.toLowerCase());
    });

    function agregarNota(texto) {
        if (texto.trim() === '') return;

        const li = document.createElement('li');
        li.textContent = texto;

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(botonEliminar);
        listaNotas.appendChild(li);
    }

    function filtrarNotas(termino) {
        const notas = listaNotas.getElementsByTagName('li');
        Array.from(notas).forEach(function(nota) {
            const textoNota = nota.firstChild.textContent.toLowerCase();
            if (textoNota.includes(termino)) {
                nota.style.display = 'flex';
            } else {
                nota.style.display = 'none';
            }
        });
    }
});
