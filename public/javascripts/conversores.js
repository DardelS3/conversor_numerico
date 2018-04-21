//Declaracionde variables Globales
var valorOrigenTipo = "Decimal";
var valorNumOrigenTipo = "10"
var valorConvertidoTipo = "Decimal";
var valorNumConvertidoTipo = "10"
var valorEscrito = "Ingrese un Número Válido";

$(document).ready(function() {

  // Aqui escribi el codigo de los botones de Botones Originales
  $("#resultado").text(valorEscrito);
  $("#OriDec").on("click", function() {
    valorOrigenTipo = "Decimal";
    valorNumOrigenTipo = "10"
    $("#pregunta").val("");
    var valorEscrito = "Ingrese un Número Válido";
    $("#resultado").text(valorEscrito);
    $("#numeroOriginal").text(valorOrigenTipo);
  })
  $("#OriBin").on("click", function() {
    valorOrigenTipo = "Binario";
    valorNumOrigenTipo = "2"
    $("#pregunta").val("");
    var valorEscrito = "Ingrese un Número Válido";
    $("#resultado").text(valorEscrito);
    $("#numeroOriginal").text(valorOrigenTipo);
  })
  $("#OriOct").on("click", function() {
    valorOrigenTipo = "Octal";
    valorNumOrigenTipo = "8";
    $("#pregunta").val("");
    var valorEscrito = "Ingrese un Número Válido";
    $("#resultado").text(valorEscrito);
    $("#numeroOriginal").text(valorOrigenTipo);
  })
  $("#OriHex").on("click", function() {
    valorOrigenTipo = "Hexagesimal";
    valorNumOrigenTipo = "16";
    $("#pregunta").val("");
    var valorEscrito = "Ingrese un Número Válido";
    $("#resultado").text(valorEscrito);
    $("#numeroOriginal").text(valorOrigenTipo);
  })

  // Aqui escribi el codigo de los botones de Botones Convertidos
  $("#ConDec").on("click", function() {
    valorConvertidoTipo = "Decimal";
    valorNumConvertidoTipo = "10";
    $("#numeroConvertido").text(valorConvertidoTipo);
    var valor = $("#pregunta").val();
    $("#resultado").text(converDardel(valorNumOrigenTipo,valorNumConvertidoTipo,valor));
  })
  $("#ConBin").on("click", function() {
    valorConvertidoTipo = "Binario";
    valorNumConvertidoTipo = "2";
    $("#numeroConvertido").text(valorConvertidoTipo);
    var valor = $("#pregunta").val();
    $("#resultado").text(converDardel(valorNumOrigenTipo,valorNumConvertidoTipo,valor));
  })
  $("#ConOct").on("click", function() {
    valorConvertidoTipo = "Octal";
    valorNumConvertidoTipo = "8";
    $("#numeroConvertido").text(valorConvertidoTipo);
    var valor = $("#pregunta").val();
    $("#resultado").text(converDardel(valorNumOrigenTipo,valorNumConvertidoTipo,valor));
  })
  $("#ConHex").on("click", function() {
    valorConvertidoTipo = "Hexagesimal";
    valorNumConvertidoTipo = "16";
    $("#numeroConvertido").text(valorConvertidoTipo);
    var valor = $("#pregunta").val();
    $("#resultado").text(converDardel(valorNumOrigenTipo,valorNumConvertidoTipo,valor));
  })


  //Luego dentro de cada boton hay que hacer el codigo para que cambie el textarea.

  $("#pregunta").keyup(function() {
    var valor = $("#pregunta").val();
    $("#resultado").text(converDardel(valorNumOrigenTipo,valorNumConvertidoTipo,valor));

  });
});

// Declarar la funcion y las variables
function converDardel(sistemaOrigen, sistemaConvertir, valorFinal){
  var valorConvertido = "0"
  valorConvertido = parseInt(valorFinal, sistemaOrigen).toString(sistemaConvertir)
  if (parseInt(valorConvertido, sistemaConvertir) >= 0 || parseInt(valorConvertido, sistemaOrigen) < 0 ) {
      return valorConvertido;
  } else {
    return "Ya m cansé prro :'v ";
  }
}
