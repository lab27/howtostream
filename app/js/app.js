'use strict';

// var app = (function(document, $) {
// 	var docElem = document.documentElement,
// 		_userAgentInit = function() {
// 			docElem.setAttribute('data-useragent', navigator.userAgent);
// 		},
// 		_init = function() {
// 			$(document).foundation();
//             // needed to use joyride
//             // doc: http://foundation.zurb.com/docs/components/joyride.html
//             $(document).on('click', '#start-jr', function () {
//                 $(document).foundation('joyride', 'start');
//             });
// 			_userAgentInit();
// 		};
// 	return {
// 		init: _init
// 	};
// })(document, jQuery);

// (function() {
// 	app.init();
// })();


$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

var $magellan = 'magellan-expedition';
$(document).foundation({
  $magellan : {
    // specify the class used for active sections
    active_class: 'reading',
    // how many pixels until the magellan bar sticks, 0 = auto
    threshold: 300,
    fixed_top: 40,
    // pixels from the top of destination for it to be considered active
    destination_threshold: 20,
    // calculation throttling to increase framerate
    throttle_delay: 50 
  },
});