'use strict';

var express = require('express');
var controller = require('./usuario.controller');

var GERENCIADORdeROTAS = express.Router();

GERENCIADORdeROTAS.get('/', controller.listaTodos);
GERENCIADORdeROTAS.get('/:id', controller.pegaUm);
GERENCIADORdeROTAS.post('/', controller.criaUm);
GERENCIADORdeROTAS.put('/:id', controller.editaUm);
GERENCIADORdeROTAS.patch('/:id', controller.editaUm);
GERENCIADORdeROTAS.delete('/:id', controller.deletaUm);

module.exports = GERENCIADORdeROTAS;
