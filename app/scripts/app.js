/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/about', 'services/googleapi', 'directives/main', 'filters/mainfilter']/*deps*/, function (angular, MainCtrl, AboutCtrl, GoogleAPIService, MainDirective, MainfilterFilter)/*invoke*/ {
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
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
});
