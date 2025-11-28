export default function multiplicar(a, b) {
    return a*b;
}

export function dividir(a, b) {
    try {
        if (b===0) {
            throw new Error("El denominador no puede ser 0");
        } else {
            return a/b;
        }
    } catch (e) {
        console.log("Error en división:", e);
    }
}