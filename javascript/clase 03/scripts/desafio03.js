/**
 * @challenge: CREAR UN ALGORITMO JS SIMPLE
 * 
 * @version: versión: 1.0.0
 * @author: Ezequiel Arnaudo.
 * @fecha: 23/11/2021
 *
 * History:
 *  - v1.0.3 – Primera entrega
 */

// Código de aquí en adelante

 


const password = prompt("Establezca una contraseña");

while(true) {

  let repetirPassword = prompt('Repita la contraseña:');

  if(repetirPassword === password) {

    alert('Contraseña correcta');
    break;

  }

  else  {

    alert("Contraseña Incorrecta");
    break;

  }
}

let numeroDia = prompt("Ingrese el dia de la semana");

switch(numeroDia) {

    case '1':
        alert("El dia es Lunes");
        break;
    case '2':
        alert("El dia es Martes");
        break;
    case '3':
        alert("El dia es Miercoles");   
        break;
    case '4':
            alert("El dia es Jueves");   
            break;
    case '5':
        alert("El dia es Viernes");   
        break;
    case '6':
            alert("El dia es Sabado")   
            break;
    case '7':
        alert("El dia es Domingo")   
        break;
    default:
        ("Numero de la semana incorrecto");
}