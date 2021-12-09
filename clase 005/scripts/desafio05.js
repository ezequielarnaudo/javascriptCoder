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


 


//DESAFIO: incorporar objetos

//Guarda la informacion de un profesional medico para darse de alta como usuario en el sistema

let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese sui apellido");
let matricula = parseInt(prompt("Ingrese su numero de matricula profesional"));
let especialidad = prompt("Ingrese su especialidad");
let telefono = parseInt(prompt("Ingrese su numero de telefono"));
let email = prompt("Ingrese su direccion de email");



function personaMedico (nombre, apellido, matricula, especialidad, telefono, email){

    this.nombre = nombre;
    this.apellido = apellido;
    this.matricula = matricula;
    this.especialidad = especialidad;
    this.telefono = telefono;
    this.email = email;
}

let nuevoMedico = new personaMedico(nombre, apellido, matricula, especialidad, telefono, email);

alert("Bienvenido Dr/a " + nombre + " " + apellido);


