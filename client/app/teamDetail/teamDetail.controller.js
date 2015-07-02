'use strict';

angular.module('project3App')
  .controller('TeamDetailCtrl', function($stateParams, teamService) {

  var that = this;

  var id = $stateParams.teamId;
  teamService.findTeamById(id).then(function(json) {
    that.team = json.data;
  });
});
