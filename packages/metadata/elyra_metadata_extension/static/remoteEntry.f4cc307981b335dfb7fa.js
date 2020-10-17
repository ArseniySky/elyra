var _JUPYTERLAB;
(_JUPYTERLAB = void 0 === _JUPYTERLAB ? {} : _JUPYTERLAB)[
  '@elyra/metadata-extension'
] = (() => {
  'use strict';
  var e,
    r,
    t,
    a,
    n,
    o,
    i,
    l,
    u,
    s,
    d,
    f,
    c,
    p,
    h,
    v,
    m,
    b,
    y = {
      2466: (e, r, t) => {
        var a = {
            './index': () =>
              Promise.all([t.e(61), t.e(510), t.e(568)]).then(() => () =>
                t(1568)
              ),
            './extension': () =>
              Promise.all([t.e(61), t.e(510), t.e(568)]).then(() => () =>
                t(1568)
              ),
            './style': () => t.e(283).then(() => () => t(7283))
          },
          n = (e, r) => (
            (t.R = r),
            (r = t.o(a, e)
              ? a[e]()
              : Promise.resolve().then(() => {
                  throw new Error(
                    'Module "' + e + '" does not exist in container.'
                  );
                })),
            (t.R = void 0),
            r
          ),
          o = (e, r) => {
            if (t.S) {
              var a = t.S.default,
                n = 'default';
              if (a && a !== e)
                throw new Error(
                  'Container initialization failed as it has already been initialized with a different share scope'
                );
              return (t.S[n] = e), t.I(n, r);
            }
          };
        t.d(r, { get: () => n, init: () => o });
      }
    },
    g = {};
  function w(e) {
    if (g[e]) return g[e].exports;
    var r = (g[e] = { id: e, exports: {} });
    return y[e](r, r.exports, w), r.exports;
  }
  return (
    (w.m = y),
    (w.n = e => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return w.d(r, { a: r }), r;
    }),
    (w.d = (e, r) => {
      for (var t in r)
        w.o(r, t) &&
          !w.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
    }),
    (w.f = {}),
    (w.e = e =>
      Promise.all(Object.keys(w.f).reduce((r, t) => (w.f[t](e, r), r), []))),
    (w.u = e =>
      e +
      '.' +
      {
        61: '93ed2b819844f017391a',
        283: '171d23fb00413714e153',
        405: '7f11c814115e2db57036',
        510: 'a8dd44861f94d2332bd9',
        568: 'dbc83b3385215b43c776'
      }[e] +
      '.js'),
    (w.g = (function() {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (w.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (e = {}),
    (r = '@elyra/metadata-extension:'),
    (w.l = (t, a, n) => {
      if (e[t]) e[t].push(a);
      else {
        var o, i;
        if (void 0 !== n)
          for (
            var l = document.getElementsByTagName('script'), u = 0;
            u < l.length;
            u++
          ) {
            var s = l[u];
            if (
              s.getAttribute('src') == t ||
              s.getAttribute('data-webpack') == r + n
            ) {
              o = s;
              break;
            }
          }
        o ||
          ((i = !0),
          ((o = document.createElement('script')).charset = 'utf-8'),
          (o.timeout = 120),
          w.nc && o.setAttribute('nonce', w.nc),
          o.setAttribute('data-webpack', r + n),
          (o.src = t)),
          (e[t] = [a]);
        var d = (r, a) => {
            (o.onerror = o.onload = null), clearTimeout(f);
            var n = e[t];
            if (
              (delete e[t],
              o.parentNode && o.parentNode.removeChild(o),
              n && n.forEach(e => e(a)),
              r)
            )
              return r(a);
          },
          f = setTimeout(
            d.bind(null, void 0, { type: 'timeout', target: o }),
            12e4
          );
        (o.onerror = d.bind(null, o.onerror)),
          (o.onload = d.bind(null, o.onload)),
          i && document.head.appendChild(o);
      }
    }),
    (w.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (() => {
      w.S = {};
      var e = {},
        r = {};
      w.I = (t, a) => {
        a || (a = []);
        var n = r[t];
        if ((n || (n = r[t] = {}), !(a.indexOf(n) >= 0))) {
          if ((a.push(n), e[t])) return e[t];
          w.o(w.S, t) || (w.S[t] = {});
          var o = w.S[t],
            i = '@elyra/metadata-extension',
            l = (e, r, t) => {
              var a = (o[e] = o[e] || {}),
                n = a[r];
              (!n || (!n.loaded && i > n.from)) && (a[r] = { get: t, from: i });
            },
            u = [];
          switch (t) {
            case 'default':
              l('@elyra/metadata-common', '2.0.0-dev', () =>
                Promise.all([w.e(61), w.e(510), w.e(405)]).then(() => () =>
                  w(5405)
                )
              ),
                l('@elyra/metadata-extension', '2.0.0-dev', () =>
                  Promise.all([w.e(61), w.e(510), w.e(568)]).then(() => () =>
                    w(1568)
                  )
                );
          }
          return (e[t] = u.length ? Promise.all(u).then(() => (e[t] = 1)) : 1);
        }
      };
    })(),
    (() => {
      var e;
      w.g.importScripts && (e = w.g.location + '');
      var r = w.g.document;
      if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
        var t = r.getElementsByTagName('script');
        t.length && (e = t[t.length - 1].src);
      }
      if (!e)
        throw new Error(
          'Automatic publicPath is not supported in this browser'
        );
      (e = e
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (w.p = e);
    })(),
    (t = e => {
      var r = e => e.split('.').map(e => (+e == e ? +e : e)),
        t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
        a = t[1] ? r(t[1]) : [];
      return (
        t[2] && (a.length++, a.push.apply(a, r(t[2]))),
        t[3] && (a.push([]), a.push.apply(a, r(t[3]))),
        a
      );
    }),
    (a = (e, r) => {
      (e = t(e)), (r = t(r));
      for (var a = 0; ; ) {
        if (a >= e.length) return a < r.length && 'u' != (typeof r[a])[0];
        var n = e[a],
          o = (typeof n)[0];
        if (a >= r.length) return 'u' == o;
        var i = r[a],
          l = (typeof i)[0];
        if (o != l) return ('o' == o && 'n' == l) || 's' == l || 'u' == o;
        if ('o' != o && 'u' != o && n != i) return n < i;
        a++;
      }
    }),
    (n = e => {
      if (1 === e.length) return '*';
      if (0 in e) {
        var r = '',
          t = e[0];
        r +=
          0 == t
            ? '>='
            : -1 == t
            ? '<'
            : 1 == t
            ? '^'
            : 2 == t
            ? '~'
            : t > 0
            ? '='
            : '!=';
        for (var a = 1, o = 1; o < e.length; o++)
          a--,
            (r +=
              'u' == (typeof (l = e[o]))[0]
                ? '-'
                : (a > 0 ? '.' : '') + ((a = 2), l));
        return r;
      }
      var i = [];
      for (o = 1; o < e.length; o++) {
        var l = e[o];
        i.push(
          0 === l
            ? 'not(' + u() + ')'
            : 1 === l
            ? '(' + u() + ' || ' + u() + ')'
            : 2 === l
            ? i.pop() + ' ' + i.pop()
            : n(l)
        );
      }
      return u();
      function u() {
        return i.pop().replace(/^\((.+)\)$/, '$1');
      }
    }),
    (o = (e, r) => {
      if (0 in e) {
        r = t(r);
        var a = e[0],
          n = a < 0;
        n && (a = -a - 1);
        for (var i = 0, l = 1, u = !0; ; l++, i++) {
          var s,
            d,
            f = l < e.length ? (typeof e[l])[0] : '';
          if (i >= r.length || 'o' == (d = (typeof (s = r[i]))[0]))
            return !u || ('u' == f ? l > a && !n : ('' == f) != n);
          if ('u' == d) {
            if (!u || 'u' != f) return !1;
          } else if (u)
            if (f == d)
              if (l <= a) {
                if (s != e[l]) return !1;
              } else {
                if (n ? s > e[l] : s < e[l]) return !1;
                s != e[l] && (u = !1);
              }
            else if ('s' != f && 'n' != f) {
              if (n || l <= a) return !1;
              (u = !1), l--;
            } else {
              if (l <= a || d < f != n) return !1;
              u = !1;
            }
          else 's' != f && 'n' != f && ((u = !1), l--);
        }
      }
      var c = [],
        p = c.pop.bind(c);
      for (i = 1; i < e.length; i++) {
        var h = e[i];
        c.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? o(h, r) : !p());
      }
      return !!p();
    }),
    (i = (e, r) => {
      var t = w.S[e];
      if (!t || !w.o(t, r))
        throw new Error(
          'Shared module ' + r + " doesn't exist in shared scope " + e
        );
      return t;
    }),
    (l = (e, r) => {
      var t = e[r];
      return Object.keys(t).reduce(
        (e, r) => (!e || (!t[e].loaded && a(e, r)) ? r : e),
        0
      );
    }),
    (u = (e, r, t) =>
      'Unsatisfied version ' +
      r +
      ' of shared singleton module ' +
      e +
      ' (required ' +
      n(t) +
      ')'),
    (s = (e, r, t, a) => {
      var n = l(e, t);
      return (
        o(a, n) ||
          ('undefined' != typeof console &&
            console.warn &&
            console.warn(u(t, n, a))),
        f(e[t][n])
      );
    }),
    (d = (e, r, t) => {
      var n = e[r];
      return (
        (r = Object.keys(n).reduce(
          (e, r) => (!o(t, r) || (e && !a(e, r)) ? e : r),
          0
        )) && n[r]
      );
    }),
    (f = e => ((e.loaded = 1), e.get())),
    (p = (c = e =>
      function(r, t, a, n) {
        var o = w.I(r);
        return o && o.then
          ? o.then(e.bind(e, r, w.S[r], t, a, n))
          : e(r, w.S[r], t, a, n);
      })((e, r, t, a) => (i(e, t), s(r, 0, t, a)))),
    (h = c((e, r, t, a, n) => {
      var o = r && w.o(r, t) && d(r, t, a);
      return o ? f(o) : n();
    })),
    (v = {}),
    (m = {
      2822: () =>
        p('default', '@jupyterlab/coreutils', [1, 5, 0, 0, , 'rc', 5]),
      2916: () => p('default', '@lumino/widgets', [1, 1, 14, 0]),
      2959: () => p('default', 'react', [1, 16, 13, 1]),
      3526: () => p('default', '@jupyterlab/services', [1, 6, 0, 0, , 'rc', 5]),
      4268: () => p('default', '@jupyterlab/apputils', [1, 3, 0, 0, , 'rc', 5]),
      5875: () =>
        p('default', '@jupyterlab/filebrowser', [1, 3, 0, 0, , 'rc', 5]),
      6455: () =>
        p('default', '@jupyterlab/ui-components', [1, 3, 0, 0, , 'rc', 5]),
      8844: () => p('default', 'react-dom', [1, 16, 13, 1]),
      9266: () =>
        p('default', '@jupyterlab/codeeditor', [1, 3, 0, 0, , 'rc', 5]),
      9850: () => p('default', '@lumino/algorithm', [1, 1, 3, 3]),
      1708: () =>
        h('default', '@elyra/metadata-common', [1, 2, 0, 0, , 'dev'], () =>
          w.e(405).then(() => () => w(5405))
        ),
      4922: () =>
        p('default', '@jupyterlab/application', [1, 3, 0, 0, , 'rc', 5]),
      6168: () => p('default', '@lumino/signaling', [1, 1, 4, 3])
    }),
    (b = {
      405: [6168],
      510: [2822, 2916, 2959, 3526, 4268, 5875, 6455, 8844, 9266, 9850],
      568: [1708, 4922]
    }),
    (w.f.consumes = (e, r) => {
      w.o(b, e) &&
        b[e].forEach(e => {
          if (w.o(v, e)) return r.push(v[e]);
          var t = r => {
              (v[e] = 0),
                (y[e] = t => {
                  delete g[e], (t.exports = r());
                });
            },
            a = r => {
              delete v[e],
                (y[e] = t => {
                  throw (delete g[e], r);
                });
            };
          try {
            var n = m[e]();
            n.then ? r.push((v[e] = n.then(t).catch(a))) : t(n);
          } catch (e) {
            a(e);
          }
        });
    }),
    (() => {
      var e = { 162: 0 };
      w.f.j = (r, t) => {
        var a = w.o(e, r) ? e[r] : void 0;
        if (0 !== a)
          if (a) t.push(a[2]);
          else {
            var n = new Promise((t, n) => {
              a = e[r] = [t, n];
            });
            t.push((a[2] = n));
            var o = w.p + w.u(r),
              i = new Error();
            w.l(
              o,
              t => {
                if (w.o(e, r) && (0 !== (a = e[r]) && (e[r] = void 0), a)) {
                  var n = t && ('load' === t.type ? 'missing' : t.type),
                    o = t && t.target && t.target.src;
                  (i.message =
                    'Loading chunk ' + r + ' failed.\n(' + n + ': ' + o + ')'),
                    (i.name = 'ChunkLoadError'),
                    (i.type = n),
                    (i.request = o),
                    a[1](i);
                }
              },
              'chunk-' + r
            );
          }
      };
      var r = (self.webpackChunk_elyra_metadata_extension =
          self.webpackChunk_elyra_metadata_extension || []),
        t = r.push.bind(r);
      r.push = r => {
        for (var a, n, [o, i, l] = r, u = 0, s = []; u < o.length; u++)
          (n = o[u]), w.o(e, n) && e[n] && s.push(e[n][0]), (e[n] = 0);
        for (a in i) w.o(i, a) && (w.m[a] = i[a]);
        for (l && l(w), t(r); s.length; ) s.shift()();
      };
    })(),
    w(2466)
  );
})();
