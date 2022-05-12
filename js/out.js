(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

  // js/glightbox.min.js
  var require_glightbox_min = __commonJS({
    "js/glightbox.min.js"(exports, module) {
      !function(e, t) {
        typeof exports == "object" && typeof module != "undefined" ? module.exports = t() : typeof define == "function" && define.amd ? define(t) : (e = e || self).GLightbox = t();
      }(exports, function() {
        "use strict";
        function e(t2) {
          return (e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e2) {
            return typeof e2;
          } : function(e2) {
            return e2 && typeof Symbol == "function" && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
          })(t2);
        }
        function t(e2, t2) {
          if (!(e2 instanceof t2))
            throw new TypeError("Cannot call a class as a function");
        }
        function i(e2, t2) {
          for (var i2 = 0; i2 < t2.length; i2++) {
            var n2 = t2[i2];
            n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(e2, n2.key, n2);
          }
        }
        function n(e2, t2, n2) {
          return t2 && i(e2.prototype, t2), n2 && i(e2, n2), e2;
        }
        function s(e2) {
          return function(e3) {
            if (Array.isArray(e3))
              return l(e3);
          }(e2) || function(e3) {
            if (typeof Symbol != "undefined" && Symbol.iterator in Object(e3))
              return Array.from(e3);
          }(e2) || function(e3, t2) {
            if (!e3)
              return;
            if (typeof e3 == "string")
              return l(e3, t2);
            var i2 = Object.prototype.toString.call(e3).slice(8, -1);
            i2 === "Object" && e3.constructor && (i2 = e3.constructor.name);
            if (i2 === "Map" || i2 === "Set")
              return Array.from(e3);
            if (i2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i2))
              return l(e3, t2);
          }(e2) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function l(e2, t2) {
          (t2 == null || t2 > e2.length) && (t2 = e2.length);
          for (var i2 = 0, n2 = new Array(t2); i2 < t2; i2++)
            n2[i2] = e2[i2];
          return n2;
        }
        var o = Date.now();
        function r() {
          var e2 = {}, t2 = true, i2 = 0, n2 = arguments.length;
          Object.prototype.toString.call(arguments[0]) === "[object Boolean]" && (t2 = arguments[0], i2++);
          for (var s2 = function(i3) {
            for (var n3 in i3)
              Object.prototype.hasOwnProperty.call(i3, n3) && (t2 && Object.prototype.toString.call(i3[n3]) === "[object Object]" ? e2[n3] = r(true, e2[n3], i3[n3]) : e2[n3] = i3[n3]);
          }; i2 < n2; i2++) {
            var l2 = arguments[i2];
            s2(l2);
          }
          return e2;
        }
        function a(e2, t2) {
          if ((A(e2) || e2 === window || e2 === document) && (e2 = [e2]), I(e2) || O(e2) || (e2 = [e2]), X(e2) != 0) {
            if (I(e2) && !O(e2))
              for (var i2 = e2.length, n2 = 0; n2 < i2 && t2.call(e2[n2], e2[n2], n2, e2) !== false; n2++)
                ;
            else if (O(e2)) {
              for (var s2 in e2)
                if (M(e2, s2) && t2.call(e2[s2], e2[s2], s2, e2) === false)
                  break;
            }
          }
        }
        function h(e2) {
          var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, i2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, n2 = e2[o] = e2[o] || [], s2 = { all: n2, evt: null, found: null };
          return t2 && i2 && X(n2) > 0 && a(n2, function(e3, n3) {
            if (e3.eventName == t2 && e3.fn.toString() == i2.toString())
              return s2.found = true, s2.evt = n3, false;
          }), s2;
        }
        function c(e2) {
          var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i2 = t2.onElement, n2 = t2.withCallback, s2 = t2.avoidDuplicate, l2 = s2 === void 0 || s2, o2 = t2.once, r2 = o2 !== void 0 && o2, c2 = t2.useCapture, d2 = c2 !== void 0 && c2, u2 = arguments.length > 2 ? arguments[2] : void 0, g2 = i2 || [];
          function v2(e3) {
            C(n2) && n2.call(u2, e3, this), r2 && v2.destroy();
          }
          return E(g2) && (g2 = document.querySelectorAll(g2)), v2.destroy = function() {
            a(g2, function(t3) {
              var i3 = h(t3, e2, v2);
              i3.found && i3.all.splice(i3.evt, 1), t3.removeEventListener && t3.removeEventListener(e2, v2, d2);
            });
          }, a(g2, function(t3) {
            var i3 = h(t3, e2, v2);
            (t3.addEventListener && l2 && !i3.found || !l2) && (t3.addEventListener(e2, v2, d2), i3.all.push({ eventName: e2, fn: v2 }));
          }), v2;
        }
        function d(e2, t2) {
          a(t2.split(" "), function(t3) {
            return e2.classList.add(t3);
          });
        }
        function u(e2, t2) {
          a(t2.split(" "), function(t3) {
            return e2.classList.remove(t3);
          });
        }
        function g(e2, t2) {
          return e2.classList.contains(t2);
        }
        function v(e2, t2) {
          for (; e2 !== document.body; ) {
            if (!(e2 = e2.parentElement))
              return false;
            if (typeof e2.matches == "function" ? e2.matches(t2) : e2.msMatchesSelector(t2))
              return e2;
          }
        }
        function f(e2) {
          var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", i2 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
          if (!e2 || t2 === "")
            return false;
          if (t2 == "none")
            return C(i2) && i2(), false;
          var n2 = S(), s2 = t2.split(" ");
          a(s2, function(t3) {
            d(e2, "g" + t3);
          }), c(n2, { onElement: e2, avoidDuplicate: false, once: true, withCallback: function(e3, t3) {
            a(s2, function(e4) {
              u(t3, "g" + e4);
            }), C(i2) && i2();
          } });
        }
        function p(e2) {
          var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
          if (t2 == "")
            return e2.style.webkitTransform = "", e2.style.MozTransform = "", e2.style.msTransform = "", e2.style.OTransform = "", e2.style.transform = "", false;
          e2.style.webkitTransform = t2, e2.style.MozTransform = t2, e2.style.msTransform = t2, e2.style.OTransform = t2, e2.style.transform = t2;
        }
        function m(e2) {
          e2.style.display = "block";
        }
        function y(e2) {
          e2.style.display = "none";
        }
        function x(e2) {
          var t2 = document.createDocumentFragment(), i2 = document.createElement("div");
          for (i2.innerHTML = e2; i2.firstChild; )
            t2.appendChild(i2.firstChild);
          return t2;
        }
        function b() {
          return { width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight };
        }
        function S() {
          var e2, t2 = document.createElement("fakeelement"), i2 = { animation: "animationend", OAnimation: "oAnimationEnd", MozAnimation: "animationend", WebkitAnimation: "webkitAnimationEnd" };
          for (e2 in i2)
            if (t2.style[e2] !== void 0)
              return i2[e2];
        }
        function w(e2, t2, i2, n2) {
          if (e2())
            t2();
          else {
            var s2;
            i2 || (i2 = 100);
            var l2 = setInterval(function() {
              e2() && (clearInterval(l2), s2 && clearTimeout(s2), t2());
            }, i2);
            n2 && (s2 = setTimeout(function() {
              clearInterval(l2);
            }, n2));
          }
        }
        function T(e2, t2, i2) {
          if (P(e2))
            console.error("Inject assets error");
          else if (C(t2) && (i2 = t2, t2 = false), E(t2) && t2 in window)
            C(i2) && i2();
          else {
            var n2;
            if (e2.indexOf(".css") !== -1) {
              if ((n2 = document.querySelectorAll('link[href="' + e2 + '"]')) && n2.length > 0)
                return void (C(i2) && i2());
              var s2 = document.getElementsByTagName("head")[0], l2 = s2.querySelectorAll('link[rel="stylesheet"]'), o2 = document.createElement("link");
              return o2.rel = "stylesheet", o2.type = "text/css", o2.href = e2, o2.media = "all", l2 ? s2.insertBefore(o2, l2[0]) : s2.appendChild(o2), void (C(i2) && i2());
            }
            if ((n2 = document.querySelectorAll('script[src="' + e2 + '"]')) && n2.length > 0) {
              if (C(i2)) {
                if (E(t2))
                  return w(function() {
                    return window[t2] !== void 0;
                  }, function() {
                    i2();
                  }), false;
                i2();
              }
            } else {
              var r2 = document.createElement("script");
              r2.type = "text/javascript", r2.src = e2, r2.onload = function() {
                if (C(i2)) {
                  if (E(t2))
                    return w(function() {
                      return window[t2] !== void 0;
                    }, function() {
                      i2();
                    }), false;
                  i2();
                }
              }, document.body.appendChild(r2);
            }
          }
        }
        function k() {
          return "navigator" in window && window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i);
        }
        function C(e2) {
          return typeof e2 == "function";
        }
        function E(e2) {
          return typeof e2 == "string";
        }
        function A(e2) {
          return !(!e2 || !e2.nodeType || e2.nodeType != 1);
        }
        function L(e2) {
          return Array.isArray(e2);
        }
        function I(e2) {
          return e2 && e2.length && isFinite(e2.length);
        }
        function O(t2) {
          return e(t2) === "object" && t2 != null && !C(t2) && !L(t2);
        }
        function P(e2) {
          return e2 == null;
        }
        function M(e2, t2) {
          return e2 !== null && hasOwnProperty.call(e2, t2);
        }
        function X(e2) {
          if (O(e2)) {
            if (e2.keys)
              return e2.keys().length;
            var t2 = 0;
            for (var i2 in e2)
              M(e2, i2) && t2++;
            return t2;
          }
          return e2.length;
        }
        function z(e2) {
          return !isNaN(parseFloat(e2)) && isFinite(e2);
        }
        function Y(e2) {
          if (e2.events.hasOwnProperty("keyboard"))
            return false;
          e2.events.keyboard = c("keydown", { onElement: window, withCallback: function(t2, i2) {
            var n2 = (t2 = t2 || window.event).keyCode;
            if (n2 == 9) {
              var l2 = !(!document.activeElement || !document.activeElement.nodeName) && document.activeElement.nodeName.toLocaleLowerCase();
              if (l2 == "input" || l2 == "textarea" || l2 == "button")
                return;
              t2.preventDefault();
              var o2 = document.querySelectorAll(".gbtn");
              if (!o2 || o2.length <= 0)
                return;
              var r2 = s(o2).filter(function(e3) {
                return g(e3, "focused");
              });
              if (!r2.length) {
                var a2 = document.querySelector('.gbtn[tabindex="0"]');
                return void (a2 && (a2.focus(), d(a2, "focused")));
              }
              o2.forEach(function(e3) {
                return u(e3, "focused");
              });
              var h2 = r2[0].getAttribute("tabindex");
              h2 = h2 || "0";
              var c2 = parseInt(h2) + 1;
              c2 > o2.length - 1 && (c2 = "0");
              var v2 = document.querySelector('.gbtn[tabindex="'.concat(c2, '"]'));
              v2 && (v2.focus(), d(v2, "focused"));
            }
            n2 == 39 && e2.nextSlide(), n2 == 37 && e2.prevSlide(), n2 == 27 && e2.close();
          } });
        }
        function q(e2) {
          return Math.sqrt(e2.x * e2.x + e2.y * e2.y);
        }
        function D(e2, t2) {
          var i2 = function(e3, t3) {
            var i3 = q(e3) * q(t3);
            if (i3 === 0)
              return 0;
            var n2 = function(e4, t4) {
              return e4.x * t4.x + e4.y * t4.y;
            }(e3, t3) / i3;
            return n2 > 1 && (n2 = 1), Math.acos(n2);
          }(e2, t2);
          return function(e3, t3) {
            return e3.x * t3.y - t3.x * e3.y;
          }(e2, t2) > 0 && (i2 *= -1), 180 * i2 / Math.PI;
        }
        var N = function() {
          function e2(i2) {
            t(this, e2), this.handlers = [], this.el = i2;
          }
          return n(e2, [{ key: "add", value: function(e3) {
            this.handlers.push(e3);
          } }, { key: "del", value: function(e3) {
            e3 || (this.handlers = []);
            for (var t2 = this.handlers.length; t2 >= 0; t2--)
              this.handlers[t2] === e3 && this.handlers.splice(t2, 1);
          } }, { key: "dispatch", value: function() {
            for (var e3 = 0, t2 = this.handlers.length; e3 < t2; e3++) {
              var i2 = this.handlers[e3];
              typeof i2 == "function" && i2.apply(this.el, arguments);
            }
          } }]), e2;
        }();
        function _(e2, t2) {
          var i2 = new N(e2);
          return i2.add(t2), i2;
        }
        var B = function() {
          function e2(i2, n2) {
            t(this, e2), this.element = typeof i2 == "string" ? document.querySelector(i2) : i2, this.start = this.start.bind(this), this.move = this.move.bind(this), this.end = this.end.bind(this), this.cancel = this.cancel.bind(this), this.element.addEventListener("touchstart", this.start, false), this.element.addEventListener("touchmove", this.move, false), this.element.addEventListener("touchend", this.end, false), this.element.addEventListener("touchcancel", this.cancel, false), this.preV = { x: null, y: null }, this.pinchStartLen = null, this.zoom = 1, this.isDoubleTap = false;
            var s2 = function() {
            };
            this.rotate = _(this.element, n2.rotate || s2), this.touchStart = _(this.element, n2.touchStart || s2), this.multipointStart = _(this.element, n2.multipointStart || s2), this.multipointEnd = _(this.element, n2.multipointEnd || s2), this.pinch = _(this.element, n2.pinch || s2), this.swipe = _(this.element, n2.swipe || s2), this.tap = _(this.element, n2.tap || s2), this.doubleTap = _(this.element, n2.doubleTap || s2), this.longTap = _(this.element, n2.longTap || s2), this.singleTap = _(this.element, n2.singleTap || s2), this.pressMove = _(this.element, n2.pressMove || s2), this.twoFingerPressMove = _(this.element, n2.twoFingerPressMove || s2), this.touchMove = _(this.element, n2.touchMove || s2), this.touchEnd = _(this.element, n2.touchEnd || s2), this.touchCancel = _(this.element, n2.touchCancel || s2), this._cancelAllHandler = this.cancelAll.bind(this), window.addEventListener("scroll", this._cancelAllHandler), this.delta = null, this.last = null, this.now = null, this.tapTimeout = null, this.singleTapTimeout = null, this.longTapTimeout = null, this.swipeTimeout = null, this.x1 = this.x2 = this.y1 = this.y2 = null, this.preTapPosition = { x: null, y: null };
          }
          return n(e2, [{ key: "start", value: function(e3) {
            if (e3.touches) {
              this.now = Date.now(), this.x1 = e3.touches[0].pageX, this.y1 = e3.touches[0].pageY, this.delta = this.now - (this.last || this.now), this.touchStart.dispatch(e3, this.element), this.preTapPosition.x !== null && (this.isDoubleTap = this.delta > 0 && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30, this.isDoubleTap && clearTimeout(this.singleTapTimeout)), this.preTapPosition.x = this.x1, this.preTapPosition.y = this.y1, this.last = this.now;
              var t2 = this.preV;
              if (e3.touches.length > 1) {
                this._cancelLongTap(), this._cancelSingleTap();
                var i2 = { x: e3.touches[1].pageX - this.x1, y: e3.touches[1].pageY - this.y1 };
                t2.x = i2.x, t2.y = i2.y, this.pinchStartLen = q(t2), this.multipointStart.dispatch(e3, this.element);
              }
              this._preventTap = false, this.longTapTimeout = setTimeout(function() {
                this.longTap.dispatch(e3, this.element), this._preventTap = true;
              }.bind(this), 750);
            }
          } }, { key: "move", value: function(e3) {
            if (e3.touches) {
              var t2 = this.preV, i2 = e3.touches.length, n2 = e3.touches[0].pageX, s2 = e3.touches[0].pageY;
              if (this.isDoubleTap = false, i2 > 1) {
                var l2 = e3.touches[1].pageX, o2 = e3.touches[1].pageY, r2 = { x: e3.touches[1].pageX - n2, y: e3.touches[1].pageY - s2 };
                t2.x !== null && (this.pinchStartLen > 0 && (e3.zoom = q(r2) / this.pinchStartLen, this.pinch.dispatch(e3, this.element)), e3.angle = D(r2, t2), this.rotate.dispatch(e3, this.element)), t2.x = r2.x, t2.y = r2.y, this.x2 !== null && this.sx2 !== null ? (e3.deltaX = (n2 - this.x2 + l2 - this.sx2) / 2, e3.deltaY = (s2 - this.y2 + o2 - this.sy2) / 2) : (e3.deltaX = 0, e3.deltaY = 0), this.twoFingerPressMove.dispatch(e3, this.element), this.sx2 = l2, this.sy2 = o2;
              } else {
                if (this.x2 !== null) {
                  e3.deltaX = n2 - this.x2, e3.deltaY = s2 - this.y2;
                  var a2 = Math.abs(this.x1 - this.x2), h2 = Math.abs(this.y1 - this.y2);
                  (a2 > 10 || h2 > 10) && (this._preventTap = true);
                } else
                  e3.deltaX = 0, e3.deltaY = 0;
                this.pressMove.dispatch(e3, this.element);
              }
              this.touchMove.dispatch(e3, this.element), this._cancelLongTap(), this.x2 = n2, this.y2 = s2, i2 > 1 && e3.preventDefault();
            }
          } }, { key: "end", value: function(e3) {
            if (e3.changedTouches) {
              this._cancelLongTap();
              var t2 = this;
              e3.touches.length < 2 && (this.multipointEnd.dispatch(e3, this.element), this.sx2 = this.sy2 = null), this.x2 && Math.abs(this.x1 - this.x2) > 30 || this.y2 && Math.abs(this.y1 - this.y2) > 30 ? (e3.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2), this.swipeTimeout = setTimeout(function() {
                t2.swipe.dispatch(e3, t2.element);
              }, 0)) : (this.tapTimeout = setTimeout(function() {
                t2._preventTap || t2.tap.dispatch(e3, t2.element), t2.isDoubleTap && (t2.doubleTap.dispatch(e3, t2.element), t2.isDoubleTap = false);
              }, 0), t2.isDoubleTap || (t2.singleTapTimeout = setTimeout(function() {
                t2.singleTap.dispatch(e3, t2.element);
              }, 250))), this.touchEnd.dispatch(e3, this.element), this.preV.x = 0, this.preV.y = 0, this.zoom = 1, this.pinchStartLen = null, this.x1 = this.x2 = this.y1 = this.y2 = null;
            }
          } }, { key: "cancelAll", value: function() {
            this._preventTap = true, clearTimeout(this.singleTapTimeout), clearTimeout(this.tapTimeout), clearTimeout(this.longTapTimeout), clearTimeout(this.swipeTimeout);
          } }, { key: "cancel", value: function(e3) {
            this.cancelAll(), this.touchCancel.dispatch(e3, this.element);
          } }, { key: "_cancelLongTap", value: function() {
            clearTimeout(this.longTapTimeout);
          } }, { key: "_cancelSingleTap", value: function() {
            clearTimeout(this.singleTapTimeout);
          } }, { key: "_swipeDirection", value: function(e3, t2, i2, n2) {
            return Math.abs(e3 - t2) >= Math.abs(i2 - n2) ? e3 - t2 > 0 ? "Left" : "Right" : i2 - n2 > 0 ? "Up" : "Down";
          } }, { key: "on", value: function(e3, t2) {
            this[e3] && this[e3].add(t2);
          } }, { key: "off", value: function(e3, t2) {
            this[e3] && this[e3].del(t2);
          } }, { key: "destroy", value: function() {
            return this.singleTapTimeout && clearTimeout(this.singleTapTimeout), this.tapTimeout && clearTimeout(this.tapTimeout), this.longTapTimeout && clearTimeout(this.longTapTimeout), this.swipeTimeout && clearTimeout(this.swipeTimeout), this.element.removeEventListener("touchstart", this.start), this.element.removeEventListener("touchmove", this.move), this.element.removeEventListener("touchend", this.end), this.element.removeEventListener("touchcancel", this.cancel), this.rotate.del(), this.touchStart.del(), this.multipointStart.del(), this.multipointEnd.del(), this.pinch.del(), this.swipe.del(), this.tap.del(), this.doubleTap.del(), this.longTap.del(), this.singleTap.del(), this.pressMove.del(), this.twoFingerPressMove.del(), this.touchMove.del(), this.touchEnd.del(), this.touchCancel.del(), this.preV = this.pinchStartLen = this.zoom = this.isDoubleTap = this.delta = this.last = this.now = this.tapTimeout = this.singleTapTimeout = this.longTapTimeout = this.swipeTimeout = this.x1 = this.x2 = this.y1 = this.y2 = this.preTapPosition = this.rotate = this.touchStart = this.multipointStart = this.multipointEnd = this.pinch = this.swipe = this.tap = this.doubleTap = this.longTap = this.singleTap = this.pressMove = this.touchMove = this.touchEnd = this.touchCancel = this.twoFingerPressMove = null, window.removeEventListener("scroll", this._cancelAllHandler), null;
          } }]), e2;
        }();
        function W(e2) {
          var t2 = function() {
            var e3, t3 = document.createElement("fakeelement"), i3 = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };
            for (e3 in i3)
              if (t3.style[e3] !== void 0)
                return i3[e3];
          }(), i2 = g(e2, "gslide-media") ? e2 : e2.querySelector(".gslide-media"), n2 = e2.querySelector(".gslide-description");
          d(i2, "greset"), p(i2, "translate3d(0, 0, 0)");
          c(t2, { onElement: i2, once: true, withCallback: function(e3, t3) {
            u(i2, "greset");
          } });
          i2.style.opacity = "", n2 && (n2.style.opacity = "");
        }
        function H(e2) {
          if (e2.events.hasOwnProperty("touch"))
            return false;
          var t2, i2, n2, s2 = b(), l2 = s2.width, o2 = s2.height, r2 = false, a2 = null, h2 = null, c2 = null, f2 = false, m2 = 1, y2 = 1, x2 = false, S2 = false, w2 = null, T2 = null, k2 = null, C2 = null, E2 = 0, A2 = 0, L2 = false, I2 = false, O2 = {}, P2 = {}, M2 = 0, X2 = 0, z2 = document.getElementById("glightbox-slider"), Y2 = document.querySelector(".goverlay"), q2 = new B(z2, { touchStart: function(t3) {
            if (g(t3.targetTouches[0].target, "ginner-container") || v(t3.targetTouches[0].target, ".gslide-desc"))
              return r2 = false, false;
            r2 = true, P2 = t3.targetTouches[0], O2.pageX = t3.targetTouches[0].pageX, O2.pageY = t3.targetTouches[0].pageY, M2 = t3.targetTouches[0].clientX, X2 = t3.targetTouches[0].clientY, a2 = e2.activeSlide, h2 = a2.querySelector(".gslide-media"), n2 = a2.querySelector(".gslide-inline"), c2 = null, g(h2, "gslide-image") && (c2 = h2.querySelector("img")), u(Y2, "greset"), t3.pageX > 20 && t3.pageX < window.innerWidth - 20 || t3.preventDefault();
          }, touchMove: function(s3) {
            if (r2 && (P2 = s3.targetTouches[0], !x2 && !S2)) {
              if (n2 && n2.offsetHeight > o2) {
                var a3 = O2.pageX - P2.pageX;
                if (Math.abs(a3) <= 13)
                  return false;
              }
              f2 = true;
              var d2, u2 = s3.targetTouches[0].clientX, g2 = s3.targetTouches[0].clientY, v2 = M2 - u2, m3 = X2 - g2;
              if (Math.abs(v2) > Math.abs(m3) ? (L2 = false, I2 = true) : (I2 = false, L2 = true), t2 = P2.pageX - O2.pageX, E2 = 100 * t2 / l2, i2 = P2.pageY - O2.pageY, A2 = 100 * i2 / o2, L2 && c2 && (d2 = 1 - Math.abs(i2) / o2, Y2.style.opacity = d2, e2.settings.touchFollowAxis && (E2 = 0)), I2 && (d2 = 1 - Math.abs(t2) / l2, h2.style.opacity = d2, e2.settings.touchFollowAxis && (A2 = 0)), !c2)
                return p(h2, "translate3d(".concat(E2, "%, 0, 0)"));
              p(h2, "translate3d(".concat(E2, "%, ").concat(A2, "%, 0)"));
            }
          }, touchEnd: function() {
            if (r2) {
              if (f2 = false, S2 || x2)
                return k2 = w2, void (C2 = T2);
              var t3 = Math.abs(parseInt(A2)), i3 = Math.abs(parseInt(E2));
              if (!(t3 > 29 && c2))
                return t3 < 29 && i3 < 25 ? (d(Y2, "greset"), Y2.style.opacity = 1, W(h2)) : void 0;
              e2.close();
            }
          }, multipointEnd: function() {
            setTimeout(function() {
              x2 = false;
            }, 50);
          }, multipointStart: function() {
            x2 = true, m2 = y2 || 1;
          }, pinch: function(e3) {
            if (!c2 || f2)
              return false;
            x2 = true, c2.scaleX = c2.scaleY = m2 * e3.zoom;
            var t3 = m2 * e3.zoom;
            if (S2 = true, t3 <= 1)
              return S2 = false, t3 = 1, C2 = null, k2 = null, w2 = null, T2 = null, void c2.setAttribute("style", "");
            t3 > 4.5 && (t3 = 4.5), c2.style.transform = "scale3d(".concat(t3, ", ").concat(t3, ", 1)"), y2 = t3;
          }, pressMove: function(e3) {
            if (S2 && !x2) {
              var t3 = P2.pageX - O2.pageX, i3 = P2.pageY - O2.pageY;
              k2 && (t3 += k2), C2 && (i3 += C2), w2 = t3, T2 = i3;
              var n3 = "translate3d(".concat(t3, "px, ").concat(i3, "px, 0)");
              y2 && (n3 += " scale3d(".concat(y2, ", ").concat(y2, ", 1)")), p(c2, n3);
            }
          }, swipe: function(t3) {
            if (!S2)
              if (x2)
                x2 = false;
              else {
                if (t3.direction == "Left") {
                  if (e2.index == e2.elements.length - 1)
                    return W(h2);
                  e2.nextSlide();
                }
                if (t3.direction == "Right") {
                  if (e2.index == 0)
                    return W(h2);
                  e2.prevSlide();
                }
              }
          } });
          e2.events.touch = q2;
        }
        var j = function() {
          function e2(i2, n2) {
            var s2 = this, l2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
            if (t(this, e2), this.img = i2, this.slide = n2, this.onclose = l2, this.img.setZoomEvents)
              return false;
            this.active = false, this.zoomedIn = false, this.dragging = false, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.img.addEventListener("mousedown", function(e3) {
              return s2.dragStart(e3);
            }, false), this.img.addEventListener("mouseup", function(e3) {
              return s2.dragEnd(e3);
            }, false), this.img.addEventListener("mousemove", function(e3) {
              return s2.drag(e3);
            }, false), this.img.addEventListener("click", function(e3) {
              return s2.slide.classList.contains("dragging-nav") ? (s2.zoomOut(), false) : s2.zoomedIn ? void (s2.zoomedIn && !s2.dragging && s2.zoomOut()) : s2.zoomIn();
            }, false), this.img.setZoomEvents = true;
          }
          return n(e2, [{ key: "zoomIn", value: function() {
            var e3 = this.widowWidth();
            if (!(this.zoomedIn || e3 <= 768)) {
              var t2 = this.img;
              if (t2.setAttribute("data-style", t2.getAttribute("style")), t2.style.maxWidth = t2.naturalWidth + "px", t2.style.maxHeight = t2.naturalHeight + "px", t2.naturalWidth > e3) {
                var i2 = e3 / 2 - t2.naturalWidth / 2;
                this.setTranslate(this.img.parentNode, i2, 0);
              }
              this.slide.classList.add("zoomed"), this.zoomedIn = true;
            }
          } }, { key: "zoomOut", value: function() {
            this.img.parentNode.setAttribute("style", ""), this.img.setAttribute("style", this.img.getAttribute("data-style")), this.slide.classList.remove("zoomed"), this.zoomedIn = false, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.onclose && typeof this.onclose == "function" && this.onclose();
          } }, { key: "dragStart", value: function(e3) {
            e3.preventDefault(), this.zoomedIn ? (e3.type === "touchstart" ? (this.initialX = e3.touches[0].clientX - this.xOffset, this.initialY = e3.touches[0].clientY - this.yOffset) : (this.initialX = e3.clientX - this.xOffset, this.initialY = e3.clientY - this.yOffset), e3.target === this.img && (this.active = true, this.img.classList.add("dragging"))) : this.active = false;
          } }, { key: "dragEnd", value: function(e3) {
            var t2 = this;
            e3.preventDefault(), this.initialX = this.currentX, this.initialY = this.currentY, this.active = false, setTimeout(function() {
              t2.dragging = false, t2.img.isDragging = false, t2.img.classList.remove("dragging");
            }, 100);
          } }, { key: "drag", value: function(e3) {
            this.active && (e3.preventDefault(), e3.type === "touchmove" ? (this.currentX = e3.touches[0].clientX - this.initialX, this.currentY = e3.touches[0].clientY - this.initialY) : (this.currentX = e3.clientX - this.initialX, this.currentY = e3.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.img.isDragging = true, this.dragging = true, this.setTranslate(this.img, this.currentX, this.currentY));
          } }, { key: "onMove", value: function(e3) {
            if (this.zoomedIn) {
              var t2 = e3.clientX - this.img.naturalWidth / 2, i2 = e3.clientY - this.img.naturalHeight / 2;
              this.setTranslate(this.img, t2, i2);
            }
          } }, { key: "setTranslate", value: function(e3, t2, i2) {
            e3.style.transform = "translate3d(" + t2 + "px, " + i2 + "px, 0)";
          } }, { key: "widowWidth", value: function() {
            return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
          } }]), e2;
        }(), V = function() {
          function e2() {
            var i2 = this, n2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            t(this, e2);
            var s2 = n2.dragEl, l2 = n2.toleranceX, o2 = l2 === void 0 ? 40 : l2, r2 = n2.toleranceY, a2 = r2 === void 0 ? 65 : r2, h2 = n2.slide, c2 = h2 === void 0 ? null : h2, d2 = n2.instance, u2 = d2 === void 0 ? null : d2;
            this.el = s2, this.active = false, this.dragging = false, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.direction = null, this.lastDirection = null, this.toleranceX = o2, this.toleranceY = a2, this.toleranceReached = false, this.dragContainer = this.el, this.slide = c2, this.instance = u2, this.el.addEventListener("mousedown", function(e3) {
              return i2.dragStart(e3);
            }, false), this.el.addEventListener("mouseup", function(e3) {
              return i2.dragEnd(e3);
            }, false), this.el.addEventListener("mousemove", function(e3) {
              return i2.drag(e3);
            }, false);
          }
          return n(e2, [{ key: "dragStart", value: function(e3) {
            if (this.slide.classList.contains("zoomed"))
              this.active = false;
            else {
              e3.type === "touchstart" ? (this.initialX = e3.touches[0].clientX - this.xOffset, this.initialY = e3.touches[0].clientY - this.yOffset) : (this.initialX = e3.clientX - this.xOffset, this.initialY = e3.clientY - this.yOffset);
              var t2 = e3.target.nodeName.toLowerCase();
              e3.target.classList.contains("nodrag") || v(e3.target, ".nodrag") || ["input", "select", "textarea", "button", "a"].indexOf(t2) !== -1 ? this.active = false : (e3.preventDefault(), (e3.target === this.el || t2 !== "img" && v(e3.target, ".gslide-inline")) && (this.active = true, this.el.classList.add("dragging"), this.dragContainer = v(e3.target, ".ginner-container")));
            }
          } }, { key: "dragEnd", value: function(e3) {
            var t2 = this;
            e3 && e3.preventDefault(), this.initialX = 0, this.initialY = 0, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.active = false, this.doSlideChange && (this.instance.preventOutsideClick = true, this.doSlideChange == "right" && this.instance.prevSlide(), this.doSlideChange == "left" && this.instance.nextSlide()), this.doSlideClose && this.instance.close(), this.toleranceReached || this.setTranslate(this.dragContainer, 0, 0, true), setTimeout(function() {
              t2.instance.preventOutsideClick = false, t2.toleranceReached = false, t2.lastDirection = null, t2.dragging = false, t2.el.isDragging = false, t2.el.classList.remove("dragging"), t2.slide.classList.remove("dragging-nav"), t2.dragContainer.style.transform = "", t2.dragContainer.style.transition = "";
            }, 100);
          } }, { key: "drag", value: function(e3) {
            if (this.active) {
              e3.preventDefault(), this.slide.classList.add("dragging-nav"), e3.type === "touchmove" ? (this.currentX = e3.touches[0].clientX - this.initialX, this.currentY = e3.touches[0].clientY - this.initialY) : (this.currentX = e3.clientX - this.initialX, this.currentY = e3.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.el.isDragging = true, this.dragging = true, this.doSlideChange = false, this.doSlideClose = false;
              var t2 = Math.abs(this.currentX), i2 = Math.abs(this.currentY);
              if (t2 > 0 && t2 >= Math.abs(this.currentY) && (!this.lastDirection || this.lastDirection == "x")) {
                this.yOffset = 0, this.lastDirection = "x", this.setTranslate(this.dragContainer, this.currentX, 0);
                var n2 = this.shouldChange();
                if (!this.instance.settings.dragAutoSnap && n2 && (this.doSlideChange = n2), this.instance.settings.dragAutoSnap && n2)
                  return this.instance.preventOutsideClick = true, this.toleranceReached = true, this.active = false, this.instance.preventOutsideClick = true, this.dragEnd(null), n2 == "right" && this.instance.prevSlide(), void (n2 == "left" && this.instance.nextSlide());
              }
              if (this.toleranceY > 0 && i2 > 0 && i2 >= t2 && (!this.lastDirection || this.lastDirection == "y")) {
                this.xOffset = 0, this.lastDirection = "y", this.setTranslate(this.dragContainer, 0, this.currentY);
                var s2 = this.shouldClose();
                return !this.instance.settings.dragAutoSnap && s2 && (this.doSlideClose = true), void (this.instance.settings.dragAutoSnap && s2 && this.instance.close());
              }
            }
          } }, { key: "shouldChange", value: function() {
            var e3 = false;
            if (Math.abs(this.currentX) >= this.toleranceX) {
              var t2 = this.currentX > 0 ? "right" : "left";
              (t2 == "left" && this.slide !== this.slide.parentNode.lastChild || t2 == "right" && this.slide !== this.slide.parentNode.firstChild) && (e3 = t2);
            }
            return e3;
          } }, { key: "shouldClose", value: function() {
            var e3 = false;
            return Math.abs(this.currentY) >= this.toleranceY && (e3 = true), e3;
          } }, { key: "setTranslate", value: function(e3, t2, i2) {
            var n2 = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
            e3.style.transition = n2 ? "all .2s ease" : "", e3.style.transform = "translate3d(" + t2 + "px, " + i2 + "px, 0)";
          } }]), e2;
        }();
        function F(e2, t2, i2) {
          var n2 = e2.querySelector(".gslide-media"), s2 = new Image(), l2 = "gSlideTitle_" + t2.index, o2 = "gSlideDesc_" + t2.index;
          s2.addEventListener("load", function() {
            C(i2) && i2();
          }, false), s2.src = t2.href, s2.alt = "", t2.title !== "" && s2.setAttribute("aria-labelledby", l2), t2.description !== "" && s2.setAttribute("aria-describedby", o2), n2.insertBefore(s2, n2.firstChild);
        }
        function R(e2, t2, i2) {
          var n2 = this, s2 = e2.querySelector(".ginner-container"), l2 = "gvideo" + t2.index, o2 = e2.querySelector(".gslide-media"), r2 = this.getAllPlayers();
          d(s2, "gvideo-container"), o2.insertBefore(x('<div class="gvideo-wrapper"></div>'), o2.firstChild);
          var a2 = e2.querySelector(".gvideo-wrapper");
          T(this.settings.plyr.css, "Plyr");
          var h2 = t2.href, c2 = location.protocol.replace(":", ""), u2 = "", g2 = "", v2 = false;
          c2 == "file" && (c2 = "http"), o2.style.maxWidth = t2.width, T(this.settings.plyr.js, "Plyr", function() {
            if (h2.match(/vimeo\.com\/([0-9]*)/)) {
              var e3 = /vimeo.*\/(\d+)/i.exec(h2);
              u2 = "vimeo", g2 = e3[1];
            }
            if (h2.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || h2.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || h2.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) {
              var s3 = function(e4) {
                var t3 = "";
                t3 = (e4 = e4.replace(/(>|<)/gi, "").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/))[2] !== void 0 ? (t3 = e4[2].split(/[^0-9a-z_\-]/i))[0] : e4;
                return t3;
              }(h2);
              u2 = "youtube", g2 = s3;
            }
            if (h2.match(/\.(mp4|ogg|webm|mov)$/) !== null) {
              u2 = "local";
              var o3 = '<video id="' + l2 + '" ';
              o3 += 'style="background:#000; max-width: '.concat(t2.width, ';" '), o3 += 'preload="metadata" ', o3 += 'x-webkit-airplay="allow" ', o3 += 'webkit-playsinline="" ', o3 += "controls ", o3 += 'class="gvideo-local">';
              var c3 = h2.toLowerCase().split(".").pop(), f2 = { mp4: "", ogg: "", webm: "" };
              for (var p2 in f2[c3 = c3 == "mov" ? "mp4" : c3] = h2, f2)
                if (f2.hasOwnProperty(p2)) {
                  var m2 = f2[p2];
                  t2.hasOwnProperty(p2) && (m2 = t2[p2]), m2 !== "" && (o3 += '<source src="'.concat(m2, '" type="video/').concat(p2, '">'));
                }
              v2 = x(o3 += "</video>");
            }
            var y2 = v2 || x('<div id="'.concat(l2, '" data-plyr-provider="').concat(u2, '" data-plyr-embed-id="').concat(g2, '"></div>'));
            d(a2, "".concat(u2, "-video gvideo")), a2.appendChild(y2), a2.setAttribute("data-id", l2), a2.setAttribute("data-index", t2.index);
            var b2 = M(n2.settings.plyr, "config") ? n2.settings.plyr.config : {}, S2 = new Plyr("#" + l2, b2);
            S2.on("ready", function(e4) {
              var t3 = e4.detail.plyr;
              r2[l2] = t3, C(i2) && i2();
            }), S2.on("enterfullscreen", G), S2.on("exitfullscreen", G);
          });
        }
        function G(e2) {
          var t2 = v(e2.target, ".gslide-media");
          e2.type == "enterfullscreen" && d(t2, "fullscreen"), e2.type == "exitfullscreen" && u(t2, "fullscreen");
        }
        function Z(e2, t2, i2) {
          var n2, s2 = this, l2 = e2.querySelector(".gslide-media"), o2 = !(!M(t2, "href") || !t2.href) && t2.href.split("#").pop().trim(), r2 = !(!M(t2, "content") || !t2.content) && t2.content;
          if (r2 && (E(r2) && (n2 = x('<div class="ginlined-content">'.concat(r2, "</div>"))), A(r2))) {
            r2.style.display == "none" && (r2.style.display = "block");
            var a2 = document.createElement("div");
            a2.className = "ginlined-content", a2.appendChild(r2), n2 = a2;
          }
          if (o2) {
            var h2 = document.getElementById(o2);
            if (!h2)
              return false;
            var u2 = h2.cloneNode(true);
            u2.style.height = t2.height, u2.style.maxWidth = t2.width, d(u2, "ginlined-content"), n2 = u2;
          }
          if (!n2)
            return console.error("Unable to append inline slide content", t2), false;
          l2.style.height = t2.height, l2.style.width = t2.width, l2.appendChild(n2), this.events["inlineclose" + o2] = c("click", { onElement: l2.querySelectorAll(".gtrigger-close"), withCallback: function(e3) {
            e3.preventDefault(), s2.close();
          } }), C(i2) && i2();
        }
        function $(e2, t2, i2) {
          var n2 = e2.querySelector(".gslide-media"), s2 = function(e3) {
            var t3 = e3.url, i3 = e3.allow, n3 = e3.callback, s3 = e3.appendTo, l2 = document.createElement("iframe");
            return l2.className = "vimeo-video gvideo", l2.src = t3, l2.style.width = "100%", l2.style.height = "100%", i3 && l2.setAttribute("allow", i3), l2.onload = function() {
              d(l2, "node-ready"), C(n3) && n3();
            }, s3 && s3.appendChild(l2), l2;
          }({ url: t2.href, callback: i2 });
          n2.parentNode.style.maxWidth = t2.width, n2.parentNode.style.height = t2.height, n2.appendChild(s2);
        }
        var U = function() {
          function e2() {
            var i2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            t(this, e2), this.defaults = { href: "", title: "", type: "", description: "", descPosition: "bottom", effect: "", width: "", height: "", content: false, zoomable: true, draggable: true }, O(i2) && (this.defaults = r(this.defaults, i2));
          }
          return n(e2, [{ key: "sourceType", value: function(e3) {
            var t2 = e3;
            if ((e3 = e3.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|svg)$/) !== null)
              return "image";
            if (e3.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || e3.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || e3.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/))
              return "video";
            if (e3.match(/vimeo\.com\/([0-9]*)/))
              return "video";
            if (e3.match(/\.(mp4|ogg|webm|mov)$/) !== null)
              return "video";
            if (e3.match(/\.(mp3|wav|wma|aac|ogg)$/) !== null)
              return "audio";
            if (e3.indexOf("#") > -1 && t2.split("#").pop().trim() !== "")
              return "inline";
            return e3.indexOf("goajax=true") > -1 ? "ajax" : "external";
          } }, { key: "parseConfig", value: function(e3, t2) {
            var i2 = this, n2 = r({ descPosition: t2.descPosition }, this.defaults);
            if (O(e3) && !A(e3)) {
              M(e3, "type") || (M(e3, "content") && e3.content ? e3.type = "inline" : M(e3, "href") && (e3.type = this.sourceType(e3.href)));
              var s2 = r(n2, e3);
              return this.setSize(s2, t2), s2;
            }
            var l2 = "", o2 = e3.getAttribute("data-glightbox"), h2 = e3.nodeName.toLowerCase();
            if (h2 === "a" && (l2 = e3.href), h2 === "img" && (l2 = e3.src), n2.href = l2, a(n2, function(s3, l3) {
              M(t2, l3) && l3 !== "width" && (n2[l3] = t2[l3]);
              var o3 = e3.dataset[l3];
              P(o3) || (n2[l3] = i2.sanitizeValue(o3));
            }), n2.content && (n2.type = "inline"), !n2.type && l2 && (n2.type = this.sourceType(l2)), P(o2)) {
              if (!n2.title && h2 == "a") {
                var c2 = e3.title;
                P(c2) || c2 === "" || (n2.title = c2);
              }
              if (!n2.title && h2 == "img") {
                var d2 = e3.alt;
                P(d2) || d2 === "" || (n2.title = d2);
              }
            } else {
              var u2 = [];
              a(n2, function(e4, t3) {
                u2.push(";\\s?" + t3);
              }), u2 = u2.join("\\s?:|"), o2.trim() !== "" && a(n2, function(e4, t3) {
                var s3 = o2, l3 = new RegExp("s?" + t3 + "s?:s?(.*?)(" + u2 + "s?:|$)"), r2 = s3.match(l3);
                if (r2 && r2.length && r2[1]) {
                  var a2 = r2[1].trim().replace(/;\s*$/, "");
                  n2[t3] = i2.sanitizeValue(a2);
                }
              });
            }
            if (n2.description && n2.description.substring(0, 1) == "." && document.querySelector(n2.description))
              n2.description = document.querySelector(n2.description).innerHTML;
            else {
              var g2 = e3.querySelector(".glightbox-desc");
              g2 && (n2.description = g2.innerHTML);
            }
            return this.setSize(n2, t2), this.slideConfig = n2, n2;
          } }, { key: "setSize", value: function(e3, t2) {
            var i2 = e3.type == "video" ? this.checkSize(t2.videosWidth) : this.checkSize(t2.width), n2 = this.checkSize(t2.height);
            return e3.width = M(e3, "width") && e3.width !== "" ? this.checkSize(e3.width) : i2, e3.height = M(e3, "height") && e3.height !== "" ? this.checkSize(e3.height) : n2, e3;
          } }, { key: "checkSize", value: function(e3) {
            return z(e3) ? "".concat(e3, "px") : e3;
          } }, { key: "sanitizeValue", value: function(e3) {
            return e3 !== "true" && e3 !== "false" ? e3 : e3 === "true";
          } }]), e2;
        }(), J = function() {
          function e2(i2, n2) {
            t(this, e2), this.element = i2, this.instance = n2;
          }
          return n(e2, [{ key: "setContent", value: function() {
            var e3 = this, t2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, i2 = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
            if (g(t2, "loaded"))
              return false;
            var n2 = this.instance.settings, s2 = this.slideConfig, l2 = k();
            C(n2.beforeSlideLoad) && n2.beforeSlideLoad({ index: s2.index, slide: t2, player: false });
            var o2 = s2.type, r2 = s2.descPosition, a2 = t2.querySelector(".gslide-media"), h2 = t2.querySelector(".gslide-title"), c2 = t2.querySelector(".gslide-desc"), u2 = t2.querySelector(".gdesc-inner"), v2 = i2, f2 = "gSlideTitle_" + s2.index, p2 = "gSlideDesc_" + s2.index;
            if (C(n2.afterSlideLoad) && (v2 = function() {
              C(i2) && i2(), n2.afterSlideLoad({ index: s2.index, slide: t2, player: e3.instance.getSlidePlayerInstance(s2.index) });
            }), s2.title == "" && s2.description == "" ? u2 && u2.parentNode.parentNode.removeChild(u2.parentNode) : (h2 && s2.title !== "" ? (h2.id = f2, h2.innerHTML = s2.title) : h2.parentNode.removeChild(h2), c2 && s2.description !== "" ? (c2.id = p2, l2 && n2.moreLength > 0 ? (s2.smallDescription = this.slideShortDesc(s2.description, n2.moreLength, n2.moreText), c2.innerHTML = s2.smallDescription, this.descriptionEvents(c2, s2)) : c2.innerHTML = s2.description) : c2.parentNode.removeChild(c2), d(a2.parentNode, "desc-".concat(r2)), d(u2.parentNode, "description-".concat(r2))), d(a2, "gslide-".concat(o2)), d(t2, "loaded"), o2 !== "video") {
              if (o2 !== "external")
                return o2 === "inline" ? (Z.apply(this.instance, [t2, s2, v2]), void (s2.draggable && new V({ dragEl: t2.querySelector(".gslide-inline"), toleranceX: n2.dragToleranceX, toleranceY: n2.dragToleranceY, slide: t2, instance: this.instance }))) : void (o2 !== "image" ? C(v2) && v2() : F(t2, s2, function() {
                  var i3 = t2.querySelector("img");
                  s2.draggable && new V({ dragEl: i3, toleranceX: n2.dragToleranceX, toleranceY: n2.dragToleranceY, slide: t2, instance: e3.instance }), s2.zoomable && i3.naturalWidth > i3.offsetWidth && (d(i3, "zoomable"), new j(i3, t2, function() {
                    e3.instance.resize();
                  })), C(v2) && v2();
                }));
              $.apply(this, [t2, s2, v2]);
            } else
              R.apply(this.instance, [t2, s2, v2]);
          } }, { key: "slideShortDesc", value: function(e3) {
            var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 50, i2 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], n2 = i2;
            if ((e3 = e3.trim()).length <= t2)
              return e3;
            var s2 = e3.substr(0, t2 - 1);
            return n2 ? s2 + '... <a href="#" class="desc-more">' + i2 + "</a>" : s2;
          } }, { key: "descriptionEvents", value: function(e3, t2) {
            var i2 = this, n2 = e3.querySelector(".desc-more");
            if (!n2)
              return false;
            c("click", { onElement: n2, withCallback: function(e4, n3) {
              e4.preventDefault();
              var s2 = document.body, l2 = v(n3, ".gslide-desc");
              if (!l2)
                return false;
              l2.innerHTML = t2.description, d(s2, "gdesc-open");
              var o2 = c("click", { onElement: [s2, v(l2, ".gslide-description")], withCallback: function(e5, n4) {
                e5.target.nodeName.toLowerCase() !== "a" && (u(s2, "gdesc-open"), d(s2, "gdesc-closed"), l2.innerHTML = t2.smallDescription, i2.descriptionEvents(l2, t2), setTimeout(function() {
                  u(s2, "gdesc-closed");
                }, 400), o2.destroy());
              } });
            } });
          } }, { key: "create", value: function() {
            return x(this.instance.settings.slideHTML);
          } }, { key: "getConfig", value: function() {
            var e3 = new U(this.instance.settings.slideExtraAttributes);
            return this.slideConfig = e3.parseConfig(this.element, this.instance.settings), this.slideConfig;
          } }]), e2;
        }(), K = k(), Q = k() !== null || document.createTouch !== void 0 || "ontouchstart" in window || "onmsgesturechange" in window || navigator.msMaxTouchPoints, ee = document.getElementsByTagName("html")[0], te = { selector: ".glightbox", elements: null, skin: "clean", closeButton: true, startAt: null, autoplayVideos: true, autofocusVideos: true, descPosition: "bottom", width: "900px", height: "506px", videosWidth: "960px", beforeSlideChange: null, afterSlideChange: null, beforeSlideLoad: null, afterSlideLoad: null, slideInserted: null, slideRemoved: null, slideExtraAttributes: null, onOpen: null, onClose: null, loop: false, zoomable: true, draggable: true, dragAutoSnap: false, dragToleranceX: 40, dragToleranceY: 65, preload: true, oneSlidePerOpen: false, touchNavigation: true, touchFollowAxis: true, keyboardNavigation: true, closeOnOutsideClick: true, plyr: { css: "https://cdn.plyr.io/3.6.3/plyr.css", js: "https://cdn.plyr.io/3.6.3/plyr.js", config: { ratio: "16:9", youtube: { noCookie: true, rel: 0, showinfo: 0, iv_load_policy: 3 }, vimeo: { byline: false, portrait: false, title: false, transparent: false } } }, openEffect: "zoom", closeEffect: "zoom", slideEffect: "slide", moreText: "See more", moreLength: 60, cssEfects: { fade: { in: "fadeIn", out: "fadeOut" }, zoom: { in: "zoomIn", out: "zoomOut" }, slide: { in: "slideInRight", out: "slideOutLeft" }, slideBack: { in: "slideInLeft", out: "slideOutRight" }, none: { in: "none", out: "none" } }, svg: { close: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>', next: '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>', prev: '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>' }, slideHTML: '<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>', lightboxHTML: '<div id="glightbox-body" class="glightbox-container">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gnext gbtn" tabindex="0" aria-label="Next">{nextSVG}</button>\n    <button class="gprev gbtn" tabindex="1" aria-label="Previous">{prevSVG}</button>\n    <button class="gclose gbtn" tabindex="2" aria-label="Close">{closeSVG}</button>\n</div>\n</div>' }, ie = function() {
          function e2() {
            var i2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            t(this, e2), this.settings = r(te, i2), this.effectsClasses = this.getAnimationClasses(), this.videoPlayers = {}, this.apiEvents = [], this.fullElementsList = false;
          }
          return n(e2, [{ key: "init", value: function() {
            var e3 = this, t2 = this.getSelector();
            t2 && (this.baseEvents = c("click", { onElement: t2, withCallback: function(t3, i2) {
              t3.preventDefault(), e3.open(i2);
            } })), this.elements = this.getElements();
          } }, { key: "open", value: function() {
            var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
            if (this.elements.length == 0)
              return false;
            this.activeSlide = null, this.prevActiveSlideIndex = null, this.prevActiveSlide = null;
            var i2 = z(t2) ? t2 : this.settings.startAt;
            if (A(e3)) {
              var n2 = e3.getAttribute("data-gallery");
              n2 && (this.fullElementsList = this.elements, this.elements = this.getGalleryElements(this.elements, n2)), P(i2) && (i2 = this.getElementIndex(e3)) < 0 && (i2 = 0);
            }
            z(i2) || (i2 = 0), this.build(), f(this.overlay, this.settings.openEffect == "none" ? "none" : this.settings.cssEfects.fade.in);
            var s2 = document.body, l2 = window.innerWidth - document.documentElement.clientWidth;
            if (l2 > 0) {
              var o2 = document.createElement("style");
              o2.type = "text/css", o2.className = "gcss-styles", o2.innerText = ".gscrollbar-fixer {margin-right: ".concat(l2, "px}"), document.head.appendChild(o2), d(s2, "gscrollbar-fixer");
            }
            d(s2, "glightbox-open"), d(ee, "glightbox-open"), K && (d(document.body, "glightbox-mobile"), this.settings.slideEffect = "slide"), this.showSlide(i2, true), this.elements.length == 1 ? (y(this.prevButton), y(this.nextButton)) : (m(this.prevButton), m(this.nextButton)), this.lightboxOpen = true, this.trigger("open"), C(this.settings.onOpen) && this.settings.onOpen(), Q && this.settings.touchNavigation && H(this), this.settings.keyboardNavigation && Y(this);
          } }, { key: "openAt", value: function() {
            var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            this.open(null, e3);
          } }, { key: "showSlide", value: function() {
            var e3 = this, t2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, i2 = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
            m(this.loader), this.index = parseInt(t2);
            var n2 = this.slidesContainer.querySelector(".current");
            n2 && u(n2, "current"), this.slideAnimateOut();
            var s2 = this.slidesContainer.querySelectorAll(".gslide")[t2];
            if (g(s2, "loaded"))
              this.slideAnimateIn(s2, i2), y(this.loader);
            else {
              m(this.loader);
              var l2 = this.elements[t2], o2 = { index: this.index, slide: s2, slideNode: s2, slideConfig: l2.slideConfig, slideIndex: this.index, trigger: l2.node, player: null };
              this.trigger("slide_before_load", o2), l2.instance.setContent(s2, function() {
                y(e3.loader), e3.resize(), e3.slideAnimateIn(s2, i2), e3.trigger("slide_after_load", o2);
              });
            }
            this.slideDescription = s2.querySelector(".gslide-description"), this.slideDescriptionContained = this.slideDescription && g(this.slideDescription.parentNode, "gslide-media"), this.settings.preload && (this.preloadSlide(t2 + 1), this.preloadSlide(t2 - 1)), this.updateNavigationClasses(), this.activeSlide = s2;
          } }, { key: "preloadSlide", value: function(e3) {
            var t2 = this;
            if (e3 < 0 || e3 > this.elements.length - 1)
              return false;
            if (P(this.elements[e3]))
              return false;
            var i2 = this.slidesContainer.querySelectorAll(".gslide")[e3];
            if (g(i2, "loaded"))
              return false;
            var n2 = this.elements[e3], s2 = n2.type, l2 = { index: e3, slide: i2, slideNode: i2, slideConfig: n2.slideConfig, slideIndex: e3, trigger: n2.node, player: null };
            this.trigger("slide_before_load", l2), s2 == "video" || s2 == "external" ? setTimeout(function() {
              n2.instance.setContent(i2, function() {
                t2.trigger("slide_after_load", l2);
              });
            }, 200) : n2.instance.setContent(i2, function() {
              t2.trigger("slide_after_load", l2);
            });
          } }, { key: "prevSlide", value: function() {
            this.goToSlide(this.index - 1);
          } }, { key: "nextSlide", value: function() {
            this.goToSlide(this.index + 1);
          } }, { key: "goToSlide", value: function() {
            var e3 = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
            if (this.prevActiveSlide = this.activeSlide, this.prevActiveSlideIndex = this.index, !this.loop() && (e3 < 0 || e3 > this.elements.length - 1))
              return false;
            e3 < 0 ? e3 = this.elements.length - 1 : e3 >= this.elements.length && (e3 = 0), this.showSlide(e3);
          } }, { key: "insertSlide", value: function() {
            var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1, i2 = new J(e3, this), n2 = i2.getConfig(), s2 = r({}, n2), l2 = i2.create(), o2 = this.elements.length - 1;
            t2 < 0 && (t2 = this.elements.length), s2.index = t2, s2.node = false, s2.instance = i2, s2.slideConfig = n2, this.elements.splice(t2, 0, s2);
            var a2 = null, h2 = null;
            if (this.slidesContainer) {
              if (t2 > o2)
                this.slidesContainer.appendChild(l2);
              else {
                var c2 = this.slidesContainer.querySelectorAll(".gslide")[t2];
                this.slidesContainer.insertBefore(l2, c2);
              }
              (this.settings.preload && this.index == 0 && t2 == 0 || this.index - 1 == t2 || this.index + 1 == t2) && this.preloadSlide(t2), this.index == 0 && t2 == 0 && (this.index = 1), this.updateNavigationClasses(), a2 = this.slidesContainer.querySelectorAll(".gslide")[t2], h2 = this.getSlidePlayerInstance(t2), s2.slideNode = a2;
            }
            this.trigger("slide_inserted", { index: t2, slide: a2, slideNode: a2, slideConfig: n2, slideIndex: t2, trigger: null, player: h2 }), C(this.settings.slideInserted) && this.settings.slideInserted({ index: t2, slide: a2, player: h2 });
          } }, { key: "removeSlide", value: function() {
            var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1;
            if (e3 < 0 || e3 > this.elements.length - 1)
              return false;
            var t2 = this.slidesContainer && this.slidesContainer.querySelectorAll(".gslide")[e3];
            t2 && (this.getActiveSlideIndex() == e3 && (e3 == this.elements.length - 1 ? this.prevSlide() : this.nextSlide()), t2.parentNode.removeChild(t2)), this.elements.splice(e3, 1), this.trigger("slide_removed", e3), C(this.settings.slideRemoved) && this.settings.slideRemoved(e3);
          } }, { key: "slideAnimateIn", value: function(e3, t2) {
            var i2 = this, n2 = e3.querySelector(".gslide-media"), s2 = e3.querySelector(".gslide-description"), l2 = { index: this.prevActiveSlideIndex, slide: this.prevActiveSlide, slideNode: this.prevActiveSlide, slideIndex: this.prevActiveSlide, slideConfig: P(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig, trigger: P(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node, player: this.getSlidePlayerInstance(this.prevActiveSlideIndex) }, o2 = { index: this.index, slide: this.activeSlide, slideNode: this.activeSlide, slideConfig: this.elements[this.index].slideConfig, slideIndex: this.index, trigger: this.elements[this.index].node, player: this.getSlidePlayerInstance(this.index) };
            if (n2.offsetWidth > 0 && s2 && (y(s2), s2.style.display = ""), u(e3, this.effectsClasses), t2)
              f(e3, this.settings.cssEfects[this.settings.openEffect].in, function() {
                i2.settings.autoplayVideos && i2.slidePlayerPlay(e3), i2.trigger("slide_changed", { prev: l2, current: o2 }), C(i2.settings.afterSlideChange) && i2.settings.afterSlideChange.apply(i2, [l2, o2]);
              });
            else {
              var r2 = this.settings.slideEffect, a2 = r2 !== "none" ? this.settings.cssEfects[r2].in : r2;
              this.prevActiveSlideIndex > this.index && this.settings.slideEffect == "slide" && (a2 = this.settings.cssEfects.slideBack.in), f(e3, a2, function() {
                i2.settings.autoplayVideos && i2.slidePlayerPlay(e3), i2.trigger("slide_changed", { prev: l2, current: o2 }), C(i2.settings.afterSlideChange) && i2.settings.afterSlideChange.apply(i2, [l2, o2]);
              });
            }
            setTimeout(function() {
              i2.resize(e3);
            }, 100), d(e3, "current");
          } }, { key: "slideAnimateOut", value: function() {
            if (!this.prevActiveSlide)
              return false;
            var e3 = this.prevActiveSlide;
            u(e3, this.effectsClasses), d(e3, "prev");
            var t2 = this.settings.slideEffect, i2 = t2 !== "none" ? this.settings.cssEfects[t2].out : t2;
            this.slidePlayerPause(e3), this.trigger("slide_before_change", { prev: { index: this.prevActiveSlideIndex, slide: this.prevActiveSlide, slideNode: this.prevActiveSlide, slideIndex: this.prevActiveSlideIndex, slideConfig: P(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig, trigger: P(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node, player: this.getSlidePlayerInstance(this.prevActiveSlideIndex) }, current: { index: this.index, slide: this.activeSlide, slideNode: this.activeSlide, slideIndex: this.index, slideConfig: this.elements[this.index].slideConfig, trigger: this.elements[this.index].node, player: this.getSlidePlayerInstance(this.index) } }), C(this.settings.beforeSlideChange) && this.settings.beforeSlideChange.apply(this, [{ index: this.prevActiveSlideIndex, slide: this.prevActiveSlide, player: this.getSlidePlayerInstance(this.prevActiveSlideIndex) }, { index: this.index, slide: this.activeSlide, player: this.getSlidePlayerInstance(this.index) }]), this.prevActiveSlideIndex > this.index && this.settings.slideEffect == "slide" && (i2 = this.settings.cssEfects.slideBack.out), f(e3, i2, function() {
              var t3 = e3.querySelector(".gslide-media"), i3 = e3.querySelector(".gslide-description");
              t3.style.transform = "", u(t3, "greset"), t3.style.opacity = "", i3 && (i3.style.opacity = ""), u(e3, "prev");
            });
          } }, { key: "getAllPlayers", value: function() {
            return this.videoPlayers;
          } }, { key: "getSlidePlayerInstance", value: function(e3) {
            var t2 = "gvideo" + e3, i2 = this.getAllPlayers();
            return !(!M(i2, t2) || !i2[t2]) && i2[t2];
          } }, { key: "stopSlideVideo", value: function(e3) {
            if (A(e3)) {
              var t2 = e3.querySelector(".gvideo-wrapper");
              t2 && (e3 = t2.getAttribute("data-index"));
            }
            console.log("stopSlideVideo is deprecated, use slidePlayerPause");
            var i2 = this.getSlidePlayerInstance(e3);
            i2 && i2.playing && i2.pause();
          } }, { key: "slidePlayerPause", value: function(e3) {
            if (A(e3)) {
              var t2 = e3.querySelector(".gvideo-wrapper");
              t2 && (e3 = t2.getAttribute("data-index"));
            }
            var i2 = this.getSlidePlayerInstance(e3);
            i2 && i2.playing && i2.pause();
          } }, { key: "playSlideVideo", value: function(e3) {
            if (A(e3)) {
              var t2 = e3.querySelector(".gvideo-wrapper");
              t2 && (e3 = t2.getAttribute("data-index"));
            }
            console.log("playSlideVideo is deprecated, use slidePlayerPlay");
            var i2 = this.getSlidePlayerInstance(e3);
            i2 && !i2.playing && i2.play();
          } }, { key: "slidePlayerPlay", value: function(e3) {
            if (A(e3)) {
              var t2 = e3.querySelector(".gvideo-wrapper");
              t2 && (e3 = t2.getAttribute("data-index"));
            }
            var i2 = this.getSlidePlayerInstance(e3);
            i2 && !i2.playing && (i2.play(), this.settings.autofocusVideos && i2.elements.container.focus());
          } }, { key: "setElements", value: function(e3) {
            var t2 = this;
            this.settings.elements = false;
            var i2 = [];
            e3 && e3.length && a(e3, function(e4, n2) {
              var s2 = new J(e4, t2), l2 = s2.getConfig(), o2 = r({}, l2);
              o2.slideConfig = l2, o2.instance = s2, o2.index = n2, i2.push(o2);
            }), this.elements = i2, this.lightboxOpen && (this.slidesContainer.innerHTML = "", this.elements.length && (a(this.elements, function() {
              var e4 = x(t2.settings.slideHTML);
              t2.slidesContainer.appendChild(e4);
            }), this.showSlide(0, true)));
          } }, { key: "getElementIndex", value: function(e3) {
            var t2 = false;
            return a(this.elements, function(i2, n2) {
              if (M(i2, "node") && i2.node == e3)
                return t2 = n2, true;
            }), t2;
          } }, { key: "getElements", value: function() {
            var e3 = this, t2 = [];
            this.elements = this.elements ? this.elements : [], !P(this.settings.elements) && L(this.settings.elements) && this.settings.elements.length && a(this.settings.elements, function(i3, n2) {
              var s2 = new J(i3, e3), l2 = s2.getConfig(), o2 = r({}, l2);
              o2.node = false, o2.index = n2, o2.instance = s2, o2.slideConfig = l2, t2.push(o2);
            });
            var i2 = false;
            return this.getSelector() && (i2 = document.querySelectorAll(this.getSelector())), i2 ? (a(i2, function(i3, n2) {
              var s2 = new J(i3, e3), l2 = s2.getConfig(), o2 = r({}, l2);
              o2.node = i3, o2.index = n2, o2.instance = s2, o2.slideConfig = l2, o2.gallery = i3.getAttribute("data-gallery"), t2.push(o2);
            }), t2) : t2;
          } }, { key: "getGalleryElements", value: function(e3, t2) {
            return e3.filter(function(e4) {
              return e4.gallery == t2;
            });
          } }, { key: "getSelector", value: function() {
            return !this.settings.elements && (this.settings.selector && this.settings.selector.substring(0, 5) == "data-" ? "*[".concat(this.settings.selector, "]") : this.settings.selector);
          } }, { key: "getActiveSlide", value: function() {
            return this.slidesContainer.querySelectorAll(".gslide")[this.index];
          } }, { key: "getActiveSlideIndex", value: function() {
            return this.index;
          } }, { key: "getAnimationClasses", value: function() {
            var e3 = [];
            for (var t2 in this.settings.cssEfects)
              if (this.settings.cssEfects.hasOwnProperty(t2)) {
                var i2 = this.settings.cssEfects[t2];
                e3.push("g".concat(i2.in)), e3.push("g".concat(i2.out));
              }
            return e3.join(" ");
          } }, { key: "build", value: function() {
            var e3 = this;
            if (this.built)
              return false;
            var t2 = M(this.settings.svg, "next") ? this.settings.svg.next : "", i2 = M(this.settings.svg, "prev") ? this.settings.svg.prev : "", n2 = M(this.settings.svg, "close") ? this.settings.svg.close : "", s2 = this.settings.lightboxHTML;
            s2 = x(s2 = (s2 = (s2 = s2.replace(/{nextSVG}/g, t2)).replace(/{prevSVG}/g, i2)).replace(/{closeSVG}/g, n2)), document.body.appendChild(s2);
            var l2 = document.getElementById("glightbox-body");
            this.modal = l2;
            var o2 = l2.querySelector(".gclose");
            this.prevButton = l2.querySelector(".gprev"), this.nextButton = l2.querySelector(".gnext"), this.overlay = l2.querySelector(".goverlay"), this.loader = l2.querySelector(".gloader"), this.slidesContainer = document.getElementById("glightbox-slider"), this.events = {}, d(this.modal, "glightbox-" + this.settings.skin), this.settings.closeButton && o2 && (this.events.close = c("click", { onElement: o2, withCallback: function(t3, i3) {
              t3.preventDefault(), e3.close();
            } })), o2 && !this.settings.closeButton && o2.parentNode.removeChild(o2), this.nextButton && (this.events.next = c("click", { onElement: this.nextButton, withCallback: function(t3, i3) {
              t3.preventDefault(), e3.nextSlide();
            } })), this.prevButton && (this.events.prev = c("click", { onElement: this.prevButton, withCallback: function(t3, i3) {
              t3.preventDefault(), e3.prevSlide();
            } })), this.settings.closeOnOutsideClick && (this.events.outClose = c("click", { onElement: l2, withCallback: function(t3, i3) {
              e3.preventOutsideClick || g(document.body, "glightbox-mobile") || v(t3.target, ".ginner-container") || v(t3.target, ".gbtn") || g(t3.target, "gnext") || g(t3.target, "gprev") || e3.close();
            } })), a(this.elements, function(t3, i3) {
              e3.slidesContainer.appendChild(t3.instance.create()), t3.slideNode = e3.slidesContainer.querySelectorAll(".gslide")[i3];
            }), Q && d(document.body, "glightbox-touch"), this.events.resize = c("resize", { onElement: window, withCallback: function() {
              e3.resize();
            } }), this.built = true;
          } }, { key: "resize", value: function() {
            var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
            if ((e3 = e3 || this.activeSlide) && !g(e3, "zoomed")) {
              var t2 = b(), i2 = e3.querySelector(".gvideo-wrapper"), n2 = e3.querySelector(".gslide-image"), s2 = this.slideDescription, l2 = t2.width, o2 = t2.height;
              if (l2 <= 768 ? d(document.body, "glightbox-mobile") : u(document.body, "glightbox-mobile"), i2 || n2) {
                var r2 = false;
                if (s2 && (g(s2, "description-bottom") || g(s2, "description-top")) && !g(s2, "gabsolute") && (r2 = true), n2) {
                  if (l2 <= 768) {
                    var a2 = n2.querySelector("img");
                    a2.setAttribute("style", "");
                  } else if (r2) {
                    var h2 = s2.offsetHeight, c2 = n2.querySelector("img");
                    c2.setAttribute("style", "max-height: calc(100vh - ".concat(h2, "px)")), s2.setAttribute("style", "max-width: ".concat(c2.offsetWidth, "px;"));
                  }
                }
                if (i2) {
                  var v2 = M(this.settings.plyr.config, "ratio") ? this.settings.plyr.config.ratio : "16:9", f2 = v2.split(":"), p2 = 900, m2 = p2 / (parseInt(f2[0]) / parseInt(f2[1]));
                  if (m2 = Math.floor(m2), r2 && (o2 -= s2.offsetHeight), o2 < m2 && l2 > p2) {
                    var y2 = i2.offsetWidth, x2 = i2.offsetHeight, S2 = o2 / x2, w2 = { width: y2 * S2, height: x2 * S2 };
                    i2.parentNode.setAttribute("style", "max-width: ".concat(w2.width, "px")), r2 && s2.setAttribute("style", "max-width: ".concat(w2.width, "px;"));
                  } else
                    i2.parentNode.style.maxWidth = "".concat(p2, "px"), r2 && s2.setAttribute("style", "max-width: ".concat(p2, "px;"));
                }
              }
            }
          } }, { key: "reload", value: function() {
            this.init();
          } }, { key: "updateNavigationClasses", value: function() {
            var e3 = this.loop();
            u(this.nextButton, "disabled"), u(this.prevButton, "disabled"), this.index == 0 && this.elements.length - 1 == 0 ? (d(this.prevButton, "disabled"), d(this.nextButton, "disabled")) : this.index !== 0 || e3 ? this.index !== this.elements.length - 1 || e3 || d(this.nextButton, "disabled") : d(this.prevButton, "disabled");
          } }, { key: "loop", value: function() {
            var e3 = M(this.settings, "loopAtEnd") ? this.settings.loopAtEnd : null;
            return e3 = M(this.settings, "loop") ? this.settings.loop : e3, e3;
          } }, { key: "close", value: function() {
            var e3 = this;
            if (!this.lightboxOpen) {
              if (this.events) {
                for (var t2 in this.events)
                  this.events.hasOwnProperty(t2) && this.events[t2].destroy();
                this.events = null;
              }
              return false;
            }
            if (this.closing)
              return false;
            this.closing = true, this.slidePlayerPause(this.activeSlide), this.fullElementsList && (this.elements = this.fullElementsList), d(this.modal, "glightbox-closing"), f(this.overlay, this.settings.openEffect == "none" ? "none" : this.settings.cssEfects.fade.out), f(this.activeSlide, this.settings.cssEfects[this.settings.closeEffect].out, function() {
              if (e3.activeSlide = null, e3.prevActiveSlideIndex = null, e3.prevActiveSlide = null, e3.built = false, e3.events) {
                for (var t3 in e3.events)
                  e3.events.hasOwnProperty(t3) && e3.events[t3].destroy();
                e3.events = null;
              }
              var i2 = document.body;
              u(ee, "glightbox-open"), u(i2, "glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"), e3.modal.parentNode.removeChild(e3.modal), e3.trigger("close"), C(e3.settings.onClose) && e3.settings.onClose();
              var n2 = document.querySelector(".gcss-styles");
              n2 && n2.parentNode.removeChild(n2), e3.lightboxOpen = false, e3.closing = null;
            });
          } }, { key: "destroy", value: function() {
            this.close(), this.clearAllEvents(), this.baseEvents && this.baseEvents.destroy();
          } }, { key: "on", value: function(e3, t2) {
            var i2 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
            if (!e3 || !C(t2))
              throw new TypeError("Event name and callback must be defined");
            this.apiEvents.push({ evt: e3, once: i2, callback: t2 });
          } }, { key: "once", value: function(e3, t2) {
            this.on(e3, t2, true);
          } }, { key: "trigger", value: function(e3) {
            var t2 = this, i2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n2 = [];
            a(this.apiEvents, function(t3, s2) {
              var l2 = t3.evt, o2 = t3.once, r2 = t3.callback;
              l2 == e3 && (r2(i2), o2 && n2.push(s2));
            }), n2.length && a(n2, function(e4) {
              return t2.apiEvents.splice(e4, 1);
            });
          } }, { key: "clearAllEvents", value: function() {
            this.apiEvents.splice(0, this.apiEvents.length);
          } }, { key: "version", value: function() {
            return "3.0.5";
          } }]), e2;
        }();
        return function() {
          var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t2 = new ie(e2);
          return t2.init(), t2;
        };
      });
    }
  });

  // js/custom.js
  (function() {
    "use strict";
    AOS.init({
      duration: 800,
      easing: "slide",
      once: true
    });
    var preloader = function() {
      var loader = document.querySelector(".loader");
      var overlay = document.getElementById("overlayer");
      function fadeOut(el) {
        el.style.opacity = 1;
        (function fade() {
          if ((el.style.opacity -= 0.1) < 0) {
            el.style.display = "none";
          } else {
            requestAnimationFrame(fade);
          }
        })();
      }
      window.onload = function() {
        fadeOut(loader);
        fadeOut(overlay);
      };
      setTimeout(function() {
        fadeOut(loader);
        fadeOut(overlay);
      }, 200);
    };
    preloader();
    var lightbox = function() {
      var lightboxVideo = GLightbox({
        selector: ".glightbox"
      });
    };
    lightbox();
  })();
  var cards = document.getElementById("all-cards");
  var marketing = document.getElementById("marketing");
  var design = document.getElementById("design");
  var develop = document.getElementById("develop");
  var uiux = document.getElementById("uiux");
  var hideCards = function() {
    marketing.style.display = "none";
    design.style.display = "none";
    develop.style.display = "none";
    uiux.style.display = "none";
  };
  hideCards();
  window.onload = function() {
    var msnry = new Masonry(".masonry_container", {});
  };

  // js/counter.js
  (function() {
    "use trict";
    const animationDuration = 2e3;
    const frameDuration = 1e3 / 60;
    const totalFrames = Math.round(animationDuration / frameDuration);
    const easeOutQuad = (t) => t * (2 - t);
    const numberWithCommas = (n) => {
      return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    const animateCountUp = (el) => {
      let frame = 0;
      const countTo = parseInt(el.innerHTML, 10);
      const counter = setInterval(() => {
        frame++;
        const progress = easeOutQuad(frame / totalFrames);
        const currentCount = Math.round(countTo * progress);
        if (parseInt(el.innerHTML, 10) !== currentCount) {
          el.innerHTML = numberWithCommas(currentCount);
        }
        if (frame === totalFrames) {
          clearInterval(counter);
        }
      }, frameDuration);
    };
    const runAnimations = () => {
      const countupEls = document.querySelectorAll(".countup");
      countupEls.forEach(animateCountUp);
    };
    var elements;
    var windowHeight;
    function init() {
      elements = document.querySelectorAll(".section-counter");
      windowHeight = window.innerHeight;
    }
    function checkPosition() {
      var i;
      for (i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= 0) {
          if (!element.classList.contains("viewed")) {
            element.classList.add("viewed");
            runAnimations();
          } else {
            if (element.classList.contains("viewed")) {
            }
          }
        }
      }
    }
    window.addEventListener("scroll", checkPosition);
    window.addEventListener("resize", init);
    init();
    checkPosition();
  })();

  // js/navbar.js
  (function() {
    "use strict";
    var siteMenuClone = function() {
      var jsCloneNavs = document.querySelectorAll(".js-clone-nav");
      var siteMobileMenuBody = document.querySelector(".site-mobile-menu-body");
      jsCloneNavs.forEach((nav) => {
        var navCloned = nav.cloneNode(true);
        navCloned.setAttribute("class", "site-nav-wrap");
        siteMobileMenuBody.appendChild(navCloned);
      });
      setTimeout(function() {
        var hasChildrens = document.querySelector(".site-mobile-menu").querySelectorAll(" .has-children");
        var counter = 0;
        hasChildrens.forEach((hasChild) => {
          var refEl = hasChild.querySelector("a");
          var newElSpan = document.createElement("span");
          newElSpan.setAttribute("class", "arrow-collapse collapsed");
          hasChild.insertBefore(newElSpan, refEl);
          var arrowCollapse = hasChild.querySelector(".arrow-collapse");
          arrowCollapse.setAttribute("data-bs-toggle", "collapse");
          arrowCollapse.setAttribute("data-bs-target", "#collapseItem" + counter);
          var dropdown = hasChild.querySelector(".dropdown");
          dropdown.setAttribute("class", "collapse");
          dropdown.setAttribute("id", "collapseItem" + counter);
          counter++;
        });
      }, 1e3);
      var menuToggle = document.querySelectorAll(".js-menu-toggle");
      var mTog;
      menuToggle.forEach((mtoggle) => {
        mTog = mtoggle;
        mtoggle.addEventListener("click", (e) => {
          if (document.body.classList.contains("offcanvas-menu")) {
            document.body.classList.remove("offcanvas-menu");
            mtoggle.classList.remove("active");
            mTog.classList.remove("active");
          } else {
            document.body.classList.add("offcanvas-menu");
            mtoggle.classList.add("active");
            mTog.classList.add("active");
          }
        });
      });
      var specifiedElement = document.querySelector(".site-mobile-menu");
      var mt, mtoggleTemp;
      document.addEventListener("click", function(event) {
        var isClickInside = specifiedElement.contains(event.target);
        menuToggle.forEach((mtoggle) => {
          mtoggleTemp = mtoggle;
          mt = mtoggle.contains(event.target);
        });
        if (!isClickInside && !mt) {
          if (document.body.classList.contains("offcanvas-menu")) {
            document.body.classList.remove("offcanvas-menu");
            mtoggleTemp.classList.remove("active");
          }
        }
      });
    };
    siteMenuClone();
  })();

  // js/tiny-slider.js
  var tns = function() {
    var win = window;
    var raf = win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.msRequestAnimationFrame || function(cb) {
      return setTimeout(cb, 16);
    };
    var win$1 = window;
    var caf = win$1.cancelAnimationFrame || win$1.mozCancelAnimationFrame || function(id) {
      clearTimeout(id);
    };
    function extend() {
      var obj, name, copy, target = arguments[0] || {}, i = 1, length = arguments.length;
      for (; i < length; i++) {
        if ((obj = arguments[i]) !== null) {
          for (name in obj) {
            copy = obj[name];
            if (target === copy) {
              continue;
            } else if (copy !== void 0) {
              target[name] = copy;
            }
          }
        }
      }
      return target;
    }
    function checkStorageValue(value) {
      return ["true", "false"].indexOf(value) >= 0 ? JSON.parse(value) : value;
    }
    function setLocalStorage(storage, key, value, access) {
      if (access) {
        try {
          storage.setItem(key, value);
        } catch (e) {
        }
      }
      return value;
    }
    function getSlideId() {
      var id = window.tnsId;
      window.tnsId = !id ? 1 : id + 1;
      return "tns" + window.tnsId;
    }
    function getBody() {
      var doc = document, body = doc.body;
      if (!body) {
        body = doc.createElement("body");
        body.fake = true;
      }
      return body;
    }
    var docElement = document.documentElement;
    function setFakeBody(body) {
      var docOverflow = "";
      if (body.fake) {
        docOverflow = docElement.style.overflow;
        body.style.background = "";
        body.style.overflow = docElement.style.overflow = "hidden";
        docElement.appendChild(body);
      }
      return docOverflow;
    }
    function resetFakeBody(body, docOverflow) {
      if (body.fake) {
        body.remove();
        docElement.style.overflow = docOverflow;
        docElement.offsetHeight;
      }
    }
    function calc() {
      var doc = document, body = getBody(), docOverflow = setFakeBody(body), div = doc.createElement("div"), result = false;
      body.appendChild(div);
      try {
        var str = "(10px * 10)", vals = ["calc" + str, "-moz-calc" + str, "-webkit-calc" + str], val;
        for (var i = 0; i < 3; i++) {
          val = vals[i];
          div.style.width = val;
          if (div.offsetWidth === 100) {
            result = val.replace(str, "");
            break;
          }
        }
      } catch (e) {
      }
      body.fake ? resetFakeBody(body, docOverflow) : div.remove();
      return result;
    }
    function percentageLayout() {
      var doc = document, body = getBody(), docOverflow = setFakeBody(body), wrapper = doc.createElement("div"), outer = doc.createElement("div"), str = "", count = 70, perPage = 3, supported = false;
      wrapper.className = "tns-t-subp2";
      outer.className = "tns-t-ct";
      for (var i = 0; i < count; i++) {
        str += "<div></div>";
      }
      outer.innerHTML = str;
      wrapper.appendChild(outer);
      body.appendChild(wrapper);
      supported = Math.abs(wrapper.getBoundingClientRect().left - outer.children[count - perPage].getBoundingClientRect().left) < 2;
      body.fake ? resetFakeBody(body, docOverflow) : wrapper.remove();
      return supported;
    }
    function mediaquerySupport() {
      if (window.matchMedia || window.msMatchMedia) {
        return true;
      }
      var doc = document, body = getBody(), docOverflow = setFakeBody(body), div = doc.createElement("div"), style = doc.createElement("style"), rule = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}", position;
      style.type = "text/css";
      div.className = "tns-mq-test";
      body.appendChild(style);
      body.appendChild(div);
      if (style.styleSheet) {
        style.styleSheet.cssText = rule;
      } else {
        style.appendChild(doc.createTextNode(rule));
      }
      position = window.getComputedStyle ? window.getComputedStyle(div).position : div.currentStyle["position"];
      body.fake ? resetFakeBody(body, docOverflow) : div.remove();
      return position === "absolute";
    }
    function createStyleSheet(media, nonce) {
      var style = document.createElement("style");
      if (media) {
        style.setAttribute("media", media);
      }
      if (nonce) {
        style.setAttribute("nonce", nonce);
      }
      document.querySelector("head").appendChild(style);
      return style.sheet ? style.sheet : style.styleSheet;
    }
    function addCSSRule(sheet, selector, rules, index) {
      "insertRule" in sheet ? sheet.insertRule(selector + "{" + rules + "}", index) : sheet.addRule(selector, rules, index);
    }
    function removeCSSRule(sheet, index) {
      "deleteRule" in sheet ? sheet.deleteRule(index) : sheet.removeRule(index);
    }
    function getCssRulesLength(sheet) {
      var rule = "insertRule" in sheet ? sheet.cssRules : sheet.rules;
      return rule.length;
    }
    function toDegree(y, x) {
      return Math.atan2(y, x) * (180 / Math.PI);
    }
    function getTouchDirection(angle, range) {
      var direction = false, gap = Math.abs(90 - Math.abs(angle));
      if (gap >= 90 - range) {
        direction = "horizontal";
      } else if (gap <= range) {
        direction = "vertical";
      }
      return direction;
    }
    function forEach(arr, callback, scope) {
      for (var i = 0, l = arr.length; i < l; i++) {
        callback.call(scope, arr[i], i);
      }
    }
    var classListSupport = "classList" in document.createElement("_");
    var hasClass = classListSupport ? function(el, str) {
      return el.classList.contains(str);
    } : function(el, str) {
      return el.className.indexOf(str) >= 0;
    };
    var addClass = classListSupport ? function(el, str) {
      if (!hasClass(el, str)) {
        el.classList.add(str);
      }
    } : function(el, str) {
      if (!hasClass(el, str)) {
        el.className += " " + str;
      }
    };
    var removeClass = classListSupport ? function(el, str) {
      if (hasClass(el, str)) {
        el.classList.remove(str);
      }
    } : function(el, str) {
      if (hasClass(el, str)) {
        el.className = el.className.replace(str, "");
      }
    };
    function hasAttr(el, attr) {
      return el.hasAttribute(attr);
    }
    function getAttr(el, attr) {
      return el.getAttribute(attr);
    }
    function isNodeList(el) {
      return typeof el.item !== "undefined";
    }
    function setAttrs(els, attrs) {
      els = isNodeList(els) || els instanceof Array ? els : [els];
      if (Object.prototype.toString.call(attrs) !== "[object Object]") {
        return;
      }
      for (var i = els.length; i--; ) {
        for (var key in attrs) {
          els[i].setAttribute(key, attrs[key]);
        }
      }
    }
    function removeAttrs(els, attrs) {
      els = isNodeList(els) || els instanceof Array ? els : [els];
      attrs = attrs instanceof Array ? attrs : [attrs];
      var attrLength = attrs.length;
      for (var i = els.length; i--; ) {
        for (var j = attrLength; j--; ) {
          els[i].removeAttribute(attrs[j]);
        }
      }
    }
    function arrayFromNodeList(nl) {
      var arr = [];
      for (var i = 0, l = nl.length; i < l; i++) {
        arr.push(nl[i]);
      }
      return arr;
    }
    function hideElement(el, forceHide) {
      if (el.style.display !== "none") {
        el.style.display = "none";
      }
    }
    function showElement(el, forceHide) {
      if (el.style.display === "none") {
        el.style.display = "";
      }
    }
    function isVisible(el) {
      return window.getComputedStyle(el).display !== "none";
    }
    function whichProperty(props) {
      if (typeof props === "string") {
        var arr = [props], Props = props.charAt(0).toUpperCase() + props.substr(1), prefixes = ["Webkit", "Moz", "ms", "O"];
        prefixes.forEach(function(prefix) {
          if (prefix !== "ms" || props === "transform") {
            arr.push(prefix + Props);
          }
        });
        props = arr;
      }
      var el = document.createElement("fakeelement"), len = props.length;
      for (var i = 0; i < props.length; i++) {
        var prop = props[i];
        if (el.style[prop] !== void 0) {
          return prop;
        }
      }
      return false;
    }
    function has3DTransforms(tf) {
      if (!tf) {
        return false;
      }
      if (!window.getComputedStyle) {
        return false;
      }
      var doc = document, body = getBody(), docOverflow = setFakeBody(body), el = doc.createElement("p"), has3d, cssTF = tf.length > 9 ? "-" + tf.slice(0, -9).toLowerCase() + "-" : "";
      cssTF += "transform";
      body.insertBefore(el, null);
      el.style[tf] = "translate3d(1px,1px,1px)";
      has3d = window.getComputedStyle(el).getPropertyValue(cssTF);
      body.fake ? resetFakeBody(body, docOverflow) : el.remove();
      return has3d !== void 0 && has3d.length > 0 && has3d !== "none";
    }
    function getEndProperty(propIn, propOut) {
      var endProp = false;
      if (/^Webkit/.test(propIn)) {
        endProp = "webkit" + propOut + "End";
      } else if (/^O/.test(propIn)) {
        endProp = "o" + propOut + "End";
      } else if (propIn) {
        endProp = propOut.toLowerCase() + "end";
      }
      return endProp;
    }
    var supportsPassive = false;
    try {
      var opts = Object.defineProperty({}, "passive", {
        get: function() {
          supportsPassive = true;
        }
      });
      window.addEventListener("test", null, opts);
    } catch (e) {
    }
    var passiveOption = supportsPassive ? { passive: true } : false;
    function addEvents(el, obj, preventScrolling) {
      for (var prop in obj) {
        var option = ["touchstart", "touchmove"].indexOf(prop) >= 0 && !preventScrolling ? passiveOption : false;
        el.addEventListener(prop, obj[prop], option);
      }
    }
    function removeEvents(el, obj) {
      for (var prop in obj) {
        var option = ["touchstart", "touchmove"].indexOf(prop) >= 0 ? passiveOption : false;
        el.removeEventListener(prop, obj[prop], option);
      }
    }
    function Events() {
      return {
        topics: {},
        on: function(eventName, fn) {
          this.topics[eventName] = this.topics[eventName] || [];
          this.topics[eventName].push(fn);
        },
        off: function(eventName, fn) {
          if (this.topics[eventName]) {
            for (var i = 0; i < this.topics[eventName].length; i++) {
              if (this.topics[eventName][i] === fn) {
                this.topics[eventName].splice(i, 1);
                break;
              }
            }
          }
        },
        emit: function(eventName, data) {
          data.type = eventName;
          if (this.topics[eventName]) {
            this.topics[eventName].forEach(function(fn) {
              fn(data, eventName);
            });
          }
        }
      };
    }
    function jsTransform(element, attr, prefix, postfix, to, duration, callback) {
      var tick = Math.min(duration, 10), unit = to.indexOf("%") >= 0 ? "%" : "px", to = to.replace(unit, ""), from = Number(element.style[attr].replace(prefix, "").replace(postfix, "").replace(unit, "")), positionTick = (to - from) / duration * tick, running;
      setTimeout(moveElement, tick);
      function moveElement() {
        duration -= tick;
        from += positionTick;
        element.style[attr] = prefix + from + unit + postfix;
        if (duration > 0) {
          setTimeout(moveElement, tick);
        } else {
          callback();
        }
      }
    }
    if (!Object.keys) {
      Object.keys = function(object) {
        var keys = [];
        for (var name in object) {
          if (Object.prototype.hasOwnProperty.call(object, name)) {
            keys.push(name);
          }
        }
        return keys;
      };
    }
    if (!("remove" in Element.prototype)) {
      Element.prototype.remove = function() {
        if (this.parentNode) {
          this.parentNode.removeChild(this);
        }
      };
    }
    var tns2 = function(options) {
      options = extend({
        container: ".slider",
        mode: "carousel",
        axis: "horizontal",
        items: 1,
        gutter: 0,
        edgePadding: 0,
        fixedWidth: false,
        autoWidth: false,
        viewportMax: false,
        slideBy: 1,
        center: false,
        controls: true,
        controlsPosition: "top",
        controlsText: ["prev", "next"],
        controlsContainer: false,
        prevButton: false,
        nextButton: false,
        nav: true,
        navPosition: "top",
        navContainer: false,
        navAsThumbnails: false,
        arrowKeys: false,
        speed: 300,
        autoplay: false,
        autoplayPosition: "top",
        autoplayTimeout: 5e3,
        autoplayDirection: "forward",
        autoplayText: ["start", "stop"],
        autoplayHoverPause: false,
        autoplayButton: false,
        autoplayButtonOutput: true,
        autoplayResetOnVisibility: true,
        animateIn: "tns-fadeIn",
        animateOut: "tns-fadeOut",
        animateNormal: "tns-normal",
        animateDelay: false,
        loop: true,
        rewind: false,
        autoHeight: false,
        responsive: false,
        lazyload: false,
        lazyloadSelector: ".tns-lazy-img",
        touch: true,
        mouseDrag: false,
        swipeAngle: 15,
        nested: false,
        preventActionWhenRunning: false,
        preventScrollOnTouch: false,
        freezable: true,
        onInit: false,
        useLocalStorage: true,
        nonce: false
      }, options || {});
      var doc = document, win2 = window, KEYS = {
        ENTER: 13,
        SPACE: 32,
        LEFT: 37,
        RIGHT: 39
      }, tnsStorage = {}, localStorageAccess = options.useLocalStorage;
      if (localStorageAccess) {
        var browserInfo = navigator.userAgent;
        var uid = new Date();
        try {
          tnsStorage = win2.localStorage;
          if (tnsStorage) {
            tnsStorage.setItem(uid, uid);
            localStorageAccess = tnsStorage.getItem(uid) == uid;
            tnsStorage.removeItem(uid);
          } else {
            localStorageAccess = false;
          }
          if (!localStorageAccess) {
            tnsStorage = {};
          }
        } catch (e) {
          localStorageAccess = false;
        }
        if (localStorageAccess) {
          if (tnsStorage["tnsApp"] && tnsStorage["tnsApp"] !== browserInfo) {
            ["tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach(function(item) {
              tnsStorage.removeItem(item);
            });
          }
          localStorage["tnsApp"] = browserInfo;
        }
      }
      var CALC = tnsStorage["tC"] ? checkStorageValue(tnsStorage["tC"]) : setLocalStorage(tnsStorage, "tC", calc(), localStorageAccess), PERCENTAGELAYOUT = tnsStorage["tPL"] ? checkStorageValue(tnsStorage["tPL"]) : setLocalStorage(tnsStorage, "tPL", percentageLayout(), localStorageAccess), CSSMQ = tnsStorage["tMQ"] ? checkStorageValue(tnsStorage["tMQ"]) : setLocalStorage(tnsStorage, "tMQ", mediaquerySupport(), localStorageAccess), TRANSFORM = tnsStorage["tTf"] ? checkStorageValue(tnsStorage["tTf"]) : setLocalStorage(tnsStorage, "tTf", whichProperty("transform"), localStorageAccess), HAS3DTRANSFORMS = tnsStorage["t3D"] ? checkStorageValue(tnsStorage["t3D"]) : setLocalStorage(tnsStorage, "t3D", has3DTransforms(TRANSFORM), localStorageAccess), TRANSITIONDURATION = tnsStorage["tTDu"] ? checkStorageValue(tnsStorage["tTDu"]) : setLocalStorage(tnsStorage, "tTDu", whichProperty("transitionDuration"), localStorageAccess), TRANSITIONDELAY = tnsStorage["tTDe"] ? checkStorageValue(tnsStorage["tTDe"]) : setLocalStorage(tnsStorage, "tTDe", whichProperty("transitionDelay"), localStorageAccess), ANIMATIONDURATION = tnsStorage["tADu"] ? checkStorageValue(tnsStorage["tADu"]) : setLocalStorage(tnsStorage, "tADu", whichProperty("animationDuration"), localStorageAccess), ANIMATIONDELAY = tnsStorage["tADe"] ? checkStorageValue(tnsStorage["tADe"]) : setLocalStorage(tnsStorage, "tADe", whichProperty("animationDelay"), localStorageAccess), TRANSITIONEND = tnsStorage["tTE"] ? checkStorageValue(tnsStorage["tTE"]) : setLocalStorage(tnsStorage, "tTE", getEndProperty(TRANSITIONDURATION, "Transition"), localStorageAccess), ANIMATIONEND = tnsStorage["tAE"] ? checkStorageValue(tnsStorage["tAE"]) : setLocalStorage(tnsStorage, "tAE", getEndProperty(ANIMATIONDURATION, "Animation"), localStorageAccess);
      var supportConsoleWarn = win2.console && typeof win2.console.warn === "function", tnsList = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"], optionsElements = {};
      tnsList.forEach(function(item) {
        if (typeof options[item] === "string") {
          var str = options[item], el = doc.querySelector(str);
          optionsElements[item] = str;
          if (el && el.nodeName) {
            options[item] = el;
          } else {
            if (supportConsoleWarn) {
              console.warn("Can't find", options[item]);
            }
            return;
          }
        }
      });
      if (options.container.children.length < 1) {
        if (supportConsoleWarn) {
          console.warn("No slides found in", options.container);
        }
        return;
      }
      var responsive = options.responsive, nested = options.nested, carousel = options.mode === "carousel" ? true : false;
      if (responsive) {
        if (0 in responsive) {
          options = extend(options, responsive[0]);
          delete responsive[0];
        }
        var responsiveTem = {};
        for (var key in responsive) {
          var val = responsive[key];
          val = typeof val === "number" ? { items: val } : val;
          responsiveTem[key] = val;
        }
        responsive = responsiveTem;
        responsiveTem = null;
      }
      function updateOptions(obj) {
        for (var key2 in obj) {
          if (!carousel) {
            if (key2 === "slideBy") {
              obj[key2] = "page";
            }
            if (key2 === "edgePadding") {
              obj[key2] = false;
            }
            if (key2 === "autoHeight") {
              obj[key2] = false;
            }
          }
          if (key2 === "responsive") {
            updateOptions(obj[key2]);
          }
        }
      }
      if (!carousel) {
        updateOptions(options);
      }
      if (!carousel) {
        options.axis = "horizontal";
        options.slideBy = "page";
        options.edgePadding = false;
        var animateIn = options.animateIn, animateOut = options.animateOut, animateDelay = options.animateDelay, animateNormal = options.animateNormal;
      }
      var horizontal = options.axis === "horizontal" ? true : false, outerWrapper = doc.createElement("div"), innerWrapper = doc.createElement("div"), middleWrapper, container = options.container, containerParent = container.parentNode, containerHTML = container.outerHTML, slideItems = container.children, slideCount = slideItems.length, breakpointZone, windowWidth = getWindowWidth(), isOn = false;
      if (responsive) {
        setBreakpointZone();
      }
      if (carousel) {
        container.className += " tns-vpfix";
      }
      var autoWidth = options.autoWidth, fixedWidth = getOption("fixedWidth"), edgePadding = getOption("edgePadding"), gutter = getOption("gutter"), viewport = getViewportWidth(), center = getOption("center"), items = !autoWidth ? Math.floor(getOption("items")) : 1, slideBy = getOption("slideBy"), viewportMax = options.viewportMax || options.fixedWidthViewportWidth, arrowKeys = getOption("arrowKeys"), speed = getOption("speed"), rewind = options.rewind, loop = rewind ? false : options.loop, autoHeight = getOption("autoHeight"), controls = getOption("controls"), controlsText = getOption("controlsText"), nav = getOption("nav"), touch = getOption("touch"), mouseDrag = getOption("mouseDrag"), autoplay = getOption("autoplay"), autoplayTimeout = getOption("autoplayTimeout"), autoplayText = getOption("autoplayText"), autoplayHoverPause = getOption("autoplayHoverPause"), autoplayResetOnVisibility = getOption("autoplayResetOnVisibility"), sheet = createStyleSheet(null, getOption("nonce")), lazyload = options.lazyload, lazyloadSelector = options.lazyloadSelector, slidePositions, slideItemsOut = [], cloneCount = loop ? getCloneCountForLoop() : 0, slideCountNew = !carousel ? slideCount + cloneCount : slideCount + cloneCount * 2, hasRightDeadZone = (fixedWidth || autoWidth) && !loop ? true : false, rightBoundary = fixedWidth ? getRightBoundary() : null, updateIndexBeforeTransform = !carousel || !loop ? true : false, transformAttr = horizontal ? "left" : "top", transformPrefix = "", transformPostfix = "", getIndexMax = function() {
        if (fixedWidth) {
          return function() {
            return center && !loop ? slideCount - 1 : Math.ceil(-rightBoundary / (fixedWidth + gutter));
          };
        } else if (autoWidth) {
          return function() {
            for (var i = 0; i < slideCountNew; i++) {
              if (slidePositions[i] >= -rightBoundary) {
                return i;
              }
            }
          };
        } else {
          return function() {
            if (center && carousel && !loop) {
              return slideCount - 1;
            } else {
              return loop || carousel ? Math.max(0, slideCountNew - Math.ceil(items)) : slideCountNew - 1;
            }
          };
        }
      }(), index = getStartIndex(getOption("startIndex")), indexCached = index, displayIndex = getCurrentSlide(), indexMin = 0, indexMax = !autoWidth ? getIndexMax() : null, resizeTimer, preventActionWhenRunning = options.preventActionWhenRunning, swipeAngle = options.swipeAngle, moveDirectionExpected = swipeAngle ? "?" : true, running = false, onInit = options.onInit, events = new Events(), newContainerClasses = " tns-slider tns-" + options.mode, slideId = container.id || getSlideId(), disable = getOption("disable"), disabled = false, freezable = options.freezable, freeze = freezable && !autoWidth ? getFreeze() : false, frozen = false, controlsEvents = {
        "click": onControlsClick,
        "keydown": onControlsKeydown
      }, navEvents = {
        "click": onNavClick,
        "keydown": onNavKeydown
      }, hoverEvents = {
        "mouseover": mouseoverPause,
        "mouseout": mouseoutRestart
      }, visibilityEvent = { "visibilitychange": onVisibilityChange }, docmentKeydownEvent = { "keydown": onDocumentKeydown }, touchEvents = {
        "touchstart": onPanStart,
        "touchmove": onPanMove,
        "touchend": onPanEnd,
        "touchcancel": onPanEnd
      }, dragEvents = {
        "mousedown": onPanStart,
        "mousemove": onPanMove,
        "mouseup": onPanEnd,
        "mouseleave": onPanEnd
      }, hasControls = hasOption("controls"), hasNav = hasOption("nav"), navAsThumbnails = autoWidth ? true : options.navAsThumbnails, hasAutoplay = hasOption("autoplay"), hasTouch = hasOption("touch"), hasMouseDrag = hasOption("mouseDrag"), slideActiveClass = "tns-slide-active", slideClonedClass = "tns-slide-cloned", imgCompleteClass = "tns-complete", imgEvents = {
        "load": onImgLoaded,
        "error": onImgFailed
      }, imgsComplete, liveregionCurrent, preventScroll = options.preventScrollOnTouch === "force" ? true : false;
      if (hasControls) {
        var controlsContainer = options.controlsContainer, controlsContainerHTML = options.controlsContainer ? options.controlsContainer.outerHTML : "", prevButton = options.prevButton, nextButton = options.nextButton, prevButtonHTML = options.prevButton ? options.prevButton.outerHTML : "", nextButtonHTML = options.nextButton ? options.nextButton.outerHTML : "", prevIsButton, nextIsButton;
      }
      if (hasNav) {
        var navContainer = options.navContainer, navContainerHTML = options.navContainer ? options.navContainer.outerHTML : "", navItems, pages = autoWidth ? slideCount : getPages(), pagesCached = 0, navClicked = -1, navCurrentIndex = getCurrentNavIndex(), navCurrentIndexCached = navCurrentIndex, navActiveClass = "tns-nav-active", navStr = "Carousel Page ", navStrCurrent = " (Current Slide)";
      }
      if (hasAutoplay) {
        var autoplayDirection = options.autoplayDirection === "forward" ? 1 : -1, autoplayButton = options.autoplayButton, autoplayButtonHTML = options.autoplayButton ? options.autoplayButton.outerHTML : "", autoplayHtmlStrings = ["<span class='tns-visually-hidden'>", " animation</span>"], autoplayTimer, animating, autoplayHoverPaused, autoplayUserPaused, autoplayVisibilityPaused;
      }
      if (hasTouch || hasMouseDrag) {
        var initPosition = {}, lastPosition = {}, translateInit, disX, disY, panStart = false, rafIndex, getDist = horizontal ? function(a, b) {
          return a.x - b.x;
        } : function(a, b) {
          return a.y - b.y;
        };
      }
      if (!autoWidth) {
        resetVariblesWhenDisable(disable || freeze);
      }
      if (TRANSFORM) {
        transformAttr = TRANSFORM;
        transformPrefix = "translate";
        if (HAS3DTRANSFORMS) {
          transformPrefix += horizontal ? "3d(" : "3d(0px, ";
          transformPostfix = horizontal ? ", 0px, 0px)" : ", 0px)";
        } else {
          transformPrefix += horizontal ? "X(" : "Y(";
          transformPostfix = ")";
        }
      }
      if (carousel) {
        container.className = container.className.replace("tns-vpfix", "");
      }
      initStructure();
      initSheet();
      initSliderTransform();
      function resetVariblesWhenDisable(condition) {
        if (condition) {
          controls = nav = touch = mouseDrag = arrowKeys = autoplay = autoplayHoverPause = autoplayResetOnVisibility = false;
        }
      }
      function getCurrentSlide() {
        var tem = carousel ? index - cloneCount : index;
        while (tem < 0) {
          tem += slideCount;
        }
        return tem % slideCount + 1;
      }
      function getStartIndex(ind) {
        ind = ind ? Math.max(0, Math.min(loop ? slideCount - 1 : slideCount - items, ind)) : 0;
        return carousel ? ind + cloneCount : ind;
      }
      function getAbsIndex(i) {
        if (i == null) {
          i = index;
        }
        if (carousel) {
          i -= cloneCount;
        }
        while (i < 0) {
          i += slideCount;
        }
        return Math.floor(i % slideCount);
      }
      function getCurrentNavIndex() {
        var absIndex = getAbsIndex(), result;
        result = navAsThumbnails ? absIndex : fixedWidth || autoWidth ? Math.ceil((absIndex + 1) * pages / slideCount - 1) : Math.floor(absIndex / items);
        if (!loop && carousel && index === indexMax) {
          result = pages - 1;
        }
        return result;
      }
      function getItemsMax() {
        if (autoWidth || fixedWidth && !viewportMax) {
          return slideCount - 1;
        } else {
          var str = fixedWidth ? "fixedWidth" : "items", arr = [];
          if (fixedWidth || options[str] < slideCount) {
            arr.push(options[str]);
          }
          if (responsive) {
            for (var bp in responsive) {
              var tem = responsive[bp][str];
              if (tem && (fixedWidth || tem < slideCount)) {
                arr.push(tem);
              }
            }
          }
          if (!arr.length) {
            arr.push(0);
          }
          return Math.ceil(fixedWidth ? viewportMax / Math.min.apply(null, arr) : Math.max.apply(null, arr));
        }
      }
      function getCloneCountForLoop() {
        var itemsMax = getItemsMax(), result = carousel ? Math.ceil((itemsMax * 5 - slideCount) / 2) : itemsMax * 4 - slideCount;
        result = Math.max(itemsMax, result);
        return hasOption("edgePadding") ? result + 1 : result;
      }
      function getWindowWidth() {
        return win2.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
      }
      function getInsertPosition(pos) {
        return pos === "top" ? "afterbegin" : "beforeend";
      }
      function getClientWidth(el) {
        if (el == null) {
          return;
        }
        var div = doc.createElement("div"), rect, width;
        el.appendChild(div);
        rect = div.getBoundingClientRect();
        width = rect.right - rect.left;
        div.remove();
        return width || getClientWidth(el.parentNode);
      }
      function getViewportWidth() {
        var gap = edgePadding ? edgePadding * 2 - gutter : 0;
        return getClientWidth(containerParent) - gap;
      }
      function hasOption(item) {
        if (options[item]) {
          return true;
        } else {
          if (responsive) {
            for (var bp in responsive) {
              if (responsive[bp][item]) {
                return true;
              }
            }
          }
          return false;
        }
      }
      function getOption(item, ww) {
        if (ww == null) {
          ww = windowWidth;
        }
        if (item === "items" && fixedWidth) {
          return Math.floor((viewport + gutter) / (fixedWidth + gutter)) || 1;
        } else {
          var result = options[item];
          if (responsive) {
            for (var bp in responsive) {
              if (ww >= parseInt(bp)) {
                if (item in responsive[bp]) {
                  result = responsive[bp][item];
                }
              }
            }
          }
          if (item === "slideBy" && result === "page") {
            result = getOption("items");
          }
          if (!carousel && (item === "slideBy" || item === "items")) {
            result = Math.floor(result);
          }
          return result;
        }
      }
      function getSlideMarginLeft(i) {
        return CALC ? CALC + "(" + i * 100 + "% / " + slideCountNew + ")" : i * 100 / slideCountNew + "%";
      }
      function getInnerWrapperStyles(edgePaddingTem, gutterTem, fixedWidthTem, speedTem, autoHeightBP) {
        var str = "";
        if (edgePaddingTem !== void 0) {
          var gap = edgePaddingTem;
          if (gutterTem) {
            gap -= gutterTem;
          }
          str = horizontal ? "margin: 0 " + gap + "px 0 " + edgePaddingTem + "px;" : "margin: " + edgePaddingTem + "px 0 " + gap + "px 0;";
        } else if (gutterTem && !fixedWidthTem) {
          var gutterTemUnit = "-" + gutterTem + "px", dir = horizontal ? gutterTemUnit + " 0 0" : "0 " + gutterTemUnit + " 0";
          str = "margin: 0 " + dir + ";";
        }
        if (!carousel && autoHeightBP && TRANSITIONDURATION && speedTem) {
          str += getTransitionDurationStyle(speedTem);
        }
        return str;
      }
      function getContainerWidth(fixedWidthTem, gutterTem, itemsTem) {
        if (fixedWidthTem) {
          return (fixedWidthTem + gutterTem) * slideCountNew + "px";
        } else {
          return CALC ? CALC + "(" + slideCountNew * 100 + "% / " + itemsTem + ")" : slideCountNew * 100 / itemsTem + "%";
        }
      }
      function getSlideWidthStyle(fixedWidthTem, gutterTem, itemsTem) {
        var width;
        if (fixedWidthTem) {
          width = fixedWidthTem + gutterTem + "px";
        } else {
          if (!carousel) {
            itemsTem = Math.floor(itemsTem);
          }
          var dividend = carousel ? slideCountNew : itemsTem;
          width = CALC ? CALC + "(100% / " + dividend + ")" : 100 / dividend + "%";
        }
        width = "width:" + width;
        return nested !== "inner" ? width + ";" : width + " !important;";
      }
      function getSlideGutterStyle(gutterTem) {
        var str = "";
        if (gutterTem !== false) {
          var prop = horizontal ? "padding-" : "margin-", dir = horizontal ? "right" : "bottom";
          str = prop + dir + ": " + gutterTem + "px;";
        }
        return str;
      }
      function getCSSPrefix(name, num) {
        var prefix = name.substring(0, name.length - num).toLowerCase();
        if (prefix) {
          prefix = "-" + prefix + "-";
        }
        return prefix;
      }
      function getTransitionDurationStyle(speed2) {
        return getCSSPrefix(TRANSITIONDURATION, 18) + "transition-duration:" + speed2 / 1e3 + "s;";
      }
      function getAnimationDurationStyle(speed2) {
        return getCSSPrefix(ANIMATIONDURATION, 17) + "animation-duration:" + speed2 / 1e3 + "s;";
      }
      function initStructure() {
        var classOuter = "tns-outer", classInner = "tns-inner", hasGutter = hasOption("gutter");
        outerWrapper.className = classOuter;
        innerWrapper.className = classInner;
        outerWrapper.id = slideId + "-ow";
        innerWrapper.id = slideId + "-iw";
        if (container.id === "") {
          container.id = slideId;
        }
        newContainerClasses += PERCENTAGELAYOUT || autoWidth ? " tns-subpixel" : " tns-no-subpixel";
        newContainerClasses += CALC ? " tns-calc" : " tns-no-calc";
        if (autoWidth) {
          newContainerClasses += " tns-autowidth";
        }
        newContainerClasses += " tns-" + options.axis;
        container.className += newContainerClasses;
        if (carousel) {
          middleWrapper = doc.createElement("div");
          middleWrapper.id = slideId + "-mw";
          middleWrapper.className = "tns-ovh";
          outerWrapper.appendChild(middleWrapper);
          middleWrapper.appendChild(innerWrapper);
        } else {
          outerWrapper.appendChild(innerWrapper);
        }
        if (autoHeight) {
          var wp = middleWrapper ? middleWrapper : innerWrapper;
          wp.className += " tns-ah";
        }
        containerParent.insertBefore(outerWrapper, container);
        innerWrapper.appendChild(container);
        forEach(slideItems, function(item, i) {
          addClass(item, "tns-item");
          if (!item.id) {
            item.id = slideId + "-item" + i;
          }
          if (!carousel && animateNormal) {
            addClass(item, animateNormal);
          }
          setAttrs(item, {
            "aria-hidden": "true",
            "tabindex": "-1"
          });
        });
        if (cloneCount) {
          var fragmentBefore = doc.createDocumentFragment(), fragmentAfter = doc.createDocumentFragment();
          for (var j = cloneCount; j--; ) {
            var num = j % slideCount, cloneFirst = slideItems[num].cloneNode(true);
            addClass(cloneFirst, slideClonedClass);
            removeAttrs(cloneFirst, "id");
            fragmentAfter.insertBefore(cloneFirst, fragmentAfter.firstChild);
            if (carousel) {
              var cloneLast = slideItems[slideCount - 1 - num].cloneNode(true);
              addClass(cloneLast, slideClonedClass);
              removeAttrs(cloneLast, "id");
              fragmentBefore.appendChild(cloneLast);
            }
          }
          container.insertBefore(fragmentBefore, container.firstChild);
          container.appendChild(fragmentAfter);
          slideItems = container.children;
        }
      }
      function initSliderTransform() {
        if (hasOption("autoHeight") || autoWidth || !horizontal) {
          var imgs = container.querySelectorAll("img");
          forEach(imgs, function(img) {
            var src = img.src;
            if (!lazyload) {
              if (src && src.indexOf("data:image") < 0) {
                img.src = "";
                addEvents(img, imgEvents);
                addClass(img, "loading");
                img.src = src;
              } else {
                imgLoaded(img);
              }
            }
          });
          raf(function() {
            imgsLoadedCheck(arrayFromNodeList(imgs), function() {
              imgsComplete = true;
            });
          });
          if (hasOption("autoHeight")) {
            imgs = getImageArray(index, Math.min(index + items - 1, slideCountNew - 1));
          }
          lazyload ? initSliderTransformStyleCheck() : raf(function() {
            imgsLoadedCheck(arrayFromNodeList(imgs), initSliderTransformStyleCheck);
          });
        } else {
          if (carousel) {
            doContainerTransformSilent();
          }
          initTools();
          initEvents();
        }
      }
      function initSliderTransformStyleCheck() {
        if (autoWidth && slideCount > 1) {
          var num = loop ? index : slideCount - 1;
          (function stylesApplicationCheck() {
            var left = slideItems[num].getBoundingClientRect().left;
            var right = slideItems[num - 1].getBoundingClientRect().right;
            Math.abs(left - right) <= 1 ? initSliderTransformCore() : setTimeout(function() {
              stylesApplicationCheck();
            }, 16);
          })();
        } else {
          initSliderTransformCore();
        }
      }
      function initSliderTransformCore() {
        if (!horizontal || autoWidth) {
          setSlidePositions();
          if (autoWidth) {
            rightBoundary = getRightBoundary();
            if (freezable) {
              freeze = getFreeze();
            }
            indexMax = getIndexMax();
            resetVariblesWhenDisable(disable || freeze);
          } else {
            updateContentWrapperHeight();
          }
        }
        if (carousel) {
          doContainerTransformSilent();
        }
        initTools();
        initEvents();
      }
      function initSheet() {
        if (!carousel) {
          for (var i = index, l = index + Math.min(slideCount, items); i < l; i++) {
            var item = slideItems[i];
            item.style.left = (i - index) * 100 / items + "%";
            addClass(item, animateIn);
            removeClass(item, animateNormal);
          }
        }
        if (horizontal) {
          if (PERCENTAGELAYOUT || autoWidth) {
            addCSSRule(sheet, "#" + slideId + " > .tns-item", "font-size:" + win2.getComputedStyle(slideItems[0]).fontSize + ";", getCssRulesLength(sheet));
            addCSSRule(sheet, "#" + slideId, "font-size:0;", getCssRulesLength(sheet));
          } else if (carousel) {
            forEach(slideItems, function(slide, i2) {
              slide.style.marginLeft = getSlideMarginLeft(i2);
            });
          }
        }
        if (CSSMQ) {
          if (TRANSITIONDURATION) {
            var str = middleWrapper && options.autoHeight ? getTransitionDurationStyle(options.speed) : "";
            addCSSRule(sheet, "#" + slideId + "-mw", str, getCssRulesLength(sheet));
          }
          str = getInnerWrapperStyles(options.edgePadding, options.gutter, options.fixedWidth, options.speed, options.autoHeight);
          addCSSRule(sheet, "#" + slideId + "-iw", str, getCssRulesLength(sheet));
          if (carousel) {
            str = horizontal && !autoWidth ? "width:" + getContainerWidth(options.fixedWidth, options.gutter, options.items) + ";" : "";
            if (TRANSITIONDURATION) {
              str += getTransitionDurationStyle(speed);
            }
            addCSSRule(sheet, "#" + slideId, str, getCssRulesLength(sheet));
          }
          str = horizontal && !autoWidth ? getSlideWidthStyle(options.fixedWidth, options.gutter, options.items) : "";
          if (options.gutter) {
            str += getSlideGutterStyle(options.gutter);
          }
          if (!carousel) {
            if (TRANSITIONDURATION) {
              str += getTransitionDurationStyle(speed);
            }
            if (ANIMATIONDURATION) {
              str += getAnimationDurationStyle(speed);
            }
          }
          if (str) {
            addCSSRule(sheet, "#" + slideId + " > .tns-item", str, getCssRulesLength(sheet));
          }
        } else {
          update_carousel_transition_duration();
          innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, autoHeight);
          if (carousel && horizontal && !autoWidth) {
            container.style.width = getContainerWidth(fixedWidth, gutter, items);
          }
          var str = horizontal && !autoWidth ? getSlideWidthStyle(fixedWidth, gutter, items) : "";
          if (gutter) {
            str += getSlideGutterStyle(gutter);
          }
          if (str) {
            addCSSRule(sheet, "#" + slideId + " > .tns-item", str, getCssRulesLength(sheet));
          }
        }
        if (responsive && CSSMQ) {
          for (var bp in responsive) {
            bp = parseInt(bp);
            var opts2 = responsive[bp], str = "", middleWrapperStr = "", innerWrapperStr = "", containerStr = "", slideStr = "", itemsBP = !autoWidth ? getOption("items", bp) : null, fixedWidthBP = getOption("fixedWidth", bp), speedBP = getOption("speed", bp), edgePaddingBP = getOption("edgePadding", bp), autoHeightBP = getOption("autoHeight", bp), gutterBP = getOption("gutter", bp);
            if (TRANSITIONDURATION && middleWrapper && getOption("autoHeight", bp) && "speed" in opts2) {
              middleWrapperStr = "#" + slideId + "-mw{" + getTransitionDurationStyle(speedBP) + "}";
            }
            if ("edgePadding" in opts2 || "gutter" in opts2) {
              innerWrapperStr = "#" + slideId + "-iw{" + getInnerWrapperStyles(edgePaddingBP, gutterBP, fixedWidthBP, speedBP, autoHeightBP) + "}";
            }
            if (carousel && horizontal && !autoWidth && ("fixedWidth" in opts2 || "items" in opts2 || fixedWidth && "gutter" in opts2)) {
              containerStr = "width:" + getContainerWidth(fixedWidthBP, gutterBP, itemsBP) + ";";
            }
            if (TRANSITIONDURATION && "speed" in opts2) {
              containerStr += getTransitionDurationStyle(speedBP);
            }
            if (containerStr) {
              containerStr = "#" + slideId + "{" + containerStr + "}";
            }
            if ("fixedWidth" in opts2 || fixedWidth && "gutter" in opts2 || !carousel && "items" in opts2) {
              slideStr += getSlideWidthStyle(fixedWidthBP, gutterBP, itemsBP);
            }
            if ("gutter" in opts2) {
              slideStr += getSlideGutterStyle(gutterBP);
            }
            if (!carousel && "speed" in opts2) {
              if (TRANSITIONDURATION) {
                slideStr += getTransitionDurationStyle(speedBP);
              }
              if (ANIMATIONDURATION) {
                slideStr += getAnimationDurationStyle(speedBP);
              }
            }
            if (slideStr) {
              slideStr = "#" + slideId + " > .tns-item{" + slideStr + "}";
            }
            str = middleWrapperStr + innerWrapperStr + containerStr + slideStr;
            if (str) {
              sheet.insertRule("@media (min-width: " + bp / 16 + "em) {" + str + "}", sheet.cssRules.length);
            }
          }
        }
      }
      function initTools() {
        updateSlideStatus();
        outerWrapper.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + getLiveRegionStr() + "</span>  of " + slideCount + "</div>");
        liveregionCurrent = outerWrapper.querySelector(".tns-liveregion .current");
        if (hasAutoplay) {
          var txt = autoplay ? "stop" : "start";
          if (autoplayButton) {
            setAttrs(autoplayButton, { "data-action": txt });
          } else if (options.autoplayButtonOutput) {
            outerWrapper.insertAdjacentHTML(getInsertPosition(options.autoplayPosition), '<button type="button" data-action="' + txt + '">' + autoplayHtmlStrings[0] + txt + autoplayHtmlStrings[1] + autoplayText[0] + "</button>");
            autoplayButton = outerWrapper.querySelector("[data-action]");
          }
          if (autoplayButton) {
            addEvents(autoplayButton, { "click": toggleAutoplay });
          }
          if (autoplay) {
            startAutoplay();
            if (autoplayHoverPause) {
              addEvents(container, hoverEvents);
            }
            if (autoplayResetOnVisibility) {
              addEvents(container, visibilityEvent);
            }
          }
        }
        if (hasNav) {
          var initIndex = !carousel ? 0 : cloneCount;
          if (navContainer) {
            setAttrs(navContainer, { "aria-label": "Carousel Pagination" });
            navItems = navContainer.children;
            forEach(navItems, function(item, i2) {
              setAttrs(item, {
                "data-nav": i2,
                "tabindex": "-1",
                "aria-label": navStr + (i2 + 1),
                "aria-controls": slideId
              });
            });
          } else {
            var navHtml = "", hiddenStr = navAsThumbnails ? "" : 'style="display:none"';
            for (var i = 0; i < slideCount; i++) {
              navHtml += '<button type="button" data-nav="' + i + '" tabindex="-1" aria-controls="' + slideId + '" ' + hiddenStr + ' aria-label="' + navStr + (i + 1) + '"></button>';
            }
            navHtml = '<div class="tns-nav" aria-label="Carousel Pagination">' + navHtml + "</div>";
            outerWrapper.insertAdjacentHTML(getInsertPosition(options.navPosition), navHtml);
            navContainer = outerWrapper.querySelector(".tns-nav");
            navItems = navContainer.children;
          }
          updateNavVisibility();
          if (TRANSITIONDURATION) {
            var prefix = TRANSITIONDURATION.substring(0, TRANSITIONDURATION.length - 18).toLowerCase(), str = "transition: all " + speed / 1e3 + "s";
            if (prefix) {
              str = "-" + prefix + "-" + str;
            }
            addCSSRule(sheet, "[aria-controls^=" + slideId + "-item]", str, getCssRulesLength(sheet));
          }
          setAttrs(navItems[navCurrentIndex], { "aria-label": navStr + (navCurrentIndex + 1) + navStrCurrent });
          removeAttrs(navItems[navCurrentIndex], "tabindex");
          addClass(navItems[navCurrentIndex], navActiveClass);
          addEvents(navContainer, navEvents);
        }
        if (hasControls) {
          if (!controlsContainer && (!prevButton || !nextButton)) {
            outerWrapper.insertAdjacentHTML(getInsertPosition(options.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + slideId + '">' + controlsText[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + slideId + '">' + controlsText[1] + "</button></div>");
            controlsContainer = outerWrapper.querySelector(".tns-controls");
          }
          if (!prevButton || !nextButton) {
            prevButton = controlsContainer.children[0];
            nextButton = controlsContainer.children[1];
          }
          if (options.controlsContainer) {
            setAttrs(controlsContainer, {
              "aria-label": "Carousel Navigation",
              "tabindex": "0"
            });
          }
          if (options.controlsContainer || options.prevButton && options.nextButton) {
            setAttrs([prevButton, nextButton], {
              "aria-controls": slideId,
              "tabindex": "-1"
            });
          }
          if (options.controlsContainer || options.prevButton && options.nextButton) {
            setAttrs(prevButton, { "data-controls": "prev" });
            setAttrs(nextButton, { "data-controls": "next" });
          }
          prevIsButton = isButton(prevButton);
          nextIsButton = isButton(nextButton);
          updateControlsStatus();
          if (controlsContainer) {
            addEvents(controlsContainer, controlsEvents);
          } else {
            addEvents(prevButton, controlsEvents);
            addEvents(nextButton, controlsEvents);
          }
        }
        disableUI();
      }
      function initEvents() {
        if (carousel && TRANSITIONEND) {
          var eve = {};
          eve[TRANSITIONEND] = onTransitionEnd;
          addEvents(container, eve);
        }
        if (touch) {
          addEvents(container, touchEvents, options.preventScrollOnTouch);
        }
        if (mouseDrag) {
          addEvents(container, dragEvents);
        }
        if (arrowKeys) {
          addEvents(doc, docmentKeydownEvent);
        }
        if (nested === "inner") {
          events.on("outerResized", function() {
            resizeTasks();
            events.emit("innerLoaded", info());
          });
        } else if (responsive || fixedWidth || autoWidth || autoHeight || !horizontal) {
          addEvents(win2, { "resize": onResize });
        }
        if (autoHeight) {
          if (nested === "outer") {
            events.on("innerLoaded", doAutoHeight);
          } else if (!disable) {
            doAutoHeight();
          }
        }
        doLazyLoad();
        if (disable) {
          disableSlider();
        } else if (freeze) {
          freezeSlider();
        }
        events.on("indexChanged", additionalUpdates);
        if (nested === "inner") {
          events.emit("innerLoaded", info());
        }
        if (typeof onInit === "function") {
          onInit(info());
        }
        isOn = true;
      }
      function destroy() {
        sheet.disabled = true;
        if (sheet.ownerNode) {
          sheet.ownerNode.remove();
        }
        removeEvents(win2, { "resize": onResize });
        if (arrowKeys) {
          removeEvents(doc, docmentKeydownEvent);
        }
        if (controlsContainer) {
          removeEvents(controlsContainer, controlsEvents);
        }
        if (navContainer) {
          removeEvents(navContainer, navEvents);
        }
        removeEvents(container, hoverEvents);
        removeEvents(container, visibilityEvent);
        if (autoplayButton) {
          removeEvents(autoplayButton, { "click": toggleAutoplay });
        }
        if (autoplay) {
          clearInterval(autoplayTimer);
        }
        if (carousel && TRANSITIONEND) {
          var eve = {};
          eve[TRANSITIONEND] = onTransitionEnd;
          removeEvents(container, eve);
        }
        if (touch) {
          removeEvents(container, touchEvents);
        }
        if (mouseDrag) {
          removeEvents(container, dragEvents);
        }
        var htmlList = [containerHTML, controlsContainerHTML, prevButtonHTML, nextButtonHTML, navContainerHTML, autoplayButtonHTML];
        tnsList.forEach(function(item, i) {
          var el = item === "container" ? outerWrapper : options[item];
          if (typeof el === "object" && el) {
            var prevEl = el.previousElementSibling ? el.previousElementSibling : false, parentEl = el.parentNode;
            el.outerHTML = htmlList[i];
            options[item] = prevEl ? prevEl.nextElementSibling : parentEl.firstElementChild;
          }
        });
        tnsList = animateIn = animateOut = animateDelay = animateNormal = horizontal = outerWrapper = innerWrapper = container = containerParent = containerHTML = slideItems = slideCount = breakpointZone = windowWidth = autoWidth = fixedWidth = edgePadding = gutter = viewport = items = slideBy = viewportMax = arrowKeys = speed = rewind = loop = autoHeight = sheet = lazyload = slidePositions = slideItemsOut = cloneCount = slideCountNew = hasRightDeadZone = rightBoundary = updateIndexBeforeTransform = transformAttr = transformPrefix = transformPostfix = getIndexMax = index = indexCached = indexMin = indexMax = resizeTimer = swipeAngle = moveDirectionExpected = running = onInit = events = newContainerClasses = slideId = disable = disabled = freezable = freeze = frozen = controlsEvents = navEvents = hoverEvents = visibilityEvent = docmentKeydownEvent = touchEvents = dragEvents = hasControls = hasNav = navAsThumbnails = hasAutoplay = hasTouch = hasMouseDrag = slideActiveClass = imgCompleteClass = imgEvents = imgsComplete = controls = controlsText = controlsContainer = controlsContainerHTML = prevButton = nextButton = prevIsButton = nextIsButton = nav = navContainer = navContainerHTML = navItems = pages = pagesCached = navClicked = navCurrentIndex = navCurrentIndexCached = navActiveClass = navStr = navStrCurrent = autoplay = autoplayTimeout = autoplayDirection = autoplayText = autoplayHoverPause = autoplayButton = autoplayButtonHTML = autoplayResetOnVisibility = autoplayHtmlStrings = autoplayTimer = animating = autoplayHoverPaused = autoplayUserPaused = autoplayVisibilityPaused = initPosition = lastPosition = translateInit = disX = disY = panStart = rafIndex = getDist = touch = mouseDrag = null;
        for (var a in this) {
          if (a !== "rebuild") {
            this[a] = null;
          }
        }
        isOn = false;
      }
      function onResize(e) {
        raf(function() {
          resizeTasks(getEvent(e));
        });
      }
      function resizeTasks(e) {
        if (!isOn) {
          return;
        }
        if (nested === "outer") {
          events.emit("outerResized", info(e));
        }
        windowWidth = getWindowWidth();
        var bpChanged, breakpointZoneTem = breakpointZone, needContainerTransform = false;
        if (responsive) {
          setBreakpointZone();
          bpChanged = breakpointZoneTem !== breakpointZone;
          if (bpChanged) {
            events.emit("newBreakpointStart", info(e));
          }
        }
        var indChanged, itemsChanged, itemsTem = items, disableTem = disable, freezeTem = freeze, arrowKeysTem = arrowKeys, controlsTem = controls, navTem = nav, touchTem = touch, mouseDragTem = mouseDrag, autoplayTem = autoplay, autoplayHoverPauseTem = autoplayHoverPause, autoplayResetOnVisibilityTem = autoplayResetOnVisibility, indexTem = index;
        if (bpChanged) {
          var fixedWidthTem = fixedWidth, autoHeightTem = autoHeight, controlsTextTem = controlsText, centerTem = center, autoplayTextTem = autoplayText;
          if (!CSSMQ) {
            var gutterTem = gutter, edgePaddingTem = edgePadding;
          }
        }
        arrowKeys = getOption("arrowKeys");
        controls = getOption("controls");
        nav = getOption("nav");
        touch = getOption("touch");
        center = getOption("center");
        mouseDrag = getOption("mouseDrag");
        autoplay = getOption("autoplay");
        autoplayHoverPause = getOption("autoplayHoverPause");
        autoplayResetOnVisibility = getOption("autoplayResetOnVisibility");
        if (bpChanged) {
          disable = getOption("disable");
          fixedWidth = getOption("fixedWidth");
          speed = getOption("speed");
          autoHeight = getOption("autoHeight");
          controlsText = getOption("controlsText");
          autoplayText = getOption("autoplayText");
          autoplayTimeout = getOption("autoplayTimeout");
          if (!CSSMQ) {
            edgePadding = getOption("edgePadding");
            gutter = getOption("gutter");
          }
        }
        resetVariblesWhenDisable(disable);
        viewport = getViewportWidth();
        if ((!horizontal || autoWidth) && !disable) {
          setSlidePositions();
          if (!horizontal) {
            updateContentWrapperHeight();
            needContainerTransform = true;
          }
        }
        if (fixedWidth || autoWidth) {
          rightBoundary = getRightBoundary();
          indexMax = getIndexMax();
        }
        if (bpChanged || fixedWidth) {
          items = getOption("items");
          slideBy = getOption("slideBy");
          itemsChanged = items !== itemsTem;
          if (itemsChanged) {
            if (!fixedWidth && !autoWidth) {
              indexMax = getIndexMax();
            }
            updateIndex();
          }
        }
        if (bpChanged) {
          if (disable !== disableTem) {
            if (disable) {
              disableSlider();
            } else {
              enableSlider();
            }
          }
        }
        if (freezable && (bpChanged || fixedWidth || autoWidth)) {
          freeze = getFreeze();
          if (freeze !== freezeTem) {
            if (freeze) {
              doContainerTransform(getContainerTransformValue(getStartIndex(0)));
              freezeSlider();
            } else {
              unfreezeSlider();
              needContainerTransform = true;
            }
          }
        }
        resetVariblesWhenDisable(disable || freeze);
        if (!autoplay) {
          autoplayHoverPause = autoplayResetOnVisibility = false;
        }
        if (arrowKeys !== arrowKeysTem) {
          arrowKeys ? addEvents(doc, docmentKeydownEvent) : removeEvents(doc, docmentKeydownEvent);
        }
        if (controls !== controlsTem) {
          if (controls) {
            if (controlsContainer) {
              showElement(controlsContainer);
            } else {
              if (prevButton) {
                showElement(prevButton);
              }
              if (nextButton) {
                showElement(nextButton);
              }
            }
          } else {
            if (controlsContainer) {
              hideElement(controlsContainer);
            } else {
              if (prevButton) {
                hideElement(prevButton);
              }
              if (nextButton) {
                hideElement(nextButton);
              }
            }
          }
        }
        if (nav !== navTem) {
          if (nav) {
            showElement(navContainer);
            updateNavVisibility();
          } else {
            hideElement(navContainer);
          }
        }
        if (touch !== touchTem) {
          touch ? addEvents(container, touchEvents, options.preventScrollOnTouch) : removeEvents(container, touchEvents);
        }
        if (mouseDrag !== mouseDragTem) {
          mouseDrag ? addEvents(container, dragEvents) : removeEvents(container, dragEvents);
        }
        if (autoplay !== autoplayTem) {
          if (autoplay) {
            if (autoplayButton) {
              showElement(autoplayButton);
            }
            if (!animating && !autoplayUserPaused) {
              startAutoplay();
            }
          } else {
            if (autoplayButton) {
              hideElement(autoplayButton);
            }
            if (animating) {
              stopAutoplay();
            }
          }
        }
        if (autoplayHoverPause !== autoplayHoverPauseTem) {
          autoplayHoverPause ? addEvents(container, hoverEvents) : removeEvents(container, hoverEvents);
        }
        if (autoplayResetOnVisibility !== autoplayResetOnVisibilityTem) {
          autoplayResetOnVisibility ? addEvents(doc, visibilityEvent) : removeEvents(doc, visibilityEvent);
        }
        if (bpChanged) {
          if (fixedWidth !== fixedWidthTem || center !== centerTem) {
            needContainerTransform = true;
          }
          if (autoHeight !== autoHeightTem) {
            if (!autoHeight) {
              innerWrapper.style.height = "";
            }
          }
          if (controls && controlsText !== controlsTextTem) {
            prevButton.innerHTML = controlsText[0];
            nextButton.innerHTML = controlsText[1];
          }
          if (autoplayButton && autoplayText !== autoplayTextTem) {
            var i = autoplay ? 1 : 0, html = autoplayButton.innerHTML, len = html.length - autoplayTextTem[i].length;
            if (html.substring(len) === autoplayTextTem[i]) {
              autoplayButton.innerHTML = html.substring(0, len) + autoplayText[i];
            }
          }
        } else {
          if (center && (fixedWidth || autoWidth)) {
            needContainerTransform = true;
          }
        }
        if (itemsChanged || fixedWidth && !autoWidth) {
          pages = getPages();
          updateNavVisibility();
        }
        indChanged = index !== indexTem;
        if (indChanged) {
          events.emit("indexChanged", info());
          needContainerTransform = true;
        } else if (itemsChanged) {
          if (!indChanged) {
            additionalUpdates();
          }
        } else if (fixedWidth || autoWidth) {
          doLazyLoad();
          updateSlideStatus();
          updateLiveRegion();
        }
        if (itemsChanged && !carousel) {
          updateGallerySlidePositions();
        }
        if (!disable && !freeze) {
          if (bpChanged && !CSSMQ) {
            if (edgePadding !== edgePaddingTem || gutter !== gutterTem) {
              innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, speed, autoHeight);
            }
            if (horizontal) {
              if (carousel) {
                container.style.width = getContainerWidth(fixedWidth, gutter, items);
              }
              var str = getSlideWidthStyle(fixedWidth, gutter, items) + getSlideGutterStyle(gutter);
              removeCSSRule(sheet, getCssRulesLength(sheet) - 1);
              addCSSRule(sheet, "#" + slideId + " > .tns-item", str, getCssRulesLength(sheet));
            }
          }
          if (autoHeight) {
            doAutoHeight();
          }
          if (needContainerTransform) {
            doContainerTransformSilent();
            indexCached = index;
          }
        }
        if (bpChanged) {
          events.emit("newBreakpointEnd", info(e));
        }
      }
      function getFreeze() {
        if (!fixedWidth && !autoWidth) {
          var a = center ? items - (items - 1) / 2 : items;
          return slideCount <= a;
        }
        var width = fixedWidth ? (fixedWidth + gutter) * slideCount : slidePositions[slideCount], vp = edgePadding ? viewport + edgePadding * 2 : viewport + gutter;
        if (center) {
          vp -= fixedWidth ? (viewport - fixedWidth) / 2 : (viewport - (slidePositions[index + 1] - slidePositions[index] - gutter)) / 2;
        }
        return width <= vp;
      }
      function setBreakpointZone() {
        breakpointZone = 0;
        for (var bp in responsive) {
          bp = parseInt(bp);
          if (windowWidth >= bp) {
            breakpointZone = bp;
          }
        }
      }
      var updateIndex = function() {
        return loop ? carousel ? function() {
          var leftEdge = indexMin, rightEdge = indexMax;
          leftEdge += slideBy;
          rightEdge -= slideBy;
          if (edgePadding) {
            leftEdge += 1;
            rightEdge -= 1;
          } else if (fixedWidth) {
            if ((viewport + gutter) % (fixedWidth + gutter)) {
              rightEdge -= 1;
            }
          }
          if (cloneCount) {
            if (index > rightEdge) {
              index -= slideCount;
            } else if (index < leftEdge) {
              index += slideCount;
            }
          }
        } : function() {
          if (index > indexMax) {
            while (index >= indexMin + slideCount) {
              index -= slideCount;
            }
          } else if (index < indexMin) {
            while (index <= indexMax - slideCount) {
              index += slideCount;
            }
          }
        } : function() {
          index = Math.max(indexMin, Math.min(indexMax, index));
        };
      }();
      function disableUI() {
        if (!autoplay && autoplayButton) {
          hideElement(autoplayButton);
        }
        if (!nav && navContainer) {
          hideElement(navContainer);
        }
        if (!controls) {
          if (controlsContainer) {
            hideElement(controlsContainer);
          } else {
            if (prevButton) {
              hideElement(prevButton);
            }
            if (nextButton) {
              hideElement(nextButton);
            }
          }
        }
      }
      function enableUI() {
        if (autoplay && autoplayButton) {
          showElement(autoplayButton);
        }
        if (nav && navContainer) {
          showElement(navContainer);
        }
        if (controls) {
          if (controlsContainer) {
            showElement(controlsContainer);
          } else {
            if (prevButton) {
              showElement(prevButton);
            }
            if (nextButton) {
              showElement(nextButton);
            }
          }
        }
      }
      function freezeSlider() {
        if (frozen) {
          return;
        }
        if (edgePadding) {
          innerWrapper.style.margin = "0px";
        }
        if (cloneCount) {
          var str = "tns-transparent";
          for (var i = cloneCount; i--; ) {
            if (carousel) {
              addClass(slideItems[i], str);
            }
            addClass(slideItems[slideCountNew - i - 1], str);
          }
        }
        disableUI();
        frozen = true;
      }
      function unfreezeSlider() {
        if (!frozen) {
          return;
        }
        if (edgePadding && CSSMQ) {
          innerWrapper.style.margin = "";
        }
        if (cloneCount) {
          var str = "tns-transparent";
          for (var i = cloneCount; i--; ) {
            if (carousel) {
              removeClass(slideItems[i], str);
            }
            removeClass(slideItems[slideCountNew - i - 1], str);
          }
        }
        enableUI();
        frozen = false;
      }
      function disableSlider() {
        if (disabled) {
          return;
        }
        sheet.disabled = true;
        container.className = container.className.replace(newContainerClasses.substring(1), "");
        removeAttrs(container, ["style"]);
        if (loop) {
          for (var j = cloneCount; j--; ) {
            if (carousel) {
              hideElement(slideItems[j]);
            }
            hideElement(slideItems[slideCountNew - j - 1]);
          }
        }
        if (!horizontal || !carousel) {
          removeAttrs(innerWrapper, ["style"]);
        }
        if (!carousel) {
          for (var i = index, l = index + slideCount; i < l; i++) {
            var item = slideItems[i];
            removeAttrs(item, ["style"]);
            removeClass(item, animateIn);
            removeClass(item, animateNormal);
          }
        }
        disableUI();
        disabled = true;
      }
      function enableSlider() {
        if (!disabled) {
          return;
        }
        sheet.disabled = false;
        container.className += newContainerClasses;
        doContainerTransformSilent();
        if (loop) {
          for (var j = cloneCount; j--; ) {
            if (carousel) {
              showElement(slideItems[j]);
            }
            showElement(slideItems[slideCountNew - j - 1]);
          }
        }
        if (!carousel) {
          for (var i = index, l = index + slideCount; i < l; i++) {
            var item = slideItems[i], classN = i < index + items ? animateIn : animateNormal;
            item.style.left = (i - index) * 100 / items + "%";
            addClass(item, classN);
          }
        }
        enableUI();
        disabled = false;
      }
      function updateLiveRegion() {
        var str = getLiveRegionStr();
        if (liveregionCurrent.innerHTML !== str) {
          liveregionCurrent.innerHTML = str;
        }
      }
      function getLiveRegionStr() {
        var arr = getVisibleSlideRange(), start = arr[0] + 1, end = arr[1] + 1;
        return start === end ? start + "" : start + " to " + end;
      }
      function getVisibleSlideRange(val2) {
        if (val2 == null) {
          val2 = getContainerTransformValue();
        }
        var start = index, end, rangestart, rangeend;
        if (center || edgePadding) {
          if (autoWidth || fixedWidth) {
            rangestart = -(parseFloat(val2) + edgePadding);
            rangeend = rangestart + viewport + edgePadding * 2;
          }
        } else {
          if (autoWidth) {
            rangestart = slidePositions[index];
            rangeend = rangestart + viewport;
          }
        }
        if (autoWidth) {
          slidePositions.forEach(function(point, i) {
            if (i < slideCountNew) {
              if ((center || edgePadding) && point <= rangestart + 0.5) {
                start = i;
              }
              if (rangeend - point >= 0.5) {
                end = i;
              }
            }
          });
        } else {
          if (fixedWidth) {
            var cell = fixedWidth + gutter;
            if (center || edgePadding) {
              start = Math.floor(rangestart / cell);
              end = Math.ceil(rangeend / cell - 1);
            } else {
              end = start + Math.ceil(viewport / cell) - 1;
            }
          } else {
            if (center || edgePadding) {
              var a = items - 1;
              if (center) {
                start -= a / 2;
                end = index + a / 2;
              } else {
                end = index + a;
              }
              if (edgePadding) {
                var b = edgePadding * items / viewport;
                start -= b;
                end += b;
              }
              start = Math.floor(start);
              end = Math.ceil(end);
            } else {
              end = start + items - 1;
            }
          }
          start = Math.max(start, 0);
          end = Math.min(end, slideCountNew - 1);
        }
        return [start, end];
      }
      function doLazyLoad() {
        if (lazyload && !disable) {
          var arg = getVisibleSlideRange();
          arg.push(lazyloadSelector);
          getImageArray.apply(null, arg).forEach(function(img) {
            if (!hasClass(img, imgCompleteClass)) {
              var eve = {};
              eve[TRANSITIONEND] = function(e) {
                e.stopPropagation();
              };
              addEvents(img, eve);
              addEvents(img, imgEvents);
              img.src = getAttr(img, "data-src");
              var srcset = getAttr(img, "data-srcset");
              if (srcset) {
                img.srcset = srcset;
              }
              addClass(img, "loading");
            }
          });
        }
      }
      function onImgLoaded(e) {
        imgLoaded(getTarget(e));
      }
      function onImgFailed(e) {
        imgFailed(getTarget(e));
      }
      function imgLoaded(img) {
        addClass(img, "loaded");
        imgCompleted(img);
      }
      function imgFailed(img) {
        addClass(img, "failed");
        imgCompleted(img);
      }
      function imgCompleted(img) {
        addClass(img, imgCompleteClass);
        removeClass(img, "loading");
        removeEvents(img, imgEvents);
      }
      function getImageArray(start, end, imgSelector) {
        var imgs = [];
        if (!imgSelector) {
          imgSelector = "img";
        }
        while (start <= end) {
          forEach(slideItems[start].querySelectorAll(imgSelector), function(img) {
            imgs.push(img);
          });
          start++;
        }
        return imgs;
      }
      function doAutoHeight() {
        var imgs = getImageArray.apply(null, getVisibleSlideRange());
        raf(function() {
          imgsLoadedCheck(imgs, updateInnerWrapperHeight);
        });
      }
      function imgsLoadedCheck(imgs, cb) {
        if (imgsComplete) {
          return cb();
        }
        imgs.forEach(function(img, index2) {
          if (!lazyload && img.complete) {
            imgCompleted(img);
          }
          if (hasClass(img, imgCompleteClass)) {
            imgs.splice(index2, 1);
          }
        });
        if (!imgs.length) {
          return cb();
        }
        raf(function() {
          imgsLoadedCheck(imgs, cb);
        });
      }
      function additionalUpdates() {
        doLazyLoad();
        updateSlideStatus();
        updateLiveRegion();
        updateControlsStatus();
        updateNavStatus();
      }
      function update_carousel_transition_duration() {
        if (carousel && autoHeight) {
          middleWrapper.style[TRANSITIONDURATION] = speed / 1e3 + "s";
        }
      }
      function getMaxSlideHeight(slideStart, slideRange) {
        var heights = [];
        for (var i = slideStart, l = Math.min(slideStart + slideRange, slideCountNew); i < l; i++) {
          heights.push(slideItems[i].offsetHeight);
        }
        return Math.max.apply(null, heights);
      }
      function updateInnerWrapperHeight() {
        var maxHeight = autoHeight ? getMaxSlideHeight(index, items) : getMaxSlideHeight(cloneCount, slideCount), wp = middleWrapper ? middleWrapper : innerWrapper;
        if (wp.style.height !== maxHeight) {
          wp.style.height = maxHeight + "px";
        }
      }
      function setSlidePositions() {
        slidePositions = [0];
        var attr = horizontal ? "left" : "top", attr2 = horizontal ? "right" : "bottom", base = slideItems[0].getBoundingClientRect()[attr];
        forEach(slideItems, function(item, i) {
          if (i) {
            slidePositions.push(item.getBoundingClientRect()[attr] - base);
          }
          if (i === slideCountNew - 1) {
            slidePositions.push(item.getBoundingClientRect()[attr2] - base);
          }
        });
      }
      function updateSlideStatus() {
        var range = getVisibleSlideRange(), start = range[0], end = range[1];
        forEach(slideItems, function(item, i) {
          if (i >= start && i <= end) {
            if (hasAttr(item, "aria-hidden")) {
              removeAttrs(item, ["aria-hidden", "tabindex"]);
              addClass(item, slideActiveClass);
            }
          } else {
            if (!hasAttr(item, "aria-hidden")) {
              setAttrs(item, {
                "aria-hidden": "true",
                "tabindex": "-1"
              });
              removeClass(item, slideActiveClass);
            }
          }
        });
      }
      function updateGallerySlidePositions() {
        var l = index + Math.min(slideCount, items);
        for (var i = slideCountNew; i--; ) {
          var item = slideItems[i];
          if (i >= index && i < l) {
            addClass(item, "tns-moving");
            item.style.left = (i - index) * 100 / items + "%";
            addClass(item, animateIn);
            removeClass(item, animateNormal);
          } else if (item.style.left) {
            item.style.left = "";
            addClass(item, animateNormal);
            removeClass(item, animateIn);
          }
          removeClass(item, animateOut);
        }
        setTimeout(function() {
          forEach(slideItems, function(el) {
            removeClass(el, "tns-moving");
          });
        }, 300);
      }
      function updateNavStatus() {
        if (nav) {
          navCurrentIndex = navClicked >= 0 ? navClicked : getCurrentNavIndex();
          navClicked = -1;
          if (navCurrentIndex !== navCurrentIndexCached) {
            var navPrev = navItems[navCurrentIndexCached], navCurrent = navItems[navCurrentIndex];
            setAttrs(navPrev, {
              "tabindex": "-1",
              "aria-label": navStr + (navCurrentIndexCached + 1)
            });
            removeClass(navPrev, navActiveClass);
            setAttrs(navCurrent, { "aria-label": navStr + (navCurrentIndex + 1) + navStrCurrent });
            removeAttrs(navCurrent, "tabindex");
            addClass(navCurrent, navActiveClass);
            navCurrentIndexCached = navCurrentIndex;
          }
        }
      }
      function getLowerCaseNodeName(el) {
        return el.nodeName.toLowerCase();
      }
      function isButton(el) {
        return getLowerCaseNodeName(el) === "button";
      }
      function isAriaDisabled(el) {
        return el.getAttribute("aria-disabled") === "true";
      }
      function disEnableElement(isButton2, el, val2) {
        if (isButton2) {
          el.disabled = val2;
        } else {
          el.setAttribute("aria-disabled", val2.toString());
        }
      }
      function updateControlsStatus() {
        if (!controls || rewind || loop) {
          return;
        }
        var prevDisabled = prevIsButton ? prevButton.disabled : isAriaDisabled(prevButton), nextDisabled = nextIsButton ? nextButton.disabled : isAriaDisabled(nextButton), disablePrev = index <= indexMin ? true : false, disableNext = !rewind && index >= indexMax ? true : false;
        if (disablePrev && !prevDisabled) {
          disEnableElement(prevIsButton, prevButton, true);
        }
        if (!disablePrev && prevDisabled) {
          disEnableElement(prevIsButton, prevButton, false);
        }
        if (disableNext && !nextDisabled) {
          disEnableElement(nextIsButton, nextButton, true);
        }
        if (!disableNext && nextDisabled) {
          disEnableElement(nextIsButton, nextButton, false);
        }
      }
      function resetDuration(el, str) {
        if (TRANSITIONDURATION) {
          el.style[TRANSITIONDURATION] = str;
        }
      }
      function getSliderWidth() {
        return fixedWidth ? (fixedWidth + gutter) * slideCountNew : slidePositions[slideCountNew];
      }
      function getCenterGap(num) {
        if (num == null) {
          num = index;
        }
        var gap = edgePadding ? gutter : 0;
        return autoWidth ? (viewport - gap - (slidePositions[num + 1] - slidePositions[num] - gutter)) / 2 : fixedWidth ? (viewport - fixedWidth) / 2 : (items - 1) / 2;
      }
      function getRightBoundary() {
        var gap = edgePadding ? gutter : 0, result = viewport + gap - getSliderWidth();
        if (center && !loop) {
          result = fixedWidth ? -(fixedWidth + gutter) * (slideCountNew - 1) - getCenterGap() : getCenterGap(slideCountNew - 1) - slidePositions[slideCountNew - 1];
        }
        if (result > 0) {
          result = 0;
        }
        return result;
      }
      function getContainerTransformValue(num) {
        if (num == null) {
          num = index;
        }
        var val2;
        if (horizontal && !autoWidth) {
          if (fixedWidth) {
            val2 = -(fixedWidth + gutter) * num;
            if (center) {
              val2 += getCenterGap();
            }
          } else {
            var denominator = TRANSFORM ? slideCountNew : items;
            if (center) {
              num -= getCenterGap();
            }
            val2 = -num * 100 / denominator;
          }
        } else {
          val2 = -slidePositions[num];
          if (center && autoWidth) {
            val2 += getCenterGap();
          }
        }
        if (hasRightDeadZone) {
          val2 = Math.max(val2, rightBoundary);
        }
        val2 += horizontal && !autoWidth && !fixedWidth ? "%" : "px";
        return val2;
      }
      function doContainerTransformSilent(val2) {
        resetDuration(container, "0s");
        doContainerTransform(val2);
      }
      function doContainerTransform(val2) {
        if (val2 == null) {
          val2 = getContainerTransformValue();
        }
        container.style[transformAttr] = transformPrefix + val2 + transformPostfix;
      }
      function animateSlide(number, classOut, classIn, isOut) {
        var l = number + items;
        if (!loop) {
          l = Math.min(l, slideCountNew);
        }
        for (var i = number; i < l; i++) {
          var item = slideItems[i];
          if (!isOut) {
            item.style.left = (i - index) * 100 / items + "%";
          }
          if (animateDelay && TRANSITIONDELAY) {
            item.style[TRANSITIONDELAY] = item.style[ANIMATIONDELAY] = animateDelay * (i - number) / 1e3 + "s";
          }
          removeClass(item, classOut);
          addClass(item, classIn);
          if (isOut) {
            slideItemsOut.push(item);
          }
        }
      }
      var transformCore = function() {
        return carousel ? function() {
          resetDuration(container, "");
          if (TRANSITIONDURATION || !speed) {
            doContainerTransform();
            if (!speed || !isVisible(container)) {
              onTransitionEnd();
            }
          } else {
            jsTransform(container, transformAttr, transformPrefix, transformPostfix, getContainerTransformValue(), speed, onTransitionEnd);
          }
          if (!horizontal) {
            updateContentWrapperHeight();
          }
        } : function() {
          slideItemsOut = [];
          var eve = {};
          eve[TRANSITIONEND] = eve[ANIMATIONEND] = onTransitionEnd;
          removeEvents(slideItems[indexCached], eve);
          addEvents(slideItems[index], eve);
          animateSlide(indexCached, animateIn, animateOut, true);
          animateSlide(index, animateNormal, animateIn);
          if (!TRANSITIONEND || !ANIMATIONEND || !speed || !isVisible(container)) {
            onTransitionEnd();
          }
        };
      }();
      function render(e, sliderMoved) {
        if (updateIndexBeforeTransform) {
          updateIndex();
        }
        if (index !== indexCached || sliderMoved) {
          events.emit("indexChanged", info());
          events.emit("transitionStart", info());
          if (autoHeight) {
            doAutoHeight();
          }
          if (animating && e && ["click", "keydown"].indexOf(e.type) >= 0) {
            stopAutoplay();
          }
          running = true;
          transformCore();
        }
      }
      function strTrans(str) {
        return str.toLowerCase().replace(/-/g, "");
      }
      function onTransitionEnd(event) {
        if (carousel || running) {
          events.emit("transitionEnd", info(event));
          if (!carousel && slideItemsOut.length > 0) {
            for (var i = 0; i < slideItemsOut.length; i++) {
              var item = slideItemsOut[i];
              item.style.left = "";
              if (ANIMATIONDELAY && TRANSITIONDELAY) {
                item.style[ANIMATIONDELAY] = "";
                item.style[TRANSITIONDELAY] = "";
              }
              removeClass(item, animateOut);
              addClass(item, animateNormal);
            }
          }
          if (!event || !carousel && event.target.parentNode === container || event.target === container && strTrans(event.propertyName) === strTrans(transformAttr)) {
            if (!updateIndexBeforeTransform) {
              var indexTem = index;
              updateIndex();
              if (index !== indexTem) {
                events.emit("indexChanged", info());
                doContainerTransformSilent();
              }
            }
            if (nested === "inner") {
              events.emit("innerLoaded", info());
            }
            running = false;
            indexCached = index;
          }
        }
      }
      function goTo(targetIndex, e) {
        if (freeze) {
          return;
        }
        if (targetIndex === "prev") {
          onControlsClick(e, -1);
        } else if (targetIndex === "next") {
          onControlsClick(e, 1);
        } else {
          if (running) {
            if (preventActionWhenRunning) {
              return;
            } else {
              onTransitionEnd();
            }
          }
          var absIndex = getAbsIndex(), indexGap = 0;
          if (targetIndex === "first") {
            indexGap = -absIndex;
          } else if (targetIndex === "last") {
            indexGap = carousel ? slideCount - items - absIndex : slideCount - 1 - absIndex;
          } else {
            if (typeof targetIndex !== "number") {
              targetIndex = parseInt(targetIndex);
            }
            if (!isNaN(targetIndex)) {
              if (!e) {
                targetIndex = Math.max(0, Math.min(slideCount - 1, targetIndex));
              }
              indexGap = targetIndex - absIndex;
            }
          }
          if (!carousel && indexGap && Math.abs(indexGap) < items) {
            var factor = indexGap > 0 ? 1 : -1;
            indexGap += index + indexGap - slideCount >= indexMin ? slideCount * factor : slideCount * 2 * factor * -1;
          }
          index += indexGap;
          if (carousel && loop) {
            if (index < indexMin) {
              index += slideCount;
            }
            if (index > indexMax) {
              index -= slideCount;
            }
          }
          if (getAbsIndex(index) !== getAbsIndex(indexCached)) {
            render(e);
          }
        }
      }
      function onControlsClick(e, dir) {
        if (running) {
          if (preventActionWhenRunning) {
            return;
          } else {
            onTransitionEnd();
          }
        }
        var passEventObject;
        if (!dir) {
          e = getEvent(e);
          var target = getTarget(e);
          while (target !== controlsContainer && [prevButton, nextButton].indexOf(target) < 0) {
            target = target.parentNode;
          }
          var targetIn = [prevButton, nextButton].indexOf(target);
          if (targetIn >= 0) {
            passEventObject = true;
            dir = targetIn === 0 ? -1 : 1;
          }
        }
        if (rewind) {
          if (index === indexMin && dir === -1) {
            goTo("last", e);
            return;
          } else if (index === indexMax && dir === 1) {
            goTo("first", e);
            return;
          }
        }
        if (dir) {
          index += slideBy * dir;
          if (autoWidth) {
            index = Math.floor(index);
          }
          render(passEventObject || e && e.type === "keydown" ? e : null);
        }
      }
      function onNavClick(e) {
        if (running) {
          if (preventActionWhenRunning) {
            return;
          } else {
            onTransitionEnd();
          }
        }
        e = getEvent(e);
        var target = getTarget(e), navIndex;
        while (target !== navContainer && !hasAttr(target, "data-nav")) {
          target = target.parentNode;
        }
        if (hasAttr(target, "data-nav")) {
          var navIndex = navClicked = Number(getAttr(target, "data-nav")), targetIndexBase = fixedWidth || autoWidth ? navIndex * slideCount / pages : navIndex * items, targetIndex = navAsThumbnails ? navIndex : Math.min(Math.ceil(targetIndexBase), slideCount - 1);
          goTo(targetIndex, e);
          if (navCurrentIndex === navIndex) {
            if (animating) {
              stopAutoplay();
            }
            navClicked = -1;
          }
        }
      }
      function setAutoplayTimer() {
        autoplayTimer = setInterval(function() {
          onControlsClick(null, autoplayDirection);
        }, autoplayTimeout);
        animating = true;
      }
      function stopAutoplayTimer() {
        clearInterval(autoplayTimer);
        animating = false;
      }
      function updateAutoplayButton(action, txt) {
        setAttrs(autoplayButton, { "data-action": action });
        autoplayButton.innerHTML = autoplayHtmlStrings[0] + action + autoplayHtmlStrings[1] + txt;
      }
      function startAutoplay() {
        setAutoplayTimer();
        if (autoplayButton) {
          updateAutoplayButton("stop", autoplayText[1]);
        }
      }
      function stopAutoplay() {
        stopAutoplayTimer();
        if (autoplayButton) {
          updateAutoplayButton("start", autoplayText[0]);
        }
      }
      function play() {
        if (autoplay && !animating) {
          startAutoplay();
          autoplayUserPaused = false;
        }
      }
      function pause() {
        if (animating) {
          stopAutoplay();
          autoplayUserPaused = true;
        }
      }
      function toggleAutoplay() {
        if (animating) {
          stopAutoplay();
          autoplayUserPaused = true;
        } else {
          startAutoplay();
          autoplayUserPaused = false;
        }
      }
      function onVisibilityChange() {
        if (doc.hidden) {
          if (animating) {
            stopAutoplayTimer();
            autoplayVisibilityPaused = true;
          }
        } else if (autoplayVisibilityPaused) {
          setAutoplayTimer();
          autoplayVisibilityPaused = false;
        }
      }
      function mouseoverPause() {
        if (animating) {
          stopAutoplayTimer();
          autoplayHoverPaused = true;
        }
      }
      function mouseoutRestart() {
        if (autoplayHoverPaused) {
          setAutoplayTimer();
          autoplayHoverPaused = false;
        }
      }
      function onDocumentKeydown(e) {
        e = getEvent(e);
        var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);
        if (keyIndex >= 0) {
          onControlsClick(e, keyIndex === 0 ? -1 : 1);
        }
      }
      function onControlsKeydown(e) {
        e = getEvent(e);
        var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);
        if (keyIndex >= 0) {
          if (keyIndex === 0) {
            if (!prevButton.disabled) {
              onControlsClick(e, -1);
            }
          } else if (!nextButton.disabled) {
            onControlsClick(e, 1);
          }
        }
      }
      function setFocus(el) {
        el.focus();
      }
      function onNavKeydown(e) {
        e = getEvent(e);
        var curElement = doc.activeElement;
        if (!hasAttr(curElement, "data-nav")) {
          return;
        }
        var keyIndex = [KEYS.LEFT, KEYS.RIGHT, KEYS.ENTER, KEYS.SPACE].indexOf(e.keyCode), navIndex = Number(getAttr(curElement, "data-nav"));
        if (keyIndex >= 0) {
          if (keyIndex === 0) {
            if (navIndex > 0) {
              setFocus(navItems[navIndex - 1]);
            }
          } else if (keyIndex === 1) {
            if (navIndex < pages - 1) {
              setFocus(navItems[navIndex + 1]);
            }
          } else {
            navClicked = navIndex;
            goTo(navIndex, e);
          }
        }
      }
      function getEvent(e) {
        e = e || win2.event;
        return isTouchEvent(e) ? e.changedTouches[0] : e;
      }
      function getTarget(e) {
        return e.target || win2.event.srcElement;
      }
      function isTouchEvent(e) {
        return e.type.indexOf("touch") >= 0;
      }
      function preventDefaultBehavior(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
      }
      function getMoveDirectionExpected() {
        return getTouchDirection(toDegree(lastPosition.y - initPosition.y, lastPosition.x - initPosition.x), swipeAngle) === options.axis;
      }
      function onPanStart(e) {
        if (running) {
          if (preventActionWhenRunning) {
            return;
          } else {
            onTransitionEnd();
          }
        }
        if (autoplay && animating) {
          stopAutoplayTimer();
        }
        panStart = true;
        if (rafIndex) {
          caf(rafIndex);
          rafIndex = null;
        }
        var $ = getEvent(e);
        events.emit(isTouchEvent(e) ? "touchStart" : "dragStart", info(e));
        if (!isTouchEvent(e) && ["img", "a"].indexOf(getLowerCaseNodeName(getTarget(e))) >= 0) {
          preventDefaultBehavior(e);
        }
        lastPosition.x = initPosition.x = $.clientX;
        lastPosition.y = initPosition.y = $.clientY;
        if (carousel) {
          translateInit = parseFloat(container.style[transformAttr].replace(transformPrefix, ""));
          resetDuration(container, "0s");
        }
      }
      function onPanMove(e) {
        if (panStart) {
          var $ = getEvent(e);
          lastPosition.x = $.clientX;
          lastPosition.y = $.clientY;
          if (carousel) {
            if (!rafIndex) {
              rafIndex = raf(function() {
                panUpdate(e);
              });
            }
          } else {
            if (moveDirectionExpected === "?") {
              moveDirectionExpected = getMoveDirectionExpected();
            }
            if (moveDirectionExpected) {
              preventScroll = true;
            }
          }
          if ((typeof e.cancelable !== "boolean" || e.cancelable) && preventScroll) {
            e.preventDefault();
          }
        }
      }
      function panUpdate(e) {
        if (!moveDirectionExpected) {
          panStart = false;
          return;
        }
        caf(rafIndex);
        if (panStart) {
          rafIndex = raf(function() {
            panUpdate(e);
          });
        }
        if (moveDirectionExpected === "?") {
          moveDirectionExpected = getMoveDirectionExpected();
        }
        if (moveDirectionExpected) {
          if (!preventScroll && isTouchEvent(e)) {
            preventScroll = true;
          }
          try {
            if (e.type) {
              events.emit(isTouchEvent(e) ? "touchMove" : "dragMove", info(e));
            }
          } catch (err) {
          }
          var x = translateInit, dist = getDist(lastPosition, initPosition);
          if (!horizontal || fixedWidth || autoWidth) {
            x += dist;
            x += "px";
          } else {
            var percentageX = TRANSFORM ? dist * items * 100 / ((viewport + gutter) * slideCountNew) : dist * 100 / (viewport + gutter);
            x += percentageX;
            x += "%";
          }
          container.style[transformAttr] = transformPrefix + x + transformPostfix;
        }
      }
      function onPanEnd(e) {
        if (panStart) {
          if (rafIndex) {
            caf(rafIndex);
            rafIndex = null;
          }
          if (carousel) {
            resetDuration(container, "");
          }
          panStart = false;
          var $ = getEvent(e);
          lastPosition.x = $.clientX;
          lastPosition.y = $.clientY;
          var dist = getDist(lastPosition, initPosition);
          if (Math.abs(dist)) {
            if (!isTouchEvent(e)) {
              var target = getTarget(e);
              addEvents(target, { "click": function preventClick(e2) {
                preventDefaultBehavior(e2);
                removeEvents(target, { "click": preventClick });
              } });
            }
            if (carousel) {
              rafIndex = raf(function() {
                if (horizontal && !autoWidth) {
                  var indexMoved = -dist * items / (viewport + gutter);
                  indexMoved = dist > 0 ? Math.floor(indexMoved) : Math.ceil(indexMoved);
                  index += indexMoved;
                } else {
                  var moved = -(translateInit + dist);
                  if (moved <= 0) {
                    index = indexMin;
                  } else if (moved >= slidePositions[slideCountNew - 1]) {
                    index = indexMax;
                  } else {
                    var i = 0;
                    while (i < slideCountNew && moved >= slidePositions[i]) {
                      index = i;
                      if (moved > slidePositions[i] && dist < 0) {
                        index += 1;
                      }
                      i++;
                    }
                  }
                }
                render(e, dist);
                events.emit(isTouchEvent(e) ? "touchEnd" : "dragEnd", info(e));
              });
            } else {
              if (moveDirectionExpected) {
                onControlsClick(e, dist > 0 ? -1 : 1);
              }
            }
          }
        }
        if (options.preventScrollOnTouch === "auto") {
          preventScroll = false;
        }
        if (swipeAngle) {
          moveDirectionExpected = "?";
        }
        if (autoplay && !animating) {
          setAutoplayTimer();
        }
      }
      function updateContentWrapperHeight() {
        var wp = middleWrapper ? middleWrapper : innerWrapper;
        wp.style.height = slidePositions[index + items] - slidePositions[index] + "px";
      }
      function getPages() {
        var rough = fixedWidth ? (fixedWidth + gutter) * slideCount / viewport : slideCount / items;
        return Math.min(Math.ceil(rough), slideCount);
      }
      function updateNavVisibility() {
        if (!nav || navAsThumbnails) {
          return;
        }
        if (pages !== pagesCached) {
          var min = pagesCached, max = pages, fn = showElement;
          if (pagesCached > pages) {
            min = pages;
            max = pagesCached;
            fn = hideElement;
          }
          while (min < max) {
            fn(navItems[min]);
            min++;
          }
          pagesCached = pages;
        }
      }
      function info(e) {
        return {
          container,
          slideItems,
          navContainer,
          navItems,
          controlsContainer,
          hasControls,
          prevButton,
          nextButton,
          items,
          slideBy,
          cloneCount,
          slideCount,
          slideCountNew,
          index,
          indexCached,
          displayIndex: getCurrentSlide(),
          navCurrentIndex,
          navCurrentIndexCached,
          pages,
          pagesCached,
          sheet,
          isOn,
          event: e || {}
        };
      }
      return {
        version: "2.9.3",
        getInfo: info,
        events,
        goTo,
        play,
        pause,
        isOn,
        updateSliderHeight: updateInnerWrapperHeight,
        refresh: initSliderTransform,
        destroy,
        rebuild: function() {
          return tns2(extend(options, optionsElements));
        }
      };
    };
    return tns2;
  }();

  // js/bundle.ts
  var import_glightbox_min = __toESM(require_glightbox_min());
})();
