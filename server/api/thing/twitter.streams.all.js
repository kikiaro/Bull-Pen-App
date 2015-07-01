//example of using streams, using directly the twit library (via getApiClient)
//this time stopping and restarting the stream

var TwitterStreamChannels = require('../../main');
var credentials = require('../../twitter.credentials.json');

var client = new TwitterStreamChannels(credentials);
var connected = false;

var stream = client.getApiClient().stream('statuses/filter', {
  track: [
    'angels',
    'astros',
    'athletics',
    'bluejays',
    'braves',
    'brewers',
    'cubs',
    'cardinals',
    'devilrays',
    'diamondbacks',
    'dodgers',
    'expos',
    'giants',
    'indians',
    'mariners',
    'marlins',
    'mets',
    'nationals',
    'orioles',
    'padres',
    'phillies',
    'pirates',
    'rangers',
    'reds',
    'redsox',
    'rockies',
    'royals',
    'tigers',
    'twins',
    'whitesox',
    'yankees'
  ]});

stream.on('connect', function() {
  console.log('> attempting to connect to twitter');
});

stream.on('connected', function() {
  if(connected === false){
    console.log('> twitter emit : connected');
    connected = true;
  }
});

stream.on('disconnect', function() {
  console.log('> twitter emit : disconnect');
  connected = false;
});

stream.on('tweet', function(tweet) {
  console.log(tweet.text);
});

stream.on('reconnect', function (request, response, connectInterval) {
  console.log('> waiting to reconnect in '+connectInterval+'ms');
});
