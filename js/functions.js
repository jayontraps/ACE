// (function($,window){
  
  window.getActiveMQ = function()
	{
		$('<div id="getActiveMQ-watcher"></div>')
			.appendTo('body')
			.hide();
	
		var computed = window.getComputedStyle,
			watcher = document.getElementById('getActiveMQ-watcher');
			if ( 'currentStyle' in watcher )
			{
				window.getActiveMQ = function()
				{
					// return watcher.currentStyle['fontFamily'].replace(/['"]/g,'');
					return watcher.currentStyle.fontFamily.replace(/['"]/g,'');
				};
			}
			else if ( computed )
			{
				window.getActiveMQ = function()
				{
					return computed( watcher, null ).getPropertyValue( 'font-family' ).replace(/['"]/g,'');
				};
			}
			else
			{
				window.getActiveMQ = function()
				{
					return 'unknown';
				};
			}
			return window.getActiveMQ();
	};

// }(jQuery, window));





// debulked onresize handler - https://github.com/louisremi/jquery-smartresize
function on_resize(c,t){
	onresize=function(){
		clearTimeout(t);
		t=setTimeout(c,100);
	};
	return c;
}





// https://coderwall.com/p/fnvjvg/jquery-test-if-element-is-in-viewport
$.fn.isOnScreen = function(){
    
    var win = $(window);
    
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    
};


// http://gabrieleromanato.name/jquery-check-if-users-stop-scrolling/
(function( $ ) {
	$.fn.stopScroll = function( options ) {
		options = $.extend({
			delay: 250,
			callback: function() {}
		}, options);
		
		return this.each(function() {
			var $element = $( this ),
				element = this;
			$element.scroll(function() {
				clearTimeout( $.data( element, "scrollCheck" ) );
				$.data( element, "scrollCheck", setTimeout(function() {
					options.callback();
				}, options.delay ) );
			});
		});
	};

})( jQuery );





















