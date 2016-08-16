/**
 * Configurações de Rotas
*/

'use strict';

var path = require('path');

module.exports = function(app) {

  app.use('/usuarios', require('../usuario'));

  // // Bloqueio de rotas acesso
  // app.route('/:url(api|app)/*')
  // .get(function(req, res) {
  //   res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
  // });

  // Bloqueio de rotas acesso
  // app.route('/*')
  //   .get(function(req, res) {
  //     res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
  //   });
};
