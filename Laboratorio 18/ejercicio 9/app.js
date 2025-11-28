import {sumar, restar} from "./sumaResta.js";
import multiplicar, {dividir}  from "./multiplicacionDivision.js";

console.log("--- SUMAR, RESTAR, MULTIPLICAR, DIVIDIR ---");
console.log("100 + 50 =", sumar(100,50));
console.log("80 - 30 =", restar(80,30));
console.log("30 * 40 =", multiplicar(30,40));
console.log("20 / 0 =", dividir(20,0));