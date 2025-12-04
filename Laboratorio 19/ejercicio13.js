document.getElementById("btnBuscar").addEventListener("click", () => {
    let pokemon = document.getElementById("pokemonInput").value.toLowerCase();
    let mensaje = document.getElementById("mensaje");
    let nombrePokemon = document.getElementById("nombrePokemon");
    let tabla = document.getElementById("tablaStats");
    let cuerpoTabla = document.getElementById("statsBody");

    mensaje.textContent = "";
    cuerpoTabla.innerHTML = "";  
    nombrePokemon.innerHTML = "";
    tabla.classList.add("hidden");

    if (pokemon.trim() === "") {
        mensaje.textContent = "¡Por favor ingrese un nombre o ID!";
        return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error("¡Pokémon no encontrado!");
            }
            return respuesta.json();
        })
        .then(data => {
            nombrePokemon.innerHTML = `${data.name.toUpperCase()}`
            tabla.classList.remove("hidden");
            data.stats.forEach(stat => {
                let fila = document.createElement("tr");
                fila.innerHTML = `
                    <td>${stat.stat.name}</td>
                    <td>${stat.base_stat}</td>
                `;
                cuerpoTabla.appendChild(fila);
            });
        })
        .catch(error => {
            mensaje.textContent = error.message;
        });
});