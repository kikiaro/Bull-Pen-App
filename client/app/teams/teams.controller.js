'use strict';

angular.module('project3App')
  .controller('TeamsCtrl', function($state, teamService, favoriteService) {

    this.searchText = '';
    this.inventory = teamService.inventory;
    this.favorite = favoritesService.favorite;

    this.addItem = function(team) {
      favoriteService.addItem(team);
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
