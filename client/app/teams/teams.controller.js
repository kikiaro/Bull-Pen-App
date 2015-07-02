'use strict';

angular.module('project3App')
  .controller('TeamsCtrl', function($state, teamService, favoriteService) {

   var that = this;

  that.searchText = '';
  that.total = 0;

  that.getInventory = function() {
    teamService.getTeams().then(function(json) {
      that.inventory = json.data;
    });
  };

  favoriteService.getFavorite().then(function(json) {
    that.favorite = json.data;
  });

  that.getInventory();

  that.addTeam = function(team) {
    favoriteService.addTeam(team).then(function(json) {
      that.favorite = json.data;
    }, function(err) {
      console.log('ERROR: addTeam post: ' + JSON.stringify(err));
    });
  };

  that.removeTeam = function(team) {
    favoriteService.removeTeam(team).then(function(json) {
      that.favorite = json.data;
    }, function(err) {
      console.log('ERROR: removeTeam delete: ' + JSON.stringify(err));
    });
  };

  that.clearFavorite = function() {
    return favoriteService.clearFavorite().then(function(json) {
      that.favorite = json.data;
    }, function(err) {
      console.log('clearFavorite delete ERROR: ' + JSON.stringify(err));
    });
  };

  that.goTeam = function (team) {
    $state.go( 'teamDetail', { teamId : team._id } );
  };

});
