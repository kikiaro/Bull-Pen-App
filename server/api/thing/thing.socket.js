/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var thing = require('./thing.model');

exports.register = function(socket) {
  // Mongoose, whenever you save, call this function - pass in socket and doc
  // i.e. the doc from Mongoose
  thing.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  thing.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });

var counter = 0;

setInterval(function(){
  counter += 1;
  console.log('hello ' + counter);
  onSave(socket, {
                  _id: counter % 5,
                  name: "Apple " + counter,
                  info: "something",
                  active: true
                });

}, 500);

}

function onSave(socket, doc, cb) {
  // name of event to send back to the browser
  // the doc is the payload
  socket.emit('thing:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('thing:remove', doc);
}

