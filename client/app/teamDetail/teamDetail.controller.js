'use strict';

angular.module('project3App')
  .controller('TeamDetailCtrl', function($stateParams, teamService) {
    var id = $stateParams.teamId;
    this.team = teamService.findTeamById(id);
  });
