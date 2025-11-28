function quitarEtiquetasHtml(texto) {
    const regex = /<[^>]*>/g;
    console.log("Texto original:", texto);
    console.log("Texto sin HTML:", texto.replace(regex, "")); // (busca, reemplaza)
}

console.log("--- QUITAR ETIQUETAS HTML ---");
quitarEtiquetasHtml("<p>Hola</p>");
quitarEtiquetasHtml("<div><strong>Texto</strong> con <em>formato</em></div>");