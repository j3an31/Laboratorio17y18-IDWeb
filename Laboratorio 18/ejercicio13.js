function dividirTexto(texto) {
    const regex = /[.?!]/;
    console.log("Texto ingresado:", texto);
    console.log("Texto dividido en oraciones", texto.split(regex));
}

console.log("--- DIVIDIR EN ORACIONES ---");
dividirTexto("Hola. Cómo estás? Bien!");