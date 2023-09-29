
//Mandando los datos de usuario y contraseña a home.html
document.getElementById("login").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
    const nombre = document.getElementById("input-usuario").value;
    const contraseña = document.getElementById("input-password").value;

    // Redirigir a la página de inicio con los datos en la URL
    window.location.href = `home/home.html?nombre=${nombre}&contraseña=${contraseña}`;
});
