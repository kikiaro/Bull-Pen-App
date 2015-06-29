/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var mongoose = require('mongoose');
var config = require('./config/environment');

// Connect to database
mongoose.connect(config.mongo.uri, config.mongo.options);

// Populate DB with sample data
if(config.seedDB) { require('./config/seed'); }

// Setup server
var app = express();
var server = require('http').createServer(app);
// IS THIS PATH CORRECT???
var socketio = require('socket.io')(server, {
  serveClient: (config.env === 'production') ? false : true,
  path: '/socket.io-client'
});
// var io = require('socekt.io')(server);
// compare this to the json configuration in the socket.io intro script
require('./config/socketio')(socketio);
require('./config/express')(app);
require('./routes')(app);

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

app.get('/', function (req, res) {
  res.sendfile('client' + '/index.html');
});

// Expose app
exports = module.exports = app;

socketio.on('connection', function (socket){
  socket.emit('news', {hello: 'world'});
  socket.on('my other event', function(data){
    console.log(data);
  });
});
