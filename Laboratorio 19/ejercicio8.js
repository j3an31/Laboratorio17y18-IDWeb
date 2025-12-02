async function obtenerPokemonAleatorio() {
    console.log("--- POKÉMON ALEATORIO ---");
    try {
        const id = parseInt(Math.random()*898 + 1);
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!respuesta.ok) {
            throw new Error("Error en la petición: " + respuesta.status);
        }
        const pokemon = await respuesta.json();
        console.log(`ID generado: ${id}`);
        console.log("Nombre del pokémon:", pokemon.name);      
    } catch (error) {
        console.error(error.message);
    }
}

obtenerPokemonAleatorio();