define(['angular', 'skrollr','owlScript'], function(angular, skrollr,owlScript) {
  'use strict';

  /**
   * @ngdoc function
   * @name protoApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the protoApp
   */
  angular.module('protoApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function($scope, GoogleAPI, $rootScope) {
      console.log('out123');
      //$scope.homeSlider = "[{name:'John', age:25, gender:'boy'},{name:'Jessie', age:30, gender:'girl'},{name:'Johanna', age:28, gender:'girl'}]";
      GoogleAPI.get().then(function(data) {
        console.log(JSON.stringify(data.feed.entry[1].title) + 'dfd');
        $rootScope.albums = data.feed.entry;
        console.log($rootScope.albums);
      });


      $scope.videos = "[{vid:'_pb89fUMZGg',eventType:'Wedding Highlights',name:'Megha + Vaishakh',desc:'Megha Vaishakh Wedding Highlights by addiction weddings',eventDate:''},{vid:'daEyFzfF8pk',eventType:'marriage',name:'',desc:'',eventDate:''}]";
      $scope.videoSelected = $scope.videos[1];



      $scope.$on('$viewContentLoaded', function() {
        setTimeout(function() {
          commonInit();
        }, 0);
        init(skrollr);


        $scope.homeSliderOptions = {
          autoPlay: 5000,
          stopOnHover: false,
          navigation: true,
          pagination: false,
          singleItem: true,
          addClassActive: true,
          transitionStyle: "fadeUp",
          navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"],
        afterInit: function() {
          fadeIn();
          fadeInDown();
          fadeInUp();
          fadeInLeft();
          fadeInRight();
        },

        afterMove: function() {
          fadeIn();
          fadeInDown();
          fadeInUp();
          fadeInLeft();
          fadeInRight();
        },

        afterUpdate: function() {
          fadeIn();
          fadeInDown();
          fadeInUp();
          fadeInLeft();
          fadeInRight();
        },

        startDragging: function() {
          dragging = true;
        },

        afterAction: function() {
          fadeInReset();
          fadeInDownReset();
          fadeInUpReset();
          fadeInLeftReset();
          fadeInRightReset();
          dragging = false;
        }
      };

      $scope.latestSliderOptions = {
        autoPlay: 5000,
        stopOnHover: true,
        navigation: true,
        pagination: true,
        rewindNav: true,
        items: 4,
        navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
      };

        GoogleAPI.getHomeSlider().then(function(data) {
          //console.log(JSON.stringify(data.feed.entry)+'dfd');
       $scope.homeSlider = data.feed.entry;

        });

        GoogleAPI.getPicByAlbumID('6251865698088678481').then(function(data) {
          //console.log(JSON.stringify(data.feed.entry)+'dfd');
          $scope.latestSlider = data.feed.entry;

        });

        $scope.animateElementIn = function($el) {
            $el.removeClass('hidden');
            $el.addClass('animated fadeInUp'); // this example leverages animate.css classes
  };

  $scope.animateElementOut = function($el) {
        //  $el.addClass('hidden');
          $el.removeClass('animated fadeInUp'); // this example leverages animate.css classes
  };

        $scope.items1 = [1, 2, 3, 4, 5];
        $scope.items2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        $scope.members = []

        $scope.carouselInitializer = function() {
          $(".owl-test").owlCarousel({
            items: 3,
            navigation: true,
            pagination: false,
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
          });
        };

      }); //end controller




      var init = function(skrollr) {



        /*===================================================================================*/
        /*	HEADER SHRINK
        /*===================================================================================*/

        $(document).ready(function() {

          var s = skrollr;
          var sActive = false;

          if ($(window).width() > 1024) {
            s.init();
            sActive = true;
          }

          $(window).on('resize', function() {
            if ($(window).width() < 1024 && sActive) {
              s.init().destroy();
              sActive = false;
            } else if ($(window).width() > 1024) {
              s.init();
              sActive = true;
            }
          });

        });


        /*===================================================================================*/
        /*	STICKY NAVIGATION
        /*===================================================================================*/

        $(document).ready(function() {
          $('.navbar .navbar-collapse').waypoint('sticky');
        });


        /*===================================================================================*/
        /*	DROPDOWN ON HOVER (NAVIGATION)
        /*===================================================================================*/

        $(document).ready(function() {

          $('.js-activated').dropdownHover({
            instantlyCloseOthers: false,
            delay: 0
          }).dropdown();

        });


        /*===================================================================================*/
        /*	OWL CAROUSEL
        /*===================================================================================*/




        $(document).ready(function() {

          var dragging = true;
          var owlElementID = "#owl-main";

          function fadeInReset() {
            if (!dragging) {
              $(owlElementID + " .caption .fadeIn-1, " + owlElementID + " .caption .fadeIn-2, " + owlElementID + " .caption .fadeIn-3").stop().delay(800).animate({
                opacity: 0
              }, {
                duration: 400,
                easing: "easeInCubic"
              });
            } else {
              $(owlElementID + " .caption .fadeIn-1, " + owlElementID + " .caption .fadeIn-2, " + owlElementID + " .caption .fadeIn-3").css({
                opacity: 0
              });
            }
          }

          function fadeInDownReset() {
            if (!dragging) {
              $(owlElementID + " .caption .fadeInDown-1, " + owlElementID + " .caption .fadeInDown-2, " + owlElementID + " .caption .fadeInDown-3").stop().delay(800).animate({
                opacity: 0,
                top: "-15px"
              }, {
                duration: 400,
                easing: "easeInCubic"
              });
            } else {
              $(owlElementID + " .caption .fadeInDown-1, " + owlElementID + " .caption .fadeInDown-2, " + owlElementID + " .caption .fadeInDown-3").css({
                opacity: 0,
                top: "-15px"
              });
            }
          }

          function fadeInUpReset() {
            if (!dragging) {
              $(owlElementID + " .caption .fadeInUp-1, " + owlElementID + " .caption .fadeInUp-2, " + owlElementID + " .caption .fadeInUp-3").stop().delay(800).animate({
                opacity: 0,
                top: "15px"
              }, {
                duration: 400,
                easing: "easeInCubic"
              });
            } else {
              $(owlElementID + " .caption .fadeInUp-1, " + owlElementID + " .caption .fadeInUp-2, " + owlElementID + " .caption .fadeInUp-3").css({
                opacity: 0,
                top: "15px"
              });
            }
          }

          function fadeInLeftReset() {
            if (!dragging) {
              $(owlElementID + " .caption .fadeInLeft-1, " + owlElementID + " .caption .fadeInLeft-2, " + owlElementID + " .caption .fadeInLeft-3").stop().delay(800).animate({
                opacity: 0,
                left: "15px"
              }, {
                duration: 400,
                easing: "easeInCubic"
              });
            } else {
              $(owlElementID + " .caption .fadeInLeft-1, " + owlElementID + " .caption .fadeInLeft-2, " + owlElementID + " .caption .fadeInLeft-3").css({
                opacity: 0,
                left: "15px"
              });
            }
          }

          function fadeInRightReset() {
            if (!dragging) {
              $(owlElementID + " .caption .fadeInRight-1, " + owlElementID + " .caption .fadeInRight-2, " + owlElementID + " .caption .fadeInRight-3").stop().delay(800).animate({
                opacity: 0,
                left: "-15px"
              }, {
                duration: 400,
                easing: "easeInCubic"
              });
            } else {
              $(owlElementID + " .caption .fadeInRight-1, " + owlElementID + " .caption .fadeInRight-2, " + owlElementID + " .caption .fadeInRight-3").css({
                opacity: 0,
                left: "-15px"
              });
            }
          }

          function fadeIn() {
            $(owlElementID + " .active .caption .fadeIn-1").stop().delay(500).animate({
              opacity: 1
            }, {
              duration: 800,
              easing: "easeOutCubic"
            });
            $(owlElementID + " .active .caption .fadeIn-2").stop().delay(700).animate({
              opacity: 1
            }, {
              duration: 800,
              easing: "easeOutCubic"
            });
            $(owlElementID + " .active .caption .fadeIn-3").stop().delay(1000).animate({
              opacity: 1
            }, {
              duration: 800,
              easing: "easeOutCubic"
            });
          }

          function fadeInDown() {
            $(owlElementID + " .active .caption .fadeInDown-1").stop().delay(500).animate({
              opacity: 1,
              top: "0"
            }, {
              duration: 800,
              easing: "easeOutCubic"
            });
            $(owlElementID + " .active .caption .fadeInDown-2").stop().delay(700).animate({
              opacity: 1,
              top: "0"
            }, {
              duration: 800,
              easing: "easeOutCubic"
            });
            $(owlElementID + " .active .caption .fadeInDown-3").stop().delay(1000).animate({
              opacity: 1,
              top: "0"
            }, {
              duration: 800,
              easing: "easeOutCubic"
            });
          }

          function fadeInUp() {
            $(owlElementID + " .active .caption .fadeInUp-1").stop().delay(500).animate({
              opacity: 1,
              top: "0"
            }, {
              duration: 800,
              easing: "easeOutCubic"
            });
            $(owlElementID + " .active .caption .fadeInUp-2").stop().delay(700).animate({
              opacity: 1,
              top: "0"
            }, {
              duration: 800,
              easing: "easeOutCubic"
            });
            $(owlElementID + " .active .caption .fadeInUp-3").stop().delay(1000).animate({
              opacity: 1,
              top: "0"
            }, {
              duration: 800,
              easing: "easeOutCubic"
            });
          }

          function fadeInLeft() {
            $(owlElementID + " .active .caption .fadeInLeft-1").stop().delay(500).animate({
              opacity: 1,
              left: "0"
            }, {
              duration: 800,
              easing: "easeOutCubic"
            });
            $(owlElementID + " .active .caption .fadeInLeft-2").stop().delay(700).animate({
              opacity: 1,
              left: "0"
            }, {
              duration: 800,
              easing: "easeOutCubic"
            });
            $(owlElementID + " .active .caption .fadeInLeft-3").stop().delay(1000).animate({
              opacity: 1,
              left: "0"
            }, {
              duration: 800,
              easing: "easeOutCubic"
            });
          }

          function fadeInRight() {
            $(owlElementID + " .active .caption .fadeInRight-1").stop().delay(500).animate({
              opacity: 1,
              left: "0"
            }, {
              duration: 800,
              easing: "easeOutCubic"
            });
            $(owlElementID + " .active .caption .fadeInRight-2").stop().delay(700).animate({
              opacity: 1,
              left: "0"
            }, {
              duration: 800,
              easing: "easeOutCubic"
            });
            $(owlElementID + " .active .caption .fadeInRight-3").stop().delay(1000).animate({
              opacity: 1,
              left: "0"
            }, {
              duration: 800,
              easing: "easeOutCubic"
            });
          }

          $("").owlCarousel({

            autoPlay: 5000,
            stopOnHover: true,
            navigation: true,
            pagination: true,
            singleItem: true,
            addClassActive: true,
            transitionStyle: "fadeUp",
            navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"],

            afterInit: function() {
              fadeIn();
              fadeInDown();
              fadeInUp();
              fadeInLeft();
              fadeInRight();
            },

            afterMove: function() {
              fadeIn();
              fadeInDown();
              fadeInUp();
              fadeInLeft();
              fadeInRight();
            },

            afterUpdate: function() {
              fadeIn();
              fadeInDown();
              fadeInUp();
              fadeInLeft();
              fadeInRight();
            },

            startDragging: function() {
              dragging = true;
            },

            afterAction: function() {
              fadeInReset();
              fadeInDownReset();
              fadeInUpReset();
              fadeInLeftReset();
              fadeInRightReset();
              dragging = false;
            }

          });

          if ($(owlElementID).hasClass("owl-one-item")) {
            $(owlElementID + ".owl-one-item").data('owlCarousel').destroy();
          }

          $(owlElementID + ".owl-one-item").owlCarousel({
            singleItem: true,
            navigation: false,
            pagination: false
          });

          $('#transitionType li a').click(function() {

            $('#transitionType li a').removeClass('active');
            $(this).addClass('active');

            var newValue = $(this).attr('data-transition-type');

            $(owlElementID).data("owlCarousel").transitionTypes(newValue);
            $(owlElementID).trigger("owl.next");

            return false;

          });

          $("#owl-testimonials").owlCarousel({
            autoPlay: 5000,
            stopOnHover: true,
            navigation: true,
            pagination: true,
            singleItem: true,
            addClassActive: true,
            autoHeight: true,
            transitionStyle: "fadeInAfterOut",
            navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
          });

          $("#owl-projects").owlCarousel({
            navigation: false,
            autoHeight: true,
            slideSpeed: 300,
            paginationSpeed: 400,
            rewindNav: false,
            singleItem: true,
            navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
          });

          $("#owl-latest-works").owlCarousel({
            autoPlay: 5000,
            stopOnHover: true,
            navigation: true,
            pagination: true,
            rewindNav: true,
            items: 4,
            navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
          });

          $("#owl-videos").owlCarousel({
            autoPlay: 5000,
            stopOnHover: true,
            navigation: true,
            pagination: true,
            rewindNav: true,
            items: 5,
            navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
          });

          $("#owl-audio").owlCarousel({
            autoPlay: 5000,
            stopOnHover: true,
            navigation: true,
            pagination: true,
            rewindNav: true,
            items: 5,
            navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
          });

          $("#owl-popular-posts").owlCarousel({
            autoPlay: 5000,
            stopOnHover: true,
            navigation: true,
            pagination: true,
            rewindNav: true,
            items: 5,
            navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
          });

          $("#owl-related-posts").owlCarousel({
            autoPlay: 5000,
            stopOnHover: true,
            navigation: true,
            pagination: true,
            rewindNav: true,
            items: 2,
            itemsDesktopSmall: [1199, 2],
            itemsTablet: [977, 2],
            navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
          });

          $("#owl-featured-works").owlCarousel({
            autoPlay: 5000,
            stopOnHover: true,
            navigation: true,
            pagination: true,
            rewindNav: true,
            singleItem: true,
            transitionStyle: "goDown",
            navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
          });

          $("#owl-work-samples").owlCarousel({
            autoPlay: 5000,
            stopOnHover: true,
            navigation: true,
            pagination: true,
            rewindNav: true,
            items: 3,
            itemsDesktopSmall: [1199, 3],
            itemsTablet: [977, 2],
            navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
          });

          $("#owl-work-samples-big").owlCarousel({
            autoPlay: 5000,
            stopOnHover: true,
            navigation: true,
            pagination: true,
            rewindNav: true,
            singleItem: true,
            transitionStyle: "fadeUp",
            navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
          });

          $("#owl-work").owlCarousel({
            autoPlay: 5000,
            slideSpeed: 200,
            paginationSpeed: 600,
            rewindSpeed: 800,
            stopOnHover: true,
            navigation: true,
            pagination: true,
            rewindNav: true,
            singleItem: true,
            autoHeight: true,
            navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
          });

          $("#owl-office").owlCarousel({
            autoPlay: 5000,
            slideSpeed: 200,
            paginationSpeed: 600,
            rewindSpeed: 800,
            stopOnHover: true,
            navigation: true,
            pagination: true,
            rewindNav: true,
            singleItem: true,
            autoHeight: true,
            transitionStyle: "fade",
            navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
          });

          $("#owl-clients").owlCarousel({
            autoPlay: 5000,
            stopOnHover: true,
            rewindNav: true,
            items: 4,
            itemsDesktopSmall: [1199, 4],
            itemsTablet: [977, 3],
            navigation: true,
            pagination: true,
            navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
          });

          $(".slider-next").click(function() {
            owl.trigger('owl.next');
          })

          $(".slider-prev").click(function() {
            owl.trigger('owl.prev');
          })

          $('#more-videos #content .item a').click(function() {
            $('#videoFrame').attr('src', $(this).find('iframe').attr('src'));
            $('#more-videos #accordion #content').collapse('toggle');
          })

        });





        /*===================================================================================*/
        /*	ISOTOPE PORTFOLIO FULLSCREEN
        /*===================================================================================*/

        $(document).ready(function() {

          var isotopeBreakpoints = [

            {
              // Desktop
              min_width: 1680,
              columns: 6
            },

            {
              // iPad Landscape
              min_width: 1140,
              max_width: 1680,
              columns: 5
            },

            {
              // iPad Portrait
              min_width: 1024,
              max_width: 1440,
              columns: 4
            },

            {
              // iPhone Landscape
              min_width: 768,
              max_width: 1024,
              columns: 3
            },

            {
              // iPhone Portrait
              max_width: 768,
              columns: 1
            }

          ];

          var $container = $('.items.fullscreen');

          $container.imagesLoaded(function() {
            $container.isotope({
              itemSelector: '.item'
            });
          });

          // hook to resize the portfolio items for fluidity / responsiveness
          $(window).smartresize(function() {
            var windowWidth = $(window).width();
            var windowHeight = $(window).height();

            for (var i = 0; i < isotopeBreakpoints.length; i++) {
              if (windowWidth >= isotopeBreakpoints[i].min_width || !isotopeBreakpoints[i].min_width) {
                if (windowWidth < isotopeBreakpoints[i].max_width || !isotopeBreakpoints[i].max_width) {
                  $container.find('.item').each(function() {
                    $(this).width(Math.floor($container.width() / isotopeBreakpoints[i].columns));
                  });

                  break;
                }
              }
            }
          });

          $(window).trigger('smartresize');

        });


        /*===================================================================================*/
        /*	ISOTOPE BLOG
        /*===================================================================================*/

        $(document).ready(function() {

          var $container = $('.posts');

          $container.imagesLoaded(function() {
            $container.isotope({
              itemSelector: '.post'
            });
          });

          $('.format-filter li a, .format-wrapper a').click(function() {

            var selector = $(this).attr('data-filter');

            $container.isotope({
              filter: selector
            });

            $('.format-filter li a').removeClass('active');
            $('.format-filter li a[data-filter="' + selector + '"]').addClass('active');

            $('html, body').animate({
              scrollTop: $('.format-filter').offset().top - 130
            }, 600);

            return false;

          });

          $(window).on('resize', function() {
            $('.posts').isotope('reLayout')
          });

        });


        /*===================================================================================*/
        /*	TABS
        /*===================================================================================*/

        $(document).ready(function() {

          /*$('.tabs.tabs-services').easytabs({
          cycle: 5000
  });*/

          $('.tabs.tabs-top, .tabs.tabs-circle-top, .tabs.tabs-2-big-top, .tabs.tabs-side').easytabs({
            animationSpeed: 200,
            updateHash: false
          });

        });


        /*===================================================================================*/
        /*	ACCORDION (FOR ISOTOPE HEIGHT CALCULATION)
        /*===================================================================================*/

        $(document).ready(function() {
          if ($('.panel-group .portfolio').length > 0) {
            $('.panel-group .collapse.in').collapse({
              toggle: true
            });
          }
        });


        /*===================================================================================*/
        /*	IMAGE HOVER
        /*===================================================================================*/

        $(document).ready(function() {
          $('.icon-overlay a').prepend('<span class="icn-more"></span>');
        });


        /*===================================================================================*/
        /*	DATA REL
        /*===================================================================================*/

        $(document).ready(function() {
          $('a[data-rel]').each(function() {
            $(this).attr('rel', $(this).data('rel'));
          });
        });


        /*===================================================================================*/
        /*	TOOLTIP
        /*===================================================================================*/

        $(document).ready(function() {
          if ($("[rel=tooltip]").length) {
            $("[rel=tooltip]").tooltip();
          }
        });


        /*===================================================================================*/
        /*	GOOGLE MAPS
        /*===================================================================================*/

        $(document).ready(function() {

          function initialize() {
            var mapOptions = {
              zoom: 13,
              center: new google.maps.LatLng(40.7902778, -73.9597222),
              disableDefaultUI: true
            }
            var map = new google.maps.Map(document.getElementById('map'), mapOptions);
          }

          //google.maps.event.addDomListener(window, 'load', initialize);

        });


        /*===================================================================================*/
        /*	CONVERTING iOS SAFARI VIEWPORT UNITS (BUGGY) INTO PIXELS
        /*===================================================================================*/

        $(document).ready(function() {
          //window.viewportUnitsBuggyfill.init(true);
        });


        /*===================================================================================*/
        /*	FORM VALIDATION
        /*===================================================================================*/

        $(document).ready(function() {

          $('#contactform, #commentform').validate({

            errorPlacement: function(error, element) {
              $(element).attr({
                'placeholder': error.html()
              });
            },

            focusInvalid: false,

            rules: {
              name: {
                required: true,
                minlength: 2
              },
              email: {
                required: true,
                email: true
              },
              message: {
                required: true,
                minlength: 10
              }
            },

            messages: {
              name: {
                required: 'Please enter your name!',
                minlength: jQuery.format('Name requires at least {0} characters!')
              },
              email: {
                required: 'Please enter your email!',
                email: 'Please enter a valid email!'
              },
              message: {
                required: 'Please enter a message!',
                minlength: jQuery.format('Message requires at least {0} characters!')
              }
            },

            submitHandler: function(form) {
              $('#contactform .btn-submit').html('Sending message ...');
              $('#commentform .btn-submit').html('Sending comment ...');
              $(form).ajaxSubmit({
                success: function(responseText, statusText, xhr, $form) {
                  $(form).delay(1300).slideUp('fast');
                  $('#response').html(responseText).hide().delay(1300).slideDown('fast');
                }
              });
              return false;
            }

          });

        });

        $(document).ready(function() {
          $(".changecolor").switchstylesheet({
            seperator: "color"
          });
        });



      }



      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
