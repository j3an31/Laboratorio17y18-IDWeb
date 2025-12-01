async function datosDePikachu() {
    console.log("--- INFORMACIÓN DE PIKACHU ---");
    try {
        const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
        if (!respuesta.ok) {
            throw new Error("Error en la petición: " + respuesta.status);
        }
        const pikachu = await respuesta.json();
        console.log("Altura:", pikachu.height);
        console.log("Peso:", pikachu.weight);
    } catch (error) {
        console.error(error);
    }
}

datosDePikachu();