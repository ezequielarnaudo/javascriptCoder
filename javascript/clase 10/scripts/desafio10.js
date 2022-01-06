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
 *  - v1.0.8 – Octava entrega
 *  - v1.0.9 – Novena entrega
 *  - v1.0.10 - Décima entrega
 */



//llamada a las funciones para cancelar o guardar info al hacer click en uno u otro btn.
let botonCancelar = document.getElementById("btnCancelar");
botonCancelar.addEventListener("click", Cancelar);

let botonAceptar = document.getElementById("btnAceptar");
botonAceptar.addEventListener("click", guardar);




// esta funcion hace que al presionar el boton "cancelar", se limpie el formulario

function Cancelar()
{
    document.getElementById("nombreDoc").value="";
    document.getElementById("apellidoDoc").value="";
    document.getElementById("matriculaDoc").value="";
    document.getElementById("especialidadDoc").value="";

}



let datoStorage;
let listado;

function leerLocalStorage(){

     datoStorage = localStorage.getItem('datos'); //lee local storage y lo guarda en una variable
    
       if (datoStorage == null) //si la variable previamente seteada es null
       {
           localStorage.setItem('datos', '[]') //almacena un string que representa un array vacio
           
           datoStorage = localStorage.getItem('datos'); //obtiene de vuelta el localstorage 
                                                        //y lo vuelve a guardar en la variable
       } 

    listado = JSON.parse(datoStorage); //convierte la cariable los valores de 
                                       //local storage y los convierte en OBJETOS

    //obtiene el DOM del cuerpo de la tabla
    let cuerpoTabla = document.getElementById("cuerpoTabla");
    //limpia el cuerpo de la tabla
    cuerpoTabla.innerHTML="";

    //FOR: declara contador en cero, si el contador es menor al ARRAY DE OBJETOS, incrementa contador
    for (let contador = 0; contador < listado.length; contador++) {
         
        let fila = document.createElement("tr");//crea un DOM TR (fila de tabla)
        fila.innerHTML="<td>" + listado[contador].nombre + " " +listado[contador].apellido +  "</td>";// setea el html de la fila con una celda adentro y accede a la posicion del arreglo o array o matriz
        fila.innerHTML+="<td>" + listado[contador].matricula + "</td>";
        fila.innerHTML+="<td>" + listado[contador].especialidad + "</td>";
        cuerpoTabla.appendChild(fila); // pega la fila que armamos anteriormente
    }
}

//guarda los datos ingresados
function guardar () {

    let nombre = document.getElementById("nombreDoc").value;
    let apellido = document.getElementById("apellidoDoc").value;
    let matricula = parseInt(document.getElementById("matriculaDoc").value); 
    let especialidad = document.getElementById("especialidadDoc").value;

    datoStorage = localStorage.getItem('datos');
    listado = JSON.parse(datoStorage);
    let medico = new personaMedico(nombre, apellido, matricula, especialidad);
    listado.push(medico);
    let listadoJson = JSON.stringify(listado);
    localStorage.setItem('datos', listadoJson);
    Cancelar();
    leerLocalStorage();
}

class personaMedico {

    constructor(nombre, apellido, especialidad, matricula) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.especialidad = especialidad;
        this.matricula = matricula;
    }
}

leerLocalStorage();