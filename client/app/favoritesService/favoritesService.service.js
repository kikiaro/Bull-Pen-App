'use strict';

angular.module('project3App')
  .service('favoritesService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

  var that = this;

  that.favorites = [];

  function findTeamById(teams, id) {
    return _.find(teams, function(item) {
      return team._id === id;
    });
  }

  that.addTeam = function(team) {
    var found = findTeamById(that.favorites, team._id);
    if (found) {
      found.qty += team.qty;
    }
    else {
      that.favorites.push(angular.copy(team));
    }
  };

  that.removeTeam = function(team) {
    var index = that.favorites.indexOf(team);
    that.favorites.splice(index, 1);
  };

  that.clearFavorites = function() {
    that.favorites.length = 0;
  };
});


  });
