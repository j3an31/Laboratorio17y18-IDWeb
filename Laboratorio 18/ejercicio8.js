const boton = document.querySelector("button");
const datosUser2 = document.getElementById("datosUser2");

boton.addEventListener("click", async () => {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!respuesta.ok) {
            throw new Error("Error en la petición: " + respuesta.status);
        }
        const usuarios = await respuesta.json();
        const usuario = usuarios.find(u => u.id === 2);
            if (usuario) {
                datosUser2.innerHTML = `
                    <strong>Nombre:</strong> ${usuario.name}<br>
                    <strong>Email:</strong> ${usuario.email}<br>
                    <strong>Ciudad:</strong> ${usuario.address.city}
                `;
            } else {
                datosUser2.innerHTML = "¡Usuario 2 no encontrado!";
            }
    } catch (e) {
        console.log(e);
    }
});