function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import e, { useState as t, useRef as i, useEffect as s, useCallback as n, forwardRef as r, useMemo as o, useImperativeHandle as a } from "react";
var h = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function l(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var u,
  c = {
    exports: {}
  };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var m,
  d,
  f,
  p = (u || (u = 1, m = c, function () {
    var e = {}.hasOwnProperty;
    function t() {
      for (var e = "", t = 0; t < arguments.length; t++) {
        var n = arguments[t];
        n && (e = s(e, i(n)));
      }
      return e;
    }
    function i(i) {
      if ("string" == typeof i || "number" == typeof i) return i;
      if ("object" != typeof i) return "";
      if (Array.isArray(i)) return t.apply(null, i);
      if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) return i.toString();
      var n = "";
      for (var r in i) e.call(i, r) && i[r] && (n = s(n, r));
      return n;
    }
    function s(e, t) {
      return t ? e ? e + " " + t : e + t : e;
    }
    m.exports ? (t.default = t, m.exports = t) : window.classNames = t;
  }()), c.exports),
  v = l(p);
var S,
  z,
  w = (f || (f = 1, d = function e(t, i) {
    if (t === i) return !0;
    if (t && i && "object" == typeof t && "object" == typeof i) {
      if (t.constructor !== i.constructor) return !1;
      var s, n, r;
      if (Array.isArray(t)) {
        if ((s = t.length) != i.length) return !1;
        for (n = s; 0 !== n--;) if (!e(t[n], i[n])) return !1;
        return !0;
      }
      if (t instanceof Map && i instanceof Map) {
        if (t.size !== i.size) return !1;
        for (n of t.entries()) if (!i.has(n[0])) return !1;
        for (n of t.entries()) if (!e(n[1], i.get(n[0]))) return !1;
        return !0;
      }
      if (t instanceof Set && i instanceof Set) {
        if (t.size !== i.size) return !1;
        for (n of t.entries()) if (!i.has(n[0])) return !1;
        return !0;
      }
      if (ArrayBuffer.isView(t) && ArrayBuffer.isView(i)) {
        if ((s = t.length) != i.length) return !1;
        for (n = s; 0 !== n--;) if (t[n] !== i[n]) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === i.source && t.flags === i.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === i.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === i.toString();
      if ((s = (r = Object.keys(t)).length) !== Object.keys(i).length) return !1;
      for (n = s; 0 !== n--;) if (!Object.prototype.hasOwnProperty.call(i, r[n])) return !1;
      for (n = s; 0 !== n--;) {
        var o = r[n];
        if (!e(t[o], i[o])) return !1;
      }
      return !0;
    }
    return t != t && i != i;
  }), d),
  g = l(w);
var y,
  b,
  I = l(function () {
    if (z) return S;
    z = 1;
    var e = /^\s+|\s+$/g,
      t = /^[-+]0x[0-9a-f]+$/i,
      i = /^0b[01]+$/i,
      s = /^0o[0-7]+$/i,
      n = parseInt,
      r = Object.prototype.toString;
    function o(e) {
      var t = typeof e;
      return !!e && ("object" == t || "function" == t);
    }
    function a(a) {
      if ("number" == typeof a) return a;
      if (function (e) {
        return "symbol" == typeof e || function (e) {
          return !!e && "object" == typeof e;
        }(e) && "[object Symbol]" == r.call(e);
      }(a)) return NaN;
      if (o(a)) {
        var h = "function" == typeof a.valueOf ? a.valueOf() : a;
        a = o(h) ? h + "" : h;
      }
      if ("string" != typeof a) return 0 === a ? a : +a;
      a = a.replace(e, "");
      var l = i.test(a);
      return l || s.test(a) ? n(a.slice(2), l ? 2 : 8) : t.test(a) ? NaN : +a;
    }
    return S = function S(e, t, i) {
      return void 0 === i && (i = t, t = void 0), void 0 !== i && (i = (i = a(i)) == i ? i : 0), void 0 !== t && (t = (t = a(t)) == t ? t : 0), function (e, t, i) {
        return e == e && (void 0 !== i && (e = e <= i ? e : i), void 0 !== t && (e = e >= t ? e : t)), e;
      }(a(e), t, i);
    };
  }());
var x = l(function () {
  if (b) return y;
  b = 1;
  var e = /^\s+|\s+$/g,
    t = /^[-+]0x[0-9a-f]+$/i,
    i = /^0b[01]+$/i,
    s = /^0o[0-7]+$/i,
    n = parseInt,
    r = "object" == typeof h && h && h.Object === Object && h,
    o = "object" == typeof self && self && self.Object === Object && self,
    a = r || o || Function("return this")(),
    l = Object.prototype.toString,
    u = Math.max,
    c = Math.min,
    m = function m() {
      return a.Date.now();
    };
  function d(e) {
    var t = typeof e;
    return !!e && ("object" == t || "function" == t);
  }
  function f(r) {
    if ("number" == typeof r) return r;
    if (function (e) {
      return "symbol" == typeof e || function (e) {
        return !!e && "object" == typeof e;
      }(e) && "[object Symbol]" == l.call(e);
    }(r)) return NaN;
    if (d(r)) {
      var o = "function" == typeof r.valueOf ? r.valueOf() : r;
      r = d(o) ? o + "" : o;
    }
    if ("string" != typeof r) return 0 === r ? r : +r;
    r = r.replace(e, "");
    var a = i.test(r);
    return a || s.test(r) ? n(r.slice(2), a ? 2 : 8) : t.test(r) ? NaN : +r;
  }
  return y = function y(e, t, i) {
    var s,
      n,
      r,
      o,
      a,
      h,
      l = 0,
      p = !1,
      v = !1,
      S = !0;
    if ("function" != typeof e) throw new TypeError("Expected a function");
    function z(t) {
      var i = s,
        r = n;
      return s = n = void 0, l = t, o = e.apply(r, i);
    }
    function w(e) {
      var i = e - h;
      return void 0 === h || i >= t || i < 0 || v && e - l >= r;
    }
    function g() {
      var e = m();
      if (w(e)) return y(e);
      a = setTimeout(g, function (e) {
        var i = t - (e - h);
        return v ? c(i, r - (e - l)) : i;
      }(e));
    }
    function y(e) {
      return a = void 0, S && s ? z(e) : (s = n = void 0, o);
    }
    function b() {
      var e = m(),
        i = w(e);
      if (s = arguments, n = this, h = e, i) {
        if (void 0 === a) return function (e) {
          return l = e, a = setTimeout(g, t), p ? z(e) : o;
        }(h);
        if (v) return a = setTimeout(g, t), z(h);
      }
      return void 0 === a && (a = setTimeout(g, t)), o;
    }
    return t = f(t) || 0, d(i) && (p = !!i.leading, r = (v = "maxWait" in i) ? u(f(i.maxWait) || 0, t) : r, S = "trailing" in i ? !!i.trailing : S), b.cancel = function () {
      void 0 !== a && clearTimeout(a), l = 0, s = h = n = a = void 0;
    }, b.flush = function () {
      return void 0 === a ? o : y(m());
    }, b;
  };
}());
var _ = {
  width: void 0,
  height: void 0
};
function V(e) {
  var r = e.ref,
    _e$box = e.box,
    o = _e$box === void 0 ? "content-box" : _e$box,
    _t = t(_),
    _t$ = _t[0],
    a = _t$.width,
    h = _t$.height,
    l = _t[1],
    u = function () {
      var e = i(!1);
      return s(() => (e.current = !0, () => {
        e.current = !1;
      }), []), n(() => e.current, []);
    }(),
    c = i(_extends({}, _)),
    m = i(void 0);
  return m.current = e.onResize, s(() => {
    if (!r.current) return;
    if ("undefined" == typeof window || !("ResizeObserver" in window)) return;
    var e = new ResizeObserver(_ref => {
      var e = _ref[0];
      var t = "border-box" === o ? "borderBoxSize" : "device-pixel-content-box" === o ? "devicePixelContentBoxSize" : "contentBoxSize",
        i = E(e, t, "inlineSize"),
        s = E(e, t, "blockSize");
      if (c.current.width !== i || c.current.height !== s) {
        var _e = {
          width: i,
          height: s
        };
        c.current.width = i, c.current.height = s, m.current ? m.current(_e) : u() && l(_e);
      }
    });
    return e.observe(r.current, {
      box: o
    }), () => {
      e.disconnect();
    };
  }, [o, r, u]), {
    width: a,
    height: h
  };
}
function E(e, t, i) {
  return e[t] ? Array.isArray(e[t]) ? e[t][0][i] : e[t][i] : "contentBoxSize" === t ? e.contentRect["inlineSize" === i ? "width" : "height"] : void 0;
}
var N = "allotment-module_splitView__L-yRc",
  L = "allotment-module_sashContainer__fzwJF",
  D = "allotment-module_splitViewContainer__rQnVa",
  O = "allotment-module_splitViewView__MGZ6O",
  M = "allotment-module_vertical__WSwwa",
  P = "allotment-module_horizontal__7doS8",
  T = "allotment-module_separatorBorder__x-rDS";
var C,
  A = !1,
  j = !1;
"object" == typeof navigator && (C = navigator.userAgent, j = C.indexOf("Macintosh") >= 0, A = (C.indexOf("Macintosh") >= 0 || C.indexOf("iPad") >= 0 || C.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0);
var F = A,
  H = j;
class Y {
  constructor() {
    this._size = void 0;
  }
  getSize() {
    return this._size;
  }
  setSize(e) {
    this._size = e;
  }
}
function k(e, t) {
  var i = e.length,
    s = i - t.length;
  return s >= 0 && e.slice(s, i) === t;
}
var $,
  B = {
    exports: {}
  };
var R = ($ || ($ = 1, function (e) {
    var t = Object.prototype.hasOwnProperty,
      i = "~";
    function s() {}
    function n(e, t, i) {
      this.fn = e, this.context = t, this.once = i || !1;
    }
    function r(e, t, s, r, o) {
      if ("function" != typeof s) throw new TypeError("The listener must be a function");
      var a = new n(s, r || e, o),
        h = i ? i + t : t;
      return e._events[h] ? e._events[h].fn ? e._events[h] = [e._events[h], a] : e._events[h].push(a) : (e._events[h] = a, e._eventsCount++), e;
    }
    function o(e, t) {
      0 === --e._eventsCount ? e._events = new s() : delete e._events[t];
    }
    function a() {
      this._events = new s(), this._eventsCount = 0;
    }
    Object.create && (s.prototype = Object.create(null), new s().__proto__ || (i = !1)), a.prototype.eventNames = function () {
      var e,
        s,
        n = [];
      if (0 === this._eventsCount) return n;
      for (s in e = this._events) t.call(e, s) && n.push(i ? s.slice(1) : s);
      return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n;
    }, a.prototype.listeners = function (e) {
      var t = i ? i + e : e,
        s = this._events[t];
      if (!s) return [];
      if (s.fn) return [s.fn];
      for (var n = 0, r = s.length, o = new Array(r); n < r; n++) o[n] = s[n].fn;
      return o;
    }, a.prototype.listenerCount = function (e) {
      var t = i ? i + e : e,
        s = this._events[t];
      return s ? s.fn ? 1 : s.length : 0;
    }, a.prototype.emit = function (e, t, s, n, r, o) {
      var a = i ? i + e : e;
      if (!this._events[a]) return !1;
      var h,
        l,
        u = this._events[a],
        c = arguments.length;
      if (u.fn) {
        switch (u.once && this.removeListener(e, u.fn, void 0, !0), c) {
          case 1:
            return u.fn.call(u.context), !0;
          case 2:
            return u.fn.call(u.context, t), !0;
          case 3:
            return u.fn.call(u.context, t, s), !0;
          case 4:
            return u.fn.call(u.context, t, s, n), !0;
          case 5:
            return u.fn.call(u.context, t, s, n, r), !0;
          case 6:
            return u.fn.call(u.context, t, s, n, r, o), !0;
        }
        for (l = 1, h = new Array(c - 1); l < c; l++) h[l - 1] = arguments[l];
        u.fn.apply(u.context, h);
      } else {
        var m,
          d = u.length;
        for (l = 0; l < d; l++) switch (u[l].once && this.removeListener(e, u[l].fn, void 0, !0), c) {
          case 1:
            u[l].fn.call(u[l].context);
            break;
          case 2:
            u[l].fn.call(u[l].context, t);
            break;
          case 3:
            u[l].fn.call(u[l].context, t, s);
            break;
          case 4:
            u[l].fn.call(u[l].context, t, s, n);
            break;
          default:
            if (!h) for (m = 1, h = new Array(c - 1); m < c; m++) h[m - 1] = arguments[m];
            u[l].fn.apply(u[l].context, h);
        }
      }
      return !0;
    }, a.prototype.on = function (e, t, i) {
      return r(this, e, t, i, !1);
    }, a.prototype.once = function (e, t, i) {
      return r(this, e, t, i, !0);
    }, a.prototype.removeListener = function (e, t, s, n) {
      var r = i ? i + e : e;
      if (!this._events[r]) return this;
      if (!t) return o(this, r), this;
      var a = this._events[r];
      if (a.fn) a.fn !== t || n && !a.once || s && a.context !== s || o(this, r);else {
        for (var h = 0, l = [], u = a.length; h < u; h++) (a[h].fn !== t || n && !a[h].once || s && a[h].context !== s) && l.push(a[h]);
        l.length ? this._events[r] = 1 === l.length ? l[0] : l : o(this, r);
      }
      return this;
    }, a.prototype.removeAllListeners = function (e) {
      var t;
      return e ? (t = i ? i + e : e, this._events[t] && o(this, t)) : (this._events = new s(), this._eventsCount = 0), this;
    }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = i, a.EventEmitter = a, e.exports = a;
  }(B)), B.exports),
  W = l(R);
function X(e, t) {
  var i = e.indexOf(t);
  i > -1 && (e.splice(i, 1), e.unshift(t));
}
function G(e, t) {
  var i = e.indexOf(t);
  i > -1 && (e.splice(i, 1), e.push(t));
}
function J(e, t, i) {
  if (i === void 0) {
    i = 1;
  }
  var s = Math.max(0, Math.ceil((t - e) / i)),
    n = new Array(s);
  var r = -1;
  for (; ++r < s;) n[r] = e + r * i;
  return n;
}
var U = "sash-module_sash__K-9lB",
  K = "sash-module_disabled__Hm-wx",
  Z = "sash-module_mac__Jf6OJ",
  Q = "sash-module_vertical__pB-rs",
  q = "sash-module_minimum__-UKxp",
  ee = "sash-module_maximum__TCWxD",
  te = "sash-module_horizontal__kFbiw",
  ie = "sash-module_hover__80W6I",
  se = "sash-module_active__bJspD";
var ne = function (e) {
    return e.Vertical = "VERTICAL", e.Horizontal = "HORIZONTAL", e;
  }({}),
  re = function (e) {
    return e.Disabled = "DISABLED", e.Minimum = "MINIMUM", e.Maximum = "MAXIMUM", e.Enabled = "ENABLED", e;
  }({}),
  oe = F ? 20 : 8;
var ae = new W();
class he extends W {
  get state() {
    return this._state;
  }
  set state(e) {
    this._state !== e && (this.el.classList.toggle(K, e === re.Disabled), this.el.classList.toggle("sash-disabled", e === re.Disabled), this.el.classList.toggle(q, e === re.Minimum), this.el.classList.toggle("sash-minimum", e === re.Minimum), this.el.classList.toggle(ee, e === re.Maximum), this.el.classList.toggle("sash-maximum", e === re.Maximum), this._state = e, this.emit("enablementChange", e));
  }
  constructor(e, t, i) {
    var _i$orientation;
    super(), this.el = void 0, this.layoutProvider = void 0, this.orientation = void 0, this.size = void 0, this.hoverDelay = 300, this.hoverDelayer = x(e => e.classList.add("sash-hover", ie), this.hoverDelay), this._state = re.Enabled, this.onPointerStart = e => {
      var t = e.pageX,
        i = e.pageY,
        s = {
          startX: t,
          currentX: t,
          startY: i,
          currentY: i
        };
      this.el.classList.add("sash-active", se), this.emit("start", s), this.el.setPointerCapture(e.pointerId);
      var n = e => {
          e.preventDefault();
          var s = {
            startX: t,
            currentX: e.pageX,
            startY: i,
            currentY: e.pageY
          };
          this.emit("change", s);
        },
        r = e => {
          e.preventDefault(), this.el.classList.remove("sash-active", se), this.hoverDelayer.cancel(), this.emit("end"), this.el.releasePointerCapture(e.pointerId), window.removeEventListener("pointermove", n), window.removeEventListener("pointerup", r);
        };
      window.addEventListener("pointermove", n), window.addEventListener("pointerup", r);
    }, this.onPointerDoublePress = () => {
      this.emit("reset");
    }, this.onMouseEnter = () => {
      this.el.classList.contains(se) ? (this.hoverDelayer.cancel(), this.el.classList.add("sash-hover", ie)) : this.hoverDelayer(this.el);
    }, this.onMouseLeave = () => {
      this.hoverDelayer.cancel(), this.el.classList.remove("sash-hover", ie);
    }, this.el = document.createElement("div"), this.el.classList.add("sash", U), this.el.dataset.testid = "sash", e.append(this.el), H && this.el.classList.add("sash-mac", Z), this.el.addEventListener("pointerdown", this.onPointerStart), this.el.addEventListener("dblclick", this.onPointerDoublePress), this.el.addEventListener("mouseenter", this.onMouseEnter), this.el.addEventListener("mouseleave", this.onMouseLeave), "number" == typeof i.size ? (this.size = i.size, i.orientation === ne.Vertical ? this.el.style.width = this.size + "px" : this.el.style.height = this.size + "px") : (this.size = oe, ae.on("onDidChangeGlobalSize", e => {
      this.size = e, this.layout();
    })), this.layoutProvider = t, this.orientation = (_i$orientation = i.orientation) != null ? _i$orientation : ne.Vertical, this.orientation === ne.Horizontal ? (this.el.classList.add("sash-horizontal", te), this.el.classList.remove("sash-vertical", Q)) : (this.el.classList.remove("sash-horizontal", te), this.el.classList.add("sash-vertical", Q)), this.layout();
  }
  layout() {
    if (this.orientation === ne.Vertical) {
      var _e2 = this.layoutProvider;
      this.el.style.left = _e2.getVerticalSashLeft(this) - this.size / 2 + "px", _e2.getVerticalSashTop && (this.el.style.top = _e2.getVerticalSashTop(this) + "px"), _e2.getVerticalSashHeight && (this.el.style.height = _e2.getVerticalSashHeight(this) + "px");
    } else {
      var _e3 = this.layoutProvider;
      this.el.style.top = _e3.getHorizontalSashTop(this) - this.size / 2 + "px", _e3.getHorizontalSashLeft && (this.el.style.left = _e3.getHorizontalSashLeft(this) + "px"), _e3.getHorizontalSashWidth && (this.el.style.width = _e3.getHorizontalSashWidth(this) + "px");
    }
  }
  dispose() {
    this.el.removeEventListener("pointerdown", this.onPointerStart), this.el.removeEventListener("dblclick", this.onPointerDoublePress), this.el.removeEventListener("mouseenter", this.onMouseEnter), this.el.removeEventListener("mouseleave", () => this.onMouseLeave), this.el.remove();
  }
}
var le;
var ue;
(ue = le || (le = {})).Distribute = {
  type: "distribute"
}, ue.Split = function (e) {
  return {
    type: "split",
    index: e
  };
}, ue.Invisible = function (e) {
  return {
    type: "invisible",
    cachedVisibleSize: e
  };
};
var ce = function (e) {
  return e.Normal = "NORMAL", e.Low = "LOW", e.High = "HIGH", e;
}({});
class me {
  constructor(e, t, i) {
    this.container = void 0, this.view = void 0, this._size = void 0, this._cachedVisibleSize = void 0, this.container = e, this.view = t, this.container.classList.add("split-view-view", O), this.container.dataset.testid = "split-view-view", "number" == typeof i ? (this._size = i, this._cachedVisibleSize = void 0, e.classList.add("split-view-view-visible")) : (this._size = 0, this._cachedVisibleSize = i.cachedVisibleSize);
  }
  set size(e) {
    this._size = e;
  }
  get size() {
    return this._size;
  }
  get priority() {
    return this.view.priority;
  }
  get snap() {
    return !!this.view.snap;
  }
  get cachedVisibleSize() {
    return this._cachedVisibleSize;
  }
  get visible() {
    return void 0 === this._cachedVisibleSize;
  }
  setVisible(e, t) {
    e !== this.visible && (e ? (this.size = I(this._cachedVisibleSize, this.viewMinimumSize, this.viewMaximumSize), this._cachedVisibleSize = void 0) : (this._cachedVisibleSize = "number" == typeof t ? t : this.size, this.size = 0), this.container.classList.toggle("split-view-view-visible", e), this.view.setVisible && this.view.setVisible(e));
  }
  get minimumSize() {
    return this.visible ? this.view.minimumSize : 0;
  }
  get viewMinimumSize() {
    return this.view.minimumSize;
  }
  get maximumSize() {
    return this.visible ? this.view.maximumSize : 0;
  }
  get viewMaximumSize() {
    return this.view.maximumSize;
  }
  set enabled(e) {
    this.container.style.pointerEvents = e ? "" : "none";
  }
  layout(e) {
    this.layoutContainer(e), this.view.layout(this.size, e);
  }
}
class de extends me {
  layoutContainer(e) {
    this.container.style.left = e + "px", this.container.style.width = this.size + "px";
  }
}
class fe extends me {
  layoutContainer(e) {
    this.container.style.top = e + "px", this.container.style.height = this.size + "px";
  }
}
class pe extends W {
  get startSnappingEnabled() {
    return this._startSnappingEnabled;
  }
  set startSnappingEnabled(e) {
    this._startSnappingEnabled !== e && (this._startSnappingEnabled = e, this.updateSashEnablement());
  }
  get endSnappingEnabled() {
    return this._endSnappingEnabled;
  }
  set endSnappingEnabled(e) {
    this._endSnappingEnabled !== e && (this._endSnappingEnabled = e, this.updateSashEnablement());
  }
  constructor(e, t, i, s, n) {
    var _t$orientation, _t$proportionalLayout;
    if (t === void 0) {
      t = {};
    }
    if (super(), this.onDidChange = void 0, this.onDidDragStart = void 0, this.onDidDragEnd = void 0, this.orientation = void 0, this.sashContainer = void 0, this.size = 0, this.contentSize = 0, this.proportions = void 0, this.viewItems = [], this.sashItems = [], this.sashDragState = void 0, this.proportionalLayout = void 0, this.getSashOrthogonalSize = void 0, this._startSnappingEnabled = !0, this._endSnappingEnabled = !0, this.onSashEnd = e => {
      this.emit("sashchange", e), this.saveProportions();
      for (var _e4 of this.viewItems) _e4.enabled = !0;
    }, this.orientation = (_t$orientation = t.orientation) != null ? _t$orientation : ne.Vertical, this.proportionalLayout = (_t$proportionalLayout = t.proportionalLayout) != null ? _t$proportionalLayout : !0, this.getSashOrthogonalSize = t.getSashOrthogonalSize, i && (this.onDidChange = i), s && (this.onDidDragStart = s), n && (this.onDidDragEnd = n), this.sashContainer = document.createElement("div"), this.sashContainer.classList.add("sash-container", L), e.prepend(this.sashContainer), t.descriptor) {
      this.size = t.descriptor.size;
      for (var _ref3 of t.descriptor.views.entries()) {
        var _e5 = _ref3[0];
        var _i = _ref3[1];
        {
          var _t2 = _i.size,
            _s = _i.container,
            _n = _i.view;
          this.addView(_s, _n, _t2, _e5, !0);
        }
      }
      this.contentSize = this.viewItems.reduce((e, t) => e + t.size, 0), this.saveProportions();
    }
  }
  addView(e, t, i, s, n) {
    if (s === void 0) {
      s = this.viewItems.length;
    }
    var r;
    r = "number" == typeof i ? i : "split" === i.type ? this.getViewSize(i.index) / 2 : "invisible" === i.type ? {
      cachedVisibleSize: i.cachedVisibleSize
    } : t.minimumSize;
    var o = this.orientation === ne.Vertical ? new fe(e, t, r) : new de(e, t, r);
    if (this.viewItems.splice(s, 0, o), this.viewItems.length > 1) {
      var _e6 = this.orientation === ne.Vertical ? new he(this.sashContainer, {
          getHorizontalSashTop: e => this.getSashPosition(e),
          getHorizontalSashWidth: this.getSashOrthogonalSize
        }, {
          orientation: ne.Horizontal
        }) : new he(this.sashContainer, {
          getVerticalSashLeft: e => this.getSashPosition(e),
          getVerticalSashHeight: this.getSashOrthogonalSize
        }, {
          orientation: ne.Vertical
        }),
        _t3 = this.orientation === ne.Vertical ? t => ({
          sash: _e6,
          start: t.startY,
          current: t.currentY
        }) : t => ({
          sash: _e6,
          start: t.startX,
          current: t.currentX
        });
      _e6.on("start", e => {
        var _this$onDidDragStart;
        this.emit("sashDragStart"), this.onSashStart(_t3(e));
        var i = this.viewItems.map(e => e.size);
        (_this$onDidDragStart = this.onDidDragStart) == null || _this$onDidDragStart.call(this, i);
      }), _e6.on("change", e => this.onSashChange(_t3(e))), _e6.on("end", () => {
        var _this$onDidDragEnd;
        this.emit("sashDragEnd"), this.onSashEnd(this.sashItems.findIndex(t => t.sash === _e6));
        var t = this.viewItems.map(e => e.size);
        (_this$onDidDragEnd = this.onDidDragEnd) == null || _this$onDidDragEnd.call(this, t);
      }), _e6.on("reset", () => {
        var t = this.sashItems.findIndex(t => t.sash === _e6),
          i = J(t, -1, -1),
          s = J(t + 1, this.viewItems.length),
          n = this.findFirstSnapIndex(i),
          r = this.findFirstSnapIndex(s);
        ("number" != typeof n || this.viewItems[n].visible) && ("number" != typeof r || this.viewItems[r].visible) && this.emit("sashreset", t);
      });
      var _i2 = {
        sash: _e6
      };
      this.sashItems.splice(s - 1, 0, _i2);
    }
    n || this.relayout(), n || "number" == typeof i || "distribute" !== i.type || this.distributeViewSizes();
  }
  removeView(e, t) {
    if (e < 0 || e >= this.viewItems.length) throw new Error("Index out of bounds");
    var i = this.viewItems.splice(e, 1)[0].view;
    if (this.viewItems.length >= 1) {
      var _t4 = Math.max(e - 1, 0);
      this.sashItems.splice(_t4, 1)[0].sash.dispose();
    }
    return this.relayout(), t && "distribute" === t.type && this.distributeViewSizes(), i;
  }
  moveView(e, t, i) {
    var s = this.getViewCachedVisibleSize(t),
      n = void 0 === s ? this.getViewSize(t) : le.Invisible(s),
      r = this.removeView(t);
    this.addView(e, r, n, i);
  }
  getViewCachedVisibleSize(e) {
    if (e < 0 || e >= this.viewItems.length) throw new Error("Index out of bounds");
    return this.viewItems[e].cachedVisibleSize;
  }
  layout(e) {
    if (e === void 0) {
      e = this.size;
    }
    var t = Math.max(this.size, this.contentSize);
    if (this.size = e, this.proportions) for (var _t5 = 0; _t5 < this.viewItems.length; _t5++) {
      var _i3 = this.viewItems[_t5];
      _i3.size = I(Math.round(this.proportions[_t5] * e), _i3.minimumSize, _i3.maximumSize);
    } else {
      var _i4 = J(0, this.viewItems.length),
        _s2 = _i4.filter(e => this.viewItems[e].priority === ce.Low),
        _n2 = _i4.filter(e => this.viewItems[e].priority === ce.High);
      this.resize(this.viewItems.length - 1, e - t, void 0, _s2, _n2);
    }
    this.distributeEmptySpace(), this.layoutViews();
  }
  resizeView(e, t) {
    if (e < 0 || e >= this.viewItems.length) return;
    var i = J(0, this.viewItems.length).filter(t => t !== e),
      s = [...i.filter(e => this.viewItems[e].priority === ce.Low), e],
      n = i.filter(e => this.viewItems[e].priority === ce.High),
      r = this.viewItems[e];
    t = Math.round(t), t = I(t, r.minimumSize, Math.min(r.maximumSize, this.size)), r.size = t, this.relayout(s, n);
  }
  resizeViews(e) {
    for (var _t6 = 0; _t6 < e.length; _t6++) {
      var _i5 = this.viewItems[_t6];
      var _s3 = e[_t6];
      _s3 = Math.round(_s3), _s3 = I(_s3, _i5.minimumSize, Math.min(_i5.maximumSize, this.size)), _i5.size = _s3;
    }
    this.contentSize = this.viewItems.reduce((e, t) => e + t.size, 0), this.saveProportions(), this.layout(this.size);
  }
  getViewSize(e) {
    return e < 0 || e >= this.viewItems.length ? -1 : this.viewItems[e].size;
  }
  isViewVisible(e) {
    if (e < 0 || e >= this.viewItems.length) throw new Error("Index out of bounds");
    return this.viewItems[e].visible;
  }
  setViewVisible(e, t) {
    if (e < 0 || e >= this.viewItems.length) throw new Error("Index out of bounds");
    this.viewItems[e].setVisible(t), this.distributeEmptySpace(e), this.layoutViews(), this.saveProportions();
  }
  distributeViewSizes() {
    var e = [];
    var t = 0;
    for (var _i6 of this.viewItems) _i6.maximumSize - _i6.minimumSize > 0 && (e.push(_i6), t += _i6.size);
    var i = Math.floor(t / e.length);
    for (var _t7 of e) _t7.size = I(i, _t7.minimumSize, _t7.maximumSize);
    var s = J(0, this.viewItems.length),
      n = s.filter(e => this.viewItems[e].priority === ce.Low),
      r = s.filter(e => this.viewItems[e].priority === ce.High);
    this.relayout(n, r);
  }
  dispose() {
    this.sashItems.forEach(e => e.sash.dispose()), this.sashItems = [], this.sashContainer.remove();
  }
  relayout(e, t) {
    var i = this.viewItems.reduce((e, t) => e + t.size, 0);
    this.resize(this.viewItems.length - 1, this.size - i, void 0, e, t), this.distributeEmptySpace(), this.layoutViews(), this.saveProportions();
  }
  onSashStart(_ref4) {
    var e = _ref4.sash,
      t = _ref4.start;
    var i = this.sashItems.findIndex(t => t.sash === e);
    (e => {
      var t = this.viewItems.map(e => e.size);
      var s,
        n,
        r = Number.NEGATIVE_INFINITY,
        o = Number.POSITIVE_INFINITY;
      var a = J(i, -1, -1),
        h = J(i + 1, this.viewItems.length),
        l = a.reduce((e, i) => e + (this.viewItems[i].minimumSize - t[i]), 0),
        u = a.reduce((e, i) => e + (this.viewItems[i].viewMaximumSize - t[i]), 0),
        c = 0 === h.length ? Number.POSITIVE_INFINITY : h.reduce((e, i) => e + (t[i] - this.viewItems[i].minimumSize), 0),
        m = 0 === h.length ? Number.NEGATIVE_INFINITY : h.reduce((e, i) => e + (t[i] - this.viewItems[i].viewMaximumSize), 0);
      r = Math.max(l, m), o = Math.min(c, u);
      var d = this.findFirstSnapIndex(a),
        f = this.findFirstSnapIndex(h);
      if ("number" == typeof d) {
        var _e7 = this.viewItems[d],
          _t8 = Math.floor(_e7.viewMinimumSize / 2);
        s = {
          index: d,
          limitDelta: _e7.visible ? r - _t8 : r + _t8,
          size: _e7.size
        };
      }
      if ("number" == typeof f) {
        var _e8 = this.viewItems[f],
          _t9 = Math.floor(_e8.viewMinimumSize / 2);
        n = {
          index: f,
          limitDelta: _e8.visible ? o + _t9 : o - _t9,
          size: _e8.size
        };
      }
      this.sashDragState = {
        start: e,
        current: e,
        index: i,
        sizes: t,
        minDelta: r,
        maxDelta: o,
        snapBefore: s,
        snapAfter: n
      };
    })(t);
  }
  onSashChange(_ref5) {
    var e = _ref5.current;
    var _this$sashDragState = this.sashDragState,
      t = _this$sashDragState.index,
      i = _this$sashDragState.start,
      s = _this$sashDragState.sizes,
      n = _this$sashDragState.minDelta,
      r = _this$sashDragState.maxDelta,
      o = _this$sashDragState.snapBefore,
      a = _this$sashDragState.snapAfter;
    this.sashDragState.current = e;
    var h = e - i;
    this.resize(t, h, s, void 0, void 0, n, r, o, a), this.distributeEmptySpace(), this.layoutViews();
  }
  getSashPosition(e) {
    var t = 0;
    for (var _i7 = 0; _i7 < this.sashItems.length; _i7++) if (t += this.viewItems[_i7].size, this.sashItems[_i7].sash === e) return t;
    return 0;
  }
  resize(e, t, i, s, n, r, o, a, h) {
    if (i === void 0) {
      i = this.viewItems.map(e => e.size);
    }
    if (r === void 0) {
      r = Number.NEGATIVE_INFINITY;
    }
    if (o === void 0) {
      o = Number.POSITIVE_INFINITY;
    }
    if (e < 0 || e >= this.viewItems.length) return 0;
    var l = J(e, -1, -1),
      u = J(e + 1, this.viewItems.length);
    if (n) for (var _e9 of n) X(l, _e9), X(u, _e9);
    if (s) for (var _e0 of s) G(l, _e0), G(u, _e0);
    var c = l.map(e => this.viewItems[e]),
      m = l.map(e => i[e]),
      d = u.map(e => this.viewItems[e]),
      f = u.map(e => i[e]),
      p = l.reduce((e, t) => e + (this.viewItems[t].minimumSize - i[t]), 0),
      v = l.reduce((e, t) => e + (this.viewItems[t].maximumSize - i[t]), 0),
      S = 0 === u.length ? Number.POSITIVE_INFINITY : u.reduce((e, t) => e + (i[t] - this.viewItems[t].minimumSize), 0),
      z = 0 === u.length ? Number.NEGATIVE_INFINITY : u.reduce((e, t) => e + (i[t] - this.viewItems[t].maximumSize), 0),
      w = Math.max(p, z, r),
      g = Math.min(S, v, o);
    var y = !1;
    if (a) {
      var _e1 = this.viewItems[a.index],
        _i8 = t >= a.limitDelta;
      y = _i8 !== _e1.visible, _e1.setVisible(_i8, a.size);
    }
    if (!y && h) {
      var _e10 = this.viewItems[h.index],
        _i9 = t < h.limitDelta;
      y = _i9 !== _e10.visible, _e10.setVisible(_i9, h.size);
    }
    if (y) return this.resize(e, t, i, s, n, r, o);
    for (var _e11 = 0, _i0 = t = I(t, w, g); _e11 < c.length; _e11++) {
      var _t0 = c[_e11],
        _s4 = I(m[_e11] + _i0, _t0.minimumSize, _t0.maximumSize);
      _i0 -= _s4 - m[_e11], _t0.size = _s4;
    }
    for (var _e12 = 0, _i1 = t; _e12 < d.length; _e12++) {
      var _t1 = d[_e12],
        _s5 = I(f[_e12] - _i1, _t1.minimumSize, _t1.maximumSize);
      _i1 += _s5 - f[_e12], _t1.size = _s5;
    }
    return t;
  }
  distributeEmptySpace(e) {
    var t = this.viewItems.reduce((e, t) => e + t.size, 0);
    var i = this.size - t;
    var s = J(0, this.viewItems.length),
      n = [],
      r = s.filter(e => this.viewItems[e].priority === ce.Low),
      o = s.filter(e => this.viewItems[e].priority === ce.Normal),
      a = s.filter(e => this.viewItems[e].priority === ce.High);
    n.push(...a, ...o, ...r), "number" == typeof e && G(n, e);
    for (var _e13 = 0; 0 !== i && _e13 < n.length; _e13++) {
      var _t10 = this.viewItems[n[_e13]],
        _s6 = I(_t10.size + i, _t10.minimumSize, _t10.maximumSize);
      i -= _s6 - _t10.size, _t10.size = _s6;
    }
  }
  layoutViews() {
    var _this$onDidChange;
    this.contentSize = this.viewItems.reduce((e, t) => e + t.size, 0);
    var e = 0;
    for (var _t11 of this.viewItems) _t11.layout(e), e += _t11.size;
    (_this$onDidChange = this.onDidChange) != null && _this$onDidChange.call(this, this.viewItems.map(e => e.size)), this.sashItems.forEach(e => e.sash.layout()), this.updateSashEnablement();
  }
  saveProportions() {
    this.proportionalLayout && this.contentSize > 0 && (this.proportions = this.viewItems.map(e => e.size / this.contentSize));
  }
  updateSashEnablement() {
    var e = !1;
    var t = this.viewItems.map(t => e = t.size - t.minimumSize > 0 || e);
    e = !1;
    var i = this.viewItems.map(t => e = t.maximumSize - t.size > 0 || e),
      s = [...this.viewItems].reverse();
    e = !1;
    var n = s.map(t => e = t.size - t.minimumSize > 0 || e).reverse();
    e = !1;
    var r = s.map(t => e = t.maximumSize - t.size > 0 || e).reverse();
    var o = 0;
    for (var _e14 = 0; _e14 < this.sashItems.length; _e14++) {
      var _s7 = this.sashItems[_e14].sash;
      o += this.viewItems[_e14].size;
      var _a = !(t[_e14] && r[_e14 + 1]),
        _h = !(i[_e14] && n[_e14 + 1]);
      if (_a && _h) {
        var _i10 = J(_e14, -1, -1),
          _r = J(_e14 + 1, this.viewItems.length),
          _a2 = this.findFirstSnapIndex(_i10),
          _h2 = this.findFirstSnapIndex(_r),
          _l = "number" == typeof _a2 && !this.viewItems[_a2].visible,
          _u = "number" == typeof _h2 && !this.viewItems[_h2].visible;
        _l && n[_e14] && (o > 0 || this.startSnappingEnabled) ? _s7.state = re.Minimum : _u && t[_e14] && (o < this.contentSize || this.endSnappingEnabled) ? _s7.state = re.Maximum : _s7.state = re.Disabled;
      } else _s7.state = _a && !_h ? re.Minimum : !_a && _h ? re.Maximum : re.Enabled;
    }
  }
  findFirstSnapIndex(e) {
    for (var _t12 of e) {
      var _e15 = this.viewItems[_t12];
      if (_e15.visible && _e15.snap) return _t12;
    }
    for (var _t13 of e) {
      var _e16 = this.viewItems[_t13];
      if (_e16.visible && _e16.maximumSize - _e16.minimumSize > 0) return;
      if (!_e16.visible && _e16.snap) return _t13;
    }
  }
}
class ve {
  constructor(e) {
    this.size = void 0, this.size = e;
  }
  getPreferredSize() {
    return this.size;
  }
}
class Se {
  constructor(e, t) {
    this.proportion = void 0, this.layoutService = void 0, this.proportion = e, this.layoutService = t;
  }
  getPreferredSize() {
    return this.proportion * this.layoutService.getSize();
  }
}
class ze {
  getPreferredSize() {}
}
class we {
  get preferredSize() {
    return this.layoutStrategy.getPreferredSize();
  }
  set preferredSize(e) {
    if ("number" == typeof e) this.layoutStrategy = new ve(e);else if ("string" == typeof e) {
      var _t14 = e.trim();
      if (k(_t14, "%")) {
        var _e17 = Number(_t14.slice(0, -1)) / 100;
        this.layoutStrategy = new Se(_e17, this.layoutService);
      } else if (k(_t14, "px")) {
        var _e18 = Number(_t14.slice(0, -2)) / 100;
        this.layoutStrategy = new ve(_e18);
      } else if ("number" == typeof Number.parseFloat(_t14)) {
        var _e19 = Number.parseFloat(_t14);
        this.layoutStrategy = new ve(_e19);
      } else this.layoutStrategy = new ze();
    } else this.layoutStrategy = new ze();
  }
  constructor(e, t) {
    var _t$priority;
    if (this.minimumSize = 0, this.maximumSize = Number.POSITIVE_INFINITY, this.element = void 0, this.priority = void 0, this.snap = void 0, this.layoutService = void 0, this.layoutStrategy = void 0, this.layoutService = e, this.element = t.element, this.minimumSize = "number" == typeof t.minimumSize ? t.minimumSize : 30, this.maximumSize = "number" == typeof t.maximumSize ? t.maximumSize : Number.POSITIVE_INFINITY, "number" == typeof t.preferredSize) this.layoutStrategy = new ve(t.preferredSize);else if ("string" == typeof t.preferredSize) {
      var _e20 = t.preferredSize.trim();
      if (k(_e20, "%")) {
        var _t15 = Number(_e20.slice(0, -1)) / 100;
        this.layoutStrategy = new Se(_t15, this.layoutService);
      } else if (k(_e20, "px")) {
        var _t16 = Number(_e20.slice(0, -2));
        this.layoutStrategy = new ve(_t16);
      } else if ("number" == typeof Number.parseFloat(_e20)) {
        var _t17 = Number.parseFloat(_e20);
        this.layoutStrategy = new ve(_t17);
      } else this.layoutStrategy = new ze();
    } else this.layoutStrategy = new ze();
    this.priority = (_t$priority = t.priority) != null ? _t$priority : ce.Normal, this.snap = "boolean" == typeof t.snap && t.snap;
  }
  layout(e) {}
}
function ge(e) {
  return void 0 !== e.minSize || void 0 !== e.maxSize || void 0 !== e.preferredSize || void 0 !== e.priority || void 0 !== e.visible;
}
var ye = r((_ref6, s) => {
  var t = _ref6.className,
    i = _ref6.children;
  return e.createElement("div", {
    ref: s,
    className: v("split-view-view", O, t)
  }, i);
});
ye.displayName = "Allotment.Pane";
var be = r((_ref7, _) => {
  var r = _ref7.children,
    h = _ref7.className,
    l = _ref7.id,
    _ref7$maxSize = _ref7.maxSize,
    u = _ref7$maxSize === void 0 ? 1 / 0 : _ref7$maxSize,
    _ref7$minSize = _ref7.minSize,
    c = _ref7$minSize === void 0 ? 30 : _ref7$minSize,
    _ref7$proportionalLay = _ref7.proportionalLayout,
    m = _ref7$proportionalLay === void 0 ? !0 : _ref7$proportionalLay,
    _ref7$separator = _ref7.separator,
    d = _ref7$separator === void 0 ? !0 : _ref7$separator,
    f = _ref7.sizes,
    _ref7$defaultSizes = _ref7.defaultSizes,
    p = _ref7$defaultSizes === void 0 ? f : _ref7$defaultSizes,
    _ref7$snap = _ref7.snap,
    S = _ref7$snap === void 0 ? !1 : _ref7$snap,
    _ref7$vertical = _ref7.vertical,
    z = _ref7$vertical === void 0 ? !1 : _ref7$vertical,
    w = _ref7.onChange,
    y = _ref7.onReset,
    b = _ref7.onVisibleChange,
    I = _ref7.onDragStart,
    x = _ref7.onDragEnd;
  var E = i(null),
    L = i([]),
    O = i(new Map()),
    C = i(null),
    A = i(new Map()),
    j = i(new Y()),
    H = i([]),
    _t18 = t(!1),
    k = _t18[0],
    $ = _t18[1];
  "production" !== process.env.NODE_ENV && f && console.warn("Prop sizes is deprecated. Please use defaultSizes instead.");
  var B = o(() => e.Children.toArray(r).filter(e.isValidElement), [r]),
    R = n(e => {
      var _H$current, _C$current;
      var t = (_H$current = H.current) == null ? void 0 : _H$current[e];
      return "number" == typeof (t == null ? void 0 : t.preferredSize) && ((_C$current = C.current) != null && _C$current.resizeView(e, Math.round(t.preferredSize)), !0);
    }, []);
  return a(_, () => ({
    reset: () => {
      if (y) y();else {
        var _C$current2;
        (_C$current2 = C.current) == null || _C$current2.distributeViewSizes();
        for (var _e21 = 0; _e21 < H.current.length; _e21++) R(_e21);
      }
    },
    resize: e => {
      var _C$current3;
      (_C$current3 = C.current) == null || _C$current3.resizeViews(e);
    }
  })), s(() => {
    var e = !0;
    p && A.current.size !== p.length && (e = !1, console.warn("Expected " + p.length + " children based on defaultSizes but found " + A.current.size)), e && p && (L.current = B.map(e => e.key));
    var t = _extends({
      orientation: z ? ne.Vertical : ne.Horizontal,
      proportionalLayout: m
    }, e && p && {
      descriptor: {
        size: p.reduce((e, t) => e + t, 0),
        views: p.map((e, t) => {
          var _i$minSize, _i$maxSize, _i$priority, _i$snap;
          var i = O.current.get(L.current[t]),
            s = new we(j.current, _extends({
              element: document.createElement("div"),
              minimumSize: (_i$minSize = i == null ? void 0 : i.minSize) != null ? _i$minSize : c,
              maximumSize: (_i$maxSize = i == null ? void 0 : i.maxSize) != null ? _i$maxSize : u,
              priority: (_i$priority = i == null ? void 0 : i.priority) != null ? _i$priority : ce.Normal
            }, (i == null ? void 0 : i.preferredSize) && {
              preferredSize: i == null ? void 0 : i.preferredSize
            }, {
              snap: (_i$snap = i == null ? void 0 : i.snap) != null ? _i$snap : S
            }));
          return H.current.push(s), {
            container: [...A.current.values()][t],
            size: e,
            view: s
          };
        })
      }
    });
    C.current = new pe(E.current, t, w, I, x), C.current.on("sashDragStart", () => {
      var _E$current;
      (_E$current = E.current) == null || _E$current.classList.add("split-view-sash-dragging");
    }), C.current.on("sashDragEnd", () => {
      var _E$current2;
      (_E$current2 = E.current) == null || _E$current2.classList.remove("split-view-sash-dragging");
    }), C.current.on("sashchange", e => {
      if (b && C.current) {
        var _e22 = B.map(e => e.key);
        for (var _t19 = 0; _t19 < _e22.length; _t19++) {
          var _i11 = O.current.get(_e22[_t19]);
          void 0 !== (_i11 == null ? void 0 : _i11.visible) && _i11.visible !== C.current.isViewVisible(_t19) && b(_t19, C.current.isViewVisible(_t19));
        }
      }
    }), C.current.on("sashreset", e => {
      if (y) y();else {
        var _C$current4;
        if (R(e)) return;
        if (R(e + 1)) return;
        (_C$current4 = C.current) == null || _C$current4.distributeViewSizes();
      }
    });
    var i = C.current;
    return () => {
      i.dispose();
    };
  }, []), s(() => {
    if (k) {
      var _e23 = B.map(e => e.key),
        _t20 = [...L.current],
        _i12 = _e23.filter(e => !L.current.includes(e)),
        _s8 = _e23.filter(e => L.current.includes(e)),
        _n3 = L.current.map(t => !_e23.includes(t));
      for (var _e24 = _n3.length - 1; _e24 >= 0; _e24--) {
        var _C$current5;
        _n3[_e24] && ((_C$current5 = C.current) != null && _C$current5.removeView(_e24), _t20.splice(_e24, 1), H.current.splice(_e24, 1));
      }
      var _loop = function _loop(_s9) {
        var _i$minSize2, _i$maxSize2, _i$priority2, _i$snap2, _C$current7;
        var i = O.current.get(_s9),
          n = new we(j.current, _extends({
            element: document.createElement("div"),
            minimumSize: (_i$minSize2 = i == null ? void 0 : i.minSize) != null ? _i$minSize2 : c,
            maximumSize: (_i$maxSize2 = i == null ? void 0 : i.maxSize) != null ? _i$maxSize2 : u,
            priority: (_i$priority2 = i == null ? void 0 : i.priority) != null ? _i$priority2 : ce.Normal
          }, (i == null ? void 0 : i.preferredSize) && {
            preferredSize: i == null ? void 0 : i.preferredSize
          }, {
            snap: (_i$snap2 = i == null ? void 0 : i.snap) != null ? _i$snap2 : S
          }));
        (_C$current7 = C.current) != null && _C$current7.addView(A.current.get(_s9), n, le.Distribute, _e23.findIndex(e => e === _s9)), _t20.splice(_e23.findIndex(e => e === _s9), 0, _s9), H.current.splice(_e23.findIndex(e => e === _s9), 0, n);
      };
      for (var _s9 of _i12) {
        _loop(_s9);
      }
      for (; !g(_e23, _t20);) {
        var _loop2 = function _loop2() {
          var i = _ref9[0];
          var s = _ref9[1];
          {
            var _e25 = _t20.findIndex(e => e === s);
            if (_e25 !== i) {
              var _C$current6;
              (_C$current6 = C.current) == null || _C$current6.moveView(A.current.get(s), _e25, i);
              var _n4 = _t20[_e25];
              _t20.splice(_e25, 1), _t20.splice(i, 0, _n4);
              return 1; // break
            }
          }
        };
        for (var _ref9 of _e23.entries()) {
          if (_loop2()) break;
        }
      }
      var _loop3 = function _loop3(_t21) {
        var _C$current8;
        var i = _e23.findIndex(e => e === _t21),
          s = H.current[i].preferredSize;
        void 0 !== s && ((_C$current8 = C.current) == null ? void 0 : _C$current8.resizeView(i, s));
      };
      for (var _t21 of _i12) {
        _loop3(_t21);
      }
      var _loop4 = function _loop4(_t22) {
        var _C$current9, _C$current0;
        var i = O.current.get(_t22),
          s = _e23.findIndex(e => e === _t22);
        i && ge(i) && void 0 !== i.visible && ((_C$current9 = C.current) == null ? void 0 : _C$current9.isViewVisible(s)) !== i.visible && ((_C$current0 = C.current) == null ? void 0 : _C$current0.setViewVisible(s, i.visible));
      };
      for (var _t22 of [..._i12, ..._s8]) {
        _loop4(_t22);
      }
      var _loop5 = function _loop5(_t23) {
        var i = O.current.get(_t23),
          s = _e23.findIndex(e => e === _t23);
        if (i && ge(i)) {
          var _C$current1;
          void 0 !== i.preferredSize && H.current[s].preferredSize !== i.preferredSize && (H.current[s].preferredSize = i.preferredSize);
          var _e26 = !1;
          void 0 !== i.minSize && H.current[s].minimumSize !== i.minSize && (H.current[s].minimumSize = i.minSize, _e26 = !0), void 0 !== i.maxSize && H.current[s].maximumSize !== i.maxSize && (H.current[s].maximumSize = i.maxSize, _e26 = !0), _e26 && ((_C$current1 = C.current) == null ? void 0 : _C$current1.layout());
        }
      };
      for (var _t23 of _s8) {
        _loop5(_t23);
      }
      (_i12.length > 0 || _n3.length > 0) && (L.current = _e23);
    }
  }, [B, k, u, c, S]), s(() => {
    C.current && (C.current.onDidChange = w);
  }, [w]), s(() => {
    C.current && (C.current.onDidDragStart = I);
  }, [I]), s(() => {
    C.current && (C.current.onDidDragEnd = x);
  }, [x]), V({
    ref: E,
    onResize: _ref0 => {
      var _C$current10;
      var e = _ref0.width,
        t = _ref0.height;
      e && t && ((_C$current10 = C.current) != null && _C$current10.layout(z ? t : e), j.current.setSize(z ? t : e), $(!0));
    }
  }), s(() => {
    F && Ie(20);
  }, []), e.createElement("div", {
    ref: E,
    className: v("split-view", z ? "split-view-vertical" : "split-view-horizontal", {
      "split-view-separator-border": d
    }, N, z ? M : P, {
      [T]: d
    }, h),
    id: l
  }, e.createElement("div", {
    className: v("split-view-container", D)
  }, e.Children.toArray(r).map(t => {
    if (!e.isValidElement(t)) return null;
    var i = t.key;
    return "Allotment.Pane" === t.type.displayName ? (O.current.set(i, t.props), e.cloneElement(t, {
      key: i,
      ref: e => {
        var s = t.ref;
        s && (s.current = e), e ? A.current.set(i, e) : A.current.delete(i);
      }
    })) : e.createElement(ye, {
      key: i,
      ref: e => {
        e ? A.current.set(i, e) : A.current.delete(i);
      }
    }, t);
  })));
});
function Ie(e) {
  var t = I(e, 4, 20),
    i = I(e, 1, 8);
  document.documentElement.style.setProperty("--sash-size", t + "px"), document.documentElement.style.setProperty("--sash-hover-size", i + "px"), function (e) {
    oe = e, ae.emit("onDidChangeGlobalSize", e);
  }(t);
}
be.displayName = "Allotment";
var xe = Object.assign(be, {
  Pane: ye
});
export { xe as Allotment, ce as LayoutPriority, Ie as setSashSize };
