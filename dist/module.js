function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import e, { useRef as t, useState as i, useEffect as n, useCallback as r, useMemo as s, forwardRef as o, useImperativeHandle as a } from "react";
var u = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function h(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var c,
  l = {
    exports: {}
  };
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
var f,
  m,
  d,
  p = (c || (c = 1, f = l, function () {
    var e = {}.hasOwnProperty;
    function t() {
      for (var i = [], n = 0; n < arguments.length; n++) {
        var r = arguments[n];
        if (r) {
          var s = typeof r;
          if ("string" === s || "number" === s) i.push(r);else if (Array.isArray(r)) {
            if (r.length) {
              var o = t.apply(null, r);
              o && i.push(o);
            }
          } else if ("object" === s) if (r.toString === Object.prototype.toString) for (var a in r) e.call(r, a) && r[a] && i.push(a);else i.push(r.toString());
        }
      }
      return i.join(" ");
    }
    f.exports ? (t.default = t, f.exports = t) : window.classNames = t;
  }()), l.exports),
  v = h(p);
var y,
  b = h(function () {
    if (d) return m;
    d = 1;
    var e = /^\s+|\s+$/g,
      t = /^[-+]0x[0-9a-f]+$/i,
      i = /^0b[01]+$/i,
      n = /^0o[0-7]+$/i,
      r = parseInt,
      s = Object.prototype.toString;
    function o(e) {
      var t = typeof e;
      return !!e && ("object" == t || "function" == t);
    }
    function a(a) {
      if ("number" == typeof a) return a;
      if (function (e) {
        return "symbol" == typeof e || function (e) {
          return !!e && "object" == typeof e;
        }(e) && "[object Symbol]" == s.call(e);
      }(a)) return NaN;
      if (o(a)) {
        var u = "function" == typeof a.valueOf ? a.valueOf() : a;
        a = o(u) ? u + "" : u;
      }
      if ("string" != typeof a) return 0 === a ? a : +a;
      a = a.replace(e, "");
      var h = i.test(a);
      return h || n.test(a) ? r(a.slice(2), h ? 2 : 8) : t.test(a) ? NaN : +a;
    }
    return m = function m(e, t, i) {
      return void 0 === i && (i = t, t = void 0), void 0 !== i && (i = (i = a(i)) == i ? i : 0), void 0 !== t && (t = (t = a(t)) == t ? t : 0), function (e, t, i) {
        return e == e && (void 0 !== i && (e = e <= i ? e : i), void 0 !== t && (e = e >= t ? e : t)), e;
      }(a(e), t, i);
    };
  }()),
  g = {
    exports: {}
  };
var z = (y || (y = 1, function (e, t) {
    var i = "__lodash_hash_undefined__",
      n = 9007199254740991,
      r = "[object Arguments]",
      s = "[object Array]",
      o = "[object Boolean]",
      a = "[object Date]",
      h = "[object Error]",
      c = "[object Function]",
      l = "[object Map]",
      f = "[object Number]",
      m = "[object Object]",
      d = "[object Promise]",
      p = "[object RegExp]",
      v = "[object Set]",
      y = "[object String]",
      b = "[object Symbol]",
      g = "[object WeakMap]",
      z = "[object ArrayBuffer]",
      w = "[object DataView]",
      S = /^\[object .+?Constructor\]$/,
      _ = /^(?:0|[1-9]\d*)$/,
      I = {};
    I["[object Float32Array]"] = I["[object Float64Array]"] = I["[object Int8Array]"] = I["[object Int16Array]"] = I["[object Int32Array]"] = I["[object Uint8Array]"] = I["[object Uint8ClampedArray]"] = I["[object Uint16Array]"] = I["[object Uint32Array]"] = !0, I[r] = I[s] = I[z] = I[o] = I[w] = I[a] = I[h] = I[c] = I[l] = I[f] = I[m] = I[p] = I[v] = I[y] = I[g] = !1;
    var x = "object" == typeof u && u && u.Object === Object && u,
      E = "object" == typeof self && self && self.Object === Object && self,
      V = x || E || Function("return this")(),
      j = t && !t.nodeType && t,
      N = j && e && !e.nodeType && e,
      L = N && N.exports === j,
      O = L && x.process,
      D = function () {
        try {
          return O && O.binding && O.binding("util");
        } catch (e) {}
      }(),
      M = D && D.isTypedArray;
    function P(e, t) {
      for (var i = -1, n = null == e ? 0 : e.length; ++i < n;) if (t(e[i], i, e)) return !0;
      return !1;
    }
    function A(e) {
      var t = -1,
        i = Array(e.size);
      return e.forEach(function (e, n) {
        i[++t] = [n, e];
      }), i;
    }
    function T(e) {
      var t = -1,
        i = Array(e.size);
      return e.forEach(function (e) {
        i[++t] = e;
      }), i;
    }
    var C,
      F,
      k,
      H = Array.prototype,
      $ = Function.prototype,
      Y = Object.prototype,
      B = V["__core-js_shared__"],
      R = $.toString,
      W = Y.hasOwnProperty,
      G = (C = /[^.]+$/.exec(B && B.keys && B.keys.IE_PROTO || "")) ? "Symbol(src)_1." + C : "",
      U = Y.toString,
      X = RegExp("^" + R.call(W).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      J = L ? V.Buffer : void 0,
      K = V.Symbol,
      Z = V.Uint8Array,
      Q = Y.propertyIsEnumerable,
      q = H.splice,
      ee = K ? K.toStringTag : void 0,
      te = Object.getOwnPropertySymbols,
      ie = J ? J.isBuffer : void 0,
      ne = (F = Object.keys, k = Object, function (e) {
        return F(k(e));
      }),
      re = De(V, "DataView"),
      se = De(V, "Map"),
      oe = De(V, "Promise"),
      ae = De(V, "Set"),
      ue = De(V, "WeakMap"),
      he = De(Object, "create"),
      ce = Te(re),
      le = Te(se),
      fe = Te(oe),
      me = Te(ae),
      de = Te(ue),
      pe = K ? K.prototype : void 0,
      ve = pe ? pe.valueOf : void 0;
    function ye(e) {
      var t = -1,
        i = null == e ? 0 : e.length;
      for (this.clear(); ++t < i;) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    function be(e) {
      var t = -1,
        i = null == e ? 0 : e.length;
      for (this.clear(); ++t < i;) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    function ge(e) {
      var t = -1,
        i = null == e ? 0 : e.length;
      for (this.clear(); ++t < i;) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    function ze(e) {
      var t = -1,
        i = null == e ? 0 : e.length;
      for (this.__data__ = new ge(); ++t < i;) this.add(e[t]);
    }
    function we(e) {
      var t = this.__data__ = new be(e);
      this.size = t.size;
    }
    function Se(e, t) {
      var i = ke(e),
        n = !i && Fe(e),
        r = !i && !n && He(e),
        s = !i && !n && !r && We(e),
        o = i || n || r || s,
        a = o ? function (e, t) {
          for (var i = -1, n = Array(e); ++i < e;) n[i] = t(i);
          return n;
        }(e.length, String) : [],
        u = a.length;
      for (var h in e) !W.call(e, h) || o && ("length" == h || r && ("offset" == h || "parent" == h) || s && ("buffer" == h || "byteLength" == h || "byteOffset" == h) || Ae(h, u)) || a.push(h);
      return a;
    }
    function _e(e, t) {
      for (var i = e.length; i--;) if (Ce(e[i][0], t)) return i;
      return -1;
    }
    function Ie(e) {
      return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : ee && ee in Object(e) ? function (e) {
        var t = W.call(e, ee),
          i = e[ee];
        try {
          e[ee] = void 0;
          var n = !0;
        } catch (e) {}
        var r = U.call(e);
        return n && (t ? e[ee] = i : delete e[ee]), r;
      }(e) : function (e) {
        return U.call(e);
      }(e);
    }
    function xe(e) {
      return Re(e) && Ie(e) == r;
    }
    function Ee(e, t, i, n, u) {
      return e === t || (null == e || null == t || !Re(e) && !Re(t) ? e != e && t != t : function (e, t, i, n, u, c) {
        var d = ke(e),
          g = ke(t),
          S = d ? s : Pe(e),
          _ = g ? s : Pe(t),
          I = (S = S == r ? m : S) == m,
          x = (_ = _ == r ? m : _) == m,
          E = S == _;
        if (E && He(e)) {
          if (!He(t)) return !1;
          d = !0, I = !1;
        }
        if (E && !I) return c || (c = new we()), d || We(e) ? Ne(e, t, i, n, u, c) : function (e, t, i, n, r, s, u) {
          switch (i) {
            case w:
              if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
              e = e.buffer, t = t.buffer;
            case z:
              return !(e.byteLength != t.byteLength || !s(new Z(e), new Z(t)));
            case o:
            case a:
            case f:
              return Ce(+e, +t);
            case h:
              return e.name == t.name && e.message == t.message;
            case p:
            case y:
              return e == t + "";
            case l:
              var c = A;
            case v:
              var m = 1 & n;
              if (c || (c = T), e.size != t.size && !m) return !1;
              var d = u.get(e);
              if (d) return d == t;
              n |= 2, u.set(e, t);
              var g = Ne(c(e), c(t), n, r, s, u);
              return u.delete(e), g;
            case b:
              if (ve) return ve.call(e) == ve.call(t);
          }
          return !1;
        }(e, t, S, i, n, u, c);
        if (!(1 & i)) {
          var V = I && W.call(e, "__wrapped__"),
            j = x && W.call(t, "__wrapped__");
          if (V || j) {
            var N = V ? e.value() : e,
              L = j ? t.value() : t;
            return c || (c = new we()), u(N, L, i, n, c);
          }
        }
        return !!E && (c || (c = new we()), function (e, t, i, n, r, s) {
          var o = 1 & i,
            a = Le(e),
            u = a.length,
            h = Le(t),
            c = h.length;
          if (u != c && !o) return !1;
          for (var l = u; l--;) {
            var f = a[l];
            if (!(o ? f in t : W.call(t, f))) return !1;
          }
          var m = s.get(e);
          if (m && s.get(t)) return m == t;
          var d = !0;
          s.set(e, t), s.set(t, e);
          for (var p = o; ++l < u;) {
            var v = e[f = a[l]],
              y = t[f];
            if (n) var b = o ? n(y, v, f, t, e, s) : n(v, y, f, e, t, s);
            if (!(void 0 === b ? v === y || r(v, y, i, n, s) : b)) {
              d = !1;
              break;
            }
            p || (p = "constructor" == f);
          }
          if (d && !p) {
            var g = e.constructor,
              z = t.constructor;
            g == z || !("constructor" in e) || !("constructor" in t) || "function" == typeof g && g instanceof g && "function" == typeof z && z instanceof z || (d = !1);
          }
          return s.delete(e), s.delete(t), d;
        }(e, t, i, n, u, c));
      }(e, t, i, n, Ee, u));
    }
    function Ve(e) {
      return !(!Be(e) || function (e) {
        return !!G && G in e;
      }(e)) && ($e(e) ? X : S).test(Te(e));
    }
    function je(e) {
      if (i = (t = e) && t.constructor, n = "function" == typeof i && i.prototype || Y, t !== n) return ne(e);
      var t,
        i,
        n,
        r = [];
      for (var s in Object(e)) W.call(e, s) && "constructor" != s && r.push(s);
      return r;
    }
    function Ne(e, t, i, n, r, s) {
      var o = 1 & i,
        a = e.length,
        u = t.length;
      if (a != u && !(o && u > a)) return !1;
      var h = s.get(e);
      if (h && s.get(t)) return h == t;
      var c = -1,
        l = !0,
        f = 2 & i ? new ze() : void 0;
      for (s.set(e, t), s.set(t, e); ++c < a;) {
        var m = e[c],
          d = t[c];
        if (n) var p = o ? n(d, m, c, t, e, s) : n(m, d, c, e, t, s);
        if (void 0 !== p) {
          if (p) continue;
          l = !1;
          break;
        }
        if (f) {
          if (!P(t, function (e, t) {
            if (o = t, !f.has(o) && (m === e || r(m, e, i, n, s))) return f.push(t);
            var o;
          })) {
            l = !1;
            break;
          }
        } else if (m !== d && !r(m, d, i, n, s)) {
          l = !1;
          break;
        }
      }
      return s.delete(e), s.delete(t), l;
    }
    function Le(e) {
      return function (e, t, i) {
        var n = t(e);
        return ke(e) ? n : function (e, t) {
          for (var i = -1, n = t.length, r = e.length; ++i < n;) e[r + i] = t[i];
          return e;
        }(n, i(e));
      }(e, Ge, Me);
    }
    function Oe(e, t) {
      var i,
        n,
        r = e.__data__;
      return ("string" == (n = typeof (i = t)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== i : null === i) ? r["string" == typeof t ? "string" : "hash"] : r.map;
    }
    function De(e, t) {
      var i = function (e, t) {
        return null == e ? void 0 : e[t];
      }(e, t);
      return Ve(i) ? i : void 0;
    }
    ye.prototype.clear = function () {
      this.__data__ = he ? he(null) : {}, this.size = 0;
    }, ye.prototype.delete = function (e) {
      var t = this.has(e) && delete this.__data__[e];
      return this.size -= t ? 1 : 0, t;
    }, ye.prototype.get = function (e) {
      var t = this.__data__;
      if (he) {
        var n = t[e];
        return n === i ? void 0 : n;
      }
      return W.call(t, e) ? t[e] : void 0;
    }, ye.prototype.has = function (e) {
      var t = this.__data__;
      return he ? void 0 !== t[e] : W.call(t, e);
    }, ye.prototype.set = function (e, t) {
      var n = this.__data__;
      return this.size += this.has(e) ? 0 : 1, n[e] = he && void 0 === t ? i : t, this;
    }, be.prototype.clear = function () {
      this.__data__ = [], this.size = 0;
    }, be.prototype.delete = function (e) {
      var t = this.__data__,
        i = _e(t, e);
      return !(i < 0 || (i == t.length - 1 ? t.pop() : q.call(t, i, 1), --this.size, 0));
    }, be.prototype.get = function (e) {
      var t = this.__data__,
        i = _e(t, e);
      return i < 0 ? void 0 : t[i][1];
    }, be.prototype.has = function (e) {
      return _e(this.__data__, e) > -1;
    }, be.prototype.set = function (e, t) {
      var i = this.__data__,
        n = _e(i, e);
      return n < 0 ? (++this.size, i.push([e, t])) : i[n][1] = t, this;
    }, ge.prototype.clear = function () {
      this.size = 0, this.__data__ = {
        hash: new ye(),
        map: new (se || be)(),
        string: new ye()
      };
    }, ge.prototype.delete = function (e) {
      var t = Oe(this, e).delete(e);
      return this.size -= t ? 1 : 0, t;
    }, ge.prototype.get = function (e) {
      return Oe(this, e).get(e);
    }, ge.prototype.has = function (e) {
      return Oe(this, e).has(e);
    }, ge.prototype.set = function (e, t) {
      var i = Oe(this, e),
        n = i.size;
      return i.set(e, t), this.size += i.size == n ? 0 : 1, this;
    }, ze.prototype.add = ze.prototype.push = function (e) {
      return this.__data__.set(e, i), this;
    }, ze.prototype.has = function (e) {
      return this.__data__.has(e);
    }, we.prototype.clear = function () {
      this.__data__ = new be(), this.size = 0;
    }, we.prototype.delete = function (e) {
      var t = this.__data__,
        i = t.delete(e);
      return this.size = t.size, i;
    }, we.prototype.get = function (e) {
      return this.__data__.get(e);
    }, we.prototype.has = function (e) {
      return this.__data__.has(e);
    }, we.prototype.set = function (e, t) {
      var i = this.__data__;
      if (i instanceof be) {
        var n = i.__data__;
        if (!se || n.length < 199) return n.push([e, t]), this.size = ++i.size, this;
        i = this.__data__ = new ge(n);
      }
      return i.set(e, t), this.size = i.size, this;
    };
    var Me = te ? function (e) {
        return null == e ? [] : (e = Object(e), function (e, t) {
          for (var i = -1, n = null == e ? 0 : e.length, r = 0, s = []; ++i < n;) {
            var o = e[i];
            t(o, i, e) && (s[r++] = o);
          }
          return s;
        }(te(e), function (t) {
          return Q.call(e, t);
        }));
      } : function () {
        return [];
      },
      Pe = Ie;
    function Ae(e, t) {
      return !!(t = null == t ? n : t) && ("number" == typeof e || _.test(e)) && e > -1 && e % 1 == 0 && e < t;
    }
    function Te(e) {
      if (null != e) {
        try {
          return R.call(e);
        } catch (e) {}
        try {
          return e + "";
        } catch (e) {}
      }
      return "";
    }
    function Ce(e, t) {
      return e === t || e != e && t != t;
    }
    (re && Pe(new re(new ArrayBuffer(1))) != w || se && Pe(new se()) != l || oe && Pe(oe.resolve()) != d || ae && Pe(new ae()) != v || ue && Pe(new ue()) != g) && (Pe = function Pe(e) {
      var t = Ie(e),
        i = t == m ? e.constructor : void 0,
        n = i ? Te(i) : "";
      if (n) switch (n) {
        case ce:
          return w;
        case le:
          return l;
        case fe:
          return d;
        case me:
          return v;
        case de:
          return g;
      }
      return t;
    });
    var Fe = xe(function () {
        return arguments;
      }()) ? xe : function (e) {
        return Re(e) && W.call(e, "callee") && !Q.call(e, "callee");
      },
      ke = Array.isArray,
      He = ie || function () {
        return !1;
      };
    function $e(e) {
      if (!Be(e)) return !1;
      var t = Ie(e);
      return t == c || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t;
    }
    function Ye(e) {
      return "number" == typeof e && e > -1 && e % 1 == 0 && e <= n;
    }
    function Be(e) {
      var t = typeof e;
      return null != e && ("object" == t || "function" == t);
    }
    function Re(e) {
      return null != e && "object" == typeof e;
    }
    var We = M ? function (e) {
      return function (t) {
        return e(t);
      };
    }(M) : function (e) {
      return Re(e) && Ye(e.length) && !!I[Ie(e)];
    };
    function Ge(e) {
      return null != (t = e) && Ye(t.length) && !$e(t) ? Se(e) : je(e);
      var t;
    }
    e.exports = function (e, t) {
      return Ee(e, t);
    };
  }(g, g.exports)), g.exports),
  w = h(z);
function S(e, t, i) {
  return e[t] ? e[t][0] ? e[t][0][i] : e[t][i] : "contentBoxSize" === t ? e.contentRect["inlineSize" === i ? "width" : "height"] : void 0;
}
function _(e) {
  void 0 === e && (e = {});
  var o = e.onResize,
    a = t(void 0);
  a.current = o;
  var u = e.round || Math.round,
    h = t(),
    c = i({
      width: void 0,
      height: void 0
    }),
    l = c[0],
    f = c[1],
    m = t(!1);
  n(function () {
    return m.current = !1, function () {
      m.current = !0;
    };
  }, []);
  var d = t({
      width: void 0,
      height: void 0
    }),
    p = function (e, i) {
      var s = t(null),
        o = t(null);
      o.current = i;
      var a = t(null);
      n(function () {
        u();
      });
      var u = r(function () {
        var t = a.current,
          i = o.current,
          n = t || (i ? i instanceof Element ? i : i.current : null);
        s.current && s.current.element === n && s.current.subscriber === e || (s.current && s.current.cleanup && s.current.cleanup(), s.current = {
          element: n,
          subscriber: e,
          cleanup: n ? e(n) : void 0
        });
      }, [e]);
      return n(function () {
        return function () {
          s.current && s.current.cleanup && (s.current.cleanup(), s.current = null);
        };
      }, []), r(function (e) {
        a.current = e, u();
      }, [u]);
    }(r(function (t) {
      return h.current && h.current.box === e.box && h.current.round === u || (h.current = {
        box: e.box,
        round: u,
        instance: new ResizeObserver(function (t) {
          var i = t[0],
            n = "border-box" === e.box ? "borderBoxSize" : "device-pixel-content-box" === e.box ? "devicePixelContentBoxSize" : "contentBoxSize",
            r = S(i, n, "inlineSize"),
            s = S(i, n, "blockSize"),
            o = r ? u(r) : void 0,
            h = s ? u(s) : void 0;
          if (d.current.width !== o || d.current.height !== h) {
            var c = {
              width: o,
              height: h
            };
            d.current.width = o, d.current.height = h, a.current ? a.current(c) : m.current || f(c);
          }
        })
      }), h.current.instance.observe(t, {
        box: e.box
      }), function () {
        h.current && h.current.instance.unobserve(t);
      };
    }, [e.box, u]), e.ref);
  return s(function () {
    return {
      ref: p,
      width: l.width,
      height: l.height
    };
  }, [p, l.width, l.height]);
}
var I = "allotment-module_splitView__L-yRc",
  x = "allotment-module_sashContainer__fzwJF",
  E = "allotment-module_splitViewContainer__rQnVa",
  V = "allotment-module_splitViewView__MGZ6O",
  j = "allotment-module_vertical__WSwwa",
  N = "allotment-module_horizontal__7doS8",
  L = "allotment-module_separatorBorder__x-rDS";
var O,
  D = !1,
  M = !1;
"object" == typeof navigator && (O = navigator.userAgent, M = O.indexOf("Macintosh") >= 0, D = (O.indexOf("Macintosh") >= 0 || O.indexOf("iPad") >= 0 || O.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0);
var P = D,
  A = M;
class T {
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
function C(e, t) {
  var i = e.length,
    n = i - t.length;
  return n >= 0 && e.slice(n, i) === t;
}
var F,
  k = {
    exports: {}
  };
var H,
  $,
  Y = (F || (F = 1, function (e) {
    var t = Object.prototype.hasOwnProperty,
      i = "~";
    function n() {}
    function r(e, t, i) {
      this.fn = e, this.context = t, this.once = i || !1;
    }
    function s(e, t, n, s, o) {
      if ("function" != typeof n) throw new TypeError("The listener must be a function");
      var a = new r(n, s || e, o),
        u = i ? i + t : t;
      return e._events[u] ? e._events[u].fn ? e._events[u] = [e._events[u], a] : e._events[u].push(a) : (e._events[u] = a, e._eventsCount++), e;
    }
    function o(e, t) {
      0 == --e._eventsCount ? e._events = new n() : delete e._events[t];
    }
    function a() {
      this._events = new n(), this._eventsCount = 0;
    }
    Object.create && (n.prototype = Object.create(null), new n().__proto__ || (i = !1)), a.prototype.eventNames = function () {
      var e,
        n,
        r = [];
      if (0 === this._eventsCount) return r;
      for (n in e = this._events) t.call(e, n) && r.push(i ? n.slice(1) : n);
      return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r;
    }, a.prototype.listeners = function (e) {
      var t = i ? i + e : e,
        n = this._events[t];
      if (!n) return [];
      if (n.fn) return [n.fn];
      for (var r = 0, s = n.length, o = new Array(s); r < s; r++) o[r] = n[r].fn;
      return o;
    }, a.prototype.listenerCount = function (e) {
      var t = i ? i + e : e,
        n = this._events[t];
      return n ? n.fn ? 1 : n.length : 0;
    }, a.prototype.emit = function (e, t, n, r, s, o) {
      var a = i ? i + e : e;
      if (!this._events[a]) return !1;
      var u,
        h,
        c = this._events[a],
        l = arguments.length;
      if (c.fn) {
        switch (c.once && this.removeListener(e, c.fn, void 0, !0), l) {
          case 1:
            return c.fn.call(c.context), !0;
          case 2:
            return c.fn.call(c.context, t), !0;
          case 3:
            return c.fn.call(c.context, t, n), !0;
          case 4:
            return c.fn.call(c.context, t, n, r), !0;
          case 5:
            return c.fn.call(c.context, t, n, r, s), !0;
          case 6:
            return c.fn.call(c.context, t, n, r, s, o), !0;
        }
        for (h = 1, u = new Array(l - 1); h < l; h++) u[h - 1] = arguments[h];
        c.fn.apply(c.context, u);
      } else {
        var f,
          m = c.length;
        for (h = 0; h < m; h++) switch (c[h].once && this.removeListener(e, c[h].fn, void 0, !0), l) {
          case 1:
            c[h].fn.call(c[h].context);
            break;
          case 2:
            c[h].fn.call(c[h].context, t);
            break;
          case 3:
            c[h].fn.call(c[h].context, t, n);
            break;
          case 4:
            c[h].fn.call(c[h].context, t, n, r);
            break;
          default:
            if (!u) for (f = 1, u = new Array(l - 1); f < l; f++) u[f - 1] = arguments[f];
            c[h].fn.apply(c[h].context, u);
        }
      }
      return !0;
    }, a.prototype.on = function (e, t, i) {
      return s(this, e, t, i, !1);
    }, a.prototype.once = function (e, t, i) {
      return s(this, e, t, i, !0);
    }, a.prototype.removeListener = function (e, t, n, r) {
      var s = i ? i + e : e;
      if (!this._events[s]) return this;
      if (!t) return o(this, s), this;
      var a = this._events[s];
      if (a.fn) a.fn !== t || r && !a.once || n && a.context !== n || o(this, s);else {
        for (var u = 0, h = [], c = a.length; u < c; u++) (a[u].fn !== t || r && !a[u].once || n && a[u].context !== n) && h.push(a[u]);
        h.length ? this._events[s] = 1 === h.length ? h[0] : h : o(this, s);
      }
      return this;
    }, a.prototype.removeAllListeners = function (e) {
      var t;
      return e ? (t = i ? i + e : e, this._events[t] && o(this, t)) : (this._events = new n(), this._eventsCount = 0), this;
    }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = i, a.EventEmitter = a, e.exports = a;
  }(k)), k.exports),
  B = h(Y);
function R(e, t) {
  var i = e.indexOf(t);
  i > -1 && (e.splice(i, 1), e.unshift(t));
}
function W(e, t) {
  var i = e.indexOf(t);
  i > -1 && (e.splice(i, 1), e.push(t));
}
function G(e, t, i) {
  if (i === void 0) {
    i = 1;
  }
  var n = Math.max(0, Math.ceil((t - e) / i)),
    r = new Array(n);
  var s = -1;
  for (; ++s < n;) r[s] = e + s * i;
  return r;
}
var U = h(function () {
    if ($) return H;
    $ = 1;
    var e = /^\s+|\s+$/g,
      t = /^[-+]0x[0-9a-f]+$/i,
      i = /^0b[01]+$/i,
      n = /^0o[0-7]+$/i,
      r = parseInt,
      s = "object" == typeof u && u && u.Object === Object && u,
      o = "object" == typeof self && self && self.Object === Object && self,
      a = s || o || Function("return this")(),
      h = Object.prototype.toString,
      c = Math.max,
      l = Math.min,
      f = function f() {
        return a.Date.now();
      };
    function m(e) {
      var t = typeof e;
      return !!e && ("object" == t || "function" == t);
    }
    function d(s) {
      if ("number" == typeof s) return s;
      if (function (e) {
        return "symbol" == typeof e || function (e) {
          return !!e && "object" == typeof e;
        }(e) && "[object Symbol]" == h.call(e);
      }(s)) return NaN;
      if (m(s)) {
        var o = "function" == typeof s.valueOf ? s.valueOf() : s;
        s = m(o) ? o + "" : o;
      }
      if ("string" != typeof s) return 0 === s ? s : +s;
      s = s.replace(e, "");
      var a = i.test(s);
      return a || n.test(s) ? r(s.slice(2), a ? 2 : 8) : t.test(s) ? NaN : +s;
    }
    return H = function H(e, t, i) {
      var n,
        r,
        s,
        o,
        a,
        u,
        h = 0,
        p = !1,
        v = !1,
        y = !0;
      if ("function" != typeof e) throw new TypeError("Expected a function");
      function b(t) {
        var i = n,
          s = r;
        return n = r = void 0, h = t, o = e.apply(s, i);
      }
      function g(e) {
        var i = e - u;
        return void 0 === u || i >= t || i < 0 || v && e - h >= s;
      }
      function z() {
        var e = f();
        if (g(e)) return w(e);
        a = setTimeout(z, function (e) {
          var i = t - (e - u);
          return v ? l(i, s - (e - h)) : i;
        }(e));
      }
      function w(e) {
        return a = void 0, y && n ? b(e) : (n = r = void 0, o);
      }
      function S() {
        var e = f(),
          i = g(e);
        if (n = arguments, r = this, u = e, i) {
          if (void 0 === a) return function (e) {
            return h = e, a = setTimeout(z, t), p ? b(e) : o;
          }(u);
          if (v) return a = setTimeout(z, t), b(u);
        }
        return void 0 === a && (a = setTimeout(z, t)), o;
      }
      return t = d(t) || 0, m(i) && (p = !!i.leading, s = (v = "maxWait" in i) ? c(d(i.maxWait) || 0, t) : s, y = "trailing" in i ? !!i.trailing : y), S.cancel = function () {
        void 0 !== a && clearTimeout(a), h = 0, n = u = r = a = void 0;
      }, S.flush = function () {
        return void 0 === a ? o : w(f());
      }, S;
    };
  }()),
  X = "sash-module_sash__K-9lB",
  J = "sash-module_disabled__Hm-wx",
  K = "sash-module_mac__Jf6OJ",
  Z = "sash-module_vertical__pB-rs",
  Q = "sash-module_minimum__-UKxp",
  q = "sash-module_maximum__TCWxD",
  ee = "sash-module_horizontal__kFbiw",
  te = "sash-module_hover__80W6I",
  ie = "sash-module_active__bJspD";
var ne = function (e) {
    return e.Vertical = "VERTICAL", e.Horizontal = "HORIZONTAL", e;
  }({}),
  re = function (e) {
    return e.Disabled = "DISABLED", e.Minimum = "MINIMUM", e.Maximum = "MAXIMUM", e.Enabled = "ENABLED", e;
  }({}),
  se = P ? 20 : 8;
var oe = new B();
class ae extends B {
  get state() {
    return this._state;
  }
  set state(e) {
    this._state !== e && (this.el.classList.toggle(J, e === re.Disabled), this.el.classList.toggle("sash-disabled", e === re.Disabled), this.el.classList.toggle(Q, e === re.Minimum), this.el.classList.toggle("sash-minimum", e === re.Minimum), this.el.classList.toggle(q, e === re.Maximum), this.el.classList.toggle("sash-maximum", e === re.Maximum), this._state = e, this.emit("enablementChange", e));
  }
  constructor(e, t, i) {
    var _i$orientation;
    super(), this.el = void 0, this.layoutProvider = void 0, this.orientation = void 0, this.size = void 0, this.hoverDelay = 300, this.hoverDelayer = U(e => e.classList.add("sash-hover", te), this.hoverDelay), this._state = re.Enabled, this.onPointerStart = e => {
      var t = e.pageX,
        i = e.pageY,
        n = {
          startX: t,
          currentX: t,
          startY: i,
          currentY: i
        };
      this.el.classList.add("sash-active", ie), this.emit("start", n), this.el.setPointerCapture(e.pointerId);
      var r = e => {
          e.preventDefault();
          var n = {
            startX: t,
            currentX: e.pageX,
            startY: i,
            currentY: e.pageY
          };
          this.emit("change", n);
        },
        s = e => {
          e.preventDefault(), this.el.classList.remove("sash-active", ie), this.hoverDelayer.cancel(), this.emit("end"), this.el.releasePointerCapture(e.pointerId), window.removeEventListener("pointermove", r), window.removeEventListener("pointerup", s);
        };
      window.addEventListener("pointermove", r), window.addEventListener("pointerup", s);
    }, this.onPointerDoublePress = () => {
      this.emit("reset");
    }, this.onMouseEnter = () => {
      this.el.classList.contains(ie) ? (this.hoverDelayer.cancel(), this.el.classList.add("sash-hover", te)) : this.hoverDelayer(this.el);
    }, this.onMouseLeave = () => {
      this.hoverDelayer.cancel(), this.el.classList.remove("sash-hover", te);
    }, this.el = document.createElement("div"), this.el.classList.add("sash", X), this.el.dataset.testid = "sash", e.append(this.el), A && this.el.classList.add("sash-mac", K), this.el.addEventListener("pointerdown", this.onPointerStart), this.el.addEventListener("dblclick", this.onPointerDoublePress), this.el.addEventListener("mouseenter", this.onMouseEnter), this.el.addEventListener("mouseleave", this.onMouseLeave), "number" == typeof i.size ? (this.size = i.size, i.orientation === ne.Vertical ? this.el.style.width = this.size + "px" : this.el.style.height = this.size + "px") : (this.size = se, oe.on("onDidChangeGlobalSize", e => {
      this.size = e, this.layout();
    })), this.layoutProvider = t, this.orientation = (_i$orientation = i.orientation) != null ? _i$orientation : ne.Vertical, this.orientation === ne.Horizontal ? (this.el.classList.add("sash-horizontal", ee), this.el.classList.remove("sash-vertical", Z)) : (this.el.classList.remove("sash-horizontal", ee), this.el.classList.add("sash-vertical", Z)), this.layout();
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
var ue;
var he;
(he = ue || (ue = {})).Distribute = {
  type: "distribute"
}, he.Split = function (e) {
  return {
    type: "split",
    index: e
  };
}, he.Invisible = function (e) {
  return {
    type: "invisible",
    cachedVisibleSize: e
  };
};
var ce = function (e) {
  return e.Normal = "NORMAL", e.Low = "LOW", e.High = "HIGH", e;
}({});
class le {
  constructor(e, t, i) {
    this.container = void 0, this.view = void 0, this._size = void 0, this._cachedVisibleSize = void 0, this.container = e, this.view = t, this.container.classList.add("split-view-view", V), this.container.dataset.testid = "split-view-view", "number" == typeof i ? (this._size = i, this._cachedVisibleSize = void 0, e.classList.add("split-view-view-visible")) : (this._size = 0, this._cachedVisibleSize = i.cachedVisibleSize);
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
    e !== this.visible && (e ? (this.size = b(this._cachedVisibleSize, this.viewMinimumSize, this.viewMaximumSize), this._cachedVisibleSize = void 0) : (this._cachedVisibleSize = "number" == typeof t ? t : this.size, this.size = 0), this.container.classList.toggle("split-view-view-visible", e), this.view.setVisible && this.view.setVisible(e));
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
class fe extends le {
  layoutContainer(e) {
    this.container.style.left = e + "px", this.container.style.width = this.size + "px";
  }
}
class me extends le {
  layoutContainer(e) {
    this.container.style.top = e + "px", this.container.style.height = this.size + "px";
  }
}
class de extends B {
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
  constructor(e, t, i, n, r) {
    var _t$orientation, _t$proportionalLayout;
    if (t === void 0) {
      t = {};
    }
    if (super(), this.onDidChange = void 0, this.onDidDragStart = void 0, this.onDidDragEnd = void 0, this.orientation = void 0, this.sashContainer = void 0, this.size = 0, this.contentSize = 0, this.proportions = void 0, this.viewItems = [], this.sashItems = [], this.sashDragState = void 0, this.proportionalLayout = void 0, this.getSashOrthogonalSize = void 0, this._startSnappingEnabled = !0, this._endSnappingEnabled = !0, this.onSashEnd = e => {
      this.emit("sashchange", e), this.saveProportions();
      for (var _e4 of this.viewItems) _e4.enabled = !0;
    }, this.orientation = (_t$orientation = t.orientation) != null ? _t$orientation : ne.Vertical, this.proportionalLayout = (_t$proportionalLayout = t.proportionalLayout) != null ? _t$proportionalLayout : !0, this.getSashOrthogonalSize = t.getSashOrthogonalSize, i && (this.onDidChange = i), n && (this.onDidDragStart = n), r && (this.onDidDragEnd = r), this.sashContainer = document.createElement("div"), this.sashContainer.classList.add("sash-container", x), e.prepend(this.sashContainer), t.descriptor) {
      this.size = t.descriptor.size;
      for (var [_e5, _i] of t.descriptor.views.entries()) {
        var _t = _i.size,
          _n = _i.container,
          _r = _i.view;
        this.addView(_n, _r, _t, _e5, !0);
      }
      this.contentSize = this.viewItems.reduce((e, t) => e + t.size, 0), this.saveProportions();
    }
  }
  addView(e, t, i, n, r) {
    if (n === void 0) {
      n = this.viewItems.length;
    }
    var s;
    s = "number" == typeof i ? i : "split" === i.type ? this.getViewSize(i.index) / 2 : "invisible" === i.type ? {
      cachedVisibleSize: i.cachedVisibleSize
    } : t.minimumSize;
    var o = this.orientation === ne.Vertical ? new me(e, t, s) : new fe(e, t, s);
    if (this.viewItems.splice(n, 0, o), this.viewItems.length > 1) {
      var _e6 = this.orientation === ne.Vertical ? new ae(this.sashContainer, {
          getHorizontalSashTop: e => this.getSashPosition(e),
          getHorizontalSashWidth: this.getSashOrthogonalSize
        }, {
          orientation: ne.Horizontal
        }) : new ae(this.sashContainer, {
          getVerticalSashLeft: e => this.getSashPosition(e),
          getVerticalSashHeight: this.getSashOrthogonalSize
        }, {
          orientation: ne.Vertical
        }),
        _t2 = this.orientation === ne.Vertical ? t => ({
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
        this.emit("sashDragStart"), this.onSashStart(_t2(e));
        var i = this.viewItems.map(e => e.size);
        (_this$onDidDragStart = this.onDidDragStart) == null || _this$onDidDragStart.call(this, i);
      }), _e6.on("change", e => this.onSashChange(_t2(e))), _e6.on("end", () => {
        var _this$onDidDragEnd;
        this.emit("sashDragEnd"), this.onSashEnd(this.sashItems.findIndex(t => t.sash === _e6));
        var t = this.viewItems.map(e => e.size);
        (_this$onDidDragEnd = this.onDidDragEnd) == null || _this$onDidDragEnd.call(this, t);
      }), _e6.on("reset", () => {
        var t = this.sashItems.findIndex(t => t.sash === _e6),
          i = G(t, -1, -1),
          n = G(t + 1, this.viewItems.length),
          r = this.findFirstSnapIndex(i),
          s = this.findFirstSnapIndex(n);
        ("number" != typeof r || this.viewItems[r].visible) && ("number" != typeof s || this.viewItems[s].visible) && this.emit("sashreset", t);
      });
      var _i2 = {
        sash: _e6
      };
      this.sashItems.splice(n - 1, 0, _i2);
    }
    r || this.relayout(), r || "number" == typeof i || "distribute" !== i.type || this.distributeViewSizes();
  }
  removeView(e, t) {
    if (e < 0 || e >= this.viewItems.length) throw new Error("Index out of bounds");
    var i = this.viewItems.splice(e, 1)[0].view;
    if (this.viewItems.length >= 1) {
      var _t3 = Math.max(e - 1, 0);
      this.sashItems.splice(_t3, 1)[0].sash.dispose();
    }
    return this.relayout(), t && "distribute" === t.type && this.distributeViewSizes(), i;
  }
  moveView(e, t, i) {
    var n = this.getViewCachedVisibleSize(t),
      r = void 0 === n ? this.getViewSize(t) : ue.Invisible(n),
      s = this.removeView(t);
    this.addView(e, s, r, i);
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
    if (this.size = e, this.proportions) for (var _t4 = 0; _t4 < this.viewItems.length; _t4++) {
      var _i3 = this.viewItems[_t4];
      _i3.size = b(Math.round(this.proportions[_t4] * e), _i3.minimumSize, _i3.maximumSize);
    } else {
      var _i4 = G(0, this.viewItems.length),
        _n2 = _i4.filter(e => this.viewItems[e].priority === ce.Low),
        _r2 = _i4.filter(e => this.viewItems[e].priority === ce.High);
      this.resize(this.viewItems.length - 1, e - t, void 0, _n2, _r2);
    }
    this.distributeEmptySpace(), this.layoutViews();
  }
  resizeView(e, t) {
    if (e < 0 || e >= this.viewItems.length) return;
    var i = G(0, this.viewItems.length).filter(t => t !== e),
      n = [...i.filter(e => this.viewItems[e].priority === ce.Low), e],
      r = i.filter(e => this.viewItems[e].priority === ce.High),
      s = this.viewItems[e];
    t = Math.round(t), t = b(t, s.minimumSize, Math.min(s.maximumSize, this.size)), s.size = t, this.relayout(n, r);
  }
  resizeViews(e) {
    for (var _t5 = 0; _t5 < e.length; _t5++) {
      var _i5 = this.viewItems[_t5];
      var _n3 = e[_t5];
      _n3 = Math.round(_n3), _n3 = b(_n3, _i5.minimumSize, Math.min(_i5.maximumSize, this.size)), _i5.size = _n3;
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
    for (var _t6 of e) _t6.size = b(i, _t6.minimumSize, _t6.maximumSize);
    var n = G(0, this.viewItems.length),
      r = n.filter(e => this.viewItems[e].priority === ce.Low),
      s = n.filter(e => this.viewItems[e].priority === ce.High);
    this.relayout(r, s);
  }
  dispose() {
    this.sashItems.forEach(e => e.sash.dispose()), this.sashItems = [], this.sashContainer.remove();
  }
  relayout(e, t) {
    var i = this.viewItems.reduce((e, t) => e + t.size, 0);
    this.resize(this.viewItems.length - 1, this.size - i, void 0, e, t), this.distributeEmptySpace(), this.layoutViews(), this.saveProportions();
  }
  onSashStart(_ref) {
    var {
      sash: e,
      start: t
    } = _ref;
    var i = this.sashItems.findIndex(t => t.sash === e);
    (e => {
      var t = this.viewItems.map(e => e.size);
      var n,
        r,
        s = Number.NEGATIVE_INFINITY,
        o = Number.POSITIVE_INFINITY;
      var a = G(i, -1, -1),
        u = G(i + 1, this.viewItems.length),
        h = a.reduce((e, i) => e + (this.viewItems[i].minimumSize - t[i]), 0),
        c = a.reduce((e, i) => e + (this.viewItems[i].viewMaximumSize - t[i]), 0),
        l = 0 === u.length ? Number.POSITIVE_INFINITY : u.reduce((e, i) => e + (t[i] - this.viewItems[i].minimumSize), 0),
        f = 0 === u.length ? Number.NEGATIVE_INFINITY : u.reduce((e, i) => e + (t[i] - this.viewItems[i].viewMaximumSize), 0);
      s = Math.max(h, f), o = Math.min(l, c);
      var m = this.findFirstSnapIndex(a),
        d = this.findFirstSnapIndex(u);
      if ("number" == typeof m) {
        var _e7 = this.viewItems[m],
          _t7 = Math.floor(_e7.viewMinimumSize / 2);
        n = {
          index: m,
          limitDelta: _e7.visible ? s - _t7 : s + _t7,
          size: _e7.size
        };
      }
      if ("number" == typeof d) {
        var _e8 = this.viewItems[d],
          _t8 = Math.floor(_e8.viewMinimumSize / 2);
        r = {
          index: d,
          limitDelta: _e8.visible ? o + _t8 : o - _t8,
          size: _e8.size
        };
      }
      this.sashDragState = {
        start: e,
        current: e,
        index: i,
        sizes: t,
        minDelta: s,
        maxDelta: o,
        snapBefore: n,
        snapAfter: r
      };
    })(t);
  }
  onSashChange(_ref2) {
    var {
      current: e
    } = _ref2;
    var {
      index: t,
      start: i,
      sizes: n,
      minDelta: r,
      maxDelta: s,
      snapBefore: o,
      snapAfter: a
    } = this.sashDragState;
    this.sashDragState.current = e;
    var u = e - i;
    this.resize(t, u, n, void 0, void 0, r, s, o, a), this.distributeEmptySpace(), this.layoutViews();
  }
  getSashPosition(e) {
    var t = 0;
    for (var _i7 = 0; _i7 < this.sashItems.length; _i7++) if (t += this.viewItems[_i7].size, this.sashItems[_i7].sash === e) return t;
    return 0;
  }
  resize(e, t, i, n, r, s, o, a, u) {
    if (i === void 0) {
      i = this.viewItems.map(e => e.size);
    }
    if (s === void 0) {
      s = Number.NEGATIVE_INFINITY;
    }
    if (o === void 0) {
      o = Number.POSITIVE_INFINITY;
    }
    if (e < 0 || e >= this.viewItems.length) return 0;
    var h = G(e, -1, -1),
      c = G(e + 1, this.viewItems.length);
    if (r) for (var _e9 of r) R(h, _e9), R(c, _e9);
    if (n) for (var _e0 of n) W(h, _e0), W(c, _e0);
    var l = h.map(e => this.viewItems[e]),
      f = h.map(e => i[e]),
      m = c.map(e => this.viewItems[e]),
      d = c.map(e => i[e]),
      p = h.reduce((e, t) => e + (this.viewItems[t].minimumSize - i[t]), 0),
      v = h.reduce((e, t) => e + (this.viewItems[t].maximumSize - i[t]), 0),
      y = 0 === c.length ? Number.POSITIVE_INFINITY : c.reduce((e, t) => e + (i[t] - this.viewItems[t].minimumSize), 0),
      g = 0 === c.length ? Number.NEGATIVE_INFINITY : c.reduce((e, t) => e + (i[t] - this.viewItems[t].maximumSize), 0),
      z = Math.max(p, g, s),
      w = Math.min(y, v, o);
    var S = !1;
    if (a) {
      var _e1 = this.viewItems[a.index],
        _i8 = t >= a.limitDelta;
      S = _i8 !== _e1.visible, _e1.setVisible(_i8, a.size);
    }
    if (!S && u) {
      var _e10 = this.viewItems[u.index],
        _i9 = t < u.limitDelta;
      S = _i9 !== _e10.visible, _e10.setVisible(_i9, u.size);
    }
    if (S) return this.resize(e, t, i, n, r, s, o);
    for (var _e11 = 0, _i0 = t = b(t, z, w); _e11 < l.length; _e11++) {
      var _t9 = l[_e11],
        _n4 = b(f[_e11] + _i0, _t9.minimumSize, _t9.maximumSize);
      _i0 -= _n4 - f[_e11], _t9.size = _n4;
    }
    for (var _e12 = 0, _i1 = t; _e12 < m.length; _e12++) {
      var _t0 = m[_e12],
        _n5 = b(d[_e12] - _i1, _t0.minimumSize, _t0.maximumSize);
      _i1 += _n5 - d[_e12], _t0.size = _n5;
    }
    return t;
  }
  distributeEmptySpace(e) {
    var t = this.viewItems.reduce((e, t) => e + t.size, 0);
    var i = this.size - t;
    var n = G(0, this.viewItems.length),
      r = [],
      s = n.filter(e => this.viewItems[e].priority === ce.Low),
      o = n.filter(e => this.viewItems[e].priority === ce.Normal),
      a = n.filter(e => this.viewItems[e].priority === ce.High);
    r.push(...a, ...o, ...s), "number" == typeof e && W(r, e);
    for (var _e13 = 0; 0 !== i && _e13 < r.length; _e13++) {
      var _t1 = this.viewItems[r[_e13]],
        _n6 = b(_t1.size + i, _t1.minimumSize, _t1.maximumSize);
      i -= _n6 - _t1.size, _t1.size = _n6;
    }
  }
  layoutViews() {
    var _this$onDidChange;
    this.contentSize = this.viewItems.reduce((e, t) => e + t.size, 0);
    var e = 0;
    for (var _t10 of this.viewItems) _t10.layout(e), e += _t10.size;
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
      n = [...this.viewItems].reverse();
    e = !1;
    var r = n.map(t => e = t.size - t.minimumSize > 0 || e).reverse();
    e = !1;
    var s = n.map(t => e = t.maximumSize - t.size > 0 || e).reverse();
    var o = 0;
    for (var _e14 = 0; _e14 < this.sashItems.length; _e14++) {
      var {
        sash: _n7
      } = this.sashItems[_e14];
      o += this.viewItems[_e14].size;
      var _a = !(t[_e14] && s[_e14 + 1]),
        _u = !(i[_e14] && r[_e14 + 1]);
      if (_a && _u) {
        var _i10 = G(_e14, -1, -1),
          _s = G(_e14 + 1, this.viewItems.length),
          _a2 = this.findFirstSnapIndex(_i10),
          _u2 = this.findFirstSnapIndex(_s),
          _h = "number" == typeof _a2 && !this.viewItems[_a2].visible,
          _c = "number" == typeof _u2 && !this.viewItems[_u2].visible;
        _h && r[_e14] && (o > 0 || this.startSnappingEnabled) ? _n7.state = re.Minimum : _c && t[_e14] && (o < this.contentSize || this.endSnappingEnabled) ? _n7.state = re.Maximum : _n7.state = re.Disabled;
      } else _n7.state = _a && !_u ? re.Minimum : !_a && _u ? re.Maximum : re.Enabled;
    }
  }
  findFirstSnapIndex(e) {
    for (var _t11 of e) {
      var _e15 = this.viewItems[_t11];
      if (_e15.visible && _e15.snap) return _t11;
    }
    for (var _t12 of e) {
      var _e16 = this.viewItems[_t12];
      if (_e16.visible && _e16.maximumSize - _e16.minimumSize > 0) return;
      if (!_e16.visible && _e16.snap) return _t12;
    }
  }
}
class pe {
  constructor(e) {
    this.size = void 0, this.size = e;
  }
  getPreferredSize() {
    return this.size;
  }
}
class ve {
  constructor(e, t) {
    this.proportion = void 0, this.layoutService = void 0, this.proportion = e, this.layoutService = t;
  }
  getPreferredSize() {
    return this.proportion * this.layoutService.getSize();
  }
}
class ye {
  getPreferredSize() {}
}
class be {
  get preferredSize() {
    return this.layoutStrategy.getPreferredSize();
  }
  set preferredSize(e) {
    if ("number" == typeof e) this.layoutStrategy = new pe(e);else if ("string" == typeof e) {
      var _t13 = e.trim();
      if (C(_t13, "%")) {
        var _e17 = Number(_t13.slice(0, -1)) / 100;
        this.layoutStrategy = new ve(_e17, this.layoutService);
      } else if (C(_t13, "px")) {
        var _e18 = Number(_t13.slice(0, -2)) / 100;
        this.layoutStrategy = new pe(_e18);
      } else if ("number" == typeof Number.parseFloat(_t13)) {
        var _e19 = Number.parseFloat(_t13);
        this.layoutStrategy = new pe(_e19);
      } else this.layoutStrategy = new ye();
    } else this.layoutStrategy = new ye();
  }
  constructor(e, t) {
    var _t$priority;
    if (this.minimumSize = 0, this.maximumSize = Number.POSITIVE_INFINITY, this.element = void 0, this.priority = void 0, this.snap = void 0, this.layoutService = void 0, this.layoutStrategy = void 0, this.layoutService = e, this.element = t.element, this.minimumSize = "number" == typeof t.minimumSize ? t.minimumSize : 30, this.maximumSize = "number" == typeof t.maximumSize ? t.maximumSize : Number.POSITIVE_INFINITY, "number" == typeof t.preferredSize) this.layoutStrategy = new pe(t.preferredSize);else if ("string" == typeof t.preferredSize) {
      var _e20 = t.preferredSize.trim();
      if (C(_e20, "%")) {
        var _t14 = Number(_e20.slice(0, -1)) / 100;
        this.layoutStrategy = new ve(_t14, this.layoutService);
      } else if (C(_e20, "px")) {
        var _t15 = Number(_e20.slice(0, -2));
        this.layoutStrategy = new pe(_t15);
      } else if ("number" == typeof Number.parseFloat(_e20)) {
        var _t16 = Number.parseFloat(_e20);
        this.layoutStrategy = new pe(_t16);
      } else this.layoutStrategy = new ye();
    } else this.layoutStrategy = new ye();
    this.priority = (_t$priority = t.priority) != null ? _t$priority : ce.Normal, this.snap = "boolean" == typeof t.snap && t.snap;
  }
  layout(e) {}
}
function ge(e) {
  return void 0 !== e.minSize || void 0 !== e.maxSize || void 0 !== e.preferredSize || void 0 !== e.priority || void 0 !== e.visible;
}
var ze = o((_ref3, n) => {
  var {
    className: t,
    children: i
  } = _ref3;
  return e.createElement("div", {
    ref: n,
    className: v("split-view-view", V, t)
  }, i);
});
ze.displayName = "Allotment.Pane";
var we = o((_ref4, O) => {
  var {
    children: o,
    className: u,
    id: h,
    maxSize: c = 1 / 0,
    minSize: l = 30,
    proportionalLayout: f = !0,
    separator: m = !0,
    sizes: d,
    defaultSizes: p = d,
    snap: y = !1,
    vertical: b = !1,
    onChange: g,
    onReset: z,
    onVisibleChange: S,
    onDragStart: x,
    onDragEnd: V
  } = _ref4;
  var D = t(null),
    M = t([]),
    A = t(new Map()),
    C = t(null),
    F = t(new Map()),
    k = t(new T()),
    H = t([]),
    [$, Y] = i(!1);
  "production" !== process.env.NODE_ENV && d && console.warn("Prop sizes is deprecated. Please use defaultSizes instead.");
  var B = s(() => e.Children.toArray(o).filter(e.isValidElement), [o]),
    R = r(e => {
      var _H$current, _C$current;
      var t = (_H$current = H.current) == null ? void 0 : _H$current[e];
      return "number" == typeof (t == null ? void 0 : t.preferredSize) && ((_C$current = C.current) != null && _C$current.resizeView(e, Math.round(t.preferredSize)), !0);
    }, []);
  return a(O, () => ({
    reset: () => {
      if (z) z();else {
        var _C$current2;
        (_C$current2 = C.current) == null || _C$current2.distributeViewSizes();
        for (var _e21 = 0; _e21 < H.current.length; _e21++) R(_e21);
      }
    },
    resize: e => {
      var _C$current3;
      (_C$current3 = C.current) == null || _C$current3.resizeViews(e);
    }
  })), n(() => {
    var e = !0;
    p && F.current.size !== p.length && (e = !1, console.warn("Expected " + p.length + " children based on defaultSizes but found " + F.current.size)), e && p && (M.current = B.map(e => e.key));
    var t = _extends({
      orientation: b ? ne.Vertical : ne.Horizontal,
      proportionalLayout: f
    }, e && p && {
      descriptor: {
        size: p.reduce((e, t) => e + t, 0),
        views: p.map((e, t) => {
          var _i$minSize, _i$maxSize, _i$priority, _i$snap;
          var i = A.current.get(M.current[t]),
            n = new be(k.current, _extends({
              element: document.createElement("div"),
              minimumSize: (_i$minSize = i == null ? void 0 : i.minSize) != null ? _i$minSize : l,
              maximumSize: (_i$maxSize = i == null ? void 0 : i.maxSize) != null ? _i$maxSize : c,
              priority: (_i$priority = i == null ? void 0 : i.priority) != null ? _i$priority : ce.Normal
            }, (i == null ? void 0 : i.preferredSize) && {
              preferredSize: i == null ? void 0 : i.preferredSize
            }, {
              snap: (_i$snap = i == null ? void 0 : i.snap) != null ? _i$snap : y
            }));
          return H.current.push(n), {
            container: [...F.current.values()][t],
            size: e,
            view: n
          };
        })
      }
    });
    C.current = new de(D.current, t, g, x, V), C.current.on("sashDragStart", () => {
      var _D$current;
      (_D$current = D.current) == null || _D$current.classList.add("split-view-sash-dragging");
    }), C.current.on("sashDragEnd", () => {
      var _D$current2;
      (_D$current2 = D.current) == null || _D$current2.classList.remove("split-view-sash-dragging");
    }), C.current.on("sashchange", e => {
      if (S && C.current) {
        var _e22 = B.map(e => e.key);
        for (var _t17 = 0; _t17 < _e22.length; _t17++) {
          var _i11 = A.current.get(_e22[_t17]);
          void 0 !== (_i11 == null ? void 0 : _i11.visible) && _i11.visible !== C.current.isViewVisible(_t17) && S(_t17, C.current.isViewVisible(_t17));
        }
      }
    }), C.current.on("sashreset", e => {
      if (z) z();else {
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
  }, []), n(() => {
    if ($) {
      var _e23 = B.map(e => e.key),
        _t18 = [...M.current],
        _i12 = _e23.filter(e => !M.current.includes(e)),
        _n8 = _e23.filter(e => M.current.includes(e)),
        _r3 = M.current.map(t => !_e23.includes(t));
      for (var _e24 = _r3.length - 1; _e24 >= 0; _e24--) {
        var _C$current5;
        _r3[_e24] && ((_C$current5 = C.current) != null && _C$current5.removeView(_e24), _t18.splice(_e24, 1), H.current.splice(_e24, 1));
      }
      var _loop = function _loop(_n9) {
        var _i$minSize2, _i$maxSize2, _i$priority2, _i$snap2, _C$current7;
        var i = A.current.get(_n9),
          r = new be(k.current, _extends({
            element: document.createElement("div"),
            minimumSize: (_i$minSize2 = i == null ? void 0 : i.minSize) != null ? _i$minSize2 : l,
            maximumSize: (_i$maxSize2 = i == null ? void 0 : i.maxSize) != null ? _i$maxSize2 : c,
            priority: (_i$priority2 = i == null ? void 0 : i.priority) != null ? _i$priority2 : ce.Normal
          }, (i == null ? void 0 : i.preferredSize) && {
            preferredSize: i == null ? void 0 : i.preferredSize
          }, {
            snap: (_i$snap2 = i == null ? void 0 : i.snap) != null ? _i$snap2 : y
          }));
        (_C$current7 = C.current) != null && _C$current7.addView(F.current.get(_n9), r, ue.Distribute, _e23.findIndex(e => e === _n9)), _t18.splice(_e23.findIndex(e => e === _n9), 0, _n9), H.current.splice(_e23.findIndex(e => e === _n9), 0, r);
      };
      for (var _n9 of _i12) {
        _loop(_n9);
      }
      for (; !w(_e23, _t18);) {
        var _loop2 = function _loop2(_n0) {
          var e = _t18.findIndex(e => e === _n0);
          if (e !== _i13) {
            var _C$current6;
            (_C$current6 = C.current) == null || _C$current6.moveView(F.current.get(_n0), e, _i13);
            var _r4 = _t18[e];
            _t18.splice(e, 1), _t18.splice(_i13, 0, _r4);
            return 1; // break
          }
        };
        for (var [_i13, _n0] of _e23.entries()) {
          if (_loop2(_n0)) break;
        }
      }
      var _loop3 = function _loop3(_t19) {
        var _C$current8;
        var i = _e23.findIndex(e => e === _t19),
          n = H.current[i].preferredSize;
        void 0 !== n && ((_C$current8 = C.current) == null ? void 0 : _C$current8.resizeView(i, n));
      };
      for (var _t19 of _i12) {
        _loop3(_t19);
      }
      var _loop4 = function _loop4(_t20) {
        var _C$current9, _C$current0;
        var i = A.current.get(_t20),
          n = _e23.findIndex(e => e === _t20);
        i && ge(i) && void 0 !== i.visible && ((_C$current9 = C.current) == null ? void 0 : _C$current9.isViewVisible(n)) !== i.visible && ((_C$current0 = C.current) == null ? void 0 : _C$current0.setViewVisible(n, i.visible));
      };
      for (var _t20 of [..._i12, ..._n8]) {
        _loop4(_t20);
      }
      var _loop5 = function _loop5(_t21) {
        var i = A.current.get(_t21),
          n = _e23.findIndex(e => e === _t21);
        if (i && ge(i)) {
          var _C$current1;
          void 0 !== i.preferredSize && H.current[n].preferredSize !== i.preferredSize && (H.current[n].preferredSize = i.preferredSize);
          var _e25 = !1;
          void 0 !== i.minSize && H.current[n].minimumSize !== i.minSize && (H.current[n].minimumSize = i.minSize, _e25 = !0), void 0 !== i.maxSize && H.current[n].maximumSize !== i.maxSize && (H.current[n].maximumSize = i.maxSize, _e25 = !0), _e25 && ((_C$current1 = C.current) == null ? void 0 : _C$current1.layout());
        }
      };
      for (var _t21 of _n8) {
        _loop5(_t21);
      }
      (_i12.length > 0 || _r3.length > 0) && (M.current = _e23);
    }
  }, [B, $, c, l, y]), n(() => {
    C.current && (C.current.onDidChange = g);
  }, [g]), n(() => {
    C.current && (C.current.onDidDragStart = x);
  }, [x]), n(() => {
    C.current && (C.current.onDidDragEnd = V);
  }, [V]), _({
    ref: D,
    onResize: _ref5 => {
      var _C$current10;
      var {
        width: e,
        height: t
      } = _ref5;
      e && t && ((_C$current10 = C.current) != null && _C$current10.layout(b ? t : e), k.current.setSize(b ? t : e), Y(!0));
    }
  }), n(() => {
    P && Se(20);
  }, []), e.createElement("div", {
    ref: D,
    className: v("split-view", b ? "split-view-vertical" : "split-view-horizontal", {
      "split-view-separator-border": m
    }, I, b ? j : N, {
      [L]: m
    }, u),
    id: h
  }, e.createElement("div", {
    className: v("split-view-container", E)
  }, e.Children.toArray(o).map(t => {
    if (!e.isValidElement(t)) return null;
    var i = t.key;
    return "Allotment.Pane" === t.type.displayName ? (A.current.set(i, t.props), e.cloneElement(t, {
      key: i,
      ref: e => {
        var n = t.ref;
        n && (n.current = e), e ? F.current.set(i, e) : F.current.delete(i);
      }
    })) : e.createElement(ze, {
      key: i,
      ref: e => {
        e ? F.current.set(i, e) : F.current.delete(i);
      }
    }, t);
  })));
});
function Se(e) {
  var t = b(e, 4, 20),
    i = b(e, 1, 8);
  document.documentElement.style.setProperty("--sash-size", t + "px"), document.documentElement.style.setProperty("--sash-hover-size", i + "px"), function (e) {
    se = e, oe.emit("onDidChangeGlobalSize", e);
  }(t);
}
we.displayName = "Allotment";
var _e = Object.assign(we, {
  Pane: ze
});
export { _e as Allotment, ce as LayoutPriority, Se as setSashSize };
