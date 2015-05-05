
on_resize(function() {

	var tagLine = $(".tagline");

	// add/remove classes - off-canvas-menu
	if (getActiveMQ() === "break-0") {
		$("body").removeClass("large-screen").addClass("small-screen");	
		// $('.navmenu').hide();

	} else {
		$("body").removeClass("active-nav small-screen")
			.addClass("large-screen");	
			// $('.navmenu').show();
	}

	// fire prarallax on header if on desktop and fade nav background
	if (getActiveMQ() !== "break-0" && getActiveMQ() !== "break-1") {

		if ($('.home-slides').length) {			

			$(window).scroll(function(e){

				if ($('.home-slides').isOnScreen()) {
					// $('.home-slides').css({
					// 	'backgroundPosition' : "50% " + -($(this).scrollTop()/3)+"px",
					// }); 
					var thisdist = $(this).scrollTop();
					var heroheight = $(".home-slides").outerHeight();
					$('.tagline').css({
						'opacity' : (1 - thisdist/heroheight)
					}); 

					// $('.js-nav').removeClass('is-on');

				} else {
					// $('.js-nav').addClass('is-on');
					$('.tagline').css({
						'opacity' : (1)
					}); 
				}
			});

		}  

		var mainDivHasClass = $("#main").hasClass('homepage');

		if ($('.hero').length && mainDivHasClass === false) {	// check it's not the home-page

			$(window).scroll(function(e){

				if ($('.hero').isOnScreen()) {
					// $('.hero').css({
					// 	'backgroundPosition' : "50% " + -($(this).scrollTop()/3)+"px",
					// }); 
					var thisdist = $(this).scrollTop();
					var heroheight = $(".hero").outerHeight();
					$('.tagline').css({
						'opacity' : (1 - thisdist/heroheight)
					}); 

					// $('.js-nav').removeClass('is-on');

				} else {
					// $('.js-nav').addClass('is-on');
					$('.tagline').css({
						'opacity' : (1)
					}); 
				}
			});

		}

} 	

})(); // self executing on page load 










var showSidebar = function() {
	$('body').removeClass("active-nav").toggleClass("active-sidebar");
	$('.menu-button').removeClass("active-button");					
};

var showMenu = function() {
	$('body').removeClass("active-sidebar").toggleClass("active-nav");			
	$('.menu-button').toggleClass("active-button");	
};






jQuery(document).ready(function($) {
	// Toggle for nav menu for small-screens ($netbooks)
	$('.menu-button-mb').on('click', function() {		
		var $this = $(this);
		// $this.find('.menu').toggleClass('active');
	    $this.find('.menu-top').toggleClass('menu-top-click');
	    $this.find('.menu-middle').toggleClass('menu-middle-click');
	    $this.find('.menu-bottom').toggleClass('menu-bottom-click');		
		showSidebar();							
	});	


	// Toggle for nav menu for large-screens ($netbooks +)
	$('.menu-button-lg').on('click', function() {		
		var $this = $(this);
		// $this.find('.menu').toggleClass('active');
	    $this.find('.menu-top').toggleClass('menu-top-click');
	    $this.find('.menu-middle').toggleClass('menu-middle-click');
	    $this.find('.menu-bottom').toggleClass('menu-bottom-click');	
		$('#lg-screen-nav').slideToggle('fast');						
	});	


	

    var deskTopMq = window.matchMedia("(min-width: 1080px)");
    deskTopMq.addListener(resetManus);
    resetManus(deskTopMq);



	function resetBtn() {
    var menuBtnComponent1 = $('.menu-top'),
    	menuBtnComponent2 = $('.menu-middle'),
    	menuBtnComponent3 = $('.menu-bottom');

      	$('#lg-screen-nav').css('display','none');
      	$('body').removeClass("active-sidebar");
      	menuBtnComponent1.removeClass('menu-top-click');
      	menuBtnComponent2.removeClass('menu-middle-click');
      	menuBtnComponent3.removeClass('menu-bottom-click');    		
	}


    function resetManus(deskTopMq) {
      if (deskTopMq.matches) {
      	resetBtn();
      } else {
		resetBtn();
      }
    }  

	// ajax in the iframe
	// cache the iframe 
	// modal switch for video on gallery page
	$('.switch').on('click', function(e) {
		var $this = $(this),
			// currentModal = $this.prev();
			// modalId = currentModal.attr('id');
			currentContainer = $this.prev().find('.row');
			currentContainer.fitVids();
			// console.log(currentModal.attr('id'));

			// if (currentModal.hasClass('video-loaded') === false) {
			// 	currentContainer.load( "video.html #vid-" + modalId, function() {
			// 		$(this).fitVids();
			// 		currentModal.addClass('video-loaded');
			// 	});					
			// }

		$this.prev('.modal').addClass('active');
	});	





	// modal switch for video on individual production pages
	$('.switch-prod').on('click', function(e) {
		var $this = $(this),
			// currentModal = $this.prev();
			currentModal = $('#modal');			
			currentContainer = currentModal.find('.row');
			if (currentModal.hasClass('video-loaded') === false) {
				$(currentContainer).fitVids();
				currentModal.addClass('video-loaded');
			}
		currentModal.addClass('active');
	});		



	$('.close').on('click', function(e) {
		e.preventDefault();
		var $this = $(this),
		 	currentVideo = $this.next().find('iframe'),
			currentVideoSrc = currentVideo.attr('src');	

		$this.closest('.modal').removeClass('active');
		currentVideo.attr('src', '');
		currentVideo.attr('src', currentVideoSrc);
	});	




	// // back to top link
	$("#backToTop").hide();

	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#backToTop').fadeIn();
			} else {
				$('#backToTop').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#backToTop').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
	});	



		




