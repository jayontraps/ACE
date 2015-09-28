(function($) {		

$(document).ready(function(){

var overlayDiv = document.getElementById("load-over-lay");

if ($("body").hasClass("home")) {

		
	/* HELP JQUERY FIND THE ROOT OF THE SERVER FOR THE ACTON BUTTON */
	// var rootUrl = ""; // will only serve the root home page
	// var rootUrl = "http://localhost:3000/acedance/";	// will fail on external BrowserSync URL
	// var rootUrl = "http://jasonrighelato.net/acedance/";
	var rootUrl = "http://acedanceandmusic.com/";





	/* COOKIE FUNCTION TO CALL ONCE PER SESSION */
	// if (Cookies.get("overlay")) {
	// 	$(overlayDiv)
	// 		.addClass("done")
	// 		.delay( 200 )
	// 		.remove();		
	// } else {	
		// Cookies.set('overlay', '1');

		$.ajax({
			url: rootUrl + 'overlay.html',
			dataType: 'html',
			success: function(data){
				$(overlayDiv).append(data);			 
			},
			complete: function() {
				/* populate href */
				var manaUrl = window.location.protocol + '//' + window.location.host + "/production/mana/#tour";
				// console.log(manaUrl);
				var actionBtn = document.getElementById("action-btn");
				$(actionBtn).attr("href", manaUrl);					

				
				var backGround = document.getElementById("layer-1");
				var presents = document.getElementById("presents");
				var layerTwo = document.getElementById("layer-2");
				var closeOverlay = document.getElementById("close-overlay");


				var tl = new TimelineLite();

				TweenLite.set(layerTwo,{visibility:"visible"});
				// TweenLite.set(".play-overlay",{visibility:"visible"});
				TweenLite.set(".prod-name",{visibility:"visible"});
				TweenLite.set(".sub-title-layer",{visibility:"visible"});
				TweenLite.set(".ace-presents",{visibility:"visible"});
				TweenLite.set(".action-btn",{visibility:"visible"});


				tl.from('.ace-presents', 2, {autoAlpha:0}, "kickoff")
				.from(backGround, 8, {autoAlpha:0}, "kickoff")
				.from(".prod-name", 2, {drawSVG:0, ease:Power1.easeInOut}, "feature-=6")
				.from(".sub-title-layer", 1, {autoAlpha:0}, "feature-=4")
				.from(".action-btn", 1,  { scale:0.95, autoAlpha:0 }, "feature-=4");
				// .from(".play-overlay", 1, {drawSVG:0, ease:Power1.easeInOut, onComplete:wereDone}, "feature-=4");


				function wereDone() {
					console.log("we're done!");
				}

				$(closeOverlay).on('click', function() {
					$(overlayDiv)
						.addClass("done")
						.delay( 200 )
						.remove();
				});
				
							
			}

		});
	       				
	// } // cookie check




} else {
	overlayDiv.style.display = 'none';
}

});

})(jQuery);