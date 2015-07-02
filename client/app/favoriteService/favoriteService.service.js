'use strict';

angular.module('project3App')
  .service('favoriteService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

  var that = this;

  that.favorite = [];

  function findTeamById(teams, id) {
    return _.find(teams, function(item) {
      return team._id === id;
    });
  }

  that.addTeam = function(team) {
    var found = findTeamById(that.favorite, team._id);
    if (found) {
      found.qty += team.qty;
    }
    else {
      that.favorite.push(angular.copy(team));
    }
  };

  that.removeTeam = function(team) {
    var index = that.favorite.indexOf(team);
    that.favorite.splice(index, 1);
  };

  that.clearFavorite = function() {
    that.favorite.length = 0;
  };
});


  });
