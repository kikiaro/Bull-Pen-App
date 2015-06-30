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
  console.log(stream);
  onSave(socket, {
                  _id: counter % 5,
                  name: stream,
                  info: "something",
                  active: true
                });

}, 500);

// ref https://github.com/aivis/user-stream

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

// ref https://github.com/ciaranj/node-oauth

describe('OAuth1.0',function(){
  var OAuth = require('oauth');

  it('tests trends Twitter API v1.1',function(done){
    var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      'DSeQTW6yqDyhfcKurO8cum1Ag',
      'DzrJxwCKurEdENCiTL7r8K7fEbFP1rusbVX5ogtisANlL0kIqG',
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    oauth.get(
      'https://api.twitter.com/1.1/trends/place.json?id=23424977',
      'your user token for this app', //test user token
      'your user secret for this app', //test user secret
      function (e, data, res){
        if (e) console.error(e);
        console.log(require('util').inspect(data));
        done();
      });
  });
});

function onSave(socket, doc, cb) {
  // name of event to send back to the browser
  // the doc is the payload
  socket.emit('thing:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('thing:remove', doc);
}

