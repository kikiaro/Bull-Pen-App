'use strict';

angular.module('project3App')
  .controller('MainCtrl', function ($scope, $http, socket) {
    // here he injects the socket service
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      // thing is the name of the event
      // therefore, this connects to line 37 on thing.socket.js
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      // when the controller gets destroyed, we stope listening for updates to thing
      socket.unsyncUpdates('thing');
    });
  });
