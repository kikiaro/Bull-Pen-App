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
                  name: "Apple" + counter + stream,
                  info: "something",
                  active: true
                });

}, 500);

var Stream = require('user-stream');
var stream = new Stream({
    consumer_key: 'DSeQTW6yqDyhfcKurO8cum1Ag',
    consumer_secret: 'DzrJxwCKurEdENCiTL7r8K7fEbFP1rusbVX5ogtisANlL0kIqG',
    access_token_key: '70510733-7dyMhMyDVi4EZgiahS4mNZa9BRHV4yvyShWMb8OFo',
    access_token_secret: 'z8Z0s6xxze9TLaIb2Ufu3ht3UOy7ECM50tQsFuKiPwGJh'
});

//create stream
stream.stream();

//listen stream data
stream.on('data', function(json) {
  console.log(json);
});

}

function onSave(socket, doc, cb) {
  // name of event to send back to the browser
  // the doc is the payload
  socket.emit('thing:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('thing:remove', doc);
}

