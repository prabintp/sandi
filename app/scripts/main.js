/*jshint unused: vars */
require.config({
  paths: {
    angular: '../../bower_components/angular/angular',
    'angular-animate': '../../bower_components/angular-animate/angular-animate',
    'angular-cookies': '../../bower_components/angular-cookies/angular-cookies',
    'angular-mocks': '../../bower_components/angular-mocks/angular-mocks',
    'angular-resource': '../../bower_components/angular-resource/angular-resource',
    'angular-route': '../../bower_components/angular-route/angular-route',
    'angular-sanitize': '../../bower_components/angular-sanitize/angular-sanitize',
    'angular-touch': '../../bower_components/angular-touch/angular-touch',

    bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap',
    'jquery': '../js/jquery.min',
    'jqueryEasing': '../js/jquery.easing.1.3.min',
    'jqueryForm': '../js/jquery.form',
    'jqueryValidate': '../js/jquery.validate.min',
    'bootstrap': '../js/bootstrap.min',
    'bootstrapHover': '../js/bootstrap-hover-dropdown.min',
    'skrollr': '../js/skrollr.min',
    'skrollrStyle': '../js/skrollr.stylesheets.min',
    'waypoints': '../js/waypoints.min',
    'waypointSticky': '../js/waypoints-sticky.min',
    'owl': '../js/owl.carousel.min',
    'isotope': '../js/jquery.isotope.min',
    'easytabs': '../js/jquery.easytabs.min',
    'googleMap': '../js/google.maps.api.v3',
    'buggy': '../js/viewport-units-buggyfill',
    'scriptLocal': '../js/scripts',
    'owlScript': '../js/owl.scripts',
    'angulariso': '../js/angular-isotope',
    'switch': '../switchstylesheet/switchstylesheet',
    'angularScroll': '../../bower_components/angular-scroll-animate/dist/angular-scroll-animate'

  },
  shim: {
    angular: {
      exports: 'angular'
    },
    'angular-route': [
      'angular'
    ],
    'angular-cookies': [
      'angular'
    ],
    'angular-sanitize': [
      'angular'
    ],
    'angular-resource': [
      'angular'
    ],
    'angular-animate': [
      'angular'
    ],
    'angular-touch': [
      'angular'
    ],
    'angularScroll': [
      'angular'
    ],
    'angulariso': [
      'angular'
    ],
    'switch': [
      'jquery'
    ],
    'skrollr': {
      deps: ['jquery'],
      exports: 'skrollr'
    },

    'owl': [
      'jquery'
    ],
    'scriptLocal': [
      'jquery'
    ],
    'bootstrapHover': [
      'bootstrap', 'jquery'
    ],
    'jqueryValidate': [
      'jquery'
    ],
    'bootstrap': [
      'jquery'
    ],
    'buggy': [
      'jquery'
    ],
    'isotope': [
      'jquery'
    ],
    'easytabs': [
      'jquery'
    ],
    'googleMap': [
      'jquery'
    ],
    'jqueryEasing': {
      deps: [
        'jquery'
      ],
      exports: 'jqueryEasing'
    },
    'angular-mocks': {
      deps: [
        'angular'
      ],
      exports: 'angular.mock'
    }

  },
  priority: [
    'angular'
  ],
  packages: []
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require([
  'angular',
  'app',
  'angular-route',
  'angular-cookies',
  'angular-sanitize',
  'angular-resource',
  'angular-animate',
  'angular-touch',
  'jquery',
  'jqueryEasing',
  'jqueryForm',
  'jqueryValidate',
  'bootstrap',
  'bootstrapHover',
  'skrollr',
  'skrollrStyle',
  'waypoints',
  'waypointSticky',
  'owl',
  'isotope',
  'easytabs',
  'googleMap',
  'buggy',
  'scriptLocal',
  'switch',
  'angularScroll',
  'angulariso'



], function(angular, app, ngRoutes, ngCookies, ngSanitize, ngResource, ngAnimate, ngTouch) {
  'use strict';
  /* jshint ignore:start */
  var $html = angular.element(document.getElementsByTagName('html')[0]);
  /* jshint ignore:end */
  angular.element().ready(function() {
    angular.resumeBootstrap([app.name]);
  });
});
