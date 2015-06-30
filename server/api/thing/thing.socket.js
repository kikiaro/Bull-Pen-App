/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var thing = require('./thing.model');

exports.register = function(socket) {
  thing.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  thing.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });

  var counter = 0;
  setInterval(function() {
    counter = counter + 1;
    var name = 'Apple ' + counter;
    console.log("Sending " + name);
    onSave(socket, {
      _id: counter % 5,
      name: name,
      info: "A nice afternoon snack",
      active: true
    });
  }, 1000);
}

function onSave(socket, doc, cb) {
  socket.emit('thing:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('thing:remove', doc);
}