var media_query = window.matchMedia("(max-width: 1024px)");
media_query.addListener(my_function);
my_function(media_query);

function my_function(media_query) {
	var parallaxItems = $('.ambient');

  if (media_query.matches) {
    parallaxItems.removeClass('parallax');
  } else {
    parallaxItems.addClass('parallax');     
  }
}  












// fire bxslider
if ($('.bxslider').length) {

	$('.bxslider').bxSlider({
		startSlide: 1,
		infiniteLoop: true
	});	 		
}

if ($('.bxslider-quotes').length) {

	$('.bxslider-quotes').bxSlider({
		mode: 'fade'
	});	 		
}    

// if ($('.bxslider-home').length) {

// 	$('.bxslider-home').bxSlider({
// 		mode: 'fade',
// 		auto: true,
// 		pause: 6000,
// 		speed: 2000
// 	});	 		
// }    






$('#main').on('click', '.scroll-down', function(e) {
	e.preventDefault();
	// var target = $('#opening');
	var target = $('section:first-of-type');	
	$("html,body").animate({
		scrollTop: target.offset().top
	}, 600);
});
     

 // $('.feature-section').each(function() {
 // 	// console.log(this.id);
 // 	var theID = $(this).attr('id');
 // 	console.log(theID); 	
 // 	$(theID)
	// .wrapAll('<ol id="notes"></ol>')
	// .wrap('<li></li>').insertAfter('.footer-legals'); 	
 // });




	var lastLi = $('<li><a class="last" href="#page">Main Menu</a></li>');

	var	$innerNav = $('<ul/>', {
		'id' : 'sub-nav',
		'class' : 'nav'
	}).appendTo('#innerNavWrap');
		
	var feature_sections = $('.feature-section');

	if ($(feature_sections).length >= 3 ) {

		$(feature_sections).each(function(index) {

			var $this = $(this),
				menuTitle = $this.data('innermenu');
				theID = $this.attr('id');
				$("<a href='#" + theID + "'>" + menuTitle + "</a>" ).appendTo($innerNav).wrap('<li></li>');	
		});
	
		$(lastLi).appendTo($innerNav);
	
	}







// init waypoint.js to update #sub-nav
$(function() {
		var sections = $("section");
	var navigation_links = $("#sub-nav a");
	
	sections.waypoint({
		handler: function(event, direction) {
		
			var active_section;
			active_section = $(this);
			if (direction === "up") {active_section = active_section.prev();}

			var active_link = $('#sub-nav a[href="#' + active_section.attr("id") + '"]');
			navigation_links.removeClass("active");
			active_link.addClass("active");

		},
		offset: '25%'
	});
	
});







// sub-nav scrolling on click

var subNavItems = $('#sub-nav a');

$(subNavItems).on('click', function(e) {

	var $this = $(this),
		subNavTarget = $($this.attr('href'));

	e.preventDefault();
	subNavItems.removeClass('active');

	if ($this.hasClass('last')) {
		// do nothing !
	} else {
		$this.addClass('active');
	}
	
	
	$("html,body").animate({
		scrollTop: subNavTarget.offset().top
	}, 600);		

});
    	




// stripe sections
$('#main > .feature-section').filter(':odd').addClass('stripe');


// add down-arrow to .menu-item-has-children
var down_arrow = '<svg class="icon-keyboard-arrow-down-nav" viewBox="0 0 1024 1024"><use xlink:href="#icon-keyboard-arrow-down"></use></svg>';
$(down_arrow).insertAfter('.menu-item-has-children > a');





					
});




















	