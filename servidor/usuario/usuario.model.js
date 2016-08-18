'use strict';

var mongoose = require('mongoose');

var usuarioSchema = new mongoose.Schema({
  nome : String,
  email : String,
  endereco : String,
  telefone : [],
  dataDoCadastro : {
    type : Date,
    default : Date.now
  }
});

module.exports = mongoose.model('Usuario',usuarioSchema);
