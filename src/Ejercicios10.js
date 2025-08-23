/* Autenticación simple
Archivo: src/ejercicio10.js
Declara:

let usuario = "admin";
let contrasena = "1234";
Imprime:

"acceso concedido" si coincide exactamente
"acceso denegado" en cualquier otro caso */
let usuario = "admin";
let contrasena = "1234";
let mensaje;
if (usuario === "admin" && contrasena === "1234") {
    mensaje = "acceso concedido";
} else {
    mensaje = "acceso denegado";
}       
console.log(mensaje); // Salida esperada: acceso concedido
