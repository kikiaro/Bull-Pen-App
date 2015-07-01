'use strict';

angular.module('project3App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('teams', {
        url: '/teams',
        templateUrl: 'app/teams/teams.html',
        controller: 'TeamsCtrl'
      });
  });