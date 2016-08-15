'use strict';

var http = require('http');
var shortid = require('shortid');

var ENDEREÇO = '127.0.0.1';
var PORTA = 3000;

var SERVIDOR = http.createServer(function(req, res){
  console.log(shortid.generate());
  res.end('Hello World\n');
});

SERVIDOR.listen(PORTA, ENDEREÇO, () => {
  console.log('Servidor Node Rodando em http://'
+ENDEREÇO+':'+PORTA);
});

shortid
