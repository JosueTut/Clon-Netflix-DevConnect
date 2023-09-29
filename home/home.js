        // Función para obtener los parámetros de la URL
function obtenerParametroURL(nombre) {
    const parametrosURL = new URLSearchParams(window.location.search);
    return parametrosURL.get(nombre);
}

        // Recuperar el nombre de usuario de la URL
const nombreRecibido = obtenerParametroURL("nombre");

        // Mostrar el nombre de usuario en el elemento HTML
const nombreUsuarioElemento = document.getElementById("nombreUsuario");
nombreUsuarioElemento.textContent += "" + nombreRecibido;