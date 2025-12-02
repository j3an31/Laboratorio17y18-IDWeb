const boton = document.querySelector("button");
const inputPokemon = document.getElementById("pokemonAbuscar");
const contenedor = document.getElementById("contenedor");
async function buscarPokemon() {
    const valor = inputPokemon.value.toLowerCase();
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${valor}`);
        if (!respuesta.ok) {
            throw new Error("¡Pokémon no encontrado!");
        }
        const pokemon = await respuesta.json();
        const tipos = pokemon.types.map(t => t.type.name).join(", ");
        contenedor.innerHTML = `
            <div class="tarjeta-pokemon">
                <h2>${pokemon.name.toUpperCase()}</h2>
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                <p><strong>ID:</strong> ${pokemon.id}</p>
                <p><strong>Tipos:</strong> ${tipos}</p>
            </div>
        `;
    } catch (error) {
        console.error(error.message);
        contenedor.innerHTML = "<h3>¡Pokémon no encontrado! Verifica el nombre o ID</h3>";
    }
}

boton.addEventListener("click", () => {
    buscarPokemon();
});