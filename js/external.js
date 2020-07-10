

! function (n, h, t) {
    function p() {
        return "function" != typeof h.createElement ? h.createElement(arguments[0]) : m ? h.createElementNS.call(h, "http://www.w3.org/2000/svg", arguments[0]) : h.createElement.apply(h, arguments)
    }
    var o = [],
        l = [],
        e = {
            _version: "3.6.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function (t, e) {
                var n = this;
                setTimeout(function () {
                    e(n[t])
                }, 0)
            },
            addTest: function (t, e, n) {
                l.push({
                    name: t,
                    fn: e,
                    options: n
                })
            },
            addAsyncTest: function (t) {
                l.push({
                    name: null,
                    fn: t
                })
            }
        },
        u = function () {};
    u.prototype = e, u = new u;
    var d = h.documentElement,
        m = "svg" === d.nodeName.toLowerCase(),
        i = e._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    e._prefixes = i;
    var r = e.testStyles = function (t, e, n, i) {
        var r, a, s, o, l, u = "modernizr",
            c = p("div"),
            f = ((l = h.body) || ((l = p(m ? "svg" : "body")).fake = !0), l);
        if (parseInt(n, 10))
            for (; n--;)(s = p("div")).id = i ? i[n] : u + (n + 1), c.appendChild(s);
        return (r = p("style")).type = "text/css", r.id = "s" + u, (f.fake ? f : c).appendChild(r), f.appendChild(c), r.styleSheet ? r.styleSheet.cssText = t : r.appendChild(h.createTextNode(t)), c.id = u, f.fake && (f.style.background = "", f.style.overflow = "hidden", o = d.style.overflow, d.style.overflow = "hidden", d.appendChild(f)), a = e(c, t), f.fake ? (f.parentNode.removeChild(f), d.style.overflow = o, d.offsetHeight) : c.parentNode.removeChild(c), !!a
    };
    u.addTest("touchevents", function () {
            var e;
            if ("ontouchstart" in n || n.DocumentTouch && h instanceof DocumentTouch) e = !0;
            else {
                var t = ["@media (", i.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
                r(t, function (t) {
                    e = 9 === t.offsetTop
                })
            }
            return e
        }),
        function () {
            var t, e, n, i, r, a;
            for (var s in l)
                if (l.hasOwnProperty(s)) {
                    if (t = [], (e = l[s]).name && (t.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length))
                        for (n = 0; n < e.options.aliases.length; n++) t.push(e.options.aliases[n].toLowerCase());
                    for (i = "function" == typeof e.fn ? e.fn() : e.fn, r = 0; r < t.length; r++) 1 === (a = t[r].split(".")).length ? u[a[0]] = i : (!u[a[0]] || u[a[0]] instanceof Boolean || (u[a[0]] = new Boolean(u[a[0]])), u[a[0]][a[1]] = i), o.push((i ? "" : "no-") + a.join("-"))
                }
        }(),
        function (t) {
            var e = d.className,
                n = u._config.classPrefix || "";
            if (m && (e = e.baseVal), u._config.enableJSClass) {
                var i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
                e = e.replace(i, "$1" + n + "js$2")
            }
            u._config.enableClasses && (e += " " + n + t.join(" " + n), m ? d.className.baseVal = e : d.className = e)
        }(o), delete e.addTest, delete e.addAsyncTest;
    for (var a = 0; a < u._q.length; a++) u._q[a]();
    n.Modernizr = u
}(window, document),
function () {
    function i(t, e, n) {
        return t.call.apply(t.bind, arguments)
    }

    function r(e, n, t) {
        if (!e) throw Error();
        if (2 < arguments.length) {
            var i = Array.prototype.slice.call(arguments, 2);
            return function () {
                var t = Array.prototype.slice.call(arguments);
                return Array.prototype.unshift.apply(t, i), e.apply(n, t)
            }
        }
        return function () {
            return e.apply(n, arguments)
        }
    }

    function p(t, e, n) {
        return (p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? i : r).apply(null, arguments)
    }
    var o = Date.now || function () {
        return +new Date
    };

    function e(t, e) {
        this.a = t, this.m = e || t, this.c = this.m.document
    }
    var l = !!window.FontFace;

    function u(t, e, n, i) {
        if (e = t.c.createElement(e), n)
            for (var r in n) n.hasOwnProperty(r) && ("style" == r ? e.style.cssText = n[r] : e.setAttribute(r, n[r]));
        return i && e.appendChild(t.c.createTextNode(i)), e
    }

    function c(t, e, n) {
        (t = t.c.getElementsByTagName(e)[0]) || (t = document.documentElement), t.insertBefore(n, t.lastChild)
    }

    function n(t) {
        t.parentNode && t.parentNode.removeChild(t)
    }

    function d(t, e, n) {
        e = e || [], n = n || [];
        for (var i = t.className.split(/\s+/), r = 0; r < e.length; r += 1) {
            for (var a = !1, s = 0; s < i.length; s += 1)
                if (e[r] === i[s]) {
                    a = !0;
                    break
                }
            a || i.push(e[r])
        }
        for (e = [], r = 0; r < i.length; r += 1) {
            for (a = !1, s = 0; s < n.length; s += 1)
                if (i[r] === n[s]) {
                    a = !0;
                    break
                }
            a || e.push(i[r])
        }
        t.className = e.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
    }

    function a(t, e) {
        for (var n = t.className.split(/\s+/), i = 0, r = n.length; i < r; i++)
            if (n[i] == e) return !0;
        return !1
    }

    function f(t) {
        if ("string" == typeof t.f) return t.f;
        var e = t.m.location.protocol;
        return "about:" == e && (e = t.a.location.protocol), "https:" == e ? "https:" : "http:"
    }

    function h(t, e, n) {
        function i() {
            s && r && (s(a), s = null)
        }
        e = u(t, "link", {
            rel: "stylesheet",
            href: e,
            media: "all"
        });
        var r = !1,
            a = null,
            s = n || null;
        l ? (e.onload = function () {
            r = !0, i()
        }, e.onerror = function () {
            r = !0, a = Error("Stylesheet failed to load"), i()
        }) : setTimeout(function () {
            r = !0, i()
        }, 0), c(t, "head", e)
    }

    function m(t, e, n, i) {
        var r = t.c.getElementsByTagName("head")[0];
        if (r) {
            var a = u(t, "script", {
                    src: e
                }),
                s = !1;
            return a.onload = a.onreadystatechange = function () {
                s || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (s = !0, n && n(null), a.onload = a.onreadystatechange = null, "HEAD" == a.parentNode.tagName && r.removeChild(a))
            }, r.appendChild(a), setTimeout(function () {
                s || (s = !0, n && n(Error("Script load timeout")))
            }, i || 5e3), a
        }
        return null
    }

    function g() {
        this.a = 0, this.c = null
    }

    function _(t) {
        return t.a++,
            function () {
                t.a--, s(t)
            }
    }

    function v(t, e) {
        t.c = e, s(t)
    }

    function s(t) {
        0 == t.a && t.c && (t.c(), t.c = null)
    }

    function y(t) {
        this.a = t || "-"
    }

    function x(t, e) {
        this.c = t, this.f = 4, this.a = "n";
        var n = (e || "n4").match(/^([nio])([1-9])$/i);
        n && (this.a = n[1], this.f = parseInt(n[2], 10))
    }

    function b(t) {
        var e = [];
        t = t.split(/,\s*/);
        for (var n = 0; n < t.length; n++) {
            var i = t[n].replace(/['"]/g, ""); - 1 != i.indexOf(" ") || /^\d/.test(i) ? e.push("'" + i + "'") : e.push(i)
        }
        return e.join(",")
    }

    function T(t) {
        return t.a + t.f
    }

    function w(t) {
        var e = "normal";
        return "o" === t.a ? e = "oblique" : "i" === t.a && (e = "italic"), e
    }

    function k(t, e) {
        this.c = t, this.f = t.m.document.documentElement, this.h = e, this.a = new y("-"), this.j = !1 !== e.events, this.g = !1 !== e.classes
    }

    function S(t) {
        if (t.g) {
            var e = a(t.f, t.a.c("wf", "active")),
                n = [],
                i = [t.a.c("wf", "loading")];
            e || n.push(t.a.c("wf", "inactive")), d(t.f, n, i)
        }
        C(t, "inactive")
    }

    function C(t, e, n) {
        t.j && t.h[e] && (n ? t.h[e](n.c, T(n)) : t.h[e]())
    }

    function P() {
        this.c = {}
    }

    function A(t, e) {
        this.c = t, this.f = e, this.a = u(this.c, "span", {
            "aria-hidden": "true"
        }, this.f)
    }

    function F(t) {
        c(t.c, "body", t.a)
    }

    function D(t) {
        return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + b(t.c) + ";font-style:" + w(t) + ";font-weight:" + t.f + "00;"
    }

    function O(t, e, n, i, r, a) {
        this.g = t, this.j = e, this.a = i, this.c = n, this.f = r || 3e3, this.h = a || void 0
    }

    function E(t, e, n, i, r, a, s) {
        this.v = t, this.B = e, this.c = n, this.a = i, this.s = s || "BESbswy", this.f = {}, this.w = r || 3e3, this.u = a || null, this.o = this.j = this.h = this.g = null, this.g = new A(this.c, this.s), this.h = new A(this.c, this.s), this.j = new A(this.c, this.s), this.o = new A(this.c, this.s), t = D(t = new x(this.a.c + ",serif", T(this.a))), this.g.a.style.cssText = t, t = D(t = new x(this.a.c + ",sans-serif", T(this.a))), this.h.a.style.cssText = t, t = D(t = new x("serif", T(this.a))), this.j.a.style.cssText = t, t = D(t = new x("sans-serif", T(this.a))), this.o.a.style.cssText = t, F(this.g), F(this.h), F(this.j), F(this.o)
    }
    y.prototype.c = function (t) {
        for (var e = [], n = 0; n < arguments.length; n++) e.push(arguments[n].replace(/[\W_]+/g, "").toLowerCase());
        return e.join(this.a)
    }, O.prototype.start = function () {
        var r = this.c.m.document,
            a = this,
            s = o(),
            t = new Promise(function (n, i) {
                ! function e() {
                    var t;
                    o() - s >= a.f ? i() : r.fonts.load((t = a.a, w(t) + " " + t.f + "00 300px " + b(t.c)), a.h).then(function (t) {
                        1 <= t.length ? n() : setTimeout(e, 25)
                    }, function () {
                        i()
                    })
                }()
            }),
            e = new Promise(function (t, e) {
                setTimeout(e, a.f)
            });
        Promise.race([e, t]).then(function () {
            a.g(a.a)
        }, function () {
            a.j(a.a)
        })
    };
    var N = {
            D: "serif",
            C: "sans-serif"
        },
        R = null;

    function M() {
        if (null === R) {
            var t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
            R = !!t && (parseInt(t[1], 10) < 536 || 536 === parseInt(t[1], 10) && parseInt(t[2], 10) <= 11)
        }
        return R
    }

    function j(t, e, n) {
        for (var i in N)
            if (N.hasOwnProperty(i) && e === t.f[N[i]] && n === t.f[N[i]]) return !0;
        return !1
    }

    function L(t) {
        var e, n = t.g.a.offsetWidth,
            i = t.h.a.offsetWidth;
        (e = n === t.f.serif && i === t.f["sans-serif"]) || (e = M() && j(t, n, i)), e ? o() - t.A >= t.w ? M() && j(t, n, i) && (null === t.u || t.u.hasOwnProperty(t.a.c)) ? z(t, t.v) : z(t, t.B) : setTimeout(p(function () {
            L(this)
        }, t), 50) : z(t, t.v)
    }

    function z(t, e) {
        setTimeout(p(function () {
            n(this.g.a), n(this.h.a), n(this.j.a), n(this.o.a), e(this.a)
        }, t), 0)
    }

    function q(t, e, n) {
        this.c = t, this.a = e, this.f = 0, this.o = this.j = !1, this.s = n
    }
    E.prototype.start = function () {
        this.f.serif = this.j.a.offsetWidth, this.f["sans-serif"] = this.o.a.offsetWidth, this.A = o(), L(this)
    };
    var I = null;

    function B(t) {
        0 == --t.f && t.j && (t.o ? ((t = t.a).g && d(t.f, [t.a.c("wf", "active")], [t.a.c("wf", "loading"), t.a.c("wf", "inactive")]), C(t, "active")) : S(t.a))
    }

    function t(t) {
        this.j = t, this.a = new P, this.h = 0, this.f = this.g = !0
    }

    function H(t, e) {
        this.c = t, this.a = e
    }

    function X(t, e) {
        this.c = t, this.a = e
    }

    function W(t, e, n) {
        this.c = t || e + "//fonts.googleapis.com/css", this.a = [], this.f = [], this.g = n || ""
    }
    q.prototype.g = function (t) {
        var e = this.a;
        e.g && d(e.f, [e.a.c("wf", t.c, T(t).toString(), "active")], [e.a.c("wf", t.c, T(t).toString(), "loading"), e.a.c("wf", t.c, T(t).toString(), "inactive")]), C(e, "fontactive", t), this.o = !0, B(this)
    }, q.prototype.h = function (t) {
        var e = this.a;
        if (e.g) {
            var n = a(e.f, e.a.c("wf", t.c, T(t).toString(), "active")),
                i = [],
                r = [e.a.c("wf", t.c, T(t).toString(), "loading")];
            n || i.push(e.a.c("wf", t.c, T(t).toString(), "inactive")), d(e.f, i, r)
        }
        C(e, "fontinactive", t), B(this)
    }, t.prototype.load = function (t) {
        this.c = new e(this.j, t.context || this.j), this.g = !1 !== t.events, this.f = !1 !== t.classes,
            function (r, t, e) {
                var n = [],
                    i = e.timeout;
                a = t, a.g && d(a.f, [a.a.c("wf", "loading")]), C(a, "loading");
                var a;
                var n = function (t, e, n) {
                        var i, r = [];
                        for (i in e)
                            if (e.hasOwnProperty(i)) {
                                var a = t.c[i];
                                a && r.push(a(e[i], n))
                            }
                        return r
                    }(r.a, e, r.c),
                    s = new q(r.c, t, i);
                for (r.h = n.length, t = 0, e = n.length; t < e; t++) n[t].load(function (t, e, n) {
                    var i, l, u, c, f, h;
                    l = s, u = t, c = e, f = n, h = 0 == --(i = r).h, (i.f || i.g) && setTimeout(function () {
                        var t = f || null,
                            e = c || {};
                        if (0 === u.length && h) S(l.a);
                        else {
                            l.f += u.length, h && (l.j = h);
                            var n, i = [];
                            for (n = 0; n < u.length; n++) {
                                var r = u[n],
                                    a = e[r.c],
                                    s = l.a,
                                    o = r;
                                s.g && d(s.f, [s.a.c("wf", o.c, T(o).toString(), "loading")]), C(s, "fontloading", o), (s = null) === I && (I = !!window.FontFace && (!(o = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent)) || 42 < parseInt(o[1], 10))), s = I ? new O(p(l.g, l), p(l.h, l), l.c, r, l.s, a) : new E(p(l.g, l), p(l.h, l), l.c, r, l.s, t, a), i.push(s)
                            }
                            for (n = 0; n < i.length; n++) i[n].start()
                        }
                    }, 0)
                })
            }(this, new k(this.c, t), t)
    }, H.prototype.load = function (s) {
        var t, e, n, i = this,
            o = i.a.projectId,
            r = i.a.version;
        if (o) {
            var l = i.c.m;
            m(this.c, (t = i, e = o, n = r, f(t.c) + "//" + (t = (t.a.api || "fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/, "")) + "/" + e + ".js" + (n ? "?v=" + n : "")), function (t) {
                t ? s([]) : (l["__MonotypeConfiguration__" + o] = function () {
                    return i.a
                }, function t() {
                    if (l["__mti_fntLst" + o]) {
                        var e, n = l["__mti_fntLst" + o](),
                            i = [];
                        if (n)
                            for (var r = 0; r < n.length; r++) {
                                var a = n[r].fontfamily;
                                null != n[r].fontStyle && null != n[r].fontWeight ? (e = n[r].fontStyle + n[r].fontWeight, i.push(new x(a, e))) : i.push(new x(a))
                            }
                        s(i)
                    } else setTimeout(function () {
                        t()
                    }, 50)
                }())
            }).id = "__MonotypeAPIScript__" + o
        } else s([])
    }, X.prototype.load = function (t) {
        var e, n, i = this.a.urls || [],
            r = this.a.families || [],
            a = this.a.testStrings || {},
            s = new g;
        for (e = 0, n = i.length; e < n; e++) h(this.c, i[e], _(s));
        var o = [];
        for (e = 0, n = r.length; e < n; e++)
            if ((i = r[e].split(":"))[1])
                for (var l = i[1].split(","), u = 0; u < l.length; u += 1) o.push(new x(i[0], l[u]));
            else o.push(new x(i[0]));
        v(s, function () {
            t(o, a)
        })
    };

    function $(t) {
        this.f = t, this.a = [], this.c = {}
    }
    var Y = {
            latin: "BESbswy",
            "latin-ext": "çöüğş",
            cyrillic: "йяЖ",
            greek: "αβΣ",
            khmer: "កខគ",
            Hanuman: "កខគ"
        },
        V = {
            thin: "1",
            extralight: "2",
            "extra-light": "2",
            ultralight: "2",
            "ultra-light": "2",
            light: "3",
            regular: "4",
            book: "4",
            medium: "5",
            "semi-bold": "6",
            semibold: "6",
            "demi-bold": "6",
            demibold: "6",
            bold: "7",
            "extra-bold": "8",
            extrabold: "8",
            "ultra-bold": "8",
            ultrabold: "8",
            black: "9",
            heavy: "9",
            l: "3",
            r: "4",
            b: "7"
        },
        U = {
            i: "i",
            italic: "i",
            n: "n",
            normal: "n"
        },
        G = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;

    function Z(t, e) {
        this.c = t, this.a = e
    }
    var Q = {
        Arimo: !0,
        Cousine: !0,
        Tinos: !0
    };

    function J(t, e) {
        this.c = t, this.a = e
    }

    function K(t, e) {
        this.c = t, this.f = e, this.a = []
    }
    Z.prototype.load = function (t) {
        var e = new g,
            n = this.c,
            i = new W(this.a.api, f(n), this.a.text),
            r = this.a.families;
        ! function (t, e) {
            for (var n = e.length, i = 0; i < n; i++) {
                var r = e[i].split(":");
                3 == r.length && t.f.push(r.pop());
                var a = "";
                2 == r.length && "" != r[1] && (a = ":"), t.a.push(r.join(a))
            }
        }(i, r);
        var a = new $(r);
        ! function (t) {
            for (var e = t.f.length, n = 0; n < e; n++) {
                var i = t.f[n].split(":"),
                    r = i[0].replace(/\+/g, " "),
                    a = ["n4"];
                if (2 <= i.length) {
                    var s;
                    if (s = [], o = i[1])
                        for (var o, l = (o = o.split(",")).length, u = 0; u < l; u++) {
                            var c;
                            if ((c = o[u]).match(/^[\w-]+$/))
                                if (null == (h = G.exec(c.toLowerCase()))) c = "";
                                else {
                                    if (c = null == (c = h[2]) || "" == c ? "n" : U[c], null == (h = h[1]) || "" == h) h = "4";
                                    else var f = V[h],
                                        h = f || (isNaN(h) ? "4" : h.substr(0, 1));
                                    c = [c, h].join("")
                                }
                            else c = "";
                            c && s.push(c)
                        }
                    0 < s.length && (a = s), 3 == i.length && (s = [], 0 < (i = (i = i[2]) ? i.split(",") : s).length && (i = Y[i[0]]) && (t.c[r] = i))
                }
                for (t.c[r] || (i = Y[r]) && (t.c[r] = i), i = 0; i < a.length; i += 1) t.a.push(new x(r, a[i]))
            }
        }(a), h(n, function (t) {
            if (0 == t.a.length) throw Error("No fonts to load!");
            if (-1 != t.c.indexOf("kit=")) return t.c;
            for (var e = t.a.length, n = [], i = 0; i < e; i++) n.push(t.a[i].replace(/ /g, "+"));
            return e = t.c + "?family=" + n.join("%7C"), 0 < t.f.length && (e += "&subset=" + t.f.join(",")), 0 < t.g.length && (e += "&text=" + encodeURIComponent(t.g)), e
        }(i), _(e)), v(e, function () {
            t(a.a, a.c, Q)
        })
    }, J.prototype.load = function (s) {
        var t = this.a.id,
            o = this.c.m;
        t ? m(this.c, (this.a.api || "https://use.typekit.net") + "/" + t + ".js", function (t) {
            if (t) s([]);
            else if (o.Typekit && o.Typekit.config && o.Typekit.config.fn) {
                t = o.Typekit.config.fn;
                for (var e = [], n = 0; n < t.length; n += 2)
                    for (var i = t[n], r = t[n + 1], a = 0; a < r.length; a++) e.push(new x(i, r[a]));
                try {
                    o.Typekit.load({
                        events: !1,
                        classes: !1,
                        async: !0
                    })
                } catch (t) {}
                s(e)
            }
        }, 2e3) : s([])
    }, K.prototype.load = function (u) {
        var t, e = this.f.id,
            n = this.c.m,
            c = this;
        e ? (n.__webfontfontdeckmodule__ || (n.__webfontfontdeckmodule__ = {}), n.__webfontfontdeckmodule__[e] = function (t, e) {
            for (var n = 0, i = e.fonts.length; n < i; ++n) {
                var r = e.fonts[n];
                c.a.push(new x(r.name, (a = "font-weight:" + r.weight + ";font-style:" + r.style, l = o = s = void 0, s = 4, o = "n", l = null, a && ((l = a.match(/(normal|oblique|italic)/i)) && l[1] && (o = l[1].substr(0, 1).toLowerCase()), (l = a.match(/([1-9]00|normal|bold)/i)) && l[1] && (/bold/i.test(l[1]) ? s = 7 : /[1-9]00/.test(l[1]) && (s = parseInt(l[1].substr(0, 1), 10)))), o + s)))
            }
            var a, s, o, l;
            u(c.a)
        }, m(this.c, f(this.c) + (this.f.api || "//f.fontdeck.com/s/css/js/") + ((t = this.c).m.location.hostname || t.a.location.hostname) + "/" + e + ".js", function (t) {
            t && u([])
        })) : u([])
    };
    var tt = new t(window);
    tt.a.c.custom = function (t, e) {
        return new X(e, t)
    }, tt.a.c.fontdeck = function (t, e) {
        return new K(e, t)
    }, tt.a.c.monotype = function (t, e) {
        return new H(e, t)
    }, tt.a.c.typekit = function (t, e) {
        return new J(e, t)
    }, tt.a.c.google = function (t, e) {
        return new Z(e, t)
    };
    var et = {
        load: p(tt.load, tt)
    };
    "function" == typeof define && define.amd ? define(function () {
        return et
    }) : "undefined" != typeof module && module.exports ? module.exports = et : (window.WebFont = et, window.WebFontConfig && tt.load(window.WebFontConfig))
}();
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
        "use strict";
        var t, l, u, e, w, b, T, k, _, n, v, S, y, x, p, d, g, i;
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (i, c, y) {
            var m = function (t) {
                    var e, n = [],
                        i = t.length;
                    for (e = 0; e !== i; n.push(t[e++]));
                    return n
                },
                g = function (t, e, n) {
                    var i, r, a = t.cycle;
                    for (i in a) r = a[i], t[i] = "function" == typeof r ? r(n, e[n], e) : r[n % r.length];
                    delete t.cycle
                },
                _ = function (t) {
                    if ("function" == typeof t) return t;
                    var d = "object" == typeof t ? t : {
                            each: t
                        },
                        m = d.ease,
                        g = d.from || 0,
                        _ = d.base || 0,
                        v = {},
                        y = isNaN(g),
                        x = d.axis,
                        b = {
                            center: .5,
                            end: 1
                        }[g] || 0;
                    return function (t, e, n) {
                        var i, r, a, s, o, l, u, c, f, h = (n || d).length,
                            p = v[h];
                        if (!p) {
                            if (!(f = "auto" === d.grid ? 0 : (d.grid || [1 / 0])[0])) {
                                for (u = -1 / 0; u < (u = n[f++].getBoundingClientRect().left) && f < h;);
                                f--
                            }
                            for (p = v[h] = [], i = y ? Math.min(f, h) * b - .5 : g % f, r = y ? h * b / f - .5 : g / f | 0, c = 1 / (u = 0), l = 0; l < h; l++) a = l % f - i, s = r - (l / f | 0), p[l] = o = x ? Math.abs("y" === x ? s : a) : Math.sqrt(a * a + s * s), u < o && (u = o), o < c && (c = o);
                            p.max = u - c, p.min = c, p.v = h = d.amount || d.each * (h < f ? h : x ? "y" === x ? h / f : f : Math.max(f, h / f)) || 0, p.b = h < 0 ? _ - h : _
                        }
                        return h = (p[t] - p.min) / p.max, p.b + (m ? m.getRatio(h) : h) * p.v
                    }
                },
                v = function (t, e, n) {
                    y.call(this, t, e, n), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = v.prototype.render
                },
                x = 1e-8,
                b = y._internals,
                T = b.isSelector,
                w = b.isArray,
                t = v.prototype = y.to({}, .1, {}),
                k = [];
            v.version = "2.1.2", t.constructor = v, t.kill()._gc = !1, v.killTweensOf = v.killDelayedCallsTo = y.killTweensOf, v.getTweensOf = y.getTweensOf, v.lagSmoothing = y.lagSmoothing, v.ticker = y.ticker, v.render = y.render, v.distribute = _, t.invalidate = function () {
                return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), y.prototype.invalidate.call(this)
            }, t.updateTo = function (t, e) {
                var n, i = this,
                    r = i.ratio,
                    a = i.vars.immediateRender || t.immediateRender;
                for (n in e && i._startTime < i._timeline._time && (i._startTime = i._timeline._time, i._uncache(!1), i._gc ? i._enabled(!0, !1) : i._timeline.insert(i, i._startTime - i._delay)), t) i.vars[n] = t[n];
                if (i._initted || a)
                    if (e) i._initted = !1, a && i.render(0, !0, !0);
                    else if (i._gc && i._enabled(!0, !1), i._notifyPluginsOfEnabled && i._firstPT && y._onPluginEvent("_onDisable", i), .998 < i._time / i._duration) {
                    var s = i._totalTime;
                    i.render(0, !0, !1), i._initted = !1, i.render(s, !0, !1)
                } else if (i._initted = !1, i._init(), 0 < i._time || a)
                    for (var o, l = 1 / (1 - r), u = i._firstPT; u;) o = u.s + u.c, u.c *= l, u.s = o - u.c, u = u._next;
                return i
            }, t.render = function (t, e, n) {
                this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                var i, r, a, s, o, l, u, c, f, h = this,
                    p = h._dirty ? h.totalDuration() : h._totalDuration,
                    d = h._time,
                    m = h._totalTime,
                    g = h._cycle,
                    _ = h._duration,
                    v = h._rawPrevTime;
                if (p - x <= t && 0 <= t ? (h._totalTime = p, h._cycle = h._repeat, h._yoyo && 0 != (1 & h._cycle) ? (h._time = 0, h.ratio = h._ease._calcEnd ? h._ease.getRatio(0) : 0) : (h._time = _, h.ratio = h._ease._calcEnd ? h._ease.getRatio(1) : 1), h._reversed || (i = !0, r = "onComplete", n = n || h._timeline.autoRemoveChildren), 0 === _ && (h._initted || !h.vars.lazy || n) && (h._startTime === h._timeline._duration && (t = 0), (v < 0 || t <= 0 && -x <= t || v === x && "isPause" !== h.data) && v !== t && (n = !0, x < v && (r = "onReverseComplete")), h._rawPrevTime = c = !e || t || v === t ? t : x)) : t < x ? (h._totalTime = h._time = h._cycle = 0, h.ratio = h._ease._calcEnd ? h._ease.getRatio(0) : 0, (0 !== m || 0 === _ && 0 < v) && (r = "onReverseComplete", i = h._reversed), -x < t ? t = 0 : t < 0 && (h._active = !1, 0 === _ && (h._initted || !h.vars.lazy || n) && (0 <= v && (n = !0), h._rawPrevTime = c = !e || t || v === t ? t : x)), h._initted || (n = !0)) : (h._totalTime = h._time = t, 0 !== h._repeat && (s = _ + h._repeatDelay, h._cycle = h._totalTime / s >> 0, 0 !== h._cycle && h._cycle === h._totalTime / s && m <= t && h._cycle--, h._time = h._totalTime - h._cycle * s, h._yoyo && 0 != (1 & h._cycle) && (h._time = _ - h._time, (f = h._yoyoEase || h.vars.yoyoEase) && (h._yoyoEase || (!0 !== f || h._initted ? h._yoyoEase = f = !0 === f ? h._ease : f instanceof Ease ? f : Ease.map[f] : (f = h.vars.ease, h._yoyoEase = f = f ? f instanceof Ease ? f : "function" == typeof f ? new Ease(f, h.vars.easeParams) : Ease.map[f] || y.defaultEase : y.defaultEase)), h.ratio = f ? 1 - f.getRatio((_ - h._time) / _) : 0)), h._time > _ ? h._time = _ : h._time < 0 && (h._time = 0)), h._easeType && !f ? (o = h._time / _, (1 === (l = h._easeType) || 3 === l && .5 <= o) && (o = 1 - o), 3 === l && (o *= 2), 1 === (u = h._easePower) ? o *= o : 2 === u ? o *= o * o : 3 === u ? o *= o * o * o : 4 === u && (o *= o * o * o * o), h.ratio = 1 === l ? 1 - o : 2 === l ? o : h._time / _ < .5 ? o / 2 : 1 - o / 2) : f || (h.ratio = h._ease.getRatio(h._time / _))), d !== h._time || n || g !== h._cycle) {
                    if (!h._initted) {
                        if (h._init(), !h._initted || h._gc) return;
                        if (!n && h._firstPT && (!1 !== h.vars.lazy && h._duration || h.vars.lazy && !h._duration)) return h._time = d, h._totalTime = m, h._rawPrevTime = v, h._cycle = g, b.lazyTweens.push(h), void(h._lazy = [t, e]);
                        !h._time || i || f ? i && this._ease._calcEnd && !f && (h.ratio = h._ease.getRatio(0 === h._time ? 0 : 1)) : h.ratio = h._ease.getRatio(h._time / _)
                    }
                    for (!1 !== h._lazy && (h._lazy = !1), h._active || !h._paused && h._time !== d && 0 <= t && (h._active = !0), 0 === m && (2 === h._initted && 0 < t && h._init(), h._startAt && (0 <= t ? h._startAt.render(t, !0, n) : r || (r = "_dummyGS")), h.vars.onStart && (0 !== h._totalTime || 0 === _) && (e || h._callback("onStart"))), a = h._firstPT; a;) a.f ? a.t[a.p](a.c * h.ratio + a.s) : a.t[a.p] = a.c * h.ratio + a.s, a = a._next;
                    h._onUpdate && (t < 0 && h._startAt && h._startTime && h._startAt.render(t, !0, n), e || (h._totalTime !== m || r) && h._callback("onUpdate")), h._cycle !== g && (e || h._gc || h.vars.onRepeat && h._callback("onRepeat")), r && (!h._gc || n) && (t < 0 && h._startAt && !h._onUpdate && h._startTime && h._startAt.render(t, !0, n), i && (h._timeline.autoRemoveChildren && h._enabled(!1, !1), h._active = !1), !e && h.vars[r] && h._callback(r), 0 === _ && h._rawPrevTime === x && c !== x && (h._rawPrevTime = 0))
                } else m !== h._totalTime && h._onUpdate && (e || h._callback("onUpdate"))
            }, v.to = function (t, e, n) {
                return new v(t, e, n)
            }, v.from = function (t, e, n) {
                return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new v(t, e, n)
            }, v.fromTo = function (t, e, n, i) {
                return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, new v(t, e, i)
            }, v.staggerTo = v.allTo = function (t, e, n, i, r, a, s) {
                var o, l, u, c, f = [],
                    h = _(n.stagger || i),
                    p = n.cycle,
                    d = (n.startAt || k).cycle;
                for (w(t) || ("string" == typeof t && (t = y.selector(t) || t), T(t) && (t = m(t))), o = (t = t || []).length - 1, u = 0; u <= o; u++) {
                    for (c in l = {}, n) l[c] = n[c];
                    if (p && (g(l, t, u), null != l.duration && (e = l.duration, delete l.duration)), d) {
                        for (c in d = l.startAt = {}, n.startAt) d[c] = n.startAt[c];
                        g(l.startAt, t, u)
                    }
                    l.delay = h(u, t[u], t) + (l.delay || 0), u === o && r && (l.onComplete = function () {
                        n.onComplete && n.onComplete.apply(n.onCompleteScope || this, arguments), r.apply(s || n.callbackScope || this, a || k)
                    }), f[u] = new v(t[u], e, l)
                }
                return f
            }, v.staggerFrom = v.allFrom = function (t, e, n, i, r, a, s) {
                return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, v.staggerTo(t, e, n, i, r, a, s)
            }, v.staggerFromTo = v.allFromTo = function (t, e, n, i, r, a, s, o) {
                return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, v.staggerTo(t, e, i, r, a, s, o)
            }, v.delayedCall = function (t, e, n, i, r) {
                return new v(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: n,
                    callbackScope: i,
                    onReverseComplete: e,
                    onReverseCompleteParams: n,
                    immediateRender: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, v.set = function (t, e) {
                return new v(t, 0, e)
            }, v.isTweening = function (t) {
                return 0 < y.getTweensOf(t, !0).length
            };
            var a = function (t, e) {
                    for (var n = [], i = 0, r = t._first; r;) r instanceof y ? n[i++] = r : (e && (n[i++] = r), i = (n = n.concat(a(r, e))).length), r = r._next;
                    return n
                },
                f = v.getAllTweens = function (t) {
                    return a(i._rootTimeline, t).concat(a(i._rootFramesTimeline, t))
                };
            v.killAll = function (t, e, n, i) {
                null == e && (e = !0), null == n && (n = !0);
                var r, a, s, o = f(0 != i),
                    l = o.length,
                    u = e && n && i;
                for (s = 0; s < l; s++) a = o[s], (u || a instanceof c || (r = a.target === a.vars.onComplete) && n || e && !r) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
            }, v.killChildTweensOf = function (t, e) {
                if (null != t) {
                    var n, i, r, a, s, o = b.tweenLookup;
                    if ("string" == typeof t && (t = y.selector(t) || t), T(t) && (t = m(t)), w(t))
                        for (a = t.length; - 1 < --a;) v.killChildTweensOf(t[a], e);
                    else {
                        for (r in n = [], o)
                            for (i = o[r].target.parentNode; i;) i === t && (n = n.concat(o[r].tweens)), i = i.parentNode;
                        for (s = n.length, a = 0; a < s; a++) e && n[a].totalTime(n[a].totalDuration()), n[a]._enabled(!1, !1)
                    }
                }
            };
            var r = function (t, e, n, i) {
                e = !1 !== e, n = !1 !== n;
                for (var r, a, s = f(i = !1 !== i), o = e && n && i, l = s.length; - 1 < --l;) a = s[l], (o || a instanceof c || (r = a.target === a.vars.onComplete) && n || e && !r) && a.paused(t)
            };
            return v.pauseAll = function (t, e, n) {
                r(!0, t, e, n)
            }, v.resumeAll = function (t, e, n) {
                r(!1, t, e, n)
            }, v.globalTimeScale = function (t) {
                var e = i._rootTimeline,
                    n = y.ticker.time;
                return arguments.length ? (t = t || x, e._startTime = n - (n - e._startTime) * e._timeScale / t, e = i._rootFramesTimeline, n = y.ticker.frame, e._startTime = n - (n - e._startTime) * e._timeScale / t, e._timeScale = i._rootTimeline._timeScale = t, t) : e._timeScale
            }, t.progress = function (t, e) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
            }, t.totalProgress = function (t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
            }, t.time = function (t, e) {
                if (!arguments.length) return this._time;
                this._dirty && this.totalDuration();
                var n = this._duration,
                    i = this._cycle,
                    r = i * (n + this._repeatDelay);
                return n < t && (t = n), this.totalTime(this._yoyo && 1 & i ? n - t + r : this._repeat ? t + r : t, e)
            }, t.duration = function (t) {
                return arguments.length ? i.prototype.duration.call(this, t) : this._duration
            }, t.totalDuration = function (t) {
                return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
            }, t.repeat = function (t) {
                return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
            }, t.repeatDelay = function (t) {
                return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
            }, t.yoyo = function (t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, v
        }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (f, h, d) {
            var m = function (t) {
                    h.call(this, t);
                    var e, n, i = this,
                        r = i.vars;
                    for (n in i._labels = {}, i.autoRemoveChildren = !!r.autoRemoveChildren, i.smoothChildTiming = !!r.smoothChildTiming, i._sortChildren = !0, i._onUpdate = r.onUpdate, r) e = r[n], p(e) && -1 !== e.join("").indexOf("{self}") && (r[n] = i._swapSelfInParams(e));
                    p(r.tweens) && i.add(r.tweens, 0, r.align, r.stagger)
                },
                _ = 1e-8,
                t = d._internals,
                e = m._internals = {},
                g = t.isSelector,
                p = t.isArray,
                v = t.lazyTweens,
                y = t.lazyRender,
                s = _gsScope._gsDefine.globals,
                x = function (t) {
                    var e, n = {};
                    for (e in t) n[e] = t[e];
                    return n
                },
                b = function (t, e, n) {
                    var i, r, a = t.cycle;
                    for (i in a) r = a[i], t[i] = "function" == typeof r ? r(n, e[n], e) : r[n % r.length];
                    delete t.cycle
                },
                a = e.pauseCallback = function () {},
                u = function (t, e, n, i) {
                    var r = "immediateRender";
                    return r in e || (e[r] = !(n && !1 === n[r] || i)), e
                },
                T = function (t) {
                    if ("function" == typeof t) return t;
                    var d = "object" == typeof t ? t : {
                            each: t
                        },
                        m = d.ease,
                        g = d.from || 0,
                        _ = d.base || 0,
                        v = {},
                        y = isNaN(g),
                        x = d.axis,
                        b = {
                            center: .5,
                            end: 1
                        }[g] || 0;
                    return function (t, e, n) {
                        var i, r, a, s, o, l, u, c, f, h = (n || d).length,
                            p = v[h];
                        if (!p) {
                            if (!(f = "auto" === d.grid ? 0 : (d.grid || [1 / 0])[0])) {
                                for (u = -1 / 0; u < (u = n[f++].getBoundingClientRect().left) && f < h;);
                                f--
                            }
                            for (p = v[h] = [], i = y ? Math.min(f, h) * b - .5 : g % f, r = y ? h * b / f - .5 : g / f | 0, c = 1 / (u = 0), l = 0; l < h; l++) a = l % f - i, s = r - (l / f | 0), p[l] = o = x ? Math.abs("y" === x ? s : a) : Math.sqrt(a * a + s * s), u < o && (u = o), o < c && (c = o);
                            p.max = u - c, p.min = c, p.v = h = d.amount || d.each * (h < f ? h : x ? "y" === x ? h / f : f : Math.max(f, h / f)) || 0, p.b = h < 0 ? _ - h : _
                        }
                        return h = (p[t] - p.min) / p.max, p.b + (m ? m.getRatio(h) : h) * p.v
                    }
                },
                n = m.prototype = new h;
            return m.version = "2.1.2", m.distribute = T, n.constructor = m, n.kill()._gc = n._forcingPlayhead = n._hasPause = !1, n.to = function (t, e, n, i) {
                var r = n.repeat && s.TweenMax || d;
                return e ? this.add(new r(t, e, n), i) : this.set(t, n, i)
            }, n.from = function (t, e, n, i) {
                return this.add((n.repeat && s.TweenMax || d).from(t, e, u(0, n)), i)
            }, n.fromTo = function (t, e, n, i, r) {
                var a = i.repeat && s.TweenMax || d;
                return i = u(0, i, n), e ? this.add(a.fromTo(t, e, n, i), r) : this.set(t, i, r)
            }, n.staggerTo = function (t, e, n, i, r, a, s, o) {
                var l, u, c = new m({
                        onComplete: a,
                        onCompleteParams: s,
                        callbackScope: o,
                        smoothChildTiming: this.smoothChildTiming
                    }),
                    f = T(n.stagger || i),
                    h = n.startAt,
                    p = n.cycle;
                for ("string" == typeof t && (t = d.selector(t) || t), g(t = t || []) && (t = function (t) {
                        var e, n = [],
                            i = t.length;
                        for (e = 0; e !== i; n.push(t[e++]));
                        return n
                    }(t)), u = 0; u < t.length; u++) l = x(n), h && (l.startAt = x(h), h.cycle && b(l.startAt, t, u)), p && (b(l, t, u), null != l.duration && (e = l.duration, delete l.duration)), c.to(t[u], e, l, f(u, t[u], t));
                return this.add(c, r)
            }, n.staggerFrom = function (t, e, n, i, r, a, s, o) {
                return n.runBackwards = !0, this.staggerTo(t, e, u(0, n), i, r, a, s, o)
            }, n.staggerFromTo = function (t, e, n, i, r, a, s, o, l) {
                return i.startAt = n, this.staggerTo(t, e, u(0, i, n), r, a, s, o, l)
            }, n.call = function (t, e, n, i) {
                return this.add(d.delayedCall(0, t, e, n), i)
            }, n.set = function (t, e, n) {
                return this.add(new d(t, 0, u(0, e, null, !0)), n)
            }, m.exportRoot = function (t, e) {
                null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
                var n, i, r, a, s = new m(t),
                    o = s._timeline;
                for (null == e && (e = !0), o._remove(s, !0), s._startTime = 0, s._rawPrevTime = s._time = s._totalTime = o._time, r = o._first; r;) a = r._next, e && r instanceof d && r.target === r.vars.onComplete || ((i = r._startTime - r._delay) < 0 && (n = 1), s.add(r, i)), r = a;
                return o.add(s, 0), n && s.totalDuration(), s
            }, n.add = function (t, e, n, i) {
                var r, a, s, o, l, u, c = this;
                if ("number" != typeof e && (e = c._parseTimeOrLabel(e, 0, !0, t)), !(t instanceof f)) {
                    if (t instanceof Array || t && t.push && p(t)) {
                        for (n = n || "normal", i = i || 0, r = e, a = t.length, s = 0; s < a; s++) p(o = t[s]) && (o = new m({
                            tweens: o
                        })), c.add(o, r), "string" != typeof o && "function" != typeof o && ("sequence" === n ? r = o._startTime + o.totalDuration() / o._timeScale : "start" === n && (o._startTime -= o.delay())), r += i;
                        return c._uncache(!0)
                    }
                    if ("string" == typeof t) return c.addLabel(t, e);
                    if ("function" != typeof t) throw "Cannot add " + t + " into the timeline; it is not a tween, timeline, function, or string.";
                    t = d.delayedCall(0, t)
                }
                if (h.prototype.add.call(c, t, e), (t._time || !t._duration && t._initted) && (r = (c.rawTime() - t._startTime) * t._timeScale, (!t._duration || 1e-5 < Math.abs(Math.max(0, Math.min(t.totalDuration(), r))) - t._totalTime) && t.render(r, !1, !1)), (c._gc || c._time === c._duration) && !c._paused && c._duration < c.duration())
                    for (u = (l = c).rawTime() > t._startTime; l._timeline;) u && l._timeline.smoothChildTiming ? l.totalTime(l._totalTime, !0) : l._gc && l._enabled(!0, !1), l = l._timeline;
                return c
            }, n.remove = function (t) {
                if (t instanceof f) {
                    this._remove(t, !1);
                    var e = t._timeline = t.vars.useFrames ? f._rootFramesTimeline : f._rootTimeline;
                    return t._startTime = (t._paused ? t._pauseTime : e._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale, this
                }
                if (t instanceof Array || t && t.push && p(t)) {
                    for (var n = t.length; - 1 < --n;) this.remove(t[n]);
                    return this
                }
                return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
            }, n._remove = function (t, e) {
                return h.prototype._remove.call(this, t, e), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
            }, n.append = function (t, e) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
            }, n.insert = n.insertMultiple = function (t, e, n, i) {
                return this.add(t, e || 0, n, i)
            }, n.appendMultiple = function (t, e, n, i) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t), n, i)
            }, n.addLabel = function (t, e) {
                return this._labels[t] = this._parseTimeOrLabel(e), this
            }, n.addPause = function (t, e, n, i) {
                var r = d.delayedCall(0, a, n, i || this);
                return r.vars.onComplete = r.vars.onReverseComplete = e, r.data = "isPause", this._hasPause = !0, this.add(r, t)
            }, n.removeLabel = function (t) {
                return delete this._labels[t], this
            }, n.getLabelTime = function (t) {
                return null != this._labels[t] ? this._labels[t] : -1
            }, n._parseTimeOrLabel = function (t, e, n, i) {
                var r, a;
                if (i instanceof f && i.timeline === this) this.remove(i);
                else if (i && (i instanceof Array || i.push && p(i)))
                    for (a = i.length; - 1 < --a;) i[a] instanceof f && i[a].timeline === this && this.remove(i[a]);
                if (r = "number" != typeof t || e ? 99999999999 < this.duration() ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof e) return this._parseTimeOrLabel(e, n && "number" == typeof t && null == this._labels[e] ? t - r : 0, n);
                if (e = e || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = r);
                else {
                    if (-1 === (a = t.indexOf("="))) return null == this._labels[t] ? n ? this._labels[t] = r + e : e : this._labels[t] + e;
                    e = parseInt(t.charAt(a - 1) + "1", 10) * Number(t.substr(a + 1)), t = 1 < a ? this._parseTimeOrLabel(t.substr(0, a - 1), 0, n) : r
                }
                return Number(t) + e
            }, n.seek = function (t, e) {
                return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
            }, n.stop = function () {
                return this.paused(!0)
            }, n.gotoAndPlay = function (t, e) {
                return this.play(t, e)
            }, n.gotoAndStop = function (t, e) {
                return this.pause(t, e)
            }, n.render = function (t, e, n) {
                this._gc && this._enabled(!0, !1);
                var i, r, a, s, o, l, u, c, f = this,
                    h = f._time,
                    p = f._dirty ? f.totalDuration() : f._totalDuration,
                    d = f._startTime,
                    m = f._timeScale,
                    g = f._paused;
                if (h !== f._time && (t += f._time - h), p - _ <= t && 0 <= t) f._totalTime = f._time = p, f._reversed || f._hasPausedChild() || (r = !0, s = "onComplete", o = !!f._timeline.autoRemoveChildren, 0 === f._duration && (t <= 0 && -_ <= t || f._rawPrevTime < 0 || f._rawPrevTime === _) && f._rawPrevTime !== t && f._first && (o = !0, f._rawPrevTime > _ && (s = "onReverseComplete"))), f._rawPrevTime = f._duration || !e || t || f._rawPrevTime === t ? t : _, t = p + 1e-4;
                else if (t < _)
                    if (f._totalTime = f._time = 0, -_ < t && (t = 0), (0 !== h || 0 === f._duration && f._rawPrevTime !== _ && (0 < f._rawPrevTime || t < 0 && 0 <= f._rawPrevTime)) && (s = "onReverseComplete", r = f._reversed), t < 0) f._active = !1, f._timeline.autoRemoveChildren && f._reversed ? (o = r = !0, s = "onReverseComplete") : 0 <= f._rawPrevTime && f._first && (o = !0), f._rawPrevTime = t;
                    else {
                        if (f._rawPrevTime = f._duration || !e || t || f._rawPrevTime === t ? t : _, 0 === t && r)
                            for (i = f._first; i && 0 === i._startTime;) i._duration || (r = !1), i = i._next;
                        t = 0, f._initted || (o = !0)
                    }
                else {
                    if (f._hasPause && !f._forcingPlayhead && !e) {
                        if (h <= t)
                            for (i = f._first; i && i._startTime <= t && !l;) i._duration || "isPause" !== i.data || i.ratio || 0 === i._startTime && 0 === f._rawPrevTime || (l = i), i = i._next;
                        else
                            for (i = f._last; i && i._startTime >= t && !l;) i._duration || "isPause" === i.data && 0 < i._rawPrevTime && (l = i), i = i._prev;
                        l && (f._time = f._totalTime = t = l._startTime, c = f._startTime + t / f._timeScale)
                    }
                    f._totalTime = f._time = f._rawPrevTime = t
                }
                if (f._time !== h && f._first || n || o || l) {
                    if (f._initted || (f._initted = !0), f._active || !f._paused && f._time !== h && 0 < t && (f._active = !0), 0 === h && f.vars.onStart && (0 === f._time && f._duration || e || f._callback("onStart")), h <= (u = f._time))
                        for (i = f._first; i && (a = i._next, u === f._time && (!f._paused || g));)(i._active || i._startTime <= u && !i._paused && !i._gc) && (l === i && (f.pause(), f._pauseTime = c), i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n)), i = a;
                    else
                        for (i = f._last; i && (a = i._prev, u === f._time && (!f._paused || g));) {
                            if (i._active || i._startTime <= h && !i._paused && !i._gc) {
                                if (l === i) {
                                    for (l = i._prev; l && l.endTime() > f._time;) l.render(l._reversed ? l.totalDuration() - (t - l._startTime) * l._timeScale : (t - l._startTime) * l._timeScale, e, n), l = l._prev;
                                    l = null, f.pause(), f._pauseTime = c
                                }
                                i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n)
                            }
                            i = a
                        }
                    f._onUpdate && (e || (v.length && y(), f._callback("onUpdate"))), s && (f._gc || (d === f._startTime || m !== f._timeScale) && (0 === f._time || p >= f.totalDuration()) && (r && (v.length && y(), f._timeline.autoRemoveChildren && f._enabled(!1, !1), f._active = !1), !e && f.vars[s] && f._callback(s)))
                }
            }, n._hasPausedChild = function () {
                for (var t = this._first; t;) {
                    if (t._paused || t instanceof m && t._hasPausedChild()) return !0;
                    t = t._next
                }
                return !1
            }, n.getChildren = function (t, e, n, i) {
                i = i || -9999999999;
                for (var r = [], a = this._first, s = 0; a;) a._startTime < i || (a instanceof d ? !1 !== e && (r[s++] = a) : (!1 !== n && (r[s++] = a), !1 !== t && (s = (r = r.concat(a.getChildren(!0, e, n))).length))), a = a._next;
                return r
            }, n.getTweensOf = function (t, e) {
                var n, i, r = this._gc,
                    a = [],
                    s = 0;
                for (r && this._enabled(!0, !0), i = (n = d.getTweensOf(t)).length; - 1 < --i;)(n[i].timeline === this || e && this._contains(n[i])) && (a[s++] = n[i]);
                return r && this._enabled(!1, !0), a
            }, n.recent = function () {
                return this._recent
            }, n._contains = function (t) {
                for (var e = t.timeline; e;) {
                    if (e === this) return !0;
                    e = e.timeline
                }
                return !1
            }, n.shiftChildren = function (t, e, n) {
                n = n || 0;
                for (var i, r = this._first, a = this._labels; r;) r._startTime >= n && (r._startTime += t), r = r._next;
                if (e)
                    for (i in a) a[i] >= n && (a[i] += t);
                return this._uncache(!0)
            }, n._kill = function (t, e) {
                if (!t && !e) return this._enabled(!1, !1);
                for (var n = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), i = n.length, r = !1; - 1 < --i;) n[i]._kill(t, e) && (r = !0);
                return r
            }, n.clear = function (t) {
                var e = this.getChildren(!1, !0, !0),
                    n = e.length;
                for (this._time = this._totalTime = 0; - 1 < --n;) e[n]._enabled(!1, !1);
                return !1 !== t && (this._labels = {}), this._uncache(!0)
            }, n.invalidate = function () {
                for (var t = this._first; t;) t.invalidate(), t = t._next;
                return f.prototype.invalidate.call(this)
            }, n._enabled = function (t, e) {
                if (t === this._gc)
                    for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
                return h.prototype._enabled.call(this, t, e)
            }, n.totalTime = function (t, e, n) {
                this._forcingPlayhead = !0;
                var i = f.prototype.totalTime.apply(this, arguments);
                return this._forcingPlayhead = !1, i
            }, n.duration = function (t) {
                return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
            }, n.totalDuration = function (t) {
                if (arguments.length) return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this;
                if (this._dirty) {
                    for (var e, n, i = 0, r = this, a = r._last, s = 999999999999; a;) e = a._prev, a._dirty && a.totalDuration(), a._startTime > s && r._sortChildren && !a._paused && !r._calculatingDuration ? (r._calculatingDuration = 1, r.add(a, a._startTime - a._delay), r._calculatingDuration = 0) : s = a._startTime, a._startTime < 0 && !a._paused && (i -= a._startTime, r._timeline.smoothChildTiming && (r._startTime += a._startTime / r._timeScale, r._time -= a._startTime, r._totalTime -= a._startTime, r._rawPrevTime -= a._startTime), r.shiftChildren(-a._startTime, !1, -9999999999), s = 0), i < (n = a._startTime + a._totalDuration / a._timeScale) && (i = n), a = e;
                    r._duration = r._totalDuration = i, r._dirty = !1
                }
                return this._totalDuration
            }, n.paused = function (t) {
                if (!1 === t && this._paused)
                    for (var e = this._first; e;) e._startTime === this._time && "isPause" === e.data && (e._rawPrevTime = 0), e = e._next;
                return f.prototype.paused.apply(this, arguments)
            }, n.usesFrames = function () {
                for (var t = this._timeline; t._timeline;) t = t._timeline;
                return t === f._rootFramesTimeline
            }, n.rawTime = function (t) {
                return t && (this._paused || this._repeat && 0 < this.time() && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
            }, m
        }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (e, o, t) {
            var n = function (t) {
                    e.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !!this.vars.yoyo, this._dirty = !0
                },
                A = 1e-8,
                i = o._internals,
                F = i.lazyTweens,
                D = i.lazyRender,
                l = _gsScope._gsDefine.globals,
                u = new t(null, null, 1, 0),
                r = n.prototype = new e;
            return r.constructor = n, r.kill()._gc = !1, n.version = "2.1.2", r.invalidate = function () {
                return this._yoyo = !!this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), e.prototype.invalidate.call(this)
            }, r.addCallback = function (t, e, n, i) {
                return this.add(o.delayedCall(0, t, n, i), e)
            }, r.removeCallback = function (t, e) {
                if (t)
                    if (null == e) this._kill(null, t);
                    else
                        for (var n = this.getTweensOf(t, !1), i = n.length, r = this._parseTimeOrLabel(e); - 1 < --i;) n[i]._startTime === r && n[i]._enabled(!1, !1);
                return this
            }, r.removePause = function (t) {
                return this.removeCallback(e._internals.pauseCallback, t)
            }, r.tweenTo = function (t, e) {
                e = e || {};
                var n, i, r, a = {
                        ease: u,
                        useFrames: this.usesFrames(),
                        immediateRender: !1,
                        lazy: !1
                    },
                    s = e.repeat && l.TweenMax || o;
                for (i in e) a[i] = e[i];
                return a.time = this._parseTimeOrLabel(t), n = Math.abs(Number(a.time) - this._time) / this._timeScale || .001, r = new s(this, n, a), a.onStart = function () {
                    r.target.paused(!0), r.vars.time === r.target.time() || n !== r.duration() || r.isFromTo || r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale).render(r.time(), !0, !0), e.onStart && e.onStart.apply(e.onStartScope || e.callbackScope || r, e.onStartParams || [])
                }, r
            }, r.tweenFromTo = function (t, e, n) {
                n = n || {}, t = this._parseTimeOrLabel(t), n.startAt = {
                    onComplete: this.seek,
                    onCompleteParams: [t],
                    callbackScope: this
                }, n.immediateRender = !1 !== n.immediateRender;
                var i = this.tweenTo(e, n);
                return i.isFromTo = 1, i.duration(Math.abs(i.vars.time - t) / this._timeScale || .001)
            }, r.render = function (t, e, n) {
                this._gc && this._enabled(!0, !1);
                var i, r, a, s, o, l, u, c, f, h = this,
                    p = h._time,
                    d = h._dirty ? h.totalDuration() : h._totalDuration,
                    m = h._duration,
                    g = h._totalTime,
                    _ = h._startTime,
                    v = h._timeScale,
                    y = h._rawPrevTime,
                    x = h._paused,
                    b = h._cycle;
                if (p !== h._time && (t += h._time - p), d - A <= t && 0 <= t) h._locked || (h._totalTime = d, h._cycle = h._repeat), h._reversed || h._hasPausedChild() || (r = !0, s = "onComplete", o = !!h._timeline.autoRemoveChildren, 0 === h._duration && (t <= 0 && -A <= t || y < 0 || y === A) && y !== t && h._first && (o = !0, A < y && (s = "onReverseComplete"))), h._rawPrevTime = h._duration || !e || t || h._rawPrevTime === t ? t : A, h._yoyo && 1 & h._cycle ? h._time = t = 0 : t = (h._time = m) + 1e-4;
                else if (t < A)
                    if (h._locked || (h._totalTime = h._cycle = 0), h._time = 0, -A < t && (t = 0), (0 !== p || 0 === m && y !== A && (0 < y || t < 0 && 0 <= y) && !h._locked) && (s = "onReverseComplete", r = h._reversed), t < 0) h._active = !1, h._timeline.autoRemoveChildren && h._reversed ? (o = r = !0, s = "onReverseComplete") : 0 <= y && h._first && (o = !0), h._rawPrevTime = t;
                    else {
                        if (h._rawPrevTime = m || !e || t || h._rawPrevTime === t ? t : A, 0 === t && r)
                            for (i = h._first; i && 0 === i._startTime;) i._duration || (r = !1), i = i._next;
                        t = 0, h._initted || (o = !0)
                    }
                else if (0 === m && y < 0 && (o = !0), h._time = h._rawPrevTime = t, h._locked || (h._totalTime = t, 0 !== h._repeat && (l = m + h._repeatDelay, h._cycle = h._totalTime / l >> 0, h._cycle && h._cycle === h._totalTime / l && g <= t && h._cycle--, h._time = h._totalTime - h._cycle * l, h._yoyo && 1 & h._cycle && (h._time = m - h._time), h._time > m ? t = (h._time = m) + 1e-4 : h._time < 0 ? h._time = t = 0 : t = h._time)), h._hasPause && !h._forcingPlayhead && !e) {
                    if (p <= (t = h._time) || h._repeat && b !== h._cycle)
                        for (i = h._first; i && i._startTime <= t && !u;) i._duration || "isPause" !== i.data || i.ratio || 0 === i._startTime && 0 === h._rawPrevTime || (u = i), i = i._next;
                    else
                        for (i = h._last; i && i._startTime >= t && !u;) i._duration || "isPause" === i.data && 0 < i._rawPrevTime && (u = i), i = i._prev;
                    u && (f = h._startTime + u._startTime / h._timeScale, u._startTime < m && (h._time = h._rawPrevTime = t = u._startTime, h._totalTime = t + h._cycle * (h._totalDuration + h._repeatDelay)))
                }
                if (h._cycle !== b && !h._locked) {
                    var T = h._yoyo && 0 != (1 & b),
                        w = T === (h._yoyo && 0 != (1 & h._cycle)),
                        k = h._totalTime,
                        S = h._cycle,
                        C = h._rawPrevTime,
                        P = h._time;
                    if (h._totalTime = b * m, h._cycle < b ? T = !T : h._totalTime += m, h._time = p, h._rawPrevTime = 0 === m ? y - 1e-4 : y, h._cycle = b, h._locked = !0, p = T ? 0 : m, h.render(p, e, 0 === m), e || h._gc || h.vars.onRepeat && (h._cycle = S, h._locked = !1, h._callback("onRepeat")), p !== h._time) return;
                    if (w && (h._cycle = b, h._locked = !0, p = T ? m + 1e-4 : -1e-4, h.render(p, !0, !1)), h._locked = !1, h._paused && !x) return;
                    h._time = P, h._totalTime = k, h._cycle = S, h._rawPrevTime = C
                }
                if (h._time !== p && h._first || n || o || u) {
                    if (h._initted || (h._initted = !0), h._active || !h._paused && h._totalTime !== g && 0 < t && (h._active = !0), 0 === g && h.vars.onStart && (0 === h._totalTime && h._totalDuration || e || h._callback("onStart")), p <= (c = h._time))
                        for (i = h._first; i && (a = i._next, c === h._time && (!h._paused || x));)(i._active || i._startTime <= h._time && !i._paused && !i._gc) && (u === i && (h.pause(), h._pauseTime = f), i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n)), i = a;
                    else
                        for (i = h._last; i && (a = i._prev, c === h._time && (!h._paused || x));) {
                            if (i._active || i._startTime <= p && !i._paused && !i._gc) {
                                if (u === i) {
                                    for (u = i._prev; u && u.endTime() > h._time;) u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, n), u = u._prev;
                                    u = null, h.pause(), h._pauseTime = f
                                }
                                i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n)
                            }
                            i = a
                        }
                    h._onUpdate && (e || (F.length && D(), h._callback("onUpdate"))), s && (h._locked || h._gc || (_ === h._startTime || v !== h._timeScale) && (0 === h._time || d >= h.totalDuration()) && (r && (F.length && D(), h._timeline.autoRemoveChildren && h._enabled(!1, !1), h._active = !1), !e && h.vars[s] && h._callback(s)))
                } else g !== h._totalTime && h._onUpdate && (e || h._callback("onUpdate"))
            }, r.getActive = function (t, e, n) {
                var i, r, a = [],
                    s = this.getChildren(t || null == t, e || null == t, !!n),
                    o = 0,
                    l = s.length;
                for (i = 0; i < l; i++)(r = s[i]).isActive() && (a[o++] = r);
                return a
            }, r.getLabelAfter = function (t) {
                t || 0 !== t && (t = this._time);
                var e, n = this.getLabelsArray(),
                    i = n.length;
                for (e = 0; e < i; e++)
                    if (n[e].time > t) return n[e].name;
                return null
            }, r.getLabelBefore = function (t) {
                null == t && (t = this._time);
                for (var e = this.getLabelsArray(), n = e.length; - 1 < --n;)
                    if (e[n].time < t) return e[n].name;
                return null
            }, r.getLabelsArray = function () {
                var t, e = [],
                    n = 0;
                for (t in this._labels) e[n++] = {
                    time: this._labels[t],
                    name: t
                };
                return e.sort(function (t, e) {
                    return t.time - e.time
                }), e
            }, r.invalidate = function () {
                return this._locked = !1, e.prototype.invalidate.call(this)
            }, r.progress = function (t, e) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0
            }, r.totalProgress = function (t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0
            }, r.totalDuration = function (t) {
                return arguments.length ? -1 !== this._repeat && t ? this.timeScale(this.totalDuration() / t) : this : (this._dirty && (e.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
            }, r.time = function (t, e) {
                if (!arguments.length) return this._time;
                this._dirty && this.totalDuration();
                var n = this._duration,
                    i = this._cycle,
                    r = i * (n + this._repeatDelay);
                return n < t && (t = n), this.totalTime(this._yoyo && 1 & i ? n - t + r : this._repeat ? t + r : t, e)
            }, r.repeat = function (t) {
                return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
            }, r.repeatDelay = function (t) {
                return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
            }, r.yoyo = function (t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, r.currentLabel = function (t) {
                return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + A)
            }, n
        }, !0), w = 180 / Math.PI, b = [], T = [], k = [], _ = {}, n = _gsScope._gsDefine.globals, v = function (t, e, n, i) {
            n === i && (n = i - (i - e) / 1e6), t === e && (e = t + (n - t) / 1e6), this.a = t, this.b = e, this.c = n, this.d = i, this.da = i - t, this.ca = n - t, this.ba = e - t
        }, S = function (t, e, n, i) {
            var r = {
                    a: t
                },
                a = {},
                s = {},
                o = {
                    c: i
                },
                l = (t + e) / 2,
                u = (e + n) / 2,
                c = (n + i) / 2,
                f = (l + u) / 2,
                h = (u + c) / 2,
                p = (h - f) / 8;
            return r.b = l + (t - l) / 4, a.b = f + p, r.c = a.a = (r.b + a.b) / 2, a.c = s.a = (f + h) / 2, s.b = h - p, o.b = c + (i - c) / 4, s.c = o.a = (s.b + o.b) / 2, [r, a, s, o]
        }, y = function (t, e, n, i, r) {
            var a, s, o, l, u, c, f, h, p, d, m, g, _, v = t.length - 1,
                y = 0,
                x = t[0].a;
            for (a = 0; a < v; a++) s = (u = t[y]).a, o = u.d, l = t[y + 1].d, h = r ? (m = b[a], _ = ((g = T[a]) + m) * e * .25 / (i ? .5 : k[a] || .5), o - ((c = o - (o - s) * (i ? .5 * e : 0 !== m ? _ / m : 0)) + (((f = o + (l - o) * (i ? .5 * e : 0 !== g ? _ / g : 0)) - c) * (3 * m / (m + g) + .5) / 4 || 0))) : o - ((c = o - (o - s) * e * .5) + (f = o + (l - o) * e * .5)) / 2, c += h, f += h, u.c = p = c, u.b = 0 !== a ? x : x = u.a + .6 * (u.c - u.a), u.da = o - s, u.ca = p - s, u.ba = x - s, n ? (d = S(s, x, p, o), t.splice(y, 1, d[0], d[1], d[2], d[3]), y += 4) : y++, x = f;
            (u = t[y]).b = x, u.c = x + .4 * (u.d - x), u.da = u.d - u.a, u.ca = u.c - u.a, u.ba = x - u.a, n && (d = S(u.a, x, u.c, u.d), t.splice(y, 1, d[0], d[1], d[2], d[3]))
        }, x = function (t, e, n, i) {
            var r, a, s, o, l, u, c = [];
            if (i)
                for (a = (t = [i].concat(t)).length; - 1 < --a;) "string" == typeof (u = t[a][e]) && "=" === u.charAt(1) && (t[a][e] = i[e] + Number(u.charAt(0) + u.substr(2)));
            if ((r = t.length - 2) < 0) return c[0] = new v(t[0][e], 0, 0, t[0][e]), c;
            for (a = 0; a < r; a++) s = t[a][e], o = t[a + 1][e], c[a] = new v(s, 0, 0, o), n && (l = t[a + 2][e], b[a] = (b[a] || 0) + (o - s) * (o - s), T[a] = (T[a] || 0) + (l - o) * (l - o));
            return c[a] = new v(t[a][e], 0, 0, t[a + 1][e]), c
        }, p = function (t, e, n, i, r, a) {
            var s, o, l, u, c, f, h, p, d = {},
                m = [],
                g = a || t[0];
            for (o in r = "string" == typeof r ? "," + r + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == e && (e = 1), t[0]) m.push(o);
            if (1 < t.length) {
                for (p = t[t.length - 1], h = !0, s = m.length; - 1 < --s;)
                    if (o = m[s], .05 < Math.abs(g[o] - p[o])) {
                        h = !1;
                        break
                    }
                h && (t = t.concat(), a && t.unshift(a), t.push(t[1]), a = t[t.length - 3])
            }
            for (b.length = T.length = k.length = 0, s = m.length; - 1 < --s;) o = m[s], _[o] = -1 !== r.indexOf("," + o + ","), d[o] = x(t, o, _[o], a);
            for (s = b.length; - 1 < --s;) b[s] = Math.sqrt(b[s]), T[s] = Math.sqrt(T[s]);
            if (!i) {
                for (s = m.length; - 1 < --s;)
                    if (_[o])
                        for (f = (l = d[m[s]]).length - 1, u = 0; u < f; u++) c = l[u + 1].da / T[u] + l[u].da / b[u] || 0, k[u] = (k[u] || 0) + c * c;
                for (s = k.length; - 1 < --s;) k[s] = Math.sqrt(k[s])
            }
            for (s = m.length, u = n ? 4 : 1; - 1 < --s;) l = d[o = m[s]], y(l, e, n, i, _[o]), h && (l.splice(0, u), l.splice(l.length - u, u));
            return d
        }, d = function (t, e, n) {
            for (var i, r, a, s, o, l, u, c, f, h, p, d = 1 / n, m = t.length; - 1 < --m;)
                for (a = (h = t[m]).a, s = h.d - a, o = h.c - a, l = h.b - a, i = r = 0, c = 1; c <= n; c++) i = r - (r = ((u = d * c) * u * s + 3 * (f = 1 - u) * (u * o + f * l)) * u), e[p = m * n + c - 1] = (e[p] || 0) + i * i
        }, g = _gsScope._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.8",
            API: 2,
            global: !0,
            init: function (t, e, n) {
                this._target = t, e instanceof Array && (e = {
                    values: e
                }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                var i, r, a, s, o, l = e.values || [],
                    u = {},
                    c = l[0],
                    f = e.autoRotate || n.vars.orientToBezier;
                for (i in this._autoRotate = f ? f instanceof Array ? f : [
                        ["x", "y", "rotation", !0 === f ? 0 : Number(f) || 0]
                    ] : null, c) this._props.push(i);
                for (a = this._props.length; - 1 < --a;) i = this._props[a], this._overwriteProps.push(i), r = this._func[i] = "function" == typeof t[i], u[i] = r ? t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]() : parseFloat(t[i]), o || u[i] !== l[0][i] && (o = u);
                if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? p(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : function (t, e, n) {
                        var i, r, a, s, o, l, u, c, f, h, p, d = {},
                            m = "cubic" === (e = e || "soft") ? 3 : 2,
                            g = "soft" === e,
                            _ = [];
                        if (g && n && (t = [n].concat(t)), null == t || t.length < m + 1) throw "invalid Bezier data";
                        for (f in t[0]) _.push(f);
                        for (l = _.length; - 1 < --l;) {
                            for (d[f = _[l]] = o = [], h = 0, c = t.length, u = 0; u < c; u++) i = null == n ? t[u][f] : "string" == typeof (p = t[u][f]) && "=" === p.charAt(1) ? n[f] + Number(p.charAt(0) + p.substr(2)) : Number(p), g && 1 < u && u < c - 1 && (o[h++] = (i + o[h - 2]) / 2), o[h++] = i;
                            for (c = h - m + 1, u = h = 0; u < c; u += m) i = o[u], r = o[u + 1], a = o[u + 2], s = 2 === m ? 0 : o[u + 3], o[h++] = p = 3 === m ? new v(i, r, a, s) : new v(i, (2 * r + i) / 3, (2 * r + a) / 3, a);
                            o.length = h
                        }
                        return d
                    }(l, e.type, u), this._segCount = this._beziers[i].length, this._timeRes) {
                    var h = function (t, e) {
                        var n, i, r, a, s = [],
                            o = [],
                            l = 0,
                            u = 0,
                            c = (e = e >> 0 || 6) - 1,
                            f = [],
                            h = [];
                        for (n in t) d(t[n], s, e);
                        for (r = s.length, i = 0; i < r; i++) l += Math.sqrt(s[i]), h[a = i % e] = l, a === c && (u += l, f[a = i / e >> 0] = h, o[a] = u, l = 0, h = []);
                        return {
                            length: u,
                            lengths: o,
                            segments: f
                        }
                    }(this._beziers, this._timeRes);
                    this._length = h.length, this._lengths = h.lengths, this._segments = h.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                }
                if (f = this._autoRotate)
                    for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), a = f.length; - 1 < --a;) {
                        for (s = 0; s < 3; s++) i = f[a][s], this._func[i] = "function" == typeof t[i] && t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)];
                        i = f[a][2], this._initialRotations[a] = (this._func[i] ? this._func[i].call(this._target) : this._target[i]) || 0, this._overwriteProps.push(i)
                    }
                return this._startRatio = n.vars.runBackwards ? 1 : 0, !0
            },
            set: function (t) {
                var e, n, i, r, a, s, o, l, u, c, f = this._segCount,
                    h = this._func,
                    p = this._target,
                    d = t !== this._startRatio;
                if (this._timeRes) {
                    if (u = this._lengths, c = this._curSeg, t *= this._length, i = this._li, t > this._l2 && i < f - 1) {
                        for (l = f - 1; i < l && (this._l2 = u[++i]) <= t;);
                        this._l1 = u[i - 1], this._li = i, this._curSeg = c = this._segments[i], this._s2 = c[this._s1 = this._si = 0]
                    } else if (t < this._l1 && 0 < i) {
                        for (; 0 < i && (this._l1 = u[--i]) >= t;);
                        0 === i && t < this._l1 ? this._l1 = 0 : i++, this._l2 = u[i], this._li = i, this._curSeg = c = this._segments[i], this._s1 = c[(this._si = c.length - 1) - 1] || 0, this._s2 = c[this._si]
                    }
                    if (e = i, t -= this._l1, i = this._si, t > this._s2 && i < c.length - 1) {
                        for (l = c.length - 1; i < l && (this._s2 = c[++i]) <= t;);
                        this._s1 = c[i - 1], this._si = i
                    } else if (t < this._s1 && 0 < i) {
                        for (; 0 < i && (this._s1 = c[--i]) >= t;);
                        0 === i && t < this._s1 ? this._s1 = 0 : i++, this._s2 = c[i], this._si = i
                    }
                    s = (i + (t - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                } else s = (t - (e = t < 0 ? 0 : 1 <= t ? f - 1 : f * t >> 0) * (1 / f)) * f;
                for (n = 1 - s, i = this._props.length; - 1 < --i;) r = this._props[i], o = (s * s * (a = this._beziers[r][e]).da + 3 * n * (s * a.ca + n * a.ba)) * s + a.a, this._mod[r] && (o = this._mod[r](o, p)), h[r] ? p[r](o) : p[r] = o;
                if (this._autoRotate) {
                    var m, g, _, v, y, x, b, T = this._autoRotate;
                    for (i = T.length; - 1 < --i;) r = T[i][2], x = T[i][3] || 0, b = !0 === T[i][4] ? 1 : w, a = this._beziers[T[i][0]], m = this._beziers[T[i][1]], a && m && (a = a[e], m = m[e], g = a.a + (a.b - a.a) * s, g += ((v = a.b + (a.c - a.b) * s) - g) * s, v += (a.c + (a.d - a.c) * s - v) * s, _ = m.a + (m.b - m.a) * s, _ += ((y = m.b + (m.c - m.b) * s) - _) * s, y += (m.c + (m.d - m.c) * s - y) * s, o = d ? Math.atan2(y - _, v - g) * b + x : this._initialRotations[i], this._mod[r] && (o = this._mod[r](o, p)), h[r] ? p[r](o) : p[r] = o)
                }
            }
        }), i = g.prototype, g.bezierThrough = p, g.cubicToQuadratic = S, g._autoCSS = !0, g.quadraticToCubic = function (t, e, n) {
            return new v(t, (2 * e + t) / 3, (2 * e + n) / 3, n)
        }, g._cssRegister = function () {
            var t = n.CSSPlugin;
            if (t) {
                var e = t._internals,
                    p = e._parseToProxy,
                    d = e._setPluginRatio,
                    m = e.CSSPropTween;
                e._registerComplexSpecialProp("bezier", {
                    parser: function (t, e, n, i, r, a) {
                        e instanceof Array && (e = {
                            values: e
                        }), a = new g;
                        var s, o, l, u = e.values,
                            c = u.length - 1,
                            f = [],
                            h = {};
                        if (c < 0) return r;
                        for (s = 0; s <= c; s++) l = p(t, u[s], i, r, a, c !== s), f[s] = l.end;
                        for (o in e) h[o] = e[o];
                        return h.values = f, (r = new m(t, "bezier", 0, 0, l.pt, 2)).data = l, r.plugin = a, r.setRatio = d, 0 === h.autoRotate && (h.autoRotate = !0), !h.autoRotate || h.autoRotate instanceof Array || (s = !0 === h.autoRotate ? 0 : Number(h.autoRotate), h.autoRotate = null != l.end.left ? [
                            ["left", "top", "rotation", s, !1]
                        ] : null != l.end.x && [
                            ["x", "y", "rotation", s, !1]
                        ]), h.autoRotate && (i._transform || i._enableTransforms(!1), l.autoRotate = i._target._gsTransform, l.proxy.rotation = l.autoRotate.rotation || 0, i._overwriteProps.push("rotation")), a._onInitTween(l.proxy, h, i._tween), r
                    }
                })
            }
        }, i._mod = function (t) {
            for (var e, n = this._overwriteProps, i = n.length; - 1 < --i;)(e = t[n[i]]) && "function" == typeof e && (this._mod[n[i]] = e)
        }, i._kill = function (t) {
            var e, n, i = this._props;
            for (e in this._beziers)
                if (e in t)
                    for (delete this._beziers[e], delete this._func[e], n = i.length; - 1 < --n;) i[n] === e && i.splice(n, 1);
            if (i = this._autoRotate)
                for (n = i.length; - 1 < --n;) t[i[n][2]] && i.splice(n, 1);
            return this._super._kill.call(this, t)
        }, _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (a, I) {
            var d, k, S, m, B = function () {
                    a.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = B.prototype.setRatio
                },
                u = _gsScope._gsDefine.globals,
                g = {},
                t = B.prototype = new a("css");
            (t.constructor = B).version = "2.1.0", B.API = 2, B.defaultTransformPerspective = 0, B.defaultSkewType = "compensated", B.defaultSmoothOrigin = !0, t = "px", B.suffixMap = {
                top: t,
                right: t,
                bottom: t,
                left: t,
                width: t,
                height: t,
                fontSize: t,
                padding: t,
                margin: t,
                perspective: t,
                lineHeight: ""
            };
            var P, _, v, H, y, C, A, F, e, n, D = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                O = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                x = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                c = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                E = /(?:\d|\-|\+|=|#|\.)*/g,
                N = /opacity *= *([^)]*)/i,
                b = /opacity:([^;]*)/i,
                s = /alpha\(opacity *=.+?\)/i,
                T = /^(rgb|hsl)/,
                o = /([A-Z])/g,
                l = /-([a-z])/gi,
                w = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                f = function (t, e) {
                    return e.toUpperCase()
                },
                p = /(?:Left|Right|Width)/i,
                h = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                R = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                M = /,(?=[^\)]*(?:\(|$))/gi,
                j = /[\s,\(]/i,
                X = Math.PI / 180,
                W = 180 / Math.PI,
                L = {},
                i = {
                    style: {}
                },
                z = _gsScope.document || {
                    createElement: function () {
                        return i
                    }
                },
                q = function (t, e) {
                    return e && z.createElementNS ? z.createElementNS(e, t) : z.createElement(t)
                },
                $ = q("div"),
                Y = q("img"),
                r = B._internals = {
                    _specialProps: g
                },
                V = (_gsScope.navigator || {}).userAgent || "",
                U = (e = V.indexOf("Android"), n = q("a"), v = -1 !== V.indexOf("Safari") && -1 === V.indexOf("Chrome") && (-1 === e || 3 < parseFloat(V.substr(e + 8, 2))), y = v && parseFloat(V.substr(V.indexOf("Version/") + 8, 2)) < 6, H = -1 !== V.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(V) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(V)) && (C = parseFloat(RegExp.$1)), !!n && (n.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(n.style.opacity))),
                G = function (t) {
                    return N.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                },
                Z = function (t) {
                    _gsScope.console && console.log(t)
                },
                Q = "",
                J = "",
                K = function (t, e) {
                    var n, i, r = (e = e || $).style;
                    if (void 0 !== r[t]) return t;
                    for (t = t.charAt(0).toUpperCase() + t.substr(1), n = ["O", "Moz", "ms", "Ms", "Webkit"], i = 5; - 1 < --i && void 0 === r[n[i] + t];);
                    return 0 <= i ? (Q = "-" + (J = 3 === i ? "ms" : n[i]).toLowerCase() + "-", J + t) : null
                },
                tt = "undefined" != typeof window ? window : z.defaultView || {
                    getComputedStyle: function () {}
                },
                et = function (t) {
                    return tt.getComputedStyle(t)
                },
                nt = B.getStyle = function (t, e, n, i, r) {
                    var a;
                    return U || "opacity" !== e ? (!i && t.style[e] ? a = t.style[e] : (n = n || et(t)) ? a = n[e] || n.getPropertyValue(e) || n.getPropertyValue(e.replace(o, "-$1").toLowerCase()) : t.currentStyle && (a = t.currentStyle[e]), null == r || a && "none" !== a && "auto" !== a && "auto auto" !== a ? a : r) : G(t)
                },
                it = r.convertToPixels = function (t, e, n, i, r) {
                    if ("px" === i || !i && "lineHeight" !== e) return n;
                    if ("auto" === i || !n) return 0;
                    var a, s, o, l = p.test(e),
                        u = t,
                        c = $.style,
                        f = n < 0,
                        h = 1 === n;
                    if (f && (n = -n), h && (n *= 100), "lineHeight" !== e || i)
                        if ("%" === i && -1 !== e.indexOf("border")) a = n / 100 * (l ? t.clientWidth : t.clientHeight);
                        else {
                            if (c.cssText = "border:0 solid red;position:" + nt(t, "position") + ";line-height:0;", "%" !== i && u.appendChild && "v" !== i.charAt(0) && "rem" !== i) c[l ? "borderLeftWidth" : "borderTopWidth"] = n + i;
                            else {
                                if (u = t.parentNode || z.body, -1 !== nt(u, "display").indexOf("flex") && (c.position = "absolute"), s = u._gsCache, o = I.ticker.frame, s && l && s.time === o) return s.width * n / 100;
                                c[l ? "width" : "height"] = n + i
                            }
                            u.appendChild($), a = parseFloat($[l ? "offsetWidth" : "offsetHeight"]), u.removeChild($), l && "%" === i && !1 !== B.cacheWidths && ((s = u._gsCache = u._gsCache || {}).time = o, s.width = a / n * 100), 0 !== a || r || (a = it(t, e, n, i, !0))
                        }
                    else s = et(t).lineHeight, t.style.lineHeight = n, a = parseFloat(et(t).lineHeight), t.style.lineHeight = s;
                    return h && (a /= 100), f ? -a : a
                },
                rt = r.calculateOffset = function (t, e, n) {
                    if ("absolute" !== nt(t, "position", n)) return 0;
                    var i = "left" === e ? "Left" : "Top",
                        r = nt(t, "margin" + i, n);
                    return t["offset" + i] - (it(t, e, parseFloat(r), r.replace(E, "")) || 0)
                },
                at = function (t, e) {
                    var n, i, r, a = {};
                    if (e = e || et(t))
                        if (n = e.length)
                            for (; - 1 < --n;)(-1 === (r = e[n]).indexOf("-transform") || jt === r) && (a[r.replace(l, f)] = e.getPropertyValue(r));
                        else
                            for (n in e)(-1 === n.indexOf("Transform") || Mt === n) && (a[n] = e[n]);
                    else if (e = t.currentStyle || t.style)
                        for (n in e) "string" == typeof n && void 0 === a[n] && (a[n.replace(l, f)] = e[n]);
                    return U || (a.opacity = G(t)), i = Gt(t, e, !1), a.rotation = i.rotation, a.skewX = i.skewX, a.scaleX = i.scaleX, a.scaleY = i.scaleY, a.x = i.x, a.y = i.y, zt && (a.z = i.z, a.rotationX = i.rotationX, a.rotationY = i.rotationY, a.scaleZ = i.scaleZ), a.filters && delete a.filters, a
                },
                st = function (t, e, n, i, r) {
                    var a, s, o, l = {},
                        u = t.style;
                    for (s in n) "cssText" !== s && "length" !== s && isNaN(s) && (e[s] !== (a = n[s]) || r && r[s]) && -1 === s.indexOf("Origin") && ("number" == typeof a || "string" == typeof a) && (l[s] = "auto" !== a || "left" !== s && "top" !== s ? "" !== a && "auto" !== a && "none" !== a || "string" != typeof e[s] || "" === e[s].replace(c, "") ? a : 0 : rt(t, s), void 0 !== u[s] && (o = new bt(u, s, u[s], o)));
                    if (i)
                        for (s in i) "className" !== s && (l[s] = i[s]);
                    return {
                        difs: l,
                        firstMPT: o
                    }
                },
                ot = {
                    width: ["Left", "Right"],
                    height: ["Top", "Bottom"]
                },
                lt = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                ut = function (t, e, n) {
                    if ("svg" === (t.nodeName + "").toLowerCase()) return (n || et(t))[e] || 0;
                    if (t.getCTM && Yt(t)) return t.getBBox()[e] || 0;
                    var i = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                        r = ot[e],
                        a = r.length;
                    for (n = n || et(t); - 1 < --a;) i -= parseFloat(nt(t, "padding" + r[a], n, !0)) || 0, i -= parseFloat(nt(t, "border" + r[a] + "Width", n, !0)) || 0;
                    return i
                },
                ct = function (t, e) {
                    if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                    (null == t || "" === t) && (t = "0 0");
                    var n, i = t.split(" "),
                        r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                        a = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                    if (3 < i.length && !e) {
                        for (i = t.split(", ").join(",").split(","), t = [], n = 0; n < i.length; n++) t.push(ct(i[n]));
                        return t.join(",")
                    }
                    return null == a ? a = "center" === r ? "50%" : "0" : "center" === a && (a = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), t = r + " " + a + (2 < i.length ? " " + i[2] : ""), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== a.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === a.charAt(1), e.ox = parseFloat(r.replace(c, "")), e.oy = parseFloat(a.replace(c, "")), e.v = t), e || t
                },
                ft = function (t, e) {
                    return "function" == typeof t && (t = t(F, A)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
                },
                ht = function (t, e) {
                    "function" == typeof t && (t = t(F, A));
                    var n = "string" == typeof t && "=" === t.charAt(1);
                    return "string" == typeof t && "v" === t.charAt(t.length - 2) && (t = (n ? t.substr(0, 2) : 0) + window["inner" + ("vh" === t.substr(-2) ? "Height" : "Width")] * (parseFloat(n ? t.substr(2) : t) / 100)), null == t ? e : n ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
                },
                pt = function (t, e, n, i) {
                    var r, a, s, o, l;
                    return "function" == typeof t && (t = t(F, A)), (o = null == t ? e : "number" == typeof t ? t : (r = 360, a = t.split("_"), s = ((l = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(a[0].substr(2)) : parseFloat(a[0])) * (-1 === t.indexOf("rad") ? 1 : W) - (l ? 0 : e), a.length && (i && (i[n] = e + s), -1 !== t.indexOf("short") && ((s %= r) !== s % 180 && (s = s < 0 ? s + r : s - r)), -1 !== t.indexOf("_cw") && s < 0 ? s = (s + 3599999999640) % r - (s / r | 0) * r : -1 !== t.indexOf("ccw") && 0 < s && (s = (s - 3599999999640) % r - (s / r | 0) * r)), e + s)) < 1e-6 && -1e-6 < o && (o = 0), o
                },
                dt = {
                    aqua: [0, 255, 255],
                    lime: [0, 255, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, 255],
                    navy: [0, 0, 128],
                    white: [255, 255, 255],
                    fuchsia: [255, 0, 255],
                    olive: [128, 128, 0],
                    yellow: [255, 255, 0],
                    orange: [255, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [255, 0, 0],
                    pink: [255, 192, 203],
                    cyan: [0, 255, 255],
                    transparent: [255, 255, 255, 0]
                },
                mt = function (t, e, n) {
                    return 255 * (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (n - e) * t * 6 : t < .5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                },
                gt = B.parseColor = function (t, e) {
                    var n, i, r, a, s, o, l, u, c, f, h;
                    if (t)
                        if ("number" == typeof t) n = [t >> 16, t >> 8 & 255, 255 & t];
                        else {
                            if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), dt[t]) n = dt[t];
                            else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (i = t.charAt(1)) + i + (r = t.charAt(2)) + r + (a = t.charAt(3)) + a), n = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                            else if ("hsl" === t.substr(0, 3))
                                if (n = h = t.match(D), e) {
                                    if (-1 !== t.indexOf("=")) return t.match(O)
                                } else s = Number(n[0]) % 360 / 360, o = Number(n[1]) / 100, i = 2 * (l = Number(n[2]) / 100) - (r = l <= .5 ? l * (o + 1) : l + o - l * o), 3 < n.length && (n[3] = Number(n[3])), n[0] = mt(s + 1 / 3, i, r), n[1] = mt(s, i, r), n[2] = mt(s - 1 / 3, i, r);
                            else n = t.match(D) || dt.transparent;
                            n[0] = Number(n[0]), n[1] = Number(n[1]), n[2] = Number(n[2]), 3 < n.length && (n[3] = Number(n[3]))
                        }
                    else n = dt.black;
                    return e && !h && (i = n[0] / 255, r = n[1] / 255, a = n[2] / 255, l = ((u = Math.max(i, r, a)) + (c = Math.min(i, r, a))) / 2, u === c ? s = o = 0 : (f = u - c, o = .5 < l ? f / (2 - u - c) : f / (u + c), s = u === i ? (r - a) / f + (r < a ? 6 : 0) : u === r ? (a - i) / f + 2 : (i - r) / f + 4, s *= 60), n[0] = s + .5 | 0, n[1] = 100 * o + .5 | 0, n[2] = 100 * l + .5 | 0), n
                },
                _t = function (t, e) {
                    var n, i, r, a = t.match(vt) || [],
                        s = 0,
                        o = "";
                    if (!a.length) return t;
                    for (n = 0; n < a.length; n++) i = a[n], s += (r = t.substr(s, t.indexOf(i, s) - s)).length + i.length, 3 === (i = gt(i, e)).length && i.push(1), o += r + (e ? "hsla(" + i[0] + "," + i[1] + "%," + i[2] + "%," + i[3] : "rgba(" + i.join(",")) + ")";
                    return o + t.substr(s)
                },
                vt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (t in dt) vt += "|" + t + "\\b";
            vt = new RegExp(vt + ")", "gi"), B.colorStringFilter = function (t) {
                var e, n = t[0] + " " + t[1];
                vt.test(n) && (e = -1 !== n.indexOf("hsl(") || -1 !== n.indexOf("hsla("), t[0] = _t(t[0], e), t[1] = _t(t[1], e)), vt.lastIndex = 0
            }, I.defaultStringFilter || (I.defaultStringFilter = B.colorStringFilter);
            var yt = function (t, e, a, s) {
                    if (null == t) return function (t) {
                        return t
                    };
                    var o, l = e ? (t.match(vt) || [""])[0] : "",
                        u = t.split(l).join("").match(x) || [],
                        c = t.substr(0, t.indexOf(u[0])),
                        f = ")" === t.charAt(t.length - 1) ? ")" : "",
                        h = -1 !== t.indexOf(" ") ? " " : ",",
                        p = u.length,
                        d = 0 < p ? u[0].replace(D, "") : "";
                    return p ? o = e ? function (t) {
                        var e, n, i, r;
                        if ("number" == typeof t) t += d;
                        else if (s && M.test(t)) {
                            for (r = t.replace(M, "|").split("|"), i = 0; i < r.length; i++) r[i] = o(r[i]);
                            return r.join(",")
                        }
                        if (e = (t.match(vt) || [l])[0], i = (n = t.split(e).join("").match(x) || []).length, p > i--)
                            for (; ++i < p;) n[i] = a ? n[(i - 1) / 2 | 0] : u[i];
                        return c + n.join(h) + h + e + f + (-1 !== t.indexOf("inset") ? " inset" : "")
                    } : function (t) {
                        var e, n, i;
                        if ("number" == typeof t) t += d;
                        else if (s && M.test(t)) {
                            for (n = t.replace(M, "|").split("|"), i = 0; i < n.length; i++) n[i] = o(n[i]);
                            return n.join(",")
                        }
                        if (i = (e = t.match(x) || []).length, p > i--)
                            for (; ++i < p;) e[i] = a ? e[(i - 1) / 2 | 0] : u[i];
                        return c + e.join(h) + f
                    } : function (t) {
                        return t
                    }
                },
                xt = function (u) {
                    return u = u.split(","),
                        function (t, e, n, i, r, a, s) {
                            var o, l = (e + "").split(" ");
                            for (s = {}, o = 0; o < 4; o++) s[u[o]] = l[o] = l[o] || l[(o - 1) / 2 >> 0];
                            return i.parse(t, s, r, a)
                        }
                },
                bt = (r._setPluginRatio = function (t) {
                    this.plugin.setRatio(t);
                    for (var e, n, i, r, a, s = this.data, o = s.proxy, l = s.firstMPT; l;) e = o[l.v], l.r ? e = l.r(e) : e < 1e-6 && -1e-6 < e && (e = 0), l.t[l.p] = e, l = l._next;
                    if (s.autoRotate && (s.autoRotate.rotation = s.mod ? s.mod.call(this._tween, o.rotation, this.t, this._tween) : o.rotation), 1 === t || 0 === t)
                        for (l = s.firstMPT, a = 1 === t ? "e" : "b"; l;) {
                            if ((n = l.t).type) {
                                if (1 === n.type) {
                                    for (r = n.xs0 + n.s + n.xs1, i = 1; i < n.l; i++) r += n["xn" + i] + n["xs" + (i + 1)];
                                    n[a] = r
                                }
                            } else n[a] = n.s + n.xs0;
                            l = l._next
                        }
                }, function (t, e, n, i, r) {
                    this.t = t, this.p = e, this.v = n, this.r = r, i && ((i._prev = this)._next = i)
                }),
                Tt = (r._parseToProxy = function (t, e, n, i, r, a) {
                    var s, o, l, u, c, f = i,
                        h = {},
                        p = {},
                        d = n._transform,
                        m = L;
                    for (n._transform = null, L = e, i = c = n.parse(t, e, i, r), L = m, a && (n._transform = d, f && (f._prev = null, f._prev && (f._prev._next = null))); i && i !== f;) {
                        if (i.type <= 1 && (p[o = i.p] = i.s + i.c, h[o] = i.s, a || (u = new bt(i, "s", o, u, i.r), i.c = 0), 1 === i.type))
                            for (s = i.l; 0 < --s;) l = "xn" + s, p[o = i.p + "_" + l] = i.data[l], h[o] = i[l], a || (u = new bt(i, l, o, u, i.rxp[l]));
                        i = i._next
                    }
                    return {
                        proxy: h,
                        end: p,
                        firstMPT: u,
                        pt: c
                    }
                }, r.CSSPropTween = function (t, e, n, i, r, a, s, o, l, u, c) {
                    this.t = t, this.p = e, this.s = n, this.c = i, this.n = s || e, t instanceof Tt || m.push(this.n), this.r = o ? "function" == typeof o ? o : Math.round : o, this.type = a || 0, l && (this.pr = l, d = !0), this.b = void 0 === u ? n : u, this.e = void 0 === c ? n + i : c, r && ((this._next = r)._prev = this)
                }),
                wt = function (t, e, n, i, r, a) {
                    var s = new Tt(t, e, n, i - n, r, -1, a);
                    return s.b = n, s.e = s.xs0 = i, s
                },
                kt = B.parseComplex = function (t, e, n, i, r, a, s, o, l, u) {
                    n = n || a || "", "function" == typeof i && (i = i(F, A)), s = new Tt(t, e, 0, 0, s, u ? 2 : 1, null, !1, o, n, i), i += "", r && vt.test(i + n) && (i = [n, i], B.colorStringFilter(i), n = i[0], i = i[1]);
                    var c, f, h, p, d, m, g, _, v, y, x, b, T, w = n.split(", ").join(",").split(" "),
                        k = i.split(", ").join(",").split(" "),
                        S = w.length,
                        C = !1 !== P;
                    for ((-1 !== i.indexOf(",") || -1 !== n.indexOf(",")) && (k = -1 !== (i + n).indexOf("rgb") || -1 !== (i + n).indexOf("hsl") ? (w = w.join(" ").replace(M, ", ").split(" "), k.join(" ").replace(M, ", ").split(" ")) : (w = w.join(" ").split(",").join(", ").split(" "), k.join(" ").split(",").join(", ").split(" ")), S = w.length), S !== k.length && (S = (w = (a || "").split(" ")).length), s.plugin = l, s.setRatio = u, c = vt.lastIndex = 0; c < S; c++)
                        if (p = w[c], d = k[c] + "", (_ = parseFloat(p)) || 0 === _) s.appendXtra("", _, ft(d, _), d.replace(O, ""), !(!C || -1 === d.indexOf("px")) && Math.round, !0);
                        else if (r && vt.test(p)) b = ")" + ((b = d.indexOf(")") + 1) ? d.substr(b) : ""), T = -1 !== d.indexOf("hsl") && U, y = d, p = gt(p, T), d = gt(d, T), (v = 6 < p.length + d.length) && !U && 0 === d[3] ? (s["xs" + s.l] += s.l ? " transparent" : "transparent", s.e = s.e.split(k[c]).join("transparent")) : (U || (v = !1), T ? s.appendXtra(y.substr(0, y.indexOf("hsl")) + (v ? "hsla(" : "hsl("), p[0], ft(d[0], p[0]), ",", !1, !0).appendXtra("", p[1], ft(d[1], p[1]), "%,", !1).appendXtra("", p[2], ft(d[2], p[2]), v ? "%," : "%" + b, !1) : s.appendXtra(y.substr(0, y.indexOf("rgb")) + (v ? "rgba(" : "rgb("), p[0], d[0] - p[0], ",", Math.round, !0).appendXtra("", p[1], d[1] - p[1], ",", Math.round).appendXtra("", p[2], d[2] - p[2], v ? "," : b, Math.round), v && (p = p.length < 4 ? 1 : p[3], s.appendXtra("", p, (d.length < 4 ? 1 : d[3]) - p, b, !1))), vt.lastIndex = 0;
                    else if (m = p.match(D)) {
                        if (!(g = d.match(O)) || g.length !== m.length) return s;
                        for (f = h = 0; f < m.length; f++) x = m[f], y = p.indexOf(x, h), s.appendXtra(p.substr(h, y - h), Number(x), ft(g[f], x), "", !(!C || "px" !== p.substr(y + x.length, 2)) && Math.round, 0 === f), h = y + x.length;
                        s["xs" + s.l] += p.substr(h)
                    } else s["xs" + s.l] += s.l || s["xs" + s.l] ? " " + d : d;
                    if (-1 !== i.indexOf("=") && s.data) {
                        for (b = s.xs0 + s.data.s, c = 1; c < s.l; c++) b += s["xs" + c] + s.data["xn" + c];
                        s.e = b + s["xs" + c]
                    }
                    return s.l || (s.type = -1, s.xs0 = s.e), s.xfirst || s
                },
                St = 9;
            for ((t = Tt.prototype).l = t.pr = 0; 0 < --St;) t["xn" + St] = 0, t["xs" + St] = "";
            t.xs0 = "", t._next = t._prev = t.xfirst = t.data = t.plugin = t.setRatio = t.rxp = null, t.appendXtra = function (t, e, n, i, r, a) {
                var s = this,
                    o = s.l;
                return s["xs" + o] += a && (o || s["xs" + o]) ? " " + t : t || "", n || 0 === o || s.plugin ? (s.l++, s.type = s.setRatio ? 2 : 1, s["xs" + s.l] = i || "", 0 < o ? (s.data["xn" + o] = e + n, s.rxp["xn" + o] = r, s["xn" + o] = e, s.plugin || (s.xfirst = new Tt(s, "xn" + o, e, n, s.xfirst || s, 0, s.n, r, s.pr), s.xfirst.xs0 = 0)) : (s.data = {
                    s: e + n
                }, s.rxp = {}, s.s = e, s.c = n, s.r = r)) : s["xs" + o] += e + (i || ""), s
            };
            var Ct = function (t, e) {
                    e = e || {}, this.p = e.prefix && K(t) || t, g[t] = g[this.p] = this, this.format = e.formatter || yt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.allowFunc = e.allowFunc, this.pr = e.priority || 0
                },
                Pt = r._registerComplexSpecialProp = function (t, e, n) {
                    "object" != typeof e && (e = {
                        parser: n
                    });
                    var i, r = t.split(","),
                        a = e.defaultValue;
                    for (n = n || [a], i = 0; i < r.length; i++) e.prefix = 0 === i && e.prefix, e.defaultValue = n[i] || a, new Ct(r[i], e)
                },
                At = r._registerPluginProp = function (t) {
                    if (!g[t]) {
                        var l = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                        Pt(t, {
                            parser: function (t, e, n, i, r, a, s) {
                                var o = u.com.greensock.plugins[l];
                                return o ? (o._cssRegister(), g[n].parse(t, e, n, i, r, a, s)) : (Z("Error: " + l + " js file not loaded."), r)
                            }
                        })
                    }
                };
            (t = Ct.prototype).parseComplex = function (t, e, n, i, r, a) {
                var s, o, l, u, c, f, h = this.keyword;
                if (this.multi && (M.test(n) || M.test(e) ? (o = e.replace(M, "|").split("|"), l = n.replace(M, "|").split("|")) : h && (o = [e], l = [n])), l) {
                    for (u = l.length > o.length ? l.length : o.length, s = 0; s < u; s++) e = o[s] = o[s] || this.dflt, n = l[s] = l[s] || this.dflt, h && ((c = e.indexOf(h)) !== (f = n.indexOf(h)) && (-1 === f ? o[s] = o[s].split(h).join("") : -1 === c && (o[s] += " " + h)));
                    e = o.join(", "), n = l.join(", ")
                }
                return kt(t, this.p, e, n, this.clrs, this.dflt, i, this.pr, r, a)
            }, t.parse = function (t, e, n, i, r, a, s) {
                return this.parseComplex(t.style, this.format(nt(t, this.p, S, !1, this.dflt)), this.format(e), r, a)
            }, B.registerSpecialProp = function (t, l, u) {
                Pt(t, {
                    parser: function (t, e, n, i, r, a, s) {
                        var o = new Tt(t, n, 0, 0, r, 2, n, !1, u);
                        return o.plugin = a, o.setRatio = l(t, e, i._tween, n), o
                    },
                    priority: u
                })
            }, B.useSVGTransformAttr = !0;
            var Ft, Dt, Ot, Et, Nt, Rt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                Mt = K("transform"),
                jt = Q + "transform",
                Lt = K("transformOrigin"),
                zt = null !== K("perspective"),
                qt = r.Transform = function () {
                    this.perspective = parseFloat(B.defaultTransformPerspective) || 0, this.force3D = !(!1 === B.defaultForce3D || !zt) && (B.defaultForce3D || "auto")
                },
                It = _gsScope.SVGElement,
                Bt = function (t, e, n) {
                    var i, r = z.createElementNS("http://www.w3.org/2000/svg", t),
                        a = /([a-z])([A-Z])/g;
                    for (i in n) r.setAttributeNS(null, i.replace(a, "$1-$2").toLowerCase(), n[i]);
                    return e.appendChild(r), r
                },
                Ht = z.documentElement || {},
                Xt = (Nt = C || /Android/i.test(V) && !_gsScope.chrome, z.createElementNS && !Nt && (Dt = Bt("svg", Ht), Et = (Ot = Bt("rect", Dt, {
                    width: 100,
                    height: 50,
                    x: 100
                })).getBoundingClientRect().width, Ot.style[Lt] = "50% 50%", Ot.style[Mt] = "scaleX(0.5)", Nt = Et === Ot.getBoundingClientRect().width && !(H && zt), Ht.removeChild(Dt)), Nt),
                Wt = function (t, e, n, i, r, a) {
                    var s, o, l, u, c, f, h, p, d, m, g, _, v, y, x = t._gsTransform,
                        b = Ut(t, !0);
                    x && (v = x.xOrigin, y = x.yOrigin), (!i || (s = i.split(" ")).length < 2) && (0 === (h = t.getBBox()).x && 0 === h.y && h.width + h.height === 0 && (h = {
                        x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                        y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                        width: 0,
                        height: 0
                    }), s = [(-1 !== (e = ct(e).split(" "))[0].indexOf("%") ? parseFloat(e[0]) / 100 * h.width : parseFloat(e[0])) + h.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * h.height : parseFloat(e[1])) + h.y]), n.xOrigin = u = parseFloat(s[0]), n.yOrigin = c = parseFloat(s[1]), i && b !== Vt && (f = b[0], h = b[1], p = b[2], d = b[3], m = b[4], g = b[5], (_ = f * d - h * p) && (o = u * (d / _) + c * (-p / _) + (p * g - d * m) / _, l = u * (-h / _) + c * (f / _) - (f * g - h * m) / _, u = n.xOrigin = s[0] = o, c = n.yOrigin = s[1] = l)), x && (a && (n.xOffset = x.xOffset, n.yOffset = x.yOffset, x = n), r || !1 !== r && !1 !== B.defaultSmoothOrigin ? (o = u - v, l = c - y, x.xOffset += o * b[0] + l * b[2] - o, x.yOffset += o * b[1] + l * b[3] - l) : x.xOffset = x.yOffset = 0), a || t.setAttribute("data-svg-origin", s.join(" "))
                },
                $t = function (t) {
                    var e, n = q("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                        i = this.parentNode,
                        r = this.nextSibling,
                        a = this.style.cssText;
                    if (Ht.appendChild(n), n.appendChild(this), this.style.display = "block", t) try {
                        e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = $t
                    } catch (t) {} else this._originalGetBBox && (e = this._originalGetBBox());
                    return r ? i.insertBefore(this, r) : i.appendChild(this), Ht.removeChild(n), this.style.cssText = a, e
                },
                Yt = function (t) {
                    return !(!It || !t.getCTM || t.parentNode && !t.ownerSVGElement || ! function (e) {
                        try {
                            return e.getBBox()
                        } catch (t) {
                            return $t.call(e, !0)
                        }
                    }(t))
                },
                Vt = [1, 0, 0, 1, 0, 0],
                Ut = function (t, e) {
                    var n, i, r, a, s, o, l, u = t._gsTransform || new qt,
                        c = t.style;
                    if (Mt ? i = nt(t, jt, null, !0) : t.currentStyle && (i = (i = t.currentStyle.filter.match(h)) && 4 === i.length ? [i[0].substr(4), Number(i[2].substr(4)), Number(i[1].substr(4)), i[3].substr(4), u.x || 0, u.y || 0].join(",") : ""), n = !i || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i, Mt && n && !t.offsetParent && (a = c.display, c.display = "block", (l = t.parentNode) && t.offsetParent || (s = 1, o = t.nextSibling, Ht.appendChild(t)), n = !(i = nt(t, jt, null, !0)) || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i, a ? c.display = a : Kt(c, "display"), s && (o ? l.insertBefore(t, o) : l ? l.appendChild(t) : Ht.removeChild(t))), (u.svg || t.getCTM && Yt(t)) && (n && -1 !== (c[Mt] + "").indexOf("matrix") && (i = c[Mt], n = 0), r = t.getAttribute("transform"), n && r && (i = "matrix(" + (r = t.transform.baseVal.consolidate().matrix).a + "," + r.b + "," + r.c + "," + r.d + "," + r.e + "," + r.f + ")", n = 0)), n) return Vt;
                    for (r = (i || "").match(D) || [], St = r.length; - 1 < --St;) a = Number(r[St]), r[St] = (s = a - (a |= 0)) ? (1e5 * s + (s < 0 ? -.5 : .5) | 0) / 1e5 + a : a;
                    return e && 6 < r.length ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                },
                Gt = r.getTransform = function (t, e, n, i) {
                    if (t._gsTransform && n && !i) return t._gsTransform;
                    var r, a, s, o, l, u, c = n && t._gsTransform || new qt,
                        f = c.scaleX < 0,
                        h = zt && (parseFloat(nt(t, Lt, e, !1, "0 0 0").split(" ")[2]) || c.zOrigin) || 0,
                        p = parseFloat(B.defaultTransformPerspective) || 0;
                    if (c.svg = !(!t.getCTM || !Yt(t)), c.svg && (Wt(t, nt(t, Lt, e, !1, "50% 50%") + "", c, t.getAttribute("data-svg-origin")), Ft = B.useSVGTransformAttr || Xt), (r = Ut(t)) !== Vt) {
                        if (16 === r.length) {
                            var d, m, g, _, v, y = r[0],
                                x = r[1],
                                b = r[2],
                                T = r[3],
                                w = r[4],
                                k = r[5],
                                S = r[6],
                                C = r[7],
                                P = r[8],
                                A = r[9],
                                F = r[10],
                                D = r[12],
                                O = r[13],
                                E = r[14],
                                N = r[11],
                                R = Math.atan2(S, F);
                            c.zOrigin && (D = P * (E = -c.zOrigin) - r[12], O = A * E - r[13], E = F * E + c.zOrigin - r[14]), c.rotationX = R * W, R && (d = w * (_ = Math.cos(-R)) + P * (v = Math.sin(-R)), m = k * _ + A * v, g = S * _ + F * v, P = w * -v + P * _, A = k * -v + A * _, F = S * -v + F * _, N = C * -v + N * _, w = d, k = m, S = g), R = Math.atan2(-b, F), c.rotationY = R * W, R && (m = x * (_ = Math.cos(-R)) - A * (v = Math.sin(-R)), g = b * _ - F * v, A = x * v + A * _, F = b * v + F * _, N = T * v + N * _, y = d = y * _ - P * v, x = m, b = g), R = Math.atan2(x, y), c.rotation = R * W, R && (d = y * (_ = Math.cos(R)) + x * (v = Math.sin(R)), m = w * _ + k * v, g = P * _ + A * v, x = x * _ - y * v, k = k * _ - w * v, A = A * _ - P * v, y = d, w = m, P = g), c.rotationX && 359.9 < Math.abs(c.rotationX) + Math.abs(c.rotation) && (c.rotationX = c.rotation = 0, c.rotationY = 180 - c.rotationY), R = Math.atan2(w, k), c.scaleX = (1e5 * Math.sqrt(y * y + x * x + b * b) + .5 | 0) / 1e5, c.scaleY = (1e5 * Math.sqrt(k * k + S * S) + .5 | 0) / 1e5, c.scaleZ = (1e5 * Math.sqrt(P * P + A * A + F * F) + .5 | 0) / 1e5, y /= c.scaleX, w /= c.scaleY, x /= c.scaleX, k /= c.scaleY, 2e-5 < Math.abs(R) ? (c.skewX = R * W, w = 0, "simple" !== c.skewType && (c.scaleY *= 1 / Math.cos(R))) : c.skewX = 0, c.perspective = N ? 1 / (N < 0 ? -N : N) : 0, c.x = D, c.y = O, c.z = E, c.svg && (c.x -= c.xOrigin - (c.xOrigin * y - c.yOrigin * w), c.y -= c.yOrigin - (c.yOrigin * x - c.xOrigin * k))
                        } else if (!zt || i || !r.length || c.x !== r[4] || c.y !== r[5] || !c.rotationX && !c.rotationY) {
                            var M = 6 <= r.length,
                                j = M ? r[0] : 1,
                                L = r[1] || 0,
                                z = r[2] || 0,
                                q = M ? r[3] : 1;
                            c.x = r[4] || 0, c.y = r[5] || 0, s = Math.sqrt(j * j + L * L), o = Math.sqrt(q * q + z * z), l = j || L ? Math.atan2(L, j) * W : c.rotation || 0, u = z || q ? Math.atan2(z, q) * W + l : c.skewX || 0, c.scaleX = s, c.scaleY = o, c.rotation = l, c.skewX = u, zt && (c.rotationX = c.rotationY = c.z = 0, c.perspective = p, c.scaleZ = 1), c.svg && (c.x -= c.xOrigin - (c.xOrigin * j + c.yOrigin * z), c.y -= c.yOrigin - (c.xOrigin * L + c.yOrigin * q))
                        }
                        for (a in 90 < Math.abs(c.skewX) && Math.abs(c.skewX) < 270 && (f ? (c.scaleX *= -1, c.skewX += c.rotation <= 0 ? 180 : -180, c.rotation += c.rotation <= 0 ? 180 : -180) : (c.scaleY *= -1, c.skewX += c.skewX <= 0 ? 180 : -180)), c.zOrigin = h, c) c[a] < 2e-5 && -2e-5 < c[a] && (c[a] = 0)
                    }
                    return n && ((t._gsTransform = c).svg && (Ft && t.style[Mt] ? I.delayedCall(.001, function () {
                        Kt(t.style, Mt)
                    }) : !Ft && t.getAttribute("transform") && I.delayedCall(.001, function () {
                        t.removeAttribute("transform")
                    }))), c
                },
                Zt = function (t) {
                    var e, n, i = this.data,
                        r = -i.rotation * X,
                        a = r + i.skewX * X,
                        s = 1e5,
                        o = (Math.cos(r) * i.scaleX * s | 0) / s,
                        l = (Math.sin(r) * i.scaleX * s | 0) / s,
                        u = (Math.sin(a) * -i.scaleY * s | 0) / s,
                        c = (Math.cos(a) * i.scaleY * s | 0) / s,
                        f = this.t.style,
                        h = this.t.currentStyle;
                    if (h) {
                        n = l, l = -u, u = -n, e = h.filter, f.filter = "";
                        var p, d, m = this.t.offsetWidth,
                            g = this.t.offsetHeight,
                            _ = "absolute" !== h.position,
                            v = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + u + ", M22=" + c,
                            y = i.x + m * i.xPercent / 100,
                            x = i.y + g * i.yPercent / 100;
                        if (null != i.ox && (y += (p = (i.oxp ? m * i.ox * .01 : i.ox) - m / 2) - (p * o + (d = (i.oyp ? g * i.oy * .01 : i.oy) - g / 2) * l), x += d - (p * u + d * c)), _ ? v += ", Dx=" + ((p = m / 2) - (p * o + (d = g / 2) * l) + y) + ", Dy=" + (d - (p * u + d * c) + x) + ")" : v += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? f.filter = e.replace(R, v) : f.filter = v + " " + e, (0 === t || 1 === t) && 1 === o && 0 === l && 0 === u && 1 === c && (_ && -1 === v.indexOf("Dx=0, Dy=0") || N.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && f.removeAttribute("filter")), !_) {
                            var b, T, w, k = C < 8 ? 1 : -1;
                            for (p = i.ieOffsetX || 0, d = i.ieOffsetY || 0, i.ieOffsetX = Math.round((m - ((o < 0 ? -o : o) * m + (l < 0 ? -l : l) * g)) / 2 + y), i.ieOffsetY = Math.round((g - ((c < 0 ? -c : c) * g + (u < 0 ? -u : u) * m)) / 2 + x), St = 0; St < 4; St++) w = (n = -1 !== (b = h[T = lt[St]]).indexOf("px") ? parseFloat(b) : it(this.t, T, parseFloat(b), b.replace(E, "")) || 0) !== i[T] ? St < 2 ? -i.ieOffsetX : -i.ieOffsetY : St < 2 ? p - i.ieOffsetX : d - i.ieOffsetY, f[T] = (i[T] = Math.round(n - w * (0 === St || 2 === St ? 1 : k))) + "px"
                        }
                    }
                },
                Qt = r.set3DTransformRatio = r.setTransformRatio = function (t) {
                    var e, n, i, r, a, s, o, l, u, c, f, h, p, d, m, g, _, v, y, x, b, T, w, k = this.data,
                        S = this.t.style,
                        C = k.rotation,
                        P = k.rotationX,
                        A = k.rotationY,
                        F = k.scaleX,
                        D = k.scaleY,
                        O = k.scaleZ,
                        E = k.x,
                        N = k.y,
                        R = k.z,
                        M = k.svg,
                        j = k.perspective,
                        L = k.force3D,
                        z = k.skewY,
                        q = k.skewX;
                    if (z && (q += z, C += z), !((1 !== t && 0 !== t || "auto" !== L || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && L || R || j || A || P || 1 !== O) || Ft && M || !zt) C || q || M ? (C *= X, T = q * X, w = 1e5, n = Math.cos(C) * F, a = Math.sin(C) * F, i = Math.sin(C - T) * -D, s = Math.cos(C - T) * D, T && "simple" === k.skewType && (e = Math.tan(T - z * X), i *= e = Math.sqrt(1 + e * e), s *= e, z && (e = Math.tan(z * X), n *= e = Math.sqrt(1 + e * e), a *= e)), M && (E += k.xOrigin - (k.xOrigin * n + k.yOrigin * i) + k.xOffset, N += k.yOrigin - (k.xOrigin * a + k.yOrigin * s) + k.yOffset, Ft && (k.xPercent || k.yPercent) && (m = this.t.getBBox(), E += .01 * k.xPercent * m.width, N += .01 * k.yPercent * m.height), E < (m = 1e-6) && -m < E && (E = 0), N < m && -m < N && (N = 0)), y = (n * w | 0) / w + "," + (a * w | 0) / w + "," + (i * w | 0) / w + "," + (s * w | 0) / w + "," + E + "," + N + ")", M && Ft ? this.t.setAttribute("transform", "matrix(" + y) : S[Mt] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + y) : S[Mt] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + F + ",0,0," + D + "," + E + "," + N + ")";
                    else {
                        if (H && (F < (m = 1e-4) && -m < F && (F = O = 2e-5), D < m && -m < D && (D = O = 2e-5), !j || k.z || k.rotationX || k.rotationY || (j = 0)), C || q) C *= X, g = n = Math.cos(C), _ = a = Math.sin(C), q && (C -= q * X, g = Math.cos(C), _ = Math.sin(C), "simple" === k.skewType && (e = Math.tan((q - z) * X), g *= e = Math.sqrt(1 + e * e), _ *= e, k.skewY && (e = Math.tan(z * X), n *= e = Math.sqrt(1 + e * e), a *= e))), i = -_, s = g;
                        else {
                            if (!(A || P || 1 !== O || j || M)) return void(S[Mt] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) translate3d(" : "translate3d(") + E + "px," + N + "px," + R + "px)" + (1 !== F || 1 !== D ? " scale(" + F + "," + D + ")" : ""));
                            n = s = 1, i = a = 0
                        }
                        c = 1, r = o = l = u = f = h = 0, p = j ? -1 / j : 0, d = k.zOrigin, m = 1e-6, x = ",", b = "0", (C = A * X) && (g = Math.cos(C), f = p * (l = -(_ = Math.sin(C))), r = n * _, o = a * _, p *= c = g, n *= g, a *= g), (C = P * X) && (e = i * (g = Math.cos(C)) + r * (_ = Math.sin(C)), v = s * g + o * _, u = c * _, h = p * _, r = i * -_ + r * g, o = s * -_ + o * g, c *= g, p *= g, i = e, s = v), 1 !== O && (r *= O, o *= O, c *= O, p *= O), 1 !== D && (i *= D, s *= D, u *= D, h *= D), 1 !== F && (n *= F, a *= F, l *= F, f *= F), (d || M) && (d && (E += r * -d, N += o * -d, R += c * -d + d), M && (E += k.xOrigin - (k.xOrigin * n + k.yOrigin * i) + k.xOffset, N += k.yOrigin - (k.xOrigin * a + k.yOrigin * s) + k.yOffset), E < m && -m < E && (E = b), N < m && -m < N && (N = b), R < m && -m < R && (R = 0)), y = k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix3d(" : "matrix3d(", y += (n < m && -m < n ? b : n) + x + (a < m && -m < a ? b : a) + x + (l < m && -m < l ? b : l), y += x + (f < m && -m < f ? b : f) + x + (i < m && -m < i ? b : i) + x + (s < m && -m < s ? b : s), P || A || 1 !== O ? (y += x + (u < m && -m < u ? b : u) + x + (h < m && -m < h ? b : h) + x + (r < m && -m < r ? b : r), y += x + (o < m && -m < o ? b : o) + x + (c < m && -m < c ? b : c) + x + (p < m && -m < p ? b : p) + x) : y += ",0,0,0,0,1,0,", y += E + x + N + x + R + x + (j ? 1 + -R / j : 1) + ")", S[Mt] = y
                    }
                };
            (t = qt.prototype).x = t.y = t.z = t.skewX = t.skewY = t.rotation = t.rotationX = t.rotationY = t.zOrigin = t.xPercent = t.yPercent = t.xOffset = t.yOffset = 0, t.scaleX = t.scaleY = t.scaleZ = 1, Pt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                parser: function (t, e, n, i, r, a, s) {
                    if (i._lastParsedTransform === s) return r;
                    var o = (i._lastParsedTransform = s).scale && "function" == typeof s.scale ? s.scale : 0;
                    o && (s.scale = o(F, t));
                    var l, u, c, f, h, p, d, m, g, _ = t._gsTransform,
                        v = t.style,
                        y = Rt.length,
                        x = s,
                        b = {},
                        T = "transformOrigin",
                        w = Gt(t, S, !0, x.parseTransform),
                        k = x.transform && ("function" == typeof x.transform ? x.transform(F, A) : x.transform);
                    if (w.skewType = x.skewType || w.skewType || B.defaultSkewType, i._transform = w, "rotationZ" in x && (x.rotation = x.rotationZ), k && "string" == typeof k && Mt)(u = $.style)[Mt] = k, u.display = "block", u.position = "absolute", -1 !== k.indexOf("%") && (u.width = nt(t, "width"), u.height = nt(t, "height")), z.body.appendChild($), l = Gt($, null, !1), "simple" === w.skewType && (l.scaleY *= Math.cos(l.skewX * X)), w.svg && (p = w.xOrigin, d = w.yOrigin, l.x -= w.xOffset, l.y -= w.yOffset, (x.transformOrigin || x.svgOrigin) && (k = {}, Wt(t, ct(x.transformOrigin), k, x.svgOrigin, x.smoothOrigin, !0), p = k.xOrigin, d = k.yOrigin, l.x -= k.xOffset - w.xOffset, l.y -= k.yOffset - w.yOffset), (p || d) && (m = Ut($, !0), l.x -= p - (p * m[0] + d * m[2]), l.y -= d - (p * m[1] + d * m[3]))), z.body.removeChild($), l.perspective || (l.perspective = w.perspective), null != x.xPercent && (l.xPercent = ht(x.xPercent, w.xPercent)), null != x.yPercent && (l.yPercent = ht(x.yPercent, w.yPercent));
                    else if ("object" == typeof x) {
                        if (l = {
                                scaleX: ht(null != x.scaleX ? x.scaleX : x.scale, w.scaleX),
                                scaleY: ht(null != x.scaleY ? x.scaleY : x.scale, w.scaleY),
                                scaleZ: ht(x.scaleZ, w.scaleZ),
                                x: ht(x.x, w.x),
                                y: ht(x.y, w.y),
                                z: ht(x.z, w.z),
                                xPercent: ht(x.xPercent, w.xPercent),
                                yPercent: ht(x.yPercent, w.yPercent),
                                perspective: ht(x.transformPerspective, w.perspective)
                            }, null != (h = x.directionalRotation))
                            if ("object" == typeof h)
                                for (u in h) x[u] = h[u];
                            else x.rotation = h;
                        "string" == typeof x.x && -1 !== x.x.indexOf("%") && (l.x = 0, l.xPercent = ht(x.x, w.xPercent)), "string" == typeof x.y && -1 !== x.y.indexOf("%") && (l.y = 0, l.yPercent = ht(x.y, w.yPercent)), l.rotation = pt("rotation" in x ? x.rotation : "shortRotation" in x ? x.shortRotation + "_short" : w.rotation, w.rotation, "rotation", b), zt && (l.rotationX = pt("rotationX" in x ? x.rotationX : "shortRotationX" in x ? x.shortRotationX + "_short" : w.rotationX || 0, w.rotationX, "rotationX", b), l.rotationY = pt("rotationY" in x ? x.rotationY : "shortRotationY" in x ? x.shortRotationY + "_short" : w.rotationY || 0, w.rotationY, "rotationY", b)), l.skewX = pt(x.skewX, w.skewX), l.skewY = pt(x.skewY, w.skewY)
                    }
                    for (zt && null != x.force3D && (w.force3D = x.force3D, f = !0), (c = w.force3D || w.z || w.rotationX || w.rotationY || l.z || l.rotationX || l.rotationY || l.perspective) || null == x.scale || (l.scaleZ = 1); - 1 < --y;)(1e-6 < (k = l[g = Rt[y]] - w[g]) || k < -1e-6 || null != x[g] || null != L[g]) && (f = !0, r = new Tt(w, g, w[g], k, r), g in b && (r.e = b[g]), r.xs0 = 0, r.plugin = a, i._overwriteProps.push(r.n));
                    return k = "function" == typeof x.transformOrigin ? x.transformOrigin(F, A) : x.transformOrigin, w.svg && (k || x.svgOrigin) && (p = w.xOffset, d = w.yOffset, Wt(t, ct(k), l, x.svgOrigin, x.smoothOrigin), r = wt(w, "xOrigin", (_ ? w : l).xOrigin, l.xOrigin, r, T), r = wt(w, "yOrigin", (_ ? w : l).yOrigin, l.yOrigin, r, T), (p !== w.xOffset || d !== w.yOffset) && (r = wt(w, "xOffset", _ ? p : w.xOffset, w.xOffset, r, T), r = wt(w, "yOffset", _ ? d : w.yOffset, w.yOffset, r, T)), k = "0px 0px"), (k || zt && c && w.zOrigin) && (Mt ? (f = !0, g = Lt, k || (k = (k = (nt(t, g, S, !1, "50% 50%") + "").split(" "))[0] + " " + k[1] + " " + w.zOrigin + "px"), k += "", (r = new Tt(v, g, 0, 0, r, -1, T)).b = v[g], r.plugin = a, zt ? (u = w.zOrigin, k = k.split(" "), w.zOrigin = (2 < k.length ? parseFloat(k[2]) : u) || 0, r.xs0 = r.e = k[0] + " " + (k[1] || "50%") + " 0px", (r = new Tt(w, "zOrigin", 0, 0, r, -1, r.n)).b = u, r.xs0 = r.e = w.zOrigin) : r.xs0 = r.e = k) : ct(k + "", w)), f && (i._transformType = w.svg && Ft || !c && 3 !== this._transformType ? 2 : 3), o && (s.scale = o), r
                },
                allowFunc: !0,
                prefix: !0
            }), Pt("boxShadow", {
                defaultValue: "0px 0px 0px 0px #999",
                prefix: !0,
                color: !0,
                multi: !0,
                keyword: "inset"
            }), Pt("clipPath", {
                defaultValue: "inset(0px)",
                prefix: !0,
                multi: !0,
                formatter: yt("inset(0px 0px 0px 0px)", !1, !0)
            }), Pt("borderRadius", {
                defaultValue: "0px",
                parser: function (t, e, n, i, r, a) {
                    e = this.format(e);
                    var s, o, l, u, c, f, h, p, d, m, g, _, v, y, x, b, T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                        w = t.style;
                    for (d = parseFloat(t.offsetWidth), m = parseFloat(t.offsetHeight), s = e.split(" "), o = 0; o < T.length; o++) this.p.indexOf("border") && (T[o] = K(T[o])), -1 !== (c = u = nt(t, T[o], S, !1, "0px")).indexOf(" ") && (c = (u = c.split(" "))[0], u = u[1]), f = l = s[o], h = parseFloat(c), _ = c.substr((h + "").length), "" === (g = (v = "=" === f.charAt(1)) ? (p = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), p *= parseFloat(f), f.substr((p + "").length - (p < 0 ? 1 : 0)) || "") : (p = parseFloat(f), f.substr((p + "").length))) && (g = k[n] || _), g !== _ && (y = it(t, "borderLeft", h, _), x = it(t, "borderTop", h, _), u = "%" === g ? (c = y / d * 100 + "%", x / m * 100 + "%") : "em" === g ? (c = y / (b = it(t, "borderLeft", 1, "em")) + "em", x / b + "em") : (c = y + "px", x + "px"), v && (f = parseFloat(c) + p + g, l = parseFloat(u) + p + g)), r = kt(w, T[o], c + " " + u, f + " " + l, !1, "0px", r);
                    return r
                },
                prefix: !0,
                formatter: yt("0px 0px 0px 0px", !1, !0)
            }), Pt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                defaultValue: "0px",
                parser: function (t, e, n, i, r, a) {
                    return kt(t.style, n, this.format(nt(t, n, S, !1, "0px 0px")), this.format(e), !1, "0px", r)
                },
                prefix: !0,
                formatter: yt("0px 0px", !1, !0)
            }), Pt("backgroundPosition", {
                defaultValue: "0 0",
                parser: function (t, e, n, i, r, a) {
                    var s, o, l, u, c, f, h = "background-position",
                        p = S || et(t),
                        d = this.format((p ? C ? p.getPropertyValue(h + "-x") + " " + p.getPropertyValue(h + "-y") : p.getPropertyValue(h) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                        m = this.format(e);
                    if (-1 !== d.indexOf("%") != (-1 !== m.indexOf("%")) && m.split(",").length < 2 && ((f = nt(t, "backgroundImage").replace(w, "")) && "none" !== f)) {
                        for (s = d.split(" "), o = m.split(" "), Y.setAttribute("src", f), l = 2; - 1 < --l;)(u = -1 !== (d = s[l]).indexOf("%")) !== (-1 !== o[l].indexOf("%")) && (c = 0 === l ? t.offsetWidth - Y.width : t.offsetHeight - Y.height, s[l] = u ? parseFloat(d) / 100 * c + "px" : parseFloat(d) / c * 100 + "%");
                        d = s.join(" ")
                    }
                    return this.parseComplex(t.style, d, m, r, a)
                },
                formatter: ct
            }), Pt("backgroundSize", {
                defaultValue: "0 0",
                formatter: function (t) {
                    return "co" === (t += "").substr(0, 2) ? t : ct(-1 === t.indexOf(" ") ? t + " " + t : t)
                }
            }), Pt("perspective", {
                defaultValue: "0px",
                prefix: !0
            }), Pt("perspectiveOrigin", {
                defaultValue: "50% 50%",
                prefix: !0
            }), Pt("transformStyle", {
                prefix: !0
            }), Pt("backfaceVisibility", {
                prefix: !0
            }), Pt("userSelect", {
                prefix: !0
            }), Pt("margin", {
                parser: xt("marginTop,marginRight,marginBottom,marginLeft")
            }), Pt("padding", {
                parser: xt("paddingTop,paddingRight,paddingBottom,paddingLeft")
            }), Pt("clip", {
                defaultValue: "rect(0px,0px,0px,0px)",
                parser: function (t, e, n, i, r, a) {
                    var s, o, l;
                    return e = C < 9 ? (o = t.currentStyle, l = C < 8 ? " " : ",", s = "rect(" + o.clipTop + l + o.clipRight + l + o.clipBottom + l + o.clipLeft + ")", this.format(e).split(",").join(l)) : (s = this.format(nt(t, this.p, S, !1, this.dflt)), this.format(e)), this.parseComplex(t.style, s, e, r, a)
                }
            }), Pt("textShadow", {
                defaultValue: "0px 0px 0px #999",
                color: !0,
                multi: !0
            }), Pt("autoRound,strictUnits", {
                parser: function (t, e, n, i, r) {
                    return r
                }
            }), Pt("border", {
                defaultValue: "0px solid #000",
                parser: function (t, e, n, i, r, a) {
                    var s = nt(t, "borderTopWidth", S, !1, "0px"),
                        o = this.format(e).split(" "),
                        l = o[0].replace(E, "");
                    return "px" !== l && (s = parseFloat(s) / it(t, "borderTopWidth", 1, l) + l), this.parseComplex(t.style, this.format(s + " " + nt(t, "borderTopStyle", S, !1, "solid") + " " + nt(t, "borderTopColor", S, !1, "#000")), o.join(" "), r, a)
                },
                color: !0,
                formatter: function (t) {
                    var e = t.split(" ");
                    return e[0] + " " + (e[1] || "solid") + " " + (t.match(vt) || ["#000"])[0]
                }
            }), Pt("borderWidth", {
                parser: xt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
            }), Pt("float,cssFloat,styleFloat", {
                parser: function (t, e, n, i, r, a) {
                    var s = t.style,
                        o = "cssFloat" in s ? "cssFloat" : "styleFloat";
                    return new Tt(s, o, 0, 0, r, -1, n, !1, 0, s[o], e)
                }
            });
            var Jt = function (t) {
                var e, n = this.t,
                    i = n.filter || nt(this.data, "filter") || "",
                    r = this.s + this.c * t | 0;
                100 === r && (e = -1 === i.indexOf("atrix(") && -1 === i.indexOf("radient(") && -1 === i.indexOf("oader(") ? (n.removeAttribute("filter"), !nt(this.data, "filter")) : (n.filter = i.replace(s, ""), !0)), e || (this.xn1 && (n.filter = i = i || "alpha(opacity=" + r + ")"), -1 === i.indexOf("pacity") ? 0 === r && this.xn1 || (n.filter = i + " alpha(opacity=" + r + ")") : n.filter = i.replace(N, "opacity=" + r))
            };
            Pt("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function (t, e, n, i, r, a) {
                    var s = parseFloat(nt(t, "opacity", S, !1, "1")),
                        o = t.style,
                        l = "autoAlpha" === n;
                    return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + s), l && 1 === s && "hidden" === nt(t, "visibility", S) && 0 !== e && (s = 0), U ? r = new Tt(o, "opacity", s, e - s, r) : ((r = new Tt(o, "opacity", 100 * s, 100 * (e - s), r)).xn1 = l ? 1 : 0, o.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = a, r.setRatio = Jt), l && ((r = new Tt(o, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== s ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit", i._overwriteProps.push(r.n), i._overwriteProps.push(n)), r
                }
            });
            var Kt = function (t, e) {
                    e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(o, "-$1").toLowerCase())) : t.removeAttribute(e))
                },
                te = function (t) {
                    if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                        this.t.setAttribute("class", 0 === t ? this.b : this.e);
                        for (var e = this.data, n = this.t.style; e;) e.v ? n[e.p] = e.v : Kt(n, e.p), e = e._next;
                        1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                };
            Pt("className", {
                parser: function (t, e, n, i, r, a, s) {
                    var o, l, u, c, f, h = t.getAttribute("class") || "",
                        p = t.style.cssText;
                    if ((r = i._classNamePT = new Tt(t, n, 0, 0, r, 2)).setRatio = te, r.pr = -11, d = !0, r.b = h, l = at(t, S), u = t._gsClassPT) {
                        for (c = {}, f = u.data; f;) c[f.p] = 1, f = f._next;
                        u.setRatio(1)
                    }
                    return (t._gsClassPT = r).e = "=" !== e.charAt(1) ? e : h.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", r.e), o = st(t, l, at(t), s, c), t.setAttribute("class", h), r.data = o.firstMPT, t.style.cssText = p, r.xfirst = i.parse(t, o.difs, r, a)
                }
            });
            var ee = function (t) {
                if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var e, n, i, r, a, s = this.t.style,
                        o = g.transform.parse;
                    if ("all" === this.e) r = !(s.cssText = "");
                    else
                        for (i = (e = this.e.split(" ").join("").split(",")).length; - 1 < --i;) n = e[i], g[n] && (g[n].parse === o ? r = !0 : n = "transformOrigin" === n ? Lt : g[n].p), Kt(s, n);
                    r && (Kt(s, Mt), (a = this.t._gsTransform) && (a.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                }
            };
            for (Pt("clearProps", {
                    parser: function (t, e, n, i, r) {
                        return (r = new Tt(t, n, 0, 0, r, 2)).setRatio = ee, r.e = e, r.pr = -10, r.data = i._tween, d = !0, r
                    }
                }), t = "bezier,throwProps,physicsProps,physics2D".split(","), St = t.length; St--;) At(t[St]);
            (t = B.prototype)._firstPT = t._lastParsedTransform = t._transform = null, t._onInitTween = function (t, e, n, i) {
                if (!t.nodeType) return !1;
                this._target = A = t, this._tween = n, this._vars = e, F = i, P = e.autoRound, d = !1, k = e.suffixMap || B.suffixMap, S = et(t), m = this._overwriteProps;
                var r, a, s, o, l, u, c, f, h, p = t.style;
                if (_ && "" === p.zIndex && (("auto" === (r = nt(t, "zIndex", S)) || "" === r) && this._addLazySet(p, "zIndex", 0)), "string" == typeof e && (o = p.cssText, r = at(t, S), p.cssText = o + ";" + e, r = st(t, r, at(t)).difs, !U && b.test(e) && (r.opacity = parseFloat(RegExp.$1)), e = r, p.cssText = o), e.className ? this._firstPT = a = g.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = a = this.parse(t, e, null), this._transformType) {
                    for (h = 3 === this._transformType, Mt ? v && (_ = !0, "" === p.zIndex && (("auto" === (c = nt(t, "zIndex", S)) || "" === c) && this._addLazySet(p, "zIndex", 0)), y && this._addLazySet(p, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (h ? "visible" : "hidden"))) : p.zoom = 1, s = a; s && s._next;) s = s._next;
                    f = new Tt(t, "transform", 0, 0, null, 2), this._linkCSSP(f, null, s), f.setRatio = Mt ? Qt : Zt, f.data = this._transform || Gt(t, S, !0), f.tween = n, f.pr = -1, m.pop()
                }
                if (d) {
                    for (; a;) {
                        for (u = a._next, s = o; s && s.pr > a.pr;) s = s._next;
                        (a._prev = s ? s._prev : l) ? a._prev._next = a: o = a, (a._next = s) ? s._prev = a : l = a, a = u
                    }
                    this._firstPT = o
                }
                return !0
            }, t.parse = function (t, e, n, i) {
                var r, a, s, o, l, u, c, f, h, p, d = t.style;
                for (r in e) {
                    if (u = e[r], a = g[r], "function" != typeof u || a && a.allowFunc || (u = u(F, A)), a) n = a.parse(t, u, r, this, n, i, e);
                    else {
                        if ("--" === r.substr(0, 2)) {
                            this._tween._propLookup[r] = this._addTween.call(this._tween, t.style, "setProperty", et(t).getPropertyValue(r) + "", u + "", r, !1, r);
                            continue
                        }
                        l = nt(t, r, S) + "", h = "string" == typeof u, "color" === r || "fill" === r || "stroke" === r || -1 !== r.indexOf("Color") || h && T.test(u) ? (h || (u = (3 < (u = gt(u)).length ? "rgba(" : "rgb(") + u.join(",") + ")"), n = kt(d, r, l, u, !0, "transparent", n, 0, i)) : h && j.test(u) ? n = kt(d, r, l, u, !0, null, n, 0, i) : (c = (s = parseFloat(l)) || 0 === s ? l.substr((s + "").length) : "", ("" === l || "auto" === l) && (c = "width" === r || "height" === r ? (s = ut(t, r, S), "px") : "left" === r || "top" === r ? (s = rt(t, r, S), "px") : (s = "opacity" !== r ? 0 : 1, "")), "" === (f = (p = h && "=" === u.charAt(1)) ? (o = parseInt(u.charAt(0) + "1", 10), u = u.substr(2), o *= parseFloat(u), u.replace(E, "")) : (o = parseFloat(u), h ? u.replace(E, "") : "")) && (f = r in k ? k[r] : c), u = o || 0 === o ? (p ? o + s : o) + f : e[r], c !== f && ("" !== f || "lineHeight" === r) && (o || 0 === o) && s && (s = it(t, r, s, c), "%" === f ? (s /= it(t, r, 100, "%") / 100, !0 !== e.strictUnits && (l = s + "%")) : "em" === f || "rem" === f || "vw" === f || "vh" === f ? s /= it(t, r, 1, f) : "px" !== f && (o = it(t, r, o, f), f = "px"), p && (o || 0 === o) && (u = o + s + f)), p && (o += s), !s && 0 !== s || !o && 0 !== o ? void 0 !== d[r] && (u || u + "" != "NaN" && null != u) ? (n = new Tt(d, r, o || s || 0, 0, n, -1, r, !1, 0, l, u)).xs0 = "none" !== u || "display" !== r && -1 === r.indexOf("Style") ? u : l : Z("invalid " + r + " tween value: " + e[r]) : (n = new Tt(d, r, s, o - s, n, 0, r, !1 !== P && ("px" === f || "zIndex" === r), 0, l, u)).xs0 = f)
                    }
                    i && n && !n.plugin && (n.plugin = i)
                }
                return n
            }, t.setRatio = function (t) {
                var e, n, i, r = this._firstPT;
                if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                        for (; r;) {
                            if (e = r.c * t + r.s, r.r ? e = r.r(e) : e < 1e-6 && -1e-6 < e && (e = 0), r.type)
                                if (1 === r.type)
                                    if (2 === (i = r.l)) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                    else if (3 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                            else if (4 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                            else if (5 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                            else {
                                for (n = r.xs0 + e + r.xs1, i = 1; i < r.l; i++) n += r["xn" + i] + r["xs" + (i + 1)];
                                r.t[r.p] = n
                            } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                            else r.t[r.p] = e + r.xs0;
                            r = r._next
                        } else
                            for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                    else
                        for (; r;) {
                            if (2 !== r.type)
                                if (r.r && -1 !== r.type)
                                    if (e = r.r(r.s + r.c), r.type) {
                                        if (1 === r.type) {
                                            for (i = r.l, n = r.xs0 + e + r.xs1, i = 1; i < r.l; i++) n += r["xn" + i] + r["xs" + (i + 1)];
                                            r.t[r.p] = n
                                        }
                                    } else r.t[r.p] = e + r.xs0;
                            else r.t[r.p] = r.e;
                            else r.setRatio(t);
                            r = r._next
                        }
            }, t._enableTransforms = function (t) {
                this._transform = this._transform || Gt(this._target, S, !0), this._transformType = this._transform.svg && Ft || !t && 3 !== this._transformType ? 2 : 3
            };
            var ne = function (t) {
                this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
            };
            t._addLazySet = function (t, e, n) {
                var i = this._firstPT = new Tt(t, e, 0, 0, this._firstPT, 2);
                i.e = n, i.setRatio = ne, i.data = this
            }, t._linkCSSP = function (t, e, n, i) {
                return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, i = !0), n ? n._next = t : i || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = n), t
            }, t._mod = function (t) {
                for (var e = this._firstPT; e;) "function" == typeof t[e.p] && (e.r = t[e.p]), e = e._next
            }, t._kill = function (t) {
                var e, n, i, r = t;
                if (t.autoAlpha || t.alpha) {
                    for (n in r = {}, t) r[n] = t[n];
                    r.opacity = 1, r.autoAlpha && (r.visibility = 1)
                }
                for (t.className && (e = this._classNamePT) && ((i = e.xfirst) && i._prev ? this._linkCSSP(i._prev, e._next, i._prev._prev) : i === this._firstPT && (this._firstPT = e._next), e._next && this._linkCSSP(e._next, e._next._next, i._prev), this._classNamePT = null), e = this._firstPT; e;) e.plugin && e.plugin !== n && e.plugin._kill && (e.plugin._kill(t), n = e.plugin), e = e._next;
                return a.prototype._kill.call(this, r)
            };
            var ie = function (t, e, n) {
                var i, r, a, s;
                if (t.slice)
                    for (r = t.length; - 1 < --r;) ie(t[r], e, n);
                else
                    for (r = (i = t.childNodes).length; - 1 < --r;) s = (a = i[r]).type, a.style && (e.push(at(a)), n && n.push(a)), 1 !== s && 9 !== s && 11 !== s || !a.childNodes.length || ie(a, e, n)
            };
            return B.cascadeTo = function (t, e, n) {
                var i, r, a, s, o = I.to(t, e, n),
                    l = [o],
                    u = [],
                    c = [],
                    f = [],
                    h = I._internals.reservedProps;
                for (t = o._targets || o.target, ie(t, u, f), o.render(e, !0, !0), ie(t, c), o.render(0, !0, !0), o._enabled(!0), i = f.length; - 1 < --i;)
                    if ((r = st(f[i], u[i], c[i])).firstMPT) {
                        for (a in r = r.difs, n) h[a] && (r[a] = n[a]);
                        for (a in s = {}, r) s[a] = u[i][a];
                        l.push(I.fromTo(f[i], e, s, r))
                    }
                return l
            }, a.activate([B]), B
        }, !0), t = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            version: "1.7.0",
            priority: -1,
            API: 2,
            init: function (t, e, n) {
                return this._tween = n, !0
            }
        }), l = function (e) {
            var n = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
            return function (t) {
                return (Math.round(t / e) * e * n | 0) / n
            }
        }, u = function (t, e) {
            for (; t;) t.f || t.blob || (t.m = e || Math.round), t = t._next
        }, (e = t.prototype)._onInitAllProps = function () {
            var t, e, n, i, r = this._tween,
                a = r.vars.roundProps,
                s = {},
                o = r._propLookup.roundProps;
            if ("object" != typeof a || a.push)
                for ("string" == typeof a && (a = a.split(",")), n = a.length; - 1 < --n;) s[a[n]] = Math.round;
            else
                for (i in a) s[i] = l(a[i]);
            for (i in s)
                for (t = r._firstPT; t;) e = t._next, t.pg ? t.t._mod(s) : t.n === i && (2 === t.f && t.t ? u(t.t._firstPT, s[i]) : (this._add(t.t, i, t.s, t.c, s[i]), e && (e._prev = t._prev), t._prev ? t._prev._next = e : r._firstPT === t && (r._firstPT = e), t._next = t._prev = null, r._propLookup[i] = o)), t = e;
            return !1
        }, e._add = function (t, e, n, i, r) {
            this._addTween(t, e, n, n + i, e, r || Math.round), this._overwriteProps.push(e)
        }, _gsScope._gsDefine.plugin({
            propName: "attr",
            API: 2,
            version: "0.6.1",
            init: function (t, e, n, i) {
                var r, a;
                if ("function" != typeof t.setAttribute) return !1;
                for (r in e) "function" == typeof (a = e[r]) && (a = a(i, t)), this._addTween(t, "setAttribute", t.getAttribute(r) + "", a + "", r, !1, r), this._overwriteProps.push(r);
                return !0
            }
        }), _gsScope._gsDefine.plugin({
            propName: "directionalRotation",
            version: "0.3.1",
            API: 2,
            init: function (t, e, n, i) {
                "object" != typeof e && (e = {
                    rotation: e
                }), this.finals = {};
                var r, a, s, o, l, u, c = !0 === e.useRadians ? 2 * Math.PI : 360;
                for (r in e) "useRadians" !== r && ("function" == typeof (o = e[r]) && (o = o(i, t)), a = (u = (o + "").split("_"))[0], s = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), l = (o = this.finals[r] = "string" == typeof a && "=" === a.charAt(1) ? s + parseInt(a.charAt(0) + "1", 10) * Number(a.substr(2)) : Number(a) || 0) - s, u.length && (-1 !== (a = u.join("_")).indexOf("short") && ((l %= c) !== l % (c / 2) && (l = l < 0 ? l + c : l - c)), -1 !== a.indexOf("_cw") && l < 0 ? l = (l + 9999999999 * c) % c - (l / c | 0) * c : -1 !== a.indexOf("ccw") && 0 < l && (l = (l - 9999999999 * c) % c - (l / c | 0) * c)), (1e-6 < l || l < -1e-6) && (this._addTween(t, r, s, s + l, r), this._overwriteProps.push(r)));
                return !0
            },
            set: function (t) {
                var e;
                if (1 !== t) this._super.setRatio.call(this, t);
                else
                    for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
            }
        })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (g) {
            var n, i, e, t, r = _gsScope.GreenSockGlobals || _gsScope,
                a = r.com.greensock,
                s = 2 * Math.PI,
                o = Math.PI / 2,
                l = a._class,
                u = function (t, e) {
                    var n = l("easing." + t, function () {}, !0),
                        i = n.prototype = new g;
                    return i.constructor = n, i.getRatio = e, n
                },
                c = g.register || function () {},
                f = function (t, e, n, i, r) {
                    var a = l("easing." + t, {
                        easeOut: new e,
                        easeIn: new n,
                        easeInOut: new i
                    }, !0);
                    return c(a, t), a
                },
                _ = function (t, e, n) {
                    this.t = t, this.v = e, n && (((this.next = n).prev = this).c = n.v - e, this.gap = n.t - t)
                },
                h = function (t, e) {
                    var n = l("easing." + t, function (t) {
                            this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                        }, !0),
                        i = n.prototype = new g;
                    return i.constructor = n, i.getRatio = e, i.config = function (t) {
                        return new n(t)
                    }, n
                },
                p = f("Back", h("BackOut", function (t) {
                    return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                }), h("BackIn", function (t) {
                    return t * t * ((this._p1 + 1) * t - this._p1)
                }), h("BackInOut", function (t) {
                    return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                })),
                d = l("easing.SlowMo", function (t, e, n) {
                    e = e || 0 === e ? e : .7, null == t ? t = .7 : 1 < t && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === n
                }, !0),
                m = d.prototype = new g;
            return m.constructor = d, m.getRatio = function (t) {
                var e = t + (.5 - t) * this._p;
                return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
            }, d.ease = new d(.7, .7), m.config = d.config = function (t, e, n) {
                return new d(t, e, n)
            }, (m = (n = l("easing.SteppedEase", function (t, e) {
                t = t || 1, this._p1 = 1 / t, this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0
            }, !0)).prototype = new g).constructor = n, m.getRatio = function (t) {
                return t < 0 ? t = 0 : 1 <= t && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1
            }, m.config = n.config = function (t, e) {
                return new n(t, e)
            }, (m = (i = l("easing.ExpoScaleEase", function (t, e, n) {
                this._p1 = Math.log(e / t), this._p2 = e - t, this._p3 = t, this._ease = n
            }, !0)).prototype = new g).constructor = i, m.getRatio = function (t) {
                return this._ease && (t = this._ease.getRatio(t)), (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2
            }, m.config = i.config = function (t, e, n) {
                return new i(t, e, n)
            }, (m = (e = l("easing.RoughEase", function (t) {
                for (var e, n, i, r, a, s, o = (t = t || {}).taper || "none", l = [], u = 0, c = 0 | (t.points || 20), f = c, h = !1 !== t.randomize, p = !0 === t.clamp, d = t.template instanceof g ? t.template : null, m = "number" == typeof t.strength ? .4 * t.strength : .4; - 1 < --f;) e = h ? Math.random() : 1 / c * f, n = d ? d.getRatio(e) : e, i = "none" === o ? m : "out" === o ? (r = 1 - e) * r * m : "in" === o ? e * e * m : (r = e < .5 ? 2 * e : 2 * (1 - e)) * r * .5 * m, h ? n += Math.random() * i - .5 * i : f % 2 ? n += .5 * i : n -= .5 * i, p && (1 < n ? n = 1 : n < 0 && (n = 0)), l[u++] = {
                    x: e,
                    y: n
                };
                for (l.sort(function (t, e) {
                        return t.x - e.x
                    }), s = new _(1, 1, null), f = c; - 1 < --f;) a = l[f], s = new _(a.x, a.y, s);
                this._prev = new _(0, 0, 0 !== s.t ? s : s.next)
            }, !0)).prototype = new g).constructor = e, m.getRatio = function (t) {
                var e = this._prev;
                if (t > e.t) {
                    for (; e.next && t >= e.t;) e = e.next;
                    e = e.prev
                } else
                    for (; e.prev && t <= e.t;) e = e.prev;
                return (this._prev = e).v + (t - e.t) / e.gap * e.c
            }, m.config = function (t) {
                return new e(t)
            }, e.ease = new e, f("Bounce", u("BounceOut", function (t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }), u("BounceIn", function (t) {
                return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
            }), u("BounceInOut", function (t) {
                var e = t < .5;
                return t = (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
            })), f("Circ", u("CircOut", function (t) {
                return Math.sqrt(1 - (t -= 1) * t)
            }), u("CircIn", function (t) {
                return -(Math.sqrt(1 - t * t) - 1)
            }), u("CircInOut", function (t) {
                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            })), f("Elastic", (t = function (t, e, n) {
                var i = l("easing." + t, function (t, e) {
                        this._p1 = 1 <= t ? t : 1, this._p2 = (e || n) / (t < 1 ? t : 1), this._p3 = this._p2 / s * (Math.asin(1 / this._p1) || 0), this._p2 = s / this._p2
                    }, !0),
                    r = i.prototype = new g;
                return r.constructor = i, r.getRatio = e, r.config = function (t, e) {
                    return new i(t, e)
                }, i
            })("ElasticOut", function (t) {
                return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
            }, .3), t("ElasticIn", function (t) {
                return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
            }, .3), t("ElasticInOut", function (t) {
                return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
            }, .45)), f("Expo", u("ExpoOut", function (t) {
                return 1 - Math.pow(2, -10 * t)
            }), u("ExpoIn", function (t) {
                return Math.pow(2, 10 * (t - 1)) - .001
            }), u("ExpoInOut", function (t) {
                return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
            })), f("Sine", u("SineOut", function (t) {
                return Math.sin(t * o)
            }), u("SineIn", function (t) {
                return 1 - Math.cos(t * o)
            }), u("SineInOut", function (t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            })), l("easing.EaseLookup", {
                find: function (t) {
                    return g.map[t]
                }
            }, !0), c(r.SlowMo, "SlowMo", "ease,"), c(e, "RoughEase", "ease,"), c(n, "SteppedEase", "ease,"), p
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function (h, p) {
        "use strict";
        var d = {},
            i = h.document,
            m = h.GreenSockGlobals = h.GreenSockGlobals || h,
            t = m[p];
        if (t) return "undefined" != typeof module && module.exports && (module.exports = t);
        var e, n, r, g, _, a, s, v = function (t) {
                var e, n = t.split("."),
                    i = m;
                for (e = 0; e < n.length; e++) i[n[e]] = i = i[n[e]] || {};
                return i
            },
            f = v("com.greensock"),
            y = 1e-8,
            l = function (t) {
                var e, n = [],
                    i = t.length;
                for (e = 0; e !== i; n.push(t[e++]));
                return n
            },
            x = function () {},
            b = (a = Object.prototype.toString, s = a.call([]), function (t) {
                return null != t && (t instanceof Array || "object" == typeof t && !!t.push && a.call(t) === s)
            }),
            T = {},
            w = function (o, l, u, c) {
                this.sc = T[o] ? T[o].sc : [], (T[o] = this).gsClass = null, this.func = u;
                var f = [];
                this.check = function (t) {
                    for (var e, n, i, r, a = l.length, s = a; - 1 < --a;)(e = T[l[a]] || new w(l[a], [])).gsClass ? (f[a] = e.gsClass, s--) : t && e.sc.push(this);
                    if (0 === s && u) {
                        if (i = (n = ("com.greensock." + o).split(".")).pop(), r = v(n.join("."))[i] = this.gsClass = u.apply(u, f), c)
                            if (m[i] = d[i] = r, "undefined" != typeof module && module.exports)
                                if (o === p)
                                    for (a in module.exports = d[p] = r, d) r[a] = d[a];
                                else d[p] && (d[p][i] = r);
                        else "function" == typeof define && define.amd && define((h.GreenSockAMDPath ? h.GreenSockAMDPath + "/" : "") + o.split(".").pop(), [], function () {
                            return r
                        });
                        for (a = 0; a < this.sc.length; a++) this.sc[a].check()
                    }
                }, this.check(!0)
            },
            o = h._gsDefine = function (t, e, n, i) {
                return new w(t, e, n, i)
            },
            k = f._class = function (t, e, n) {
                return e = e || function () {}, o(t, [], function () {
                    return e
                }, n), e
            };
        o.globals = m;
        var u = [0, 0, 1, 1],
            S = k("easing.Ease", function (t, e, n, i) {
                this._func = t, this._type = n || 0, this._power = i || 0, this._params = e ? u.concat(e) : u
            }, !0),
            C = S.map = {},
            c = S.register = function (t, e, n, i) {
                for (var r, a, s, o, l = e.split(","), u = l.length, c = (n || "easeIn,easeOut,easeInOut").split(","); - 1 < --u;)
                    for (a = l[u], r = i ? k("easing." + a, null, !0) : f.easing[a] || {}, s = c.length; - 1 < --s;) o = c[s], C[a + "." + o] = C[o + a] = r[o] = t.getRatio ? t : t[o] || new t
            };
        for ((r = S.prototype)._calcEnd = !1, r.getRatio = function (t) {
                if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                var e = this._type,
                    n = this._power,
                    i = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
                return 1 === n ? i *= i : 2 === n ? i *= i * i : 3 === n ? i *= i * i * i : 4 === n && (i *= i * i * i * i), 1 === e ? 1 - i : 2 === e ? i : t < .5 ? i / 2 : 1 - i / 2
            }, n = (e = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; - 1 < --n;) r = e[n] + ",Power" + n, c(new S(null, null, 1, n), r, "easeOut", !0), c(new S(null, null, 2, n), r, "easeIn" + (0 === n ? ",easeNone" : "")), c(new S(null, null, 3, n), r, "easeInOut");
        C.linear = f.easing.Linear.easeIn, C.swing = f.easing.Quad.easeInOut;
        var P = k("events.EventDispatcher", function (t) {
            this._listeners = {}, this._eventTarget = t || this
        });
        (r = P.prototype).addEventListener = function (t, e, n, i, r) {
            r = r || 0;
            var a, s, o = this._listeners[t],
                l = 0;
            for (this !== g || _ || g.wake(), null == o && (this._listeners[t] = o = []), s = o.length; - 1 < --s;)(a = o[s]).c === e && a.s === n ? o.splice(s, 1) : 0 === l && a.pr < r && (l = s + 1);
            o.splice(l, 0, {
                c: e,
                s: n,
                up: i,
                pr: r
            })
        }, r.removeEventListener = function (t, e) {
            var n, i = this._listeners[t];
            if (i)
                for (n = i.length; - 1 < --n;)
                    if (i[n].c === e) return void i.splice(n, 1)
        }, r.dispatchEvent = function (t) {
            var e, n, i, r = this._listeners[t];
            if (r)
                for (1 < (e = r.length) && (r = r.slice(0)), n = this._eventTarget; - 1 < --e;)(i = r[e]) && (i.up ? i.c.call(i.s || n, {
                    type: t,
                    target: n
                }) : i.c.call(i.s || n))
        };
        var A = h.requestAnimationFrame,
            F = h.cancelAnimationFrame,
            D = Date.now || function () {
                return (new Date).getTime()
            },
            O = D();
        for (n = (e = ["ms", "moz", "webkit", "o"]).length; - 1 < --n && !A;) A = h[e[n] + "RequestAnimationFrame"], F = h[e[n] + "CancelAnimationFrame"] || h[e[n] + "CancelRequestAnimationFrame"];
        k("Ticker", function (t, e) {
            var r, a, s, o, l, u = this,
                c = D(),
                n = !(!1 === e || !A) && "auto",
                f = 500,
                h = 33,
                p = function (t) {
                    var e, n, i = D() - O;
                    f < i && (c += i - h), O += i, u.time = (O - c) / 1e3, e = u.time - l, (!r || 0 < e || !0 === t) && (u.frame++, l += e + (o <= e ? .004 : o - e), n = !0), !0 !== t && (s = a(p)), n && u.dispatchEvent("tick")
                };
            P.call(u), u.time = u.frame = 0, u.tick = function () {
                p(!0)
            }, u.lagSmoothing = function (t, e) {
                return arguments.length ? (f = t || 1e8, void(h = Math.min(e, f, 0))) : f < 1e8
            }, u.sleep = function () {
                null != s && (n && F ? F(s) : clearTimeout(s), a = x, s = null, u === g && (_ = !1))
            }, u.wake = function (t) {
                null !== s ? u.sleep() : t ? c += -O + (O = D()) : 10 < u.frame && (O = D() - f + 5), a = 0 === r ? x : n && A ? A : function (t) {
                    return setTimeout(t, 1e3 * (l - u.time) + 1 | 0)
                }, u === g && (_ = !0), p(2)
            }, u.fps = function (t) {
                return arguments.length ? (o = 1 / ((r = t) || 60), l = this.time + o, void u.wake()) : r
            }, u.useRAF = function (t) {
                return arguments.length ? (u.sleep(), n = t, void u.fps(r)) : n
            }, u.fps(t), setTimeout(function () {
                "auto" === n && u.frame < 5 && "hidden" !== (i || {}).visibilityState && u.useRAF(!1)
            }, 1500)
        }), (r = f.Ticker.prototype = new f.events.EventDispatcher).constructor = f.Ticker;
        var E = k("core.Animation", function (t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !!e.immediateRender, this.data = e.data, this._reversed = !!e.reversed, J) {
                _ || g.wake();
                var n = this.vars.useFrames ? Q : J;
                n.add(this, n._time), this.vars.paused && this.paused(!0)
            }
        });
        g = E.ticker = new f.Ticker, (r = E.prototype)._dirty = r._gc = r._initted = r._paused = !1, r._totalTime = r._time = 0, r._rawPrevTime = -1, r._next = r._last = r._onUpdate = r._timeline = r.timeline = null, r._paused = !1;
        var N = function () {
            _ && 2e3 < D() - O && ("hidden" !== (i || {}).visibilityState || !g.lagSmoothing()) && g.wake();
            var t = setTimeout(N, 2e3);
            t.unref && t.unref()
        };
        N(), r.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, r.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, r.resume = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!1)
        }, r.seek = function (t, e) {
            return this.totalTime(Number(t), !1 !== e)
        }, r.restart = function (t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
        }, r.reverse = function (t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, r.render = function (t, e, n) {}, r.invalidate = function () {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
        }, r.isActive = function () {
            var t, e = this._timeline,
                n = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= n && t < n + this.totalDuration() / this._timeScale - y
        }, r._enabled = function (t, e) {
            return _ || g.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
        }, r._kill = function (t, e) {
            return this._enabled(!1, !1)
        }, r.kill = function (t, e) {
            return this._kill(t, e), this
        }, r._uncache = function (t) {
            for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
            return this
        }, r._swapSelfInParams = function (t) {
            for (var e = t.length, n = t.concat(); - 1 < --e;) "{self}" === t[e] && (n[e] = this);
            return n
        }, r._callback = function (t) {
            var e = this.vars,
                n = e[t],
                i = e[t + "Params"],
                r = e[t + "Scope"] || e.callbackScope || this;
            switch (i ? i.length : 0) {
                case 0:
                    n.call(r);
                    break;
                case 1:
                    n.call(r, i[0]);
                    break;
                case 2:
                    n.call(r, i[0], i[1]);
                    break;
                default:
                    n.apply(r, i)
            }
        }, r.eventCallback = function (t, e, n, i) {
            if ("on" === (t || "").substr(0, 2)) {
                var r = this.vars;
                if (1 === arguments.length) return r[t];
                null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = b(n) && -1 !== n.join("").indexOf("{self}") ? this._swapSelfInParams(n) : n, r[t + "Scope"] = i), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }, r.delay = function (t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        }, r.duration = function (t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, r.totalDuration = function (t) {
            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
        }, r.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }, r.totalTime = function (t, e, n) {
            if (_ || g.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (t < 0 && !n && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var i = this._totalDuration,
                        r = this._timeline;
                    if (i < t && !n && (t = i), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? i - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                        for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (L.length && tt(), this.render(t, e, !1), L.length && tt())
            }
            return this
        }, r.progress = r.totalProgress = function (t, e) {
            var n = this.duration();
            return arguments.length ? this.totalTime(n * t, e) : n ? this._time / n : this.ratio
        }, r.startTime = function (t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        }, r.endTime = function (t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        }, r.timeScale = function (t) {
            if (!arguments.length) return this._timeScale;
            var e, n;
            for (t = t || y, this._timeline && this._timeline.smoothChildTiming && (n = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime(), this._startTime = n - (n - this._startTime) * this._timeScale / t), this._timeScale = t, n = this.timeline; n && n.timeline;) n._dirty = !0, n.totalDuration(), n = n.timeline;
            return this
        }, r.reversed = function (t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, r.paused = function (t) {
            if (!arguments.length) return this._paused;
            var e, n, i = this._timeline;
            return t != this._paused && i && (_ || t || g.wake(), n = (e = i.rawTime()) - this._pauseTime, !t && i.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== n && this._initted && this.duration() && (e = i.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
        };
        var R = k("core.SimpleTimeline", function (t) {
            E.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        (r = R.prototype = new E).constructor = R, r.kill()._gc = !1, r._first = r._last = r._recent = null, r._sortChildren = !1, r.add = r.insert = function (t, e, n, i) {
            var r, a;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = this.rawTime() - (t._timeline.rawTime() - t._pauseTime)), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)
                for (a = t._startTime; r && r._startTime > a;) r = r._prev;
            return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
        }, r._remove = function (t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        }, r.render = function (t, e, n) {
            var i, r = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; r;) i = r._next, (r._active || t >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, n) : r.render((t - r._startTime) * r._timeScale, e, n)), r = i
        }, r.rawTime = function () {
            return _ || g.wake(), this._totalTime
        };
        var M = k("TweenLite", function (t, e, n) {
                if (E.call(this, e, n), this.render = M.prototype.render, null == t) throw "Cannot tween a null target.";
                this.target = t = "string" != typeof t ? t : M.selector(t) || t;
                var i, r, a, s = t.jquery || t.length && t !== h && t[0] && (t[0] === h || t[0].nodeType && t[0].style && !t.nodeType),
                    o = this.vars.overwrite;
                if (this._overwrite = o = null == o ? Z[M.defaultOverwrite] : "number" == typeof o ? o >> 0 : Z[o], (s || t instanceof Array || t.push && b(t)) && "number" != typeof t[0])
                    for (this._targets = a = l(t), this._propLookup = [], this._siblings = [], i = 0; i < a.length; i++)(r = a[i]) ? "string" != typeof r ? r.length && r !== h && r[0] && (r[0] === h || r[0].nodeType && r[0].style && !r.nodeType) ? (a.splice(i--, 1), this._targets = a = a.concat(l(r))) : (this._siblings[i] = et(r, this, !1), 1 === o && 1 < this._siblings[i].length && it(r, this, null, 1, this._siblings[i])) : "string" == typeof (r = a[i--] = M.selector(r)) && a.splice(i + 1, 1) : a.splice(i--, 1);
                else this._propLookup = {}, this._siblings = et(t, this, !1), 1 === o && 1 < this._siblings.length && it(t, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === e && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -y, this.render(Math.min(0, -this._delay)))
            }, !0),
            j = function (t) {
                return t && t.length && t !== h && t[0] && (t[0] === h || t[0].nodeType && t[0].style && !t.nodeType)
            };
        (r = M.prototype = new E).constructor = M, r.kill()._gc = !1, r.ratio = 0, r._firstPT = r._targets = r._overwrittenProps = r._startAt = null, r._notifyPluginsOfEnabled = r._lazy = !1, M.version = "2.1.2", M.defaultEase = r._ease = new S(null, null, 1, 1), M.defaultOverwrite = "auto", M.ticker = g, M.autoSleep = 120, M.lagSmoothing = function (t, e) {
            g.lagSmoothing(t, e)
        }, M.selector = h.$ || h.jQuery || function (t) {
            var e = h.$ || h.jQuery;
            return e ? (M.selector = e)(t) : (i || (i = h.document), i ? i.querySelectorAll ? i.querySelectorAll(t) : i.getElementById("#" === t.charAt(0) ? t.substr(1) : t) : t)
        };
        var L = [],
            z = {},
            q = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            I = /[\+-]=-?[\.\d]/,
            B = function (t) {
                for (var e, n = this._firstPT; n;) e = n.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : n.c * t + n.s, n.m ? e = n.m.call(this._tween, e, this._target || n.t, this._tween) : e < 1e-6 && -1e-6 < e && !n.blob && (e = 0), n.f ? n.fp ? n.t[n.p](n.fp, e) : n.t[n.p](e) : n.t[n.p] = e, n = n._next
            },
            H = function (t) {
                return (1e3 * t | 0) / 1e3 + ""
            },
            X = function (t, e, n, i) {
                var r, a, s, o, l, u, c, f = [],
                    h = 0,
                    p = "",
                    d = 0;
                for (f.start = t, f.end = e, t = f[0] = t + "", e = f[1] = e + "", n && (n(f), t = f[0], e = f[1]), f.length = 0, r = t.match(q) || [], a = e.match(q) || [], i && (i._next = null, i.blob = 1, f._firstPT = f._applyPT = i), l = a.length, o = 0; o < l; o++) c = a[o], p += (u = e.substr(h, e.indexOf(c, h) - h)) || !o ? u : ",", h += u.length, d ? d = (d + 1) % 5 : "rgba(" === u.substr(-5) && (d = 1), c === r[o] || r.length <= o ? p += c : (p && (f.push(p), p = ""), s = parseFloat(r[o]), f.push(s), f._firstPT = {
                    _next: f._firstPT,
                    t: f,
                    p: f.length - 1,
                    s: s,
                    c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - s) || 0,
                    f: 0,
                    m: d && d < 4 ? Math.round : H
                }), h += c.length;
                return (p += e.substr(h)) && f.push(p), f.setRatio = B, I.test(e) && (f.end = null), f
            },
            W = function (t, e, n, i, r, a, s, o, l) {
                "function" == typeof i && (i = i(l || 0, t));
                var u = typeof t[e],
                    c = "function" !== u ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                    f = "get" !== n ? n : c ? s ? t[c](s) : t[c]() : t[e],
                    h = "string" == typeof i && "=" === i.charAt(1),
                    p = {
                        t: t,
                        p: e,
                        s: f,
                        f: "function" === u,
                        pg: 0,
                        n: r || e,
                        m: a ? "function" == typeof a ? a : Math.round : 0,
                        pr: 0,
                        c: h ? parseInt(i.charAt(0) + "1", 10) * parseFloat(i.substr(2)) : parseFloat(i) - f || 0
                    };
                return ("number" != typeof f || "number" != typeof i && !h) && (s || isNaN(f) || !h && isNaN(i) || "boolean" == typeof f || "boolean" == typeof i ? (p.fp = s, p = {
                    t: X(f, h ? parseFloat(p.s) + p.c + (p.s + "").replace(/[0-9\-\.]/g, "") : i, o || M.defaultStringFilter, p),
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 2,
                    pg: 0,
                    n: r || e,
                    pr: 0,
                    m: 0
                }) : (p.s = parseFloat(f), h || (p.c = parseFloat(i) - p.s || 0))), p.c ? ((p._next = this._firstPT) && (p._next._prev = p), this._firstPT = p) : void 0
            },
            $ = M._internals = {
                isArray: b,
                isSelector: j,
                lazyTweens: L,
                blobDif: X
            },
            Y = M._plugins = {},
            V = $.tweenLookup = {},
            U = 0,
            G = $.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1,
                callbackScope: 1,
                stringFilter: 1,
                id: 1,
                yoyoEase: 1,
                stagger: 1
            },
            Z = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                true: 1,
                false: 0
            },
            Q = E._rootFramesTimeline = new R,
            J = E._rootTimeline = new R,
            K = 30,
            tt = $.lazyRender = function () {
                var t, e, n = L.length;
                for (z = {}, t = 0; t < n; t++)(e = L[t]) && !1 !== e._lazy && (e.render(e._lazy[0], e._lazy[1], !0), e._lazy = !1);
                L.length = 0
            };
        J._startTime = g.time, Q._startTime = g.frame, J._active = Q._active = !0, setTimeout(tt, 1), E._updateRoot = M.render = function () {
            var t, e, n;
            if (L.length && tt(), J.render((g.time - J._startTime) * J._timeScale, !1, !1), Q.render((g.frame - Q._startTime) * Q._timeScale, !1, !1), L.length && tt(), g.frame >= K) {
                for (n in K = g.frame + (parseInt(M.autoSleep, 10) || 120), V) {
                    for (t = (e = V[n].tweens).length; - 1 < --t;) e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete V[n]
                }
                if ((!(n = J._first) || n._paused) && M.autoSleep && !Q._first && 1 === g._listeners.tick.length) {
                    for (; n && n._paused;) n = n._next;
                    n || g.sleep()
                }
            }
        }, g.addEventListener("tick", E._updateRoot);
        var et = function (t, e, n) {
                var i, r, a = t._gsTweenID;
                if (V[a || (t._gsTweenID = a = "t" + U++)] || (V[a] = {
                        target: t,
                        tweens: []
                    }), e && ((i = V[a].tweens)[r = i.length] = e, n))
                    for (; - 1 < --r;) i[r] === e && i.splice(r, 1);
                return V[a].tweens
            },
            nt = function (t, e, n, i) {
                var r, a, s = t.vars.onOverwrite;
                return s && (r = s(t, e, n, i)), (s = M.onOverwrite) && (a = s(t, e, n, i)), !1 !== r && !1 !== a
            },
            it = function (t, e, n, i, r) {
                var a, s, o, l;
                if (1 === i || 4 <= i) {
                    for (l = r.length, a = 0; a < l; a++)
                        if ((o = r[a]) !== e) o._gc || o._kill(null, t, e) && (s = !0);
                        else if (5 === i) break;
                    return s
                }
                var u, c = e._startTime + y,
                    f = [],
                    h = 0,
                    p = 0 === e._duration;
                for (a = r.length; - 1 < --a;)(o = r[a]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (u = u || rt(e, 0, p), 0 === rt(o, u, p) && (f[h++] = o)) : o._startTime <= c && o._startTime + o.totalDuration() / o._timeScale > c && ((p || !o._initted) && c - o._startTime <= 2e-8 || (f[h++] = o)));
                for (a = h; - 1 < --a;)
                    if (l = (o = f[a])._firstPT, 2 === i && o._kill(n, t, e) && (s = !0), 2 !== i || !o._firstPT && o._initted && l) {
                        if (2 !== i && !nt(o, e)) continue;
                        o._enabled(!1, !1) && (s = !0)
                    }
                return s
            },
            rt = function (t, e, n) {
                for (var i = t._timeline, r = i._timeScale, a = t._startTime; i._timeline;) {
                    if (a += i._startTime, r *= i._timeScale, i._paused) return -100;
                    i = i._timeline
                }
                return e < (a /= r) ? a - e : n && a === e || !t._initted && a - e < 2e-8 ? y : (a += t.totalDuration() / t._timeScale / r) > e + y ? 0 : a - e - y
            };
        r._init = function () {
            var t, e, n, i, r, a, s = this.vars,
                o = this._overwrittenProps,
                l = this._duration,
                u = !!s.immediateRender,
                c = s.ease,
                f = this._startAt;
            if (s.startAt) {
                for (i in f && (f.render(-1, !0), f.kill()), r = {}, s.startAt) r[i] = s.startAt[i];
                if (r.data = "isStart", r.overwrite = !1, r.immediateRender = !0, r.lazy = u && !1 !== s.lazy, r.startAt = r.delay = null, r.onUpdate = s.onUpdate, r.onUpdateParams = s.onUpdateParams, r.onUpdateScope = s.onUpdateScope || s.callbackScope || this, this._startAt = M.to(this.target || {}, 0, r), u)
                    if (0 < this._time) this._startAt = null;
                    else if (0 !== l) return
            } else if (s.runBackwards && 0 !== l)
                if (f) f.render(-1, !0), f.kill(), this._startAt = null;
                else {
                    for (i in 0 !== this._time && (u = !1), n = {}, s) G[i] && "autoCSS" !== i || (n[i] = s[i]);
                    if (n.overwrite = 0, n.data = "isFromStart", n.lazy = u && !1 !== s.lazy, n.immediateRender = u, this._startAt = M.to(this.target, 0, n), u) {
                        if (0 === this._time) return
                    } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                }
            if (this._ease = c = c ? c instanceof S ? c : "function" == typeof c ? new S(c, s.easeParams) : C[c] || M.defaultEase : M.defaultEase, s.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (a = this._targets.length, t = 0; t < a; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null, t) && (e = !0);
            else e = this._initProps(this.target, this._propLookup, this._siblings, o, 0);
            if (e && M._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards)
                for (n = this._firstPT; n;) n.s += n.c, n.c = -n.c, n = n._next;
            this._onUpdate = s.onUpdate, this._initted = !0
        }, r._initProps = function (t, e, n, i, r) {
            var a, s, o, l, u, c;
            if (null == t) return !1;
            for (a in z[t._gsTweenID] && tt(), this.vars.css || t.style && t !== h && t.nodeType && Y.css && !1 !== this.vars.autoCSS && function (t, e) {
                    var n, i = {};
                    for (n in t) G[n] || n in e && "transform" !== n && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n || !(!Y[n] || Y[n] && Y[n]._autoCSS) || (i[n] = t[n], delete t[n]);
                    t.css = i
                }(this.vars, t), this.vars)
                if (c = this.vars[a], G[a]) c && (c instanceof Array || c.push && b(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[a] = c = this._swapSelfInParams(c, this));
                else if (Y[a] && (l = new Y[a])._onInitTween(t, this.vars[a], this, r)) {
                for (this._firstPT = u = {
                        _next: this._firstPT,
                        t: l,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 1,
                        n: a,
                        pg: 1,
                        pr: l._priority,
                        m: 0
                    }, s = l._overwriteProps.length; - 1 < --s;) e[l._overwriteProps[s]] = this._firstPT;
                (l._priority || l._onInitAllProps) && (o = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), u._next && (u._next._prev = u)
            } else e[a] = W.call(this, t, a, "get", c, a, 0, null, this.vars.stringFilter, r);
            return i && this._kill(i, t) ? this._initProps(t, e, n, i, r) : 1 < this._overwrite && this._firstPT && 1 < n.length && it(t, this, e, this._overwrite, n) ? (this._kill(e, t), this._initProps(t, e, n, i, r)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (z[t._gsTweenID] = !0), o)
        }, r.render = function (t, e, n) {
            var i, r, a, s, o = this,
                l = o._time,
                u = o._duration,
                c = o._rawPrevTime;
            if (u - y <= t && 0 <= t) o._totalTime = o._time = u, o.ratio = o._ease._calcEnd ? o._ease.getRatio(1) : 1, o._reversed || (i = !0, r = "onComplete", n = n || o._timeline.autoRemoveChildren), 0 === u && (o._initted || !o.vars.lazy || n) && (o._startTime === o._timeline._duration && (t = 0), (c < 0 || t <= 0 && -y <= t || c === y && "isPause" !== o.data) && c !== t && (n = !0, y < c && (r = "onReverseComplete")), o._rawPrevTime = s = !e || t || c === t ? t : y);
            else if (t < y) o._totalTime = o._time = 0, o.ratio = o._ease._calcEnd ? o._ease.getRatio(0) : 0, (0 !== l || 0 === u && 0 < c) && (r = "onReverseComplete", i = o._reversed), -y < t ? t = 0 : t < 0 && (o._active = !1, 0 === u && (o._initted || !o.vars.lazy || n) && (0 <= c && (c !== y || "isPause" !== o.data) && (n = !0), o._rawPrevTime = s = !e || t || c === t ? t : y)), (!o._initted || o._startAt && o._startAt.progress()) && (n = !0);
            else if (o._totalTime = o._time = t, o._easeType) {
                var f = t / u,
                    h = o._easeType,
                    p = o._easePower;
                (1 === h || 3 === h && .5 <= f) && (f = 1 - f), 3 === h && (f *= 2), 1 === p ? f *= f : 2 === p ? f *= f * f : 3 === p ? f *= f * f * f : 4 === p && (f *= f * f * f * f), o.ratio = 1 === h ? 1 - f : 2 === h ? f : t / u < .5 ? f / 2 : 1 - f / 2
            } else o.ratio = o._ease.getRatio(t / u);
            if (o._time !== l || n) {
                if (!o._initted) {
                    if (o._init(), !o._initted || o._gc) return;
                    if (!n && o._firstPT && (!1 !== o.vars.lazy && o._duration || o.vars.lazy && !o._duration)) return o._time = o._totalTime = l, o._rawPrevTime = c, L.push(o), void(o._lazy = [t, e]);
                    o._time && !i ? o.ratio = o._ease.getRatio(o._time / u) : i && o._ease._calcEnd && (o.ratio = o._ease.getRatio(0 === o._time ? 0 : 1))
                }
                for (!1 !== o._lazy && (o._lazy = !1), o._active || !o._paused && o._time !== l && 0 <= t && (o._active = !0), 0 === l && (o._startAt && (0 <= t ? o._startAt.render(t, !0, n) : r || (r = "_dummyGS")), o.vars.onStart && (0 !== o._time || 0 === u) && (e || o._callback("onStart"))), a = o._firstPT; a;) a.f ? a.t[a.p](a.c * o.ratio + a.s) : a.t[a.p] = a.c * o.ratio + a.s, a = a._next;
                o._onUpdate && (t < 0 && o._startAt && -1e-4 !== t && o._startAt.render(t, !0, n), e || (o._time !== l || i || n) && o._callback("onUpdate")), r && (!o._gc || n) && (t < 0 && o._startAt && !o._onUpdate && -1e-4 !== t && o._startAt.render(t, !0, n), i && (o._timeline.autoRemoveChildren && o._enabled(!1, !1), o._active = !1), !e && o.vars[r] && o._callback(r), 0 === u && o._rawPrevTime === y && s !== y && (o._rawPrevTime = 0))
            }
        }, r._kill = function (t, e, n) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : M.selector(e) || e;
            var i, r, a, s, o, l, u, c, f, h = n && this._time && n._startTime === this._startTime && this._timeline === n._timeline,
                p = this._firstPT;
            if ((b(e) || j(e)) && "number" != typeof e[0])
                for (i = e.length; - 1 < --i;) this._kill(t, e[i], n) && (l = !0);
            else {
                if (this._targets) {
                    for (i = this._targets.length; - 1 < --i;)
                        if (e === this._targets[i]) {
                            o = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all";
                            break
                        }
                } else {
                    if (e !== this.target) return !1;
                    o = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (o) {
                    if (u = t || o, c = t !== r && "all" !== r && t !== o && ("object" != typeof t || !t._tempKill), n && (M.onOverwrite || this.vars.onOverwrite)) {
                        for (a in u) o[a] && (f || (f = []), f.push(a));
                        if ((f || !t) && !nt(this, n, e, f)) return !1
                    }
                    for (a in u)(s = o[a]) && (h && (s.f ? s.t[s.p](s.s) : s.t[s.p] = s.s, l = !0), s.pg && s.t._kill(u) && (l = !0), s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null), delete o[a]), c && (r[a] = 1);
                    !this._firstPT && this._initted && p && this._enabled(!1, !1)
                }
            }
            return l
        }, r.invalidate = function () {
            this._notifyPluginsOfEnabled && M._onPluginEvent("_onDisable", this);
            var t = this._time;
            return this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], E.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -y, this.render(t, !1, !1 !== this.vars.lazy)), this
        }, r._enabled = function (t, e) {
            if (_ || g.wake(), t && this._gc) {
                var n, i = this._targets;
                if (i)
                    for (n = i.length; - 1 < --n;) this._siblings[n] = et(i[n], this, !0);
                else this._siblings = et(this.target, this, !0)
            }
            return E.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && M._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
        }, M.to = function (t, e, n) {
            return new M(t, e, n)
        }, M.from = function (t, e, n) {
            return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new M(t, e, n)
        }, M.fromTo = function (t, e, n, i) {
            return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, new M(t, e, i)
        }, M.delayedCall = function (t, e, n, i, r) {
            return new M(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: n,
                callbackScope: i,
                onReverseComplete: e,
                onReverseCompleteParams: n,
                immediateRender: !1,
                lazy: !1,
                useFrames: r,
                overwrite: 0
            })
        }, M.set = function (t, e) {
            return new M(t, 0, e)
        }, M.getTweensOf = function (t, e) {
            if (null == t) return [];
            var n, i, r, a;
            if (t = "string" != typeof t ? t : M.selector(t) || t, (b(t) || j(t)) && "number" != typeof t[0]) {
                for (n = t.length, i = []; - 1 < --n;) i = i.concat(M.getTweensOf(t[n], e));
                for (n = i.length; - 1 < --n;)
                    for (a = i[n], r = n; - 1 < --r;) a === i[r] && i.splice(n, 1)
            } else if (t._gsTweenID)
                for (n = (i = et(t).concat()).length; - 1 < --n;)(i[n]._gc || e && !i[n].isActive()) && i.splice(n, 1);
            return i || []
        }, M.killTweensOf = M.killDelayedCallsTo = function (t, e, n) {
            "object" == typeof e && (n = e, e = !1);
            for (var i = M.getTweensOf(t, e), r = i.length; - 1 < --r;) i[r]._kill(n, t)
        };
        var at = k("plugins.TweenPlugin", function (t, e) {
            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = at.prototype
        }, !0);
        if (r = at.prototype, at.version = "1.19.0", at.API = 2, r._firstPT = null, r._addTween = W, r.setRatio = B, r._kill = function (t) {
                var e, n = this._overwriteProps,
                    i = this._firstPT;
                if (null != t[this._propName]) this._overwriteProps = [];
                else
                    for (e = n.length; - 1 < --e;) null != t[n[e]] && n.splice(e, 1);
                for (; i;) null != t[i.n] && (i._next && (i._next._prev = i._prev), i._prev ? (i._prev._next = i._next, i._prev = null) : this._firstPT === i && (this._firstPT = i._next)), i = i._next;
                return !1
            }, r._mod = r._roundProps = function (t) {
                for (var e, n = this._firstPT; n;)(e = t[this._propName] || null != n.n && t[n.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === n.f ? n.t._applyPT.m = e : n.m = e), n = n._next
            }, M._onPluginEvent = function (t, e) {
                var n, i, r, a, s, o = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; o;) {
                        for (s = o._next, i = r; i && i.pr > o.pr;) i = i._next;
                        (o._prev = i ? i._prev : a) ? o._prev._next = o: r = o, (o._next = i) ? i._prev = o : a = o, o = s
                    }
                    o = e._firstPT = r
                }
                for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (n = !0), o = o._next;
                return n
            }, at.activate = function (t) {
                for (var e = t.length; - 1 < --e;) t[e].API === at.API && (Y[(new t[e])._propName] = t[e]);
                return !0
            }, o.plugin = function (t) {
                if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                var e, n = t.propName,
                    i = t.priority || 0,
                    r = t.overwriteProps,
                    a = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_mod",
                        mod: "_mod",
                        initAll: "_onInitAllProps"
                    },
                    s = k("plugins." + n.charAt(0).toUpperCase() + n.substr(1) + "Plugin", function () {
                        at.call(this, n, i), this._overwriteProps = r || []
                    }, !0 === t.global),
                    o = s.prototype = new at(n);
                for (e in (o.constructor = s).API = t.API, a) "function" == typeof t[e] && (o[a[e]] = t[e]);
                return s.version = t.version, at.activate([s]), s
            }, e = h._gsQueue) {
            for (n = 0; n < e.length; n++) e[n]();
            for (r in T) T[r].func || h.console.log("GSAP encountered missing dependency: " + r)
        }
        _ = !1
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"),
    function (d, w) {
        "use strict";

        function o(t) {
            var e = t.length,
                n = gt.type(t);
            return !gt.isWindow(t) && (!(1 !== t.nodeType || !e) || "array" === n || "function" !== n && (0 === e || "number" == typeof e && 0 < e && e - 1 in t))
        }

        function i(t, e, n, i) {
            if (gt.acceptData(t)) {
                var r, a, s = gt.expando,
                    o = "string" == typeof e,
                    l = t.nodeType,
                    u = l ? gt.cache : t,
                    c = l ? t[s] : t[s] && s;
                if (c && u[c] && (i || u[c].data) || !o || n !== w) return c || (l ? t[s] = c = W.pop() || gt.guid++ : c = s), u[c] || (u[c] = {}, l || (u[c].toJSON = gt.noop)), ("object" == typeof e || "function" == typeof e) && (i ? u[c] = gt.extend(u[c], e) : u[c].data = gt.extend(u[c].data, e)), r = u[c], i || (r.data || (r.data = {}), r = r.data), n !== w && (r[gt.camelCase(e)] = n), o ? null == (a = r[e]) && (a = r[gt.camelCase(e)]) : a = r, a
            }
        }

        function n(t, e, n) {
            if (gt.acceptData(t)) {
                var i, r, a, s = t.nodeType,
                    o = s ? gt.cache : t,
                    l = s ? t[gt.expando] : gt.expando;
                if (o[l]) {
                    if (e && (i = n ? o[l] : o[l].data)) {
                        for ((r = 0, a = (e = gt.isArray(e) ? e.concat(gt.map(e, gt.camelCase)) : e in i ? [e] : (e = gt.camelCase(e)) in i ? [e] : e.split(" ")).length); r < a; r++) delete i[e[r]];
                        if (!(n ? u : gt.isEmptyObject)(i)) return
                    }(n || (delete o[l].data, u(o[l]))) && (s ? gt.cleanData([t], !0) : gt.support.deleteExpando || o != o.window ? delete o[l] : o[l] = null)
                }
            }
        }

        function l(t, e, n) {
            if (n === w && 1 === t.nodeType) {
                var i = "data-" + e.replace(dt, "-$1").toLowerCase();
                if ("string" == typeof (n = t.getAttribute(i))) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : pt.test(n) ? gt.parseJSON(n) : n)
                    } catch (t) {}
                    gt.data(t, e, n)
                } else n = w
            }
            return n
        }

        function u(t) {
            var e;
            for (e in t)
                if (("data" !== e || !gt.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
            return !0
        }

        function r() {
            return !0
        }

        function c() {
            return !1
        }

        function e(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function a(t, n, i) {
            if (n = n || 0, gt.isFunction(n)) return gt.grep(t, function (t, e) {
                return !!n.call(t, e, t) === i
            });
            if (n.nodeType) return gt.grep(t, function (t) {
                return t === n === i
            });
            if ("string" == typeof n) {
                var e = gt.grep(t, function (t) {
                    return 1 === t.nodeType
                });
                if (Nt.test(n)) return gt.filter(n, e, !i);
                n = gt.filter(n, e)
            }
            return gt.grep(t, function (t) {
                return 0 <= gt.inArray(t, n) === i
            })
        }

        function m(t) {
            var e = jt.split("|"),
                n = t.createDocumentFragment();
            if (n.createElement)
                for (; e.length;) n.createElement(e.pop());
            return n
        }

        function _(t) {
            var e = t.getAttributeNode("type");
            return t.type = (e && e.specified) + "/" + t.type, t
        }

        function v(t) {
            var e = Ut.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function g(t, e) {
            for (var n, i = 0; null != (n = t[i]); i++) gt._data(n, "globalEval", !e || gt._data(e[i], "globalEval"))
        }

        function f(t, e) {
            if (1 === e.nodeType && gt.hasData(t)) {
                var n, i, r, a = gt._data(t),
                    s = gt._data(e, a),
                    o = a.events;
                if (o)
                    for (n in delete s.handle, s.events = {}, o)
                        for (i = 0, r = o[n].length; i < r; i++) gt.event.add(e, n, o[n][i]);
                s.data && (s.data = gt.extend({}, s.data))
            }
        }

        function h(t, e) {
            var n, i, r;
            if (1 === e.nodeType) {
                if (n = e.nodeName.toLowerCase(), !gt.support.noCloneEvent && e[gt.expando]) {
                    for (r in (i = gt._data(e)).events) gt.removeEvent(e, r, i.handle);
                    e.removeAttribute(gt.expando)
                }
                "script" === n && e.text !== t.text ? (_(e).text = t.text, v(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), gt.support.html5Clone && t.innerHTML && !gt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && $t.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
            }
        }

        function y(t, e) {
            var n, i, r = 0,
                a = t.getElementsByTagName !== w ? t.getElementsByTagName(e || "*") : t.querySelectorAll !== w ? t.querySelectorAll(e || "*") : w;
            if (!a)
                for (a = [], n = t.childNodes || t; null != (i = n[r]); r++) !e || gt.nodeName(i, e) ? a.push(i) : gt.merge(a, y(i, e));
            return e === w || e && gt.nodeName(t, e) ? gt.merge([t], a) : a
        }

        function x(t) {
            $t.test(t.type) && (t.defaultChecked = t.checked)
        }

        function p(t, e) {
            if (e in t) return e;
            for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, r = pe.length; r--;)
                if ((e = pe[r] + n) in t) return e;
            return i
        }

        function b(t, e) {
            return t = e || t, "none" === gt.css(t, "display") || !gt.contains(t.ownerDocument, t)
        }

        function t(t, e) {
            for (var n, i = [], r = 0, a = t.length; r < a; r++)(n = t[r]).style && (i[r] = gt._data(n, "olddisplay"), e ? (i[r] || "none" !== n.style.display || (n.style.display = ""), "" === n.style.display && b(n) && (i[r] = gt._data(n, "olddisplay", S(n.nodeName)))) : i[r] || b(n) || gt._data(n, "olddisplay", gt.css(n, "display")));
            for (r = 0; r < a; r++)(n = t[r]).style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? i[r] || "" : "none"));
            return t
        }

        function s(t, e, n) {
            var i = se.exec(e);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
        }

        function T(t, e, n, i, r) {
            for (var a = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; a < 4; a += 2) "margin" === n && (s += gt.css(t, n + he[a], !0, r)), i ? ("content" === n && (s -= gt.css(t, "padding" + he[a], !0, r)), "margin" !== n && (s -= gt.css(t, "border" + he[a] + "Width", !0, r))) : (s += gt.css(t, "padding" + he[a], !0, r), "padding" !== n && (s += gt.css(t, "border" + he[a] + "Width", !0, r)));
            return s
        }

        function k(t, e, n) {
            var i = !0,
                r = "width" === e ? t.offsetWidth : t.offsetHeight,
                a = Kt(t),
                s = gt.support.boxSizing && "border-box" === gt.css(t, "boxSizing", !1, a);
            if (r <= 0 || null == r) {
                if (((r = Jt(t, e, a)) < 0 || null == r) && (r = t.style[e]), oe.test(r)) return r;
                i = s && (gt.support.boxSizingReliable || r === t.style[e]), r = parseFloat(r) || 0
            }
            return r + T(t, e, n || (s ? "border" : "content"), i, a) + "px"
        }

        function S(t) {
            var e = q,
                n = ue[t];
            return n || ("none" !== (n = C(t, e)) && n || ((e = ((te = (te || gt("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(e.documentElement))[0].contentWindow || te[0].contentDocument).document).write("<!doctype html><html><body>"), e.close(), n = C(t, e), te.detach()), ue[t] = n), n
        }

        function C(t, e) {
            var n = gt(e.createElement(t)).appendTo(e.body),
                i = gt.css(n[0], "display");
            return n.remove(), i
        }

        function P(n, t, i, r) {
            var e;
            if (gt.isArray(t)) gt.each(t, function (t, e) {
                i || me.test(n) ? r(n, e) : P(n + "[" + ("object" == typeof e ? t : "") + "]", e, i, r)
            });
            else if (i || "object" !== gt.type(t)) r(n, t);
            else
                for (e in t) P(n + "[" + e + "]", t[e], i, r)
        }

        function A(a) {
            return function (t, e) {
                "string" != typeof t && (e = t, t = "*");
                var n, i = 0,
                    r = t.toLowerCase().match(tt) || [];
                if (gt.isFunction(e))
                    for (; n = r[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (a[n] = a[n] || []).unshift(e)) : (a[n] = a[n] || []).push(e)
            }
        }

        function F(e, r, a, s) {
            function o(t) {
                var i;
                return l[t] = !0, gt.each(e[t] || [], function (t, e) {
                    var n = e(r, a, s);
                    return "string" != typeof n || u || l[n] ? u ? !(i = n) : w : (r.dataTypes.unshift(n), o(n), !1)
                }), i
            }
            var l = {},
                u = e === Oe;
            return o(r.dataTypes[0]) || !l["*"] && o("*")
        }

        function D(t, e) {
            var n, i, r = gt.ajaxSettings.flatOptions || {};
            for (n in e) e[n] !== w && ((r[n] ? t : i || (i = {}))[n] = e[n]);
            return i && gt.extend(!0, t, i), t
        }

        function O() {
            try {
                return new d.XMLHttpRequest
            } catch (t) {}
        }

        function E() {
            return setTimeout(function () {
                qe = w
            }), qe = gt.now()
        }

        function N(a, t, e) {
            var n, s, o, i, r = 0,
                l = We.length,
                u = gt.Deferred().always(function () {
                    delete c.elem
                }),
                c = function () {
                    if (s) return !1;
                    for (var t = qe || E(), e = Math.max(0, f.startTime + f.duration - t), n = 1 - (e / f.duration || 0), i = 0, r = f.tweens.length; i < r; i++) f.tweens[i].run(n);
                    return u.notifyWith(a, [f, n, e]), n < 1 && r ? e : (u.resolveWith(a, [f]), !1)
                },
                f = u.promise({
                    elem: a,
                    props: gt.extend({}, t),
                    opts: gt.extend(!0, {
                        specialEasing: {}
                    }, e),
                    originalProperties: t,
                    originalOptions: e,
                    startTime: qe || E(),
                    duration: e.duration,
                    tweens: [],
                    createTween: function (t, e) {
                        var n = gt.Tween(a, f.opts, t, e, f.opts.specialEasing[t] || f.opts.easing);
                        return f.tweens.push(n), n
                    },
                    stop: function (t) {
                        var e = 0,
                            n = t ? f.tweens.length : 0;
                        if (s) return this;
                        for (s = !0; e < n; e++) f.tweens[e].run(1);
                        return t ? u.resolveWith(a, [f, t]) : u.rejectWith(a, [f, t]), this
                    }
                }),
                h = f.props;
            for (function (t, e) {
                    var n, i, r, a, s;
                    for (n in t)
                        if (r = e[i = gt.camelCase(n)], a = t[n], gt.isArray(a) && (r = a[1], a = t[n] = a[0]), n !== i && (t[i] = a, delete t[n]), (s = gt.cssHooks[i]) && "expand" in s)
                            for (n in a = s.expand(a), delete t[i], a) n in t || (t[n] = a[n], e[n] = r);
                        else e[i] = r
                }(h, f.opts.specialEasing); r < l; r++)
                if (n = We[r].call(f, a, h, f.opts)) return n;
            return o = f, i = h, gt.each(i, function (t, e) {
                for (var n = ($e[t] || []).concat($e["*"]), i = 0, r = n.length; i < r; i++)
                    if (n[i].call(o, t, e)) return
            }), gt.isFunction(f.opts.start) && f.opts.start.call(a, f), gt.fx.timer(gt.extend(c, {
                elem: a,
                anim: f,
                queue: f.opts.queue
            })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
        }

        function R(t, e, n, i, r) {
            return new R.prototype.init(t, e, n, i, r)
        }

        function M(t, e) {
            var n, i = {
                    height: t
                },
                r = 0;
            for (e = e ? 1 : 0; r < 4; r += 2 - e) i["margin" + (n = he[r])] = i["padding" + n] = t;
            return e && (i.opacity = i.width = t), i
        }

        function j(t) {
            return gt.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
        }
        var L, z, q = d.document,
            I = d.location,
            B = d.jQuery,
            H = d.$,
            X = {},
            W = [],
            $ = "1.9.0",
            Y = W.concat,
            V = W.push,
            U = W.slice,
            G = W.indexOf,
            Z = X.toString,
            Q = X.hasOwnProperty,
            J = $.trim,
            gt = function (t, e) {
                return new gt.fn.init(t, e, L)
            },
            K = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            tt = /\S+/g,
            et = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            nt = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            it = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            rt = /^[\],:{}\s]*$/,
            at = /(?:^|:|,)(?:\s*\[)+/g,
            st = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            ot = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
            lt = /^-ms-/,
            ut = /-([\da-z])/gi,
            ct = function (t, e) {
                return e.toUpperCase()
            },
            ft = function () {
                q.addEventListener ? (q.removeEventListener("DOMContentLoaded", ft, !1), gt.ready()) : "complete" === q.readyState && (q.detachEvent("onreadystatechange", ft), gt.ready())
            };
        gt.fn = gt.prototype = {
            jquery: $,
            constructor: gt,
            init: function (t, e, n) {
                var i, r;
                if (!t) return this;
                if ("string" != typeof t) return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : gt.isFunction(t) ? n.ready(t) : (t.selector !== w && (this.selector = t.selector, this.context = t.context), gt.makeArray(t, this));
                if (!(i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && 3 <= t.length ? [null, t, null] : nt.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof gt ? e[0] : e, gt.merge(this, gt.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : q, !0)), it.test(i[1]) && gt.isPlainObject(e))
                        for (i in e) gt.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                if ((r = q.getElementById(i[2])) && r.parentNode) {
                    if (r.id !== i[2]) return n.find(t);
                    this.length = 1, this[0] = r
                }
                return this.context = q, this.selector = t, this
            },
            selector: "",
            length: 0,
            size: function () {
                return this.length
            },
            toArray: function () {
                return U.call(this)
            },
            get: function (t) {
                return null == t ? this.toArray() : t < 0 ? this[this.length + t] : this[t]
            },
            pushStack: function (t) {
                var e = gt.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function (t, e) {
                return gt.each(this, t, e)
            },
            ready: function (t) {
                return gt.ready.promise().done(t), this
            },
            slice: function () {
                return this.pushStack(U.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            eq: function (t) {
                var e = this.length,
                    n = +t + (t < 0 ? e : 0);
                return this.pushStack(0 <= n && n < e ? [this[n]] : [])
            },
            map: function (n) {
                return this.pushStack(gt.map(this, function (t, e) {
                    return n.call(t, e, t)
                }))
            },
            end: function () {
                return this.prevObject || this.constructor(null)
            },
            push: V,
            sort: [].sort,
            splice: [].splice
        }, gt.fn.init.prototype = gt.fn, gt.extend = gt.fn.extend = function () {
            var t, e, n, i, r, a, s = arguments[0] || {},
                o = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof s && (u = s, s = arguments[1] || {}, o = 2), "object" == typeof s || gt.isFunction(s) || (s = {}), l === o && (s = this, --o); o < l; o++)
                if (null != (t = arguments[o]))
                    for (e in t) n = s[e], s !== (i = t[e]) && (u && i && (gt.isPlainObject(i) || (r = gt.isArray(i))) ? (a = r ? (r = !1, n && gt.isArray(n) ? n : []) : n && gt.isPlainObject(n) ? n : {}, s[e] = gt.extend(u, a, i)) : i !== w && (s[e] = i));
            return s
        }, gt.extend({
            noConflict: function (t) {
                return d.$ === gt && (d.$ = H), t && d.jQuery === gt && (d.jQuery = B), gt
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function (t) {
                t ? gt.readyWait++ : gt.ready(!0)
            },
            ready: function (t) {
                if (!0 === t ? !--gt.readyWait : !gt.isReady) {
                    if (!q.body) return setTimeout(gt.ready);
                    (gt.isReady = !0) !== t && 0 < --gt.readyWait || (z.resolveWith(q, [gt]), gt.fn.trigger && gt(q).trigger("ready").off("ready"))
                }
            },
            isFunction: function (t) {
                return "function" === gt.type(t)
            },
            isArray: Array.isArray || function (t) {
                return "array" === gt.type(t)
            },
            isWindow: function (t) {
                return null != t && t == t.window
            },
            isNumeric: function (t) {
                return !isNaN(parseFloat(t)) && isFinite(t)
            },
            type: function (t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? X[Z.call(t)] || "object" : typeof t
            },
            isPlainObject: function (t) {
                if (!t || "object" !== gt.type(t) || t.nodeType || gt.isWindow(t)) return !1;
                try {
                    if (t.constructor && !Q.call(t, "constructor") && !Q.call(t.constructor.prototype, "isPrototypeOf")) return !1
                } catch (t) {
                    return !1
                }
                var e;
                for (e in t);
                return e === w || Q.call(t, e)
            },
            isEmptyObject: function (t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            error: function (t) {
                throw Error(t)
            },
            parseHTML: function (t, e, n) {
                if (!t || "string" != typeof t) return null;
                "boolean" == typeof e && (n = e, e = !1), e = e || q;
                var i = it.exec(t),
                    r = !n && [];
                return i ? [e.createElement(i[1])] : (i = gt.buildFragment([t], e, r), r && gt(r).remove(), gt.merge([], i.childNodes))
            },
            parseJSON: function (t) {
                return d.JSON && d.JSON.parse ? d.JSON.parse(t) : null === t ? t : "string" == typeof t && (t = gt.trim(t)) && rt.test(t.replace(st, "@").replace(ot, "]").replace(at, "")) ? Function("return " + t)() : (gt.error("Invalid JSON: " + t), w)
            },
            parseXML: function (t) {
                var e;
                if (!t || "string" != typeof t) return null;
                try {
                    d.DOMParser ? e = (new DOMParser).parseFromString(t, "text/xml") : ((e = new ActiveXObject("Microsoft.XMLDOM")).async = "false", e.loadXML(t))
                } catch (t) {
                    e = w
                }
                return e && e.documentElement && !e.getElementsByTagName("parsererror").length || gt.error("Invalid XML: " + t), e
            },
            noop: function () {},
            globalEval: function (t) {
                t && gt.trim(t) && (d.execScript || function (t) {
                    d.eval.call(d, t)
                })(t)
            },
            camelCase: function (t) {
                return t.replace(lt, "ms-").replace(ut, ct)
            },
            nodeName: function (t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function (t, e, n) {
                var i = 0,
                    r = t.length,
                    a = o(t);
                if (n) {
                    if (a)
                        for (; i < r && !1 !== e.apply(t[i], n); i++);
                    else
                        for (i in t)
                            if (!1 === e.apply(t[i], n)) break
                } else if (a)
                    for (; i < r && !1 !== e.call(t[i], i, t[i]); i++);
                else
                    for (i in t)
                        if (!1 === e.call(t[i], i, t[i])) break;
                return t
            },
            trim: J && !J.call("\ufeff ") ? function (t) {
                return null == t ? "" : J.call(t)
            } : function (t) {
                return null == t ? "" : (t + "").replace(et, "")
            },
            makeArray: function (t, e) {
                var n = e || [];
                return null != t && (o(Object(t)) ? gt.merge(n, "string" == typeof t ? [t] : t) : V.call(n, t)), n
            },
            inArray: function (t, e, n) {
                var i;
                if (e) {
                    if (G) return G.call(e, t, n);
                    for (i = e.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                        if (n in e && e[n] === t) return n
                }
                return -1
            },
            merge: function (t, e) {
                var n = e.length,
                    i = t.length,
                    r = 0;
                if ("number" == typeof n)
                    for (; r < n; r++) t[i++] = e[r];
                else
                    for (; e[r] !== w;) t[i++] = e[r++];
                return t.length = i, t
            },
            grep: function (t, e, n) {
                var i = [],
                    r = 0,
                    a = t.length;
                for (n = !!n; r < a; r++) n !== !!e(t[r], r) && i.push(t[r]);
                return i
            },
            map: function (t, e, n) {
                var i, r = 0,
                    a = t.length,
                    s = [];
                if (o(t))
                    for (; r < a; r++) null != (i = e(t[r], r, n)) && (s[s.length] = i);
                else
                    for (r in t) null != (i = e(t[r], r, n)) && (s[s.length] = i);
                return Y.apply([], s)
            },
            guid: 1,
            proxy: function (t, e) {
                var n, i, r;
                return "string" == typeof e && (n = t[e], e = t, t = n), gt.isFunction(t) ? (i = U.call(arguments, 2), (r = function () {
                    return t.apply(e || this, i.concat(U.call(arguments)))
                }).guid = t.guid = t.guid || gt.guid++, r) : w
            },
            access: function (t, e, n, i, r, a, s) {
                var o = 0,
                    l = t.length,
                    u = null == n;
                if ("object" === gt.type(n))
                    for (o in r = !0, n) gt.access(t, e, o, n[o], !0, a, s);
                else if (i !== w && (r = !0, gt.isFunction(i) || (s = !0), u && (e = s ? (e.call(t, i), null) : (u = e, function (t, e, n) {
                        return u.call(gt(t), n)
                    })), e))
                    for (; o < l; o++) e(t[o], n, s ? i : i.call(t[o], o, e(t[o], n)));
                return r ? t : u ? e.call(t) : l ? e(t[0], n) : a
            },
            now: function () {
                return (new Date).getTime()
            }
        }), gt.ready.promise = function (t) {
            if (!z)
                if (z = gt.Deferred(), "complete" === q.readyState) setTimeout(gt.ready);
                else if (q.addEventListener) q.addEventListener("DOMContentLoaded", ft, !1), d.addEventListener("load", gt.ready, !1);
            else {
                q.attachEvent("onreadystatechange", ft), d.attachEvent("onload", gt.ready);
                var n = !1;
                try {
                    n = null == d.frameElement && q.documentElement
                } catch (t) {}
                n && n.doScroll && function e() {
                    if (!gt.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (t) {
                            return setTimeout(e, 50)
                        }
                        gt.ready()
                    }
                }()
            }
            return z.promise(t)
        }, gt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
            X["[object " + e + "]"] = e.toLowerCase()
        }), L = gt(q);
        var ht = {};
        gt.Callbacks = function (r) {
            var t, n;
            r = "string" == typeof r ? ht[r] || (n = ht[t = r] = {}, gt.each(t.match(tt) || [], function (t, e) {
                n[e] = !0
            }), n) : gt.extend({}, r);
            var e, i, a, s, o, l, u = [],
                c = !r.once && [],
                f = function (t) {
                    for (e = r.memory && t, i = !0, l = s || 0, s = 0, o = u.length, a = !0; u && l < o; l++)
                        if (!1 === u[l].apply(t[0], t[1]) && r.stopOnFalse) {
                            e = !1;
                            break
                        }
                    a = !1, u && (c ? c.length && f(c.shift()) : e ? u = [] : h.disable())
                },
                h = {
                    add: function () {
                        if (u) {
                            var t = u.length;
                            (function i(t) {
                                gt.each(t, function (t, e) {
                                    var n = gt.type(e);
                                    "function" === n ? r.unique && h.has(e) || u.push(e) : e && e.length && "string" !== n && i(e)
                                })
                            })(arguments), a ? o = u.length : e && (s = t, f(e))
                        }
                        return this
                    },
                    remove: function () {
                        return u && gt.each(arguments, function (t, e) {
                            for (var n; - 1 < (n = gt.inArray(e, u, n));) u.splice(n, 1), a && (n <= o && o--, n <= l && l--)
                        }), this
                    },
                    has: function (t) {
                        return -1 < gt.inArray(t, u)
                    },
                    empty: function () {
                        return u = [], this
                    },
                    disable: function () {
                        return u = c = e = w, this
                    },
                    disabled: function () {
                        return !u
                    },
                    lock: function () {
                        return c = w, e || h.disable(), this
                    },
                    locked: function () {
                        return !c
                    },
                    fireWith: function (t, e) {
                        return e = [t, (e = e || []).slice ? e.slice() : e], !u || i && !c || (a ? c.push(e) : f(e)), this
                    },
                    fire: function () {
                        return h.fireWith(this, arguments), this
                    },
                    fired: function () {
                        return !!i
                    }
                };
            return h
        }, gt.extend({
            Deferred: function (t) {
                var s = [
                        ["resolve", "done", gt.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", gt.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", gt.Callbacks("memory")]
                    ],
                    r = "pending",
                    o = {
                        state: function () {
                            return r
                        },
                        always: function () {
                            return l.done(arguments).fail(arguments), this
                        },
                        then: function () {
                            var a = arguments;
                            return gt.Deferred(function (r) {
                                gt.each(s, function (t, e) {
                                    var n = e[0],
                                        i = gt.isFunction(a[t]) && a[t];
                                    l[e[1]](function () {
                                        var t = i && i.apply(this, arguments);
                                        t && gt.isFunction(t.promise) ? t.promise().done(r.resolve).fail(r.reject).progress(r.notify) : r[n + "With"](this === o ? r.promise() : this, i ? [t] : arguments)
                                    })
                                }), a = null
                            }).promise()
                        },
                        promise: function (t) {
                            return null != t ? gt.extend(t, o) : o
                        }
                    },
                    l = {};
                return o.pipe = o.then, gt.each(s, function (t, e) {
                    var n = e[2],
                        i = e[3];
                    o[e[1]] = n.add, i && n.add(function () {
                        r = i
                    }, s[1 ^ t][2].disable, s[2][2].lock), l[e[0]] = function () {
                        return l[e[0] + "With"](this === l ? o : this, arguments), this
                    }, l[e[0] + "With"] = n.fireWith
                }), o.promise(l), t && t.call(l, l), l
            },
            when: function (t) {
                var r, e, n, i = 0,
                    a = U.call(arguments),
                    s = a.length,
                    o = 1 !== s || t && gt.isFunction(t.promise) ? s : 0,
                    l = 1 === o ? t : gt.Deferred(),
                    u = function (e, n, i) {
                        return function (t) {
                            n[e] = this, i[e] = 1 < arguments.length ? U.call(arguments) : t, i === r ? l.notifyWith(n, i) : --o || l.resolveWith(n, i)
                        }
                    };
                if (1 < s)
                    for (r = Array(s), e = Array(s), n = Array(s); i < s; i++) a[i] && gt.isFunction(a[i].promise) ? a[i].promise().done(u(i, n, a)).fail(l.reject).progress(u(i, e, r)) : --o;
                return o || l.resolveWith(n, a), l.promise()
            }
        }), gt.support = function () {
            var a, t, e, n, i, r, s, o, l, u, c = q.createElement("div");
            if (c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = c.getElementsByTagName("*"), e = c.getElementsByTagName("a")[0], !t || !e || !t.length) return {};
            i = (n = q.createElement("select")).appendChild(q.createElement("option")), r = c.getElementsByTagName("input")[0], e.style.cssText = "top:1px;float:left;opacity:.5", a = {
                getSetAttribute: "t" !== c.className,
                leadingWhitespace: 3 === c.firstChild.nodeType,
                tbody: !c.getElementsByTagName("tbody").length,
                htmlSerialize: !!c.getElementsByTagName("link").length,
                style: /top/.test(e.getAttribute("style")),
                hrefNormalized: "/a" === e.getAttribute("href"),
                opacity: /^0.5/.test(e.style.opacity),
                cssFloat: !!e.style.cssFloat,
                checkOn: !!r.value,
                optSelected: i.selected,
                enctype: !!q.createElement("form").enctype,
                html5Clone: "<:nav></:nav>" !== q.createElement("nav").cloneNode(!0).outerHTML,
                boxModel: "CSS1Compat" === q.compatMode,
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0,
                boxSizingReliable: !0,
                pixelPosition: !1
            }, r.checked = !0, a.noCloneChecked = r.cloneNode(!0).checked, n.disabled = !0, a.optDisabled = !i.disabled;
            try {
                delete c.test
            } catch (t) {
                a.deleteExpando = !1
            }
            for (u in (r = q.createElement("input")).setAttribute("value", ""), a.input = "" === r.getAttribute("value"), r.value = "t", r.setAttribute("type", "radio"), a.radioValue = "t" === r.value, r.setAttribute("checked", "t"), r.setAttribute("name", "t"), (s = q.createDocumentFragment()).appendChild(r), a.appendChecked = r.checked, a.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, c.attachEvent && (c.attachEvent("onclick", function () {
                    a.noCloneEvent = !1
                }), c.cloneNode(!0).click()), {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) c.setAttribute(o = "on" + u, "t"), a[u + "Bubbles"] = o in d || !1 === c.attributes[o].expando;
            return c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", a.clearCloneStyle = "content-box" === c.style.backgroundClip, gt(function () {
                var t, e, n, i = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                    r = q.getElementsByTagName("body")[0];
                r && ((t = q.createElement("div")).style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", r.appendChild(t).appendChild(c), c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (n = c.getElementsByTagName("td"))[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = 0 === n[0].offsetHeight, n[0].style.display = "", n[1].style.display = "none", a.reliableHiddenOffsets = l && 0 === n[0].offsetHeight, c.innerHTML = "", c.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", a.boxSizing = 4 === c.offsetWidth, a.doesNotIncludeMarginInBodyOffset = 1 !== r.offsetTop, d.getComputedStyle && (a.pixelPosition = "1%" !== (d.getComputedStyle(c, null) || {}).top, a.boxSizingReliable = "4px" === (d.getComputedStyle(c, null) || {
                    width: "4px"
                }).width, (e = c.appendChild(q.createElement("div"))).style.cssText = c.style.cssText = i, e.style.marginRight = e.style.width = "0", c.style.width = "1px", a.reliableMarginRight = !parseFloat((d.getComputedStyle(e, null) || {}).marginRight)), c.style.zoom !== w && (c.innerHTML = "", c.style.cssText = i + "width:1px;padding:1px;display:inline;zoom:1", a.inlineBlockNeedsLayout = 3 === c.offsetWidth, c.style.display = "block", c.innerHTML = "<div></div>", c.firstChild.style.width = "5px", a.shrinkWrapBlocks = 3 !== c.offsetWidth, r.style.zoom = 1), r.removeChild(t), t = c = n = e = null)
            }), t = n = s = i = e = r = null, a
        }();
        var pt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            dt = /([A-Z])/g;
        gt.extend({
            cache: {},
            expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function (t) {
                return !!(t = t.nodeType ? gt.cache[t[gt.expando]] : t[gt.expando]) && !u(t)
            },
            data: function (t, e, n) {
                return i(t, e, n, !1)
            },
            removeData: function (t, e) {
                return n(t, e, !1)
            },
            _data: function (t, e, n) {
                return i(t, e, n, !0)
            },
            _removeData: function (t, e) {
                return n(t, e, !0)
            },
            acceptData: function (t) {
                var e = t.nodeName && gt.noData[t.nodeName.toLowerCase()];
                return !e || !0 !== e && t.getAttribute("classid") === e
            }
        }), gt.fn.extend({
            data: function (e, t) {
                var n, i, r = this[0],
                    a = 0,
                    s = null;
                if (e !== w) return "object" == typeof e ? this.each(function () {
                    gt.data(this, e)
                }) : gt.access(this, function (t) {
                    return t === w ? r ? l(r, e, gt.data(r, e)) : null : (this.each(function () {
                        gt.data(this, e, t)
                    }), w)
                }, null, t, 1 < arguments.length, null, !0);
                if (this.length && (s = gt.data(r), 1 === r.nodeType && !gt._data(r, "parsedAttrs"))) {
                    for (n = r.attributes; n.length > a; a++)(i = n[a].name).indexOf("data-") || (i = gt.camelCase(i.substring(5)), l(r, i, s[i]));
                    gt._data(r, "parsedAttrs", !0)
                }
                return s
            },
            removeData: function (t) {
                return this.each(function () {
                    gt.removeData(this, t)
                })
            }
        }), gt.extend({
            queue: function (t, e, n) {
                var i;
                return t ? (e = (e || "fx") + "queue", i = gt._data(t, e), n && (!i || gt.isArray(n) ? i = gt._data(t, e, gt.makeArray(n)) : i.push(n)), i || []) : w
            },
            dequeue: function (t, e) {
                e = e || "fx";
                var n = gt.queue(t, e),
                    i = n.length,
                    r = n.shift(),
                    a = gt._queueHooks(t, e);
                "inprogress" === r && (r = n.shift(), i--), (a.cur = r) && ("fx" === e && n.unshift("inprogress"), delete a.stop, r.call(t, function () {
                    gt.dequeue(t, e)
                }, a)), !i && a && a.empty.fire()
            },
            _queueHooks: function (t, e) {
                var n = e + "queueHooks";
                return gt._data(t, n) || gt._data(t, n, {
                    empty: gt.Callbacks("once memory").add(function () {
                        gt._removeData(t, e + "queue"), gt._removeData(t, n)
                    })
                })
            }
        }), gt.fn.extend({
            queue: function (e, n) {
                var t = 2;
                return "string" != typeof e && (n = e, e = "fx", t--), t > arguments.length ? gt.queue(this[0], e) : n === w ? this : this.each(function () {
                    var t = gt.queue(this, e, n);
                    gt._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && gt.dequeue(this, e)
                })
            },
            dequeue: function (t) {
                return this.each(function () {
                    gt.dequeue(this, t)
                })
            },
            delay: function (i, t) {
                return i = gt.fx && gt.fx.speeds[i] || i, t = t || "fx", this.queue(t, function (t, e) {
                    var n = setTimeout(t, i);
                    e.stop = function () {
                        clearTimeout(n)
                    }
                })
            },
            clearQueue: function (t) {
                return this.queue(t || "fx", [])
            },
            promise: function (t, e) {
                var n, i = 1,
                    r = gt.Deferred(),
                    a = this,
                    s = this.length,
                    o = function () {
                        --i || r.resolveWith(a, [a])
                    };
                for ("string" != typeof t && (e = t, t = w), t = t || "fx"; s--;)(n = gt._data(a[s], t + "queueHooks")) && n.empty && (i++, n.empty.add(o));
                return o(), r.promise(e)
            }
        });
        var mt, _t, vt = /[\t\r\n]/g,
            yt = /\r/g,
            xt = /^(?:input|select|textarea|button|object)$/i,
            bt = /^(?:a|area)$/i,
            Tt = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
            wt = /^(?:checked|selected)$/i,
            kt = gt.support.getSetAttribute,
            St = gt.support.input;
        gt.fn.extend({
            attr: function (t, e) {
                return gt.access(this, gt.attr, t, e, 1 < arguments.length)
            },
            removeAttr: function (t) {
                return this.each(function () {
                    gt.removeAttr(this, t)
                })
            },
            prop: function (t, e) {
                return gt.access(this, gt.prop, t, e, 1 < arguments.length)
            },
            removeProp: function (t) {
                return t = gt.propFix[t] || t, this.each(function () {
                    try {
                        this[t] = w, delete this[t]
                    } catch (t) {}
                })
            },
            addClass: function (e) {
                var t, n, i, r, a, s = 0,
                    o = this.length,
                    l = "string" == typeof e && e;
                if (gt.isFunction(e)) return this.each(function (t) {
                    gt(this).addClass(e.call(this, t, this.className))
                });
                if (l)
                    for (t = (e || "").match(tt) || []; s < o; s++)
                        if (i = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(vt, " ") : " ")) {
                            for (a = 0; r = t[a++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            n.className = gt.trim(i)
                        }
                return this
            },
            removeClass: function (e) {
                var t, n, i, r, a, s = 0,
                    o = this.length,
                    l = 0 === arguments.length || "string" == typeof e && e;
                if (gt.isFunction(e)) return this.each(function (t) {
                    gt(this).removeClass(e.call(this, t, this.className))
                });
                if (l)
                    for (t = (e || "").match(tt) || []; s < o; s++)
                        if (i = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(vt, " ") : "")) {
                            for (a = 0; r = t[a++];)
                                for (; 0 <= i.indexOf(" " + r + " ");) i = i.replace(" " + r + " ", " ");
                            n.className = e ? gt.trim(i) : ""
                        }
                return this
            },
            toggleClass: function (a, s) {
                var o = typeof a,
                    l = "boolean" == typeof s;
                return gt.isFunction(a) ? this.each(function (t) {
                    gt(this).toggleClass(a.call(this, t, this.className, s), s)
                }) : this.each(function () {
                    if ("string" === o)
                        for (var t, e = 0, n = gt(this), i = s, r = a.match(tt) || []; t = r[e++];) i = l ? i : !n.hasClass(t), n[i ? "addClass" : "removeClass"](t);
                    else("undefined" === o || "boolean" === o) && (this.className && gt._data(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : gt._data(this, "__className__") || "")
                })
            },
            hasClass: function (t) {
                for (var e = " " + t + " ", n = 0, i = this.length; n < i; n++)
                    if (1 === this[n].nodeType && 0 <= (" " + this[n].className + " ").replace(vt, " ").indexOf(e)) return !0;
                return !1
            },
            val: function (i) {
                var r, t, a, e = this[0];
                return arguments.length ? (a = gt.isFunction(i), this.each(function (t) {
                    var e, n = gt(this);
                    1 === this.nodeType && (null == (e = a ? i.call(this, t, n.val()) : i) ? e = "" : "number" == typeof e ? e += "" : gt.isArray(e) && (e = gt.map(e, function (t) {
                        return null == t ? "" : t + ""
                    })), (r = gt.valHooks[this.type] || gt.valHooks[this.nodeName.toLowerCase()]) && "set" in r && r.set(this, e, "value") !== w || (this.value = e))
                })) : e ? (r = gt.valHooks[e.type] || gt.valHooks[e.nodeName.toLowerCase()]) && "get" in r && (t = r.get(e, "value")) !== w ? t : "string" == typeof (t = e.value) ? t.replace(yt, "") : null == t ? "" : t : void 0
            }
        }), gt.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = t.attributes.value;
                        return !e || e.specified ? t.value : t.text
                    }
                },
                select: {
                    get: function (t) {
                        for (var e, n, i = t.options, r = t.selectedIndex, a = "select-one" === t.type || r < 0, s = a ? null : [], o = a ? r + 1 : i.length, l = r < 0 ? o : a ? r : 0; l < o; l++)
                            if (!(!(n = i[l]).selected && l !== r || (gt.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && gt.nodeName(n.parentNode, "optgroup"))) {
                                if (e = gt(n).val(), a) return e;
                                s.push(e)
                            }
                        return s
                    },
                    set: function (t, e) {
                        var n = gt.makeArray(e);
                        return gt(t).find("option").each(function () {
                            this.selected = 0 <= gt.inArray(gt(this).val(), n)
                        }), n.length || (t.selectedIndex = -1), n
                    }
                }
            },
            attr: function (t, e, n) {
                var i, r, a, s = t.nodeType;
                if (t && 3 !== s && 8 !== s && 2 !== s) return t.getAttribute === w ? gt.prop(t, e, n) : ((a = 1 !== s || !gt.isXMLDoc(t)) && (e = e.toLowerCase(), r = gt.attrHooks[e] || (Tt.test(e) ? _t : mt)), n === w ? r && a && "get" in r && null !== (i = r.get(t, e)) ? i : (t.getAttribute !== w && (i = t.getAttribute(e)), null == i ? w : i) : null !== n ? r && a && "set" in r && (i = r.set(t, n, e)) !== w ? i : (t.setAttribute(e, n + ""), n) : (gt.removeAttr(t, e), w))
            },
            removeAttr: function (t, e) {
                var n, i, r = 0,
                    a = e && e.match(tt);
                if (a && 1 === t.nodeType)
                    for (; n = a[r++];) i = gt.propFix[n] || n, Tt.test(n) ? !kt && wt.test(n) ? t[gt.camelCase("default-" + n)] = t[i] = !1 : t[i] = !1 : gt.attr(t, n, ""), t.removeAttribute(kt ? n : i)
            },
            attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!gt.support.radioValue && "radio" === e && gt.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                for: "htmlFor",
                class: "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function (t, e, n) {
                var i, r, a = t.nodeType;
                if (t && 3 !== a && 8 !== a && 2 !== a) return (1 !== a || !gt.isXMLDoc(t)) && (e = gt.propFix[e] || e, r = gt.propHooks[e]), n !== w ? r && "set" in r && (i = r.set(t, n, e)) !== w ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function (t) {
                        var e = t.getAttributeNode("tabindex");
                        return e && e.specified ? parseInt(e.value, 10) : xt.test(t.nodeName) || bt.test(t.nodeName) && t.href ? 0 : w
                    }
                }
            }
        }), _t = {
            get: function (t, e) {
                var n = gt.prop(t, e),
                    i = "boolean" == typeof n && t.getAttribute(e),
                    r = "boolean" == typeof n ? St && kt ? null != i : wt.test(e) ? t[gt.camelCase("default-" + e)] : !!i : t.getAttributeNode(e);
                return r && !1 !== r.value ? e.toLowerCase() : w
            },
            set: function (t, e, n) {
                return !1 === e ? gt.removeAttr(t, n) : St && kt || !wt.test(n) ? t.setAttribute(!kt && gt.propFix[n] || n, n) : t[gt.camelCase("default-" + n)] = t[n] = !0, n
            }
        }, St && kt || (gt.attrHooks.value = {
            get: function (t, e) {
                var n = t.getAttributeNode(e);
                return gt.nodeName(t, "input") ? t.defaultValue : n && n.specified ? n.value : w
            },
            set: function (t, e, n) {
                return gt.nodeName(t, "input") ? (t.defaultValue = e, w) : mt && mt.set(t, e, n)
            }
        }), kt || (mt = gt.valHooks.button = {
            get: function (t, e) {
                var n = t.getAttributeNode(e);
                return n && ("id" === e || "name" === e || "coords" === e ? "" !== n.value : n.specified) ? n.value : w
            },
            set: function (t, e, n) {
                var i = t.getAttributeNode(n);
                return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n) ? e : w
            }
        }, gt.attrHooks.contenteditable = {
            get: mt.get,
            set: function (t, e, n) {
                mt.set(t, "" !== e && e, n)
            }
        }, gt.each(["width", "height"], function (t, n) {
            gt.attrHooks[n] = gt.extend(gt.attrHooks[n], {
                set: function (t, e) {
                    return "" === e ? (t.setAttribute(n, "auto"), e) : w
                }
            })
        })), gt.support.hrefNormalized || (gt.each(["href", "src", "width", "height"], function (t, n) {
            gt.attrHooks[n] = gt.extend(gt.attrHooks[n], {
                get: function (t) {
                    var e = t.getAttribute(n, 2);
                    return null == e ? w : e
                }
            })
        }), gt.each(["href", "src"], function (t, e) {
            gt.propHooks[e] = {
                get: function (t) {
                    return t.getAttribute(e, 4)
                }
            }
        })), gt.support.style || (gt.attrHooks.style = {
            get: function (t) {
                return t.style.cssText || w
            },
            set: function (t, e) {
                return t.style.cssText = e + ""
            }
        }), gt.support.optSelected || (gt.propHooks.selected = gt.extend(gt.propHooks.selected, {
            get: function (t) {
                var e = t.parentNode;
                return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
            }
        })), gt.support.enctype || (gt.propFix.enctype = "encoding"), gt.support.checkOn || gt.each(["radio", "checkbox"], function () {
            gt.valHooks[this] = {
                get: function (t) {
                    return null === t.getAttribute("value") ? "on" : t.value
                }
            }
        }), gt.each(["radio", "checkbox"], function () {
            gt.valHooks[this] = gt.extend(gt.valHooks[this], {
                set: function (t, e) {
                    return gt.isArray(e) ? t.checked = 0 <= gt.inArray(gt(t).val(), e) : w
                }
            })
        });
        var Ct = /^(?:input|select|textarea)$/i,
            Pt = /^key/,
            At = /^(?:mouse|contextmenu)|click/,
            Ft = /^(?:focusinfocus|focusoutblur)$/,
            Dt = /^([^.]*)(?:\.(.+)|)$/;
        gt.event = {
                global: {},
                add: function (t, e, n, i, r) {
                    var a, s, o, l, u, c, f, h, p, d, m, g = 3 !== t.nodeType && 8 !== t.nodeType && gt._data(t);
                    if (g) {
                        for (n.handler && (n = (a = n).handler, r = a.selector), n.guid || (n.guid = gt.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || ((s = g.handle = function (t) {
                                return gt === w || t && gt.event.triggered === t.type ? w : gt.event.dispatch.apply(s.elem, arguments)
                            }).elem = t), u = (e = (e || "").match(tt) || [""]).length; u--;) p = m = (o = Dt.exec(e[u]) || [])[1], d = (o[2] || "").split(".").sort(), f = gt.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, f = gt.event.special[p] || {}, c = gt.extend({
                            type: p,
                            origType: m,
                            data: i,
                            handler: n,
                            guid: n.guid,
                            selector: r,
                            needsContext: r && gt.expr.match.needsContext.test(r),
                            namespace: d.join(".")
                        }, a), (h = l[p]) || ((h = l[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, i, d, s) || (t.addEventListener ? t.addEventListener(p, s, !1) : t.attachEvent && t.attachEvent("on" + p, s))), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, c) : h.push(c), gt.event.global[p] = !0;
                        t = null
                    }
                },
                remove: function (t, e, n, i, r) {
                    var a, s, o, l, u, c, f, h, p, d, m, g = gt.hasData(t) && gt._data(t);
                    if (g && (l = g.events)) {
                        for (u = (e = (e || "").match(tt) || [""]).length; u--;)
                            if (p = m = (o = Dt.exec(e[u]) || [])[1], d = (o[2] || "").split(".").sort(), p) {
                                for (f = gt.event.special[p] || {}, h = l[p = (i ? f.delegateType : f.bindType) || p] || [], o = o[2] && RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = a = h.length; a--;) c = h[a], !r && m !== c.origType || n && n.guid !== c.guid || o && !o.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(a, 1), c.selector && h.delegateCount--, f.remove && f.remove.call(t, c));
                                s && !h.length && (f.teardown && !1 !== f.teardown.call(t, d, g.handle) || gt.removeEvent(t, p, g.handle), delete l[p])
                            } else
                                for (p in l) gt.event.remove(t, p + e[u], n, i, !0);
                        gt.isEmptyObject(l) && (delete g.handle, gt._removeData(t, "events"))
                    }
                },
                trigger: function (t, e, n, i) {
                    var r, a, s, o, l, u, c, f = [n || q],
                        h = t.type || t,
                        p = t.namespace ? t.namespace.split(".") : [];
                    if (a = s = n = n || q, 3 !== n.nodeType && 8 !== n.nodeType && !Ft.test(h + gt.event.triggered) && (0 <= h.indexOf(".") && (h = (p = h.split(".")).shift(), p.sort()), l = h.indexOf(":") < 0 && "on" + h, (t = t[gt.expando] ? t : new gt.Event(h, "object" == typeof t && t)).isTrigger = !0, t.namespace = p.join("."), t.namespace_re = t.namespace ? RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = w, t.target || (t.target = n), e = null == e ? [t] : gt.makeArray(e, [t]), c = gt.event.special[h] || {}, i || !c.trigger || !1 !== c.trigger.apply(n, e))) {
                        if (!i && !c.noBubble && !gt.isWindow(n)) {
                            for (o = c.delegateType || h, Ft.test(o + h) || (a = a.parentNode); a; a = a.parentNode) f.push(a), s = a;
                            s === (n.ownerDocument || q) && f.push(s.defaultView || s.parentWindow || d)
                        }
                        for (r = 0;
                            (a = f[r++]) && !t.isPropagationStopped();) t.type = 1 < r ? o : c.bindType || h, (u = (gt._data(a, "events") || {})[t.type] && gt._data(a, "handle")) && u.apply(a, e), (u = l && a[l]) && gt.acceptData(a) && u.apply && !1 === u.apply(a, e) && t.preventDefault();
                        if (t.type = h, !(i || t.isDefaultPrevented() || c._default && !1 !== c._default.apply(n.ownerDocument, e) || "click" === h && gt.nodeName(n, "a")) && gt.acceptData(n) && l && n[h] && !gt.isWindow(n)) {
                            (s = n[l]) && (n[l] = null), gt.event.triggered = h;
                            try {
                                n[h]()
                            } catch (t) {}
                            gt.event.triggered = w, s && (n[l] = s)
                        }
                        return t.result
                    }
                },
                dispatch: function (t) {
                    t = gt.event.fix(t);
                    var e, n, i, r, a, s = [],
                        o = U.call(arguments),
                        l = (gt._data(this, "events") || {})[t.type] || [],
                        u = gt.event.special[t.type] || {};
                    if ((o[0] = t).delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, t)) {
                        for (s = gt.event.handlers.call(this, t, l), e = 0;
                            (r = s[e++]) && !t.isPropagationStopped();)
                            for (t.currentTarget = r.elem, n = 0;
                                (a = r.handlers[n++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(a.namespace)) && (t.handleObj = a, t.data = a.data, (i = ((gt.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, o)) !== w && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, t), t.result
                    }
                },
                handlers: function (t, e) {
                    var n, i, r, a, s = [],
                        o = e.delegateCount,
                        l = t.target;
                    if (o && l.nodeType && (!t.button || "click" !== t.type))
                        for (; l != this; l = l.parentNode || this)
                            if (!0 !== l.disabled || "click" !== t.type) {
                                for (i = [], n = 0; n < o; n++) i[r = (a = e[n]).selector + " "] === w && (i[r] = a.needsContext ? 0 <= gt(r, this).index(l) : gt.find(r, this, null, [l]).length), i[r] && i.push(a);
                                i.length && s.push({
                                    elem: l,
                                    handlers: i
                                })
                            }
                    return e.length > o && s.push({
                        elem: this,
                        handlers: e.slice(o)
                    }), s
                },
                fix: function (t) {
                    if (t[gt.expando]) return t;
                    var e, n, i = t,
                        r = gt.event.fixHooks[t.type] || {},
                        a = r.props ? this.props.concat(r.props) : this.props;
                    for (t = new gt.Event(i), e = a.length; e--;) t[n = a[e]] = i[n];
                    return t.target || (t.target = i.srcElement || q), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, r.filter ? r.filter(t, i) : t
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function (t, e) {
                        return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function (t, e) {
                        var n, i, r, a = e.button,
                            s = e.fromElement;
                        return null == t.pageX && null != e.clientX && (i = (n = t.target.ownerDocument || q).documentElement, r = n.body, t.pageX = e.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s), t.which || a === w || (t.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), t
                    }
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    click: {
                        trigger: function () {
                            return gt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : w
                        }
                    },
                    focus: {
                        trigger: function () {
                            if (this !== q.activeElement && this.focus) try {
                                return this.focus(), !1
                            } catch (t) {}
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function () {
                            return this === q.activeElement && this.blur ? (this.blur(), !1) : w
                        },
                        delegateType: "focusout"
                    },
                    beforeunload: {
                        postDispatch: function (t) {
                            t.result !== w && (t.originalEvent.returnValue = t.result)
                        }
                    }
                },
                simulate: function (t, e, n, i) {
                    var r = gt.extend(new gt.Event, n, {
                        type: t,
                        isSimulated: !0,
                        originalEvent: {}
                    });
                    i ? gt.event.trigger(r, null, e) : gt.event.dispatch.call(e, r), r.isDefaultPrevented() && n.preventDefault()
                }
            }, gt.removeEvent = q.removeEventListener ? function (t, e, n) {
                t.removeEventListener && t.removeEventListener(e, n, !1)
            } : function (t, e, n) {
                var i = "on" + e;
                t.detachEvent && (t[i] === w && (t[i] = null), t.detachEvent(i, n))
            }, gt.Event = function (t, e) {
                return this instanceof gt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || !1 === t.returnValue || t.getPreventDefault && t.getPreventDefault() ? r : c) : this.type = t, e && gt.extend(this, e), this.timeStamp = t && t.timeStamp || gt.now(), this[gt.expando] = !0, w) : new gt.Event(t, e)
            }, gt.Event.prototype = {
                isDefaultPrevented: c,
                isPropagationStopped: c,
                isImmediatePropagationStopped: c,
                preventDefault: function () {
                    var t = this.originalEvent;
                    this.isDefaultPrevented = r, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
                },
                stopPropagation: function () {
                    var t = this.originalEvent;
                    this.isPropagationStopped = r, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
                },
                stopImmediatePropagation: function () {
                    this.isImmediatePropagationStopped = r, this.stopPropagation()
                }
            }, gt.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }, function (t, r) {
                gt.event.special[t] = {
                    delegateType: r,
                    bindType: r,
                    handle: function (t) {
                        var e, n = t.relatedTarget,
                            i = t.handleObj;
                        return (!n || n !== this && !gt.contains(this, n)) && (t.type = i.origType, e = i.handler.apply(this, arguments), t.type = r), e
                    }
                }
            }), gt.support.submitBubbles || (gt.event.special.submit = {
                setup: function () {
                    return !gt.nodeName(this, "form") && (gt.event.add(this, "click._submit keypress._submit", function (t) {
                        var e = t.target,
                            n = gt.nodeName(e, "input") || gt.nodeName(e, "button") ? e.form : w;
                        n && !gt._data(n, "submitBubbles") && (gt.event.add(n, "submit._submit", function (t) {
                            t._submit_bubble = !0
                        }), gt._data(n, "submitBubbles", !0))
                    }), w)
                },
                postDispatch: function (t) {
                    t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && gt.event.simulate("submit", this.parentNode, t, !0))
                },
                teardown: function () {
                    return !gt.nodeName(this, "form") && (gt.event.remove(this, "._submit"), w)
                }
            }), gt.support.changeBubbles || (gt.event.special.change = {
                setup: function () {
                    return Ct.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (gt.event.add(this, "propertychange._change", function (t) {
                        "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                    }), gt.event.add(this, "click._change", function (t) {
                        this._just_changed && !t.isTrigger && (this._just_changed = !1), gt.event.simulate("change", this, t, !0)
                    })), !1) : (gt.event.add(this, "beforeactivate._change", function (t) {
                        var e = t.target;
                        Ct.test(e.nodeName) && !gt._data(e, "changeBubbles") && (gt.event.add(e, "change._change", function (t) {
                            !this.parentNode || t.isSimulated || t.isTrigger || gt.event.simulate("change", this.parentNode, t, !0)
                        }), gt._data(e, "changeBubbles", !0))
                    }), w)
                },
                handle: function (t) {
                    var e = t.target;
                    return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : w
                },
                teardown: function () {
                    return gt.event.remove(this, "._change"), !Ct.test(this.nodeName)
                }
            }), gt.support.focusinBubbles || gt.each({
                focus: "focusin",
                blur: "focusout"
            }, function (t, e) {
                var n = 0,
                    i = function (t) {
                        gt.event.simulate(e, t.target, gt.event.fix(t), !0)
                    };
                gt.event.special[e] = {
                    setup: function () {
                        0 == n++ && q.addEventListener(t, i, !0)
                    },
                    teardown: function () {
                        0 == --n && q.removeEventListener(t, i, !0)
                    }
                }
            }), gt.fn.extend({
                on: function (t, e, n, i, r) {
                    var a, s;
                    if ("object" == typeof t) {
                        for (s in "string" != typeof e && (n = n || e, e = w), t) this.on(s, e, n, t[s], r);
                        return this
                    }
                    if (null == n && null == i ? (i = e, n = e = w) : null == i && ("string" == typeof e ? (i = n, n = w) : (i = n, n = e, e = w)), !1 === i) i = c;
                    else if (!i) return this;
                    return 1 === r && (a = i, (i = function (t) {
                        return gt().off(t), a.apply(this, arguments)
                    }).guid = a.guid || (a.guid = gt.guid++)), this.each(function () {
                        gt.event.add(this, t, i, n, e)
                    })
                },
                one: function (t, e, n, i) {
                    return this.on(t, e, n, i, 1)
                },
                off: function (t, e, n) {
                    var i, r;
                    if (t && t.preventDefault && t.handleObj) return i = t.handleObj, gt(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                    if ("object" != typeof t) return (!1 === e || "function" == typeof e) && (n = e, e = w), !1 === n && (n = c), this.each(function () {
                        gt.event.remove(this, t, n, e)
                    });
                    for (r in t) this.off(r, e, t[r]);
                    return this
                },
                bind: function (t, e, n) {
                    return this.on(t, null, e, n)
                },
                unbind: function (t, e) {
                    return this.off(t, null, e)
                },
                delegate: function (t, e, n, i) {
                    return this.on(e, t, n, i)
                },
                undelegate: function (t, e, n) {
                    return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
                },
                trigger: function (t, e) {
                    return this.each(function () {
                        gt.event.trigger(t, e, this)
                    })
                },
                triggerHandler: function (t, e) {
                    var n = this[0];
                    return n ? gt.event.trigger(t, e, n, !0) : w
                },
                hover: function (t, e) {
                    return this.mouseenter(t).mouseleave(e || t)
                }
            }), gt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, n) {
                gt.fn[n] = function (t, e) {
                    return 0 < arguments.length ? this.on(n, null, t, e) : this.trigger(n)
                }, Pt.test(n) && (gt.event.fixHooks[n] = gt.event.keyHooks), At.test(n) && (gt.event.fixHooks[n] = gt.event.mouseHooks)
            }),
            function (n, i) {
                function e(t) {
                    return lt.test(t + "")
                }

                function t() {
                    var n, i = [];
                    return n = function (t, e) {
                        return i.push(t += " ") > k.cacheLength && delete n[i.shift()], n[t] = e
                    }
                }

                function l(t) {
                    return t[j] = !0, t
                }

                function r(t) {
                    var e = A.createElement("div");
                    try {
                        return t(e)
                    } catch (t) {
                        return !1
                    } finally {
                        e = null
                    }
                }

                function b(t, e, n, i) {
                    var r, a, s, o, l, u, c, f, h, p;
                    if ((e ? e.ownerDocument || e : L) !== A && P(e), n = n || [], !t || "string" != typeof t) return n;
                    if (1 !== (o = (e = e || A).nodeType) && 9 !== o) return [];
                    if (!D && !i) {
                        if (r = ut.exec(t))
                            if (s = r[1]) {
                                if (9 === o) {
                                    if (!(a = e.getElementById(s)) || !a.parentNode) return n;
                                    if (a.id === s) return n.push(a), n
                                } else if (e.ownerDocument && (a = e.ownerDocument.getElementById(s)) && R(e, a) && a.id === s) return n.push(a), n
                            } else {
                                if (r[2]) return V.apply(n, U.call(e.getElementsByTagName(t), 0)), n;
                                if ((s = r[3]) && z.getByClassName && e.getElementsByClassName) return V.apply(n, U.call(e.getElementsByClassName(s), 0)), n
                            }
                        if (z.qsa && !O.test(t)) {
                            if (c = !0, f = j, h = e, p = 9 === o && t, 1 === o && "object" !== e.nodeName.toLowerCase()) {
                                for (u = d(t), (c = e.getAttribute("id")) ? f = c.replace(ht, "\\$&") : e.setAttribute("id", f), f = "[id='" + f + "'] ", l = u.length; l--;) u[l] = f + m(u[l]);
                                h = ot.test(t) && e.parentNode || e, p = u.join(",")
                            }
                            if (p) try {
                                return V.apply(n, U.call(h.querySelectorAll(p), 0)), n
                            } catch (t) {} finally {
                                c || e.removeAttribute("id")
                            }
                        }
                    }
                    return function (t, e, n, i) {
                        var r, a, s, o, l, u = d(t);
                        if (!i && 1 === u.length) {
                            if (2 < (a = u[0] = u[0].slice(0)).length && "ID" === (s = a[0]).type && 9 === e.nodeType && !D && k.relative[a[1].type]) {
                                if (!(e = k.find.ID(s.matches[0].replace(dt, mt), e)[0])) return n;
                                t = t.slice(a.shift().value.length)
                            }
                            for (r = st.needsContext.test(t) ? -1 : a.length - 1; 0 <= r && (s = a[r], !k.relative[o = s.type]); r--)
                                if ((l = k.find[o]) && (i = l(s.matches[0].replace(dt, mt), ot.test(a[0].type) && e.parentNode || e))) {
                                    if (a.splice(r, 1), !(t = i.length && m(a))) return V.apply(n, U.call(i, 0)), n;
                                    break
                                }
                        }
                        return x(t, u)(i, e, D, n, ot.test(t)), n
                    }(t.replace(et, "$1"), e, n, i)
                }

                function u(t, e) {
                    for (var n = t && e && t.nextSibling; n; n = n.nextSibling)
                        if (n === e) return -1;
                    return t ? 1 : -1
                }

                function a(e) {
                    return function (t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }

                function s(n) {
                    return function (t) {
                        var e = t.nodeName.toLowerCase();
                        return ("input" === e || "button" === e) && t.type === n
                    }
                }

                function o(s) {
                    return l(function (a) {
                        return a = +a, l(function (t, e) {
                            for (var n, i = s([], t.length, a), r = i.length; r--;) t[n = i[r]] && (t[n] = !(e[n] = t[n]))
                        })
                    })
                }

                function d(t, e) {
                    var n, i, r, a, s, o, l, u = H[t + " "];
                    if (u) return e ? 0 : u.slice(0);
                    for (s = t, o = [], l = k.preFilter; s;) {
                        for (a in (!n || (i = nt.exec(s))) && (i && (s = s.slice(i[0].length) || s), o.push(r = [])), n = !1, (i = it.exec(s)) && (n = i.shift(), r.push({
                                value: n,
                                type: i[0].replace(et, " ")
                            }), s = s.slice(n.length)), k.filter) !(i = st[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), r.push({
                            value: n,
                            type: a,
                            matches: i
                        }), s = s.slice(n.length));
                        if (!n) break
                    }
                    return e ? s.length : s ? b.error(t) : H(t, o).slice(0)
                }

                function m(t) {
                    for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
                    return i
                }

                function f(o, t, e) {
                    var l = t.dir,
                        u = e && "parentNode" === t.dir,
                        c = I++;
                    return t.first ? function (t, e, n) {
                        for (; t = t[l];)
                            if (1 === t.nodeType || u) return o(t, e, n)
                    } : function (t, e, n) {
                        var i, r, a, s = q + " " + c;
                        if (n) {
                            for (; t = t[l];)
                                if ((1 === t.nodeType || u) && o(t, e, n)) return !0
                        } else
                            for (; t = t[l];)
                                if (1 === t.nodeType || u)
                                    if ((r = (a = t[j] || (t[j] = {}))[l]) && r[0] === s) {
                                        if (!0 === (i = r[1]) || i === w) return !0 === i
                                    } else if ((r = a[l] = [s])[1] = o(t, e, n) || w, !0 === r[1]) return !0
                    }
                }

                function h(r) {
                    return 1 < r.length ? function (t, e, n) {
                        for (var i = r.length; i--;)
                            if (!r[i](t, e, n)) return !1;
                        return !0
                    } : r[0]
                }

                function T(t, e, n, i, r) {
                    for (var a, s = [], o = 0, l = t.length, u = null != e; o < l; o++)(a = t[o]) && (!n || n(a, i, r)) && (s.push(a), u && e.push(o));
                    return s
                }

                function v(p, d, m, g, _, t) {
                    return g && !g[j] && (g = v(g)), _ && !_[j] && (_ = v(_, t)), l(function (t, e, n, i) {
                        var r, a, s, o = [],
                            l = [],
                            u = e.length,
                            c = t || function (t, e, n) {
                                for (var i = 0, r = e.length; i < r; i++) b(t, e[i], n);
                                return n
                            }(d || "*", n.nodeType ? [n] : n, []),
                            f = !p || !t && d ? c : T(c, o, p, n, i),
                            h = m ? _ || (t ? p : u || g) ? [] : e : f;
                        if (m && m(f, h, n, i), g)
                            for (r = T(h, l), g(r, [], n, i), a = r.length; a--;)(s = r[a]) && (h[l[a]] = !(f[l[a]] = s));
                        if (t) {
                            if (_ || p) {
                                if (_) {
                                    for (r = [], a = h.length; a--;)(s = h[a]) && r.push(f[a] = s);
                                    _(null, h = [], r, i)
                                }
                                for (a = h.length; a--;)(s = h[a]) && -1 < (r = _ ? G.call(t, s) : o[a]) && (t[r] = !(e[r] = s))
                            }
                        } else h = T(h === e ? h.splice(u, h.length) : h), _ ? _(null, e, h, i) : V.apply(e, h)
                    })
                }

                function p(t) {
                    for (var i, e, n, r = t.length, a = k.relative[t[0].type], s = a || k.relative[" "], o = a ? 1 : 0, l = f(function (t) {
                            return t === i
                        }, s, !0), u = f(function (t) {
                            return -1 < G.call(i, t)
                        }, s, !0), c = [function (t, e, n) {
                            return !a && (n || e !== C) || ((i = e).nodeType ? l(t, e, n) : u(t, e, n))
                        }]; o < r; o++)
                        if (e = k.relative[t[o].type]) c = [f(h(c), e)];
                        else {
                            if ((e = k.filter[t[o].type].apply(null, t[o].matches))[j]) {
                                for (n = ++o; n < r && !k.relative[t[n].type]; n++);
                                return v(1 < o && h(c), 1 < o && m(t.slice(0, o - 1)).replace(et, "$1"), e, o < n && p(t.slice(o, n)), n < r && p(t = t.slice(n)), n < r && m(t))
                            }
                            c.push(e)
                        }
                    return h(c)
                }

                function c() {}
                var g, w, k, _, y, x, S, C, P, A, F, D, O, E, N, R, M, j = "sizzle" + -new Date,
                    L = n.document,
                    z = {},
                    q = 0,
                    I = 0,
                    B = t(),
                    H = t(),
                    X = t(),
                    W = typeof i,
                    $ = [],
                    Y = $.pop,
                    V = $.push,
                    U = $.slice,
                    G = $.indexOf || function (t) {
                        for (var e = 0, n = this.length; e < n; e++)
                            if (this[e] === t) return e;
                        return -1
                    },
                    Z = "[\\x20\\t\\r\\n\\f]",
                    Q = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    J = Q.replace("w", "w#"),
                    K = "\\[" + Z + "*(" + Q + ")" + Z + "*(?:([*^$|!~]?=)" + Z + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + J + ")|)|)" + Z + "*\\]",
                    tt = ":(" + Q + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + K.replace(3, 8) + ")*)|.*)\\)|)",
                    et = RegExp("^" + Z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Z + "+$", "g"),
                    nt = RegExp("^" + Z + "*," + Z + "*"),
                    it = RegExp("^" + Z + "*([\\x20\\t\\r\\n\\f>+~])" + Z + "*"),
                    rt = RegExp(tt),
                    at = RegExp("^" + J + "$"),
                    st = {
                        ID: RegExp("^#(" + Q + ")"),
                        CLASS: RegExp("^\\.(" + Q + ")"),
                        NAME: RegExp("^\\[name=['\"]?(" + Q + ")['\"]?\\]"),
                        TAG: RegExp("^(" + Q.replace("w", "w*") + ")"),
                        ATTR: RegExp("^" + K),
                        PSEUDO: RegExp("^" + tt),
                        CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + Z + "*(even|odd|(([+-]|)(\\d*)n|)" + Z + "*(?:([+-]|)" + Z + "*(\\d+)|))" + Z + "*\\)|)", "i"),
                        needsContext: RegExp("^" + Z + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + Z + "*((?:-\\d)?\\d*)" + Z + "*\\)|)(?=[^-]|$)", "i")
                    },
                    ot = /[\x20\t\r\n\f]*[+~]/,
                    lt = /\{\s*\[native code\]\s*\}/,
                    ut = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ct = /^(?:input|select|textarea|button)$/i,
                    ft = /^h\d$/i,
                    ht = /'|\\/g,
                    pt = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                    dt = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                    mt = function (t, e) {
                        var n = "0x" + e - 65536;
                        return n != n ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
                    };
                try {
                    U.call(F.childNodes, 0)[0].nodeType
                } catch (n) {
                    U = function (t) {
                        for (var e, n = []; e = this[t]; t++) n.push(e);
                        return n
                    }
                }
                for (g in y = b.isXML = function (t) {
                        var e = t && (t.ownerDocument || t).documentElement;
                        return !!e && "HTML" !== e.nodeName
                    }, P = b.setDocument = function (t) {
                        var l = t ? t.ownerDocument || t : L;
                        return l !== A && 9 === l.nodeType && l.documentElement && (F = (A = l).documentElement, D = y(l), z.tagNameNoComments = r(function (t) {
                            return t.appendChild(l.createComment("")), !t.getElementsByTagName("*").length
                        }), z.attributes = r(function (t) {
                            t.innerHTML = "<select></select>";
                            var e = typeof t.lastChild.getAttribute("multiple");
                            return "boolean" !== e && "string" !== e
                        }), z.getByClassName = r(function (t) {
                            return t.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !(!t.getElementsByClassName || !t.getElementsByClassName("e").length) && (t.lastChild.className = "e", 2 === t.getElementsByClassName("e").length)
                        }), z.getByName = r(function (t) {
                            t.id = j + 0, t.innerHTML = "<a name='" + j + "'></a><div name='" + j + "'></div>", F.insertBefore(t, F.firstChild);
                            var e = l.getElementsByName && l.getElementsByName(j).length === 2 + l.getElementsByName(j + 0).length;
                            return z.getIdNotName = !l.getElementById(j), F.removeChild(t), e
                        }), k.attrHandle = r(function (t) {
                            return t.innerHTML = "<a href='#'></a>", t.firstChild && typeof t.firstChild.getAttribute !== W && "#" === t.firstChild.getAttribute("href")
                        }) ? {} : {
                            href: function (t) {
                                return t.getAttribute("href", 2)
                            },
                            type: function (t) {
                                return t.getAttribute("type")
                            }
                        }, z.getIdNotName ? (k.find.ID = function (t, e) {
                            if (typeof e.getElementById !== W && !D) {
                                var n = e.getElementById(t);
                                return n && n.parentNode ? [n] : []
                            }
                        }, k.filter.ID = function (t) {
                            var e = t.replace(dt, mt);
                            return function (t) {
                                return t.getAttribute("id") === e
                            }
                        }) : (k.find.ID = function (t, e) {
                            if (typeof e.getElementById !== W && !D) {
                                var n = e.getElementById(t);
                                return n ? n.id === t || typeof n.getAttributeNode !== W && n.getAttributeNode("id").value === t ? [n] : i : []
                            }
                        }, k.filter.ID = function (t) {
                            var n = t.replace(dt, mt);
                            return function (t) {
                                var e = typeof t.getAttributeNode !== W && t.getAttributeNode("id");
                                return e && e.value === n
                            }
                        }), k.find.TAG = z.tagNameNoComments ? function (t, e) {
                            return typeof e.getElementsByTagName !== W ? e.getElementsByTagName(t) : i
                        } : function (t, e) {
                            var n, i = [],
                                r = 0,
                                a = e.getElementsByTagName(t);
                            if ("*" !== t) return a;
                            for (; n = a[r]; r++) 1 === n.nodeType && i.push(n);
                            return i
                        }, k.find.NAME = z.getByName && function (t, e) {
                            return typeof e.getElementsByName !== W ? e.getElementsByName(name) : i
                        }, k.find.CLASS = z.getByClassName && function (t, e) {
                            return typeof e.getElementsByClassName === W || D ? i : e.getElementsByClassName(t)
                        }, E = [], O = [":focus"], (z.qsa = e(l.querySelectorAll)) && (r(function (t) {
                            t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || O.push("\\[" + Z + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), t.querySelectorAll(":checked").length || O.push(":checked")
                        }), r(function (t) {
                            t.innerHTML = "<input type='hidden' i=''/>", t.querySelectorAll("[i^='']").length && O.push("[*^$]=" + Z + "*(?:\"\"|'')"), t.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), O.push(",.*:")
                        })), (z.matchesSelector = e(N = F.matchesSelector || F.mozMatchesSelector || F.webkitMatchesSelector || F.oMatchesSelector || F.msMatchesSelector)) && r(function (t) {
                            z.disconnectedMatch = N.call(t, "div"), N.call(t, "[s!='']:x"), E.push("!=", tt)
                        }), O = RegExp(O.join("|")), E = RegExp(E.join("|")), R = e(F.contains) || F.compareDocumentPosition ? function (t, e) {
                            var n = 9 === t.nodeType ? t.documentElement : t,
                                i = e && e.parentNode;
                            return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                        } : function (t, e) {
                            if (e)
                                for (; e = e.parentNode;)
                                    if (e === t) return !0;
                            return !1
                        }, M = F.compareDocumentPosition ? function (t, e) {
                            var n;
                            return t === e ? (S = !0, 0) : (n = e.compareDocumentPosition && t.compareDocumentPosition && t.compareDocumentPosition(e)) ? 1 & n || t.parentNode && 11 === t.parentNode.nodeType ? t === l || R(L, t) ? -1 : e === l || R(L, e) ? 1 : 0 : 4 & n ? -1 : 1 : t.compareDocumentPosition ? -1 : 1
                        } : function (t, e) {
                            var n, i = 0,
                                r = t.parentNode,
                                a = e.parentNode,
                                s = [t],
                                o = [e];
                            if (t === e) return S = !0, 0;
                            if (t.sourceIndex && e.sourceIndex) return (~e.sourceIndex || 1 << 31) - (R(L, t) && ~t.sourceIndex || 1 << 31);
                            if (!r || !a) return t === l ? -1 : e === l ? 1 : r ? -1 : a ? 1 : 0;
                            if (r === a) return u(t, e);
                            for (n = t; n = n.parentNode;) s.unshift(n);
                            for (n = e; n = n.parentNode;) o.unshift(n);
                            for (; s[i] === o[i];) i++;
                            return i ? u(s[i], o[i]) : s[i] === L ? -1 : o[i] === L ? 1 : 0
                        }, S = !1, [0, 0].sort(M), z.detectDuplicates = S), A
                    }, b.matches = function (t, e) {
                        return b(t, null, null, e)
                    }, b.matchesSelector = function (t, e) {
                        if ((t.ownerDocument || t) !== A && P(t), e = e.replace(pt, "='$1']"), !(!z.matchesSelector || D || E && E.test(e) || O.test(e))) try {
                            var n = N.call(t, e);
                            if (n || z.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                        } catch (t) {}
                        return 0 < b(e, A, null, [t]).length
                    }, b.contains = function (t, e) {
                        return (t.ownerDocument || t) !== A && P(t), R(t, e)
                    }, b.attr = function (t, e) {
                        var n;
                        return (t.ownerDocument || t) !== A && P(t), D || (e = e.toLowerCase()), (n = k.attrHandle[e]) ? n(t) : D || z.attributes ? t.getAttribute(e) : ((n = t.getAttributeNode(e)) || t.getAttribute(e)) && !0 === t[e] ? e : n && n.specified ? n.value : null
                    }, b.error = function (t) {
                        throw Error("Syntax error, unrecognized expression: " + t)
                    }, b.uniqueSort = function (t) {
                        var e, n = [],
                            i = 1,
                            r = 0;
                        if (S = !z.detectDuplicates, t.sort(M), S) {
                            for (; e = t[i]; i++) e === t[i - 1] && (r = n.push(i));
                            for (; r--;) t.splice(n[r], 1)
                        }
                        return t
                    }, _ = b.getText = function (t) {
                        var e, n = "",
                            i = 0,
                            r = t.nodeType;
                        if (r) {
                            if (1 === r || 9 === r || 11 === r) {
                                if ("string" == typeof t.textContent) return t.textContent;
                                for (t = t.firstChild; t; t = t.nextSibling) n += _(t)
                            } else if (3 === r || 4 === r) return t.nodeValue
                        } else
                            for (; e = t[i]; i++) n += _(e);
                        return n
                    }, k = b.selectors = {
                        cacheLength: 50,
                        createPseudo: l,
                        match: st,
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function (t) {
                                return t[1] = t[1].replace(dt, mt), t[3] = (t[4] || t[5] || "").replace(dt, mt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                            },
                            CHILD: function (t) {
                                return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || b.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && b.error(t[0]), t
                            },
                            PSEUDO: function (t) {
                                var e, n = !t[5] && t[2];
                                return st.CHILD.test(t[0]) ? null : (t[4] ? t[2] = t[4] : n && rt.test(n) && (e = d(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function (e) {
                                return "*" === e ? function () {
                                    return !0
                                } : (e = e.replace(dt, mt).toLowerCase(), function (t) {
                                    return t.nodeName && t.nodeName.toLowerCase() === e
                                })
                            },
                            CLASS: function (t) {
                                var e = B[t + " "];
                                return e || (e = RegExp("(^|" + Z + ")" + t + "(" + Z + "|$)")) && B(t, function (t) {
                                    return e.test(t.className || typeof t.getAttribute !== W && t.getAttribute("class") || "")
                                })
                            },
                            ATTR: function (n, i, r) {
                                return function (t) {
                                    var e = b.attr(t, n);
                                    return null == e ? "!=" === i : !i || (e += "", "=" === i ? e === r : "!=" === i ? e !== r : "^=" === i ? r && 0 === e.indexOf(r) : "*=" === i ? r && -1 < e.indexOf(r) : "$=" === i ? r && e.substr(e.length - r.length) === r : "~=" === i ? -1 < (" " + e + " ").indexOf(r) : "|=" === i && (e === r || e.substr(0, r.length + 1) === r + "-"))
                                }
                            },
                            CHILD: function (p, t, e, d, m) {
                                var g = "nth" !== p.slice(0, 3),
                                    _ = "last" !== p.slice(-4),
                                    v = "of-type" === t;
                                return 1 === d && 0 === m ? function (t) {
                                    return !!t.parentNode
                                } : function (t, e, n) {
                                    var i, r, a, s, o, l, u = g !== _ ? "nextSibling" : "previousSibling",
                                        c = t.parentNode,
                                        f = v && t.nodeName.toLowerCase(),
                                        h = !n && !v;
                                    if (c) {
                                        if (g) {
                                            for (; u;) {
                                                for (a = t; a = a[u];)
                                                    if (v ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                                l = u = "only" === p && !l && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (l = [_ ? c.firstChild : c.lastChild], _ && h) {
                                            for (o = (i = (r = c[j] || (c[j] = {}))[p] || [])[0] === q && i[1], s = i[0] === q && i[2], a = o && c.childNodes[o]; a = ++o && a && a[u] || (s = o = 0) || l.pop();)
                                                if (1 === a.nodeType && ++s && a === t) {
                                                    r[p] = [q, o, s];
                                                    break
                                                }
                                        } else if (h && (i = (t[j] || (t[j] = {}))[p]) && i[0] === q) s = i[1];
                                        else
                                            for (;
                                                (a = ++o && a && a[u] || (s = o = 0) || l.pop()) && ((v ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++s || (h && ((a[j] || (a[j] = {}))[p] = [q, s]), a !== t)););
                                        return (s -= m) === d || 0 == s % d && 0 <= s / d
                                    }
                                }
                            },
                            PSEUDO: function (t, a) {
                                var e, s = k.pseudos[t] || k.setFilters[t.toLowerCase()] || b.error("unsupported pseudo: " + t);
                                return s[j] ? s(a) : 1 < s.length ? (e = [t, t, "", a], k.setFilters.hasOwnProperty(t.toLowerCase()) ? l(function (t, e) {
                                    for (var n, i = s(t, a), r = i.length; r--;) t[n = G.call(t, i[r])] = !(e[n] = i[r])
                                }) : function (t) {
                                    return s(t, 0, e)
                                }) : s
                            }
                        },
                        pseudos: {
                            not: l(function (t) {
                                var i = [],
                                    r = [],
                                    o = x(t.replace(et, "$1"));
                                return o[j] ? l(function (t, e, n, i) {
                                    for (var r, a = o(t, null, i, []), s = t.length; s--;)(r = a[s]) && (t[s] = !(e[s] = r))
                                }) : function (t, e, n) {
                                    return i[0] = t, o(i, null, n, r), !r.pop()
                                }
                            }),
                            has: l(function (e) {
                                return function (t) {
                                    return 0 < b(e, t).length
                                }
                            }),
                            contains: l(function (e) {
                                return function (t) {
                                    return -1 < (t.textContent || t.innerText || _(t)).indexOf(e)
                                }
                            }),
                            lang: l(function (n) {
                                return at.test(n || "") || b.error("unsupported lang: " + n), n = n.replace(dt, mt).toLowerCase(),
                                    function (t) {
                                        var e;
                                        do {
                                            if (e = D ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return (e = e.toLowerCase()) === n || 0 === e.indexOf(n + "-")
                                        } while ((t = t.parentNode) && 1 === t.nodeType);
                                        return !1
                                    }
                            }),
                            target: function (t) {
                                var e = n.location && n.location.hash;
                                return e && e.slice(1) === t.id
                            },
                            root: function (t) {
                                return t === F
                            },
                            focus: function (t) {
                                return t === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                            },
                            enabled: function (t) {
                                return !1 === t.disabled
                            },
                            disabled: function (t) {
                                return !0 === t.disabled
                            },
                            checked: function (t) {
                                var e = t.nodeName.toLowerCase();
                                return "input" === e && !!t.checked || "option" === e && !!t.selected
                            },
                            selected: function (t) {
                                return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                            },
                            empty: function (t) {
                                for (t = t.firstChild; t; t = t.nextSibling)
                                    if ("@" < t.nodeName || 3 === t.nodeType || 4 === t.nodeType) return !1;
                                return !0
                            },
                            parent: function (t) {
                                return !k.pseudos.empty(t)
                            },
                            header: function (t) {
                                return ft.test(t.nodeName)
                            },
                            input: function (t) {
                                return ct.test(t.nodeName)
                            },
                            button: function (t) {
                                var e = t.nodeName.toLowerCase();
                                return "input" === e && "button" === t.type || "button" === e
                            },
                            text: function (t) {
                                var e;
                                return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || e.toLowerCase() === t.type)
                            },
                            first: o(function () {
                                return [0]
                            }),
                            last: o(function (t, e) {
                                return [e - 1]
                            }),
                            eq: o(function (t, e, n) {
                                return [n < 0 ? n + e : n]
                            }),
                            even: o(function (t, e) {
                                for (var n = 0; n < e; n += 2) t.push(n);
                                return t
                            }),
                            odd: o(function (t, e) {
                                for (var n = 1; n < e; n += 2) t.push(n);
                                return t
                            }),
                            lt: o(function (t, e, n) {
                                for (var i = n < 0 ? n + e : n; 0 <= --i;) t.push(i);
                                return t
                            }),
                            gt: o(function (t, e, n) {
                                for (var i = n < 0 ? n + e : n; e > ++i;) t.push(i);
                                return t
                            })
                        }
                    }, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) k.pseudos[g] = a(g);
                for (g in {
                        submit: !0,
                        reset: !0
                    }) k.pseudos[g] = s(g);
                x = b.compile = function (t, e) {
                    var n, g, _, v, y, x, i, r = [],
                        a = [],
                        s = X[t + " "];
                    if (!s) {
                        for (e || (e = d(t)), n = e.length; n--;)(s = p(e[n]))[j] ? r.push(s) : a.push(s);
                        s = X(t, (g = a, y = (v = 0) < (_ = r).length, x = 0 < g.length, i = function (t, e, n, i, r) {
                            var a, s, o, l = [],
                                u = 0,
                                c = "0",
                                f = t && [],
                                h = null != r,
                                p = C,
                                d = t || x && k.find.TAG("*", r && e.parentNode || e),
                                m = q += null == p ? 1 : Math.E;
                            for (h && (C = e !== A && e, w = v); null != (a = d[c]); c++) {
                                if (x && a) {
                                    for (s = 0; o = g[s]; s++)
                                        if (o(a, e, n)) {
                                            i.push(a);
                                            break
                                        }
                                    h && (q = m, w = ++v)
                                }
                                y && ((a = !o && a) && u--, t && f.push(a))
                            }
                            if (u += c, y && c !== u) {
                                for (s = 0; o = _[s]; s++) o(f, l, e, n);
                                if (t) {
                                    if (0 < u)
                                        for (; c--;) f[c] || l[c] || (l[c] = Y.call(i));
                                    l = T(l)
                                }
                                V.apply(i, l), h && !t && 0 < l.length && 1 < u + _.length && b.uniqueSort(i)
                            }
                            return h && (q = m, C = p), f
                        }, y ? l(i) : i))
                    }
                    return s
                }, k.pseudos.nth = k.pseudos.eq, k.filters = c.prototype = k.pseudos, k.setFilters = new c, P(), b.attr = gt.attr, gt.find = b, gt.expr = b.selectors, gt.expr[":"] = gt.expr.pseudos, gt.unique = b.uniqueSort, gt.text = b.getText, gt.isXMLDoc = b.isXML, gt.contains = b.contains
            }(d);
        var Ot = /Until$/,
            Et = /^(?:parents|prev(?:Until|All))/,
            Nt = /^.[^:#\[\.,]*$/,
            Rt = gt.expr.match.needsContext,
            Mt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        gt.fn.extend({
            find: function (t) {
                var e, n, i;
                if ("string" != typeof t) return (i = this).pushStack(gt(t).filter(function () {
                    for (e = 0; i.length > e; e++)
                        if (gt.contains(i[e], this)) return !0
                }));
                for (n = [], e = 0; this.length > e; e++) gt.find(t, this[e], n);
                return (n = this.pushStack(gt.unique(n))).selector = (this.selector ? this.selector + " " : "") + t, n
            },
            has: function (t) {
                var e, n = gt(t, this),
                    i = n.length;
                return this.filter(function () {
                    for (e = 0; e < i; e++)
                        if (gt.contains(this, n[e])) return !0
                })
            },
            not: function (t) {
                return this.pushStack(a(this, t, !1))
            },
            filter: function (t) {
                return this.pushStack(a(this, t, !0))
            },
            is: function (t) {
                return !!t && ("string" == typeof t ? Rt.test(t) ? 0 <= gt(t, this.context).index(this[0]) : 0 < gt.filter(t, this).length : 0 < this.filter(t).length)
            },
            closest: function (t, e) {
                for (var n, i = 0, r = this.length, a = [], s = Rt.test(t) || "string" != typeof t ? gt(t, e || this.context) : 0; i < r; i++)
                    for (n = this[i]; n && n.ownerDocument && n !== e && 11 !== n.nodeType;) {
                        if (s ? -1 < s.index(n) : gt.find.matchesSelector(n, t)) {
                            a.push(n);
                            break
                        }
                        n = n.parentNode
                    }
                return this.pushStack(1 < a.length ? gt.unique(a) : a)
            },
            index: function (t) {
                return t ? "string" == typeof t ? gt.inArray(this[0], gt(t)) : gt.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function (t, e) {
                var n = "string" == typeof t ? gt(t, e) : gt.makeArray(t && t.nodeType ? [t] : t),
                    i = gt.merge(this.get(), n);
                return this.pushStack(gt.unique(i))
            },
            addBack: function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), gt.fn.andSelf = gt.fn.addBack, gt.each({
            parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function (t) {
                return gt.dir(t, "parentNode")
            },
            parentsUntil: function (t, e, n) {
                return gt.dir(t, "parentNode", n)
            },
            next: function (t) {
                return e(t, "nextSibling")
            },
            prev: function (t) {
                return e(t, "previousSibling")
            },
            nextAll: function (t) {
                return gt.dir(t, "nextSibling")
            },
            prevAll: function (t) {
                return gt.dir(t, "previousSibling")
            },
            nextUntil: function (t, e, n) {
                return gt.dir(t, "nextSibling", n)
            },
            prevUntil: function (t, e, n) {
                return gt.dir(t, "previousSibling", n)
            },
            siblings: function (t) {
                return gt.sibling((t.parentNode || {}).firstChild, t)
            },
            children: function (t) {
                return gt.sibling(t.firstChild)
            },
            contents: function (t) {
                return gt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : gt.merge([], t.childNodes)
            }
        }, function (i, r) {
            gt.fn[i] = function (t, e) {
                var n = gt.map(this, r, t);
                return Ot.test(i) || (e = t), e && "string" == typeof e && (n = gt.filter(e, n)), n = 1 < this.length && !Mt[i] ? gt.unique(n) : n, 1 < this.length && Et.test(i) && (n = n.reverse()), this.pushStack(n)
            }
        }), gt.extend({
            filter: function (t, e, n) {
                return n && (t = ":not(" + t + ")"), 1 === e.length ? gt.find.matchesSelector(e[0], t) ? [e[0]] : [] : gt.find.matches(t, e)
            },
            dir: function (t, e, n) {
                for (var i = [], r = t[e]; r && 9 !== r.nodeType && (n === w || 1 !== r.nodeType || !gt(r).is(n));) 1 === r.nodeType && i.push(r), r = r[e];
                return i
            },
            sibling: function (t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            }
        });
        var jt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Lt = / jQuery\d+="(?:null|\d+)"/g,
            zt = RegExp("<(?:" + jt + ")[\\s/>]", "i"),
            qt = /^\s+/,
            It = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Bt = /<([\w:]+)/,
            Ht = /<tbody/i,
            Xt = /<|&#?\w+;/,
            Wt = /<(?:script|style|link)/i,
            $t = /^(?:checkbox|radio)$/i,
            Yt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Vt = /^$|\/(?:java|ecma)script/i,
            Ut = /^true\/(.*)/,
            Gt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Zt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: gt.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            Qt = m(q).appendChild(q.createElement("div"));
        Zt.optgroup = Zt.option, Zt.tbody = Zt.tfoot = Zt.colgroup = Zt.caption = Zt.thead, Zt.th = Zt.td, gt.fn.extend({
            text: function (t) {
                return gt.access(this, function (t) {
                    return t === w ? gt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || q).createTextNode(t))
                }, null, t, arguments.length)
            },
            wrapAll: function (e) {
                if (gt.isFunction(e)) return this.each(function (t) {
                    gt(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = gt(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                        for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                        return t
                    }).append(this)
                }
                return this
            },
            wrapInner: function (n) {
                return gt.isFunction(n) ? this.each(function (t) {
                    gt(this).wrapInner(n.call(this, t))
                }) : this.each(function () {
                    var t = gt(this),
                        e = t.contents();
                    e.length ? e.wrapAll(n) : t.append(n)
                })
            },
            wrap: function (e) {
                var n = gt.isFunction(e);
                return this.each(function (t) {
                    gt(this).wrapAll(n ? e.call(this, t) : e)
                })
            },
            unwrap: function () {
                return this.parent().each(function () {
                    gt.nodeName(this, "body") || gt(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function () {
                return this.domManip(arguments, !0, function (t) {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(t)
                })
            },
            prepend: function () {
                return this.domManip(arguments, !0, function (t) {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(t, this.firstChild)
                })
            },
            before: function () {
                return this.domManip(arguments, !1, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function () {
                return this.domManip(arguments, !1, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            remove: function (t, e) {
                for (var n, i = 0; null != (n = this[i]); i++)(!t || 0 < gt.filter(t, [n]).length) && (e || 1 !== n.nodeType || gt.cleanData(y(n)), n.parentNode && (e && gt.contains(n.ownerDocument, n) && g(y(n, "script")), n.parentNode.removeChild(n)));
                return this
            },
            empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && gt.cleanData(y(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                    t.options && gt.nodeName(t, "select") && (t.options.length = 0)
                }
                return this
            },
            clone: function (t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function () {
                    return gt.clone(this, t, e)
                })
            },
            html: function (t) {
                return gt.access(this, function (t) {
                    var e = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (t === w) return 1 === e.nodeType ? e.innerHTML.replace(Lt, "") : w;
                    if (!("string" != typeof t || Wt.test(t) || !gt.support.htmlSerialize && zt.test(t) || !gt.support.leadingWhitespace && qt.test(t) || Zt[(Bt.exec(t) || ["", ""])[1].toLowerCase()])) {
                        t = t.replace(It, "<$1></$2>");
                        try {
                            for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (gt.cleanData(y(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function (t) {
                return gt.isFunction(t) || "string" == typeof t || (t = gt(t).not(this).detach()), this.domManip([t], !0, function (t) {
                    var e = this.nextSibling,
                        n = this.parentNode;
                    (n && 1 === this.nodeType || 11 === this.nodeType) && (gt(this).remove(), e ? e.parentNode.insertBefore(t, e) : n.appendChild(t))
                })
            },
            detach: function (t) {
                return this.remove(t, !0)
            },
            domManip: function (n, i, r) {
                n = Y.apply([], n);
                var t, e, a, s, o, l, u, c, f = 0,
                    h = this.length,
                    p = this,
                    d = h - 1,
                    m = n[0],
                    g = gt.isFunction(m);
                if (g || !(h <= 1 || "string" != typeof m || gt.support.checkClone) && Yt.test(m)) return this.each(function (t) {
                    var e = p.eq(t);
                    g && (n[0] = m.call(this, t, i ? e.html() : w)), e.domManip(n, i, r)
                });
                if (h && (e = (t = gt.buildFragment(n, this[0].ownerDocument, !1, this)).firstChild, 1 === t.childNodes.length && (t = e), e)) {
                    for (i = i && gt.nodeName(e, "tr"), s = (a = gt.map(y(t, "script"), _)).length; f < h; f++) o = t, f !== d && (o = gt.clone(o, !0, !0), s && gt.merge(a, y(o, "script"))), r.call(i && gt.nodeName(this[f], "table") ? (u = this[f], c = "tbody", u.getElementsByTagName(c)[0] || u.appendChild(u.ownerDocument.createElement(c))) : this[f], o, f);
                    if (s)
                        for (l = a[a.length - 1].ownerDocument, gt.map(a, v), f = 0; f < s; f++) o = a[f], Vt.test(o.type || "") && !gt._data(o, "globalEval") && gt.contains(l, o) && (o.src ? gt.ajax({
                            url: o.src,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            throws: !0
                        }) : gt.globalEval((o.text || o.textContent || o.innerHTML || "").replace(Gt, "")));
                    t = e = null
                }
                return this
            }
        }), gt.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (t, s) {
            gt.fn[t] = function (t) {
                for (var e, n = 0, i = [], r = gt(t), a = r.length - 1; n <= a; n++) e = n === a ? this : this.clone(!0), gt(r[n])[s](e), V.apply(i, e.get());
                return this.pushStack(i)
            }
        }), gt.extend({
            clone: function (t, e, n) {
                var i, r, a, s, o, l = gt.contains(t.ownerDocument, t);
                if (gt.support.html5Clone || gt.isXMLDoc(t) || !zt.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (Qt.innerHTML = t.outerHTML, Qt.removeChild(o = Qt.firstChild)), !(gt.support.noCloneEvent && gt.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || gt.isXMLDoc(t)))
                    for (i = y(o), r = y(t), s = 0; null != (a = r[s]); ++s) i[s] && h(a, i[s]);
                if (e)
                    if (n)
                        for (r = r || y(t), i = i || y(o), s = 0; null != (a = r[s]); s++) f(a, i[s]);
                    else f(t, o);
                return 0 < (i = y(o, "script")).length && g(i, !l && y(t, "script")), i = r = a = null, o
            },
            buildFragment: function (t, e, n, i) {
                for (var r, a, s, o, l, u, c, f = t.length, h = m(e), p = [], d = 0; d < f; d++)
                    if ((a = t[d]) || 0 === a)
                        if ("object" === gt.type(a)) gt.merge(p, a.nodeType ? [a] : a);
                        else if (Xt.test(a)) {
                    for (o = o || h.appendChild(e.createElement("div")), s = (Bt.exec(a) || ["", ""])[1].toLowerCase(), l = Zt[s] || Zt._default, o.innerHTML = l[1] + a.replace(It, "<$1></$2>") + l[2], c = l[0]; c--;) o = o.lastChild;
                    if (!gt.support.leadingWhitespace && qt.test(a) && p.push(e.createTextNode(qt.exec(a)[0])), !gt.support.tbody)
                        for (c = (a = "table" !== s || Ht.test(a) ? "<table>" !== l[1] || Ht.test(a) ? 0 : o : o.firstChild) && a.childNodes.length; c--;) gt.nodeName(u = a.childNodes[c], "tbody") && !u.childNodes.length && a.removeChild(u);
                    for (gt.merge(p, o.childNodes), o.textContent = ""; o.firstChild;) o.removeChild(o.firstChild);
                    o = h.lastChild
                } else p.push(e.createTextNode(a));
                for (o && h.removeChild(o), gt.support.appendChecked || gt.grep(y(p, "input"), x), d = 0; a = p[d++];)
                    if ((!i || -1 === gt.inArray(a, i)) && (r = gt.contains(a.ownerDocument, a), o = y(h.appendChild(a), "script"), r && g(o), n))
                        for (c = 0; a = o[c++];) Vt.test(a.type || "") && n.push(a);
                return o = null, h
            },
            cleanData: function (t, e) {
                for (var n, i, r, a, s = 0, o = gt.expando, l = gt.cache, u = gt.support.deleteExpando, c = gt.event.special; null != (r = t[s]); s++)
                    if ((e || gt.acceptData(r)) && (n = (i = r[o]) && l[i])) {
                        if (n.events)
                            for (a in n.events) c[a] ? gt.event.remove(r, a) : gt.removeEvent(r, a, n.handle);
                        l[i] && (delete l[i], u ? delete r[o] : r.removeAttribute !== w ? r.removeAttribute(o) : r[o] = null, W.push(i))
                    }
            }
        });
        var Jt, Kt, te, ee = /alpha\([^)]*\)/i,
            ne = /opacity\s*=\s*([^)]*)/,
            ie = /^(top|right|bottom|left)$/,
            re = /^(none|table(?!-c[ea]).+)/,
            ae = /^margin/,
            se = RegExp("^(" + K + ")(.*)$", "i"),
            oe = RegExp("^(" + K + ")(?!px)[a-z%]+$", "i"),
            le = RegExp("^([+-])=(" + K + ")", "i"),
            ue = {
                BODY: "block"
            },
            ce = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            fe = {
                letterSpacing: 0,
                fontWeight: 400
            },
            he = ["Top", "Right", "Bottom", "Left"],
            pe = ["Webkit", "O", "Moz", "ms"];
        gt.fn.extend({
            css: function (t, e) {
                return gt.access(this, function (t, e, n) {
                    var i, r, a = {},
                        s = 0;
                    if (gt.isArray(e)) {
                        for (i = Kt(t), r = e.length; s < r; s++) a[e[s]] = gt.css(t, e[s], !1, i);
                        return a
                    }
                    return n !== w ? gt.style(t, e, n) : gt.css(t, e)
                }, t, e, 1 < arguments.length)
            },
            show: function () {
                return t(this, !0)
            },
            hide: function () {
                return t(this)
            },
            toggle: function (t) {
                var e = "boolean" == typeof t;
                return this.each(function () {
                    (e ? t : b(this)) ? gt(this).show(): gt(this).hide()
                })
            }
        }), gt.extend({
            cssHooks: {
                opacity: {
                    get: function (t, e) {
                        if (e) {
                            var n = Jt(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: gt.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function (t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, a, s, o = gt.camelCase(e),
                        l = t.style;
                    if (e = gt.cssProps[o] || (gt.cssProps[o] = p(l, o)), s = gt.cssHooks[e] || gt.cssHooks[o], n === w) return s && "get" in s && (r = s.get(t, !1, i)) !== w ? r : l[e];
                    if ("string" == (a = typeof n) && (r = le.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(gt.css(t, e)), a = "number"), !(null == n || "number" === a && isNaN(n) || ("number" !== a || gt.cssNumber[o] || (n += "px"), gt.support.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && (n = s.set(t, n, i)) === w))) try {
                        l[e] = n
                    } catch (t) {}
                }
            },
            css: function (t, e, n, i) {
                var r, a, s, o = gt.camelCase(e);
                return e = gt.cssProps[o] || (gt.cssProps[o] = p(t.style, o)), (s = gt.cssHooks[e] || gt.cssHooks[o]) && "get" in s && (r = s.get(t, !0, n)), r === w && (r = Jt(t, e, i)), "normal" === r && e in fe && (r = fe[e]), n ? (a = parseFloat(r), !0 === n || gt.isNumeric(a) ? a || 0 : r) : r
            },
            swap: function (t, e, n, i) {
                var r, a, s = {};
                for (a in e) s[a] = t.style[a], t.style[a] = e[a];
                for (a in r = n.apply(t, i || []), e) t.style[a] = s[a];
                return r
            }
        }), d.getComputedStyle ? (Kt = function (t) {
            return d.getComputedStyle(t, null)
        }, Jt = function (t, e, n) {
            var i, r, a, s = n || Kt(t),
                o = s ? s.getPropertyValue(e) || s[e] : w,
                l = t.style;
            return s && ("" !== o || gt.contains(t.ownerDocument, t) || (o = gt.style(t, e)), oe.test(o) && ae.test(e) && (i = l.width, r = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = o, o = s.width, l.width = i, l.minWidth = r, l.maxWidth = a)), o
        }) : q.documentElement.currentStyle && (Kt = function (t) {
            return t.currentStyle
        }, Jt = function (t, e, n) {
            var i, r, a, s = n || Kt(t),
                o = s ? s[e] : w,
                l = t.style;
            return null == o && l && l[e] && (o = l[e]), oe.test(o) && !ie.test(e) && (i = l.left, (a = (r = t.runtimeStyle) && r.left) && (r.left = t.currentStyle.left), l.left = "fontSize" === e ? "1em" : o, o = l.pixelLeft + "px", l.left = i, a && (r.left = a)), "" === o ? "auto" : o
        }), gt.each(["height", "width"], function (t, r) {
            gt.cssHooks[r] = {
                get: function (t, e, n) {
                    return e ? 0 === t.offsetWidth && re.test(gt.css(t, "display")) ? gt.swap(t, ce, function () {
                        return k(t, r, n)
                    }) : k(t, r, n) : w
                },
                set: function (t, e, n) {
                    var i = n && Kt(t);
                    return s(0, e, n ? T(t, r, n, gt.support.boxSizing && "border-box" === gt.css(t, "boxSizing", !1, i), i) : 0)
                }
            }
        }), gt.support.opacity || (gt.cssHooks.opacity = {
            get: function (t, e) {
                return ne.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
            },
            set: function (t, e) {
                var n = t.style,
                    i = t.currentStyle,
                    r = gt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                    a = i && i.filter || n.filter || "";
                ((n.zoom = 1) <= e || "" === e) && "" === gt.trim(a.replace(ee, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = ee.test(a) ? a.replace(ee, r) : a + " " + r)
            }
        }), gt(function () {
            gt.support.reliableMarginRight || (gt.cssHooks.marginRight = {
                get: function (t, e) {
                    return e ? gt.swap(t, {
                        display: "inline-block"
                    }, Jt, [t, "marginRight"]) : w
                }
            }), !gt.support.pixelPosition && gt.fn.position && gt.each(["top", "left"], function (t, n) {
                gt.cssHooks[n] = {
                    get: function (t, e) {
                        return e ? (e = Jt(t, n), oe.test(e) ? gt(t).position()[n] + "px" : e) : w
                    }
                }
            })
        }), gt.expr && gt.expr.filters && (gt.expr.filters.hidden = function (t) {
            return 0 === t.offsetWidth && 0 === t.offsetHeight || !gt.support.reliableHiddenOffsets && "none" === (t.style && t.style.display || gt.css(t, "display"))
        }, gt.expr.filters.visible = function (t) {
            return !gt.expr.filters.hidden(t)
        }), gt.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (r, a) {
            gt.cssHooks[r + a] = {
                expand: function (t) {
                    for (var e = 0, n = {}, i = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) n[r + he[e] + a] = i[e] || i[e - 2] || i[0];
                    return n
                }
            }, ae.test(r) || (gt.cssHooks[r + a].set = s)
        });
        var de = /%20/g,
            me = /\[\]$/,
            ge = /\r?\n/g,
            _e = /^(?:submit|button|image|reset)$/i,
            ve = /^(?:input|select|textarea|keygen)/i;
        gt.fn.extend({
            serialize: function () {
                return gt.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var t = gt.prop(this, "elements");
                    return t ? gt.makeArray(t) : this
                }).filter(function () {
                    var t = this.type;
                    return this.name && !gt(this).is(":disabled") && ve.test(this.nodeName) && !_e.test(t) && (this.checked || !$t.test(t))
                }).map(function (t, e) {
                    var n = gt(this).val();
                    return null == n ? null : gt.isArray(n) ? gt.map(n, function (t) {
                        return {
                            name: e.name,
                            value: t.replace(ge, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(ge, "\r\n")
                    }
                }).get()
            }
        }), gt.param = function (t, e) {
            var n, i = [],
                r = function (t, e) {
                    e = gt.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (e === w && (e = gt.ajaxSettings && gt.ajaxSettings.traditional), gt.isArray(t) || t.jquery && !gt.isPlainObject(t)) gt.each(t, function () {
                r(this.name, this.value)
            });
            else
                for (n in t) P(n, t[n], e, r);
            return i.join("&").replace(de, "+")
        };
        var ye, xe, be = gt.now(),
            Te = /\?/,
            we = /#.*$/,
            ke = /([?&])_=[^&]*/,
            Se = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Ce = /^(?:GET|HEAD)$/,
            Pe = /^\/\//,
            Ae = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            Fe = gt.fn.load,
            De = {},
            Oe = {},
            Ee = "*/".concat("*");
        try {
            xe = I.href
        } catch (d) {
            (xe = q.createElement("a")).href = "", xe = xe.href
        }
        ye = Ae.exec(xe.toLowerCase()) || [], gt.fn.load = function (t, e, n) {
            if ("string" != typeof t && Fe) return Fe.apply(this, arguments);
            var i, r, a, s = this,
                o = t.indexOf(" ");
            return 0 <= o && (i = t.slice(o, t.length), t = t.slice(0, o)), gt.isFunction(e) ? (n = e, e = w) : e && "object" == typeof e && (r = "POST"), 0 < s.length && gt.ajax({
                url: t,
                type: r,
                dataType: "html",
                data: e
            }).done(function (t) {
                a = arguments, s.html(i ? gt("<div>").append(gt.parseHTML(t)).find(i) : t)
            }).complete(n && function (t, e) {
                s.each(n, a || [t.responseText, e, t])
            }), this
        }, gt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
            gt.fn[e] = function (t) {
                return this.on(e, t)
            }
        }), gt.each(["get", "post"], function (t, r) {
            gt[r] = function (t, e, n, i) {
                return gt.isFunction(e) && (i = i || n, n = e, e = w), gt.ajax({
                    url: t,
                    type: r,
                    dataType: i,
                    data: e,
                    success: n
                })
            }
        }), gt.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: xe,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ye[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ee,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText"
                },
                converters: {
                    "* text": d.String,
                    "text html": !0,
                    "text json": gt.parseJSON,
                    "text xml": gt.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (t, e) {
                return e ? D(D(t, gt.ajaxSettings), e) : D(gt.ajaxSettings, t)
            },
            ajaxPrefilter: A(De),
            ajaxTransport: A(Oe),
            ajax: function (t, e) {
                function n(t, e, n, i) {
                    var r, a, s, o, l, u = e;
                    2 !== b && (b = 2, p && clearTimeout(p), c = w, h = i || "", T.readyState = 0 < t ? 4 : 0, n && (o = function (t, e, n) {
                        var i, r, a, s, o = t.contents,
                            l = t.dataTypes,
                            u = t.responseFields;
                        for (r in u) r in n && (e[u[r]] = n[r]);
                        for (;
                            "*" === l[0];) l.shift(), i === w && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                        if (i)
                            for (r in o)
                                if (o[r] && o[r].test(i)) {
                                    l.unshift(r);
                                    break
                                }
                        if (l[0] in n) a = l[0];
                        else {
                            for (r in n) {
                                if (!l[0] || t.converters[r + " " + l[0]]) {
                                    a = r;
                                    break
                                }
                                s || (s = r)
                            }
                            a = a || s
                        }
                        return a ? (a !== l[0] && l.unshift(a), n[a]) : w
                    }(m, T, n)), 200 <= t && t < 300 || 304 === t ? (m.ifModified && ((l = T.getResponseHeader("Last-Modified")) && (gt.lastModified[f] = l), (l = T.getResponseHeader("etag")) && (gt.etag[f] = l)), 304 === t ? (r = !0, u = "notmodified") : (u = (r = function (t, e) {
                        var n, i, r, a, s = {},
                            o = 0,
                            l = t.dataTypes.slice(),
                            u = l[0];
                        if (t.dataFilter && (e = t.dataFilter(e, t.dataType)), l[1])
                            for (n in t.converters) s[n.toLowerCase()] = t.converters[n];
                        for (; r = l[++o];)
                            if ("*" !== r) {
                                if ("*" !== u && u !== r) {
                                    if (!(n = s[u + " " + r] || s["* " + r]))
                                        for (i in s)
                                            if ((a = i.split(" "))[1] === r && (n = s[u + " " + a[0]] || s["* " + a[0]])) {
                                                !0 === n ? n = s[i] : !0 !== s[i] && (r = a[0], l.splice(o--, 0, r));
                                                break
                                            }
                                    if (!0 !== n)
                                        if (n && t.throws) e = n(e);
                                        else try {
                                            e = n(e)
                                        } catch (t) {
                                            return {
                                                state: "parsererror",
                                                error: n ? t : "No conversion from " + u + " to " + r
                                            }
                                        }
                                }
                                u = r
                            }
                        return {
                            state: "success",
                            data: e
                        }
                    }(m, o)).state, a = r.data, r = !(s = r.error))) : (s = u, (t || !u) && (u = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (e || u) + "", r ? v.resolveWith(g, [a, u, T]) : v.rejectWith(g, [T, u, s]), T.statusCode(x), x = w, d && _.trigger(r ? "ajaxSuccess" : "ajaxError", [T, m, r ? a : s]), y.fireWith(g, [T, u]), d && (_.trigger("ajaxComplete", [T, m]), --gt.active || gt.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (e = t, t = w), e = e || {};
                var c, f, h, i, p, r, d, a, m = gt.ajaxSetup({}, e),
                    g = m.context || m,
                    _ = m.context && (g.nodeType || g.jquery) ? gt(g) : gt.event,
                    v = gt.Deferred(),
                    y = gt.Callbacks("once memory"),
                    x = m.statusCode || {},
                    s = {},
                    o = {},
                    b = 0,
                    l = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function (t) {
                            var e;
                            if (2 === b) {
                                if (!i)
                                    for (i = {}; e = Se.exec(h);) i[e[1].toLowerCase()] = e[2];
                                e = i[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function () {
                            return 2 === b ? h : null
                        },
                        setRequestHeader: function (t, e) {
                            var n = t.toLowerCase();
                            return b || (t = o[n] = o[n] || t, s[t] = e), this
                        },
                        overrideMimeType: function (t) {
                            return b || (m.mimeType = t), this
                        },
                        statusCode: function (t) {
                            var e;
                            if (t)
                                if (b < 2)
                                    for (e in t) x[e] = [x[e], t[e]];
                                else T.always(t[T.status]);
                            return this
                        },
                        abort: function (t) {
                            var e = t || l;
                            return c && c.abort(e), n(0, e), this
                        }
                    };
                if (v.promise(T).complete = y.add, T.success = T.done, T.error = T.fail, m.url = ((t || m.url || xe) + "").replace(we, "").replace(Pe, ye[1] + "//"), m.type = e.method || e.type || m.method || m.type, m.dataTypes = gt.trim(m.dataType || "*").toLowerCase().match(tt) || [""], null == m.crossDomain && (r = Ae.exec(m.url.toLowerCase()), m.crossDomain = !(!r || r[1] === ye[1] && r[2] === ye[2] && (r[3] || ("http:" === r[1] ? 80 : 443)) == (ye[3] || ("http:" === ye[1] ? 80 : 443)))), m.data && m.processData && "string" != typeof m.data && (m.data = gt.param(m.data, m.traditional)), F(De, m, e, T), 2 === b) return T;
                for (a in (d = m.global) && 0 == gt.active++ && gt.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Ce.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (Te.test(f) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (m.url = ke.test(f) ? f.replace(ke, "$1_=" + be++) : f + (Te.test(f) ? "&" : "?") + "_=" + be++)), m.ifModified && (gt.lastModified[f] && T.setRequestHeader("If-Modified-Since", gt.lastModified[f]), gt.etag[f] && T.setRequestHeader("If-None-Match", gt.etag[f])), (m.data && m.hasContent && !1 !== m.contentType || e.contentType) && T.setRequestHeader("Content-Type", m.contentType), T.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Ee + "; q=0.01" : "") : m.accepts["*"]), m.headers) T.setRequestHeader(a, m.headers[a]);
                if (m.beforeSend && (!1 === m.beforeSend.call(g, T, m) || 2 === b)) return T.abort();
                for (a in l = "abort", {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) T[a](m[a]);
                if (c = F(Oe, m, e, T)) {
                    T.readyState = 1, d && _.trigger("ajaxSend", [T, m]), m.async && 0 < m.timeout && (p = setTimeout(function () {
                        T.abort("timeout")
                    }, m.timeout));
                    try {
                        b = 1, c.send(s, n)
                    } catch (t) {
                        if (!(b < 2)) throw t;
                        n(-1, t)
                    }
                } else n(-1, "No Transport");
                return T
            },
            getScript: function (t, e) {
                return gt.get(t, w, e, "script")
            },
            getJSON: function (t, e, n) {
                return gt.get(t, e, n, "json")
            }
        }), gt.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function (t) {
                    return gt.globalEval(t), t
                }
            }
        }), gt.ajaxPrefilter("script", function (t) {
            t.cache === w && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
        }), gt.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var i, r = q.head || gt("head")[0] || q.documentElement;
                return {
                    send: function (t, n) {
                        (i = q.createElement("script")).async = !0, e.scriptCharset && (i.charset = e.scriptCharset), i.src = e.url, i.onload = i.onreadystatechange = function (t, e) {
                            (e || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), i = null, e || n(200, "success"))
                        }, r.insertBefore(i, r.firstChild)
                    },
                    abort: function () {
                        i && i.onload(w, !0)
                    }
                }
            }
        });
        var Ne = [],
            Re = /(=)\?(?=&|$)|\?\?/;
        gt.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var t = Ne.pop() || gt.expando + "_" + be++;
                return this[t] = !0, t
            }
        }), gt.ajaxPrefilter("json jsonp", function (t, e, n) {
            var i, r, a, s = !1 !== t.jsonp && (Re.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Re.test(t.data) && "data");
            return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = gt.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Re, "$1" + i) : !1 !== t.jsonp && (t.url += (Te.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
                return a || gt.error(i + " was not called"), a[0]
            }, t.dataTypes[0] = "json", r = d[i], d[i] = function () {
                a = arguments
            }, n.always(function () {
                d[i] = r, t[i] && (t.jsonpCallback = e.jsonpCallback, Ne.push(i)), a && gt.isFunction(r) && r(a[0]), a = r = w
            }), "script") : w
        });
        var Me, je, Le = 0,
            ze = d.ActiveXObject && function () {
                var t;
                for (t in Me) Me[t](w, !0)
            };
        gt.ajaxSettings.xhr = d.ActiveXObject ? function () {
            return !this.isLocal && O() || function () {
                try {
                    return new d.ActiveXObject("Microsoft.XMLHTTP")
                } catch (t) {}
            }()
        } : O, je = gt.ajaxSettings.xhr(), gt.support.cors = !!je && "withCredentials" in je, (je = gt.support.ajax = !!je) && gt.ajaxTransport(function (c) {
            var f;
            if (!c.crossDomain || gt.support.cors) return {
                send: function (t, o) {
                    var l, e, u = c.xhr();
                    if (c.username ? u.open(c.type, c.url, c.async, c.username, c.password) : u.open(c.type, c.url, c.async), c.xhrFields)
                        for (e in c.xhrFields) u[e] = c.xhrFields[e];
                    c.mimeType && u.overrideMimeType && u.overrideMimeType(c.mimeType), c.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (e in t) u.setRequestHeader(e, t[e])
                    } catch (t) {}
                    u.send(c.hasContent && c.data || null), f = function (t, e) {
                        var n, i, r, a, s;
                        try {
                            if (f && (e || 4 === u.readyState))
                                if (f = w, l && (u.onreadystatechange = gt.noop, ze && delete Me[l]), e) 4 !== u.readyState && u.abort();
                                else {
                                    a = {}, n = u.status, s = u.responseXML, r = u.getAllResponseHeaders(), s && s.documentElement && (a.xml = s), "string" == typeof u.responseText && (a.text = u.responseText);
                                    try {
                                        i = u.statusText
                                    } catch (t) {
                                        i = ""
                                    }
                                    n || !c.isLocal || c.crossDomain ? 1223 === n && (n = 204) : n = a.text ? 200 : 404
                                }
                        } catch (t) {
                            e || o(-1, t)
                        }
                        a && o(n, i, a, r)
                    }, c.async ? 4 === u.readyState ? setTimeout(f) : (l = ++Le, ze && (Me || (Me = {}, gt(d).unload(ze)), Me[l] = f), u.onreadystatechange = f) : f()
                },
                abort: function () {
                    f && f(w, !0)
                }
            }
        });
        var qe, Ie, Be = /^(?:toggle|show|hide)$/,
            He = RegExp("^(?:([+-])=|)(" + K + ")([a-z%]*)$", "i"),
            Xe = /queueHooks$/,
            We = [function (e, t, n) {
                var i, r, a, s, o, l, u, c, f, h = this,
                    p = e.style,
                    d = {},
                    m = [],
                    g = e.nodeType && b(e);
                for (i in n.queue || (null == (c = gt._queueHooks(e, "fx")).unqueued && (c.unqueued = 0, f = c.empty.fire, c.empty.fire = function () {
                        c.unqueued || f()
                    }), c.unqueued++, h.always(function () {
                        h.always(function () {
                            c.unqueued--, gt.queue(e, "fx").length || c.empty.fire()
                        })
                    })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === gt.css(e, "display") && "none" === gt.css(e, "float") && (gt.support.inlineBlockNeedsLayout && "inline" !== S(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", gt.support.shrinkWrapBlocks || h.done(function () {
                        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                    })), t)
                    if (a = t[i], Be.exec(a)) {
                        if (delete t[i], l = l || "toggle" === a, a === (g ? "hide" : "show")) continue;
                        m.push(i)
                    }
                if (s = m.length) {
                    "hidden" in (o = gt._data(e, "fxshow") || gt._data(e, "fxshow", {})) && (g = o.hidden), l && (o.hidden = !g), g ? gt(e).show() : h.done(function () {
                        gt(e).hide()
                    }), h.done(function () {
                        var t;
                        for (t in gt._removeData(e, "fxshow"), d) gt.style(e, t, d[t])
                    });
                    for (i = 0; i < s; i++) r = m[i], u = h.createTween(r, g ? o[r] : 0), d[r] = o[r] || gt.style(e, r), r in o || (o[r] = u.start, g && (u.end = u.start, u.start = "width" === r || "height" === r ? 1 : 0))
                }
            }],
            $e = {
                "*": [function (t, e) {
                    var n, i, r = this.createTween(t, e),
                        a = He.exec(e),
                        s = r.cur(),
                        o = +s || 0,
                        l = 1,
                        u = 20;
                    if (a) {
                        if (n = +a[2], "px" !== (i = a[3] || (gt.cssNumber[t] ? "" : "px")) && o)
                            for (o = gt.css(r.elem, t, !0) || n || 1; o /= l = l || ".5", gt.style(r.elem, t, o + i), l !== (l = r.cur() / s) && 1 !== l && --u;);
                        r.unit = i, r.start = o, r.end = a[1] ? o + (a[1] + 1) * n : n
                    }
                    return r
                }]
            };
        gt.Animation = gt.extend(N, {
            tweener: function (t, e) {
                for (var n, i = 0, r = (t = gt.isFunction(t) ? (e = t, ["*"]) : t.split(" ")).length; i < r; i++) n = t[i], $e[n] = $e[n] || [], $e[n].unshift(e)
            },
            prefilter: function (t, e) {
                e ? We.unshift(t) : We.push(t)
            }
        }), ((gt.Tween = R).prototype = {
            constructor: R,
            init: function (t, e, n, i, r, a) {
                this.elem = t, this.prop = n, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = a || (gt.cssNumber[n] ? "" : "px")
            },
            cur: function () {
                var t = R.propHooks[this.prop];
                return t && t.get ? t.get(this) : R.propHooks._default.get(this)
            },
            run: function (t) {
                var e, n = R.propHooks[this.prop];
                return this.pos = e = this.options.duration ? gt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : R.propHooks._default.set(this), this
            }
        }).init.prototype = R.prototype, (R.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = gt.css(t.elem, t.prop, "auto")) && "auto" !== e ? e : 0 : t.elem[t.prop]
                },
                set: function (t) {
                    gt.fx.step[t.prop] ? gt.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[gt.cssProps[t.prop]] || gt.cssHooks[t.prop]) ? gt.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }).scrollTop = R.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, gt.each(["toggle", "show", "hide"], function (t, i) {
            var r = gt.fn[i];
            gt.fn[i] = function (t, e, n) {
                return null == t || "boolean" == typeof t ? r.apply(this, arguments) : this.animate(M(i, !0), t, e, n)
            }
        }), gt.fn.extend({
            fadeTo: function (t, e, n, i) {
                return this.filter(b).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function (e, t, n, i) {
                var r = gt.isEmptyObject(e),
                    a = gt.speed(t, n, i),
                    s = function () {
                        var t = N(this, gt.extend({}, e), a);
                        s.finish = function () {
                            t.stop(!0)
                        }, (r || gt._data(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, r || !1 === a.queue ? this.each(s) : this.queue(a.queue, s)
            },
            stop: function (r, t, a) {
                var s = function (t) {
                    var e = t.stop;
                    delete t.stop, e(a)
                };
                return "string" != typeof r && (a = t, t = r, r = w), t && !1 !== r && this.queue(r || "fx", []), this.each(function () {
                    var t = !0,
                        e = null != r && r + "queueHooks",
                        n = gt.timers,
                        i = gt._data(this);
                    if (e) i[e] && i[e].stop && s(i[e]);
                    else
                        for (e in i) i[e] && i[e].stop && Xe.test(e) && s(i[e]);
                    for (e = n.length; e--;) n[e].elem !== this || null != r && n[e].queue !== r || (n[e].anim.stop(a), t = !1, n.splice(e, 1));
                    (t || !a) && gt.dequeue(this, r)
                })
            },
            finish: function (s) {
                return !1 !== s && (s = s || "fx"), this.each(function () {
                    var t, e = gt._data(this),
                        n = e[s + "queue"],
                        i = e[s + "queueHooks"],
                        r = gt.timers,
                        a = n ? n.length : 0;
                    for (e.finish = !0, gt.queue(this, s, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = r.length; t--;) r[t].elem === this && r[t].queue === s && (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; t < a; t++) n[t] && n[t].finish && n[t].finish.call(this);
                    delete e.finish
                })
            }
        }), gt.each({
            slideDown: M("show"),
            slideUp: M("hide"),
            slideToggle: M("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (t, i) {
            gt.fn[t] = function (t, e, n) {
                return this.animate(i, t, e, n)
            }
        }), gt.speed = function (t, e, n) {
            var i = t && "object" == typeof t ? gt.extend({}, t) : {
                complete: n || !n && e || gt.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !gt.isFunction(e) && e
            };
            return i.duration = gt.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in gt.fx.speeds ? gt.fx.speeds[i.duration] : gt.fx.speeds._default, (null == i.queue || !0 === i.queue) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                gt.isFunction(i.old) && i.old.call(this), i.queue && gt.dequeue(this, i.queue)
            }, i
        }, gt.easing = {
            linear: function (t) {
                return t
            },
            swing: function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, gt.timers = [], gt.fx = R.prototype.init, gt.fx.tick = function () {
            var t, e = gt.timers,
                n = 0;
            for (qe = gt.now(); e.length > n; n++)(t = e[n])() || e[n] !== t || e.splice(n--, 1);
            e.length || gt.fx.stop(), qe = w
        }, gt.fx.timer = function (t) {
            t() && gt.timers.push(t) && gt.fx.start()
        }, gt.fx.interval = 13, gt.fx.start = function () {
            Ie || (Ie = setInterval(gt.fx.tick, gt.fx.interval))
        }, gt.fx.stop = function () {
            clearInterval(Ie), Ie = null
        }, gt.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, gt.fx.step = {}, gt.expr && gt.expr.filters && (gt.expr.filters.animated = function (e) {
            return gt.grep(gt.timers, function (t) {
                return e === t.elem
            }).length
        }), gt.fn.offset = function (e) {
            if (arguments.length) return e === w ? this : this.each(function (t) {
                gt.offset.setOffset(this, e, t)
            });
            var t, n, i = {
                    top: 0,
                    left: 0
                },
                r = this[0],
                a = r && r.ownerDocument;
            return a ? (t = a.documentElement, gt.contains(t, r) ? (r.getBoundingClientRect !== w && (i = r.getBoundingClientRect()), n = j(a), {
                top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : i) : void 0
        }, gt.offset = {
            setOffset: function (t, e, n) {
                var i = gt.css(t, "position");
                "static" === i && (t.style.position = "relative");
                var r, a, s = gt(t),
                    o = s.offset(),
                    l = gt.css(t, "top"),
                    u = gt.css(t, "left"),
                    c = {},
                    f = {};
                a = ("absolute" === i || "fixed" === i) && -1 < gt.inArray("auto", [l, u]) ? (r = (f = s.position()).top, f.left) : (r = parseFloat(l) || 0, parseFloat(u) || 0), gt.isFunction(e) && (e = e.call(t, n, o)), null != e.top && (c.top = e.top - o.top + r), null != e.left && (c.left = e.left - o.left + a), "using" in e ? e.using.call(t, c) : s.css(c)
            }
        }, gt.fn.extend({
            position: function () {
                if (this[0]) {
                    var t, e, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === gt.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), gt.nodeName(t[0], "html") || (n = t.offset()), n.top += gt.css(t[0], "borderTopWidth", !0), n.left += gt.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - n.top - gt.css(i, "marginTop", !0),
                        left: e.left - n.left - gt.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent || q.documentElement; t && !gt.nodeName(t, "html") && "static" === gt.css(t, "position");) t = t.offsetParent;
                    return t || q.documentElement
                })
            }
        }), gt.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (e, r) {
            var a = /Y/.test(r);
            gt.fn[e] = function (t) {
                return gt.access(this, function (t, e, n) {
                    var i = j(t);
                    return n === w ? i ? r in i ? i[r] : i.document.documentElement[e] : t[e] : (i ? i.scrollTo(a ? gt(i).scrollLeft() : n, a ? n : gt(i).scrollTop()) : t[e] = n, w)
                }, e, t, arguments.length, null)
            }
        }), gt.each({
            Height: "height",
            Width: "width"
        }, function (a, s) {
            gt.each({
                padding: "inner" + a,
                content: s,
                "": "outer" + a
            }, function (i, t) {
                gt.fn[t] = function (t, e) {
                    var n = arguments.length && (i || "boolean" != typeof t),
                        r = i || (!0 === t || !0 === e ? "margin" : "border");
                    return gt.access(this, function (t, e, n) {
                        var i;
                        return gt.isWindow(t) ? t.document.documentElement["client" + a] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + a], i["scroll" + a], t.body["offset" + a], i["offset" + a], i["client" + a])) : n === w ? gt.css(t, e, r) : gt.style(t, e, n, r)
                    }, s, n ? t : w, n, null)
                }
            })
        }), d.jQuery = d.$ = gt, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
            return gt
        })
    }(window),
    function (t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : t("undefined" != typeof jQuery ? jQuery : window.Zepto)
    }(function (N) {
        "use strict";

        function n(t) {
            var e = t.data;
            t.isDefaultPrevented() || (t.preventDefault(), N(t.target).ajaxSubmit(e))
        }

        function i(t) {
            var e = t.target,
                n = N(e);
            if (!n.is("[type=submit],[type=image]")) {
                var i = n.closest("[type=submit]");
                if (0 === i.length) return;
                e = i[0]
            }
            var r = this;
            if ("image" == (r.clk = e).type)
                if (void 0 !== t.offsetX) r.clk_x = t.offsetX, r.clk_y = t.offsetY;
                else if ("function" == typeof N.fn.offset) {
                var a = n.offset();
                r.clk_x = t.pageX - a.left, r.clk_y = t.pageY - a.top
            } else r.clk_x = t.pageX - e.offsetLeft, r.clk_y = t.pageY - e.offsetTop;
            setTimeout(function () {
                r.clk = r.clk_x = r.clk_y = null
            }, 100)
        }

        function R() {
            if (N.fn.ajaxSubmit.debug) {
                var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
                window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
            }
        }
        var y = {};
        y.fileapi = void 0 !== N("<input type='file'/>").get(0).files, y.formdata = void 0 !== window.FormData;
        var M = !!N.fn.prop;
        N.fn.attr2 = function () {
            if (!M) return this.attr.apply(this, arguments);
            var t = this.prop.apply(this, arguments);
            return t && t.jquery || "string" == typeof t ? t : this.attr.apply(this, arguments)
        }, N.fn.ajaxSubmit = function (F) {
            function t(t) {
                function c(e) {
                    var n = null;
                    try {
                        e.contentWindow && (n = e.contentWindow.document)
                    } catch (e) {
                        R("cannot get iframe.contentWindow document: " + e)
                    }
                    if (n) return n;
                    try {
                        n = e.contentDocument ? e.contentDocument : e.document
                    } catch (t) {
                        R("cannot get iframe.contentDocument: " + t), n = e.document
                    }
                    return n
                }

                function e() {
                    var t = O.attr2("target"),
                        e = O.attr2("action"),
                        n = O.attr("enctype") || O.attr("encoding") || "multipart/form-data";
                    o.setAttribute("target", a), (!D || /post/i.test(D)) && o.setAttribute("method", "POST"), e != h.url && o.setAttribute("action", h.url), h.skipEncodingOverride || D && !/post/i.test(D) || O.attr({
                        encoding: "multipart/form-data",
                        enctype: "multipart/form-data"
                    }), h.timeout && (v = setTimeout(function () {
                        _ = !0, f(x)
                    }, h.timeout));
                    var i = [];
                    try {
                        if (h.extraData)
                            for (var r in h.extraData) h.extraData.hasOwnProperty(r) && i.push(N.isPlainObject(h.extraData[r]) && h.extraData[r].hasOwnProperty("name") && h.extraData[r].hasOwnProperty("value") ? N('<input type="hidden" name="' + h.extraData[r].name + '">').val(h.extraData[r].value).appendTo(o)[0] : N('<input type="hidden" name="' + r + '">').val(h.extraData[r]).appendTo(o)[0]);
                        h.iframeTarget || d.appendTo("body"), m.attachEvent ? m.attachEvent("onload", f) : m.addEventListener("load", f, !1), setTimeout(function t() {
                            try {
                                var e = c(m).readyState;
                                R("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50)
                            } catch (t) {
                                R("Server abort: ", t, " (", t.name, ")"), f(b), v && clearTimeout(v), v = void 0
                            }
                        }, 15);
                        try {
                            o.submit()
                        } catch (t) {
                            document.createElement("form").submit.apply(o)
                        }
                    } finally {
                        o.setAttribute("action", e), o.setAttribute("enctype", n), t ? o.setAttribute("target", t) : O.removeAttr("target"), N(i).remove()
                    }
                }

                function f(t) {
                    if (!g.aborted && !k) {
                        if ((w = c(m)) || (R("cannot access response document"), t = b), t === x && g) return g.abort("timeout"), void y.reject(g, "timeout");
                        if (t == b && g) return g.abort("server abort"), void y.reject(g, "error", "server abort");
                        if (w && w.location.href != h.iframeSrc || _) {
                            m.detachEvent ? m.detachEvent("onload", f) : m.removeEventListener("load", f, !1);
                            var e, n = "success";
                            try {
                                if (_) throw "timeout";
                                var i = "xml" == h.dataType || w.XMLDocument || N.isXMLDoc(w);
                                if (R("isXml=" + i), !i && window.opera && (null === w.body || !w.body.innerHTML) && --S) return R("requeing onLoad callback, DOM not available"), void setTimeout(f, 250);
                                var r = w.body ? w.body : w.documentElement;
                                g.responseText = r ? r.innerHTML : null, g.responseXML = w.XMLDocument ? w.XMLDocument : w, i && (h.dataType = "xml"), g.getResponseHeader = function (t) {
                                    return {
                                        "content-type": h.dataType
                                    }[t.toLowerCase()]
                                }, r && (g.status = Number(r.getAttribute("status")) || g.status, g.statusText = r.getAttribute("statusText") || g.statusText);
                                var a = (h.dataType || "").toLowerCase(),
                                    s = /(json|script|text)/.test(a);
                                if (s || h.textarea) {
                                    var o = w.getElementsByTagName("textarea")[0];
                                    if (o) g.responseText = o.value, g.status = Number(o.getAttribute("status")) || g.status, g.statusText = o.getAttribute("statusText") || g.statusText;
                                    else if (s) {
                                        var l = w.getElementsByTagName("pre")[0],
                                            u = w.getElementsByTagName("body")[0];
                                        l ? g.responseText = l.textContent ? l.textContent : l.innerText : u && (g.responseText = u.textContent ? u.textContent : u.innerText)
                                    }
                                } else "xml" == a && !g.responseXML && g.responseText && (g.responseXML = C(g.responseText));
                                try {
                                    T = A(g, a, h)
                                } catch (t) {
                                    n = "parsererror", g.error = e = t || n
                                }
                            } catch (t) {
                                R("error caught: ", t), n = "error", g.error = e = t || n
                            }
                            g.aborted && (R("upload aborted"), n = null), g.status && (n = 200 <= g.status && g.status < 300 || 304 === g.status ? "success" : "error"), "success" === n ? (h.success && h.success.call(h.context, T, "success", g), y.resolve(g.responseText, "success", g), p && N.event.trigger("ajaxSuccess", [g, h])) : n && (void 0 === e && (e = g.statusText), h.error && h.error.call(h.context, g, n, e), y.reject(g, "error", e), p && N.event.trigger("ajaxError", [g, h, e])), p && N.event.trigger("ajaxComplete", [g, h]), p && !--N.active && N.event.trigger("ajaxStop"), h.complete && h.complete.call(h.context, g, n), k = !0, h.timeout && clearTimeout(v), setTimeout(function () {
                                h.iframeTarget ? d.attr("src", h.iframeSrc) : d.remove(), g.responseXML = null
                            }, 100)
                        }
                    }
                }
                var n, i, h, p, a, d, m, g, r, s, _, v, o = O[0],
                    y = N.Deferred();
                if (y.abort = function (t) {
                        g.abort(t)
                    }, t)
                    for (i = 0; i < E.length; i++) n = N(E[i]), M ? n.prop("disabled", !1) : n.removeAttr("disabled");
                if ((h = N.extend(!0, {}, N.ajaxSettings, F)).context = h.context || h, a = "jqFormIO" + (new Date).getTime(), h.iframeTarget ? (s = (d = N(h.iframeTarget)).attr2("name")) ? a = s : d.attr2("name", a) : (d = N('<iframe name="' + a + '" src="' + h.iframeSrc + '" />')).css({
                        position: "absolute",
                        top: "-1000px",
                        left: "-1000px"
                    }), m = d[0], g = {
                        aborted: 0,
                        responseText: null,
                        responseXML: null,
                        status: 0,
                        statusText: "n/a",
                        getAllResponseHeaders: function () {},
                        getResponseHeader: function () {},
                        setRequestHeader: function () {},
                        abort: function (t) {
                            var e = "timeout" === t ? "timeout" : "aborted";
                            R("aborting upload... " + e), this.aborted = 1;
                            try {
                                m.contentWindow.document.execCommand && m.contentWindow.document.execCommand("Stop")
                            } catch (t) {}
                            d.attr("src", h.iframeSrc), g.error = e, h.error && h.error.call(h.context, g, e, t), p && N.event.trigger("ajaxError", [g, h, e]), h.complete && h.complete.call(h.context, g, e)
                        }
                    }, (p = h.global) && 0 == N.active++ && N.event.trigger("ajaxStart"), p && N.event.trigger("ajaxSend", [g, h]), h.beforeSend && !1 === h.beforeSend.call(h.context, g, h)) return h.global && N.active--, y.reject(), y;
                if (g.aborted) return y.reject(), y;
                (r = o.clk) && (s = r.name) && !r.disabled && (h.extraData = h.extraData || {}, h.extraData[s] = r.value, "image" == r.type && (h.extraData[s + ".x"] = o.clk_x, h.extraData[s + ".y"] = o.clk_y));
                var x = 1,
                    b = 2,
                    l = N("meta[name=csrf-token]").attr("content"),
                    u = N("meta[name=csrf-param]").attr("content");
                u && l && (h.extraData = h.extraData || {}, h.extraData[u] = l), h.forceSync ? e() : setTimeout(e, 10);
                var T, w, k, S = 50,
                    C = N.parseXML || function (t, e) {
                        return window.ActiveXObject ? ((e = new ActiveXObject("Microsoft.XMLDOM")).async = "false", e.loadXML(t)) : e = (new DOMParser).parseFromString(t, "text/xml"), e && e.documentElement && "parsererror" != e.documentElement.nodeName ? e : null
                    },
                    P = N.parseJSON || function (t) {
                        return window.eval("(" + t + ")")
                    },
                    A = function (t, e, n) {
                        var i = t.getResponseHeader("content-type") || "",
                            r = "xml" === e || !e && 0 <= i.indexOf("xml"),
                            a = r ? t.responseXML : t.responseText;
                        return r && "parsererror" === a.documentElement.nodeName && N.error && N.error("parsererror"), n && n.dataFilter && (a = n.dataFilter(a, e)), "string" == typeof a && ("json" === e || !e && 0 <= i.indexOf("json") ? a = P(a) : ("script" === e || !e && 0 <= i.indexOf("javascript")) && N.globalEval(a)), a
                    };
                return y
            }
            if (!this.length) return R("ajaxSubmit: skipping submit process - no element selected"), this;
            var D, e, n, O = this;
            "function" == typeof F ? F = {
                success: F
            } : void 0 === F && (F = {}), D = F.type || this.attr2("method"), (n = (n = "string" == typeof (e = F.url || this.attr2("action")) ? N.trim(e) : "") || window.location.href || "") && (n = (n.match(/^([^#]+)/) || [])[1]), F = N.extend(!0, {
                url: n,
                success: N.ajaxSettings.success,
                type: D || N.ajaxSettings.type,
                iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
            }, F);
            var i = {};
            if (this.trigger("form-pre-serialize", [this, F, i]), i.veto) return R("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
            if (F.beforeSerialize && !1 === F.beforeSerialize(this, F)) return R("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
            var r = F.traditional;
            void 0 === r && (r = N.ajaxSettings.traditional);
            var a, E = [],
                s = this.formToArray(F.semantic, E);
            if (F.data && (F.extraData = F.data, a = N.param(F.data, r)), F.beforeSubmit && !1 === F.beforeSubmit(s, this, F)) return R("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
            if (this.trigger("form-submit-validate", [s, this, F, i]), i.veto) return R("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
            var o = N.param(s, r);
            a && (o = o ? o + "&" + a : a), "GET" == F.type.toUpperCase() ? (F.url += (0 <= F.url.indexOf("?") ? "&" : "?") + o, F.data = null) : F.data = o;
            var l = [];
            if (F.resetForm && l.push(function () {
                    O.resetForm()
                }), F.clearForm && l.push(function () {
                    O.clearForm(F.includeHidden)
                }), !F.dataType && F.target) {
                var u = F.success || function () {};
                l.push(function (t) {
                    var e = F.replaceTarget ? "replaceWith" : "html";
                    N(F.target)[e](t).each(u, arguments)
                })
            } else F.success && l.push(F.success);
            if (F.success = function (t, e, n) {
                    for (var i = F.context || this, r = 0, a = l.length; r < a; r++) l[r].apply(i, [t, e, n || O, O])
                }, F.error) {
                var c = F.error;
                F.error = function (t, e, n) {
                    var i = F.context || this;
                    c.apply(i, [t, e, n, O])
                }
            }
            if (F.complete) {
                var f = F.complete;
                F.complete = function (t, e) {
                    var n = F.context || this;
                    f.apply(n, [t, e, O])
                }
            }
            var h = 0 < N("input[type=file]:enabled", this).filter(function () {
                    return "" !== N(this).val()
                }).length,
                p = "multipart/form-data",
                d = O.attr("enctype") == p || O.attr("encoding") == p,
                m = y.fileapi && y.formdata;
            R("fileAPI :" + m);
            var g, _ = (h || d) && !m;
            !1 !== F.iframe && (F.iframe || _) ? F.closeKeepAlive ? N.get(F.closeKeepAlive, function () {
                g = t(s)
            }) : g = t(s) : g = (h || d) && m ? function (t) {
                for (var n = new FormData, e = 0; e < t.length; e++) n.append(t[e].name, t[e].value);
                if (F.extraData) {
                    var i = function (t) {
                        var e, n, i = N.param(t, F.traditional).split("&"),
                            r = i.length,
                            a = [];
                        for (e = 0; e < r; e++) i[e] = i[e].replace(/\+/g, " "), n = i[e].split("="), a.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]);
                        return a
                    }(F.extraData);
                    for (e = 0; e < i.length; e++) i[e] && n.append(i[e][0], i[e][1])
                }
                F.data = null;
                var r = N.extend(!0, {}, N.ajaxSettings, F, {
                    contentType: !1,
                    processData: !1,
                    cache: !1,
                    type: D || "POST"
                });
                F.uploadProgress && (r.xhr = function () {
                    var t = N.ajaxSettings.xhr();
                    return t.upload && t.upload.addEventListener("progress", function (t) {
                        var e = 0,
                            n = t.loaded || t.position,
                            i = t.total;
                        t.lengthComputable && (e = Math.ceil(n / i * 100)), F.uploadProgress(t, n, i, e)
                    }, !1), t
                }), r.data = null;
                var a = r.beforeSend;
                return r.beforeSend = function (t, e) {
                    e.data = F.formData ? F.formData : n, a && a.call(this, t, e)
                }, N.ajax(r)
            }(s) : N.ajax(F), O.removeData("jqxhr").data("jqxhr", g);
            for (var v = 0; v < E.length; v++) E[v] = null;
            return this.trigger("form-submit-notify", [this, F]), this
        }, N.fn.ajaxForm = function (t) {
            if ((t = t || {}).delegation = t.delegation && N.isFunction(N.fn.on), t.delegation || 0 !== this.length) return t.delegation ? (N(document).off("submit.form-plugin", this.selector, n).off("click.form-plugin", this.selector, i).on("submit.form-plugin", this.selector, t, n).on("click.form-plugin", this.selector, t, i), this) : this.ajaxFormUnbind().bind("submit.form-plugin", t, n).bind("click.form-plugin", t, i);
            var e = {
                s: this.selector,
                c: this.context
            };
            return !N.isReady && e.s ? (R("DOM not ready, queuing ajaxForm"), N(function () {
                N(e.s, e.c).ajaxForm(t)
            })) : R("terminating; zero elements found by selector" + (N.isReady ? "" : " (DOM not ready)")), this
        }, N.fn.ajaxFormUnbind = function () {
            return this.unbind("submit.form-plugin click.form-plugin")
        }, N.fn.formToArray = function (t, e) {
            var n = [];
            if (0 === this.length) return n;
            var i, r, a, s, o, l, u, c, f = this[0],
                h = this.attr("id"),
                p = t ? f.getElementsByTagName("*") : f.elements;
            if (p && !/MSIE [678]/.test(navigator.userAgent) && (p = N(p).get()), h && (i = N(':input[form="' + h + '"]').get()).length && (p = (p || []).concat(i)), !p || !p.length) return n;
            for (r = 0, u = p.length; r < u; r++)
                if ((s = (l = p[r]).name) && !l.disabled)
                    if (t && f.clk && "image" == l.type) f.clk == l && (n.push({
                        name: s,
                        value: N(l).val(),
                        type: l.type
                    }), n.push({
                        name: s + ".x",
                        value: f.clk_x
                    }, {
                        name: s + ".y",
                        value: f.clk_y
                    }));
                    else if ((o = N.fieldValue(l, !0)) && o.constructor == Array)
                for (e && e.push(l), a = 0, c = o.length; a < c; a++) n.push({
                    name: s,
                    value: o[a]
                });
            else if (y.fileapi && "file" == l.type) {
                e && e.push(l);
                var d = l.files;
                if (d.length)
                    for (a = 0; a < d.length; a++) n.push({
                        name: s,
                        value: d[a],
                        type: l.type
                    });
                else n.push({
                    name: s,
                    value: "",
                    type: l.type
                })
            } else null != o && (e && e.push(l), n.push({
                name: s,
                value: o,
                type: l.type,
                required: l.required
            }));
            if (!t && f.clk) {
                var m = N(f.clk),
                    g = m[0];
                (s = g.name) && !g.disabled && "image" == g.type && (n.push({
                    name: s,
                    value: m.val()
                }), n.push({
                    name: s + ".x",
                    value: f.clk_x
                }, {
                    name: s + ".y",
                    value: f.clk_y
                }))
            }
            return n
        }, N.fn.formSerialize = function (t) {
            return N.param(this.formToArray(t))
        }, N.fn.fieldSerialize = function (r) {
            var a = [];
            return this.each(function () {
                var t = this.name;
                if (t) {
                    var e = N.fieldValue(this, r);
                    if (e && e.constructor == Array)
                        for (var n = 0, i = e.length; n < i; n++) a.push({
                            name: t,
                            value: e[n]
                        });
                    else null != e && a.push({
                        name: this.name,
                        value: e
                    })
                }
            }), N.param(a)
        }, N.fn.fieldValue = function (t) {
            for (var e = [], n = 0, i = this.length; n < i; n++) {
                var r = this[n],
                    a = N.fieldValue(r, t);
                null == a || a.constructor == Array && !a.length || (a.constructor == Array ? N.merge(e, a) : e.push(a))
            }
            return e
        }, N.fieldValue = function (t, e) {
            var n = t.name,
                i = t.type,
                r = t.tagName.toLowerCase();
            if (void 0 === e && (e = !0), e && (!n || t.disabled || "reset" == i || "button" == i || ("checkbox" == i || "radio" == i) && !t.checked || ("submit" == i || "image" == i) && t.form && t.form.clk != t || "select" == r && -1 == t.selectedIndex)) return null;
            if ("select" != r) return N(t).val();
            var a = t.selectedIndex;
            if (a < 0) return null;
            for (var s = [], o = t.options, l = "select-one" == i, u = l ? a + 1 : o.length, c = l ? a : 0; c < u; c++) {
                var f = o[c];
                if (f.selected) {
                    var h = f.value;
                    if (h || (h = f.attributes && f.attributes.value && !f.attributes.value.specified ? f.text : f.value), l) return h;
                    s.push(h)
                }
            }
            return s
        }, N.fn.clearForm = function (t) {
            return this.each(function () {
                N("input,select,textarea", this).clearFields(t)
            })
        }, N.fn.clearFields = N.fn.clearInputs = function (n) {
            var i = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
            return this.each(function () {
                var t = this.type,
                    e = this.tagName.toLowerCase();
                i.test(t) || "textarea" == e ? this.value = "" : "checkbox" == t || "radio" == t ? this.checked = !1 : "select" == e ? this.selectedIndex = -1 : "file" == t ? /MSIE/.test(navigator.userAgent) ? N(this).replaceWith(N(this).clone(!0)) : N(this).val("") : n && (!0 === n && /hidden/.test(t) || "string" == typeof n && N(this).is(n)) && (this.value = "")
            })
        }, N.fn.resetForm = function () {
            return this.each(function () {
                ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
            })
        }, N.fn.enable = function (t) {
            return void 0 === t && (t = !0), this.each(function () {
                this.disabled = !t
            })
        }, N.fn.selected = function (n) {
            return void 0 === n && (n = !0), this.each(function () {
                var t = this.type;
                if ("checkbox" == t || "radio" == t) this.checked = n;
                else if ("option" == this.tagName.toLowerCase()) {
                    var e = N(this).parent("select");
                    n && e[0] && "select-one" == e[0].type && e.find("option").selected(!1), this.selected = n
                }
            })
        }, N.fn.ajaxSubmit.debug = !1
    }),
    function (u) {
        u.extend(u.fn, {
            validate: function (t) {
                if (this.length) {
                    var n = u.data(this[0], "validator");
                    return n || (this.attr("novalidate", "novalidate"), n = new u.validator(t, this[0]), u.data(this[0], "validator", n), n.settings.onsubmit && (this.validateDelegate(":submit", "click", function (t) {
                        n.settings.submitHandler && (n.submitButton = t.target), u(t.target).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== u(t.target).attr("formnovalidate") && (n.cancelSubmit = !0)
                    }), this.submit(function (e) {
                        function t() {
                            var t;
                            return !n.settings.submitHandler || (n.submitButton && (t = u("<input type='hidden'/>").attr("name", n.submitButton.name).val(u(n.submitButton).val()).appendTo(n.currentForm)), n.settings.submitHandler.call(n, n.currentForm, e), n.submitButton && t.remove(), !1)
                        }
                        return n.settings.debug && e.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, t()) : n.form() ? n.pendingRequest ? !(n.formSubmitted = !0) : t() : (n.focusInvalid(), !1)
                    })), n)
                }
                t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
            },
            valid: function () {
                var t, e;
                return u(this[0]).is("form") ? t = this.validate().form() : (t = !0, e = u(this[0].form).validate(), this.each(function () {
                    t = e.element(this) && t
                })), t
            },
            removeAttrs: function (t) {
                var n = {},
                    i = this;
                return u.each(t.split(/\s/), function (t, e) {
                    n[e] = i.attr(e), i.removeAttr(e)
                }), n
            },
            rules: function (t, e) {
                var n, i, r, a, s, o, l = this[0];
                if (t) switch (n = u.data(l.form, "validator").settings, i = n.rules, r = u.validator.staticRules(l), t) {
                    case "add":
                        u.extend(r, u.validator.normalizeRule(e)), delete r.messages, i[l.name] = r, e.messages && (n.messages[l.name] = u.extend(n.messages[l.name], e.messages));
                        break;
                    case "remove":
                        return e ? (o = {}, u.each(e.split(/\s/), function (t, e) {
                            o[e] = r[e], delete r[e], "required" === e && u(l).removeAttr("aria-required")
                        }), o) : (delete i[l.name], r)
                }
                return (a = u.validator.normalizeRules(u.extend({}, u.validator.classRules(l), u.validator.attributeRules(l), u.validator.dataRules(l), u.validator.staticRules(l)), l)).required && (s = a.required, delete a.required, a = u.extend({
                    required: s
                }, a), u(l).attr("aria-required", "true")), a.remote && (s = a.remote, delete a.remote, a = u.extend(a, {
                    remote: s
                })), a
            }
        }), u.extend(u.expr[":"], {
            blank: function (t) {
                return !u.trim("" + u(t).val())
            },
            filled: function (t) {
                return !!u.trim("" + u(t).val())
            },
            unchecked: function (t) {
                return !u(t).prop("checked")
            }
        }), u.validator = function (t, e) {
            this.settings = u.extend(!0, {}, u.validator.defaults, t), this.currentForm = e, this.init()
        }, u.validator.format = function (n, t) {
            return 1 === arguments.length ? function () {
                var t = u.makeArray(arguments);
                return t.unshift(n), u.validator.format.apply(this, t)
            } : (2 < arguments.length && t.constructor !== Array && (t = u.makeArray(arguments).slice(1)), t.constructor !== Array && (t = [t]), u.each(t, function (t, e) {
                n = n.replace(new RegExp("\\{" + t + "\\}", "g"), function () {
                    return e
                })
            }), n)
        }, u.extend(u.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                validClass: "valid",
                errorElement: "label",
                focusInvalid: !0,
                errorContainer: u([]),
                errorLabelContainer: u([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function (t) {
                    this.lastActive = t, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(t)).hide())
                },
                onfocusout: function (t) {
                    this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
                },
                onkeyup: function (t, e) {
                    (9 !== e.which || "" !== this.elementValue(t)) && (t.name in this.submitted || t === this.lastElement) && this.element(t)
                },
                onclick: function (t) {
                    t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
                },
                highlight: function (t, e, n) {
                    "radio" === t.type ? this.findByName(t.name).addClass(e).removeClass(n) : u(t).addClass(e).removeClass(n)
                },
                unhighlight: function (t, e, n) {
                    "radio" === t.type ? this.findByName(t.name).removeClass(e).addClass(n) : u(t).removeClass(e).addClass(n)
                }
            },
            setDefaults: function (t) {
                u.extend(u.validator.defaults, t)
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date (ISO).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                creditcard: "Please enter a valid credit card number.",
                equalTo: "Please enter the same value again.",
                maxlength: u.validator.format("Please enter no more than {0} characters."),
                minlength: u.validator.format("Please enter at least {0} characters."),
                rangelength: u.validator.format("Please enter a value between {0} and {1} characters long."),
                range: u.validator.format("Please enter a value between {0} and {1}."),
                max: u.validator.format("Please enter a value less than or equal to {0}."),
                min: u.validator.format("Please enter a value greater than or equal to {0}.")
            },
            autoCreateRanges: !1,
            prototype: {
                init: function () {
                    function t(t) {
                        var e = u.data(this[0].form, "validator"),
                            n = "on" + t.type.replace(/^validate/, ""),
                            i = e.settings;
                        i[n] && !this.is(i.ignore) && i[n].call(e, this[0], t)
                    }
                    this.labelContainer = u(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || u(this.currentForm), this.containers = u(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                    var n, i = this.groups = {};
                    u.each(this.settings.groups, function (n, t) {
                        "string" == typeof t && (t = t.split(/\s/)), u.each(t, function (t, e) {
                            i[e] = n
                        })
                    }), n = this.settings.rules, u.each(n, function (t, e) {
                        n[t] = u.validator.normalizeRule(e)
                    }), u(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", t).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", t), this.settings.invalidHandler && u(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler), u(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
                },
                form: function () {
                    return this.checkForm(), u.extend(this.submitted, this.errorMap), this.invalid = u.extend({}, this.errorMap), this.valid() || u(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                },
                checkForm: function () {
                    this.prepareForm();
                    for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
                    return this.valid()
                },
                element: function (t) {
                    var e = this.clean(t),
                        n = this.validationTargetFor(e),
                        i = !0;
                    return void 0 === (this.lastElement = n) ? delete this.invalid[e.name] : (this.prepareElement(n), this.currentElements = u(n), (i = !1 !== this.check(n)) ? delete this.invalid[n.name] : this.invalid[n.name] = !0), u(t).attr("aria-invalid", !i), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i
                },
                showErrors: function (e) {
                    if (e) {
                        for (var t in u.extend(this.errorMap, e), this.errorList = [], e) this.errorList.push({
                            message: e[t],
                            element: this.findByName(t)[0]
                        });
                        this.successList = u.grep(this.successList, function (t) {
                            return !(t.name in e)
                        })
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                },
                resetForm: function () {
                    u.fn.resetForm && u(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
                },
                numberOfInvalids: function () {
                    return this.objectLength(this.invalid)
                },
                objectLength: function (t) {
                    var e, n = 0;
                    for (e in t) n++;
                    return n
                },
                hideErrors: function () {
                    this.addWrapper(this.toHide).hide()
                },
                valid: function () {
                    return 0 === this.size()
                },
                size: function () {
                    return this.errorList.length
                },
                focusInvalid: function () {
                    if (this.settings.focusInvalid) try {
                        u(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (t) {}
                },
                findLastActive: function () {
                    var e = this.lastActive;
                    return e && 1 === u.grep(this.errorList, function (t) {
                        return t.element.name === e.name
                    }).length && e
                },
                elements: function () {
                    var t = this,
                        e = {};
                    return u(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
                        return !this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), !(this.name in e || !t.objectLength(u(this).rules()) || (e[this.name] = !0, 0))
                    })
                },
                clean: function (t) {
                    return u(t)[0]
                },
                errors: function () {
                    var t = this.settings.errorClass.split(" ").join(".");
                    return u(this.settings.errorElement + "." + t, this.errorContext)
                },
                reset: function () {
                    this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = u([]), this.toHide = u([]), this.currentElements = u([])
                },
                prepareForm: function () {
                    this.reset(), this.toHide = this.errors().add(this.containers)
                },
                prepareElement: function (t) {
                    this.reset(), this.toHide = this.errorsFor(t)
                },
                elementValue: function (t) {
                    var e, n = u(t),
                        i = n.attr("type");
                    return "radio" === i || "checkbox" === i ? u("input[name='" + n.attr("name") + "']:checked").val() : "string" == typeof (e = n.val()) ? e.replace(/\r/g, "") : e
                },
                check: function (e) {
                    e = this.validationTargetFor(this.clean(e));
                    var t, n, i, r = u(e).rules(),
                        a = u.map(r, function (t, e) {
                            return e
                        }).length,
                        s = !1,
                        o = this.elementValue(e);
                    for (n in r) {
                        i = {
                            method: n,
                            parameters: r[n]
                        };
                        try {
                            if ("dependency-mismatch" === (t = u.validator.methods[n].call(this, o, e, i.parameters)) && 1 === a) {
                                s = !0;
                                continue
                            }
                            if (s = !1, "pending" === t) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                            if (!t) return this.formatAndAdd(e, i), !1
                        } catch (t) {
                            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + i.method + "' method.", t), t
                        }
                    }
                    if (!s) return this.objectLength(r) && this.successList.push(e), !0
                },
                customDataMessage: function (t, e) {
                    return u(t).data("msg" + e[0].toUpperCase() + e.substring(1).toLowerCase()) || u(t).data("msg")
                },
                customMessage: function (t, e) {
                    var n = this.settings.messages[t];
                    return n && (n.constructor === String ? n : n[e])
                },
                findDefined: function () {
                    for (var t = 0; t < arguments.length; t++)
                        if (void 0 !== arguments[t]) return arguments[t]
                },
                defaultMessage: function (t, e) {
                    return this.findDefined(this.customMessage(t.name, e), this.customDataMessage(t, e), !this.settings.ignoreTitle && t.title || void 0, u.validator.messages[e], "<strong>Warning: No message defined for " + t.name + "</strong>")
                },
                formatAndAdd: function (t, e) {
                    var n = this.defaultMessage(t, e.method),
                        i = /\$?\{(\d+)\}/g;
                    "function" == typeof n ? n = n.call(this, e.parameters, t) : i.test(n) && (n = u.validator.format(n.replace(i, "{$1}"), e.parameters)), this.errorList.push({
                        message: n,
                        element: t,
                        method: e.method
                    }), this.errorMap[t.name] = n, this.submitted[t.name] = n
                },
                addWrapper: function (t) {
                    return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
                },
                defaultShowErrors: function () {
                    var t, e, n;
                    for (t = 0; this.errorList[t]; t++) n = this.errorList[t], this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message);
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                        for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
                    if (this.settings.unhighlight)
                        for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                },
                validElements: function () {
                    return this.currentElements.not(this.invalidElements())
                },
                invalidElements: function () {
                    return u(this.errorList).map(function () {
                        return this.element
                    })
                },
                showLabel: function (t, e) {
                    var n = this.errorsFor(t);
                    n.length ? (n.removeClass(this.settings.validClass).addClass(this.settings.errorClass), n.html(e)) : (n = u("<" + this.settings.errorElement + ">").attr("for", this.idOrName(t)).addClass(this.settings.errorClass).html(e || ""), this.settings.wrapper && (n = n.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(n).length || (this.settings.errorPlacement ? this.settings.errorPlacement(n, u(t)) : n.insertAfter(t))), !e && this.settings.success && (n.text(""), "string" == typeof this.settings.success ? n.addClass(this.settings.success) : this.settings.success(n, t)), this.toShow = this.toShow.add(n)
                },
                errorsFor: function (t) {
                    var e = this.idOrName(t);
                    return this.errors().filter(function () {
                        return u(this).attr("for") === e
                    })
                },
                idOrName: function (t) {
                    return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
                },
                validationTargetFor: function (t) {
                    return this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]), t
                },
                checkable: function (t) {
                    return /radio|checkbox/i.test(t.type)
                },
                findByName: function (t) {
                    return u(this.currentForm).find("[name='" + t + "']")
                },
                getLength: function (t, e) {
                    switch (e.nodeName.toLowerCase()) {
                        case "select":
                            return u("option:selected", e).length;
                        case "input":
                            if (this.checkable(e)) return this.findByName(e.name).filter(":checked").length
                    }
                    return t.length
                },
                depend: function (t, e) {
                    return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
                },
                dependTypes: {
                    boolean: function (t) {
                        return t
                    },
                    string: function (t, e) {
                        return !!u(t, e.form).length
                    },
                    function: function (t, e) {
                        return t(e)
                    }
                },
                optional: function (t) {
                    var e = this.elementValue(t);
                    return !u.validator.methods.required.call(this, e, t) && "dependency-mismatch"
                },
                startRequest: function (t) {
                    this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
                },
                stopRequest: function (t, e) {
                    this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], e && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (u(this.currentForm).submit(), this.formSubmitted = !1) : !e && 0 === this.pendingRequest && this.formSubmitted && (u(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                },
                previousValue: function (t) {
                    return u.data(t, "previousValue") || u.data(t, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(t, "remote")
                    })
                }
            },
            classRuleSettings: {
                required: {
                    required: !0
                },
                email: {
                    email: !0
                },
                url: {
                    url: !0
                },
                date: {
                    date: !0
                },
                dateISO: {
                    dateISO: !0
                },
                number: {
                    number: !0
                },
                digits: {
                    digits: !0
                },
                creditcard: {
                    creditcard: !0
                }
            },
            addClassRules: function (t, e) {
                t.constructor === String ? this.classRuleSettings[t] = e : u.extend(this.classRuleSettings, t)
            },
            classRules: function (t) {
                var e = {},
                    n = u(t).attr("class");
                return n && u.each(n.split(" "), function () {
                    this in u.validator.classRuleSettings && u.extend(e, u.validator.classRuleSettings[this])
                }), e
            },
            attributeRules: function (t) {
                var e, n, i = {},
                    r = u(t),
                    a = t.getAttribute("type");
                for (e in u.validator.methods) n = "required" === e ? ("" === (n = t.getAttribute(e)) && (n = !0), !!n) : r.attr(e), /min|max/.test(e) && (null === a || /number|range|text/.test(a)) && (n = Number(n)), n || 0 === n ? i[e] = n : a === e && "range" !== a && (i[e] = !0);
                return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength, i
            },
            dataRules: function (t) {
                var e, n, i = {},
                    r = u(t);
                for (e in u.validator.methods) void 0 !== (n = r.data("rule" + e[0].toUpperCase() + e.substring(1).toLowerCase())) && (i[e] = n);
                return i
            },
            staticRules: function (t) {
                var e = {},
                    n = u.data(t.form, "validator");
                return n.settings.rules && (e = u.validator.normalizeRule(n.settings.rules[t.name]) || {}), e
            },
            normalizeRules: function (i, r) {
                return u.each(i, function (t, e) {
                    if (!1 !== e) {
                        if (e.param || e.depends) {
                            var n = !0;
                            switch (typeof e.depends) {
                                case "string":
                                    n = !!u(e.depends, r.form).length;
                                    break;
                                case "function":
                                    n = e.depends.call(r, r)
                            }
                            n ? i[t] = void 0 === e.param || e.param : delete i[t]
                        }
                    } else delete i[t]
                }), u.each(i, function (t, e) {
                    i[t] = u.isFunction(e) ? e(r) : e
                }), u.each(["minlength", "maxlength"], function () {
                    i[this] && (i[this] = Number(i[this]))
                }), u.each(["rangelength", "range"], function () {
                    var t;
                    i[this] && (u.isArray(i[this]) ? i[this] = [Number(i[this][0]), Number(i[this][1])] : "string" == typeof i[this] && (t = i[this].split(/[\s,]+/), i[this] = [Number(t[0]), Number(t[1])]))
                }), u.validator.autoCreateRanges && (i.min && i.max && (i.range = [i.min, i.max], delete i.min, delete i.max), i.minlength && i.maxlength && (i.rangelength = [i.minlength, i.maxlength], delete i.minlength, delete i.maxlength)), i
            },
            normalizeRule: function (t) {
                if ("string" == typeof t) {
                    var e = {};
                    u.each(t.split(/\s/), function () {
                        e[this] = !0
                    }), t = e
                }
                return t
            },
            addMethod: function (t, e, n) {
                u.validator.methods[t] = e, u.validator.messages[t] = void 0 !== n ? n : u.validator.messages[t], e.length < 3 && u.validator.addClassRules(t, u.validator.normalizeRule(t))
            },
            methods: {
                required: function (t, e, n) {
                    if (!this.depend(n, e)) return "dependency-mismatch";
                    if ("select" !== e.nodeName.toLowerCase()) return this.checkable(e) ? 0 < this.getLength(t, e) : 0 < u.trim(t).length;
                    var i = u(e).val();
                    return i && 0 < i.length
                },
                email: function (t, e) {
                    return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
                },
                url: function (t, e) {
                    return this.optional(e) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
                },
                date: function (t, e) {
                    return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
                },
                dateISO: function (t, e) {
                    return this.optional(e) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)
                },
                number: function (t, e) {
                    return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
                },
                digits: function (t, e) {
                    return this.optional(e) || /^\d+$/.test(t)
                },
                creditcard: function (t, e) {
                    if (this.optional(e)) return "dependency-mismatch";
                    if (/[^0-9 \-]+/.test(t)) return !1;
                    var n, i, r = 0,
                        a = 0,
                        s = !1;
                    if ((t = t.replace(/\D/g, "")).length < 13 || 19 < t.length) return !1;
                    for (n = t.length - 1; 0 <= n; n--) i = t.charAt(n), a = parseInt(i, 10), s && 9 < (a *= 2) && (a -= 9), r += a, s = !s;
                    return r % 10 == 0
                },
                minlength: function (t, e, n) {
                    var i = u.isArray(t) ? t.length : this.getLength(u.trim(t), e);
                    return this.optional(e) || n <= i
                },
                maxlength: function (t, e, n) {
                    var i = u.isArray(t) ? t.length : this.getLength(u.trim(t), e);
                    return this.optional(e) || i <= n
                },
                rangelength: function (t, e, n) {
                    var i = u.isArray(t) ? t.length : this.getLength(u.trim(t), e);
                    return this.optional(e) || i >= n[0] && i <= n[1]
                },
                min: function (t, e, n) {
                    return this.optional(e) || n <= t
                },
                max: function (t, e, n) {
                    return this.optional(e) || t <= n
                },
                range: function (t, e, n) {
                    return this.optional(e) || t >= n[0] && t <= n[1]
                },
                equalTo: function (t, e, n) {
                    var i = u(n);
                    return this.settings.onfocusout && i.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
                        u(e).valid()
                    }), t === i.val()
                },
                remote: function (a, s, t) {
                    if (this.optional(s)) return "dependency-mismatch";
                    var o, e, l = this.previousValue(s);
                    return this.settings.messages[s.name] || (this.settings.messages[s.name] = {}), l.originalMessage = this.settings.messages[s.name].remote, this.settings.messages[s.name].remote = l.message, t = "string" == typeof t && {
                        url: t
                    } || t, l.old === a ? l.valid : (l.old = a, (o = this).startRequest(s), (e = {})[s.name] = a, u.ajax(u.extend(!0, {
                        url: t,
                        mode: "abort",
                        port: "validate" + s.name,
                        dataType: "json",
                        data: e,
                        context: o.currentForm,
                        success: function (t) {
                            var e, n, i, r = !0 === t || "true" === t;
                            o.settings.messages[s.name].remote = l.originalMessage, r ? (i = o.formSubmitted, o.prepareElement(s), o.formSubmitted = i, o.successList.push(s), delete o.invalid[s.name], o.showErrors()) : (e = {}, n = t || o.defaultMessage(s, "remote"), e[s.name] = l.message = u.isFunction(n) ? n(a) : n, o.invalid[s.name] = !0, o.showErrors(e)), l.valid = r, o.stopRequest(s, r)
                        }
                    }, t)), "pending")
                }
            }
        }), u.format = function () {
            throw "$.format has been deprecated. Please use $.validator.format instead."
        }
    }(jQuery),
    function (i) {
        var r, a = {};
        i.ajaxPrefilter ? i.ajaxPrefilter(function (t, e, n) {
            var i = t.port;
            "abort" === t.mode && (a[i] && a[i].abort(), a[i] = n)
        }) : (r = i.ajax, i.ajax = function (t) {
            var e = ("mode" in t ? t : i.ajaxSettings).mode,
                n = ("port" in t ? t : i.ajaxSettings).port;
            return "abort" === e ? (a[n] && a[n].abort(), a[n] = r.apply(this, arguments), a[n]) : r.apply(this, arguments)
        })
    }(jQuery),
    function (r) {
        r.extend(r.fn, {
            validateDelegate: function (n, t, i) {
                return this.bind(t, function (t) {
                    var e = r(t.target);
                    return e.is(n) ? i.apply(e, arguments) : void 0
                })
            }
        })
    }(jQuery),
    function (l) {
        l.validator.addMethod("mc_birthday", function (t, e, n) {
            var i = !1,
                r = l("input:not(:hidden)", l(e).closest(n));
            if (0 == r.filter(":filled").length && this.optional(e)) i = !0;
            else {
                var a = new Array;
                a.month = r.filter("input[name*='[month]']").val(), a.day = r.filter("input[name*='[day]']").val(), a.month = a.month - 1;
                var s = new Date(1970, a.month, a.day);
                i = s.getDate() == a.day && s.getMonth() == a.month
            }
            return i
        }, "Please enter a valid month and day."), l.validator.addMethod("mc_date", function (t, e, n) {
            var i = !1,
                r = l("input:not(:hidden)", l(e).closest(n));
            if (0 == r.filter(":filled").length && this.optional(e)) i = !0;
            else {
                var a = new Array;
                a.month = r.filter("input[name*='[month]']").val(), a.day = r.filter("input[name*='[day]']").val(), a.year = r.filter("input[name*='[year]']").val(), a.month = a.month - 1, a.year.length < 4 && (a.year = parseInt(a.year) < 50 ? 2e3 + parseInt(a.year) : 1900 + parseInt(a.year));
                var s = new Date(a.year, a.month, a.day);
                i = s.getDate() == a.day && s.getMonth() == a.month && s.getFullYear() == a.year
            }
            return i
        }, "Please enter a valid date"), l.validator.addMethod("mc_phone", function (t, e, n) {
            var i = l("input:filled:not(:hidden)", l(e).closest(n));
            return !(0 != i.length || !this.optional(e)) || 10 == (t = i.eq(0).val() + i.eq(1).val() + i.eq(2).val()).length && t.match(/[0-9]{9}/)
        }, "Please specify a valid phone number"), l.validator.addMethod("skip_or_complete_group", function (t, e, n) {
            var i = l("input:not(:hidden)", l(e).closest(n)),
                r = i.eq(0),
                a = r.data("valid_skip") ? r.data("valid_skip") : l.extend({}, this),
                s = i.filter(function () {
                    return a.elementValue(this)
                }).length,
                o = 0 === s || s === i.length;
            return r.data("valid_skip", a), l(e).data("being_validated") || (i.data("being_validated", !0), i.each(function () {
                a.element(this)
            }), i.data("being_validated", !1)), o
        }, l.validator.format("Please supply missing fields.")), l.validator.addMethod("skip_or_fill_minimum", function (t, e, n) {
            var i = l(n[1], e.form),
                r = i.eq(0),
                a = r.data("valid_skip") ? r.data("valid_skip") : l.extend({}, this),
                s = i.filter(function () {
                    return a.elementValue(this)
                }).length,
                o = 0 === s || s >= n[0];
            return console.log(i.eq(0)), r.data("valid_skip", a), l(e).data("being_validated") || (i.data("being_validated", !0), i.each(function () {
                a.element(this)
            }), i.data("being_validated", !1)), o
        }, l.validator.format("Please either skip these fields or fill at least {0} of them.")), l.validator.addMethod("zipcodeUS", function (t, e) {
            return this.optional(e) || /^\d{5}-\d{4}$|^\d{5}$/.test(t)
        }, "The specified US ZIP Code is invalid"), l.validator.addMethod("mc_gdpr", function (t, e, n) {
            return 0 !== l("input:not(:hidden)", l(e).closest(n)).filter(":checked").length
        }, "Please choose an option.")
    }(jQuery),
    function (u) {
        var t = "";
        try {
            t = mc_custom_error_style
        } catch (u) {
            t = "#mc_embed_signup input.mce_inline_error { border-color:#6B0505; } #mc_embed_signup div.mce_inline_error { margin: 0 0 1em 0; padding: 5px 10px; background-color:#6B0505; font-weight: bold; z-index: 1; color:#fff; }"
        }
        var e = document.getElementsByTagName("head")[0],
            n = document.createElement("style");
        n.type = "text/css", n.styleSheet ? n.styleSheet.cssText = t : n.appendChild(document.createTextNode(t)), e.appendChild(n), window.mc = {
            openPopup: function () {
                u("#mc_embed_signup a.mc_embed_close").show(), setTimeout(function () {
                    u("#mc_embed_signup").fadeIn()
                }, mc.delayPopup)
            },
            closePopup: function () {
                u("#mc_embed_signup").hide();
                var t = new Date,
                    e = new Date(t.getTime() + 31536e6);
                document.cookie = "MCPopupClosed=yes;expires=" + e.toGMTString() + ";path=/"
            },
            evalPopup: function () {
                for (u("#mc_embed_signup").hide(), cks = document.cookie.split(";"), i = 0; i < cks.length; i++) parts = cks[i].split("="), -1 != parts[0].indexOf("MCPopupClosed") && (mc.showPopup = !1);
                mc.showPopup && mc.openPopup()
            },
            getAjaxSubmitUrl: function () {
                var t = u("form#mc-embedded-subscribe-form").attr("action");
                return (t = t.replace("/post?u=", "/post-json?u=")) + "&c=?"
            },
            getGroups: function () {
                var r = {};
                return u(".mc-field-group").each(function (t) {
                    var e = u(this).find("input:text:not(:hidden), input:checkbox:not(:hidden)");
                    if (1 < e.length) {
                        var n = e.first().attr("name"),
                            i = u.map(e, function (t) {
                                return t.name
                            });
                        r[n.substring(0, n.indexOf("["))] = i.join(" ")
                    }
                }), r
            },
            isMultiPartField: function (t) {
                return 1 < u("input:not(:hidden)", u(t).closest(".mc-field-group")).length
            },
            isTooEarly: function (t) {
                var e = u("input:not(:hidden)", u(t).closest(".mc-field-group"));
                return u(e).eq(-1).attr("id") != u(t).attr("id")
            },
            mce_success_cb: function (e) {
                if (u("#mce-success-response").hide(), u("#mce-error-response").hide(), "success" == e.result) u("#mce-" + e.result + "-response").show(), u("#mce-" + e.result + "-response").html(e.msg), u("#mc-embedded-subscribe-form").each(function () {
                    this.reset()
                });
                else {
                    if ("captcha" === e.msg) {
                        var t = u("form#mc-embedded-subscribe-form").attr("action"),
                            n = u.param(e.params);
                        t = t.split("?")[0], t += "?", t += n, window.open(t)
                    }
                    var r, a = -1;
                    try {
                        var s = e.msg.split(" - ", 2);
                        r = null == s[1] ? e.msg : (i = parseInt(s[0]), i.toString() == s[0] ? (a = s[0], s[1]) : (a = -1, e.msg))
                    } catch (t) {
                        a = -1, r = e.msg
                    }
                    try {
                        if (-1 == a) u("#mce-" + e.result + "-response").show(), u("#mce-" + e.result + "-response").html(r);
                        else {
                            var o = u("input[name*='" + fnames[a] + "']").attr("name"),
                                l = {};
                            l[o] = r, mc.mce_validator.showErrors(l)
                        }
                    } catch (t) {
                        u("#mce-" + e.result + "-response").show(), u("#mce-" + e.result + "-response").html(r)
                    }
                }
            }
        }, window.mc.mce_validator = u("#mc-embedded-subscribe-form").validate({
            errorClass: "mce_inline_error",
            errorElement: "div",
            onkeyup: !1,
            onfocusout: function (t) {
                mc.isTooEarly(t) || u(t).valid()
            },
            onblur: function (t) {
                mc.isTooEarly(t) || u(t).valid()
            },
            groups: mc.getGroups(),
            errorPlacement: function (t, e) {
                e.closest(".mc-field-group").append(t)
            },
            submitHandler: function (t) {
                u(t).ajaxSubmit(mc.ajaxOptions)
            }
        }), window.mc.ajaxOptions = {
            url: mc.getAjaxSubmitUrl(),
            type: "GET",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: mc.mce_success_cb
        }, u.validator.addClassRules("birthday", {
            digits: !0,
            mc_birthday: ".datefield"
        }), u.validator.addClassRules("datepart", {
            digits: !0,
            mc_date: ".datefield"
        }), u.validator.addClassRules("phonepart", {
            digits: !0,
            mc_phone: ".phonefield"
        }), u.validator.addClassRules("gdpr", {
            mc_gdpr: ".gdprRequired"
        }), u("#mc_embed_signup a.mc_embed_close").click(function () {
            mc.closePopup()
        }), u(document).keydown(function (t) {
            keycode = null == t ? event.keyCode : t.which, 27 == keycode && void 0 !== mc.showPopup && mc.closePopup()
        })
    }(jQuery);

