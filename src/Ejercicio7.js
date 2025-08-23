/* Descuento por volumen
Archivo: src/ejercicio7.js
Declara:

let precioUnitario = 25;
let cantidad = 60;
let precioFinal;
Aplica descuento sobre el total:

0 % si cantidad < 10
10 % si 10 ≤ cantidad < 50
20 % si cantidad ≥ 50
Imprime precioFinal redondeado a 2 decimales. */

let precioUnitario = 25;
let cantidad = 60;          
let precioFinal;
let descuento;                      
switch (true) {                     
    case (cantidad < 10):             
        descuento = 0;                
        break;                         
    case (cantidad >= 10 && cantidad < 50): 
        descuento = 0.10;             
        break;                         
    case (cantidad >= 50):           
        descuento = 0.20;             
        break;                         
    default:                         
        console.log('Cantidad no válida'); 
        descuento = 0;                
        break;                         
}
precioFinal = precioUnitario * cantidad * (1 - descuento);
console.log(`El precio final es: $${precioFinal.toFixed(2)}`);          

