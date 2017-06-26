'use strict';

var http = require('http');
var express = require('express');
var mongoose = require('mongoose');
var ambiente = require('./servidor/variaveis_ambiente');

//DADOS 'DEFAULT' DO SERVIDOR
var ENDEREÇO = '127.0.0.1';
var PORTA = 80;
var URI_DO_BD = 'mongodb://'+ambiente.mongo_user+':'+ambiente.mongo_password+'@clientesidemain-mongo:27017/clientesidemain-mongo';

//INICIALIZANDO A APLICAÇÃO DO EXPRESS
var APP = express();

//INICIALIZANDO A CONEXÃO COM O MONGODB
mongoose.connect(URI_DO_BD);
mongoose.connection.on('error', function() {
  console.log('Nao foi possivel se conectar com o BD');
  process.exit(-1);
});

var SERVIDOR = require('http').createServer(APP);
require('./configuracoes/express')(APP);

require('./configuracoes/rotas')(APP);

SERVIDOR.listen(PORTA, ENDEREÇO, function() {
  console.log('Servidor Node Rodando em http://'
+ENDEREÇO+':'+PORTA);
});
