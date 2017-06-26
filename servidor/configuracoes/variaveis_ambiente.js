'use strict';

var path = require('path');

function requiredProcessEnv(name) {
  if (!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable');
  }
  return process.env[name];
}

// All configurations will extend these options
// ============================================
var all = {

  env: process.env.NODE_ENV,

  // Root path of server
  root: path.normalize(__dirname + '/../../..'),

  // Server port
  port: process.env.PORT || 80,

  // Server IP
  ip: process.env.IP || '127.0.0.1',

  // MongoDB connection options
  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  },
  mongo_user:process.env.MONGODB_USER,
  mongo_password:process.env.MONGODB_PASSWORD
};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = all;
