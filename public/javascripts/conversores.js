$(document).ready(function () {
  // Aqui escribi el codigo de los botones de Botones Originales
$("#OriDec").on("click",function () {
    $("#numeroOriginal").text("Decimal")
  })
  $("#OriBin").on("click",function () {
    $("#numeroOriginal").text("Binario")
  })
  $("#OriOct").on("click",function () {
    $("#numeroOriginal").text("Octal")
  })
  $("#OriHex").on("click",function () {
    $("#numeroOriginal").text("Hexagesimal")
  })
  // Aqui escribi el codigo de los botones de Botones Convertidos
  $("#ConDec").on("click",function () {
    $("#numeroConvertido").text("Decimal")
  })
  $("#ConBin").on("click",function () {
    $("#numeroConvertido").text("Binario")
  })
  $("#ConOct").on("click",function () {
    $("#numeroConvertido").text("Octal")
  })
  $("#ConHex").on("click",function () {
    $("#numeroConvertido").text("Hexagesimal")
  })


  //Luego dentro de cada boton hay que hacer el codigo para que cambie el textarea.
});

$("#pregunta").keyup(function(){
  var valor = $("#pregunta").val();
   $("#resultado").text(valor);
});
