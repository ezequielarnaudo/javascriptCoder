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
