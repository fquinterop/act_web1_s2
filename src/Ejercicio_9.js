/*  Conversor de notas musicales (switch)
Archivo: src/ejercicio9.js
Declara nota = 'LA';.
Imprime el número MIDI correspondiente:

DO → 60
RE → 62
MI → 64
FA → 65
SOL → 67
LA → 69
SI → 71
Cualquier otro valor → "nota desconocida"
 */
let nota = 'LA';
let numeroMIDI; 

switch (nota.toUpperCase()) {
    case 'DO':  
        numeroMIDI = 60; 
        break;  
    case 'RE':  
        numeroMIDI = 62;
        break;  
    case 'MI':  
        numeroMIDI = 64; 
        break;
    case 'FA':

        numeroMIDI = 65; 
        break;          
    case 'SOL':
        numeroMIDI = 67;
        break;  
    case 'LA':  
        numeroMIDI = 69; 
        break;
    case 'SI':
        numeroMIDI = 71;        
        break;  
    default:
        numeroMIDI = 'nota desconocida'; 
        break;
}
console.log(`La nota ${nota} corresponde al número MIDI: ${numeroMIDI}`);               
