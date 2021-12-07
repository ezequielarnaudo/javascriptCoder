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

function personaMedico (nombre, apellido, matricula, especialidad, telefono, email){

    this.nombre = nombre;
    this.apellido = apellido;
    this.matricula = matricula;
    this.especialidad = especialidad;
    this.telefono = telefono;
    this.email = email;

}

let nuevoMedico = new personaMedico('Ezequiel', 'Arnaudo', 112233, 'cirujano', 778899, 'ejemplo@ejemplo.com');


