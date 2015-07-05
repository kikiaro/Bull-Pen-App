'use strict';

angular.module('project3App')
.service('favoriteService', function ($http, Auth) {

  var that = this;

  that.getFavorite = function() {
    var userId = Auth.getCurrentUser()._id;
    return $http.get('/api/users/' + userId + '/favorite/');
  };

  that.addTeam = function(team) {
    var userId = Auth.getCurrentUser()._id;
    return $http.post('/api/users/' + userId + '/favorite/' + team._id);
  };

  that.saveTeam = function(team) {
    var userId = Auth.getCurrentUser()._id;
    return $http.put('/api/users/' + userId + '/favorite/' + favoriteTeam._id);
  };

  that.removeTeam = function(favoriteTeam) {
    var userId = Auth.getCurrentUser()._id;
    return $http.delete('/api/users/' + userId + '/favorite/' + favoriteTeam._id);
  };


  that.clearFavorite = function() {
    var userId = Auth.getCurrentUser()._id;
    return $http.delete('/api/users/' + userId + '/favorite/');
  };
<<<<<<< HEAD
});
=======

that.saveTeam = function(team) {
    var userId = Auth.getCurrentUser()._id;
    return $http.put('/api/users/' + userId + '/favorite/' + favoriteTeam._id);
  };
});
>>>>>>> b68e5c26fe245d4cf5c3dc506cf718937604a782
