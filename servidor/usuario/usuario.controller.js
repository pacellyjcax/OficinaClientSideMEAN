'use strict';

var Usuario = require('./usuario.model');

// Lista de Usuarios
exports.listaTodos = function(req, res) {
  // Usuario.find(function (err, usuarios) {
  //   return res.status(200).json(usuarios);
  // });
     return res.json({
       nome:'pacelly',
       pcr:'gustavo'
     });
};

// Pegar um Usuario
exports.pegaUm = function(req, res) {
  Usuario.findById(req.params.id, function (err, usuario) {
    if (!usuario) {
      return res.status(404);
    }
    return res.json(usuario);
  });
};

// Criar Usuario.
exports.criaUm = function(req, res) {
  Usuario.create(req.body, function(err, usuario) {
    return res.status(201).json(usuario);
  });
};

// Alterar Usuario
exports.editaUm = function(req, res) {
  // var consulta = {"_id": req.body._id};
  // if(req.body._id) {
  //   delete req.body._id;
  // }
  // var mudancas = req.body;
  // var opcoes = {new: false};
  // Usuario.findOneAndUpdate(consulta, mudancas, opcoes, function(err, usuario) {
  //   return res.status(200).json(usuario);
  // });
};

// Deletar Usuario.
exports.deletaUm = function(req, res) {
  Usuario.findById(req.params.id, function (err, usuario) {
    usuario.remove(function(err) {
    });
  });
};
