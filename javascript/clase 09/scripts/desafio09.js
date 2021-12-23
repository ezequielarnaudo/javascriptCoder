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
 */

// Código de aquí en adelante

let botonCancelar = document.getElementById("btnCancelar");
botonCancelar.addEventListener("click", Cancelar);

let botonAceptar = document.getElementById("btnAceptar");
botonAceptar.addEventListener("click", Guardar);





function Cancelar()
{
    document.getElementById("nombreDoc").value="";
    document.getElementById("apellidoDoc").value="";
    document.getElementById("matriculaDoc").value="";
    document.getElementById("especialidadDoc").value="";

}




function Guardar()
{
    let nombre = document.getElementById("nombreDoc").value;
    let apellido = document.getElementById("apellidoDoc").value;
    let matricula = document.getElementById("matriculaDoc").value;
    let especialidad = document.getElementById("especialidadDoc").value;
    let cuerpoTabla = document.getElementById("cuerpoTabla");
    let fila = document.createElement("tr");
    fila.innerHTML="<td>" + nombre + " " + apellido + "</td>";
    fila.innerHTML+="<td>" + matricula + "</td>";
    fila.innerHTML+="<td>" + especialidad + "</td>";
    cuerpoTabla.appendChild(fila);
    Cancelar();
    
}
















