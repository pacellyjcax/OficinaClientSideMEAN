'use strict';

var http = require('http');
var express = require('express');

var ENDEREÇO = '127.0.0.1';
var PORTA = 3000;

var app = express();

var SERVIDOR = require('http').createServer(app);
require('./configuracoes/express')(app);

require('./configuracoes/rotas')(app);

SERVIDOR.listen(PORTA, ENDEREÇO, () => {
  console.log('Servidor Node Rodando em http://'
+ENDEREÇO+':'+PORTA);
});
