define(['angular'], function(angular) {
  'use strict';

  /**
   * @ngdoc directive
   * @name protoApp.directive:main
   * @description
   * # main
   */
   function fireOnResizeEvent() {
    var width, height;

    if (navigator.appName.indexOf("Microsoft") != -1) {
     width  = document.body.offsetWidth;
     height = document.body.offsetHeight;
    } else {
     width  = window.outerWidth;
     height = window.outerHeight;
    }

    window.resizeTo(width - 400, height);
    window.resizeTo(width , height);
   }


  angular.module('protoApp.directives.Main', [])

    .directive("owlCarousel", function() {
      return {
        restrict: 'A',
        transclude: false,
        link: function(scope) {
          scope.initCarousel = function(element) {
            // provide any default options you want
            var defaultOptions = {
              };
            var customOptions = scope.$eval($(element).attr('data-options'));
            // combine the two options objects
            for (var key in customOptions) {
              defaultOptions[key] = customOptions[key];
            }

            console.log(JSON.stringify(defaultOptions)+'haa');
            // init carousel
            $(element).owlCarousel(defaultOptions);
          };
        }
      };
    })
    .directive('owlCarouselItem', [function() {
      return {
        restrict: 'A',
        transclude: false,
        link: function(scope, element) {
          // wait for the last item in the ng-repeat then call init
          if (scope.$last) {
            scope.initCarousel(element.parent());
          }
        }
      };
    }])
    .directive("wayPoint", function() {
      return {
        restrict: 'A',
        transclude: false,
        link: function(scope) {
          scope.wayPoint = function(element) {
            console.log('enter here');
            var delayTime;
            $('.wayfect').waypoint(function() {
              console.log("heree");
              delayTime += 100;
              $(this).delay(delayTime).queue(function(next) {
                $(this).toggleClass('animated');
                $(this).toggleClass('fadeInUp');
                delayTime = 0;
                next();
              });
            },
              {
                offset: '90%',
                triggerOnce: true
              });
            // init carousel
          //  $(element).owlCarousel(defaultOptions);
          };
        }
      };
    })
    .directive('wayPointItem', [function() {
      return {
        restrict: 'A',
        transclude: false,
        link: function(scope, element) {
          // wait for the last item in the ng-repeat then call init
          if (scope.$last) {
            fireOnResizeEvent();
          }
        }
      };
    }])
    .directive('myRepeatDirective', function() {
      return function(scope, element, attrs) {
      //  angular.element(element).css('color','blue');
        console.log('enter common init drectiv  oute');
        if (scope.$last){
              scope.$emit('LastElem');
        }


      };
    }).
    directive('stickyTop', function() {
    return function(scope, elm, attr) {
      // This simply toggles the sticky class when a wrapper for the
      // target element is scrolled past a specified offset.
      elm.waypoint(function(event, direction) {
        elm.toggleClass('sticky', direction === "down");
      }, { offset: 0 });
    };
  })
    .directive('myMainDirective', function() {
  return function(scope, element, attrs) {
//    angular.element(element).css('border','5px solid red');
  //  scope.$on('LastElem', function(event){
  //   element.children().css('opacity','0');
//$(document).ready(function() {

     //  window.alert("im the last!");
     var waypointClass = 'main [class*="col-"]';
      var animationClass = 'fadeInUp';
      var delayTime;
      $(element).find('img').css({
        opacity: '0'
      });

      if (scope.$last) {
        fireOnResizeEvent();
      }

     /* var waypointClass1 = 'main [class*="wayfect"]';
      $(waypointClass1).css({
        opacity: '0'
      });*/
      element.waypoint(function() {
        delayTime += 100;
       element.delay(delayTime).queue(function(next) {
        element.find('img').toggleClass('animated');
          element.find('img').toggleClass(animationClass);
          delayTime = 0;
          next();
        });
      },
        {
          offset: '20',
         triggerOnce: true
        });
//});
   //});
  };
});


});
