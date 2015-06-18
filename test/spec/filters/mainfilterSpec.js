/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Filter: mainfilter', function () {

    // load the filter's module
    beforeEach(module('protoApp.filters.Mainfilter'));

    // initialize a new instance of the filter before each test
    var mainfilter;
    beforeEach(inject(function ($filter) {
      mainfilter = $filter('mainfilter');
    }));

    it('should return the input prefixed with "mainfilter filter:"', function () {
      var text = 'angularjs';
      expect(mainfilter(text)).toBe('mainfilter filter: ' + text);
    });

  });
});
