'use strict';

describe('Filter: teamFilter', function () {

  // load the filter's module
  beforeEach(module('project3App'));

  // initialize a new instance of the filter before each test
  var teamFilter;
  beforeEach(inject(function ($filter) {
    teamFilter = $filter('teamFilter');
  }));

  it('should return the input prefixed with "teamFilter filter:"', function () {
    var text = 'angularjs';
    expect(teamFilter(text)).toBe('teamFilter filter: ' + text);
  });

});
