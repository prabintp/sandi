define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc filter
   * @name protoApp.filter:mainfilter
   * @function
   * @description
   * # mainfilter
   * Filter in the protoApp.
   */
  angular.module('protoApp.filters.Mainfilter', [])
  	.filter('changepxl', function () {
      return function (input, pxl) {
	var a=input.split('/');
	a.splice(-1,0,'s'+pxl);
	return a.join('/');
      };
  	});
});
