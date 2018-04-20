var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var mensajeEscrito = "Aqui debe estar la Conversión Numeral"
  res.render('ConversionNumeral', { title: 'Express', mensaje: mensajeEscrito });
});

router.get('/dec', function(req, res, next){
  res.send("Hola mundo");
})

module.exports = router;
