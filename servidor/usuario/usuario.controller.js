'use strict';

var USUARIOS = [];

// Lista de Usuarios
exports.listaTodos = function(req, res) {
  var novoUsuario = {
    nome : "Joao",
    cod : 1
  };

  USUARIOS.push(novoUsuario);
  return res.status(200).json(USUARIOS);
};

// Pegar um Usuario
exports.pegaUm = function(req, res) {
  return res.status(200).json(USUARIOS);
};

// Criar Usuario.
exports.criaUm = function(req, res) {
  return res.status(200).json();
};

// Alterar Usuario
exports.editaUm = function(req, res) {
  return res.status(200).json();
};

// Deletar Usuario.
exports.deletaUm = function(req, res) {
  return res.status(200).json();
};
