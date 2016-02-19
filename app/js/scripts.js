function commonInit() {
  $(document).ready(function() {
    console.log('enter common init');
    //...show animated items
    var waypointClass = 'main [class*="col-"]';
    var animationClass = 'fadeInUp';
    var delayTime;
    $(waypointClass).css({
      opacity: '0'
    });
    $(waypointClass).waypoint(function() {
      delayTime += 100;
      $(this).delay(delayTime).queue(function(next) {
        $(this).toggleClass('animated');
        $(this).toggleClass(animationClass);
        delayTime = 0;
        next();
      });
    },
      {
        offset: '90%',
        triggerOnce: true
      });
  });


  /*===================================================================================*/
  /*	STICKY NAVIGATION
  /*===================================================================================*/

  $(document).ready(function() {
    $('.navbar .navbar-collapse').waypoint('sticky');
  });

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



  $(document).ready(function() {
    $(".jumper").on("click", function(e) {

      e.preventDefault();

      $("body, html").animate({
        scrollTop: $($(this).attr('href')).offset().top - 60
      }, 600);

    });
  });


}
;





/*===================================================================================*/
/*	GO TO TOP / SCROLL UP
/*===================================================================================*/

!function(a, b, c) {
  a.fn.scrollUp = function(b) {
    a.data(c.body, "scrollUp") || (a.data(c.body, "scrollUp", !0), a.fn.scrollUp.init(b))
  }, a.fn.scrollUp.init = function(d) {
    var e = a.fn.scrollUp.settings = a.extend({}, a.fn.scrollUp.defaults, d),
      f = e.scrollTitle ? e.scrollTitle : e.scrollText,
      g = a("<a/>", {
        id: e.scrollName,
        href: "#top" /*,
				title: f*/
      }).appendTo("body");
    e.scrollImg || g.html(e.scrollText), g.css({
      display: "none",
      position: "fixed",
      zIndex: e.zIndex
    }), e.activeOverlay && a("<div/>", {
      id: e.scrollName + "-active"
    }).css({
      position: "absolute",
      top: e.scrollDistance + "px",
      width: "100%",
      borderTop: "1px dotted" + e.activeOverlay,
      zIndex: e.zIndex
    }).appendTo("body"), scrollEvent = a(b).scroll(function() {
      switch (scrollDis = "top" === e.scrollFrom ? e.scrollDistance : a(c).height() - a(b).height() - e.scrollDistance, e.animation) {
        case "fade":
          a(a(b).scrollTop() > scrollDis ? g.fadeIn(e.animationInSpeed) : g.fadeOut(e.animationOutSpeed));
          break;
        case "slide":
          a(a(b).scrollTop() > scrollDis ? g.slideDown(e.animationInSpeed) : g.slideUp(e.animationOutSpeed));
          break;
        default:
          a(a(b).scrollTop() > scrollDis ? g.show(0) : g.hide(0))
      }
    }), g.click(function(b) {
      b.preventDefault(), a("html, body").animate({
        scrollTop: 0
      }, e.scrollSpeed, e.easingType)
    })
  }, a.fn.scrollUp.defaults = {
    scrollName: "scrollUp",
    scrollDistance: 300,
    scrollFrom: "top",
    scrollSpeed: 300,
    easingType: "linear",
    animation: "fade",
    animationInSpeed: 200,
    animationOutSpeed: 200,
    scrollText: "Scroll to top",
    scrollTitle: !1,
    scrollImg: !1,
    activeOverlay: !1,
    zIndex: 2147483647
  }, a.fn.scrollUp.destroy = function(d) {
    a.removeData(c.body, "scrollUp"), a("#" + a.fn.scrollUp.settings.scrollName).remove(), a("#" + a.fn.scrollUp.settings.scrollName + "-active").remove(), a.fn.jquery.split(".")[1] >= 7 ? a(b).off("scroll", d) : a(b).unbind("scroll", d)
  }, a.scrollUp = a.fn.scrollUp
}(jQuery, window, document);

$(document).ready(function() {
  $.scrollUp({
    scrollName: "scrollUp", // Element ID
    scrollDistance: 300, // Distance from top/bottom before showing element (px)
    scrollFrom: "top", // "top" or "bottom"
    scrollSpeed: 1000, // Speed back to top (ms)
    easingType: "easeInOutCubic", // Scroll to top easing (see http://easings.net/)
    animation: "fade", // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: "<i class='icon-up-open-mini'></i>", // Text for element, can contain HTML
    scrollTitle: " ", // Set a custom <a> title if required. Defaults to scrollText
    scrollImg: 0, // Set true to use image
    activeOverlay: 0, // Set CSS color to display scrollUp active point, e.g "#00FFFF"
    zIndex: 1001 // Z-Index for the overlay
  });
});


/*===================================================================================*/
/*	ANIMATED / SMOOTH SCROLL TO ANCHOR
/*===================================================================================*/

$(document).ready(function() {

  $("a.scrollTo").click(function() {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 1000,
      easing: "easeInOutCubic"
    });
    return false;
  });

});

/*===================================================================================*/
/*	ISOTOPE PORTFOLIO
/*===================================================================================*/

$(document).ready(function() {

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

});
