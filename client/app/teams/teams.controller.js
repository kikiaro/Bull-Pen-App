'use strict';

angular.module('project3App')
  .controller('TeamsCtrl', function($state, $location, Auth, teamService, favoriteService) {

   var that = this;

    that.isLoggedIn = Auth.isLoggedIn;
    that.isAdmin = Auth.isAdmin;
    
    that.isActive = function(route) {
      return route === $location.path();
    };

   that.searchText = '';
   that.total = 0;
   that.currentUser = Auth.getCurrentUser();

  that.getInventory = function() {
    teamService.getTeams().then(function(json) {
      that.inventory = json.data;
    });
  };
  that.getInventory();

  that.addTeam = function(team) {
    favoriteService.addTeam(team).then(function (json) {
      that.currentUser.favorite = json.data;
    }, function(err) {
      console.log('ERROR: addTeam post: ' + JSON.stringify(err));
    });
  };

  that.removeTeam = function(team) {
    favoriteService.removeTeam(team).then(function(json) {
      that.currentUser.favorite = json.data;
    }, function(err) {
      console.log('ERROR: removeTeam delete: ' + JSON.stringify(err));
    });
  };

  that.clearFavorite = function() {
    return favoriteService.clearFavorite().then(function(json) {
      that.currentUser.favorite = json.data;
    }, function(err) {
      console.log('clearFavorite delete ERROR: ' + JSON.stringify(err));
    });
  };

  that.goTeam = function (team) {
    $state.go( 'teamDetail', { teamId : team._id } );
  };

});
