/* Día laborable o fin de semana
Archivo: src/ejercicio5.js
Declara dia = 'sabado';.
Imprime "laborable" para lunes-viernes y "fin de semana" para sábado o domingo.

 */
let dia = 'sabado'; 
switch (dia.toLowerCase()) {
    case 'lunes':       
    case 'martes':      
    case 'miercoles':   
    case 'jueves':     
    case 'viernes':     
        console.log('laborable'); 
        break;      
    case 'sabado':    
    case 'domingo': 
        console.log('fin de semana'); 
        break;
    default:
        console.log('Día no válido'); 
        break;      
}       