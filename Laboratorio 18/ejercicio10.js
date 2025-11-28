function verificarContraseñaFuerte(contraseña) {
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
    console.log(`${contraseña}:`, regex.test(contraseña));
}

console.log("--- CONTRASEÑA FUERTE ---");
verificarContraseñaFuerte("Abc12345");
verificarContraseñaFuerte("PASSWORD1");
verificarContraseñaFuerte("Pass1");