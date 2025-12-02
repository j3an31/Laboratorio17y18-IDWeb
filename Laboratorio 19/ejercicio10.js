const contenedor = document.getElementById("contenedor");
async function cargarPokemones() {
    try {
        for (let i=1;i<=10; i++) {
            const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            if (!respuesta.ok) {
                throw new Error("Error en la petición: " + respuesta.status);
            }
            const pokemon = await respuesta.json();
            let div = document.createElement("div");
            div.className = "tarjeta-pokemon";
            div.innerHTML = `
                <h2>${i}. ${pokemon.name.toUpperCase()}</h2>
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                <p><strong>ID:</strong> ${pokemon.id}</p>
            `;
            contenedor.appendChild(div);
        }
    } catch (error) {
        console.error(error.message);
        contenedor.innerHTML = "<h3>¡Error al obtener datos!</h3>";
    }
}

cargarPokemones();