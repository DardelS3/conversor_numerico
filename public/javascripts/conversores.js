$(document).ready(function () {
  // Aqui escribi el codigo de los botones de Botones Originales
  var ValorOrigenTipo = "Decimal";
  var valorConvertidoTipo = "Decimal";

  $("#OriDec").on("click",function () {
    ValorOrigenTipo = "Decimal";
    $("#pregunta").val("");
    $("#resultado").text("0");
    $("#numeroOriginal").text(ValorOrigenTipo);
  })
  $("#OriBin").on("click",function () {
    ValorOrigenTipo = "Binario";
    $("#pregunta").val("");
    $("#resultado").text("0");
    $("#numeroOriginal").text(ValorOrigenTipo);
  })
  $("#OriOct").on("click",function () {
    ValorOrigenTipo = "Octal";
    $("#pregunta").val("");
    $("#resultado").text("0");
    $("#numeroOriginal").text(ValorOrigenTipo);
  })
  $("#OriHex").on("click",function () {
    ValorOrigenTipo = "Hexagesimal";
    $("#pregunta").val("");
    $("#resultado").text("0");
    $("#numeroOriginal").text(ValorOrigenTipo);
  })
  // Aqui escribi el codigo de los botones de Botones Convertidos
  $("#ConDec").on("click",function (){
    ValorOrigenTipo = "Decimal";
    $("#numeroConvertido").text(ValorOrigenTipo)
  })
  $("#ConBin").on("click",function (){
    ValorOrigenTipo = "Binario";
    $("#numeroConvertido").text(ValorOrigenTipo)
  })
  $("#ConOct").on("click",function (){
    ValorOrigenTipo = "Octal";
    $("#numeroConvertido").text(ValorOrigenTipo)
  })
  $("#ConHex").on("click",function (){
    ValorOrigenTipo = "Hexagesimal";
    $("#numeroConvertido").text(ValorOrigenTipo)
  })


  //Luego dentro de cada boton hay que hacer el codigo para que cambie el textarea.
});

$("#pregunta").keyup(function(){
  var valor = $("#pregunta").val();
   $("#resultado").text(valor);
});
