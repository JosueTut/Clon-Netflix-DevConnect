        // Función para obtener el nombre de la URL
function obtenerParametroURL(nombre) {
    const parametrosURL = new URLSearchParams(window.location.search);
    return parametrosURL.get(nombre);
}

        // Usar la función
const nombreRecibido = obtenerParametroURL("nombre");

        // Mostrar el nombre de usuario en el elemento HTML
const nombreUsuarioElemento = document.getElementById("nombreUsuario");
nombreUsuarioElemento.textContent += "" + nombreRecibido;