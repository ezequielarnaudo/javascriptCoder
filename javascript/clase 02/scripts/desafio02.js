/**
 * @challenge: CREAR UN ALGORITMO JS SIMPLE
 * 
 * @version: versión: 1.0.0
 * @author: Ezequiel Arnaudo.
 * @fecha: 25/11/2021
 *
 * History:
 *  - v1.0.1 – Primera entrega
 */

// Código de aquí en adelante


let numero = parseInt(prompt("INGRESE UN NUMERO ENTRE 0 Y 100"));

if(numero > 100){
    alert("El numero ingresado es " + numero + " y no cumple con la consigna" );
}else{
    alert("El numero ingresado es " + numero);
}

let num1 = parseInt(prompt("INGRESE UN NUMERO"));
if(isNaN(num1)){
   alert(" Usted NO ingreso un numero");
   
}else{
   alert("Usted ingreso correctamente el numero " + num1);
}

