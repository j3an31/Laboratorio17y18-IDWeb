function encontrarUrl(texto) {
    const regex = /https:\/\/[\w.-]+\.[a-zA-Z]{2,}(\/[^\s]*)?/g;
    console.log("Texto ingresado:", texto);
    const urls = texto.match(regex);
    console.log("Urls encontrados:");
    urls.forEach(element => {
        console.log("-", element);
    });
}
console.log("--- URLS SEGURAS ---");
const texto = "Visita https://www.unsa.edu.pe y https://github.com";
encontrarUrl(texto);