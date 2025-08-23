/* Nota a letra
Archivo: src/ejercicio6.js
Declara nota = 83.
Convierte la nota numérica (0-100) a letra e imprímela:

90-100 → "A"
80-89 → "B"
70-79 → "C"
60-69 → "D"
< 60 → "F"
 */
let nota = 83;
let letra;  
switch (true) { 
    case (nota >= 90 && nota <= 100): 
        letra = 'A'; 
        break; 
    case (nota >= 80 && nota < 90):  
        letra = 'B'; 
        break; 
    case (nota >= 70 && nota < 80):  
        letra = 'C'; 
        break; 
    case (nota >= 60 && nota < 70):  
        letra = 'D'; 
        break; 
    case (nota < 60 && nota >= 0):    
        letra = 'F'; 
        break; 
    default:                         
        letra = 'Nota no válida'; 
        break; 
}               
console.log(`La nota ${nota} corresponde a la letra: ${letra}`);    
// Salida esperada: La nota 83 corresponde a la letra: B