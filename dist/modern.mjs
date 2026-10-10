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
    return S = function (e, t, i) {
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
  return y = function (e, t, i) {
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
  const {
      ref: r,
      box: o = "content-box"
    } = e,
    [{
      width: a,
      height: h
    }, l] = t(_),
    u = function () {
      const e = i(!1);
      return s(() => (e.current = !0, () => {
        e.current = !1;
      }), []), n(() => e.current, []);
    }(),
    c = i(_extends({}, _)),
    m = i(void 0);
  return m.current = e.onResize, s(() => {
    if (!r.current) return;
    if ("undefined" == typeof window || !("ResizeObserver" in window)) return;
    const e = new ResizeObserver(([e]) => {
      const t = "border-box" === o ? "borderBoxSize" : "device-pixel-content-box" === o ? "devicePixelContentBoxSize" : "contentBoxSize",
        i = E(e, t, "inlineSize"),
        s = E(e, t, "blockSize");
      if (c.current.width !== i || c.current.height !== s) {
        const _e = {
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
let C,
  A = !1,
  j = !1;
"object" == typeof navigator && (C = navigator.userAgent, j = C.indexOf("Macintosh") >= 0, A = (C.indexOf("Macintosh") >= 0 || C.indexOf("iPad") >= 0 || C.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0);
const F = A,
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
  const i = e.length,
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
  const i = e.indexOf(t);
  i > -1 && (e.splice(i, 1), e.unshift(t));
}
function G(e, t) {
  const i = e.indexOf(t);
  i > -1 && (e.splice(i, 1), e.push(t));
}
function J(e, t, i = 1) {
  const s = Math.max(0, Math.ceil((t - e) / i)),
    n = new Array(s);
  let r = -1;
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
let ne = function (e) {
    return e.Vertical = "VERTICAL", e.Horizontal = "HORIZONTAL", e;
  }({}),
  re = function (e) {
    return e.Disabled = "DISABLED", e.Minimum = "MINIMUM", e.Maximum = "MAXIMUM", e.Enabled = "ENABLED", e;
  }({}),
  oe = F ? 20 : 8;
const ae = new W();
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
      const t = e.pageX,
        i = e.pageY,
        s = {
          startX: t,
          currentX: t,
          startY: i,
          currentY: i
        };
      this.el.classList.add("sash-active", se), this.emit("start", s), this.el.setPointerCapture(e.pointerId);
      const n = e => {
          e.preventDefault();
          const s = {
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
    }, this.el = document.createElement("div"), this.el.classList.add("sash", U), this.el.dataset.testid = "sash", e.append(this.el), H && this.el.classList.add("sash-mac", Z), this.el.addEventListener("pointerdown", this.onPointerStart), this.el.addEventListener("dblclick", this.onPointerDoublePress), this.el.addEventListener("mouseenter", this.onMouseEnter), this.el.addEventListener("mouseleave", this.onMouseLeave), "number" == typeof i.size ? (this.size = i.size, i.orientation === ne.Vertical ? this.el.style.width = `${this.size}px` : this.el.style.height = `${this.size}px`) : (this.size = oe, ae.on("onDidChangeGlobalSize", e => {
      this.size = e, this.layout();
    })), this.layoutProvider = t, this.orientation = (_i$orientation = i.orientation) != null ? _i$orientation : ne.Vertical, this.orientation === ne.Horizontal ? (this.el.classList.add("sash-horizontal", te), this.el.classList.remove("sash-vertical", Q)) : (this.el.classList.remove("sash-horizontal", te), this.el.classList.add("sash-vertical", Q)), this.layout();
  }
  layout() {
    if (this.orientation === ne.Vertical) {
      const e = this.layoutProvider;
      this.el.style.left = e.getVerticalSashLeft(this) - this.size / 2 + "px", e.getVerticalSashTop && (this.el.style.top = e.getVerticalSashTop(this) + "px"), e.getVerticalSashHeight && (this.el.style.height = e.getVerticalSashHeight(this) + "px");
    } else {
      const e = this.layoutProvider;
      this.el.style.top = e.getHorizontalSashTop(this) - this.size / 2 + "px", e.getHorizontalSashLeft && (this.el.style.left = e.getHorizontalSashLeft(this) + "px"), e.getHorizontalSashWidth && (this.el.style.width = e.getHorizontalSashWidth(this) + "px");
    }
  }
  dispose() {
    this.el.removeEventListener("pointerdown", this.onPointerStart), this.el.removeEventListener("dblclick", this.onPointerDoublePress), this.el.removeEventListener("mouseenter", this.onMouseEnter), this.el.removeEventListener("mouseleave", () => this.onMouseLeave), this.el.remove();
  }
}
let le;
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
let ce = function (e) {
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
    this.container.style.left = `${e}px`, this.container.style.width = `${this.size}px`;
  }
}
class fe extends me {
  layoutContainer(e) {
    this.container.style.top = `${e}px`, this.container.style.height = `${this.size}px`;
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
  constructor(e, t = {}, i, s, n) {
    var _t$orientation, _t$proportionalLayout;
    if (super(), this.onDidChange = void 0, this.onDidDragStart = void 0, this.onDidDragEnd = void 0, this.orientation = void 0, this.sashContainer = void 0, this.size = 0, this.contentSize = 0, this.proportions = void 0, this.viewItems = [], this.sashItems = [], this.sashDragState = void 0, this.proportionalLayout = void 0, this.getSashOrthogonalSize = void 0, this._startSnappingEnabled = !0, this._endSnappingEnabled = !0, this.onSashEnd = e => {
      this.emit("sashchange", e), this.saveProportions();
      for (const _e2 of this.viewItems) _e2.enabled = !0;
    }, this.orientation = (_t$orientation = t.orientation) != null ? _t$orientation : ne.Vertical, this.proportionalLayout = (_t$proportionalLayout = t.proportionalLayout) != null ? _t$proportionalLayout : !0, this.getSashOrthogonalSize = t.getSashOrthogonalSize, i && (this.onDidChange = i), s && (this.onDidDragStart = s), n && (this.onDidDragEnd = n), this.sashContainer = document.createElement("div"), this.sashContainer.classList.add("sash-container", L), e.prepend(this.sashContainer), t.descriptor) {
      this.size = t.descriptor.size;
      for (const [_e3, _i] of t.descriptor.views.entries()) {
        const _t = _i.size,
          _s = _i.container,
          _n = _i.view;
        this.addView(_s, _n, _t, _e3, !0);
      }
      this.contentSize = this.viewItems.reduce((e, t) => e + t.size, 0), this.saveProportions();
    }
  }
  addView(e, t, i, s = this.viewItems.length, n) {
    let r;
    r = "number" == typeof i ? i : "split" === i.type ? this.getViewSize(i.index) / 2 : "invisible" === i.type ? {
      cachedVisibleSize: i.cachedVisibleSize
    } : t.minimumSize;
    const o = this.orientation === ne.Vertical ? new fe(e, t, r) : new de(e, t, r);
    if (this.viewItems.splice(s, 0, o), this.viewItems.length > 1) {
      const _e4 = this.orientation === ne.Vertical ? new he(this.sashContainer, {
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
        _t2 = this.orientation === ne.Vertical ? t => ({
          sash: _e4,
          start: t.startY,
          current: t.currentY
        }) : t => ({
          sash: _e4,
          start: t.startX,
          current: t.currentX
        });
      _e4.on("start", e => {
        var _this$onDidDragStart;
        this.emit("sashDragStart"), this.onSashStart(_t2(e));
        const i = this.viewItems.map(e => e.size);
        (_this$onDidDragStart = this.onDidDragStart) == null || _this$onDidDragStart.call(this, i);
      }), _e4.on("change", e => this.onSashChange(_t2(e))), _e4.on("end", () => {
        var _this$onDidDragEnd;
        this.emit("sashDragEnd"), this.onSashEnd(this.sashItems.findIndex(t => t.sash === _e4));
        const t = this.viewItems.map(e => e.size);
        (_this$onDidDragEnd = this.onDidDragEnd) == null || _this$onDidDragEnd.call(this, t);
      }), _e4.on("reset", () => {
        const t = this.sashItems.findIndex(t => t.sash === _e4),
          i = J(t, -1, -1),
          s = J(t + 1, this.viewItems.length),
          n = this.findFirstSnapIndex(i),
          r = this.findFirstSnapIndex(s);
        ("number" != typeof n || this.viewItems[n].visible) && ("number" != typeof r || this.viewItems[r].visible) && this.emit("sashreset", t);
      });
      const _i2 = {
        sash: _e4
      };
      this.sashItems.splice(s - 1, 0, _i2);
    }
    n || this.relayout(), n || "number" == typeof i || "distribute" !== i.type || this.distributeViewSizes();
  }
  removeView(e, t) {
    if (e < 0 || e >= this.viewItems.length) throw new Error("Index out of bounds");
    const i = this.viewItems.splice(e, 1)[0].view;
    if (this.viewItems.length >= 1) {
      const _t3 = Math.max(e - 1, 0);
      this.sashItems.splice(_t3, 1)[0].sash.dispose();
    }
    return this.relayout(), t && "distribute" === t.type && this.distributeViewSizes(), i;
  }
  moveView(e, t, i) {
    const s = this.getViewCachedVisibleSize(t),
      n = void 0 === s ? this.getViewSize(t) : le.Invisible(s),
      r = this.removeView(t);
    this.addView(e, r, n, i);
  }
  getViewCachedVisibleSize(e) {
    if (e < 0 || e >= this.viewItems.length) throw new Error("Index out of bounds");
    return this.viewItems[e].cachedVisibleSize;
  }
  layout(e = this.size) {
    const t = Math.max(this.size, this.contentSize);
    if (this.size = e, this.proportions) for (let _t4 = 0; _t4 < this.viewItems.length; _t4++) {
      const i = this.viewItems[_t4];
      i.size = I(Math.round(this.proportions[_t4] * e), i.minimumSize, i.maximumSize);
    } else {
      const i = J(0, this.viewItems.length),
        s = i.filter(e => this.viewItems[e].priority === ce.Low),
        n = i.filter(e => this.viewItems[e].priority === ce.High);
      this.resize(this.viewItems.length - 1, e - t, void 0, s, n);
    }
    this.distributeEmptySpace(), this.layoutViews();
  }
  resizeView(e, t) {
    if (e < 0 || e >= this.viewItems.length) return;
    const i = J(0, this.viewItems.length).filter(t => t !== e),
      s = [...i.filter(e => this.viewItems[e].priority === ce.Low), e],
      n = i.filter(e => this.viewItems[e].priority === ce.High),
      r = this.viewItems[e];
    t = Math.round(t), t = I(t, r.minimumSize, Math.min(r.maximumSize, this.size)), r.size = t, this.relayout(s, n);
  }
  resizeViews(e) {
    for (let t = 0; t < e.length; t++) {
      const i = this.viewItems[t];
      let s = e[t];
      s = Math.round(s), s = I(s, i.minimumSize, Math.min(i.maximumSize, this.size)), i.size = s;
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
    const e = [];
    let t = 0;
    for (const _i3 of this.viewItems) _i3.maximumSize - _i3.minimumSize > 0 && (e.push(_i3), t += _i3.size);
    const i = Math.floor(t / e.length);
    for (const _t5 of e) _t5.size = I(i, _t5.minimumSize, _t5.maximumSize);
    const s = J(0, this.viewItems.length),
      n = s.filter(e => this.viewItems[e].priority === ce.Low),
      r = s.filter(e => this.viewItems[e].priority === ce.High);
    this.relayout(n, r);
  }
  dispose() {
    this.sashItems.forEach(e => e.sash.dispose()), this.sashItems = [], this.sashContainer.remove();
  }
  relayout(e, t) {
    const i = this.viewItems.reduce((e, t) => e + t.size, 0);
    this.resize(this.viewItems.length - 1, this.size - i, void 0, e, t), this.distributeEmptySpace(), this.layoutViews(), this.saveProportions();
  }
  onSashStart({
    sash: e,
    start: t
  }) {
    const i = this.sashItems.findIndex(t => t.sash === e);
    (e => {
      const t = this.viewItems.map(e => e.size);
      let s,
        n,
        r = Number.NEGATIVE_INFINITY,
        o = Number.POSITIVE_INFINITY;
      const a = J(i, -1, -1),
        h = J(i + 1, this.viewItems.length),
        l = a.reduce((e, i) => e + (this.viewItems[i].minimumSize - t[i]), 0),
        u = a.reduce((e, i) => e + (this.viewItems[i].viewMaximumSize - t[i]), 0),
        c = 0 === h.length ? Number.POSITIVE_INFINITY : h.reduce((e, i) => e + (t[i] - this.viewItems[i].minimumSize), 0),
        m = 0 === h.length ? Number.NEGATIVE_INFINITY : h.reduce((e, i) => e + (t[i] - this.viewItems[i].viewMaximumSize), 0);
      r = Math.max(l, m), o = Math.min(c, u);
      const d = this.findFirstSnapIndex(a),
        f = this.findFirstSnapIndex(h);
      if ("number" == typeof d) {
        const _e5 = this.viewItems[d],
          _t6 = Math.floor(_e5.viewMinimumSize / 2);
        s = {
          index: d,
          limitDelta: _e5.visible ? r - _t6 : r + _t6,
          size: _e5.size
        };
      }
      if ("number" == typeof f) {
        const _e6 = this.viewItems[f],
          _t7 = Math.floor(_e6.viewMinimumSize / 2);
        n = {
          index: f,
          limitDelta: _e6.visible ? o + _t7 : o - _t7,
          size: _e6.size
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
  onSashChange({
    current: e
  }) {
    const {
      index: t,
      start: i,
      sizes: s,
      minDelta: n,
      maxDelta: r,
      snapBefore: o,
      snapAfter: a
    } = this.sashDragState;
    this.sashDragState.current = e;
    const h = e - i;
    this.resize(t, h, s, void 0, void 0, n, r, o, a), this.distributeEmptySpace(), this.layoutViews();
  }
  getSashPosition(e) {
    let t = 0;
    for (let i = 0; i < this.sashItems.length; i++) if (t += this.viewItems[i].size, this.sashItems[i].sash === e) return t;
    return 0;
  }
  resize(e, t, i = this.viewItems.map(e => e.size), s, n, r = Number.NEGATIVE_INFINITY, o = Number.POSITIVE_INFINITY, a, h) {
    if (e < 0 || e >= this.viewItems.length) return 0;
    const l = J(e, -1, -1),
      u = J(e + 1, this.viewItems.length);
    if (n) for (const _e7 of n) X(l, _e7), X(u, _e7);
    if (s) for (const _e8 of s) G(l, _e8), G(u, _e8);
    const c = l.map(e => this.viewItems[e]),
      m = l.map(e => i[e]),
      d = u.map(e => this.viewItems[e]),
      f = u.map(e => i[e]),
      p = l.reduce((e, t) => e + (this.viewItems[t].minimumSize - i[t]), 0),
      v = l.reduce((e, t) => e + (this.viewItems[t].maximumSize - i[t]), 0),
      S = 0 === u.length ? Number.POSITIVE_INFINITY : u.reduce((e, t) => e + (i[t] - this.viewItems[t].minimumSize), 0),
      z = 0 === u.length ? Number.NEGATIVE_INFINITY : u.reduce((e, t) => e + (i[t] - this.viewItems[t].maximumSize), 0),
      w = Math.max(p, z, r),
      g = Math.min(S, v, o);
    let y = !1;
    if (a) {
      const _e9 = this.viewItems[a.index],
        _i4 = t >= a.limitDelta;
      y = _i4 !== _e9.visible, _e9.setVisible(_i4, a.size);
    }
    if (!y && h) {
      const _e0 = this.viewItems[h.index],
        _i5 = t < h.limitDelta;
      y = _i5 !== _e0.visible, _e0.setVisible(_i5, h.size);
    }
    if (y) return this.resize(e, t, i, s, n, r, o);
    for (let _e1 = 0, _i6 = t = I(t, w, g); _e1 < c.length; _e1++) {
      const _t8 = c[_e1],
        _s2 = I(m[_e1] + _i6, _t8.minimumSize, _t8.maximumSize);
      _i6 -= _s2 - m[_e1], _t8.size = _s2;
    }
    for (let _e10 = 0, _i7 = t; _e10 < d.length; _e10++) {
      const _t9 = d[_e10],
        _s3 = I(f[_e10] - _i7, _t9.minimumSize, _t9.maximumSize);
      _i7 += _s3 - f[_e10], _t9.size = _s3;
    }
    return t;
  }
  distributeEmptySpace(e) {
    const t = this.viewItems.reduce((e, t) => e + t.size, 0);
    let i = this.size - t;
    const s = J(0, this.viewItems.length),
      n = [],
      r = s.filter(e => this.viewItems[e].priority === ce.Low),
      o = s.filter(e => this.viewItems[e].priority === ce.Normal),
      a = s.filter(e => this.viewItems[e].priority === ce.High);
    n.push(...a, ...o, ...r), "number" == typeof e && G(n, e);
    for (let _e11 = 0; 0 !== i && _e11 < n.length; _e11++) {
      const _t0 = this.viewItems[n[_e11]],
        _s4 = I(_t0.size + i, _t0.minimumSize, _t0.maximumSize);
      i -= _s4 - _t0.size, _t0.size = _s4;
    }
  }
  layoutViews() {
    var _this$onDidChange;
    this.contentSize = this.viewItems.reduce((e, t) => e + t.size, 0);
    let e = 0;
    for (const t of this.viewItems) t.layout(e), e += t.size;
    (_this$onDidChange = this.onDidChange) != null && _this$onDidChange.call(this, this.viewItems.map(e => e.size)), this.sashItems.forEach(e => e.sash.layout()), this.updateSashEnablement();
  }
  saveProportions() {
    this.proportionalLayout && this.contentSize > 0 && (this.proportions = this.viewItems.map(e => e.size / this.contentSize));
  }
  updateSashEnablement() {
    let e = !1;
    const t = this.viewItems.map(t => e = t.size - t.minimumSize > 0 || e);
    e = !1;
    const i = this.viewItems.map(t => e = t.maximumSize - t.size > 0 || e),
      s = [...this.viewItems].reverse();
    e = !1;
    const n = s.map(t => e = t.size - t.minimumSize > 0 || e).reverse();
    e = !1;
    const r = s.map(t => e = t.maximumSize - t.size > 0 || e).reverse();
    let o = 0;
    for (let _e12 = 0; _e12 < this.sashItems.length; _e12++) {
      const {
        sash: _s5
      } = this.sashItems[_e12];
      o += this.viewItems[_e12].size;
      const a = !(t[_e12] && r[_e12 + 1]),
        h = !(i[_e12] && n[_e12 + 1]);
      if (a && h) {
        const _i8 = J(_e12, -1, -1),
          _r = J(_e12 + 1, this.viewItems.length),
          _a = this.findFirstSnapIndex(_i8),
          _h = this.findFirstSnapIndex(_r),
          l = "number" == typeof _a && !this.viewItems[_a].visible,
          u = "number" == typeof _h && !this.viewItems[_h].visible;
        l && n[_e12] && (o > 0 || this.startSnappingEnabled) ? _s5.state = re.Minimum : u && t[_e12] && (o < this.contentSize || this.endSnappingEnabled) ? _s5.state = re.Maximum : _s5.state = re.Disabled;
      } else _s5.state = a && !h ? re.Minimum : !a && h ? re.Maximum : re.Enabled;
    }
  }
  findFirstSnapIndex(e) {
    for (const t of e) {
      const _e13 = this.viewItems[t];
      if (_e13.visible && _e13.snap) return t;
    }
    for (const t of e) {
      const _e14 = this.viewItems[t];
      if (_e14.visible && _e14.maximumSize - _e14.minimumSize > 0) return;
      if (!_e14.visible && _e14.snap) return t;
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
      const t = e.trim();
      if (k(t, "%")) {
        const _e15 = Number(t.slice(0, -1)) / 100;
        this.layoutStrategy = new Se(_e15, this.layoutService);
      } else if (k(t, "px")) {
        const _e16 = Number(t.slice(0, -2)) / 100;
        this.layoutStrategy = new ve(_e16);
      } else if ("number" == typeof Number.parseFloat(t)) {
        const _e17 = Number.parseFloat(t);
        this.layoutStrategy = new ve(_e17);
      } else this.layoutStrategy = new ze();
    } else this.layoutStrategy = new ze();
  }
  constructor(e, t) {
    var _t$priority;
    if (this.minimumSize = 0, this.maximumSize = Number.POSITIVE_INFINITY, this.element = void 0, this.priority = void 0, this.snap = void 0, this.layoutService = void 0, this.layoutStrategy = void 0, this.layoutService = e, this.element = t.element, this.minimumSize = "number" == typeof t.minimumSize ? t.minimumSize : 30, this.maximumSize = "number" == typeof t.maximumSize ? t.maximumSize : Number.POSITIVE_INFINITY, "number" == typeof t.preferredSize) this.layoutStrategy = new ve(t.preferredSize);else if ("string" == typeof t.preferredSize) {
      const _e18 = t.preferredSize.trim();
      if (k(_e18, "%")) {
        const _t1 = Number(_e18.slice(0, -1)) / 100;
        this.layoutStrategy = new Se(_t1, this.layoutService);
      } else if (k(_e18, "px")) {
        const _t10 = Number(_e18.slice(0, -2));
        this.layoutStrategy = new ve(_t10);
      } else if ("number" == typeof Number.parseFloat(_e18)) {
        const _t11 = Number.parseFloat(_e18);
        this.layoutStrategy = new ve(_t11);
      } else this.layoutStrategy = new ze();
    } else this.layoutStrategy = new ze();
    this.priority = (_t$priority = t.priority) != null ? _t$priority : ce.Normal, this.snap = "boolean" == typeof t.snap && t.snap;
  }
  layout(e) {}
}
function ge(e) {
  return void 0 !== e.minSize || void 0 !== e.maxSize || void 0 !== e.preferredSize || void 0 !== e.priority || void 0 !== e.visible;
}
const ye = r(({
  className: t,
  children: i
}, s) => e.createElement("div", {
  ref: s,
  className: v("split-view-view", O, t)
}, i));
ye.displayName = "Allotment.Pane";
const be = r(({
  children: r,
  className: h,
  id: l,
  maxSize: u = 1 / 0,
  minSize: c = 30,
  proportionalLayout: m = !0,
  separator: d = !0,
  sizes: f,
  defaultSizes: p = f,
  snap: S = !1,
  vertical: z = !1,
  onChange: w,
  onReset: y,
  onVisibleChange: b,
  onDragStart: I,
  onDragEnd: x
}, _) => {
  const E = i(null),
    L = i([]),
    O = i(new Map()),
    C = i(null),
    A = i(new Map()),
    j = i(new Y()),
    H = i([]),
    [k, $] = t(!1);
  "production" !== process.env.NODE_ENV && f && console.warn("Prop sizes is deprecated. Please use defaultSizes instead.");
  const B = o(() => e.Children.toArray(r).filter(e.isValidElement), [r]),
    R = n(e => {
      var _H$current, _C$current;
      const t = (_H$current = H.current) == null ? void 0 : _H$current[e];
      return "number" == typeof (t == null ? void 0 : t.preferredSize) && ((_C$current = C.current) != null && _C$current.resizeView(e, Math.round(t.preferredSize)), !0);
    }, []);
  return a(_, () => ({
    reset: () => {
      if (y) y();else {
        var _C$current2;
        (_C$current2 = C.current) == null || _C$current2.distributeViewSizes();
        for (let e = 0; e < H.current.length; e++) R(e);
      }
    },
    resize: e => {
      var _C$current3;
      (_C$current3 = C.current) == null || _C$current3.resizeViews(e);
    }
  })), s(() => {
    let e = !0;
    p && A.current.size !== p.length && (e = !1, console.warn(`Expected ${p.length} children based on defaultSizes but found ${A.current.size}`)), e && p && (L.current = B.map(e => e.key));
    const t = _extends({
      orientation: z ? ne.Vertical : ne.Horizontal,
      proportionalLayout: m
    }, e && p && {
      descriptor: {
        size: p.reduce((e, t) => e + t, 0),
        views: p.map((e, t) => {
          var _i$minSize, _i$maxSize, _i$priority, _i$snap;
          const i = O.current.get(L.current[t]),
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
        const _e19 = B.map(e => e.key);
        for (let t = 0; t < _e19.length; t++) {
          const i = O.current.get(_e19[t]);
          void 0 !== (i == null ? void 0 : i.visible) && i.visible !== C.current.isViewVisible(t) && b(t, C.current.isViewVisible(t));
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
    const i = C.current;
    return () => {
      i.dispose();
    };
  }, []), s(() => {
    if (k) {
      const e = B.map(e => e.key),
        t = [...L.current],
        i = e.filter(e => !L.current.includes(e)),
        s = e.filter(e => L.current.includes(e)),
        n = L.current.map(t => !e.includes(t));
      for (let _e20 = n.length - 1; _e20 >= 0; _e20--) {
        var _C$current5;
        n[_e20] && ((_C$current5 = C.current) != null && _C$current5.removeView(_e20), t.splice(_e20, 1), H.current.splice(_e20, 1));
      }
      for (const _s6 of i) {
        var _i9$minSize, _i9$maxSize, _i9$priority, _i9$snap, _C$current6;
        const _i9 = O.current.get(_s6),
          _n2 = new we(j.current, _extends({
            element: document.createElement("div"),
            minimumSize: (_i9$minSize = _i9 == null ? void 0 : _i9.minSize) != null ? _i9$minSize : c,
            maximumSize: (_i9$maxSize = _i9 == null ? void 0 : _i9.maxSize) != null ? _i9$maxSize : u,
            priority: (_i9$priority = _i9 == null ? void 0 : _i9.priority) != null ? _i9$priority : ce.Normal
          }, (_i9 == null ? void 0 : _i9.preferredSize) && {
            preferredSize: _i9 == null ? void 0 : _i9.preferredSize
          }, {
            snap: (_i9$snap = _i9 == null ? void 0 : _i9.snap) != null ? _i9$snap : S
          }));
        (_C$current6 = C.current) != null && _C$current6.addView(A.current.get(_s6), _n2, le.Distribute, e.findIndex(e => e === _s6)), t.splice(e.findIndex(e => e === _s6), 0, _s6), H.current.splice(e.findIndex(e => e === _s6), 0, _n2);
      }
      for (; !g(e, t);) for (const [_i0, _s7] of e.entries()) {
        const _e21 = t.findIndex(e => e === _s7);
        if (_e21 !== _i0) {
          var _C$current7;
          (_C$current7 = C.current) == null || _C$current7.moveView(A.current.get(_s7), _e21, _i0);
          const _n3 = t[_e21];
          t.splice(_e21, 1), t.splice(_i0, 0, _n3);
          break;
        }
      }
      for (const _t12 of i) {
        var _C$current8;
        const _i1 = e.findIndex(e => e === _t12),
          _s8 = H.current[_i1].preferredSize;
        void 0 !== _s8 && ((_C$current8 = C.current) == null ? void 0 : _C$current8.resizeView(_i1, _s8));
      }
      for (const _t13 of [...i, ...s]) {
        var _C$current9, _C$current0;
        const _i10 = O.current.get(_t13),
          _s9 = e.findIndex(e => e === _t13);
        _i10 && ge(_i10) && void 0 !== _i10.visible && ((_C$current9 = C.current) == null ? void 0 : _C$current9.isViewVisible(_s9)) !== _i10.visible && ((_C$current0 = C.current) == null ? void 0 : _C$current0.setViewVisible(_s9, _i10.visible));
      }
      for (const _t14 of s) {
        const _i11 = O.current.get(_t14),
          _s0 = e.findIndex(e => e === _t14);
        if (_i11 && ge(_i11)) {
          var _C$current1;
          void 0 !== _i11.preferredSize && H.current[_s0].preferredSize !== _i11.preferredSize && (H.current[_s0].preferredSize = _i11.preferredSize);
          let _e22 = !1;
          void 0 !== _i11.minSize && H.current[_s0].minimumSize !== _i11.minSize && (H.current[_s0].minimumSize = _i11.minSize, _e22 = !0), void 0 !== _i11.maxSize && H.current[_s0].maximumSize !== _i11.maxSize && (H.current[_s0].maximumSize = _i11.maxSize, _e22 = !0), _e22 && ((_C$current1 = C.current) == null ? void 0 : _C$current1.layout());
        }
      }
      (i.length > 0 || n.length > 0) && (L.current = e);
    }
  }, [B, k, u, c, S]), s(() => {
    C.current && (C.current.onDidChange = w);
  }, [w]), s(() => {
    C.current && (C.current.onDidDragStart = I);
  }, [I]), s(() => {
    C.current && (C.current.onDidDragEnd = x);
  }, [x]), V({
    ref: E,
    onResize: ({
      width: e,
      height: t
    }) => {
      var _C$current10;
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
    const i = t.key;
    return "Allotment.Pane" === t.type.displayName ? (O.current.set(i, t.props), e.cloneElement(t, {
      key: i,
      ref: e => {
        const s = t.ref;
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
  const t = I(e, 4, 20),
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
