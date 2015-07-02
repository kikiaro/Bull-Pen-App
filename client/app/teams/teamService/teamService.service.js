'use strict';

angular.module('project3App')
  .service('teamService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

  var that = this;

  that.findTeamById = function(id) {
    var teamId = parseInt(id);
    return _.find(that.inventory, function(team) {
      return team._id === parseInt(teamId);
    });
  };

  // TODO: eventually we want to fetch the inventory from the server.
     that.findTeamById = function(id) {
        return $http.get('/api/teams/' + id);
      };

      that.getItems = function() {
        return $http.get('/api/teams');
      };

});
