var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var mensajeEscrito = "Hola Mundo"
  res.render('index', { title: 'Express', mensaje: mensajeEscrito });
});

module.exports = router;
