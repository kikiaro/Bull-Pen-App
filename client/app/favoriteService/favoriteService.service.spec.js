'use strict';

describe('Service: favoriteService', function ($http) {

  // load the service's module
  beforeEach(module('project3App'));

  // instantiate service
  var favoriteService;
  beforeEach(inject(function (_favoriteService_) {
    favoriteService = _favoriteService_;
  }));

  it('should do something', function () {
    expect(!!favoriteService).toBe(true);
  });

});
