'use strict';

angular.module('project3App')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.baseballTeams = [];

    $http.get('/api/teams').success(function(baseballTeams) {
      $scope.baseballTeams = baseballTeams;
      socket.syncUpdates('team', $scope.baseballTeams);
    });

    $scope.addTeam = function() {
      if($scope.newTeam === '') {
        return;
      }
      $http.post('/api/teams', { name: $scope.newTeam });
      $scope.newTeam = '';
    };

    $scope.deleteTeam = function(team) {
      $http.delete('/api/teams/' + team._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('team');
    });
  });
