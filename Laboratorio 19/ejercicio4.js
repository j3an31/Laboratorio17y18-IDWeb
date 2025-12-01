function datosDePikachu() {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        .then(response => {
            if (!response.ok) {
                throw new Error("Error en la petición: " + response.status);
            }
            return response.json();
        })
        .then(pikachu => {
            console.log("--- INFORMACIÓN DE PIKACHU ---");
            console.log("Altura:", pikachu.height);
            console.log("Peso:", pikachu.weight);
        })
        .catch(error => {
            console.error(error);
        });
}

datosDePikachu();