var botonElement = document.getElementById("continuar");

// Agrega un evento click al botón
botonElement.addEventListener("click", function() {
    const nombreElement = document.getElementById("input-usuario-profile");
    const nombre = nombreElement.value;

    // Redirigir a la página de inicio con los datos en la URL
    window.location.href = `../home/home.html?nombre=${nombre}`;
});
