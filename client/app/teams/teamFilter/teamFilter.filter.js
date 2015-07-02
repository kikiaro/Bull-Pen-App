'use strict';

angular.module('project3App')
    .filter('teamFilter', function () {
      function isMatch(str, pattern) {
        return str.toLowerCase().indexOf(pattern.toLowerCase()) !== -1;
      }

      return function(inventory, searchText) {
        var teams = {
            searchText: searchText,
            out: []
        };
        angular.forEach(inventory, function (team) {
          if (isMatch(team.category   , this.searchText) ||
              isMatch(team.name       , this.searchText) ||
              isMatch(team.description, this.searchText) ) {
            this.out.push(team);
          }
        }, teams);
        return teams.out;
      };
    });
