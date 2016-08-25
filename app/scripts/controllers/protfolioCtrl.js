define(['angular'], function(angular) {
  'use strict';
  /**
   * @ngdoc function
   * @name protoApp.controller:AboutCtrl
   * @description
   * # protfolioCtrl
   * Controller of the protoApp
   */
  angular.module('protoApp.controllers.protfolioCtrl', [])
    .controller('protfolioCtrl', function($scope,GoogleAPI) {
      //angular.element(document).ready(commonInit());
      $scope.$on('$viewContentLoaded', function() {
        setTimeout(function() {
          commonInit();
        }, 0);
        init();
      });

      GoogleAPI.getPicByAlbumID('6160593634386762673').then(function(data) {
        //console.log(JSON.stringify(data.feed.entry)+'dfd');
        $scope.albumItems = data.feed.entry;
        $scope.albumTitle = data.feed.title.$t;

      });


      $scope.animateElementIn = function($el) {
          $el.removeClass('hidden');
          $el.addClass('animated fadeInUp'); // this example leverages animate.css classes
};

$scope.animateElementOut = function($el) {
      //  $el.addClass('hidden');
        $el.removeClass('animated fadeInUp'); // this example leverages animate.css classes
};
      function init() {


        /*===================================================================================*/
        /*	ISOTOPE PORTFOLIO
        /*===================================================================================*/
        var $container = $('.items');

        $container.imagesLoaded(function() {
          $container.isotope({
            itemSelector: '.item'
          });
        });

        var resizeTimer;

        function resizeFunction() {
          $container.isotope('reLayout');
        }

        $(window).resize(function() {
          clearTimeout(resizeTimer);
          resizeTimer = setTimeout(resizeFunction, 100);
        });

        $('.portfolio .filter li a').click(function() {

          $('.portfolio .filter li a').removeClass('active');
          $(this).addClass('active');

          var selector = $(this).attr('data-filter');

          $container.isotope({
            filter: selector
          });

          return false;

        });
      }
      ; //init ends


    });
});
