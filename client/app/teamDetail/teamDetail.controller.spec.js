'use strict';

describe('Controller: TeamDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('project3App'));

  var TeamDetailCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeamDetailCtrl = $controller('TeamDetailCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
