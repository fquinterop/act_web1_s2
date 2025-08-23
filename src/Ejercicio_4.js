/* Calculadora básica con switch
Archivo: src/ejercicio4.js
Declara:

let a = 10;
let b = 3;
let operador = '*';   // puede ser + - * / */

//Usando una estructura switch, realiza la operación indicada por la variable operador entre las variables a y b.
//Finalmente, muestra el resultado en consola.//

let a = 10;
let b = 3;          
let operador = '*';                 
let resultado;  

switch (operador) {
    case '+':                           
        resultado = a + b;             
        console.log(`El resultado de ${a} + ${b} es: ${resultado}`); 
        break;
    case '-':
        resultado = a - b;                  
        console.log(`El resultado de ${a} - ${b} es: ${resultado}`);
        break;          
    case '*':
        resultado = a * b;                      
        console.log(`El resultado de ${a} * ${b} es: ${resultado}`);
        break;          
    case '/':
        if (b !== 0) {                         
            resultado = a / b;                  
            console.log(`El resultado de ${a} / ${b} es: ${resultado}`);
        } else {
            console.log('Error: División por cero no permitida.'); 
        }               
        break;          
    default:        
        console.log('Operador no válido.'); 
        break;          
}
