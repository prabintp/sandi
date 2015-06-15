/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Service: GoogleAPI', function () {

    // load the service's module
    beforeEach(module('protoApp.services.GoogleAPI'));

    // instantiate service
    var GoogleAPI;
    beforeEach(inject(function (_GoogleAPI_) {
      GoogleAPI = _GoogleAPI_;
    }));

    it('should do something', function () {
      expect(!!GoogleAPI).toBe(true);
    });

  });
});
