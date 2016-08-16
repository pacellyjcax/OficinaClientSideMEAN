/**
 * Configurações do Express
*/

'use strict';

var path = require('path');
var express = require('express');

module.exports = function(app) {

  app.use(express.static(path.join('', 'cliente')));
  app.set('appPath', path.join('', 'cliente'));

};
