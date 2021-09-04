//Hecho por: Cesia Rebeca Reyes Escobar
//Carnet: U20190337


// funcion que trabaja como manejador de eventos
//
function init () {
    // Ingresar los datos a convertir
    var op1 = prompt ('Ingrese la cantidad de metros: ','');
    var operaciones = document.getElementById ('operaciones');

    var resultado = document.getElementById ('resultado');
    var contenido = "<header>\n";
    contenido += "\t <h1> Calcular las medidas</h1>\n";
    contenido += "</header> \n";
    
    contenido += "<nav> \n";
    contenido += "<ul class=\"Botones\">\n";
    contenido += "\t </li class=\"Botoncitos\">\n";
    contenido += "\t\t <a href=\"javascript:void(0)\"> <input type = 'button1' value = 'Pies'></a>\n";
    contenido += "\t </li> \n";
    contenido += "\t<li class=\"Bontoncitos\">\n";
    contenido += "\t\t <a href=\"javascript:void(0)\"> <input type = 'button2' value = 'Pulgadas'></a>\n";
    contenido += "</li> \n";
    contenido += "\t<li class=\"Bontoncitos\">\n";
    contenido += "\t\t <a href=\"javascript:void(0)\"> <input type = 'button3' value = 'Yardas'></a>\n";
    contenido += "</li> \n";
    contenido += "</ul> \n";
    contenido += "</nav> \n";

    operaciones.innerHTML = contenido;
    var opciones = document.getElementsByTagName ('a');

    for (var i = 0; i <opciones.length; i ++) {
        switch (i) {
            case 0:                 
            // Función sumar                 
            opciones [i] .onclick = function () {                     
                resultado.innerHTML = "<p class=\"letterpress\">" + op1 + "Metros son equivalente a" + (parseFloat (op1) * parseFloat (3.281)) + " Pies </p>\n";                 
            }                 
            break; 
            case 1:
            opciones [i] .onclick = function () {                     
                resultado.innerHTML = "<p class=\"letterpress\">" + op1 + " Metros son equivalente a " + (parseFloat (op1) * parseFloat (39.37)) + " Pulgadas </p>\n";                 
            }                 
            break; 
            case 2: 
            opciones [i] .onclick = function () {                     
                resultado.innerHTML = "<p class=\"letterpress\">" + op1 + " Metros son equivalente a " + (parseFloat (op1) * parseFloat (1.094)) + " Yardas </p>\n";                 
            }                 
            break;
            case 3: 
            opciones [i] .onclick = function () {                     
                if (opc < 0) {
                    resultado.innerHTML = "<p class=\"letterpress\"> No se permiten numeros negativos </p>";
                }
                else {
                    resultado.innerHTML = "<p class = \"letterpress\">" + op1 + " / " + op2 + "=" + Math.round ((op1 / op2) * 100) /100 + "</p>\n"; 
                }
            }                 
            break;  
        }
    }
}
window.onload = init ();
