/**
 * @challenge: CREAR UN ALGORITMO JS SIMPLE
 * 
 * @version: versión: 1.0.6
 * @author: Ezequiel Arnaudo.
 * @fecha: 09/12/2021
 *
 * History:
 *  - v1.0.1 – Primera entrega
 *  - v1.0.2 – Segunda entrega
 *  - v1.0.3 – Tercera entrega
 *  - v1.0.4 – Cuarta entrega
 *  - v1.0.5 – Quinta entrega 
 *  - v1.0.6 – Sexta entrega
 */

// Código de aquí en adelante



//DESAFIO: Incorporar arrays
//DESAFIO COMPLEMENTARIO: ordenar array
//PRIMERA ENTREGA DEL PROYECTO FINAL

let listadoMedicos = []; //guarda el perfil del medico en un array vacio

menu(); //Le pide al usuario que elija entre cargar un nuevo perfil o listar

function menu (){
    let seleccioneOpcion = prompt("Seleccione opcion: 1 para cargar, 2 para listar");

    if (seleccioneOpcion == 1){
        cargarMedico(); //en caso de cargar salta a la funcion para ingresar datos
    }else{
        listarMedico(); //en caso de haber medicos, los lista

    }
}




function cargarMedico(){ //le pide al usuario que ingrese sus datos

    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    let matricula = parseInt(prompt("Ingrese su numero de matricula profesional"));
    let especialidad = prompt("Ingrese su especialidad");
    let telefono = parseInt(prompt("Ingrese su numero de telefono"));
    let email = prompt("Ingrese su direccion de email");
    let sexo = prompt("Ingrese sexo");

    let nuevoMedico = new personaMedico(nombre, apellido, matricula, especialidad, telefono, email, sexo);

    listadoMedicos.push(nuevoMedico); //guarda en el array listadoMedicos la info ingresada

    alert("Bienvenido Dr/a " + nuevoMedico.nombre + " " + nuevoMedico.apellido + " su perfil se guardo correctamente");

    menu(); //una vez ingresada la info vuelve a cargar nuevo medido o listar los existentes
}

//va listando los profesionales que cargan su perfil y muestra su nombre en pantalla
function listarMedico () {
    let variable = "";
    for (let medico of listadoMedicos) {
        variable += " " + medico.nombre + " " + medico.apellido + " " + medico.especialidad;
        
    }
    alert(variable);

}

//objeto dinamico de personaMedico con lo requerido para el alta en sistema 

function personaMedico (nombre, apellido, matricula, especialidad, telefono, email, sexo){

    this.nombre = nombre;
    this.apellido = apellido;
    this.matricula = matricula;
    this.especialidad = especialidad;
    this.telefono = telefono;
    this.email = email;
    this.sexo = sexo;
}

//ordena el array por sexo masculino
let buscarSexo = listadoMedicos.find(buscarSexo => buscarSexo.sexo === ("masculino") ); 
console.log(buscarSexo);














