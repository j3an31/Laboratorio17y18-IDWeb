console.log("--- ESTADÍSTICAS DEL POKÉMON ---");
let pokemonIngr = prompt("Ingrese el nombre o id:").toLowerCase();
console.log("Nombre o ID ingresado:", pokemonIngr);
fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIngr}`)
    .then(respuesta => {
        if(!respuesta.ok) {
            throw new Error("¡Pokémon no encontrado!");
        }
        return respuesta.json();
    })
    .then(pokemon => {
        console.log(`Pokémon: ${pokemon.name}`);
        pokemon.stats.forEach(stat => {
            console.log(`${stat.stat.name}: ${stat.base_stat}`);
        });
    })
    .catch(error => {
        console.error(error.message);
    });