

var cliente = "Marifer Salon´s";
var whatsapp = "(506) 8871-1408";
var numero = "50688711408";
var email = "mfbb-md@hotmail.com";
var asunto = "Información solicitada desde"+cliente;
var sobremi = "Estilista Profesional. \n Maestría en color y manicurista. \n Todo en cabellos, uñas, esmaltado, extensiones de pestañas, sombreado de cejas y mucho más";
var notaEspecial = "Nota Importante";
var detalleNota = "Se atiende solo con cita previa.";
var facebook = "https://www.facebook.com/Marifer-Salons-Agencia-1054005621454204/";

//TITULO DEL SITIO WEB EN LA PESTAÑA DEL NAVEGADOR
document.getElementById("nC").innerHTML = cliente;


function clientes(cliente="", whatsapp="",email="",mailto="",numero="",sobremi="", notaEspecial="",detalleNota="",facebook=""){
    let datos = document.write(cliente, whatsapp,email,mailto,numero,sobremi,notaEspecial,detalleNota,facebook);
    return datos;
};

function mail(){
    let datos = window.location.href ="mailto:mfbb-md@hotmail.com";
    return datos;
};





