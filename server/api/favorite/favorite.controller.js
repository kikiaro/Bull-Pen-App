'use strict';

var _ = require('lodash');
var FavoriteTeam = require('./favoriteteam.model');
var Team = require('../team/team.model');
var User = require('../user/user.model');

function findTeamInFavorite(user, id) {
  // _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
  return _.find(user.favorite, function(favoriteTeam) {
    // return favoriteTeam.item === id;    // does not work!
    console.log('Comparing ' + favoriteTeam.team + ' to ' + id);
    return favoriteTeam.team.equals(id) || favoriteTeam._id.equals(id);
  });
}

// Get the cart from the DB.
exports.get = function(req, res) {
  console.log('get, url = ' + req.url);
  var userId = req.params.userid;
  console.log('userId: ' + userId);

  User.findById(userId)
  .populate('favorite.team')
  .exec(function(err, user) {
    console.log('user: ' + user.name);
    if (err) { return handleError(res, err); }
    if (!user) { return res.send(404); }
    console.log('returning favorite: ' + JSON.stringify(user.favorite));
    res.json(200, user.favorite);
  });
};

// Add a new item to the cart or update the qty and return the cart.
exports.addTeam = function(req, res) {
  console.log('addTeam, url = ' + req.url);
  var userId = req.params.userid.trim();
  var teamId = req.params.teamid.trim();
  console.log('userId: ' + userId + ', teamId: ' + teamId);

  Team.findById(teamId, function(err, team) {
    if (err) { return handleError(res, err); }
    if (!team) { return res.send(404); }
    User.findById(userId, function(err, user) {
      if (err) { return handleError(res, err); }
      if (!user) { return res.send(404); }

      // Check if item is already in cart
      var found = findTeamInFavorite(user, team._id);
      if (found) {
        console.log('Found team ' + team.name + ' in favorite, therefore incrementing qty');
        found.qty = found.qty + 1;
      }
      else {
        console.log('Adding team to favorite: ' + team.name);
        user.favorite.push( new FavoriteTeam( { team: team, qty: 1 } ) );
      }
      user.save(function() {
        user.populate('favorite.team', function(err, user) {
          return res.json(201, user.favorite );
        });
      });
    });
  });
};

// Remove an item from the cart and return the cart.
exports.removeTeam = function(req, res) {
  console.log('removeTeam, url = ' + req.url);
  var userId = req.params.userid;
  var favoriteTeamId = req.params.teamid;
  console.log('userId: ' + userId + ', favoriteTeamId: ' + favoriteTeamId);

  // Remove the item, get the updated cart, and return the cart
  User.findById(userId, function(err, user) {
    if (err) { return handleError(res, err); }
    if (!user) { return res.send(404); }

    // Check if item is already in cart
    var found = findTeamInFavorite(user, favoriteTeamId);
    if (found) {
      console.log('Removing team from favorite');
      user.favorite.pull(found._id);               // pull is a feature of MongooseArray!
    }
    else {
      return res.send(404);
    }
    user.save(function() {
      user.populate('favorite.team', function(err, user) {
        return res.json(201, user.favorite );
      });
    });
  });
};

// Remove all items from the cart in the DB.
exports.removeAllTeams = function(req, res) {
  console.log('removeAllTeams, url = ' + req.url);
  var userId = req.params.userid;
  console.log('userId: ' + userId);

  // remove all items from cart and return the cart
  User.findById(userId, function(err, user) {
    if (err) { return handleError(res, err); }
    if (!user) { return res.send(404); }

    user.favorite = new Array();
    user.save(function() {
      user.populate('favorite.team', function(err, user) {
        return res.send(204, user.favorite);
      });
    });
  });
}

function handleError(res, err) {
  return res.send(500, err);
}
