let todosLosPokemones = []; 
let paginaActual = 0; 
const pokemonesPorPagina = 3;

const tarjetasContainer = document.getElementById("tarjetas");
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");
async function cargarPokemones() {
    try {
        const promesas = [];
        for (let i=1;i<=12;i++) {
            promesas.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`));
        }
        const respuestas = await Promise.all(promesas);
        const pokemonesJSON = await Promise.all(
            respuestas.map(respuesta => respuesta.json())
        );
        todosLosPokemones = pokemonesJSON;
        mostrarPokemones();
    } catch (error) {
        console.error("Error al cargar pokémon:", error);
        tarjetasContainer.innerHTML = "<p>¡Error al cargar los Pokemones!</p>";
    }
}

function mostrarPokemones() {
    tarjetasContainer.innerHTML = "";
    const inicio = paginaActual * pokemonesPorPagina;
    const fin = inicio + pokemonesPorPagina;
    const pokemonesAMostrar = todosLosPokemones.slice(inicio, fin);
    pokemonesAMostrar.forEach(pokemon => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta";
        tarjeta.innerHTML = `
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <h3>${pokemon.name}</h3>
            <p>ID: ${pokemon.id}</p>
        `;
        tarjetasContainer.appendChild(tarjeta);
    });
    actualizarBotones();
}

function actualizarBotones() {
    btnAnterior.disabled = paginaActual === 0;
    btnSiguiente.disabled = (paginaActual + 1) * pokemonesPorPagina >= todosLosPokemones.length;
}

btnSiguiente.addEventListener("click", () => {
    if ((paginaActual + 1) * pokemonesPorPagina < todosLosPokemones.length) {
        paginaActual++;
        mostrarPokemones();
    }
});

btnAnterior.addEventListener("click", () => {
    if (paginaActual > 0) {
        paginaActual--;
        mostrarPokemones();
    }
});

cargarPokemones();