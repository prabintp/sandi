/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/about', 'controllers/protfolioCtrl', 'services/googleapi', 'directives/main', 'filters/mainfilter'] /*deps*/ , function(angular, MainCtrl, AboutCtrl, protfolioCtrl, GoogleAPIService, MainDirective, MainfilterFilter) /*invoke*/ {
  'use strict';

  /**
   * @ngdoc overview
   * @name protoApp
   * @description
   * # protoApp
   *
   * Main module of the application.
   */
  return angular
    .module('protoApp', ['protoApp.controllers.MainCtrl',
      'protoApp.controllers.AboutCtrl',
      'protoApp.controllers.protfolioCtrl',
      'protoApp.services.GoogleAPI',
      'protoApp.directives.Main',
      'protoApp.filters.Mainfilter',
      /*angJSDeps*/
      'ngCookies',
      'ngResource',
      'ngSanitize',
      'ngRoute',
      'ngAnimate',
      'ngTouch'

    ])
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        })
        .when('/protfolio', {
          templateUrl: 'views/protfolio.html',
          controller: 'protfolioCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
});
