/* Clasificación de edad
Archivo: src/ejercicio3.js
Declara edad = 15.
Imprime:

"niño" si es 0-12
"adolescente" si es 13-17
"adulto" si es 18-64
"anciano" si es 65 o más
 */

let edad = 15;
if (edad >= 0 && edad <= 12) {
    console.log("niño");
}  else if (edad >= 13 && edad <= 17) {
    console.log("adolescente");
} else if (edad >= 18 && edad <= 64) {
    console.log("adulto");
}else {
    console.log("anciano");
}