function formatoFecha(fecha) {
    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    console.log(`${fecha}:`, regex.test(fecha));
}

console.log("--- FORMATO DE FECHA ---")
formatoFecha("28/11/2025");
formatoFecha("1/1/2025");
formatoFecha("28-11-2025");