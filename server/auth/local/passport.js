var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;

exports.setup = function (User, config) {
  passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password' // this is the virtual field on the model
    },
    function(email, password, done) {
      User.findOne({
        email: email.toLowerCase()
      }, function(err, user) {
        if (err) return done(err);

        if (!user) {
          return done(null, false, { message: 'This email is not registered.' });
        }
        if (!user.authenticate(password)) {
          return done(null, false, { message: 'This password is not correct.' });
        }
        return done(null, user);
      });
    }
  ));
};
  passport.use(new TwitterStrategy({
          consumerKey: 'GDFpoSyZPgobu1ohoCKN46yf3',
          consumerSecret: 'MVLXZ4YKNPmq2BvQJLQ6ItoMHKqpoiqHdotrL9ff23BGeIzXKE',
          callbackURL: 'http://127.0.0.1:9000/twitter-callback'
        },
        function(token, tokenSecret, profile, done) {
          User.findOrCreate({ twitterId: profile.id}, function (err, user) {
            done(err, user);
          });
        }
      ));