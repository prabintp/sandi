define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name protoApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the protoApp
   */
  angular.module('protoApp.controllers.AboutCtrl', [])
    .controller('AboutCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
