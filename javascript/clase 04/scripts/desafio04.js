/**
 * @challenge: CREAR UN ALGORITMO JS SIMPLE
 * 
 * @version: versión: 1.0.4
 * @author: Ezequiel Arnaudo.
 * @fecha: 23/11/2021
 *
 * History:
 *  - v1.0.0 – Primera entrega
 */

// Código de aquí en adelante


 


//DESAFIO: Calcular pagos en cuotas sobre un monto determinado.
let ingresarMonto = prompt("Ingrese el monto a pagar");

let ingresarCuotas = prompt("Ingresar cantidad de cuotas");

function calcularCuotas(monto, cuota){

    let resultado = monto / cuota;
    return resultado;

}

let res = calcularCuotas(ingresarMonto, ingresarCuotas);

alert("EL MONTO A PAGAR POR MES ES DE: " + res);



//==========================================================================================//



//DESAFIO COMPLEMENTARIO: Calcular pagos en cuotas sobre un monto determinado.
let precioCosto = prompt("Ingrese el precio de costo del producto");

function calcularIva(precio, iva) {
    
    let costoTotal = precio * iva;
    return costoTotal;
}

let precioFinal = calcularIva(precioCosto, 1.21);
alert("El costo del producto con IVA es de: " + precioFinal);





//DESAFIO COMPLEMENTARIO: Calcula si el numero ingresado es par o impar.
let comprobacion = prompt("Ingrese un numero cualquiera");

function validarNum (numero) {

    if (numero % 2 == 0) {
        alert("El numero es par");
    }

    else {
        alert ("El numero es impar")
    }    
}

validarNum(comprobacion);


//DESAFIO COMPLEMENTARIO: Multiplica 3 numeros.
let numero1 = prompt("Ingrese un numero");
let numero2 = prompt("Ingrese un numero");
let numero3 = prompt("Ingrese un numero");

function multiTres (num1, num2, num3) {

    let valor = num1 * num2 * num3;
    return valor;
}

let resolucion = multiTres (numero1,numero2, numero3);
alert("El resultado es: " + resolucion );

//Reutiliza la funcion anterior con nuevas variables
let numero4 = prompt("Ingrese un numero");
let numero5 = prompt("Ingrese un numero");
let numero6 = prompt("Ingrese un numero");

let resolucion2 = multiTres (numero4,numero5, numero6);
alert("El resultado es: " + resolucion2 );


