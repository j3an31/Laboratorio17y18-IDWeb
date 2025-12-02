const boton = document.querySelector("button");
const idPokemon = document.getElementById("pokemonId");
const contenedor = document.getElementById("contenedorDatos");

async function buscarPokemon() {
    try {                                // ".value" muestra el valor que escribió en el input
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon.value}`);
        if (!respuesta.ok) {
            throw new Error("Error en la petición: " + respuesta.status);
        }
        const pokemon = await respuesta.json();
        const habilidades = pokemon.abilities.map(a => a.ability.name).join(", ");
        contenedor.innerHTML = `
            <h2>${pokemon.name.toUpperCase()}</h2>
            <img src="${pokemon.sprites.front_default}" alt="pokemon.name">
            <p><strong>ID:</strong> ${pokemon.id}</p>
            <p><strong>Peso:</strong> ${pokemon.weight}</p>
            <p><strong>Altura:</strong> ${pokemon.height}</p>
            <p><strong>Habilidades:</strong> ${habilidades}</p>
        `;     
    } catch (error) {
        console.error(error.message);
        contenedor.innerHTML = "<h3>¡Error al obtener datos!</h3>"
    }
}

boton.addEventListener("click", () => {
    buscarPokemon();
});