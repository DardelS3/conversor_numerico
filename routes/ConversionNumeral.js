var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/ConversionNumeral', function(req, res, next) {
  var mensajeEscrito = "Aqui debe estar la Conversión Numeral"
  res.render('ConversionNumeral', { title: 'Express', mensaje: mensajeEscrito });
});

module.exports = router;
