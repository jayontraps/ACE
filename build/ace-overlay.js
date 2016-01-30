!function(factory) {
    if ("function" == typeof define && define.amd) define(factory); else if ("object" == typeof exports) module.exports = factory(); else {
        var _OldCookies = window.Cookies, api = window.Cookies = factory();
        api.noConflict = function() {
            return window.Cookies = _OldCookies, api;
        };
    }
}(function() {
    function extend() {
        for (var i = 0, result = {}; i < arguments.length; i++) {
            var attributes = arguments[i];
            for (var key in attributes) result[key] = attributes[key];
        }
        return result;
    }
    function init(converter) {
        function api(key, value, attributes) {
            var result;
            if (arguments.length > 1) {
                if (attributes = extend({
                    path: "/"
                }, api.defaults, attributes), "number" == typeof attributes.expires) {
                    var expires = new Date();
                    expires.setMilliseconds(expires.getMilliseconds() + 864e5 * attributes.expires), 
                    attributes.expires = expires;
                }
                try {
                    result = JSON.stringify(value), /^[\{\[]/.test(result) && (value = result);
                } catch (e) {}
                return value = encodeURIComponent(String(value)), value = value.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), 
                key = encodeURIComponent(String(key)), key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), 
                key = key.replace(/[\(\)]/g, escape), document.cookie = [ key, "=", value, attributes.expires && "; expires=" + attributes.expires.toUTCString(), attributes.path && "; path=" + attributes.path, attributes.domain && "; domain=" + attributes.domain, attributes.secure ? "; secure" : "" ].join("");
            }
            key || (result = {});
            for (var cookies = document.cookie ? document.cookie.split("; ") : [], rdecode = /(%[0-9A-Z]{2})+/g, i = 0; i < cookies.length; i++) {
                var parts = cookies[i].split("="), name = parts[0].replace(rdecode, decodeURIComponent), cookie = parts.slice(1).join("=");
                '"' === cookie.charAt(0) && (cookie = cookie.slice(1, -1));
                try {
                    if (cookie = converter && converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent), 
                    this.json) try {
                        cookie = JSON.parse(cookie);
                    } catch (e) {}
                    if (key === name) {
                        result = cookie;
                        break;
                    }
                    key || (result[name] = cookie);
                } catch (e) {}
            }
            return result;
        }
        return api.get = api.set = api, api.getJSON = function() {
            return api.apply({
                json: !0
            }, [].slice.call(arguments));
        }, api.defaults = {}, api.remove = function(key, attributes) {
            api(key, "", extend(attributes, {
                expires: -1
            }));
        }, api.withConverter = init, api;
    }
    return init();
}), function($) {
    $(document).ready(function() {
        var overlayDiv = document.getElementById("load-over-lay");
        if ($("body").hasClass("home")) {
            var rootUrl = "http://acedanceandmusic.com/";
            $.ajax({
                url: rootUrl + "overlay.html",
                dataType: "html",
                success: function(data) {
                    $(overlayDiv).append(data);
                },
                complete: function() {
                    var manaUrl = window.location.protocol + "//" + window.location.host + "/production/mana/#tour", actionBtn = document.getElementById("action-btn");
                    $(actionBtn).attr("href", manaUrl);
                    var backGround = document.getElementById("layer-1"), layerTwo = (document.getElementById("presents"), 
                    document.getElementById("layer-2")), closeOverlay = document.getElementById("close-overlay"), tl = new TimelineLite();
                    TweenLite.set(layerTwo, {
                        visibility: "visible"
                    }), TweenLite.set(".prod-name", {
                        visibility: "visible"
                    }), TweenLite.set(".sub-title-layer", {
                        visibility: "visible"
                    }), TweenLite.set(".ace-presents", {
                        visibility: "visible"
                    }), TweenLite.set(".action-btn", {
                        visibility: "visible"
                    }), tl.from(".ace-presents", 2, {
                        autoAlpha: 0
                    }, "kickoff").from(backGround, 8, {
                        autoAlpha: 0
                    }, "kickoff").from(".prod-name", 2, {
                        drawSVG: 0,
                        ease: Power1.easeInOut
                    }, "feature-=6").from(".sub-title-layer", 1, {
                        autoAlpha: 0
                    }, "feature-=4").from(".action-btn", 1, {
                        scale: .95,
                        autoAlpha: 0
                    }, "feature-=4"), $(closeOverlay).on("click", function() {
                        $(overlayDiv).addClass("done").delay(200).remove();
                    });
                }
            });
        } else overlayDiv.style.display = "none";
    });
}(jQuery);