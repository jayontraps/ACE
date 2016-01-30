/*
jQuery Waypoints - v1.1.4
Copyright (c) 2011-2012 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/MIT-license.txt
https://github.com/imakewebthings/jquery-waypoints/blob/master/GPL-license.txt
*/
(function($,k,m,i,d){var e=$(i),g="waypoint.reached",b=function(o,n){o.element.trigger(g,n);if(o.options.triggerOnce){o.element[k]("destroy")}},h=function(p,o){var n=o.waypoints.length-1;while(n>=0&&o.waypoints[n].element[0]!==p[0]){n-=1}return n},f=[],l=function(n){$.extend(this,{element:$(n),oldScroll:0,waypoints:[],didScroll:false,didResize:false,doScroll:$.proxy(function(){var q=this.element.scrollTop(),p=q>this.oldScroll,s=this,r=$.grep(this.waypoints,function(u,t){return p?(u.offset>s.oldScroll&&u.offset<=q):(u.offset<=s.oldScroll&&u.offset>q)}),o=r.length;if(!this.oldScroll||!q){$[m]("refresh")}this.oldScroll=q;if(!o){return}if(!p){r.reverse()}$.each(r,function(u,t){if(t.options.continuous||u===o-1){b(t,[p?"down":"up"])}})},this)});$(n).scroll($.proxy(function(){if(!this.didScroll){this.didScroll=true;i.setTimeout($.proxy(function(){this.doScroll();this.didScroll=false},this),$[m].settings.scrollThrottle)}},this)).resize($.proxy(function(){if(!this.didResize){this.didResize=true;i.setTimeout($.proxy(function(){$[m]("refresh");this.didResize=false},this),$[m].settings.resizeThrottle)}},this));e.load($.proxy(function(){this.doScroll()},this))},j=function(n){var o=null;$.each(f,function(p,q){if(q.element[0]===n){o=q;return false}});return o},c={init:function(o,n){this.each(function(){var u=$.fn[k].defaults.context,q,t=$(this);if(n&&n.context){u=n.context}if(!$.isWindow(u)){u=t.closest(u)[0]}q=j(u);if(!q){q=new l(u);f.push(q)}var p=h(t,q),s=p<0?$.fn[k].defaults:q.waypoints[p].options,r=$.extend({},s,n);r.offset=r.offset==="bottom-in-view"?function(){var v=$.isWindow(u)?$[m]("viewportHeight"):$(u).height();return v-$(this).outerHeight()}:r.offset;if(p<0){q.waypoints.push({element:t,offset:null,options:r})}else{q.waypoints[p].options=r}if(o){t.bind(g,o)}if(n&&n.handler){t.bind(g,n.handler)}});$[m]("refresh");return this},remove:function(){return this.each(function(o,p){var n=$(p);$.each(f,function(r,s){var q=h(n,s);if(q>=0){s.waypoints.splice(q,1)}})})},destroy:function(){return this.unbind(g)[k]("remove")}},a={refresh:function(){$.each(f,function(r,s){var q=$.isWindow(s.element[0]),n=q?0:s.element.offset().top,p=q?$[m]("viewportHeight"):s.element.height(),o=q?0:s.element.scrollTop();$.each(s.waypoints,function(u,x){if(!x){return}var t=x.options.offset,w=x.offset;if(typeof x.options.offset==="function"){t=x.options.offset.apply(x.element)}else{if(typeof x.options.offset==="string"){var v=parseFloat(x.options.offset);t=x.options.offset.indexOf("%")?Math.ceil(p*(v/100)):v}}x.offset=x.element.offset().top-n+o-t;if(x.options.onlyOnScroll){return}if(w!==null&&s.oldScroll>w&&s.oldScroll<=x.offset){b(x,["up"])}else{if(w!==null&&s.oldScroll<w&&s.oldScroll>=x.offset){b(x,["down"])}else{if(!w&&o>x.offset){b(x,["down"])}}}});s.waypoints.sort(function(u,t){return u.offset-t.offset})})},viewportHeight:function(){return(i.innerHeight?i.innerHeight:e.height())},aggregate:function(){var n=$();$.each(f,function(o,p){$.each(p.waypoints,function(q,r){n=n.add(r.element)})});return n}};$.fn[k]=function(n){if(c[n]){return c[n].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof n==="function"||!n){return c.init.apply(this,arguments)}else{if(typeof n==="object"){return c.init.apply(this,[null,n])}else{$.error("Method "+n+" does not exist on jQuery "+k)}}}};$.fn[k].defaults={continuous:true,offset:0,triggerOnce:false,context:i};$[m]=function(n){if(a[n]){return a[n].apply(this)}else{return a.aggregate()}};$[m].settings={resizeThrottle:200,scrollThrottle:100};e.load(function(){$[m]("refresh")})})(jQuery,"waypoint","waypoints",this);
!function(a){"use strict";function b(){this.$dom=a(document),this.$html=this.$dom.find("html"),this.isOldie=!!this.$html.hasClass("oldie"),this.click="click",this.onReady=this.onOldie=this.onTouch=!1,this.autoInit="false"===a("script[gumby-init]").attr("gumby-init")?!1:!0,this.debugMode=Boolean(a("script[gumby-debug]").length),this.touchDevice=!!(Modernizr.touch||window.navigator.userAgent.indexOf("Windows Phone")>0),this.gumbyTouch=!1,this.touchEvents="js/libs",this.breakpoint=Number(a("script[gumby-breakpoint]").attr("gumby-breakpoint"))||768,this.touchEventsLoaded=!1,this.uiModulesReady=!1,this.uiModules={},this.inits={};var b=a("script[gumby-touch]").attr("gumby-touch"),c=a("script[gumby-path]").attr("gumby-path");"false"===b?this.touchEvents=!1:b?this.touchEvents=b:c&&(this.touchEvents=c),this.touchDevice&&(this.click+=" tap"),this.touchDevice&&a(window).width()<this.breakpoint?(this.$html.addClass("gumby-touch"),this.gumbyTouch=!0):this.$html.addClass("gumby-no-touch"),this.debugMode&&this.debug("Gumby is in debug mode")}b.prototype.init=function(a){var b=this,c=a?a:{};return this.$dom.ready(function(){c.debug&&(b.debugMode=!0),b.debug("Initializing Gumby");var a=c.uiModules?c.uiModules:!1;b.initUIModules(a),b.onReady&&b.onReady(),b.isOldie&&b.onOldie&&b.onOldie(),Modernizr.touch&&b.onTouch&&b.onTouch()}),this},b.prototype.helpers=function(){this.onReady&&this.onReady(),this.isOldie&&this.onOldie&&this.onOldie(),Modernizr.touch&&this.onTouch&&this.onTouch()},b.prototype.ready=function(a){return a&&"function"==typeof a&&(this.onReady=a),this},b.prototype.oldie=function(a){return a&&"function"==typeof a&&(this.onOldie=a),this},b.prototype.touch=function(a){return a&&"function"==typeof a&&(this.onTouch=a),this},b.prototype.console=function(a,b){this.debugMode&&window.console&&console[console[a]?a:"log"](b.length>1?Array.prototype.slice.call(b):b[0])},b.prototype.log=function(){this.console("log",arguments)},b.prototype.debug=function(){this.console("debug",arguments)},b.prototype.warn=function(){this.console("warn",arguments)},b.prototype.error=function(){this.console("error",arguments)},b.prototype.dump=function(){return{$dom:this.$dom,isOldie:this.isOldie,touchEvents:this.touchEvents,debugMode:this.debugMode,autoInit:this.autoInit,uiModules:this.uiModules,click:this.click}},b.prototype.selectAttr=function(){for(var a=0;a<arguments.length;a++){var b=arguments[a],c="data-"+arguments[a],d="gumby-"+arguments[a];if(this.is("["+c+"]"))return this.attr(c)?this.attr(c):!0;if(this.is("["+d+"]"))return this.attr(d)?this.attr(d):!0;if(this.is("["+b+"]"))return this.attr(b)?this.attr(b):!0}return!1},b.prototype.addInitalisation=function(a,b){this.inits[a]=b},b.prototype.initialize=function(a,b){if("object"==typeof a){var c=0;for(c;c<a.length;c++)this.inits[a[c]]&&"function"==typeof this.inits[a[c]]?this.inits[a[c]](b):this.error("Error initializing module: "+a[c])}else this.inits[a]&&"function"==typeof this.inits[a]?this.inits[a](b):this.error("Error initializing module: "+a);return this},b.prototype.UIModule=function(a){var b=a.module;this.uiModules[b]=a},b.prototype.initUIModules=function(a){var b,c,d=this.uiModules;a&&(d=a);for(b in d)c=a?d[b]:b,this.uiModules[c].init()},window.Gumby=new b}(jQuery),!function(a){"use strict";Gumby.touchDevice&&Gumby.touchEvents||!Gumby.autoInit?Gumby.touchEvents&&Gumby.touchDevice&&(Gumby.debug("Loading jQuery mobile touch events"),yepnope.errorTimeout=2e3,Modernizr.load({test:Modernizr.touch,yep:Gumby.touchEvents+"/jquery.mobile.custom.min.js",complete:function(){a.mobile||Gumby.error("Error loading jQuery mobile touch events"),Gumby.touchEventsLoaded=!0,Gumby.autoInit?window.Gumby.init():Gumby.uiModulesReady&&Gumby.helpers()}})):window.Gumby.init(),"function"==typeof define&&define.amd&&define(window.Gumby)}(jQuery),!function(){"use strict";function a(a){Gumby.debug("Initializing Parallax",a),this.$el=a,this.$holder={},this.ratio=this.offset=0;var b=this;this.setup(),this.$el.on("gumby.initialize",function(){Gumby.debug("Re-initializing Parallax",b.$el),b.setup()}),this.setPosition(),this.$holder.scroll(function(){b.scroll()}),this.scroll()}Gumby.gumbyTouch||(a.prototype.setup=function(){this.$holder=Gumby.selectAttr.apply(this.$el,["holder"]),this.ratio=Number(Gumby.selectAttr.apply(this.$el,["parallax"]))||1,this.offset=Number(Gumby.selectAttr.apply(this.$el,["offset"]))||0,this.xPos=this.$el.css("backgroundPosition").split(" ")[0],this.xPos&&"0%"!==this.xPos||(this.xPos="50%"),this.startPos=(this.$el.offset().top-this.offset)*this.ratio,this.$holder&&(this.$holder=$(this.$holder)),this.$holder&&this.$holder.length?this.startPos-=this.$holder.offset().top:this.$holder=$(window)},a.prototype.scroll=function(){this.setPosition(this.startPos-this.$holder.scrollTop()*this.ratio)},a.prototype.setPosition=function(a){this.$el.css("backgroundPosition",this.xPos+" "+a+"px")},Gumby.addInitalisation("parallax",function(){$(".parallax").each(function(){var b=$(this);return b.data("isParallax")?!0:(b.data("isParallax",!0),void new a(b))})}),Gumby.UIModule({module:"parallax",events:[],init:function(){Gumby.initialize("parallax")}}))}(),!function(a){"use strict";function b(b){Gumby.debug("Initializing Fixed Position",b),this.$el=b,this.$window=a(window),this.fixedPoint="",this.pinPoint=!1,this.fixedPointjQ=!1,this.pinPointjQ=!1,this.offset=0,this.pinOffset=0,this.top=0,this.constrainEl=!0,this.state=!1,this.measurements={left:0,width:0},this.setup();var c=this;this.$window.on("scroll load",function(){c.monitorScroll()}),this.$el.on("gumby.initialize",function(){Gumby.debug("Re-initializing Fixed Position",b),c.setup(),c.monitorScroll()})}b.prototype.setup=function(){var a=this;this.fixedPoint=this.parseAttrValue(Gumby.selectAttr.apply(this.$el,["fixed"])),this.pinPoint=Gumby.selectAttr.apply(this.$el,["pin"])||!1,this.offset=Number(Gumby.selectAttr.apply(this.$el,["offset"]))||0,this.pinOffset=Number(Gumby.selectAttr.apply(this.$el,["pinoffset"]))||0,this.top=Number(Gumby.selectAttr.apply(this.$el,["top"]))||0,this.constrainEl=Gumby.selectAttr.apply(this.$el,["constrain"])||!0,"false"===this.constrainEl&&(this.constrainEl=!1),this.$parent=this.$el.parents(".columns, .column, .row"),this.$parent=this.$parent.length?this.$parent.first():!1,this.parentRow=this.$parent?!!this.$parent.hasClass("row"):!1,this.pinPoint&&(this.pinPoint=this.parseAttrValue(this.pinPoint)),this.fixedPointjQ=this.fixedPoint instanceof jQuery,this.pinPointjQ=this.pinPoint instanceof jQuery,this.$parent&&this.constrainEl&&(this.measure(),this.$window.resize(function(){a.state&&(a.measure(),a.constrain())}))},b.prototype.monitorScroll=function(){var a=this.$window.scrollTop(),b=this.fixedPointjQ?this.fixedPoint.offset().top:this.fixedPoint,c=!1;this.pinPoint&&(c=this.pinPointjQ?this.pinPoint.offset().top:this.pinPoint),this.offset&&(b-=this.offset),this.pinOffset&&(c-=this.pinOffset),a>=b&&"fixed"!==this.state?(!c||c>a)&&this.fix():b>a&&"fixed"===this.state?this.unfix():c&&a>=c&&"pinned"!==this.state&&this.pin()},b.prototype.fix=function(){Gumby.debug("Element has been fixed",this.$el),Gumby.debug("Triggering onFixed event",this.$el),this.state="fixed",this.$el.css({top:this.top}).addClass("fixed").removeClass("unfixed pinned").trigger("gumby.onFixed"),this.$parent&&this.constrain()},b.prototype.unfix=function(){Gumby.debug("Element has been unfixed",this.$el),Gumby.debug("Triggering onUnfixed event",this.$el),this.state="unfixed",this.$el.addClass("unfixed").removeClass("fixed pinned").trigger("gumby.onUnfixed")},b.prototype.pin=function(){Gumby.debug("Element has been pinned",this.$el),Gumby.debug("Triggering onPinned event",this.$el),this.state="pinned",this.$el.css({top:this.$el.offset().top}).addClass("pinned fixed").removeClass("unfixed").trigger("gumby.onPinned")},b.prototype.constrain=function(){Gumby.debug("Constraining element",this.$el),this.$el.css({left:this.measurements.left,width:this.measurements.width})},b.prototype.measure=function(){var a;this.measurements.left=this.$parent.offset().left,this.measurements.width=this.$parent.width(),this.parentRow&&(a=Number(this.$parent.css("paddingLeft").replace(/px/,"")),a&&(this.measurements.left+=a))},b.prototype.parseAttrValue=function(b){if(a.isNumeric(b))return Number(b);if("top"===b)return this.$el.offset().top;var c=a(b);return c.length?c:(Gumby.error("Cannot find Fixed target: "+b),!1)},Gumby.addInitalisation("fixed",function(c){a("[data-fixed],[gumby-fixed],[fixed]").each(function(){var d=a(this);return d.data("isFixed")&&!c?!0:d.data("isFixed")&&c?(d.trigger("gumby.initialize"),!0):(d.data("isFixed",!0),void new b(d))})}),Gumby.UIModule({module:"fixed",events:["initialize","onFixed","onUnfixed"],init:function(){Gumby.initialize("fixed")}})}(jQuery),!function(a){"use strict";function b(a){Gumby.debug("Initializing Skiplink",a),this.$el=a,this.targetPos=0,this.duration=0,this.offset=!1,this.easing="",this.update=!1,this.setup();var b=this;this.$el.on(Gumby.click+" gumby.skip",function(a){a.preventDefault(),"skip"===a.namespace&&Gumby.debug("Skip event triggered",b.$el),b.update?b.calculateTarget(b.skipTo):b.skipTo()}).on("gumby.initialize",function(){Gumby.debug("Re-initializing Skiplink",b.$el),b.setup()})}b.prototype.setup=function(){this.duration=Number(Gumby.selectAttr.apply(this.$el,["duration"]))||200,this.offset=Gumby.selectAttr.apply(this.$el,["offset"])||!1,this.easing=Gumby.selectAttr.apply(this.$el,["easing"])||"swing",this.update=Gumby.selectAttr.apply(this.$el,["update"])?!0:!1,this.calculateTarget()},b.prototype.calculateTarget=function(b){var c,d=Gumby.selectAttr.apply(this.$el,["goto"]);if("top"==d)this.targetPos=0;else if(a.isNumeric(d))this.targetPos=Number(d);else{if(c=a(d),!c.length)return Gumby.error("Cannot find skiplink target: "+d),!1;this.targetPos=c.offset().top}b&&b.apply(this)},b.prototype.skipTo=function(){Gumby.debug("Skipping to target",this.$el);var b=this;a("html,body").animate({scrollTop:this.calculateOffset()},this.duration,this.easing).promise().done(function(){Gumby.debug("Triggering onComplete event",b.$el),b.$el.trigger("gumby.onComplete")})},b.prototype.calculateOffset=function(){if(!this.offset)return this.targetPos;var a=this.offset.substr(0,1),b=Number(this.offset.substr(1,this.offset.length));return"-"===a?this.targetPos-b:"+"===a?this.targetPos+b:void 0},Gumby.addInitalisation("skiplink",function(c){a(".skiplink > a, .skip").each(function(){var d=a(this);return d.data("isSkipLink")&&!c?!0:d.data("isSkipLink")&&c?(d.trigger("gumby.initialize"),!0):(d.data("isSkipLink",!0),void new b(d))})}),Gumby.UIModule({module:"skiplink",events:["initialize","onComplete","skip"],init:function(){Gumby.initialize("skiplink")}})}(jQuery);
/*! WOW - v1.0.3 - 2015-01-14
* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new c}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],e=0,f=b.length;f>e;e++)d=b[e],g.push(function(){var a,b,e,f;for(e=d.addedNodes||[],f=[],a=0,b=e.length;b>a;a++)c=e[a],f.push(this.doSync(c));return f}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=""+a.className+" "+this.config.animateClass,null!=this.config.callback?this.config.callback(a):void 0},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;f=[];for(c in b)d=b[c],a[""+c]=d,f.push(function(){var b,f,g,h;for(g=this.vendors,h=[],b=0,f=g.length;f>b;b++)e=g[b],h.push(a[""+e+c.charAt(0).toUpperCase()+c.substr(1)]=d);return h}.call(this));return f},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(e=d(a),c=e.getPropertyCSSValue(b),i=this.vendors,g=0,h=i.length;h>g;g++)f=i[g],c=c||e.getPropertyCSSValue("-"+f+"-"+b);return c},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);
function on_resize(c, t) {
    return onresize = function() {
        clearTimeout(t), t = setTimeout(c, 100);
    }, c;
}

function load_slides(home_mq) {
    home_mq.matches && get_large_slides();
}

!function($) {
    var plugin = {}, defaults = {
        mode: "horizontal",
        slideSelector: "",
        infiniteLoop: !0,
        hideControlOnEnd: !1,
        speed: 500,
        easing: null,
        slideMargin: 0,
        startSlide: 0,
        randomStart: !1,
        captions: !1,
        ticker: !1,
        tickerHover: !1,
        adaptiveHeight: !1,
        adaptiveHeightSpeed: 500,
        video: !1,
        useCSS: !0,
        preloadImages: "visible",
        responsive: !0,
        slideZIndex: 50,
        wrapperClass: "bx-wrapper",
        touchEnabled: !0,
        swipeThreshold: 50,
        oneToOneTouch: !0,
        preventDefaultSwipeX: !0,
        preventDefaultSwipeY: !1,
        pager: !0,
        pagerType: "full",
        pagerShortSeparator: " / ",
        pagerSelector: null,
        buildPager: null,
        pagerCustom: null,
        controls: !0,
        nextText: "Next",
        prevText: "Prev",
        nextSelector: null,
        prevSelector: null,
        autoControls: !1,
        startText: "Start",
        stopText: "Stop",
        autoControlsCombine: !1,
        autoControlsSelector: null,
        auto: !1,
        pause: 4e3,
        autoStart: !0,
        autoDirection: "next",
        autoHover: !1,
        autoDelay: 0,
        autoSlideForOnePage: !1,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 0,
        slideWidth: 0,
        onSliderLoad: function() {},
        onSlideBefore: function() {},
        onSlideAfter: function() {},
        onSlideNext: function() {},
        onSlidePrev: function() {},
        onSliderResize: function() {}
    };
    $.fn.bxSlider = function(options) {
        if (0 == this.length) return this;
        if (this.length > 1) return this.each(function() {
            $(this).bxSlider(options);
        }), this;
        var slider = {}, el = this;
        plugin.el = this;
        var windowWidth = $(window).width(), windowHeight = $(window).height(), init = function() {
            slider.settings = $.extend({}, defaults, options), slider.settings.slideWidth = parseInt(slider.settings.slideWidth), 
            slider.children = el.children(slider.settings.slideSelector), slider.children.length < slider.settings.minSlides && (slider.settings.minSlides = slider.children.length), 
            slider.children.length < slider.settings.maxSlides && (slider.settings.maxSlides = slider.children.length), 
            slider.settings.randomStart && (slider.settings.startSlide = Math.floor(Math.random() * slider.children.length)), 
            slider.active = {
                index: slider.settings.startSlide
            }, slider.carousel = slider.settings.minSlides > 1 || slider.settings.maxSlides > 1, 
            slider.carousel && (slider.settings.preloadImages = "all"), slider.minThreshold = slider.settings.minSlides * slider.settings.slideWidth + (slider.settings.minSlides - 1) * slider.settings.slideMargin, 
            slider.maxThreshold = slider.settings.maxSlides * slider.settings.slideWidth + (slider.settings.maxSlides - 1) * slider.settings.slideMargin, 
            slider.working = !1, slider.controls = {}, slider.interval = null, slider.animProp = "vertical" == slider.settings.mode ? "top" : "left", 
            slider.usingCSS = slider.settings.useCSS && "fade" != slider.settings.mode && function() {
                var div = document.createElement("div"), props = [ "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective" ];
                for (var i in props) if (void 0 !== div.style[props[i]]) return slider.cssPrefix = props[i].replace("Perspective", "").toLowerCase(), 
                slider.animProp = "-" + slider.cssPrefix + "-transform", !0;
                return !1;
            }(), "vertical" == slider.settings.mode && (slider.settings.maxSlides = slider.settings.minSlides), 
            el.data("origStyle", el.attr("style")), el.children(slider.settings.slideSelector).each(function() {
                $(this).data("origStyle", $(this).attr("style"));
            }), setup();
        }, setup = function() {
            el.wrap('<div class="' + slider.settings.wrapperClass + '"><div class="bx-viewport"></div></div>'), 
            slider.viewport = el.parent(), slider.loader = $('<div class="bx-loading" />'), 
            slider.viewport.prepend(slider.loader), el.css({
                width: "horizontal" == slider.settings.mode ? 100 * slider.children.length + 215 + "%" : "auto",
                position: "relative"
            }), slider.usingCSS && slider.settings.easing ? el.css("-" + slider.cssPrefix + "-transition-timing-function", slider.settings.easing) : slider.settings.easing || (slider.settings.easing = "swing");
            getNumberSlidesShowing();
            slider.viewport.css({
                width: "100%",
                position: "relative"
            }), slider.viewport.parent().css({
                maxWidth: getViewportMaxWidth()
            }), slider.settings.pager || slider.viewport.parent().css({
                margin: "0 auto 0px"
            }), slider.children.css({
                "float": "horizontal" == slider.settings.mode ? "left" : "none",
                listStyle: "none",
                position: "relative"
            }), slider.children.css("width", getSlideWidth()), "horizontal" == slider.settings.mode && slider.settings.slideMargin > 0 && slider.children.css("marginRight", slider.settings.slideMargin), 
            "vertical" == slider.settings.mode && slider.settings.slideMargin > 0 && slider.children.css("marginBottom", slider.settings.slideMargin), 
            "fade" == slider.settings.mode && (slider.children.css({
                position: "absolute",
                zIndex: 0,
                display: "none"
            }), slider.children.eq(slider.settings.startSlide).css({
                zIndex: slider.settings.slideZIndex,
                display: "block"
            })), slider.controls.el = $('<div class="bx-controls" />'), slider.settings.captions && appendCaptions(), 
            slider.active.last = slider.settings.startSlide == getPagerQty() - 1, slider.settings.video && el.fitVids();
            var preloadSelector = slider.children.eq(slider.settings.startSlide);
            "all" == slider.settings.preloadImages && (preloadSelector = slider.children), slider.settings.ticker ? slider.settings.pager = !1 : (slider.settings.pager && appendPager(), 
            slider.settings.controls && appendControls(), slider.settings.auto && slider.settings.autoControls && appendControlsAuto(), 
            (slider.settings.controls || slider.settings.autoControls || slider.settings.pager) && slider.viewport.after(slider.controls.el)), 
            loadElements(preloadSelector, start);
        }, loadElements = function(selector, callback) {
            var total = selector.find("img, iframe").length;
            if (0 == total) return void callback();
            var count = 0;
            selector.find("img, iframe").each(function() {
                $(this).one("load", function() {
                    ++count == total && callback();
                }).each(function() {
                    this.complete && $(this).load();
                });
            });
        }, start = function() {
            if (slider.settings.infiniteLoop && "fade" != slider.settings.mode && !slider.settings.ticker) {
                var slice = "vertical" == slider.settings.mode ? slider.settings.minSlides : slider.settings.maxSlides, sliceAppend = slider.children.slice(0, slice).clone().addClass("bx-clone"), slicePrepend = slider.children.slice(-slice).clone().addClass("bx-clone");
                el.append(sliceAppend).prepend(slicePrepend);
            }
            slider.loader.remove(), setSlidePosition(), "vertical" == slider.settings.mode && (slider.settings.adaptiveHeight = !0), 
            slider.viewport.height(getViewportHeight()), el.redrawSlider(), slider.settings.onSliderLoad(slider.active.index), 
            slider.initialized = !0, slider.settings.responsive && $(window).bind("resize", resizeWindow), 
            slider.settings.auto && slider.settings.autoStart && (getPagerQty() > 1 || slider.settings.autoSlideForOnePage) && initAuto(), 
            slider.settings.ticker && initTicker(), slider.settings.pager && updatePagerActive(slider.settings.startSlide), 
            slider.settings.controls && updateDirectionControls(), slider.settings.touchEnabled && !slider.settings.ticker && initTouch();
        }, getViewportHeight = function() {
            var height = 0, children = $();
            if ("vertical" == slider.settings.mode || slider.settings.adaptiveHeight) if (slider.carousel) {
                var currentIndex = 1 == slider.settings.moveSlides ? slider.active.index : slider.active.index * getMoveBy();
                for (children = slider.children.eq(currentIndex), i = 1; i <= slider.settings.maxSlides - 1; i++) children = children.add(currentIndex + i >= slider.children.length ? slider.children.eq(i - 1) : slider.children.eq(currentIndex + i));
            } else children = slider.children.eq(slider.active.index); else children = slider.children;
            return "vertical" == slider.settings.mode ? (children.each(function(index) {
                height += $(this).outerHeight();
            }), slider.settings.slideMargin > 0 && (height += slider.settings.slideMargin * (slider.settings.minSlides - 1))) : height = Math.max.apply(Math, children.map(function() {
                return $(this).outerHeight(!1);
            }).get()), "border-box" == slider.viewport.css("box-sizing") ? height += parseFloat(slider.viewport.css("padding-top")) + parseFloat(slider.viewport.css("padding-bottom")) + parseFloat(slider.viewport.css("border-top-width")) + parseFloat(slider.viewport.css("border-bottom-width")) : "padding-box" == slider.viewport.css("box-sizing") && (height += parseFloat(slider.viewport.css("padding-top")) + parseFloat(slider.viewport.css("padding-bottom"))), 
            height;
        }, getViewportMaxWidth = function() {
            var width = "100%";
            return slider.settings.slideWidth > 0 && (width = "horizontal" == slider.settings.mode ? slider.settings.maxSlides * slider.settings.slideWidth + (slider.settings.maxSlides - 1) * slider.settings.slideMargin : slider.settings.slideWidth), 
            width;
        }, getSlideWidth = function() {
            var newElWidth = slider.settings.slideWidth, wrapWidth = slider.viewport.width();
            return 0 == slider.settings.slideWidth || slider.settings.slideWidth > wrapWidth && !slider.carousel || "vertical" == slider.settings.mode ? newElWidth = wrapWidth : slider.settings.maxSlides > 1 && "horizontal" == slider.settings.mode && (wrapWidth > slider.maxThreshold || wrapWidth < slider.minThreshold && (newElWidth = (wrapWidth - slider.settings.slideMargin * (slider.settings.minSlides - 1)) / slider.settings.minSlides)), 
            newElWidth;
        }, getNumberSlidesShowing = function() {
            var slidesShowing = 1;
            if ("horizontal" == slider.settings.mode && slider.settings.slideWidth > 0) if (slider.viewport.width() < slider.minThreshold) slidesShowing = slider.settings.minSlides; else if (slider.viewport.width() > slider.maxThreshold) slidesShowing = slider.settings.maxSlides; else {
                var childWidth = slider.children.first().width() + slider.settings.slideMargin;
                slidesShowing = Math.floor((slider.viewport.width() + slider.settings.slideMargin) / childWidth);
            } else "vertical" == slider.settings.mode && (slidesShowing = slider.settings.minSlides);
            return slidesShowing;
        }, getPagerQty = function() {
            var pagerQty = 0;
            if (slider.settings.moveSlides > 0) if (slider.settings.infiniteLoop) pagerQty = Math.ceil(slider.children.length / getMoveBy()); else for (var breakPoint = 0, counter = 0; breakPoint < slider.children.length; ) ++pagerQty, 
            breakPoint = counter + getNumberSlidesShowing(), counter += slider.settings.moveSlides <= getNumberSlidesShowing() ? slider.settings.moveSlides : getNumberSlidesShowing(); else pagerQty = Math.ceil(slider.children.length / getNumberSlidesShowing());
            return pagerQty;
        }, getMoveBy = function() {
            return slider.settings.moveSlides > 0 && slider.settings.moveSlides <= getNumberSlidesShowing() ? slider.settings.moveSlides : getNumberSlidesShowing();
        }, setSlidePosition = function() {
            if (slider.children.length > slider.settings.maxSlides && slider.active.last && !slider.settings.infiniteLoop) {
                if ("horizontal" == slider.settings.mode) {
                    var lastChild = slider.children.last(), position = lastChild.position();
                    setPositionProperty(-(position.left - (slider.viewport.width() - lastChild.outerWidth())), "reset", 0);
                } else if ("vertical" == slider.settings.mode) {
                    var lastShowingIndex = slider.children.length - slider.settings.minSlides, position = slider.children.eq(lastShowingIndex).position();
                    setPositionProperty(-position.top, "reset", 0);
                }
            } else {
                var position = slider.children.eq(slider.active.index * getMoveBy()).position();
                slider.active.index == getPagerQty() - 1 && (slider.active.last = !0), void 0 != position && ("horizontal" == slider.settings.mode ? setPositionProperty(-position.left, "reset", 0) : "vertical" == slider.settings.mode && setPositionProperty(-position.top, "reset", 0));
            }
        }, setPositionProperty = function(value, type, duration, params) {
            if (slider.usingCSS) {
                var propValue = "vertical" == slider.settings.mode ? "translate3d(0, " + value + "px, 0)" : "translate3d(" + value + "px, 0, 0)";
                el.css("-" + slider.cssPrefix + "-transition-duration", duration / 1e3 + "s"), "slide" == type ? (el.css(slider.animProp, propValue), 
                el.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                    el.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), updateAfterSlideTransition();
                })) : "reset" == type ? el.css(slider.animProp, propValue) : "ticker" == type && (el.css("-" + slider.cssPrefix + "-transition-timing-function", "linear"), 
                el.css(slider.animProp, propValue), el.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                    el.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), setPositionProperty(params.resetValue, "reset", 0), 
                    tickerLoop();
                }));
            } else {
                var animateObj = {};
                animateObj[slider.animProp] = value, "slide" == type ? el.animate(animateObj, duration, slider.settings.easing, function() {
                    updateAfterSlideTransition();
                }) : "reset" == type ? el.css(slider.animProp, value) : "ticker" == type && el.animate(animateObj, speed, "linear", function() {
                    setPositionProperty(params.resetValue, "reset", 0), tickerLoop();
                });
            }
        }, populatePager = function() {
            for (var pagerHtml = "", pagerQty = getPagerQty(), i = 0; pagerQty > i; i++) {
                var linkContent = "";
                slider.settings.buildPager && $.isFunction(slider.settings.buildPager) ? (linkContent = slider.settings.buildPager(i), 
                slider.pagerEl.addClass("bx-custom-pager")) : (linkContent = i + 1, slider.pagerEl.addClass("bx-default-pager")), 
                pagerHtml += '<div class="bx-pager-item"><a href="" data-slide-index="' + i + '" class="bx-pager-link">' + linkContent + "</a></div>";
            }
            slider.pagerEl.html(pagerHtml);
        }, appendPager = function() {
            slider.settings.pagerCustom ? slider.pagerEl = $(slider.settings.pagerCustom) : (slider.pagerEl = $('<div class="bx-pager" />'), 
            slider.settings.pagerSelector ? $(slider.settings.pagerSelector).html(slider.pagerEl) : slider.controls.el.addClass("bx-has-pager").append(slider.pagerEl), 
            populatePager()), slider.pagerEl.on("click", "a", clickPagerBind);
        }, appendControls = function() {
            slider.controls.next = $('<a class="bx-next" href="">' + slider.settings.nextText + "</a>"), 
            slider.controls.prev = $('<a class="bx-prev" href="">' + slider.settings.prevText + "</a>"), 
            slider.controls.next.bind("click", clickNextBind), slider.controls.prev.bind("click", clickPrevBind), 
            slider.settings.nextSelector && $(slider.settings.nextSelector).append(slider.controls.next), 
            slider.settings.prevSelector && $(slider.settings.prevSelector).append(slider.controls.prev), 
            slider.settings.nextSelector || slider.settings.prevSelector || (slider.controls.directionEl = $('<div class="bx-controls-direction" />'), 
            slider.controls.directionEl.append(slider.controls.prev).append(slider.controls.next), 
            slider.controls.el.addClass("bx-has-controls-direction").append(slider.controls.directionEl));
        }, appendControlsAuto = function() {
            slider.controls.start = $('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + slider.settings.startText + "</a></div>"), 
            slider.controls.stop = $('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + slider.settings.stopText + "</a></div>"), 
            slider.controls.autoEl = $('<div class="bx-controls-auto" />'), slider.controls.autoEl.on("click", ".bx-start", clickStartBind), 
            slider.controls.autoEl.on("click", ".bx-stop", clickStopBind), slider.settings.autoControlsCombine ? slider.controls.autoEl.append(slider.controls.start) : slider.controls.autoEl.append(slider.controls.start).append(slider.controls.stop), 
            slider.settings.autoControlsSelector ? $(slider.settings.autoControlsSelector).html(slider.controls.autoEl) : slider.controls.el.addClass("bx-has-controls-auto").append(slider.controls.autoEl), 
            updateAutoControls(slider.settings.autoStart ? "stop" : "start");
        }, appendCaptions = function() {
            slider.children.each(function(index) {
                var title = $(this).find("img:first").attr("title");
                void 0 != title && ("" + title).length && $(this).append('<div class="bx-caption"><span>' + title + "</span></div>");
            });
        }, clickNextBind = function(e) {
            slider.settings.auto && el.stopAuto(), el.goToNextSlide(), e.preventDefault();
        }, clickPrevBind = function(e) {
            slider.settings.auto && el.stopAuto(), el.goToPrevSlide(), e.preventDefault();
        }, clickStartBind = function(e) {
            el.startAuto(), e.preventDefault();
        }, clickStopBind = function(e) {
            el.stopAuto(), e.preventDefault();
        }, clickPagerBind = function(e) {
            slider.settings.auto && el.stopAuto();
            var pagerLink = $(e.currentTarget);
            if (void 0 !== pagerLink.attr("data-slide-index")) {
                var pagerIndex = parseInt(pagerLink.attr("data-slide-index"));
                pagerIndex != slider.active.index && el.goToSlide(pagerIndex), e.preventDefault();
            }
        }, updatePagerActive = function(slideIndex) {
            var len = slider.children.length;
            return "short" == slider.settings.pagerType ? (slider.settings.maxSlides > 1 && (len = Math.ceil(slider.children.length / slider.settings.maxSlides)), 
            void slider.pagerEl.html(slideIndex + 1 + slider.settings.pagerShortSeparator + len)) : (slider.pagerEl.find("a").removeClass("active"), 
            void slider.pagerEl.each(function(i, el) {
                $(el).find("a").eq(slideIndex).addClass("active");
            }));
        }, updateAfterSlideTransition = function() {
            if (slider.settings.infiniteLoop) {
                var position = "";
                0 == slider.active.index ? position = slider.children.eq(0).position() : slider.active.index == getPagerQty() - 1 && slider.carousel ? position = slider.children.eq((getPagerQty() - 1) * getMoveBy()).position() : slider.active.index == slider.children.length - 1 && (position = slider.children.eq(slider.children.length - 1).position()), 
                position && ("horizontal" == slider.settings.mode ? setPositionProperty(-position.left, "reset", 0) : "vertical" == slider.settings.mode && setPositionProperty(-position.top, "reset", 0));
            }
            slider.working = !1, slider.settings.onSlideAfter(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
        }, updateAutoControls = function(state) {
            slider.settings.autoControlsCombine ? slider.controls.autoEl.html(slider.controls[state]) : (slider.controls.autoEl.find("a").removeClass("active"), 
            slider.controls.autoEl.find("a:not(.bx-" + state + ")").addClass("active"));
        }, updateDirectionControls = function() {
            1 == getPagerQty() ? (slider.controls.prev.addClass("disabled"), slider.controls.next.addClass("disabled")) : !slider.settings.infiniteLoop && slider.settings.hideControlOnEnd && (0 == slider.active.index ? (slider.controls.prev.addClass("disabled"), 
            slider.controls.next.removeClass("disabled")) : slider.active.index == getPagerQty() - 1 ? (slider.controls.next.addClass("disabled"), 
            slider.controls.prev.removeClass("disabled")) : (slider.controls.prev.removeClass("disabled"), 
            slider.controls.next.removeClass("disabled")));
        }, initAuto = function() {
            if (slider.settings.autoDelay > 0) {
                setTimeout(el.startAuto, slider.settings.autoDelay);
            } else el.startAuto();
            slider.settings.autoHover && el.hover(function() {
                slider.interval && (el.stopAuto(!0), slider.autoPaused = !0);
            }, function() {
                slider.autoPaused && (el.startAuto(!0), slider.autoPaused = null);
            });
        }, initTicker = function() {
            var startPosition = 0;
            if ("next" == slider.settings.autoDirection) el.append(slider.children.clone().addClass("bx-clone")); else {
                el.prepend(slider.children.clone().addClass("bx-clone"));
                var position = slider.children.first().position();
                startPosition = "horizontal" == slider.settings.mode ? -position.left : -position.top;
            }
            setPositionProperty(startPosition, "reset", 0), slider.settings.pager = !1, slider.settings.controls = !1, 
            slider.settings.autoControls = !1, slider.settings.tickerHover && !slider.usingCSS && slider.viewport.hover(function() {
                el.stop();
            }, function() {
                var totalDimens = 0;
                slider.children.each(function(index) {
                    totalDimens += "horizontal" == slider.settings.mode ? $(this).outerWidth(!0) : $(this).outerHeight(!0);
                });
                var ratio = slider.settings.speed / totalDimens, property = "horizontal" == slider.settings.mode ? "left" : "top", newSpeed = ratio * (totalDimens - Math.abs(parseInt(el.css(property))));
                tickerLoop(newSpeed);
            }), tickerLoop();
        }, tickerLoop = function(resumeSpeed) {
            speed = resumeSpeed ? resumeSpeed : slider.settings.speed;
            var position = {
                left: 0,
                top: 0
            }, reset = {
                left: 0,
                top: 0
            };
            "next" == slider.settings.autoDirection ? position = el.find(".bx-clone").first().position() : reset = slider.children.first().position();
            var animateProperty = "horizontal" == slider.settings.mode ? -position.left : -position.top, resetValue = "horizontal" == slider.settings.mode ? -reset.left : -reset.top, params = {
                resetValue: resetValue
            };
            setPositionProperty(animateProperty, "ticker", speed, params);
        }, initTouch = function() {
            slider.touch = {
                start: {
                    x: 0,
                    y: 0
                },
                end: {
                    x: 0,
                    y: 0
                }
            }, slider.viewport.bind("touchstart", onTouchStart);
        }, onTouchStart = function(e) {
            if (slider.working) e.preventDefault(); else {
                slider.touch.originalPos = el.position();
                var orig = e.originalEvent;
                slider.touch.start.x = orig.changedTouches[0].pageX, slider.touch.start.y = orig.changedTouches[0].pageY, 
                slider.viewport.bind("touchmove", onTouchMove), slider.viewport.bind("touchend", onTouchEnd);
            }
        }, onTouchMove = function(e) {
            var orig = e.originalEvent, xMovement = Math.abs(orig.changedTouches[0].pageX - slider.touch.start.x), yMovement = Math.abs(orig.changedTouches[0].pageY - slider.touch.start.y);
            if (3 * xMovement > yMovement && slider.settings.preventDefaultSwipeX ? e.preventDefault() : 3 * yMovement > xMovement && slider.settings.preventDefaultSwipeY && e.preventDefault(), 
            "fade" != slider.settings.mode && slider.settings.oneToOneTouch) {
                var value = 0;
                if ("horizontal" == slider.settings.mode) {
                    var change = orig.changedTouches[0].pageX - slider.touch.start.x;
                    value = slider.touch.originalPos.left + change;
                } else {
                    var change = orig.changedTouches[0].pageY - slider.touch.start.y;
                    value = slider.touch.originalPos.top + change;
                }
                setPositionProperty(value, "reset", 0);
            }
        }, onTouchEnd = function(e) {
            slider.viewport.unbind("touchmove", onTouchMove);
            var orig = e.originalEvent, value = 0;
            if (slider.touch.end.x = orig.changedTouches[0].pageX, slider.touch.end.y = orig.changedTouches[0].pageY, 
            "fade" == slider.settings.mode) {
                var distance = Math.abs(slider.touch.start.x - slider.touch.end.x);
                distance >= slider.settings.swipeThreshold && (slider.touch.start.x > slider.touch.end.x ? el.goToNextSlide() : el.goToPrevSlide(), 
                el.stopAuto());
            } else {
                var distance = 0;
                "horizontal" == slider.settings.mode ? (distance = slider.touch.end.x - slider.touch.start.x, 
                value = slider.touch.originalPos.left) : (distance = slider.touch.end.y - slider.touch.start.y, 
                value = slider.touch.originalPos.top), !slider.settings.infiniteLoop && (0 == slider.active.index && distance > 0 || slider.active.last && 0 > distance) ? setPositionProperty(value, "reset", 200) : Math.abs(distance) >= slider.settings.swipeThreshold ? (0 > distance ? el.goToNextSlide() : el.goToPrevSlide(), 
                el.stopAuto()) : setPositionProperty(value, "reset", 200);
            }
            slider.viewport.unbind("touchend", onTouchEnd);
        }, resizeWindow = function(e) {
            if (slider.initialized) {
                var windowWidthNew = $(window).width(), windowHeightNew = $(window).height();
                (windowWidth != windowWidthNew || windowHeight != windowHeightNew) && (windowWidth = windowWidthNew, 
                windowHeight = windowHeightNew, el.redrawSlider(), slider.settings.onSliderResize.call(el, slider.active.index));
            }
        };
        return el.goToSlide = function(slideIndex, direction) {
            if (!slider.working && slider.active.index != slideIndex) if (slider.working = !0, 
            slider.oldIndex = slider.active.index, 0 > slideIndex ? slider.active.index = getPagerQty() - 1 : slideIndex >= getPagerQty() ? slider.active.index = 0 : slider.active.index = slideIndex, 
            slider.settings.onSlideBefore(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index), 
            "next" == direction ? slider.settings.onSlideNext(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index) : "prev" == direction && slider.settings.onSlidePrev(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index), 
            slider.active.last = slider.active.index >= getPagerQty() - 1, slider.settings.pager && updatePagerActive(slider.active.index), 
            slider.settings.controls && updateDirectionControls(), "fade" == slider.settings.mode) slider.settings.adaptiveHeight && slider.viewport.height() != getViewportHeight() && slider.viewport.animate({
                height: getViewportHeight()
            }, slider.settings.adaptiveHeightSpeed), slider.children.filter(":visible").fadeOut(slider.settings.speed).css({
                zIndex: 0
            }), slider.children.eq(slider.active.index).css("zIndex", slider.settings.slideZIndex + 1).fadeIn(slider.settings.speed, function() {
                $(this).css("zIndex", slider.settings.slideZIndex), updateAfterSlideTransition();
            }); else {
                slider.settings.adaptiveHeight && slider.viewport.height() != getViewportHeight() && slider.viewport.animate({
                    height: getViewportHeight()
                }, slider.settings.adaptiveHeightSpeed);
                var moveBy = 0, position = {
                    left: 0,
                    top: 0
                };
                if (!slider.settings.infiniteLoop && slider.carousel && slider.active.last) if ("horizontal" == slider.settings.mode) {
                    var lastChild = slider.children.eq(slider.children.length - 1);
                    position = lastChild.position(), moveBy = slider.viewport.width() - lastChild.outerWidth();
                } else {
                    var lastShowingIndex = slider.children.length - slider.settings.minSlides;
                    position = slider.children.eq(lastShowingIndex).position();
                } else if (slider.carousel && slider.active.last && "prev" == direction) {
                    var eq = 1 == slider.settings.moveSlides ? slider.settings.maxSlides - getMoveBy() : (getPagerQty() - 1) * getMoveBy() - (slider.children.length - slider.settings.maxSlides), lastChild = el.children(".bx-clone").eq(eq);
                    position = lastChild.position();
                } else if ("next" == direction && 0 == slider.active.index) position = el.find("> .bx-clone").eq(slider.settings.maxSlides).position(), 
                slider.active.last = !1; else if (slideIndex >= 0) {
                    var requestEl = slideIndex * getMoveBy();
                    position = slider.children.eq(requestEl).position();
                }
                if ("undefined" != typeof position) {
                    var value = "horizontal" == slider.settings.mode ? -(position.left - moveBy) : -position.top;
                    setPositionProperty(value, "slide", slider.settings.speed);
                }
            }
        }, el.goToNextSlide = function() {
            if (slider.settings.infiniteLoop || !slider.active.last) {
                var pagerIndex = parseInt(slider.active.index) + 1;
                el.goToSlide(pagerIndex, "next");
            }
        }, el.goToPrevSlide = function() {
            if (slider.settings.infiniteLoop || 0 != slider.active.index) {
                var pagerIndex = parseInt(slider.active.index) - 1;
                el.goToSlide(pagerIndex, "prev");
            }
        }, el.startAuto = function(preventControlUpdate) {
            slider.interval || (slider.interval = setInterval(function() {
                "next" == slider.settings.autoDirection ? el.goToNextSlide() : el.goToPrevSlide();
            }, slider.settings.pause), slider.settings.autoControls && 1 != preventControlUpdate && updateAutoControls("stop"));
        }, el.stopAuto = function(preventControlUpdate) {
            slider.interval && (clearInterval(slider.interval), slider.interval = null, slider.settings.autoControls && 1 != preventControlUpdate && updateAutoControls("start"));
        }, el.getCurrentSlide = function() {
            return slider.active.index;
        }, el.getCurrentSlideElement = function() {
            return slider.children.eq(slider.active.index);
        }, el.getSlideCount = function() {
            return slider.children.length;
        }, el.redrawSlider = function() {
            slider.children.add(el.find(".bx-clone")).width(getSlideWidth()), slider.viewport.css("height", getViewportHeight()), 
            slider.settings.ticker || setSlidePosition(), slider.active.last && (slider.active.index = getPagerQty() - 1), 
            slider.active.index >= getPagerQty() && (slider.active.last = !0), slider.settings.pager && !slider.settings.pagerCustom && (populatePager(), 
            updatePagerActive(slider.active.index));
        }, el.destroySlider = function() {
            slider.initialized && (slider.initialized = !1, $(".bx-clone", this).remove(), slider.children.each(function() {
                void 0 != $(this).data("origStyle") ? $(this).attr("style", $(this).data("origStyle")) : $(this).removeAttr("style");
            }), void 0 != $(this).data("origStyle") ? this.attr("style", $(this).data("origStyle")) : $(this).removeAttr("style"), 
            $(this).unwrap().unwrap(), slider.controls.el && slider.controls.el.remove(), slider.controls.next && slider.controls.next.remove(), 
            slider.controls.prev && slider.controls.prev.remove(), slider.pagerEl && slider.settings.controls && slider.pagerEl.remove(), 
            $(".bx-caption", this).remove(), slider.controls.autoEl && slider.controls.autoEl.remove(), 
            clearInterval(slider.interval), slider.settings.responsive && $(window).unbind("resize", resizeWindow));
        }, el.reloadSlider = function(settings) {
            void 0 != settings && (options = settings), el.destroySlider(), init();
        }, init(), this;
    };
}(jQuery), function($) {
    "use strict";
    $.fn.fitVids = function(options) {
        var settings = {
            customSelector: null,
            ignore: null
        };
        if (!document.getElementById("fit-vids-style")) {
            var head = document.head || document.getElementsByTagName("head")[0], css = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}", div = document.createElement("div");
            div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + "</style>", head.appendChild(div.childNodes[1]);
        }
        return options && $.extend(settings, options), this.each(function() {
            var selectors = [ 'iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed" ];
            settings.customSelector && selectors.push(settings.customSelector);
            var ignoreList = ".fitvidsignore";
            settings.ignore && (ignoreList = ignoreList + ", " + settings.ignore);
            var $allVideos = $(this).find(selectors.join(","));
            $allVideos = $allVideos.not("object object"), $allVideos = $allVideos.not(ignoreList), 
            $allVideos.each(function(count) {
                var $this = $(this);
                if (!($this.parents(ignoreList).length > 0 || "embed" === this.tagName.toLowerCase() && $this.parent("object").length || $this.parent(".fluid-width-video-wrapper").length)) {
                    $this.css("height") || $this.css("width") || !isNaN($this.attr("height")) && !isNaN($this.attr("width")) || ($this.attr("height", 9), 
                    $this.attr("width", 16));
                    var height = "object" === this.tagName.toLowerCase() || $this.attr("height") && !isNaN(parseInt($this.attr("height"), 10)) ? parseInt($this.attr("height"), 10) : $this.height(), width = isNaN(parseInt($this.attr("width"), 10)) ? $this.width() : parseInt($this.attr("width"), 10), aspectRatio = height / width;
                    if (!$this.attr("id")) {
                        var videoID = "fitvid" + count;
                        $this.attr("id", videoID);
                    }
                    $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * aspectRatio + "%"), 
                    $this.removeAttr("height").removeAttr("width");
                }
            });
        });
    };
}(window.jQuery || window.Zepto), window.getActiveMQ = function() {
    $('<div id="getActiveMQ-watcher"></div>').appendTo("body").hide();
    var computed = window.getComputedStyle, watcher = document.getElementById("getActiveMQ-watcher");
    return "currentStyle" in watcher ? window.getActiveMQ = function() {
        return watcher.currentStyle.fontFamily.replace(/['"]/g, "");
    } : computed ? window.getActiveMQ = function() {
        return computed(watcher, null).getPropertyValue("font-family").replace(/['"]/g, "");
    } : window.getActiveMQ = function() {
        return "unknown";
    }, window.getActiveMQ();
}, $.fn.isOnScreen = function() {
    var win = $(window), viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
    };
    viewport.right = viewport.left + win.width(), viewport.bottom = viewport.top + win.height();
    var bounds = this.offset();
    return bounds.right = bounds.left + this.outerWidth(), bounds.bottom = bounds.top + this.outerHeight(), 
    !(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom);
}, function($) {
    $.fn.stopScroll = function(options) {
        return options = $.extend({
            delay: 250,
            callback: function() {}
        }, options), this.each(function() {
            var $element = $(this), element = this;
            $element.scroll(function() {
                clearTimeout($.data(element, "scrollCheck")), $.data(element, "scrollCheck", setTimeout(function() {
                    options.callback();
                }, options.delay));
            });
        });
    };
}(jQuery), $(document).ready(function() {
    var wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: !1,
        live: !0,
        callback: function(box) {}
    });
    wow.init();
}), $(document).ready(function() {
    if ($("body").hasClass("home")) {
        var home_mq = window.matchMedia("(min-width: 768px)");
        home_mq.addListener(load_slides), load_slides(home_mq);
    }
}), on_resize(function() {
    $(".tagline");
    if ("break-0" === getActiveMQ() ? $("body").removeClass("large-screen").addClass("small-screen") : $("body").removeClass("active-nav small-screen").addClass("large-screen"), 
    "break-0" !== getActiveMQ() && "break-1" !== getActiveMQ()) {
        $(".home-slides").length && $(window).scroll(function(e) {
            if ($(".home-slides").isOnScreen()) {
                var thisdist = $(this).scrollTop(), heroheight = $(".home-slides").outerHeight();
                $(".tagline").css({
                    opacity: 1 - thisdist / heroheight
                });
            } else $(".tagline").css({
                opacity: 1
            });
        });
        var mainDivHasClass = $("#main").hasClass("homepage");
        $(".hero").length && mainDivHasClass === !1 && $(window).scroll(function(e) {
            if ($(".hero").isOnScreen()) {
                var thisdist = $(this).scrollTop(), heroheight = $(".hero").outerHeight();
                $(".tagline").css({
                    opacity: 1 - thisdist / heroheight
                });
            } else $(".tagline").css({
                opacity: 1
            });
        });
    }
})();

var showSidebar = function() {
    $("body").removeClass("active-nav").toggleClass("active-sidebar"), $(".menu-button").removeClass("active-button");
}, showMenu = function() {
    $("body").removeClass("active-sidebar").toggleClass("active-nav"), $(".menu-button").toggleClass("active-button");
};

jQuery(document).ready(function($) {
    function resetBtn() {
        var menuBtnComponent1 = $(".menu-top"), menuBtnComponent2 = $(".menu-middle"), menuBtnComponent3 = $(".menu-bottom");
        $("#lg-screen-nav").css("display", "none"), $("body").removeClass("active-sidebar"), 
        menuBtnComponent1.removeClass("menu-top-click"), menuBtnComponent2.removeClass("menu-middle-click"), 
        menuBtnComponent3.removeClass("menu-bottom-click");
    }
    function resetManus(deskTopMq) {
        deskTopMq.matches, resetBtn();
    }
    function my_function(media_query) {
        var parallaxItems = $(".ambient");
        media_query.matches ? parallaxItems.removeClass("parallax") : parallaxItems.addClass("parallax");
    }
    $(".menu-button-mb").on("click", function() {
        var $this = $(this);
        $this.find(".menu-top").toggleClass("menu-top-click"), $this.find(".menu-middle").toggleClass("menu-middle-click"), 
        $this.find(".menu-bottom").toggleClass("menu-bottom-click"), showSidebar();
    }), $(".menu-button-lg").on("click", function() {
        var $this = $(this);
        $this.find(".menu-top").toggleClass("menu-top-click"), $this.find(".menu-middle").toggleClass("menu-middle-click"), 
        $this.find(".menu-bottom").toggleClass("menu-bottom-click"), $("#lg-screen-nav").slideToggle("fast");
    });
    var deskTopMq = window.matchMedia("(min-width: 1080px)");
    deskTopMq.addListener(resetManus), resetManus(deskTopMq), $(".switch").on("click", function(e) {
        var $this = $(this), currentContainer = $this.prev().find(".row");
        currentContainer.fitVids(), $this.prev(".modal").addClass("active");
    }), $(".switch-prod").on("click", function(e) {
        var currentModal = $("#modal"), currentContainer = currentModal.find(".row");
        currentModal.hasClass("video-loaded") === !1 && ($(currentContainer).fitVids(), 
        currentModal.addClass("video-loaded")), currentModal.addClass("active");
    }), $(".close").on("click", function(e) {
        var $this = $(this);
        if ("js-close-overlay" !== $this.attr("id")) {
            e.preventDefault();
            var currentVideo = $this.next().find("iframe"), currentVideoSrc = currentVideo.attr("src");
            $this.closest(".modal").removeClass("active"), currentVideo.attr("src", ""), currentVideo.attr("src", currentVideoSrc);
        }
    }), $("#backToTop").hide(), $(function() {
        $(window).scroll(function() {
            $(this).scrollTop() > 100 ? $("#backToTop").fadeIn() : $("#backToTop").fadeOut();
        }), $("#backToTop").click(function() {
            return $("body,html").animate({
                scrollTop: 0
            }, 400), !1;
        });
    });
    var media_query = window.matchMedia("(max-width: 1024px)");
    media_query.addListener(my_function), my_function(media_query), $(".bxslider").length && $(".bxslider").bxSlider({
        startSlide: 1,
        infiniteLoop: !0,
        captions: !0
    }), $(".bxslider-quotes").length && $(".bxslider-quotes").bxSlider({
        mode: "fade"
    }), $("#main").on("click", ".scroll-down", function(e) {
        e.preventDefault();
        var target = $("section:first-of-type");
        $("html,body").animate({
            scrollTop: target.offset().top
        }, 600);
    });
    var lastLi = $('<li><a class="last" href="#page">Main Menu</a></li>'), $innerNav = $("<ul/>", {
        id: "sub-nav",
        "class": "nav"
    }).appendTo("#innerNavWrap"), feature_sections = $(".feature-section");
    $(feature_sections).length >= 3 && ($(feature_sections).each(function(index) {
        var $this = $(this), menuTitle = $this.data("innermenu");
        theID = $this.attr("id"), $("<a href='#" + theID + "'>" + menuTitle + "</a>").appendTo($innerNav).wrap("<li></li>");
    }), $(lastLi).appendTo($innerNav)), $(function() {
        var sections = $("section"), navigation_links = $("#sub-nav a");
        sections.waypoint({
            handler: function(event, direction) {
                var active_section;
                active_section = $(this), "up" === direction && (active_section = active_section.prev());
                var active_link = $('#sub-nav a[href="#' + active_section.attr("id") + '"]');
                navigation_links.removeClass("active"), active_link.addClass("active");
            },
            offset: "25%"
        });
    });
    var subNavItems = $("#sub-nav a");
    $(subNavItems).on("click", function(e) {
        var $this = $(this), subNavTarget = $($this.attr("href"));
        e.preventDefault(), subNavItems.removeClass("active"), $this.hasClass("last") || $this.addClass("active"), 
        $("html,body").animate({
            scrollTop: subNavTarget.offset().top
        }, 600);
    }), $("#main > .feature-section").filter(":odd").addClass("stripe");
    var down_arrow = '<svg class="icon-keyboard-arrow-down-nav" viewBox="0 0 1024 1024"><use xlink:href="#icon-keyboard-arrow-down"></use></svg>';
    $(down_arrow).insertAfter(".menu-item-has-children > a");
});