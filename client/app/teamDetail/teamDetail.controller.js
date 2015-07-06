'use strict';

angular.module('project3App')
  .controller('TeamDetailCtrl', function($stateParams, $location, Auth, teamService) {

  var that = this;

  that.isLoggedIn = Auth.isLoggedIn;
  that.isAdmin = Auth.isAdmin;
    
  that.isActive = function(route) {
    return route === $location.path();
  };

  var id = $stateParams.teamId;
  teamService.findTeamById(id).then(function(json) {
    that.team = json.data;
  });
});
