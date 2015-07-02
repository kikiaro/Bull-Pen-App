'use strict';

angular.module('project3App')
  .controller('TeamsCtrl', function($state, teamService, favoriteService) {

    this.searchText = '';
          teamService.getTeams().then(function(json) {
            that.inventory = json.data;
      });

    this.favorite = favoritesService.favorite;
    this.addTeam = function(team) {
      favoriteService.addTeam(team);
    };

    this.removeTeam = function(team) {
      favoriteService.removeTeam(team);
    };

    this.clearFavorite = function() {
      return favoriteService.clearFavorite();
    };

    this.goTeam = function (team) {
      console.log('goTeam: ' + team._id);
      $state.go( 'teamDetail', { teamId : team._id } );
    };
  });
