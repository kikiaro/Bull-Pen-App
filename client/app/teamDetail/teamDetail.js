'use strict';

angular.module('project3App')
  .config(function ($stateProvider) {
  $stateProvider
  .state('teamDetail', {
      url: '/teams/:teamId',
      templateUrl: 'app/teamDetail/teamDetail.html',
      controller: 'TeamDetailCtrl as ctrl',
      onEnter: function() {
        console.log('Entering teamDetail');
      },
      onExit: function() {
        console.log('Leaving teamDetail');
      }
    });
});
