async function buscarPokemon() {
    console.log("--- BUSCAR POKÉMON ---");
    try {
        let idPokemon = parseInt(prompt("Ingrese el ID del pokémon:"));
        console.log(`ID ingresado: ${idPokemon}`);
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
        if (!respuesta.ok) {
            console.log(`¡Pokémon con id ${idPokemon} no encontrado!`);
            throw new Error("Error en la petición: " + respuesta.status);
        }
        const pokemon = await respuesta.json();
        console.log("Nombre del pokémon:", pokemon.name); 
    } catch (error) {
        console.error(error.message);
    }
}

buscarPokemon();