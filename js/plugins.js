// init WOW
$(document).ready( function() {
	var wow = new WOW(
	  {
	    boxClass:     'wow',      // animated element css class (default is wow)
	    animateClass: 'animated', // animation css class (default is animated)
	    offset:       0,          // distance to the element when triggering the animation (default is 0)
	    mobile:       false,       // trigger animations on mobile devices (default is true)
	    live:         true,       // act on asynchronously loaded content (default is true)
	    callback:     function(box) {
	      // the callback is fired every time an animation is started
	      // the argument that is passed in is the DOM node being animated
	    }
	  }
	);
	wow.init();  
});


// init waypoint.js to update #sub-nav
// $(function() {
// 		var sections = $("section");
// 	var navigation_links = $("#sub-nav a");
	
// 	sections.waypoint({
// 		handler: function(event, direction) {
		
// 			var active_section;
// 			active_section = $(this);
// 			if (direction === "up") {active_section = active_section.prev();}

// 			var active_link = $('#sub-nav a[href="#' + active_section.attr("id") + '"]');
// 			navigation_links.removeClass("active");
// 			active_link.addClass("active");

// 		},
// 		offset: '25%'
// 	});
	
// });



// testing

// if ($('.bxslider-home').length) {

// 	$('.bxslider-home').bxSlider({
// 		mode: 'fade',
// 		auto: true,
// 		pause: 6000,
// 		speed: 2000
// 	});	 		
// }   	    	





// ajax in slids if desktop and .home

function load_slides(home_mq) {
  if (home_mq.matches) {
	get_large_slides();
  } 
}


$(document).ready( function() {
	if ($('body').hasClass('home')) {
		var home_mq = window.matchMedia("(min-width: 768px)");
		home_mq.addListener(load_slides);
		load_slides(home_mq);		 	
	}
});
