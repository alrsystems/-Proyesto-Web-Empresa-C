
document.addEventListener("DOMContentLoaded", function() {
    // Crear un nuevo botón
    var boton = document.createElement("button");
    boton.innerHTML = "Haz clic aquí";
    // Añadir evento de clic
    boton.onclick = function() {
        alert('¡Botón creado con JavaScript clicado!');
    };
    // Agregar el botón al cuerpo de la página
    document.body.appendChild(boton);
});
