/* Transporte con tarifa reducida
Archivo: src/ejercicio8.js
Declara:

let edad = 67;
let distanciaKm = 120;
let tarifaBase = distanciaKm * 0.21;
Aplica:

20 % descuento si edad < 18
40 % descuento si edad ≥ 65
Imprime el precio final redondeado a 2 decimales. */

let edad = 67;
let distanciaKm = 120;      
let tarifaBase = distanciaKm * 0.21;
let tarifaFinal;        
let descuento;
switch (true) {                     
    case (edad < 18):                
        descuento = 0.20;             
        break;                         
    case (edad >= 65):              
        descuento = 0.40;             
        break;                         
    default:                         
        descuento = 0;                
        break;                         
}       
tarifaFinal = tarifaBase * (1 - descuento);
console.log(`El precio final es: $${tarifaFinal.toFixed(2)}`);
// Salida esperada: El precio final es: $15.12