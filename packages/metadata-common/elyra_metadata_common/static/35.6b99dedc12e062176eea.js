/*! For license information please see 35.6b99dedc12e062176eea.js.LICENSE.txt */
(self.webpackChunk_elyra_metadata_common =
  self.webpackChunk_elyra_metadata_common || []).push([
  [35],
  {
    8111: e => {
      e.exports = function(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      };
    },
    1260: e => {
      e.exports = function(e, t, c) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: c,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = c),
          e
        );
      };
    },
    8527: e => {
      function t() {
        return (
          (e.exports = t =
            Object.assign ||
            function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var c = arguments[t];
                for (var n in c)
                  Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
              }
              return e;
            }),
          t.apply(this, arguments)
        );
      }
      e.exports = t;
    },
    7111: e => {
      e.exports = function(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t);
      };
    },
    4859: e => {
      e.exports = function(e) {
        return e && e.__esModule ? e : { default: e };
      };
    },
    8834: e => {
      e.exports = function(e, t) {
        if (null == e) return {};
        var c,
          n,
          r = {},
          o = Object.keys(e);
        for (n = 0; n < o.length; n++)
          (c = o[n]), t.indexOf(c) >= 0 || (r[c] = e[c]);
        return r;
      };
    },
    8728: (e, t, c) => {
      'undefined' != typeof window && 'undefined' != typeof document && c(1722);
    },
    6035: (e, t, c) => {
      'use strict';
      c.r(t),
        c.d(t, {
          AbstractComponent: () => Tn,
          AbstractComponent2: () => Pn,
          AbstractPureComponent: () => In,
          AbstractPureComponent2: () => Rn,
          Alert: () => Ll,
          Alignment: () => l,
          AnchorButton: () => ll,
          AnimationStates: () => wl,
          Blockquote: () => fl,
          Boundary: () => kn,
          Breadcrumb: () => gl,
          Breadcrumbs: () => Pl,
          Button: () => al,
          ButtonGroup: () => Il,
          Callout: () => Rl,
          Card: () => kl,
          Checkbox: () => $l,
          Classes: () => n,
          Code: () => zl,
          Collapse: () => _l,
          CollapsibleList: () => xl,
          Colors: () => _n,
          ContextMenu: () => Hi,
          ContextMenuTarget: () => Dl,
          ControlGroup: () => Wl,
          DISPLAYNAME_PREFIX: () => xn,
          Dialog: () => El,
          Divider: () => Fl,
          Drawer: () => Bl,
          EditableText: () => jl,
          Elevation: () => s,
          Expander: () => si,
          FileInput: () => Zl,
          FocusStyleManager: () => fn,
          FormGroup: () => Jl,
          H1: () => hl,
          H2: () => pl,
          H3: () => ul,
          H4: () => vl,
          H5: () => ml,
          H6: () => dl,
          HTMLSelect: () => ps,
          HTMLTable: () => us,
          HandleInteractionKind: () => Ks,
          HandleType: () => js,
          Hotkey: () => As,
          Hotkeys: () => Ss,
          HotkeysTarget: () => Is,
          Icon: () => cl,
          InputGroup: () => Ql,
          Intent: () => i,
          KeyCombo: () => bs,
          Keys: () => r,
          Label: () => Ml,
          Menu: () => Nl,
          MenuDivider: () => Cl,
          MenuItem: () => Al,
          MultiSlider: () => Js,
          Navbar: () => xs,
          NavbarDivider: () => Rs,
          NavbarGroup: () => ks,
          NavbarHeading: () => _s,
          NonIdealState: () => Ds,
          NumericInput: () => as,
          OL: () => Hl,
          OverflowDirection: () => il,
          OverflowList: () => Tl,
          Overlay: () => pa,
          PanelStack: () => Bs,
          Popover: () => Ya,
          PopoverInteractionKind: () => Wa,
          PopoverPosition: () => Us,
          Portal: () => ia,
          Position: () => h,
          Pre: () => yl,
          ProgressBar: () => Gs,
          Radio: () => Xl,
          RadioGroup: () => is,
          RangeSlider: () => ci,
          ResizeSensor: () => Pa,
          Slider: () => ni,
          Spinner: () => rl,
          Switch: () => ql,
          Tab: () => ri,
          Tabs: () => hi,
          Tag: () => vi,
          TagInput: () => di,
          Text: () => bl,
          TextArea: () => hs,
          Toast: () => fi,
          Toaster: () => zi,
          Tooltip: () => Ia,
          Tree: () => Mi,
          TreeNode: () => yi,
          UL: () => Vl,
          Utils: () => o,
          comboMatches: () => Ms,
          getKeyCombo: () => Es,
          getKeyComboString: () => Vs,
          getPositionIgnoreAngles: () => v,
          getRef: () => Gn,
          hideHotkeysDialog: () => Ts,
          isPositionHorizontal: () => p,
          isPositionVertical: () => u,
          isRefCallback: () => Un,
          isRefObject: () => Bn,
          parseKeyCombo: () => Hs,
          removeNonHTMLProps: () => Fn,
          setHotkeysDialogProps: () => ws
        });
      var n = {};
      c.r(n),
        c.d(n, {
          ACTIVE: () => d,
          ALERT: () => se,
          ALERT_BODY: () => ie,
          ALERT_CONTENTS: () => he,
          ALERT_FOOTER: () => pe,
          ALIGN_LEFT: () => f,
          ALIGN_RIGHT: () => z,
          BLOCKQUOTE: () => te,
          BREADCRUMB: () => ue,
          BREADCRUMBS: () => me,
          BREADCRUMBS_COLLAPSED: () => de,
          BREADCRUMB_CURRENT: () => ve,
          BUTTON: () => fe,
          BUTTON_GROUP: () => ze,
          BUTTON_SPINNER: () => ye,
          BUTTON_TEXT: () => Me,
          CALLOUT: () => He,
          CALLOUT_ICON: () => Ve,
          CARD: () => Ee,
          CHECKBOX: () => lt,
          CODE: () => ce,
          CODE_BLOCK: () => ne,
          COLLAPSE: () => Le,
          COLLAPSE_BODY: () => ge,
          COLLAPSIBLE_LIST: () => Ce,
          CONTEXT_MENU: () => be,
          CONTEXT_MENU_POPOVER_TARGET: () => Ae,
          CONTROL: () => rt,
          CONTROL_GROUP: () => Se,
          CONTROL_INDICATOR: () => ot,
          CONTROL_INDICATOR_CHILD: () => at,
          DARK: () => y,
          DIALOG: () => Oe,
          DIALOG_BODY: () => we,
          DIALOG_CLOSE_BUTTON: () => Te,
          DIALOG_CONTAINER: () => Ne,
          DIALOG_FOOTER: () => Pe,
          DIALOG_FOOTER_ACTIONS: () => Ie,
          DIALOG_HEADER: () => Re,
          DISABLED: () => M,
          DIVIDER: () => ke,
          DRAWER: () => _e,
          DRAWER_BODY: () => xe,
          DRAWER_FOOTER: () => De,
          DRAWER_HEADER: () => Fe,
          EDITABLE_TEXT: () => Be,
          EDITABLE_TEXT_CONTENT: () => Ue,
          EDITABLE_TEXT_EDITING: () => Ge,
          EDITABLE_TEXT_INPUT: () => je,
          EDITABLE_TEXT_PLACEHOLDER: () => Ke,
          ELEVATION_0: () => _,
          ELEVATION_1: () => x,
          ELEVATION_2: () => D,
          ELEVATION_3: () => F,
          ELEVATION_4: () => B,
          END: () => Ec,
          FILE_INPUT: () => pt,
          FILE_INPUT_HAS_SELECTION: () => ut,
          FILE_UPLOAD_INPUT: () => vt,
          FILE_UPLOAD_INPUT_CUSTOM_TEXT: () => mt,
          FILL: () => H,
          FIXED: () => V,
          FIXED_TOP: () => E,
          FLEX_EXPANDER: () => We,
          FOCUS_DISABLED: () => W,
          FORM_CONTENT: () => gt,
          FORM_GROUP: () => Lt,
          FORM_HELPER_TEXT: () => Ct,
          HEADING: () => re,
          HOTKEY: () => yt,
          HOTKEY_COLUMN: () => Ht,
          HOTKEY_DIALOG: () => Vt,
          HOTKEY_LABEL: () => Mt,
          HTML_SELECT: () => Ye,
          HTML_TABLE: () => Xe,
          HTML_TABLE_BORDERED: () => $e,
          HTML_TABLE_CONDENSED: () => Ze,
          HTML_TABLE_STRIPED: () => Je,
          ICON: () => rn,
          ICON_LARGE: () => an,
          ICON_STANDARD: () => on,
          INLINE: () => L,
          INPUT: () => Qe,
          INPUT_ACTION: () => nt,
          INPUT_GHOST: () => et,
          INPUT_GROUP: () => tt,
          INPUT_LEFT_CONTAINER: () => ct,
          INTENT_DANGER: () => K,
          INTENT_PRIMARY: () => U,
          INTENT_SUCCESS: () => G,
          INTENT_WARNING: () => j,
          INTERACTIVE: () => g,
          KEY: () => dt,
          KEY_COMBO: () => ft,
          LABEL: () => Et,
          LARGE: () => C,
          LIST: () => oe,
          LIST_UNSTYLED: () => ae,
          LOADING: () => b,
          MENU: () => bt,
          MENU_DIVIDER: () => Nt,
          MENU_HEADER: () => wt,
          MENU_ITEM: () => At,
          MENU_ITEM_LABEL: () => St,
          MENU_SUBMENU: () => Ot,
          MINIMAL: () => A,
          MODIFIER_KEY: () => zt,
          MONOSPACE_TEXT: () => X,
          MULTILINE: () => O,
          NAVBAR: () => Tt,
          NAVBAR_DIVIDER: () => Rt,
          NAVBAR_GROUP: () => Pt,
          NAVBAR_HEADING: () => It,
          NON_IDEAL_STATE: () => kt,
          NON_IDEAL_STATE_VISUAL: () => _t,
          NUMERIC_INPUT: () => xt,
          OUTLINED: () => S,
          OVERFLOW_LIST: () => Dt,
          OVERFLOW_LIST_SPACER: () => Ft,
          OVERLAY: () => Bt,
          OVERLAY_BACKDROP: () => Ut,
          OVERLAY_CONTAINER: () => Gt,
          OVERLAY_CONTENT: () => jt,
          OVERLAY_INLINE: () => Kt,
          OVERLAY_OPEN: () => Wt,
          OVERLAY_SCROLL_CONTAINER: () => Yt,
          PANEL_STACK: () => qt,
          PANEL_STACK_HEADER: () => Xt,
          PANEL_STACK_HEADER_BACK: () => $t,
          PANEL_STACK_VIEW: () => Zt,
          POPOVER: () => Jt,
          POPOVER_ARROW: () => Qt,
          POPOVER_BACKDROP: () => ec,
          POPOVER_CONTENT: () => tc,
          POPOVER_CONTENT_SIZING: () => cc,
          POPOVER_DISMISS: () => nc,
          POPOVER_DISMISS_OVERRIDE: () => rc,
          POPOVER_OPEN: () => oc,
          POPOVER_TARGET: () => ac,
          POPOVER_WRAPPER: () => lc,
          PORTAL: () => vc,
          POSITION_BOTTOM: () => I,
          POSITION_LEFT: () => R,
          POSITION_RIGHT: () => k,
          POSITION_TOP: () => P,
          PROGRESS_BAR: () => ic,
          PROGRESS_METER: () => hc,
          PROGRESS_NO_ANIMATION: () => uc,
          PROGRESS_NO_STRIPES: () => pc,
          RADIO: () => st,
          ROUND: () => N,
          RTL: () => le,
          RUNNING_TEXT: () => q,
          SELECT: () => qe,
          SKELETON: () => mc,
          SLIDER: () => dc,
          SLIDER_AXIS: () => fc,
          SLIDER_HANDLE: () => zc,
          SLIDER_LABEL: () => yc,
          SLIDER_PROGRESS: () => Hc,
          SLIDER_TRACK: () => Mc,
          SMALL: () => w,
          SPINNER: () => Lc,
          SPINNER_ANIMATION: () => gc,
          SPINNER_HEAD: () => Cc,
          SPINNER_NO_SPIN: () => bc,
          SPINNER_TRACK: () => Ac,
          START: () => Vc,
          SWITCH: () => it,
          SWITCH_INNER_TEXT: () => ht,
          TAB: () => Sc,
          TABS: () => Pc,
          TAB_INDICATOR: () => Oc,
          TAB_INDICATOR_WRAPPER: () => Nc,
          TAB_LIST: () => wc,
          TAB_PANEL: () => Tc,
          TAG: () => Ic,
          TAG_INPUT: () => kc,
          TAG_INPUT_ICON: () => _c,
          TAG_INPUT_VALUES: () => xc,
          TAG_REMOVE: () => Rc,
          TEXT_DISABLED: () => Q,
          TEXT_LARGE: () => $,
          TEXT_MUTED: () => J,
          TEXT_OVERFLOW_ELLIPSIS: () => ee,
          TEXT_SMALL: () => Z,
          TOAST: () => Dc,
          TOAST_CONTAINER: () => Fc,
          TOAST_MESSAGE: () => Bc,
          TOOLTIP: () => Uc,
          TOOLTIP_INDICATOR: () => Gc,
          TRANSITION_CONTAINER: () => sc,
          TREE: () => jc,
          TREE_NODE: () => Kc,
          TREE_NODE_CARET: () => Wc,
          TREE_NODE_CARET_CLOSED: () => Yc,
          TREE_NODE_CARET_NONE: () => qc,
          TREE_NODE_CARET_OPEN: () => Xc,
          TREE_NODE_CONTENT: () => $c,
          TREE_NODE_EXPANDED: () => Zc,
          TREE_NODE_ICON: () => Jc,
          TREE_NODE_LABEL: () => Qc,
          TREE_NODE_LIST: () => en,
          TREE_NODE_SECONDARY_LABEL: () => tn,
          TREE_NODE_SELECTED: () => cn,
          TREE_ROOT: () => nn,
          UI_TEXT: () => Y,
          VERTICAL: () => T,
          alignmentClass: () => sn,
          elevationClass: () => hn,
          getClassNamespace: () => ln,
          iconClass: () => pn,
          intentClass: () => un,
          positionClass: () => vn
        });
      var r = {};
      c.r(r),
        c.d(r, {
          ARROW_DOWN: () => Qn,
          ARROW_LEFT: () => $n,
          ARROW_RIGHT: () => Jn,
          ARROW_UP: () => Zn,
          BACKSPACE: () => jn,
          DELETE: () => er,
          ENTER: () => Wn,
          ESCAPE: () => qn,
          SHIFT: () => Yn,
          SPACE: () => Xn,
          TAB: () => Kn,
          isKeyboardClick: () => tr
        });
      var o = {};
      c.r(o),
        c.d(o, {
          approxEqual: () => On,
          arrayLengthCompare: () => Sn,
          arraysEqual: () => cr,
          clamp: () => Nn,
          countDecimalPlaces: () => wn,
          deepCompareKeys: () => rr,
          elementIsOrContains: () => vr,
          ensureElement: () => Mr,
          getDeepUnequalKeyValues: () => or,
          getDisplayName: () => Vr,
          getRef: () => Gn,
          isElementOfType: () => Er,
          isFunction: () => hr,
          isNodeEnv: () => An,
          isReactElement: () => Hr,
          isReactNodeEmpty: () => yr,
          safeInvoke: () => pr,
          safeInvokeMember: () => Lr,
          safeInvokeOrValue: () => ur,
          shallowCompareKeys: () => nr,
          throttle: () => fr,
          throttleEvent: () => mr,
          throttleReactEventCallback: () => dr
        });
      var a = {};
      c.r(a), c.d(a, { hide: () => Za, isOpen: () => Ja, show: () => $a });
      var l = { CENTER: 'center', LEFT: 'left', RIGHT: 'right' },
        s = { ZERO: 0, ONE: 1, TWO: 2, THREE: 3, FOUR: 4 },
        i = {
          NONE: 'none',
          PRIMARY: 'primary',
          SUCCESS: 'success',
          WARNING: 'warning',
          DANGER: 'danger'
        },
        h = {
          BOTTOM: 'bottom',
          BOTTOM_LEFT: 'bottom-left',
          BOTTOM_RIGHT: 'bottom-right',
          LEFT: 'left',
          LEFT_BOTTOM: 'left-bottom',
          LEFT_TOP: 'left-top',
          RIGHT: 'right',
          RIGHT_BOTTOM: 'right-bottom',
          RIGHT_TOP: 'right-top',
          TOP: 'top',
          TOP_LEFT: 'top-left',
          TOP_RIGHT: 'top-right'
        };
      function p(e) {
        return (
          e === h.TOP ||
          e === h.TOP_LEFT ||
          e === h.TOP_RIGHT ||
          e === h.BOTTOM ||
          e === h.BOTTOM_LEFT ||
          e === h.BOTTOM_RIGHT
        );
      }
      function u(e) {
        return (
          e === h.LEFT ||
          e === h.LEFT_TOP ||
          e === h.LEFT_BOTTOM ||
          e === h.RIGHT ||
          e === h.RIGHT_TOP ||
          e === h.RIGHT_BOTTOM
        );
      }
      function v(e) {
        return e === h.TOP || e === h.TOP_LEFT || e === h.TOP_RIGHT
          ? h.TOP
          : e === h.BOTTOM || e === h.BOTTOM_LEFT || e === h.BOTTOM_RIGHT
          ? h.BOTTOM
          : e === h.LEFT || e === h.LEFT_TOP || e === h.LEFT_BOTTOM
          ? h.LEFT
          : h.RIGHT;
      }
      var m =
          {}.BLUEPRINT_NAMESPACE || {}.REACT_APP_BLUEPRINT_NAMESPACE || 'bp3',
        d = m + '-active',
        f = m + '-align-left',
        z = m + '-align-right',
        y = m + '-dark',
        M = m + '-disabled',
        H = m + '-fill',
        V = m + '-fixed',
        E = m + '-fixed-top',
        L = m + '-inline',
        g = m + '-interactive',
        C = m + '-large',
        b = m + '-loading',
        A = m + '-minimal',
        S = m + '-outlined',
        O = m + '-multiline',
        N = m + '-round',
        w = m + '-small',
        T = m + '-vertical',
        P = vn(h.TOP),
        I = vn(h.BOTTOM),
        R = vn(h.LEFT),
        k = vn(h.RIGHT),
        _ = hn(s.ZERO),
        x = hn(s.ONE),
        D = hn(s.TWO),
        F = hn(s.THREE),
        B = hn(s.FOUR),
        U = un(i.PRIMARY),
        G = un(i.SUCCESS),
        j = un(i.WARNING),
        K = un(i.DANGER),
        W = m + '-focus-disabled',
        Y = m + '-ui-text',
        q = m + '-running-text',
        X = m + '-monospace-text',
        $ = m + '-text-large',
        Z = m + '-text-small',
        J = m + '-text-muted',
        Q = m + '-text-disabled',
        ee = m + '-text-overflow-ellipsis',
        te = m + '-blockquote',
        ce = m + '-code',
        ne = m + '-code-block',
        re = m + '-heading',
        oe = m + '-list',
        ae = m + '-list-unstyled',
        le = m + '-rtl',
        se = m + '-alert',
        ie = se + '-body',
        he = se + '-contents',
        pe = se + '-footer',
        ue = m + '-breadcrumb',
        ve = ue + '-current',
        me = ue + 's',
        de = ue + 's-collapsed',
        fe = m + '-button',
        ze = fe + '-group',
        ye = fe + '-spinner',
        Me = fe + '-text',
        He = m + '-callout',
        Ve = He + '-icon',
        Ee = m + '-card',
        Le = m + '-collapse',
        ge = Le + '-body',
        Ce = m + '-collapse-list',
        be = m + '-context-menu',
        Ae = be + '-popover-target',
        Se = m + '-control-group',
        Oe = m + '-dialog',
        Ne = Oe + '-container',
        we = Oe + '-body',
        Te = Oe + '-close-button',
        Pe = Oe + '-footer',
        Ie = Oe + '-footer-actions',
        Re = Oe + '-header',
        ke = m + '-divider',
        _e = m + '-drawer',
        xe = _e + '-body',
        De = _e + '-footer',
        Fe = _e + '-header',
        Be = m + '-editable-text',
        Ue = Be + '-content',
        Ge = Be + '-editing',
        je = Be + '-input',
        Ke = Be + '-placeholder',
        We = m + '-flex-expander',
        Ye = m + '-html-select',
        qe = m + '-select',
        Xe = m + '-html-table',
        $e = Xe + '-bordered',
        Ze = Xe + '-condensed',
        Je = Xe + '-striped',
        Qe = m + '-input',
        et = Qe + '-ghost',
        tt = Qe + '-group',
        ct = Qe + '-left-container',
        nt = Qe + '-action',
        rt = m + '-control',
        ot = rt + '-indicator',
        at = ot + '-child',
        lt = m + '-checkbox',
        st = m + '-radio',
        it = m + '-switch',
        ht = it + '-inner-text',
        pt = m + '-file-input',
        ut = m + '-file-input-has-selection',
        vt = m + '-file-upload-input',
        mt = m + '-file-upload-input-custom-text',
        dt = m + '-key',
        ft = dt + '-combo',
        zt = m + '-modifier-key',
        yt = m + '-hotkey',
        Mt = yt + '-label',
        Ht = yt + '-column',
        Vt = yt + '-dialog',
        Et = m + '-label',
        Lt = m + '-form-group',
        gt = m + '-form-content',
        Ct = m + '-form-helper-text',
        bt = m + '-menu',
        At = bt + '-item',
        St = At + '-label',
        Ot = m + '-submenu',
        Nt = bt + '-divider',
        wt = bt + '-header',
        Tt = m + '-navbar',
        Pt = Tt + '-group',
        It = Tt + '-heading',
        Rt = Tt + '-divider',
        kt = m + '-non-ideal-state',
        _t = kt + '-visual',
        xt = m + '-numeric-input',
        Dt = m + '-overflow-list',
        Ft = Dt + '-spacer',
        Bt = m + '-overlay',
        Ut = Bt + '-backdrop',
        Gt = Bt + '-container',
        jt = Bt + '-content',
        Kt = Bt + '-inline',
        Wt = Bt + '-open',
        Yt = Bt + '-scroll-container',
        qt = m + '-panel-stack',
        Xt = qt + '-header',
        $t = qt + '-header-back',
        Zt = qt + '-view',
        Jt = m + '-popover',
        Qt = Jt + '-arrow',
        ec = Jt + '-backdrop',
        tc = Jt + '-content',
        cc = tc + '-sizing',
        nc = Jt + '-dismiss',
        rc = nc + '-override',
        oc = Jt + '-open',
        ac = Jt + '-target',
        lc = Jt + '-wrapper',
        sc = m + '-transition-container',
        ic = m + '-progress-bar',
        hc = m + '-progress-meter',
        pc = m + '-no-stripes',
        uc = m + '-no-animation',
        vc = m + '-portal',
        mc = m + '-skeleton',
        dc = m + '-slider',
        fc = dc + '-axis',
        zc = dc + '-handle',
        yc = dc + '-label',
        Mc = dc + '-track',
        Hc = dc + '-progress',
        Vc = m + '-start',
        Ec = m + '-end',
        Lc = m + '-spinner',
        gc = Lc + '-animation',
        Cc = Lc + '-head',
        bc = m + '-no-spin',
        Ac = Lc + '-track',
        Sc = m + '-tab',
        Oc = Sc + '-indicator',
        Nc = Oc + '-wrapper',
        wc = Sc + '-list',
        Tc = Sc + '-panel',
        Pc = Sc + 's',
        Ic = m + '-tag',
        Rc = Ic + '-remove',
        kc = m + '-tag-input',
        _c = kc + '-icon',
        xc = kc + '-values',
        Dc = m + '-toast',
        Fc = Dc + '-container',
        Bc = Dc + '-message',
        Uc = m + '-tooltip',
        Gc = Uc + '-indicator',
        jc = m + '-tree',
        Kc = m + '-tree-node',
        Wc = Kc + '-caret',
        Yc = Wc + '-closed',
        qc = Wc + '-none',
        Xc = Wc + '-open',
        $c = Kc + '-content',
        Zc = Kc + '-expanded',
        Jc = Kc + '-icon',
        Qc = Kc + '-label',
        en = Kc + '-list',
        tn = Kc + '-secondary-label',
        cn = Kc + '-selected',
        nn = m + '-tree-root',
        rn = m + '-icon',
        on = rn + '-standard',
        an = rn + '-large';
      function ln() {
        return m;
      }
      function sn(e) {
        switch (e) {
          case l.LEFT:
            return f;
          case l.RIGHT:
            return z;
          default:
            return;
        }
      }
      function hn(e) {
        if (null != e) return m + '-elevation-' + e;
      }
      function pn(e) {
        if (null != e)
          return 0 === e.indexOf(m + '-icon-') ? e : m + '-icon-' + e;
      }
      function un(e) {
        if (null != e && e !== i.NONE) return m + '-intent-' + e.toLowerCase();
      }
      function vn(e) {
        if (null != e) return m + '-position-' + e;
      }
      var mn = (function() {
          function e(e, t) {
            var c = this;
            (this.container = e),
              (this.className = t),
              (this.isRunning = !1),
              (this.handleKeyDown = function(e) {
                9 === e.which &&
                  (c.reset(),
                  c.container.addEventListener('mousedown', c.handleMouseDown));
              }),
              (this.handleMouseDown = function() {
                c.reset(),
                  c.container.classList.add(c.className),
                  c.container.addEventListener('keydown', c.handleKeyDown);
              });
          }
          return (
            (e.prototype.isActive = function() {
              return this.isRunning;
            }),
            (e.prototype.start = function() {
              this.container.addEventListener(
                'mousedown',
                this.handleMouseDown
              ),
                (this.isRunning = !0);
            }),
            (e.prototype.stop = function() {
              this.reset(), (this.isRunning = !1);
            }),
            (e.prototype.reset = function() {
              this.container.classList.remove(this.className),
                this.container.removeEventListener(
                  'keydown',
                  this.handleKeyDown
                ),
                this.container.removeEventListener(
                  'mousedown',
                  this.handleMouseDown
                );
            }),
            e
          );
        })(),
        dn =
          'undefined' != typeof document
            ? new mn(document.documentElement, W)
            : {
                isActive: function() {
                  return !0;
                },
                start: function() {
                  return !0;
                },
                stop: function() {
                  return !0;
                }
              },
        fn = {
          alwaysShowFocus: function() {
            return dn.stop();
          },
          isActive: function() {
            return dn.isActive();
          },
          onlyShowFocusOnTabs: function() {
            return dn.start();
          }
        },
        zn = function(e, t) {
          return (zn =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(e, t) {
                e.__proto__ = t;
              }) ||
            function(e, t) {
              for (var c in t) t.hasOwnProperty(c) && (e[c] = t[c]);
            })(e, t);
        };
      function yn(e, t) {
        function c() {
          this.constructor = e;
        }
        zn(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((c.prototype = t.prototype), new c()));
      }
      var Mn = function() {
        return (Mn =
          Object.assign ||
          function(e) {
            for (var t, c = 1, n = arguments.length; c < n; c++)
              for (var r in (t = arguments[c]))
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e;
          }).apply(this, arguments);
      };
      function Hn(e, t) {
        var c = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (c[n] = e[n]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            t.indexOf(n[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
              (c[n[r]] = e[n[r]]);
        }
        return c;
      }
      function Vn(e, t, c, n) {
        var r,
          o = arguments.length,
          a =
            o < 3
              ? t
              : null === n
              ? (n = Object.getOwnPropertyDescriptor(t, c))
              : n;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          a = Reflect.decorate(e, t, c, n);
        else
          for (var l = e.length - 1; l >= 0; l--)
            (r = e[l]) &&
              (a = (o < 3 ? r(a) : o > 3 ? r(t, c, a) : r(t, c)) || a);
        return o > 3 && a && Object.defineProperty(t, c, a), a;
      }
      function En() {
        for (var e = 0, t = 0, c = arguments.length; t < c; t++)
          e += arguments[t].length;
        var n = Array(e),
          r = 0;
        for (t = 0; t < c; t++)
          for (var o = arguments[t], a = 0, l = o.length; a < l; a++, r++)
            n[r] = o[a];
        return n;
      }
      var Ln = c(2959),
        gn = '[Blueprint]',
        Cn = gn + ' <Dialog> iconName is ignored if title is omitted.',
        bn =
          gn +
          ' <Dialog> isCloseButtonShown prop is ignored if title is omitted.';
      function An(e) {
        return {} && 'production' === e;
      }
      function Sn(e, t) {
        return (
          void 0 === e && (e = []),
          void 0 === t && (t = []),
          e.length - t.length
        );
      }
      function On(e, t, c) {
        return void 0 === c && (c = 1e-5), Math.abs(e - t) <= c;
      }
      function Nn(e, t, c) {
        if (null == e) return e;
        if (c < t)
          throw new Error('[Blueprint] clamp: max cannot be less than min');
        return Math.min(Math.max(e, t), c);
      }
      function wn(e) {
        if (!isFinite(e)) return 0;
        for (var t = 1, c = 0; Math.round(e * t) / t !== e; ) (t *= 10), c++;
        return c;
      }
      var Tn = (function(e) {
          function t(t, c) {
            var n = e.call(this, t, c) || this;
            return (
              (n.timeoutIds = []),
              (n.clearTimeouts = function() {
                if (n.timeoutIds.length > 0) {
                  for (var e = 0, t = n.timeoutIds; e < t.length; e++) {
                    var c = t[e];
                    window.clearTimeout(c);
                  }
                  n.timeoutIds = [];
                }
              }),
              An('production') || n.validateProps(n.props),
              n
            );
          }
          return (
            yn(t, e),
            (t.prototype.componentWillReceiveProps = function(e) {
              An('production') || this.validateProps(e);
            }),
            (t.prototype.componentWillUnmount = function() {
              this.clearTimeouts();
            }),
            (t.prototype.setTimeout = function(e, t) {
              var c = window.setTimeout(e, t);
              return (
                this.timeoutIds.push(c),
                function() {
                  return window.clearTimeout(c);
                }
              );
            }),
            (t.prototype.validateProps = function(e) {}),
            t
          );
        })(Ln.Component),
        Pn = (function(e) {
          function t(t, c) {
            var n = e.call(this, t, c) || this;
            return (
              (n.timeoutIds = []),
              (n.clearTimeouts = function() {
                if (n.timeoutIds.length > 0) {
                  for (var e = 0, t = n.timeoutIds; e < t.length; e++) {
                    var c = t[e];
                    window.clearTimeout(c);
                  }
                  n.timeoutIds = [];
                }
              }),
              An('production') || n.validateProps(n.props),
              n
            );
          }
          return (
            yn(t, e),
            (t.prototype.componentDidUpdate = function(e, t, c) {
              An('production') || this.validateProps(this.props);
            }),
            (t.prototype.componentWillUnmount = function() {
              this.clearTimeouts();
            }),
            (t.prototype.setTimeout = function(e, t) {
              var c = window.setTimeout(e, t);
              return (
                this.timeoutIds.push(c),
                function() {
                  return window.clearTimeout(c);
                }
              );
            }),
            (t.prototype.validateProps = function(e) {}),
            t
          );
        })(Ln.Component),
        In = (function(e) {
          function t(t, c) {
            var n = e.call(this, t, c) || this;
            return (
              (n.timeoutIds = []),
              (n.clearTimeouts = function() {
                if (n.timeoutIds.length > 0) {
                  for (var e = 0, t = n.timeoutIds; e < t.length; e++) {
                    var c = t[e];
                    window.clearTimeout(c);
                  }
                  n.timeoutIds = [];
                }
              }),
              An('production') || n.validateProps(n.props),
              n
            );
          }
          return (
            yn(t, e),
            (t.prototype.componentWillReceiveProps = function(e) {
              An('production') || this.validateProps(e);
            }),
            (t.prototype.componentWillUnmount = function() {
              this.clearTimeouts();
            }),
            (t.prototype.setTimeout = function(e, t) {
              var c = window.setTimeout(e, t);
              return (
                this.timeoutIds.push(c),
                function() {
                  return window.clearTimeout(c);
                }
              );
            }),
            (t.prototype.validateProps = function(e) {}),
            t
          );
        })(Ln.PureComponent),
        Rn = (function(e) {
          function t(t, c) {
            var n = e.call(this, t, c) || this;
            return (
              (n.timeoutIds = []),
              (n.clearTimeouts = function() {
                if (n.timeoutIds.length > 0) {
                  for (var e = 0, t = n.timeoutIds; e < t.length; e++) {
                    var c = t[e];
                    window.clearTimeout(c);
                  }
                  n.timeoutIds = [];
                }
              }),
              An('production') || n.validateProps(n.props),
              n
            );
          }
          return (
            yn(t, e),
            (t.prototype.componentDidUpdate = function(e, t, c) {
              An('production') || this.validateProps(this.props);
            }),
            (t.prototype.componentWillUnmount = function() {
              this.clearTimeouts();
            }),
            (t.prototype.setTimeout = function(e, t) {
              var c = window.setTimeout(e, t);
              return (
                this.timeoutIds.push(c),
                function() {
                  return window.clearTimeout(c);
                }
              );
            }),
            (t.prototype.validateProps = function(e) {}),
            t
          );
        })(Ln.PureComponent),
        kn = { START: 'start', END: 'end' },
        _n = {
          BLACK: '#10161A',
          BLUE1: '#0E5A8A',
          BLUE2: '#106BA3',
          BLUE3: '#137CBD',
          BLUE4: '#2B95D6',
          BLUE5: '#48AFF0',
          COBALT1: '#1F4B99',
          COBALT2: '#2458B3',
          COBALT3: '#2965CC',
          COBALT4: '#4580E6',
          COBALT5: '#669EFF',
          DARK_GRAY1: '#182026',
          DARK_GRAY2: '#202B33',
          DARK_GRAY3: '#293742',
          DARK_GRAY4: '#30404D',
          DARK_GRAY5: '#394B59',
          FOREST1: '#1D7324',
          FOREST2: '#238C2C',
          FOREST3: '#29A634',
          FOREST4: '#43BF4D',
          FOREST5: '#62D96B',
          GOLD1: '#A67908',
          GOLD2: '#BF8C0A',
          GOLD3: '#D99E0B',
          GOLD4: '#F2B824',
          GOLD5: '#FFC940',
          GRAY1: '#5C7080',
          GRAY2: '#738694',
          GRAY3: '#8A9BA8',
          GRAY4: '#A7B6C2',
          GRAY5: '#BFCCD6',
          GREEN1: '#0A6640',
          GREEN2: '#0D8050',
          GREEN3: '#0F9960',
          GREEN4: '#15B371',
          GREEN5: '#3DCC91',
          INDIGO1: '#5642A6',
          INDIGO2: '#634DBF',
          INDIGO3: '#7157D9',
          INDIGO4: '#9179F2',
          INDIGO5: '#AD99FF',
          LIGHT_GRAY1: '#CED9E0',
          LIGHT_GRAY2: '#D8E1E8',
          LIGHT_GRAY3: '#E1E8ED',
          LIGHT_GRAY4: '#EBF1F5',
          LIGHT_GRAY5: '#F5F8FA',
          LIME1: '#728C23',
          LIME2: '#87A629',
          LIME3: '#9BBF30',
          LIME4: '#B6D94C',
          LIME5: '#D1F26D',
          ORANGE1: '#A66321',
          ORANGE2: '#BF7326',
          ORANGE3: '#D9822B',
          ORANGE4: '#F29D49',
          ORANGE5: '#FFB366',
          RED1: '#A82A2A',
          RED2: '#C23030',
          RED3: '#DB3737',
          RED4: '#F55656',
          RED5: '#FF7373',
          ROSE1: '#A82255',
          ROSE2: '#C22762',
          ROSE3: '#DB2C6F',
          ROSE4: '#F5498B',
          ROSE5: '#FF66A1',
          SEPIA1: '#63411E',
          SEPIA2: '#7D5125',
          SEPIA3: '#96622D',
          SEPIA4: '#B07B46',
          SEPIA5: '#C99765',
          TURQUOISE1: '#008075',
          TURQUOISE2: '#00998C',
          TURQUOISE3: '#00B3A4',
          TURQUOISE4: '#14CCBD',
          TURQUOISE5: '#2EE6D6',
          VERMILION1: '#9E2B0E',
          VERMILION2: '#B83211',
          VERMILION3: '#D13913',
          VERMILION4: '#EB532D',
          VERMILION5: '#FF6E4A',
          VIOLET1: '#5C255C',
          VIOLET2: '#752F75',
          VIOLET3: '#8F398F',
          VIOLET4: '#A854A8',
          VIOLET5: '#C274C2',
          WHITE: '#FFFFFF'
        },
        xn = 'Blueprint3',
        Dn = [
          'active',
          'alignText',
          'containerRef',
          'current',
          'elementRef',
          'fill',
          'icon',
          'inputRef',
          'intent',
          'inline',
          'large',
          'loading',
          'leftElement',
          'leftIcon',
          'minimal',
          'onRemove',
          'outlined',
          'panel',
          'panelClassName',
          'popoverProps',
          'rightElement',
          'rightIcon',
          'round',
          'small',
          'text'
        ];
      function Fn(e, t, c) {
        return (
          void 0 === t && (t = Dn),
          void 0 === c && (c = !1),
          c && (t = t.concat(Dn)),
          t.reduce(function(e, t) {
            return e.hasOwnProperty(t) && delete e[t], e;
          }, Mn({}, e))
        );
      }
      function Bn(e) {
        return null != e && void 0 !== e.current;
      }
      function Un(e) {
        return 'function' == typeof e;
      }
      function Gn(e) {
        return e && e.current ? e.current : e;
      }
      var jn = 8,
        Kn = 9,
        Wn = 13,
        Yn = 16,
        qn = 27,
        Xn = 32,
        $n = 37,
        Zn = 38,
        Jn = 39,
        Qn = 40,
        er = 46;
      function tr(e) {
        return e === Wn || e === Xn;
      }
      function cr(e, t, c) {
        return (
          void 0 === c &&
            (c = function(e, t) {
              return e === t;
            }),
          (null == e && null == t) ||
            (null != e &&
              null != t &&
              e.length === t.length &&
              e.every(function(e, n) {
                return c(e, t[n]);
              }))
        );
      }
      function nr(e, t, c) {
        if (null == e && null == t) return !0;
        if (null == e || null == t) return !1;
        if (Array.isArray(e) || Array.isArray(t)) return !1;
        if (null != c) return ar(e, t, c);
        var n = Object.keys(e),
          r = Object.keys(t);
        return ar(e, t, { include: n }) && ar(e, t, { include: r });
      }
      function rr(e, t, c) {
        if (e === t) return !0;
        if (null == e && null == t) return !0;
        if (null == e || null == t) return !1;
        if (Array.isArray(e) || Array.isArray(t)) return cr(e, t, rr);
        if (sr(e) || sr(t)) return e === t;
        if (null != c) return lr(e, t, c);
        if (e.constructor !== t.constructor) return !1;
        var n = Object.keys(e),
          r = Object.keys(t);
        return (
          null != n &&
          null != r &&
          ((0 === n.length && 0 === r.length) || (cr(n, r) && lr(e, t, n)))
        );
      }
      function or(e, t, c) {
        return (
          void 0 === e && (e = {}),
          void 0 === t && (t = {}),
          (function(e, t, c, n) {
            return c
              .filter(function(c) {
                return !(function(e, t, c) {
                  return rr(e, t, [c]);
                })(e, t, c);
              })
              .map(function(c) {
                return { key: c, valueA: e[c], valueB: t[c] };
              });
          })(
            e,
            t,
            null == c
              ? (function(e, t) {
                  var c = Object.keys(e),
                    n = Object.keys(t),
                    r = ir(c.concat(n));
                  return Object.keys(r);
                })(e, t)
              : c
          )
        );
      }
      function ar(e, t, c) {
        return (function(e, t, c) {
          if (
            (function(e) {
              return null != e && null != e.include;
            })(c)
          )
            return c.include;
          if (
            (function(e) {
              return null != e && null != e.exclude;
            })(c)
          ) {
            var n = Object.keys(e),
              r = Object.keys(t),
              o = ir(n.concat(r));
            return (
              c.exclude.forEach(function(e) {
                return delete o[e];
              }),
              Object.keys(o)
            );
          }
          return [];
        })(e, t, c).every(function(c) {
          return e.hasOwnProperty(c) === t.hasOwnProperty(c) && e[c] === t[c];
        });
      }
      function lr(e, t, c) {
        return c.every(function(c) {
          return e.hasOwnProperty(c) === t.hasOwnProperty(c) && rr(e[c], t[c]);
        });
      }
      function sr(e) {
        return (
          'number' == typeof e || 'string' == typeof e || 'boolean' == typeof e
        );
      }
      function ir(e) {
        return e.reduce(function(e, t) {
          return (e[t] = !0), e;
        }, {});
      }
      function hr(e) {
        return 'function' == typeof e;
      }
      function pr(e) {
        for (var t = [], c = 1; c < arguments.length; c++)
          t[c - 1] = arguments[c];
        if (hr(e)) return e.apply(void 0, t);
      }
      function ur(e) {
        for (var t = [], c = 1; c < arguments.length; c++)
          t[c - 1] = arguments[c];
        return hr(e) ? e.apply(void 0, t) : e;
      }
      function vr(e, t) {
        return e === t || e.contains(t);
      }
      function mr(e, t, c) {
        var n = zr(function(t) {
          e.dispatchEvent(new CustomEvent(c, t));
        });
        return e.addEventListener(t, n), n;
      }
      function dr(e, t) {
        return (
          void 0 === t && (t = {}),
          zr(
            e,
            function(e) {
              t.preventDefault && e.preventDefault();
            },
            function(e) {
              return e.persist();
            }
          )
        );
      }
      function fr(e) {
        return zr(e);
      }
      function zr(e, t, c) {
        var n = !1;
        return function() {
          for (var r = [], o = 0; o < arguments.length; o++)
            r[o] = arguments[o];
          hr(t) && t.apply(void 0, r),
            n ||
              ((n = !0),
              hr(c) && c.apply(void 0, r),
              requestAnimationFrame(function() {
                e.apply(void 0, r), (n = !1);
              }));
        };
      }
      function yr(e, t) {
        return (
          void 0 === t && (t = !1),
          null == e ||
            '' === e ||
            !1 === e ||
            (!t &&
              Array.isArray(e) &&
              (0 === e.length ||
                e.every(function(e) {
                  return yr(e, !0);
                })))
        );
      }
      function Mr(e, t) {
        return (
          void 0 === t && (t = 'span'),
          null == e || 'boolean' == typeof e
            ? void 0
            : 'string' == typeof e
            ? e.trim().length > 0
              ? Ln.createElement(t, {}, e)
              : void 0
            : 'number' == typeof e ||
              'symbol' == typeof e.type ||
              Array.isArray(e)
            ? Ln.createElement(t, {}, e)
            : Hr(e)
            ? e
            : void 0
        );
      }
      function Hr(e) {
        return 'object' == typeof e && void 0 !== e.type && void 0 !== e.props;
      }
      function Vr(e) {
        return e.displayName || e.name || 'Unknown';
      }
      function Er(e, t) {
        return (
          null != e &&
          null != e.type &&
          null != e.type.displayName &&
          e.type.displayName === t.displayName
        );
      }
      function Lr(e, t) {
        for (var c = [], n = 2; n < arguments.length; n++)
          c[n - 2] = arguments[n];
        if (null != e) {
          var r = e[t];
          if (hr(r)) return r.apply(void 0, c);
        }
      }
      c(8728);
      var gr = c(2779),
        Cr = c.n(gr),
        br = c(8844),
        Ar = c(6847),
        Sr = c(8527),
        Or = c.n(Sr),
        Nr = c(8111),
        wr = c.n(Nr),
        Tr = c(7111),
        Pr = c.n(Tr),
        Ir = c(1260),
        Rr = c.n(Ir),
        kr = c(2263),
        _r = c.n(kr),
        xr = c(5315),
        Dr = c.n(xr),
        Fr = Dr()(),
        Br = Dr()(),
        Ur = (function(e) {
          function t() {
            for (
              var t, c = arguments.length, n = new Array(c), r = 0;
              r < c;
              r++
            )
              n[r] = arguments[r];
            return (
              (t = e.call.apply(e, [this].concat(n)) || this),
              Rr()(wr()(t), 'referenceNode', void 0),
              Rr()(wr()(t), 'setReferenceNode', function(e) {
                e &&
                  t.referenceNode !== e &&
                  ((t.referenceNode = e), t.forceUpdate());
              }),
              t
            );
          }
          Pr()(t, e);
          var c = t.prototype;
          return (
            (c.componentWillUnmount = function() {
              this.referenceNode = null;
            }),
            (c.render = function() {
              return Ln.createElement(
                Fr.Provider,
                { value: this.referenceNode },
                Ln.createElement(
                  Br.Provider,
                  { value: this.setReferenceNode },
                  this.props.children
                )
              );
            }),
            t
          );
        })(Ln.Component),
        Gr = function(e) {
          return Array.isArray(e) ? e[0] : e;
        },
        jr = function(e) {
          if ('function' == typeof e) {
            for (
              var t = arguments.length, c = new Array(t > 1 ? t - 1 : 0), n = 1;
              n < t;
              n++
            )
              c[n - 1] = arguments[n];
            return e.apply(void 0, c);
          }
        },
        Kr = function(e, t) {
          if ('function' == typeof e) return jr(e, t);
          null != e && (e.current = t);
        },
        Wr = (function(e) {
          function t() {
            for (
              var t, c = arguments.length, n = new Array(c), r = 0;
              r < c;
              r++
            )
              n[r] = arguments[r];
            return (
              (t = e.call.apply(e, [this].concat(n)) || this),
              Rr()(wr()(t), 'refHandler', function(e) {
                Kr(t.props.innerRef, e), jr(t.props.setReferenceNode, e);
              }),
              t
            );
          }
          Pr()(t, e);
          var c = t.prototype;
          return (
            (c.componentWillUnmount = function() {
              Kr(this.props.innerRef, null);
            }),
            (c.render = function() {
              return (
                _r()(
                  Boolean(this.props.setReferenceNode),
                  '`Reference` should not be used outside of a `Manager` component.'
                ),
                Gr(this.props.children)({ ref: this.refHandler })
              );
            }),
            t
          );
        })(Ln.Component);
      function Yr(e) {
        return Ln.createElement(Br.Consumer, null, function(t) {
          return Ln.createElement(Wr, Or()({ setReferenceNode: t }, e));
        });
      }
      var qr = c(8834),
        Xr = c.n(qr),
        $r = c(3185),
        Zr = c.n($r),
        Jr =
          'undefined' != typeof window &&
          'undefined' != typeof document &&
          'undefined' != typeof navigator,
        Qr = (function() {
          for (
            var e = ['Edge', 'Trident', 'Firefox'], t = 0;
            t < e.length;
            t += 1
          )
            if (Jr && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
          return 0;
        })(),
        eo =
          Jr && window.Promise
            ? function(e) {
                var t = !1;
                return function() {
                  t ||
                    ((t = !0),
                    window.Promise.resolve().then(function() {
                      (t = !1), e();
                    }));
                };
              }
            : function(e) {
                var t = !1;
                return function() {
                  t ||
                    ((t = !0),
                    setTimeout(function() {
                      (t = !1), e();
                    }, Qr));
                };
              };
      function to(e) {
        return e && '[object Function]' === {}.toString.call(e);
      }
      function co(e, t) {
        if (1 !== e.nodeType) return [];
        var c = e.ownerDocument.defaultView.getComputedStyle(e, null);
        return t ? c[t] : c;
      }
      function no(e) {
        return 'HTML' === e.nodeName ? e : e.parentNode || e.host;
      }
      function ro(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
          case 'HTML':
          case 'BODY':
            return e.ownerDocument.body;
          case '#document':
            return e.body;
        }
        var t = co(e),
          c = t.overflow,
          n = t.overflowX,
          r = t.overflowY;
        return /(auto|scroll|overlay)/.test(c + r + n) ? e : ro(no(e));
      }
      function oo(e) {
        return e && e.referenceNode ? e.referenceNode : e;
      }
      var ao = Jr && !(!window.MSInputMethodContext || !document.documentMode),
        lo = Jr && /MSIE 10/.test(navigator.userAgent);
      function so(e) {
        return 11 === e ? ao : 10 === e ? lo : ao || lo;
      }
      function io(e) {
        if (!e) return document.documentElement;
        for (
          var t = so(10) ? document.body : null, c = e.offsetParent || null;
          c === t && e.nextElementSibling;

        )
          c = (e = e.nextElementSibling).offsetParent;
        var n = c && c.nodeName;
        return n && 'BODY' !== n && 'HTML' !== n
          ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(c.nodeName) &&
            'static' === co(c, 'position')
            ? io(c)
            : c
          : e
          ? e.ownerDocument.documentElement
          : document.documentElement;
      }
      function ho(e) {
        return null !== e.parentNode ? ho(e.parentNode) : e;
      }
      function po(e, t) {
        if (!(e && e.nodeType && t && t.nodeType))
          return document.documentElement;
        var c = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
          n = c ? e : t,
          r = c ? t : e,
          o = document.createRange();
        o.setStart(n, 0), o.setEnd(r, 0);
        var a,
          l,
          s = o.commonAncestorContainer;
        if ((e !== s && t !== s) || n.contains(r))
          return 'BODY' === (l = (a = s).nodeName) ||
            ('HTML' !== l && io(a.firstElementChild) !== a)
            ? io(s)
            : s;
        var i = ho(e);
        return i.host ? po(i.host, t) : po(e, ho(t).host);
      }
      function uo(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 'top',
          c = 'top' === t ? 'scrollTop' : 'scrollLeft',
          n = e.nodeName;
        if ('BODY' === n || 'HTML' === n) {
          var r = e.ownerDocument.documentElement,
            o = e.ownerDocument.scrollingElement || r;
          return o[c];
        }
        return e[c];
      }
      function vo(e, t) {
        var c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          n = uo(t, 'top'),
          r = uo(t, 'left'),
          o = c ? -1 : 1;
        return (
          (e.top += n * o),
          (e.bottom += n * o),
          (e.left += r * o),
          (e.right += r * o),
          e
        );
      }
      function mo(e, t) {
        var c = 'x' === t ? 'Left' : 'Top',
          n = 'Left' === c ? 'Right' : 'Bottom';
        return (
          parseFloat(e['border' + c + 'Width']) +
          parseFloat(e['border' + n + 'Width'])
        );
      }
      function fo(e, t, c, n) {
        return Math.max(
          t['offset' + e],
          t['scroll' + e],
          c['client' + e],
          c['offset' + e],
          c['scroll' + e],
          so(10)
            ? parseInt(c['offset' + e]) +
                parseInt(n['margin' + ('Height' === e ? 'Top' : 'Left')]) +
                parseInt(n['margin' + ('Height' === e ? 'Bottom' : 'Right')])
            : 0
        );
      }
      function zo(e) {
        var t = e.body,
          c = e.documentElement,
          n = so(10) && getComputedStyle(c);
        return { height: fo('Height', t, c, n), width: fo('Width', t, c, n) };
      }
      var yo = function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        },
        Mo = (function() {
          function e(e, t) {
            for (var c = 0; c < t.length; c++) {
              var n = t[c];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function(t, c, n) {
            return c && e(t.prototype, c), n && e(t, n), t;
          };
        })(),
        Ho = function(e, t, c) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: c,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (e[t] = c),
            e
          );
        },
        Vo =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var c = arguments[t];
              for (var n in c)
                Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
            }
            return e;
          };
      function Eo(e) {
        return Vo({}, e, { right: e.left + e.width, bottom: e.top + e.height });
      }
      function Lo(e) {
        var t = {};
        try {
          if (so(10)) {
            t = e.getBoundingClientRect();
            var c = uo(e, 'top'),
              n = uo(e, 'left');
            (t.top += c), (t.left += n), (t.bottom += c), (t.right += n);
          } else t = e.getBoundingClientRect();
        } catch (e) {}
        var r = {
            left: t.left,
            top: t.top,
            width: t.right - t.left,
            height: t.bottom - t.top
          },
          o = 'HTML' === e.nodeName ? zo(e.ownerDocument) : {},
          a = o.width || e.clientWidth || r.width,
          l = o.height || e.clientHeight || r.height,
          s = e.offsetWidth - a,
          i = e.offsetHeight - l;
        if (s || i) {
          var h = co(e);
          (s -= mo(h, 'x')), (i -= mo(h, 'y')), (r.width -= s), (r.height -= i);
        }
        return Eo(r);
      }
      function go(e, t) {
        var c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          n = so(10),
          r = 'HTML' === t.nodeName,
          o = Lo(e),
          a = Lo(t),
          l = ro(e),
          s = co(t),
          i = parseFloat(s.borderTopWidth),
          h = parseFloat(s.borderLeftWidth);
        c &&
          r &&
          ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)));
        var p = Eo({
          top: o.top - a.top - i,
          left: o.left - a.left - h,
          width: o.width,
          height: o.height
        });
        if (((p.marginTop = 0), (p.marginLeft = 0), !n && r)) {
          var u = parseFloat(s.marginTop),
            v = parseFloat(s.marginLeft);
          (p.top -= i - u),
            (p.bottom -= i - u),
            (p.left -= h - v),
            (p.right -= h - v),
            (p.marginTop = u),
            (p.marginLeft = v);
        }
        return (
          (n && !c ? t.contains(l) : t === l && 'BODY' !== l.nodeName) &&
            (p = vo(p, t)),
          p
        );
      }
      function Co(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          c = e.ownerDocument.documentElement,
          n = go(e, c),
          r = Math.max(c.clientWidth, window.innerWidth || 0),
          o = Math.max(c.clientHeight, window.innerHeight || 0),
          a = t ? 0 : uo(c),
          l = t ? 0 : uo(c, 'left'),
          s = {
            top: a - n.top + n.marginTop,
            left: l - n.left + n.marginLeft,
            width: r,
            height: o
          };
        return Eo(s);
      }
      function bo(e) {
        var t = e.nodeName;
        if ('BODY' === t || 'HTML' === t) return !1;
        if ('fixed' === co(e, 'position')) return !0;
        var c = no(e);
        return !!c && bo(c);
      }
      function Ao(e) {
        if (!e || !e.parentElement || so()) return document.documentElement;
        for (var t = e.parentElement; t && 'none' === co(t, 'transform'); )
          t = t.parentElement;
        return t || document.documentElement;
      }
      function So(e, t, c, n) {
        var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          o = { top: 0, left: 0 },
          a = r ? Ao(e) : po(e, oo(t));
        if ('viewport' === n) o = Co(a, r);
        else {
          var l = void 0;
          'scrollParent' === n
            ? 'BODY' === (l = ro(no(t))).nodeName &&
              (l = e.ownerDocument.documentElement)
            : (l = 'window' === n ? e.ownerDocument.documentElement : n);
          var s = go(l, a, r);
          if ('HTML' !== l.nodeName || bo(a)) o = s;
          else {
            var i = zo(e.ownerDocument),
              h = i.height,
              p = i.width;
            (o.top += s.top - s.marginTop),
              (o.bottom = h + s.top),
              (o.left += s.left - s.marginLeft),
              (o.right = p + s.left);
          }
        }
        var u = 'number' == typeof (c = c || 0);
        return (
          (o.left += u ? c : c.left || 0),
          (o.top += u ? c : c.top || 0),
          (o.right -= u ? c : c.right || 0),
          (o.bottom -= u ? c : c.bottom || 0),
          o
        );
      }
      function Oo(e) {
        return e.width * e.height;
      }
      function No(e, t, c, n, r) {
        var o =
          arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf('auto')) return e;
        var a = So(c, n, o, r),
          l = {
            top: { width: a.width, height: t.top - a.top },
            right: { width: a.right - t.right, height: a.height },
            bottom: { width: a.width, height: a.bottom - t.bottom },
            left: { width: t.left - a.left, height: a.height }
          },
          s = Object.keys(l)
            .map(function(e) {
              return Vo({ key: e }, l[e], { area: Oo(l[e]) });
            })
            .sort(function(e, t) {
              return t.area - e.area;
            }),
          i = s.filter(function(e) {
            var t = e.width,
              n = e.height;
            return t >= c.clientWidth && n >= c.clientHeight;
          }),
          h = i.length > 0 ? i[0].key : s[0].key,
          p = e.split('-')[1];
        return h + (p ? '-' + p : '');
      }
      function wo(e, t, c) {
        var n =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : null,
          r = n ? Ao(t) : po(t, oo(c));
        return go(c, r, n);
      }
      function To(e) {
        var t = e.ownerDocument.defaultView.getComputedStyle(e),
          c = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
          n = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
        return { width: e.offsetWidth + n, height: e.offsetHeight + c };
      }
      function Po(e) {
        var t = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
        return e.replace(/left|right|bottom|top/g, function(e) {
          return t[e];
        });
      }
      function Io(e, t, c) {
        c = c.split('-')[0];
        var n = To(e),
          r = { width: n.width, height: n.height },
          o = -1 !== ['right', 'left'].indexOf(c),
          a = o ? 'top' : 'left',
          l = o ? 'left' : 'top',
          s = o ? 'height' : 'width',
          i = o ? 'width' : 'height';
        return (
          (r[a] = t[a] + t[s] / 2 - n[s] / 2),
          (r[l] = c === l ? t[l] - n[i] : t[Po(l)]),
          r
        );
      }
      function Ro(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0];
      }
      function ko(e, t, c) {
        return (
          (void 0 === c
            ? e
            : e.slice(
                0,
                (function(e, t, c) {
                  if (Array.prototype.findIndex)
                    return e.findIndex(function(e) {
                      return e.name === c;
                    });
                  var n = Ro(e, function(e) {
                    return e.name === c;
                  });
                  return e.indexOf(n);
                })(e, 0, c)
              )
          ).forEach(function(e) {
            e.function &&
              console.warn(
                '`modifier.function` is deprecated, use `modifier.fn`!'
              );
            var c = e.function || e.fn;
            e.enabled &&
              to(c) &&
              ((t.offsets.popper = Eo(t.offsets.popper)),
              (t.offsets.reference = Eo(t.offsets.reference)),
              (t = c(t, e)));
          }),
          t
        );
      }
      function _o() {
        if (!this.state.isDestroyed) {
          var e = {
            instance: this,
            styles: {},
            arrowStyles: {},
            attributes: {},
            flipped: !1,
            offsets: {}
          };
          (e.offsets.reference = wo(
            this.state,
            this.popper,
            this.reference,
            this.options.positionFixed
          )),
            (e.placement = No(
              this.options.placement,
              e.offsets.reference,
              this.popper,
              this.reference,
              this.options.modifiers.flip.boundariesElement,
              this.options.modifiers.flip.padding
            )),
            (e.originalPlacement = e.placement),
            (e.positionFixed = this.options.positionFixed),
            (e.offsets.popper = Io(
              this.popper,
              e.offsets.reference,
              e.placement
            )),
            (e.offsets.popper.position = this.options.positionFixed
              ? 'fixed'
              : 'absolute'),
            (e = ko(this.modifiers, e)),
            this.state.isCreated
              ? this.options.onUpdate(e)
              : ((this.state.isCreated = !0), this.options.onCreate(e));
        }
      }
      function xo(e, t) {
        return e.some(function(e) {
          var c = e.name;
          return e.enabled && c === t;
        });
      }
      function Do(e) {
        for (
          var t = [!1, 'ms', 'Webkit', 'Moz', 'O'],
            c = e.charAt(0).toUpperCase() + e.slice(1),
            n = 0;
          n < t.length;
          n++
        ) {
          var r = t[n],
            o = r ? '' + r + c : e;
          if (void 0 !== document.body.style[o]) return o;
        }
        return null;
      }
      function Fo() {
        return (
          (this.state.isDestroyed = !0),
          xo(this.modifiers, 'applyStyle') &&
            (this.popper.removeAttribute('x-placement'),
            (this.popper.style.position = ''),
            (this.popper.style.top = ''),
            (this.popper.style.left = ''),
            (this.popper.style.right = ''),
            (this.popper.style.bottom = ''),
            (this.popper.style.willChange = ''),
            (this.popper.style[Do('transform')] = '')),
          this.disableEventListeners(),
          this.options.removeOnDestroy &&
            this.popper.parentNode.removeChild(this.popper),
          this
        );
      }
      function Bo(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window;
      }
      function Uo(e, t, c, n) {
        var r = 'BODY' === e.nodeName,
          o = r ? e.ownerDocument.defaultView : e;
        o.addEventListener(t, c, { passive: !0 }),
          r || Uo(ro(o.parentNode), t, c, n),
          n.push(o);
      }
      function Go(e, t, c, n) {
        (c.updateBound = n),
          Bo(e).addEventListener('resize', c.updateBound, { passive: !0 });
        var r = ro(e);
        return (
          Uo(r, 'scroll', c.updateBound, c.scrollParents),
          (c.scrollElement = r),
          (c.eventsEnabled = !0),
          c
        );
      }
      function jo() {
        this.state.eventsEnabled ||
          (this.state = Go(
            this.reference,
            this.options,
            this.state,
            this.scheduleUpdate
          ));
      }
      function Ko() {
        var e, t;
        this.state.eventsEnabled &&
          (cancelAnimationFrame(this.scheduleUpdate),
          (this.state =
            ((e = this.reference),
            (t = this.state),
            Bo(e).removeEventListener('resize', t.updateBound),
            t.scrollParents.forEach(function(e) {
              e.removeEventListener('scroll', t.updateBound);
            }),
            (t.updateBound = null),
            (t.scrollParents = []),
            (t.scrollElement = null),
            (t.eventsEnabled = !1),
            t)));
      }
      function Wo(e) {
        return '' !== e && !isNaN(parseFloat(e)) && isFinite(e);
      }
      function Yo(e, t) {
        Object.keys(t).forEach(function(c) {
          var n = '';
          -1 !==
            ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(c) &&
            Wo(t[c]) &&
            (n = 'px'),
            (e.style[c] = t[c] + n);
        });
      }
      var qo = Jr && /Firefox/i.test(navigator.userAgent);
      function Xo(e, t, c) {
        var n = Ro(e, function(e) {
            return e.name === t;
          }),
          r =
            !!n &&
            e.some(function(e) {
              return e.name === c && e.enabled && e.order < n.order;
            });
        if (!r) {
          var o = '`' + t + '`',
            a = '`' + c + '`';
          console.warn(
            a +
              ' modifier is required by ' +
              o +
              ' modifier in order to work, be sure to include it before ' +
              o +
              '!'
          );
        }
        return r;
      }
      var $o = [
          'auto-start',
          'auto',
          'auto-end',
          'top-start',
          'top',
          'top-end',
          'right-start',
          'right',
          'right-end',
          'bottom-end',
          'bottom',
          'bottom-start',
          'left-end',
          'left',
          'left-start'
        ],
        Zo = $o.slice(3);
      function Jo(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          c = Zo.indexOf(e),
          n = Zo.slice(c + 1).concat(Zo.slice(0, c));
        return t ? n.reverse() : n;
      }
      var Qo = {
          placement: 'bottom',
          positionFixed: !1,
          eventsEnabled: !0,
          removeOnDestroy: !1,
          onCreate: function() {},
          onUpdate: function() {},
          modifiers: {
            shift: {
              order: 100,
              enabled: !0,
              fn: function(e) {
                var t = e.placement,
                  c = t.split('-')[0],
                  n = t.split('-')[1];
                if (n) {
                  var r = e.offsets,
                    o = r.reference,
                    a = r.popper,
                    l = -1 !== ['bottom', 'top'].indexOf(c),
                    s = l ? 'left' : 'top',
                    i = l ? 'width' : 'height',
                    h = {
                      start: Ho({}, s, o[s]),
                      end: Ho({}, s, o[s] + o[i] - a[i])
                    };
                  e.offsets.popper = Vo({}, a, h[n]);
                }
                return e;
              }
            },
            offset: {
              order: 200,
              enabled: !0,
              fn: function(e, t) {
                var c,
                  n = t.offset,
                  r = e.placement,
                  o = e.offsets,
                  a = o.popper,
                  l = o.reference,
                  s = r.split('-')[0];
                return (
                  (c = Wo(+n)
                    ? [+n, 0]
                    : (function(e, t, c, n) {
                        var r = [0, 0],
                          o = -1 !== ['right', 'left'].indexOf(n),
                          a = e.split(/(\+|\-)/).map(function(e) {
                            return e.trim();
                          }),
                          l = a.indexOf(
                            Ro(a, function(e) {
                              return -1 !== e.search(/,|\s/);
                            })
                          );
                        a[l] &&
                          -1 === a[l].indexOf(',') &&
                          console.warn(
                            'Offsets separated by white space(s) are deprecated, use a comma (,) instead.'
                          );
                        var s = /\s*,\s*|\s+/,
                          i =
                            -1 !== l
                              ? [
                                  a.slice(0, l).concat([a[l].split(s)[0]]),
                                  [a[l].split(s)[1]].concat(a.slice(l + 1))
                                ]
                              : [a];
                        return (
                          (i = i.map(function(e, n) {
                            var r = (1 === n ? !o : o) ? 'height' : 'width',
                              a = !1;
                            return e
                              .reduce(function(e, t) {
                                return '' === e[e.length - 1] &&
                                  -1 !== ['+', '-'].indexOf(t)
                                  ? ((e[e.length - 1] = t), (a = !0), e)
                                  : a
                                  ? ((e[e.length - 1] += t), (a = !1), e)
                                  : e.concat(t);
                              }, [])
                              .map(function(e) {
                                return (function(e, t, c, n) {
                                  var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                    o = +r[1],
                                    a = r[2];
                                  if (!o) return e;
                                  if (0 === a.indexOf('%')) {
                                    var l = void 0;
                                    switch (a) {
                                      case '%p':
                                        l = c;
                                        break;
                                      case '%':
                                      case '%r':
                                      default:
                                        l = n;
                                    }
                                    return (Eo(l)[t] / 100) * o;
                                  }
                                  return 'vh' === a || 'vw' === a
                                    ? (('vh' === a
                                        ? Math.max(
                                            document.documentElement
                                              .clientHeight,
                                            window.innerHeight || 0
                                          )
                                        : Math.max(
                                            document.documentElement
                                              .clientWidth,
                                            window.innerWidth || 0
                                          )) /
                                        100) *
                                        o
                                    : o;
                                })(e, r, t, c);
                              });
                          })).forEach(function(e, t) {
                            e.forEach(function(c, n) {
                              Wo(c) &&
                                (r[t] += c * ('-' === e[n - 1] ? -1 : 1));
                            });
                          }),
                          r
                        );
                      })(n, a, l, s)),
                  'left' === s
                    ? ((a.top += c[0]), (a.left -= c[1]))
                    : 'right' === s
                    ? ((a.top += c[0]), (a.left += c[1]))
                    : 'top' === s
                    ? ((a.left += c[0]), (a.top -= c[1]))
                    : 'bottom' === s && ((a.left += c[0]), (a.top += c[1])),
                  (e.popper = a),
                  e
                );
              },
              offset: 0
            },
            preventOverflow: {
              order: 300,
              enabled: !0,
              fn: function(e, t) {
                var c = t.boundariesElement || io(e.instance.popper);
                e.instance.reference === c && (c = io(c));
                var n = Do('transform'),
                  r = e.instance.popper.style,
                  o = r.top,
                  a = r.left,
                  l = r[n];
                (r.top = ''), (r.left = ''), (r[n] = '');
                var s = So(
                  e.instance.popper,
                  e.instance.reference,
                  t.padding,
                  c,
                  e.positionFixed
                );
                (r.top = o), (r.left = a), (r[n] = l), (t.boundaries = s);
                var i = t.priority,
                  h = e.offsets.popper,
                  p = {
                    primary: function(e) {
                      var c = h[e];
                      return (
                        h[e] < s[e] &&
                          !t.escapeWithReference &&
                          (c = Math.max(h[e], s[e])),
                        Ho({}, e, c)
                      );
                    },
                    secondary: function(e) {
                      var c = 'right' === e ? 'left' : 'top',
                        n = h[c];
                      return (
                        h[e] > s[e] &&
                          !t.escapeWithReference &&
                          (n = Math.min(
                            h[c],
                            s[e] - ('right' === e ? h.width : h.height)
                          )),
                        Ho({}, c, n)
                      );
                    }
                  };
                return (
                  i.forEach(function(e) {
                    var t =
                      -1 !== ['left', 'top'].indexOf(e)
                        ? 'primary'
                        : 'secondary';
                    h = Vo({}, h, p[t](e));
                  }),
                  (e.offsets.popper = h),
                  e
                );
              },
              priority: ['left', 'right', 'top', 'bottom'],
              padding: 5,
              boundariesElement: 'scrollParent'
            },
            keepTogether: {
              order: 400,
              enabled: !0,
              fn: function(e) {
                var t = e.offsets,
                  c = t.popper,
                  n = t.reference,
                  r = e.placement.split('-')[0],
                  o = Math.floor,
                  a = -1 !== ['top', 'bottom'].indexOf(r),
                  l = a ? 'right' : 'bottom',
                  s = a ? 'left' : 'top',
                  i = a ? 'width' : 'height';
                return (
                  c[l] < o(n[s]) && (e.offsets.popper[s] = o(n[s]) - c[i]),
                  c[s] > o(n[l]) && (e.offsets.popper[s] = o(n[l])),
                  e
                );
              }
            },
            arrow: {
              order: 500,
              enabled: !0,
              fn: function(e, t) {
                var c;
                if (!Xo(e.instance.modifiers, 'arrow', 'keepTogether'))
                  return e;
                var n = t.element;
                if ('string' == typeof n) {
                  if (!(n = e.instance.popper.querySelector(n))) return e;
                } else if (!e.instance.popper.contains(n))
                  return (
                    console.warn(
                      'WARNING: `arrow.element` must be child of its popper element!'
                    ),
                    e
                  );
                var r = e.placement.split('-')[0],
                  o = e.offsets,
                  a = o.popper,
                  l = o.reference,
                  s = -1 !== ['left', 'right'].indexOf(r),
                  i = s ? 'height' : 'width',
                  h = s ? 'Top' : 'Left',
                  p = h.toLowerCase(),
                  u = s ? 'left' : 'top',
                  v = s ? 'bottom' : 'right',
                  m = To(n)[i];
                l[v] - m < a[p] && (e.offsets.popper[p] -= a[p] - (l[v] - m)),
                  l[p] + m > a[v] && (e.offsets.popper[p] += l[p] + m - a[v]),
                  (e.offsets.popper = Eo(e.offsets.popper));
                var d = l[p] + l[i] / 2 - m / 2,
                  f = co(e.instance.popper),
                  z = parseFloat(f['margin' + h]),
                  y = parseFloat(f['border' + h + 'Width']),
                  M = d - e.offsets.popper[p] - z - y;
                return (
                  (M = Math.max(Math.min(a[i] - m, M), 0)),
                  (e.arrowElement = n),
                  (e.offsets.arrow =
                    (Ho((c = {}), p, Math.round(M)), Ho(c, u, ''), c)),
                  e
                );
              },
              element: '[x-arrow]'
            },
            flip: {
              order: 600,
              enabled: !0,
              fn: function(e, t) {
                if (xo(e.instance.modifiers, 'inner')) return e;
                if (e.flipped && e.placement === e.originalPlacement) return e;
                var c = So(
                    e.instance.popper,
                    e.instance.reference,
                    t.padding,
                    t.boundariesElement,
                    e.positionFixed
                  ),
                  n = e.placement.split('-')[0],
                  r = Po(n),
                  o = e.placement.split('-')[1] || '',
                  a = [];
                switch (t.behavior) {
                  case 'flip':
                    a = [n, r];
                    break;
                  case 'clockwise':
                    a = Jo(n);
                    break;
                  case 'counterclockwise':
                    a = Jo(n, !0);
                    break;
                  default:
                    a = t.behavior;
                }
                return (
                  a.forEach(function(l, s) {
                    if (n !== l || a.length === s + 1) return e;
                    (n = e.placement.split('-')[0]), (r = Po(n));
                    var i = e.offsets.popper,
                      h = e.offsets.reference,
                      p = Math.floor,
                      u =
                        ('left' === n && p(i.right) > p(h.left)) ||
                        ('right' === n && p(i.left) < p(h.right)) ||
                        ('top' === n && p(i.bottom) > p(h.top)) ||
                        ('bottom' === n && p(i.top) < p(h.bottom)),
                      v = p(i.left) < p(c.left),
                      m = p(i.right) > p(c.right),
                      d = p(i.top) < p(c.top),
                      f = p(i.bottom) > p(c.bottom),
                      z =
                        ('left' === n && v) ||
                        ('right' === n && m) ||
                        ('top' === n && d) ||
                        ('bottom' === n && f),
                      y = -1 !== ['top', 'bottom'].indexOf(n),
                      M =
                        !!t.flipVariations &&
                        ((y && 'start' === o && v) ||
                          (y && 'end' === o && m) ||
                          (!y && 'start' === o && d) ||
                          (!y && 'end' === o && f)),
                      H =
                        !!t.flipVariationsByContent &&
                        ((y && 'start' === o && m) ||
                          (y && 'end' === o && v) ||
                          (!y && 'start' === o && f) ||
                          (!y && 'end' === o && d)),
                      V = M || H;
                    (u || z || V) &&
                      ((e.flipped = !0),
                      (u || z) && (n = a[s + 1]),
                      V &&
                        (o = (function(e) {
                          return 'end' === e
                            ? 'start'
                            : 'start' === e
                            ? 'end'
                            : e;
                        })(o)),
                      (e.placement = n + (o ? '-' + o : '')),
                      (e.offsets.popper = Vo(
                        {},
                        e.offsets.popper,
                        Io(e.instance.popper, e.offsets.reference, e.placement)
                      )),
                      (e = ko(e.instance.modifiers, e, 'flip')));
                  }),
                  e
                );
              },
              behavior: 'flip',
              padding: 5,
              boundariesElement: 'viewport',
              flipVariations: !1,
              flipVariationsByContent: !1
            },
            inner: {
              order: 700,
              enabled: !1,
              fn: function(e) {
                var t = e.placement,
                  c = t.split('-')[0],
                  n = e.offsets,
                  r = n.popper,
                  o = n.reference,
                  a = -1 !== ['left', 'right'].indexOf(c),
                  l = -1 === ['top', 'left'].indexOf(c);
                return (
                  (r[a ? 'left' : 'top'] =
                    o[c] - (l ? r[a ? 'width' : 'height'] : 0)),
                  (e.placement = Po(t)),
                  (e.offsets.popper = Eo(r)),
                  e
                );
              }
            },
            hide: {
              order: 800,
              enabled: !0,
              fn: function(e) {
                if (!Xo(e.instance.modifiers, 'hide', 'preventOverflow'))
                  return e;
                var t = e.offsets.reference,
                  c = Ro(e.instance.modifiers, function(e) {
                    return 'preventOverflow' === e.name;
                  }).boundaries;
                if (
                  t.bottom < c.top ||
                  t.left > c.right ||
                  t.top > c.bottom ||
                  t.right < c.left
                ) {
                  if (!0 === e.hide) return e;
                  (e.hide = !0), (e.attributes['x-out-of-boundaries'] = '');
                } else {
                  if (!1 === e.hide) return e;
                  (e.hide = !1), (e.attributes['x-out-of-boundaries'] = !1);
                }
                return e;
              }
            },
            computeStyle: {
              order: 850,
              enabled: !0,
              fn: function(e, t) {
                var c = t.x,
                  n = t.y,
                  r = e.offsets.popper,
                  o = Ro(e.instance.modifiers, function(e) {
                    return 'applyStyle' === e.name;
                  }).gpuAcceleration;
                void 0 !== o &&
                  console.warn(
                    'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'
                  );
                var a,
                  l,
                  s = void 0 !== o ? o : t.gpuAcceleration,
                  i = io(e.instance.popper),
                  h = Lo(i),
                  p = { position: r.position },
                  u = (function(e, t) {
                    var c = e.offsets,
                      n = c.popper,
                      r = c.reference,
                      o = Math.round,
                      a = Math.floor,
                      l = function(e) {
                        return e;
                      },
                      s = o(r.width),
                      i = o(n.width),
                      h = -1 !== ['left', 'right'].indexOf(e.placement),
                      p = -1 !== e.placement.indexOf('-'),
                      u = t ? (h || p || s % 2 == i % 2 ? o : a) : l,
                      v = t ? o : l;
                    return {
                      left: u(
                        s % 2 == 1 && i % 2 == 1 && !p && t
                          ? n.left - 1
                          : n.left
                      ),
                      top: v(n.top),
                      bottom: v(n.bottom),
                      right: u(n.right)
                    };
                  })(e, window.devicePixelRatio < 2 || !qo),
                  v = 'bottom' === c ? 'top' : 'bottom',
                  m = 'right' === n ? 'left' : 'right',
                  d = Do('transform');
                if (
                  ((l =
                    'bottom' === v
                      ? 'HTML' === i.nodeName
                        ? -i.clientHeight + u.bottom
                        : -h.height + u.bottom
                      : u.top),
                  (a =
                    'right' === m
                      ? 'HTML' === i.nodeName
                        ? -i.clientWidth + u.right
                        : -h.width + u.right
                      : u.left),
                  s && d)
                )
                  (p[d] = 'translate3d(' + a + 'px, ' + l + 'px, 0)'),
                    (p[v] = 0),
                    (p[m] = 0),
                    (p.willChange = 'transform');
                else {
                  var f = 'bottom' === v ? -1 : 1,
                    z = 'right' === m ? -1 : 1;
                  (p[v] = l * f), (p[m] = a * z), (p.willChange = v + ', ' + m);
                }
                var y = { 'x-placement': e.placement };
                return (
                  (e.attributes = Vo({}, y, e.attributes)),
                  (e.styles = Vo({}, p, e.styles)),
                  (e.arrowStyles = Vo({}, e.offsets.arrow, e.arrowStyles)),
                  e
                );
              },
              gpuAcceleration: !0,
              x: 'bottom',
              y: 'right'
            },
            applyStyle: {
              order: 900,
              enabled: !0,
              fn: function(e) {
                var t, c;
                return (
                  Yo(e.instance.popper, e.styles),
                  (t = e.instance.popper),
                  (c = e.attributes),
                  Object.keys(c).forEach(function(e) {
                    !1 !== c[e]
                      ? t.setAttribute(e, c[e])
                      : t.removeAttribute(e);
                  }),
                  e.arrowElement &&
                    Object.keys(e.arrowStyles).length &&
                    Yo(e.arrowElement, e.arrowStyles),
                  e
                );
              },
              onLoad: function(e, t, c, n, r) {
                var o = wo(r, t, e, c.positionFixed),
                  a = No(
                    c.placement,
                    o,
                    t,
                    e,
                    c.modifiers.flip.boundariesElement,
                    c.modifiers.flip.padding
                  );
                return (
                  t.setAttribute('x-placement', a),
                  Yo(t, { position: c.positionFixed ? 'fixed' : 'absolute' }),
                  c
                );
              },
              gpuAcceleration: void 0
            }
          }
        },
        ea = (function() {
          function e(t, c) {
            var n = this,
              r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
            yo(this, e),
              (this.scheduleUpdate = function() {
                return requestAnimationFrame(n.update);
              }),
              (this.update = eo(this.update.bind(this))),
              (this.options = Vo({}, e.Defaults, r)),
              (this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
              }),
              (this.reference = t && t.jquery ? t[0] : t),
              (this.popper = c && c.jquery ? c[0] : c),
              (this.options.modifiers = {}),
              Object.keys(Vo({}, e.Defaults.modifiers, r.modifiers)).forEach(
                function(t) {
                  n.options.modifiers[t] = Vo(
                    {},
                    e.Defaults.modifiers[t] || {},
                    r.modifiers ? r.modifiers[t] : {}
                  );
                }
              ),
              (this.modifiers = Object.keys(this.options.modifiers)
                .map(function(e) {
                  return Vo({ name: e }, n.options.modifiers[e]);
                })
                .sort(function(e, t) {
                  return e.order - t.order;
                })),
              this.modifiers.forEach(function(e) {
                e.enabled &&
                  to(e.onLoad) &&
                  e.onLoad(n.reference, n.popper, n.options, e, n.state);
              }),
              this.update();
            var o = this.options.eventsEnabled;
            o && this.enableEventListeners(), (this.state.eventsEnabled = o);
          }
          return (
            Mo(e, [
              {
                key: 'update',
                value: function() {
                  return _o.call(this);
                }
              },
              {
                key: 'destroy',
                value: function() {
                  return Fo.call(this);
                }
              },
              {
                key: 'enableEventListeners',
                value: function() {
                  return jo.call(this);
                }
              },
              {
                key: 'disableEventListeners',
                value: function() {
                  return Ko.call(this);
                }
              }
            ]),
            e
          );
        })();
      (ea.Utils = ('undefined' != typeof window ? window : c.g).PopperUtils),
        (ea.placements = $o),
        (ea.Defaults = Qo);
      const ta = ea;
      var ca = {
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: 0,
          pointerEvents: 'none'
        },
        na = {},
        ra = (function(e) {
          function t() {
            for (
              var t, c = arguments.length, n = new Array(c), r = 0;
              r < c;
              r++
            )
              n[r] = arguments[r];
            return (
              (t = e.call.apply(e, [this].concat(n)) || this),
              Rr()(wr()(t), 'state', { data: void 0, placement: void 0 }),
              Rr()(wr()(t), 'popperInstance', void 0),
              Rr()(wr()(t), 'popperNode', null),
              Rr()(wr()(t), 'arrowNode', null),
              Rr()(wr()(t), 'setPopperNode', function(e) {
                e &&
                  t.popperNode !== e &&
                  (Kr(t.props.innerRef, e),
                  (t.popperNode = e),
                  t.updatePopperInstance());
              }),
              Rr()(wr()(t), 'setArrowNode', function(e) {
                t.arrowNode = e;
              }),
              Rr()(wr()(t), 'updateStateModifier', {
                enabled: !0,
                order: 900,
                fn: function(e) {
                  var c = e.placement;
                  return t.setState({ data: e, placement: c }), e;
                }
              }),
              Rr()(wr()(t), 'getOptions', function() {
                return {
                  placement: t.props.placement,
                  eventsEnabled: t.props.eventsEnabled,
                  positionFixed: t.props.positionFixed,
                  modifiers: Or()({}, t.props.modifiers, {
                    arrow: Or()(
                      {},
                      t.props.modifiers && t.props.modifiers.arrow,
                      { enabled: !!t.arrowNode, element: t.arrowNode }
                    ),
                    applyStyle: { enabled: !1 },
                    updateStateModifier: t.updateStateModifier
                  })
                };
              }),
              Rr()(wr()(t), 'getPopperStyle', function() {
                return t.popperNode && t.state.data
                  ? Or()(
                      { position: t.state.data.offsets.popper.position },
                      t.state.data.styles
                    )
                  : ca;
              }),
              Rr()(wr()(t), 'getPopperPlacement', function() {
                return t.state.data ? t.state.placement : void 0;
              }),
              Rr()(wr()(t), 'getArrowStyle', function() {
                return t.arrowNode && t.state.data
                  ? t.state.data.arrowStyles
                  : na;
              }),
              Rr()(wr()(t), 'getOutOfBoundariesState', function() {
                return t.state.data ? t.state.data.hide : void 0;
              }),
              Rr()(wr()(t), 'destroyPopperInstance', function() {
                t.popperInstance &&
                  (t.popperInstance.destroy(), (t.popperInstance = null));
              }),
              Rr()(wr()(t), 'updatePopperInstance', function() {
                t.destroyPopperInstance();
                var e = wr()(t).popperNode,
                  c = t.props.referenceElement;
                c && e && (t.popperInstance = new ta(c, e, t.getOptions()));
              }),
              Rr()(wr()(t), 'scheduleUpdate', function() {
                t.popperInstance && t.popperInstance.scheduleUpdate();
              }),
              t
            );
          }
          Pr()(t, e);
          var c = t.prototype;
          return (
            (c.componentDidUpdate = function(e, t) {
              this.props.placement === e.placement &&
              this.props.referenceElement === e.referenceElement &&
              this.props.positionFixed === e.positionFixed &&
              Zr()(this.props.modifiers, e.modifiers, { strict: !0 })
                ? this.props.eventsEnabled !== e.eventsEnabled &&
                  this.popperInstance &&
                  (this.props.eventsEnabled
                    ? this.popperInstance.enableEventListeners()
                    : this.popperInstance.disableEventListeners())
                : this.updatePopperInstance(),
                t.placement !== this.state.placement && this.scheduleUpdate();
            }),
            (c.componentWillUnmount = function() {
              Kr(this.props.innerRef, null), this.destroyPopperInstance();
            }),
            (c.render = function() {
              return Gr(this.props.children)({
                ref: this.setPopperNode,
                style: this.getPopperStyle(),
                placement: this.getPopperPlacement(),
                outOfBoundaries: this.getOutOfBoundariesState(),
                scheduleUpdate: this.scheduleUpdate,
                arrowProps: {
                  ref: this.setArrowNode,
                  style: this.getArrowStyle()
                }
              });
            }),
            t
          );
        })(Ln.Component);
      function oa(e) {
        var t = e.referenceElement,
          c = Xr()(e, ['referenceElement']);
        return Ln.createElement(Fr.Consumer, null, function(e) {
          return Ln.createElement(
            ra,
            Or()({ referenceElement: void 0 !== t ? t : e }, c)
          );
        });
      }
      Rr()(ra, 'defaultProps', {
        placement: 'bottom',
        eventsEnabled: !0,
        referenceElement: void 0,
        positionFixed: !1
      }),
        ta.placements;
      var aa = c(6090),
        la = !hr(br.createPortal),
        sa = {
          blueprintPortalClassName: function(e, t) {
            if (null != e[t] && 'string' != typeof e[t])
              return new Error(
                '[Blueprint] <Portal> context blueprintPortalClassName must be string'
              );
          }
        },
        ia = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.state = { hasMounted: !1 }), t;
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              return la ||
                'undefined' == typeof document ||
                !this.state.hasMounted
                ? null
                : br.createPortal(this.props.children, this.portalElement);
            }),
            (t.prototype.componentDidMount = function() {
              this.props.container &&
                ((this.portalElement = this.createContainerElement()),
                this.props.container.appendChild(this.portalElement),
                this.setState({ hasMounted: !0 }, this.props.onChildrenMount),
                la && this.unstableRenderNoPortal());
            }),
            (t.prototype.componentDidUpdate = function(e) {
              null != this.portalElement &&
                e.className !== this.props.className &&
                (this.portalElement.classList.remove(e.className),
                ha(this.portalElement.classList, this.props.className)),
                la && this.unstableRenderNoPortal();
            }),
            (t.prototype.componentWillUnmount = function() {
              null != this.portalElement &&
                (la && br.unmountComponentAtNode(this.portalElement),
                this.portalElement.remove());
            }),
            (t.prototype.createContainerElement = function() {
              var e = document.createElement('div');
              return (
                e.classList.add(vc),
                ha(e.classList, this.props.className),
                null != this.context &&
                  ha(e.classList, this.context.blueprintPortalClassName),
                e
              );
            }),
            (t.prototype.unstableRenderNoPortal = function() {
              br.unstable_renderSubtreeIntoContainer(
                this,
                Ln.createElement('div', null, this.props.children),
                this.portalElement
              );
            }),
            (t.displayName = xn + '.Portal'),
            (t.contextTypes = sa),
            (t.defaultProps = {
              container: 'undefined' != typeof document ? document.body : null
            }),
            t
          );
        })(Ln.Component);
      function ha(e, t) {
        null != t && '' !== t && e.add.apply(e, t.split(' '));
      }
      var pa = (function(e) {
          function t(t, n) {
            var r = e.call(this, t, n) || this;
            return (
              (r.refHandlers = {
                container: function(e) {
                  return (r.containerElement = (0, br.findDOMNode)(e));
                }
              }),
              (r.maybeRenderChild = function(e) {
                if (null == e) return null;
                var t =
                    'object' == typeof e
                      ? Ln.cloneElement(e, {
                          className: Cr()(e.props.className, jt),
                          tabIndex: 0
                        })
                      : Ln.createElement('span', { className: jt }, e),
                  c = r.props,
                  n = c.onOpening,
                  o = c.onOpened,
                  a = c.onClosing,
                  l = c.onClosed,
                  s = c.transitionDuration,
                  i = c.transitionName;
                return Ln.createElement(
                  aa.CSSTransition,
                  {
                    classNames: i,
                    onEntering: n,
                    onEntered: o,
                    onExiting: a,
                    onExited: l,
                    timeout: s
                  },
                  t
                );
              }),
              (r.handleBackdropMouseDown = function(e) {
                var t = r.props,
                  c = t.backdropProps,
                  n = t.canOutsideClickClose,
                  o = t.enforceFocus,
                  a = t.onClose;
                n && pr(a, e),
                  o && r.bringFocusInsideOverlay(),
                  pr(c.onMouseDown, e);
              }),
              (r.handleDocumentClick = function(e) {
                var t = r.props,
                  n = t.canOutsideClickClose,
                  o = t.isOpen,
                  a = t.onClose,
                  l = e.target,
                  s = c.openStack.indexOf(r),
                  i = c.openStack.slice(s).some(function(e) {
                    var t = e.containerElement;
                    return t && t.contains(l) && !t.isSameNode(l);
                  });
                o && n && !i && pr(a, e);
              }),
              (r.handleDocumentFocus = function(e) {
                r.props.enforceFocus &&
                  null != r.containerElement &&
                  e.target instanceof Node &&
                  !r.containerElement.contains(e.target) &&
                  (e.preventDefault(),
                  e.stopImmediatePropagation(),
                  r.bringFocusInsideOverlay());
              }),
              (r.handleKeyDown = function(e) {
                var t = r.props,
                  c = t.canEscapeKeyClose,
                  n = t.onClose;
                e.which === qn && c && (pr(n, e), e.preventDefault());
              }),
              (r.state = { hasEverOpened: t.isOpen }),
              r
            );
          }
          var c;
          return (
            yn(t, e),
            (c = t),
            (t.getDerivedStateFromProps = function(e) {
              var t = e.isOpen;
              return t ? { hasEverOpened: t } : null;
            }),
            (t.prototype.render = function() {
              var e;
              if (this.props.lazy && !this.state.hasEverOpened) return null;
              var t = this.props,
                c = t.children,
                n = t.className,
                r = t.usePortal,
                o = t.isOpen,
                a = o ? Ln.Children.map(c, this.maybeRenderChild) : [];
              a.unshift(this.maybeRenderBackdrop());
              var l = Cr()(Bt, (((e = {})[Wt] = o), (e[Kt] = !r), e), n),
                s = Ln.createElement(
                  aa.TransitionGroup,
                  {
                    appear: !0,
                    className: l,
                    component: 'div',
                    onKeyDown: this.handleKeyDown,
                    ref: this.refHandlers.container
                  },
                  a
                );
              return r
                ? Ln.createElement(
                    ia,
                    {
                      className: this.props.portalClassName,
                      container: this.props.portalContainer
                    },
                    s
                  )
                : s;
            }),
            (t.prototype.componentDidMount = function() {
              this.props.isOpen && this.overlayWillOpen();
            }),
            (t.prototype.componentDidUpdate = function(e) {
              e.isOpen && !this.props.isOpen
                ? this.overlayWillClose()
                : !e.isOpen && this.props.isOpen && this.overlayWillOpen();
            }),
            (t.prototype.componentWillUnmount = function() {
              this.overlayWillClose();
            }),
            (t.prototype.bringFocusInsideOverlay = function() {
              var e = this;
              return requestAnimationFrame(function() {
                if (
                  null != e.containerElement &&
                  null != document.activeElement &&
                  e.props.isOpen &&
                  !e.containerElement.contains(document.activeElement)
                ) {
                  var t = e.containerElement.querySelector('[autofocus]'),
                    c = e.containerElement.querySelector('[tabindex]');
                  null != t ? t.focus() : null != c && c.focus();
                }
              });
            }),
            (t.prototype.maybeRenderBackdrop = function() {
              var e = this.props,
                t = e.backdropClassName,
                c = e.backdropProps,
                n = e.hasBackdrop,
                r = e.isOpen,
                o = e.transitionDuration,
                a = e.transitionName;
              return n && r
                ? Ln.createElement(
                    aa.CSSTransition,
                    { classNames: a, key: '__backdrop', timeout: o },
                    Ln.createElement(
                      'div',
                      Mn({}, c, {
                        className: Cr()(Ut, t, c.className),
                        onMouseDown: this.handleBackdropMouseDown,
                        tabIndex: this.props.canOutsideClickClose ? 0 : null
                      })
                    )
                  )
                : null;
            }),
            (t.prototype.overlayWillClose = function() {
              document.removeEventListener(
                'focus',
                this.handleDocumentFocus,
                !0
              ),
                document.removeEventListener(
                  'mousedown',
                  this.handleDocumentClick
                );
              var e = c.openStack,
                t = e.indexOf(this);
              if (-1 !== t) {
                if ((e.splice(t, 1), e.length > 0)) {
                  var n = c.getLastOpened();
                  n.props.enforceFocus &&
                    document.addEventListener(
                      'focus',
                      n.handleDocumentFocus,
                      !0
                    );
                }
                0 ===
                  e.filter(function(e) {
                    return e.props.usePortal && e.props.hasBackdrop;
                  }).length && document.body.classList.remove(Wt);
              }
            }),
            (t.prototype.overlayWillOpen = function() {
              var e = c.openStack;
              e.length > 0 &&
                document.removeEventListener(
                  'focus',
                  c.getLastOpened().handleDocumentFocus,
                  !0
                ),
                e.push(this),
                this.props.autoFocus && this.bringFocusInsideOverlay(),
                this.props.enforceFocus &&
                  document.addEventListener(
                    'focus',
                    this.handleDocumentFocus,
                    !0
                  ),
                this.props.canOutsideClickClose &&
                  !this.props.hasBackdrop &&
                  document.addEventListener(
                    'mousedown',
                    this.handleDocumentClick
                  ),
                this.props.hasBackdrop &&
                  this.props.usePortal &&
                  document.body.classList.add(Wt);
            }),
            (t.displayName = xn + '.Overlay'),
            (t.defaultProps = {
              autoFocus: !0,
              backdropProps: {},
              canEscapeKeyClose: !0,
              canOutsideClickClose: !0,
              enforceFocus: !0,
              hasBackdrop: !0,
              isOpen: !1,
              lazy: !0,
              transitionDuration: 300,
              transitionName: Bt,
              usePortal: !0
            }),
            (t.openStack = []),
            (t.getLastOpened = function() {
              return c.openStack[c.openStack.length - 1];
            }),
            (c = Vn([Ar.polyfill], t))
          );
        })(Rn),
        ua = (function() {
          if ('undefined' != typeof Map) return Map;
          function e(e, t) {
            var c = -1;
            return (
              e.some(function(e, n) {
                return e[0] === t && ((c = n), !0);
              }),
              c
            );
          }
          return (function() {
            function t() {
              this.__entries__ = [];
            }
            return (
              Object.defineProperty(t.prototype, 'size', {
                get: function() {
                  return this.__entries__.length;
                },
                enumerable: !0,
                configurable: !0
              }),
              (t.prototype.get = function(t) {
                var c = e(this.__entries__, t),
                  n = this.__entries__[c];
                return n && n[1];
              }),
              (t.prototype.set = function(t, c) {
                var n = e(this.__entries__, t);
                ~n
                  ? (this.__entries__[n][1] = c)
                  : this.__entries__.push([t, c]);
              }),
              (t.prototype.delete = function(t) {
                var c = this.__entries__,
                  n = e(c, t);
                ~n && c.splice(n, 1);
              }),
              (t.prototype.has = function(t) {
                return !!~e(this.__entries__, t);
              }),
              (t.prototype.clear = function() {
                this.__entries__.splice(0);
              }),
              (t.prototype.forEach = function(e, t) {
                void 0 === t && (t = null);
                for (var c = 0, n = this.__entries__; c < n.length; c++) {
                  var r = n[c];
                  e.call(t, r[1], r[0]);
                }
              }),
              t
            );
          })();
        })(),
        va =
          'undefined' != typeof window &&
          'undefined' != typeof document &&
          window.document === document,
        ma =
          void 0 !== c.g && c.g.Math === Math
            ? c.g
            : 'undefined' != typeof self && self.Math === Math
            ? self
            : 'undefined' != typeof window && window.Math === Math
            ? window
            : Function('return this')(),
        da =
          'function' == typeof requestAnimationFrame
            ? requestAnimationFrame.bind(ma)
            : function(e) {
                return setTimeout(function() {
                  return e(Date.now());
                }, 1e3 / 60);
              },
        fa = [
          'top',
          'right',
          'bottom',
          'left',
          'width',
          'height',
          'size',
          'weight'
        ],
        za = 'undefined' != typeof MutationObserver,
        ya = (function() {
          function e() {
            (this.connected_ = !1),
              (this.mutationEventsAdded_ = !1),
              (this.mutationsObserver_ = null),
              (this.observers_ = []),
              (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
              (this.refresh = (function(e, t) {
                var c = !1,
                  n = !1,
                  r = 0;
                function o() {
                  c && ((c = !1), e()), n && l();
                }
                function a() {
                  da(o);
                }
                function l() {
                  var e = Date.now();
                  if (c) {
                    if (e - r < 2) return;
                    n = !0;
                  } else (c = !0), (n = !1), setTimeout(a, 20);
                  r = e;
                }
                return l;
              })(this.refresh.bind(this)));
          }
          return (
            (e.prototype.addObserver = function(e) {
              ~this.observers_.indexOf(e) || this.observers_.push(e),
                this.connected_ || this.connect_();
            }),
            (e.prototype.removeObserver = function(e) {
              var t = this.observers_,
                c = t.indexOf(e);
              ~c && t.splice(c, 1),
                !t.length && this.connected_ && this.disconnect_();
            }),
            (e.prototype.refresh = function() {
              this.updateObservers_() && this.refresh();
            }),
            (e.prototype.updateObservers_ = function() {
              var e = this.observers_.filter(function(e) {
                return e.gatherActive(), e.hasActive();
              });
              return (
                e.forEach(function(e) {
                  return e.broadcastActive();
                }),
                e.length > 0
              );
            }),
            (e.prototype.connect_ = function() {
              va &&
                !this.connected_ &&
                (document.addEventListener(
                  'transitionend',
                  this.onTransitionEnd_
                ),
                window.addEventListener('resize', this.refresh),
                za
                  ? ((this.mutationsObserver_ = new MutationObserver(
                      this.refresh
                    )),
                    this.mutationsObserver_.observe(document, {
                      attributes: !0,
                      childList: !0,
                      characterData: !0,
                      subtree: !0
                    }))
                  : (document.addEventListener(
                      'DOMSubtreeModified',
                      this.refresh
                    ),
                    (this.mutationEventsAdded_ = !0)),
                (this.connected_ = !0));
            }),
            (e.prototype.disconnect_ = function() {
              va &&
                this.connected_ &&
                (document.removeEventListener(
                  'transitionend',
                  this.onTransitionEnd_
                ),
                window.removeEventListener('resize', this.refresh),
                this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
                this.mutationEventsAdded_ &&
                  document.removeEventListener(
                    'DOMSubtreeModified',
                    this.refresh
                  ),
                (this.mutationsObserver_ = null),
                (this.mutationEventsAdded_ = !1),
                (this.connected_ = !1));
            }),
            (e.prototype.onTransitionEnd_ = function(e) {
              var t = e.propertyName,
                c = void 0 === t ? '' : t;
              fa.some(function(e) {
                return !!~c.indexOf(e);
              }) && this.refresh();
            }),
            (e.getInstance = function() {
              return (
                this.instance_ || (this.instance_ = new e()), this.instance_
              );
            }),
            (e.instance_ = null),
            e
          );
        })(),
        Ma = function(e, t) {
          for (var c = 0, n = Object.keys(t); c < n.length; c++) {
            var r = n[c];
            Object.defineProperty(e, r, {
              value: t[r],
              enumerable: !1,
              writable: !1,
              configurable: !0
            });
          }
          return e;
        },
        Ha = function(e) {
          return (e && e.ownerDocument && e.ownerDocument.defaultView) || ma;
        },
        Va = ba(0, 0, 0, 0);
      function Ea(e) {
        return parseFloat(e) || 0;
      }
      function La(e) {
        for (var t = [], c = 1; c < arguments.length; c++)
          t[c - 1] = arguments[c];
        return t.reduce(function(t, c) {
          return t + Ea(e['border-' + c + '-width']);
        }, 0);
      }
      var ga =
        'undefined' != typeof SVGGraphicsElement
          ? function(e) {
              return e instanceof Ha(e).SVGGraphicsElement;
            }
          : function(e) {
              return (
                e instanceof Ha(e).SVGElement && 'function' == typeof e.getBBox
              );
            };
      function Ca(e) {
        return va
          ? ga(e)
            ? (function(e) {
                var t = e.getBBox();
                return ba(0, 0, t.width, t.height);
              })(e)
            : (function(e) {
                var t = e.clientWidth,
                  c = e.clientHeight;
                if (!t && !c) return Va;
                var n = Ha(e).getComputedStyle(e),
                  r = (function(e) {
                    for (
                      var t = {}, c = 0, n = ['top', 'right', 'bottom', 'left'];
                      c < n.length;
                      c++
                    ) {
                      var r = n[c],
                        o = e['padding-' + r];
                      t[r] = Ea(o);
                    }
                    return t;
                  })(n),
                  o = r.left + r.right,
                  a = r.top + r.bottom,
                  l = Ea(n.width),
                  s = Ea(n.height);
                if (
                  ('border-box' === n.boxSizing &&
                    (Math.round(l + o) !== t &&
                      (l -= La(n, 'left', 'right') + o),
                    Math.round(s + a) !== c &&
                      (s -= La(n, 'top', 'bottom') + a)),
                  !(function(e) {
                    return e === Ha(e).document.documentElement;
                  })(e))
                ) {
                  var i = Math.round(l + o) - t,
                    h = Math.round(s + a) - c;
                  1 !== Math.abs(i) && (l -= i), 1 !== Math.abs(h) && (s -= h);
                }
                return ba(r.left, r.top, l, s);
              })(e)
          : Va;
      }
      function ba(e, t, c, n) {
        return { x: e, y: t, width: c, height: n };
      }
      var Aa = (function() {
          function e(e) {
            (this.broadcastWidth = 0),
              (this.broadcastHeight = 0),
              (this.contentRect_ = ba(0, 0, 0, 0)),
              (this.target = e);
          }
          return (
            (e.prototype.isActive = function() {
              var e = Ca(this.target);
              return (
                (this.contentRect_ = e),
                e.width !== this.broadcastWidth ||
                  e.height !== this.broadcastHeight
              );
            }),
            (e.prototype.broadcastRect = function() {
              var e = this.contentRect_;
              return (
                (this.broadcastWidth = e.width),
                (this.broadcastHeight = e.height),
                e
              );
            }),
            e
          );
        })(),
        Sa = function(e, t) {
          var c,
            n,
            r,
            o,
            a,
            l,
            s,
            i =
              ((n = (c = t).x),
              (r = c.y),
              (o = c.width),
              (a = c.height),
              (l =
                'undefined' != typeof DOMRectReadOnly
                  ? DOMRectReadOnly
                  : Object),
              (s = Object.create(l.prototype)),
              Ma(s, {
                x: n,
                y: r,
                width: o,
                height: a,
                top: r,
                right: n + o,
                bottom: a + r,
                left: n
              }),
              s);
          Ma(this, { target: e, contentRect: i });
        },
        Oa = (function() {
          function e(e, t, c) {
            if (
              ((this.activeObservations_ = []),
              (this.observations_ = new ua()),
              'function' != typeof e)
            )
              throw new TypeError(
                'The callback provided as parameter 1 is not a function.'
              );
            (this.callback_ = e),
              (this.controller_ = t),
              (this.callbackCtx_ = c);
          }
          return (
            (e.prototype.observe = function(e) {
              if (!arguments.length)
                throw new TypeError('1 argument required, but only 0 present.');
              if ('undefined' != typeof Element && Element instanceof Object) {
                if (!(e instanceof Ha(e).Element))
                  throw new TypeError('parameter 1 is not of type "Element".');
                var t = this.observations_;
                t.has(e) ||
                  (t.set(e, new Aa(e)),
                  this.controller_.addObserver(this),
                  this.controller_.refresh());
              }
            }),
            (e.prototype.unobserve = function(e) {
              if (!arguments.length)
                throw new TypeError('1 argument required, but only 0 present.');
              if ('undefined' != typeof Element && Element instanceof Object) {
                if (!(e instanceof Ha(e).Element))
                  throw new TypeError('parameter 1 is not of type "Element".');
                var t = this.observations_;
                t.has(e) &&
                  (t.delete(e),
                  t.size || this.controller_.removeObserver(this));
              }
            }),
            (e.prototype.disconnect = function() {
              this.clearActive(),
                this.observations_.clear(),
                this.controller_.removeObserver(this);
            }),
            (e.prototype.gatherActive = function() {
              var e = this;
              this.clearActive(),
                this.observations_.forEach(function(t) {
                  t.isActive() && e.activeObservations_.push(t);
                });
            }),
            (e.prototype.broadcastActive = function() {
              if (this.hasActive()) {
                var e = this.callbackCtx_,
                  t = this.activeObservations_.map(function(e) {
                    return new Sa(e.target, e.broadcastRect());
                  });
                this.callback_.call(e, t, e), this.clearActive();
              }
            }),
            (e.prototype.clearActive = function() {
              this.activeObservations_.splice(0);
            }),
            (e.prototype.hasActive = function() {
              return this.activeObservations_.length > 0;
            }),
            e
          );
        })(),
        Na = 'undefined' != typeof WeakMap ? new WeakMap() : new ua(),
        wa = function e(t) {
          if (!(this instanceof e))
            throw new TypeError('Cannot call a class as a function.');
          if (!arguments.length)
            throw new TypeError('1 argument required, but only 0 present.');
          var c = ya.getInstance(),
            n = new Oa(t, c, this);
          Na.set(this, n);
        };
      ['observe', 'unobserve', 'disconnect'].forEach(function(e) {
        wa.prototype[e] = function() {
          var t;
          return (t = Na.get(this))[e].apply(t, arguments);
        };
      });
      const Ta = void 0 !== ma.ResizeObserver ? ma.ResizeObserver : wa;
      var Pa = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.element = null),
              (t.observer = new Ta(function(e) {
                return pr(t.props.onResize, e);
              })),
              t
            );
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              return Ln.Children.only(this.props.children);
            }),
            (t.prototype.componentDidMount = function() {
              this.observeElement();
            }),
            (t.prototype.componentDidUpdate = function(e) {
              this.observeElement(
                this.props.observeParents !== e.observeParents
              );
            }),
            (t.prototype.componentWillUnmount = function() {
              this.observer.disconnect();
            }),
            (t.prototype.observeElement = function(e) {
              void 0 === e && (e = !1);
              var t = this.getElement();
              if (t instanceof Element) {
                if (
                  (t !== this.element || e) &&
                  (this.observer.disconnect(),
                  (this.element = t),
                  this.observer.observe(t),
                  this.props.observeParents)
                )
                  for (var c = t.parentElement; null != c; )
                    this.observer.observe(c), (c = c.parentElement);
              } else this.observer.disconnect();
            }),
            (t.prototype.getElement = function() {
              try {
                return (0, br.findDOMNode)(this);
              } catch (e) {
                return null;
              }
            }),
            (t.displayName = xn + '.ResizeSensor'),
            Vn([Ar.polyfill], t)
          );
        })(Rn),
        Ia = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.popover = null), t;
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              var e = this,
                t = this.props,
                c = t.children,
                n = t.intent,
                r = t.popoverClassName,
                o = Hn(t, ['children', 'intent', 'popoverClassName']),
                a = Cr()(Uc, un(n), r);
              return Ln.createElement(
                Ya,
                Mn({ interactionKind: Wa.HOVER_TARGET_ONLY }, o, {
                  autoFocus: !1,
                  canEscapeKeyClose: !1,
                  enforceFocus: !1,
                  lazy: !0,
                  popoverClassName: a,
                  portalContainer: this.props.portalContainer,
                  ref: function(t) {
                    return (e.popover = t);
                  }
                }),
                c
              );
            }),
            (t.prototype.reposition = function() {
              null != this.popover && this.popover.reposition();
            }),
            (t.displayName = xn + '.Tooltip'),
            (t.defaultProps = {
              hoverCloseDelay: 0,
              hoverOpenDelay: 100,
              transitionDuration: 100
            }),
            Vn([Ar.polyfill], t)
          );
        })(Rn);
      function Ra(e) {
        return e.split('-')[0];
      }
      function ka(e) {
        return -1 !== ['left', 'right'].indexOf(e);
      }
      function _a(e) {
        switch (e) {
          case 'top':
            return 'bottom';
          case 'left':
            return 'right';
          case 'bottom':
            return 'top';
          default:
            return 'left';
        }
      }
      function xa(e) {
        switch (e.split('-')[1]) {
          case 'start':
            return 'left';
          case 'end':
            return 'right';
          default:
            return 'center';
        }
      }
      function Da(e) {
        var t = Ra(e.placement);
        if (null == e.arrowElement)
          return ka(t) ? _a(t) + ' ' + xa(t) : xa(t) + ' ' + _a(t);
        var c = e.arrowElement.clientHeight / 2,
          n = e.offsets.arrow;
        return ka(t)
          ? _a(t) + ' ' + (n.top + c) + 'px'
          : n.left + c + 'px ' + _a(t);
      }
      var Fa = function(e) {
        if (null == e.arrowElement) return e;
        var t = e.arrowElement.clientWidth,
          c = Ra(e.placement),
          n = ka(c),
          r = n ? 'width' : 'height',
          o = n ? 'left' : 'top',
          a = Math.round(t / 2 / Math.sqrt(2));
        return (
          'top' === c || 'left' === c
            ? ((e.offsets.popper[o] -= a + 4),
              (e.offsets.arrow[o] = e.offsets.popper[r] - t + a))
            : ((e.offsets.popper[o] += a + 4), (e.offsets.arrow[o] = -a)),
          e
        );
      };
      function Ba(e) {
        if (null == e) return 0;
        switch (Ra(e)) {
          case 'top':
            return -90;
          case 'left':
            return 180;
          case 'bottom':
            return 90;
          default:
            return 0;
        }
      }
      var Ua = function(e) {
        var t = e.arrowProps,
          c = t.ref,
          n = t.style,
          r = e.placement;
        return Ln.createElement(
          'div',
          { className: Qt, ref: c, style: isNaN(+n.left) ? {} : n },
          Ln.createElement(
            'svg',
            {
              viewBox: '0 0 30 30',
              style: { transform: 'rotate(' + Ba(r) + 'deg)' }
            },
            Ln.createElement('path', {
              className: Qt + '-border',
              d:
                'M8.11 6.302c1.015-.936 1.887-2.922 1.887-4.297v26c0-1.378-.868-3.357-1.888-4.297L.925 17.09c-1.237-1.14-1.233-3.034 0-4.17L8.11 6.302z'
            }),
            Ln.createElement('path', {
              className: Qt + '-fill',
              d:
                'M8.787 7.036c1.22-1.125 2.21-3.376 2.21-5.03V0v30-2.005c0-1.654-.983-3.9-2.21-5.03l-7.183-6.616c-.81-.746-.802-1.96 0-2.7l7.183-6.614z'
            })
          )
        );
      };
      function Ga(e) {
        switch (e) {
          case h.TOP_LEFT:
            return 'top-start';
          case h.TOP:
            return 'top';
          case h.TOP_RIGHT:
            return 'top-end';
          case h.RIGHT_TOP:
            return 'right-start';
          case h.RIGHT:
            return 'right';
          case h.RIGHT_BOTTOM:
            return 'right-end';
          case h.BOTTOM_RIGHT:
            return 'bottom-end';
          case h.BOTTOM:
            return 'bottom';
          case h.BOTTOM_LEFT:
            return 'bottom-start';
          case h.LEFT_BOTTOM:
            return 'left-end';
          case h.LEFT:
            return 'left';
          case h.LEFT_TOP:
            return 'left-start';
          case 'auto':
          case 'auto-start':
          case 'auto-end':
            return e;
          default:
            return (function(e) {
              throw new Error('Unexpected position: ' + e);
            })(e);
        }
      }
      Ua.displayName = xn + '.PopoverArrow';
      var ja,
        Ka,
        Wa = {
          CLICK: 'click',
          CLICK_TARGET_ONLY: 'click-target',
          HOVER: 'hover',
          HOVER_TARGET_ONLY: 'hover-target'
        },
        Ya = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = {
                hasDarkParent: !1,
                isOpen: t.getIsOpen(t.props),
                transformOrigin: ''
              }),
              (t.isMouseInTargetOrPopover = !1),
              (t.lostFocusOnSamePage = !0),
              (t.refHandlers = {
                popover: function(e) {
                  (t.popoverElement = e), pr(t.props.popoverRef, e);
                },
                target: function(e) {
                  return (t.targetElement = e);
                }
              }),
              (t.reposition = function() {
                return pr(t.popperScheduleUpdate);
              }),
              (t.renderPopover = function(e) {
                var c,
                  n = t.props,
                  r = n.usePortal,
                  o = n.interactionKind,
                  a = t.state.transformOrigin;
                t.popperScheduleUpdate = e.scheduleUpdate;
                var l = { onClick: t.handlePopoverClick };
                (o === Wa.HOVER || (!r && o === Wa.HOVER_TARGET_ONLY)) &&
                  ((l.onMouseEnter = t.handleMouseEnter),
                  (l.onMouseLeave = t.handleMouseLeave));
                var s = Cr()(
                  Jt,
                  (((c = {})[y] =
                    t.props.inheritDarkTheme && t.state.hasDarkParent),
                  (c[A] = t.props.minimal),
                  c),
                  t.props.popoverClassName
                );
                return Ln.createElement(
                  'div',
                  { className: sc, ref: e.ref, style: e.style },
                  Ln.createElement(
                    Pa,
                    { onResize: t.reposition },
                    Ln.createElement(
                      'div',
                      Mn({ className: s, style: { transformOrigin: a } }, l),
                      t.isArrowEnabled() &&
                        Ln.createElement(Ua, {
                          arrowProps: e.arrowProps,
                          placement: e.placement
                        }),
                      Ln.createElement(
                        'div',
                        { className: tc },
                        t.understandChildren().content
                      )
                    )
                  )
                );
              }),
              (t.renderTarget = function(e) {
                var c,
                  n,
                  r = t.props,
                  o = r.fill,
                  a = r.openOnTargetFocus,
                  l = r.targetClassName,
                  s = r.targetProps,
                  i = void 0 === s ? {} : s,
                  h = t.state.isOpen,
                  p = t.isControlled(),
                  u = t.isHoverInteractionKind(),
                  v = t.props.targetTagName;
                o && (v = 'div');
                var m = u
                  ? {
                      onBlur: t.handleTargetBlur,
                      onFocus: t.handleTargetFocus,
                      onMouseEnter: t.handleMouseEnter,
                      onMouseLeave: t.handleMouseLeave
                    }
                  : { onClick: t.handleTargetClick };
                (m.className = Cr()(
                  ac,
                  (((c = {})[oc] = h), c),
                  i.className,
                  l
                )),
                  (m.ref = e.ref);
                var f = Mr(t.understandChildren().target),
                  z = f.props.tabIndex,
                  y = null == z && a && u ? 0 : z,
                  M = Ln.cloneElement(f, {
                    className: Cr()(
                      f.props.className,
                      ((n = {}), (n[d] = h && !p && !u), n)
                    ),
                    disabled: !(!h || !Er(f, Ia)) || f.props.disabled,
                    tabIndex: y
                  }),
                  H = Ln.createElement(v, Mn(Mn({}, i), m), M);
                return Ln.createElement(Pa, { onResize: t.reposition }, H);
              }),
              (t.isControlled = function() {
                return void 0 !== t.props.isOpen;
              }),
              (t.handleTargetFocus = function(e) {
                if (t.props.openOnTargetFocus && t.isHoverInteractionKind()) {
                  if (null == e.relatedTarget && !t.lostFocusOnSamePage) return;
                  t.handleMouseEnter(e);
                }
                Lr(t.props.targetProps, 'onFocus', e);
              }),
              (t.handleTargetBlur = function(e) {
                t.props.openOnTargetFocus &&
                  t.isHoverInteractionKind() &&
                  (null == e.relatedTarget ||
                    t.isElementInPopover(e.relatedTarget) ||
                    t.handleMouseLeave(e)),
                  (t.lostFocusOnSamePage = null != e.relatedTarget),
                  Lr(t.props.targetProps, 'onBlur', e);
              }),
              (t.handleMouseEnter = function(e) {
                (t.isMouseInTargetOrPopover = !0),
                  t.props.usePortal ||
                  !t.isElementInPopover(e.target) ||
                  t.props.interactionKind !== Wa.HOVER_TARGET_ONLY ||
                  t.props.openOnTargetFocus
                    ? t.props.disabled ||
                      t.setOpenState(!0, e, t.props.hoverOpenDelay)
                    : t.handleMouseLeave(e),
                  Lr(t.props.targetProps, 'onMouseEnter', e);
              }),
              (t.handleMouseLeave = function(e) {
                (t.isMouseInTargetOrPopover = !1),
                  t.setTimeout(function() {
                    t.isMouseInTargetOrPopover ||
                      t.setOpenState(!1, e, t.props.hoverCloseDelay);
                  }),
                  Lr(t.props.targetProps, 'onMouseLeave', e);
              }),
              (t.handlePopoverClick = function(e) {
                var c = e.target,
                  n = c.closest('.' + nc + ', .' + rc),
                  r = null != n && n.classList.contains(nc),
                  o = null != c.closest(':disabled, .' + M);
                !r ||
                  o ||
                  e.isDefaultPrevented() ||
                  (t.setOpenState(!1, e),
                  t.props.captureDismiss && e.preventDefault());
              }),
              (t.handleOverlayClose = function(e) {
                var c = e.target;
                (!vr(t.targetElement, c) ||
                  e.nativeEvent instanceof KeyboardEvent) &&
                  t.setOpenState(!1, e);
              }),
              (t.handleTargetClick = function(e) {
                t.props.disabled ||
                  t.isElementInPopover(e.target) ||
                  (null == t.props.isOpen
                    ? t.setState(function(e) {
                        return { isOpen: !e.isOpen };
                      })
                    : t.setOpenState(!t.props.isOpen, e)),
                  Lr(t.props.targetProps, 'onClick', e);
              }),
              (t.updatePopoverState = function(e) {
                return t.setState({ transformOrigin: Da(e) }), e;
              }),
              t
            );
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              var e,
                t = this.props,
                c = t.className,
                n = t.disabled,
                r = t.fill,
                o = this.state.isOpen,
                a = this.props.wrapperTagName;
              r && (a = 'div');
              var l = null == Mr(this.understandChildren().content);
              !l ||
                n ||
                !1 === o ||
                An('production') ||
                console.warn(
                  '[Blueprint] Disabling <Popover> with empty/whitespace content...'
                );
              var s = Cr()(lc, c, (((e = {})[H] = r), e)),
                i = Ln.createElement(
                  a,
                  { className: s },
                  Ln.createElement(
                    Yr,
                    { innerRef: this.refHandlers.target },
                    this.renderTarget
                  ),
                  Ln.createElement(
                    pa,
                    {
                      autoFocus: this.props.autoFocus,
                      backdropClassName: ec,
                      backdropProps: this.props.backdropProps,
                      canEscapeKeyClose: this.props.canEscapeKeyClose,
                      canOutsideClickClose:
                        this.props.interactionKind === Wa.CLICK,
                      className: this.props.portalClassName,
                      enforceFocus: this.props.enforceFocus,
                      hasBackdrop: this.props.hasBackdrop,
                      isOpen: o && !l,
                      onClose: this.handleOverlayClose,
                      onClosed: this.props.onClosed,
                      onClosing: this.props.onClosing,
                      onOpened: this.props.onOpened,
                      onOpening: this.props.onOpening,
                      transitionDuration: this.props.transitionDuration,
                      transitionName: Jt,
                      usePortal: this.props.usePortal,
                      portalContainer: this.props.portalContainer
                    },
                    Ln.createElement(
                      oa,
                      {
                        innerRef: this.refHandlers.popover,
                        placement: Ga(this.props.position),
                        modifiers: this.getPopperModifiers()
                      },
                      this.renderPopover
                    )
                  )
                );
              return Ln.createElement(Ur, null, i);
            }),
            (t.prototype.componentDidMount = function() {
              this.updateDarkParent();
            }),
            (t.prototype.componentDidUpdate = function(t, c, n) {
              e.prototype.componentDidUpdate.call(this, t, c, n),
                this.updateDarkParent();
              var r = this.getIsOpen(this.props);
              null != this.props.isOpen && r !== this.state.isOpen
                ? (this.setOpenState(r), this.setState({ isOpen: r }))
                : this.props.disabled &&
                  this.state.isOpen &&
                  null == this.props.isOpen &&
                  this.setOpenState(!1);
            }),
            (t.prototype.validateProps = function(e) {
              if (
                (null == e.isOpen &&
                  null != e.onInteraction &&
                  console.warn(
                    '[Blueprint] <Popover> onInteraction is ignored when uncontrolled.'
                  ),
                e.hasBackdrop &&
                  !e.usePortal &&
                  console.warn(
                    '[Blueprint] <Popover usePortal={false}> ignores hasBackdrop'
                  ),
                e.hasBackdrop && e.interactionKind !== Wa.CLICK)
              )
                throw new Error(
                  '[Blueprint] <Popover hasBackdrop={true}> requires interactionKind={PopoverInteractionKind.CLICK}.'
                );
              var t = Ln.Children.count(e.children),
                c = void 0 !== e.content,
                n = void 0 !== e.target;
              if (0 === t && !n)
                throw new Error(
                  '[Blueprint] <Popover> requires target prop or at least one child element.'
                );
              t > 2 &&
                console.warn(
                  '[Blueprint] <Popover> supports one or two children; additional children are ignored. First child is the target, second child is the content. You may instead supply these two as props.'
                ),
                t > 0 &&
                  n &&
                  console.warn(
                    '[Blueprint] <Popover> with children ignores target prop; use either prop or children.'
                  ),
                2 === t &&
                  c &&
                  console.warn(
                    '[Blueprint] <Popover> with two children ignores content prop; use either prop or children.'
                  );
            }),
            (t.prototype.updateDarkParent = function() {
              if (this.props.usePortal && this.state.isOpen) {
                var e =
                  null != this.targetElement &&
                  null != this.targetElement.closest('.' + y);
                this.setState({ hasDarkParent: e });
              }
            }),
            (t.prototype.understandChildren = function() {
              var e = this.props,
                t = e.children,
                c = e.content,
                n = e.target,
                r = Ln.Children.toArray(t),
                o = r[0],
                a = r[1];
              return { content: null == a ? c : a, target: null == o ? n : o };
            }),
            (t.prototype.getIsOpen = function(e) {
              return (
                !e.disabled && (null != e.isOpen ? e.isOpen : e.defaultIsOpen)
              );
            }),
            (t.prototype.getPopperModifiers = function() {
              var e = this.props,
                t = e.boundary,
                c = e.modifiers,
                n = c.flip,
                r = void 0 === n ? {} : n,
                o = c.preventOverflow,
                a = void 0 === o ? {} : o;
              return Mn(Mn({}, c), {
                arrowOffset: {
                  enabled: this.isArrowEnabled(),
                  fn: Fa,
                  order: 510
                },
                flip: Mn({ boundariesElement: t }, r),
                preventOverflow: Mn({ boundariesElement: t }, a),
                updatePopoverState: {
                  enabled: !0,
                  fn: this.updatePopoverState,
                  order: 900
                }
              });
            }),
            (t.prototype.setOpenState = function(e, t, c) {
              var n = this;
              pr(this.cancelOpenTimeout),
                c > 0
                  ? (this.cancelOpenTimeout = this.setTimeout(function() {
                      return n.setOpenState(e, t);
                    }, c))
                  : (null == this.props.isOpen
                      ? this.setState({ isOpen: e })
                      : pr(this.props.onInteraction, e, t),
                    e || pr(this.props.onClose, t));
            }),
            (t.prototype.isArrowEnabled = function() {
              var e = this.props,
                t = e.minimal,
                c = e.modifiers.arrow;
              return !t && (null == c || c.enabled);
            }),
            (t.prototype.isElementInPopover = function(e) {
              return (
                null != this.popoverElement && this.popoverElement.contains(e)
              );
            }),
            (t.prototype.isHoverInteractionKind = function() {
              return (
                this.props.interactionKind === Wa.HOVER ||
                this.props.interactionKind === Wa.HOVER_TARGET_ONLY
              );
            }),
            (t.displayName = xn + '.Popover'),
            (t.defaultProps = {
              boundary: 'scrollParent',
              captureDismiss: !1,
              defaultIsOpen: !1,
              disabled: !1,
              fill: !1,
              hasBackdrop: !1,
              hoverCloseDelay: 300,
              hoverOpenDelay: 150,
              inheritDarkTheme: !0,
              interactionKind: Wa.CLICK,
              minimal: !1,
              modifiers: {},
              openOnTargetFocus: !0,
              position: 'auto',
              targetTagName: 'span',
              transitionDuration: 300,
              usePortal: !0,
              wrapperTagName: 'span'
            }),
            Vn([Ar.polyfill], t)
          );
        })(Rn),
        qa = { preventOverflow: { boundariesElement: 'viewport' } },
        Xa = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = {
                isDarkTheme: !1,
                isOpen: !1,
                menu: null,
                offset: null
              }),
              (t.cancelContextMenu = function(e) {
                return e.preventDefault();
              }),
              (t.handleBackdropContextMenu = function(e) {
                e.persist(),
                  e.preventDefault(),
                  t.setTimeout(function() {
                    document
                      .elementFromPoint(e.clientX, e.clientY)
                      .dispatchEvent(new MouseEvent('contextmenu', e));
                  }, 100);
              }),
              (t.handlePopoverInteraction = function(e) {
                e ||
                  requestAnimationFrame(function() {
                    return t.hide();
                  });
              }),
              t
            );
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              var e,
                t = Ln.createElement(
                  'div',
                  { onContextMenu: this.cancelContextMenu },
                  this.state.menu
                ),
                c = Cr()((((e = {})[y] = this.state.isDarkTheme), e)),
                n =
                  null == this.state.offset
                    ? ''
                    : this.state.offset.left + 'x' + this.state.offset.top;
              return Ln.createElement(
                'div',
                { className: Ae, style: this.state.offset },
                Ln.createElement(
                  Ya,
                  Mn({}, this.props, {
                    backdropProps: {
                      onContextMenu: this.handleBackdropContextMenu
                    },
                    content: t,
                    enforceFocus: !1,
                    key: n,
                    hasBackdrop: !0,
                    isOpen: this.state.isOpen,
                    minimal: !0,
                    modifiers: qa,
                    onInteraction: this.handlePopoverInteraction,
                    position: h.RIGHT_TOP,
                    popoverClassName: c,
                    target: Ln.createElement('div', null),
                    transitionDuration: 100
                  })
                )
              );
            }),
            (t.prototype.show = function(e, t, c, n) {
              this.setState({
                isOpen: !0,
                menu: e,
                offset: t,
                onClose: c,
                isDarkTheme: n
              });
            }),
            (t.prototype.hide = function() {
              pr(this.state.onClose),
                this.setState({ isOpen: !1, onClose: void 0 });
            }),
            Vn([Ar.polyfill], t)
          );
        })(Rn);
      function $a(e, t, c, n) {
        null == ja &&
          ((ja = document.createElement('div')).classList.add(be),
          document.body.appendChild(ja),
          (Ka = br.render(Ln.createElement(Xa, { onClosed: Qa }), ja))),
          Ka.show(e, t, c, n);
      }
      function Za() {
        null != Ka && Ka.hide();
      }
      function Ja() {
        return null != Ka && Ka.state.isOpen;
      }
      function Qa() {
        null != ja &&
          (br.unmountComponentAtNode(ja),
          ja.remove(),
          (ja = null),
          (Ka = null));
      }
      var el = {
          add: [
            'M10.99 6.99h-2v-2c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1zm-3-7c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.68 6-6 6z'
          ],
          'add-column-left': [
            'M15 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-5 14H2V2h8v12zm4 0h-3V2h3v12zM4 9h1v1c0 .55.45 1 1 1s1-.45 1-1V9h1c.55 0 1-.45 1-1s-.45-1-1-1H7V6c0-.55-.45-1-1-1s-1 .45-1 1v1H4c-.55 0-1 .45-1 1s.45 1 1 1z'
          ],
          'add-column-right': [
            'M8 9h1v1c0 .55.45 1 1 1s1-.45 1-1V9h1c.55 0 1-.45 1-1s-.45-1-1-1h-1V6c0-.55-.45-1-1-1s-1 .45-1 1v1H8c-.55 0-1 .45-1 1s.45 1 1 1zm7-9H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM5 14H2V2h3v12zm9 0H6V2h8v12z'
          ],
          'add-row-bottom': [
            'M6 11h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1H9V8c0-.55-.45-1-1-1s-1 .45-1 1v1H6c-.55 0-1 .45-1 1s.45 1 1 1zm9-11H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 14H2V6h12v8zm0-9H2V2h12v3z'
          ],
          'add-row-top': [
            'M15 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 14H2v-3h12v3zm0-4H2V2h12v8zM6 7h1v1c0 .55.45 1 1 1s1-.45 1-1V7h1c.55 0 1-.45 1-1s-.45-1-1-1H9V4c0-.55-.45-1-1-1s-1 .45-1 1v1H6c-.55 0-1 .45-1 1s.45 1 1 1z'
          ],
          'add-to-artifact': [
            'M14 4.01h-1v-1c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1 0-.56-.45-1-1-1zm-13 2h6c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm8 6H1c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1 0-.56-.45-1-1-1zm0-4H1c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1 0-.56-.45-1-1-1z'
          ],
          'add-to-folder': [
            'M.01 7V5H16v7c0 .55-.45 1-1 1H9.005v-2.99C8.974 8.332 7.644 7 5.996 7H.01zM15 2H7.416L5.706.29a.996.996 0 00-.71-.29H1C.45 0 0 .45 0 1v3h15.99V3c.01-.55-.44-1-.99-1zM5.997 9H2c-.55 0-1 .45-1 1s.45 1 1 1h1.589L.3 14.29a1.003 1.003 0 001.42 1.42l3.287-3.29v1.59c0 .55.45 1 1 1 .549 0 .999-.45.999-1v-4A1.02 1.02 0 005.996 9z'
          ],
          airplane: [
            'M16 1.5A1.498 1.498 0 0013.44.44L9.91 3.97 2 1 1 3l5.93 3.95L3.88 10H1l-1 1 3 2 2 3 1-1v-2.88l3.05-3.05L13 15l2-1-2.97-7.91 3.53-3.53c.27-.27.44-.65.44-1.06z'
          ],
          'align-center': [
            'M4 4c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1H4zM1 3h14c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm13 10H2c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1zm1-6H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm-5 5c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1h4z'
          ],
          'align-justify': [
            'M15 12.98H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm-14-10h14c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1 0 .56.45 1 1 1zm14 4H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm0-3H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm0 6H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'align-left': [
            'M13 13H1c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1zM1 3h14c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm0 3h8c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm14 1H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM1 12h4c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1z'
          ],
          'align-right': [
            'M15 12.98H3c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1zm-14-10h14c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1 0 .56.45 1 1 1zm14 1H7c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1zm0 6h-4c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1zm0-3H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'alignment-bottom': [
            'M10 12h3c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm5 2H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM3 12h3c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1z'
          ],
          'alignment-horizontal-center': [
            'M15 7h-1V6c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v1H7V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v4H1c-.55 0-1 .45-1 1s.45 1 1 1h1v4c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V9h2v1c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V9h1c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'alignment-left': [
            'M9 9H5c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zM1 0C.45 0 0 .45 0 1v14c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zm13 2H5c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1z'
          ],
          'alignment-right': [
            'M11 9H7c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm4-9c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zm-4 2H2c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1z'
          ],
          'alignment-top': [
            'M15 0H1C.45 0 0 .45 0 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM6 4H3c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm7 0h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1z'
          ],
          'alignment-vertical-center': [
            'M13 2H9V1c0-.55-.45-1-1-1S7 .45 7 1v1H3c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4v2H6c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1H9V7h4c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1z'
          ],
          annotation: [
            'M15.52 2.77c.3-.29.48-.7.48-1.15C16 .73 15.27 0 14.38 0c-.45 0-.85.18-1.15.48l-1.34 1.34 2.3 2.3 1.33-1.35zM7.4 10.9l6.21-6.21-2.3-2.3L5.1 8.6l2.3 2.3zM14 14H2V2h6.34l2-2H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V5.66l-2 2V14zM3 13l3.58-1.29-2.29-2.27L3 13z'
          ],
          'app-header': [
            'M15 0a1 1 0 011 1v14a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h14zM6 4a1 1 0 00-1.993-.117L4 4v8a1 1 0 001.993.117L6 12V9h4v3a1 1 0 001.993.117L12 12V4a1 1 0 00-1.993-.117L10 4v3H6V4z'
          ],
          application: [
            'M3.5 7h7c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-7c-.28 0-.5.22-.5.5s.22.5.5.5zM15 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm-1 12H2V5h12v8zM3.5 9h4c.28 0 .5-.22.5-.5S7.78 8 7.5 8h-4c-.28 0-.5.22-.5.5s.22.5.5.5zm0 2h5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5s.22.5.5.5z'
          ],
          applications: [
            'M3.5 11h2c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-2c-.28 0-.5.22-.5.5s.22.5.5.5zm0-2h5c.28 0 .5-.22.5-.5S8.78 8 8.5 8h-5c-.28 0-.5.22-.5.5s.22.5.5.5zM11 4H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-1 10H2V7h8v7zm5-14H5c-.55 0-1 .45-1 1v2h2V2h8v7h-1v2h2c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM3.5 13h3c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-3c-.28 0-.5.22-.5.5s.22.5.5.5z'
          ],
          archive: [
            'M13.382 0a1 1 0 01.894.553L16 4v11a1 1 0 01-1 1H1a1 1 0 01-1-1V4L1.724.553A1 1 0 012.618 0h10.764zM8 6c-.55 0-1 .45-1 1v2.59l-.29-.29-.081-.076A.97.97 0 006 9a1.003 1.003 0 00-.71 1.71l2 2 .096.084c.168.13.38.206.614.206.28 0 .53-.11.71-.29l2-2 .084-.096A1.003 1.003 0 009.29 9.29l-.29.3V7l-.007-.116A1.004 1.004 0 008 6zm5-4H3L2 4h12l-1-2z'
          ],
          array: [
            'M15 0a1 1 0 01.993.883L16 1v14a1 1 0 01-.883.993L15 16h-3a1 1 0 01-.117-1.993L12 14h2V2h-2a1 1 0 01-.993-.883L11 1a1 1 0 01.883-.993L12 0h3zM4 0a1 1 0 01.117 1.993L4 2H2v12h2a1 1 0 01.993.883L5 15a1 1 0 01-.883.993L4 16H1a1 1 0 01-.993-.883L0 15V1A1 1 0 01.883.007L1 0h3zm4 7a1 1 0 110 2 1 1 0 010-2zM5 7a1 1 0 110 2 1 1 0 010-2zm6 0a1 1 0 110 2 1 1 0 010-2z'
          ],
          'array-boolean': [
            'M15 0a1 1 0 01.993.883L16 1v14a1 1 0 01-.883.993L15 16h-3a1 1 0 01-.117-1.993L12 14h2V2h-2a1 1 0 01-.993-.883L11 1a1 1 0 01.883-.993L12 0h3zM4 0a1 1 0 01.117 1.993L4 2H2v12h2a1 1 0 01.993.883L5 15a1 1 0 01-.883.993L4 16H1a1 1 0 01-.993-.883L0 15V1A1 1 0 01.883.007L1 0h3zm7 6a1 1 0 01.993.883L12 7v2a1 1 0 01-.883.993L11 10H5a1 1 0 01-.993-.883L4 9V7a1 1 0 01.883-.993L5 6h6zm0 1H8v2h3V7z'
          ],
          'array-date': [
            'M15 0a1 1 0 01.993.883L16 1v14a1 1 0 01-.883.993L15 16h-3a1 1 0 01-.117-1.993L12 14h2V2h-2a1 1 0 01-.993-.883L11 1a1 1 0 01.883-.993L12 0h3zM4 0a1 1 0 01.117 1.993L4 2H2v12h2a1 1 0 01.993.883L5 15a1 1 0 01-.883.993L4 16H1a1 1 0 01-.993-.883L0 15V1A1 1 0 01.883.007L1 0h3zm6.5 4a.5.5 0 01.5.5V5a1 1 0 01.993.883L12 6v5a1 1 0 01-.883.993L11 12H5a1 1 0 01-.993-.883L4 11V6a1 1 0 01.883-.993L5 5v-.5a.5.5 0 011 0V5h4v-.5a.5.5 0 01.5-.5zm.5 3H5v4h6V7z'
          ],
          'array-numeric': [
            'M15 0a1 1 0 01.993.883L16 1v14a1 1 0 01-.883.993L15 16h-3a1 1 0 01-.117-1.993L12 14h2V2h-2a1 1 0 01-.993-.883L11 1a1 1 0 01.883-.993L12 0h3zM4 0a1 1 0 01.117 1.993L4 2H2v12h2a1 1 0 01.993.883L5 15a1 1 0 01-.883.993L4 16H1a1 1 0 01-.993-.883L0 15V1A1 1 0 01.883.007L1 0h3zm6.904 5c.256 0 .483.037.68.112a1.343 1.343 0 01.812.788c.072.184.108.385.108.604 0 .23-.05.441-.152.636a1.314 1.314 0 01-.456.492v.016l.08.04c.055.031.111.072.168.124.085.077.163.172.232.284a1.673 1.673 0 01.24.872c0 .25-.043.477-.128.68a1.518 1.518 0 01-.896.852 1.937 1.937 0 01-.68.116c-.427 0-.792-.101-1.096-.304a1.362 1.362 0 01-.584-.864c-.01-.053.01-.088.064-.104l.696-.16.033-.002c.03.002.051.022.063.058.059.16.155.296.288.408.133.112.312.168.536.168.256 0 .453-.076.592-.228a.827.827 0 00.208-.58c0-.277-.08-.495-.24-.652-.16-.157-.376-.236-.648-.236h-.232l-.035-.005c-.03-.01-.045-.035-.045-.075v-.632l.005-.035c.01-.03.035-.045.075-.045h.216l.138-.009a.734.734 0 00.438-.207c.144-.144.216-.336.216-.576a.745.745 0 00-.192-.532c-.128-.136-.307-.204-.536-.204-.203 0-.363.05-.48.152a.815.815 0 00-.248.408c-.016.048-.048.067-.096.056l-.68-.16-.034-.012c-.028-.016-.038-.044-.03-.084a1.347 1.347 0 01.516-.828c.136-.104.296-.185.48-.244A1.98 1.98 0 0110.904 5zm-6.152.088l.035.005c.03.01.045.035.045.075v5.28l-.005.035c-.01.03-.035.045-.075.045h-.736l-.035-.005c-.03-.01-.045-.035-.045-.075V6.16H3.92l-.832.584-.032.016C3.02 6.773 3 6.751 3 6.696V5.88l.006-.04a.157.157 0 01.05-.072l.872-.632.04-.027a.236.236 0 01.104-.021h.68zM7.344 5c.256 0 .483.04.68.12.197.08.364.188.5.324s.24.296.312.48c.072.184.108.383.108.596 0 .245-.045.47-.136.676-.09.205-.216.404-.376.596l-1.584 1.92v.016h2.016l.035.005c.03.01.045.035.045.075v.64l-.005.035c-.01.03-.035.045-.075.045H5.808l-.035-.005c-.03-.01-.045-.035-.045-.075v-.6l.004-.04a.132.132 0 01.036-.064l1.92-2.392.1-.133a1.95 1.95 0 00.156-.267.985.985 0 00.096-.432.736.736 0 00-.188-.512c-.125-.139-.303-.208-.532-.208-.219 0-.39.061-.512.184a.826.826 0 00-.224.496c-.01.053-.04.075-.088.064L5.792 6.4l-.034-.012c-.028-.016-.038-.044-.03-.084a1.425 1.425 0 01.94-1.192A1.88 1.88 0 017.344 5z'
          ],
          'array-string': [
            'M15 0a1 1 0 01.993.883L16 1v14a1 1 0 01-.883.993L15 16h-3a1 1 0 01-.117-1.993L12 14h2V2h-2a1 1 0 01-.993-.883L11 1a1 1 0 01.883-.993L12 0h3zM4 0a1 1 0 01.117 1.993L4 2H2v12h2a1 1 0 01.993.883L5 15a1 1 0 01-.883.993L4 16H1a1 1 0 01-.993-.883L0 15V1A1 1 0 01.883.007L1 0h3zm1.61 5c.514 0 .962.212 1.343.637.382.425.573.997.573 1.716 0 .838-.258 1.588-.773 2.252-.514.663-1.327 1.2-2.437 1.609v-.465l.233-.095a3.09 3.09 0 001.274-1.017c.366-.505.55-1.03.55-1.577a.478.478 0 00-.057-.26c-.018-.037-.043-.056-.074-.056s-.08.025-.149.075c-.198.142-.446.214-.744.214-.36 0-.675-.145-.944-.433A1.453 1.453 0 014 6.572c0-.422.155-.79.465-1.102.31-.313.692-.47 1.144-.47zm4.474 0c.514 0 .963.212 1.344.637.381.425.572.997.572 1.716 0 .838-.257 1.588-.772 2.252-.515.663-1.327 1.2-2.437 1.609v-.465l.233-.095a3.09 3.09 0 001.274-1.017c.366-.505.549-1.03.549-1.577a.478.478 0 00-.056-.26c-.019-.037-.044-.056-.075-.056-.03 0-.08.025-.149.075-.198.142-.446.214-.744.214-.36 0-.674-.145-.944-.433a1.453 1.453 0 01-.405-1.028c0-.422.155-.79.466-1.102.31-.313.691-.47 1.144-.47z'
          ],
          'array-timestamp': [
            'M15 0a1 1 0 01.993.883L16 1v14a1 1 0 01-.883.993L15 16h-3a1 1 0 01-.117-1.993L12 14h2V2h-2a1 1 0 01-.993-.883L11 1a1 1 0 01.883-.993L12 0h3zM4 0a1 1 0 01.117 1.993L4 2H2v12h2a1 1 0 01.993.883L5 15a1 1 0 01-.883.993L4 16H1a1 1 0 01-.993-.883L0 15V1A1 1 0 01.883.007L1 0h3zm4 3a5 5 0 110 10A5 5 0 018 3zm0 1a4 4 0 100 8 4 4 0 000-8zm2.354 1.646a.5.5 0 01.057.638l-.057.07-2 2a.5.5 0 01-.638.057l-.07-.057-1-1a.5.5 0 01.638-.765l.07.057.646.647 1.646-1.647a.5.5 0 01.708 0z'
          ],
          'arrow-bottom-left': [
            'M14 3a1.003 1.003 0 00-1.71-.71L4 10.59V6c0-.55-.45-1-1-1s-1 .45-1 1v7c0 .55.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1H5.41l8.29-8.29c.19-.18.3-.43.3-.71z'
          ],
          'arrow-bottom-right': [
            'M13 5c-.55 0-1 .45-1 1v4.59l-8.29-8.3a1.003 1.003 0 00-1.42 1.42l8.3 8.29H6c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z'
          ],
          'arrow-down': [
            'M13 8c-.3 0-.5.1-.7.3L9 11.6V2c0-.5-.4-1-1-1s-1 .5-1 1v9.6L3.7 8.3C3.5 8.1 3.3 8 3 8c-.5 0-1 .5-1 1 0 .3.1.5.3.7l5 5c.2.2.4.3.7.3s.5-.1.7-.3l5-5c.2-.2.3-.4.3-.7 0-.6-.4-1-1-1z'
          ],
          'arrow-left': [
            'M13.99 6.99H4.41L7.7 3.7a1.003 1.003 0 00-1.42-1.42l-5 5a1.014 1.014 0 000 1.42l5 5a1.003 1.003 0 001.42-1.42L4.41 8.99H14c.55 0 1-.45 1-1s-.46-1-1.01-1z'
          ],
          'arrow-right': [
            'M14.7 7.29l-5-5a.965.965 0 00-.71-.3 1.003 1.003 0 00-.71 1.71l3.29 3.29H1.99c-.55 0-1 .45-1 1s.45 1 1 1h9.59l-3.29 3.29a1.003 1.003 0 001.42 1.42l5-5c.18-.18.29-.43.29-.71s-.12-.52-.3-.7z'
          ],
          'arrow-top-left': [
            'M13.71 12.29L5.41 4H10c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1s1-.45 1-1V5.41l8.29 8.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71z'
          ],
          'arrow-top-right': [
            'M13 2H6c-.55 0-1 .45-1 1s.45 1 1 1h4.59L2.3 12.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L12 5.41V10c0 .55.45 1 1 1s1-.45 1-1V3c0-.55-.45-1-1-1z'
          ],
          'arrow-up': [
            'M13.7 6.3l-5-5C8.5 1.1 8.3 1 8 1s-.5.1-.7.3l-5 5c-.2.2-.3.4-.3.7 0 .6.5 1 1 1 .3 0 .5-.1.7-.3L7 4.4V14c0 .6.4 1 1 1s1-.4 1-1V4.4l3.3 3.3c.2.2.4.3.7.3.6 0 1-.4 1-1 0-.3-.1-.5-.3-.7z'
          ],
          'arrows-horizontal': [
            'M15.7 7.3l-4-4c-.2-.2-.4-.3-.7-.3-.6 0-1 .5-1 1 0 .3.1.5.3.7L12.6 7H3.4l2.3-2.3c.2-.2.3-.4.3-.7 0-.5-.4-1-1-1-.3 0-.5.1-.7.3l-4 4c-.2.2-.3.4-.3.7s.1.5.3.7l4 4c.2.2.4.3.7.3.6 0 1-.4 1-1 0-.3-.1-.5-.3-.7L3.4 9h9.2l-2.3 2.3c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3l4-4c.2-.2.3-.4.3-.7s-.1-.5-.3-.7z'
          ],
          'arrows-vertical': [
            'M12 10c-.3 0-.5.1-.7.3L9 12.6V3.4l2.3 2.3c.2.2.4.3.7.3.6 0 1-.4 1-1 0-.3-.1-.5-.3-.7l-4-4C8.5.1 8.3 0 8 0s-.5.1-.7.3l-4 4c-.2.2-.3.4-.3.7 0 .6.5 1 1 1 .3 0 .5-.1.7-.3L7 3.4v9.2l-2.3-2.3c-.2-.2-.4-.3-.7-.3-.5 0-1 .4-1 1 0 .3.1.5.3.7l4 4c.2.2.4.3.7.3s.5-.1.7-.3l4-4c.2-.2.3-.4.3-.7 0-.6-.4-1-1-1z'
          ],
          asterisk: [
            'M14.54 11.18l.01-.02L9.8 8l4.75-3.17-.01-.02c.27-.17.46-.46.46-.81 0-.55-.45-1-1-1-.21 0-.39.08-.54.18l-.01-.02L9 6.13V1c0-.55-.45-1-1-1S7 .45 7 1v5.13L2.55 3.17l-.01.01A.969.969 0 002 3c-.55 0-1 .45-1 1 0 .35.19.64.46.82l-.01.01L6.2 8l-4.75 3.17.01.02c-.27.17-.46.46-.46.81 0 .55.45 1 1 1 .21 0 .39-.08.54-.18l.01.02L7 9.87V15c0 .55.45 1 1 1s1-.45 1-1V9.87l4.45 2.96.01-.02c.15.11.33.19.54.19.55 0 1-.45 1-1 0-.35-.19-.64-.46-.82z'
          ],
          'automatic-updates': [
            'M8 14c-3.31 0-6-2.69-6-6 0-1.77.78-3.36 2-4.46V5c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1s.45 1 1 1h1.74A7.95 7.95 0 000 8c0 4.42 3.58 8 8 8 .55 0 1-.45 1-1s-.45-1-1-1zM8 2a5.9 5.9 0 012.95.81l1.47-1.47A7.893 7.893 0 008 0c-.55 0-1 .45-1 1s.45 1 1 1zm2.71 6.71l5-5a1.003 1.003 0 00-1.42-1.42L10 6.59l-1.29-1.3a1.003 1.003 0 00-1.42 1.42l2 2c.18.18.43.29.71.29s.53-.11.71-.29zM16 8c0-.55-.06-1.08-.16-1.6l-1.87 1.87A5.966 5.966 0 0112 12.45V11c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1h-1.74A7.95 7.95 0 0016 8z'
          ],
          backlink: [
            'M14 10a1 1 0 110 2h-.585l2.292 2.293a1 1 0 01-1.32 1.497l-.094-.083L12 13.415V14a1 1 0 11-2 0l.003-3.075.012-.1.012-.059.033-.108.034-.081.052-.098.067-.096.08-.09a1.01 1.01 0 01.112-.097l.11-.071.143-.065.076-.024.091-.02.116-.014L14 10zM6.036 6.136l-3.45 3.45-.117.127a2 2 0 002.818 2.818l.127-.117 3.45-3.449a4 4 0 01-.885 3.704l-.15.16-1 1A4 4 0 011.02 8.33l.15-.16 1-1a3.998 3.998 0 013.865-1.035zm4.671-1.843a1 1 0 01.083 1.32l-.083.094-5 5a1 1 0 01-1.497-1.32l.083-.094 5-5a1 1 0 011.414 0zm3.121-3.121a4 4 0 01.151 5.497l-.15.16-1 1a3.998 3.998 0 01-3.864 1.036l3.45-3.45.116-.128a2 2 0 00-2.818-2.818l-.127.117-3.45 3.45A4 4 0 017.02 2.33l.15-.16 1-1a4 4 0 015.657 0z'
          ],
          badge: [
            'M13.36 4.59c-.15-1.13.5-2.01 1.1-2.87L13.43.53c-1.72.88-4.12.65-5.63-.53-1.51 1.18-3.91 1.41-5.63.52l-1.03 1.2c.61.86 1.25 1.74 1.1 2.87-.3 2.29-2.45 4.17-1.32 6.68.45 1.14 1.44 1.9 2.72 2.2 1.56.36 3.52.72 4.16 2.53.64-1.81 2.6-2.16 4.16-2.54 1.28-.3 2.27-1.06 2.72-2.2 1.12-2.5-1.03-4.38-1.32-6.67z'
          ],
          'ban-circle': [
            'M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3 9H5c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1z'
          ],
          'bank-account': [
            'M15.36 6.46l-.62-.14c-.31-1.12-.98-2.15-1.87-2.99l.4-1.77a.438.438 0 00-.49-.56c-.85.09-1.6.42-2.14.98-.84-.32-1.87-.51-2.85-.51-2.49 0-4.63 1.17-5.92 2.89-.18-.04-.36-.09-.53-.09-.76 0-1.34.61-1.34 1.4 0 .56.31 1.03.76 1.26-.05.33-.09.7-.09 1.07 0 1.68.71 3.17 1.83 4.34l-.27 1.59c-.09.56.35 1.07.89 1.07h.58c.45 0 .8-.33.89-.79l.04-.37c.94.42 2 .7 3.16.7 1.11 0 2.23-.23 3.16-.7l.05.37c.09.47.45.79.89.79h.58c.53 0 .98-.51.89-1.07l-.27-1.54c.62-.61 1.07-1.35 1.38-2.15l.8-.19c.4-.09.71-.47.71-.93V7.4c.09-.47-.22-.84-.62-.94zM12 8c-.6 0-1-.7-1-1.5S11.4 5 12 5s1 .7 1 1.5S12.6 8 12 8zM6.21 4.92c-.41.2-.91.04-1.12-.36-.21-.4-.04-.88.37-1.07 1.35-.65 2.73-.65 4.08 0 .41.2.58.68.37 1.07-.21.4-.71.56-1.12.36-.87-.43-1.71-.43-2.58 0z'
          ],
          barcode: [
            'M0 14h2V2H0v12zm6 0h1V2H6v12zm2 0h1V2H8v12zm-5 0h2V2H3v12zM15 2v12h1V2h-1zm-5 12h1V2h-1v12zm2 0h2V2h-2v12z'
          ],
          blank: [],
          'blocked-person': [
            'M9.39 12.69c-1.2-.53-1.04-.85-1.08-1.29-.01-.07-.01-.13-.02-.2.41-.37.75-.87.97-1.44 0 0 .01-.03.01-.04.05-.13.09-.26.13-.39.27-.06.43-.36.5-.63.01-.03.03-.08.05-.12C8.18 7.8 6.94 6.04 6.94 4c0-.32.04-.62.09-.92-.17-.03-.35-.08-.51-.08-.65 0-1.37.2-1.88.59-.5.38-.87.92-1.05 1.51-.04.14-.07.27-.09.41-.09.48-.14 1.23-.14 1.74v.06c-.19.08-.36.27-.4.68-.03.31.1.59.16.7.06.28.23.59.51.64.04.14.08.27.13.39 0 .01.01.02.01.02v.01c.22.59.57 1.1.99 1.46 0 .06-.01.12-.01.17-.04.44.08.76-1.12 1.29-1.2.53-3.01 1.1-3.38 1.95C-.12 15.5.03 16 .03 16h12.96s.15-.5-.22-1.36c-.37-.85-2.18-1.42-3.38-1.95zM11.97 0C9.75 0 7.94 1.79 7.94 4s1.8 4 4.03 4S16 6.21 16 4s-1.8-4-4.03-4zM9.96 4c0-1.1.9-2 2.01-2 .37 0 .72.11 1.02.28l-2.75 2.73c-.17-.3-.28-.64-.28-1.01zm2.01 2c-.37 0-.72-.11-1.02-.28l2.75-2.73c.18.3.28.64.28 1.01.01 1.1-.9 2-2.01 2z'
          ],
          bold: [
            'M11.7 7c.2-.4.3-1 .3-1.5v-.4V5c0-.1 0-.2-.1-.3v-.1C11.4 3.1 10.1 2 8.5 2H4c-.5 0-1 .4-1 1v10c0 .5.4 1 1 1h5c2.2 0 4-1.8 4-4 0-1.2-.5-2.3-1.3-3zM6 5h2c.6 0 1 .4 1 1s-.4 1-1 1H6V5zm3 6H6V9h3c.6 0 1 .4 1 1s-.4 1-1 1z'
          ],
          book: [
            'M2 1v14c0 .55.45 1 1 1h1V0H3c-.55 0-1 .45-1 1zm11-1h-1v7l-2-2-2 2V0H5v16h8c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z'
          ],
          bookmark: [
            'M11.2.01h-.15C11.03.01 11.02 0 11 0H5c-.02 0-.03.01-.05.01H4.8c-.44 0-.8.37-.8.82v14.75c0 .45.25.56.57.24l2.87-2.94c.31-.32.82-.32 1.13 0l2.87 2.94c.31.32.57.21.57-.24V.83C12 .38 11.64.01 11.2.01z'
          ],
          box: [
            'M6 10h4c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1zm9.93-4.37v-.02L13.94.63C13.78.26 13.42 0 13 0H3c-.42 0-.78.26-.93.63L.08 5.61l-.01.02C.03 5.74 0 5.87 0 6v9c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V6c0-.13-.03-.26-.07-.37zM9 2h3.32l1.2 3H9V2zM3.68 2H7v3H2.48l1.2-3zM14 14H2V7h12v7z'
          ],
          briefcase: [
            'M15 3.98h-3v-2c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v2H1c-.55 0-1 .45-1 1v4h3v-1h2v1h6v-1h2v1h3v-4c0-.55-.45-1-1-1zm-5 0H6v-1h4v1zm3 7h-2v-1H5v1H3v-1H0v4c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-4h-3v1z'
          ],
          'bring-data': [
            'M14 14a1 1 0 010 2H2a1 1 0 010-2h12zM7.995 3.005c.55 0 1 .45 1 .999v5.584l1.29-1.288a1.002 1.002 0 011.42 1.419l-3 2.996a1.015 1.015 0 01-1.42 0l-3-2.997A1.002 1.002 0 015.705 8.3l1.29 1.29V4.013c0-.55.45-1.009 1-1.009zM14 0a1 1 0 110 2 1 1 0 010-2zm-3 0a1 1 0 110 2 1 1 0 010-2zM8 0a1 1 0 110 2 1 1 0 010-2zM5 0a1 1 0 110 2 1 1 0 010-2zM2 0a1 1 0 110 2 1 1 0 010-2z'
          ],
          build: [
            'M15.39 12.41L7.7 6l1.07-1.1c.34-.34-.12-.63.12-1.26.88-2.17 3.41-2.35 3.41-2.35s.36-.37.71-.72C9.74-.81 7.53.53 6.54 1.4L3.12 4.9l-.71.72c-.39.4-.39 1.05 0 1.45l-.7.72c-.39-.4-1.02-.4-1.41 0s-.39 1.05 0 1.45l1.41 1.45c.39.4 1.02.4 1.41 0s.39-1.05 0-1.45l.71-.72c.39.4 1.02.4 1.41 0l.8-.82 6.39 7.67c.82.82 2.14.82 2.96 0 .81-.82.81-2.15 0-2.96z'
          ],
          calculator: [
            'M13 0H3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM6 14H4v-2h2v2zm0-3H4V9h2v2zm0-3H4V6h2v2zm3 6H7v-2h2v2zm0-3H7V9h2v2zm0-3H7V6h2v2zm3 6h-2V9h2v5zm0-6h-2V6h2v2zm0-3H4V2h8v3z'
          ],
          calendar: [
            'M11 3c.6 0 1-.5 1-1V1c0-.6-.4-1-1-1s-1 .4-1 1v1c0 .5.4 1 1 1zm3-2h-1v1c0 1.1-.9 2-2 2s-2-.9-2-2V1H6v1c0 1.1-.9 2-2 2s-2-.9-2-2V1H1c-.6 0-1 .5-1 1v12c0 .6.4 1 1 1h13c.6 0 1-.4 1-1V2c0-.6-.5-1-1-1zM5 13H2v-3h3v3zm0-4H2V6h3v3zm4 4H6v-3h3v3zm0-4H6V6h3v3zm4 4h-3v-3h3v3zm0-4h-3V6h3v3zM4 3c.6 0 1-.5 1-1V1c0-.6-.4-1-1-1S3 .4 3 1v1c0 .5.4 1 1 1z'
          ],
          camera: [
            'M15 3h-2.59L10.7 1.29A.956.956 0 0010 1H6c-.28 0-.53.11-.71.29L3.59 3H1c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h2.56c1.1 1.22 2.67 2 4.44 2s3.34-.78 4.44-2H15c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM3 6H1V5h2v1zm5 6c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
          ],
          'caret-down': [
            'M12 6.5c0-.28-.22-.5-.5-.5h-7a.495.495 0 00-.37.83l3.5 4c.09.1.22.17.37.17s.28-.07.37-.17l3.5-4c.08-.09.13-.2.13-.33z'
          ],
          'caret-left': [
            'M9.5 4c-.13 0-.24.05-.33.13l-4 3.5c-.1.09-.17.22-.17.37s.07.28.17.37l4 3.5a.495.495 0 00.83-.37v-7c0-.28-.22-.5-.5-.5z'
          ],
          'caret-right': [
            'M11 8c0-.15-.07-.28-.17-.37l-4-3.5A.495.495 0 006 4.5v7a.495.495 0 00.83.37l4-3.5c.1-.09.17-.22.17-.37z'
          ],
          'caret-up': [
            'M11.87 9.17s.01 0 0 0l-3.5-4C8.28 5.07 8.15 5 8 5s-.28.07-.37.17l-3.5 4a.495.495 0 00.37.83h7a.495.495 0 00.37-.83z'
          ],
          'cell-tower': [
            'M8.97 6.76c-.01-.05-.04-.08-.06-.13-.02-.05-.03-.1-.05-.15.08-.14.14-.3.14-.48 0-.55-.45-1-1-1s-1 .45-1 1c0 .18.06.34.14.48-.03.05-.03.1-.05.15-.02.05-.05.08-.06.13l-2 8c-.13.54.19 1.08.73 1.21a.995.995 0 001.21-.73L7.53 13h.94l.56 2.24a1 1 0 001.94-.48l-2-8zM3.72 1.7C4.1 1.3 4.09.67 3.7.28S2.67-.09 2.28.3c-3.05 3.12-3.05 8.28 0 11.4a.996.996 0 101.43-1.39c-2.28-2.35-2.28-6.27.01-8.61zM11.6 3.2c-.44-.33-1.07-.24-1.4.2-.33.44-.24 1.07.2 1.4.43.32.53 1.96-.04 2.43-.42.35-.48.98-.13 1.41.35.42.98.48 1.41.13 1.59-1.33 1.39-4.5-.04-5.57z',
            'M13.72.3c-.39-.4-1.02-.4-1.41-.02s-.41 1.02-.03 1.42c2.29 2.34 2.29 6.26 0 8.6-.39.39-.38 1.03.02 1.41s1.03.38 1.41-.02c3.05-3.11 3.05-8.27.01-11.39zM5.4 7.23c-.57-.47-.47-2.11-.04-2.43.44-.33.53-.96.2-1.4s-.96-.53-1.4-.2c-1.44 1.07-1.63 4.24-.04 5.57.42.35 1.05.3 1.41-.13.35-.42.29-1.06-.13-1.41z'
          ],
          changes: [
            'M8.29 7.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3a1.003 1.003 0 00-1.42-1.42L13 7.59V1c0-.55-.45-1-1-1s-1 .45-1 1v6.59l-1.29-1.3a1.003 1.003 0 00-1.42 1.42zM14.5 13h-13c-.83 0-1.5.67-1.5 1.5S.67 16 1.5 16h13c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5zM1 5c.28 0 .53-.11.71-.29L3 3.41V10c0 .55.45 1 1 1s1-.45 1-1V3.41L6.29 4.7c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-3-3C4.53.11 4.28 0 4 0s-.53.11-.71.29l-3 3A1.003 1.003 0 001 5z'
          ],
          chart: [
            'M0 15c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V9.4L0 11v4zm6-5.5V15c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-5l-1 1-3-1.5zM13 7l-1 1v7c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V7.88c-.26.07-.58.12-1 .12-1.96 0-2-1-2-1zm2-6h-3c-.55 0-1 .45-1 1s.45 1 1 1h.59L8.8 6.78 5.45 5.11v.01C5.31 5.05 5.16 5 5 5s-.31.05-.44.11V5.1l-4 2v.01C.23 7.28 0 7.61 0 8c0 .55.45 1 1 1 .16 0 .31-.05.44-.11v.01L5 7.12 8.55 8.9v-.01c.14.06.29.11.45.11.28 0 .53-.11.71-.29L14 4.41V5c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1z'
          ],
          chat: [
            'M6 10c-1.1 0-2-.9-2-2V3H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1v2a1.003 1.003 0 001.71.71L5.41 13H10c.55 0 1-.45 1-1v-1.17l-.83-.83H6zm9-10H6c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h4.59l2.71 2.71c.17.18.42.29.7.29.55 0 1-.45 1-1V9c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z'
          ],
          'chevron-backward': [
            'M7.41 8l3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L6 6.59V4c0-.55-.45-1-1-1s-1 .45-1 1v8c0 .55.45 1 1 1s1-.45 1-1V9.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L7.41 8z'
          ],
          'chevron-down': [
            'M12 5c-.28 0-.53.11-.71.29L8 8.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42l4 4c.18.18.43.29.71.29s.53-.11.71-.29l4-4A1.003 1.003 0 0012 5z'
          ],
          'chevron-forward': [
            'M10 3c-.55 0-1 .45-1 1v2.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42L7.59 8 4.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L9 9.41V12c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1z'
          ],
          'chevron-left': [
            'M7.41 8l3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-4 4C5.11 7.47 5 7.72 5 8c0 .28.11.53.29.71l4 4a1.003 1.003 0 001.42-1.42L7.41 8z'
          ],
          'chevron-right': [
            'M10.71 7.29l-4-4a1.003 1.003 0 00-1.42 1.42L8.59 8 5.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z'
          ],
          'chevron-up': [
            'M12.71 9.29l-4-4C8.53 5.11 8.28 5 8 5s-.53.11-.71.29l-4 4a1.003 1.003 0 001.42 1.42L8 7.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71z'
          ],
          circle: [
            'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z'
          ],
          'circle-arrow-down': [
            'M11 7c-.28 0-.53.11-.71.29L9 8.59V5c0-.55-.45-1-1-1s-1 .45-1 1v3.59l-1.29-1.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 0011 7zM8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z'
          ],
          'circle-arrow-left': [
            'M11 7H7.41L8.7 5.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-3 3C4.11 7.47 4 7.72 4 8c0 .28.11.53.29.71l3 3a1.003 1.003 0 001.42-1.42L7.41 9H11c.55 0 1-.45 1-1s-.45-1-1-1zM8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z'
          ],
          'circle-arrow-right': [
            'M8.71 4.29a1.003 1.003 0 00-1.42 1.42L8.59 7H5c-.55 0-1 .45-1 1s.45 1 1 1h3.59L7.3 10.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-3-3zM8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z'
          ],
          'circle-arrow-up': [
            'M8.71 4.29C8.53 4.11 8.28 4 8 4s-.53.11-.71.29l-3 3a1.003 1.003 0 001.42 1.42L7 7.41V11c0 .55.45 1 1 1s1-.45 1-1V7.41l1.29 1.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-3-3zM8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z'
          ],
          citation: [
            'M15.02 5c0-1.66-1.34-3-3-3s-3 1.34-3 3a2.996 2.996 0 003.6 2.94C12.1 9.76 11.14 11 10.02 11c-.55 0-1 .45-1 1s.45 1 1 1c2.76 0 5-3.13 5-7 0-.2-.02-.39-.04-.58.01-.14.04-.28.04-.42zm-11-3c-1.66 0-3 1.34-3 3a2.996 2.996 0 003.6 2.94C4.1 9.76 3.14 11 2.02 11c-.55 0-1 .45-1 1s.45 1 1 1c2.76 0 5-3.13 5-7 0-.2-.02-.39-.04-.58.01-.14.04-.28.04-.42 0-1.66-1.35-3-3-3z'
          ],
          clean: [
            'M12 8l-1.2 2.796-2.8 1.2 2.8 1.197L12 16l1.2-2.807L16 12l-2.8-1.204zM5 0L3.5 3.5 0 4.995 3.5 6.5 5 10l1.5-3.5L10 5 6.5 3.5z'
          ],
          clipboard: [
            'M11 2c0-.55-.45-1-1-1h.22C9.88.4 9.24 0 8.5 0S7.12.4 6.78 1H7c-.55 0-1 .45-1 1v1h5V2zm2 0h-1v2H5V2H4c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1z'
          ],
          cloud: [
            'M12 6c-.03 0-.07 0-.1.01A5 5 0 002 7c0 .11.01.22.02.33A3.51 3.51 0 000 10.5C0 12.43 1.57 14 3.5 14H12c2.21 0 4-1.79 4-4s-1.79-4-4-4z'
          ],
          'cloud-download': [
            'M11 11c-.28 0-.53.11-.71.29L9 12.59V8c0-.55-.45-1-1-1s-1 .45-1 1v4.59L5.71 11.3A.965.965 0 005 11a1.003 1.003 0 00-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 0011 11zm1-7c-.03 0-.07 0-.1.01A5 5 0 002 5c0 .11.01.22.02.33A3.51 3.51 0 000 8.5c0 1.41.84 2.61 2.03 3.17C2.2 10.17 3.46 9 5 9c.06 0 .13.02.19.02C5.07 8.7 5 8.36 5 8c0-1.66 1.34-3 3-3s3 1.34 3 3c0 .36-.07.7-.19 1.02.06 0 .13-.02.19-.02 1.48 0 2.7 1.07 2.95 2.47A3.964 3.964 0 0016 8c0-2.21-1.79-4-4-4z'
          ],
          'cloud-upload': [
            'M8.71 7.29C8.53 7.11 8.28 7 8 7s-.53.11-.71.29l-3 3a1.003 1.003 0 001.42 1.42L7 10.41V15c0 .55.45 1 1 1s1-.45 1-1v-4.59l1.29 1.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-3-3zM12 4c-.03 0-.07 0-.1.01A5 5 0 002 5c0 .11.01.22.02.33a3.495 3.495 0 00.07 6.37c-.05-.23-.09-.46-.09-.7 0-.83.34-1.58.88-2.12l3-3a2.993 2.993 0 014.24 0l3 3c.54.54.88 1.29.88 2.12 0 .16-.02.32-.05.47C15.17 10.78 16 9.5 16 8c0-2.21-1.79-4-4-4z'
          ],
          code: [
            'M15.71 7.29l-3-3a1.003 1.003 0 00-1.42 1.42L13.59 8l-2.29 2.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71zM5 5a1.003 1.003 0 00-1.71-.71l-3 3C.11 7.47 0 7.72 0 8c0 .28.11.53.29.71l3 3a1.003 1.003 0 001.42-1.42L2.41 8 4.7 5.71c.19-.18.3-.43.3-.71zm4-3c-.48 0-.87.35-.96.81l-2 10c-.01.06-.04.12-.04.19 0 .55.45 1 1 1 .48 0 .87-.35.96-.81l2-10c.01-.06.04-.12.04-.19 0-.55-.45-1-1-1z'
          ],
          'code-block': [
            'M15 3h-2V2c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1H7V2c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-8.29 8.29a1.003 1.003 0 01-1.42 1.42l-3-3C2.11 9.53 2 9.28 2 9s.11-.53.29-.71l3-3a1.003 1.003 0 011.42 1.42L4.41 9l2.3 2.29zm7-1.58l-3 3a1.003 1.003 0 01-1.42-1.42L11.59 9l-2.3-2.29a1.003 1.003 0 011.42-1.42l3 3c.18.18.29.43.29.71s-.11.53-.29.71z'
          ],
          cog: [
            'M15.19 6.39h-1.85c-.11-.37-.27-.71-.45-1.04l1.36-1.36c.31-.31.31-.82 0-1.13l-1.13-1.13a.803.803 0 00-1.13 0l-1.36 1.36c-.33-.17-.67-.33-1.04-.44V.79c0-.44-.36-.8-.8-.8h-1.6c-.44 0-.8.36-.8.8v1.86c-.39.12-.75.28-1.1.47l-1.3-1.3c-.3-.3-.79-.3-1.09 0L1.82 2.91c-.3.3-.3.79 0 1.09l1.3 1.3c-.2.34-.36.7-.48 1.09H.79c-.44 0-.8.36-.8.8v1.6c0 .44.36.8.8.8h1.85c.11.37.27.71.45 1.04l-1.36 1.36c-.31.31-.31.82 0 1.13l1.13 1.13c.31.31.82.31 1.13 0l1.36-1.36c.33.18.67.33 1.04.44v1.86c0 .44.36.8.8.8h1.6c.44 0 .8-.36.8-.8v-1.86c.39-.12.75-.28 1.1-.47l1.3 1.3c.3.3.79.3 1.09 0l1.09-1.09c.3-.3.3-.79 0-1.09l-1.3-1.3c.19-.35.36-.71.48-1.1h1.85c.44 0 .8-.36.8-.8v-1.6a.816.816 0 00-.81-.79zm-7.2 4.6c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z'
          ],
          'collapse-all': [
            'M7.29 6.71c.18.18.43.29.71.29s.53-.11.71-.29l4-4a1.003 1.003 0 00-1.42-1.42L8 4.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42l4 4zm1.42 2.58C8.53 9.11 8.28 9 8 9s-.53.11-.71.29l-4 4a1.003 1.003 0 001.42 1.42L8 11.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-4-4z'
          ],
          'column-layout': [
            'M15 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM4 13H2V3h2v10zm3 0H5V3h2v10zm7 0H8V3h6v10z'
          ],
          comment: [
            'M14 1H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h2v3a1.003 1.003 0 001.71.71L8.41 12H14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM3.5 8C2.67 8 2 7.33 2 6.5S2.67 5 3.5 5 5 5.67 5 6.5 4.33 8 3.5 8zm4 0C6.67 8 6 7.33 6 6.5S6.67 5 7.5 5 9 5.67 9 6.5 8.33 8 7.5 8zm4 0c-.83 0-1.5-.67-1.5-1.5S10.67 5 11.5 5s1.5.67 1.5 1.5S12.33 8 11.5 8z'
          ],
          comparison: [
            'M7.99-.01c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1s1-.45 1-1v-14c0-.55-.45-1-1-1zm-3 3h-4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1zm10 0h-4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1zm0 3h-4v-2h4v2zm0 3h-4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1zm0 3h-4v-2h4v2zm-10-3h-4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1z'
          ],
          compass: [
            'M12 8c0 .14-.03.27-.08.39l-3 6.99c-.15.37-.51.62-.92.62s-.77-.25-.92-.61l-3-6.99a1.006 1.006 0 010-.79l3-6.99C7.23.25 7.59 0 8 0s.77.25.92.61l3 6.99c.05.13.08.26.08.4zM8 3.54L6.09 8h3.82L8 3.54z'
          ],
          compressed: [
            'M15.93 5.63v-.02L13.94.63C13.78.26 13.42 0 13 0H3c-.42 0-.78.26-.93.63L.08 5.61l-.01.02C.03 5.74 0 5.87 0 6v9c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V6c0-.13-.03-.26-.07-.37zM9 2h3.32l1.2 3H9V2zM3.68 2H7v3H2.48l1.2-3zM14 14H2V7h5v2.59l-1.29-1.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3a1.003 1.003 0 00-1.42-1.42L9 9.59V7h5v7z'
          ],
          confirm: [
            'M8.7 4.29a.965.965 0 00-.71-.3 1.003 1.003 0 00-.71 1.71l2 2c.18.18.43.29.71.29s.53-.11.71-.29l5-5a1.003 1.003 0 00-1.42-1.42l-4.29 4.3L8.7 4.29zm5.22 3.01c.03.23.07.45.07.69 0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6c.81 0 1.59.17 2.3.46l1.5-1.5A7.998 7.998 0 00-.01 7.99c0 4.42 3.58 8 8 8s8-3.58 8-8c0-.83-.13-1.64-.36-2.39l-1.71 1.7z'
          ],
          console: [
            'M15 15H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1zM14 5H2v8h12V5zM4 6c.28 0 .53.11.71.29l2 2c.18.18.29.43.29.71s-.11.53-.29.71l-2 2a1.003 1.003 0 01-1.42-1.42L4.59 9l-1.3-1.29A1.003 1.003 0 014 6zm5 4h3c.55 0 1 .45 1 1s-.45 1-1 1H9c-.55 0-1-.45-1-1s.45-1 1-1z'
          ],
          contrast: [
            'M15.2 6.4h-1.44c-.13-.47-.32-.92-.56-1.34L14.26 4c.31-.31.31-.82 0-1.13l-1.13-1.13a.803.803 0 00-1.13 0L10.94 2.8c-.42-.24-.86-.42-1.34-.56V.8c0-.44-.36-.8-.8-.8H7.2c-.44 0-.8.36-.8.8v1.44c-.5.14-.96.34-1.4.59l-1-1c-.3-.3-.79-.3-1.09 0L1.83 2.91c-.3.3-.3.79 0 1.09l1 1c-.25.44-.45.9-.59 1.4H.8c-.44 0-.8.36-.8.8v1.6c0 .44.36.8.8.8h1.44c.13.47.32.92.56 1.34L1.74 12c-.31.31-.31.82 0 1.13l1.13 1.13c.31.31.82.31 1.13 0l1.06-1.06c.42.24.86.42 1.34.56v1.44c0 .44.36.8.8.8h1.6c.44 0 .8-.36.8-.8v-1.44c.5-.14.96-.33 1.4-.59l1 1c.3.3.79.3 1.09 0l1.09-1.09c.3-.3.3-.79 0-1.09l-1-1c.25-.43.45-.9.59-1.4h1.44c.44 0 .8-.36.8-.8V7.2a.818.818 0 00-.81-.8zM8 12c-2.21 0-4-1.79-4-4s1.79-4 4-4v8z'
          ],
          control: [
            'M13 8H8v5h5V8zm0-5H8v4h5V3zm2-3H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 14H2V2h12v12zM7 3H3v10h4V3z'
          ],
          'credit-card': [
            'M14.99 2.95h-14c-.55 0-1 .45-1 1v1h16v-1c0-.55-.45-1-1-1zm-15 10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-6h-16v6zm5.5-2h5c.28 0 .5.22.5.5s-.22.5-.5.5h-5c-.28 0-.5-.22-.5-.5s.23-.5.5-.5zm-3 0h1c.28 0 .5.22.5.5s-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5s.23-.5.5-.5z'
          ],
          cross: [
            'M9.41 8l3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L8 6.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42L6.59 8 3.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L8 9.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L9.41 8z'
          ],
          crown: [
            'M2 6l3 2 3-4 3 4 3-2-1 6H3L2 6zm6-5a1 1 0 110 2 1 1 0 010-2zM1 3a1 1 0 110 2 1 1 0 010-2zm14 0a1 1 0 110 2 1 1 0 010-2zM3 13h10v2H3v-2z'
          ],
          cube: [
            'M14.194 3.54L8 7.41 1.806 3.54 7.504.283a1 1 0 01.992 0l5.698 3.255zm.75.71a1 1 0 01.056.33v6.84a1 1 0 01-.504.868L8.5 15.714V8.277l6.444-4.027zm-13.888 0L7.5 8.277v7.437l-5.996-3.426A1 1 0 011 11.42V4.58a1 1 0 01.056-.33z'
          ],
          'cube-add': [
            'M14 2h1a1 1 0 010 2h-1v1a1 1 0 01-2 0V4h-1a1 1 0 010-2h1V1a1 1 0 012 0v1zM9.136.65a3.001 3.001 0 00.992 5.222c.018.058.038.115.059.172L8 7.41 1.806 3.54 7.504.283a1 1 0 01.992 0l.64.365zM15 7.235v4.184a1 1 0 01-.504.868L8.5 15.714V8.277l2.187-1.367A2.994 2.994 0 0013 8c.768 0 1.47-.289 2-.764zM1.056 4.25L7.5 8.277v7.437l-5.996-3.426A1 1 0 011 11.42V4.58a1 1 0 01.056-.33z'
          ],
          'cube-remove': [
            'M10.365 5.933L8 7.41 1.806 3.54 7.504.283a1 1 0 01.992 0l.64.365a3.001 3.001 0 001.228 5.283zM15 6v5.42a1 1 0 01-.504.868L8.5 15.714V8.277L12.143 6H15zM1.056 4.25L7.5 8.277v7.437l-5.996-3.426A1 1 0 011 11.42V4.58a1 1 0 01.056-.33zM11 2h4a1 1 0 010 2h-4a1 1 0 010-2z'
          ],
          'curved-range-chart': [
            'M15 12H3.12l1.81-1.39c1.73 1.01 5.53-.03 9.08-2.61l-1.22-1.5C10.3 8.3 7.86 9.37 6.65 9.29L14.3 3.4l-.6-.8-7.83 6.03c-.01-1.07 1.8-3.19 4.47-5.13L9.12 2C5.38 4.7 3.34 8.1 4.25 9.87L2 11.6V3c0-.55-.45-1-1-1s-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          cut: [
            'M13 2s.71-1.29 0-2L8.66 5.07l1.05 1.32L13 2zm.07 8c-.42 0-.82.09-1.18.26L3.31 0c-.69.71 0 2 0 2l3.68 5.02-2.77 3.24A2.996 2.996 0 000 13c0 1.66 1.34 3 3 3s3-1.34 3-3c0-.46-.11-.89-.29-1.27L8.1 8.54l2.33 3.19c-.18.39-.29.82-.29 1.27 0 1.66 1.31 3 2.93 3S16 14.66 16 13s-1.31-3-2.93-3zM3 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm10.07 0c-.54 0-.98-.45-.98-1s.44-1 .98-1 .98.45.98 1-.44 1-.98 1z'
          ],
          cycle: [
            'M13 9a3 3 0 110 6 3 3 0 010-6zM3 9a3 3 0 110 6 3 3 0 010-6zm6.169-5.27l.087.09 1.51 1.746 1.589.549a1 1 0 01.65 1.16l-.032.112a1 1 0 01-1.159.65l-.112-.032-1.843-.636a1 1 0 01-.337-.198l-.092-.093-.959-1.109L7.041 7.5l1.691 1.819a1 1 0 01.26.556L9 10v3a1 1 0 01-1.993.117L7 13l-.001-2.608-2.056-2.211a1 1 0 01-.081-1.264l.082-.1 2.825-3.026a1 1 0 011.4-.061zM13 10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-10 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM11 1a1.5 1.5 0 110 3 1.5 1.5 0 010-3z'
          ],
          dashboard: [
            'M5 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM4 7c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4-2c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-2 6c0 1.1.9 2 2 2s2-.9 2-2c0-.53-2-5-2-5s-2 4.47-2 5zM8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm4-9c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm0 2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z'
          ],
          'data-connection': [
            'M1 9.52c.889.641 2.308 1.133 4.003 1.354L5 11a5.994 5.994 0 002.664 4.988c-.217.008-.44.012-.664.012-3.215 0-5.846-.85-5.993-1.906L1 14V9.52zM11 6c2.762 0 5 2.238 5 5s-2.238 5-5 5-5-2.238-5-5 2.238-5 5-5zm1 1l-4 5h2.5l-.5 3 4-5h-2.5l.5-3zm1-3.48v1.822a6.002 6.002 0 00-7.9 4.556l-.248-.03c-2.168-.28-3.733-.966-3.845-1.774L1 8V3.52C2.22 4.4 4.44 5 7 5s4.78-.6 6-1.48zM7 0c3.31 0 6 .9 6 2s-2.69 2-6 2c-3.32 0-6-.9-6-2s2.68-2 6-2z'
          ],
          'data-lineage': [
            'M1.067 0C.477 0 0 .478 0 1.067V3.2c0 .59.478 1.067 1.067 1.067h2.24a5.342 5.342 0 002.9 3.734 5.337 5.337 0 00-2.9 3.733h-2.24C.477 11.733 0 12.21 0 12.8v2.133C0 15.523.478 16 1.067 16H6.4c.59 0 1.067-.478 1.067-1.067V12.8c0-.59-.478-1.067-1.067-1.067H4.401a4.27 4.27 0 013.92-3.194l.212-.006V9.6c0 .59.478 1.067 1.067 1.067h5.333c.59 0 1.067-.478 1.067-1.067V6.4c0-.59-.478-1.067-1.067-1.067H9.6c-.59 0-1.067.478-1.067 1.067v1.067a4.268 4.268 0 01-4.132-3.2H6.4c.59 0 1.067-.478 1.067-1.067V1.067C7.467.477 6.989 0 6.4 0H1.067z'
          ],
          database: [
            'M8 4c3.31 0 6-.9 6-2s-2.69-2-6-2C4.68 0 2 .9 2 2s2.68 2 6 2zm-6-.48V8c0 1.1 2.69 2 6 2s6-.9 6-2V3.52C12.78 4.4 10.56 5 8 5s-4.78-.6-6-1.48zm0 6V14c0 1.1 2.69 2 6 2s6-.9 6-2V9.52C12.78 10.4 10.56 11 8 11s-4.78-.6-6-1.48z'
          ],
          delete: [
            'M11.99 4.99a1.003 1.003 0 00-1.71-.71l-2.29 2.3L5.7 4.29a.965.965 0 00-.71-.3 1.003 1.003 0 00-.71 1.71l2.29 2.29-2.29 2.29A1.003 1.003 0 005.7 11.7l2.29-2.29 2.29 2.29a1.003 1.003 0 001.42-1.42L9.41 7.99 11.7 5.7c.18-.18.29-.43.29-.71zm-4-5c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.68 6-6 6z'
          ],
          delta: ['M8 0L0 16h16L8 0zM7 5l5 10H2L7 5z'],
          'derive-column': [
            'M6.08 6.67h-.84c.24-.92.56-1.6.96-2.03.24-.27.48-.4.71-.4.05 0 .08.01.11.04s.04.06.04.1c0 .04-.03.11-.1.21-.06.1-.1.2-.1.29 0 .13.05.24.15.33.1.09.23.14.39.14.17 0 .31-.06.42-.17A.58.58 0 008 4.73c0-.22-.09-.39-.26-.53-.17-.13-.44-.2-.81-.2-.59 0-1.12.16-1.59.48-.48.32-.93.85-1.36 1.59-.15.26-.29.42-.42.49s-.35.11-.64.1l-.19.65h.81l-1.19 4.37c-.2.72-.33 1.16-.4 1.33-.1.24-.26.45-.46.62-.08.07-.18.1-.3.1-.03 0-.06-.01-.08-.03l-.03-.04c0-.02.03-.06.09-.11.06-.06.09-.14.09-.26 0-.13-.05-.23-.14-.32a.6.6 0 00-.4-.13c-.21 0-.38.05-.51.16s-.21.25-.21.4c0 .16.08.3.23.42.16.12.4.18.74.18.53 0 .99-.13 1.4-.39.41-.26.76-.65 1.07-1.19.3-.54.62-1.4.94-2.59l.68-2.53h.82l.2-.63zM15 0H8c-.55 0-1 .45-1 1v2h2V2h5v12H9v-1H7v2c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM8.3 9.94c.18.52.33.89.46 1.13.13.24.28.4.44.51.17.1.37.16.62.16.24 0 .49-.08.74-.25.33-.21.66-.58 1.01-1.09l-.21-.11c-.23.31-.41.5-.52.57a.44.44 0 01-.26.07c-.12 0-.24-.07-.36-.21-.2-.24-.46-.91-.8-2 .3-.49.55-.81.75-.96.15-.11.3-.16.47-.16.06 0 .17.02.34.06.16.04.31.06.43.06.17 0 .31-.06.43-.17.1-.11.16-.25.16-.43 0-.19-.06-.33-.17-.44-.12-.11-.28-.16-.49-.16-.19 0-.37.04-.54.13-.17.09-.39.27-.65.56-.2.21-.48.58-.87 1.11-.15-.66-.41-1.26-.78-1.81l-2.05.33-.04.21c.15-.03.28-.04.39-.04.2 0 .37.08.5.25.21.26.5 1.03.88 2.33-.29.37-.49.61-.6.72-.18.18-.33.3-.44.36-.09.04-.19.07-.3.07-.09 0-.23-.04-.42-.13a.866.866 0 00-.36-.09c-.2 0-.36.06-.49.18a.59.59 0 00-.19.46c0 .17.06.32.18.43.12.11.28.16.48.16.2 0 .38-.04.55-.11.17-.08.39-.24.65-.49.24-.27.6-.66 1.06-1.21z'
          ],
          desktop: [
            'M15 0H1C.45 0 0 .45 0 1v10c0 .55.45 1 1 1h4.75l-.5 2H4c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1h-1.25l-.5-2H15c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 10H2V2h12v8z'
          ],
          diagnosis: [
            'M3.2 1a1 1 0 01.117 1.993L3.2 3H3v3a2 2 0 001.85 1.995L5 8a2 2 0 001.995-1.85L7 6V3h-.2a1 1 0 01-.993-.883L5.8 2a1 1 0 01.883-.993L6.8 1H8a1 1 0 01.993.883L9 2v4a4.002 4.002 0 01-3.007 3.876v.007L6 10a3 3 0 005.995.176L12 10V7.792a2.5 2.5 0 112 0V10a5 5 0 01-10 0c0-.042.003-.084.008-.125A4 4 0 011.005 6.2L1 6V2a1 1 0 01.883-.993L2 1h1.2z'
          ],
          'diagram-tree': [
            'M15 8v3h-2V9H9v2H7V9H3v2H1V8a1 1 0 011-1h5V5h2v2h5a1 1 0 011 1zM1 12h2a1 1 0 011 1v2a1 1 0 01-1 1H1a1 1 0 01-1-1v-2a1 1 0 011-1zm12 0h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a1 1 0 011-1zm-6 0h2a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1v-2a1 1 0 011-1zM7 0h2a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1V1a1 1 0 011-1z'
          ],
          'direction-left': ['M16 1.99l-16 6 16 6-4-6z'],
          'direction-right': ['M16 7.99l-16-6 4 6-4 6z'],
          disable: [
            'M7.99-.01c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm-6 8c0-3.31 2.69-6 6-6 1.3 0 2.49.42 3.47 1.12l-8.35 8.35c-.7-.98-1.12-2.17-1.12-3.47zm6 6c-1.3 0-2.49-.42-3.47-1.12l8.35-8.35c.7.98 1.12 2.17 1.12 3.47 0 3.32-2.68 6-6 6z'
          ],
          document: [
            'M9 0H3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V5L9 0zm3 14H4V2h4v4h4v8z'
          ],
          'document-open': [
            'M6 12c0 .55.45 1 1 1s1-.45 1-1V8c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1h1.59L1.3 12.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L6 10.41V12zm4-12H4c-.55 0-1 .45-1 1v4h2V2h4v4h4v8H5.24l-1.8 1.8c.16.12.35.2.56.2h10c.55 0 1-.45 1-1V5l-5-5z'
          ],
          'document-share': [
            'M10 14H2V2h4v4h1c0-.83.36-1.55.91-2.09l-.03-.03.9-.9C8.3 2.45 8 1.77 8 1L7 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V8.22c-.53.48-1.23.78-2 .78v5zm5-14h-4c-.55 0-1 .45-1 1s.45 1 1 1h1.59l-3.3 3.29a1.003 1.003 0 001.42 1.42L14 3.41V5c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1z'
          ],
          dollar: [
            'M12.83 9.51c-.1-.3-.25-.58-.45-.84s-.45-.49-.75-.7c-.3-.2-.65-.36-1.05-.48-.16-.04-.43-.11-.8-.2-.35-.09-.73-.18-1.12-.28-.39-.1-.74-.19-1.06-.27-.31-.08-.49-.12-.54-.13-.43-.12-.78-.29-1.05-.52-.27-.23-.4-.55-.4-.95 0-.29.07-.53.21-.72.14-.19.32-.34.54-.46.22-.11.46-.19.72-.24.26-.05.52-.08.77-.08.74 0 1.35.15 1.83.46.48.3.75.83.81 1.56h2.14c0-.6-.13-1.13-.38-1.58-.25-.45-.59-.84-1.02-1.15-.43-.31-.93-.54-1.49-.7-.24-.06-.49-.1-.75-.14V1c0-.55-.45-1-1-1s-1 .45-1 1v1.08c-.23.03-.46.07-.68.13-.54.13-1.02.34-1.44.61-.42.28-.76.63-1.02 1.05-.26.43-.39.93-.39 1.5 0 .3.04.59.13.88.09.29.23.56.44.82.21.26.48.49.83.7.35.21.79.38 1.31.51.85.21 1.56.38 2.14.52.58.13 1.08.28 1.52.42.25.09.48.23.69.44.21.21.32.53.32.97 0 .21-.05.42-.14.63-.09.21-.24.39-.45.55-.21.16-.47.29-.81.39-.33.1-.73.15-1.2.15-.43 0-.84-.05-1.21-.14-.37-.09-.7-.24-.99-.43-.29-.2-.51-.45-.67-.76-.16-.31-.24-.68-.24-1.12H3c.01.71.15 1.32.43 1.84.27.52.64.94 1.1 1.27.46.33.99.58 1.61.74.27.07.56.12.85.16V15c0 .55.45 1 1 1s1-.45 1-1v-1.05c.3-.03.61-.08.9-.15.58-.13 1.1-.34 1.56-.63.46-.29.83-.66 1.11-1.11.28-.45.42-1 .42-1.64 0-.31-.05-.61-.15-.91z'
          ],
          dot: ['M8 5a3 3 0 100 6 3 3 0 100-6z'],
          'double-caret-horizontal': [
            'M13.71 7.29l-3-3A1.003 1.003 0 009 5v6a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71zM6 4c-.28 0-.53.11-.71.29l-3 3C2.11 7.47 2 7.72 2 8c0 .28.11.53.29.71l3 3A1.003 1.003 0 007 11V5c0-.55-.45-1-1-1z'
          ],
          'double-caret-vertical': [
            'M5 7h6a1.003 1.003 0 00.71-1.71l-3-3C8.53 2.11 8.28 2 8 2s-.53.11-.71.29l-3 3A1.003 1.003 0 005 7zm6 2H5a1.003 1.003 0 00-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 0011 9z'
          ],
          'double-chevron-down': [
            'M7.29 8.71c.18.18.43.29.71.29s.53-.11.71-.29l4-4a1.003 1.003 0 00-1.42-1.42L8 6.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42l4 4zM12 8c-.28 0-.53.11-.71.29L8 11.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42l4 4c.18.18.43.29.71.29s.53-.11.71-.29l4-4A1.003 1.003 0 0012 8z'
          ],
          'double-chevron-left': [
            'M4.41 8L7.7 4.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-4 4C2.11 7.47 2 7.72 2 8c0 .28.11.53.29.71l4 4a1.003 1.003 0 001.42-1.42L4.41 8zm5 0l3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-4 4C7.11 7.47 7 7.72 7 8c0 .28.11.53.29.71l4 4a1.003 1.003 0 001.42-1.42L9.41 8z'
          ],
          'double-chevron-right': [
            'M9 8c0-.28-.11-.53-.29-.71l-4-4a1.003 1.003 0 00-1.42 1.42L6.59 8 3.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l4-4C8.89 8.53 9 8.28 9 8zm4.71-.71l-4-4a1.003 1.003 0 00-1.42 1.42L11.59 8 8.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z'
          ],
          'double-chevron-up': [
            'M4 8c.28 0 .53-.11.71-.29L8 4.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-4-4C8.53 2.11 8.28 2 8 2s-.53.11-.71.29l-4 4A1.003 1.003 0 004 8zm4.71-.71C8.53 7.11 8.28 7 8 7s-.53.11-.71.29l-4 4a1.003 1.003 0 001.42 1.42L8 9.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-4-4z'
          ],
          'doughnut-chart': [
            'M11.86 7h4.05C15.45 3.39 12.61.52 9 .07v4.07A4 4 0 0111.86 7zM12 8c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4V0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8h-4z'
          ],
          download: [
            'M7.99-.01c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zM11.7 9.7l-3 3c-.18.18-.43.29-.71.29s-.53-.11-.71-.29l-3-3A1.003 1.003 0 015.7 8.28l1.29 1.29V3.99c0-.55.45-1 1-1s1 .45 1 1v5.59l1.29-1.29a1.003 1.003 0 011.71.71c0 .27-.11.52-.29.7z'
          ],
          'drag-handle-horizontal': [
            'M2 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm8-2c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-4-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM6 5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z'
          ],
          'drag-handle-vertical': [
            'M6 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4-6c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zM6 13c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4 8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z'
          ],
          draw: [
            'M14.9 11c-.3 0-.5.1-.7.3l-3 3c-.2.2-.3.4-.3.7 0 .6.5 1 1 1 .3 0 .5-.1.7-.3l3-3c.2-.2.3-.4.3-.7 0-.5-.4-1-1-1zm-1-1v-.2l-1-5c-.1-.3-.3-.6-.6-.7l-11-4-.3.3 5.8 5.8c.2-.1.4-.2.6-.2.8 0 1.5.7 1.5 1.5S8.3 9 7.4 9s-1.5-.7-1.5-1.5c0-.2.1-.4.2-.6L.3 1.1l-.3.3 4 11c.1.3.4.6.7.6l5 1h.2c.3 0 .5-.1.7-.3l3-3c.2-.2.3-.4.3-.7z'
          ],
          'drawer-left': [
            'M7 0a1 1 0 011 1v14a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h6zM6 2H2v12h4V2zm2 5h4.59L11.3 5.71A.965.965 0 0111 5a1.003 1.003 0 011.71-.71l3 3c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-3 3a1.003 1.003 0 01-1.42-1.42L12.59 9H8V7z'
          ],
          'drawer-left-filled': [
            'M1 0h6a1 1 0 011 1v14a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1zm7 7h4.59L11.3 5.71A.965.965 0 0111 5a1.003 1.003 0 011.71-.71l3 3c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-3 3a1.003 1.003 0 01-1.42-1.42L12.59 9H8V7z'
          ],
          'drawer-right': [
            'M15 0a1 1 0 011 1v14a1 1 0 01-1 1H9a1 1 0 01-1-1V1a1 1 0 011-1h6zm-1 2h-4v12h4V2zM8 7H3.41L4.7 5.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-3 3C.11 7.47 0 7.72 0 8c0 .28.11.53.29.71l3 3a1.003 1.003 0 001.42-1.42L3.41 9H8V7z'
          ],
          'drawer-right-filled': [
            'M9 0h6a1 1 0 011 1v14a1 1 0 01-1 1H9a1 1 0 01-1-1V1a1 1 0 011-1zM8 7H3.41L4.7 5.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-3 3C.11 7.47 0 7.72 0 8c0 .28.11.53.29.71l3 3a1.003 1.003 0 001.42-1.42L3.41 9H8V7z'
          ],
          'drive-time': [
            'M15.12 4.76h-1.05l-.76-2.12c-.19-.53-.76-1.08-1.27-1.24 0 0-1.32-.4-4.04-.4-2.72 0-4.04.4-4.04.4-.5.16-1.07.71-1.26 1.24l-.77 2.12H.88c-.48 0-.88.42-.88.94s.4.94.88.94h.38L1 7c-.03.69 0 1.44 0 2v5c0 .66.38 1 1 1s1-.34 1-1v-1h10v1c0 .66.38 1 1 1s1-.34 1-1V9c0-.56-.01-1.37 0-2l-.26-.37h.38c.48 0 .88-.42.88-.93 0-.52-.4-.94-.88-.94zM5 10H3V8h2v2zm8 0h-2V8h2v2zm0-4H3c-.18 0-.06-.82 0-1l.73-1.63C3.79 3.19 3.82 3 4 3h8c.18 0 .21.19.27.37L13 5c.06.18.18 1 0 1z'
          ],
          duplicate: [
            'M15 0H5c-.55 0-1 .45-1 1v2h2V2h8v7h-1v2h2c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-4 4H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-1 10H2V6h8v8z'
          ],
          edit: [
            'M3.25 10.26l2.47 2.47 6.69-6.69-2.46-2.48-6.7 6.7zM.99 14.99l3.86-1.39-2.46-2.44-1.4 3.83zm12.25-14c-.48 0-.92.2-1.24.51l-1.44 1.44 2.47 2.47 1.44-1.44c.32-.32.51-.75.51-1.24.01-.95-.77-1.74-1.74-1.74z'
          ],
          eject: [
            'M4 9h8a1.003 1.003 0 00.71-1.71l-4-4C8.53 3.11 8.28 3 8 3s-.53.11-.71.29l-4 4A1.003 1.003 0 004 9zm8 1H4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1z'
          ],
          endorsed: [
            'M15.86 7.5l-.81-1.42V4.5c0-.36-.19-.68-.49-.87l-1.37-.8-.81-1.41c-.19-.31-.51-.49-.86-.49H9.89L8.5.14a.948.948 0 00-1 0l-1.39.8H4.52a1 1 0 00-.86.49l-.8 1.37-1.44.83c-.3.19-.49.51-.49.87v1.65l-.8 1.37c-.08.15-.13.32-.13.49s.05.34.14.49l.8 1.37v1.65c0 .36.19.68.49.87l1.42.81.8 1.37c.19.31.51.49.86.49H6.1l1.39.8c.15.09.32.14.48.14s.34-.05.49-.14l1.39-.8h1.63a1 1 0 00.86-.49l.81-1.41 1.37-.8c.3-.19.49-.51.49-.87V9.93l.81-1.42a.89.89 0 00.04-1.01zm-4.12-.82l-4.01 4.01c-.18.18-.43.29-.71.29s-.53-.11-.71-.29l-2-2c-.18-.19-.3-.44-.3-.71a1.003 1.003 0 011.71-.71l1.3 1.3 3.3-3.3a1.003 1.003 0 011.71.71.95.95 0 01-.29.7z'
          ],
          envelope: [
            'M0 3.06v9.88L4.94 8 0 3.06zM14.94 2H1.06L8 8.94 14.94 2zm-6.41 8.53c-.14.14-.32.22-.53.22s-.39-.08-.53-.22L6 9.06 1.06 14h13.88L10 9.06l-1.47 1.47zM11.06 8L16 12.94V3.06L11.06 8z'
          ],
          equals: [
            'M3 5h10a1 1 0 010 2H3a1 1 0 110-2zm0 4h10a1 1 0 010 2H3a1 1 0 010-2z'
          ],
          eraser: [
            'M8.06 13.91l7.63-7.44c.41-.4.41-1.05 0-1.45L10.86.3c-.41-.4-1.08-.4-1.49 0L.31 9.13c-.41.4-.41 1.05 0 1.45l5.58 5.44h8.12v-.01c.55 0 1-.45 1-1s-.45-1-1-1H7.96l.1-.1zm-2.17.06L1.67 9.85l4.22-4.11 4.22 4.11-4.22 4.12z'
          ],
          error: [
            'M7.99-.01c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm1 13h-2v-2h2v2zm0-3h-2v-7h2v7z'
          ],
          euro: [
            'M6.52 3.18c.51-.27 1.12-.4 1.83-.4.48 0 .91.06 1.27.18.37.12.68.29.96.51.18.14.3.33.44.51l1.53-1.53c-.12-.11-.23-.22-.36-.32a5.61 5.61 0 00-1.74-.83c-.66-.2-1.36-.3-2.1-.3-.99 0-1.88.18-2.66.53-.79.35-1.45.82-2 1.41-.55.58-.96 1.27-1.26 2.06H2c-.55 0-1 .45-1 1s.45 1 1 1h.04c-.01.17-.04.33-.04.5 0 .17.03.33.04.5H2c-.55 0-1 .45-1 1s.45 1 1 1h.43c0 .01 0 .02.01.02a6.2 6.2 0 001.25 2.07 5.77 5.77 0 002 1.4c.78.34 1.67.51 2.66.51.81 0 1.54-.12 2.21-.36.67-.24 1.25-.59 1.75-1.03l.03-.03-1.55-1.33c-.01.01-.02.03-.03.04-.29.3-.63.53-1.02.69-.4.17-.85.25-1.37.25-.71 0-1.32-.13-1.83-.4s-.93-.62-1.25-1.07c-.19-.24-.34-.49-.46-.76H9c.55 0 1-.45 1-1s-.45-1-1-1H4.35c-.01-.17-.03-.33-.03-.5 0-.17.02-.34.03-.5H10c.55 0 1-.45 1-1s-.45-1-1-1H4.83c.13-.27.27-.52.44-.76.32-.44.74-.8 1.25-1.06zM14 8.98v0z'
          ],
          exchange: [
            'M1.99 5.99c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.89-2-2-2zm4.15 1.86a.495.495 0 10.7-.7L5.7 5.99h5.79c.28 0 .5-.22.5-.5s-.22-.5-.5-.5H5.7l1.15-1.15a.495.495 0 10-.7-.7l-2 2c-.1.09-.16.21-.16.35s.06.26.15.35l2 2.01zm7.85-1.86c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.89-2-2-2zM9.85 8.14a.533.533 0 00-.36-.15.495.495 0 00-.35.85l1.15 1.15h-5.8c-.28 0-.5.22-.5.5s.22.5.5.5h5.79l-1.15 1.15a.495.495 0 10.7.7l2-2c.09-.09.15-.22.15-.35s-.06-.26-.15-.35l-1.98-2z'
          ],
          'exclude-row': [
            'M0 10a1.003 1.003 0 001.71.71L3 9.41l1.29 1.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L4.41 8 5.7 6.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L3 6.59l-1.29-1.3A1.003 1.003 0 00.29 6.71L1.59 8 .29 9.29C.11 9.47 0 9.72 0 10zm1-7h14c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm14 10H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm-1-7H9c-1.1 0-2 .9-2 2s.9 2 2 2h5c1.1 0 2-.9 2-2s-.9-2-2-2z'
          ],
          'expand-all': [
            'M4 7c.28 0 .53-.11.71-.29L8 3.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-4-4C8.53 1.11 8.28 1 8 1s-.53.11-.71.29l-4 4A1.003 1.003 0 004 7zm8 2c-.28 0-.53.11-.71.29L8 12.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42l4 4c.18.18.43.29.71.29s.53-.11.71-.29l4-4A1.003 1.003 0 0012 9z'
          ],
          export: [
            'M4 6c.28 0 .53-.11.71-.29L7 3.41V11c0 .55.45 1 1 1s1-.45 1-1V3.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-4-4C8.53.11 8.28 0 8 0s-.53.11-.71.29l-4 4A1.003 1.003 0 004 6zm11 5c-.55 0-1 .45-1 1v2H2v-2c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1z'
          ],
          'eye-off': [
            'M16 7.97v-.02-.01-.02-.02a.672.672 0 00-.17-.36c-.49-.63-1.07-1.2-1.65-1.72l-3.16 2.26a2.978 2.978 0 01-2.98 2.9c-.31 0-.6-.06-.88-.15L5.09 12.3c.44.19.9.36 1.37.47.97.23 1.94.24 2.92.05.88-.17 1.74-.54 2.53-.98 1.25-.7 2.39-1.67 3.38-2.75.18-.2.37-.41.53-.62.09-.1.15-.22.17-.36v-.02-.02-.01-.02-.03c.01-.02.01-.03.01-.04zm-.43-4.17c.25-.18.43-.46.43-.8 0-.55-.45-1-1-1-.22 0-.41.08-.57.2l-.01-.01-2.67 1.91c-.69-.38-1.41-.69-2.17-.87a6.8 6.8 0 00-2.91-.05c-.88.18-1.74.54-2.53.99-1.25.7-2.39 1.67-3.38 2.75-.18.2-.37.41-.53.62-.23.29-.23.63-.01.92.51.66 1.11 1.25 1.73 1.79.18.16.38.29.56.44l-2.09 1.5.01.01c-.25.18-.43.46-.43.8 0 .55.45 1 1 1 .22 0 .41-.08.57-.2l.01.01 14-10-.01-.01zm-10.41 5a3.03 3.03 0 01-.11-.8 2.99 2.99 0 012.99-2.98c.62 0 1.19.21 1.66.53L5.16 8.8z'
          ],
          'eye-on': [
            'M10.29 6.7c.18.18.43.29.71.29s.53-.11.71-.29l4-4c.17-.18.29-.43.29-.7a1.003 1.003 0 00-1.71-.71L11 4.58 9.71 3.29A.997.997 0 009 3c-.55 0-1 .44-1 1a1 1 0 00.3.7l1.99 2zM16 7.96v-.02-.01-.02-.02a.64.64 0 00-.17-.36c-.3-.4-.65-.76-1-1.12l-1.7 1.7c-.55.55-1.3.88-2.13.88-.06 0-.11-.01-.17-.02C10.42 10.15 9.32 11 8.01 11A3.005 3.005 0 016.4 5.46c-.24-.43-.39-.93-.39-1.46 0-.26.04-.5.1-.74-.7.2-1.37.5-2.01.86-1.26.7-2.4 1.68-3.4 2.77-.18.21-.36.41-.53.63-.22.29-.22.64 0 .93.51.67 1.12 1.27 1.73 1.81 1.33 1.17 2.85 2.15 4.53 2.55.97.23 1.95.24 2.92.05.89-.18 1.74-.54 2.54-.99 1.25-.71 2.4-1.69 3.39-2.78.18-.2.37-.41.54-.63.09-.1.15-.23.17-.37v-.02-.02-.01-.02-.03c.01-.01.01-.02.01-.03zM8.01 9c.48 0 .87-.35.96-.81a.55.55 0 01-.07-.09l-.02.01L7.8 7.03c-.45.1-.79.48-.79.96 0 .56.45 1.01 1 1.01z'
          ],
          'eye-open': [
            'M8.002 7.003a1.003 1.003 0 000 2.005 1.003 1.003 0 000-2.005zm7.988.972v-.02-.01-.02-.02a.675.675 0 00-.17-.36c-.509-.673-1.118-1.264-1.737-1.806-1.328-1.173-2.846-2.155-4.523-2.546a6.702 6.702 0 00-2.925-.06c-.889.18-1.738.541-2.546.992C2.84 4.837 1.692 5.81.694 6.902c-.18.211-.36.411-.53.632a.742.742 0 000 .932c.51.672 1.119 1.264 1.738 1.805 1.328 1.173 2.846 2.156 4.523 2.547.968.23 1.947.24 2.925.04.889-.18 1.738-.542 2.546-.993 1.248-.712 2.397-1.684 3.395-2.777.18-.2.37-.411.54-.632.09-.1.149-.23.169-.36v-.02-.02-.01-.02-.03c0-.01-.01-.01-.01-.02zm-7.988 3.038a2.998 2.998 0 01-2.995-3.008 2.998 2.998 0 012.995-3.008 2.998 2.998 0 012.996 3.008 2.998 2.998 0 01-2.996 3.008z'
          ],
          'fast-backward': [
            'M14 3c-.24 0-.44.09-.62.23l-.01-.01L9 6.72V4c0-.55-.45-1-1-1-.24 0-.44.09-.62.23v-.01l-5 4 .01.01C2.16 7.41 2 7.68 2 8s.16.59.38.77v.01l5 4 .01-.01c.17.14.37.23.61.23.55 0 1-.45 1-1V9.28l4.38 3.5.01-.01c.17.14.37.23.61.23.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z'
          ],
          'fast-forward': [
            'M15 8c0-.32-.16-.59-.38-.77l.01-.01-5-4-.01.01A.987.987 0 009 3c-.55 0-1 .45-1 1v2.72l-4.38-3.5v.01A.987.987 0 003 3c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1 .24 0 .44-.09.62-.23l.01.01L8 9.28V12c0 .55.45 1 1 1 .24 0 .44-.09.62-.23l.01.01 5-4-.01-.01c.22-.18.38-.45.38-.77z'
          ],
          feed: [
            'M1.99 11.99c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.89-2-2-2zm1-4c-.55 0-1 .45-1 1s.45 1 1 1c1.66 0 3 1.34 3 3 0 .55.45 1 1 1s1-.45 1-1c0-2.76-2.24-5-5-5zm0-4c-.55 0-1 .45-1 1s.45 1 1 1c3.87 0 7 3.13 7 7 0 .55.45 1 1 1s1-.45 1-1a9 9 0 00-9-9zm0-4c-.55 0-1 .45-1 1s.45 1 1 1c6.08 0 11 4.92 11 11 0 .55.45 1 1 1s1-.45 1-1c0-7.18-5.82-13-13-13z'
          ],
          'feed-subscribed': [
            'M3 2c1.06 0 2.08.16 3.06.45.13-.71.52-1.32 1.05-1.76C5.82.25 4.44 0 3 0c-.55 0-1 .45-1 1s.45 1 1 1zM2 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm8.32-6.33a.99.99 0 001.4 0l3.98-3.98c.19-.18.3-.42.3-.7 0-.55-.45-.99-1-.99-.28 0-.52.11-.7.29l-3.28 3.28-1.29-1.29a.99.99 0 00-.7-.29 1 1 0 00-1 .99c0 .27.11.52.29.7l2 1.99zm3.73.53l-.93.93-.02-.02c-.17.17-.35.33-.56.45C13.47 9.16 14 11.02 14 13c0 .55.45 1 1 1s1-.45 1-1c0-2.5-.73-4.82-1.95-6.8zM3 8c-.55 0-1 .45-1 1s.45 1 1 1c1.66 0 3 1.34 3 3 0 .55.45 1 1 1s1-.45 1-1c0-2.76-2.24-5-5-5zm5.91-.91l-.03.03-2-2 .03-.03c-.11-.11-.23-.2-.33-.33A8.9 8.9 0 003 4c-.55 0-1 .45-1 1s.45 1 1 1c3.87 0 7 3.13 7 7 0 .55.45 1 1 1s1-.45 1-1c0-1.87-.57-3.61-1.55-5.06-.61-.11-1.13-.42-1.54-.85z'
          ],
          film: [
            'M15 1h-5v2H6V1H1c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h5v-2h4v2h5c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM4 13H2v-2h2v2zm0-3H2V8h2v2zm0-3H2V5h2v2zm0-3H2V2h2v2zm6 6H6V5h4v5zm4 3h-2v-2h2v2zm0-3h-2V8h2v2zm0-3h-2V5h2v2zm0-3h-2V2h2v2z'
          ],
          filter: [
            'M13.99.99h-12a1.003 1.003 0 00-.71 1.71l4.71 4.71V14a1.003 1.003 0 001.71.71l2-2c.18-.18.29-.43.29-.71V7.41L14.7 2.7a1.003 1.003 0 00-.71-1.71z'
          ],
          'filter-keep': [
            'M15 10c-.28 0-.53.11-.71.29L12 12.59l-1.29-1.29A.965.965 0 0010 11a1.003 1.003 0 00-.71 1.71l2 2c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 0015 10zm-3-8c0-.55-.45-1-1-1H1a1.003 1.003 0 00-.71 1.71L4 6.41V12a1.003 1.003 0 001.71.71l2-2c.18-.18.29-.43.29-.71V6.41l3.71-3.71c.18-.17.29-.42.29-.7z'
          ],
          'filter-list': [
            'M9 8c0 .55.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1h-5c-.55 0-1 .45-1 1zm3-6c0-.55-.45-1-1-1H1a1.003 1.003 0 00-.71 1.71L4 6.41V12a1.003 1.003 0 001.71.71l2-2c.18-.18.29-.43.29-.71V6.41l3.71-3.71c.18-.17.29-.42.29-.7zm3 8h-5c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1zm0 3h-5c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'filter-open': [
            'M15.707 10.293a1 1 0 010 1.414l-3 3c-.63.63-1.707.184-1.707-.707V8c0-.89 1.077-1.337 1.707-.707l3 3zM12 2c0 .28-.11.53-.29.7L8 6.41V10c0 .28-.11.53-.29.71l-2 2A1.003 1.003 0 014 12V6.41L.29 2.71A1.003 1.003 0 011 1h10c.55 0 1 .45 1 1z'
          ],
          'filter-remove': [
            'M12 2c0-.55-.45-1-1-1H1a1.003 1.003 0 00-.71 1.71L4 6.41V12a1.003 1.003 0 001.71.71l2-2c.18-.18.29-.43.29-.71V6.41l3.71-3.71c.18-.17.29-.42.29-.7zm2.41 10l1.29-1.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L13 10.59 11.71 9.3A.965.965 0 0011 9a1.003 1.003 0 00-.71 1.71l1.3 1.29-1.29 1.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l1.29-1.3 1.29 1.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L14.41 12z'
          ],
          flag: [
            'M2.99 2.99c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1s1-.45 1-1v-11c0-.55-.45-1-1-1zm0-3c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm2 3.03v7.23c2.07-2.11 5.92 1.75 9 0V3.02c-3 2.07-6.94-2.03-9 0z'
          ],
          flame: [
            'M9.217 0c0 1.368.368 2.462 1.104 3.282C12.774 5.197 14 7.385 14 9.846c0 2.735-1.472 4.786-4.415 6.154 2.165-2.4 1.84-3.385-.368-6.4-2.342 1.2-1.967 2-1.592 3.6-.786 0-1.5 0-1.875-.4 0 .547.898 2 1.464 3.2-2.943-.82-6.092-5.744-4.988-6.154.736-.273 1.594-.137 2.575.41C3.575 5.333 5.047 1.915 9.217 0z'
          ],
          flash: [
            'M4 8c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1zm4-4c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1S7 .45 7 1v2c0 .55.45 1 1 1zM3.79 5.21a1.003 1.003 0 001.42-1.42l-1.5-1.5a1.003 1.003 0 00-1.42 1.42l1.5 1.5zm.71 5.29c-.28 0-.53.11-.71.29l-1.5 1.5a1.003 1.003 0 001.42 1.42l1.5-1.5a1.003 1.003 0 00-.71-1.71zm7-5c.28 0 .53-.11.71-.29l1.5-1.5a1.003 1.003 0 00-1.42-1.42l-1.5 1.5a1.003 1.003 0 00.71 1.71zm.71 5.29a1.003 1.003 0 00-1.42 1.42l1.5 1.5a1.003 1.003 0 001.42-1.42l-1.5-1.5zM15 7h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1zM8 5C6.34 5 5 6.34 5 8s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0 3c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1z'
          ],
          'floppy-disk': [
            'M15.71 2.29l-2-2A.997.997 0 0013 0h-1v6H4V0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V3c0-.28-.11-.53-.29-.71zM14 15H2V9c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v6zM11 1H9v4h2V1z'
          ],
          'flow-branch': [
            'M10.643 6.595c.22.418.344.894.344 1.399 0 .439-.094.855-.263 1.231l3.265 3.462-.002-1.75a.973.973 0 01.314-.68.99.99 0 011.388.048c.186.2.316.46.3.715l-.009 4.03a.959.959 0 01-.3.68.972.972 0 01-.698.266l-4.053.002a.97.97 0 01-.679-.314 1.031 1.031 0 01.05-1.42.972.972 0 01.698-.266l1.7-.001-3.305-3.35a2.998 2.998 0 01-4.228-1.653H.999a1 1 0 010-2h4.166a2.998 2.998 0 014.06-1.735l3.449-3.268-1.745.002a.979.979 0 01-.631-1.692c.199-.186.459-.316.713-.3l4.025.009c.247.008.493.1.679.3.186.2.274.451.265.7l.002 4.046a.972.972 0 01-.313.68 1.03 1.03 0 01-1.42-.05.973.973 0 01-.266-.7V3.295l-3.34 3.301z'
          ],
          'flow-end': [
            'M9.702 7.31c.176.176.293.41.293.684a.976.976 0 01-.283.695c-1.888 1.91-2.892 2.918-3.011 3.027-.179.164-.42.284-.693.284a.995.995 0 01-.997-.985c0-.274.112-.541.292-.72.12-.12.624-.551 1.514-1.293H.98c-.536 0-.975-.47-.975-1.008 0-.537.439-.996.975-.996h5.837c-.895-.752-1.4-1.187-1.514-1.304a1.03 1.03 0 01-.292-.705C5.01 4.45 5.464 4 6 4c.272 0 .52.108.695.294A535.7 535.7 0 009.702 7.31zM13 11.002c-1.657 0-3-1.347-3-3.008a3.004 3.004 0 013-3.007c1.657 0 3 1.346 3 3.007a3.004 3.004 0 01-3 3.008z'
          ],
          'flow-linear': [
            'M4.16 9.002H.977C.44 9.002 0 8.532 0 7.994c0-.537.44-.99.978-.99h3.18A3.01 3.01 0 016.995 5a3.01 3.01 0 012.839 2.004h2.98c-.898-.756-1.404-1.193-1.518-1.31a1.03 1.03 0 01-.293-.705c0-.538.454-.989.992-.989.274 0 .521.108.697.294.118.124 1.122 1.13 3.014 3.016a.96.96 0 01.293.684.975.975 0 01-.284.695l-3.018 3.027a.974.974 0 01-.694.284c-.553 0-1-.447-1-.985 0-.274.117-.545.293-.72l1.518-1.293H9.833A3.01 3.01 0 016.996 11 3.01 3.01 0 014.16 9.002z'
          ],
          'flow-review': [
            'M5.175 7.004a3.003 3.003 0 012.83-2.001c1.305 0 2.416.835 2.83 2.001h1.985c-.896-.756-1.401-1.193-1.515-1.31a1.03 1.03 0 01-.292-.705c0-.538.453-.989.99-.989a.95.95 0 01.696.294c.117.124 1.12 1.13 3.008 3.016.176.176.293.41.293.684a.976.976 0 01-.283.695l-3.013 3.027a.995.995 0 01-1.691-.702c0-.273.116-.544.292-.72l1.515-1.292h-1.98a3.003 3.003 0 01-2.835 2.016A3.003 3.003 0 015.17 9.002H3.18l1.515 1.292c.176.176.292.447.292.72a.995.995 0 01-1.69.702L.282 8.69A.976.976 0 010 7.994c0-.273.117-.508.293-.684A535.858 535.858 0 003.3 4.294.95.95 0 013.997 4c.537 0 .99.45.99.989 0 .273-.12.528-.292.705-.114.117-.62.554-1.515 1.31h1.995z'
          ],
          'flow-review-branch': [
            'M10.392 10.647A3.002 3.002 0 016.16 8.995H3.37l1.338 1.318c.172.178.287.41.282.683-.01.536-.524.995-.99.995-.465 0-.63-.187-.747-.294L.281 8.682A.956.956 0 010 7.994a.971.971 0 01.294-.687l3.01-3.028a.973.973 0 01.697-.27c.536.01.998.485.989 1.021a.971.971 0 01-.295.687L3.37 6.997h2.79a3.002 3.002 0 014.106-1.716l2.416-2.277-1.732.004a.99.99 0 01-.679-.329.978.978 0 01.05-1.378c.199-.186.459-.315.714-.3l4.012.005c.248.009.493.1.68.3.185.2.273.45.264.699L15.99 6.05a.973.973 0 01-.314.679 1.03 1.03 0 01-1.421-.048.971.971 0 01-.265-.699V4.29L11.65 6.602c.219.416.343.89.343 1.394 0 .451-.1.88-.279 1.263L14 11.68l-.004-1.73a.982.982 0 01.323-.68.978.978 0 011.378.049c.187.2.316.46.3.714l-.004 4.011a.983.983 0 01-.3.691.972.972 0 01-.7.265l-4.046-.001a.987.987 0 01-.679-.326 1.017 1.017 0 01.048-1.41.972.972 0 01.699-.265h1.693l-2.315-2.35z'
          ],
          flows: [
            'M13.5 6a2.5 2.5 0 00-2.45 2h-1.3L5.74 4l-.75.75L8.25 8h-3.3a2.5 2.5 0 100 1h3.3l-3.26 3.25.75.75 4.01-4h1.3a2.5 2.5 0 102.45-3z'
          ],
          'folder-close': [
            'M-.01 14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V7h-16v7zm15-10H7.41L5.7 2.3a.965.965 0 00-.71-.3h-4c-.55 0-1 .45-1 1v3h16V5c0-.55-.45-1-1-1z'
          ],
          'folder-new': [
            'M10.165 7a3.003 3.003 0 002.827 2 3.003 3.003 0 002.827-2H16v7c0 .55-.45 1-1 1H1.01c-.55 0-1-.45-1-1V7h10.155zM8.76 6H0V3c0-.55.45-1 1-1h1.998c.28 0 .53.11.71.29L5.417 4h2.578c0 .768.29 1.469.765 2zm6.23-3c.55 0 1 .45 1 1s-.45 1-1 1h-.999v1c0 .55-.45 1-1 1-.549 0-.998-.45-.998-1V5h-1c-.55 0-1-.45-1-1s.45-1 1-1h1V2c0-.55.45-1 .999-1 .55 0 1 .45 1 1v1h.999z'
          ],
          'folder-open': [
            'M2.06 6.69c.14-.4.5-.69.94-.69h11V5c0-.55-.45-1-1-1H6.41l-1.7-1.71A.997.997 0 004 2H1c-.55 0-1 .45-1 1v9.84l2.05-6.15h.01zM16 8c0-.55-.45-1-1-1H4a.99.99 0 00-.94.69l-2 6c-.04.09-.06.2-.06.31 0 .55.45 1 1 1h11c.44 0 .81-.29.94-.69l2-6c.04-.09.06-.2.06-.31z'
          ],
          'folder-shared': [
            'M8.76 5.98c-.47-.53-.77-1.22-.77-1.99h-.58L5.7 2.29a.965.965 0 00-.71-.3h-4c-.55 0-1 .45-1 1v3h8.76l.01-.01zm6.23-2.99h-4c-.55 0-1 .45-1 1s.45 1 1 1h1.59l-3.3 3.3a.99.99 0 00-.29.7 1.003 1.003 0 001.71.71l3.29-3.29V8c0 .55.45 1 1 1s1-.45 1-1V4c0-.56-.45-1.01-1-1.01zm-1.98 7.23l-.9.9-.01-.01c-.54.55-1.28.89-2.11.89-1.66 0-3-1.34-3-3 0-.77.3-1.47.78-2H-.01v7c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3.18c-.31.11-.65.18-1 .18-.76-.01-1.45-.31-1.98-.78z'
          ],
          'folder-shared-open': [
            'M13.02 10.22l-.9.9-.01-.01c-.54.55-1.28.89-2.11.89-1.66 0-3-1.34-3-3 0-.77.3-1.47.78-2H4a.99.99 0 00-.94.69l-2 6c-.04.09-.06.2-.06.31 0 .55.45 1 1 1h11c.44 0 .81-.29.94-.69l1.11-3.32c-.01 0-.03.01-.05.01-.77 0-1.45-.3-1.98-.78zM2.06 6.69c.14-.4.5-.69.94-.69h5.76l.01-.01C8.3 5.46 8 4.77 8 4H6.41l-1.7-1.71A.997.997 0 004 2H1c-.55 0-1 .45-1 1v9.84l2.05-6.15h.01zM15 3h-4c-.55 0-1 .45-1 1s.45 1 1 1h1.59l-3.3 3.29a1.003 1.003 0 001.42 1.42L14 6.41V8c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1z'
          ],
          follower: [
            'M9.37 12.69c-1.2-.53-1.04-.85-1.08-1.29-.01-.06-.01-.12-.01-.19.41-.37.75-.87.97-1.44 0 0 .01-.03.01-.04.05-.13.09-.26.12-.39.28-.06.44-.36.5-.63.06-.11.19-.39.16-.7-.04-.4-.2-.59-.38-.67v-.07c0-.52-.05-1.26-.14-1.74a2.72 2.72 0 00-.09-.43 3.02 3.02 0 00-1.04-1.51C7.87 3.2 7.15 3 6.5 3c-.64 0-1.36.2-1.87.59-.5.38-.87.92-1.05 1.51-.04.13-.07.27-.09.4-.09.49-.14 1.24-.14 1.75v.06c-.19.07-.36.26-.4.68-.03.31.1.59.16.7.06.28.23.59.51.64.04.14.08.27.13.39 0 .01.01.02.01.02v.01c.22.59.57 1.1.99 1.46 0 .06-.01.12-.01.17-.04.44.08.76-1.12 1.29-1.2.53-3.01 1.1-3.38 1.95C-.13 15.5.02 16 .02 16h12.96s.15-.5-.22-1.36c-.38-.85-2.19-1.42-3.39-1.95zm6.33-10.4l-2-2a1.003 1.003 0 00-1.42 1.42l.3.29H9.99c-.55 0-1 .45-1 1s.45 1 1 1h2.58l-.29.29a1.003 1.003 0 001.42 1.42l2-2c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z'
          ],
          following: [
            'M9.37 12.69c-1.2-.53-1.04-.85-1.08-1.29-.01-.06-.01-.12-.01-.19.41-.37.75-.87.97-1.44 0 0 .01-.03.01-.04.05-.13.09-.26.12-.39.28-.06.44-.36.5-.63.06-.11.19-.39.16-.7-.04-.4-.2-.59-.38-.67v-.07c0-.52-.05-1.26-.14-1.74a2.72 2.72 0 00-.09-.43 3.02 3.02 0 00-1.04-1.51C7.87 3.2 7.15 3 6.5 3c-.64 0-1.36.2-1.87.59-.5.38-.87.92-1.05 1.51-.04.13-.07.27-.09.4-.09.49-.14 1.24-.14 1.75v.06c-.19.07-.36.26-.4.68-.03.31.1.59.16.7.06.28.23.59.51.64.04.14.08.27.13.39 0 .01.01.02.01.02v.01c.22.59.57 1.1.99 1.46 0 .06-.01.12-.01.17-.04.44.08.76-1.12 1.29-1.2.53-3.01 1.1-3.38 1.95C-.13 15.5.02 16 .02 16h12.96s.15-.5-.22-1.36c-.38-.85-2.19-1.42-3.39-1.95zM14.99 2h-2.58l.29-.29A1.003 1.003 0 0011.28.29l-2 2c-.17.18-.29.43-.29.71 0 .28.11.53.29.71l2 2a1.003 1.003 0 001.42-1.42L12.41 4h2.58c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          font: [
            'M13.93 14.67L8.94.67h-.01C8.79.28 8.43 0 8 0s-.79.28-.93.67h-.01l-5 14h.01c-.04.1-.07.21-.07.33 0 .55.45 1 1 1 .43 0 .79-.28.93-.67h.01L5.49 11h5.02l1.55 4.34h.01c.14.38.5.66.93.66.55 0 1-.45 1-1 0-.12-.03-.23-.07-.33zM6.2 9L8 3.97 9.8 9H6.2z'
          ],
          fork: [
            'M13.7 9.29a1.003 1.003 0 00-1.42 1.42l.29.29H11.4l-5-5h6.17l-.29.29a1.003 1.003 0 001.42 1.42l2-2c.18-.18.29-.43.29-.71s-.11-.53-.29-.71l-2-2a1.003 1.003 0 00-1.42 1.42l.29.29H.99c-.55 0-1 .45-1 1s.45 1 1 1h2.59l6.71 6.71c.18.18.43.29.71.29h1.59l-.29.29a1.003 1.003 0 001.42 1.42l2-2c.18-.18.29-.43.29-.71s-.11-.53-.29-.71l-2.02-2z'
          ],
          form: [
            'M2 11v2h2v-2H2zM1 9h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1zm9-6h5c.55 0 1 .45 1 1s-.45 1-1 1h-5c-.55 0-1-.45-1-1s.45-1 1-1zM6 1a1.003 1.003 0 01.71 1.71l-3 4C3.53 6.89 3.28 7 3 7s-.53-.11-.71-.29l-2-2a1.003 1.003 0 011.42-1.42L3 4.59l2.29-3.3C5.47 1.11 5.72 1 6 1zm4 10h5c.55 0 1 .45 1 1s-.45 1-1 1h-5c-.55 0-1-.45-1-1s.45-1 1-1z'
          ],
          'full-circle': ['M8 0a8 8 0 100 16A8 8 0 108 0z'],
          'full-stacked-chart': [
            'M13 12h1c.55 0 1-.45 1-1V8h-3v3c0 .55.45 1 1 1zM10 2c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v3h3V2zm0 4H7v3h3V6zm5-4c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v2h3V2zm0 3h-3v2h3V5zM5 5H2v3h3V5zm-2 7h1c.55 0 1-.45 1-1V9H2v2c0 .55.45 1 1 1zm12 1H2c-.55 0-1 .45-1 1s.45 1 1 1h13c.55 0 1-.45 1-1s-.45-1-1-1zM5 2c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v2h3V2zm3 10h1c.55 0 1-.45 1-1v-1H7v1c0 .55.45 1 1 1z'
          ],
          fullscreen: [
            'M3.41 2H5c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1v4c0 .55.45 1 1 1s1-.45 1-1V3.41L5.29 6.7c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L3.41 2zM6 9c-.28 0-.53.11-.71.29L2 12.59V11c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1H3.41l3.29-3.29c.19-.18.3-.43.3-.71 0-.55-.45-1-1-1zm9 1c-.55 0-1 .45-1 1v1.59L10.71 9.3A.965.965 0 0010 9a1.003 1.003 0 00-.71 1.71l3.3 3.29H11c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm0-10h-4c-.55 0-1 .45-1 1s.45 1 1 1h1.59l-3.3 3.29a1.003 1.003 0 001.42 1.42L14 3.41V5c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1z'
          ],
          function: [
            'M8.12 4.74H6.98c.33-1.29.75-2.24 1.28-2.84.33-.37.64-.56.95-.56.06 0 .11.02.15.05.04.04.06.09.06.15 0 .05-.04.15-.13.29-.09.14-.13.28-.13.4 0 .18.07.33.2.46.14.13.31.19.52.19.22 0 .41-.08.56-.23.15-.16.23-.37.23-.63 0-.3-.11-.55-.34-.74C10.1 1.09 9.74 1 9.24 1c-.78 0-1.49.22-2.12.67-.64.45-1.24 1.2-1.81 2.23-.2.36-.38.59-.56.69-.18.1-.46.15-.85.15l-.26.9h1.08l-1.59 6.12c-.27 1.01-.44 1.63-.54 1.86-.14.34-.34.63-.62.87-.11.1-.24.15-.4.15a.15.15 0 01-.11-.04l-.04-.05c0-.03.04-.08.12-.16.08-.08.12-.2.12-.36 0-.18-.06-.33-.19-.44-.12-.12-.3-.18-.54-.18-.28 0-.51.08-.68.23-.16.14-.25.32-.25.53 0 .22.1.42.31.59.21.17.53.25.97.25.7 0 1.32-.18 1.87-.54.54-.36 1.02-.92 1.42-1.67.41-.75.82-1.96 1.25-3.63l.91-3.54h1.1l.29-.89zm5.43 1.52c.2-.15.41-.23.62-.23.08 0 .23.03.45.09s.41.09.57.09c.23 0 .42-.08.57-.23.16-.16.24-.36.24-.61 0-.26-.08-.47-.23-.62-.15-.15-.37-.23-.66-.23-.25 0-.5.06-.72.18-.23.12-.51.38-.86.78-.26.3-.64.81-1.15 1.55-.2-.91-.55-1.75-1.05-2.51l-2.72.46-.06.29c.2-.04.37-.06.51-.06.27 0 .49.11.67.34.28.36.67 1.45 1.17 3.26-.39.52-.66.85-.8 1.01-.24.26-.44.42-.59.5-.12.06-.25.09-.41.09-.11 0-.3-.06-.56-.18-.18-.08-.34-.12-.48-.12-.27 0-.48.08-.66.25-.17.17-.26.38-.26.64 0 .25.08.44.24.6.16.15.37.23.64.23.26 0 .5-.05.73-.16.23-.11.52-.34.86-.69.35-.35.82-.9 1.43-1.67.23.73.44 1.25.61 1.58s.37.57.59.71c.22.15.5.22.83.22.32 0 .65-.11.98-.34.44-.3.88-.81 1.34-1.53l-.26-.15c-.31.43-.54.7-.69.8-.1.07-.22.1-.35.1-.16 0-.32-.1-.48-.3-.27-.34-.62-1.27-1.06-2.8.4-.68.73-1.13 1-1.34z'
          ],
          'gantt-chart': [
            'M10 10c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1zM6 7c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1zm9 5H2V3c0-.55-.45-1-1-1s-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM4 5h3c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1z'
          ],
          geofence: [
            'M6 9c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1v-1.59l-3.29 3.3A1.003 1.003 0 010 15c0-.28.11-.53.3-.71L3.59 11H2c-.55 0-1-.45-1-1s.45-1 1-1zM9.088.004l.097.013.097.024.057.018.1.042.054.029.095.061.052.04 6 5 .05.046.076.08.053.07.06.095.051.11c.056.141.079.294.067.446l-.014.105-.037.143-.035.087-.043.083-4 7-.034.056-.059.08-.038.044-.096.092-.114.082-.116.062-.086.034-.109.03-.1.017-.069.006H8.83c.088-.25.144-.515.163-.79L9 13v-3a3 3 0 00-2.824-2.995L6 7H3c-.351 0-.689.06-1.002.171L2 5l.002-.07.013-.1.015-.073.025-.085.043-.104.056-.101.045-.066.079-.093.084-.078.083-.062 6-4 .07-.043.12-.056.111-.036.108-.022.083-.01h.031c.046-.002.083 0 .12.003z'
          ],
          geolocation: ['M-.01 6.66l7.34 2 2 7.33 6.66-16z'],
          geosearch: [
            'M8.82 12.4h.66c.23 0 .36-.17.36-.4v-1.48l.19-.18c-.27.03-.55.06-.83.06-.28 0-.56-.03-.84-.07.02.04.05.08.07.13V12c0 .23.15.4.39.4zM6.4 15.1A5.51 5.51 0 01.9 9.6c0-.49.06-.98.18-1.43.03 0 .05-.01.08-.01h.08v.44c0 .19.17.34.36.34.03 0 .07-.01.1-.01l.71.7c.07.07.19.07.26 0s.07-.19 0-.26l-.7-.72c0-.02.03-.03.03-.05v-.11c0-.15.08-.2.23-.33h.42c.08 0 .15-.01.22-.04h.02c.02-.02.03-.02.04-.04.01-.01.01-.01.02-.01l.02-.01.9-.9c-.13-.26-.24-.52-.34-.8h-.5v-.43c0-.01.05.05.04-.08h.31c-.03-.13-.06-.26-.08-.39h-.57c.16-.12.34-.24.51-.36-.02-.23-.04-.46-.04-.7 0-.12.01-.23.02-.34A6.385 6.385 0 000 9.6C0 13.13 2.87 16 6.4 16c3.1 0 5.67-2.22 6.26-5.15l-.78-.88c-.21 2.85-2.58 5.13-5.48 5.13zm-1.7-2.93v-.28h.12c.23 0 .39-.19.39-.42v-.54s.01-.01 0-.01L3.77 9.45h-.62c-.23 0-.38.19-.38.42v1.6c0 .23.14.42.38.42h.26v1.61c0 .23.22.41.45.41s.45-.18.45-.41v-.97H4.3c.24 0 .4-.13.4-.36zm11.07-2.34l-2.94-2.94c.11-.17.21-.34.3-.52.01-.03.03-.06.04-.09.08-.18.16-.36.22-.55v-.01c.06-.19.1-.38.14-.58.01-.05.01-.09.02-.14.03-.2.05-.4.05-.61a4.4 4.4 0 00-4.4-4.4C6.77 0 4.8 1.97 4.8 4.4s1.97 4.4 4.4 4.4c.21 0 .41-.02.61-.05.04 0 .09-.01.14-.02.2-.03.39-.08.58-.14h.01c.19-.06.37-.14.55-.22.03-.01.06-.03.09-.04.18-.09.35-.19.52-.3l2.94 2.94a.8.8 0 00.57.23c.44 0 .8-.36.8-.8a.895.895 0 00-.24-.57zM9.2 7.6C7.43 7.6 6 6.17 6 4.4c0-1.77 1.43-3.2 3.2-3.2s3.2 1.43 3.2 3.2c0 1.77-1.43 3.2-3.2 3.2zm1.54 4.26v-.52c0-.09-.1-.17-.19-.17s-.19.07-.19.17v.52c0 .09.1.17.19.17s.19-.07.19-.17z'
          ],
          'git-branch': [
            'M12 1c-1.66 0-3 1.34-3 3 0 1.25.76 2.32 1.85 2.77A2.02 2.02 0 019 8H7c-.73 0-1.41.2-2 .55V5.82C6.16 5.4 7 4.3 7 3c0-1.66-1.34-3-3-3S1 1.34 1 3c0 1.3.84 2.4 2 2.82v4.37c-1.16.4-2 1.51-2 2.81 0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.04-.53-1.95-1.32-2.49.35-.31.81-.51 1.32-.51h2c1.92 0 3.52-1.35 3.91-3.15A2.996 2.996 0 0012 1zM4 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 12c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm8-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z'
          ],
          'git-commit': [
            'M15 7h-3.14c-.45-1.72-2-3-3.86-3S4.59 5.28 4.14 7H1c-.55 0-1 .45-1 1s.45 1 1 1h3.14c.45 1.72 2 3 3.86 3s3.41-1.28 3.86-3H15c.55 0 1-.45 1-1s-.45-1-1-1zm-7 3c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z'
          ],
          'git-merge': [
            'M12 6c-1.3 0-2.4.84-2.82 2H9c-1.62 0-3-.96-3.63-2.34C6.33 5.16 7 4.16 7 3c0-1.66-1.34-3-3-3S1 1.34 1 3c0 1.3.84 2.4 2 2.81v4.37C1.84 10.6 1 11.7 1 13c0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.3-.84-2.4-2-2.82V8.43A5.89 5.89 0 009 10h.18A2.996 2.996 0 0015 9c0-1.66-1.34-3-3-3zm-8 8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM4 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm8 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z'
          ],
          'git-new-branch': [
            'M14 2h-1V1c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1V4h1c.55 0 1-.45 1-1s-.45-1-1-1zm-3.18 4.8C10.51 7.51 9.82 8 9 8H7c-.73 0-1.41.2-2 .55V5.82C6.16 5.4 7 4.3 7 3c0-1.66-1.34-3-3-3S1 1.34 1 3c0 1.3.84 2.4 2 2.82v4.37c-1.16.4-2 1.51-2 2.81 0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.04-.53-1.95-1.32-2.49.35-.31.81-.51 1.32-.51h2c1.9 0 3.49-1.33 3.89-3.11-.29.07-.58.11-.89.11-.41 0-.8-.08-1.18-.2zM4 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 12c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z'
          ],
          'git-pull': [
            'M3 1C1.34 1 0 2.34 0 4c0 1.3.84 2.4 2 2.82v3.37C.84 10.6 0 11.7 0 13c0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.3-.84-2.4-2-2.82V6.82C5.16 6.4 6 5.3 6 4c0-1.66-1.34-3-3-3zm0 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm11 5.18V6c0-1.66-1.34-3-3-3H9.41l1.29-1.29c.19-.18.3-.43.3-.71A1.003 1.003 0 009.29.29l-3 3C6.11 3.47 6 3.72 6 4c0 .28.11.53.29.71l3 3a1.003 1.003 0 001.42-1.42L9.41 5H11c.55 0 1 .45 1 1v4.18A2.996 2.996 0 0013 16c1.66 0 3-1.34 3-3 0-1.3-.84-2.4-2-2.82zM13 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z'
          ],
          'git-push': [
            'M4 6h1V5H4v1zm9 3c0-.28-.11-.53-.29-.71l-3-3C9.53 5.11 9.28 5 9 5s-.53.11-.71.29l-3 3a1.003 1.003 0 001.42 1.42L8 8.41V15c0 .55.45 1 1 1s1-.45 1-1V8.41l1.29 1.29c.18.19.43.3.71.3.55 0 1-.45 1-1zM5 3H4v1h1V3zm10-3H1C.45 0 0 .45 0 1v13c0 .55.45 1 1 1h5v-2H2v-1h4v-1H3V2h11v9h-2v1h2v1h-2v2h3c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z'
          ],
          'git-repo': [
            'M5 9H4v1h1V9zm10-9H1C.45 0 0 .45 0 1v13c0 .55.45 1 1 1h3v1l2-1 2 1v-1h7c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM4 13H2v-1h2v1zm10 0H8v-1h6v1zm0-2H3V2h11v9zM5 3H4v1h1V3zm0 4H4v1h1V7zm0-2H4v1h1V5z'
          ],
          glass: [
            'M2 0v4c0 2.97 2.16 5.43 5 5.91V14H5c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1H9V9.91c2.84-.48 5-2.94 5-5.91V0H2z'
          ],
          globe: [
            'M4.45 7.83c-.26 0-.41.21-.41.46v1.75c0 .26.16.46.41.46h.29v1.77c0 .25.24.45.49.45s.49-.2.49-.45V11.2h-.01c.26 0 .44-.14.44-.4v-.3h.14c.26 0 .43-.2.43-.46v-.59s.01-.01 0-.01l-1.58-1.6h-.69zM8.51 3.9h.22c.06 0 .12-.01.12-.07 0-.06-.05-.07-.12-.07h-.22c-.06 0-.12.01-.12.07.01.06.06.07.12.07zm-2.33-.05c.07-.07.07-.19 0-.26l-.5-.5a.187.187 0 00-.26 0c-.07.07-.07.19 0 .26l.5.5c.07.07.19.07.26 0zm3.06.89c.07 0 .14-.06.14-.12v-.31c0-.07-.07-.12-.14-.12s-.14.06-.14.12v.31c0 .07.07.12.14.12zM8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-.55.1-1.07.23-1.57h.11v.47c0 .2.18.37.39.37.03 0 .08-.01.11-.02l.78.77c.08.08.2.08.28 0 .08-.08.08-.2 0-.28l-.75-.78c0-.02.04-.04.04-.06v-.12c0-.16.09-.22.25-.36h.46c.09 0 .17-.01.24-.05h.02c.02-.01.03-.02.05-.03.01-.01.01-.01.02-.01l.02-.02 1.59-1.58c.18-.18.18-.46 0-.64s-.47-.15-.65.03l-.3.34h-.57v-.48c0-.01.05.05.05-.09h.64c.12 0 .22-.09.22-.21s-.1-.21-.22-.21H4.1c.18-.15.34-.31.54-.44l.01-.01c.21-.14.45-.25.68-.37.15-.07.29-.15.44-.21.17-.07.35-.11.53-.17.18-.05.35-.12.53-.16a6.05 6.05 0 013.47.35c.05.02.1.05.16.08.25.11.48.24.71.39.25.16.49.34.71.55H10.6s0-.03-.01-.03c-.04 0-.09 0-.13.03l-.51.51a.17.17 0 000 .23c.06.06.17.06.23 0l.42-.44.01-.02h.25c0 .14-.07.09-.07.12v.07c0 .22-.15.37-.36.37h-.38c-.19 0-.38.21-.38.4v.17h-.1c-.12 0-.2.06-.2.18v.25h-.23c-.17 0-.3.11-.3.28 0 .17.13.26.3.26.07 0 .14.03.19-.11l.04.01.49-.46h.17l.39.37c.03.03.08.02.12-.01.03-.03.03-.12 0-.15l-.32-.35h.23l.09.12c.18.18.48.17.66-.01l.09-.1h.4c.02 0 .08.05.08.05v.24l-.05-.01h-.36c-.11 0-.21.1-.21.21 0 .11.09.21.21.21h.41v.15c-.14.21-.24.42-.45.42h-.94v-.01l-.44-.44a.47.47 0 00-.66 0l-.42.43v.01H8.6c-.26 0-.49.21-.49.46v.92c0 .26.23.45.49.45h.9c.34.14.57.35.72.69v1.68c0 .26.17.44.42.44h.72c.26 0 .4-.18.4-.44V9l.89-.86.03-.02.02-.01h.03c.07-.08.15-.19.15-.31v-.91c0-.18-.16-.32-.31-.46H13c.01.28.21.42.46.42h.42c.08.37.12.76.12 1.15 0 3.31-2.69 6-6 6zm4.54-4.27c-.1 0-.21.08-.21.18v.57c0 .1.11.18.21.18.1 0 .21-.08.21-.18v-.57c0-.1-.11-.18-.21-.18zM8.37 3.19c0-.25-.2-.42-.46-.42h-.54c-.25 0-.42.18-.42.43 0 .03-.1.04.05.08v.47c0 .15.06.27.21.27s.21-.12.21-.27v-.14h.5c.24 0 .45-.16.45-.42z'
          ],
          'globe-network': [
            'M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm5.17 5h-2.44c-.21-1.11-.51-2.03-.91-2.69 1.43.46 2.61 1.43 3.35 2.69zM10 8c0 .73-.05 1.39-.12 2H6.12C6.05 9.39 6 8.73 6 8s.05-1.39.12-2h3.76c.07.61.12 1.27.12 2zM8 2c.67 0 1.36 1.1 1.73 3H6.27C6.64 3.1 7.33 2 8 2zm-1.82.31c-.4.66-.71 1.58-.91 2.69H2.83a6.025 6.025 0 013.35-2.69zM2 8c0-.7.13-1.37.35-2h2.76C5.04 6.62 5 7.28 5 8s.04 1.38.11 2H2.35C2.13 9.37 2 8.7 2 8zm.83 3h2.44c.21 1.11.51 2.03.91 2.69A6.025 6.025 0 012.83 11zM8 14c-.67 0-1.36-1.1-1.73-3h3.46c-.37 1.9-1.06 3-1.73 3zm1.82-.31c.4-.66.7-1.58.91-2.69h2.44a6.025 6.025 0 01-3.35 2.69zM13.65 10h-2.76c.07-.62.11-1.28.11-2s-.04-1.38-.11-2h2.76c.22.63.35 1.3.35 2s-.13 1.37-.35 2z'
          ],
          graph: [
            'M14 3c-1.06 0-1.92.83-1.99 1.88l-1.93.97A2.95 2.95 0 008 5c-.56 0-1.08.16-1.52.43L3.97 3.34C3.98 3.23 4 3.12 4 3c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2c.24 0 .47-.05.68-.13l2.51 2.09C5.08 7.29 5 7.63 5 8c0 .96.46 1.81 1.16 2.35l-.56 1.69c-.91.19-1.6.99-1.6 1.96 0 1.1.9 2 2 2s2-.9 2-2c0-.51-.2-.97-.51-1.32l.56-1.69A2.99 2.99 0 0011 8c0-.12-.02-.24-.04-.36l1.94-.97c.32.21.69.33 1.1.33 1.1 0 2-.9 2-2s-.9-2-2-2z'
          ],
          'graph-remove': [
            'M12.89 8.11l-.01.01-.38-.38-.38.38-.02-.02c-.54.55-1.27.9-2.1.9-1.66 0-3-1.34-3-3 0-.83.35-1.56.9-2.1l-.02-.02.38-.38-.38-.38.01-.01C7.35 2.57 7 1.83 7 1c0-.34.07-.65.17-.96A8.004 8.004 0 000 8c0 4.42 3.58 8 8 8 4.14 0 7.54-3.14 7.96-7.17-.31.1-.62.17-.96.17-.83 0-1.57-.35-2.11-.89zm1.02-4.61l1.79-1.79c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-1.79 1.8L10.71.3A.965.965 0 0010 0a1.003 1.003 0 00-.71 1.71l1.79 1.79-1.79 1.79a1.003 1.003 0 001.42 1.42l1.79-1.79 1.79 1.79a1.003 1.003 0 001.42-1.42l-1.8-1.79z'
          ],
          'greater-than': [
            'M2.713 5.958a1 1 0 01.574-1.916l10 3c.95.285.95 1.63 0 1.916l-10 3a1 1 0 01-.574-1.916L9.52 8 2.713 5.958z'
          ],
          'greater-than-or-equal-to': [
            'M2.713 3.958a1 1 0 01.574-1.916l10 3c.95.285.95 1.63 0 1.916l-10 3a1 1 0 01-.574-1.916L9.52 6 2.713 3.958zM3 12h10a1 1 0 010 2H3a1 1 0 010-2z'
          ],
          grid: [
            'M15 9c.55 0 1-.45 1-1s-.45-1-1-1h-1V4h1c.55 0 1-.45 1-1s-.45-1-1-1h-1V1c0-.55-.45-1-1-1s-1 .45-1 1v1H9V1c0-.55-.45-1-1-1S7 .45 7 1v1H4V1c0-.55-.45-1-1-1S2 .45 2 1v1H1c-.55 0-1 .45-1 1s.45 1 1 1h1v3H1c-.55 0-1 .45-1 1s.45 1 1 1h1v3H1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h3v1c0 .55.45 1 1 1s1-.45 1-1v-1h3v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1h-1V9h1zm-8 3H4V9h3v3zm0-5H4V4h3v3zm5 5H9V9h3v3zm0-5H9V4h3v3z'
          ],
          'grid-view': [
            'M0 1v6h7V0H1C.45 0 0 .45 0 1zm0 14c0 .55.45 1 1 1h6V9H0v6zM15 0H9v7h7V1c0-.55-.45-1-1-1zM9 16h6c.55 0 1-.45 1-1V9H9v7z'
          ],
          'group-objects': [
            'M5 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6-3H5C2.24 3 0 5.24 0 8s2.24 5 5 5h6c2.76 0 5-2.24 5-5s-2.24-5-5-5zm0 9H5c-2.21 0-4-1.79-4-4s1.79-4 4-4h6c2.21 0 4 1.79 4 4s-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
          ],
          'grouped-bar-chart': [
            'M10 12c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1s-1 .45-1 1v8c0 .55.45 1 1 1zm3 0c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1zm2 1H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm-9-1c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1zm-3 0c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1v9c0 .55.45 1 1 1z'
          ],
          hand: [
            'M15 5c0-.55-.45-1-1-1-.41 0-.76.24-.91.59v.01s0 .01-.01.01L11.57 8h-.36l.78-4.84C12 3.11 12 3.05 12 3a1 1 0 00-1.99-.16v.01L9.18 8H9V1c0-.55-.45-1-1-1S7 .45 7 1v7h-.09l-.93-5.18A1 1 0 005 2c-.55 0-1 .45-1 1 0 .05 0 .11.01.16L5.26 11h-.04L2.83 7.44C2.65 7.18 2.35 7 2 7c-.55 0-1 .45-1 1 0 .17.04.33.12.47l3 5.69h.01v.01A5.002 5.002 0 0013 11v-.59l1.93-5.05c.05-.11.07-.23.07-.36z'
          ],
          'hand-down': [
            'M14.72 7.87c-1.54-.67-2.99-2.68-3.7-3.95C10.11 1.95 9.93 0 6.14 0 4.05 0 2.71.61 1.92 2.12 1.27 3.36 1 5.21 1 7.83v.79c0 .65.6 1.18 1.35 1.18.34 0 .64-.11.88-.29.17.48.68.84 1.29.84.41 0 .78-.16 1.03-.42.23.37.67.63 1.19.63.57 0 1.05-.31 1.25-.74l.01.63v4.05c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V7.9c.58.41 1.55 1.21 2.47 1.29 1.57.14 1.82-1.07 1.25-1.32z'
          ],
          'hand-left': [
            'M12.08 4.97c-1.26-.71-3.27-2.15-3.95-3.7C7.88.7 6.67.96 6.81 2.52c.09.93.89 1.9 1.3 2.48H1.5C.67 5 0 5.67 0 6.5S.67 8 1.5 8h4.05l.63.01c-.44.2-.75.69-.75 1.25 0 .52.26.96.63 1.19-.26.25-.42.61-.42 1.03 0 .61.35 1.12.84 1.29-.18.24-.29.54-.29.88 0 .75.54 1.35 1.19 1.35h.79c2.62 0 4.47-.28 5.71-.92 1.51-.79 2.12-2.14 2.12-4.22 0-3.79-1.95-3.97-3.92-4.89z'
          ],
          'hand-right': [
            'M14.5 5H7.89c.41-.58 1.21-1.55 1.3-2.47C9.34.97 8.12.71 7.87 1.28c-.67 1.54-2.68 2.99-3.95 3.7C1.95 5.89 0 6.07 0 9.86c0 2.09.61 3.43 2.12 4.22 1.24.65 3.09.92 5.71.92h.79c.65 0 1.18-.6 1.18-1.35 0-.34-.11-.64-.29-.88.48-.17.84-.68.84-1.29 0-.41-.16-.78-.42-1.03.37-.23.63-.67.63-1.19 0-.57-.31-1.05-.74-1.25l.63-.01h4.05c.83 0 1.5-.67 1.5-1.5S15.33 5 14.5 5z'
          ],
          'hand-up': [
            'M13.65 6.19c-.34 0-.64.11-.88.29-.17-.48-.68-.84-1.29-.84-.41 0-.78.16-1.03.42-.23-.37-.67-.63-1.19-.63-.57 0-1.05.31-1.25.74L8 5.55V1.5C8 .67 7.33 0 6.5 0S5 .67 5 1.5v6.61c-.58-.41-1.55-1.21-2.48-1.3C.96 6.67.7 7.88 1.28 8.13c1.54.67 2.99 2.68 3.7 3.95C5.89 14.05 6.07 16 9.86 16c2.09 0 3.43-.61 4.22-2.12.64-1.24.92-3.09.92-5.71v-.79c0-.65-.6-1.19-1.35-1.19z'
          ],
          hat: [
            'M15 10c.495 0 .933.379.993.882L16 11v.505c0 1.461-3.524 2.45-7.707 2.493L8 14c-4.31 0-8-1-8-2.495V11c0-.561.466-1 1-1 .895 0 3 1 7 1l.381-.003C12.135 10.937 14.134 10 15 10zm-4-8c1.13 0 2.02 2.153 2.671 6.46-1.063.266-2.644.652-4.887.727l-.403.01L8 9.2c-2.664 0-4.488-.444-5.673-.74C2.98 4.153 3.87 2 5 2c2 0 1.329 2 3 2s1-2 3-2z'
          ],
          header: [
            'M13 1c-.55 0-1 .45-1 1v5H4V2c0-.55-.45-1-1-1s-1 .45-1 1v12c0 .55.45 1 1 1s1-.45 1-1V9h8v5c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1z'
          ],
          'header-one': [
            'M14.06 8c-.04.23-.12.44-.25.61-.13.17-.29.3-.48.41-.18.11-.39.18-.62.23-.23.04-.46.07-.71.07v1.03h1.74V16H15V8h-.94zM7 0c-.56 0-1 .45-1 1v4H2V1c0-.55-.45-1-1-1-.56 0-1 .45-1 1v10c0 .55.45 1 1 1 .56 0 1-.45 1-1V7h4v4c0 .55.45 1 1 1 .56 0 1-.45 1-1V1c0-.54-.45-1-1-1z'
          ],
          'header-two': [
            'M13.17 13.93c-.17.15-.33.29-.46.44-.13.16-.22.32-.27.49h3.55V16H11c.01-.65.16-1.22.44-1.71s.67-.91 1.17-1.27c.24-.18.49-.36.75-.54.25-.18.49-.36.71-.57.21-.2.39-.42.53-.65.14-.24.21-.51.22-.82 0-.14-.02-.29-.05-.45-.03-.16-.09-.31-.18-.45a1.13 1.13 0 00-.37-.35c-.16-.09-.37-.14-.63-.14-.24 0-.43.05-.59.15-.16.1-.29.24-.38.42-.1.17-.17.38-.21.62-.05.24-.07.5-.08.77h-1.19c0-.43.05-.83.16-1.2s.27-.69.49-.96c.21-.25.48-.46.79-.62.31-.15.67-.23 1.07-.23.45 0 .82.08 1.11.23.3.16.55.36.73.6.19.24.32.5.39.79.08.28.12.54.12.79 0 .31-.04.6-.13.85s-.22.49-.37.7c-.15.21-.32.41-.52.59s-.4.35-.61.51l-.63.45c-.21.14-.39.28-.57.42zM0 1c0-.55.44-1 1-1 .55 0 1 .46 1 1v10c0 .55-.44 1-1 1-.55 0-1-.46-1-1V1zm6 0c0-.55.44-1 1-1 .55 0 1 .46 1 1v10c0 .55-.44 1-1 1-.55 0-1-.46-1-1V1zM2 5h4v2H2V5z'
          ],
          headset: [
            'M14.85 6.34C14.18 2.72 11.37 0 8 0S1.82 2.72 1.15 6.34C.47 6.9 0 8.1 0 9.5 0 11.43.9 13 2 13c0 1.1.9 2 2 2h2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1H4c-.55 0-1-.45-1-1 .55 0 1-.45 1-1V7c0-.45-.3-.81-.71-.94C3.97 3.7 5.81 2 8 2s4.03 1.7 4.71 4.06c-.41.13-.71.49-.71.94v5c0 .55.45 1 1 1h1c1.1 0 2-1.57 2-3.5 0-1.4-.47-2.6-1.15-3.16z'
          ],
          heart: [
            'M16 5.095c0-2.255-1.88-4.083-4.2-4.083-1.682 0-3.13.964-3.8 2.352a4.206 4.206 0 00-3.8-2.352C1.88 1.012 0 2.84 0 5.095c0 .066.007.13.01.194H.004c.001.047.01.096.014.143l.013.142c.07.8.321 1.663.824 2.573C2.073 10.354 4.232 12.018 8 15c3.767-2.982 5.926-4.647 7.144-6.854.501-.905.752-1.766.823-2.562.007-.055.012-.11.016-.164.003-.043.012-.088.013-.13h-.006c.003-.066.01-.13.01-.195z'
          ],
          'heart-broken': [
            'M7.71 8.87L6.17 6.55l.02-.01A.906.906 0 016 6c0-.07.03-.13.04-.19h-.02l.78-3.92C6.09 1.34 5.19 1 4.2 1 1.88 1 0 2.83 0 5.09c0 .07.01.13.01.19H0c0 .05.01.1.01.14 0 .05.01.1.01.14.07.8.32 1.66.82 2.57 1.07 1.94 2.88 3.47 5.86 5.84l-.68-2.74h.02C6.03 11.16 6 11.08 6 11c0-.28.11-.53.29-.71l1.42-1.42zM16 5.09C16 2.83 14.12 1 11.8 1c-1.2 0-2.27.5-3.04 1.28l-.7 3.51 1.77 2.66-.01.01c.1.15.18.33.18.54 0 .28-.11.53-.29.71l-1.6 1.6.75 3.01c3.23-2.56 5.16-4.15 6.28-6.18.5-.91.75-1.77.82-2.56.01-.05.01-.11.02-.16 0-.04.01-.09.01-.13h-.01c.01-.07.02-.14.02-.2z'
          ],
          'heat-grid': [
            'M0 10h5V7H0v3zm1-2h3v1H1V8zm14-5h-4v3h5V4c0-.55-.45-1-1-1zm0 2h-3V4h3v1zM0 4v2h5V3H1c-.55 0-1 .45-1 1zm0 9c0 .55.45 1 1 1h4v-3H0v2zm6-7h4V3H6v3zm0 8h4v-3H6v3zm1-2h2v1H7v-1zm4 2h4c.55 0 1-.45 1-1v-2h-5v3zm0-4h5V7h-5v3zm-5 0h4V7H6v3z'
          ],
          heatmap: [
            'M2 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm11-7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm3 4.5A2.5 2.5 0 0013.5 6c-.98 0-1.82.57-2.23 1.39-.6-.78-1.51-1.3-2.56-1.36.18-.49.29-.99.29-1.53C9 2.01 6.99 0 4.5 0S0 2.01 0 4.5 2.01 9 4.5 9c.19 0 .37-.03.56-.06-.03.19-.06.37-.06.56C5 11.43 6.57 13 8.5 13c1.63 0 2.98-1.11 3.37-2.62.44.38 1 .62 1.63.62A2.5 2.5 0 0016 8.5zM14.5 13c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z'
          ],
          help: [
            'M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm1 13H7v-2h2v2zm1.93-6.52c-.14.32-.35.64-.62.97L9.25 8.83c-.12.15-.24.29-.28.42-.04.13-.09.3-.09.52V10H7.12V8.88s.05-.51.21-.71L8.4 6.73c.22-.26.35-.49.44-.68.09-.19.12-.38.12-.58 0-.3-.1-.55-.28-.75-.18-.19-.44-.28-.76-.28-.33 0-.59.1-.78.29-.19.19-.33.46-.4.81-.03.11-.1.15-.2.14l-1.7-.25c-.12-.01-.16-.08-.14-.19.12-.82.46-1.47 1.03-1.94.57-.48 1.32-.72 2.25-.72.47 0 .9.07 1.29.22s.72.34 1 .59c.28.25.49.55.65.89.15.35.22.72.22 1.12s-.07.75-.21 1.08z'
          ],
          'helper-management': [
            'M13 5h-2v2h2V5zm0 6h-2v2h2v-2zm0-3h-2v2h2V8zm2-8H1C.4 0 0 .4 0 1v14c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1zm-1 14H2V2h12v12zm-7-3H5v2h2v-2zm3 0H8v2h2v-2z'
          ],
          highlight: [
            'M9.12 11.07l2-2.02.71.71 4-4.04L10.17 0l-4 4.04.71.71-2 2.02 4.24 4.3zM2 12.97h4c.28 0 .53-.11.71-.3l1-1.01-3.42-3.45-3 3.03c-.18.18-.29.44-.29.72 0 .55.45 1.01 1 1.01zm13 1.01H1c-.55 0-1 .45-1 1.01S.45 16 1 16h14c.55 0 1-.45 1-1.01s-.45-1.01-1-1.01z'
          ],
          history: [
            'M8 3c-.55 0-1 .45-1 1v4c0 .28.11.53.29.71l2 2a1.003 1.003 0 001.42-1.42L9 7.59V4c0-.55-.45-1-1-1zm0-3a7.95 7.95 0 00-6 2.74V1c0-.55-.45-1-1-1S0 .45 0 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1H3.54C4.64 2.78 6.23 2 8 2c3.31 0 6 2.69 6 6 0 2.61-1.67 4.81-4 5.63v-.01c-.63.23-1.29.38-2 .38-3.31 0-6-2.69-6-6 0-.55-.45-1-1-1s-1 .45-1 1c0 4.42 3.58 8 8 8 .34 0 .67-.03 1-.07.02 0 .04-.01.06-.01C12.98 15.4 16 12.06 16 8c0-4.42-3.58-8-8-8z'
          ],
          home: [
            'M2 10v5c0 .55.45 1 1 1h3v-5h4v5h3c.55 0 1-.45 1-1v-5L8 4l-6 6zm13.71-2.71L14 5.59V2c0-.55-.45-1-1-1s-1 .45-1 1v1.59L8.71.29C8.53.11 8.28 0 8 0s-.53.11-.71.29l-7 7a1.003 1.003 0 001.42 1.42L8 2.41l6.29 6.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71z'
          ],
          'horizontal-bar-chart': [
            'M4 5h7c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1zM1 1c-.55 0-1 .45-1 1v13c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1zm14 6H4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm-6 5H4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1z'
          ],
          'horizontal-bar-chart-asc': [
            'M1 3h5c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm0 4h7c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm14 6H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM1 11h10c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1z'
          ],
          'horizontal-bar-chart-desc': [
            'M15 1H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM8 9H1c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1zm-2 4H1c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1zm5-8H1c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'horizontal-distribution': [
            'M2 0c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zm13 0c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zm-5 2H7c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1z'
          ],
          'id-number': [
            'M2 5v7h12V5H2zm0-2h12c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2z',
            'M7.9 10.48c-.14-.33-.84-.55-1.3-.75-.46-.2-.4-.33-.42-.5v-.07c.16-.14.29-.33.37-.56 0 0 0-.01.01-.02.02-.05.03-.1.05-.15.1-.01.16-.13.19-.23.03-.04.07-.15.06-.27-.02-.16-.08-.24-.15-.26v-.03c0-.2-.02-.48-.05-.67-.01-.05-.02-.1-.03-.16-.07-.23-.21-.44-.4-.58-.2-.15-.48-.23-.73-.23s-.53.08-.72.23c-.19.14-.33.35-.4.58-.02.05-.03.1-.03.16-.05.18-.06.47-.06.67v.03c-.07.03-.14.1-.15.26-.02.12.03.22.06.27.02.1.09.22.2.24.01.05.03.1.05.15v.01c.08.23.22.42.38.56v.07c-.02.17.03.29-.43.5-.46.2-1.16.42-1.3.75s-.09.52-.09.52H8c-.01 0 .05-.19-.1-.52zM10 6h2c.55 0 1 .45 1 1s-.45 1-1 1h-2c-.55 0-1-.45-1-1s.45-1 1-1zM10 9h2c.55 0 1 .45 1 1s-.45 1-1 1h-2c-.55 0-1-.45-1-1s.45-1 1-1z'
          ],
          'image-rotate-left': [
            'M13 2h-1.59l.29-.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-2 2C8.11 2.47 8 2.72 8 3c0 .28.11.53.29.71l2 2a1.003 1.003 0 001.42-1.42l-.3-.29H13c.55 0 1 .45 1 1v3c0 .55.45 1 1 1s1-.45 1-1V5c0-1.66-1.34-3-3-3zm-5.5 9c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM10 7H1c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm-1 6.33L7 12l-1 1-2-3-2 2.67V9h7v4.33z'
          ],
          'image-rotate-right': [
            'M5.71 5.71l2-2C7.89 3.53 8 3.28 8 3c0-.28-.11-.53-.29-.71l-2-2a1.003 1.003 0 00-1.42 1.42l.3.29H3C1.34 2 0 3.34 0 5v3c0 .55.45 1 1 1s1-.45 1-1V5c0-.55.45-1 1-1h1.59l-.3.29a1.003 1.003 0 001.42 1.42zM12.5 11c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM15 7H6c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm-1 6.33L12 12l-1 1-2-3-2 2.67V9h7v4.33z'
          ],
          import: [
            'M7.29 11.71c.18.18.43.29.71.29s.53-.11.71-.29l4-4a1.003 1.003 0 00-1.42-1.42L9 8.59V1c0-.55-.45-1-1-1S7 .45 7 1v7.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l4 4zM15 11c-.55 0-1 .45-1 1v2H2v-2c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1z'
          ],
          inbox: [
            'M13.91 2.6c-.16-.36-.51-.61-.92-.61h-10c-.41 0-.77.25-.92.61L-.01 7.45v5.54c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V7.45L13.91 2.6zm-1.92 5.39c-.55 0-1 .45-1 1v1h-6v-1c0-.55-.45-1-1-1H1.94l1.71-4h8.68l1.71 4h-2.05z'
          ],
          'inbox-filtered': [
            'M6.432 2c.094.14.202.273.324.394L8.42 4H3.66L1.95 8H4c.55 0 1 .45 1 1v1h6.557c.693 0 1.363-.262 1.837-.736l.103-.102.85-1.14a2.564 2.564 0 00.623-1.682V5.058L16 7.46V13c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V7.46l2.08-4.85C2.23 2.25 2.59 2 3 2h3.432zm9.048-2c.31 0 .52.26.52.57 0 .16-.06.3-.17.41l-2.86 2.73v2.63c0 .16-.06.3-.17.41l-.82 1.1c-.1.1-.25.17-.41.17-.31 0-.57-.26-.57-.57V3.71L8.17.98A.566.566 0 018 .57c0-.31.26-.57.57-.57h6.91z'
          ],
          'inbox-geo': [
            'M6.341 2A5.99 5.99 0 006 4H3.66L1.95 8H4c.55 0 1 .45 1 1v1h7a5.978 5.978 0 004-1.528V13c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V7.46l2.08-4.85C2.23 2.25 2.59 2 3 2h3.341zm3.679 2.145c0-.125.075-.23.205-.225h.345l.79.8c.005 0 0 .005 0 .005v.295c0 .13-.085.23-.215.23h-.07v.15c0 .13-.09.2-.215.2v.535c0 .125-.12.225-.245.225s-.245-.1-.245-.225V5.25h-.145c-.125 0-.205-.1-.205-.23v-.875zm2.235-2.195c-.03 0-.055-.005-.06-.035 0-.03.03-.035.06-.035h.11c.035 0 .06.005.06.035 0 .03-.03.035-.06.035h-.11zm-1.165-.025a.094.094 0 01-.13 0l-.25-.25a.094.094 0 010-.13.094.094 0 01.13 0l.25.25a.094.094 0 010 .13zm1.53.445c-.035 0-.07-.025-.07-.06v-.155c0-.03.035-.06.07-.06s.07.025.07.06v.155c0 .03-.035.06-.07.06zM12 0c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 7c1.655 0 3-1.345 3-3 0-.195-.02-.39-.06-.575h-.21c-.125 0-.225-.07-.23-.21h-.215c.075.07.155.14.155.23V3.9c0 .06-.04.115-.075.155h-.015l-.01.005-.015.01-.445.43v.815c0 .13-.07.22-.2.22h-.36c-.125 0-.21-.09-.21-.22v-.84a.627.627 0 00-.36-.345h-.45c-.13 0-.245-.095-.245-.225v-.46c0-.125.115-.23.245-.23l.13-.005.21-.215c.09-.09.24-.09.33 0l.22.225h.47c.105 0 .155-.105.225-.21v-.075h-.205a.106.106 0 01-.105-.105.11.11 0 01.105-.105h.18l.025.005v-.12s-.03-.025-.04-.025h-.2l-.045.05a.235.235 0 01-.33.005l-.045-.06h-.115l.16.175c.015.015.015.06 0 .075-.02.015-.045.02-.06.005l-.195-.185h-.085l-.245.23-.02-.005c-.025.07-.06.055-.095.055-.085 0-.15-.045-.15-.13s.065-.14.15-.14h.115v-.125c0-.06.04-.09.1-.09h.05V2.36c0-.095.095-.2.19-.2h.19c.105 0 .18-.075.18-.185V1.94c0-.015.035.01.035-.06h-.125l-.005.01-.21.22a.085.085 0 01-.115 0 .085.085 0 010-.115l.255-.255c.02-.015.045-.015.065-.015.005 0 .005.015.005.015h.64a2.327 2.327 0 00-.355-.275 2.452 2.452 0 00-.355-.195c-.03-.015-.055-.03-.08-.04a3.025 3.025 0 00-1.735-.175c-.09.02-.175.055-.265.08-.09.03-.18.05-.265.085-.075.03-.145.07-.22.105-.115.06-.235.115-.34.185l-.005.005c-.1.065-.18.145-.27.22h.455c.06 0 .11.045.11.105s-.05.105-.11.105h-.32c0 .07-.025.04-.025.045v.24h.285l.15-.17c.09-.09.235-.105.325-.015.09.09.09.23 0 .32l-.795.79-.01.01c-.005 0-.005 0-.01.005l-.025.015h-.01a.235.235 0 01-.12.025h-.23c-.08.07-.125.1-.125.18v.06c0 .01-.02.02-.02.03l.375.39c.04.04.04.1 0 .14-.04.04-.1.04-.14 0l-.39-.385a.213.213 0 01-.055.01c-.105 0-.195-.085-.195-.185v-.235h-.055A3.1 3.1 0 009 4c0 1.655 1.345 3 3 3zm2.27-2.135c.05 0 .105.04.105.09v.285c0 .05-.055.09-.105.09-.05 0-.105-.04-.105-.09v-.285c0-.05.055-.09.105-.09zm-2.085-3.27c0 .13-.105.21-.225.21h-.25v.07c0 .075-.03.135-.105.135s-.105-.06-.105-.135V1.64c-.075-.02-.025-.025-.025-.04 0-.125.085-.215.21-.215h.27c.13 0 .23.085.23.21z'
          ],
          'inbox-search': [
            'M5.639 2a5.391 5.391 0 00-.144 2H3.66L1.95 8H4c.55 0 1 .45 1 1v1h6V9c0-.088.012-.174.033-.255.12-.007.238-.019.39-.038.154-.008.252-.03.442-.077a5.34 5.34 0 00.24-.05h.05l.122-.04 1.266 1.271c.425.47 1.116.769 1.847.769.21 0 .414-.025.61-.071V13c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V7.46l2.08-4.85C2.23 2.25 2.59 2 3 2h2.639zM15.82 7.53c.1.12.17.27.18.44 0 .34-.27.61-.61.61a.57.57 0 01-.43-.18l-2.24-2.25c-.13.08-.26.16-.4.23-.02.01-.05.02-.07.03-.14.06-.27.12-.42.17h-.01c-.14.05-.29.08-.44.11-.04.01-.08.02-.11.02-.15.02-.3.04-.46.04-1.85 0-3.35-1.51-3.35-3.37S8.96.01 10.81 0c1.85 0 3.35 1.51 3.35 3.37 0 .16-.02.31-.04.47-.01.04-.01.07-.02.11-.02.15-.05.29-.1.44v.01c-.05.15-.11.28-.17.42-.01.02-.02.05-.03.07-.07.14-.14.27-.23.4l2.25 2.24zm-5.01-1.94c1.22 0 2.21-.99 2.21-2.22 0-1.23-.99-2.22-2.21-2.22S8.6 2.14 8.6 3.37c0 1.22.99 2.22 2.21 2.22z'
          ],
          'inbox-update': [
            'M8.1 2a5.023 5.023 0 000 2H3.66L1.95 8H4c.55 0 1 .45 1 1v1h6V9c0-.55.45-1 1-1h2.05c.708 0 1.352-.241 1.905-.645L16 7.46V13c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V7.46l2.08-4.85C2.23 2.25 2.59 2 3 2h5.1zM13 6a3 3 0 110-6 3 3 0 010 6z'
          ],
          'info-sign': [
            'M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zM7 3h2v2H7V3zm3 10H6v-1h1V7H6V6h3v6h1v1z'
          ],
          inheritance: [
            'M5 8c0 1.66 1.34 3 3 3h4.59L11.3 9.71A.965.965 0 0111 9a1.003 1.003 0 011.71-.71l3 3c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-3 3a1.003 1.003 0 01-1.42-1.42l1.3-1.29H8c-2.76 0-5-2.24-5-5H1a1 1 0 01-1-1V1a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5zM2 2v4h4V2H2z'
          ],
          'inherited-group': [
            'M1 7c.51 0 .935.388.993.884L2 8v3c0 .51.388.935.884.993L3 12h1.59l-.3-.29a1.003 1.003 0 011.324-1.504l.096.084 2 2c.18.18.29.43.29.71 0 .233-.076.446-.206.614l-.084.096-2 2A1.003 1.003 0 014 15c0-.24.08-.458.224-.629l.076-.081.29-.29H3a2.996 2.996 0 01-2.995-2.823L0 11V8c0-.55.45-1 1-1zm5.388-7c.629 0 1.338.21 1.838.6.48.38.85.91 1.019 1.52.04.13.07.27.09.4.09.48.14 1.22.14 1.73v.07c.18.08.34.27.37.67.03.32-.09.59-.16.71-.06.28-.21.58-.48.63-.03.13-.07.26-.12.39 0 .01-.01.04-.01.04-.22.58-.55 1.08-.949 1.45v.18c.04.45-.12.77 1.059 1.3 1.179.53 2.947 1.09 3.307 1.95.37.86.22 1.36.22 1.36H9c0-.539-.21-1.045-.583-1.417l-2-2A1.997 1.997 0 005 9c-.149 0-.296-.015-.442-.045.099-.19.082-.37.101-.575 0-.05.01-.11.01-.17-.41-.35-.75-.86-.969-1.45v-.01s-.01-.01-.01-.02c-.04-.12-.09-.26-.12-.39-.28-.05-.44-.36-.5-.64-.06-.12-.19-.39-.16-.71.04-.41.21-.6.39-.68v-.06c0-.51.05-1.26.14-1.74.02-.13.05-.27.09-.4.17-.6.54-1.13 1.02-1.51C5.048.21 5.757 0 6.387 0zm4.625 2.04c.49 0 1.05.16 1.439.46.38.29.67.7.8 1.17.03.1.05.21.07.31.07.37.11.94.11 1.33v.05c.139.06.269.21.289.51.02.25-.07.45-.13.54-.05.21-.16.44-.38.48a1.711 1.711 0 01-.1.33c-.17.44-.43.83-.749 1.11v.14c.03.35-.09.59.83 1 .929.41 2.317.84 2.597 1.5.29.66.17 1.04.17 1.04H13.66v.01c-.05-.24-.14-.5-.25-.76-.36-.86-1.119-1.33-2.687-2-.14-.06-.59-.25-.6-.25-.21-.09-.36-.15-.5-.22.02-.1.02-.2.03-.31 0-.04.01-.08.01-.13-.07-.06-.13-.12-.19-.19.22-.32.4-.67.54-1.05.02-.06.02-.06.03-.1.29-.23.48-.57.59-.96.16-.33.25-.73.21-1.16-.03-.4-.16-.76-.37-1.03-.02-.53-.07-1.13-.15-1.54-.01-.06-.02-.12-.03-.19.23-.06.48-.09.72-.09z'
          ],
          'inner-join': [
            'M6.6 3.3C5.3 4.4 4.5 6.1 4.5 8s.8 3.6 2.1 4.7c-.5.2-1 .3-1.6.3-2.8 0-5-2.2-5-5s2.2-5 5-5c.6 0 1.1.1 1.6.3zm-1.96 8.68C3.92 10.83 3.5 9.46 3.5 8s.42-2.83 1.14-3.98C2.6 4.2 1 5.91 1 8s1.6 3.8 3.64 3.98zM8 4c-1.2.9-2 2.4-2 4s.8 3.1 2 4c1.2-.9 2-2.3 2-4s-.8-3.1-2-4zm3-1c2.8 0 5 2.2 5 5s-2.2 5-5 5c-.6 0-1.1-.1-1.6-.3 1.3-1.1 2.1-2.9 2.1-4.7s-.8-3.5-2.1-4.7c.5-.2 1-.3 1.6-.3zm.35 1.02c.73 1.15 1.14 2.52 1.14 3.98s-.42 2.83-1.14 3.98c2.04-.18 3.64-1.9 3.64-3.98s-1.6-3.8-3.64-3.98z'
          ],
          insert: [
            'M5 9h2v2c0 .6.4 1 1 1s1-.4 1-1V9h2c.6 0 1-.4 1-1s-.4-1-1-1H9V5c0-.6-.4-1-1-1s-1 .4-1 1v2H5c-.6 0-1 .4-1 1s.4 1 1 1zm10-9H1C.4 0 0 .4 0 1v14c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1zm-1 14H2V2h12v12z'
          ],
          intersection: [
            'M10 3c-.92 0-1.76.26-2.5.69C6.76 3.26 5.92 3 5 3 2.24 3 0 5.24 0 8s2.24 5 5 5c.92 0 1.76-.26 2.5-.69.74.43 1.58.69 2.5.69 2.76 0 5-2.24 5-5s-2.24-5-5-5zm-4.1 7.85c-.29.09-.59.15-.9.15-1.66 0-3-1.34-3-3s1.34-3 3-3c.31 0 .61.06.9.15C5.33 5.96 5 6.94 5 8s.33 2.04.9 2.85zM10 11c-.31 0-.61-.06-.9-.15.57-.81.9-1.79.9-2.85s-.33-2.04-.9-2.85c.29-.09.59-.15.9-.15 1.66 0 3 1.34 3 3s-1.34 3-3 3z'
          ],
          'ip-address': [
            'M5 2.66C5 4.14 8 8 8 8s3-3.86 3-5.34C10.99 1.2 9.66 0 8 0S5 1.2 5 2.66zM7 3c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zM10.5 10H8v5h1v-4h1v1H9v1h2v-3h-.5zM2 9h12c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1H2c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1zm4 1v5h1v-5H6z'
          ],
          issue: [
            'M8 16A8 8 0 118 0a8 8 0 010 16zm0-2A6 6 0 108 2a6 6 0 000 12zm1-2H7v-2h2v2zm0-3H7V4h2v5z'
          ],
          'issue-closed': [
            'M9.296.104a2.99 2.99 0 00-1.003.664 2.987 2.987 0 00-.75 1.25 6 6 0 106.28 4.527c.043-.039.085-.079.127-.12l1.456-1.456A8 8 0 119.296.105zm2.532 5.2a.997.997 0 01-.707-.294L9.707 3.596a1 1 0 011.414-1.414l.707.707 1.768-1.768a1 1 0 111.414 1.415L12.536 5.01a.997.997 0 01-.708.293zM9 12H7v-2h2v2zm0-3H7V4h2v5z'
          ],
          'issue-new': [
            'M10.568.421c-.01.04-.018.08-.026.121-.837.156-1.53.73-1.85 1.497a6 6 0 105.27 5.273 2.51 2.51 0 001.496-1.854c.04-.008.081-.016.121-.026A8 8 0 1110.568.421zM9 12H7v-2h2v2zm0-3H7V4h2v5zm1-6c0-.55.45-1 1-1h1V1c0-.55.45-1 1-1s1 .45 1 1v1h1c.55 0 1 .45 1 1s-.45 1-1 1h-1v1.005c0 .55-.45 1-1 1s-1-.45-1-1V4h-1c-.55 0-1-.45-1-1z'
          ],
          italic: [
            'M9.8 4H11c.5 0 1-.4 1-1s-.4-1-1-1H7c-.5 0-1 .4-1 1s.4 1 1 1h.8l-1.6 8H5c-.5 0-1 .4-1 1s.4 1 1 1h4c.5 0 1-.4 1-1s-.4-1-1-1h-.8l1.6-8z'
          ],
          'join-table': [
            'M15 5h-3V2c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h3v3c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-5-1v2H6V4h4zm0 6H6V7h4v3zM2 4h3v2H2V4zm0 5V7h3v2H2zm4 4v-2h4v2H6zm8 0h-3v-2h3v2zm0-3h-3V8h3v2z'
          ],
          key: [
            'M11 0C8.24 0 6 2.24 6 5c0 1.02.31 1.96.83 2.75L.29 14.29a1.003 1.003 0 001.42 1.42L3 14.41l1.29 1.29c.18.19.43.3.71.3s.53-.11.71-.29l2-2c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71L6.41 11l1.83-1.83c.8.52 1.74.83 2.76.83 2.76 0 5-2.24 5-5s-2.24-5-5-5zm0 8c-.23 0-.45-.03-.66-.08-.01 0-.02-.01-.03-.01-.21-.05-.41-.12-.6-.21a3.014 3.014 0 01-1.62-2c0-.01-.01-.02-.01-.03C8.03 5.45 8 5.23 8 5c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3z'
          ],
          'key-backspace': [
            'M15 2H6c-.28 0-.53.11-.71.29l-5 5C.11 7.47 0 7.72 0 8c0 .28.11.53.29.71l5 5c.18.18.43.29.71.29h9c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-2.29 7.29a1.003 1.003 0 01-1.42 1.42L10 9.41 8.71 10.7c-.18.19-.43.3-.71.3a1.003 1.003 0 01-.71-1.71L8.59 8l-1.3-1.29a1.003 1.003 0 011.42-1.42L10 6.59l1.29-1.29c.18-.19.43-.3.71-.3a1.003 1.003 0 01.71 1.71L11.41 8l1.3 1.29z'
          ],
          'key-command': [
            'M12 9h-1V7h1c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3v1H7V4c0-1.66-1.34-3-3-3S1 2.34 1 4s1.34 3 3 3h1v2H4c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3v-1h2v1c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3zm0-6c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM4 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 4H7V7h2v2zm3 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z'
          ],
          'key-control': [
            'M12.71 5.29l-4-4C8.53 1.11 8.28 1 8 1s-.53.11-.71.29l-4 4a1.003 1.003 0 001.42 1.42L8 3.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71z'
          ],
          'key-delete': [
            'M15.71 7.29l-5-5A.997.997 0 0010 2H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h9c.28 0 .53-.11.71-.29l5-5c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71zm-7 2a1.003 1.003 0 01-1.42 1.42L6 9.41 4.71 10.7c-.18.19-.43.3-.71.3a1.003 1.003 0 01-.71-1.71L4.59 8l-1.3-1.29a1.003 1.003 0 011.42-1.42L6 6.59 7.29 5.3c.18-.19.43-.3.71-.3a1.003 1.003 0 01.71 1.71L7.41 8l1.3 1.29z'
          ],
          'key-enter': [
            'M14 2c-.55 0-1 .45-1 1v3c0 1.66-1.34 3-3 3H4.41L5.7 7.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-3 3c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l3 3a1.003 1.003 0 001.42-1.42L4.41 11H10c2.76 0 5-2.24 5-5V3c0-.55-.45-1-1-1z'
          ],
          'key-escape': [
            'M2 7c.55 0 1-.45 1-1V4.41L7.29 8.7c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L4.41 3H6c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm7-5.9v2A5 5 0 113.1 9h-2c.49 3.39 3.38 6 6.9 6 3.87 0 7-3.13 7-7 0-3.52-2.61-6.41-6-6.9z'
          ],
          'key-option': [
            'M11 4h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1s.45 1 1 1zm4 8h-3.43L5.86 2.49h-.02A.975.975 0 005 2H1c-.55 0-1 .45-1 1s.45 1 1 1h3.43l5.71 9.51.01-.01c.18.3.49.5.85.5h4c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'key-shift': [
            'M13.71 7.29l-5-5C8.53 2.11 8.28 2 8 2s-.53.11-.71.29l-5 5A1.003 1.003 0 003 9h2v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V9h2a1.003 1.003 0 00.71-1.71z'
          ],
          'key-tab': [
            'M15 10H4.41L5.7 8.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L2 9.59V8c0-.55-.45-1-1-1s-1 .45-1 1v6c0 .55.45 1 1 1s1-.45 1-1v-1.59l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L4.41 12H15c.55 0 1-.45 1-1s-.45-1-1-1zm0-9c-.55 0-1 .45-1 1v1.59L11.71 1.3A.965.965 0 0011 1a1.003 1.003 0 00-.71 1.71L11.59 4H1c-.55 0-1 .45-1 1s.45 1 1 1h10.59L10.3 7.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L14 6.41V8c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1z'
          ],
          'known-vehicle': [
            'M15 3a.997.997 0 00-.707.293L12 5.586l-1.293-1.293a1 1 0 10-1.414 1.414l2 2a.997.997 0 001.414 0l3-3A1 1 0 0015 3zm-.879 6.121l-.007-.007c-.313.309-.69.552-1.114.702V10h-.998H12h-1v-.184c-.424-.15-.8-.395-1.112-.704l-.01.01-2-2 .012-.012A2.978 2.978 0 017.184 6H3c-.176 0-.06-.824 0-1l.73-1.63C3.79 3.192 3.823 3 4 3H7.78C8.328 2.39 9.115 2 10 2c.768 0 1.461.293 1.987.77l.844-.844c-.238-.244-.524-.442-.794-.524C12.037 1.402 10.72 1 8 1c-2.72 0-4.037.402-4.037.402-.508.155-1.078.711-1.268 1.237l-.763 2.117H.88c-.484 0-.88.423-.88.939s.396.939.88.939h.375L1 7c-.034.685 0 1.436 0 2v5c0 .657.384 1 1 1s1-.343 1-1v-1h10v1c0 .657.384 1 1 1s1-.343 1-1V9l-.003-.754-.876.875zM5.001 10H3V8h2v2z'
          ],
          'lab-test': [
            'M11 1a1 1 0 010 2v3l3 7v1.25a.75.75 0 01-.75.75H2.75a.75.75 0 01-.75-.75V13l3-7V3a1 1 0 110-2h6zM9 3H7v3l-1.714 4h5.428L9 6V3z'
          ],
          label: [
            'M11 2H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V7l-5-5zm3 10H2V4h8v2H3v1h7v1h4v4zm-3-5V4l3 3h-3zm-8 3h10V9H3v1z'
          ],
          layer: [
            'M16 8c0-.37-.21-.68-.51-.85l.01-.01-7-4-.01.01C8.34 3.06 8.18 3 8 3s-.34.06-.49.15l-.01-.02-7 4 .01.01C.21 7.32 0 7.63 0 8s.21.68.51.85l-.01.01 7 4 .01-.01c.15.09.31.15.49.15s.34-.06.49-.15l.01.01 7-4-.01-.01c.3-.17.51-.48.51-.85z'
          ],
          layers: [
            'M.55 4.89l7 3.5c.14.07.29.11.45.11s.31-.04.45-.11l7-3.5a.998.998 0 00-.06-1.81L8.4.08a1.006 1.006 0 00-.79 0l-6.99 3a.992.992 0 00-.07 1.81zM15 10c-.16 0-.31.04-.45.11L8 13.38 1.45 10.1c-.14-.06-.29-.1-.45-.1-.55 0-1 .45-1 1 0 .39.23.73.55.89l7 3.5c.14.07.29.11.45.11s.31-.04.45-.11l7-3.5c.32-.16.55-.5.55-.89 0-.55-.45-1-1-1zm0-3.5c-.16 0-.31.04-.45.11L8 9.88 1.45 6.61A.997.997 0 001 6.5c-.55 0-1 .45-1 1 0 .39.23.73.55.89l7 3.5c.14.07.29.11.45.11s.31-.04.45-.11l7-3.5c.32-.16.55-.5.55-.89 0-.55-.45-1-1-1z'
          ],
          layout: [
            'M14 4c-1.1 0-2 .9-2 2 0 .47.17.9.44 1.24l-.68.91A1.996 1.996 0 009.07 9.5H7.93C7.71 8.64 6.93 8 6 8c-.47 0-.9.17-1.24.44l-.91-.68c.1-.23.15-.49.15-.76 0-.37-.11-.71-.28-1.01l2.27-2.27c.3.17.64.28 1.01.28 1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .37.11.71.28 1.01L3.01 5.28C2.71 5.11 2.37 5 2 5 .9 5 0 5.9 0 7s.9 2 2 2c.47 0 .9-.17 1.24-.44l.91.68c-.1.23-.15.49-.15.76 0 .37.11.71.28 1.01l-1.27 1.27C2.71 12.11 2.37 12 2 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2c0-.37-.11-.71-.28-1.01l1.27-1.27c.3.17.64.28 1.01.28.93 0 1.71-.64 1.93-1.5h1.14c.22.86 1 1.5 1.93 1.5 1.1 0 2-.9 2-2 0-.47-.17-.9-.44-1.24l.68-.91c.23.1.49.15.76.15 1.1 0 2-.9 2-2s-.9-2-2-2z'
          ],
          'layout-auto': [
            'M14 9.5c-.56 0-1.06.23-1.42.59L8.99 8l3.59-2.09A2.002 2.002 0 0016 4.5c0-1.1-.9-2-2-2s-2 .9-2 2c0 .19.03.37.08.54L8.5 7.13v-3.2c.86-.22 1.5-1 1.5-1.93 0-1.1-.9-2-2-2S6 .9 6 2c0 .93.64 1.71 1.5 1.93v3.2L3.92 5.04c.05-.17.08-.35.08-.54 0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2c.56 0 1.06-.23 1.42-.59L7.01 8l-3.59 2.09A2.002 2.002 0 000 11.5c0 1.1.9 2 2 2s2-.9 2-2c0-.19-.03-.37-.08-.54L7.5 8.87v3.2c-.86.22-1.5 1-1.5 1.93 0 1.1.9 2 2 2s2-.9 2-2c0-.93-.64-1.71-1.5-1.93v-3.2l3.58 2.09c-.05.17-.08.35-.08.54 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2z'
          ],
          'layout-balloon': [
            'M14 11c-.2 0-.38.04-.56.09L12.42 9.4c.36-.36.58-.85.58-1.4 0-.55-.22-1.04-.58-1.4l1.01-1.69c.19.05.37.09.57.09 1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .55.22 1.04.58 1.4l-1.01 1.69C11.38 6.04 11.2 6 11 6c-.93 0-1.71.64-1.93 1.5H6.93C6.71 6.64 5.93 6 5 6c-.2 0-.38.04-.56.09L3.42 4.4C3.78 4.04 4 3.55 4 3c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2c.2 0 .38-.04.56-.09L3.58 6.6C3.22 6.96 3 7.45 3 8c0 .55.22 1.04.58 1.4l-1.01 1.69C2.38 11.04 2.2 11 2 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2c0-.55-.22-1.04-.58-1.4l1.01-1.69c.19.05.37.09.57.09.93 0 1.71-.64 1.93-1.5h2.14c.22.86 1 1.5 1.93 1.5.2 0 .38-.04.56-.09l1.01 1.69c-.35.36-.57.85-.57 1.4 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2z'
          ],
          'layout-circle': [
            'M14.16 6.02c-.12-.36-.26-.7-.43-1.03.17-.29.27-.63.27-.99 0-1.1-.9-2-2-2-.36 0-.7.1-.99.27-.33-.17-.67-.31-1.03-.43A1.987 1.987 0 008 0C6.95 0 6.1.81 6.02 1.84c-.36.12-.7.26-1.03.43C4.7 2.1 4.36 2 4 2c-1.1 0-2 .9-2 2 0 .36.1.7.27.99-.17.33-.31.67-.43 1.03C.81 6.1 0 6.95 0 8c0 1.05.81 1.9 1.84 1.98.12.36.26.7.43 1.03-.17.29-.27.63-.27.99 0 1.1.9 2 2 2 .36 0 .7-.1.99-.27.33.17.67.32 1.03.43C6.1 15.19 6.95 16 8 16c1.05 0 1.9-.81 1.98-1.84.36-.12.7-.26 1.03-.43.29.17.63.27.99.27 1.1 0 2-.9 2-2 0-.36-.1-.7-.27-.99.17-.33.31-.67.43-1.03C15.19 9.9 16 9.05 16 8c0-1.05-.81-1.9-1.84-1.98zm-.99 3.79c-.05.16-.11.31-.17.46-.3-.17-.64-.27-1-.27-1.1 0-2 .9-2 2 0 .36.1.7.27 1-.15.07-.3.12-.46.17C9.5 12.48 8.81 12 8 12s-1.5.48-1.81 1.17c-.16-.06-.32-.11-.46-.17.17-.3.27-.64.27-1 0-1.1-.9-2-2-2-.36 0-.7.1-1 .27-.07-.15-.12-.3-.17-.46C3.52 9.5 4 8.81 4 8s-.48-1.5-1.17-1.81c.06-.16.11-.32.17-.46.3.17.64.27 1 .27 1.1 0 2-.9 2-2 0-.36-.1-.7-.27-1 .15-.07.3-.12.46-.17C6.5 3.52 7.19 4 8 4s1.5-.48 1.81-1.17c.16.06.32.11.46.17-.17.3-.27.64-.27 1 0 1.1.9 2 2 2 .36 0 .7-.1 1-.27.07.15.12.3.17.46C12.48 6.5 12 7.19 12 8s.48 1.5 1.17 1.81z'
          ],
          'layout-grid': [
            'M2 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM8 0C6.9 0 6 .9 6 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM8 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
          ],
          'layout-group-by': [
            'M2 6C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM2 1C.9 1 0 1.9 0 3s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm5 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
          ],
          'layout-hierarchy': [
            'M14.5 12.07V9.93c.86-.22 1.5-1 1.5-1.93 0-1.1-.9-2-2-2-.93 0-1.71.64-1.93 1.5H9.93c-.18-.7-.73-1.25-1.43-1.43V3.93c.86-.22 1.5-1 1.5-1.93 0-1.1-.9-2-2-2S6 .9 6 2c0 .93.64 1.71 1.5 1.93v2.14c-.7.18-1.25.73-1.43 1.43H3.93C3.71 6.64 2.93 6 2 6 .9 6 0 6.9 0 8c0 .93.64 1.71 1.5 1.93v2.14c-.86.22-1.5 1-1.5 1.93 0 1.1.9 2 2 2s2-.9 2-2c0-.93-.64-1.71-1.5-1.93V9.93c.7-.18 1.25-.73 1.43-1.43h2.14c.18.7.73 1.25 1.43 1.43v2.14c-.86.22-1.5 1-1.5 1.93 0 1.1.9 2 2 2s2-.9 2-2c0-.93-.64-1.71-1.5-1.93V9.93c.7-.18 1.25-.73 1.43-1.43h2.14c.18.7.73 1.25 1.43 1.43v2.14c-.86.22-1.5 1-1.5 1.93 0 1.1.9 2 2 2s2-.9 2-2c0-.93-.64-1.71-1.5-1.93z'
          ],
          'layout-linear': [
            'M14 6c-.93 0-1.71.64-1.93 1.5H9.93C9.71 6.64 8.93 6 8 6s-1.71.64-1.93 1.5H3.93C3.71 6.64 2.93 6 2 6 .9 6 0 6.9 0 8s.9 2 2 2c.93 0 1.71-.64 1.93-1.5h2.13C6.29 9.36 7.07 10 8 10s1.71-.64 1.93-1.5h2.13c.22.86 1 1.5 1.93 1.5 1.1 0 2-.9 2-2C16 6.9 15.1 6 14 6z'
          ],
          'layout-skew-grid': [
            'M2 6C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM2 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM2 0C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 9c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6-3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM8 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 9c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
          ],
          'layout-sorted-clusters': [
            'M2 6C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM2 0C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM8 9c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
          ],
          learning: [
            'M8.441 1.104a.985.985 0 00-.882 0L.365 5c-.487.253-.487.747 0 1L7.56 9.896a.985.985 0 00.882 0L15.635 6c.487-.253.487-.747 0-1L8.44 1.104z',
            'M14 5.5l.016 4.514c.002.548.447.99.994.99a.99.99 0 00.99-.99V5.5h-2zM3.371 9.047l4.387 2.432a.5.5 0 00.485 0l4.39-2.432a.25.25 0 01.371.218v2.955a.25.25 0 01-.134.222l-4.635 2.436a.5.5 0 01-.466 0l-4.635-2.436A.25.25 0 013 12.22V9.265a.25.25 0 01.371-.218z'
          ],
          'left-join': [
            'M6.6 3.3C6.1 3.1 5.6 3 5 3 2.2 3 0 5.2 0 8s2.2 5 5 5c.6 0 1.1-.1 1.6-.3C5.3 11.6 4.5 9.9 4.5 8s.8-3.6 2.1-4.7zM8 4c-1.2.9-2 2.4-2 4s.8 3.1 2 4c1.2-.9 2-2.3 2-4s-.8-3.1-2-4zm3-1c2.8 0 5 2.2 5 5s-2.2 5-5 5c-.6 0-1.1-.1-1.6-.3 1.3-1.1 2.1-2.9 2.1-4.7s-.8-3.5-2.1-4.7c.5-.2 1-.3 1.6-.3zm.35 1.02c.73 1.15 1.14 2.52 1.14 3.98s-.42 2.83-1.14 3.98c2.04-.18 3.64-1.9 3.64-3.98s-1.6-3.8-3.64-3.98z'
          ],
          'less-than': [
            'M13.287 5.958a1 1 0 00-.574-1.916l-10 3c-.95.285-.95 1.631 0 1.916l10 3a1 1 0 00.574-1.916L6.48 8l6.807-2.042z'
          ],
          'less-than-or-equal-to': [
            'M13.287 3.958a1 1 0 00-.575-1.916l-10 3c-.95.285-.95 1.63 0 1.916l10 3a1 1 0 00.575-1.916L6.48 6l6.807-2.042zM13 12H3a1 1 0 000 2h10a1 1 0 000-2z'
          ],
          lifesaver: [
            'M9.405 11.746C8.968 11.91 8.495 12 8 12c-.494 0-.968-.09-1.405-.254l-.702 1.873C6.548 13.865 7.258 14 8 14c.742 0 1.452-.135 2.107-.38l-.702-1.874zm2.341-2.341l1.873.702C13.865 9.452 14 8.742 14 8c0-.742-.135-1.452-.38-2.107l-1.874.702c.164.437.254.91.254 1.405 0 .494-.09.968-.254 1.405zM9.405 4.254l.702-1.873A5.987 5.987 0 008 2c-.742 0-1.452.135-2.107.38l.702 1.874C7.032 4.09 7.505 4 8 4c.494 0 .968.09 1.405.254zM4.254 6.595L2.38 5.893A5.987 5.987 0 002 8c0 .742.135 1.452.38 2.107l1.874-.702A3.991 3.991 0 014 8c0-.494.09-.968.254-1.405zM8 16A8 8 0 118 0a8 8 0 010 16zm0-6a2 2 0 100-4 2 2 0 000 4z'
          ],
          lightbulb: [
            'M9.01 14h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1s-.44-1-1-1zm1-3h-4c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1s-.44-1-1-1zm-2-11C5.26 0 3.03 1.95 3.03 4.35c0 2.37 1.63 2.64 1.94 5.22 0 .24.22.44.5.44h5.09c.28 0 .5-.19.5-.44C11.37 6.99 13 6.72 13 4.35 13 1.95 10.77 0 8.01 0z'
          ],
          link: [
            'M4.99 11.99c.28 0 .53-.11.71-.29l6-6a1.003 1.003 0 00-1.42-1.42l-6 6a1.003 1.003 0 00.71 1.71zm3.85-2.02L6.4 12.41l-1 1-.01-.01c-.36.36-.85.6-1.4.6-1.1 0-2-.9-2-2 0-.55.24-1.04.6-1.4l-.01-.01 1-1 2.44-2.44c-.33-.1-.67-.16-1.03-.16-1.1 0-2.09.46-2.81 1.19l-.02-.02-1 1 .02.02c-.73.72-1.19 1.71-1.19 2.81 0 2.21 1.79 4 4 4 1.1 0 2.09-.46 2.81-1.19l.02.02 1-1-.02-.02c.73-.72 1.19-1.71 1.19-2.81 0-.35-.06-.69-.15-1.02zm7.15-5.98c0-2.21-1.79-4-4-4-1.1 0-2.09.46-2.81 1.19l-.02-.02-1 1 .02.02c-.72.72-1.19 1.71-1.19 2.81 0 .36.06.69.15 1.02l2.44-2.44 1-1 .01.01c.36-.36.85-.6 1.4-.6 1.1 0 2 .9 2 2 0 .55-.24 1.04-.6 1.4l.01.01-1 1-2.43 2.45c.33.09.67.15 1.02.15 1.1 0 2.09-.46 2.81-1.19l.02.02 1-1-.02-.02a3.92 3.92 0 001.19-2.81z'
          ],
          list: [
            'M1 3h14c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm14 10H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm0-4H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm0-4H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'list-columns': [
            'M6 1c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1s.45-1 1-1h5zm0 4c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1s.45-1 1-1h5zm0 4c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1s.45-1 1-1h5zm0 4c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1s.45-1 1-1h5zm9-12c.55 0 1 .45 1 1s-.45 1-1 1h-5c-.55 0-1-.45-1-1s.45-1 1-1h5zm0 4c.55 0 1 .45 1 1s-.45 1-1 1h-5c-.55 0-1-.45-1-1s.45-1 1-1h5zm0 4c.55 0 1 .45 1 1s-.45 1-1 1h-5c-.55 0-1-.45-1-1s.45-1 1-1h5zm0 4c.55 0 1 .45 1 1s-.45 1-1 1h-5c-.55 0-1-.45-1-1s.45-1 1-1h5z'
          ],
          'list-detail-view': [
            'M6 9H1c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1zm0 4H1c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1zm9-12h-5c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM6 5H1c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1zm0-4H1c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          locate: [
            'M15 7h-.09A6.98 6.98 0 009 1.1V1c0-.55-.45-1-1-1S7 .45 7 1v.09A6.98 6.98 0 001.1 7H1c-.55 0-1 .45-1 1s.45 1 1 1h.1A6.969 6.969 0 007 14.91V15c0 .55.45 1 1 1s1-.45 1-1v-.09A6.98 6.98 0 0014.9 9h.1c.55 0 1-.45 1-1s-.45-1-1-1zm-6.02 5.9c-.05-.5-.46-.9-.98-.9s-.93.4-.98.9A5.017 5.017 0 013.1 8.98c.5-.05.9-.46.9-.98s-.4-.93-.9-.98A5.017 5.017 0 017.02 3.1c.05.5.46.9.98.9s.93-.4.98-.9c1.97.39 3.52 1.95 3.92 3.92-.5.05-.9.46-.9.98s.4.93.9.98a5.017 5.017 0 01-3.92 3.92zM8 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
          ],
          lock: [
            'M13.96 7H12V3.95C12 1.77 10.21 0 8 0S4 1.77 4 3.95V7H1.96c-.55 0-.96.35-.96.9v6.91c0 .54.41 1.19.96 1.19h12c.55 0 1.04-.65 1.04-1.19V7.9c0-.55-.49-.9-1.04-.9zM6 7V3.95c0-1.09.9-1.97 2-1.97s2 .88 2 1.97V7H6z'
          ],
          'log-in': [
            'M11 8c0-.28-.11-.53-.29-.71l-3-3a1.003 1.003 0 00-1.42 1.42L7.59 7H1c-.55 0-1 .45-1 1s.45 1 1 1h6.59L6.3 10.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71zm4-8H9c-.55 0-1 .45-1 1s.45 1 1 1h5v12H9c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z'
          ],
          'log-out': [
            'M7 14H2V2h5c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1zm8.71-6.71l-3-3a1.003 1.003 0 00-1.42 1.42L12.59 7H6c-.55 0-1 .45-1 1s.45 1 1 1h6.59l-1.29 1.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z'
          ],
          manual: [
            'M15.99 1.13c-.02-.41-.33-.77-.78-.87C12.26-.36 9.84.13 8 1.7 6.16.13 3.74-.36.78.26.33.35.03.72.01 1.13H0v12c0 .08 0 .17.02.26.12.51.65.82 1.19.71 2.63-.55 4.59-.04 6.01 1.57.02.03.06.04.08.06.02.02.03.04.05.06.04.03.09.04.13.07.05.03.09.05.14.07.11.04.23.07.35.07h.04c.12 0 .24-.03.35-.07.05-.02.09-.05.14-.07.04-.02.09-.04.13-.07.02-.02.03-.04.05-.06.03-.02.06-.03.08-.06 1.42-1.6 3.39-2.12 6.01-1.57.54.11 1.07-.21 1.19-.71.04-.09.04-.18.04-.26l-.01-12zM7 12.99c-1.4-.83-3.07-1.14-5-.93V1.96c2.11-.28 3.75.2 5 1.46v9.57zm7-.92c-1.93-.21-3.6.1-5 .93V3.42c1.25-1.26 2.89-1.74 5-1.46v10.11z'
          ],
          'manually-entered-data': [
            'M1 8h3.76l2-2H1c-.55 0-1 .45-1 1s.45 1 1 1zm14.49-4.01c.31-.32.51-.76.51-1.24C16 1.78 15.22 1 14.25 1c-.48 0-.92.2-1.24.51l-1.44 1.44 2.47 2.47 1.45-1.43zM1 4h7.76l2-2H1c-.55 0-1 .45-1 1s.45 1 1 1zm0 6c-.55 0-1 .45-1 1 0 .48.35.86.8.96L2.76 10H1zm9.95-6.43l-6.69 6.69 2.47 2.47 6.69-6.69-2.47-2.47zm4.25 2.47L13.24 8H15c.55 0 1-.45 1-1 0-.48-.35-.86-.8-.96zM2 15l3.86-1.39-2.46-2.44L2 15zm13-5h-3.76l-2 2H15c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          map: [
            'M15.55 3.17l-4.49-3A.975.975 0 009.99.15L5.53 2.82 1.56.17A1.003 1.003 0 000 1v11c0 .35.18.65.45.83l4.49 3a.975.975 0 001.07.02l4.46-2.67 3.97 2.65A1.003 1.003 0 0016 15V4c0-.35-.18-.65-.45-.83zM5 13.46l-3-2v-8.6l2.94 1.96c.02.02.04.03.06.04v8.6zm5-2.32s-.01 0-.01.01L6 13.53V4.86s.01 0 .01-.01L10 2.47v8.67zm4 1.99l-2.94-1.96c-.02-.01-.04-.02-.05-.03v-8.6l3 2v8.59z'
          ],
          'map-create': [
            'M14 6.82v6.32l-2.94-1.96c-.02-.01-.04-.02-.05-.03V6.22c-.08-.07-.15-.16-.22-.24-.28-.02-.54-.08-.79-.16v5.32s-.01 0-.01.01L6 13.53V4.86s.01 0 .01-.01l2.05-1.23C8.02 3.42 8 3.21 8 3c0-.98.47-1.84 1.2-2.39l-3.67 2.2L1.56.17A1.003 1.003 0 000 1v11c0 .35.18.65.45.83l4.49 3a.975.975 0 001.07.02l4.46-2.67 3.97 2.65A1.003 1.003 0 0016 15V5.82c-.25.09-.52.14-.8.16-.33.36-.73.67-1.2.84zm-9 6.64l-3-2v-8.6l2.94 1.96c.02.02.04.03.06.04v8.6zM11 4h1v1c0 .55.45 1 1 1s1-.45 1-1V4h1c.55 0 1-.45 1-1s-.45-1-1-1h-1V1c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1z'
          ],
          'map-marker': [
            'M8.46 0C5.42 0 2.95 2.39 2.95 5.33 2.95 8.28 8.46 16 8.46 16s5.51-7.72 5.51-10.67C13.96 2.39 11.5 0 8.46 0zm0 8a2.5 2.5 0 010-5 2.5 2.5 0 010 5z'
          ],
          maximize: [
            'M5.99 8.99c-.28 0-.53.11-.71.29l-3.29 3.29v-1.59c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1H3.41L6.7 10.7a1.003 1.003 0 00-.71-1.71zm9-9h-4c-.55 0-1 .45-1 1s.45 1 1 1h1.59l-3.3 3.3a.99.99 0 00-.29.7 1.003 1.003 0 001.71.71l3.29-3.29V5c0 .55.45 1 1 1s1-.45 1-1V1c0-.56-.45-1.01-1-1.01z'
          ],
          media: [
            'M11.99 6.99c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm3-5h-14c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-10c0-.55-.45-1-1-1zm-1 9l-5-3-1 2-3-4-3 5v-7h12v7z'
          ],
          menu: [
            'M1 4h14c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm14 8H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm0-5H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'menu-closed': [
            'M14.99 6.99h-9c-.55 0-1 .45-1 1s.45 1 1 1h9c.55 0 1-.45 1-1s-.45-1-1-1zm-12-2c-.28 0-.53.11-.71.29l-2 2a1.014 1.014 0 000 1.42l2 2a1.003 1.003 0 001.71-.71v-4c0-.55-.45-1-1-1zm3-1h9c.55 0 1-.45 1-1s-.45-1-1-1h-9c-.55 0-1 .45-1 1s.45 1 1 1zm9 8h-9c-.55 0-1 .45-1 1s.45 1 1 1h9c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'menu-open': [
            'M9.99 11.99h-9c-.55 0-1 .45-1 1s.45 1 1 1h9c.55 0 1-.45 1-1s-.45-1-1-1zm0-5h-9c-.55 0-1 .45-1 1s.45 1 1 1h9c.55 0 1-.45 1-1s-.45-1-1-1zm0-5h-9c-.55 0-1 .45-1 1s.45 1 1 1h9c.55 0 1-.45 1-1s-.45-1-1-1zm5.71 5.3l-2-2a1.003 1.003 0 00-1.71.71v4a1.003 1.003 0 001.71.71l2-2c.18-.18.29-.43.29-.71s-.11-.53-.29-.71z'
          ],
          'merge-columns': [
            'M5.71 5.29a1.003 1.003 0 00-1.42 1.42l.3.29H2V2h3v1.51c.52.06.99.29 1.34.65l.66.66V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-3.82l-.66.66c-.35.35-.82.59-1.34.65V14H2V9h2.59l-.3.29a1.003 1.003 0 001.42 1.42l2-2C7.89 8.53 8 8.28 8 8c0-.28-.11-.53-.29-.71l-2-2zM15 0h-5c-.55 0-1 .45-1 1v3.82l.66-.66c.35-.35.82-.59 1.34-.65V2h3v5h-2.59l.29-.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-2 2C8.11 7.47 8 7.72 8 8c0 .28.11.53.29.71l2 2a1.003 1.003 0 001.42-1.42l-.3-.29H14v5h-3v-1.51c-.52-.06-.99-.29-1.34-.65L9 11.18V15c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z'
          ],
          'merge-links': [
            'M8 7c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6 3c-.93 0-1.71.64-1.93 1.5H11V3c0-1.66-1.34-3-3-3S5 1.34 5 3v4.5H3.93C3.71 6.64 2.93 6 2 6 .9 6 0 6.9 0 8s.9 2 2 2c.93 0 1.71-.64 1.93-1.5H5V13c0 1.66 1.34 3 3 3s3-1.34 3-3V8.5h1.07c.22.86 1 1.5 1.93 1.5 1.1 0 2-.9 2-2s-.9-2-2-2zm-4 7c0 1.1-.9 2-2 2s-2-.9-2-2V3c0-1.1.9-2 2-2s2 .9 2 2v10z'
          ],
          minimize: [
            'M15.99.99a1.003 1.003 0 00-1.71-.71l-3.29 3.29V1.99c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1H12.4l3.3-3.29c.18-.18.29-.43.29-.71zm-10 8h-4c-.55 0-1 .45-1 1s.45 1 1 1h1.59L.29 14.28a1.003 1.003 0 001.42 1.42L5 12.41V14c0 .55.45 1 1 1s1-.45 1-1v-4a1.02 1.02 0 00-1.01-1.01z'
          ],
          minus: [
            'M13 7H3c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'mobile-phone': [
            'M12 0H4c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM8 15c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm3-3H5V3h6v9z'
          ],
          'mobile-video': [
            'M15 4c-.28 0-.53.11-.71.29L12 6.59V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V9.41l2.29 2.29c.18.19.43.3.71.3.55 0 1-.45 1-1V5c0-.55-.45-1-1-1z'
          ],
          modal: [
            'M15 1a1 1 0 011 1v12a1 1 0 01-1 1H1a1 1 0 01-1-1V2a1 1 0 011-1h14zm-1 4H2v8h12V5zm-3-3H9v2h2V2zm3 0h-2v2h2V2z'
          ],
          'modal-filled': [
            'M15 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm1 4H0V3h16v2zm-3-2h-2V1h2v2z'
          ],
          moon: [
            'M15 11.38A7.835 7.835 0 017.85 16C3.51 16 0 12.49 0 8.15 0 4.97 1.89 2.23 4.62 1c-.45.99-.7 2.08-.7 3.23a7.85 7.85 0 007.85 7.85c1.15 0 2.24-.25 3.23-.7z'
          ],
          more: [
            'M2 6.03a2 2 0 100 4 2 2 0 100-4zM14 6.03a2 2 0 100 4 2 2 0 100-4zM8 6.03a2 2 0 100 4 2 2 0 100-4z'
          ],
          mountain: [
            'M16 13H3l6-9h1l2 2h1l3 7zm-2.5-3.5l-1-2.5h-1l-2-2-3 4.5L9 8l1 1 1-1 2.5 1.5zM5.94 7l-4.122 6H0l5-6h.94z'
          ],
          move: [
            'M15.71 7.29l-2-2a1.003 1.003 0 00-1.42 1.42l.3.29H9V3.41l.29.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-2-2C8.53.11 8.28 0 8 0s-.53.11-.71.29l-2 2a1.003 1.003 0 001.42 1.42l.29-.3V7H3.41l.29-.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-2 2C.11 7.47 0 7.72 0 8c0 .28.11.53.29.71l2 2a1.003 1.003 0 001.42-1.42L3.41 9H7v3.59l-.29-.29A.965.965 0 006 12a1.003 1.003 0 00-.71 1.71l2 2c.18.18.43.29.71.29s.53-.11.71-.29l2-2a1.003 1.003 0 00-1.42-1.42l-.29.3V9h3.59l-.29.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l2-2c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z'
          ],
          mugshot: [
            'M15 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 14h-.15c-.03-.09-.04-.16-.08-.25-.34-.79-2.01-1.31-3.12-1.8-1.11-.49-.96-.79-1-1.2-.01-.06-.01-.12-.01-.18.38-.34.69-.8.89-1.33 0 0 .01-.03.01-.04.04-.12.08-.24.11-.36.25-.05.4-.33.46-.59.06-.1.18-.36.15-.65-.04-.37-.19-.55-.35-.62v-.06c0-.48-.04-1.16-.13-1.61-.02-.12-.05-.25-.08-.37-.16-.55-.51-1.05-.96-1.39C9.26 3.19 8.6 3 8 3c-.59 0-1.26.19-1.73.55-.45.35-.8.84-.96 1.39-.04.13-.06.25-.08.38-.09.45-.13 1.13-.13 1.61v.06c-.18.06-.33.24-.37.62-.03.29.09.54.15.65.06.26.21.54.47.59.03.12.07.25.11.36 0 .01.01.02.01.02v.01c.21.54.53 1.01.92 1.35 0 .05-.01.11-.01.16-.04.41.08.7-1.03 1.2-1.11.49-2.77 1.01-3.12 1.8-.04.09-.05.16-.08.25H2V2h12v12z'
          ],
          'multi-select': [
            'M12 3.98H4c-.55 0-1 .45-1 1v1h8v5h1c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1zm3-3H7c-.55 0-1 .45-1 1v1h8v5h1c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1zm-6 6H1c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1zm-1 5H2v-3h6v3z'
          ],
          music: [
            'M15 0c-.07 0-.13.03-.19.04V.02l-10 2v.02C4.35 2.13 4 2.52 4 3v9.12c-.31-.07-.65-.12-1-.12-1.66 0-3 .9-3 2s1.34 2 3 2 3-.9 3-2V6.32l8-1.6v5.4c-.31-.07-.65-.12-1-.12-1.66 0-3 .9-3 2s1.34 2 3 2 3-.9 3-2V1c0-.55-.45-1-1-1z'
          ],
          'new-drawing': [
            'M14.9 11c.6 0 1 .5 1 1 0 .257-.073.44-.22.614l-.08.086-3 3c-.2.2-.4.3-.7.3-.5 0-1-.4-1-1 0-.257.073-.44.22-.614l.08-.086 3-3c.2-.2.4-.3.7-.3zM1.3.1l6.734 2.45a3.005 3.005 0 002.095 3.322 3.005 3.005 0 003.401 2.081L13.9 9.8v.2c0 .257-.073.44-.22.614l-.08.086-3 3c-.171.171-.343.27-.577.294L9.9 14h-.2l-5-1-.1-.01c-.231-.05-.45-.26-.56-.49L4 12.4l-4-11 .3-.3 5.8 5.8c-.1.2-.2.4-.2.6 0 .8.6 1.5 1.5 1.5s1.5-.7 1.5-1.5S8.2 6 7.4 6c-.16 0-.32.064-.48.14l-.12.06L1 .4l.3-.3zM13 0c.55 0 1 .45 1 1v1h1c.55 0 1 .45 1 1s-.45 1-1 1h-1v1c0 .503-.376.922-.861.99l-.013.002A.999.999 0 0113 6l.097-.006-.027.004a1 1 0 01-.037.001L13 6c-.55 0-1-.45-1-1V4h-1a.993.993 0 01-.855-.482A1 1 0 0110 3c0-.55.45-1 1-1h1V1c0-.55.45-1 1-1z'
          ],
          'new-grid-item': [
            'M6 0H1C.45 0 0 .45 0 1v5c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm5 14c0-.55-.45-1-1-1s-1 .45-1 1v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1s-.45-1-1-1zM6 9H1c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1zm9 4c-.55 0-1 .45-1 1-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zm-4-4h-1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1s1-.45 1-1c.55 0 1-.45 1-1s-.45-1-1-1zm4-9h-5c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm0 9h-1c-.55 0-1 .45-1 1s.45 1 1 1c0 .55.45 1 1 1s1-.45 1-1v-1c0-.55-.45-1-1-1z'
          ],
          'new-layer': [
            'M13.982 6.272l1.518.868-.01.01c.3.17.51.48.51.85s-.21.68-.51.85l.01.01-7 4-.01-.01A.94.94 0 018 13a.94.94 0 01-.49-.15l-.01.01-7-4 .01-.01A.977.977 0 010 8c0-.37.21-.68.51-.86L.5 7.13l7-4 .01.02A.94.94 0 018 3c.086 0 .168.014.246.038a2 2 0 105.736 3.234zM14 3c.55 0 1 .45 1 1s-.45 1-1 1h-1v1c0 .55-.45 1-1 1s-1-.45-1-1V5h-1c-.55 0-1-.45-1-1s.45-1 1-1h1V2c0-.55.45-1 1-1s1 .45 1 1v1h1z'
          ],
          'new-layers': [
            'M13 3h2a1 1 0 010 2h-2v2a1 1 0 01-2 0V5H9a1 1 0 110-2h2V1a1 1 0 012 0v2zm-3-1.983V2H9a2 2 0 100 4h1v1c0 .279.057.544.16.785l-1.71.855c-.14.07-.29.11-.45.11-.16 0-.31-.04-.45-.11l-7-3.5a.992.992 0 01.07-1.81l6.99-3a1.006 1.006 0 01.79 0l1.6.687zm.91 7.66a2 2 0 003.085-1.54l.555-.277c.14-.07.29-.11.45-.11.55 0 1 .45 1 1 0 .39-.23.73-.55.89l-7 3.5c-.14.07-.29.11-.45.11-.16 0-.31-.04-.45-.11l-7-3.5C.23 8.48 0 8.14 0 7.75c0-.55.45-1 1-1 .16 0 .31.04.45.11L8 10.13l2.91-1.453zM15 10.25c.55 0 1 .45 1 1 0 .39-.23.73-.55.89l-7 3.5c-.14.07-.29.11-.45.11-.16 0-.31-.04-.45-.11l-7-3.5c-.32-.16-.55-.5-.55-.89 0-.55.45-1 1-1 .16 0 .31.04.45.1L8 13.63l6.55-3.27c.14-.07.29-.11.45-.11z'
          ],
          'new-link': [
            'M15 3h-1V2c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1V5h1c.55 0 1-.45 1-1s-.45-1-1-1zm-3.5 6a2.5 2.5 0 00-2.45 2h-4.1a2.5 2.5 0 100 1h4.1a2.5 2.5 0 102.45-3z'
          ],
          'new-object': [
            'M8 4c0 .6.4 1 1 1h2v2c0 .6.4 1 1 1s1-.4 1-1V5h2c.6 0 1-.4 1-1s-.4-1-1-1h-2V1c0-.6-.4-1-1-1s-1 .4-1 1v2H9c-.6 0-1 .5-1 1zm6.5 2.5V7c0 1.4-1.1 2.5-2.5 2.5S9.5 8.4 9.5 7v-.5H9C7.6 6.5 6.5 5.4 6.5 4S7.6 1.5 9 1.5h.5V1c0-.3.1-.6.1-.8C9.1.1 8.6 0 8 0 3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8c0-.6-.1-1.3-.2-1.9-.4.3-.8.4-1.3.4z'
          ],
          'new-person': [
            'M9.12 12.69c-1.17-.53-1.01-.85-1.05-1.29-.01-.06-.01-.12-.01-.19.4-.37.73-.87.94-1.44 0 0 .01-.03.01-.04.05-.14.09-.27.12-.4.27-.06.43-.36.49-.63.06-.11.19-.39.16-.7-.04-.41-.2-.6-.38-.68v-.07c0-.51-.05-1.25-.14-1.74-.02-.13-.05-.27-.09-.4-.17-.6-.53-1.14-1.01-1.52C7.66 3.2 6.96 3 6.33 3c-.62 0-1.33.2-1.82.59-.49.38-.85.92-1.02 1.52-.04.13-.07.26-.09.4-.09.49-.13 1.23-.13 1.74v.06c-.19.08-.35.27-.39.68-.03.31.1.59.16.7.06.28.22.59.5.64.03.14.07.27.11.4 0 .01.01.02.01.02v.01c.22.59.55 1.1.96 1.46 0 .06-.01.12-.01.17-.04.44.08.76-1.09 1.29-1.17.53-2.93 1.1-3.29 1.95-.35.87-.2 1.37-.2 1.37h12.6s.15-.5-.22-1.36c-.36-.85-2.12-1.42-3.29-1.95zM14.89 2h-1V1c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1V4h1c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'new-prescription': [
            'M9.82 11.66l2.48-2.87c.12-.2.13-.37.04-.53-.11-.19-.3-.26-.52-.26h-1.29c-.27 0-.49.13-.63.34L8.44 9.9 6.95 8a.482.482 0 00-.08-.1L5.82 6.55c.57-.24 1.04-.57 1.42-1.01.49-.57.74-1.27.74-2.08 0-.51-.1-.99-.32-1.42-.21-.43-.51-.8-.89-1.11A4.1 4.1 0 005.42.24C4.91.08 4.34 0 3.72 0H.61C.26 0 0 .23 0 .56v9.89c0 .33.26.55.61.55h.8c.36 0 .61-.23.61-.56V6.99H3.3l3.73 4.74-2.71 3.48c-.12.2-.13.37-.04.53.11.19.3.26.52.26h1.27c.27 0 .51-.12.64-.34l1.69-2.15 1.66 2.14c.12.21.34.35.62.35h1.43c.2 0 .39-.08.5-.25.12-.18.09-.38-.02-.55l-2.77-3.54zM4.18 5H1.99V2.02h2.19c.62 0 1.08.13 1.38.37.29.22.44.62.44 1.08 0 .45-.15.94-.44 1.17-.31.23-.76.36-1.38.36zM15 2h-1V1c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1V4h1c.55 0 1-.45 1-1s-.45-1-1-1zM9.99 3.01c0 .02.01.04.01.06V2.95c0 .02-.01.04-.01.06z'
          ],
          'new-text-box': [
            'M5 6.5c0 .28.22.5.5.5H7v3.5c0 .28.22.5.5.5s.5-.22.5-.5V7h1.5c.28 0 .5-.22.5-.5S9.78 6 9.5 6h-4c-.28 0-.5.22-.5.5zM15 2h-1V1c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1V4h1c.55 0 1-.45 1-1s-.45-1-1-1zm-2 5c-.55 0-1 .45-1 1v5H3V4h5c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1z'
          ],
          ninja: [
            'M16 5s-2.52 2.11-4.96 1.99C11.03 4.89 10.39.23 5 0c0 0 2.11 2.54 1.96 4.99C4.86 5.01.23 5.65 0 11c0 0 2.56-2.12 5.02-1.95.02 2.11.67 6.72 5.98 6.95 0 0-2.09-2.54-1.94-4.99 2.11-.02 6.71-.68 6.94-6.01zM8 9.5c-.83 0-1.5-.67-1.5-1.5S7.17 6.5 8 6.5s1.5.67 1.5 1.5S8.83 9.5 8 9.5z'
          ],
          'not-equal-to': [
            'M7.58 5l.44-2.196a1 1 0 011.96.392L9.62 5H13a1 1 0 010 2H9.22l-.4 2H13a1 1 0 010 2H8.42l-.44 2.196a1 1 0 01-1.96-.392L6.38 11H3a1 1 0 010-2h3.78l.4-2H3a1 1 0 110-2h4.58z'
          ],
          notifications: [
            'M8 16c1.1 0 2-.9 2-2H6c0 1.1.9 2 2 2zm6-5c-.55 0-1-.45-1-1V6c0-2.43-1.73-4.45-4.02-4.9 0-.04.02-.06.02-.1 0-.55-.45-1-1-1S7 .45 7 1c0 .04.02.06.02.1A4.992 4.992 0 003 6v4c0 .55-.45 1-1 1s-1 .45-1 1 .45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'notifications-updated': [
            'M8 16c1.1 0 2-.9 2-2H6c0 1.1.9 2 2 2zm3.399-13.667l-.413.412A2.99 2.99 0 009 1.99a3 3 0 00-3 2.99c0 .8.32 1.558.876 2.114l2.002 1.992A2.99 2.99 0 0013 9.184V10c0 .55.45 1 1 1s1 .45 1 1-.45 1-1 1H2c-.55 0-1-.45-1-1s.45-1 1-1 1-.45 1-1V6c0-2.43 1.73-4.45 4.02-4.9 0-.04-.02-.06-.02-.1 0-.55.45-1 1-1s1 .45 1 1c0 .04-.02.06-.02.1a4.97 4.97 0 012.419 1.233zM10.29 7.67l-2-1.99a.99.99 0 01-.29-.7 1 1 0 011-.99c.27 0 .52.11.7.29l1.29 1.29 3.28-3.28c.18-.18.42-.29.7-.29.55 0 1 .44 1 .99 0 .28-.11.52-.3.7l-3.98 3.98a.99.99 0 01-1.4 0z'
          ],
          'numbered-list': [
            'M2.76 7h1.26V0h-.94c-.04.21-.12.39-.25.54-.13.15-.29.27-.48.36-.18.09-.39.16-.62.2-.23.04-.46.06-.71.06v.9h1.74V7zm-.59 7.17c.18-.12.37-.25.58-.37a10.763 10.763 0 001.24-.83c.2-.16.37-.33.52-.51.15-.19.28-.39.37-.61.09-.22.14-.47.14-.74 0-.22-.04-.45-.12-.7-.08-.26-.21-.49-.4-.69-.18-.21-.43-.39-.72-.52-.3-.14-.68-.21-1.12-.21-.41 0-.77.07-1.08.2-.32.14-.58.32-.8.56-.22.23-.38.51-.49.84-.11.32-.16.67-.16 1.05h1.19c.01-.24.03-.47.08-.67.05-.21.11-.39.21-.54.09-.15.22-.27.38-.36.16-.09.35-.13.59-.13.26 0 .47.04.63.12.16.08.29.18.38.3.09.12.15.25.18.39s.05.27.05.4c-.01.27-.08.5-.22.71-.14.21-.32.4-.53.57-.22.18-.45.34-.71.49-.26.15-.51.31-.74.47-.5.31-.89.68-1.17 1.11-.3.41-.44.91-.45 1.48h5v-1H1.43c.05-.15.14-.29.27-.43.14-.13.29-.26.47-.38zM15.01 1.99h-7c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h7c.55 0 1-.45 1-1v-1c0-.55-.44-1-1-1zm0 9h-7c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h7c.55 0 1-.45 1-1v-1c0-.55-.44-1-1-1z'
          ],
          numerical: [
            'M2.79 4.61c-.13.17-.29.3-.48.41-.18.11-.39.18-.62.23-.23.04-.46.07-.71.07v1.03h1.74V12h1.26V4h-.94c-.04.23-.12.44-.25.61zm4.37 5.31c.18-.14.37-.28.58-.42l.63-.45c.21-.16.41-.33.61-.51s.37-.38.52-.59c.15-.21.28-.45.37-.7.09-.25.13-.54.13-.85 0-.25-.04-.52-.12-.8-.07-.29-.2-.55-.39-.79a2.18 2.18 0 00-.73-.6c-.29-.15-.66-.23-1.11-.23-.41 0-.77.08-1.08.23-.31.16-.58.37-.79.64-.22.27-.38.59-.49.96-.11.37-.16.77-.16 1.2h1.19c.01-.27.03-.53.08-.77.04-.24.11-.45.21-.62.09-.18.22-.32.38-.42.16-.1.35-.15.59-.15.26 0 .47.05.63.14.15.09.28.21.37.35.09.14.15.29.18.45.03.16.05.31.05.45-.01.31-.08.58-.22.82-.14.23-.32.45-.53.65-.22.21-.46.39-.71.57-.26.18-.51.36-.75.54-.5.36-.89.78-1.17 1.27-.28.49-.43 1.06-.44 1.71h5v-1.15H6.43c.05-.17.14-.33.27-.49.13-.15.29-.29.46-.44zm8.5-1.56c-.23-.35-.54-.57-.95-.65v-.02c.34-.13.6-.34.76-.63.16-.29.24-.63.24-1.02 0-.34-.06-.64-.19-.9s-.3-.47-.51-.64c-.21-.17-.45-.3-.72-.38-.27-.09-.54-.13-.82-.13-.36 0-.68.07-.96.2-.28.13-.53.32-.72.55-.2.23-.36.51-.47.83-.11.32-.18.66-.19 1.04h1.15c-.01-.2.01-.39.06-.58.05-.19.12-.36.22-.51.1-.15.22-.27.37-.36.15-.09.32-.13.53-.13.32 0 .59.1.79.3.21.2.31.46.31.79 0 .23-.05.43-.14.59-.09.16-.21.29-.35.38-.15.09-.32.16-.51.19-.19.04-.38.05-.57.04v.93c.23-.01.45 0 .67.02.22.02.42.08.59.17.18.09.32.23.43.4.11.18.16.41.16.71 0 .44-.13.78-.39 1.02s-.58.36-.97.36c-.45 0-.79-.16-1.02-.47-.23-.31-.33-.7-.32-1.17H11c.01.4.06.77.17 1.1.11.33.26.61.47.85.21.23.46.42.77.54.31.13.67.19 1.08.19.34 0 .66-.05.96-.16.3-.11.57-.27.8-.47.23-.2.41-.45.55-.74.13-.27.2-.6.2-.97 0-.5-.11-.92-.34-1.27z'
          ],
          office: [
            'M15 5h-3V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h3v-4h4v4h7c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM5 10H2V7h3v3zm0-5H2V2h3v3zm5 5H7V7h3v3zm0-5H7V2h3v3zm4 9h-2v-2h2v2zm0-4h-2V7h2v3z'
          ],
          offline: [
            'M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zM6 14l1-5H4l6-7-1 5h3l-6 7z'
          ],
          'oil-field': [
            'M15 14h-1.35l-3.34-7.51 2.46-.95 1.45 3.21c.09.2.36.3.6.23.1-.03.18-.08.24-.15.05-.08 1.23-1.56.87-4.2-.11-.79-.52-4.62-3.26-4.62-.93 0-1.68.62-1.67 1.37 0 .14.03.28.09.42l.87 1.92L.64 8.07v.01A.98.98 0 000 9c0 .55.45 1 1 1 .13 0 .25-.03.36-.07v.01l1.04-.4L3.67 14H2c-.55 0-1 .45-1 1s.45 1 1 1h13c.55 0 1-.45 1-1s-.45-1-1-1zM4.27 8.81L7.14 7.7 5.2 12.08l-.93-3.27zM6.54 14L9 8.46 11.46 14H6.54z'
          ],
          'one-column': [
            'M11.99-.01h-3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-14c0-.55-.45-1-1-1zm-6 5c-.28 0-.53.11-.71.29l-2 2a1.014 1.014 0 000 1.42l2 2a1.003 1.003 0 001.71-.71v-4c0-.55-.45-1-1-1z'
          ],
          outdated: [
            'M8 0c4.42 0 8 3.58 8 8 0 4.06-3.02 7.4-6.94 7.92-.02 0-.04.01-.06.01-.33.04-.66.07-1 .07-4.42 0-8-3.58-8-8 0-.55.45-1 1-1s1 .45 1 1c0 3.31 2.69 6 6 6 .71 0 1.37-.15 2-.38v.01c2.33-.82 4-3.02 4-5.63 0-3.31-2.69-6-6-6-1.78 0-3.36.78-4.46 2H5c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1s1 .45 1 1v1.74A7.95 7.95 0 018 0zm1 12H7v-2h2v2zm0-3H7V4h2v5z'
          ],
          'page-layout': [
            'M15 .95H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-12c0-.55-.45-1-1-1zm-9 12H2v-6h4v6zm8 0H7v-6h7v6zm0-7H2v-3h12v3z'
          ],
          'panel-stats': [
            'M10 4h3v1h-3zM10 6h3v1h-3zM10 8h3v1h-3zM10 10h3v1h-3z',
            'M15 1H1c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1zM8 12H2V3h6v9zm6 0H9V3h5v9z'
          ],
          'panel-table': [
            'M15 1H1c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1zM8 9H6V7h2v2zm0-3H6V4h2v2zm-6 6V3h3v9H2zm4 0v-2h2v2H6zm8 0H9v-2h5v2zm0-3H9V7h5v2zm0-3H9V4h5v2z'
          ],
          paperclip: [
            'M14.68 2.31A4.54 4.54 0 0011.46.99c-1.15 0-2.31.44-3.19 1.32L.95 9.63c-.63.63-.95 1.46-.95 2.28a3.21 3.21 0 003.23 3.22c.83 0 1.66-.31 2.3-.95l7.31-7.32c.76-.77.76-1.98.01-2.73s-1.99-.76-2.75 0l-6.07 6.08c-.24.25-.24.65.01.9s.65.25.91.01l6.07-6.08c.25-.25.67-.25.91-.01.25.25.25.67 0 .92l-7.31 7.32c-.75.75-2.04.74-2.76.01-.75-.75-.73-2.02.01-2.76L9.2 3.21c1.24-1.24 3.35-1.26 4.58-.03 1.24 1.24 1.24 3.36 0 4.6l-7.12 7.13c-.24.25-.24.64.01.88.24.24.63.24.88.01v.01l7.13-7.13A4.41 4.41 0 0016 5.51c0-1.16-.44-2.32-1.32-3.2z'
          ],
          paragraph: [
            'M13 1H6C3.8 1 2 2.8 2 5s1.8 4 4 4v5c0 .6.4 1 1 1s1-.5 1-1V3h2v11c0 .6.4 1 1 1s1-.5 1-1V3h1c.5 0 1-.4 1-1s-.4-1-1-1z'
          ],
          path: [
            'M14.5 0h-13C.67 0 0 .67 0 1.5S.67 3 1.5 3H7v3H3.5C2.67 6 2 6.67 2 7.5S2.67 9 3.5 9H7v3H5.5c-.83 0-1.5.67-1.5 1.5S4.67 15 5.5 15h5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5H9V9h3.5c.83 0 1.5-.67 1.5-1.5S13.33 6 12.5 6H9V3h5.5c.83 0 1.5-.67 1.5-1.5S15.33 0 14.5 0z'
          ],
          'path-search': [
            'M15 14.62l-4-2.4V9.77c-.32.09-.66.15-1 .18v2.27l-4 2.4V8.71c-.38-.31-.72-.66-1-1.06v6.97l-4-2.4V8c.55 0 1-.45 1-1s-.45-1-1-1V1.38l3.15 1.89c.08-.34.18-.66.32-.97L.76.07v.01A.496.496 0 00.5 0C.22 0 0 .22 0 .5v12c0 .18.1.33.25.42v.01l5 3v-.01c.07.05.16.08.25.08s.18-.03.25-.08v.01l4.74-2.85 4.74 2.85v-.01c.09.05.18.08.27.08.28 0 .5-.22.5-.5v-3.78c-.3.17-.63.28-1 .28v2.62zM2 5c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm6-1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm7.75-.92l-1.19-.72c.18.43.29.9.36 1.38l.08.04v3.39l1 1V3.5c0-.18-.1-.33-.25-.42zM10 2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3.3 4.89c.44-.7.7-1.51.7-2.39C14 2.01 11.99 0 9.5 0S5 2.01 5 4.5 7.01 9 9.5 9c.88 0 1.69-.26 2.39-.7l2.41 2.41c.17.18.42.29.7.29a1.003 1.003 0 00.71-1.71l-2.41-2.4zM9.5 8C7.57 8 6 6.43 6 4.5S7.57 1 9.5 1 13 2.57 13 4.5 11.43 8 9.5 8z'
          ],
          pause: [
            'M6 3H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm6 0h-2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z'
          ],
          people: [
            'M13.69 13.98c-.05-.24-.14-.5-.25-.76-.36-.86-1.12-1.33-2.69-2-.14-.06-.59-.25-.6-.25-.21-.09-.36-.15-.5-.22.02-.1.02-.2.03-.31 0-.04.01-.08.01-.13-.07-.06-.13-.12-.19-.19.22-.32.4-.67.54-1.05.02-.06.02-.06.03-.1.29-.23.48-.57.59-.96.16-.33.25-.73.21-1.16-.03-.4-.16-.76-.37-1.03-.02-.53-.07-1.13-.15-1.54-.01-.06-.02-.12-.03-.19.23-.06.48-.09.72-.09.49 0 1.05.16 1.44.46.38.29.67.7.8 1.17.03.1.05.21.07.31.07.37.11.94.11 1.33v.05c.14.06.27.21.29.51.02.25-.07.45-.13.54-.05.21-.16.44-.38.48-.02.1-.05.2-.09.3 0 .01-.01.03-.01.03-.17.44-.43.83-.75 1.11v.14c.03.35-.09.59.83 1 .93.41 2.32.84 2.6 1.5.29.66.17 1.04.17 1.04h-2.3zm-1.17-.38c.37.86.22 1.36.22 1.36H.06s-.14-.5.22-1.36 2.13-1.43 3.31-1.96c1.17-.54 1.05-.86 1.09-1.3 0-.05.01-.11.01-.17-.41-.35-.75-.86-.97-1.45v-.01s-.01-.01-.01-.02c-.04-.12-.09-.26-.12-.39-.28-.05-.44-.36-.5-.64-.06-.12-.19-.39-.16-.71.04-.41.21-.6.39-.68v-.06c0-.51.05-1.26.14-1.74.02-.13.05-.27.09-.4.17-.6.54-1.13 1.02-1.51.5-.39 1.21-.6 1.84-.6s1.34.21 1.84.6c.48.38.85.91 1.02 1.52.04.13.07.27.09.4.09.48.14 1.22.14 1.73v.07c.18.08.34.27.37.67.03.32-.09.59-.16.71-.06.28-.21.58-.48.63-.03.13-.07.26-.12.39 0 .01-.01.04-.01.04-.22.58-.55 1.08-.95 1.45v.18c.04.45-.12.77 1.06 1.3 1.18.53 2.95 1.09 3.31 1.95z'
          ],
          percentage: [
            'M6 6V4c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2zM3.5 6c-.28 0-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5s.5.22.5.5v1c0 .28-.22.5-.5.5zM13 8h-1c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zm0 3.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5s.5.22.5.5v1zM12 3a1.003 1.003 0 00-1.87-.5l-5.99 9.98c-.09.15-.14.33-.14.52a1.003 1.003 0 001.87.5l5.99-9.98c.09-.15.14-.33.14-.52z'
          ],
          person: [
            'M15.68 14.32c-.46-1.05-2.68-1.75-4.16-2.4-1.48-.65-1.28-1.05-1.33-1.59-.01-.07-.01-.15-.01-.23.51-.45.92-1.07 1.19-1.78 0 0 .01-.04.02-.05.06-.15.11-.32.15-.48.34-.07.54-.44.61-.78.08-.14.23-.48.2-.87-.05-.5-.25-.73-.47-.82v-.09c0-.63-.06-1.55-.17-2.15A3.671 3.671 0 0010.32.72C9.68.25 8.79-.01 8-.01c-.79 0-1.68.25-2.31.73-.61.47-1.06 1.13-1.28 1.86-.05.17-.09.33-.11.5-.12.6-.17 1.51-.17 2.15v.08c-.24.09-.45.32-.5.83-.03.38.13.72.2.86.08.35.28.72.63.78.04.17.09.33.15.49 0 .01.01.02.01.03l.01.01c.27.72.7 1.35 1.22 1.8 0 .07-.01.14-.01.21-.05.54.1.94-1.37 1.59-1.48.65-3.7 1.35-4.16 2.4-.46 1.05-.27 1.67-.27 1.67h15.92c-.01.01.18-.61-.28-1.66z'
          ],
          phone: [
            'M15.9 12.41c-.06-.06-3.37-2-3.48-2.05a.794.794 0 00-.32-.08c-.15 0-.34.11-.57.32-.23.22-.94 1.19-1.15 1.4-.21.22-.38.32-.52.32-.07 0-.15-.02-.25-.06-.1-.04-1.16-.58-3.36-2.52-2.2-1.93-2.49-3.2-2.5-3.55 0-.14.11-.31.32-.52.22-.21.45-.41.7-.6.25-.19.49-.4.7-.62.22-.23.32-.42.32-.57 0-.11-.03-.21-.08-.32C5.66 3.46 3.66.15 3.59.08 3.44-.07 2.85 0 2.55.16.16 1.46-.03 3.2 0 3.89c.04.71.49 4.46 4.16 7.95C8.72 16.17 11.89 16 12.1 16c.69 0 2.82-.38 3.72-2.55.13-.32.25-.87.08-1.04z'
          ],
          'pie-chart': [
            'M7 1.08c-3.37.5-5.97 3.4-5.97 6.92 0 3.87 3.13 7 6.98 7 3.52 0 6.42-2.61 6.91-6H7V1.08z',
            'M8 0v8h8c0-4.42-3.58-8-8-8z'
          ],
          pin: [
            'M9.41.92c-.51.51-.41 1.5.15 2.56L4.34 7.54C2.8 6.48 1.45 6.05.92 6.58l3.54 3.54-3.54 4.95 4.95-3.54 3.54 3.54c.53-.53.1-1.88-.96-3.42l4.06-5.22c1.06.56 2.04.66 2.55.15L9.41.92z'
          ],
          pivot: [
            'M4.57 7.02L.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l4.27-4.27c-.58-.35-1.07-.84-1.41-1.42zM15 8c-.55 0-1 .45-1 1v.59l-2.57-2.57c-.34.58-.83 1.07-1.41 1.41L12.59 11H12c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-4-3c0-1.66-1.34-3-3-3S5 3.34 5 5s1.34 3 3 3 3-1.34 3-3zM8 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z'
          ],
          'pivot-table': [
            'M2 4H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm0-4H1C.45 0 0 .45 0 1v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm11.71 4.29C13.53 4.11 13.28 4 13 4s-.53.11-.71.29l-2 2a1.003 1.003 0 001.42 1.42l.29-.3V9c0 1.66-1.34 3-3 3H7.41l.29-.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-2 2c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l2 2a1.003 1.003 0 001.42-1.42l-.3-.29H9c2.76 0 5-2.24 5-5V7.41l.29.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-2-2zM15 0H5c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z'
          ],
          play: [
            'M12 8c0-.35-.19-.64-.46-.82l.01-.02-6-4-.01.02A.969.969 0 005 3c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1 .21 0 .39-.08.54-.18l.01.02 6-4-.01-.02c.27-.18.46-.47.46-.82z'
          ],
          plus: [
            'M13 7H9V3c0-.55-.45-1-1-1s-1 .45-1 1v4H3c-.55 0-1 .45-1 1s.45 1 1 1h4v4c0 .55.45 1 1 1s1-.45 1-1V9h4c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'polygon-filter': [
            'M14 5c-.24 0-.47.05-.68.13L9.97 2.34c.01-.11.03-.22.03-.34 0-1.1-.9-2-2-2S6 .9 6 2c0 .04.01.08.01.12L2.88 4.21C2.61 4.08 2.32 4 2 4 .9 4 0 4.9 0 6c0 .74.4 1.38 1 1.72v4.55c-.6.35-1 .99-1 1.73 0 1.1.9 2 2 2 .74 0 1.38-.4 1.72-1h4.55c.35.6.98 1 1.72 1 1.1 0 2-.9 2-2 0-.37-.11-.7-.28-1L14 9c1.11-.01 2-.9 2-2s-.9-2-2-2zm-4.01 7c-.73 0-1.37.41-1.71 1H3.73c-.18-.3-.43-.55-.73-.72V7.72c.6-.34 1-.98 1-1.72 0-.04-.01-.08-.01-.12l3.13-2.09c.27.13.56.21.88.21.24 0 .47-.05.68-.13l3.35 2.79c-.01.11-.03.22-.03.34 0 .37.11.7.28 1l-2.29 4z'
          ],
          power: [
            'M8 8c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1S7 .45 7 1v6c0 .55.45 1 1 1zm3-5.32v2.34c1.21.91 2 2.35 2 3.98 0 2.76-2.24 5-5 5s-5-2.24-5-5c0-1.63.79-3.06 2-3.98V2.68C2.64 3.81 1 6.21 1 9c0 3.87 3.13 7 7 7s7-3.13 7-7c0-2.79-1.64-5.19-4-6.32z'
          ],
          'predictive-analysis': [
            'M16 6.41c0-1.01-.49-1.94-1.29-2.49-.43-1.92-2.07-3.28-4-3.28-.46 0-.92.08-1.35.24C8.83.31 8.11 0 7.34 0c-.9 0-1.74.44-2.28 1.16-.12-.01-.24-.02-.36-.02-1.31 0-2.42.89-2.77 2.17C.78 3.72 0 4.84 0 6.13c0 .38.07.76.21 1.12C.07 7.6 0 7.98 0 8.36c0 1.11.58 2.11 1.51 2.63.54.56 1.27.87 2.03.87.49 0 .95-.12 1.37-.36a2.85 2.85 0 002.18 1.04c.52 0 1.03-.14 1.47-.42.49.39 1.07.65 1.69.73 1.04 1.15 1.84 2.63 1.84 2.64 0 0 .28.49.26.49.77 0 1.41-.16 1.32-1.04 0 .02-.73-2.31-.73-2.31.41-.21.75-.55.97-.98.9-.52 1.47-1.53 1.47-2.61 0-.24-.03-.48-.08-.71.45-.52.7-1.21.7-1.92zm-1.23 1.02l-.15-.16-.61-.67c-.27-.29-.54-.94-.58-1.39l-.1-1.01c-.05-.59-.94-.58-.91.11 0 .02.1 1.01.1 1.01.03.29.12.62.24.93-.06-.01-.12-.02-.18-.02 0 0-2.06-.1-2.05-.11-.58-.02-.71.97-.04 1l2.05.11c.42.02 1.04.3 1.29.58l.49.54.02.05c.08.21.12.44.12.66 0 .74-.41 1.41-1.07 1.75l-.16.08-.07.18c-.15.38-.48.66-.88.74l-.54.11.7 2.2c-.38-.61-.95-1.43-1.62-2.14l-.12-.13-.17-.01c-.41-.03-.8-.17-1.14-.38l1.36-1.18c.35-.31.83-.44.99-.39 0 0 .63.17.62.18.63.16.83-.74.23-.97l-.62-.18c-.55-.16-1.33.18-1.79.58l-1.53 1.33-.31.26c-.35.29-.75.44-1.2.44-.64 0-1.23-.33-1.58-.86V9.15c0-.4.17-.79.27-.85 0 0 .52-.34.51-.35.71-.53.18-1.23-.49-.89 0-.01-.52.35-.52.35-.26.15-.45.44-.58.77-.11-.11-.22-.2-.34-.28 0 0-1.53-1.01-1.53-1.02-.65-.45-1.2.51-.49.89 0-.01 1.51 1.02 1.51 1.02.37.24.62.78.62 1.09v.67c-.34.19-.63.29-.99.29-.54 0-1.05-.23-1.41-.63l-.05-.06-.07-.04c-.65-.34-1.05-1-1.05-1.73 0-.3.07-.6.2-.87l.12-.25L1.15 7c-.13-.27-.2-.56-.2-.87 0-.9.61-1.68 1.48-1.89l.31-.08.05-.34a1.926 1.926 0 012.38-1.58l.32.08.18-.31c.35-.6.99-.97 1.67-.97.44 0 .86.15 1.2.42l-.36.36v-.01l-.25.26c-.33.27-.74.42-.89.4 0 0-.67-.1-.67-.11-.67-.13-.87.86-.14 1.02.01 0 .67.11.67.11.02 0 .05 0 .07.01-.11.37-.15.77-.1 1.12 0 0 .17.99.15.99.11.52 1.06.36.93-.18 0-.01-.15-.99-.15-.99-.05-.37.12-.94.36-1.19l.39-.4c.05-.05.1-.09.15-.14l.74-.76c.4-.18.83-.27 1.27-.27 1.55 0 2.86 1.12 3.11 2.67l.04.25.21.12c.61.35.98 1 .98 1.7 0 .36-.1.7-.28 1.01z'
          ],
          prescription: [
            'M10.91 8.34c.14-.21.36-.34.63-.34h1.29c.22 0 .41.07.52.26.09.16.08.33-.04.53l-2.49 2.87 2.77 3.54c.12.17.14.37.02.55-.11.17-.3.25-.5.25h-1.44a.69.69 0 01-.61-.35L9.4 13.51l-1.69 2.15c-.13.21-.36.34-.63.34H5.8c-.22 0-.41-.07-.52-.26-.09-.16-.08-.33.04-.53l2.71-3.48L4.3 6.99H3.03v3.47c0 .33-.26.56-.62.56h-.8c-.35-.01-.61-.23-.61-.56V.56c0-.33.26-.56.62-.56h3.11c.62 0 1.19.08 1.7.24.51.16.96.39 1.34.69a3.194 3.194 0 011.21 2.53c0 .81-.25 1.5-.74 2.08-.37.44-.84.77-1.42 1.01L7.88 7.9c.04.04.07.08.08.1l1.49 1.9 1.46-1.56zM5.18 5c.62 0 1.08-.13 1.39-.37.29-.23.44-.71.44-1.16s-.15-.87-.44-1.1C6.26 2.12 5.8 2 5.18 2H2.99v3h2.19z'
          ],
          presentation: [
            'M15 1H9c0-.55-.45-1-1-1S7 .45 7 1H1c-.55 0-1 .45-1 1s.45 1 1 1v8c0 .55.45 1 1 1h3.59L3.3 14.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L7 13.41V15c0 .55.45 1 1 1s1-.45 1-1v-1.59l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L10.41 12H14c.55 0 1-.45 1-1V3c.55 0 1-.45 1-1s-.45-1-1-1zm-2 9H3V3h10v7z'
          ],
          print: [
            'M12 2.02c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v1h8v-1zm3 2H1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h1v-3h12v3h1c.55 0 1-.45 1-1v-6c0-.56-.45-1-1-1zm-1 3h-2v-1h2v1zm-3 6H5v-3H3v4c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-4h-2v3z'
          ],
          projects: [
            'M14 3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v1h12V3zm-2-3H4c-.55 0-1 .45-1 1h10c0-.55-.45-1-1-1zm3 5H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-3 6c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V9h1v2h6V9h1v2z'
          ],
          properties: [
            'M2 6C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2zm4-3h9c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1zm-4 9c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm13-5H6c-.55 0-1 .45-1 1s.45 1 1 1h9c.55 0 1-.45 1-1s-.45-1-1-1zm0 6H6c-.55 0-1 .45-1 1s.45 1 1 1h9c.55 0 1-.45 1-1s-.45-1-1-1zM2 0C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
          ],
          property: [
            'M3 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-.5-6.5a2.5 2.5 0 000 5 2.5 2.5 0 000-5zM7 3h8c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1zm8 10H7c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1zM3 0C1.9 0 1 .9 1 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 6H7c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1z'
          ],
          'publish-function': [
            'M12.16 3.76c.15-.11.3-.16.47-.16.06 0 .17.02.34.06.16.04.31.06.43.06a.58.58 0 00.6-.6c0-.19-.06-.33-.17-.44-.11-.11-.28-.16-.49-.16-.19 0-.37.04-.54.13-.17.09-.39.27-.65.55-.2.21-.48.58-.87 1.11a5.22 5.22 0 00-.78-1.79l-2.05.32-.04.21c.15-.03.28-.04.39-.04.2 0 .37.08.5.25.21.26.5 1.03.88 2.33-.29.36-.49.6-.6.71-.18.19-.33.31-.45.36-.09.04-.19.07-.3.07-.09 0-.23-.04-.42-.13a.904.904 0 00-.36-.09c-.2 0-.36.06-.49.18a.59.59 0 00-.19.46c0 .18.06.32.18.43.12.11.28.16.48.16.2 0 .38-.04.55-.12.17-.08.39-.24.65-.49s.62-.65 1.07-1.19c.18.52.33.89.46 1.13.13.24.28.4.44.51.17.1.37.16.62.16.24 0 .49-.08.74-.25.33-.21.66-.58 1.01-1.09l-.21-.11c-.23.31-.41.5-.52.57a.44.44 0 01-.26.07c-.12 0-.24-.07-.36-.21-.2-.24-.46-.91-.8-2 .29-.49.54-.81.74-.96zM6.37 5.83l.68-2.53h.83l.2-.64h-.84c.24-.91.56-1.59.96-2.01.24-.27.48-.4.71-.4.05 0 .08.01.11.04s.04.06.04.1c0 .04-.03.11-.1.21-.06.1-.1.2-.1.29 0 .13.05.24.15.33.1.09.23.14.39.14.17 0 .31-.06.42-.17.12-.12.18-.27.18-.46 0-.21-.08-.39-.25-.52C9.57.07 9.3 0 8.93 0c-.59 0-1.12.16-1.59.48-.48.32-.93.85-1.36 1.59-.15.26-.29.42-.42.49s-.35.11-.64.1l-.19.65h.81L4.35 7.68c-.2.72-.33 1.16-.4 1.33-.1.24-.26.45-.46.62a.48.48 0 01-.31.1c-.03 0-.06-.01-.08-.03l-.03-.03c0-.02.03-.06.09-.11.06-.06.09-.15.09-.26 0-.13-.05-.23-.14-.32-.1-.09-.23-.13-.41-.13-.21 0-.38.05-.51.16A.52.52 0 002 9.4c0 .16.08.3.23.42.16.12.4.18.74.18.53 0 .99-.13 1.4-.39.41-.26.76-.65 1.07-1.19.3-.53.61-1.39.93-2.59zm2.34 3.46A.997.997 0 008 9c-.28 0-.53.11-.71.29l-2 2a1.003 1.003 0 001.42 1.42l.29-.3V15c0 .55.45 1 1 1s1-.45 1-1v-2.59l.29.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-2-2z'
          ],
          pulse: [
            'M15 8h-1.46l-1.7-2.55-.02.01A.984.984 0 0011 5c-.43 0-.79.27-.93.65h-.01l-1.69 4.51-1.38-8.32h-.02A.989.989 0 006 1c-.41 0-.77.25-.92.61L2.34 8H1c-.55 0-1 .45-1 1s.45 1 1 1h2c.41 0 .77-.25.92-.61l1.65-3.86 1.44 8.63h.02c.08.47.47.84.97.84.43 0 .79-.27.93-.65h.01l2.31-6.17.92 1.38.02-.01c.17.26.46.45.81.45h2c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          random: [
            'M11.48 4h1.11l-.29.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l2-2c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-2-2a1.003 1.003 0 00-1.42 1.42l.3.29H11c-.32 0-.59.16-.77.38l-.01-.01L8.28 4.8l1.28 1.6L11.48 4zm2.23 6.29a1.003 1.003 0 00-1.42 1.42l.3.29h-1.11l-7.7-9.62h-.01A.996.996 0 003 2H1c-.55 0-1 .45-1 1s.45 1 1 1h1.52l7.7 9.62.01-.01c.18.23.45.39.77.39h1.59l-.29.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l2-2c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-2-2zM2.52 12H1c-.55 0-1 .45-1 1s.45 1 1 1h2c.32 0 .59-.16.77-.38l.01.01 1.94-2.42L4.44 9.6 2.52 12z'
          ],
          record: ['M8 3a5 5 0 100 10A5 5 0 108 3z'],
          redo: [
            'M12 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm3.71-6.71l-3-3a1.003 1.003 0 00-1.42 1.42L12.59 4H5C2.24 4 0 6.24 0 9s2.24 5 5 5h4v-2H5c-1.66 0-3-1.34-3-3s1.34-3 3-3h7.59L11.3 7.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z'
          ],
          refresh: [
            'M14.99 6.99c-.55 0-1 .45-1 1 0 3.31-2.69 6-6 6-1.77 0-3.36-.78-4.46-2h1.46c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1v-1.74a7.95 7.95 0 006 2.74c4.42 0 8-3.58 8-8 0-.55-.45-1-1-1zm0-7c-.55 0-1 .45-1 1v1.74a7.95 7.95 0 00-6-2.74c-4.42 0-8 3.58-8 8 0 .55.45 1 1 1s1-.45 1-1c0-3.31 2.69-6 6-6 1.77 0 3.36.78 4.46 2h-1.46c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1z'
          ],
          'regression-chart': [
            'M13 6.5c0 .83.67 1.5 1.5 1.5S16 7.33 16 6.5 15.33 5 14.5 5 13 5.67 13 6.5zM8.5 5c.83 0 1.5-.67 1.5-1.5S9.33 2 8.5 2 7 2.67 7 3.5 7.67 5 8.5 5zM9 9.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5S11.33 8 10.5 8 9 8.67 9 9.5zM4.5 8C5.33 8 6 7.33 6 6.5S5.33 5 4.5 5 3 5.67 3 6.5 3.67 8 4.5 8zM15 12H3.26l12.03-8.59-.58-.81L2 11.67V3c0-.55-.45-1-1-1s-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          remove: [
            'M10.99 6.99h-6c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1zm-3-7c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.68 6-6 6z'
          ],
          'remove-column': [
            'M14 0H4c-.55 0-1 .45-1 1v3h2V2h3v12H5v-2H3v3c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 14h-3V2h3v12zm-8.71-3.29a1.003 1.003 0 001.42-1.42L4.41 8 5.7 6.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L3 6.59l-1.29-1.3A1.003 1.003 0 00.29 6.71L1.59 8 .29 9.29a1.003 1.003 0 001.42 1.42L3 9.41l1.29 1.3z'
          ],
          'remove-column-left': [
            'M4 9h4c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm11-9H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-5 14H2V2h8v12zm4 0h-3V2h3v12z'
          ],
          'remove-column-right': [
            'M15 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM5 14H2V2h3v12zm9 0H6V2h8v12zM8 9h4c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1z'
          ],
          'remove-row-bottom': [
            'M15 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 14H2V6h12v8zm0-9H2V2h12v3zm-8 6h4c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1z'
          ],
          'remove-row-top': [
            'M15 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 14H2v-3h12v3zm0-4H2V2h12v8zM6 7h4c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1z'
          ],
          repeat: [
            'M10 5c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1s-1 .45-1 1v1.74A7.95 7.95 0 008 0C3.58 0 0 3.58 0 8c0 4.06 3.02 7.4 6.94 7.92.02 0 .04.01.06.01.33.04.66.07 1 .07 4.42 0 8-3.58 8-8 0-.55-.45-1-1-1s-1 .45-1 1c0 3.31-2.69 6-6 6-.71 0-1.37-.15-2-.38v.01C3.67 12.81 2 10.61 2 8c0-3.31 2.69-6 6-6 1.77 0 3.36.78 4.46 2H11c-.55 0-1 .45-1 1z'
          ],
          reset: [
            'M6 5c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1s1 .45 1 1v1.74A7.95 7.95 0 018 0c4.42 0 8 3.58 8 8 0 4.06-3.02 7.4-6.94 7.92-.02 0-.04.01-.06.01-.33.04-.66.07-1 .07-4.42 0-8-3.58-8-8 0-.55.45-1 1-1s1 .45 1 1c0 3.31 2.69 6 6 6 .71 0 1.37-.15 2-.38v.01c2.33-.82 4-3.02 4-5.63 0-3.31-2.69-6-6-6-1.77 0-3.36.78-4.46 2H5c.55 0 1 .45 1 1z'
          ],
          resolve: [
            'M6.6 3.3C6.1 3.1 5.6 3 5 3 2.2 3 0 5.2 0 8s2.2 5 5 5c.6 0 1.1-.1 1.6-.3C5.3 11.6 4.5 9.9 4.5 8s.8-3.6 2.1-4.7zM8 4c-1.2.9-2 2.4-2 4s.8 3.1 2 4c1.2-.9 2-2.3 2-4s-.8-3.1-2-4zm3-1c-.6 0-1.1.1-1.6.3 1.3 1.2 2.1 2.9 2.1 4.7s-.8 3.6-2.1 4.7c.5.2 1 .3 1.6.3 2.8 0 5-2.2 5-5s-2.2-5-5-5z'
          ],
          rig: [
            'M5.71 3c0 1.1.96 2 2.14 2C9.04 5 10 3.96 10 3c0-1.96-1.47-3-2.14-3H5c0 1.96 2.68 1.4.71 3zm2.5 3l.01.01s0-.01-.01-.01zm6.5 8.29L10 9.59V7c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v2.58l-4.71 4.7c-.18.19-.29.44-.29.72a1.003 1.003 0 001.71.71L6 12.42V15c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.58l3.29 3.29a1.003 1.003 0 001.42-1.42z'
          ],
          'right-join': [
            'M6.6 3.3C5.3 4.4 4.5 6.1 4.5 8s.8 3.6 2.1 4.7c-.5.2-1 .3-1.6.3-2.8 0-5-2.2-5-5s2.2-5 5-5c.6 0 1.1.1 1.6.3zm-1.96 8.68C3.92 10.83 3.5 9.46 3.5 8s.42-2.83 1.14-3.98C2.6 4.2 1 5.91 1 8s1.6 3.8 3.64 3.98zM8 4c-1.2.9-2 2.4-2 4s.8 3.1 2 4c1.2-.9 2-2.3 2-4s-.8-3.1-2-4zm3-1c2.8 0 5 2.2 5 5s-2.2 5-5 5c-.6 0-1.1-.1-1.6-.3 1.3-1.1 2.1-2.9 2.1-4.7s-.8-3.5-2.1-4.7c.5-.2 1-.3 1.6-.3z'
          ],
          ring: [
            'M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z'
          ],
          'rotate-document': [
            'M12 2h-1.59l.29-.29c.19-.18.3-.43.3-.71A1.003 1.003 0 009.29.29l-2 2C7.11 2.47 7 2.72 7 3c0 .28.11.53.29.71l2 2a1.003 1.003 0 001.42-1.42l-.3-.29H12c.55 0 1 .45 1 1v3c0 .55.45 1 1 1s1-.45 1-1V5c0-1.66-1.34-3-3-3zM5.71 5.29A.997.997 0 005 5H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V9c0-.28-.11-.53-.29-.71l-3-3zM7 14H2V7h2v2c0 .55.45 1 1 1h2v4z'
          ],
          'rotate-page': [
            'M8 6H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zm-1 8H3V8h4v6zm5-12h-1.59l.29-.29c.19-.18.3-.43.3-.71A1.003 1.003 0 009.29.29l-2 2C7.11 2.47 7 2.72 7 3c0 .28.11.53.29.71l2 2a1.003 1.003 0 001.42-1.42l-.3-.29H12c.55 0 1 .45 1 1v3c0 .55.45 1 1 1s1-.45 1-1V5c0-1.66-1.34-3-3-3z'
          ],
          route: [
            'M11.669 5.066l.099.189c.113.213.236.434.367.661.226.39.468.78.709 1.151l-.198-.004-.48-.004c-1.745.003-2.369.233-2.369.688 0 .053.226.19 1.038.436l.84.24C13.9 9.064 15 9.83 15 11.63c0 2.123-1.607 3.122-4.027 3.366-.651.065-1.266.075-2.043.05l-.958-.035H5.196l.268-.406c.336-.517.672-1.052.998-1.593h1.636l.572.023c.857.036 1.475.034 2.103-.03 1.526-.153 2.227-.59 2.227-1.375 0-.531-.402-.84-1.66-1.22l-.691-.198c-1.04-.293-1.764-.562-2.222-.946C8.8 8.366 9 7.612 9 6.997a5.03 5.03 0 00-.184-1.334c.645-.395 1.598-.562 2.853-.597zM4 3a4.007 4.007 0 014 3.997C8 9.21 4 15 4 15l-.416-.62C2.56 12.827 0 8.767 0 6.997A4.002 4.002 0 014 3zm0 2a2 2 0 10.001 4.001A2 2 0 004 5zm10-4c1.103 0 1.996.896 2 1.999C16 4.105 14 7 14 7l-.293-.44C13.15 5.707 12 3.838 12 2.999 12 1.896 12.897 1 14 1z'
          ],
          satellite: [
            'M3 9c0-.6.4-1 1-1s1 .4 1 1c0 1.1.9 2 2 2 .6 0 1 .4 1 1s-.4 1-1 1c-2.2 0-4-1.8-4-4zM0 9c0-.6.4-1 1-1s1 .4 1 1c0 2.8 2.2 5 5 5 .6 0 1 .4 1 1s-.4 1-1 1c-3.9 0-7-3.1-7-7zm7 1c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1.3-2.8c-.4-.4-.4-1 0-1.4l4.5-4.5c.4-.4 1-.4 1.4 0l.5.5c.4.4.4 1 0 1.4l-4.5 4.5c-.4.4-1 .4-1.4 0l-.5-.5zM5.2.3c.4-.4 1-.4 1.4 0l2.1 2.1c.4.4.4 1 0 1.4l-.9.9c-.4.4-1 .4-1.4 0L4.3 2.6c-.4-.4-.4-1 0-1.4l.9-.9zm7 7c.4-.4 1-.4 1.4 0l2.1 2.1c.4.4.4 1 0 1.4l-.9.9c-.4.4-1 .4-1.4 0l-2.1-2.1c-.4-.4-.4-1 0-1.4l.9-.9z'
          ],
          saved: [
            'M6.71 9.29a1.003 1.003 0 00-1.42 1.42l2 2a.997.997 0 001.6-.27h.01l2-4h-.01c.06-.13.11-.28.11-.44 0-.55-.45-1-1-1-.39 0-.72.23-.89.56H9.1l-1.38 2.76-1.01-1.03zM9 0H3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V5L9 0zm3 14H4V2h4v4h4v8z'
          ],
          'scatter-plot': [
            'M15 12H2V3c0-.55-.45-1-1-1s-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm-.5-7c.83 0 1.5-.67 1.5-1.5S15.33 2 14.5 2 13 2.67 13 3.5 13.67 5 14.5 5zm-3 4c.83 0 1.5-.67 1.5-1.5S12.33 6 11.5 6 10 6.67 10 7.5 10.67 9 11.5 9zm-4-2C8.33 7 9 6.33 9 5.5S8.33 4 7.5 4 6 4.67 6 5.5 6.67 7 7.5 7zm-3 4c.83 0 1.5-.67 1.5-1.5S5.33 8 4.5 8 3 8.67 3 9.5 3.67 11 4.5 11z'
          ],
          search: [
            'M15.55 13.43l-2.67-2.68a6.94 6.94 0 001.11-3.76c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.39 0 2.68-.42 3.76-1.11l2.68 2.67a1.498 1.498 0 102.12-2.12zm-8.56-1.44c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z'
          ],
          'search-around': [
            'M13.5 11c-.51 0-.98.15-1.38.42l-2.4-2.41c.17-.3.28-.64.28-1.01s-.11-.71-.28-1.01l2.41-2.41c.39.27.86.42 1.37.42a2.5 2.5 0 000-5A2.5 2.5 0 0011 2.5c0 .51.15.98.42 1.38l-2.41 2.4C8.71 6.11 8.37 6 8 6s-.71.11-1.01.28l-2.41-2.4c.27-.4.42-.87.42-1.38a2.5 2.5 0 00-5 0A2.5 2.5 0 002.5 5c.51 0 .98-.15 1.38-.42l2.41 2.41C6.11 7.29 6 7.63 6 8s.11.71.28 1.01l-2.41 2.41c-.39-.27-.86-.42-1.37-.42a2.5 2.5 0 000 5A2.5 2.5 0 005 13.5c0-.51-.15-.98-.42-1.38l2.41-2.41c.3.18.64.29 1.01.29s.71-.11 1.01-.28l2.41 2.41c-.27.39-.42.86-.42 1.37a2.5 2.5 0 005 0 2.5 2.5 0 00-2.5-2.5zm0-10c.83 0 1.5.67 1.5 1.5S14.33 4 13.5 4 12 3.33 12 2.5 12.67 1 13.5 1zm-11 3C1.67 4 1 3.33 1 2.5S1.67 1 2.5 1 4 1.67 4 2.5 3.33 4 2.5 4zm0 11c-.83 0-1.5-.67-1.5-1.5S1.67 12 2.5 12s1.5.67 1.5 1.5S3.33 15 2.5 15zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z'
          ],
          'search-template': [
            'M15.55 13.43l-2.67-2.67c.7-1.09 1.11-2.38 1.11-3.77 0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.39 0 2.68-.41 3.77-1.11l2.67 2.67a1.498 1.498 0 102.12-2.12zm-8.56-1.44c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm2.5-6h-5c-.28 0-.5.22-.5.5s.22.5.5.5h5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5zm0-2h-5c-.28 0-.5.22-.5.5s.22.5.5.5h5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5zm0 4h-5c-.28 0-.5.22-.5.5s.22.5.5.5h5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5z'
          ],
          'search-text': [
            'M9 4H5c-.55 0-1 .45-1 1s.45 1 1 1h1v3c0 .55.45 1 1 1s1-.45 1-1V6h1c.55 0 1-.45 1-1s-.45-1-1-1zm6.56 9.44l-2.67-2.67C13.59 9.68 14 8.39 14 7c0-3.87-3.13-7-7-7S0 3.13 0 7s3.13 7 7 7c1.39 0 2.68-.41 3.77-1.11l2.67 2.67a1.498 1.498 0 102.12-2.12zM7 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z'
          ],
          'segmented-control': [
            'M15 4H1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-1 6H8V6h6v4z'
          ],
          select: [
            'M16 15c0-.28-.12-.52-.31-.69l.02-.02-3.12-3.12 3.41-.84-8.05-2.86c.03-.09.05-.17.05-.27V2c0-.55-.45-1-1-1H3c0-.55-.45-1-1-1S1 .45 1 1c-.55 0-1 .45-1 1s.45 1 1 1v4c0 .55.45 1 1 1h5.2c.1 0 .18-.02.27-.05L10.33 16l.85-3.41 3.12 3.12.02-.02c.16.19.4.31.68.31.04 0 .07-.02.1-.02s.06.02.1.02c.44 0 .8-.36.8-.8 0-.04-.02-.07-.02-.1s.02-.06.02-.1zM6 6H3V3h3v3z'
          ],
          selection: [
            'M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-9C6.34 5 5 6.34 5 8s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z'
          ],
          'send-message': [
            'M15.398 9.01l-13.87 6.865c-.536.267-1.176.081-1.422-.427A.953.953 0 010 15v-4.838l8.67-2.168L0 5.923V1.001C0 .47.407 0 1.004 0c.169 0 .416.04.567.116L15.403 7.07a1.084 1.084 0 01-.005 1.939z'
          ],
          'send-to': [
            'M15 7.5c-.8 0-1.5-.4-2-1l-1.2 1.2c-.4.5-1.1.7-1.8.7-1.4.1-2.5-1-2.5-2.4 0-.7.3-1.3.7-1.8L9.5 3c-.6-.5-1-1.2-1-2 0-.3.1-.7.2-1H8C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8v-.7c-.3.1-.6.2-1 .2zM15 0h-4c-.6 0-1 .5-1 1s.4 1 1 1h1.6L9.3 5.3c-.2.2-.3.4-.3.7 0 .5.4 1 1 1 .3 0 .5-.1.7-.3L14 3.4V5c0 .6.4 1 1 1 .5 0 1-.4 1-1V1c0-.5-.4-1-1-1z'
          ],
          'send-to-graph': [
            'M6 9H2c-.55 0-1 .45-1 1s.45 1 1 1h1.59L.3 14.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L5 12.41V14c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1zm8 .5c-.56 0-1.06.23-1.42.59l-2.13-1.24L8.99 8l3.59-2.09A2.002 2.002 0 0016 4.5c0-1.1-.9-2-2-2s-2 .9-2 2c0 .19.03.37.08.54L8.5 7.13v-3.2c.86-.22 1.5-1 1.5-1.93 0-1.1-.9-2-2-2S6 .9 6 2c0 .93.64 1.71 1.5 1.93v3.2l-.88-.52-2.7-1.57c.05-.17.08-.35.08-.54 0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2c.56 0 1.06-.23 1.42-.59l2.13 1.24 3.84 2.24 2.7 1.57c-.06.17-.09.35-.09.54 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2z'
          ],
          'send-to-map': [
            'M6 9H2c-.55 0-1 .45-1 1s.45 1 1 1h1.59L.3 14.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L5 12.41V14c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1zm9.55-5.83l-4.49-3A.975.975 0 009.99.15L5.53 2.82 1.56.17A1.003 1.003 0 000 1v6h2V2.87l2.94 1.96.06.03V7h1V4.86s.01 0 .01-.01L10 2.47v8.67s-.01 0-.01.01l-.99.58v2.33l1.47-.88 3.97 2.65A1.003 1.003 0 0016 15V4c0-.35-.18-.65-.45-.83zM14 13.13l-2.94-1.96c-.02-.01-.04-.02-.05-.03v-8.6l3 2v8.59z'
          ],
          'series-add': [
            'M10.68 7.9c.44.54 1.07.92 1.79 1.05l-2.76 2.76c-.18.18-.43.29-.71.29s-.53-.11-.71-.3L5 8.41l-3 3V13h13c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1s1 .45 1 1v4.59l2.29-2.3C4.47 6.11 4.72 6 5 6s.53.11.71.29L9 9.59l1.68-1.69zM15 3c.55 0 1 .45 1 1s-.45 1-1 1h-1v1c0 .55-.45 1-1 1s-1-.45-1-1V5h-1c-.55 0-1-.45-1-1s.45-1 1-1h1V2c0-.55.45-1 1-1s1 .45 1 1v1h1z'
          ],
          'series-configuration': [
            'M9.94 9.64c.65.23 1.34.36 2.06.36.14 0 .29-.01.43-.01L9.7 12.71c-.18.18-.43.29-.71.29-.28 0-.53-.11-.71-.3L5 9.41l-3 3V14h12.99c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1s1 .45 1 1v4.59l2.29-2.3C4.47 7.11 4.72 7 5 7c.28 0 .53.11.71.29L9 10.59l.94-.95zm4.73-6.44h.92c.22 0 .4.18.4.4v.8c0 .22-.18.4-.4.4h-.93c-.06.2-.14.38-.24.55l.66.65c.15.15.15.4 0 .55l-.54.55c-.15.15-.4.15-.55 0l-.65-.65c-.17.1-.36.18-.55.24v.91c0 .22-.18.4-.4.4h-.8c-.22 0-.4-.18-.4-.4v-.93c-.18-.06-.36-.13-.52-.22l-.68.68c-.15.16-.41.16-.57 0l-.56-.56a.417.417 0 010-.57l.68-.68c-.08-.16-.16-.33-.22-.52h-.93c-.22 0-.4-.18-.4-.4v-.8c0-.22.18-.4.4-.4h.93c.06-.2.14-.38.24-.55l-.65-.64a.392.392 0 010-.55l.54-.55a.38.38 0 01.54 0l.65.65c.18-.1.36-.18.55-.24V.4c0-.22.18-.4.4-.4h.8c.22 0 .4.18.4.4v.93c.18.06.35.14.52.22l.68-.68c.15-.16.41-.16.57 0l.57.57c.15.16.15.41 0 .57l-.68.68c.09.16.16.33.22.51zm-4.18.8c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5c-.82 0-1.5.67-1.5 1.5z'
          ],
          'series-derived': [
            'M10.66 7.92c.44.54 1.07.91 1.8 1.03L9.71 11.7c-.18.19-.43.3-.71.3s-.53-.11-.71-.3L5 8.41l-3 3V13h13c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1s1 .45 1 1v4.59l2.29-2.3C4.47 6.11 4.72 6 5 6s.53.11.71.29L9 9.59l1.66-1.67zM12.3 5.3l.3-.3H8c-.6 0-1-.4-1-1s.4-1 1-1h4.6l-.3-.3c-.2-.2-.3-.4-.3-.7 0-.6.5-1 1-1 .3 0 .5.1.7.3l2 2c.2.2.3.4.3.7s-.1.5-.3.7l-2 2c-.2.2-.4.3-.7.3-.6 0-1-.4-1-1 0-.3.1-.5.3-.7z'
          ],
          'series-filtered': [
            'M9.29 9.3c.3.62.8 1.12 1.42 1.41l-1 1c-.18.18-.43.29-.71.29s-.53-.11-.71-.3L5 8.41l-3 3V13h13c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1s1 .45 1 1v4.59l2.29-2.3C4.47 6.11 4.72 6 5 6s.53.11.71.29L9 9.59l.29-.29zM15.48 1c.31 0 .52.26.52.57 0 .16-.06.3-.17.41l-2.86 2.73v2.63c0 .16-.06.3-.17.41l-.82 1.1c-.1.1-.25.17-.41.17-.31 0-.57-.26-.57-.57V4.71L8.17 1.98A.566.566 0 018 1.57c0-.31.26-.57.57-.57h6.91z'
          ],
          'series-search': [
            'M9.6 8.94a4.937 4.937 0 001.82.01c.1-.01.22-.04.39-.08l.23-.07c.04-.01.08-.02.11-.04l.22.22-2.7 2.72c-.18.19-.43.3-.71.3s-.53-.11-.71-.3L4.98 8.41l-2.99 3V13h12.94c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1V3.99c0-.55.45-1 1-1s1 .45 1 1v4.59l2.28-2.3c.17-.18.42-.29.7-.29s.53.11.7.29l3.28 3.3.64-.64zm6.22-.41c.1.12.17.27.18.44 0 .34-.27.61-.61.61a.57.57 0 01-.43-.18l-2.24-2.25c-.13.08-.26.16-.4.23-.02.01-.05.02-.07.03-.14.06-.27.12-.42.17h-.01c-.14.05-.29.08-.44.11-.04.01-.08.02-.11.02-.15.02-.3.04-.46.04-1.85 0-3.35-1.51-3.35-3.37S8.96 1.01 10.81 1c1.85 0 3.35 1.51 3.35 3.37 0 .16-.02.31-.04.47-.01.04-.01.07-.02.11-.02.15-.05.29-.1.44v.01c-.05.15-.11.28-.17.42-.01.02-.02.05-.03.07-.07.14-.14.27-.23.4l2.25 2.24zm-5.01-1.94c1.22 0 2.21-.99 2.21-2.22 0-1.23-.99-2.22-2.21-2.22S8.6 3.14 8.6 4.37c0 1.22.99 2.22 2.21 2.22z'
          ],
          settings: [
            'M3 1c0-.55-.45-1-1-1S1 .45 1 1v3h2V1zm0 4H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm12-4c0-.55-.45-1-1-1s-1 .45-1 1v2h2V1zM9 1c0-.55-.45-1-1-1S7 .45 7 1v6h2V1zM1 15c0 .55.45 1 1 1s1-.45 1-1v-5H1v5zM15 4h-2c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-2 11c0 .55.45 1 1 1s1-.45 1-1V9h-2v6zM9 8H7c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-2 7c0 .55.45 1 1 1s1-.45 1-1v-2H7v2z'
          ],
          share: [
            'M10.99 13.99h-9v-9h4.76l2-2H.99c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V7.24l-2 2v4.75zm4-14h-5c-.55 0-1 .45-1 1s.45 1 1 1h2.59L7.29 7.28a1 1 0 00-.3.71 1.003 1.003 0 001.71.71l5.29-5.29V6c0 .55.45 1 1 1s1-.45 1-1V1c0-.56-.45-1.01-1-1.01z'
          ],
          shield: [
            'M8 16c4.667-3.048 7-7.238 7-12.571-1.556 0-3.889-1.143-7-3.429-3.111 2.286-5.444 3.429-7 3.429C1 8.762 3.333 12.952 8 16zM8 2.121c2.005 1.388 3.715 2.304 5.186 2.735-.342 3.702-2.05 6.683-5.186 9.038V2.121z'
          ],
          shop: [
            'M3 2h10c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1zm9 11H4v-3H2v5c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-5h-2v3zm4-6l-1.01-3.17C14.9 3.36 14.49 3 14 3H2c-.49 0-.9.36-.98.83L.01 7H0c0 1.1.9 2 2 2s2-.9 2-2c0 1.1.9 2 2 2s2-.9 2-2c0 1.1.9 2 2 2s2-.9 2-2c0 1.1.9 2 2 2s2-.9 2-2z'
          ],
          'shopping-cart': [
            'M14 10H7.72l-.33-1H13c.39 0 .72-.23.89-.56h.01l2-4h-.01c.06-.13.11-.28.11-.44 0-.55-.45-1-1-1H5.39l-.44-1.32h-.01C4.8 1.29 4.44 1 4 1H1c-.55 0-1 .45-1 1s.45 1 1 1h2.28l2.33 7H4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2h6c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2zM6.05 5h7.33l-1 2H6.72l-.67-2z'
          ],
          'signal-search': [
            'M5.474 7.971A5.31 5.31 0 006.66 8.9l.007.019.018.056c.015.038.038.06.045.098l1.5 5.999a.75.75 0 01-1.455.36l-.42-1.68h-.704l-.42 1.68a.746.746 0 01-.907.547.746.746 0 01-.547-.907l1.5-6c.007-.037.03-.06.044-.097.015-.037.015-.075.038-.112a.722.722 0 01-.105-.36c0-.207.084-.394.22-.53zM2.795 5.277a.763.763 0 00-.015-1.065.756.756 0 00-1.065.015c-2.286 2.34-2.286 6.21 0 8.549a.747.747 0 101.072-1.042c-1.709-1.763-1.709-4.702.008-6.457zM7.808 9.388a5.318 5.318 0 001.58.211 2.236 2.236 0 01-.656.98.756.756 0 01-1.057-.098.756.756 0 01.097-1.057l.036-.036zM11.544 9.105l.378.378a6.02 6.02 0 01-1.638 3.285c-.285.3-.757.3-1.057.015a.74.74 0 01-.015-1.057 4.52 4.52 0 001.185-2.24c.4-.083.785-.212 1.147-.381z',
            'M4.054 9.424c-.427-.352-.352-1.582-.03-1.822a.752.752 0 00.15-1.05.752.752 0 00-1.05-.15c-1.079.802-1.221 3.18-.03 4.177a.75.75 0 10.96-1.155zM9.318 0a4.318 4.318 0 014.317 4.318c0 .206-.02.402-.049.598-.01.05-.01.088-.02.138-.039.196-.078.382-.137.569v.01c-.059.186-.137.363-.216.54l-.039.087a5.285 5.285 0 01-.294.51l2.884 2.886a.878.878 0 01.236.559.787.787 0 01-.785.785.785.785 0 01-.56-.226L11.772 7.89a5.285 5.285 0 01-.51.295l-.089.039c-.176.079-.353.157-.54.216h-.01a3.701 3.701 0 01-.568.137c-.05.01-.099.02-.138.02-.196.03-.392.049-.598.049A4.318 4.318 0 015 4.327 4.332 4.332 0 019.318 0zm-.02 1.1A3.195 3.195 0 006.1 4.298a3.195 3.195 0 003.198 3.198 3.195 3.195 0 003.198-3.198A3.195 3.195 0 009.298 1.1z'
          ],
          'sim-card': [
            'M13.71 4.29l-4-4A.997.997 0 009 0H3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V5c0-.28-.11-.53-.29-.71zM7 6h2v2H7V6zM4 6h2v2H4V6zm2 8H4v-2h2v2zm3 0H7v-2h2v2zm3 0h-2v-2h2v2zm0-3H4V9h8v2zm0-3h-2V6h2v2z'
          ],
          slash: [
            'M10 2a.99.99 0 00-.96.73l-2.99 9.96A1.003 1.003 0 007 14c.46 0 .85-.31.96-.73l2.99-9.96A1.003 1.003 0 0010 2z'
          ],
          'small-cross': [
            'M9.41 8l2.29-2.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L8 6.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42L6.59 8 4.3 10.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L8 9.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L9.41 8z'
          ],
          'small-minus': [
            'M11 7H5c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'small-plus': [
            'M11 7H9V5c0-.55-.45-1-1-1s-1 .45-1 1v2H5c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V9h2c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'small-tick': [
            'M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z'
          ],
          snowflake: [
            'M13.364 9l.879.879a1 1 0 11-1.415 1.414l-2.12-2.121A1.003 1.003 0 0110.568 9H9v1.604c.042.03.083.065.121.103l2.122 2.121a1 1 0 01-1.415 1.415L9 13.414V15a1 1 0 01-2 0v-1.636l-.879.879a1 1 0 11-1.414-1.415l2.121-2.12c.054-.054.111-.1.172-.139V9H5.38c-.038.06-.084.118-.137.172l-2.122 2.12A1 1 0 111.707 9.88L2.586 9H1a1 1 0 110-2h1.536l-.829-.828a1 1 0 011.414-1.415L5.243 6.88c.038.038.072.079.103.121H7V5.38a1.003 1.003 0 01-.172-.137L4.708 3.12A1 1 0 016.12 1.707L7 2.586V1a1 1 0 112 0v1.536l.828-.829a1 1 0 011.415 1.414L9.12 5.243A1.007 1.007 0 019 5.346V7h1.604c.03-.042.065-.083.103-.121l2.121-2.122a1 1 0 011.415 1.415L13.414 7H15a1 1 0 010 2h-1.636z'
          ],
          'social-media': [
            'M9.5 4c.4 0 .8-.1 1.1-.3C12 4.5 12.9 6 13 7.6c0 .5.5.9 1 .9.6 0 1-.4 1-1v-.2c-.2-2.4-1.5-4.4-3.5-5.5-.1-1-.9-1.8-2-1.8s-2 .9-2 2 .9 2 2 2zM4 8.5c0-.7-.4-1.3-.9-1.7.3-1.4 1.2-2.6 2.5-3.3.3-.1.6-.4.6-.9s-.4-1-1-1c-.2 0-.3 0-.5.1-1.9 1-3.2 2.8-3.6 5C.4 7.1 0 7.8 0 8.5c0 1.1.9 2 2 2s2-.9 2-2zm8.8 1.2c-1.1 0-2 .9-2 2v.3c-.8.6-1.8.9-2.8.9-1.2 0-2.3-.4-3.2-1.1-.2-.2-.4-.3-.7-.3-.6 0-1 .4-1 1 0 .3.1.6.3.8C4.6 14.4 6.2 15 8 15c1.5 0 3-.5 4.1-1.3.2.1.5.1.7.1 1.1 0 2-.9 2-2s-.9-2.1-2-2.1z'
          ],
          sort: [
            'M5 12c-.28 0-.53.11-.71.29l-.29.3V9c0-.55-.45-1-1-1s-1 .45-1 1v3.59l-.29-.29A.965.965 0 001 12a1.003 1.003 0 00-.71 1.71l2 2c.18.18.43.29.71.29s.53-.11.71-.29l2-2A1.003 1.003 0 005 12zm3-9h7c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zm7 2H8c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1zm0 8H8c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1zm0-4H8c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'sort-alphabetical': [
            'M6 12c-.28 0-.53.11-.71.29l-.29.3V9c0-.55-.45-1-1-1s-1 .45-1 1v3.59l-.29-.29A.965.965 0 002 12a1.003 1.003 0 00-.71 1.71l2 2c.19.18.44.29.71.29.28 0 .53-.11.71-.29l2-2c.18-.18.29-.43.29-.71a.99.99 0 00-1-1zm7.93-.95v-1.04H9.25v1.11h2.94L9 14.96V16h5.02v-1.11h-3.27l3.18-3.84zm-1.42-4.84l.62 1.78H15L11.94.01H10.1L7 7.99h1.81l.64-1.78h3.06zm-1.52-4.24h.02l1.03 2.93H9.92l1.07-2.93z'
          ],
          'sort-alphabetical-desc': [
            'M5.99 11.99c-.28 0-.53.11-.71.29l-.29.29V8.99c0-.55-.45-1-1-1s-1 .45-1 1v3.59l-.29-.29a1.003 1.003 0 00-1.42 1.42l2 2c.18.18.43.29.71.29.28 0 .53-.11.71-.29l2-2c.18-.18.29-.43.29-.71 0-.56-.45-1.01-1-1.01zM12.7 10h-1.38L9 15.99h1.36l.48-1.33h2.3l.46 1.33H15L12.7 10zm-1.51 3.67l.8-2.2h.02l.77 2.2h-1.59zm3.8-7.17h-4.57l4.45-5.12V0H8.34v1.48h4.1L7.99 6.59v1.39h7V6.5z'
          ],
          'sort-asc': [
            'M8 7h3c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zm0-4h1c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zm0 8h5c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zm-3 1c-.28 0-.53.11-.71.29l-.29.3V9c0-.55-.45-1-1-1s-1 .45-1 1v3.59l-.29-.29A.965.965 0 001 12a1.003 1.003 0 00-.71 1.71l2 2c.18.18.43.29.71.29s.53-.11.71-.29l2-2A1.003 1.003 0 005 12zm10 1H8c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'sort-desc': [
            'M5 12c-.28 0-.53.11-.71.29l-.29.3V9c0-.55-.45-1-1-1s-1 .45-1 1v3.59l-.29-.29A.965.965 0 001 12a1.003 1.003 0 00-.71 1.71l2 2c.18.18.43.29.71.29s.53-.11.71-.29l2-2A1.003 1.003 0 005 12zm4 1H8c-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1-.45 1-1s-.45-1-1-1zm4-8H8c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1zm-2 4H8c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1zm4-8H8c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'sort-numerical': [
            'M6 11.99c-.28 0-.53.11-.71.29l-.29.3V8.99c0-.55-.45-1-1-1s-1 .45-1 1v3.59l-.29-.29c-.18-.18-.43-.3-.71-.3a1.003 1.003 0 00-.71 1.71l2 2c.18.18.43.29.71.29.28 0 .53-.11.71-.29l2-2A1.003 1.003 0 006 11.99zm7.91-.08c-.06-.36-.17-.68-.33-.96-.16-.28-.37-.51-.64-.69-.27-.17-.61-.26-1.03-.26-.28 0-.54.06-.78.17-.23.11-.43.26-.6.45-.17.19-.3.41-.39.67a2.492 2.492 0 00-.04 1.52 1.623 1.623 0 00.89 1.03c.22.11.45.16.68.16.26 0 .5-.05.7-.15s.38-.26.53-.5l.02.02c-.01.16-.03.34-.07.54-.03.2-.09.4-.17.57-.08.18-.18.33-.31.45s-.29.19-.5.19a.63.63 0 01-.48-.21c-.13-.14-.21-.31-.25-.5H10.1c.03.25.1.48.19.68.1.2.22.37.38.5.16.14.33.24.54.31s.42.1.65.1c.39 0 .72-.09.99-.27.27-.18.49-.41.66-.7.17-.29.29-.61.37-.97.08-.36.12-.72.12-1.07 0-.36-.03-.72-.09-1.08zm-1.14.54c-.04.13-.09.24-.16.34a.78.78 0 01-.27.24c-.11.06-.24.09-.39.09a.75.75 0 01-.37-.09.777.777 0 01-.26-.25c-.07-.1-.12-.22-.15-.35-.03-.13-.05-.26-.05-.4 0-.13.02-.26.05-.39.04-.13.09-.24.16-.34.07-.1.16-.18.26-.24s.22-.09.35-.09c.14 0 .26.03.37.09.11.06.2.14.28.24a1.32 1.32 0 01.23.74c0 .15-.02.28-.05.41zm-1.56-4.47H13V0h-1.42c-.05.3-.16.56-.31.76-.16.21-.35.37-.58.5-.23.13-.49.21-.78.26-.3.05-.6.07-.91.06V2.8h2.21v5.18z'
          ],
          'sort-numerical-desc': [
            'M6 11.99c-.28 0-.53.11-.71.29l-.29.3V8.99c0-.55-.45-1-1-1s-1 .45-1 1v3.59l-.29-.29a.982.982 0 00-.71-.3 1.003 1.003 0 00-.71 1.71l2 2c.18.18.43.29.71.29s.53-.11.71-.29l2-2A1.003 1.003 0 006 11.99zm7.86-9.45c-.09-.48-.26-.9-.5-1.28S12.8.58 12.4.35C12 .12 11.49 0 10.86 0c-.43 0-.82.07-1.17.22s-.65.35-.9.6-.44.55-.58.89c-.14.34-.2.71-.2 1.11 0 .31.05.61.15.91.1.3.26.57.48.8.23.24.52.43.85.58.33.14.68.21 1.03.21.4 0 .75-.07 1.05-.2.3-.13.57-.35.79-.66l.02.02c-.02.21-.05.45-.1.73-.05.27-.13.53-.25.76-.12.24-.27.44-.47.6-.19.16-.44.25-.75.25a.98.98 0 01-.72-.29c-.19-.18-.31-.4-.37-.66H8.15c.05.34.14.64.29.9.15.26.34.49.57.67.23.18.5.32.8.41.31.1.63.15.98.15.58 0 1.08-.12 1.48-.36.4-.24.73-.55.99-.93.26-.39.44-.82.56-1.29.12-.48.18-.96.18-1.44s-.05-.96-.14-1.44zm-1.71.72c-.05.17-.14.32-.24.46-.11.13-.24.24-.41.31-.16.08-.36.12-.58.12-.21 0-.39-.04-.55-.13-.16-.08-.29-.19-.39-.33-.12-.14-.19-.29-.24-.46-.05-.17-.08-.35-.08-.54 0-.18.03-.35.08-.52.06-.16.14-.31.25-.44.11-.13.24-.24.4-.32.16-.08.33-.12.52-.12.21 0 .4.04.56.12.16.08.3.19.41.32.11.14.2.29.26.46.06.17.09.35.09.52 0 .2-.03.38-.08.55zm-.46 7.31c-.12.15-.26.28-.44.37-.17.09-.37.16-.58.2-.22.04-.44.05-.67.05v.92h1.65v3.88h1.33V10h-1.06c-.03.23-.11.42-.23.57z'
          ],
          'split-columns': [
            'M12 10a1.003 1.003 0 001.71.71l2-2c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-2-2a1.003 1.003 0 00-1.42 1.42l.3.29H9V2h3v1.71c.31-.13.64-.21 1-.21s.69.08 1 .21V1c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v2.71c.31-.13.64-.21 1-.21s.69.08 1 .21V2h3v5H3.41l.29-.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-2 2C.11 7.47 0 7.72 0 8c0 .28.11.53.29.71l2 2a1.003 1.003 0 001.42-1.42L3.41 9H7v5H4v-1.71c-.31.13-.64.21-1 .21s-.69-.08-1-.21V15c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-2.71c-.31.13-.64.21-1 .21s-.69-.08-1-.21V14H9V9h3.59l-.29.29c-.19.18-.3.43-.3.71z'
          ],
          square: [
            'M15 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 14H2V2h12v12z'
          ],
          'stacked-chart': [
            'M10 2c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v3h3V2zm3 10h1c.55 0 1-.45 1-1V8h-3v3c0 .55.45 1 1 1zm2-7c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v2h3V5zm-5 1H7v3h3V6zM5 7c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v1h3V7zm3 5h1c.55 0 1-.45 1-1v-1H7v1c0 .55.45 1 1 1zm7 1H2c-.55 0-1 .45-1 1s.45 1 1 1h13c.55 0 1-.45 1-1s-.45-1-1-1zM3 12h1c.55 0 1-.45 1-1V9H2v2c0 .55.45 1 1 1z'
          ],
          star: [
            'M8 0l2.5 5.3 5.5.8-4 4.1.9 5.8L8 13.3 3.1 16l.9-5.8-4-4.1 5.5-.8z'
          ],
          'star-empty': [
            'M16 6.11l-5.53-.84L8 0 5.53 5.27 0 6.11l4 4.1L3.06 16 8 13.27 12.94 16 12 10.21l4-4.1zM4.91 13.2l.59-3.62L3 7.02l3.45-.53L8 3.2l1.55 3.29 3.45.53-2.5 2.56.59 3.62L8 11.49 4.91 13.2z'
          ],
          'step-backward': [
            'M12 3c-.24 0-.44.09-.62.23l-.01-.01L7 6.72V4c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V9.28l4.38 3.5.01-.01c.17.14.37.23.61.23.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z'
          ],
          'step-chart': [
            'M15 12H2v-2h3c.55 0 1-.45 1-1V7h2v1c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V5h1c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1v3h-2V6c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v2H2V3c0-.55-.45-1-1-1s-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'step-forward': [
            'M12 3h-1c-.55 0-1 .45-1 1v2.72l-4.38-3.5v.01A.987.987 0 005 3c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1 .24 0 .44-.09.62-.23l.01.01L10 9.28V12c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z'
          ],
          stop: [
            'M12 3H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z'
          ],
          stopwatch: [
            'M9 2v1.083A6.002 6.002 0 018 15 6 6 0 017 3.083V2H6a1 1 0 110-2h4a1 1 0 010 2H9zM8 5a4 4 0 104 4H8V5z'
          ],
          strikethrough: [
            'M14 7H8.65c-.38-.09-.73-.18-1.04-.26-.31-.08-.49-.13-.54-.14-.43-.11-.79-.29-1.05-.52-.27-.23-.4-.55-.4-.95 0-.29.07-.53.21-.72s.32-.34.54-.46c.22-.11.46-.19.72-.24.26-.05.52-.07.77-.07.74 0 1.36.15 1.84.46.32.2.55.5.68.9h2.22c-.06-.33-.17-.64-.32-.92-.25-.45-.59-.84-1.02-1.15-.43-.31-.93-.54-1.49-.7S8.59 2 7.95 2c-.55 0-1.1.07-1.63.2-.54.13-1.02.34-1.45.62-.42.28-.76.63-1.02 1.05-.26.42-.39.92-.39 1.5 0 .3.04.59.13.88.08.26.21.51.39.75H2c-.55 0-1 .45-1 1s.45 1 1 1h7.13c.25.07.49.14.71.22.25.09.48.23.7.44.21.21.32.53.32.97 0 .21-.05.43-.14.63-.09.21-.24.39-.45.55-.21.16-.48.29-.81.39-.33.1-.73.15-1.2.15-.44 0-.84-.05-1.21-.14-.37-.09-.7-.24-.99-.43-.29-.2-.51-.45-.67-.76-.01 0-.01-.01-.02-.02H3.14a3.68 3.68 0 001.39 2.03c.46.34 1 .58 1.62.74.61.15 1.27.23 1.97.23.61 0 1.2-.07 1.79-.2.58-.13 1.11-.34 1.56-.63.46-.29.83-.66 1.11-1.11.28-.45.42-1 .42-1.64 0-.3-.05-.6-.15-.9-.05-.19-.13-.36-.22-.52H14c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          style: [
            'M14 14H2V2h8.76l2-2H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V6.24l-2 2V14zm1.4-14L9.7 5.7l2.1 2.1L16 3.6V0h-.6zM4 11.92c2.33.15 4.42.15 6.15-1.5.82-.83.82-2.25 0-3.08-.45-.38-.98-.6-1.5-.6-.53 0-1.05.22-1.43.6-.82.91-1.27 3.38-3.22 4.58z'
          ],
          'swap-horizontal': [
            'M0 7.02L.05 7H0v.02zm2-2.03h9.57l-1.29 1.29A1.003 1.003 0 0011.7 7.7l2.99-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-2.99-3a1.07 1.07 0 00-.71-.28 1.003 1.003 0 00-.71 1.71L11.57 3H2c-.55 0-1 .45-1 1a1 1 0 001 .99zM15.96 9H16v-.02l-.04.02zM14 11.01H4.43l1.29-1.29A1.003 1.003 0 004.3 8.3l-2.99 3a.99.99 0 00-.29.7c0 .28.11.53.29.71l2.99 3a1.003 1.003 0 001.42-1.42L4.43 13H14c.55 0 1-.45 1-1s-.45-.99-1-.99z'
          ],
          'swap-vertical': [
            'M9 0h-.02L9 .04V0zM7 16h.02L7 15.95V16zM4.7 1.31c-.18-.18-.43-.29-.7-.29s-.53.11-.71.29l-3 2.99a1.003 1.003 0 001.42 1.42L3 4.43V14c0 .55.45 1 1 1s1-.45 1-1V4.43l1.29 1.29c.18.18.43.29.7.29A1.003 1.003 0 007.7 4.3l-3-2.99zM15 9.99c-.28 0-.53.11-.71.29L13 11.57V2c0-.55-.45-1-1-1s-1 .45-1 1v9.57l-1.29-1.29a.99.99 0 00-.7-.29 1.003 1.003 0 00-.71 1.71l3 2.99c.18.18.43.29.71.29.28 0 .53-.11.71-.29l3-2.99c.18-.18.29-.43.29-.71-.01-.55-.46-1-1.01-1z'
          ],
          switch: [
            'M9.293 2.293l1.414 1.414-4.999 5a3 3 0 11-1.415-1.415l5-5zM13 7a3 3 0 110 6 3 3 0 010-6zM3 9a1 1 0 100 2 1 1 0 000-2zm10 0a1 1 0 100 2 1 1 0 000-2z'
          ],
          'symbol-circle': ['M8 3.01a5 5 0 100 10 5 5 0 100-10z'],
          'symbol-cross': [
            'M12 6.01h-2v-2c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v2H4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2h2c.55 0 1-.45 1-1v-2c0-.56-.45-1-1-1z'
          ],
          'symbol-diamond': [
            'M12 8.01c0-.19-.07-.36-.16-.51l.01-.01-3-5-.01.01c-.17-.29-.48-.49-.84-.49s-.67.2-.84.49l-.02-.01-3 5 .02.01c-.09.15-.16.32-.16.51s.07.36.16.51h-.02l3 5 .01-.01c.18.29.49.5.85.5s.67-.2.84-.49l.01.01 3-5-.01-.01c.09-.16.16-.32.16-.51z'
          ],
          'symbol-square': [
            'M12 3.01H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-8c0-.56-.45-1-1-1z'
          ],
          'symbol-triangle-down': [
            'M13 4.01c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 .16.05.31.11.44H3.1l4 8h.01c.16.33.49.56.89.56s.72-.23.89-.56h.01l4-8h-.01c.06-.14.11-.28.11-.44z'
          ],
          'symbol-triangle-up': [
            'M12.89 11.56l-3.99-8h-.01c-.17-.32-.5-.55-.89-.55s-.72.23-.89.55H7.1l-4 8h.01c-.06.14-.11.29-.11.45 0 .55.45 1 1 1h8c.55 0 1-.45 1-1 0-.16-.05-.31-.11-.45z'
          ],
          tag: [
            'M1 3a2 2 0 012-2h4.584a2 2 0 011.414.586l5.413 5.412a2 2 0 010 2.829L9.827 14.41a2 2 0 01-2.829 0L1.586 8.998A2 2 0 011 7.584V3zm3.487-.007a1.494 1.494 0 100 2.988 1.494 1.494 0 000-2.988z'
          ],
          'take-action': [
            'M9 11a1.003 1.003 0 001.71.71l4-4a1.003 1.003 0 00-1.42-1.42l-4 4c-.18.18-.29.43-.29.71zM4 6c.28 0 .53-.11.71-.29l4-4A1.003 1.003 0 007.29.29l-4 4A1.003 1.003 0 004 6zm4 4l5-5-.79-.79.5-.5a1.003 1.003 0 00-1.42-1.42l-.5.5L10 2 5 7l.79.79-5.5 5.5a1.003 1.003 0 001.42 1.42l5.5-5.5L8 10zm7 4H7c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          taxi: [
            'M15.12 6.63h-.38L15 7c-.01.3-.01.64 0 .98V8c0 .07-.03.13-.04.19h.02L14 13.1v.9c0 .55-.45 1-1 1s-1-.45-1-1v-1H4v1c0 .55-.45 1-1 1s-1-.45-1-1v-.9l-.98-4.9h.02C1.03 8.13 1 8.07 1 8H.99c0-.33 0-.67.01-1l.26-.37H.88C.4 6.63 0 6.21 0 5.69s.4-.94.88-.94h1.05l.77-2.11c.19-.53.76-1.08 1.26-1.24 0 0 .68-.2 2.05-.32C6.01 1.05 6 1.03 6 1c0-.55.45-1 1-1h2c.55 0 1 .45 1 1 0 .03-.01.05-.02.08 1.37.12 2.05.32 2.05.32.51.15 1.08.71 1.27 1.24l.76 2.12h1.05c.49 0 .89.42.89.93 0 .52-.4.94-.88.94zM11 10h2V8h-2v2zm-8 0h2V8H3v2zm10-5l-.73-1.63C12.21 3.19 12.18 3 12 3H4c-.18 0-.21.19-.27.37L3 5c-.06.18-.18 1 0 1h10c.18 0 .06-.82 0-1z'
          ],
          'text-highlight': [
            'M9 10H2V6h7V4H1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h8v-2zm4 3h-1V3h1c.55 0 1-.45 1-1s-.45-1-1-1h-1c-.37 0-.7.11-1 .28-.3-.17-.63-.28-1-.28H9c-.55 0-1 .45-1 1s.45 1 1 1h1v10H9c-.55 0-1 .45-1 1s.45 1 1 1h1c.37 0 .7-.11 1-.28.3.17.63.28 1 .28h1c.55 0 1-.45 1-1s-.45-1-1-1zm2-9h-2v2h1v4h-1v2h2c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1z'
          ],
          th: [
            'M15 1H1c-.6 0-1 .5-1 1v12c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V2c0-.5-.4-1-1-1zM6 13H2v-2h4v2zm0-3H2V8h4v2zm0-3H2V5h4v2zm8 6H7v-2h7v2zm0-3H7V8h7v2zm0-3H7V5h7v2z'
          ],
          'th-derived': [
            'M5.6 10l-.3.3c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3l2-2c.2-.2.3-.4.3-.7s-.1-.5-.3-.7l-2-2C6.5 6.1 6.3 6 6 6c-.5 0-1 .4-1 1 0 .3.1.5.3.7l.3.3H1c-.6 0-1 .4-1 1s.4 1 1 1h4.6zM15 1H2c-.5 0-1 .5-1 1v5h2V5h11v2H8.8l.6.6c.1.1.2.3.3.4H14v2H9.7c-.1.1-.2.3-.3.4l-.6.6H14v2H3v-2H1v3c0 .5.5 1 1 1h13c.6 0 1-.5 1-1V2c0-.5-.4-1-1-1z'
          ],
          'th-disconnect': [
            'M12 1h3c.6 0 1 .5 1 1v12c0 .6-.4 1-1 1h-4.97l.286-2H14v-2h-3.398l.143-1H14V8h-2.97l.143-1H14V5h-2.541l.51-3.576C11.99 1.282 12 1.14 12 1zM5.97 1l-.572 4H2v2h3.112L4.97 8H2v2h2.684l-.143 1H2v2h2.255l-.225 1.576c-.02.142-.03.284-.03.424H1c-.6 0-1-.4-1-1V2c0-.5.4-1 1-1h4.97zM8.01.859a1 1 0 111.98.282l-2 14a1 1 0 11-1.98-.282l2-14z'
          ],
          'th-filtered': [
            'M10 10h3l1.78-2.226a1 1 0 00.22-.625V4.3l1-.9V14c0 .6-.4 1-1 1H1c-.6 0-1-.4-1-1V2c0-.5.4-1 1-1h4.333L9 4.3V5H7v2h2v1H7v2h3zm-4 3v-2H2v2h4zm0-3V8H2v2h4zm0-3V5H2v2h4zm8 6v-2H7v2h7z',
            'M15.48 0c.31 0 .52.26.52.57 0 .16-.06.3-.17.41l-2.86 2.73v2.63c0 .16-.06.3-.17.41l-.82 1.1c-.1.1-.25.17-.41.17-.31 0-.57-.26-.57-.57V3.71L8.17.98A.566.566 0 018 .57c0-.31.26-.57.57-.57h6.91z'
          ],
          'th-list': [
            'M15 1H1c-.6 0-1 .5-1 1v12c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V2c0-.5-.4-1-1-1zm-1 12H2v-2h12v2zm0-3H2V8h12v2zm0-3H2V5h12v2z'
          ],
          'thumbs-down': [
            'M2 2H0v7h2c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm13.99 4.38c.08-.58-.44-1.02-1.15-1.05-.25-.01-.52-.03-.81-.05.02 0 .05-.01.07-.01.7-.1 1.34-.49 1.41-1.07.06-.58-.46-.97-1.17-1.04-.25-.02-.52-.04-.79-.06.47-.15.84-.42.87-.93.04-.58-.79-1.03-1.5-1.09-.27-.02-.51-.04-.73-.05h-.09c-.23-.02-.43-.02-.62-.03C8.35.95 5.66 1.47 4 2.51v6c2.14 1.29 4.76 3.59 4.21 5.51-.18.59.31 1.05.98.98.81-.09 1.37-.91 1.4-1.78.04-1-.15-2.01-.5-2.91-.04-.25.01-.5.37-.53.49-.03 1.11-.06 1.59-.08.26 0 .51-.01.75-.02h.01c.41-.02.8-.05 1.13-.09.7-.09 1.35-.47 1.43-1.05.08-.58-.44-.97-1.15-1.05-.05-.01-.11-.01-.16-.02.17-.01.33-.03.49-.05.72-.08 1.37-.46 1.44-1.04z'
          ],
          'thumbs-up': [
            'M15.99 9.62c-.08-.58-.73-.96-1.43-1.05-.15-.02-.32-.04-.49-.05.06-.01.11-.01.16-.02.71-.08 1.23-.47 1.15-1.05-.08-.58-.73-.96-1.43-1.05-.34-.04-.72-.07-1.13-.09h-.01c-.24-.01-.49-.02-.75-.02-.48-.02-1.11-.04-1.59-.08-.36-.03-.41-.28-.37-.53.35-.9.54-1.91.5-2.91-.04-.85-.6-1.68-1.41-1.77-.67-.07-1.16.39-.99.98C8.76 3.91 6.13 6.2 4 7.49v6c1.66 1.03 4.35 1.56 7.48 1.5.19 0 .39-.01.62-.02h.09c.22-.01.46-.03.73-.05.71-.06 1.54-.51 1.5-1.09-.03-.51-.4-.79-.87-.93.27-.02.54-.04.79-.06.71-.06 1.24-.45 1.17-1.04-.06-.58-.7-.97-1.41-1.07-.02 0-.05-.01-.07-.01.29-.02.57-.03.81-.05.71-.03 1.23-.47 1.15-1.05zM2 7H0v7h2c.55 0 1-.45 1-1V8c0-.56-.45-1-1-1z'
          ],
          tick: [
            'M14 3c-.28 0-.53.11-.71.29L6 10.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42l4 4c.18.18.43.29.71.29s.53-.11.71-.29l8-8A1.003 1.003 0 0014 3z'
          ],
          'tick-circle': [
            'M8 16c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm4-11c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z'
          ],
          time: [
            'M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm1-6.41V4c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .28.11.53.29.71l2 2a1.003 1.003 0 001.42-1.42L9 7.59z'
          ],
          'timeline-area-chart': [
            'M15 2.59L9.91 7.68 6.6 5.2l-.01.01C6.42 5.09 6.23 5 6 5c-.24 0-.44.09-.62.23v-.01L3 7.12V11h12V2.59zM15 12H2V3c0-.55-.45-1-1-1s-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'timeline-bar-chart': [
            'M8 12h1c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1zm5 0h1c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1zm2 1H2c-.55 0-1 .45-1 1s.45 1 1 1h13c.55 0 1-.45 1-1s-.45-1-1-1zM3 12h1c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1z'
          ],
          'timeline-events': [
            'M8 11H7v1h1v-1zm-4 0H3v1h1v-1zm7-8c.6 0 1-.5 1-1V1c0-.5-.4-1-1-1s-1 .5-1 1v1c0 .5.5 1 1 1zM4 3c.5 0 1-.5 1-1V1c0-.5-.5-1-1-1S3 .5 3 1v1c0 .5.5 1 1 1zm10-2h-1v1c0 1.1-.9 2-2 2s-2-.9-2-2V1H6v1c0 1.1-.9 2-2 2s-2-.9-2-2V1H1c-.5 0-1 .5-1 1v12c0 .5.5 1 1 1h13c.6 0 1-.5 1-1V2c0-.5-.4-1-1-1zM5 13H2v-3h3v3zm0-4H2V6h3v3zm4 4H6v-3h3v3zm0-4H6V6h3v3zm4 4h-3v-3h3v3zm0-4h-3V6h3v3zm-1-2h-1v1h1V7z'
          ],
          'timeline-line-chart': [
            'M15 12H2V9.41l3-3L8.29 9.7c.18.19.43.3.71.3s.53-.11.71-.29l6-6a1.003 1.003 0 00-1.42-1.42L9 7.59l-3.29-3.3C5.53 4.11 5.28 4 5 4s-.53.11-.71.29L2 6.59V3c0-.55-.45-1-1-1s-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          tint: [
            'M7.88 1s-4.9 6.28-4.9 8.9c.01 2.82 2.34 5.1 4.99 5.1 2.65-.01 5.03-2.3 5.03-5.13C12.99 7.17 7.88 1 7.88 1z'
          ],
          torch: [
            'M5 15c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H5v1zm7-15H4c-.55 0-1 .45-1 1v1h10V1c0-.55-.45-1-1-1zM5 7v6h6V7l2-4H3l2 4zm2 0c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1V7z'
          ],
          tractor: [
            'M3.5 9a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm9.5 1a3 3 0 110 6 3 3 0 010-6zm-9.5 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm9.5 1a1 1 0 100 2 1 1 0 000-2zM5 0c1.46 0 2.527.668 3 2l.815 3.255a78.9 78.9 0 012.186.195L11 2h2l.001 3.688c.698.095 1.37.198 2.013.312.623.11.986.479.986 1v3.354a4.001 4.001 0 00-6.873 1.645H7.999l-.026-.002A4.5 4.5 0 00.659 9.01l-.654.001v-.829C.003 7.386.002 6.423 0 6.022 0 5.5.376 4.99 1 4.99V1a1 1 0 011-1h3zm1 2H3v2.99c1.29.024 2.554.069 3.781.135L6 2z'
          ],
          train: [
            'M13 14h-1l1 2H3l1-2H3c-1.1 0-2-.9-2-2V2C1 .9 4.13 0 8 0s7 .9 7 2v10c0 1.1-.9 2-2 2zm-2-2h2v-2h-2v2zM9 7h4V3H9v4zm-6 5h2v-2H3v2zm0-5h4V3H3v4z'
          ],
          translate: [
            'M15.89 14.56l-3.99-8h-.01c-.17-.33-.5-.56-.89-.56s-.72.23-.89.56h-.01L9 8.76 7.17 7.38l.23-.18C8.37 6.47 9 5.31 9 4V3h1c.55 0 1-.45 1-1s-.45-1-1-1H7c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H1c-.55 0-1 .45-1 1s.45 1 1 1h6v1c0 .66-.32 1.25-.82 1.61l-.68.51-.68-.5C4.32 5.25 4 4.66 4 4H2c0 1.31.63 2.47 1.6 3.2l.23.17L1.4 9.2l.01.01C1.17 9.4 1 9.67 1 10c0 .55.45 1 1 1 .23 0 .42-.09.59-.21l.01.01 2.9-2.17 2.6 1.95-1.99 3.98h.01c-.07.13-.12.28-.12.44 0 .55.45 1 1 1 .39 0 .72-.23.89-.56h.01L8.62 14h4.76l.72 1.45h.01c.17.32.5.55.89.55.55 0 1-.45 1-1 0-.16-.05-.31-.11-.44zM9.62 12L11 9.24 12.38 12H9.62z'
          ],
          trash: [
            'M14.49 3.99h-13c-.28 0-.5.22-.5.5s.22.5.5.5h.5v10c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-10h.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5zm-8.5 9c0 .55-.45 1-1 1s-1-.45-1-1v-6c0-.55.45-1 1-1s1 .45 1 1v6zm3 0c0 .55-.45 1-1 1s-1-.45-1-1v-6c0-.55.45-1 1-1s1 .45 1 1v6zm3 0c0 .55-.45 1-1 1s-1-.45-1-1v-6c0-.55.45-1 1-1s1 .45 1 1v6zm2-12h-4c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1h-4c-.55 0-1 .45-1 1v1h14v-1c0-.55-.45-1-1-1z'
          ],
          tree: [
            'M9 11.857V16H7v-4.143L1 13l3.885-4.44L3 9l3.07-4.297L5 5l3-5 3 5-1.07-.297L13 9l-1.885-.44L15 13l-6-1.143z'
          ],
          'trending-down': [
            'M15 7c-.55 0-1 .45-1 1v.59l-4.29-4.3A.997.997 0 009 4c-.16 0-.31.05-.44.11V4.1L5 5.88 1.45 4.11v.01C1.31 4.05 1.16 4 1 4c-.55 0-1 .45-1 1 0 .39.23.72.56.89v.01l4 2v-.01c.13.06.28.11.44.11s.31-.05.44-.11v.01L8.8 6.22 12.59 10H12c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1z'
          ],
          'trending-up': [
            'M15 4h-3c-.55 0-1 .45-1 1s.45 1 1 1h.59L8.8 9.78 5.45 8.11v.01C5.31 8.05 5.16 8 5 8s-.31.05-.44.11V8.1l-4 2v.01c-.33.17-.56.5-.56.89 0 .55.45 1 1 1 .16 0 .31-.05.44-.11v.01L5 10.12l3.55 1.78v-.01c.14.06.29.11.45.11.28 0 .53-.11.71-.29L14 7.41V8c0 .55.45 1 1 1s1-.45 1-1V5c0-.55-.45-1-1-1z'
          ],
          truck: [
            'M12.5 0a.5.5 0 01.5.5V9a1 1 0 011 1v2h.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H13v1a1 1 0 01-2 0v-1H5v1a1 1 0 01-2 0v-1H1.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H2v-2a1 1 0 011-1V.5a.5.5 0 011 0V3a2 2 0 012-2h4a2 2 0 012 2V.5a.5.5 0 01.5-.5zM9 8H7a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1V9a1 1 0 00-1-1zm3.5 3h-1a.5.5 0 100 1h1a.5.5 0 100-1zm-8 0h-1a.5.5 0 100 1h1a.5.5 0 100-1zM9 9a.5.5 0 01.5.5v1l-.008.09A.5.5 0 019 11H7l-.09-.008a.5.5 0 01-.41-.492v-1l.008-.09A.5.5 0 017 9zm2-5H5v2h6V4z'
          ],
          'two-columns': [
            'M3.99-.01h-3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-14c0-.55-.45-1-1-1zm11.71 7.3l-2-2a1.003 1.003 0 00-1.71.71v4a1.003 1.003 0 001.71.71l2-2c.18-.18.29-.43.29-.71s-.11-.53-.29-.71zM9.99-.01h-3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-14c0-.55-.45-1-1-1z'
          ],
          unarchive: [
            'M13.382 0a1 1 0 01.894.553L16 4v11a1 1 0 01-1 1H1a1 1 0 01-1-1V4L1.724.553A1 1 0 012.618 0h10.764zM8 6c-.28 0-.53.11-.71.29l-2 2-.084.096A1.003 1.003 0 006.71 9.71l.29-.3V12l.007.116c.058.496.482.884.993.884.55 0 1-.45 1-1V9.41l.29.29.081.076A.97.97 0 0010 10a1.003 1.003 0 00.71-1.71l-2-2-.096-.084A1.002 1.002 0 008 6zm5-4H3L2 4h12l-1-2z'
          ],
          underline: [
            'M8 14c2.8 0 5-2.2 5-5V3c0-.6-.4-1-1-1s-1 .4-1 1v6c0 1.7-1.3 3-3 3s-3-1.3-3-3V3c0-.6-.4-1-1-1s-1 .4-1 1v6c0 2.8 2.2 5 5 5zM13.5 15h-11c-.3 0-.5.2-.5.5s.2.5.5.5h11c.3 0 .5-.2.5-.5s-.2-.5-.5-.5z'
          ],
          undo: [
            'M4 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H3.41L4.7 2.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-3 3C.11 4.47 0 4.72 0 5c0 .28.11.53.29.71l3 3a1.003 1.003 0 001.42-1.42L3.41 6H11c1.66 0 3 1.34 3 3s-1.34 3-3 3H7v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z'
          ],
          'ungroup-objects': [
            'M3.5 5C1.57 5 0 6.57 0 8.5S1.57 12 3.5 12 7 10.43 7 8.5 5.43 5 3.5 5zm9 0C10.57 5 9 6.57 9 8.5s1.57 3.5 3.5 3.5S16 10.43 16 8.5 14.43 5 12.5 5z'
          ],
          'unknown-vehicle': [
            'M10.507 9.75v-3.5c0-.089.023-.171.051-.25h-7.55c-.176 0-.061-.824 0-1l.729-1.63c.06-.177.095-.37.27-.37h4.5V1.01c-.166-.003-.32-.01-.5-.01-2.72 0-4.036.402-4.036.402-.508.155-1.079.711-1.268 1.237L1.94 4.756H.887c-.483 0-.88.423-.88.939s.397.939.88.939h.376L1.008 7c-.034.685 0 1.436 0 2v5c0 .657.384 1 1 1s1-.343 1-1v-1h10v1c0 .657.383 1 1 1s1-.343 1-1v-3.5h-3.75a.75.75 0 01-.75-.75zm-5.5.25h-2V8h2v2zm11-4.305zM15.34.826a2.807 2.807 0 00-.932-.598c-.386-.16-.868-.241-1.445-.241-.447 0-.851.076-1.213.228-.362.153-.67.364-.926.636s-.456.592-.598.963a3.535 3.535 0 00-.218 1.144V3h1.789c.003-.208.023-.405.069-.588.049-.193.124-.362.225-.506.102-.144.232-.259.39-.345.159-.087.348-.13.567-.13.325 0 .58.09.762.272.183.18.275.46.275.839.008.222-.031.407-.116.555a1.654 1.654 0 01-.335.408 7.4 7.4 0 01-.452.37c-.162.123-.316.27-.463.438a2.556 2.556 0 00-.384.611c-.11.239-.177.535-.2.889V6h1.645v-.1c.032-.248.111-.453.237-.618.126-.164.27-.31.433-.438.163-.128.335-.255.518-.383a2.413 2.413 0 00.878-1.117c.102-.255.152-.58.152-.975A2.241 2.241 0 0015.34.826zM12.007 7v2h2V7h-2z'
          ],
          unlock: [
            'M11.99-.01c-2.21 0-4 1.79-4 4v3h-7c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-7c0-.55-.45-1-1-1h-3v-3c0-1.1.9-2 2-2s2 .9 2 2v1c0 .55.45 1 1 1s1-.45 1-1v-1c0-2.21-1.79-4-4-4z'
          ],
          unpin: [
            'M9.39 1c-.5.5-.4 1.48.15 2.53L4.38 7.54C2.85 6.5 1.52 6.07 1 6.59l3.5 3.5c-.02.02-1.4 2.8-1.4 2.8l2.8-1.4 3.5 3.5c.53-.53.1-1.86-.95-3.38l4.02-5.16c1.04.55 2.01.65 2.51.14L9.39 1z'
          ],
          unresolve: [
            'M11 3c-.55 0-1.07.09-1.57.26a6.46 6.46 0 010 9.48c.5.17 1.02.26 1.57.26 2.76 0 5-2.24 5-5s-2.24-5-5-5zM9.78 9.38l.09-.27c.08-.36.13-.73.13-1.11s-.05-.75-.13-1.11l-.09-.27a5.32 5.32 0 00-.29-.79l-.12-.21c-.14-.27-.31-.52-.51-.76a.7.7 0 00-.08-.1c-.24-.27-.49-.52-.78-.74-.43-.32-.92-.58-1.45-.75l.01-.01c-.1-.03-.2-.05-.3-.08-.12-.03-.23-.07-.36-.09A5.28 5.28 0 005 3C2.24 3 0 5.24 0 8s2.24 5 5 5c.31 0 .61-.04.9-.09.12-.02.24-.06.36-.09.1-.03.21-.04.3-.08l-.01-.01c.88-.29 1.64-.8 2.22-1.49.03-.03.06-.07.09-.1.19-.24.36-.49.51-.76.04-.07.08-.14.11-.21.13-.25.23-.52.3-.79z'
          ],
          updated: [
            'M8 0a7.95 7.95 0 00-6 2.74V1c0-.55-.45-1-1-1S0 .45 0 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1H3.54C4.64 2.78 6.22 2 8 2c3.31 0 6 2.69 6 6 0 2.61-1.67 4.81-4 5.63-.63.22-1.29.37-2 .37-3.31 0-6-2.69-6-6 0-.55-.45-1-1-1s-1 .45-1 1c0 4.42 3.58 8 8 8 .34 0 .67-.03 1-.07.02 0 .04-.01.06-.01C12.98 15.4 16 12.06 16 8c0-4.42-3.58-8-8-8zm3 5c-.28 0-.53.11-.71.29L7 8.58 5.71 7.29a1.003 1.003 0 00-1.42 1.42l2 2c.18.18.43.29.71.29.28 0 .53-.11.71-.29l4-4A1.003 1.003 0 0011 5z'
          ],
          upload: [
            'M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3 8c-.28 0-.53-.11-.71-.29L9 6.41V12c0 .55-.45 1-1 1s-1-.45-1-1V6.41l-1.29 1.3a1.003 1.003 0 01-1.42-1.42l3-3C7.47 3.11 7.72 3 8 3s.53.11.71.29l3 3A1.003 1.003 0 0111 8z'
          ],
          user: [
            'M7.99-.01A7.998 7.998 0 00.03 8.77c.01.09.03.18.04.28.02.15.04.31.07.47.02.11.05.22.08.34.03.13.06.26.1.38.04.12.08.25.12.37.04.11.08.21.12.32a6.583 6.583 0 00.3.65c.07.14.14.27.22.4.04.07.08.13.12.2l.27.42.1.13a7.973 7.973 0 003.83 2.82c.03.01.05.02.07.03.37.12.75.22 1.14.29l.2.03c.39.06.79.1 1.2.1s.81-.04 1.2-.1l.2-.03c.39-.07.77-.16 1.14-.29.03-.01.05-.02.07-.03a8.037 8.037 0 003.83-2.82c.03-.04.06-.08.09-.13.1-.14.19-.28.28-.42.04-.07.08-.13.12-.2.08-.13.15-.27.22-.41.04-.08.08-.17.12-.26.06-.13.11-.26.17-.39.04-.1.08-.21.12-.32.04-.12.08-.24.12-.37.04-.13.07-.25.1-.38.03-.11.06-.22.08-.34.03-.16.05-.31.07-.47.01-.09.03-.18.04-.28.02-.26.04-.51.04-.78-.03-4.41-3.61-7.99-8.03-7.99zm0 14.4c-1.98 0-3.75-.9-4.92-2.31.67-.36 1.49-.66 2.14-.95 1.16-.52 1.04-.84 1.08-1.27.01-.06.01-.11.01-.17-.41-.36-.74-.86-.96-1.44v-.01c0-.01-.01-.02-.01-.02-.05-.13-.09-.26-.12-.39-.28-.05-.44-.35-.5-.63-.06-.11-.18-.38-.15-.69.04-.41.2-.59.38-.67v-.06c0-.51.05-1.24.14-1.72.02-.13.05-.26.09-.39.17-.59.53-1.12 1.01-1.49.49-.38 1.19-.59 1.82-.59.62 0 1.32.2 1.82.59.48.37.84.9 1.01 1.49.04.13.07.26.09.4.09.48.14 1.21.14 1.72v.07c.18.08.33.26.37.66.03.31-.1.58-.16.69-.06.27-.21.57-.48.62-.03.13-.07.26-.12.38 0 .01-.01.04-.01.04-.21.57-.54 1.06-.94 1.42 0 .06.01.13.01.19.04.43-.12.75 1.05 1.27.65.29 1.47.6 2.14.95a6.415 6.415 0 01-4.93 2.31z'
          ],
          variable: [
            'M3.94 3.15c.47-.66 1.05-1.24 1.76-1.73l.13-.4c-1.11.45-2.05 1.01-2.84 1.7-1.02.88-1.8 1.9-2.32 3.05C.22 6.76 0 7.75 0 8.75c0 1.75.66 3.5 1.99 5.25l.13-.42c-.39-.94-.59-1.82-.59-2.63 0-1.28.22-2.64.67-4.1.45-1.45 1.03-2.69 1.74-3.7zm7.51 6.41l-.27-.15c-.3.41-.52.66-.66.77-.09.06-.21.1-.33.1-.15 0-.3-.1-.45-.28-.25-.33-.59-1.22-1.01-2.69.38-.65.69-1.08.95-1.28.19-.15.39-.22.59-.22.08 0 .22.03.43.08.2.06.39.08.54.08.22 0 .4-.07.54-.22.15-.15.22-.34.22-.57 0-.25-.07-.45-.22-.59-.15-.15-.35-.22-.63-.22-.24 0-.47.06-.69.17-.21.11-.49.36-.82.74-.25.28-.61.78-1.1 1.48a6.72 6.72 0 00-.97-2.38l-2.59.44-.05.27c.19-.04.36-.06.49-.06.26 0 .47.11.64.33.26.34.63 1.38 1.11 3.12-.37.49-.63.81-.77.96-.23.24-.41.4-.56.47-.11.06-.24.09-.39.09-.11 0-.29-.06-.53-.18-.17-.07-.32-.11-.45-.11-.25 0-.46.08-.62.24-.16.16-.24.37-.24.61 0 .23.08.42.23.57.15.15.35.22.61.22.25 0 .48-.05.7-.15.22-.1.49-.32.82-.65.33-.33.78-.86 1.36-1.59.22.69.42 1.19.58 1.51.16.31.35.54.56.68.21.14.47.21.79.21.31 0 .62-.11.93-.33.4-.29.82-.77 1.26-1.47zm2.56-8.54l-.12.42c.39.95.59 1.82.59 2.64 0 1.09-.17 2.26-.5 3.51-.26.96-.6 1.87-1.02 2.71-.42.85-.82 1.51-1.21 1.98-.39.48-.87.92-1.44 1.32l-.14.4c1.11-.45 2.05-1.02 2.84-1.7 1.03-.89 1.81-1.91 2.33-3.05.44-.99.66-1.99.66-3 0-1.73-.66-3.48-1.99-5.23z'
          ],
          'vertical-bar-chart-asc': [
            'M6 7c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1s1-.45 1-1V8c0-.55-.45-1-1-1zM2 9c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1s1-.45 1-1v-5c0-.55-.45-1-1-1zm8-5c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1s1-.45 1-1V5c0-.55-.45-1-1-1zm4-4c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1z'
          ],
          'vertical-bar-chart-desc': [
            'M6 4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1s1-.45 1-1V5c0-.55-.45-1-1-1zM2 0c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zm8 7c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1s1-.45 1-1V8c0-.55-.45-1-1-1zm4 2c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1s1-.45 1-1v-5c0-.55-.45-1-1-1z'
          ],
          'vertical-distribution': [
            'M1 2h14c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1s.45 1 1 1zm14 11H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM3 5c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1H3z'
          ],
          video: [
            'M15 2H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zM5 11V5l6 3-6 3z'
          ],
          virus: [
            'M11.918 11.107l.737.737.052-.051A1 1 0 0114.2 13.12l-.078.087-1.414 1.414a1 1 0 01-1.492-1.327l.029-.033-.863-.863c-.426.231-.89.402-1.38.502L9 14l.117.007A1 1 0 019 16H7l-.117-.007A1 1 0 017 14v-1.1a4.967 4.967 0 01-1.447-.539l-.846.846.078.087a1 1 0 01-1.492 1.327l-1.414-1.414-.078-.087a1 1 0 011.492-1.327l.744-.744A4.986 4.986 0 013.23 9.5H2a1 1 0 01-1.993.117L0 9.5v-2a1 1 0 011.993-.117L2 7.5h1.025a4.973 4.973 0 01.905-2.405l-.512-.513-.125.125A1 1 0 011.8 3.38l.078-.087 1.414-1.414a1 1 0 011.529 1.277l.573.575a4.969 4.969 0 011.604-.63V2l-.116-.007a1 1 0 010-1.986L7 0h2a1 1 0 01.117 1.993L9 2l.001 1.1c.639.13 1.233.381 1.757.73l.535-.537-.078-.087a1 1 0 011.492-1.327l1.414 1.414.078.087a1 1 0 01-1.492 1.327l-.535.536a4.97 4.97 0 01.803 2.257H14l.007-.117A1 1 0 0116 7.5v2l-.007.117A1 1 0 0114 9.5h-1.229a4.987 4.987 0 01-.853 1.607zM10 9a1 1 0 100 2 1 1 0 000-2zM6.5 5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z'
          ],
          'volume-down': [
            'M9 2c-.28 0-.53.11-.71.29L5.59 5H3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2.59l2.71 2.71c.17.18.42.29.7.29.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm3.57 1.44l-1.59 1.22C11.62 5.61 12 6.76 12 8s-.38 2.39-1.02 3.34l1.59 1.22C13.47 11.27 14 9.7 14 8c0-1.7-.53-3.27-1.43-4.56z'
          ],
          'volume-off': [
            'M11 2c-.28 0-.53.11-.71.29L7.59 5H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2.59l2.71 2.71c.17.18.42.29.7.29.55 0 1-.45 1-1V3c0-.55-.45-1-1-1z'
          ],
          'volume-up': [
            'M7 1.86c-.28 0-.53.11-.71.29l-2.7 2.71H1c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2.59l2.71 2.71a1.003 1.003 0 001.71-.71v-10c-.01-.55-.46-1-1.01-1zm6.74-.99l-1.58 1.22A9.985 9.985 0 0114 7.86c0 2.16-.69 4.15-1.85 5.78l1.58 1.22c1.42-1.97 2.26-4.38 2.26-7 .01-2.61-.84-5.02-2.25-6.99zM8.98 4.52C9.62 5.48 10 6.63 10 7.86s-.38 2.39-1.02 3.34l1.59 1.22c.9-1.29 1.43-2.86 1.43-4.56 0-1.7-.53-3.27-1.43-4.56L8.98 4.52z'
          ],
          walk: [
            'M13 8h-2c-.16 0-.31-.05-.44-.11v.01l-1.02-.51-.37 1.86 1.38.92-.01.02c.27.17.46.46.46.81v4c0 .55-.45 1-1 1s-1-.45-1-1v-3.46l-1.27-.85-1.8 4.67h-.01A.98.98 0 015 16c-.55 0-1-.45-1-1 0-.13.03-.25.07-.36h-.01L7.39 6H5.62l-.73 1.45h-.01C4.72 7.77 4.39 8 4 8c-.55 0-1-.45-1-1 0-.16.05-.31.11-.44H3.1l1-2h.01c.17-.33.5-.56.89-.56h3.16l.29-.75C8.17 2.9 8 2.47 8 2c0-1.1.9-2 2-2s2 .9 2 2c0 1-.73 1.82-1.69 1.97l-.5 1.32 1.43.71H13c.55 0 1 .45 1 1s-.45 1-1 1z'
          ],
          'warning-sign': [
            'M15.84 13.5l.01-.01-7-12-.01.01c-.17-.3-.48-.5-.85-.5s-.67.2-.85.5l-.01-.01-7 12 .01.01c-.09.15-.15.31-.15.5 0 .55.45 1 1 1h14c.55 0 1-.45 1-1 0-.19-.06-.35-.15-.5zm-6.85-.51h-2v-2h2v2zm0-3h-2v-5h2v5z'
          ],
          'waterfall-chart': [
            'M8 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-4 4h1c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1zm7-6c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1c0 .55.45 1 1 1zm4-3h-1c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 10H2V3c0-.55-.45-1-1-1s-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          widget: [
            'M13 11h2V5h-2v6zM3 5H1v6h2V5zm11-1c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM2 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM5 3h6V1H5v2zM2 0C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm3 15h6v-2H5v2z'
          ],
          'widget-button': [
            'M1 3h14c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1zm1 2v6h12V5H2zm3 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm3 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm3 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z'
          ],
          'widget-footer': [
            'M14 0H2c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 14H3v-3h10v3zm0-4H3V2h10v8z'
          ],
          'widget-header': [
            'M14 0H2c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 14H3V6h10v8zm0-9H3V2h10v3z'
          ],
          wrench: [
            'M15.83 3.7l-3.06 3.05-2.84-.7-.7-2.83L12.29.17a5.004 5.004 0 00-4.83 1.29 4.967 4.967 0 00-1.12 5.36L.58 12.58c-.36.36-.58.86-.58 1.41 0 1.1.9 2 2 2 .55 0 1.05-.22 1.41-.59l5.77-5.77c1.79.69 3.91.33 5.35-1.12 1.32-1.3 1.74-3.15 1.3-4.81z'
          ],
          'zoom-in': [
            'M7.99 5.99v-2c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-2zm7.56 7.44l-2.67-2.68a6.94 6.94 0 001.11-3.76c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.39 0 2.68-.42 3.76-1.11l2.68 2.67a1.498 1.498 0 102.12-2.12zm-8.56-1.44c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z'
          ],
          'zoom-out': [
            'M3.99 5.99c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1h-6zm11.56 7.44l-2.67-2.68a6.94 6.94 0 001.11-3.76c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.39 0 2.68-.42 3.76-1.11l2.68 2.67a1.498 1.498 0 102.12-2.12zm-8.56-1.44c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z'
          ],
          'zoom-to-fit': [
            'M11 10a1.003 1.003 0 001.71.71l2-2c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-2-2a1.003 1.003 0 00-1.42 1.42L12.59 8 11.3 9.29c-.19.18-.3.43-.3.71zM1 5c.55 0 1-.45 1-1V2h2c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1v3c0 .55.45 1 1 1zm4 1a1.003 1.003 0 00-1.71-.71l-2 2C1.11 7.47 1 7.72 1 8c0 .28.11.53.29.71l2 2a1.003 1.003 0 001.42-1.42L3.41 8 4.7 6.71c.19-.18.3-.43.3-.71zm1-1c.28 0 .53-.11.71-.29L8 3.41 9.29 4.7c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-2-2C8.53 1.11 8.28 1 8 1s-.53.11-.71.29l-2 2A1.003 1.003 0 006 5zm9 6c-.55 0-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm0-11h-3c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zM4 14H2v-2c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1zm6-3c-.28 0-.53.11-.71.29L8 12.59 6.71 11.3A.965.965 0 006 11a1.003 1.003 0 00-.71 1.71l2 2c.18.18.43.29.71.29s.53-.11.71-.29l2-2A1.003 1.003 0 0010 11z'
          ]
        },
        tl = {
          add: [
            'M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm5-9h-4V5c0-.55-.45-1-1-1s-1 .45-1 1v4H5c-.55 0-1 .45-1 1s.45 1 1 1h4v4c0 .55.45 1 1 1s1-.45 1-1v-4h4c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'add-column-left': [
            'M4 11h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1H8V7c0-.55-.45-1-1-1s-1 .45-1 1v2H4c-.55 0-1 .45-1 1s.45 1 1 1zM19 0H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-7 18H2V2h10v16zm6 0h-5V2h5v16z'
          ],
          'add-column-right': [
            'M10 11h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-2V7c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1zm9-11H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM7 18H2V2h5v16zm11 0H8V2h10v16z'
          ],
          'add-row-bottom': [
            'M19 0H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 18H2V8h16v10zm0-11H2V2h16v5zM7 14h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-2v-2c0-.55-.45-1-1-1s-1 .45-1 1v2H7c-.55 0-1 .45-1 1s.45 1 1 1z'
          ],
          'add-row-top': [
            'M7 8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h2c.55 0 1-.45 1-1s-.45-1-1-1h-2V4c0-.55-.45-1-1-1s-1 .45-1 1v2H7c-.55 0-1 .45-1 1s.45 1 1 1zm12-8H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 18H2v-5h16v5zm0-6H2V2h16v10z'
          ],
          'add-to-artifact': [
            'M13 12H1c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1zm0 4H1c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1zM1 6h9c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm12 2H1c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1zm6-4h-2V2c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V6h2c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'add-to-folder': [
            'M.01 10V6H20v10c0 .55-.45 1-1 1H9.995v-3.99C9.965 11.332 8.635 10 6.987 10H.01zM19 3c.55 0 1 .45.99 1v1H0V2c0-.55.45-1 1-1h5.997c.28 0 .53.11.71.29L9.414 3H19zM6.987 12c.55 0 .999.45 1.009 1.01v5c0 .55-.45 1-1 1s-.999-.45-.999-1v-2.59l-4.288 4.29a1.003 1.003 0 01-1.42-1.42L4.579 14H1.989c-.55 0-1-.45-1-1s.45-1 1-1h4.998z'
          ],
          airplane: [
            'M20 2c0-1.1-.9-2-2-2-.55 0-1.05.22-1.41.59l-4.84 4.84L2 1 1 3l7.53 5.64L4.17 13H1l-1 1 4 2 2 4 1-1v-3.17l4.36-4.36L17 19l2-1-4.43-9.74 4.84-4.84c.37-.37.59-.87.59-1.42z'
          ],
          'align-center': [
            'M5 5c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1H5zM1 3h18c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm12 12c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h6zm4 2H3c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm2-8H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'align-justify': [
            'M1 3h18c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm18 14H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zm0-12H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zm0 4H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zm0 4H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'align-left': [
            'M1 7h10c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm0-4h18c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm14 14H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm4-8H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zM1 15h6c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1z'
          ],
          'align-right': [
            'M19 17H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM1 3h18c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm18 10h-6c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1zm0-4H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zm0-4H9c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'alignment-bottom': [
            'M12 16h4c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1zm7 2H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zM4 16h4c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1z'
          ],
          'alignment-horizontal-center': [
            'M19 9h-2V7c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v2H9V3c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v6H1c-.55 0-1 .45-1 1s.45 1 1 1h2v6c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-6h2v2c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'alignment-left': [
            'M1 0C.45 0 0 .45 0 1v18c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zm11 11H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h7c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm7-8H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z'
          ],
          'alignment-right': [
            'M19 0c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zm-4 11H8c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h7c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm0-8H1c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z'
          ],
          'alignment-top': [
            'M8 4H4c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm11-4H1C.45 0 0 .45 0 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zm-3 4h-4c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1z'
          ],
          'alignment-vertical-center': [
            'M17 3h-6V1c0-.55-.45-1-1-1S9 .45 9 1v2H3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h6v2H7c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-2V9h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z'
          ],
          annotation: [
            'M9.41 13.41l7.65-7.65-2.83-2.83-7.65 7.65 2.83 2.83zm10-10c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2-.55 0-1.05.22-1.41.59l-1.65 1.65 2.83 2.83 1.64-1.66zM18 18H2V2h8.93l2-2H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V7.07l-2 2V18zM4 16l4.41-1.59-2.81-2.79L4 16z'
          ],
          'app-header': [
            'M19 0a1 1 0 011 1v18a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h18zM8 6a1 1 0 00-1.993-.117L6 6v8a1 1 0 001.993.117L8 14v-3h4v3a1 1 0 001.993.117L14 14V6a1 1 0 00-1.993-.117L12 6v3H8V6z'
          ],
          application: [
            'M3.5 9h9c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-9c-.28 0-.5.22-.5.5s.22.5.5.5zm0 2h5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5s.22.5.5.5zM19 1H1c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm-1 16H2V6h16v11zM3.5 13h7c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-7c-.28 0-.5.22-.5.5s.22.5.5.5z'
          ],
          applications: [
            'M15 5H1c-.55 0-1 .45-1 1v13c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-1 13H2V8h12v10zM3.5 10h7c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-7c-.28 0-.5.22-.5.5s.22.5.5.5zm0 2h3c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-3c-.28 0-.5.22-.5.5s.22.5.5.5zm0 2h5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5s.22.5.5.5zM19 0H5c-.55 0-1 .45-1 1v3h2V3h12v10h-1v2h2c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z'
          ],
          archive: [
            'M16.434 0a1 1 0 01.857.486L20 5v14a1 1 0 01-1 1H1a1 1 0 01-1-1V5L2.709.486A1 1 0 013.566 0h12.868zM10 8c-.55 0-1 .45-1 1v4.58l-1.29-1.29-.081-.073A.996.996 0 007 11.99a1.003 1.003 0 00-.71 1.71l3 3 .096.084c.168.13.38.206.614.206.28 0 .53-.11.71-.29l3-3 .084-.096a1.003 1.003 0 00-1.504-1.324L11 13.58V9l-.007-.116A1.004 1.004 0 0010 8zm6-6H4L2 5.002h16L16 2z'
          ],
          array: [
            'M19 0a1 1 0 01.993.883L20 1v18a1 1 0 01-.883.993L19 20h-4a1 1 0 01-.117-1.993L15 18h3V2h-3a1 1 0 01-.993-.883L14 1a1 1 0 01.883-.993L15 0h4zM5 0a1 1 0 01.117 1.993L5 2H2v16h3a1 1 0 01.993.883L6 19a1 1 0 01-.883.993L5 20H1a1 1 0 01-.993-.883L0 19V1A1 1 0 01.883.007L1 0h4zm5 9a1 1 0 110 2 1 1 0 010-2zM6 9a1 1 0 110 2 1 1 0 010-2zm8 0a1 1 0 110 2 1 1 0 010-2z'
          ],
          'array-boolean': [
            'M19 0a1 1 0 01.993.883L20 1v18a1 1 0 01-.883.993L19 20h-4a1 1 0 01-.117-1.993L15 18h3V2h-3a1 1 0 01-.993-.883L14 1a1 1 0 01.883-.993L15 0h4zM5 0a1 1 0 01.117 1.993L5 2H2v16h3a1 1 0 01.993.883L6 19a1 1 0 01-.883.993L5 20H1a1 1 0 01-.993-.883L0 19V1A1 1 0 01.883.007L1 0h4zm10 7a1 1 0 01.993.883L16 8v4a1 1 0 01-.883.993L15 13H5a1 1 0 01-.993-.883L4 12V8a1 1 0 01.883-.993L5 7h10zm0 1h-5v4h5V8z'
          ],
          'array-date': [
            'M19 0a1 1 0 01.993.883L20 1v18a1 1 0 01-.883.993L19 20h-4a1 1 0 01-.117-1.993L15 18h3V2h-3a1 1 0 01-.993-.883L14 1a1 1 0 01.883-.993L15 0h4zM5 0a1 1 0 01.117 1.993L5 2H2v16h3a1 1 0 01.993.883L6 19a1 1 0 01-.883.993L5 20H1a1 1 0 01-.993-.883L0 19V1A1 1 0 01.883.007L1 0h4zm2.5 5a.5.5 0 01.5.5V6h4v-.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V6h1a1 1 0 01.993.883L16 7v7a1 1 0 01-.883.993L15 15H5a1 1 0 01-.993-.883L4 14V7a1 1 0 01.883-.993L5 6h1v-.5a.5.5 0 01.5-.5h1zM15 9H5v5h10V9z'
          ],
          'array-numeric': [
            'M19 0a1 1 0 01.993.883L20 1v18a1 1 0 01-.883.993L19 20h-4a1 1 0 01-.117-1.993L15 18h3V2h-3a1 1 0 01-.993-.883L14 1a1 1 0 01.883-.993L15 0h4zM5 0a1 1 0 01.117 1.993L5 2H2v16h3a1 1 0 01.993.883L6 19a1 1 0 01-.883.993L5 20H1a1 1 0 01-.993-.883L0 19V1A1 1 0 01.883.007L1 0h4zm8.995 6.09c.32 0 .603.047.85.14a1.679 1.679 0 011.015.985c.09.23.135.482.135.755 0 .287-.063.552-.19.795a1.642 1.642 0 01-.57.615v.02l.101.05c.068.039.138.09.209.155.107.097.203.215.29.355a2.09 2.09 0 01.3 1.09c0 .313-.053.597-.16.85a1.898 1.898 0 01-1.12 1.065 2.42 2.42 0 01-.85.145c-.533 0-.99-.127-1.37-.38a1.702 1.702 0 01-.73-1.08c-.013-.067.013-.11.08-.13l.87-.2.041-.003c.038.004.064.028.079.073.073.2.193.37.36.51.167.14.39.21.67.21.32 0 .567-.095.74-.285.173-.19.26-.432.26-.725 0-.347-.1-.618-.3-.815-.2-.197-.47-.295-.81-.295h-.29l-.044-.006c-.037-.013-.056-.044-.056-.094V9.1l.006-.044c.013-.037.044-.056.094-.056h.27l.145-.008a.925.925 0 00.575-.262c.18-.18.27-.42.27-.72 0-.273-.08-.495-.24-.665-.16-.17-.383-.255-.67-.255-.253 0-.453.063-.6.19-.147.127-.25.297-.31.51-.02.06-.06.083-.12.07l-.85-.2-.042-.015c-.035-.02-.048-.055-.038-.105a1.684 1.684 0 01.645-1.035c.17-.13.37-.232.6-.305.23-.073.482-.11.755-.11zm-7.99.11l.044.006c.037.013.056.044.056.094v6.6l-.006.044c-.013.037-.044.056-.094.056h-.92l-.044-.006c-.037-.013-.056-.044-.056-.094V7.54h-.02l-1.04.73-.04.02c-.047.016-.07-.01-.07-.08V7.19l.008-.051a.196.196 0 01.062-.089l1.09-.79.051-.033a.295.295 0 01.129-.027h.85zm3.34-.11c.32 0 .603.05.85.15.247.1.455.235.625.405.17.17.3.37.39.6.09.23.135.478.135.745 0 .307-.057.588-.17.845a3.16 3.16 0 01-.47.745l-1.98 2.4V12h2.52l.044.006c.037.013.056.044.056.094v.8l-.006.044c-.013.037-.044.056-.094.056h-3.82l-.044-.006c-.037-.013-.056-.044-.056-.094v-.75l.006-.05a.165.165 0 01.044-.08l2.4-2.99.124-.167c.077-.11.143-.222.196-.333.08-.167.12-.347.12-.54a.92.92 0 00-.235-.64c-.157-.173-.378-.26-.665-.26-.273 0-.487.077-.64.23-.153.153-.247.36-.28.62-.013.067-.05.093-.11.08l-.88-.18-.043-.015c-.035-.02-.047-.055-.037-.105a1.78 1.78 0 01.56-1.115c.167-.157.372-.282.615-.375a2.35 2.35 0 01.845-.14z'
          ],
          'array-string': [
            'M19 0a1 1 0 01.993.883L20 1v18a1 1 0 01-.883.993L19 20h-4a1 1 0 01-.117-1.993L15 18h3V2h-3a1 1 0 01-.993-.883L14 1a1 1 0 01.883-.993L15 0h4zM5 0a1 1 0 01.117 1.993L5 2H2v16h3a1 1 0 01.993.883L6 19a1 1 0 01-.883.993L5 20H1a1 1 0 01-.993-.883L0 19V1A1 1 0 01.883.007L1 0h4zm2.012 6c.643 0 1.203.266 1.68.797.477.53.715 1.246.715 2.145a4.472 4.472 0 01-.965 2.814c-.644.83-1.66 1.5-3.047 2.011v-.581l.26-.104a3.87 3.87 0 001.624-1.285c.457-.632.686-1.29.686-1.971 0-.148-.023-.256-.07-.326-.023-.047-.054-.07-.093-.07-.038 0-.1.031-.186.093-.248.179-.558.268-.93.268-.45 0-.843-.18-1.18-.541A1.817 1.817 0 015 7.965c0-.527.194-.986.581-1.378A1.934 1.934 0 017.011 6zm5.593 0c.643 0 1.203.266 1.68.797.477.53.715 1.246.715 2.145a4.472 4.472 0 01-.965 2.814c-.644.83-1.659 1.5-3.047 2.011v-.581l.26-.104a3.87 3.87 0 001.624-1.285c.457-.632.686-1.29.686-1.971 0-.148-.023-.256-.07-.326-.023-.047-.054-.07-.093-.07-.038 0-.1.031-.186.093-.248.179-.558.268-.93.268-.45 0-.843-.18-1.18-.541a1.817 1.817 0 01-.506-1.285c0-.527.194-.986.581-1.378A1.934 1.934 0 0112.604 6z'
          ],
          'array-timestamp': [
            'M19 0a1 1 0 01.993.883L20 1v18a1 1 0 01-.883.993L19 20h-4a1 1 0 01-.117-1.993L15 18h3V2h-3a1 1 0 01-.993-.883L14 1a1 1 0 01.883-.993L15 0h4zM5 0a1 1 0 01.117 1.993L5 2H2v16h3a1 1 0 01.993.883L6 19a1 1 0 01-.883.993L5 20H1a1 1 0 01-.993-.883L0 19V1A1 1 0 01.883.007L1 0h4zm5 4a6 6 0 110 12 6 6 0 010-12zm0 1a5 5 0 100 10 5 5 0 000-10zm2.854 2.146a.5.5 0 01.057.638l-.057.07-2.5 2.5a.5.5 0 01-.638.057l-.07-.057-1.5-1.5a.5.5 0 01.638-.765l.07.057L10 9.293l2.146-2.147a.5.5 0 01.708 0z'
          ],
          'arrow-bottom-left': [
            'M18 3a1.003 1.003 0 00-1.71-.71L4 14.59V7c0-.55-.45-1-1-1s-1 .45-1 1v10c0 .55.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1H5.41l12.3-12.29c.18-.18.29-.43.29-.71z'
          ],
          'arrow-bottom-right': [
            'M17 6c-.55 0-1 .45-1 1v7.59L3.71 2.29a1.003 1.003 0 00-1.42 1.42L14.59 16H7c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1z'
          ],
          'arrow-down': [
            'M16 11c-.3 0-.5.1-.7.3L11 15.6V2c0-.5-.4-1-1-1s-1 .5-1 1v13.6l-4.3-4.3c-.2-.2-.4-.3-.7-.3-.5 0-1 .4-1 1 0 .3.1.5.3.7l6 6c.2.2.4.3.7.3s.5-.1.7-.3l6-6c.2-.2.3-.4.3-.7 0-.6-.5-1-1-1z'
          ],
          'arrow-left': [
            'M18 9H4.41L8.7 4.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-6 6c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l6 6a1.003 1.003 0 001.42-1.42L4.41 11H18c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'arrow-right': [
            'M18.71 9.29l-6-6a1.003 1.003 0 00-1.42 1.42L15.59 9H2c-.55 0-1 .45-1 1s.45 1 1 1h13.59l-4.29 4.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l6-6c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z'
          ],
          'arrow-top-left': [
            'M17.71 16.29L5.41 4H13c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1s1-.45 1-1V5.41L16.29 17.7c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71z'
          ],
          'arrow-top-right': [
            'M17 2H7c-.55 0-1 .45-1 1s.45 1 1 1h7.59L2.29 16.29a1.003 1.003 0 001.42 1.42L16 5.41V13c0 .55.45 1 1 1s1-.45 1-1V3c0-.55-.45-1-1-1z'
          ],
          'arrow-up': [
            'M16.7 7.3l-6-6c-.2-.2-.4-.3-.7-.3s-.5.1-.7.3l-6 6c-.2.2-.3.4-.3.7 0 .6.5 1 1 1 .3 0 .5-.1.7-.3L9 4.4V18c0 .5.4 1 1 1s1-.5 1-1V4.4l4.3 4.3c.2.2.4.3.7.3.5 0 1-.4 1-1 0-.3-.1-.5-.3-.7z'
          ],
          'arrows-horizontal': [
            'M19.7 9.3l-5-5c-.2-.2-.4-.3-.7-.3-.6 0-1 .4-1 1 0 .3.1.5.3.7L16.6 9H3.4l3.3-3.3c.2-.2.3-.4.3-.7 0-.6-.4-1-1-1-.3 0-.5.1-.7.3l-5 5c-.2.2-.3.4-.3.7s.1.5.3.7l5 5c.2.2.4.3.7.3.6 0 1-.4 1-1 0-.3-.1-.5-.3-.7L3.4 11h13.2l-3.3 3.3c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3l5-5c.2-.2.3-.4.3-.7s-.1-.5-.3-.7z'
          ],
          'arrows-vertical': [
            'M15 13c-.3 0-.5.1-.7.3L11 16.6V3.4l3.3 3.3c.2.2.4.3.7.3.6 0 1-.4 1-1 0-.3-.1-.5-.3-.7l-5-5c-.2-.2-.4-.3-.7-.3s-.5.1-.7.3l-5 5c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3L9 3.4v13.2l-3.3-3.3c-.2-.2-.4-.3-.7-.3-.6 0-1 .4-1 1 0 .3.1.5.3.7l5 5c.2.2.4.3.7.3s.5-.1.7-.3l5-5c.2-.2.3-.4.3-.7 0-.5-.4-1-1-1z'
          ],
          asterisk: [
            'M18.52 14.17l.01-.02L11.89 10l6.64-4.15-.01-.02A.97.97 0 0019 5c0-.55-.45-1-1-1-.2 0-.37.07-.52.17l-.01-.02L11 8.2V1c0-.55-.45-1-1-1S9 .45 9 1v7.2L2.53 4.15l-.01.02A.922.922 0 002 4c-.55 0-1 .45-1 1 0 .36.2.66.48.83l-.01.02L8.11 10l-6.64 4.15.01.02A.97.97 0 001 15c0 .55.45 1 1 1 .2 0 .37-.07.52-.17l.01.02L9 11.8V19c0 .55.45 1 1 1s1-.45 1-1v-7.2l6.47 4.04.01-.02c.15.11.32.18.52.18.55 0 1-.45 1-1 0-.36-.2-.66-.48-.83z'
          ],
          'automatic-updates': [
            'M10 18c-4.42 0-8-3.58-8-8 0-2.52 1.18-4.76 3-6.22V5c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1h2.06C1.61 3.82 0 6.71 0 10c0 5.52 4.48 10 10 10 .55 0 1-.45 1-1s-.45-1-1-1zm0-16c1.64 0 3.15.49 4.42 1.34l1.43-1.43A9.869 9.869 0 0010 0c-.55 0-1 .45-1 1s.45 1 1 1zm10 8c0-1.13-.2-2.21-.54-3.22L17.84 8.4A7.962 7.962 0 0115 16.22V15c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1h-2.06c2.45-1.82 4.06-4.71 4.06-8zm0-7a1.003 1.003 0 00-1.71-.71L12 8.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l7-7c.18-.18.29-.43.29-.71z'
          ],
          backlink: [
            'M18.387 19.79l-.094-.083L14 15.415V18a1 1 0 01-2 0l.003-5.075.017-.126.03-.111.044-.111.052-.098.067-.096.08-.09a1.01 1.01 0 01.112-.097l.11-.071.114-.054.105-.035.15-.03L13 12h5a1 1 0 110 2h-2.585l4.292 4.293a1 1 0 01-1.32 1.497zM7.036 9.136l-4.45 4.45-.117.127a2 2 0 002.818 2.818l.127-.117 4.45-4.449a4 4 0 01-.885 3.704l-.15.16-2 2A4 4 0 011.02 12.33l.15-.16 2-2a3.998 3.998 0 013.865-1.035zm6.671-3.843a1 1 0 01.083 1.32l-.083.094-7 7a1 1 0 01-1.497-1.32l.083-.094 7-7a1 1 0 011.414 0zm4.121-4.121a4 4 0 01.151 5.497l-.15.16-2 2a3.998 3.998 0 01-3.864 1.036l4.45-4.45.116-.128a2 2 0 00-2.818-2.818l-.127.117-4.45 4.45a4 4 0 01.885-3.705l.15-.16 2-2a4 4 0 015.657 0z'
          ],
          badge: [
            'M16.94 5.73c-.19-1.41.62-2.52 1.38-3.59L17.03.65C14.89 1.76 11.88 1.48 10 0 8.12 1.48 5.11 1.76 2.97.65L1.68 2.14c.76 1.07 1.57 2.18 1.38 3.59C2.68 8.59 0 10.94 1.4 14.08c.56 1.43 1.81 2.37 3.4 2.75 1.95.46 4.4.91 5.2 3.17.8-2.26 3.25-2.71 5.2-3.17 1.6-.38 2.84-1.32 3.4-2.75 1.4-3.14-1.28-5.49-1.66-8.35z'
          ],
          'ban-circle': [
            'M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm5 11H5c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1z'
          ],
          'bank-account': [
            'M19.2 8.02l-.78-.18C18.03 6.4 17.2 5.08 16.08 4l.5-2.28c.11-.42-.22-.78-.61-.72-1.06.12-2 .54-2.67 1.26-1.06-.42-2.34-.66-3.56-.66-3.12 0-5.79 1.5-7.4 3.72-.23-.05-.45-.11-.67-.11C.72 5.21 0 5.98 0 7c0 .72.39 1.32.95 1.62-.06.42-.12.9-.12 1.38 0 2.16.89 4.08 2.28 5.58l-.33 2.04c-.11.72.45 1.38 1.12 1.38h.72c.56 0 1-.42 1.11-1.02l.06-.48c1.17.54 2.5.9 3.95.9 1.39 0 2.78-.3 3.95-.9l.06.48c.11.6.56 1.02 1.11 1.02h.72c.67 0 1.22-.66 1.11-1.38l-.33-1.98c.78-.78 1.34-1.74 1.73-2.76l1-.24c.5-.12.89-.6.89-1.2V9.22c.11-.6-.28-1.08-.78-1.2zM15 10c-.6 0-1-.7-1-1.5S14.4 7 15 7s1 .7 1 1.5-.4 1.5-1 1.5zM7.55 5.83a.99.99 0 01-1.38-.28.99.99 0 01.28-1.38c2.34-1.56 4.77-1.56 7.11 0 .46.31.58.93.28 1.39-.31.46-.93.58-1.39.28-1.67-1.12-3.23-1.12-4.9-.01z'
          ],
          barcode: [
            'M6 16.98h2v-14H6v14zm3 0h1v-14H9v14zm-6 0h2v-14H3v14zm-3 0h2v-14H0v14zm16 0h2v-14h-2v14zm-4 0h1v-14h-1v14zm7-14v14h1v-14h-1zm-5 14h1v-14h-1v14z'
          ],
          blank: [],
          'blocked-person': [
            'M11.55 15.92c-1.48-.65-1.28-1.05-1.33-1.59-.01-.07-.01-.15-.01-.23.51-.45.92-1.07 1.19-1.78 0 0 .01-.04.02-.05.06-.15.11-.32.15-.48.34-.07.54-.44.61-.78.06-.11.14-.35.17-.62C10.33 9.42 8.92 7.38 8.92 5c0-.3.05-.58.09-.87-.33-.08-.67-.13-.99-.13-.79 0-1.68.25-2.31.73-.61.47-1.07 1.13-1.29 1.86-.05.16-.09.33-.11.5-.12.6-.17 1.51-.17 2.14v.08c-.24.09-.45.32-.49.83-.04.39.12.73.2.87.08.35.28.72.63.78.04.17.09.33.15.48 0 .01.01.02.01.03l.01.01c.27.72.7 1.35 1.22 1.8 0 .07-.01.14-.01.21-.05.54.1.94-1.38 1.59C3 16.56.77 17.26.32 18.31-.15 19.38.04 20 .04 20h15.95s.18-.62-.27-1.67c-.46-1.06-2.69-1.75-4.17-2.41zM14.97 0c-2.78 0-5.03 2.24-5.03 5s2.25 5 5.03 5S20 7.76 20 5s-2.25-5-5.03-5zm-3.03 5c0-1.66 1.35-3 3.02-3 .47 0 .9.11 1.29.3l-4.01 3.99c-.18-.4-.3-.83-.3-1.29zm3.03 3c-.47 0-.9-.11-1.29-.3l4.01-3.99c.19.39.3.82.3 1.29 0 1.66-1.36 3-3.02 3z'
          ],
          bold: [
            'M14.3 9c.4-.8.7-1.6.7-2.5C15 4 13 2 10.5 2H5c-.6 0-1 .4-1 1v13c0 .6.4 1 1 1h6.5c2.5 0 4.5-2 4.5-4.5 0-1.4-.7-2.7-1.7-3.5zM7 5h3.5c.8 0 1.5.7 1.5 1.5S11.3 8 10.5 8H7V5zm4.5 9H7v-3h4.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z'
          ],
          book: [
            'M3 1v18c0 .55.45 1 1 1h2V0H4c-.55 0-1 .45-1 1zm14-1h-2v8l-2-2-2 2V0H7v20h10c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z'
          ],
          bookmark: [
            'M6 0c-.55 0-1 .45-1 1v18c0 .55.32.68.71.29L9.3 15.7a.996.996 0 011.41 0l3.59 3.59c.38.39.7.26.7-.29v-8-4.5V1c0-.55-.45-1-1-1H6z'
          ],
          box: [
            'M19.89 6.56l-2.99-6h-.01C16.72.23 16.39 0 16 0H4c-.39 0-.72.23-.89.56H3.1l-3 6h.01C.05 6.69 0 6.84 0 7v12c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V7c0-.16-.05-.31-.11-.44zM11 2h4.38l2 4H11V2zM4.62 2H9v4H2.62l2-4zM18 18H2V8h16v10zM8 12h4c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1z'
          ],
          briefcase: [
            'M19 5h-4V2c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v3H1c-.55 0-1 .45-1 1v5h4v-1h2v1h8v-1h2v1h4V6c0-.55-.45-1-1-1zm-6 0H7V3h6v2zm3 8h-2v-1H6v1H4v-1H0v6c0 .55.45 1 1 1h18c.55 0 1-.45 1-1v-6h-4v1z'
          ],
          'bring-data': [
            'M18 18a1 1 0 010 2H2a1 1 0 010-2h16zM9.995 3.005c.55 0 1 .45 1 .999v9.584l1.29-1.288a1.002 1.002 0 011.42 1.419l-3 2.996a1.015 1.015 0 01-1.42 0l-3-2.997a1.002 1.002 0 011.42-1.419l1.29 1.29V4.013c0-.55.45-1.009 1-1.009zM16 0a1 1 0 110 2 1 1 0 010-2zm-3 0a1 1 0 110 2 1 1 0 010-2zm-3 0a1 1 0 110 2 1 1 0 010-2zM7 0a1 1 0 110 2 1 1 0 010-2zM4 0a1 1 0 110 2 1 1 0 010-2z'
          ],
          build: [
            'M19.43 16.67L9.31 7.81l1.47-1.56c.41-.44-.15-.8.15-1.6 1.08-2.76 4.19-2.99 4.19-2.99s.45-.47.87-.92C11.98-1 9.26.7 8.04 1.8L3.83 6.25l-.86.92c-.48.51-.48 1.33 0 1.84l-.87.92c-.48-.51-1.26-.51-1.74 0s-.48 1.33 0 1.84l1.74 1.84c.48.51 1.26.51 1.74 0s.48-1.33 0-1.84l.87-.92c.48.51 1.26.51 1.74 0l1.41-1.49 8.81 10.07c.76.76 2 .76 2.76 0 .76-.76.76-2 0-2.76z'
          ],
          calculator: [
            'M16 0H4c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM7 18H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V8h2v2zm4 8H9v-2h2v2zm0-4H9v-2h2v2zm0-4H9V8h2v2zm4 8h-2v-6h2v6zm0-8h-2V8h2v2zm0-4H5V2h10v4z'
          ],
          calendar: [
            'M15 5c.6 0 1-.4 1-1V2c0-.5-.4-1-1-1s-1 .5-1 1v2c0 .6.4 1 1 1zM5 5c.6 0 1-.4 1-1V2c0-.5-.4-1-1-1s-1 .5-1 1v2c0 .6.4 1 1 1zm13-2h-1v1c0 1.1-.9 2-2 2s-2-.9-2-2V3H7v1c0 1.1-.9 2-2 2s-2-.9-2-2V3H2c-.5 0-1 .5-1 1v14c0 .5.5 1 1 1h16c.5 0 1-.5 1-1V4c0-.5-.5-1-1-1zM7 17H3v-4h4v4zm0-5H3V8h4v4zm5 5H8v-4h4v4zm0-5H8V8h4v4zm5 5h-4v-4h4v4zm0-5h-4V8h4v4z'
          ],
          camera: [
            'M10 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm9-4h-3.59L13.7 2.29A.956.956 0 0013 2H7c-.28 0-.53.11-.71.29L4.59 4H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h4.11c1.26 1.24 2.99 2 4.89 2s3.63-.76 4.89-2H19c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM4 8H2V6h2v2zm6 8c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z'
          ],
          'caret-down': [
            'M16 7c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1 0 .24.1.46.24.63l-.01.01 5 6 .01-.01c.19.22.45.37.76.37s.57-.15.76-.37l.01.01 5-6-.01-.01c.14-.17.24-.39.24-.63z'
          ],
          'caret-left': [
            'M13 4c-.24 0-.46.1-.63.24l-.01-.01-6 5 .01.01c-.22.19-.37.45-.37.76s.15.57.37.76l-.01.01 6 5 .01-.01c.17.14.39.24.63.24.55 0 1-.45 1-1V5c0-.55-.45-1-1-1z'
          ],
          'caret-right': [
            'M14 10c0-.31-.15-.57-.37-.76l.01-.01-6-5-.01.01C7.46 4.1 7.24 4 7 4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1 .24 0 .46-.1.63-.24l.01.01 6-5-.01-.01c.22-.19.37-.45.37-.76z'
          ],
          'caret-up': [
            'M15.76 12.37l.01-.01-5-6-.01.01C10.57 6.15 10.31 6 10 6s-.57.15-.76.37l-.01-.01-5 6 .01.01c-.14.17-.24.39-.24.63 0 .55.45 1 1 1h10c.55 0 1-.45 1-1 0-.24-.1-.46-.24-.63z'
          ],
          'cell-tower': [
            'M11.5 8.32c.31-.35.51-.81.51-1.32 0-1.1-.9-2-2-2s-2 .9-2 2c0 .51.2.97.51 1.32L5.06 18.69c-.17.52.11 1.09.63 1.26s1.09-.11 1.26-.63L8.39 15h3.23l1.44 4.32c.17.52.74.81 1.26.63s.81-.74.63-1.26L11.5 8.32zM10.95 13H9.06l.95-2.84.94 2.84zM5.31 10.73a.996.996 0 101.37-1.45c-1.4-1.33-1.28-3.35-.01-4.54.4-.38.43-1.01.05-1.41-.36-.41-1-.43-1.4-.06-2.09 1.95-2.28 5.3-.01 7.46z',
            'M4.6 12.2C3 11.1 2 9 2 7c0-2.1.9-3.9 2.6-5.2.5-.3.5-1 .2-1.4-.3-.5-1-.5-1.4-.2C1.2 1.9-.1 4.2 0 7c.1 2.7 1.4 5.3 3.4 6.8.2.1.4.2.6.2.3 0 .6-.1.8-.4.4-.5.3-1.1-.2-1.4zM13.27 10.69c.38.4 1.01.42 1.41.04 2.27-2.16 2.08-5.51-.01-7.46a.996.996 0 10-1.36 1.46c1.28 1.19 1.39 3.21-.01 4.54-.39.39-.41 1.02-.03 1.42z',
            'M16.6.2c-.4-.3-1.1-.3-1.4.2-.3.4-.3 1.1.2 1.4C17.1 3.1 18 4.9 18 7c0 2-1 4.1-2.6 5.2-.5.3-.6.9-.2 1.4.2.3.5.4.8.4.2 0 .4-.1.6-.2C18.7 12.3 20 9.7 20 7c.09-2.8-1.2-5.1-3.4-6.8z'
          ],
          changes: [
            'M18 16H2c-1.1 0-2 .9-2 2s.9 2 2 2h16c1.1 0 2-.9 2-2s-.9-2-2-2zM3 5c.28 0 .53-.11.71-.29L5 3.41V13c0 .55.45 1 1 1s1-.45 1-1V3.41L8.29 4.7c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-3-3C6.53.11 6.28 0 6 0s-.53.11-.71.29l-3 3A1.003 1.003 0 003 5zm7.29 5.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3a1.003 1.003 0 00-1.42-1.42L15 10.59V1c0-.55-.45-1-1-1s-1 .45-1 1v9.59L11.71 9.3A.965.965 0 0011 9a1.003 1.003 0 00-.71 1.71z'
          ],
          chart: [
            'M7 11v8c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-8l-2 2-4-2zm-7 8c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-8l-6 3v5zM17 7l-3 3v9c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V8.74c-.26.15-.58.26-1 .26-1.92 0-2-2-2-2zm2-6h-4c-.55 0-1 .45-1 1s.45 1 1 1h1.59L10.8 8.78 7.45 7.11v.01C7.31 7.05 7.16 7 7 7s-.31.05-.44.11V7.1l-6 3v.01c-.33.17-.56.5-.56.89 0 .55.45 1 1 1 .16 0 .31-.05.44-.11v.01L7 9.12l3.55 1.78v-.01c.14.06.29.11.45.11.28 0 .53-.11.71-.29L18 4.41V6c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1z'
          ],
          chat: [
            'M19 0H7c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h5.59l3.71 3.71c.17.18.42.29.7.29.55 0 1-.45 1-1v-3h1c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM7 13c-1.1 0-2-.9-2-2V4H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h1v3a1.003 1.003 0 001.71.71L7.41 16H13c.55 0 1-.45 1-1v-.17L12.17 13H7z'
          ],
          'chevron-backward': [
            'M8.41 10l5.29-5.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L7 8.59V4c0-.55-.45-1-1-1s-1 .45-1 1v12c0 .55.45 1 1 1s1-.45 1-1v-4.59l5.29 5.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L8.41 10z'
          ],
          'chevron-down': [
            'M16 6c-.28 0-.53.11-.71.29L10 11.59l-5.29-5.3a1.003 1.003 0 00-1.42 1.42l6 6c.18.18.43.29.71.29s.53-.11.71-.29l6-6A1.003 1.003 0 0016 6z'
          ],
          'chevron-forward': [
            'M13 3c-.55 0-1 .45-1 1v4.59l-5.29-5.3a1.003 1.003 0 00-1.42 1.42l5.3 5.29-5.29 5.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l5.29-5.3V16c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1z'
          ],
          'chevron-left': [
            'M8.41 10l5.29-5.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-6 6c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l6 6a1.003 1.003 0 001.42-1.42L8.41 10z'
          ],
          'chevron-right': [
            'M13.71 9.29l-6-6a1.003 1.003 0 00-1.42 1.42l5.3 5.29-5.29 5.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l6-6c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z'
          ],
          'chevron-up': [
            'M16.71 12.29l-6-6C10.53 6.11 10.28 6 10 6s-.53.11-.71.29l-6 6a1.003 1.003 0 001.42 1.42L10 8.41l5.29 5.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71z'
          ],
          circle: [
            'M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z'
          ],
          'circle-arrow-down': [
            'M14 10c-.28 0-.53.11-.71.29L11 12.59V5c0-.55-.45-1-1-1s-1 .45-1 1v7.59L6.71 10.3A.965.965 0 006 10a1.003 1.003 0 00-.71 1.71l4 4c.18.18.43.29.71.29s.53-.11.71-.29l4-4A1.003 1.003 0 0014 10zM10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'
          ],
          'circle-arrow-left': [
            'M15 9H7.41L9.7 6.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-4 4c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l4 4a1.003 1.003 0 001.42-1.42L7.41 11H15c.55 0 1-.45 1-1s-.45-1-1-1zm-5-9C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'
          ],
          'circle-arrow-right': [
            'M15.71 9.29l-4-4a1.003 1.003 0 00-1.42 1.42L12.59 9H5c-.55 0-1 .45-1 1s.45 1 1 1h7.59l-2.29 2.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71zM10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'
          ],
          'circle-arrow-up': [
            'M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.71-13.71C10.53 4.11 10.28 4 10 4s-.53.11-.71.29l-4 4a1.003 1.003 0 001.42 1.42L9 7.41V15c0 .55.45 1 1 1s1-.45 1-1V7.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-4-4z'
          ],
          citation: [
            'M4 1C1.79 1 0 2.79 0 5s1.79 4 4 4c.1 0 .2-.01.3-.02C3.82 11.32 2.53 13 1 13c-.55 0-1 .45-1 1s.45 1 1 1c3.87 0 7-4.48 7-10 0-2.21-1.79-4-4-4zM16 1c-2.21 0-4 1.79-4 4s1.79 4 4 4c.1 0 .2-.01.3-.02C15.82 11.32 14.53 13 13 13c-.55 0-1 .45-1 1s.45 1 1 1c3.87 0 7-4.48 7-10 0-2.21-1.79-4-4-4z'
          ],
          clean: [
            'M7 0L5 5 0 6.998 5 9l2 5 2-5 5-1.995L9 5zM15 10l-1.5 3.496-3.5 1.499 3.5 1.498L15 20l1.5-3.507L20 15l-3.5-1.504z'
          ],
          clipboard: [
            'M13 2c0-.55-.45-1-1-1h-.78a1.98 1.98 0 00-3.44 0H7c-.55 0-1 .45-1 1v2h7V2z',
            'M16 2h-2v3H5V2H3c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h13c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1z'
          ],
          cloud: [
            'M15 7c-.12 0-.24.03-.36.04C13.83 4.69 11.62 3 9 3 5.69 3 3 5.69 3 9c0 .05.01.09.01.14A3.98 3.98 0 000 13c0 2.21 1.79 4 4 4h11c2.76 0 5-2.24 5-5s-2.24-5-5-5z'
          ],
          'cloud-download': [
            'M15 4c-.12 0-.24.03-.36.04C13.83 1.69 11.62 0 9 0 5.69 0 3 2.69 3 6c0 .05.01.09.01.14A3.98 3.98 0 000 10c0 2.21 1.79 4 4 4h.78c.55-.61 1.34-1 2.22-1v-2c0-1.66 1.34-3 3-3s3 1.34 3 3v2c.88 0 1.66.38 2.2.98C17.87 13.87 20 11.69 20 9c0-2.76-2.24-5-5-5zm-2 11c-.28 0-.53.11-.71.29L11 16.59V11c0-.55-.45-1-1-1s-1 .45-1 1v5.59L7.71 15.3A.965.965 0 007 15a1.003 1.003 0 00-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 0013 15z'
          ],
          'cloud-upload': [
            'M10.71 10.29c-.18-.18-.43-.29-.71-.29s-.53.11-.71.29l-3 3a1.003 1.003 0 001.42 1.42L9 13.41V19c0 .55.45 1 1 1s1-.45 1-1v-5.59l1.29 1.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-3-3zM15 4c-.12 0-.24.03-.36.04C13.83 1.69 11.62 0 9 0 5.69 0 3 2.69 3 6c0 .05.01.09.01.14A3.98 3.98 0 000 10c0 2.21 1.79 4 4 4 0-.83.34-1.58.88-2.12l3-3a2.993 2.993 0 014.24 0l3 3-.01.01c.52.52.85 1.23.87 2.02C18.28 13.44 20 11.42 20 9c0-2.76-2.24-5-5-5z'
          ],
          code: [
            'M6 6a1.003 1.003 0 00-1.71-.71l-4 4C.11 9.47 0 9.72 0 10c0 .28.11.53.29.71l4 4a1.003 1.003 0 001.42-1.42L2.41 10 5.7 6.71c.19-.18.3-.43.3-.71zm6-4c-.46 0-.83.31-.95.73l-4 14c-.02.09-.05.17-.05.27 0 .55.45 1 1 1 .46 0 .83-.31.95-.73l4-14c.02-.09.05-.17.05-.27 0-.55-.45-1-1-1zm7.71 7.29l-4-4a1.003 1.003 0 00-1.42 1.42l3.3 3.29-3.29 3.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z'
          ],
          'code-block': [
            'M19 5h-2V3c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v2H9V3c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v2H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM8.71 15.29a1.003 1.003 0 01-1.42 1.42l-4-4C3.11 12.53 3 12.28 3 12s.11-.53.29-.71l4-4a1.003 1.003 0 011.42 1.42L5.41 12l3.3 3.29zm8-2.58l-4 4a1.003 1.003 0 01-1.42-1.42l3.3-3.29-3.29-3.29A.965.965 0 0111 8a1.003 1.003 0 011.71-.71l4 4c.18.18.29.43.29.71s-.11.53-.29.71z'
          ],
          cog: [
            'M19 8h-2.31c-.14-.46-.33-.89-.56-1.3l1.7-1.7a.996.996 0 000-1.41l-1.41-1.41a.996.996 0 00-1.41 0l-1.7 1.7c-.41-.22-.84-.41-1.3-.55V1c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v2.33c-.48.14-.94.34-1.37.58L5 2.28a.972.972 0 00-1.36 0L2.28 3.64c-.37.38-.37.99 0 1.36L3.9 6.62c-.24.44-.44.89-.59 1.38H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2.31c.14.46.33.89.56 1.3L2.17 15a.996.996 0 000 1.41l1.41 1.41c.39.39 1.02.39 1.41 0l1.7-1.7c.41.22.84.41 1.3.55V19c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.33c.48-.14.94-.35 1.37-.59L15 17.72c.37.37.98.37 1.36 0l1.36-1.36c.37-.37.37-.98 0-1.36l-1.62-1.62c.24-.43.45-.89.6-1.38H19c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-9 6c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z'
          ],
          'collapse-all': [
            'M9.29 8.71c.18.18.43.29.71.29s.53-.11.71-.29l6-6a1.003 1.003 0 00-1.42-1.42L10 6.59l-5.29-5.3a1.003 1.003 0 00-1.42 1.42l6 6zm1.42 2.58c-.18-.18-.43-.29-.71-.29s-.53.11-.71.29l-6 6a1.003 1.003 0 001.42 1.42l5.29-5.3 5.29 5.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-6-6z'
          ],
          'column-layout': [
            'M19 1H1c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM5 17H2V3h3v14zm4 0H6V3h3v14zm9 0h-8V3h8v14z'
          ],
          comment: [
            'M19 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3v4a1.003 1.003 0 001.71.71l4.7-4.71H19c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM4 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z'
          ],
          comparison: [
            'M6 8H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm13-6h-5c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 3h-5V3h5v2zM6 14H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1zM6 2H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm4-2c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zm9 14h-5c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1zm0 3h-5v-2h5v2zm0-9h-5c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm0 3h-5V9h5v2z'
          ],
          compass: [
            'M15 10c0 .14-.03.28-.09.4l-3.99 8.98-.01.02a.991.991 0 01-1.82 0l-.01-.02-3.99-8.98c-.06-.12-.09-.26-.09-.4s.03-.28.09-.4L9.08.62 9.09.6a.991.991 0 011.82 0l.01.02 3.99 8.98c.06.12.09.26.09.4zm-5-6.54L7.09 10h5.81L10 3.46z'
          ],
          compressed: [
            'M19.89 6.56l-2.99-6h-.01C16.72.23 16.39 0 16 0H4c-.39 0-.72.23-.89.56H3.1l-3 6h.01C.05 6.69 0 6.84 0 7v12c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V7c0-.16-.05-.31-.11-.44zM11 2h4.38l2 4H11V2zM4.62 2H9v4H2.62l2-4zM18 18H2V8h7v4.59L6.71 10.3A.965.965 0 006 10a1.003 1.003 0 00-.71 1.71l4 4c.18.18.43.29.71.29s.53-.11.71-.29l4-4a1.003 1.003 0 00-1.42-1.42L11 12.59V8h7v10z'
          ],
          confirm: [
            'M9.71 5.29a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l7-7a1.003 1.003 0 00-1.42-1.42L12 7.59l-2.29-2.3zm7.93 2.32c.23.75.36 1.56.36 2.39 0 4.42-3.58 8-8 8s-8-3.58-8-8a7.998 7.998 0 0111.8-7.04l1.46-1.46C13.73.56 11.93 0 10 0 4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10c0-1.4-.29-2.73-.81-3.95l-1.55 1.56z'
          ],
          console: [
            'M19 19H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h18c.55 0 1 .45 1 1v16c0 .55-.45 1-1 1zM18 6H2v11h16V6zM4 8c.28 0 .53.11.71.29l2 2c.18.18.29.43.29.71s-.11.53-.29.71l-2 2a1.003 1.003 0 01-1.42-1.42L4.59 11l-1.3-1.29A1.003 1.003 0 014 8zm5 4h3c.55 0 1 .45 1 1s-.45 1-1 1H9c-.55 0-1-.45-1-1s.45-1 1-1z'
          ],
          contrast: [
            'M19 8h-1.26c-.19-.73-.48-1.42-.85-2.06l.94-.94a.996.996 0 000-1.41l-1.41-1.41a.996.996 0 00-1.41 0l-.94.94c-.65-.38-1.34-.67-2.07-.86V1c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v1.26c-.76.2-1.47.5-2.13.89L5 2.28a.972.972 0 00-1.36 0L2.28 3.64c-.37.38-.37.98 0 1.36l.87.87c-.39.66-.69 1.37-.89 2.13H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h1.26c.19.73.48 1.42.85 2.06l-.94.94a.996.996 0 000 1.41l1.41 1.41c.39.39 1.02.39 1.41 0l.94-.94c.64.38 1.33.66 2.06.85V19c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1.26c.76-.2 1.47-.5 2.13-.89l.88.87c.37.37.98.37 1.36 0l1.36-1.36c.37-.38.37-.98 0-1.36l-.87-.87c.4-.65.7-1.37.89-2.13H19c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-9 7c-2.76 0-5-2.24-5-5s2.24-5 5-5v10z'
          ],
          control: [
            'M17 10h-7v7h7v-7zm0-7h-7v6h7V3zM9 3H3v14h6V3zm10-3H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 18H2V2h16v16z'
          ],
          'credit-card': [
            'M19 3H1c-.55 0-1 .45-1 1v2h20V4c0-.55-.45-1-1-1zM0 16c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V8H0v8zm6.5-2h7c.28 0 .5.22.5.5s-.22.5-.5.5h-7c-.28 0-.5-.22-.5-.5s.22-.5.5-.5zm-4 0h2c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z'
          ],
          cross: [
            'M11.41 10l4.29-4.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L10 8.59l-4.29-4.3a1.003 1.003 0 00-1.42 1.42L8.59 10 4.3 14.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l4.29-4.3 4.29 4.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L11.41 10z'
          ],
          crown: [
            'M2 8l4 2 4-5 4 5 4-2-1 7H3L2 8zm8-6a1 1 0 110 2 1 1 0 010-2zM1 5a1 1 0 110 2 1 1 0 010-2zm18 0a1 1 0 110 2 1 1 0 010-2zM3 16h14v2H3v-2z'
          ],
          cube: [
            'M1.953 4.481l7.41-4.02c.394-.215.88-.215 1.275 0l7.409 4.02L10 9.22 1.953 4.48zm-.817.68L9.5 10.085v9.281a1.316 1.316 0 01-.138-.064l-7.714-4.186A1.211 1.211 0 011 14.057v-8.35c0-.193.048-.38.136-.547zm17.728 0c.088.166.136.353.136.546v8.35c0 .438-.247.842-.648 1.06l-7.714 4.186c-.045.024-.091.046-.138.064v-9.281l8.364-4.926z'
          ],
          'cube-add': [
            'M17 3h2a1 1 0 010 2h-2v2a1 1 0 01-2 0V5h-2a1 1 0 010-2h2V1a1 1 0 012 0v2zm-3.969 4.435L10 9.22 1.953 4.48l7.41-4.02c.394-.215.88-.215 1.275 0l1.33.721A3.001 3.001 0 0013 7c0 .148.01.293.031.435zm.319.972A3 3 0 0019 7v7.057c0 .438-.247.842-.648 1.06l-7.714 4.186c-.045.024-.091.046-.138.064v-9.281l2.85-1.679zM1.136 5.16L9.5 10.086v9.281a1.316 1.316 0 01-.138-.064l-7.714-4.186A1.211 1.211 0 011 14.057v-8.35c0-.193.048-.38.136-.547z'
          ],
          'cube-remove': [
            'M11.968 1.182A3.001 3.001 0 0013 7h.77L10 9.22 1.953 4.48l7.41-4.02c.394-.215.88-.215 1.275 0l1.33.721zM19 7v7.057c0 .438-.247.842-.648 1.06l-7.714 4.186c-.045.024-.091.046-.138.064v-9.281L15.74 7H19zM1.136 5.16L9.5 10.086v9.281a1.316 1.316 0 01-.138-.064l-7.714-4.186A1.211 1.211 0 011 14.057v-8.35c0-.193.048-.38.136-.547zM13 3h6a1 1 0 010 2h-6a1 1 0 010-2z'
          ],
          'curved-range-chart': [
            'M19 16H3.02l2.14-1.74c2.25 1.7 7.33.46 11.83-2.99l-1.29-1.5c-3.56 2.74-7.31 4.03-8.93 3.19l10.55-8.57-.63-.78-10.59 8.6c-.64-1.64 1.46-4.91 5.09-7.7L9.9 3.01c-4.6 3.54-6.91 8.12-5.41 10.51L2 15.54V3c0-.55-.45-1-1-1s-1 .45-1 1v14a.998.998 0 001 1h18c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          cut: [
            'M16 2s.72-1.28 0-2l-5.29 6.25 1.28 1.54L16 2zm.08 10c-.55 0-1.07.12-1.54.32L4.31 0c-.7.72 0 2 0 2l4.45 6.56-3.19 3.77C5.09 12.12 4.56 12 4 12c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.65-.17-1.26-.45-1.8l2.54-3.67 2.49 3.67c-.27.54-.44 1.15-.44 1.8 0 2.21 1.76 4 3.92 4 2.17 0 3.92-1.79 3.92-4 .02-2.21-1.74-4-3.9-4zM4 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm12.08 0c-1.08 0-1.96-.9-1.96-2s.88-2 1.96-2 1.96.9 1.96 2-.88 2-1.96 2z'
          ],
          cycle: [
            'M16 10a4 4 0 110 8 4 4 0 010-8zM4 10a4 4 0 110 8 4 4 0 010-8zm7.299-5.543l.087.089 1.93 2.232 2.048.708a1 1 0 01.65 1.16l-.031.112a1 1 0 01-1.16.65l-.112-.031-2.302-.796a1 1 0 01-.337-.197l-.092-.094-1.387-1.603-1.891 1.982 2.046 2.274a1 1 0 01.25.547l.007.122v4.24a1 1 0 01-1.993.117l-.007-.117-.001-3.857-2.408-2.676a1 1 0 01-.063-1.26l.082-.099 3.29-3.45a1 1 0 011.394-.053zM16 12a2 2 0 100 4 2 2 0 000-4zM4 12a2 2 0 100 4 2 2 0 000-4zm9.5-10a1.5 1.5 0 110 3 1.5 1.5 0 010-3z'
          ],
          dashboard: [
            'M6 5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM4 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6-4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-5C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm6-9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-8 5c0 1.1.9 2 2 2s2-.9 2-2c0-.33-2-8-2-8s-2 7.67-2 8zm6-9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z'
          ],
          'data-connection': [
            'M2 11.9c.935.674 2.339 1.217 4.023 1.536A6.996 6.996 0 009.393 20c-3.988-.019-7.231-1.083-7.387-2.4L2 17.5v-5.6zM13 8c3.315 0 6 2.685 6 6s-2.685 6-6 6-6-2.685-6-6 2.685-6 6-6zm1 1l-4 6h2.5l-.5 4 4-6h-2.5l.5-4zm3-4.6v3.855a7.003 7.003 0 00-10.779 3.992c-2.408-.391-4.097-1.202-4.214-2.142L2 10V4.4c1.525 1.1 4.3 1.85 7.5 1.85S15.475 5.5 17 4.4zM9.5 0C13.637 0 17 1.125 17 2.5S13.637 5 9.5 5C5.35 5 2 3.875 2 2.5S5.35 0 9.5 0z'
          ],
          'data-lineage': [
            'M1.053 0C.47 0 0 .471 0 1.053V4.21c0 .58.471 1.052 1.053 1.052h3.275a6.332 6.332 0 003.728 4.738 6.33 6.33 0 00-3.728 4.737l-3.275-.001C.47 14.737 0 15.208 0 15.789v3.158C0 19.53.471 20 1.053 20h7.435c.581 0 1.053-.471 1.053-1.053V15.79c0-.58-.472-1.052-1.053-1.052H5.406a5.293 5.293 0 015.195-4.21v2.105c0 .58.471 1.052 1.052 1.052h7.294c.582 0 1.053-.471 1.053-1.052V7.368c0-.58-.471-1.052-1.053-1.052h-7.294c-.581 0-1.052.471-1.052 1.052v2.106a5.293 5.293 0 01-5.194-4.21h3.081c.581 0 1.053-.472 1.053-1.053V1.053C9.54.47 9.069 0 8.488 0H1.053z'
          ],
          database: [
            'M2.01 5.1v5.4c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5V5.1c-1.49 1.13-4.51 1.9-8 1.9-3.48 0-6.5-.77-8-1.9zm8 .9c4.42 0 8-1.12 8-2.5s-3.58-2.5-8-2.5-8 1.12-8 2.5S5.6 6 10.01 6zm-8 6.1v5.4c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5v-5.4c-1.49 1.13-4.51 1.9-8 1.9-3.48 0-6.5-.77-8-1.9z'
          ],
          delete: [
            'M15 6a1.003 1.003 0 00-1.71-.71L10 8.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42L8.59 10 5.3 13.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l3.29-3.3 3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L11.41 10l3.29-3.29c.19-.18.3-.43.3-.71zm-5-6C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'
          ],
          delta: ['M10 0L0 20h20L10 0zM9 6l6 12H3L9 6z'],
          'derive-column': [
            'M7.1 8.2h-.99c.28-1.11.66-1.92 1.12-2.43.28-.32.56-.48.83-.48.05 0 .1.02.13.05.03.03.05.07.05.12 0 .04-.04.13-.11.25a.64.64 0 00-.12.35c0 .15.06.28.18.39.12.11.27.16.45.16.2 0 .36-.07.49-.2s.2-.31.2-.54c0-.26-.1-.47-.3-.63-.19-.16-.51-.24-.95-.24-.68 0-1.3.19-1.85.58-.56.38-1.09 1.02-1.59 1.91-.17.3-.34.5-.49.59-.15.08-.4.13-.74.12l-.23.77h.95l-1.39 5.24c-.23.86-.39 1.39-.47 1.59-.12.29-.3.54-.54.75-.1.08-.21.12-.35.12-.04 0-.07-.01-.1-.03l-.03-.04c0-.02.03-.07.1-.13.07-.07.1-.17.1-.31 0-.15-.05-.28-.16-.38-.11-.1-.27-.15-.47-.15-.25 0-.44.07-.59.2-.15.12-.23.28-.23.46 0 .19.09.36.27.5.19.14.47.21.86.21.61 0 1.16-.15 1.63-.46.48-.31.89-.78 1.25-1.43.35-.64.72-1.68 1.09-3.11l.8-3.03h.96l.24-.77zM19 0h-9c-.55 0-1 .45-1 1v3h2V2h7v16h-7v-2H9v3c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-8.79 13.49c.15.28.32.49.52.61.19.12.44.19.73.19.28 0 .57-.1.86-.3.38-.25.77-.69 1.17-1.31l-.25-.14c-.27.37-.48.6-.61.69-.09.06-.19.09-.31.09-.14 0-.28-.09-.42-.26-.23-.29-.54-1.09-.93-2.4.35-.59.64-.97.87-1.15.17-.13.35-.2.55-.2.07 0 .2.03.39.08s.36.08.5.08c.2 0 .37-.07.5-.2.15-.14.22-.31.22-.52 0-.22-.07-.4-.2-.53s-.33-.2-.58-.2c-.22 0-.43.05-.63.15-.2.1-.45.32-.75.67-.23.25-.56.7-1.01 1.33a6.52 6.52 0 00-.91-2.15l-2.39.39-.05.25c.18-.03.33-.05.45-.05.24 0 .43.1.59.3.25.31.59 1.24 1.02 2.8-.34.44-.58.73-.7.87-.21.22-.38.36-.52.43-.1.05-.22.08-.35.08-.1 0-.26-.05-.49-.16a1.01 1.01 0 00-.42-.11c-.23 0-.42.07-.57.22-.15.14-.23.33-.23.55 0 .21.07.38.21.51.14.13.33.2.56.2.23 0 .44-.05.64-.14.2-.09.45-.29.75-.59s.72-.78 1.25-1.43c.21.61.39 1.06.54 1.35z'
          ],
          desktop: [
            'M19 0H1C.45 0 0 .45 0 1v13c0 .55.45 1 1 1h5.67l-.5 3H5c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1h-1.17l-.5-3H19c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 13H2V2h16v11z'
          ],
          diagnosis: [
            'M4 2a1 1 0 01.117 1.993L4 4v5a2 2 0 001.85 1.995L6 11a2 2 0 001.995-1.85L8 9V4a1 1 0 01-.117-1.993L8 2h1a1 1 0 01.993.883L10 3v6a4.002 4.002 0 01-3 3.874V13a3 3 0 003 3 4 4 0 003.995-3.8L14 12V8.792a2.5 2.5 0 112 0V12a6 6 0 01-6 6 5 5 0 01-4.995-4.783L5 13v-.126A4.002 4.002 0 012.005 9.2L2 9V3a1 1 0 01.883-.993L3 2h1z'
          ],
          'diagram-tree': [
            'M19 10v5h-2v-4h-6v4H9v-4H3v4H1v-5a1 1 0 011-1h7V5h2v4h7a1 1 0 011 1zM1 16h2a1 1 0 011 1v2a1 1 0 01-1 1H1a1 1 0 01-1-1v-2a1 1 0 011-1zm16 0h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a1 1 0 011-1zm-8 0h2a1 1 0 011 1v2a1 1 0 01-1 1H9a1 1 0 01-1-1v-2a1 1 0 011-1zM9 0h2a1 1 0 011 1v2a1 1 0 01-1 1H9a1 1 0 01-1-1V1a1 1 0 011-1z'
          ],
          'direction-left': ['M20 3.02l-20 7 20 7-5-7z'],
          'direction-right': ['M20 10.02l-20-7 5 7-5 7z'],
          disable: [
            'M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zM2 10c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L3.69 14.9A7.902 7.902 0 012 10zm8 8c-1.85 0-3.55-.63-4.9-1.69L16.31 5.1A7.902 7.902 0 0118 10c0 4.42-3.58 8-8 8z'
          ],
          document: [
            'M11.98 0h-8c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h13c.55 0 1-.45 1-1V6l-6-6zm4 18h-11V2h6v5h5v11z'
          ],
          'document-open': [
            'M8 15c0 .55.45 1 1 1s1-.45 1-1v-5c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1h2.59L1.3 16.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L8 12.41V15zm5-15H5c-.55 0-1 .45-1 1v6h2V2h6v5h5v11H6v-.76L4.04 19.2c.1.45.48.8.96.8h13c.55 0 1-.45 1-1V6l-6-6z'
          ],
          'document-share': [
            'M14.09 10.09c-.31.31-.67.57-1.09.72V18H2V2h6v5h1.18c.15-.42.39-.8.7-1.11v-.01l2.45-2.45c-.42-.29-.78-.65-1.01-1.11L9 0H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h13c.55 0 1-.45 1-1V9.24l-.88.88-.03-.03zM19 0h-5c-.55 0-1 .45-1 1s.45 1 1 1h2.59L11.3 7.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L18 3.41V6c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1z'
          ],
          dollar: [
            'M15.57 11.19c-.27-.51-.63-.93-1.07-1.26-.44-.33-.95-.6-1.51-.79-.56-.2-1.14-.36-1.72-.5-.6-.14-1.19-.26-1.75-.38-.57-.13-1.07-.27-1.51-.44-.44-.17-.8-.38-1.07-.63s-.41-.59-.41-1c0-.33.09-.6.28-.81.19-.21.42-.36.69-.47.27-.11.57-.18.88-.22.31-.04.58-.06.8-.06.71 0 1.35.14 1.9.41.55.27.91.81 1.06 1.62h3.36c-.09-.84-.32-1.56-.69-2.16-.37-.6-.83-1.08-1.38-1.45-.56-.37-1.18-.64-1.86-.81-.19-.05-.38-.07-.57-.1V1c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v1.1c-.22.03-.43.05-.66.1-.73.13-1.39.37-1.98.71-.6.34-1.09.8-1.47 1.35-.39.56-.58 1.25-.58 2.08 0 .76.13 1.41.4 1.93.26.52.62.95 1.06 1.28.44.33.94.6 1.5.79.55.2 1.13.36 1.74.5.58.14 1.16.26 1.72.38s1.07.26 1.51.43c.44.17.8.39 1.09.66.28.27.43.63.45 1.06.02.43-.08.78-.3 1.04-.22.26-.49.47-.83.6-.34.14-.7.23-1.09.28-.39.05-.73.07-1.03.07-.87 0-1.61-.2-2.23-.59-.62-.39-.98-1.08-1.07-2.06H3c.02.9.19 1.68.52 2.34.33.66.78 1.21 1.35 1.65.57.44 1.25.77 2.03.98.35.1.71.16 1.08.21V19c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.13c.25-.04.5-.07.76-.13.77-.18 1.47-.46 2.1-.85.63-.39 1.14-.9 1.54-1.53.4-.63.59-1.39.59-2.29.01-.75-.13-1.37-.4-1.88z'
          ],
          dot: ['M10 6a4 4 0 100 8 4 4 0 100-8z'],
          'double-caret-horizontal': [
            'M8 4c-.24 0-.46.1-.63.24l-.01-.01-6 5 .01.01c-.22.19-.37.45-.37.76s.15.57.37.76l-.01.01 6 5 .01-.01c.17.14.39.24.63.24.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm11 6c0-.31-.15-.57-.37-.76l.01-.01-6-5-.01.01C12.46 4.1 12.24 4 12 4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1 .24 0 .46-.1.63-.24l.01.01 6-5-.01-.01c.22-.19.37-.45.37-.76z'
          ],
          'double-caret-vertical': [
            'M5 9h10c.55 0 1-.45 1-1 0-.24-.1-.46-.24-.63l.01-.01-5-6-.01.01C10.57 1.15 10.31 1 10 1s-.57.15-.76.37l-.01-.01-5 6 .01.01C4.1 7.54 4 7.76 4 8c0 .55.45 1 1 1zm10 2H5c-.55 0-1 .45-1 1 0 .24.1.46.24.63l-.01.01 5 6 .01-.01c.19.22.45.37.76.37s.57-.15.76-.37l.01.01 5-6-.01-.01c.14-.17.24-.39.24-.63 0-.55-.45-1-1-1z'
          ],
          'double-chevron-down': [
            'M9.29 10.71c.18.18.43.29.71.29s.53-.11.71-.29l6-6a1.003 1.003 0 00-1.42-1.42L10 8.59l-5.29-5.3a1.003 1.003 0 00-1.42 1.42l6 6zM16 9c-.28 0-.53.11-.71.29L10 14.59l-5.29-5.3a1.003 1.003 0 00-1.42 1.42l6 6c.18.18.43.29.71.29s.53-.11.71-.29l6-6A1.003 1.003 0 0016 9z'
          ],
          'double-chevron-left': [
            'M5.41 10l5.29-5.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-6 6c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l6 6a1.003 1.003 0 001.42-1.42L5.41 10zm6 0l5.29-5.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-6 6c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l6 6a1.003 1.003 0 001.42-1.42L11.41 10z'
          ],
          'double-chevron-right': [
            'M11 10c0-.28-.11-.53-.29-.71l-6-6a1.003 1.003 0 00-1.42 1.42L8.59 10 3.3 15.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l6-6c.18-.18.29-.43.29-.71zm5.71-.71l-6-6a1.003 1.003 0 00-1.42 1.42l5.3 5.29-5.29 5.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l6-6c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z'
          ],
          'double-chevron-up': [
            'M4 11c.28 0 .53-.11.71-.29L10 5.41l5.29 5.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-6-6A.997.997 0 0010 3c-.28 0-.53.11-.71.29l-6 6A1.003 1.003 0 004 11zm6.71-1.71A.997.997 0 0010 9c-.28 0-.53.11-.71.29l-6 6a1.003 1.003 0 001.42 1.42l5.29-5.3 5.29 5.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-6-6z'
          ],
          'doughnut-chart': [
            'M16 10c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6V0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10h-4zm-.09-1h4.04C19.48 4.28 15.72.52 11 .05V4.1A5.98 5.98 0 0115.91 9z'
          ],
          download: [
            'M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm4.71 11.71l-4 4c-.18.18-.43.29-.71.29s-.53-.11-.71-.29l-4-4a1.003 1.003 0 011.42-1.42L9 12.59V5c0-.55.45-1 1-1s1 .45 1 1v7.59l2.29-2.29c.18-.19.43-.3.71-.3a1.003 1.003 0 01.71 1.71z'
          ],
          'drag-handle-horizontal': [
            'M7.5 11c-.83 0-1.5.67-1.5 1.5S6.67 14 7.5 14 9 13.33 9 12.5 8.33 11 7.5 11zm-5-5C1.67 6 1 6.67 1 7.5S1.67 9 2.5 9 4 8.33 4 7.5 3.33 6 2.5 6zm0 5c-.83 0-1.5.67-1.5 1.5S1.67 14 2.5 14 4 13.33 4 12.5 3.33 11 2.5 11zm15-2c.83 0 1.5-.67 1.5-1.5S18.33 6 17.5 6 16 6.67 16 7.5 16.67 9 17.5 9zm-5 2c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm5 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-10-5C6.67 6 6 6.67 6 7.5S6.67 9 7.5 9 9 8.33 9 7.5 8.33 6 7.5 6zm5 0c-.83 0-1.5.67-1.5 1.5S11.67 9 12.5 9 14 8.33 14 7.5 13.33 6 12.5 6z'
          ],
          'drag-handle-vertical': [
            'M7.5 6C6.67 6 6 6.67 6 7.5S6.67 9 7.5 9 9 8.33 9 7.5 8.33 6 7.5 6zm0 5c-.83 0-1.5.67-1.5 1.5S6.67 14 7.5 14 9 13.33 9 12.5 8.33 11 7.5 11zm0 5c-.83 0-1.5.67-1.5 1.5S6.67 19 7.5 19 9 18.33 9 17.5 8.33 16 7.5 16zm5-12c.83 0 1.5-.67 1.5-1.5S13.33 1 12.5 1 11 1.67 11 2.5 11.67 4 12.5 4zm-5-3C6.67 1 6 1.67 6 2.5S6.67 4 7.5 4 9 3.33 9 2.5 8.33 1 7.5 1zm5 10c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-10c-.83 0-1.5.67-1.5 1.5S11.67 9 12.5 9 14 8.33 14 7.5 13.33 6 12.5 6z'
          ],
          draw: [
            'M17.7 12.7c0-.1 0-.2-.1-.3l-2-7c-.1-.3-.3-.6-.6-.7L1.8 0l-.6.5L7.7 7c.3-.2.6-.3 1-.3 1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2c0-.4.1-.7.3-1L.5 1.2l-.5.6L4.7 15c.1.3.4.5.7.6l7 2c.1 0 .2.1.3.1.3 0 .5-.1.7-.3l4-4c.2-.2.3-.5.3-.7zm1 1c-.3 0-.5.1-.7.3l-4 4c-.2.2-.3.4-.3.7 0 .5.4 1 1 1 .3 0 .5-.1.7-.3l4-4c.2-.2.3-.4.3-.7 0-.6-.5-1-1-1z'
          ],
          'drawer-left': [
            'M9 0a1 1 0 011 1v18a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h8zM8 2H2v16h6V2zm2 7h6.59L14.3 6.71A.965.965 0 0114 6a1.003 1.003 0 011.71-.71l4 4c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-4 4a1.003 1.003 0 01-1.42-1.42l2.3-2.29H10V9z'
          ],
          'drawer-left-filled': [
            'M1 0h8a1 1 0 011 1v18a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1zm9 9h6.59L14.3 6.71A.965.965 0 0114 6a1.003 1.003 0 011.71-.71l4 4c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-4 4a1.003 1.003 0 01-1.42-1.42l2.3-2.29H10V9z'
          ],
          'drawer-right': [
            'M19 0a1 1 0 011 1v18a1 1 0 01-1 1h-8a1 1 0 01-1-1V1a1 1 0 011-1h8zm-1 2h-6v16h6V2zm-8 7H3.41L5.7 6.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-4 4C.11 9.47 0 9.72 0 10c0 .28.11.53.29.71l4 4a1.003 1.003 0 001.42-1.42L3.41 11H10V9z'
          ],
          'drawer-right-filled': [
            'M11 0h8a1 1 0 011 1v18a1 1 0 01-1 1h-8a1 1 0 01-1-1V1a1 1 0 011-1zm-1 9H3.41L5.7 6.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-4 4C.11 9.47 0 9.72 0 10c0 .28.11.53.29.71l4 4a1.003 1.003 0 001.42-1.42L3.41 11H10V9z'
          ],
          'drive-time': [
            'M20.01 7.7c0-.63-.5-1.14-1.1-1.14h-1.32l-.95-2.57c-.24-.64-.95-1.31-1.59-1.5 0 0-1.65-.49-5.05-.49s-5.04.49-5.04.49c-.63.19-1.35.86-1.59 1.5l-.95 2.57H1.1C.5 6.56 0 7.07 0 7.7c0 .63.5 1.14 1.1 1.14h.47l-.34.91c-.24.64-.43 1.72-.43 2.4v5.39c0 .8.63 1.45 1.4 1.45.77 0 1.4-.65 1.4-1.45v-.83h12.8v.83c0 .8.63 1.45 1.4 1.45s1.4-.65 1.4-1.45v-5.39c0-.68-.19-1.77-.43-2.4l-.34-.91h.47c.61 0 1.11-.51 1.11-1.14zm-16.47.34l1.12-3.16c.08-.22.32-.39.54-.39h9.6c.22 0 .46.17.54.39l1.12 3.16c.08.21-.04.39-.26.39H3.8c-.22-.01-.34-.18-.26-.39zm.96 4.94c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.68 1.5 1.5c0 .83-.67 1.5-1.5 1.5zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z'
          ],
          duplicate: [
            'M15 4H1c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-1 14H2V6h12v12zm5-18H5c-.55 0-1 .45-1 1v2h2V2h12v12h-1v2h2c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z'
          ],
          edit: [
            'M4.59 12.59l2.83 2.83 7.65-7.65-2.83-2.83-7.65 7.65zM2 18l4.41-1.59-2.81-2.79L2 18zM16 2c-.55 0-1.05.22-1.41.59l-1.65 1.65 2.83 2.83 1.65-1.65A2.006 2.006 0 0016 2z'
          ],
          eject: [
            'M4 12h12c.55 0 1-.45 1-1 0-.25-.1-.47-.25-.64l.01-.01-6-7-.01.01C10.57 3.14 10.3 3 10 3s-.57.14-.75.36l-.01-.01-6 7 .01.01c-.15.17-.25.39-.25.64 0 .55.45 1 1 1zm12 1H4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1z'
          ],
          endorsed: [
            'M19.83 9.38L18.81 7.6V5.62c0-.45-.23-.85-.61-1.08l-1.71-1-1.02-1.76a1.25 1.25 0 00-1.08-.61h-2.03l-1.74-1c-.38-.23-.87-.23-1.25 0l-1.74 1H5.65c-.44 0-.85.23-1.08.61L3.58 3.5l-1.8 1.04c-.38.24-.62.64-.62 1.08v2.06L.17 9.4c-.11.19-.17.4-.17.61s.06.42.17.61l.99 1.72v2.06c0 .45.23.85.61 1.08l1.78 1.02.99 1.72c.23.38.63.61 1.08.61h1.99l1.74 1c.19.11.41.17.62.17.21 0 .42-.06.61-.17l1.74-1h2.03c.44 0 .85-.23 1.08-.61l1.02-1.76 1.71-1c.38-.23.61-.64.61-1.08v-1.97l1.02-1.78c.27-.38.27-.85.04-1.25zm-5.08-.71l-5.01 5.01c-.18.18-.43.29-.71.29-.28 0-.53-.11-.71-.29l-3.01-3.01a1.003 1.003 0 011.42-1.42l2.3 2.3 4.31-4.3a1.003 1.003 0 011.71.71c0 .28-.12.53-.3.71z'
          ],
          envelope: [
            'M0 4.01v11.91l6.27-6.27L0 4.01zm18.91-1.03H1.09L10 10.97l8.91-7.99zm-5.18 6.66L20 15.92V4.01l-6.27 5.63zm-3.23 2.9c-.13.12-.31.19-.5.19s-.37-.07-.5-.19l-2.11-1.89-6.33 6.33h17.88l-6.33-6.33-2.11 1.89z'
          ],
          equals: [
            'M4 7h12a1 1 0 010 2H4a1 1 0 110-2zm0 4h12a1 1 0 010 2H4a1 1 0 010-2z'
          ],
          eraser: [
            'M18.71 8.43c.39-.4.39-1.05 0-1.45l-5.53-5.72a.967.967 0 00-1.4 0L1.29 12.1c-.39.4-.39 1.05 0 1.45l4.25 4.39 2.13 2.05h9.27c.02 0 .03.01.05.01.55 0 1-.45 1-1s-.45-1-1-1H9.46l.05-.05h.01l.81-.84 8.38-8.68zM7.52 17.94l-4.95-5.12 4.46-4.61 4.95 5.12-4.46 4.61z'
          ],
          error: [
            'M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm1 16H9v-2h2v2zm0-3H9V4h2v9z'
          ],
          euro: [
            'M8.89 4.47c.56-.31 1.23-.47 2.03-.47.44 0 .85.07 1.25.22.4.14.76.35 1.07.6.17.14.33.3.47.47l2.32-2.32c-.16-.15-.3-.32-.47-.46-.62-.49-1.33-.87-2.12-1.13-.8-.25-1.64-.38-2.52-.38-1.24 0-2.35.22-3.33.66-.99.44-1.82 1.05-2.49 1.82-.68.78-1.2 1.68-1.56 2.72-.09.26-.13.54-.2.8H2c-.55 0-1 .45-1 1s.45 1 1 1h1.04c-.01.2-.04.38-.04.58 0 .15.03.28.03.42H2c-.55 0-1 .45-1 1s.45 1 1 1h1.31c.07.3.13.6.23.89.36 1.02.88 1.92 1.56 2.67.68.76 1.51 1.35 2.49 1.79.98.43 2.09.65 3.33.65.99 0 1.9-.15 2.73-.46.83-.3 1.55-.74 2.17-1.32.03-.03.05-.06.08-.09l-2.41-2.15c-.01.01-.02.02-.02.03-.61.67-1.46 1-2.54 1-.8 0-1.47-.16-2.03-.47-.56-.31-1.01-.72-1.35-1.24-.28-.38-.47-.83-.63-1.3H12c.55 0 1-.45 1-1s-.45-1-1-1H6.56c0-.14-.02-.28-.02-.42 0-.2.02-.39.03-.58H13c.55 0 1-.45 1-1s-.45-1-1-1H6.94c.15-.46.34-.9.59-1.28.35-.52.8-.94 1.36-1.25zM18 11.38v0z'
          ],
          exchange: [
            'M2.5 8a2.5 2.5 0 000 5 2.5 2.5 0 000-5zm10.35 3.15a.495.495 0 10-.7.7L13.3 13H5.5c-.28 0-.5.22-.5.5s.22.5.5.5h7.79l-1.15 1.15c-.08.09-.14.21-.14.35a.495.495 0 00.85.35l2-2c.09-.09.15-.21.15-.35s-.06-.26-.15-.35l-2-2zM17.5 8a2.5 2.5 0 000 5 2.5 2.5 0 000-5zM7.15 9.85a.495.495 0 10.7-.7L6.71 8h7.79c.28 0 .5-.22.5-.5s-.22-.5-.5-.5H6.71l1.15-1.15c.08-.09.14-.21.14-.35a.495.495 0 00-.85-.35l-2 2c-.09.09-.15.21-.15.35s.06.26.15.35l2 2z'
          ],
          'exclude-row': [
            'M1 3h18c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zM0 13a1.003 1.003 0 001.71.71L4 11.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L5.41 10 7.7 7.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L4 8.59l-2.29-2.3A1.003 1.003 0 00.29 7.71L2.59 10 .3 12.29c-.19.18-.3.43-.3.71zm18-5h-7c-1.1 0-2 .9-2 2s.9 2 2 2h7c1.1 0 2-.9 2-2s-.9-2-2-2zm1 9H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'expand-all': [
            'M4 9c.28 0 .53-.11.71-.29L10 3.41l5.29 5.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-6-6C10.53 1.11 10.28 1 10 1s-.53.11-.71.29l-6 6A1.003 1.003 0 004 9zm12 2c-.28 0-.53.11-.71.29L10 16.59 4.71 11.3A.965.965 0 004 11a1.003 1.003 0 00-.71 1.71l6 6c.18.18.43.29.71.29s.53-.11.71-.29l6-6A1.003 1.003 0 0016 11z'
          ],
          export: [
            'M5 7c.28 0 .53-.11.71-.29L9 3.41V15c0 .55.45 1 1 1s1-.45 1-1V3.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-5-5C10.53.11 10.28 0 10 0s-.53.11-.71.29l-5 5A1.003 1.003 0 005 7zm14 7c-.55 0-1 .45-1 1v3H2v-3c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h18c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1z'
          ],
          'eye-off': [
            'M20 9.96v-.03-.01-.02-.02a.794.794 0 00-.21-.43c-.55-.69-1.19-1.3-1.85-1.87l-3.93 2.62a3.966 3.966 0 01-3.96 3.77c-.47 0-.91-.1-1.33-.24l-2.24 1.49c.52.21 1.05.39 1.6.51 1.21.27 2.43.28 3.64.05 1.11-.21 2.17-.64 3.17-1.18 1.56-.84 2.99-2 4.23-3.3.23-.24.46-.49.67-.75a.87.87 0 00.21-.43v-.02-.02-.01-.03V10v-.04zm-.46-5.14c.27-.18.46-.47.46-.82 0-.55-.45-1-1-1-.21 0-.39.08-.54.18l-.01-.02L15 5.46c-.95-.53-1.95-.96-3.01-1.2a9.158 9.158 0 00-3.65-.04c-1.11.21-2.17.64-3.17 1.18-1.56.84-2.99 2-4.23 3.3-.23.24-.46.48-.67.75-.27.34-.27.76 0 1.1.64.79 1.39 1.5 2.16 2.15.26.21.52.41.79.61L.44 15.16l.01.02A1 1 0 000 16c0 .55.45 1 1 1 .21 0 .39-.08.54-.18l.01.02 18-12-.01-.02zm-8.67 3.4c-.25-.12-.53-.2-.83-.2-1.1 0-1.99.89-1.99 1.99 0 .03.02.06.02.09l-1.78 1.19c-.14-.4-.22-.83-.22-1.28 0-2.19 1.78-3.97 3.98-3.97 1.01 0 1.91.38 2.61 1l-1.79 1.18z'
          ],
          'eye-on': [
            'M13.3 8.71c.18.18.43.29.71.29s.53-.11.71-.29l4.99-5a1.003 1.003 0 00-1.42-1.42L14 6.58l-2.29-2.29a.956.956 0 00-.7-.29 1.003 1.003 0 00-.71 1.71l3 3zM20 9.96v-.03-.01-.02-.02a.823.823 0 00-.21-.44c-.44-.55-.94-1.05-1.46-1.52l-2.2 2.2c-.55.54-1.3.88-2.12.88-.05 0-.09-.01-.14-.01a3.978 3.978 0 01-3.86 3.02 4.007 4.007 0 01-1.66-7.65A2.97 2.97 0 018.02 5c0-.28.05-.54.12-.8-1.05.22-2.07.64-3.02 1.15-1.57.85-3 2.02-4.24 3.33-.23.25-.46.5-.67.76-.28.35-.28.77 0 1.12.64.8 1.4 1.52 2.17 2.17 1.66 1.41 3.56 2.58 5.66 3.06 1.21.27 2.43.29 3.65.05 1.11-.21 2.18-.65 3.18-1.19 1.57-.85 3-2.02 4.24-3.33.23-.24.46-.49.67-.76.11-.12.18-.27.21-.44v-.02-.02-.01-.03V10c.01-.01.01-.03.01-.04zm-9.99 2.05c1.03 0 1.87-.79 1.98-1.8l-.09-.09-.01.01-2.1-2.11c-1 .11-1.77.95-1.77 1.98-.01 1.11.89 2.01 1.99 2.01z'
          ],
          'eye-open': [
            'M10.01 7.984A2.008 2.008 0 008.012 9.99c0 1.103.9 2.006 1.998 2.006a2.008 2.008 0 001.998-2.006c0-1.103-.9-2.006-1.998-2.006zM20 9.96v-.03-.01-.02-.02a.827.827 0 00-.21-.442c-.64-.802-1.398-1.514-2.168-2.166-1.658-1.404-3.566-2.587-5.664-3.058a8.982 8.982 0 00-3.656-.05c-1.11.2-2.178.641-3.177 1.183-1.569.852-2.997 2.016-4.246 3.33-.23.25-.46.49-.67.761-.279.351-.279.773 0 1.124.64.802 1.4 1.514 2.169 2.166 1.658 1.404 3.566 2.577 5.664 3.058 1.209.271 2.438.281 3.656.05 1.11-.21 2.178-.651 3.177-1.193 1.569-.852 2.997-2.016 4.246-3.33.23-.24.46-.49.67-.751.11-.12.179-.271.209-.442v-.02-.02-.01-.03V10v-.04zM10.01 14A4.003 4.003 0 016.014 9.99a4.003 4.003 0 013.996-4.011 4.003 4.003 0 013.996 4.011 4.003 4.003 0 01-3.996 4.011z'
          ],
          'fast-backward': [
            'M18 3c-.23 0-.42.09-.59.21l-.01-.01L11 8V4c0-.55-.45-1-1-1-.23 0-.42.09-.59.21L9.4 3.2l-8 6 .01.01C1.17 9.4 1 9.67 1 10s.17.6.41.79l-.01.01 8 6 .01-.01c.17.12.36.21.59.21.55 0 1-.45 1-1v-4l6.4 4.8.01-.01c.17.12.36.21.59.21.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z'
          ],
          'fast-forward': [
            'M19 10c0-.33-.17-.6-.41-.79l.01-.01-8-6-.01.01C10.42 3.09 10.23 3 10 3c-.55 0-1 .45-1 1v4L2.6 3.2l-.01.01C2.42 3.09 2.23 3 2 3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1 .23 0 .42-.09.59-.21l.01.01L9 12v4c0 .55.45 1 1 1 .23 0 .42-.09.59-.21l.01.01 8-6-.01-.01c.24-.19.41-.46.41-.79z'
          ],
          feed: [
            'M2.5 15a2.5 2.5 0 000 5 2.5 2.5 0 000-5zm.5-5c-.55 0-1 .45-1 1s.45 1 1 1c2.76 0 5 2.24 5 5 0 .55.45 1 1 1s1-.45 1-1c0-3.87-3.13-7-7-7zM3 0c-.55 0-1 .45-1 1s.45 1 1 1c8.28 0 15 6.72 15 15 0 .55.45 1 1 1s1-.45 1-1C20 7.61 12.39 0 3 0zm0 5c-.55 0-1 .45-1 1s.45 1 1 1c5.52 0 10 4.48 10 10 0 .55.45 1 1 1s1-.45 1-1C15 10.37 9.63 5 3 5z'
          ],
          'feed-subscribed': [
            'M2.5 15a2.5 2.5 0 000 5 2.5 2.5 0 000-5zM3 2c1.76 0 3.44.31 5.01.87.03-.71.31-1.35.75-1.85C6.96.37 5.03 0 3 0c-.55 0-1 .45-1 1s.45 1 1 1zm10.32 4.67a.99.99 0 001.4 0l4.98-4.98c.19-.17.3-.42.3-.7 0-.55-.45-1-1-1a.99.99 0 00-.7.29l-4.27 4.27-2.28-2.28a.99.99 0 00-.7-.29c-.55 0-.99.45-.99 1 0 .28.11.52.29.7l2.97 2.99zM3 10c-.55 0-1 .45-1 1s.45 1 1 1c2.76 0 5 2.24 5 5 0 .55.45 1 1 1s1-.45 1-1c0-3.87-3.13-7-7-7zm13.94-2.69l-.82.82-.02-.02c-.2.2-.42.37-.67.51A14.8 14.8 0 0118 17c0 .55.45 1 1 1s1-.45 1-1c0-3.61-1.14-6.94-3.06-9.69zM3 5c-.55 0-1 .45-1 1s.45 1 1 1c5.52 0 10 4.48 10 10 0 .55.45 1 1 1s1-.45 1-1C15 10.37 9.63 5 3 5z'
          ],
          film: [
            'M19 2h-5v3H6V2H1c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h5v-3h8v3h5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zM4 17H2v-2h2v2zm0-3H2v-2h2v2zm0-3H2V9h2v2zm0-3H2V6h2v2zm0-3H2V3h2v2zm10 8H6V7h8v6zm4 4h-2v-2h2v2zm0-3h-2v-2h2v2zm0-3h-2V9h2v2zm0-3h-2V6h2v2zm0-3h-2V3h2v2z'
          ],
          filter: [
            'M18 1H2a1.003 1.003 0 00-.71 1.71L7 8.41V18a1.003 1.003 0 001.71.71l4-4c.18-.18.29-.43.29-.71V8.41l5.71-5.71c.18-.17.29-.42.29-.7 0-.55-.45-1-1-1z'
          ],
          'filter-keep': [
            'M15 2c0-.55-.45-1-1-1H1a1.003 1.003 0 00-.71 1.71L5 7.41V16a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71V7.41l4.71-4.71c.18-.17.29-.42.29-.7zm4 11c-.28 0-.53.11-.71.29L15 16.59l-1.29-1.29A.965.965 0 0013 15a1.003 1.003 0 00-.71 1.71l2 2c.18.18.43.29.71.29s.53-.11.71-.29l4-4A1.003 1.003 0 0019 13z'
          ],
          'filter-list': [
            'M15 2c0-.55-.45-1-1-1H1a1.003 1.003 0 00-.71 1.71L5 7.41V16a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71V7.41l4.71-4.71c.18-.17.29-.42.29-.7zm-4 8c0 .55.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1h-7c-.55 0-1 .45-1 1zm8 7h-7c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1zm0-4h-7c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'filter-open': [
            'M15 2c0 .28-.11.53-.29.7L10 7.41V13c0 .28-.11.53-.29.71l-3 3A1.003 1.003 0 015 16V7.41L.29 2.71A1.003 1.003 0 011 1h13c.55 0 1 .45 1 1zm4.707 11.293a1 1 0 010 1.414l-4 4c-.63.63-1.707.184-1.707-.707v-8c0-.89 1.077-1.337 1.707-.707l4 4z'
          ],
          'filter-remove': [
            'M15 2c0-.55-.45-1-1-1H1a1.003 1.003 0 00-.71 1.71L5 7.41V16a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71V7.41l4.71-4.71c.18-.17.29-.42.29-.7zm2.91 13.5l1.79-1.79c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-1.79 1.79-1.79-1.79a1.003 1.003 0 00-1.42 1.42l1.79 1.79-1.79 1.79a1.003 1.003 0 001.42 1.42l1.79-1.79 1.79 1.79a1.003 1.003 0 001.42-1.42l-1.8-1.79z'
          ],
          flag: [
            'M3 3c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1zm0-3c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm2 4.08v8.28c3.01-2.41 8.67 2.64 13 0V4.08C13.61 7.14 8.01 1 5 4.08z'
          ],
          flame: [
            'M11.622 0c0 1.71.49 3.077 1.472 4.103C16.364 6.496 18 9.23 18 12.308c0 3.418-1.962 5.983-5.887 7.692 2.887-3 2.453-4.23-.49-8C8.5 13.5 9 14.5 9.5 16.5c-1.048 0-2 0-2.5-.5 0 .684 1.197 2.5 1.952 4-3.924-1.026-8.123-7.18-6.651-7.692.981-.342 2.126-.171 3.434.513C4.1 6.667 6.062 2.393 11.622 0z'
          ],
          flash: [
            'M4.96 6.37a1.003 1.003 0 001.42-1.42l-2-2a1.07 1.07 0 00-.71-.28 1.003 1.003 0 00-.71 1.71l2 1.99zm9.37.3c.28 0 .53-.11.71-.29l2-2a1.003 1.003 0 00-1.42-1.42l-2 2a1.003 1.003 0 00.71 1.71zM10 5c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1S9 .45 9 1v3c0 .55.45 1 1 1zm-5 5c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1zm14-1h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1zm-9-3c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm5.04 1.63a1.003 1.003 0 00-1.42 1.42l2 2a1.003 1.003 0 001.42-1.42l-2-2zM10 15c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1s1-.45 1-1v-3c0-.55-.45-1-1-1zm-4.33-1.67c-.28 0-.53.11-.71.29l-2 2a1.003 1.003 0 001.42 1.42l2-2a1.003 1.003 0 00-.71-1.71z'
          ],
          'floppy-disk': [
            'M14 1h-3v5h3V1zm5.71 2.29l-3-3A.997.997 0 0016 0h-1v7H5V0H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V4c0-.28-.11-.53-.29-.71zM17 19H3v-8c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v8z'
          ],
          'flow-branch': [
            'M14.425 7.953a3.98 3.98 0 01.562 2.045 3.98 3.98 0 01-.583 2.08L18 15.671V12.98c0-.248.097-.496.29-.689.379-.379 1.047-.38 1.426 0a.94.94 0 01.283.696l-.001 5.049a.957.957 0 01-.276.69.955.955 0 01-.69.273h-5.059a.971.971 0 01-.689-.289 1.026 1.026 0 010-1.417.972.972 0 01.69-.29h2.702l-3.634-3.573a3.998 3.998 0 01-5.924-2.431H1a1 1 0 010-2h6.12a3.998 3.998 0 015.96-2.409L16.665 3l-2.694-.001a.972.972 0 01-.689-.29 1.035 1.035 0 010-1.425.94.94 0 01.696-.283l5.05.001c.248 0 .497.083.69.276a.954.954 0 01.272.69l.001 5.052a.971.971 0 01-.29.689 1.028 1.028 0 01-1.419 0 .972.972 0 01-.29-.69V4.323l-3.567 3.63z'
          ],
          'flow-end': [
            'M12 9.919a3.998 3.998 0 014-3.92c2.21 0 4 1.79 4 3.997a3.998 3.998 0 01-4 3.996 3.998 3.998 0 01-4-3.916.967.967 0 01-.28.612L7.685 14.71a.958.958 0 01-.686.285c-.536 0-.994-.461-.994-.997 0-.273.107-.528.283-.704l2.379-2.302H.98c-.537 0-.976-.46-.976-.996s.44-.992.976-.992h7.676L6.287 6.687a.957.957 0 01-.283-.686c0-.536.458-.996.994-.996.274 0 .51.1.686.285l4.027 4.024c.159.158.27.365.29.605z'
          ],
          'flow-linear': [
            'M5.125 10.997H.976C.439 10.997 0 10.537 0 10c0-.536.44-.993.976-.993h4.148a4.002 4.002 0 017.752 0h3.776L14.293 6.69a.962.962 0 01-.285-.687c0-.537.46-1.001.996-1.001a.96.96 0 01.698.3l4.005 4.015c.176.176.293.41.293.683a.972.972 0 01-.283.693L15.702 14.7a.997.997 0 01-.698.297c-.537 0-.996-.453-.996-.99 0-.273.107-.517.283-.692l2.371-2.318h-3.787a4.002 4.002 0 01-7.75 0z'
          ],
          'flow-review': [
            'M6.13 9.004A4.005 4.005 0 0110.012 6c1.87 0 3.44 1.278 3.881 3.005h2.768l-2.354-2.317a.97.97 0 01-.283-.691c0-.536.462-.995 1-.995.273 0 .517.107.693.283l4 4.041a.97.97 0 01.284.692.956.956 0 01-.293.682l-3.991 3.997a.944.944 0 01-.694.292c-.537 0-1-.46-1-.997a.97.97 0 01.284-.692l2.345-2.29h-2.765a4.005 4.005 0 01-3.875 2.981 4.005 4.005 0 01-3.874-2.981H3.349l2.376 2.308a.97.97 0 01.283.691 1 1 0 01-.994.983.989.989 0 01-.713-.291L.293 10.699A.956.956 0 010 10.017a.97.97 0 01.283-.692l4.03-4.037a.996.996 0 01.701-.283c.537 0 .994.464.994 1a.97.97 0 01-.283.691L3.34 9.004h2.79z'
          ],
          'flow-review-branch': [
            'M13.04 13.424c-.6.36-1.302.568-2.052.568a4 4 0 01-3.868-2.999H3.342l2.372 2.31c.176.176.283.42.283.694 0 .537-.452.998-.988.998a.935.935 0 01-.691-.289L.292 10.683A.96.96 0 010 9.999c0-.274.107-.518.283-.694l4.035-4.04a.973.973 0 01.691-.288c.536 0 .988.47.988 1.007a.975.975 0 01-.283.694L3.332 8.984h3.786a4 4 0 013.87-3.006c.771 0 1.492.22 2.102.599l3.565-3.57-2.538-.003a.974.974 0 01-.69-.29c-.38-.38-.38-1.052-.002-1.431A.94.94 0 0114.122 1l4.896.005a.96.96 0 01.69.277c.193.193.27.442.27.69l.005 4.9a.971.971 0 01-.289.69 1.023 1.023 0 01-1.416 0 .975.975 0 01-.29-.691l-.003-2.54-3.554 3.62c.351.596.553 1.291.553 2.034 0 .763-.213 1.477-.583 2.084l3.595 3.595.003-2.54c0-.249.097-.497.29-.69.38-.38 1.05-.381 1.429-.002a.94.94 0 01.282.697l-.005 4.9a.927.927 0 01-.277.675.974.974 0 01-.69.291L13.974 19a.97.97 0 01-.69-.29 1.03 1.03 0 01.002-1.42.974.974 0 01.69-.29l2.696-.003-3.632-3.573z'
          ],
          flows: [
            'M17.5 7.93a2.5 2.5 0 00-2.45 2h-2.3l-4.01-4-.75.75 3.26 3.25h-6.3a2.5 2.5 0 100 1h6.3l-3.26 3.25.75.75 4.01-4h2.3a2.5 2.5 0 102.45-3z'
          ],
          'folder-close': [
            'M0 17c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V7H0v10zM19 4H9.41l-1.7-1.71A.997.997 0 007 2H1c-.55 0-1 .45-1 1v3h20V5c0-.55-.45-1-1-1z'
          ],
          'folder-new': [
            'M12.994 7c0 1.655 1.344 3 2.998 3a3.002 3.002 0 002.999-3H20v10c0 .55-.45 1-1 1H1.01c-.55 0-1-.45-1-1V7h12.984zM10.76 6H0V3c0-.55.45-1 1-1h3.998c.28 0 .53.11.71.29L7.415 4h2.579c0 .768.29 1.469.765 2zm8.23-3c.55 0 1 .45 1 1s-.45 1-1 1h-1.998v2c0 .55-.45 1-1 1s-1-.45-1-1V5h-1.998c-.55 0-1-.45-1-1s.45-1 1-1h1.999V1c0-.55.45-1 .999-1 .55 0 1 .45 1 1v2h1.999z'
          ],
          'folder-open': [
            'M20 9c0-.55-.45-1-1-1H5c-.43 0-.79.27-.93.65h-.01l-3 8h.01c-.04.11-.07.23-.07.35 0 .55.45 1 1 1h14c.43 0 .79-.27.93-.65h.01l3-8h-.01c.04-.11.07-.23.07-.35zM3.07 7.63C3.22 7.26 3.58 7 4 7h14V5c0-.55-.45-1-1-1H8.41l-1.7-1.71A.997.997 0 006 2H1c-.55 0-1 .45-1 1v12.31l3.07-7.68z'
          ],
          'folder-shared': [
            'M11 4H9.41l-1.7-1.71A.997.997 0 007 2H1c-.55 0-1 .45-1 1v3h11.78C11.3 5.47 11 4.77 11 4zm8-1h-5c-.55 0-1 .45-1 1s.45 1 1 1h2.59L12.3 9.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L18 6.41V9c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1zm-2.46 7.7l-1.42 1.42a2.996 2.996 0 11-4.24-4.24l.88-.88H0v10c0 .55.45 1 1 1h18c.55 0 1-.45 1-1v-5.18c-.31.11-.65.18-1 .18-1.02 0-1.92-.52-2.46-1.3z'
          ],
          'folder-shared-open': [
            'M3.07 7.63C3.22 7.26 3.58 7 4 7h7.76l.54-.54A2.97 2.97 0 0111 4H8.41l-1.7-1.71A.997.997 0 006 2H1c-.55 0-1 .45-1 1v12.31l3.07-7.68zm13.47 3.07l-1.42 1.42A2.996 2.996 0 0110 10c0-.77.3-1.47.78-2H5c-.43 0-.79.27-.93.65h-.01l-3 8h.01c-.04.11-.07.23-.07.35 0 .55.45 1 1 1h14c.43 0 .79-.27.93-.65h.01l2.01-5.36c-1-.01-1.88-.52-2.41-1.29zM19 3h-5c-.55 0-1 .45-1 1s.45 1 1 1h2.59L12.3 9.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L18 6.41V9c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1z'
          ],
          follower: [
            'M11.54 15.92c-1.48-.65-1.28-1.05-1.33-1.59-.01-.07-.01-.15-.01-.23.51-.45.92-1.07 1.19-1.78 0 0 .01-.04.02-.05.06-.15.11-.32.15-.48.34-.07.54-.44.61-.78.08-.14.23-.48.2-.87-.05-.5-.25-.73-.47-.82v-.09c0-.63-.06-1.55-.17-2.15-.02-.17-.06-.33-.11-.5a3.69 3.69 0 00-1.29-1.86C9.69 4.25 8.8 4 8.01 4c-.8 0-1.69.25-2.32.73-.61.47-1.06 1.13-1.28 1.86-.05.17-.09.33-.11.5-.12.6-.18 1.51-.18 2.14v.08c-.23.09-.44.32-.49.83-.04.39.12.73.2.87.08.35.28.72.63.78.04.17.09.33.15.48 0 .01.01.02.01.03l.01.01c.27.72.7 1.35 1.22 1.8 0 .07-.01.14-.01.21-.05.54.1.94-1.38 1.59-1.48.65-3.71 1.35-4.16 2.4C-.16 19.38.02 20 .02 20h15.95s.18-.62-.27-1.67c-.46-1.06-2.68-1.75-4.16-2.41zm8.15-12.63l-3-3a.956.956 0 00-.7-.29 1.003 1.003 0 00-.71 1.71L16.58 3H13c-.55 0-1 .45-1 1s.45 1 1 1h3.58l-1.29 1.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.3-.71z'
          ],
          following: [
            'M11.55 15.92c-1.48-.65-1.28-1.05-1.33-1.59-.01-.07-.01-.15-.01-.23.51-.45.92-1.07 1.19-1.78 0 0 .01-.04.02-.05.06-.15.11-.32.15-.48.34-.07.54-.44.61-.78.08-.14.23-.48.2-.87-.05-.5-.25-.73-.47-.82v-.09c0-.63-.06-1.55-.17-2.15-.02-.17-.06-.33-.11-.5a3.69 3.69 0 00-1.29-1.86C9.7 4.25 8.81 4 8.02 4c-.79 0-1.68.25-2.31.73-.61.47-1.07 1.13-1.29 1.86-.05.16-.09.33-.11.5-.12.6-.18 1.51-.18 2.14v.08c-.23.09-.44.32-.48.83-.04.39.12.73.2.87.08.35.28.72.63.78.04.17.09.33.15.48 0 .01.01.02.01.03l.01.01c.27.72.7 1.35 1.22 1.8 0 .07-.01.14-.01.21-.05.54.1.94-1.38 1.59C3 16.56.77 17.26.32 18.31-.15 19.38.04 20 .04 20h15.95s.18-.62-.27-1.67c-.46-1.06-2.69-1.75-4.17-2.41zM19 3h-3.58l1.29-1.29A1.003 1.003 0 0015.29.29l-3 3c-.17.18-.28.43-.28.71 0 .28.11.53.29.71l3 3c.18.18.43.29.7.29a1.003 1.003 0 00.71-1.71L15.42 5H19c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          font: [
            'M17.93 18.64l-7-18C10.78.27 10.42 0 10 0s-.78.27-.93.64l-7 18c-.04.11-.07.23-.07.36 0 .55.45 1 1 1 .42 0 .78-.27.93-.64L6.41 13h7.19l2.47 6.36c.15.37.51.64.93.64.55 0 1-.45 1-1 0-.13-.03-.25-.07-.36zM7.18 11L10 3.76 12.82 11H7.18z'
          ],
          fork: [
            'M16.71 11.29a1.003 1.003 0 00-1.42 1.42l1.3 1.29h-2.17l-8-8h10.17L15.3 7.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-3-3a1.003 1.003 0 00-1.42 1.42L16.59 4H1c-.55 0-1 .45-1 1s.45 1 1 1h2.59l9.71 9.71c.17.18.42.29.7.29h2.59l-1.29 1.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-3-3z'
          ],
          form: [
            'M2 13v4h4v-4H2zm-1-2h6c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1v-6c0-.55.45-1 1-1zm11-7h7c.55 0 1 .45 1 1s-.45 1-1 1h-7c-.55 0-1-.45-1-1s.45-1 1-1zM8 1a1.003 1.003 0 01.71 1.71l-5 6C3.53 8.89 3.28 9 3 9s-.53-.11-.71-.29l-2-2a1.003 1.003 0 011.42-1.42L3 6.59l4.29-5.3C7.47 1.11 7.72 1 8 1zm4 13h7c.55 0 1 .45 1 1s-.45 1-1 1h-7c-.55 0-1-.45-1-1s.45-1 1-1z'
          ],
          'full-circle': ['M9.96 0a10 10 0 100 20 10 10 0 100-20z'],
          'full-stacked-chart': [
            'M15 16h2c.55 0 1-.45 1-1v-5h-4v5c0 .55.45 1 1 1zM12 2c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v4h4V2zm6 4h-4v3h4V6zm0-4c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v3h4V2zm-6 5H8v5h4V7zm-9 9h2c.55 0 1-.45 1-1v-3H2v3c0 .55.45 1 1 1zm6 0h2c.55 0 1-.45 1-1v-2H8v2c0 .55.45 1 1 1zm10 1H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zM6 2c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v3h4V2zm0 4H2v5h4V6z'
          ],
          fullscreen: [
            'M3.41 2H6c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1v5c0 .55.45 1 1 1s1-.45 1-1V3.41L7.29 8.7c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L3.41 2zM8 11c-.28 0-.53.11-.71.29L2 16.59V14c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1H3.41l5.29-5.29c.19-.18.3-.43.3-.71 0-.55-.45-1-1-1zM19 0h-5c-.55 0-1 .45-1 1s.45 1 1 1h2.59L11.3 7.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L18 3.41V6c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zm0 13c-.55 0-1 .45-1 1v2.59l-5.29-5.29A.965.965 0 0012 11a1.003 1.003 0 00-.71 1.71l5.3 5.29H14c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1z'
          ],
          function: [
            'M10.14 5.82H8.73c.4-1.66.94-2.87 1.6-3.64.4-.48.8-.72 1.18-.72.08 0 .14.02.19.07.05.05.07.1.07.18 0 .07-.05.19-.16.37s-.16.36-.16.52c0 .23.08.43.25.59a.9.9 0 00.64.25c.28 0 .51-.1.7-.3.19-.2.28-.47.28-.81 0-.39-.14-.7-.42-.94-.28-.24-.74-.36-1.36-.36-.97 0-1.86.29-2.65.87-.79.56-1.54 1.52-2.26 2.85-.24.46-.48.75-.7.88-.22.13-.57.19-1.06.19l-.32 1.15H5.9l-1.99 7.85c-.33 1.29-.56 2.09-.67 2.39-.17.44-.43.81-.77 1.12a.74.74 0 01-.5.19c-.05 0-.1-.02-.14-.05l-.04-.07c0-.03.05-.1.15-.2.1-.1.15-.26.15-.47 0-.23-.08-.42-.23-.57-.16-.15-.38-.23-.67-.23-.35 0-.63.1-.85.29-.21.2-.32.43-.32.7 0 .29.13.54.39.75.25.22.65.33 1.2.33.88 0 1.66-.23 2.33-.69.68-.46 1.27-1.17 1.78-2.14.51-.96 1.03-2.52 1.56-4.66l1.14-4.54H9.8l.34-1.15zm6.8 1.95c.25-.2.51-.29.78-.29.1 0 .29.04.56.11.27.08.51.11.72.11.29 0 .52-.1.72-.3.18-.19.28-.45.28-.77 0-.33-.1-.6-.29-.8-.19-.2-.47-.29-.82-.29-.32 0-.62.08-.9.23-.28.15-.64.49-1.08 1-.33.38-.81 1.05-1.44 2a9.712 9.712 0 00-1.31-3.22l-3.4.59-.07.37c.25-.05.47-.08.64-.08.34 0 .62.15.84.44.35.46.84 1.85 1.46 4.19-.49.66-.82 1.09-1 1.3-.3.33-.55.54-.74.64-.15.08-.32.12-.51.12-.14 0-.38-.08-.7-.24-.22-.1-.42-.16-.59-.16-.33 0-.6.11-.82.32-.21.22-.32.49-.32.83 0 .31.1.57.3.77.2.2.47.29.8.29.32 0 .63-.07.92-.21.29-.14.64-.43 1.08-.88.43-.45 1.03-1.16 1.79-2.14.29.93.55 1.61.76 2.03.21.42.46.73.74.91.28.19.62.28 1.04.28.4 0 .81-.15 1.23-.44.55-.38 1.1-1.04 1.68-1.97l-.35-.21c-.39.55-.68.89-.87 1.03-.12.09-.27.13-.44.13-.2 0-.4-.13-.59-.38-.33-.43-.77-1.63-1.33-3.6.47-.86.89-1.44 1.23-1.71z'
          ],
          'gantt-chart': [
            'M4 7h5c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1zm3 2v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1zm12 3h-6c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zm0 4H2V3c0-.55-.45-1-1-1s-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          geofence: [
            'M8 11l.075.003.126.017.111.03.111.044.098.052.096.067.09.08c.036.035.068.073.097.112l.071.11.054.114.035.105.03.148L9 12V18a1 1 0 01-1.993.117L7 18v-3.586l-5.293 5.293a1 1 0 01-1.497-1.32l.083-.094L5.584 13h-3.58a1 1 0 01-.117-1.993L2.004 11H8zm3.018-11a1.003 1.003 0 01.39.087l.12.063.031.02.1.078 8.027 7.026.062.064.068.086.044.068.064.128.04.117.024.113.011.108v.1l-.007.073-.019.103-.037.121-.039.09-.05.087-4.996 7.994c-.06.097-.137.183-.226.254l-.093.067-.095.053-.087.037-.125.037a1.018 1.018 0 01-.218.026H11v-5a3 3 0 00-2.824-2.995L8 9H3V6a1 1 0 01.321-.734l.098-.08 7-5a1.01 1.01 0 01.45-.178L11.018 0z'
          ],
          geolocation: ['M0 8.33l9.17 2.5 2.5 9.17L20 0z'],
          geosearch: [
            'M8 18.88c-3.79 0-6.88-3.09-6.88-6.88 0-.61.08-1.22.23-1.79.03.01.06-.01.1-.01h.09v.55c0 .23.21.42.44.42.04 0 .09-.01.12-.02l.9.88c.09.09.23.09.32 0s.09-.23 0-.32l-.86-.9c0-.02.05-.04.05-.07v-.13c0-.18.1-.25.29-.41h.53c.1 0 .19-.01.27-.05.01-.01.02 0 .03-.01.02-.01.03-.02.05-.04.01-.01.02-.01.02-.02l.02-.02 1.13-1.13c-.16-.32-.3-.65-.42-.99h-.64v-.53c0-.01.06.06.06-.1h.38c-.04-.16-.08-.32-.1-.48h-.71c.2-.16.42-.31.64-.45C4.02 6.09 4 5.8 4 5.5c0-.14.01-.28.02-.43C1.62 6.46 0 9.04 0 12c0 4.41 3.59 8 8 8 3.87 0 7.09-2.77 7.82-6.44l-.97-1.1c-.26 3.57-3.23 6.42-6.85 6.42zm-2.12-3.67v-.35h.15c.29 0 .49-.23.49-.53v-.68c0-.01.01-.01 0-.02L4.71 11.8h-.77c-.29 0-.47.24-.47.53v2c0 .29.18.53.47.53h.33v2.02c0 .28.28.51.56.51s.56-.23.56-.51v-1.22h-.01c.29 0 .5-.16.5-.45zm13.83-2.92l-3.68-3.68c.14-.21.27-.42.38-.65.02-.04.04-.07.05-.11.11-.22.2-.45.28-.69v-.01c.07-.24.13-.48.17-.73l.03-.17c.04-.24.06-.49.06-.75C17 2.46 14.54 0 11.5 0S6 2.46 6 5.5 8.46 11 11.5 11c.26 0 .51-.02.76-.06l.17-.03c.25-.04.49-.1.73-.17h.01c.24-.08.47-.17.69-.28.04-.02.07-.04.11-.05.23-.11.44-.24.65-.38l3.68 3.68c.17.18.42.29.7.29a1.003 1.003 0 00.71-1.71zM11.5 9.5c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm1.93 5.33v-.65c0-.11-.13-.21-.24-.21-.11 0-.24.09-.24.21v.65c0 .11.13.21.24.21.11 0 .24-.1.24-.21zm-2.41.67h.83c.29 0 .46-.21.46-.5v-1.86l.23-.22c-.34.05-.69.08-1.04.08-.36 0-.7-.03-1.05-.08.03.05.06.1.08.16V15c.01.29.2.5.49.5z'
          ],
          'git-branch': [
            'M15 2c-1.66 0-3 1.34-3 3 0 1.3.84 2.4 2 2.82V9c0 1.1-.9 2-2 2H8c-.73 0-1.41.21-2 .55V5.82C7.16 5.4 8 4.3 8 3c0-1.66-1.34-3-3-3S2 1.34 2 3c0 1.3.84 2.4 2 2.82v8.37C2.84 14.6 2 15.7 2 17c0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.25-.77-2.3-1.85-2.75C6.45 13.52 7.16 13 8 13h4c2.21 0 4-1.79 4-4V7.82C17.16 7.4 18 6.3 18 5c0-1.66-1.34-3-3-3zM5 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 16c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM15 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z'
          ],
          'git-commit': [
            'M19 9h-4.1a5 5 0 00-9.8 0H1c-.55 0-1 .45-1 1s.45 1 1 1h4.1a5 5 0 009.8 0H19c.55 0 1-.45 1-1s-.45-1-1-1zm-9 4c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z'
          ],
          'git-merge': [
            'M15 8c-1.3 0-2.4.84-2.82 2H11c-2.49 0-4.54-1.83-4.92-4.21A2.995 2.995 0 005 0C3.34 0 2 1.34 2 3c0 1.3.84 2.4 2 2.81v8.37C2.84 14.6 2 15.7 2 17c0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.3-.84-2.4-2-2.82V9.86C7.27 11.17 9.03 12 11 12h1.18A2.996 2.996 0 0018 11c0-1.66-1.34-3-3-3zM5 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM5 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm10 8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z'
          ],
          'git-new-branch': [
            'M17 3h-1V2c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1V5h1c.55 0 1-.45 1-1s-.45-1-1-1zm-3 4.86V9c0 1.1-.9 2-2 2H8c-.73 0-1.41.21-2 .55V5.82C7.16 5.4 8 4.3 8 3c0-1.66-1.34-3-3-3S2 1.34 2 3c0 1.3.84 2.4 2 2.82v8.37C2.84 14.6 2 15.7 2 17c0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.25-.77-2.3-1.85-2.75C6.45 13.52 7.16 13 8 13h4c2.21 0 4-1.79 4-4V7.86c-.32.08-.65.14-1 .14s-.68-.06-1-.14zM5 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 16c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z'
          ],
          'git-pull': [
            'M17 14.18V7c0-2.21-1.79-4-4-4h-2.59l1.29-1.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-3 3C7.11 3.47 7 3.72 7 4c0 .28.11.53.29.71l3 3a1.003 1.003 0 001.42-1.42L10.41 5H13c1.1 0 2 .9 2 2v7.18A2.996 2.996 0 0016 20c1.66 0 3-1.34 3-3 0-1.3-.84-2.4-2-2.82zM16 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM4 1C2.34 1 1 2.34 1 4c0 1.3.84 2.4 2 2.82v7.37C1.84 14.6 1 15.7 1 17c0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.3-.84-2.4-2-2.82V6.82C6.16 6.4 7 5.3 7 4c0-1.66-1.34-3-3-3zm0 17c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM4 5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z'
          ],
          'git-push': [
            'M15 11c0-.28-.11-.53-.29-.71l-3-3C11.53 7.11 11.28 7 11 7s-.53.11-.71.29l-3 3a1.003 1.003 0 001.42 1.42l1.29-1.3V19c0 .55.45 1 1 1s1-.45 1-1v-8.59l1.29 1.29c.18.19.43.3.71.3.55 0 1-.45 1-1zm4-11H1C.45 0 0 .45 0 1v16c0 .55.45 1 1 1h7v-2H2v-2h6v-1H4V2h14v11h-4v1h4v2h-4v2h5c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM5 8h2V6H5v2zm2-5H5v2h2V3z'
          ],
          'git-repo': [
            'M7 3H5v2h2V3zm0 6H5v2h2V9zm0-3H5v2h2V6zm12-6H1C.45 0 0 .45 0 1v16c0 .55.45 1 1 1h4v2l2-1 2 1v-2h10c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 16H9v-1H5v1H2v-2h16v2zm0-3H4V2h14v11z'
          ],
          glass: [
            'M17 6V0H3v6c0 3.53 2.61 6.43 6 6.92V18H6c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1h-3v-5.08c3.39-.49 6-3.39 6-6.92z'
          ],
          globe: [
            'M7.53 4.37c.1-.1.1-.26 0-.35l-.68-.68c-.1-.1-.25-.1-.35 0-.1.1-.1.26 0 .35l.68.68c.1.1.25.1.35 0zm3.17.06h.3c.09 0 .16-.01.16-.1 0-.09-.07-.1-.16-.1h-.3c-.09 0-.16.01-.16.1s.07.1.16.1zm.98 1.15c.09 0 .19-.08.19-.17v-.42c0-.09-.1-.17-.19-.17s-.19.08-.19.17v.42c0 .09.1.17.19.17zm-6.5 4.19c-.35 0-.56.28-.56.63v2.37c0 .35.21.62.56.62h.39v2.4c0 .34.33.61.67.61s.67-.27.67-.61v-1.44h-.02c.35 0 .6-.19.6-.54v-.41h.18c.35 0 .58-.28.58-.62v-.81c0-.01.01-.01 0-.02L6.1 9.77h-.92zM10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.42 0-8-3.58-8-8 0-.74.11-1.46.3-2.14h.03v.65c0 .28.25.5.53.5.05 0 .1-.01.15-.02l1.05 1.05c.1.11.28.11.38 0 .1-.1.11-.27 0-.38L3.42 8.59c0-.03.05-.05.05-.08v-.16c0-.22.12-.3.34-.49h.63c.12 0 .23-.01.32-.07.01-.01.02 0 .03-.01.02-.02.04-.03.06-.04.01-.01.02-.01.03-.02l.02-.02 2.15-2.15c.24-.24.24-.63 0-.86-.23-.24-.62-.19-.86.04l-.41.46H5v-.64c0-.01.07.07.07-.12h.87c.17 0 .3-.12.3-.29 0-.17-.13-.29-.3-.29H4.88C6.27 2.7 8.05 2 10 2s3.73.7 5.12 1.86h-1.58l-.01-.04c-.06 0-.12 0-.17.04l-.71.7c-.09.09-.09.23 0 .31.09.09.23.09.32 0l.56-.6.01-.03h.34c0 .19-.1.13-.1.16v.1c0 .29-.2.5-.49.5h-.51c-.25 0-.52.28-.52.54v.23h-.12c-.16 0-.27.08-.27.24v.33h-.32c-.23 0-.41.15-.41.38 0 .22.18.35.41.35.1 0 .19.04.26-.16l.06.01.66-.59h.23l.53.5c.04.04.11.03.16-.01.04-.04.04-.16 0-.2L13 6.15h.32l.12.16c.25.25.65.23.89-.02l.12-.14H15c.02 0 .11.07.11.07v.33s-.06-.01-.07-.01h-.49c-.16 0-.28.13-.28.29 0 .16.13.29.28.29h.49c.01 0 .07-.01.07-.01v.2c-.19.28-.33.57-.62.57h-1.28s0-.01-.01-.01l-.58-.58a.622.622 0 00-.89 0l-.58.58s0 .01-.01.01h-.34c-.35 0-.67.28-.67.63v1.25c0 .35.32.61.67.61h1.22c.46.19.78.48.97.94v2.28c0 .35.23.6.58.6h.98c.35 0 .54-.25.54-.6v-2.2l1.21-1.17.04-.02.02-.01h.04c.1-.11.2-.26.2-.42V8.49c0-.25-.22-.44-.42-.63h.58c.02.38.29.57.63.57h.43c.13.51.18 1.03.18 1.57 0 4.42-3.58 8-8 8zm6.16-5.65c-.14 0-.29.11-.29.25v.77c0 .14.15.25.29.25.14 0 .29-.11.29-.25v-.77c0-.14-.15-.25-.29-.25zM10.5 3.48c0-.34-.28-.57-.62-.57h-.74c-.34 0-.57.25-.57.59 0 .05-.13.06.06.1v.64c0 .2.09.36.29.36.2 0 .29-.16.29-.36v-.19h.68c.33 0 .61-.23.61-.57z'
          ],
          'globe-network': [
            'M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm7.39 7h-3.63c-.31-1.99-.92-3.66-1.72-4.73 2.45.65 4.41 2.42 5.35 4.73zM13 10c0 .69-.04 1.36-.11 2H7.11a18.419 18.419 0 010-4h5.77c.08.64.12 1.31.12 2zm-3-8c1.07 0 2.25 2.05 2.75 5h-5.5c.5-2.95 1.68-5 2.75-5zm-2.04.27C7.16 3.34 6.55 5.01 6.24 7H2.61c.94-2.31 2.9-4.08 5.35-4.73zM2 10c0-.69.11-1.36.28-2h3.83a18.419 18.419 0 000 4H2.28c-.17-.64-.28-1.31-.28-2zm.61 3h3.63c.31 1.99.92 3.66 1.72 4.73A7.996 7.996 0 012.61 13zM10 18c-1.07 0-2.25-2.05-2.75-5h5.5c-.5 2.95-1.68 5-2.75 5zm2.04-.27c.79-1.07 1.4-2.74 1.72-4.73h3.63a7.996 7.996 0 01-5.35 4.73zM13.89 12a18.419 18.419 0 000-4h3.83c.17.64.28 1.31.28 2s-.11 1.36-.28 2h-3.83z'
          ],
          graph: [
            'M17.5 4A2.5 2.5 0 0015 6.5c0 .06.01.12.02.18l-1.9.84C12.38 6.6 11.27 6 10 6c-.83 0-1.59.25-2.23.68L4.91 4.14c.05-.21.09-.42.09-.64a2.5 2.5 0 00-5 0A2.5 2.5 0 002.5 6c.42 0 .81-.11 1.16-.3l2.79 2.48C6.17 8.73 6 9.34 6 10c0 1.41.73 2.64 1.83 3.35l-.56 1.67A2.498 2.498 0 005 17.5a2.5 2.5 0 005 0c0-.74-.32-1.39-.83-1.85l.56-1.68c.09.01.18.03.27.03 2.21 0 4-1.79 4-4 0-.22-.03-.44-.07-.65l2.02-.9c.43.34.96.55 1.55.55a2.5 2.5 0 000-5z'
          ],
          'graph-remove': [
            'M17.41 4l2.29-2.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L16 2.59 13.71.3A.965.965 0 0013 0a1.003 1.003 0 00-.71 1.71L14.59 4 12.3 6.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L16 5.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L17.41 4zM19 10c-.83 0-1.55-.36-2.09-.91l-.03.03-.88-.88-.88.88a2.996 2.996 0 11-4.24-4.24l.88-.88-.88-.88.03-.03C10.36 2.55 10 1.83 10 1c0-.35.07-.68.18-.99-.06 0-.12-.01-.18-.01C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10c0-.06-.01-.12-.01-.18-.31.11-.64.18-.99.18z'
          ],
          'greater-than': [
            'M12.838 10l-9.154 3.051a1 1 0 00.632 1.898l12-4c.912-.304.912-1.594 0-1.898l-12-4a1 1 0 00-.632 1.898L12.838 10z'
          ],
          'greater-than-or-equal-to': [
            'M3.684 11.051a1 1 0 00.632 1.898l12-4c.912-.304.912-1.594 0-1.898l-12-4a1 1 0 00-.632 1.898L12.838 8l-9.154 3.051zM4 15h12a1 1 0 110 2H4a1 1 0 010-2z'
          ],
          grid: [
            'M19 11c.55 0 1-.45 1-1s-.45-1-1-1h-2V5h2c.55 0 1-.45 1-1s-.45-1-1-1h-2V1c0-.55-.45-1-1-1s-1 .45-1 1v2h-4V1c0-.55-.45-1-1-1S9 .45 9 1v2H5V1c0-.55-.45-1-1-1S3 .45 3 1v2H1c-.55 0-1 .45-1 1s.45 1 1 1h2v4H1c-.55 0-1 .45-1 1s.45 1 1 1h2v4H1c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h4v2c0 .55.45 1 1 1s1-.45 1-1v-2h4v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-2v-4h2zM9 15H5v-4h4v4zm0-6H5V5h4v4zm6 6h-4v-4h4v4zm0-6h-4V5h4v4z'
          ],
          'grid-view': [
            'M0 19c0 .55.45 1 1 1h8v-9H0v8zM0 1v8h9V0H1C.45 0 0 .45 0 1zm19-1h-8v9h9V1c0-.55-.45-1-1-1zm-8 20h8c.55 0 1-.45 1-1v-8h-9v9z'
          ],
          'group-objects': [
            'M6 7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm8-3H6c-3.31 0-6 2.69-6 6s2.69 6 6 6h8c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 11H6c-2.76 0-5-2.24-5-5s2.24-5 5-5h8c2.76 0 5 2.24 5 5s-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z'
          ],
          'grouped-bar-chart': [
            'M12 16h1c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1zm7 1H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zm-3-1h1c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1zm-9 0h1c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1zm-4 0h1c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v13c0 .55.45 1 1 1z'
          ],
          hand: [
            'M17 5c-.42 0-.79.27-.93.64L14.38 10h-.77l1.34-6.67c.03-.1.05-.21.05-.33a.998.998 0 00-1.98-.19h-.01L11.57 10H11V1c0-.55-.45-1-1-1S9 .45 9 1v9h-.2L6.97 2.76a.997.997 0 00-1.73-.41l-.03.03c-.01.02-.02.03-.03.04-.01.02-.01.03-.02.04v.01c-.01.01-.02.02-.02.03v.01c-.02.01-.02.02-.03.03 0 0 0 .01-.01.01 0 .01 0 .02-.01.03 0 0 0 .01-.01.01 0 .01-.01.02-.01.03 0 0 0 .01-.01.01 0 .01-.01.02-.01.03 0 .01 0 .01-.01.02 0 .01-.01.02-.01.03 0 .01 0 .01-.01.02 0 .01-.01.02-.01.03v.02c0 .01 0 .02-.01.03V3c0 .05 0 .09.01.14l1.45 10.25L6 12.7v.01L3.84 9.45h-.01A.98.98 0 003 9c-.55 0-1 .45-1 1 0 .2.06.39.17.55L6 18.44C7.06 19.4 8.46 20 10 20c3.31 0 6-2.69 6-6v-1.84l.01-.03v-.06l1.94-5.75A1.003 1.003 0 0017 5z'
          ],
          'hand-down': [
            'M17.68 9.84C15.91 9 14.27 6.49 13.45 4.9 12.41 2.43 12.21 0 7.87 0 5.49 0 3.95.76 3.05 2.65 2.31 4.2 2 5.48 2 9.79v.99c0 .82.69 1.48 1.54 1.48.38 0 .73-.14 1-.36.19.6.78 1.05 1.47 1.05.47 0 .89-.2 1.17-.52.26.47.77.79 1.36.79.65 0 1.2-.39 1.43-.93l.03.77v5.44c0 .48.23.91.59 1.18.21.19.5.32.85.32h.06c.83 0 1.5-.67 1.5-1.5v-8.24l.01-.67c.85.98 1.92 1.76 3.24 1.89 1.79.19 2.09-1.33 1.43-1.64z'
          ],
          'hand-left': [
            'M15.1 6.54c-1.58-.81-4.09-2.46-4.94-4.23-.31-.65-1.82-.35-1.64 1.43.13 1.33.91 2.4 1.89 3.24L9.74 7H1.5C.67 7 0 7.67 0 8.5v.06c0 .36.13.64.32.85.27.36.7.59 1.18.59h5.44l.78.01c-.54.23-.93.78-.93 1.43 0 .59.32 1.1.79 1.36-.32.28-.52.7-.52 1.17 0 .69.44 1.28 1.05 1.47-.22.27-.36.62-.36 1 0 .85.66 1.54 1.48 1.54h.99c4.31 0 5.59-.31 7.14-1.05 1.89-.9 2.65-2.44 2.65-4.82-.01-4.32-2.44-4.52-4.91-5.57z'
          ],
          'hand-right': [
            'M20 8.5c0-.83-.67-1.5-1.5-1.5h-8.24l-.67-.01c.98-.85 1.76-1.92 1.89-3.24.18-1.79-1.33-2.08-1.65-1.43-.84 1.76-3.35 3.41-4.93 4.23C2.43 7.59 0 7.79 0 12.13c0 2.38.76 3.92 2.65 4.82C4.2 17.69 5.48 18 9.79 18h.99c.82 0 1.48-.69 1.48-1.54 0-.38-.14-.73-.36-1 .6-.19 1.05-.78 1.05-1.47 0-.47-.2-.89-.52-1.17.47-.26.79-.77.79-1.36 0-.65-.39-1.2-.93-1.43l.77-.03h5.44c.48 0 .91-.23 1.18-.59.19-.21.32-.49.32-.85v-.03-.03z'
          ],
          'hand-up': [
            'M16.46 7.74c-.38 0-.73.14-1 .36-.19-.6-.78-1.05-1.47-1.05-.47 0-.89.2-1.17.52-.26-.47-.77-.79-1.36-.79-.65 0-1.2.39-1.43.93L10 6.94V1.5c0-.48-.23-.91-.59-1.18C9.2.13 8.92 0 8.56 0H8.5C7.67 0 7 .67 7 1.5v8.24l-.01.67c-.84-.98-1.92-1.76-3.24-1.89-1.79-.18-2.08 1.33-1.43 1.65 1.77.84 3.41 3.35 4.23 4.94 1.05 2.47 1.25 4.9 5.58 4.9 2.38 0 3.92-.76 4.82-2.65.74-1.56 1.05-2.84 1.05-7.15v-.99c0-.81-.69-1.48-1.54-1.48z'
          ],
          hat: [
            'M18.5 13c1.118 0 1.466.534 1.498 1.366L20 14.5v.5c0 1.945-5.69 3-10 3S0 16.945 0 15v-.5c0-.908.323-1.5 1.5-1.5.895 0 3.5 1.2 8.5 1.2l.411-.003C15.143 14.134 17.631 13 18.5 13zm-5-10c1.725 0 2.954 2.729 3.688 8.186-1.455.263-3.805.72-6.392.801l-.434.01L10 12c-2.896 0-5.585-.524-7.189-.814C3.546 5.73 4.775 3 6.5 3 8.6 3 8.329 5.5 10 5.5S11.5 3 13.5 3z'
          ],
          header: [
            'M16 1c-.55 0-1 .45-1 1v7H5V2c0-.55-.45-1-1-1s-1 .45-1 1v16c0 .55.45 1 1 1s1-.45 1-1v-7h10v7c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1z'
          ],
          'header-one': [
            'M10 0c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1s-1-.45-1-1V9H2v6c0 .55-.45 1-1 1s-1-.45-1-1V1c0-.55.45-1 1-1s1 .45 1 1v6h7V1c0-.55.45-1 1-1zm7.4 10.77c.17-.2.29-.46.34-.77H19v10h-1.5v-7.11H15v-1.24c.32 0 .63-.03.93-.08.31-.06.58-.16.83-.29.26-.12.47-.3.64-.51z'
          ],
          'header-two': [
            'M16.6 17.41c-.22.17-.4.36-.56.55-.16.19-.27.4-.33.61h4.28V20H14c.01-.81.18-1.52.53-2.13.35-.6.81-1.13 1.41-1.58.28-.23.58-.46.89-.68.31-.22.59-.46.85-.71.26-.26.48-.53.63-.83.16-.3.25-.64.26-1.02 0-.18-.02-.37-.06-.57-.04-.2-.11-.39-.22-.56s-.26-.31-.45-.43-.44-.18-.75-.18c-.28 0-.52.06-.71.19s-.34.3-.45.52c-.11.22-.2.48-.25.78-.05.3-.08.62-.09.97h-1.43c0-.54.07-1.04.2-1.5.13-.47.32-.87.58-1.2.26-.34.58-.6.95-.78.37-.19.81-.29 1.3-.29.54 0 .99.09 1.35.29.36.19.65.44.87.74.22.29.38.62.47.97.09.35.14.68.14 1 0 .4-.05.75-.16 1.07-.11.32-.26.61-.44.88-.19.27-.4.52-.63.74-.24.22-.48.43-.73.63s-.5.38-.75.56c-.26.17-.5.35-.71.53zM10 0c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1s-1-.45-1-1V9H2v6c0 .55-.45 1-1 1s-1-.45-1-1V1c0-.55.45-1 1-1s1 .45 1 1v6h7V1c0-.55.45-1 1-1z'
          ],
          headset: [
            'M18.97 9H19A9 9 0 001 9h.03C.41 9.73 0 10.8 0 12c0 1.74.84 3.2 2 3.76V16c0 1.66 1.34 3 3 3h3c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1H5c-.55 0-1-.45-1-1 .55 0 1-.45 1-1V9c0-.55-.45-1-1-1h-.92C3.57 4.61 6.47 2 10 2s6.43 2.61 6.92 6H16c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h1c1.66 0 3-1.79 3-4 0-1.2-.41-2.27-1.03-3z'
          ],
          heart: [
            'M20 6.25C20 3.35 17.65 1 14.75 1c-1.02 0-1.95.31-2.75.82v-.04c-.09.06-.17.12-.26.19-.04.03-.09.06-.14.1-.68.51-1.24 1.18-1.6 1.96-.4-.86-1.04-1.57-1.8-2.1-.04-.02-.07-.05-.1-.08a7 7 0 00-.6-.33c-.13-.04-.23-.1-.35-.15-.05-.02-.1-.05-.15-.07v.02C6.45 1.13 5.87 1 5.25 1A5.25 5.25 0 000 6.25c0 .09.01.17.01.25H0c0 .06.01.12.02.18s.01.12.02.18C.13 7.89.44 9 1.07 10.17 2.23 12.33 4.1 14.11 7 16.53v.01c.9.75 1.89 1.55 3 2.46.71-.58 1.38-1.12 2-1.63 3.48-2.86 5.64-4.78 6.93-7.18.63-1.17.94-2.27 1.03-3.3.01-.07.01-.14.02-.21 0-.06.01-.11.02-.17h-.01c0-.09.01-.17.01-.26z'
          ],
          'heart-broken': [
            'M8.11 7.45C8.05 7.31 8 7.16 8 7c0-.07.03-.13.04-.19h-.02l.86-4.32A5.159 5.159 0 005.25 1 5.25 5.25 0 000 6.25c0 .09.01.17.01.25H0c0 .06.01.12.02.18s.01.12.02.18C.13 7.89.44 9 1.07 10.17c1.38 2.58 3.76 4.6 7.71 7.83l-.76-3.8h.02c-.01-.07-.04-.13-.04-.2 0-.21.08-.39.18-.54l-.02-.01 1.68-2.52-1.73-3.48zM20 6.25C20 3.35 17.65 1 14.75 1c-1.54 0-2.92.67-3.88 1.73l-.83 4.13 1.85 3.69h-.01c.07.14.12.29.12.45 0 .21-.08.39-.18.54l.02.01-1.77 2.66.81 4.07c4.16-3.39 6.63-5.45 8.05-8.1.63-1.17.94-2.27 1.03-3.3.01-.07.01-.14.02-.21 0-.06.01-.11.02-.17h-.01c0-.08.01-.16.01-.25z'
          ],
          'heat-grid': [
            'M14 12h6V8h-6v4zM0 12h6V8H0v4zm1-3h4v2H1V9zm-1 7c0 .55.45 1 1 1h5v-4H0v3zM19 3h-5v4h6V4c0-.55-.45-1-1-1zm0 3h-4V4h4v2zM0 4v3h6V3H1c-.55 0-1 .45-1 1zm7 3h6V3H7v4zm7 10h5c.55 0 1-.45 1-1v-3h-6v4zm-7 0h6v-4H7v4zm1-3h4v2H8v-2zm-1-2h6V8H7v4z'
          ],
          heatmap: [
            'M6 0a6 6 0 100 12A6 6 0 106 0z',
            'M10.5 8a4.5 4.5 0 100 9 4.5 4.5 0 100-9z',
            'M16.5 7a3.5 3.5 0 100 7 3.5 3.5 0 100-7zM18 16a2 2 0 100 4 2 2 0 100-4zM2.5 14a2.5 2.5 0 100 5 2.5 2.5 0 100-5zM16.5 0a2.5 2.5 0 100 5 2.5 2.5 0 100-5z'
          ],
          help: [
            'M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zM7.41 4.62c.65-.54 1.51-.82 2.56-.82.54 0 1.03.08 1.48.25.44.17.83.39 1.14.68.32.29.56.63.74 1.02.17.39.26.82.26 1.27s-.08.87-.24 1.23c-.16.37-.4.73-.71 1.11l-1.21 1.58c-.14.17-.28.33-.32.48-.05.15-.11.35-.11.6v.97H9v-2s.06-.58.24-.81l1.21-1.64c.25-.3.41-.56.51-.77s.14-.44.14-.67c0-.35-.11-.63-.32-.85s-.5-.33-.88-.33c-.37 0-.67.11-.89.33-.22.23-.37.54-.46.94-.03.12-.11.17-.23.16l-1.95-.29c-.12-.01-.16-.08-.14-.22.13-.93.52-1.67 1.18-2.22zM9 14h2.02L11 16H9v-2z'
          ],
          'helper-management': [
            'M17 10h-3v3h3v-3zm0 4h-3v3h3v-3zm0-8h-3v3h3V6zm2-6H1C.4 0 0 .4 0 1v18c0 .5.4 1 1 1h18c.5 0 1-.5 1-1V1c0-.6-.5-1-1-1zm-1 18H2V2h16v16zm-9-4H6v3h3v-3zm4 0h-3v3h3v-3z'
          ],
          highlight: [
            'M11.22 14.09l3.03-3.03.71.71L20 6.73l-5.71-5.71-5.04 5.04.71.71-3.02 3.04 4.28 4.28zm6.8 3.91h-16c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1zm-15-1h4.04c.28 0 .53-.11.71-.3l2.02-2.02-3.44-3.45-4.04 4.04c-.18.18-.3.44-.3.71.01.57.46 1.02 1.01 1.02z'
          ],
          history: [
            'M10 0C6.71 0 3.82 1.6 2 4.05V2c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1H3.76C5.23 3.17 7.47 2 10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8c0-.55-.45-1-1-1s-1 .45-1 1c0 5.52 4.48 10 10 10s10-4.48 10-10S15.52 0 10 0zm0 3c-.55 0-1 .45-1 1v6c0 .28.11.53.29.71l3 3a1.003 1.003 0 001.42-1.42L11 9.59V4c0-.55-.45-1-1-1z'
          ],
          home: [
            'M2 12v7c0 .55.45 1 1 1h5v-7h4v7h5c.55 0 1-.45 1-1v-7l-8-8-8 8zm17.71-2.71L17 6.59V3c0-.55-.45-1-1-1s-1 .45-1 1v1.59L10.71.3C10.53.11 10.28 0 10 0s-.53.11-.71.29l-9 9a1.003 1.003 0 001.42 1.42L10 2.41l8.29 8.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71z'
          ],
          'horizontal-bar-chart': [
            'M1 1c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1zm3 5h11c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1zm8 8H4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1zm7-6H4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h15c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1z'
          ],
          'horizontal-bar-chart-asc': [
            'M1 9h11c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1zm0-5h9c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1zm18 12H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h18c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zM1 14h14c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1z'
          ],
          'horizontal-bar-chart-desc': [
            'M10 16H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h9c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zm2-5H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h11c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zm3-5H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zm4-5H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1z'
          ],
          'horizontal-distribution': [
            'M12 2H8c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zM1 0C.45 0 0 .45 0 1v18c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zm18 0c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1z'
          ],
          'id-number': [
            'M2 5v10h16V5H2zm0-2h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2z',
            'M8.88 12.38c-.17-.39-1.01-.66-1.56-.9-.56-.24-.48-.39-.5-.6v-.09c.19-.17.35-.4.45-.67 0 0 0-.02.01-.02l.06-.18c.13-.03.2-.17.23-.29.03-.05.09-.18.08-.33-.04-.18-.11-.27-.2-.3v-.03c0-.24-.02-.58-.06-.81-.01-.06-.02-.12-.04-.19-.08-.27-.25-.52-.48-.7C6.63 7.09 6.3 7 6 7s-.63.09-.87.27c-.23.17-.4.42-.48.7-.02.06-.03.13-.04.19-.04.22-.06.57-.06.81V9c-.09.03-.17.12-.19.31-.01.14.05.27.08.32.03.14.1.27.23.3.02.06.03.12.06.18v.01c.11.27.27.51.47.68v.08c-.02.2.04.35-.51.6-.56.24-1.39.51-1.56.9-.19.39-.12.62-.12.62h5.98c-.01 0 .06-.23-.11-.62zM12 7h4c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1zM12 11h4c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1z'
          ],
          'image-rotate-left': [
            'M10.5 13c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM14 7H1c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h13c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm-1 10l-5-3-1 2-2-4-3 4.5V9h11v8zm3-15h-1.59l.29-.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-2 2c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l2 2a1.003 1.003 0 001.42-1.42l-.3-.29H16c1.1 0 2 .9 2 2v3c0 .55.45 1 1 1s1-.45 1-1V6c0-2.21-1.79-4-4-4z'
          ],
          'image-rotate-right': [
            'M5.29 4.29a1.003 1.003 0 001.42 1.42l2-2C8.89 3.53 9 3.28 9 3c0-.28-.11-.53-.29-.71l-2-2a1.003 1.003 0 00-1.42 1.42l.3.29H4C1.79 2 0 3.79 0 6v3c0 .55.45 1 1 1s1-.45 1-1V6c0-1.1.9-2 2-2h1.59l-.3.29zM15.5 13c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM19 7H6c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h13c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm-1 10l-5-3-1 2-2-4-3 4.5V9h11v8z'
          ],
          import: [
            'M9.29 15.71c.18.18.43.29.71.29s.53-.11.71-.29l5-5a1.003 1.003 0 00-1.42-1.42L11 12.59V1c0-.55-.45-1-1-1S9 .45 9 1v11.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42l5 5zM19 14c-.55 0-1 .45-1 1v3H2v-3c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h18c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1z'
          ],
          inbox: [
            'M16.92 3.56l-.01-.02c-.16-.35-.5-.6-.91-.6H4c-.41 0-.76.25-.91.6l-.01.02L0 10.49v6.46c0 .55.45 1 1 1h18c.55 0 1-.45 1-1v-6.46l-3.08-6.93zM15 10.95c-.55 0-1 .45-1 1v1H6v-1c0-.55-.45-1-1-1H1.98l2.67-6h10.7l2.67 6H15z'
          ],
          'inbox-filtered': [
            'M10.262 3l1.958 1.958v.05H4.65l-2.67 5.997H5c.55 0 1 .45 1 .999v1h8v-1c0-.55.45-1 1-1h3.02l-.635-1.426.625-.63c.354-.353.598-.8.707-1.289L20 10.545v6.456c0 .55-.45.999-1 .999H1c-.55 0-1-.45-1-1v-6.455L3.08 3.62l.01-.02c.15-.35.5-.6.91-.6h6.262zm9.088-3a.642.642 0 01.46 1.1l-3.03 3.03v2.95c0 .18-.07.34-.19.46l-1.28 1.29c-.11.1-.27.17-.45.17-.35 0-.64-.29-.64-.64V4.13L11.19 1.1a.642.642 0 01.45-1.1h7.71z'
          ],
          'inbox-geo': [
            'M7.427 3a7.467 7.467 0 00-.411 2.009H4.65l-2.67 5.996H5c.55 0 1 .45 1 .999v1h8V13c.165.01.332 0 .5 0a7.48 7.48 0 005.5-2.4V17c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1v-6.455L3.08 3.62l.01-.02c.15-.35.5-.6.91-.6h3.427zm5.715-.596a.133.133 0 01-.193 0l-.374-.374a.133.133 0 010-.193.133.133 0 01.193 0l.373.374a.133.133 0 010 .193zm1.743.033c-.05 0-.088-.006-.088-.055 0-.05.038-.056.088-.056h.165c.05 0 .088.006.088.055 0 .05-.038.056-.088.056h-.165zm.539.632c-.05 0-.104-.044-.104-.094v-.23c0-.05.054-.094.104-.094.05 0 .104.044.104.094v.23c0 .05-.055.094-.104.094zm-3.575 2.304h.506l1.182 1.2c.006.005 0 .005 0 .01v.446c0 .187-.126.341-.319.341h-.098v.226c0 .192-.138.296-.33.296h.01v.792c0 .188-.181.336-.368.336s-.369-.149-.369-.335v-1.32h-.214c-.193 0-.308-.149-.308-.341V5.72c0-.192.115-.346.308-.346zM14.5 0C17.536 0 20 2.464 20 5.5S17.536 11 14.5 11A5.502 5.502 0 019 5.5C9 2.464 11.464 0 14.5 0zm0 9.9c2.431 0 4.4-1.969 4.4-4.4 0-.297-.027-.583-.099-.864h-.236c-.188 0-.336-.104-.347-.313h-.319c.11.104.231.209.231.346v.705c0 .088-.055.17-.11.23h-.022l-.011.006-.022.011-.666.643v1.21c0 .193-.104.33-.296.33h-.54c-.192 0-.319-.137-.319-.33V6.221a.915.915 0 00-.533-.518h-.671c-.192 0-.368-.143-.368-.335V4.68c0-.192.176-.346.368-.346l.193-.005.319-.32a.342.342 0 01.489 0l.319.32c.005 0 .005.005.005.005h.704c.16 0 .237-.16.341-.313v-.11l-.038.005h-.27a.159.159 0 01-.153-.16c0-.087.066-.159.154-.159h.269l.039.006V3.42s-.05-.038-.061-.038h-.302l-.067.076a.342.342 0 01-.489.011l-.066-.088h-.176l.248.259c.021.022.021.088 0 .11-.028.022-.067.028-.088.006l-.292-.276h-.127l-.363.325-.033-.006c-.038.11-.087.089-.143.089-.126 0-.225-.072-.225-.193 0-.127.099-.209.225-.209h.176v-.182c0-.088.061-.131.149-.131h.066v-.127c0-.143.149-.297.286-.297h.28c.16 0 .27-.115.27-.275V2.42c0-.016.055.017.055-.088h-.187l-.005.017-.308.33a.123.123 0 01-.177 0c-.049-.044-.049-.121 0-.171l.391-.385c.027-.022.06-.022.094-.022l.005.022h.869A4.376 4.376 0 0014.5 1.1a4.402 4.402 0 00-2.816 1.018h.583c.094 0 .165.066.165.159s-.072.16-.165.16h-.478c0 .104-.039.06-.039.066v.351h.429l.226-.252c.132-.127.346-.155.473-.022a.332.332 0 010 .473l-1.183 1.182-.011.011c-.005.005-.011.005-.016.011a.115.115 0 00-.034.022c-.005.006-.01 0-.016.006a.309.309 0 01-.176.038h-.347c-.12.104-.187.148-.187.27v.088c0 .016-.027.027-.027.043l.561.589c.06.06.055.154 0 .209a.143.143 0 01-.209 0l-.578-.578a.425.425 0 01-.082.011c-.154 0-.292-.12-.292-.274v-.358h-.016c-.104.374-.165.77-.165 1.177 0 2.431 1.969 4.4 4.4 4.4zm3.388-3.107c.077 0 .16.06.16.137v.424c0 .077-.083.137-.16.137s-.16-.06-.16-.137V6.93c0-.077.083-.137.16-.137zm-3.113-4.879c0 .187-.154.314-.335.314h-.374v.104c0 .11-.05.198-.16.198s-.16-.088-.16-.198V1.98c-.104-.022-.033-.028-.033-.055 0-.187.127-.325.314-.325h.407c.187 0 .341.127.341.314z'
          ],
          'inbox-search': [
            'M7.136 3a6.327 6.327 0 00-.098 2.009H4.65l-2.67 5.996H5c.55 0 1 .45 1 .999v1h8v-1c0-.55.45-1 1-1h1.076l1.14 1.14a2.767 2.767 0 001.974.806c.282 0 .554-.042.81-.12V17c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1v-6.455L3.08 3.62l.01-.02c.15-.35.5-.6.91-.6h3.136zm3.244 1.33c0 1.62 1.31 2.93 2.93 2.93s2.93-1.31 2.93-2.93-1.31-2.93-2.93-2.93-2.93 1.31-2.93 2.93zm6.47 2.43l2.89 2.85c.13.15.22.35.23.56 0 .43-.35.78-.78.78-.23 0-.42-.08-.56-.22l-2.87-2.87c-.17.1-.33.2-.51.29-.03.01-.06.03-.09.04-.18.07-.35.15-.55.21-.19.06-.37.11-.57.14-.05.01-.1.02-.14.02-.2.03-.39.05-.6.05A4.3 4.3 0 019 4.31C9 1.93 10.93.01 13.3 0c2.37 0 4.3 1.93 4.3 4.3 0 .21-.02.4-.05.6-.01.05-.01.09-.02.14-.04.2-.08.38-.14.58-.05.19-.13.36-.21.54-.01.03-.03.06-.04.09-.08.18-.18.34-.29.51z'
          ],
          'inbox-update': [
            'M10.083 3a6.04 6.04 0 00.001 2.009H4.65l-2.67 5.996H5c.55 0 1 .45 1 .999v1h8v-1c0-.55.45-1 1-1h3.02l-.53-1.19a5.97 5.97 0 001.824-.811L20 10.545v6.456c0 .55-.45.999-1 .999H1c-.55 0-1-.45-1-1v-6.455L3.08 3.62l.01-.02c.15-.35.5-.6.91-.6h6.083zM16 8a4 4 0 110-8 4 4 0 010 8z'
          ],
          'info-sign': [
            'M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zM9 4h2v2H9V4zm4 12H7v-1h2V8H8V7h3v8h2v1z'
          ],
          inheritance: [
            'M6 10c0 2.21 1.79 4 4 4h6.59l-2.29-2.29A.965.965 0 0114 11a1.003 1.003 0 011.71-.71l4 4c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-4 4a1.003 1.003 0 01-1.42-1.42l2.3-2.29H10c-3.31 0-6-2.69-6-6H1a1 1 0 01-1-1V1a1 1 0 011-1h8a1 1 0 011 1v8a1 1 0 01-1 1H6zM2 2v6h6V2H2z'
          ],
          'inherited-group': [
            'M1 9c.55 0 1 .45 1 1v4c0 1.1.9 2 2 2h2.59l-.3-.29a1.003 1.003 0 011.42-1.42l2 2c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2 2A1.003 1.003 0 016 19c0-.28.11-.53.3-.71l.29-.29H4c-2.21 0-4-1.79-4-4v-4c0-.55.45-1 1-1zm6.996-9c.79 0 1.68.25 2.309.73a3.63 3.63 0 011.4 2.36c.11.6.17 1.52.17 2.15v.09c.22.09.42.32.47.82.03.39-.12.73-.2.87-.07.34-.27.71-.61.78-.04.16-.09.33-.15.48-.01.01-.02.05-.02.05-.27.71-.68 1.33-1.19 1.78 0 .08 0 .16.01.23.05.55-.15.95 1.33 1.6 1.469.66 3.698 1.35 4.178 2.39.45 1.05.27 1.67.27 1.67h-5.227a1.982 1.982 0 00-.319-.417l-2-2A2.003 2.003 0 005 15H4c-.548 0-1-.452-1-1v-1.462c.511-.213 1.023-.413 1.468-.608 1.479-.65 1.329-1.05 1.379-1.59l.01-.21c-.52-.45-.95-1.08-1.22-1.8l-.01-.01-.01-.03c-.07-.15-.12-.32-.16-.49-.34-.06-.54-.43-.62-.78-.08-.14-.24-.48-.2-.87.05-.51.26-.74.49-.83v-.08c0-.64.05-1.55.17-2.15a3.648 3.648 0 011.4-2.36C6.317.25 7.207 0 7.996 0zm5.997 3c.59 0 1.26.19 1.73.55.46.35.8.85.97 1.4.04.13.07.25.08.38.08.45.13 1.14.13 1.61v.07c.16.07.31.24.35.62.02.29-.09.55-.15.65-.05.26-.2.53-.46.59-.03.12-.07.25-.11.36-.01.01-.01.04-.01.04-.2.53-.51 1-.89 1.34 0 .06 0 .12.01.17.04.41-.11.71 1 1.19 1.099.5 2.768 1.01 3.128 1.79.34.79.2 1.25.2 1.25h-3.039V15c-.06-.33-.17-.69-.33-1.06-.45-.97-1.37-1.52-3.238-2.3-.17-.07-.76-.31-.77-.32-.1-.04-.2-.08-.28-.12.05-.14.04-.29.06-.45l.01-.16c-.25-.21-.47-.48-.65-.79.22-.34.41-.71.56-1.12l.028-.078-.002.013-.006.035.06-.15c.36-.26.6-.67.72-1.13.18-.37.29-.82.25-1.3-.05-.5-.21-.92-.47-1.22-.02-.53-.06-1.11-.12-1.59.38-.17.83-.26 1.24-.26z'
          ],
          'inner-join': [
            'M8.7 4.7C7.4 6 6.5 7.9 6.5 10s.8 4 2.2 5.3c-.8.5-1.7.7-2.7.7-3.3 0-6-2.7-6-6s2.7-6 6-6c1 0 1.9.2 2.7.7zm-3.34 9.25c-.55-1.2-.86-2.54-.86-3.95s.31-2.75.86-3.95a4.001 4.001 0 000 7.9zM14 4c3.3 0 6 2.7 6 6s-2.7 6-6 6c-1 0-1.9-.2-2.7-.7 1.3-1.3 2.2-3.2 2.2-5.3s-.8-3.9-2.2-5.3C12.1 4.2 13 4 14 4zm.6 2.05c.55 1.2.86 2.54.86 3.95s-.31 2.75-.86 3.95c1.9-.31 3.36-1.96 3.36-3.95S16.5 6.36 14.6 6.05zM10 5.5C8.8 6.7 8 8.2 8 10s.8 3.3 2 4.4c1.2-1.1 2-2.7 2-4.5s-.8-3.3-2-4.4z'
          ],
          insert: [
            'M19 0H1C.4 0 0 .4 0 1v18c0 .5.4 1 1 1h18c.5 0 1-.5 1-1V1c0-.6-.5-1-1-1zm-1 18H2V2h16v16zM5 11h4v4c0 .6.4 1 1 1s1-.4 1-1v-4h4c.6 0 1-.4 1-1s-.4-1-1-1h-4V5c0-.6-.4-1-1-1s-1 .4-1 1v4H5c-.6 0-1 .4-1 1s.4 1 1 1z'
          ],
          intersection: [
            'M13 4c-1.31 0-2.51.43-3.5 1.14A5.977 5.977 0 006 4c-3.31 0-6 2.69-6 6s2.69 6 6 6c1.31 0 2.51-.43 3.5-1.14.99.71 2.19 1.14 3.5 1.14 3.31 0 6-2.69 6-6s-2.69-6-6-6zm-4.93 9.41c-.61.37-1.31.59-2.07.59-2.21 0-4-1.79-4-4s1.79-4 4-4c.76 0 1.46.22 2.07.59C7.4 7.56 7 8.73 7 10s.4 2.44 1.07 3.41zM13 14c-.76 0-1.46-.22-2.07-.59C11.6 12.44 12 11.27 12 10s-.4-2.44-1.07-3.41C11.54 6.22 12.24 6 13 6c2.21 0 4 1.79 4 4s-1.79 4-4 4z'
          ],
          'ip-address': [
            'M6 3.66C6 5.69 10 11 10 11s4-5.31 4-7.34C13.99 1.64 12.21 0 10 0S6 1.64 6 3.66zM8 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zM14 13.5V13h-4v1h3v2h-2v1h3v-3.5zM3 12h14c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1v-6c0-.55.45-1 1-1zm4 1v6h1v-6H7zm3 1v5h1v-5h-1z'
          ],
          issue: [
            'M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm1-2H9v-2h2v2zm0-3H9V4h2v9z'
          ],
          'issue-closed': [
            'M15.364 5.9a.997.997 0 01-.707-.293l-2.121-2.122a1 1 0 111.414-1.414l1.414 1.414L18.192.657a1 1 0 011.414 1.414l-3.535 3.536a.997.997 0 01-.707.292zM11.78.157a3.002 3.002 0 00-1.437 1.85 8 8 0 107.1 5.055l.042-.042 1.472-1.472A9.959 9.959 0 0120 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0c.608 0 1.202.054 1.78.158zM11 16H9v-2h2v2zm0-3H9V4h2v9z'
          ],
          'issue-new': [
            'M13.167.512a2.98 2.98 0 00-.131.524c-.74.115-1.39.5-1.848 1.052a8 8 0 106.724 6.724 2.997 2.997 0 001.052-1.848 2.98 2.98 0 00.524-.13A9.99 9.99 0 0120 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0a9.99 9.99 0 013.167.512zM11 16H9v-2h2v2zm0-3H9V4h2v9zm6-10h1.5a1 1 0 010 2H17v1.5a1 1 0 01-2 0V5h-1.5a1 1 0 010-2H15V1.5a1 1 0 012 0V3z'
          ],
          italic: [
            'M11.7 4H14c.6 0 1-.4 1-1s-.4-1-1-1H7c-.6 0-1 .4-1 1s.4 1 1 1h2.2L7.3 15H5c-.6 0-1 .4-1 1s.4 1 1 1h7c.6 0 1-.4 1-1s-.4-1-1-1H9.8l1.9-11z'
          ],
          'join-table': [
            'M19 6h-4V2c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h4v4c0 .55.45 1 1 1h13c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zM6 12H2V9h4v3zm0-4H2V5h4v3zm7 9H7v-3h6v3zm0-4H7V9h6v4zm0-5H7V5h6v3zm5 9h-4v-3h4v3zm0-4h-4v-3h4v3z'
          ],
          key: [
            'M14 0c-3.31 0-6 2.69-6 6 0 1.11.32 2.14.85 3.03L.44 17.44a1.498 1.498 0 102.12 2.12l.79-.79.94.94c.18.18.43.29.71.29s.53-.11.71-.29l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-.94-.94 3.2-3.2A5.9 5.9 0 0014 12c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 9c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z'
          ],
          'key-backspace': [
            'M19 3H7c-.28 0-.53.11-.71.29l-6 6C.11 9.47 0 9.72 0 10c0 .28.11.53.29.71l6 6c.18.18.43.29.71.29h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-2.29 9.29a1.003 1.003 0 01-1.42 1.42L13 11.41l-2.29 2.29c-.18.19-.43.3-.71.3a1.003 1.003 0 01-.71-1.71l2.3-2.29-2.3-2.29a1.003 1.003 0 011.42-1.42L13 8.59l2.29-2.29c.18-.19.43-.3.71-.3a1.003 1.003 0 01.71 1.71L14.41 10l2.3 2.29z'
          ],
          'key-command': [
            'M15.5 12H14V8h1.5C17.43 8 19 6.43 19 4.5S17.43 1 15.5 1 12 2.57 12 4.5V6H8V4.5C8 2.57 6.43 1 4.5 1S1 2.57 1 4.5 2.57 8 4.5 8H6v4H4.5C2.57 12 1 13.57 1 15.5S2.57 19 4.5 19 8 17.43 8 15.5V14h4v1.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zm0-9c.83 0 1.5.67 1.5 1.5S16.33 6 15.5 6 14 5.33 14 4.5 14.67 3 15.5 3zm-11 14c-.83 0-1.5-.67-1.5-1.5S3.67 14 4.5 14s1.5.67 1.5 1.5S5.33 17 4.5 17zm0-11C3.67 6 3 5.33 3 4.5S3.67 3 4.5 3 6 3.67 6 4.5 5.33 6 4.5 6zm7.5 6H8V8h4v4zm3.5 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z'
          ],
          'key-control': [
            'M16.71 7.29l-6-6C10.53 1.11 10.28 1 10 1s-.53.11-.71.29l-6 6a1.003 1.003 0 001.42 1.42L10 3.41l5.29 5.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71z'
          ],
          'key-delete': [
            'M19.71 9.29l-6-6A.997.997 0 0013 3H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.28 0 .53-.11.71-.29l6-6c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71zm-9 3a1.003 1.003 0 01-1.42 1.42L7 11.41 4.71 13.7c-.18.19-.43.3-.71.3a1.003 1.003 0 01-.71-1.71L5.59 10l-2.3-2.29a1.003 1.003 0 011.42-1.42L7 8.59 9.29 6.3c.18-.19.43-.3.71-.3a1.003 1.003 0 01.71 1.71L8.41 10l2.3 2.29z'
          ],
          'key-enter': [
            'M18 2c-.55 0-1 .45-1 1v5c0 2.21-1.79 4-4 4H4.41L6.7 9.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-4 4c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l4 4a1.003 1.003 0 001.42-1.42L4.41 14H13c3.31 0 6-2.69 6-6V3c0-.55-.45-1-1-1z'
          ],
          'key-escape': [
            'M2 8c.55 0 1-.45 1-1V4.41l6.29 6.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L4.41 3H7c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1zm9-6.94V3.1c3.39.49 6 3.38 6 6.9 0 3.87-3.13 7-7 7-3.52 0-6.41-2.61-6.9-6H1.06c.5 4.5 4.31 8 8.94 8a9 9 0 009-9c0-4.63-3.5-8.44-8-8.94z'
          ],
          'key-option': [
            'M13 4h6c.55 0 1-.45 1-1s-.45-1-1-1h-6c-.55 0-1 .45-1 1s.45 1 1 1zm6 12h-4.42L6.87 2.5l-.02.01A.977.977 0 006 2H1c-.55 0-1 .45-1 1s.45 1 1 1h4.42l7.71 13.5.01-.01c.18.3.49.51.86.51h5c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'key-shift': [
            'M17.74 10.35l-6.99-8.01-.01.01C10.56 2.14 10.3 2 10 2s-.56.14-.74.35l-.01-.01-7 8 .01.01A.95.95 0 002 11c0 .55.45 1 1 1h3v5c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-5h3c.55 0 1-.45 1-1 0-.25-.1-.48-.26-.65z'
          ],
          'key-tab': [
            'M19 13H4.41l2.29-2.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L2 12.59V10c0-.55-.45-1-1-1s-1 .45-1 1v8c0 .55.45 1 1 1s1-.45 1-1v-2.59l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L4.41 15H19c.55 0 1-.45 1-1s-.45-1-1-1zm0-12c-.55 0-1 .45-1 1v2.59L14.71 1.3A.965.965 0 0014 1a1.003 1.003 0 00-.71 1.71L15.59 5H1c-.55 0-1 .45-1 1s.45 1 1 1h14.59L13.3 9.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L18 7.41V10c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1z'
          ],
          'known-vehicle': [
            'M19 4a.997.997 0 00-.707.293L14 8.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a.997.997 0 001.414 0l5-5A1 1 0 0019 4zm-2.048 7.291c.011.072.048.134.048.209a1.5 1.5 0 01-1.5 1.5c-.225 0-.433-.057-.624-.145-.279.085-.57.145-.876.145a2.99 2.99 0 01-2.121-.879l-3-3 .007-.007A3.027 3.027 0 018.184 8H4V7l1-3h10l.19.568 1.307-1.308c-.336-.356-.758-.658-1.165-.772 0 0-1.74-.488-5.332-.488s-5.332.488-5.332.488c-.67.188-1.424.864-1.674 1.502L2.99 4H3L2 7H1a1 1 0 000 2h.333l-.28.84L1 10v7.5a1.5 1.5 0 103 0V17h12v.5a1.5 1.5 0 003 0V10l-.19-.568-1.858 1.86zM4.5 13a1.5 1.5 0 110-3 1.5 1.5 0 010 3z'
          ],
          'lab-test': [
            'M13 2a1 1 0 010 2v4l4 8v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1l4-8V4a1 1 0 110-2h6zm-2 2H9v4l-2 4h6l-2-4V4z'
          ],
          label: [
            'M3 12h14v-1H3v1zm11-9H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V9l-6-6zm4 12H2V5h11v3H3v1h10v1h5v5zm-4-6V5l4 4h-4z'
          ],
          layer: [
            'M19.5 9.1l-9-5c-.2-.1-.3-.1-.5-.1s-.3 0-.5.1l-9 5c-.3.2-.5.5-.5.9s.2.7.5.9l9 5c.2.1.3.1.5.1s.3 0 .5-.1l9-5c.3-.2.5-.5.5-.9s-.2-.7-.5-.9z'
          ],
          layers: [
            'M.5 6.9l9 5c.2.1.3.1.5.1s.3 0 .5-.1l9-5c.3-.2.5-.5.5-.9s-.2-.7-.5-.9l-9-5c-.2-.1-.3-.1-.5-.1s-.3 0-.5.1l-9 5c-.3.2-.5.5-.5.9s.2.7.5.9z',
            'M19 9c-.2 0-.3 0-.5.1L10 13.9 1.5 9.1C1.3 9 1.2 9 1 9c-.6 0-1 .4-1 1 0 .4.2.7.5.9l9 5c.2.1.3.1.5.1s.3 0 .5-.1l9-5c.3-.2.5-.5.5-.9 0-.6-.4-1-1-1z',
            'M19 13c-.2 0-.3 0-.5.1L10 17.9l-8.5-4.7c-.2-.2-.3-.2-.5-.2-.6 0-1 .4-1 1 0 .4.2.7.5.9l9 5c.2.1.3.1.5.1s.3 0 .5-.1l9-5c.3-.2.5-.5.5-.9 0-.6-.4-1-1-1z'
          ],
          layout: [
            'M18 6c-1.1 0-2 .9-2 2 0 .37.11.71.28 1.01l-2.27 2.27c-.3-.17-.64-.28-1.01-.28-.93 0-1.71.64-1.93 1.5H8.93c-.22-.86-1-1.5-1.93-1.5-.37 0-.71.11-1.01.28L3.72 9.01C3.89 8.71 4 8.37 4 8c0-.34-.09-.66-.24-.94l3.66-3.38c.31.2.68.32 1.08.32 1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .34.09.66.24.94L3.08 6.32C2.77 6.12 2.4 6 2 6 .9 6 0 6.9 0 8s.9 2 2 2c.37 0 .71-.11 1.01-.28l2.27 2.27c-.17.3-.28.64-.28 1.01s.11.71.28 1.01l-2.27 2.27C2.71 16.11 2.37 16 2 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2c0-.37-.11-.71-.28-1.01l2.27-2.27c.3.17.64.28 1.01.28.93 0 1.71-.64 1.93-1.5h2.14c.22.86 1 1.5 1.93 1.5 1.1 0 2-.9 2-2 0-.37-.11-.71-.28-1.01l2.27-2.27c.3.17.64.28 1.01.28 1.1 0 2-.9 2-2s-.9-2-2-2z'
          ],
          'layout-auto': [
            'M18 13c-.53 0-1.01.21-1.37.55L11.9 10.6c.06-.19.1-.39.1-.6s-.04-.41-.1-.6l4.72-2.95c.37.34.85.55 1.38.55 1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .21.04.41.1.6l-4.73 2.96c-.24-.23-.54-.4-.87-.48V3.93c.86-.22 1.5-1 1.5-1.93 0-1.1-.9-2-2-2S8 .9 8 2c0 .93.64 1.71 1.5 1.93v4.14c-.33.09-.63.26-.87.48L3.9 5.6c.06-.19.1-.39.1-.6 0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2c.53 0 1.01-.21 1.37-.55L8.1 9.4c-.06.19-.1.39-.1.6s.04.41.1.6l-4.72 2.95C3.01 13.21 2.53 13 2 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2c0-.21-.04-.41-.1-.6l4.73-2.96c.24.23.54.4.87.48v4.14C8.64 16.29 8 17.07 8 18c0 1.1.9 2 2 2s2-.9 2-2c0-.93-.64-1.71-1.5-1.93v-4.14c.33-.09.63-.26.87-.48l4.73 2.96c-.06.18-.1.38-.1.59 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2z'
          ],
          'layout-balloon': [
            'M18 16c-.14 0-.28.02-.42.05l-1.73-3.45c.69-.45 1.14-1.22 1.14-2.1s-.46-1.65-1.14-2.1l1.73-3.45c.14.03.28.05.42.05 1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .6.27 1.13.69 1.5l-1.77 3.54c-.14-.02-.28-.04-.42-.04a2.5 2.5 0 00-2.45 2h-4.1A2.5 2.5 0 005.5 8c-.14 0-.28.02-.42.04L3.31 4.5C3.73 4.13 4 3.6 4 3c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2c.14 0 .28-.02.42-.05L4.14 8.4C3.46 8.85 3 9.62 3 10.5s.46 1.65 1.14 2.1l-1.73 3.45A1.84 1.84 0 002 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2c0-.6-.27-1.13-.69-1.5l1.77-3.54c.14.02.28.04.42.04a2.5 2.5 0 002.45-2h4.1a2.5 2.5 0 002.45 2c.14 0 .28-.02.42-.04l1.77 3.54c-.42.37-.69.9-.69 1.5 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2z'
          ],
          'layout-circle': [
            'M18.3 8c-.2-.9-.6-1.7-1.1-2.5.2-.3.3-.7.3-1 0-1.1-.9-2-2-2-.4 0-.7.1-1 .3-.8-.5-1.6-.8-2.5-1.1-.1-1-1-1.7-2-1.7S8.2.8 8 1.7c-.9.3-1.7.6-2.5 1.1-.3-.2-.7-.3-1-.3-1.1 0-2 .9-2 2 0 .4.1.7.3 1-.5.8-.8 1.6-1.1 2.5C.8 8.2 0 9 0 10s.8 1.8 1.7 2c.2.9.6 1.7 1.1 2.5-.2.3-.3.7-.3 1 0 1.1.9 2 2 2 .4 0 .7-.1 1-.3.8.5 1.6.8 2.5 1.1.1 1 1 1.7 2 1.7s1.8-.8 2-1.7c.9-.2 1.7-.6 2.5-1.1.3.2.7.3 1 .3 1.1 0 2-.9 2-2 0-.4-.1-.7-.3-1 .5-.8.8-1.6 1.1-2.5 1-.1 1.7-1 1.7-2s-.8-1.8-1.7-2zm-1.8 5.8c-.3-.2-.6-.3-1-.3-1.1 0-2 .9-2 2 0 .4.1.7.3 1-.6.3-1.2.6-1.9.8-.3-.7-1-1.3-1.9-1.3-.8 0-1.6.5-1.9 1.3-.7-.2-1.3-.4-1.9-.8.2-.3.3-.6.3-1 0-1.1-.9-2-2-2-.4 0-.7.1-1 .3-.3-.6-.6-1.2-.8-1.9.8-.3 1.3-1.1 1.3-1.9s-.5-1.6-1.2-1.8c.2-.7.4-1.3.8-1.9.3.2.6.3 1 .3 1.1 0 2-.9 2-2 0-.4-.1-.7-.3-1 .6-.3 1.2-.6 1.9-.8.2.7 1 1.2 1.8 1.2s1.6-.5 1.9-1.3c.7.2 1.3.4 1.9.8-.2.3-.3.6-.3 1 0 1.1.9 2 2 2 .4 0 .7-.1 1-.3.3.6.6 1.2.8 1.9-.8.3-1.3 1.1-1.3 1.9s.5 1.6 1.2 1.8c-.1.7-.4 1.4-.7 2z'
          ],
          'layout-grid': [
            'M2 0a2 2 0 100 4 2 2 0 100-4zM10 0a2 2 0 100 4 2 2 0 100-4zM18 0a2 2 0 100 4 2 2 0 100-4zM18 8a2 2 0 100 4 2 2 0 100-4zM18 16a2 2 0 100 4 2 2 0 100-4zM10 16a2 2 0 100 4 2 2 0 100-4zM2 16a2 2 0 100 4 2 2 0 100-4zM2 8a2 2 0 100 4 2 2 0 100-4zM10 8a2 2 0 100 4 2 2 0 100-4z'
          ],
          'layout-group-by': [
            'M2 2a2 2 0 100 4 2 2 0 100-4zM18 0a2 2 0 100 4 2 2 0 100-4zM18 8a2 2 0 100 4 2 2 0 100-4zM18 16a2 2 0 100 4 2 2 0 100-4zM2 14a2 2 0 100 4 2 2 0 100-4zM2 8a2 2 0 100 4 2 2 0 100-4zM13 12a2 2 0 100 4 2 2 0 100-4zM13 4a2 2 0 100 4 2 2 0 100-4z'
          ],
          'layout-hierarchy': [
            'M18.5 16.07v-4.14c.86-.22 1.5-1 1.5-1.93 0-1.1-.9-2-2-2-.93 0-1.71.64-1.93 1.5h-4.14c-.18-.7-.73-1.25-1.43-1.43V3.93c.86-.22 1.5-1 1.5-1.93 0-1.1-.9-2-2-2S8 .9 8 2c0 .93.64 1.71 1.5 1.93v4.14c-.7.18-1.25.73-1.43 1.43H3.93C3.71 8.64 2.93 8 2 8c-1.1 0-2 .9-2 2 0 .93.64 1.71 1.5 1.93v4.14c-.86.22-1.5 1-1.5 1.93 0 1.1.9 2 2 2s2-.9 2-2c0-.93-.64-1.71-1.5-1.93v-4.14c.7-.18 1.25-.73 1.43-1.43h4.14c.18.7.73 1.25 1.43 1.43v4.14c-.86.22-1.5 1-1.5 1.93 0 1.1.9 2 2 2s2-.9 2-2c0-.93-.64-1.71-1.5-1.93v-4.14c.7-.18 1.25-.73 1.43-1.43h4.14c.18.7.73 1.25 1.43 1.43v4.14c-.86.22-1.5 1-1.5 1.93 0 1.1.9 2 2 2s2-.9 2-2c0-.93-.64-1.71-1.5-1.93z'
          ],
          'layout-linear': [
            'M16.5 7a2.5 2.5 0 00-2.45 2h-2.1a2.5 2.5 0 00-4.9 0h-2.1a2.5 2.5 0 100 1h2.1a2.5 2.5 0 004.9 0h2.1a2.5 2.5 0 102.45-3z'
          ],
          'layout-skew-grid': [
            'M2 0a2 2 0 100 4 2 2 0 100-4zM18 0a2 2 0 100 4 2 2 0 100-4zM18 8a2 2 0 100 4 2 2 0 100-4zM18 16a2 2 0 100 4 2 2 0 100-4zM2 16a2 2 0 100 4 2 2 0 100-4zM2 8a2 2 0 100 4 2 2 0 100-4zM10 12a2 2 0 100 4 2 2 0 100-4zM10 4a2 2 0 100 4 2 2 0 100-4z'
          ],
          'layout-sorted-clusters': [
            'M2 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM2 0C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm16 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-8 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
          ],
          learning: [
            'M10.551 1.127a1.256 1.256 0 00-1.102 0L.456 5.89c-.608.309-.608.913 0 1.222l8.993 4.762c.334.17.767.17 1.102 0l8.992-4.762c.61-.309.61-.913 0-1.222l-8.992-4.762z',
            'M18 6.5l.016 4.514c.002.548.447.99.994.99a.99.99 0 00.99-.99V6.5h-2zM3.366 10.033l6.401 3.358a.5.5 0 00.465 0l6.406-3.358a.25.25 0 01.366.221v5.109a.25.25 0 01-.139.224l-6.64 3.302a.5.5 0 01-.446 0l-6.64-3.302A.25.25 0 013 15.363v-5.108a.25.25 0 01.366-.222z'
          ],
          'left-join': [
            'M8.7 4.7C7.4 6 6.5 7.9 6.5 10s.8 4 2.2 5.3c-.8.5-1.7.7-2.7.7-3.3 0-6-2.7-6-6s2.7-6 6-6c1 0 1.9.2 2.7.7zM14 4c3.3 0 6 2.7 6 6s-2.7 6-6 6c-1 0-1.9-.2-2.7-.7 1.3-1.3 2.2-3.2 2.2-5.3s-.8-3.9-2.2-5.3C12.1 4.2 13 4 14 4zm.6 2.05c.55 1.2.86 2.54.86 3.95s-.31 2.75-.86 3.95c1.9-.31 3.36-1.96 3.36-3.95S16.5 6.36 14.6 6.05zM10 5.5C8.8 6.7 8 8.2 8 10s.8 3.3 2 4.4c1.2-1.1 2-2.7 2-4.5s-.8-3.3-2-4.4z'
          ],
          'less-than': [
            'M7.162 10l9.154 3.052a1 1 0 01-.632 1.897l-12-4c-.912-.304-.912-1.594 0-1.897l12-4a1 1 0 01.632 1.897L7.162 10z'
          ],
          'less-than-or-equal-to': [
            'M16.316 11.051L7.162 8l9.154-3.051a1 1 0 10-.632-1.898l-12 4c-.912.304-.912 1.594 0 1.898l12 4a1 1 0 10.632-1.898zM16 15H4a1 1 0 100 2h12a1 1 0 100-2z'
          ],
          lifesaver: [
            'M8.143 14.644L7.028 17.43c.919.368 1.922.57 2.972.57s2.053-.202 2.972-.57l-1.115-2.786A4.986 4.986 0 0110 15a4.986 4.986 0 01-1.857-.356zm-2.787-2.787A4.986 4.986 0 015 10c0-.656.126-1.283.356-1.857L2.57 7.028A7.978 7.978 0 002 10c0 1.05.202 2.053.57 2.972l2.786-1.115zm2.787-6.5A4.986 4.986 0 0110 5c.656 0 1.283.126 1.857.356l1.115-2.786A7.978 7.978 0 0010 2c-1.05 0-2.053.202-2.972.57l1.115 2.786zm6.5 2.786c.23.574.357 1.2.357 1.857 0 .656-.126 1.283-.356 1.857l2.786 1.115c.368-.919.57-1.922.57-2.972s-.202-2.053-.57-2.972l-2.786 1.115zM10 13a3 3 0 100-6 3 3 0 000 6zm0 7C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z'
          ],
          lightbulb: [
            'M6.33 13.39c0 .34.27.61.6.61h6.13c.33 0 .6-.27.6-.61C14.03 9.78 16 9.4 16 6.09 16 2.72 13.31 0 10 0S4 2.72 4 6.09c0 3.31 1.97 3.69 2.33 7.3zM13 15H7c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1zm-1 3H8c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          link: [
            'M10.85 11.98l-4.44 4.44-1 1c-.36.36-.86.58-1.41.58-1.1 0-2-.9-2-2 0-.55.22-1.05.59-1.41l5.44-5.44C7.69 9.06 7.36 9 7 9c-1.11 0-2.09.46-2.82 1.18l-.01-.01-3 3 .01.01C.46 13.91 0 14.89 0 16c0 2.21 1.79 4 4 4 1.11 0 2.09-.46 2.82-1.18l.01.01 3-3-.01-.01C10.54 15.09 11 14.11 11 13c0-.36-.06-.69-.15-1.02zM20 4c0-2.21-1.79-4-4-4-1.11 0-2.09.46-2.82 1.18l-.01-.01-3 3 .01.01C9.46 4.91 9 5.89 9 7c0 .36.06.69.15 1.02l4.44-4.44 1-1c.36-.36.86-.58 1.41-.58 1.1 0 2 .9 2 2 0 .55-.22 1.05-.59 1.41l-5.44 5.44c.34.09.67.15 1.03.15 1.11 0 2.09-.46 2.82-1.18l.01.01 3-3-.01-.01C19.54 6.09 20 5.11 20 4zM5 14a1.003 1.003 0 001.71.71l8-8a1.003 1.003 0 00-1.42-1.42l-2 2-2 2-2 2-2 2c-.18.18-.29.43-.29.71z'
          ],
          list: [
            'M1.03 1C.46 1 0 1.46 0 2.03v.95C0 3.54.46 4 1.03 4h17.95C19.54 4 20 3.54 20 2.97v-.94C20 1.46 19.54 1 18.97 1H1.03zM0 17.97C0 18.54.46 19 1.03 19h17.95c.56 0 1.03-.46 1.03-1.03v-.95c0-.56-.46-1.03-1.03-1.03H1.03C.46 16 0 16.46 0 17.03v.94zM0 12.97C0 13.54.46 14 1.03 14h17.95c.56 0 1.03-.46 1.03-1.03v-.95c0-.56-.46-1.03-1.03-1.03H1.03C.46 11 0 11.46 0 12.03v.94zM0 7.97C0 8.54.46 9 1.03 9h17.95C19.54 9 20 8.54 20 7.97v-.94C20 6.46 19.54 6 18.97 6H1.03C.46 6 0 6.46 0 7.03v.94z'
          ],
          'list-columns': [
            'M0 2.973v-.936C0 1.468.46 1.01 1.029 1H7.97C8.541 1 9 1.468 9 2.027v.946C9 3.542 8.53 4 7.971 4H1.03C.459 4 0 3.542 0 2.973zm0 5v-.936C0 6.468.46 6.01 1.029 6H7.97C8.541 6 9 6.468 9 7.027v.946C9 8.542 8.53 9 7.971 9H1.03C.459 9 0 8.542 0 7.973zm0 5v-.936C0 11.468.46 11.01 1.029 11H7.97C8.541 11 9 11.468 9 12.027v.946C9 13.542 8.53 14 7.971 14H1.03C.459 14 0 13.542 0 12.973zm0 5v-.936C0 16.468.46 16.01 1.029 16H7.97C8.541 16 9 16.468 9 17.027v.946C9 18.542 8.53 19 7.971 19H1.03C.459 19 0 18.542 0 17.973zm11-15v-.936c0-.569.46-1.027 1.029-1.037h6.942C19.541 1 20 1.468 20 2.027v.946C20 3.542 19.53 4 18.971 4H12.03C11.459 4 11 3.542 11 2.973zm0 5v-.936c0-.569.46-1.027 1.029-1.037h6.942C19.541 6 20 6.468 20 7.027v.946C20 8.542 19.53 9 18.971 9H12.03C11.459 9 11 8.542 11 7.973zm0 5v-.936c0-.569.46-1.027 1.029-1.037h6.942c.57 0 1.029.468 1.029 1.027v.946c0 .569-.47 1.027-1.029 1.027H12.03c-.57 0-1.029-.458-1.029-1.027zm0 5v-.936c0-.569.46-1.027 1.029-1.037h6.942c.57 0 1.029.468 1.029 1.027v.946c0 .569-.47 1.027-1.029 1.027H12.03c-.57 0-1.029-.458-1.029-1.027z'
          ],
          'list-detail-view': [
            'M8 6H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zm0 5H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h7c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zm0 5H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h7c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zM8 1H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm11 0h-7c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1z'
          ],
          locate: [
            'M10 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm9 1h-1.07c-.45-3.61-3.32-6.45-6.93-6.91V1c0-.55-.45-1-1-1S9 .45 9 1v1.09C5.39 2.55 2.52 5.39 2.07 9H1c-.55 0-1 .45-1 1s.45 1 1 1h1.07c.45 3.61 3.32 6.45 6.93 6.91V19c0 .55.45 1 1 1s1-.45 1-1v-1.09c3.61-.46 6.48-3.29 6.93-6.91H19c.55 0 1-.45 1-1s-.45-1-1-1zm-4 2h.9a5.98 5.98 0 01-4.9 4.91V15c0-.55-.45-1-1-1s-1 .45-1 1v.91A5.98 5.98 0 014.1 11H5c.55 0 1-.45 1-1s-.45-1-1-1h-.9A5.98 5.98 0 019 4.09V5c0 .55.45 1 1 1s1-.45 1-1v-.91A5.98 5.98 0 0115.9 9H15c-.55 0-1 .45-1 1s.45 1 1 1z'
          ],
          lock: [
            'M15.93 9H14V4.99c0-2.21-1.79-4-4-4s-4 1.79-4 4V9H3.93c-.55 0-.93.44-.93.99v8c0 .55.38 1.01.93 1.01h12c.55 0 1.07-.46 1.07-1.01v-8c0-.55-.52-.99-1.07-.99zM8 9V4.99c0-1.1.9-2 2-2s2 .9 2 2V9H8z'
          ],
          'log-in': [
            'M19 0h-8c-.55 0-1 .45-1 1s.45 1 1 1h7v16h-7c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-4 10c0-.28-.11-.53-.29-.71l-5-5a1.003 1.003 0 00-1.42 1.42L11.59 9H1c-.55 0-1 .45-1 1s.45 1 1 1h10.59L8.3 14.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l5-5c.18-.18.29-.43.29-.71z'
          ],
          'log-out': [
            'M19.71 9.29l-5-5a1.003 1.003 0 00-1.42 1.42L16.59 9H6c-.55 0-1 .45-1 1s.45 1 1 1h10.59l-3.29 3.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l5-5c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71zM9 18H2V2h7c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          manual: [
            'M20 1.1a.976.976 0 00-.83-.88C15.15-.43 12.07.34 10 2.5 7.93.34 4.85-.43.84.22.37.3.03.67 0 1.1v15.01c0 .07 0 .14.01.21.09.52.61.88 1.15.79 3.85-.62 6.4.16 8 2.46.02.02.03.04.05.07.02.02.04.04.06.07l.01.01a1.07 1.07 0 00.28.19c.01 0 .01.01.02.01.03.01.07.03.1.04.01 0 .02.01.04.01.03.01.07.02.1.02.01 0 .02 0 .04.01H10c.04 0 .09 0 .13-.01.01 0 .03 0 .04-.01.03-.01.06-.01.1-.02.01 0 .03-.01.04-.01.03-.01.07-.02.1-.04.01 0 .02-.01.03-.01.07-.03.13-.07.19-.11.01 0 .01-.01.02-.01.02-.02.04-.03.06-.05.01-.01.02-.02.03-.02l.05-.05c.01-.01.02-.02.02-.03.01-.02.02-.03.04-.05 1.61-2.3 4.15-3.09 8-2.46.54.09 1.06-.26 1.15-.79-.01-.05 0-.09 0-.13V1.1zM9 16.63c-1.78-1.31-4.12-1.83-7-1.55V2c3.26-.37 5.51.39 7 2.35v12.28zm9-1.56c-2.88-.28-5.22.24-7 1.55V4.34c1.49-1.96 3.74-2.71 7-2.35v13.08z'
          ],
          'manually-entered-data': [
            'M1 12h4.34l2-2H1c-.55 0-1 .45-1 1s.45 1 1 1zm16.77-3.94l1.65-1.65c.36-.36.58-.86.58-1.41 0-1.1-.9-2-2-2-.55 0-1.05.22-1.41.59l-1.65 1.65 2.83 2.82zM1 4h12.34l2-2H1c-.55 0-1 .45-1 1s.45 1 1 1zM0 15c0 .55.45 1 1 1h.34l2-2H1c-.55 0-1 .45-1 1zm1-7h8.34l2-2H1c-.55 0-1 .45-1 1s.45 1 1 1zm18 2h-.34l-2 2H19c.55 0 1-.45 1-1s-.45-1-1-1zm0 4h-4.34l-2 2H19c.55 0 1-.45 1-1s-.45-1-1-1zM4 19l4.41-1.59-2.81-2.79L4 19zM14.23 5.94l-7.65 7.65 2.83 2.83 7.65-7.65-2.83-2.83z'
          ],
          map: [
            'M19.54 4.18l.01-.02-6-4-.01.02C13.39.08 13.21 0 13 0s-.39.08-.54.18l-.01-.02L7 3.8 1.55.17l-.01.01A.969.969 0 001 0C.45 0 0 .45 0 1v14c0 .35.19.64.46.82l-.01.02 6 4 .01-.02c.15.1.33.18.54.18s.39-.08.54-.18l.01.02L13 16.2l5.45 3.63.01-.02c.15.11.33.19.54.19.55 0 1-.45 1-1V5c0-.35-.19-.64-.46-.82zM6 17.13l-4-2.67V2.87l4 2.67v11.59zm6-2.67l-4 2.67V5.54l4-2.67v11.59zm6 2.67l-4-2.67V2.87l4 2.67v11.59z'
          ],
          'map-create': [
            'M18 9.22v7.91l-4-2.67V9.22c-.61-.55-1-1.33-1-2.22-.35 0-.69-.07-1-.18v7.65l-4 2.67V5.54l2.02-1.35c0-.06-.02-.13-.02-.19 0-1.66 1.34-3 3-3 0-.34.07-.66.17-.97C13.12.02 13.06 0 13 0c-.21 0-.39.08-.54.18l-.01-.02L7 3.8 1.55.17l-.01.01A.969.969 0 001 0C.45 0 0 .45 0 1v14c0 .35.19.64.46.82l-.01.02 6 4 .01-.02c.15.1.33.18.54.18s.39-.08.54-.18l.01.02L13 16.2l5.45 3.63.01-.02c.15.11.33.19.54.19.55 0 1-.45 1-1V6.82c-.31.11-.65.18-1 .18 0 .89-.39 1.67-1 2.22zM6 17.13l-4-2.67V2.87l4 2.67v11.59zM12 4c0 .55.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V5h2c.55 0 1-.45 1-1s-.45-1-1-1h-2V1c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1z'
          ],
          'map-marker': [
            'M9.98 0c-3.87 0-7 2.98-7 6.67 0 3.68 7 13.33 7 13.33s7-9.65 7-13.33c0-3.68-3.14-6.67-7-6.67zm0 10c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z'
          ],
          maximize: [
            'M19 0h-5c-.55 0-1 .45-1 1s.45 1 1 1h2.59L11.3 7.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L18 3.41V6c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zM8 11c-.28 0-.53.11-.71.29L2 16.59V14c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1H3.41l5.29-5.29c.19-.18.3-.43.3-.71 0-.55-.45-1-1-1z'
          ],
          media: [
            'M15 9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4-7H1c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 13l-6-5-2 2-4-5-4 8V4h16v11z'
          ],
          menu: [
            'M1 6h18c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm18 3H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zm0 5H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'menu-closed': [
            'M8 6h11c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zM4 6c-.28 0-.53.11-.71.29l-3 3C.11 9.47 0 9.72 0 10c0 .28.11.53.29.71l3 3A1.003 1.003 0 005 13V7c0-.55-.45-1-1-1zm15 8H8c-.55 0-1 .45-1 1s.45 1 1 1h11c.55 0 1-.45 1-1s-.45-1-1-1zm0-5H8c-.55 0-1 .45-1 1s.45 1 1 1h11c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'menu-open': [
            'M12 9H1c-.55 0-1 .45-1 1s.45 1 1 1h11c.55 0 1-.45 1-1s-.45-1-1-1zm0 5H1c-.55 0-1 .45-1 1s.45 1 1 1h11c.55 0 1-.45 1-1s-.45-1-1-1zm0-10H1c-.55 0-1 .45-1 1s.45 1 1 1h11c.55 0 1-.45 1-1s-.45-1-1-1zm7.71 5.29l-3-3A1.003 1.003 0 0015 7v6a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z'
          ],
          'merge-columns': [
            'M6.71 6.29a1.003 1.003 0 00-1.42 1.42L6.59 9H2V2h5v2.18c.42.15.8.39 1.11.7l.01-.01.88.89V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h7c.55 0 1-.45 1-1v-4.76l-.88.88-.01-.01c-.31.31-.69.56-1.11.71V18H2v-7h4.59L5.3 12.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-3-3zM19 0h-7c-.55 0-1 .45-1 1v4.76l.88-.88.01.01c.31-.31.69-.55 1.11-.7V2h5v7h-4.59l1.29-1.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-3 3c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l3 3a1.003 1.003 0 001.42-1.42L13.41 11H18v7h-5v-2.18c-.42-.15-.8-.39-1.11-.7l-.01.01-.88-.89V19c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z'
          ],
          'merge-links': [
            'M10 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm8-5c-.93 0-1.71.64-1.93 1.5H14V4c0-2.21-1.79-4-4-4S6 1.79 6 4v5.5H3.93C3.71 8.64 2.93 8 2 8c-1.1 0-2 .9-2 2s.9 2 2 2c.93 0 1.71-.64 1.93-1.5H6V16c0 2.21 1.79 4 4 4s4-1.79 4-4v-5.5h2.07c.22.86 1 1.5 1.93 1.5 1.1 0 2-.9 2-2s-.9-2-2-2zm-5 8c0 1.66-1.34 3-3 3s-3-1.34-3-3V4c0-1.66 1.34-3 3-3s3 1.34 3 3v12zM10 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
          ],
          minimize: [
            'M8 11H3c-.55 0-1 .45-1 1s.45 1 1 1h2.59L.3 18.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L7 14.41V17c0 .55.45 1 1 1s1-.45 1-1v-5c0-.55-.45-1-1-1zM20 1a1.003 1.003 0 00-1.71-.71L13 5.59V3c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1h-2.59l5.29-5.29c.19-.18.3-.43.3-.71z'
          ],
          minus: [
            'M16 9H4c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'mobile-phone': [
            'M15 0H5c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-5 19c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4-3H6V3h8v13z'
          ],
          'mobile-video': [
            'M19 5c-.28 0-.53.11-.71.29L15 8.59V5c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h13c.55 0 1-.45 1-1v-3.59l3.29 3.29c.18.19.43.3.71.3.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z'
          ],
          modal: [
            'M19 1a1 1 0 011 1v16a1 1 0 01-1 1H1a1 1 0 01-1-1V2a1 1 0 011-1h18zm-1 4H2v12h16V5zm-3-3h-2v2h2V2zm3 0h-2v2h2V2z'
          ],
          'modal-filled': [
            'M20 5v13a1 1 0 01-1 1H1a1 1 0 01-1-1V5h20zm-3-4h2a1 1 0 011 1v1h-3V1zm-2 2H0V2a1 1 0 011-1h14v2z'
          ],
          moon: [
            'M19 14.15A9.94 9.94 0 019.94 20C4.45 20 0 15.55 0 10.06 0 6.03 2.4 2.56 5.85 1a9.811 9.811 0 00-.88 4.09c0 5.49 4.45 9.94 9.94 9.94 1.46 0 2.84-.31 4.09-.88z'
          ],
          more: [
            'M3.5 8a2.5 2.5 0 100 5 2.5 2.5 0 100-5zM17.5 8a2.5 2.5 0 100 5 2.5 2.5 0 100-5zM10.5 8a2.5 2.5 0 100 5 2.5 2.5 0 100-5z'
          ],
          mountain: [
            'M20 16H4l7-11h1l2 2h1l5 9zm-4-5l-1.5-3h-1l-1-1-1-1L8 11.5l3-1.5 1 1 1-1 3 1zM8.055 8L2.79 16H0l7-8h1.055z'
          ],
          move: [
            'M19.71 9.29l-3-3a1.003 1.003 0 00-1.42 1.42L16.59 9H11V3.41l1.29 1.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-3-3C10.53.11 10.28 0 10 0s-.53.11-.71.29l-3 3a1.003 1.003 0 001.42 1.42L9 3.41V9H3.41L4.7 7.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-3 3C.11 9.47 0 9.72 0 10c0 .28.11.53.29.71l3 3a1.003 1.003 0 001.42-1.42L3.41 11H9v5.59L7.71 15.3A.965.965 0 007 15a1.003 1.003 0 00-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3a1.003 1.003 0 00-1.42-1.42L11 16.59V11h5.59l-1.29 1.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z'
          ],
          mugshot: [
            'M19 0H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 18h-.07c-.05-.2-.12-.42-.22-.67-.46-1.05-2.68-1.75-4.16-2.4-1.48-.65-1.28-1.05-1.33-1.59-.01-.07-.01-.15-.01-.23.51-.45.92-1.07 1.19-1.78 0 0 .01-.04.02-.05.06-.15.11-.32.15-.48.34-.07.54-.44.61-.78.08-.14.23-.48.2-.87-.05-.5-.25-.73-.47-.82v-.09c0-.63-.06-1.55-.17-2.15-.02-.17-.06-.33-.11-.5a3.67 3.67 0 00-1.29-1.86C11.7 3.25 10.81 3 10.02 3s-1.68.25-2.31.73c-.61.47-1.07 1.13-1.29 1.86-.05.16-.09.33-.11.5-.12.6-.17 1.51-.17 2.14v.08c-.24.09-.44.32-.49.83-.04.39.12.73.2.87.08.35.28.72.63.78.04.17.09.33.15.48 0 .01.01.02.01.03l.01.01c.27.72.7 1.35 1.22 1.8 0 .07-.01.14-.01.21-.05.54.1.94-1.38 1.59-1.48.65-3.7 1.35-4.16 2.4-.12.27-.18.49-.23.69H2V2h16v16z'
          ],
          'multi-select': [
            'M19 3H7c-.55 0-1 .45-1 1v1h12v6h1c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-6 6H1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm-1 6H2v-4h10v4zm4-9H4c-.55 0-1 .45-1 1v1h12v6h1c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1z'
          ],
          music: [
            'M19 0c-.08 0-.16.03-.24.05V.03l-12 3v.02C6.33 3.16 6 3.53 6 4v11.35c-.59-.22-1.27-.35-2-.35-2.21 0-4 1.12-4 2.5S1.79 20 4 20c1.94 0 3.55-.86 3.92-2H8V7.78l10-2.5v7.07c-.59-.22-1.27-.35-2-.35-2.21 0-4 1.12-4 2.5s1.79 2.5 4 2.5c1.94 0 3.55-.86 3.92-2H20V1c0-.55-.45-1-1-1z'
          ],
          'new-drawing': [
            'M18.7 13.7c.5 0 1 .4 1 1 0 .257-.073.44-.22.614l-.08.086-4 4c-.2.2-.4.3-.7.3-.6 0-1-.5-1-1 0-.257.073-.44.22-.614L14 18l4-4c.2-.2.4-.3.7-.3zM1.8 0l8.378 2.982A3.003 3.003 0 0013 7a3.003 3.003 0 003.877 2.87l.723 2.53.049.06a.41.41 0 01.051.24c0 .167-.07.403-.208.593l-.092.107-4 4c-.2.2-.4.3-.7.3-.075 0-.15-.056-.225-.084L12.4 17.6l-7-2-.112-.042c-.223-.094-.431-.244-.542-.45L4.7 15 0 1.8l.5-.6L7 7.7c-.2.3-.3.6-.3 1 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2a1.68 1.68 0 00-.871.22L7.7 7 1.2.5l.6-.5zM16 0c.55 0 1 .45 1 1v2h2c.55 0 1 .45 1 1s-.45 1-1 1h-2v2c0 .432-.278.803-.664.941l-.01.004A.989.989 0 0116 8c-.55 0-1-.45-1-1V5h-2c-.55 0-1-.45-1-1l.007-.116C12.065 3.388 12.489 3 13 3h2V1c0-.55.45-1 1-1z'
          ],
          'new-grid-item': [
            'M8 0H1C.45 0 0 .45 0 1v7c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm0 11H1c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h7c.55 0 1-.45 1-1v-7c0-.55-.45-1-1-1zm6 7h-1v-1c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1zm5-7h-2c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1zm0-11h-7c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-5 11h-2c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1zm5 5c-.55 0-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1z'
          ],
          'new-layer': [
            'M11.513 2.663A2 2 0 0013 6h1v1a2 2 0 104 0v-.733l1.5.833c.3.2.5.5.5.9s-.2.7-.5.9l-9 5c-.2.1-.3.1-.5.1s-.3 0-.5-.1l-9-5C.2 8.7 0 8.4 0 8s.2-.7.5-.9l9-5c.2-.1.3-.1.5-.1s.3 0 .5.1l1.013.563zM17 3h2a1 1 0 010 2h-2v2a1 1 0 01-2 0V5h-2a1 1 0 010-2h2V1a1 1 0 012 0v2z'
          ],
          'new-layers': [
            'M17 3h2a1 1 0 010 2h-2v2a1 1 0 01-2 0V5h-2a1 1 0 010-2h2V1a1 1 0 012 0v2zm-1.252 5.984L10.5 11.9c-.2.1-.3.1-.5.1s-.3 0-.5-.1l-9-5C.2 6.7 0 6.4 0 6s.2-.7.5-.9l9-5c.2-.1.3-.1.5-.1s.3 0 .5.1L13.92 2H13a2 2 0 100 4h1v1a2 2 0 001.748 1.984zm2.07-1.15C17.935 7.58 18 7.298 18 7V6h1c.353 0 .684-.091.972-.251.018.078.028.162.028.251 0 .4-.2.7-.5.9l-1.682.934zM19 9c.6 0 1 .4 1 1 0 .4-.2.7-.5.9l-9 5c-.2.1-.3.1-.5.1s-.3 0-.5-.1l-9-5c-.3-.2-.5-.5-.5-.9 0-.6.4-1 1-1 .2 0 .3 0 .5.1l8.5 4.8 8.5-4.8c.2-.1.3-.1.5-.1zm0 4c.6 0 1 .4 1 1 0 .4-.2.7-.5.9l-9 5c-.2.1-.3.1-.5.1s-.3 0-.5-.1l-9-5c-.3-.2-.5-.5-.5-.9 0-.6.4-1 1-1 .2 0 .3 0 .5.2l8.5 4.7 8.5-4.8c.2-.1.3-.1.5-.1z'
          ],
          'new-link': [
            'M14.5 12a2.5 2.5 0 00-2.45 2h-7.1a2.5 2.5 0 100 1h7.1a2.5 2.5 0 102.45-3zM19 5h-2V3c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V7h2c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'new-object': [
            'M12 4c0 .6.4 1 1 1h2v2c0 .6.4 1 1 1 .5 0 1-.4 1-1V5h2c.5 0 1-.4 1-1s-.5-1-1-1h-2V1c0-.6-.5-1-1-1-.6 0-1 .4-1 1v2h-2c-.6 0-1 .5-1 1zm7 3c0 1.7-1.3 3-3 3s-3-1.3-3-3c-1.7 0-3-1.3-3-3s1.3-3 3-3c0-.2 0-.4.1-.5-1-.3-2-.5-3.1-.5C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10c0-1.1-.2-2.1-.5-3H19z'
          ],
          'new-person': [
            'M11.41 15.92c-1.46-.65-1.26-1.05-1.31-1.59-.01-.07-.01-.15-.01-.23.5-.45.91-1.07 1.18-1.78 0 0 .01-.04.02-.05.06-.15.11-.32.15-.48.33-.07.53-.44.6-.78.08-.14.23-.48.2-.87-.05-.5-.24-.73-.47-.82v-.09c0-.63-.06-1.55-.17-2.15-.02-.17-.06-.33-.11-.5-.22-.73-.67-1.4-1.27-1.86C9.58 4.25 8.7 4 7.92 4c-.78 0-1.66.25-2.28.73-.61.47-1.06 1.13-1.27 1.86-.05.16-.08.33-.11.5-.12.6-.18 1.51-.18 2.14v.08c-.23.09-.43.32-.48.83-.04.39.12.73.2.87.08.35.28.72.62.78.04.17.09.33.15.48 0 .01.01.02.01.03l.01.01c.27.72.69 1.35 1.21 1.8 0 .07-.01.14-.01.21-.05.54.1.94-1.36 1.59-1.46.65-3.66 1.35-4.11 2.4C-.14 19.38.04 20 .04 20h15.75s.18-.62-.27-1.67c-.45-1.06-2.65-1.75-4.11-2.41zM18.87 3h-2V1c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V5h2c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'new-prescription': [
            'M11.95 10.23c.16-.18.22-.22.46-.22h1.48c.25 0 .47.08.59.33.1.2.09.41-.05.66l-2.71 3.58L14.88 19c.13.21.16.46.03.69-.12.21-.34.31-.57.31H12.7c-.31 0-.56-.17-.7-.44l-1.9-2.67-1.93 2.68c-.15.27-.42.43-.73.43H5.98c-.25 0-.47-.08-.59-.33-.1-.2-.09-.41.05-.66l3.09-4.35L4.26 9H3v4.32c0 .41-.3.69-.7.69H.7c-.41 0-.7-.28-.7-.69V.69C0 .28.3 0 .7 0h4.42c.71 0 1.36.1 1.94.3.59.2 1.11.49 1.54.87.44.38.78.84 1.02 1.39.25.54.37 1.13.37 1.77 0 1.01-.28 1.88-.84 2.6-.43.54-1.35 1.29-2 1.59l3.09 3.94 1.71-2.23zM4.71 6.04c.71 0 1.45-.16 1.81-.46.33-.28.5-.69.5-1.25s-.17-.97-.5-1.25c-.35-.3-1.1-.46-1.81-.46h-1.7v3.42h1.7zM19 3c.55 0 1 .45 1 1s-.45 1-1 1h-2v2c0 .55-.45 1-1 1s-1-.45-1-1V5h-2c-.55 0-1-.45-1-1s.45-1 1-1h2V1c0-.55.45-1 1-1s1 .45 1 1v2h2z'
          ],
          'new-text-box': [
            'M19 3h-2V1c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V5h2c.55 0 1-.45 1-1s-.45-1-1-1zM5 7.5v1c0 .28.22.5.5.5s.5-.22.5-.5V8h2v7h-.5c-.28 0-.5.22-.5.5s.22.5.5.5h2c.28 0 .5-.22.5-.5s-.22-.5-.5-.5H9V8h2v.5c0 .28.22.5.5.5s.5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-6c-.28 0-.5.22-.5.5zM16 9c-.55 0-1 .45-1 1v8H2V5h8c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1h15c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1z'
          ],
          ninja: [
            'M20 6s-2.98 2.43-6.12 2.19C13.52 5.31 12.05 0 6 0c0 0 2.41 2.99 2.16 6.12C5.27 6.49 0 7.97 0 14c0 0 2.98-2.43 6.11-2.19C6.47 14.69 7.94 20 14 20c0 0-2.42-2.99-2.16-6.13C14.73 13.51 20 12.02 20 6zm-10 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z'
          ],
          'not-equal-to': [
            'M9.487 7l.532-3.196a1 1 0 011.962.392L11.513 7H16a1 1 0 010 2h-4.82l-.333 2H16a1 1 0 010 2h-5.487l-.532 3.196a1 1 0 01-1.962-.392L8.487 13H4a1 1 0 010-2h4.82l.333-2H4a1 1 0 110-2h5.487z'
          ],
          notifications: [
            'M10 20c1.1 0 2-.9 2-2H8c0 1.1.9 2 2 2zm7-5c-.55 0-1-.45-1-1V8c0-2.61-1.67-4.81-4-5.63V2c0-1.1-.9-2-2-2S8 .9 8 2v.37C5.67 3.19 4 5.39 4 8v6c0 .55-.45 1-1 1s-1 .45-1 1 .45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'notifications-updated': [
            'M10 20c1.1 0 2-.9 2-2H8c0 1.1.9 2 2 2zm2-17.834A2.994 2.994 0 008 4.99c0 .808.319 1.557.876 2.114l2.97 2.99a2.99 2.99 0 004.154.072V14c0 .55.45 1 1 1s1 .45 1 1-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1 1-.45 1-1V8c0-2.61 1.67-4.81 4-5.63V2c0-1.1.9-2 2-2s2 .9 2 2v.166zm1.26 6.514l-2.97-2.99a.973.973 0 01-.29-.7c0-.55.44-1 .99-1 .27 0 .52.11.7.29l2.28 2.28 4.27-4.27a.99.99 0 01.7-.29c.55 0 1 .45 1 1 0 .28-.11.53-.3.7l-4.98 4.98a.99.99 0 01-1.4 0z'
          ],
          'numbered-list': [
            'M1.74 9.01h1.27V1h-.95c-.04.24-.12.45-.26.62-.13.17-.29.3-.47.41-.19.11-.4.18-.63.23-.23.04-.46.07-.71.07v1.03h1.75v5.65zm.43 7.93c.18-.14.37-.28.58-.43.21-.14.42-.29.63-.45.21-.16.41-.33.61-.5.2-.18.37-.38.52-.59.15-.21.28-.45.37-.7.09-.25.14-.54.14-.85 0-.25-.04-.52-.12-.8-.08-.28-.21-.54-.39-.78-.19-.24-.43-.44-.73-.59-.3-.17-.68-.25-1.12-.25-.41 0-.77.08-1.08.23-.32.16-.58.37-.8.64-.22.27-.38.59-.49.96-.11.37-.16.77-.16 1.21h1.19c.01-.28.03-.53.08-.77s.12-.45.21-.62c.09-.18.22-.31.38-.42.16-.1.35-.15.59-.15.26 0 .47.05.63.14.16.09.29.21.38.35.09.14.15.29.18.45.03.16.05.31.05.45-.01.31-.08.58-.22.81-.14.24-.32.45-.53.66-.22.2-.45.39-.71.57-.26.18-.51.36-.74.54-.5.36-.89.78-1.17 1.27-.3.47-.45 1.04-.46 1.69H5v-1.14H1.43c.05-.17.14-.33.27-.49.13-.15.29-.3.47-.44zM18 4.02H8c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1c0-.56-.45-1-1-1zm0 9H8c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1c0-.56-.45-1-1-1z'
          ],
          numerical: [
            'M2.39 5.75c-.17.21-.38.39-.63.52s-.52.23-.83.29c-.3.05-.61.08-.93.08v1.24h2.49V15h1.49V4.98H2.73c-.05.31-.17.57-.34.77zm17.2 4.71c-.27-.44-.65-.71-1.14-.82v-.02c.42-.16.72-.43.92-.79.2-.36.29-.79.29-1.27 0-.42-.08-.8-.23-1.12-.15-.33-.36-.59-.62-.8-.26-.21-.55-.37-.87-.48-.32-.11-.65-.16-.98-.16-.43 0-.82.08-1.16.25-.34.16-.63.39-.87.69-.24.29-.43.64-.57 1.04-.14.4-.22.83-.23 1.3h1.39c-.01-.25.02-.49.07-.72.06-.23.14-.44.26-.63s.27-.34.45-.45c.18-.11.39-.17.63-.17.39 0 .71.12.96.37s.37.58.37.99c0 .29-.05.54-.16.74-.11.2-.25.36-.43.47-.18.11-.38.19-.61.24-.23.05-.46.06-.68.05v1.17c.28-.01.55 0 .81.03s.5.1.71.21c.21.11.38.28.51.5.13.22.2.52.2.89 0 .55-.16.97-.47 1.27-.31.3-.7.45-1.17.45-.55 0-.95-.19-1.23-.58-.27-.39-.4-.88-.38-1.46h-1.39c.01.5.08.96.21 1.38.13.41.32.77.57 1.06.25.29.56.52.93.68.37.16.8.24 1.3.24.41 0 .79-.07 1.16-.21.37-.14.69-.33.96-.58.28-.25.5-.56.66-.92a3 3 0 00.24-1.23c0-.64-.14-1.17-.41-1.61zM8.58 12.41c.21-.18.45-.36.7-.53.25-.18.5-.36.75-.56.25-.2.49-.41.73-.63.23-.22.44-.47.63-.74.18-.27.33-.56.44-.88.11-.32.16-.67.16-1.07 0-.32-.05-.65-.14-1-.09-.35-.25-.68-.47-.97-.22-.3-.51-.55-.87-.74-.36-.2-.81-.29-1.35-.29-.49 0-.93.1-1.3.29-.37.18-.69.44-.95.78-.26.33-.45.73-.58 1.2-.13.46-.2.96-.2 1.5h1.43c.01-.35.04-.67.09-.97.05-.3.14-.56.25-.78.11-.22.26-.39.45-.52s.43-.19.71-.19c.31 0 .56.06.75.18.19.12.34.26.45.43.11.17.18.36.22.56.04.2.06.39.06.57-.01.38-.1.72-.26 1.02-.15.3-.37.57-.63.83-.26.25-.54.49-.85.71-.31.22-.61.45-.89.68-.6.45-1.06.98-1.41 1.58-.35.61-.52 1.32-.53 2.13h6.01v-1.43H7.69c.06-.21.17-.42.33-.61s.34-.38.56-.55z'
          ],
          office: [
            'M19 6h-5V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h4v-6h4v6h10c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zM6 12H2V8h4v4zm0-6H2V2h4v4zm6 6H8V8h4v4zm0-6H8V2h4v4zm6 11h-4v-3h4v3zm0-5h-4V8h4v4z'
          ],
          offline: [
            'M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zM7 18l2-7H5l8-9-2 7h4l-8 9z'
          ],
          'oil-field': [
            'M19 17.99h-1.36l-4.35-9.57 2.91-.86 1.66 4.1c.11.27.43.4.72.31.12-.04.22-.11.28-.2.06-.11 1.47-2.08 1.05-5.6C19.79 5.12 19.3 0 16.01 0 14.89.01 13.99.83 14 1.84c0 .19.04.38.1.56l1.34 3.31L.72 10.03v.02c-.41.12-.72.49-.72.94 0 .55.45 1 1 1 .1 0 .19-.03.28-.06v.02l2-.59 1.47 6.63H3c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1zM5.2 10.8l3.95-1.16-2.83 6.22L5.2 10.8zm2.35 7.19l3.95-8.68 3.95 8.68h-7.9z'
          ],
          'one-column': [
            'M14.94 0h-4c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-8 6c-.28 0-.53.11-.71.29l-3 3c-.18.18-.29.43-.29.71s.11.53.29.71l3 3A1.003 1.003 0 007.94 13V7c0-.55-.45-1-1-1z'
          ],
          outdated: [
            'M10 0c5.52 0 10 4.48 10 10s-4.48 10-10 10S0 15.52 0 10c0-.55.45-1 1-1s1 .45 1 1c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8C7.47 2 5.22 3.17 3.76 5H5c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1s1 .45 1 1v2.05C3.82 1.6 6.71 0 10 0zm1 16H9v-2h2v2zm0-3H9V4h2v9z'
          ],
          'page-layout': [
            'M19 1H1c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM7 17H2V8h5v9zm11 0H8V8h10v9zm0-10H2V3h16v4z'
          ],
          'panel-stats': [
            'M1 1h18a1 1 0 011 1v15a1 1 0 01-1 1H1a1 1 0 01-1-1V2a1 1 0 011-1zm1 2v13h16V3H2zm9 0h1v13h-1V3zm2 7h3.952v1H13v-1zm0 2h3.952v1H13v-1zm0 2h3.952v1H13v-1zm0-6h3.952v1H13V8zm0-2h3.952v1H13V6zm0-2h3.952v1H13V4z'
          ],
          'panel-table': [
            'M19 1H1c-.6 0-1 .4-1 1v15c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1zm-9 11H7V9h3v3zm0-4H7V5h3v3zm-8 8V3h4v13H2zm5 0v-3h3v3H7zm11 0h-7v-3h7v3zm0-4h-7V9h7v3zm0-4h-7V5h7v3z'
          ],
          paperclip: [
            'M18.35 2.67A5.664 5.664 0 0014.33 1c-1.44 0-2.89.56-3.99 1.67l-9.16 9.27C.4 12.73 0 13.78 0 14.83s.39 2.1 1.18 2.9c.78.79 1.82 1.18 2.85 1.18 1.04 0 2.07-.39 2.87-1.2l9.14-9.27c.96-.96.96-2.5.02-3.45-.94-.95-2.49-.96-3.44 0l-7.59 7.69c-.31.32-.3.83.01 1.14.31.31.81.31 1.13.02l7.59-7.69c.31-.31.84-.31 1.13-.02.31.31.31.85 0 1.16l-9.14 9.27c-.93.95-2.54.93-3.45.02-.94-.95-.92-2.55.02-3.49l9.16-9.25c1.55-1.56 4.18-1.59 5.72-.03 1.56 1.57 1.55 4.26 0 5.82l-8.89 9.02c-.3.31-.3.81.01 1.11.3.3.79.31 1.1.01v.01l8.91-9.02A5.645 5.645 0 0020 6.73c0-1.48-.55-2.94-1.65-4.06z'
          ],
          paragraph: [
            'M16.5 1H7C4.2 1 2 3.2 2 6s2.2 5 5 5v6.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V4h2v13.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V4h1.5c.8 0 1.5-.7 1.5-1.5S17.3 1 16.5 1z'
          ],
          path: [
            'M18 0H2C.9 0 0 .9 0 2s.9 2 2 2h7v4H4c-1.1 0-2 .9-2 2s.9 2 2 2h5v4H6c-1.1 0-2 .9-2 2s.9 2 2 2h8c1.1 0 2-.9 2-2s-.9-2-2-2h-3v-4h5c1.1 0 2-.9 2-2s-.9-2-2-2h-5V4h7c1.1 0 2-.9 2-2s-.9-2-2-2z'
          ],
          'path-search': [
            'M4 7c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm15 11.69l-5-2.5v-3.63c-.32.11-.66.22-1 .29v3.32l-6 2.57v-7.25c-.36-.27-.69-.57-1-.9v8.1l-5-2.5V10c.55 0 1-.45 1-1s-.45-1-1-1V1.31l3.43 1.71c.11-.31.24-.62.39-.92L.72.05A.545.545 0 00.5 0C.22 0 0 .22 0 .5v16c0 .2.12.36.28.44l6 3c.07.04.14.06.22.06.07 0 .14-.01.2-.04l6.79-2.91 5.79 2.9c.07.03.14.05.22.05.28 0 .5-.22.5-.5v-4.21c-.31.13-.64.21-1 .21v3.19zM10 5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3-1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6.72-.94l-1.43-.72c.2.43.36.89.48 1.36l.23.11V5.5c-.55 0-1 .45-1 1s.45 1 1 1v1.96l1 1V3.5c0-.2-.12-.36-.28-.44zm-3.69 5.56c.14-.21.27-.42.38-.65.02-.04.04-.07.05-.11.11-.22.2-.45.28-.69v-.01c.07-.24.13-.48.17-.73l.03-.17c.04-.25.06-.5.06-.76C17 2.46 14.54 0 11.5 0S6 2.46 6 5.5 8.46 11 11.5 11c.26 0 .51-.02.76-.06l.17-.03c.25-.04.49-.1.73-.17h.01c.24-.08.47-.17.69-.28.04-.02.07-.03.11-.05.23-.11.44-.24.65-.38l.18.18 3.5 3.5c.17.18.42.29.7.29a1.003 1.003 0 00.71-1.71l-3.68-3.67zm-4.53.88c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z'
          ],
          pause: [
            'M7 3H4c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm9 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z'
          ],
          people: [
            'M16.94 17a4.92 4.92 0 00-.33-1.06c-.45-.97-1.37-1.52-3.24-2.3-.17-.07-.76-.31-.77-.32-.1-.04-.2-.08-.28-.12.05-.14.04-.29.06-.45 0-.05.01-.11.01-.16-.25-.21-.47-.48-.65-.79.22-.34.41-.71.56-1.12l.04-.11c-.01.02-.01.02-.02.08l.06-.15c.36-.26.6-.67.72-1.13.18-.37.29-.82.25-1.3-.05-.5-.21-.92-.47-1.22-.02-.53-.06-1.11-.12-1.59.38-.17.83-.26 1.24-.26.59 0 1.26.19 1.73.55.46.35.8.85.97 1.4.04.13.07.25.08.38.08.45.13 1.14.13 1.61v.07c.16.07.31.24.35.62.02.29-.09.55-.15.65-.05.26-.2.53-.46.59-.03.12-.07.25-.11.36-.01.01-.01.04-.01.04-.2.53-.51 1-.89 1.34 0 .06 0 .12.01.17.04.41-.11.71 1 1.19 1.1.5 2.77 1.01 3.13 1.79.34.79.2 1.25.2 1.25h-3.04zm-5.42-3.06c1.47.66 3.7 1.35 4.18 2.39.45 1.05.27 1.67.27 1.67H.04s-.19-.62.27-1.67c.46-1.05 2.68-1.75 4.16-2.4 1.48-.65 1.33-1.05 1.38-1.59 0-.07.01-.14.01-.21-.52-.45-.95-1.08-1.22-1.8l-.01-.01c0-.01-.01-.02-.01-.03-.07-.15-.12-.32-.16-.49-.34-.06-.54-.43-.62-.78-.08-.14-.24-.48-.2-.87.05-.51.26-.74.49-.83v-.08c0-.64.05-1.55.17-2.15a3.648 3.648 0 011.4-2.36C6.32 2.25 7.21 2 8 2s1.68.25 2.31.73a3.63 3.63 0 011.4 2.36c.11.6.17 1.52.17 2.15v.09c.22.09.42.32.47.82.03.39-.12.73-.2.87-.07.34-.27.71-.61.78-.04.16-.09.33-.15.48-.01.01-.02.05-.02.05-.27.71-.68 1.33-1.19 1.78 0 .08 0 .16.01.23.05.55-.15.95 1.33 1.6z'
          ],
          percentage: [
            'M15 10c-1.66 0-3 1.34-3 3v2c0 1.66 1.34 3 3 3s3-1.34 3-3v-2c0-1.66-1.34-3-3-3zm1 5c0 .55-.45 1-1 1s-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2zM8 7V5c0-1.66-1.34-3-3-3S2 3.34 2 5v2c0 1.66 1.34 3 3 3s3-1.34 3-3zM4 7V5c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1zm11-4a1.003 1.003 0 00-1.88-.48L5.14 16.49a1.003 1.003 0 101.74.99l7.99-13.97c.08-.15.13-.32.13-.51z'
          ],
          person: [
            'M19.61 17.91c-.57-1.32-3.35-2.19-5.19-3.01-1.85-.82-1.59-1.31-1.66-1.99-.01-.09-.01-.19-.02-.29.63-.56 1.15-1.33 1.49-2.22 0 0 .02-.05.02-.06.07-.19.13-.39.19-.6.42-.09.67-.55.76-.98.1-.17.29-.6.25-1.08-.06-.62-.31-.91-.59-1.03v-.11c0-.79-.07-1.93-.22-2.68A4.55 4.55 0 0012.9.92C12.11.32 11 0 10.01 0s-2.1.32-2.89.92a4.55 4.55 0 00-1.74 2.94c-.14.75-.22 1.89-.22 2.68v.1c-.29.11-.55.4-.61 1.04-.04.48.15.91.25 1.08.1.44.35.91.79.98.05.21.12.41.19.6 0 .01.01.03.01.04l.01.02c.34.91.87 1.69 1.52 2.25 0 .09-.01.18-.02.26-.07.68.13 1.17-1.72 1.99S.96 16.59.39 17.91C-.18 19.23.05 20 .05 20h19.9s.23-.77-.34-2.09z'
          ],
          phone: [
            'M19.91 15.51c-.08-.08-4.21-2.5-4.35-2.57a.876.876 0 00-.4-.1c-.19 0-.42.13-.71.4-.28.27-1.17 1.49-1.43 1.76s-.48.4-.65.4c-.08 0-.19-.02-.32-.07s-1.45-.73-4.2-3.15-3.11-4-3.13-4.44c0-.17.13-.39.4-.65.28-.25.57-.51.89-.74.32-.24.61-.5.88-.78s.4-.52.4-.71c0-.13-.03-.27-.1-.4C7.12 4.32 4.62.19 4.53.1c-.19-.18-.92-.1-1.29.1C.25 1.82 0 4 .05 4.86c.05.89.61 5.58 5.2 9.93 5.7 5.41 9.66 5.2 9.92 5.2.87 0 3.52-.48 4.65-3.19.16-.38.31-1.07.09-1.29z'
          ],
          'pie-chart': [
            'M9 .98c-4.5.5-8 4.31-8 8.94 0 4.97 4.03 9.04 9 9.04 4.63 0 8.44-3.96 8.94-7.96H9V.98z',
            'M10-.08V10h10C20 4 15.52-.08 10-.08z'
          ],
          pin: [
            'M11.77 1.16c-.81.81-.74 2.28.02 3.76L6.1 8.71c-2.17-1.46-4.12-2-4.94-1.18l4.95 4.95-4.95 6.36 6.36-4.95 4.95 4.95c.82-.82.27-2.77-1.19-4.94l3.8-5.69c1.47.76 2.94.84 3.76.02l-7.07-7.07z'
          ],
          pivot: [
            'M5.83 9.75L.29 15.29a1.003 1.003 0 001.42 1.42l5.54-5.54c-.57-.37-1.05-.85-1.42-1.42zM19 11c-.55 0-1 .45-1 1v1.59l-3.83-3.83c-.37.56-.85 1.04-1.41 1.41L16.59 15H15c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm-5-4c0-2.21-1.79-4-4-4S6 4.79 6 7s1.79 4 4 4 4-1.79 4-4zm-4 2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z'
          ],
          'pivot-table': [
            'M3 5H1c-.55 0-1 .45-1 1v13c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm0-5H1C.45 0 0 .45 0 1v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm13.71 5.29C16.53 5.11 16.28 5 16 5s-.53.11-.71.29l-3 3a1.003 1.003 0 001.42 1.42L15 8.41V11c0 2.21-1.79 4-4 4H8.41l1.29-1.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-3 3c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l3 3a1.003 1.003 0 001.42-1.42L8.41 17H11c3.31 0 6-2.69 6-6V8.41l1.29 1.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-3-3zM19 0H6c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h13c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z'
          ],
          play: [
            'M16 10c0-.36-.2-.67-.49-.84l.01-.01-10-6-.01.01A.991.991 0 005 3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1 .19 0 .36-.07.51-.16l.01.01 10-6-.01-.01c.29-.17.49-.48.49-.84z'
          ],
          plus: [
            'M16 9h-5V4c0-.55-.45-1-1-1s-1 .45-1 1v5H4c-.55 0-1 .45-1 1s.45 1 1 1h5v5c0 .55.45 1 1 1s1-.45 1-1v-5h5c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'polygon-filter': [
            'M18 7c-.27 0-.52.05-.75.15l-6.28-4.88c.01-.09.03-.18.03-.27 0-1.1-.9-2-2-2S7 .9 7 2c0 .06.01.12.02.19l-4.19 3C2.57 5.07 2.29 5 2 5 .9 5 0 5.9 0 7c0 .74.4 1.38 1 1.72v7.55c-.6.35-1 .99-1 1.73 0 1.1.9 2 2 2 .74 0 1.38-.4 1.72-1h7.55c.35.6.98 1 1.72 1 1.1 0 2-.9 2-2 0-.37-.11-.72-.29-1.02L18.03 11A2 2 0 0018 7zm-5.03 9c-.72.01-1.35.41-1.69 1H3.72c-.17-.3-.42-.55-.72-.72V8.72c.6-.34 1-.98 1-1.72 0-.06-.01-.12-.02-.19l4.19-3c.26.12.54.19.83.19.27 0 .52-.05.75-.15l6.28 4.88c-.01.09-.03.18-.03.27 0 .37.11.72.29 1.02L12.97 16z'
          ],
          power: [
            'M10 10c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1S9 .45 9 1v8c0 .55.45 1 1 1zm3-7.45v2.16c2.36 1.12 4 3.5 4 6.29 0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.79 1.64-5.17 4-6.29V2.55C3.51 3.79 1 7.09 1 11a9 9 0 0018 0c0-3.91-2.51-7.21-6-8.45z'
          ],
          'predictive-analysis': [
            'M20 8.01c0-1.26-.61-2.43-1.61-3.12C17.86 2.5 15.8.79 13.4.79c-.58 0-1.14.1-1.69.29A3.533 3.533 0 009.17 0C8.05 0 7 .55 6.32 1.45c-.15-.02-.3-.03-.45-.03-1.63 0-3.03 1.12-3.46 2.71C.97 4.65 0 6.05 0 7.66c0 .48.09.95.26 1.4-.17.44-.26.91-.26 1.39 0 1.38.72 2.64 1.89 3.29.67.7 1.59 1.09 2.54 1.09.61 0 1.19-.15 1.71-.45.68.82 1.68 1.3 2.73 1.3.66 0 1.28-.18 1.83-.52.61.49 1.34.81 2.11.91 1.3 1.43 2.3 3.28 2.31 3.3 0 0 .35.61.33.61.96-.01 1.77-.2 1.64-1.3.01.02-.92-2.89-.92-2.89.52-.26.94-.69 1.21-1.23 1.12-.66 1.84-1.91 1.84-3.26 0-.3-.03-.6-.1-.89.57-.64.88-1.51.88-2.4zm-1.54 1.28l-.18-.2-.77-.84c-.33-.37-.67-1.17-.73-1.73 0 0-.13-1.25-.13-1.26-.06-.74-1.17-.73-1.13.14 0 .02.13 1.26.13 1.26.04.36.15.77.3 1.17-.08-.01-.15-.02-.22-.02 0 0-2.57-.12-2.57-.13-.73-.03-.89 1.22-.05 1.25l2.57.13c.53.03 1.29.37 1.61.72l.61.67.02.06c.1.27.14.55.14.83 0 .93-.51 1.77-1.34 2.18l-.2.1-.09.23c-.19.48-.6.82-1.1.93l-.67.14.87 2.75c-.48-.76-1.19-1.79-2.02-2.67l-.15-.16-.21-.02c-.51-.04-.99-.21-1.42-.48l1.7-1.48c.44-.39 1.04-.55 1.24-.49 0 0 .78.22.78.23.78.2 1.03-.92.29-1.21l-.78-.23c-.69-.2-1.67.22-2.24.72l-1.91 1.66-.39.32c-.44.36-.93.55-1.5.55-.8 0-1.54-.41-1.97-1.07v-1.88c0-.5.21-.98.34-1.07 0 0 .65-.43.64-.43.87-.69.21-1.57-.64-1.14 0-.01-.65.43-.65.43-.31.2-.54.56-.7.97-.13-.13-.28-.25-.43-.35 0 0-1.91-1.26-1.91-1.28-.81-.56-1.5.63-.61 1.11 0-.02 1.89 1.28 1.89 1.28.46.31.77.97.77 1.36v.84c-.43.24-.78.36-1.24.36-.67 0-1.31-.29-1.77-.79l-.07-.08-.09-.05a2.425 2.425 0 01-1.31-2.16c0-.38.09-.74.25-1.08l.15-.31-.14-.33c-.17-.34-.25-.7-.25-1.08 0-1.13.76-2.1 1.85-2.37l.39-.09.07-.43a2.41 2.41 0 012.39-2.05c.19 0 .39.02.58.07l.4.1.22-.38A2.41 2.41 0 019.17 1.3c.55 0 1.08.19 1.5.53l-.44.45-.01-.01-.31.31c-.41.35-.92.53-1.11.5 0 0-.84-.13-.84-.14-.83-.15-1.09 1.08-.18 1.29.01 0 .84.14.84.14.03 0 .06 0 .09.01-.14.46-.18.96-.12 1.4 0 0 .21 1.24.19 1.23.13.65 1.32.44 1.16-.22 0-.01-.19-1.23-.19-1.23-.07-.48.15-1.19.45-1.5l.48-.5c.07-.06.13-.12.19-.18l.93-.95c.5-.23 1.04-.34 1.59-.34 1.93 0 3.57 1.4 3.89 3.34l.05.31.26.15a2.445 2.445 0 01.87 3.4z'
          ],
          prescription: [
            'M13.95 10.23c.16-.18.22-.22.46-.22h1.48c.25 0 .47.08.59.33.1.2.09.41-.05.66l-2.71 3.58L16.88 19c.13.21.16.46.03.69-.12.21-.34.31-.57.31H14.7c-.31 0-.56-.17-.7-.44l-1.9-2.67-1.93 2.68c-.15.27-.42.43-.73.43H7.98c-.25 0-.47-.08-.59-.33-.1-.2-.09-.41.05-.66l3.09-4.35L6.26 9H5v4.32c0 .41-.3.69-.7.69H2.7c-.41 0-.7-.28-.7-.69V.69c0-.41.3-.69.7-.69h4.42c.71 0 1.36.1 1.94.3.59.2 1.11.49 1.54.87.44.38.78.84 1.02 1.39.24.54.36 1.14.36 1.78 0 1.01-.28 1.88-.84 2.6-.43.54-1.35 1.29-2 1.59l3.09 3.94 1.72-2.24zM6.71 6.04c.71 0 1.45-.16 1.81-.46.33-.28.5-.69.5-1.25s-.17-.97-.5-1.25c-.35-.3-1.1-.46-1.81-.46h-1.7v3.42h1.7z'
          ],
          presentation: [
            'M19 1h-8c0-.55-.45-1-1-1S9 .45 9 1H1c-.55 0-1 .45-1 1s.45 1 1 1h1v11c0 .55.45 1 1 1h4.59L4.3 18.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L9 16.41V19c0 .55.45 1 1 1s1-.45 1-1v-2.59l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L12.41 15H17c.55 0 1-.45 1-1V3h1c.55 0 1-.45 1-1s-.45-1-1-1zm-3 12H4V3h12v10z'
          ],
          print: [
            'M14 16H6v-4H4v5c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-5h-2v4zm2-13c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v1h12V3zm3 2H1c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h2v-3h14v3h2c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-1 4h-2V7h2v2z'
          ],
          projects: [
            'M18 4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v2h16V4zm-2-3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v1h12V1zm3 6H1c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm-5 7c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-2h1v2h6v-2h1v2z'
          ],
          properties: [
            'M2 15c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm5-4h12c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1zM2 1C.9 1 0 1.9 0 3s.9 2 2 2 2-.9 2-2-.9-2-2-2zm17 8H7c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1zm0 7H7c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          property: [
            'M3 5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm5-1h11c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zM3 15c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm16 1H8c-.55 0-1 .45-1 1s.45 1 1 1h11c.55 0 1-.45 1-1s-.45-1-1-1zm-1-8H9c-1.1 0-2 .9-2 2s.9 2 2 2h9c1.1 0 2-.9 2-2s-.9-2-2-2zM3 7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z'
          ],
          'publish-function': [
            'M7.01 10.11c.35-.64.72-1.68 1.09-3.11l.8-3.03h.96l.24-.77h-.99c.28-1.11.66-1.92 1.12-2.43.28-.32.56-.48.83-.48.05 0 .1.02.13.05.03.03.05.07.05.12 0 .04-.04.13-.11.25-.08.12-.11.24-.11.35 0 .15.06.28.18.39.12.11.27.16.45.16.2 0 .36-.07.49-.2s.2-.31.2-.54c0-.26-.1-.47-.3-.63-.2-.16-.52-.24-.96-.24-.68 0-1.3.19-1.86.58-.55.38-1.08 1.02-1.58 1.91-.17.3-.34.5-.49.59-.15.08-.4.13-.74.12l-.23.77h.95L5.74 9.21c-.23.86-.39 1.39-.47 1.59-.12.29-.3.54-.54.75-.1.08-.21.12-.35.12-.04 0-.07-.01-.1-.03l-.03-.04c0-.02.03-.07.1-.13.07-.07.1-.17.1-.31 0-.15-.05-.28-.16-.38-.11-.1-.27-.15-.47-.15-.25 0-.44.07-.59.2-.15.12-.23.28-.23.46 0 .19.09.36.27.5.19.14.47.21.86.21.61 0 1.16-.15 1.63-.46.48-.31.89-.79 1.25-1.43zm3.7 1.18c-.18-.18-.43-.29-.71-.29s-.53.11-.71.29l-3 3a1.003 1.003 0 001.42 1.42L9 14.41V19c0 .55.45 1 1 1s1-.45 1-1v-4.59l1.29 1.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-3-3zm4.15-6.78c.17-.13.36-.2.55-.2.07 0 .2.03.39.08s.36.08.5.08c.2 0 .37-.07.5-.2.13-.14.2-.31.2-.52 0-.22-.07-.4-.2-.53s-.33-.2-.58-.2c-.22 0-.43.05-.63.15-.2.1-.45.32-.75.67-.23.25-.56.7-1.01 1.33a6.52 6.52 0 00-.91-2.15l-2.38.39-.05.25c.18-.03.33-.05.45-.05.24 0 .43.1.59.3.25.31.59 1.24 1.02 2.79-.34.44-.58.73-.7.87-.21.22-.38.36-.52.43-.1.05-.22.08-.35.08-.1 0-.26-.05-.49-.16a1.01 1.01 0 00-.42-.11c-.23 0-.42.07-.57.22-.17.14-.24.32-.24.55 0 .21.07.38.21.51.14.13.33.2.56.2.23 0 .44-.05.64-.14.2-.09.45-.29.75-.59s.72-.78 1.25-1.43c.2.62.38 1.07.53 1.35.15.28.32.49.52.61.19.12.44.19.73.19.28 0 .57-.1.86-.3.38-.25.77-.69 1.17-1.31l-.25-.14c-.27.37-.48.6-.61.69-.09.06-.19.09-.31.09-.14 0-.28-.09-.42-.26-.23-.29-.54-1.09-.93-2.4.37-.58.66-.96.9-1.14z'
          ],
          pulse: [
            'M19 10h-2.38L14.9 6.55h-.01c-.17-.32-.5-.55-.89-.55-.43 0-.79.28-.93.66h-.01l-2.75 7.57L7.98 1.82h-.02A.978.978 0 007 1c-.44 0-.8.29-.94.69h-.01L3.28 10H1c-.55 0-1 .45-1 1s.45 1 1 1h3c.44 0 .8-.29.94-.69h.01l1.78-5.34 2.29 12.21h.02c.08.46.47.82.96.82.43 0 .79-.28.93-.66h.01l3.21-8.82.96 1.92h.01c.16.33.49.56.88.56h3c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          random: [
            'M14.47 5h2.12L15.3 6.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-3-3a1.003 1.003 0 00-1.42 1.42L16.59 3H14c-.31 0-.57.15-.76.37l-.01-.01-2.93 3.52 1.3 1.56L14.47 5zm2.24 7.29a1.003 1.003 0 00-1.42 1.42l1.3 1.29h-2.12L4.77 3.36l-.01.01A.998.998 0 004 3H1c-.55 0-1 .45-1 1s.45 1 1 1h2.53l9.7 11.64.01-.01c.19.22.45.37.76.37h2.59l-1.29 1.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-3-3zM3.53 15H1c-.55 0-1 .45-1 1s.45 1 1 1h3c.31 0 .57-.15.76-.37l.01.01 2.93-3.52-1.3-1.56L3.53 15z'
          ],
          record: ['M10 3a7 7 0 100 14 7 7 0 100-14z'],
          redo: [
            'M19.71 5.29l-4-4a1.003 1.003 0 00-1.42 1.42L16.59 5H6c-3.31 0-6 2.69-6 6s2.69 6 6 6h5v-2H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h10.59L14.3 9.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71zM15 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
          ],
          refresh: [
            'M19 1c-.55 0-1 .45-1 1v2.06C16.18 1.61 13.29 0 10 0 4.48 0 0 4.48 0 10c0 .55.45 1 1 1s1-.45 1-1c0-4.42 3.58-8 8-8 2.52 0 4.76 1.18 6.22 3H15c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 8c-.55 0-1 .45-1 1 0 4.42-3.58 8-8 8-2.52 0-4.76-1.18-6.22-3H5c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1v-2.06C3.82 18.39 6.71 20 10 20c5.52 0 10-4.48 10-10 0-.55-.45-1-1-1z'
          ],
          'regression-chart': [
            'M19 16H3.1L19.31 3.39l-.61-.79L2 15.59V3c0-.55-.45-1-1-1s-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zm-9-9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-5 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm10-2c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm-5 4c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z'
          ],
          remove: [
            'M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm5-9H5c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'remove-column': [
            'M19 0H5c-.55 0-1 .45-1 1v4h2V2h5v16H6v-3H4v4c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 18h-5V2h5v16zM6.29 13.71a1.003 1.003 0 001.42-1.42L5.41 10 7.7 7.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L4 8.59l-2.29-2.3A1.003 1.003 0 00.29 7.71L2.59 10 .3 12.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L4 11.41l2.29 2.3z'
          ],
          'remove-column-left': [
            'M4 11h6c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM19 0H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-7 18H2V2h10v16zm6 0h-5V2h5v16z'
          ],
          'remove-column-right': [
            'M19 0H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM7 18H2V2h5v16zm11 0H8V2h10v16zm-8-7h6c.55 0 1-.45 1-1s-.45-1-1-1h-6c-.55 0-1 .45-1 1s.45 1 1 1z'
          ],
          'remove-row-bottom': [
            'M7 14h6c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1zM19 0H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 18H2V8h16v10zm0-11H2V2h16v5z'
          ],
          'remove-row-top': [
            'M7 8h6c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1zm12-8H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 18H2v-5h16v5zm0-6H2V2h16v10z'
          ],
          repeat: [
            'M14 6c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1v2.05C16.18 1.6 13.29 0 10 0 4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10c0-.55-.45-1-1-1s-1 .45-1 1c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8c2.53 0 4.77 1.17 6.24 3H15c-.55 0-1 .45-1 1z'
          ],
          reset: [
            'M6 6c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1s1 .45 1 1v2.05C3.82 1.6 6.71 0 10 0c5.52 0 10 4.48 10 10s-4.48 10-10 10S0 15.52 0 10c0-.55.45-1 1-1s1 .45 1 1c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8C7.47 2 5.23 3.17 3.76 5H5c.55 0 1 .45 1 1z'
          ],
          resolve: [
            'M8.7 4.7C7.9 4.2 7 4 6 4c-3.3 0-6 2.7-6 6s2.7 6 6 6c1 0 1.9-.2 2.7-.7C7.3 14 6.5 12.1 6.5 10s.9-4 2.2-5.3zM14 4c-1 0-1.9.2-2.7.7 1.4 1.4 2.2 3.2 2.2 5.3s-.9 4-2.2 5.3c.8.5 1.7.7 2.7.7 3.3 0 6-2.7 6-6s-2.7-6-6-6zm-4 1.5C8.8 6.7 8 8.2 8 10s.8 3.3 2 4.4c1.2-1.1 2-2.7 2-4.5s-.8-3.3-2-4.4z'
          ],
          rig: [
            'M7 4.2C7 5.75 8.34 7 10 7s3-1.46 3-2.8C13 1.45 10.94 0 10 0H6c0 2.74 3.76 1.96 1 4.2zm11.71 14.09L13 12.59V9.01c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v3.58l-5.71 5.7a1.003 1.003 0 001.42 1.42L7 15.42V19c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3.58l4.29 4.29a1.003 1.003 0 001.42-1.42zM10.21 8c.01 0 .01.01 0 0 .01.01.01 0 0 0z'
          ],
          'right-join': [
            'M8.7 4.7C7.4 6 6.5 7.9 6.5 10s.8 4 2.2 5.3c-.8.5-1.7.7-2.7.7-3.3 0-6-2.7-6-6s2.7-6 6-6c1 0 1.9.2 2.7.7zm-3.34 9.25c-.55-1.2-.86-2.54-.86-3.95s.31-2.75.86-3.95a4.001 4.001 0 000 7.9zM14 4c3.3 0 6 2.7 6 6s-2.7 6-6 6c-1 0-1.9-.2-2.7-.7 1.3-1.3 2.2-3.2 2.2-5.3s-.8-3.9-2.2-5.3C12.1 4.2 13 4 14 4zm-4 1.5C8.8 6.7 8 8.2 8 10s.8 3.3 2 4.4c1.2-1.1 2-2.7 2-4.5s-.8-3.3-2-4.4z'
          ],
          ring: [
            'M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z'
          ],
          'rotate-document': [
            'M8.71 6.29A.997.997 0 008 6H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h9c.55 0 1-.45 1-1v-8c0-.28-.11-.53-.29-.71l-4-4zM11 18H4V8h3v3c0 .55.45 1 1 1h3v6zm3-16h-1.59l.29-.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-2 2C9.11 2.47 9 2.72 9 3c0 .28.11.53.29.71l2 2a1.003 1.003 0 001.42-1.42l-.3-.29H14c1.1 0 2 .9 2 2v3c0 .55.45 1 1 1s1-.45 1-1V6c0-2.21-1.79-4-4-4z'
          ],
          'rotate-page': [
            'M14 2h-1.59l.29-.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-2 2C9.11 2.47 9 2.72 9 3c0 .28.11.53.29.71l2 2a1.003 1.003 0 001.42-1.42l-.3-.29H14c1.1 0 2 .9 2 2v3c0 .55.45 1 1 1s1-.45 1-1V6c0-2.21-1.79-4-4-4zm-2 5H3c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm-1 11H4V9h7v9z'
          ],
          route: [
            'M14.028 6.016c.146.275.31.57.485.872.304.524.628 1.047.952 1.545l.118.178-.208-.006-.577-.005c-2.093.004-2.841.303-2.841.895 0 .069.271.248 1.245.567l1.008.313c2.671.831 3.99 1.827 3.99 4.167 0 2.76-1.928 4.059-4.832 4.376-.782.085-1.52.098-2.452.066l-1.15-.046H6.221l.535-.811a67.46 67.46 0 001.122-1.787h2.04l.686.03c1.028.046 1.77.043 2.523-.039 1.832-.2 2.673-.767 2.673-1.789 0-.69-.483-1.09-1.992-1.585l-.83-.257c-1.192-.364-2.037-.7-2.59-1.165.399-1 .612-1.844.612-2.538a6.018 6.018 0 00-.382-2.098c.745-.573 1.884-.822 3.41-.883zM5 4.2c2.648 0 4.791 2.151 4.8 4.797C9.8 11.652 5 18.6 5 18.6l-.5-.744C3.273 15.993.2 11.121.2 8.997A4.802 4.802 0 015 4.2zm0 2.4a2.4 2.4 0 10.002 4.802A2.4 2.4 0 005 6.6zM17 .333a2.671 2.671 0 012.667 2.665C19.667 4.473 17 8.333 17 8.333l-.391-.587c-.741-1.137-2.276-3.629-2.276-4.748A2.668 2.668 0 0117 .333z'
          ],
          satellite: [
            'M9 18c.6 0 1 .4 1 1s-.4 1-1 1c-5 0-9-4-9-9 0-.6.4-1 1-1s1 .4 1 1c0 3.9 3.1 7 7 7zm0-4c.6 0 1 .4 1 1s-.4 1-1 1c-2.8 0-5-2.2-5-5 0-.6.4-1 1-1s1 .4 1 1c0 1.7 1.3 3 3 3zm5.7-3.7c.4-.4 1-.4 1.4 0l3.6 3.6c.4.4.4 1 0 1.4l-1.4 1.4c-.4.4-1 .4-1.4 0l-3.6-3.6c-.4-.4-.4-1 0-1.4l1.4-1.4zM4.7.3c.4-.4 1-.4 1.4 0l3.6 3.6c.4.4.4 1 0 1.4L8.3 6.7c-.4.4-1 .4-1.4 0L3.3 3.1c-.4-.4-.4-1 0-1.4L4.7.3zm11.1 1c.4-.4 1-.4 1.4 0l1.6 1.6c.4.4.4 1 0 1.4l-6.5 6.5c-.4.4-1 .4-1.4 0L9.3 9.2c-.4-.4-.4-1 0-1.4l6.5-6.5zM9 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z'
          ],
          saved: [
            'M12 0H4c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h13c.55 0 1-.45 1-1V6l-6-6zm4 18H5V2h6v5h5v11zm-8.29-6.71a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29.32 0 .59-.16.77-.38l.01.01 4-5-.01-.01c.14-.18.23-.38.23-.62 0-.55-.45-1-1-1-.32 0-.59.16-.77.38l-.01-.01-3.3 4.13-2.21-2.21z'
          ],
          'scatter-plot': [
            'M9 9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm5 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4-5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1 10H2V3c0-.55-.45-1-1-1s-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zM5 15c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z'
          ],
          search: [
            'M19.56 17.44l-4.94-4.94A8.004 8.004 0 0016 8c0-4.42-3.58-8-8-8S0 3.58 0 8s3.58 8 8 8c1.67 0 3.21-.51 4.5-1.38l4.94 4.94a1.498 1.498 0 102.12-2.12zM8 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z'
          ],
          'search-around': [
            'M9.9 6.9a3 3 0 100 6 3 3 0 100-6zM3 14c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM3 0C1.3 0 0 1.3 0 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM17 14c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM17 0c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM10 10L5 5',
            'M5.379 4.671l5.02 5.02-.707.708-5.02-5.02zM10 10l5-5',
            'M14.621 4.671l.707.708-5.02 5.02-.707-.707z',
            'M10 10l5 5M10.379 9.671l5.02 5.02-.707.708-5.02-5.02z',
            'M10 10l-5 5M9.621 9.671l.707.708-5.02 5.02-.707-.707z'
          ],
          'search-template': [
            'M13 8H5c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1zm0 3H5c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1zm0-6H5c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1zm6.56 12.44l-3.23-3.23A8.939 8.939 0 0018 9a9 9 0 10-9 9c1.94 0 3.74-.62 5.21-1.67l3.23 3.23a1.498 1.498 0 102.12-2.12zM9 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z'
          ],
          'search-text': [
            'M19.56 17.44l-3.23-3.23A8.939 8.939 0 0018 9a9 9 0 10-9 9c1.94 0 3.74-.62 5.21-1.67l3.23 3.23a1.498 1.498 0 102.12-2.12zM9 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm3.5-11h-7c-.28 0-.5.22-.5.5v2c0 .28.22.5.5.5s.5-.22.5-.5V7h2v6h-.5c-.28 0-.5.22-.5.5s.22.5.5.5h3c.28 0 .5-.22.5-.5s-.22-.5-.5-.5H10V7h2v.5c0 .28.22.5.5.5s.5-.22.5-.5v-2c0-.28-.22-.5-.5-.5z'
          ],
          'segmented-control': [
            'M19 5H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-1 8h-8V7h8v6z'
          ],
          select: [
            'M19.71 18.29l-4.25-4.25L20 12.91 9.93 9.33c.04-.1.07-.21.07-.33V3c0-.55-.45-1-1-1H4V1c0-.55-.45-1-1-1S2 .45 2 1v1H1c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 .55.45 1 1 1h6c.12 0 .23-.03.34-.07L12.91 20l1.14-4.54 4.25 4.25c.17.18.42.29.7.29a1.003 1.003 0 00.71-1.71zM8 8H4V4h4v4z'
          ],
          selection: [
            'M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
            'M10 6a4 4 0 100 8 4 4 0 100-8z'
          ],
          'send-message': [
            'M1.754.135L19.393 9.06c.57.288.775.943.458 1.462-.107.176-.266.32-.458.418l-17.64 8.924c-.57.289-1.288.102-1.604-.417A1.001 1.001 0 010 18.925v-6.851L11.021 10 0 7.938V1.075C0 .481.529 0 1.18 0c.201 0 .399.047.574.135z'
          ],
          'send-to': [
            'M19 0h-5c-.6 0-1 .4-1 1s.4 1 1 1h2.6l-4.3 4.3c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3L18 3.4V6c0 .5.5 1 1 1s1-.5 1-1V1c0-.6-.5-1-1-1zm0 9c-1 0-1.9-.5-2.5-1.3l-1.4 1.4c-.5.6-1.3.9-2.1.9-1.7 0-3-1.3-3-3 0-.8.3-1.6.9-2.1l1.4-1.4C11.5 2.9 11 2 11 1c0-.3.1-.6.2-.9-.4-.1-.8-.1-1.2-.1C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10c0-.4 0-.8-.1-1.2-.3.1-.6.2-.9.2z'
          ],
          'send-to-graph': [
            'M8 11H3c-.55 0-1 .45-1 1s.45 1 1 1h2.59L.3 18.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L7 14.41V17c0 .55.45 1 1 1s1-.45 1-1v-5c0-.55-.45-1-1-1zm10 2c-.53 0-1.01.21-1.37.55L11.9 10.6c.06-.19.1-.39.1-.6 0-.21-.04-.41-.1-.6l4.72-2.95c.37.34.85.55 1.38.55 1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .21.04.41.1.6l-4.73 2.96c-.24-.23-.54-.4-.87-.48V3.93c.86-.22 1.5-1 1.5-1.93 0-1.1-.9-2-2-2S8 .9 8 2c0 .93.64 1.71 1.5 1.93v4.14c-.33.09-.63.26-.87.48L7.6 7.91 5.42 6.55 3.9 5.6c.06-.19.1-.39.1-.6 0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2c.53 0 1.01-.21 1.37-.55L9 9.96V10h.06L12 11.84l.4.25 1.51.94 2.19 1.37c-.06.19-.1.39-.1.6 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2zm-7-2.96l-.06-.04H11v.04z'
          ],
          'send-to-map': [
            'M8 11H3c-.55 0-1 .45-1 1s.45 1 1 1h2.59L.3 18.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L7 14.41V17c0 .55.45 1 1 1s1-.45 1-1v-5c0-.55-.45-1-1-1zm11.54-6.82l.01-.02-6-4-.01.02C13.39.08 13.21 0 13 0s-.39.08-.54.18l-.01-.02L7 3.8 1.55.17l-.01.01A.969.969 0 001 0C.45 0 0 .45 0 1v9c0-.55.45-1 1-1h1V2.87l4 2.67V9h2V5.54l4-2.67v11.6l-1 .67v2.4l2-1.33 5.45 3.63.01-.02c.15.1.33.18.54.18.55 0 1-.45 1-1V5c0-.35-.19-.64-.46-.82zM18 17.13l-4-2.67V2.87l4 2.67v11.59z'
          ],
          'series-add': [
            'M13.29 9.29c.3.62.8 1.12 1.42 1.42l-3 3c-.18.18-.43.29-.71.29s-.53-.11-.71-.3L7 10.41l-5 5V17h17c.55 0 1 .45 1 1s-.45 1-1 1H1a.998.998 0 01-1-1V4c0-.55.45-1 1-1s1 .45 1 1v8.59l4.29-4.3C6.47 8.11 6.72 8 7 8s.53.11.71.29l3.29 3.3 2.29-2.3zM12 5c0-.5.4-1 1-1h2V2c0-.6.4-1 1-1 .5 0 1 .4 1 1v2h2c.5 0 1 .4 1 1s-.5 1-1 1h-2v2c0 .6-.5 1-1 1-.6 0-1-.4-1-1V6h-2c-.6 0-1-.4-1-1z'
          ],
          'series-configuration': [
            'M11.91 10.67c.52.45 1.13.8 1.8 1.03l-2.01 2.01c-.18.18-.43.29-.71.29-.28 0-.53-.11-.71-.3L7 10.41l-5 5V17h16.99c.55 0 1 .45 1 1s-.45 1-1 1H1a.998.998 0 01-1-1V4c0-.55.45-1 1-1s1 .45 1 1v8.59l4.29-4.3C6.47 8.11 6.72 8 7 8c.28 0 .53.11.71.29l3.29 3.3.91-.92zM18.5 4.6h1.04c.25 0 .45.2.46.44v.9c0 .25-.2.45-.45.45h-1.04c-.07.22-.16.42-.27.62l.73.73c.17.17.17.44 0 .61l-.61.61c-.17.17-.44.17-.61 0l-.73-.73c-.2.11-.4.2-.62.26v1.05c0 .25-.2.45-.45.45h-.9c-.25 0-.45-.2-.45-.45V8.51c-.21-.06-.4-.15-.58-.25l-.76.77c-.17.17-.46.17-.64 0l-.64-.64a.465.465 0 010-.64l.76-.77c-.1-.19-.19-.38-.25-.59h-1.04c-.25 0-.45-.2-.45-.45v-.9c0-.25.2-.45.45-.45h1.04c.07-.22.16-.42.27-.61l-.73-.73a.429.429 0 010-.61l.61-.61c.17-.17.44-.17.61 0l.73.73c.2-.11.4-.2.62-.26V1.45a.44.44 0 01.44-.45h.9c.25 0 .45.2.45.45V2.5c.21.06.4.15.58.25l.76-.77c.17-.17.46-.17.64 0l.64.64c.17.17.17.46 0 .64l-.76.77c.1.17.19.36.25.57zm-4.69.9c0 .93.75 1.69 1.69 1.69.93 0 1.69-.75 1.69-1.69s-.75-1.69-1.69-1.69-1.69.76-1.69 1.69z'
          ],
          'series-derived': [
            'M18.82 6.58c-.03.05-.07.09-.11.13 0 0 0-.01-.01-.01l-2 2c-.2.2-.4.3-.7.3-.6 0-1-.4-1-1 0-.3.1-.5.3-.7L16.6 6H11c-.6 0-1-.4-1-1s.4-1 1-1h5.6l-1.3-1.3c-.2-.2-.3-.4-.3-.7 0-.6.4-1 1-1 .3 0 .5.1.7.3l3 3c.2.2.3.4.3.7s-.1.5-.3.7l-.88.88zm-5.53 2.71c.3.62.8 1.12 1.42 1.42l-3 3c-.18.18-.43.29-.71.29s-.53-.11-.71-.3L7 10.41l-5 5V17h17c.55 0 1 .45 1 1s-.45 1-1 1H1a.998.998 0 01-1-1V4c0-.55.45-1 1-1s1 .45 1 1v8.59l4.29-4.3C6.47 8.11 6.72 8 7 8s.53.11.71.29l3.29 3.3 2.29-2.3z'
          ],
          'series-filtered': [
            'M12.14 10.45c.21.67.65 1.23 1.22 1.61l-1.65 1.65c-.18.18-.43.29-.71.29s-.53-.11-.71-.3L7 10.41l-5 5V17h17c.55 0 1 .45 1 1s-.45 1-1 1H1a.998.998 0 01-1-1V4c0-.55.45-1 1-1s1 .45 1 1v8.59l4.29-4.3C6.47 8.11 6.72 8 7 8s.53.11.71.29l3.29 3.3 1.14-1.14zM19.35 1a.642.642 0 01.46 1.1l-3.03 3.03v2.95c0 .18-.07.34-.19.46l-1.28 1.29c-.11.1-.27.17-.45.17-.35 0-.64-.29-.64-.64V5.13L11.19 2.1a.642.642 0 01.45-1.1h7.71z'
          ],
          'series-search': [
            'M11.28 11.31l-.28.28-3.29-3.3C7.53 8.11 7.28 8 7 8s-.53.11-.71.29L2 12.59V4c0-.55-.45-1-1-1s-1 .45-1 1v14a.998.998 0 001 1h18c.55 0 1-.45 1-1s-.45-1-1-1H2v-1.59l5-5 3.29 3.29c.18.19.43.3.71.3s.53-.11.71-.29l2.09-2.09c-.17.02-.34.02-.51.02-.7 0-1.38-.12-2.01-.33zm-.93-6c0-1.62 1.31-2.93 2.93-2.93s2.93 1.31 2.93 2.93-1.31 2.93-2.93 2.93-2.93-1.31-2.93-2.93zm6.47 2.43c.11-.17.21-.33.29-.51.01-.03.03-.06.04-.09.08-.18.16-.35.21-.54.06-.2.1-.38.14-.58.01-.05.01-.09.02-.14.03-.2.05-.39.05-.6 0-2.37-1.93-4.3-4.3-4.3-2.37.01-4.3 1.93-4.3 4.31s1.93 4.3 4.3 4.3c.21 0 .4-.02.6-.05.04 0 .09-.01.14-.02.2-.03.38-.08.57-.14.2-.06.37-.14.55-.21.03-.01.06-.03.09-.04.18-.09.34-.19.51-.29l2.87 2.87c.14.14.33.22.56.22.43 0 .78-.35.78-.78a.938.938 0 00-.23-.56l-2.89-2.85z'
          ],
          settings: [
            'M4 1c0-.55-.45-1-1-1S2 .45 2 1v5h2V1zM2 19c0 .55.45 1 1 1s1-.45 1-1v-6H2v6zm9-18c0-.55-.45-1-1-1S9 .45 9 1v8h2V1zm7 0c0-.55-.45-1-1-1s-1 .45-1 1v3h2V1zM9 19c0 .55.45 1 1 1s1-.45 1-1v-3H9v3zm9-14h-2c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-2 14c0 .55.45 1 1 1s1-.45 1-1v-8h-2v8zM4 7H2c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm7 3H9c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1z'
          ],
          share: [
            'M15 18H2V5h8.76l2-2H1c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1h15c.55 0 1-.45 1-1V7.24l-2 2V18zm4-18h-7c-.55 0-1 .45-1 1s.45 1 1 1h4.59l-7.3 7.29a1.003 1.003 0 001.42 1.42L18 3.41V8c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1z'
          ],
          shield: [
            'M10 20c6-3.81 9-9.048 9-15.714-2 0-5-1.429-9-4.286-4 2.857-7 4.286-9 4.286C1 10.952 4 16.19 10 20zm0-17.348c2.577 1.734 4.776 2.88 6.667 3.419-.44 4.627-2.636 8.353-6.667 11.297V2.652z'
          ],
          shop: [
            'M17.94 3.63c-.01-.02-.01-.03-.02-.04l-.03-.09h-.01c-.18-.3-.49-.5-.86-.5h-14c-.42 0-.77.25-.92.61L0 8.5h.02a2.5 2.5 0 005 0 2.5 2.5 0 005 0 2.5 2.5 0 005 0 2.5 2.5 0 005 0l-2.08-4.87zM3.02 2h14c.55 0 1-.45 1-1s-.45-1-1-1h-14c-.55 0-1 .45-1 1s.44 1 1 1zm13 14h-12v-4h-2v7c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-7h-2v4z'
          ],
          'shopping-cart': [
            'M18 14H8.72l-.67-2H17c.44 0 .8-.29.94-.69h.01l2-6h-.01c.03-.1.06-.2.06-.31 0-.55-.45-1-1-1H5.39l-.44-1.32h-.01C4.8 2.29 4.44 2 4 2H1c-.55 0-1 .45-1 1s.45 1 1 1h2.28l3.33 10H5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2h9c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2zM6.05 6h11.56l-1.33 4H7.39L6.05 6z'
          ],
          'signal-search': [
            'M7.15 10.33c.888.8 1.999 1.36 3.228 1.574l2.326 6.98a.846.846 0 01-.535 1.07.844.844 0 01-1.072-.535l-1.225-3.671H7.125L5.9 19.419a.85.85 0 01-1.072.536.85.85 0 01-.536-1.071l2.857-8.555zm1.353 1.305l-.808 2.413h1.607l-.8-2.413zM5 5.5c0 .76.13 1.49.37 2.17-.496 1.056-.313 2.356.704 3.29.385.353.404.94.038 1.311a.982.982 0 01-1.356.038c-2.183-2.01-2-5.125.01-6.94a.95.95 0 01.24-.156A6.421 6.421 0 005 5.5z',
            'M3.874 13.185c-1.346-.918-2.187-2.67-2.187-4.34 0-1.752.757-3.254 2.187-4.339.42-.25.42-.834.168-1.168-.252-.418-.84-.418-1.177-.167C1.014 4.59-.08 6.509.005 8.846c.084 2.253 1.177 4.423 2.86 5.675.168.083.336.166.504.166.253 0 .505-.083.673-.333.337-.418.253-.918-.168-1.169zM12.246 12.309a.98.98 0 01-1.354-.037.917.917 0 01-.206-.324 6.54 6.54 0 001.959-.049 5.125 5.125 0 01-.399.41zM14.631 11.476l1.228 1.229a6.6 6.6 0 01-1.723 1.816c-.169.083-.337.166-.505.166-.253 0-.505-.083-.673-.333-.337-.418-.253-.918.168-1.169.62-.422 1.133-1.022 1.505-1.709z',
            'M11.5 0C14.54 0 17 2.46 17 5.5c0 .26-.02.51-.06.75l-.03.17c-.04.25-.1.49-.17.73v.01c-.08.24-.17.47-.28.69-.01.04-.03.07-.05.11-.11.23-.24.44-.38.65l3.68 3.68A1.003 1.003 0 0119 14c-.28 0-.53-.11-.7-.29l-3.68-3.68c-.21.14-.42.27-.65.38-.04.01-.07.03-.11.05-.22.11-.45.2-.69.28h-.01c-.24.07-.48.13-.73.17l-.17.03c-.25.04-.5.06-.76.06C8.46 11 6 8.54 6 5.5S8.46 0 11.5 0zm0 1.5c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z'
          ],
          'sim-card': [
            'M16.71 5.29l-5-5A.997.997 0 0011 0H4c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.28-.11-.53-.29-.71zM9 7h2v3H9V7zM6 7h2v3H6V7zm2 11H6v-3h2v3zm3 0H9v-3h2v3zm3 0h-2v-3h2v3zm0-4H6v-3h8v3zm0-4h-2V7h2v3z'
          ],
          slash: [
            'M12 2c-.46 0-.85.32-.97.74L7.04 16.7c-.02.1-.04.2-.04.3 0 .55.45 1 1 1 .46 0 .85-.32.97-.74L12.96 3.3c.02-.1.04-.2.04-.3 0-.55-.45-1-1-1z'
          ],
          'small-cross': [
            'M11.41 10l3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L10 8.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42L8.59 10 5.3 13.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l3.29-3.3 3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L11.41 10z'
          ],
          'small-minus': [
            'M14 9H6c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'small-plus': [
            'M14 9h-3V6c0-.55-.45-1-1-1s-1 .45-1 1v3H6c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'small-tick': [
            'M15 5c-.28 0-.53.11-.71.29L8 11.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l7-7A1.003 1.003 0 0015 5z'
          ],
          snowflake: [
            'M11 11.776v2.81l2.31 2.242a.987.987 0 010 1.415c-.399.39-1.044.39-1.442 0L11 17.414V19a.99.99 0 01-.996 1A.996.996 0 019 19v-1.636l-.912.879c-.398.39-1.043.39-1.441 0a.987.987 0 010-1.415L9 14.536v-2.79l-2.548 1.435-.837 3.063c-.146.534-.705.85-1.248.707a.998.998 0 01-.721-1.224l.309-1.132-1.4.793a1.03 1.03 0 01-1.393-.366.99.99 0 01.373-1.366l1.445-.818-1.224-.322a.998.998 0 01-.72-1.225c.145-.533.704-.85 1.248-.707l3.193.84 2.462-1.395-2.532-1.434-3.123.82a1.022 1.022 0 01-1.249-.706.998.998 0 01.721-1.225L2.91 7.18l-1.4-.793a.99.99 0 01-.373-1.366 1.03 1.03 0 011.392-.366l1.445.818-.328-1.2a.998.998 0 01.72-1.225 1.022 1.022 0 011.25.707l.855 3.132L9 8.311V5.414L6.647 3.121a.987.987 0 010-1.414 1.033 1.033 0 011.441 0L9 2.586V1c0-.552.44-1 1.004-1A.99.99 0 0111 1l-.007 1.536.875-.829a1.033 1.033 0 011.441 0 .987.987 0 010 1.414L11 5.364v2.918l2.53-1.42.855-3.131c.146-.534.705-.85 1.249-.707a.998.998 0 01.72 1.224l-.327 1.2 1.4-.792a1.03 1.03 0 011.392.366.99.99 0 01-.373 1.366l-1.355.768 1.153.303a.998.998 0 01.721 1.225c-.146.533-.705.85-1.249.707l-3.123-.821-2.576 1.459 2.506 1.42 3.193-.84a1.022 1.022 0 011.249.707.998.998 0 01-.72 1.225l-1.224.322 1.4.793a.99.99 0 01.373 1.366 1.03 1.03 0 01-1.393.366l-1.356-.768.31 1.132a.998.998 0 01-.721 1.224 1.022 1.022 0 01-1.249-.707l-.837-3.063L11 11.776z'
          ],
          'social-media': [
            'M11.5 5c.8 0 1.6-.4 2-1 2 1.2 3.3 3.3 3.5 5.7 0 .5.5.9 1 .9.6 0 1-.5 1-1v-.1c-.2-3.3-2.2-6.2-5.1-7.6C13.7.8 12.7 0 11.5 0 10.1 0 9 1.1 9 2.5S10.1 5 11.5 5zm5 7c-1.4 0-2.5 1.1-2.5 2.5 0 .4.1.7.2 1.1-1.1.9-2.6 1.4-4.2 1.4-1.9 0-3.6-.8-4.9-2-.2-.2-.5-.4-.8-.4-.5 0-1 .5-1 1 0 .3.1.5.3.7C5.3 18 7.5 19 10 19c2.2 0 4.2-.8 5.8-2.1.2.1.5.1.7.1 1.4 0 2.5-1.1 2.5-2.5S17.9 12 16.5 12zM5 10.5c0-1.1-.7-2.1-1.7-2.4.5-1.9 1.9-3.5 3.6-4.4.3-.2.6-.5.6-.9 0-.5-.4-1-1-1-.2 0-.4.1-.6.2-2.4 1.2-4.2 3.6-4.7 6.4C.5 8.9 0 9.6 0 10.5 0 11.9 1.1 13 2.5 13S5 11.9 5 10.5z'
          ],
          sort: [
            'M19 16h-9c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h9c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zm0-5h-9c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h9c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zM7 15c-.28 0-.53.11-.71.29L5 16.59V11c0-.55-.45-1-1-1s-1 .45-1 1v5.59L1.71 15.3A.965.965 0 001 15a1.003 1.003 0 00-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 007 15zM19 1h-9c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 5h-9c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1z'
          ],
          'sort-alphabetical': [
            'M8 15c-.28 0-.53.11-.71.29L6 16.59v-5.58c0-.55-.45-1-1-1s-1 .45-1 1v5.58L2.71 15.3c-.18-.18-.43-.3-.71-.3a1.003 1.003 0 00-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 008 15zm8.89-.79v-1.22H11.3v1.3h3.51L11 18.78V20h5.99v-1.3h-3.91l3.81-4.49zM14.97 0h-1.95L9.01 11.01h1.89l.98-2.92h4.17l.98 2.92h1.96L14.97 0zm-2.59 6.63l1.58-4.74H14l1.57 4.74h-3.19z'
          ],
          'sort-alphabetical-desc': [
            'M8.01 15c-.28 0-.53.11-.71.29L6 16.59v-5.58c0-.55-.45-1-1-1s-1 .45-1 1v5.58L2.71 15.3c-.18-.18-.43-.3-.71-.3a1.003 1.003 0 00-.71 1.71l3 3a1.014 1.014 0 001.42 0l3-3c.18-.18.29-.43.29-.71.01-.55-.44-1-.99-1zm4.44-5.65l6.4-7.88V0H10.5v1.67h5.91L10 9.44v1.57h9V9.35h-6.55zm1.27 3.64L11 20h1.59l.56-1.56h2.68l.55 1.56h1.64l-2.68-7.01h-1.62zm-.16 4.3l.93-2.57h.02l.9 2.57h-1.85z'
          ],
          'sort-asc': [
            'M10 8h5c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1h-5c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1zm0 5h7c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1h-7c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1zm0-10h3c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1zm9 12h-9c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h9c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zM7 14c-.28 0-.53.11-.71.29L5 15.59V10c0-.55-.45-1-1-1s-1 .45-1 1v5.59L1.71 14.3A.965.965 0 001 14a1.003 1.003 0 00-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 007 14z'
          ],
          'sort-desc': [
            'M13 15h-3c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zm-6-1c-.28 0-.53.11-.71.29L5 15.59V10c0-.55-.45-1-1-1s-1 .45-1 1v5.59L1.71 14.3A.965.965 0 001 14a1.003 1.003 0 00-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 007 14zM19 0h-9c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-4 10h-5c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zm2-5h-7c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z'
          ],
          'sort-numerical': [
            'M9 14.99c-.28 0-.53.11-.71.29L7 16.58v-5.59c0-.55-.45-1-1-1s-1 .45-1 1v5.59l-1.29-1.29a.965.965 0 00-.71-.3 1.003 1.003 0 00-.71 1.71l3 3c.18.18.43.29.71.29.28 0 .53-.11.71-.29l3-3c.18-.18.29-.43.29-.71a.99.99 0 00-1-1zm8.88.23c-.08-.42-.22-.79-.42-1.12-.2-.33-.47-.6-.8-.8-.33-.2-.76-.3-1.28-.3a2.333 2.333 0 00-1.72.71c-.21.22-.37.48-.49.78-.11.3-.17.62-.17.97 0 .27.04.54.13.8.08.26.22.5.4.7.19.21.43.38.71.5a2.142 2.142 0 001.72.02c.25-.12.47-.31.66-.58l.02.02c-.01.19-.04.4-.08.63-.04.24-.11.46-.21.67-.1.21-.23.38-.39.53a.92.92 0 01-.62.22c-.24 0-.44-.08-.6-.25-.16-.17-.27-.36-.31-.59h-1.31c.04.29.12.56.24.79.12.23.28.43.48.59.19.16.42.28.67.36.25.08.52.12.82.12.49 0 .9-.1 1.23-.31.34-.21.61-.48.82-.82.21-.34.37-.71.47-1.13.1-.42.15-.83.15-1.25 0-.43-.04-.85-.12-1.26zm-1.42.63c-.05.15-.11.28-.2.4-.09.12-.2.21-.34.27s-.3.1-.49.1c-.17 0-.33-.04-.46-.11s-.24-.17-.33-.29c-.08-.12-.15-.25-.19-.4-.04-.15-.06-.31-.06-.47 0-.15.02-.3.07-.45.05-.15.11-.28.2-.39.09-.12.2-.21.33-.28.13-.07.27-.11.44-.11.17 0 .33.04.47.11.14.07.25.17.34.28a1.387 1.387 0 01.28.86c.01.17-.02.33-.06.48zM15.32 11H17V0h-1.25c-.05.34-.17.62-.34.85-.17.23-.39.42-.63.57-.25.15-.52.25-.83.31-.3.06-.62.09-.94.09v1.41h2.31V11z'
          ],
          'sort-numerical-desc': [
            'M9 15c-.28 0-.53.11-.71.29L7 16.59v-5.58c0-.55-.45-1-1-1s-1 .45-1 1v5.58L3.71 15.3c-.18-.18-.43-.3-.71-.3a1.003 1.003 0 00-.71 1.71l3 3c.18.18.43.29.71.29.28 0 .53-.11.71-.29l3-3A1.003 1.003 0 009 15zm6.7-1.33a1.5 1.5 0 01-.44.43c-.17.11-.37.19-.58.23-.22.04-.44.06-.67.05v1.07h1.66V20H17v-6.99h-1.06c-.04.26-.12.48-.24.66zm3.15-10.3c-.11-.68-.29-1.26-.55-1.76-.26-.5-.62-.89-1.08-1.18C16.75.14 16.17 0 15.46 0c-.54 0-1.03.09-1.46.27-.43.18-.79.44-1.09.76-.3.33-.52.71-.67 1.15-.16.44-.24.92-.24 1.43 0 .54.08 1.04.23 1.47.15.44.37.81.65 1.12.28.31.61.55 1 .72.39.17.82.26 1.3.26.46 0 .88-.11 1.26-.33.38-.22.68-.53.9-.94l.03.03c-.03.35-.07.74-.12 1.16-.05.42-.15.81-.29 1.18-.14.37-.35.68-.61.92-.26.25-.62.37-1.06.37-.43 0-.77-.13-1.03-.4-.25-.27-.4-.62-.44-1.05h-1.64c.02.43.11.83.29 1.18.17.35.39.66.67.91a3.027 3.027 0 002.07.8c.71 0 1.3-.17 1.79-.5.48-.33.87-.76 1.17-1.29.3-.53.51-1.12.64-1.76.13-.64.19-1.28.19-1.92.01-.77-.05-1.49-.15-2.17zM17.1 4.44c-.08.27-.19.5-.34.71-.15.21-.34.37-.57.49-.23.12-.5.18-.8.18-.3 0-.56-.06-.78-.19-.22-.13-.4-.29-.55-.49-.14-.2-.25-.44-.32-.7-.07-.27-.11-.55-.11-.84 0-.28.04-.55.11-.82.07-.26.18-.49.32-.7.14-.2.33-.36.55-.48.22-.12.48-.17.78-.17.31 0 .57.06.8.18.23.12.42.28.57.48.15.2.26.43.34.69.08.26.11.53.11.82 0 .29-.04.57-.11.84z'
          ],
          'split-columns': [
            'M15 13a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-3-3a1.003 1.003 0 00-1.42 1.42L16.59 9H11V2h5v2c.77 0 1.47.3 2 .78V1c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v3.78C2.53 4.3 3.23 4 4 4V2h5v7H3.41L4.7 7.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-3 3C.11 9.47 0 9.72 0 10c0 .28.11.53.29.71l3 3a1.003 1.003 0 001.42-1.42L3.41 11H9v7H4v-2c-.77 0-1.47-.3-2-.78V19c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3.78c-.53.48-1.23.78-2 .78v2h-5v-7h5.59l-1.29 1.29c-.19.18-.3.43-.3.71z'
          ],
          square: [
            'M19 0H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 18H2V2h16v16z'
          ],
          'stacked-chart': [
            'M12 2c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v4h4V2zm3 14h2c.55 0 1-.45 1-1v-5h-4v5c0 .55.45 1 1 1zm3-10c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v3h4V6zm-6 1H8v5h4V7zm-9 9h2c.55 0 1-.45 1-1v-3H2v3c0 .55.45 1 1 1zm16 1H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zM6 9c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v2h4V9zm3 7h2c.55 0 1-.45 1-1v-2H8v2c0 .55.45 1 1 1z'
          ],
          star: [
            'M10 0l3.1 6.6 6.9 1-5 5.1 1.2 7.3-6.2-3.4L3.8 20 5 12.7 0 7.6l6.9-1z'
          ],
          'star-empty': [
            'M20 7.6l-6.9-1.1L10 0 6.9 6.6 0 7.6l5 5.1L3.8 20l6.2-3.4 6.2 3.4-1.2-7.2 5-5.2zM10 15l-4.5 2.4.9-5.2-3.6-3.6 5-.8L10 3.1l2.2 4.7 5 .8-3.6 3.7.9 5.2L10 15z'
          ],
          'step-backward': [
            'M15 3c-.23 0-.42.09-.59.21l-.01-.01L8 8V4c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-4l6.4 4.8.01-.01c.17.12.36.21.59.21.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z'
          ],
          'step-chart': [
            'M19 16H2v-3h4c.55 0 1-.45 1-1V8h3v2c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V6h2c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1v4h-3V7c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v4H2V3c0-.55-.45-1-1-1s-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'step-forward': [
            'M15 3h-2c-.55 0-1 .45-1 1v4L5.6 3.2l-.01.01C5.42 3.09 5.23 3 5 3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1 .23 0 .42-.09.59-.21l.01.01L12 12v4c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z'
          ],
          stop: [
            'M16 3H4c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z'
          ],
          stopwatch: [
            'M10 6a6 6 0 106 6h-6V6zm-.998-1.938A1.015 1.015 0 019 4V2H7a1 1 0 110-2h6a1 1 0 010 2h-2v2c0 .02 0 .041-.002.062A8.001 8.001 0 0110 20a8 8 0 01-.998-15.938z'
          ],
          strikethrough: [
            'M18 9h-4.46a4.7 4.7 0 00-.4-.14c-.19-.05-.51-.14-.96-.25-.45-.11-.9-.23-1.37-.35-.47-.12-.89-.23-1.27-.33s-.6-.16-.65-.17c-.53-.15-.95-.37-1.27-.66-.32-.28-.49-.68-.49-1.19 0-.36.09-.66.26-.9s.39-.43.65-.57c.26-.14.55-.24.87-.3s.63-.09.93-.09c.89 0 1.63.19 2.21.57.45.3.75.76.89 1.38h2.63c-.06-.52-.2-.98-.42-1.4-.3-.57-.71-1.05-1.23-1.43a5.33 5.33 0 00-1.79-.87c-.7-.2-1.42-.3-2.19-.3-.66 0-1.31.08-1.96.25s-1.22.43-1.73.77-.92.79-1.23 1.32c-.31.52-.46 1.15-.46 1.87 0 .37.05.74.15 1.1.1.36.28.7.53 1.02.18.24.41.47.69.67H2c-.55 0-1 .45-1 1s.45 1 1 1h10.14c.02.01.05.02.07.02.3.11.58.29.84.55.25.26.38.67.38 1.21 0 .27-.06.53-.17.79-.11.26-.29.49-.54.69-.25.2-.57.36-.97.49s-.88.19-1.44.19c-.52 0-1.01-.06-1.45-.17-.45-.11-.84-.29-1.19-.54s-.61-.56-.8-.95c-.05-.08-.09-.18-.12-.28H4.11c.09.43.22.82.4 1.18.33.65.77 1.18 1.32 1.59.55.41 1.2.72 1.94.92.74.2 1.53.3 2.37.3.73 0 1.44-.08 2.14-.25.7-.17 1.33-.43 1.88-.79.55-.36.99-.83 1.33-1.39.34-.56.51-1.25.51-2.05 0-.37-.06-.75-.18-1.12a3.12 3.12 0 00-.15-.39H18c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          style: [
            'M18 18H2V2h12.3l2-2H1C.4 0 0 .4 0 1v18c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V7.7l-2 2V18zm1.2-18l-7.6 7.6 2.8 2.8L20 4.8V0h-.8zM4 15.9c3.1.2 5.9.2 8.2-2 1.1-1.1 1.1-3 0-4.1-.6-.5-1.3-.8-2-.8s-1.4.3-1.9.8C7.2 11 6.6 14.3 4 15.9z'
          ],
          'swap-horizontal': [
            'M16.02 10c-.01 0-.01 0 0 0H16h.02zM2 6h13.58l-2.29 2.29a1 1 0 00-.3.71 1.003 1.003 0 001.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-4-4a1.003 1.003 0 00-1.42 1.42L15.58 4H2c-.55 0-1 .45-1 1s.45 1 1 1zm2 4h-.02H4zm14 4H4.42l2.29-2.29a1 1 0 00.3-.71 1.003 1.003 0 00-1.71-.71l-4 4c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l4 4a1.003 1.003 0 001.42-1.42L4.42 16H18c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'swap-vertical': [
            'M9.71 5.3l-4-4A.997.997 0 005 1.01c-.28 0-.53.11-.71.29l-4 4a1.003 1.003 0 001.42 1.42L4 4.42V18c0 .55.45 1 1 1s1-.45 1-1V4.42l2.29 2.29a1 1 0 00.71.3 1.003 1.003 0 00.71-1.71zM10 3.98c0 .01 0 .01 0 0V4v-.02zm0 12.04c0-.01 0-.01 0 0V16v.02zm9-3.03c-.28 0-.53.11-.71.29L16 15.58V2c0-.55-.45-1-1-1s-1 .45-1 1v13.58l-2.29-2.29a1.003 1.003 0 00-1.42 1.42l4 4c.18.18.43.29.71.29.28 0 .53-.11.71-.29l4-4c.18-.18.29-.43.29-.71 0-.56-.45-1.01-1-1.01z'
          ],
          switch: [
            'M12.293 2.293l1.414 1.414-7.127 7.129a3.5 3.5 0 11-1.415-1.415l7.128-7.128zM16.5 9a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm-13 2a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm13 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z'
          ],
          'symbol-circle': ['M10 4.01a6 6 0 100 12 6 6 0 100-12z'],
          'symbol-cross': [
            'M15 8.01h-3v-3c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v3H5c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h3v3c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-3h3c.55 0 1-.45 1-1v-2c0-.56-.45-1-1-1z'
          ],
          'symbol-diamond': [
            'M15 10.01c0-.21-.08-.39-.18-.54l.02-.01-4-6-.02.01c-.18-.28-.47-.46-.82-.46s-.64.18-.82.45l-.01-.01-4 6 .02.01c-.11.16-.19.34-.19.55s.08.39.18.54l-.02.01 4 6 .02-.01c.18.27.47.46.82.46s.64-.19.82-.46l.02.01 4-6-.02-.01c.1-.16.18-.34.18-.54z'
          ],
          'symbol-square': [
            'M15 4.01H5c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-10c0-.56-.45-1-1-1z'
          ],
          'symbol-triangle-down': [
            'M16 5c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1 0 .16.05.31.11.44H4.1l5 10h.01c.17.33.5.56.89.56s.72-.23.89-.56h.01l5-10h-.01c.06-.13.11-.28.11-.44z'
          ],
          'symbol-triangle-up': [
            'M15.89 14.56l-4.99-10h-.01c-.17-.33-.5-.56-.89-.56s-.72.23-.89.56H9.1l-5 10h.01c-.06.13-.11.28-.11.44 0 .55.45 1 1 1h10c.55 0 1-.45 1-1 0-.16-.05-.31-.11-.44z'
          ],
          tag: [
            'M2 4a2 2 0 012-2h4.588a2 2 0 011.414.586l7.41 7.41a2 2 0 010 2.828l-4.588 4.588a2 2 0 01-2.829 0l-7.41-7.41A2 2 0 012 8.588V4zm3.489-.006a1.495 1.495 0 100 2.99 1.495 1.495 0 000-2.99z'
          ],
          'take-action': [
            'M5 7c.28 0 .53-.11.71-.29l5-5A1.003 1.003 0 009.29.29l-5 5A1.003 1.003 0 005 7zm6 6a1.003 1.003 0 001.71.71l5-5a1.003 1.003 0 00-1.42-1.42l-5 5c-.18.18-.29.43-.29.71zm8 5h-1c0-.55-.45-1-1-1h-7c-.55 0-1 .45-1 1H8c-.55 0-1 .45-1 1s.45 1 1 1h11c.55 0 1-.45 1-1s-.45-1-1-1zm-9-6l6-6-1.29-1.29a1.003 1.003 0 00-1.42-1.42L12 2 6 8l1.29 1.29-7 7a1.003 1.003 0 001.42 1.42l7-7L10 12z'
          ],
          taxi: [
            'M19 9h-.33l.33 1v.5c0 .15-.03.3-.07.44h.01L17 17.23v.27c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5V17H6v.5c0 .83-.67 1.5-1.5 1.5S3 18.33 3 17.5v-.27l-1.93-6.28h.01c-.05-.15-.08-.3-.08-.45V10s.02-.06.05-.16c.06-.17.16-.47.28-.84H1c-.55 0-1-.45-1-1s.45-1 1-1h1l1-3h-.01v-.01c.25-.64 1-1.31 1.67-1.5 0 0 .78-.21 2.33-.36V1c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v1.13c1.55.14 2.33.36 2.33.36.67.19 1.42.86 1.67 1.5V4H17l1 3h1c.55 0 1 .45 1 1s-.45 1-1 1zM3 11.5c0 .83.67 1.5 1.5 1.5S6 12.33 6 11.5 5.33 10 4.5 10 3 10.67 3 11.5zM16 7l-1-3H5L4 7v1h12V7zm-.5 3c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z'
          ],
          'text-highlight': [
            'M16 17c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1s1-.45 1-1-.45-1-1-1c-.77 0-1.47.3-2 .78-.53-.48-1.23-.78-2-.78-.55 0-1 .45-1 1s.45 1 1 1 1 .45 1 1v12c0 .55-.45 1-1 1s-1 .45-1 1 .45 1 1 1c.77 0 1.47-.3 2-.78.53.48 1.23.78 2 .78.55 0 1-.45 1-1s-.45-1-1-1zm-4-4H2V7h10V5H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h11v-2zm7-8h-3v2h2v6h-2v2h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z'
          ],
          th: [
            'M19 1H1c-.6 0-1 .5-1 1v16c0 .5.4 1 1 1h18c.5 0 1-.5 1-1V2c0-.5-.5-1-1-1zM7 17H2v-3h5v3zm0-4H2v-3h5v3zm0-4H2V6h5v3zm11 8H8v-3h10v3zm0-4H8v-3h10v3zm0-4H8V6h10v3z'
          ],
          'th-derived': [
            'M5.3 13.3c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3l3-3c.2-.2.3-.4.3-.7s-.1-.5-.3-.7l-3-3C6.5 7.1 6.3 7 6 7c-.6 0-1 .4-1 1 0 .3.1.5.3.7L6.6 10H1c-.6 0-1 .4-1 1s.4 1 1 1h5.6l-1.3 1.3zM19 1H3c-.5 0-1 .5-1 1v6h1c0-1.7 1.3-3 3-3 .8 0 1.6.3 2.1.9l.1.1H9v.8l1 1V6h8v3h-6.8c.3.3.5.6.6 1H18v3h-6.8l-.1.1-.9.9H18v3h-8v-2.8l-1 1V17H4v-.8c-.6-.5-1-1.3-1-2.2H2v4c0 .5.5 1 1 1h16c.6 0 1-.5 1-1V2c0-.5-.5-1-1-1z'
          ],
          'th-disconnect': [
            'M14.25 1H19c.5 0 1 .5 1 1v16c0 .5-.5 1-1 1h-7.221l.278-2H18v-3h-5.527l.14-1H18v-3h-4.971l.139-1H18V6h-4.416l.637-4.587c.02-.139.03-.277.03-.413zM8.221 1l-.694 5H2v3h5.11l-.139 1H2v3h4.555l-.14 1H2v3h3.999l-.22 1.587c-.02.139-.03.277-.03.413H1c-.6 0-1-.5-1-1V2c0-.5.4-1 1-1h7.221zM10.26.862a1 1 0 011.98.276l-2.5 18a1 1 0 01-1.98-.276l2.5-18z'
          ],
          'th-filtered': [
            'M17.333 10l1.435-1.722a1 1 0 00.232-.64V4.85l1-.9V18c0 .5-.5 1-1 1H1c-.6 0-1-.5-1-1V2c0-.5.4-1 1-1h6.722L12 4.85V6H8v3h4v1H8v3h10v-3h-.667zM7 17v-3H2v3h5zm0-4v-3H2v3h5zm0-4V6H2v3h5zm11 8v-3H8v3h10z',
            'M19.35 0a.642.642 0 01.46 1.1l-3.03 3.03v2.95c0 .18-.07.34-.19.46l-1.28 1.29c-.11.1-.27.17-.45.17-.35 0-.64-.29-.64-.64V4.13L11.19 1.1a.642.642 0 01.45-1.1h7.71z'
          ],
          'th-list': [
            'M19 1H1c-.6 0-1 .5-1 1v16c0 .5.4 1 1 1h18c.5 0 1-.5 1-1V2c0-.5-.5-1-1-1zm-1 16H2v-3h16v3zm0-4H2v-3h16v3zm0-4H2V6h16v3z'
          ],
          'thumbs-down': [
            'M18.55 6.56c-.31-.01-.65-.03-1.02-.06.03 0 .06-.01.09-.01.88-.12 1.68-.63 1.76-1.37.08-.75-.58-1.25-1.46-1.33-.32-.03-.65-.05-.99-.08.59-.19 1.05-.54 1.09-1.2.05-.75-.99-1.32-1.87-1.41-.34-.03-.64-.05-.91-.07h-.11c-.28-.02-.54-.02-.77-.02-3.92-.08-7.29.6-9.36 1.93v7.72c2.67 1.66 5.95 4.61 5.26 7.08-.21.76.39 1.35 1.23 1.26 1.01-.11 1.71-1.18 1.75-2.28.05-1.29-.19-2.59-.62-3.74-.05-.32.01-.65.47-.68.61-.04 1.39-.08 1.99-.1.32 0 .64-.01.94-.03h.01c.52-.03 1-.07 1.42-.12.88-.11 1.69-.6 1.79-1.35.1-.75-.55-1.25-1.44-1.35-.07-.01-.13-.02-.2-.02.21-.02.42-.04.61-.06.88-.11 1.69-.6 1.79-1.35.09-.75-.56-1.31-1.45-1.36zM3 3H0v8h3c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z'
          ],
          'thumbs-up': [
            'M3 9H0v8h3c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm16.99 3.09c-.1-.75-.91-1.24-1.79-1.35-.19-.02-.4-.05-.61-.06.07-.01.14-.01.2-.02.88-.1 1.53-.61 1.44-1.35-.1-.74-.91-1.24-1.79-1.35-.42-.05-.9-.09-1.42-.12h-.01l-.94-.03c-.6-.02-1.39-.05-1.99-.1-.45-.03-.51-.36-.47-.68.43-1.15.67-2.45.62-3.74-.04-1.11-.74-2.17-1.75-2.28-.84-.09-1.45.5-1.23 1.26.7 2.47-2.58 5.43-5.25 7.08v7.72c2.08 1.33 5.44 2.01 9.35 1.93.24 0 .49-.01.77-.02h.11c.27-.02.57-.04.91-.07.88-.08 1.92-.66 1.87-1.41-.04-.65-.5-1.01-1.09-1.2.34-.03.67-.05.99-.08.89-.08 1.55-.58 1.46-1.33-.08-.75-.88-1.25-1.76-1.37-.03 0-.06-.01-.09-.01.37-.02.71-.04 1.02-.06.91-.05 1.55-.61 1.45-1.36z'
          ],
          tick: [
            'M17 4c-.28 0-.53.11-.71.29L7 13.59 3.71 10.3A.965.965 0 003 10a1.003 1.003 0 00-.71 1.71l4 4c.18.18.43.29.71.29s.53-.11.71-.29l10-10A1.003 1.003 0 0017 4z'
          ],
          'tick-circle': [
            'M10 20C4.48 20 0 15.52 0 10S4.48 0 10 0s10 4.48 10 10-4.48 10-10 10zm5-14c-.28 0-.53.11-.71.29L8 12.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29.28 0 .53-.11.71-.29l7-7A1.003 1.003 0 0015 6z'
          ],
          time: [
            'M11 9.59V4c0-.55-.45-1-1-1s-1 .45-1 1v6c0 .28.11.53.29.71l3 3a1.003 1.003 0 001.42-1.42L11 9.59zM10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'
          ],
          'timeline-area-chart': [
            'M19 16H2V3c0-.55-.45-1-1-1s-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zm0-13.41l-7.07 7.07-4.3-3.44-.01.01A.987.987 0 007 6c-.24 0-.46.1-.63.24l-.01-.01L3 9.03V15h16V2.59z'
          ],
          'timeline-bar-chart': [
            'M19 17H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zM9 16h2c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v13c0 .55.45 1 1 1zm6 0h2c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1zM3 16h2c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1z'
          ],
          'timeline-events': [
            'M5 5c.6 0 1-.4 1-1V2c0-.5-.4-1-1-1s-1 .5-1 1v2c0 .6.4 1 1 1zm10 0c.6 0 1-.4 1-1V2c0-.5-.4-1-1-1s-1 .5-1 1v2c0 .6.4 1 1 1zm-9 9H4v2h2v-2zM17 3v1c0 1.1-.9 2-2 2s-2-.9-2-2V3H7v1c0 1.1-.9 2-2 2s-2-.9-2-2V3H2c-.5 0-1 .5-1 1v14c0 .5.5 1 1 1h16c.5 0 1-.5 1-1V4c0-.5-.5-1-1-1h-1zM7 17H3v-4h4v4zm0-5H3V8h4v4zm5 5H8v-4h4v4zm0-5H8V8h4v4zm5 5h-4v-4h4v4zm0-5h-4V8h4v4zm-6 2H9v2h2v-2zm5-5h-2v2h2V9z'
          ],
          'timeline-line-chart': [
            'M19 16H2v-1.59l5-5 3.29 3.29c.18.19.43.3.71.3s.53-.11.71-.29l7-7a1.003 1.003 0 00-1.42-1.42L11 10.59l-3.29-3.3C7.53 7.11 7.28 7 7 7s-.53.11-.71.29L2 11.59V3c0-.55-.45-1-1-1s-1 .45-1 1v14a.998.998 0 001 1h18c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          tint: [
            'M9.86 2S3.98 9.18 3.98 12.17C3.99 15.4 6.78 18 9.96 18c3.18-.01 6.04-2.63 6.03-5.86C15.99 9.05 9.86 2 9.86 2z'
          ],
          torch: [
            'M6.97 19c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-2h-6v2zm-3-15l3 4v8h6V8l3-4h-12zm5 5c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1V9zm6-9h-10c-.55 0-1 .45-1 1v2h12V1c0-.55-.45-1-1-1z'
          ],
          tractor: [
            'M4.5 11a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm11.499 1a4 4 0 110 8 4 4 0 010-8zm-11.5 1.571a1.928 1.928 0 100 3.857 1.928 1.928 0 000-3.857zM16 14.667a1.333 1.333 0 100 2.666 1.333 1.333 0 000-2.666zM5.999 0C7.46 0 8.527.668 9 2l.851 4.256c1.433.096 2.82.217 4.147.362V2h2L16 6.862c.962.13 1.886.275 2.767.435.779.141 1.232.614 1.232 1.284L20 13a4.995 4.995 0 00-4-1.997A5.001 5.001 0 0011.099 15h-1.12a5.499 5.499 0 00-5.478-4.994 5.482 5.482 0 00-3.377 1.157H.004v-1.18L0 7.327c-.002-.597.37-1.18.999-1.302V1a1 1 0 011-1h4zm1 2H3v4h.75c1.386.027 2.749.073 4.079.139L6.999 2z'
          ],
          train: [
            'M16 18h-2l2 2H4l.12-.12L6 18H4c-1.1 0-2-.9-2-2V2c0-1.1 3.58-2 8-2s8 .9 8 2v14c0 1.1-.9 2-2 2zM5.5 15c.83 0 1.5-.67 1.5-1.5S6.33 12 5.5 12 4 12.67 4 13.5 4.67 15 5.5 15zM9 3H4v6h5V3zm7 0h-5v6h5V3zm-1.5 9c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z'
          ],
          translate: [
            'M19.89 18.56l-4.99-10h-.01c-.17-.33-.5-.56-.89-.56s-.72.23-.89.56h-.01l-1.73 3.46-2.8-2.3 1.99-1.64C11.44 7.34 12 6.23 12 5V4h1c.55 0 1-.45 1-1s-.45-1-1-1H8V1c0-.55-.45-1-1-1S6 .45 6 1v1H1c-.55 0-1 .45-1 1s.45 1 1 1h9v1c0 .62-.28 1.18-.73 1.54L7 8.42 4.73 6.54C4.28 6.18 4 5.62 4 5H2c0 1.23.56 2.34 1.44 3.07l1.99 1.64-3.06 2.52.01.01c-.23.18-.38.45-.38.76 0 .55.45 1 1 1 .24 0 .45-.1.63-.24l.01.01L7 11l3.36 2.77.01-.01c.02.02.05.03.08.05.01 0 .01.01.02.02l-2.36 4.73h.01c-.07.13-.12.28-.12.44 0 .55.45 1 1 1 .39 0 .72-.23.89-.56h.01L11.12 17h5.76l1.22 2.45h.01c.17.32.5.55.89.55.55 0 1-.45 1-1 0-.16-.05-.31-.11-.44zM12.12 15L14 11.24 15.88 15h-3.76z'
          ],
          trash: [
            'M17 1h-5c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1H3c-.55 0-1 .45-1 1v1h16V2c0-.55-.45-1-1-1zm.5 3h-15c-.28 0-.5.22-.5.5s.22.5.5.5H3v14c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5h.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5zM7 16c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v8zm4 0c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v8zm4 0c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v8z'
          ],
          tree: [
            'M11 15.542V20H9v-4.458L2 17l4.5-5.625L4 12l3.655-5.483L6 7l4-7 4 7-1.655-.483L16 12l-2.5-.625L18 17l-7-1.458z'
          ],
          'trending-down': [
            'M19 10c-.55 0-1 .45-1 1v1.37l-6.25-7.03-.01.01A.971.971 0 0011 5c-.23 0-.42.09-.59.21l-.01-.01-3.43 2.58-5.42-3.61-.01.01A.969.969 0 001 4c-.55 0-1 .45-1 1 0 .35.19.64.46.82l-.01.01 6 4 .01-.02c.15.11.33.19.54.19.23 0 .42-.09.59-.21l.01.01 3.26-2.45L16.77 14H15c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1z'
          ],
          'trending-up': [
            'M19 4h-4c-.55 0-1 .45-1 1s.45 1 1 1h1.77l-5.91 6.65L7.6 10.2l-.01.01C7.42 10.09 7.23 10 7 10c-.21 0-.39.08-.54.18l-.01-.02-6 4 .01.02c-.27.18-.46.47-.46.82 0 .55.45 1 1 1 .21 0 .39-.08.54-.18l.01.02 5.41-3.61 3.43 2.58.01-.01c.18.11.37.2.6.2.3 0 .56-.14.74-.34l.01.01L18 7.63V9c0 .55.45 1 1 1s1-.45 1-1V5c0-.55-.45-1-1-1z'
          ],
          truck: [
            'M16 0a1 1 0 011 1v11a1 1 0 011 1v3h.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H17v1a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1H6v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1H1.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H2v-3a1 1 0 011-1V1a1 1 0 112 0v3a2 2 0 012-2h6a2 2 0 012 2V1a1 1 0 011-1zm-4 10H8a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1zm-7 4H4a1 1 0 000 2h1a1 1 0 000-2zm11 0h-1a1 1 0 000 2h1a1 1 0 000-2zm-4.5 0a.5.5 0 110 1h-3l-.09-.008A.5.5 0 018.5 14zm0-1.5a.5.5 0 110 1h-3l-.09-.008a.5.5 0 01.09-.992zm0-1.5a.5.5 0 110 1h-3l-.09-.008A.5.5 0 018.5 11zM14 5H6v3h8V5z'
          ],
          'two-columns': [
            'M5 0H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm14.71 9.29l-3-3A1.003 1.003 0 0015 7v6a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71zM12 0H8c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z'
          ],
          unarchive: [
            'M16.434 0a1 1 0 01.857.486L20 5v14a1 1 0 01-1 1H1a1 1 0 01-1-1V5L2.709.486A1 1 0 013.566 0h12.868zM10 8c-.28 0-.53.11-.71.29l-3 3-.084.096A1.003 1.003 0 007.71 12.71L9 11.41v4.58l.007.116c.058.496.482.884.993.884.55 0 1-.45 1-1v-4.58l1.29 1.29.081.073c.171.139.389.227.629.227a1.003 1.003 0 00.71-1.71l-3-3-.096-.084A1.002 1.002 0 0010 8zm6-6H4L2 5.002h16L16 2z'
          ],
          underline: [
            'M10 17c3.3 0 6-2.7 6-6V3.5c0-.8-.7-1.5-1.5-1.5S13 2.7 13 3.5V11c0 1.7-1.3 3-3 3s-3-1.3-3-3V3.5C7 2.7 6.3 2 5.5 2S4 2.7 4 3.5V11c0 3.3 2.7 6 6 6zM16.5 19h-13c-.3 0-.5.2-.5.5s.2.5.5.5h13c.3 0 .5-.2.5-.5s-.2-.5-.5-.5z'
          ],
          undo: [
            'M5 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm9-9H3.41L5.7 2.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-4 4C.11 5.47 0 5.72 0 6c0 .28.11.53.29.71l4 4a1.003 1.003 0 001.42-1.42L3.41 7H14c2.21 0 4 1.79 4 4s-1.79 4-4 4H9v2h5c3.31 0 6-2.69 6-6s-2.69-6-6-6z'
          ],
          'ungroup-objects': [
            'M4.5 6C2.01 6 0 8.01 0 10.5S2.01 15 4.5 15 9 12.99 9 10.5 6.99 6 4.5 6zm11 0C13.01 6 11 8.01 11 10.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5S17.99 6 15.5 6z'
          ],
          'unknown-vehicle': [
            'M13 11.988v-4H4v-1l1-3h6V2.003a35.867 35.867 0 00-1-.015c-3.593 0-5.332.488-5.332.488-.67.188-1.424.864-1.674 1.503l-.004.009H3l-1 3H1a1 1 0 100 2h.333l-.28.84-.053.16v7.5a1.5 1.5 0 103 0v-.5h12v.5a1.5 1.5 0 103 0v-4.5h-5a1 1 0 01-1-1zm-8.5 1a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM19.83 2.782a2.392 2.392 0 00-.592-.853c-.276-.264-.64-.485-1.09-.663C17.695 1.09 17.132 1 16.457 1c-.523 0-.996.084-1.418.253a3.157 3.157 0 00-1.084.703c-.299.3-.532.656-.698 1.065-.166.41-.254.861-.264 1.353h2.096c0-.246.028-.476.085-.69.057-.214.145-.4.264-.56.119-.16.27-.287.456-.383.185-.095.406-.143.663-.143.38 0 .677.1.89.3.215.2.321.51.321.93.01.245-.035.45-.135.614-.1.164-.23.314-.392.45a8.598 8.598 0 01-.527.41 3.53 3.53 0 00-.542.485c-.171.187-.32.412-.45.676-.127.265-.206.592-.234.984v.614h1.924v-.519c.038-.273.13-.5.278-.683.147-.182.316-.343.506-.484a13.5 13.5 0 01.606-.424c.214-.14.408-.312.584-.512s.323-.442.442-.724.178-.642.178-1.079c0-.264-.059-.548-.178-.854zm-4.54 6.099v2.103h2.237V8.881H15.29z'
          ],
          unlock: [
            'M14 1c-2.21 0-4 1.79-4 4v4H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-2V5c0-1.1.9-2 2-2s2 .9 2 2v2c0 .55.45 1 1 1s1-.45 1-1V5c0-2.21-1.79-4-4-4z'
          ],
          unpin: [
            'M11.77 1.16c-.81.81-.74 2.28.02 3.76L6.1 8.71c-2.17-1.46-4.12-2-4.94-1.18l4.95 4.95-2.12 3.54 3.54-2.12 4.95 4.95c.82-.82.27-2.77-1.19-4.94l3.8-5.69c1.47.76 2.94.84 3.76.02l-7.08-7.08z'
          ],
          unresolve: [
            'M11.47 12.46c.16-.36.29-.74.38-1.14 0-.02.01-.04.01-.06.09-.4.14-.82.14-1.26 0-.44-.05-.86-.14-1.27 0-.02-.01-.04-.01-.06-.09-.4-.22-.78-.38-1.14-.01-.02-.02-.03-.02-.05a5.94 5.94 0 00-.61-1.03c0-.01-.01-.01-.01-.02a6.308 6.308 0 00-2.1-1.77c-.19-.1-.39-.18-.59-.26-.03-.01-.06-.02-.1-.03-.17-.07-.34-.12-.52-.17-.05-.01-.1-.03-.15-.04a4.34 4.34 0 00-.52-.09c-.05-.01-.11-.02-.17-.03C6.46 4.02 6.23 4 6 4c-3.31 0-6 2.69-6 6s2.69 6 6 6c.23 0 .46-.02.68-.04l.17-.03c.17-.02.34-.06.51-.09.05-.01.1-.03.15-.04.18-.05.36-.1.53-.17l.09-.03a5.973 5.973 0 002.68-2.04c0-.01.01-.01.01-.02.24-.32.44-.66.61-1.03.02-.01.03-.03.04-.05zM14 4c-.99 0-1.91.24-2.73.66a7.51 7.51 0 010 10.68c.82.42 1.74.66 2.73.66 3.31 0 6-2.69 6-6s-2.69-6-6-6z'
          ],
          updated: [
            'M10 0C6.71 0 3.82 1.6 2 4.05V2c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1H3.76C5.22 3.17 7.47 2 10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8c0-.55-.45-1-1-1s-1 .45-1 1c0 5.52 4.48 10 10 10s10-4.48 10-10S15.52 0 10 0zm4 7c-.28 0-.53.11-.71.29L9 11.58 6.71 9.29a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29.28 0 .53-.11.71-.29l5-5A1.003 1.003 0 0014 7z'
          ],
          upload: [
            'M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm4 10c-.28 0-.53-.11-.71-.29L11 7.41V15c0 .55-.45 1-1 1s-1-.45-1-1V7.41l-2.29 2.3a1.003 1.003 0 01-1.42-1.42l4-4c.18-.18.43-.29.71-.29s.53.11.71.29l4 4A1.003 1.003 0 0114 10z'
          ],
          user: [
            'M10 0C4.48 0 0 4.48 0 10c0 .33.02.65.05.97.01.12.03.23.05.35.03.2.05.4.09.59.03.14.06.28.1.42l.12.48c.05.16.1.31.15.46.05.13.09.27.15.4.06.16.13.32.21.48.05.11.1.22.16.33.09.17.17.34.27.5.05.09.1.17.15.25.11.18.22.35.34.52.04.06.08.11.12.17 1.19 1.62 2.85 2.86 4.78 3.53l.09.03c.46.15.93.27 1.42.36.08.01.17.03.25.04.49.07.99.12 1.5.12s1.01-.05 1.5-.12c.08-.01.17-.02.25-.04.49-.09.96-.21 1.42-.36l.09-.03c1.93-.67 3.59-1.91 4.78-3.53.04-.05.08-.1.12-.16.12-.17.23-.35.34-.53.05-.08.1-.16.15-.25.1-.17.19-.34.27-.51.05-.11.1-.21.15-.32.07-.16.14-.32.21-.49.05-.13.1-.26.14-.39.05-.15.11-.31.15-.46.05-.16.08-.32.12-.48.03-.14.07-.28.1-.42.04-.19.06-.39.09-.59.02-.12.04-.23.05-.35.05-.32.07-.64.07-.97 0-5.52-4.48-10-10-10zm0 18a7.94 7.94 0 01-6.15-2.89c.84-.44 1.86-.82 2.67-1.19 1.45-.65 1.3-1.05 1.35-1.59.01-.07.01-.14.01-.21-.51-.45-.93-1.08-1.2-1.8l-.01-.01c0-.01-.01-.02-.01-.03a4.42 4.42 0 01-.15-.48c-.33-.07-.53-.44-.61-.79-.08-.14-.23-.48-.2-.87.05-.51.26-.74.49-.83v-.08c0-.63.06-1.55.17-2.15.02-.17.06-.33.11-.5.21-.73.66-1.4 1.26-1.86.62-.47 1.5-.72 2.28-.72.78 0 1.65.25 2.27.73.6.46 1.05 1.12 1.26 1.86.05.16.08.33.11.5.11.6.17 1.51.17 2.15v.09c.22.1.42.33.46.82.04.39-.12.73-.2.87-.07.34-.27.71-.6.78-.04.16-.09.33-.15.48 0 .01-.02.05-.02.05-.26.71-.67 1.33-1.17 1.78 0 .08.01.16.01.23.05.54-.15.94 1.31 1.59.81.36 1.84.74 2.68 1.19A7.958 7.958 0 0110 18z'
          ],
          variable: [
            'M4.93 3.79a9.1 9.1 0 012.2-2.27L7.29 1c-1.38.59-2.57 1.33-3.55 2.22C2.46 4.39 1.49 5.72.83 7.23.28 8.51 0 9.81 0 11.12c0 2.28.83 4.57 2.49 6.86l.16-.55c-.49-1.23-.73-2.38-.73-3.44 0-1.67.28-3.46.84-5.36.55-1.9 1.28-3.51 2.17-4.84zm9.38 8.39l-.33-.2c-.37.54-.65.87-.82 1a.74.74 0 01-.42.12c-.19 0-.38-.12-.57-.37-.31-.42-.73-1.59-1.26-3.5.47-.85.86-1.41 1.19-1.67.23-.19.48-.29.74-.29.1 0 .28.04.53.11.26.07.48.11.68.11.27 0 .5-.1.68-.29.18-.19.27-.44.27-.75 0-.33-.09-.58-.27-.77-.18-.19-.44-.29-.78-.29-.3 0-.59.07-.86.22s-.61.47-1.02.97c-.31.37-.77 1.02-1.37 1.94a9.683 9.683 0 00-1.24-3.14l-3.24.59-.06.36c.24-.05.44-.07.61-.07.32 0 .59.14.8.43.33.45.8 1.8 1.39 4.07-.47.64-.78 1.06-.96 1.26-.28.32-.52.53-.7.62-.14.08-.3.11-.48.11-.14 0-.36-.08-.67-.23-.21-.1-.4-.15-.57-.15-.31 0-.57.11-.78.32s-.31.48-.31.8c0 .31.09.55.28.75.19.19.44.29.76.29.31 0 .6-.07.87-.2s.61-.42 1.02-.86c.41-.44.98-1.13 1.7-2.08.28.9.52 1.56.72 1.97.2.41.44.71.7.89.26.18.59.27.99.27.38 0 .77-.14 1.17-.43.54-.36 1.07-1 1.61-1.91zM17.51 1l-.15.54c.49 1.24.73 2.39.73 3.45 0 1.43-.21 2.96-.63 4.6-.33 1.26-.75 2.45-1.27 3.55-.52 1.11-1.02 1.97-1.51 2.6-.49.62-1.09 1.2-1.8 1.72l-.17.53c1.38-.59 2.57-1.34 3.55-2.23 1.29-1.17 2.26-2.5 2.91-4 .55-1.28.83-2.59.83-3.91 0-2.27-.83-4.56-2.49-6.85z'
          ],
          'vertical-bar-chart-asc': [
            'M8 7H7c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zM3 9H2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1zm10-5h-1c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm5-4h-1c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z'
          ],
          'vertical-bar-chart-desc': [
            'M3 0H2c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm5 4H7c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm5 3h-1c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm5 2h-1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1z'
          ],
          'vertical-distribution': [
            'M1 2h18c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1s.45 1 1 1zm2 5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1H3zm16 11H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          video: [
            'M19 2H1c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zM7 14V6l6 4-6 4z'
          ],
          virus: [
            'M15.249 13.835l1.251 1.251.354-.354.087-.077a1 1 0 011.327 1.491l-2.122 2.122-.087.077a1 1 0 01-1.327-1.491l.354-.354-1.251-1.251A6.466 6.466 0 0111 16.424L10.999 18h.501a1 1 0 01.117 1.993L11.5 20h-3a1 1 0 01-.117-1.993L8.5 18h.499v-1.577a6.46 6.46 0 01-2.538-.97L5.414 16.5l.354.354a1 1 0 01-1.327 1.491l-.087-.077-2.122-2.122a1 1 0 011.327-1.491l.087.077.354.354.97-.97a6.472 6.472 0 01-1.384-3.057l-.025.002L2 11.06v.44a1 1 0 01-1.993.117L0 11.5v-3a1 1 0 011.993-.117L2 8.5v.56h1.567A6.471 6.471 0 014.97 5.883l-.971-.969-.353.354-.087.077a1 1 0 01-1.327-1.491l2.122-2.122.087-.077a1 1 0 011.327 1.491l-.354.353 1.047 1.048A6.46 6.46 0 019 3.577L9 2h-.5A1 1 0 018.383.007L8.5 0h3a1 1 0 01.117 1.993L11.5 2H11v1.577a6.466 6.466 0 012.838 1.176l.04-.046L15.086 3.5l-.353-.353a1 1 0 011.327-1.491l.087.077 2.122 2.122a1 1 0 01-1.327 1.491l-.087-.077-.354-.354-1.207 1.207-.046.041a6.467 6.467 0 011.16 2.733H18V8.5a1 1 0 011.993-.117L20 8.5v3a1 1 0 01-1.993.117L18 11.5v-.605h-1.561a6.466 6.466 0 01-1.19 2.94zM12.5 11a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM8 6a2 2 0 100 4 2 2 0 000-4z'
          ],
          'volume-down': [
            'M15.92 3.93l-1.6 1.18A7.948 7.948 0 0116 10c0 1.84-.63 3.54-1.68 4.89l1.6 1.18A9.878 9.878 0 0018 10c0-2.29-.78-4.39-2.08-6.07zM11 3c-.28 0-.53.11-.71.29L7.59 6H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h4.59l2.71 2.71c.17.18.42.29.7.29.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z'
          ],
          'volume-off': [
            'M14 3c-.28 0-.53.11-.71.29L10.59 6H6c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h4.59l2.71 2.71c.17.18.42.29.7.29.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z'
          ],
          'volume-up': [
            'M9 3.43c-.28 0-.53.11-.71.29l-2.7 2.71H1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h4.59l2.71 2.71a1.003 1.003 0 001.71-.71v-12c-.01-.55-.46-1-1.01-1zm8.31-1.56l-1.62 1.2C17.14 5.16 18 7.69 18 10.43s-.86 5.27-2.31 7.37l1.62 1.2C19 16.57 20 13.62 20 10.43c0-3.18-1-6.13-2.69-8.56zm-3.39 2.49l-1.6 1.18A7.948 7.948 0 0114 10.43c0 1.84-.63 3.54-1.68 4.89l1.6 1.18A9.94 9.94 0 0016 10.43c0-2.28-.78-4.38-2.08-6.07z'
          ],
          walk: [
            'M16 10h-2c-.23 0-.42-.09-.59-.21l-.01.01-1.69-1.27-.63 3.14 2.62 2.62c.19.18.3.43.3.71v4c0 .55-.45 1-1 1s-1-.45-1-1v-3.59L9.39 12.8l-2.45 6.55h-.01c-.14.38-.5.65-.93.65-.55 0-1-.45-1-1 0-.12.03-.24.07-.35h-.01L9.43 7h-2.9l-1.7 2.55-.01-.01c-.18.27-.47.46-.82.46-.55 0-1-.45-1-1 0-.21.08-.39.18-.54l-.01-.01 2-3 .02.01C5.36 5.19 5.65 5 6 5h4.18l.36-.96c-.33-.43-.54-.96-.54-1.54a2.5 2.5 0 015 0A2.5 2.5 0 0112.5 5c-.06 0-.12-.01-.18-.02l-.44 1.18L14.33 8H16c.55 0 1 .45 1 1s-.45 1-1 1z'
          ],
          'warning-sign': [
            'M19.86 17.52l.01-.01-9-16-.01.01C10.69 1.21 10.37 1 10 1s-.69.21-.86.52l-.01-.01-9 16 .01.01c-.08.14-.14.3-.14.48 0 .55.45 1 1 1h18c.55 0 1-.45 1-1 0-.18-.06-.34-.14-.48zM11 17H9v-2h2v2zm0-3H9V6h2v8z'
          ],
          'waterfall-chart': [
            'M13 7h2c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1zm-9 8h1c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm4-6h2c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zm11-5h-1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm0 12H2V3c0-.55-.45-1-1-1s-1 .45-1 1v14a.998.998 0 001 1h18c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          widget: [
            'M18 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM2 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm15-1h2V5h-2v10zM3 5H1v10h2V5zM2 0C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm3 3h10V1H5v2zm13 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM5 19h10v-2H5v2z'
          ],
          'widget-button': [
            'M1 4h18c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zm1 2v8h16V6H2zm4 5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z'
          ],
          'widget-footer': [
            'M17 0H3c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 18H4v-4h12v4zm0-5H4V2h12v11z'
          ],
          'widget-header': [
            'M17 0H3c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 18H4V7h12v11zm0-12H4V2h12v4z'
          ],
          wrench: [
            'M19.8 4.44L16.13 8.1l-3.55-.71-.71-3.53L15.54.21c-2.01-.53-4.23-.03-5.8 1.53-1.86 1.85-2.23 4.6-1.14 6.83L.59 16.59C.22 16.95 0 17.45 0 18a2 2 0 002 2c.55 0 1.05-.22 1.41-.59l8.03-8.04c2.23 1.05 4.97.67 6.82-1.16 1.57-1.56 2.07-3.77 1.54-5.77z'
          ],
          'zoom-in': [
            'M19.56 17.44l-4.94-4.94A8.004 8.004 0 0016 8c0-4.42-3.58-8-8-8S0 3.58 0 8s3.58 8 8 8c1.67 0 3.21-.51 4.5-1.38l4.94 4.94a1.498 1.498 0 102.12-2.12zM8 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm3-7H9V5c0-.55-.45-1-1-1s-1 .45-1 1v2H5c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V9h2c.55 0 1-.45 1-1s-.45-1-1-1z'
          ],
          'zoom-out': [
            'M11 7H5c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1zm8.56 10.44l-4.94-4.94A8.004 8.004 0 0016 8c0-4.42-3.58-8-8-8S0 3.58 0 8s3.58 8 8 8c1.67 0 3.21-.51 4.5-1.38l4.94 4.94a1.498 1.498 0 102.12-2.12zM8 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z'
          ],
          'zoom-to-fit': [
            'M1 7c.55 0 1-.45 1-1V2h4c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1v5c0 .55.45 1 1 1zm5 1a1.003 1.003 0 00-1.71-.71l-2 2c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l2 2a1.003 1.003 0 001.42-1.42L4.41 10 5.7 8.71c.19-.18.3-.43.3-.71zm2-2c.28 0 .53-.11.71-.29L10 4.41l1.29 1.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-2-2C10.53 2.11 10.28 2 10 2s-.53.11-.71.29l-2 2A1.003 1.003 0 008 6zM6 18H2v-4c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1zm8-6a1.003 1.003 0 001.71.71l2-2c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-2-2a1.003 1.003 0 00-1.42 1.42l1.3 1.29-1.29 1.29c-.19.18-.3.43-.3.71zm5-12h-5c-.55 0-1 .45-1 1s.45 1 1 1h4v4c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zm-7 14c-.28 0-.53.11-.71.29L10 15.59 8.71 14.3A.965.965 0 008 14a1.003 1.003 0 00-.71 1.71l2 2c.18.18.43.29.71.29s.53-.11.71-.29l2-2A1.003 1.003 0 0012 14zm7-1c-.55 0-1 .45-1 1v4h-4c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1z'
          ]
        },
        cl = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          var c;
          return (
            yn(t, e),
            (c = t),
            (t.prototype.render = function() {
              var e = this.props.icon;
              if (null == e || 'boolean' == typeof e) return null;
              if ('string' != typeof e) return e;
              var t = this.props,
                n = t.className,
                r = t.color,
                o = t.htmlTitle,
                a = t.iconSize,
                l = void 0 === a ? c.SIZE_STANDARD : a,
                s = t.intent,
                i = t.title,
                h = void 0 === i ? e : i,
                p = t.tagName,
                u = void 0 === p ? 'span' : p,
                v = Hn(t, [
                  'className',
                  'color',
                  'htmlTitle',
                  'iconSize',
                  'intent',
                  'title',
                  'tagName'
                ]),
                m = l >= c.SIZE_LARGE ? c.SIZE_LARGE : c.SIZE_STANDARD,
                d = this.renderSvgPaths(m, e),
                f = Cr()(rn, pn(e), un(s), n),
                z = '0 0 ' + m + ' ' + m;
              return Ln.createElement(
                u,
                Mn(Mn({}, v), { className: f, title: o }),
                Ln.createElement(
                  'svg',
                  { fill: r, 'data-icon': e, width: l, height: l, viewBox: z },
                  h && Ln.createElement('desc', null, h),
                  d
                )
              );
            }),
            (t.prototype.renderSvgPaths = function(e, t) {
              var n = (e === c.SIZE_STANDARD ? el : tl)[t];
              return null == n
                ? null
                : n.map(function(e, t) {
                    return Ln.createElement('path', {
                      key: t,
                      d: e,
                      fillRule: 'evenodd'
                    });
                  });
            }),
            (t.displayName = xn + '.Icon'),
            (t.SIZE_STANDARD = 16),
            (t.SIZE_LARGE = 20),
            (c = Vn([Ar.polyfill], t))
          );
        })(Rn),
        nl = 'M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90',
        rl = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          var c;
          return (
            yn(t, e),
            (c = t),
            (t.prototype.componentDidUpdate = function(e) {
              e.value !== this.props.value && this.forceUpdate();
            }),
            (t.prototype.render = function() {
              var e,
                t = this.props,
                n = t.className,
                r = t.intent,
                o = t.value,
                a = t.tagName,
                l = void 0 === a ? 'div' : a,
                s = this.getSize(),
                i = Cr()(Lc, un(r), (((e = {})[bc] = null != o), e), n),
                h = Math.min(16, (4 * c.SIZE_LARGE) / s),
                p = 280 - 280 * (null == o ? 0.25 : Nn(o, 0, 1));
              return Ln.createElement(
                l,
                { className: i },
                Ln.createElement(
                  l,
                  { className: gc },
                  Ln.createElement(
                    'svg',
                    {
                      width: s,
                      height: s,
                      strokeWidth: h.toFixed(2),
                      viewBox: this.getViewBox(h)
                    },
                    Ln.createElement('path', { className: Ac, d: nl }),
                    Ln.createElement('path', {
                      className: Cc,
                      d: nl,
                      pathLength: 280,
                      strokeDasharray: '280 280',
                      strokeDashoffset: p
                    })
                  )
                )
              );
            }),
            (t.prototype.validateProps = function(e) {
              var t = e.className,
                c = void 0 === t ? '' : t;
              null != e.size &&
                (c.indexOf(w) >= 0 || c.indexOf(C) >= 0) &&
                console.warn(
                  '[Blueprint] <Spinner> Classes.SMALL/LARGE are ignored if size prop is set.'
                );
            }),
            (t.prototype.getSize = function() {
              var e = this.props,
                t = e.className,
                n = void 0 === t ? '' : t,
                r = e.size;
              return null == r
                ? n.indexOf(w) >= 0
                  ? c.SIZE_SMALL
                  : n.indexOf(C) >= 0
                  ? c.SIZE_LARGE
                  : c.SIZE_STANDARD
                : Math.max(10, r);
            }),
            (t.prototype.getViewBox = function(e) {
              var t = 45 + e / 2,
                c = (50 - t).toFixed(2),
                n = (2 * t).toFixed(2);
              return c + ' ' + c + ' ' + n + ' ' + n;
            }),
            (t.displayName = xn + '.Spinner'),
            (t.SIZE_SMALL = 20),
            (t.SIZE_STANDARD = 50),
            (t.SIZE_LARGE = 100),
            (c = Vn([Ar.polyfill], t))
          );
        })(Rn),
        ol = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = { isActive: !1 }),
              (t.currentKeyDown = null),
              (t.handleKeyDown = function(e) {
                var c, n;
                tr(e.which) &&
                  (e.preventDefault(),
                  e.which !== t.currentKeyDown && t.setState({ isActive: !0 })),
                  (t.currentKeyDown = e.which),
                  null === (n = (c = t.props).onKeyDown) ||
                    void 0 === n ||
                    n.call(c, e);
              }),
              (t.handleKeyUp = function(e) {
                var c, n;
                tr(e.which) &&
                  (t.setState({ isActive: !1 }), Gn(t.buttonRef).click()),
                  (t.currentKeyDown = null),
                  null === (n = (c = t.props).onKeyUp) ||
                    void 0 === n ||
                    n.call(c, e);
              }),
              t
            );
          }
          return (
            yn(t, e),
            (t.prototype.getCommonButtonProps = function() {
              var e,
                t = this.props,
                c = t.alignText,
                n = t.fill,
                r = t.large,
                o = t.loading,
                a = t.outlined,
                l = t.minimal,
                s = t.small,
                i = t.tabIndex,
                h = this.props.disabled || o;
              return {
                className: Cr()(
                  fe,
                  (((e = {})[d] = this.state.isActive || this.props.active),
                  (e[M] = h),
                  (e[H] = n),
                  (e[C] = r),
                  (e[b] = o),
                  (e[A] = l),
                  (e[S] = a),
                  (e[w] = s),
                  e),
                  sn(c),
                  un(this.props.intent),
                  this.props.className
                ),
                disabled: h,
                onClick: h ? void 0 : this.props.onClick,
                onKeyDown: this.handleKeyDown,
                onKeyUp: this.handleKeyUp,
                tabIndex: h ? -1 : i
              };
            }),
            (t.prototype.renderChildren = function() {
              var e = this.props,
                t = e.children,
                c = e.icon,
                n = e.loading,
                r = e.rightIcon,
                o = e.text;
              return [
                n &&
                  Ln.createElement(rl, {
                    key: 'loading',
                    className: ye,
                    size: cl.SIZE_LARGE
                  }),
                Ln.createElement(cl, { key: 'leftIcon', icon: c }),
                (!yr(o) || !yr(t)) &&
                  Ln.createElement(
                    'span',
                    { key: 'text', className: Me },
                    o,
                    t
                  ),
                Ln.createElement(cl, { key: 'rightIcon', icon: r })
              ];
            }),
            t
          );
        })(Rn),
        al = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.handleRef = Bn(t.props.elementRef)
                ? (t.buttonRef = t.props.elementRef)
                : function(e) {
                    var c;
                    (t.buttonRef = e),
                      null === (c = t.props.elementRef) || void 0 === c || c(e);
                  }),
              t
            );
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              return Ln.createElement(
                'button',
                Mn(
                  { type: 'button', ref: this.handleRef },
                  Fn(this.props),
                  this.getCommonButtonProps()
                ),
                this.renderChildren()
              );
            }),
            (t.displayName = xn + '.Button'),
            t
          );
        })(ol),
        ll = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.handleRef = Bn(t.props.elementRef)
                ? (t.buttonRef = t.props.elementRef)
                : function(e) {
                    var c;
                    (t.buttonRef = e),
                      null === (c = t.props.elementRef) || void 0 === c || c(e);
                  }),
              t
            );
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.href,
                c = e.tabIndex,
                n = void 0 === c ? 0 : c,
                r = this.getCommonButtonProps();
              return Ln.createElement(
                'a',
                Mn({ role: 'button', ref: this.handleRef }, Fn(this.props), r, {
                  href: r.disabled ? void 0 : t,
                  tabIndex: r.disabled ? -1 : n
                }),
                this.renderChildren()
              );
            }),
            (t.displayName = xn + '.AnchorButton'),
            t
          );
        })(ol);
      function sl(e, t) {
        return function(c) {
          var n = c.className,
            r = c.elementRef,
            o = Hn(c, ['className', 'elementRef']);
          return Ln.createElement(
            e,
            Mn(Mn({}, o), { className: Cr()(t, n), ref: r })
          );
        };
      }
      var il,
        hl = sl('h1', re),
        pl = sl('h2', re),
        ul = sl('h3', re),
        vl = sl('h4', re),
        ml = sl('h5', re),
        dl = sl('h6', re),
        fl = sl('blockquote', te),
        zl = sl('code', ce),
        yl = sl('pre', ne),
        Ml = sl('label', Et),
        Hl = sl('ol', oe),
        Vl = sl('ul', oe),
        El = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              return Ln.createElement(
                pa,
                Mn({}, this.props, { className: Yt, hasBackdrop: !0 }),
                Ln.createElement(
                  'div',
                  { className: Ne },
                  Ln.createElement(
                    'div',
                    {
                      className: Cr()(Oe, this.props.className),
                      style: this.props.style
                    },
                    this.maybeRenderHeader(),
                    this.props.children
                  )
                )
              );
            }),
            (t.prototype.validateProps = function(e) {
              null == e.title &&
                (null != e.icon && console.warn(Cn),
                null != e.isCloseButtonShown && console.warn(bn));
            }),
            (t.prototype.maybeRenderCloseButton = function() {
              return !1 !== this.props.isCloseButtonShown
                ? Ln.createElement(al, {
                    'aria-label': 'Close',
                    className: Te,
                    icon: Ln.createElement(cl, {
                      icon: 'small-cross',
                      iconSize: cl.SIZE_LARGE
                    }),
                    minimal: !0,
                    onClick: this.props.onClose
                  })
                : void 0;
            }),
            (t.prototype.maybeRenderHeader = function() {
              var e = this.props,
                t = e.icon,
                c = e.title;
              if (null != c)
                return Ln.createElement(
                  'div',
                  { className: Re },
                  Ln.createElement(cl, { icon: t, iconSize: cl.SIZE_LARGE }),
                  Ln.createElement(vl, null, c),
                  this.maybeRenderCloseButton()
                );
            }),
            (t.defaultProps = { canOutsideClickClose: !0, isOpen: !1 }),
            (t.displayName = xn + '.Dialog'),
            Vn([Ar.polyfill], t)
          );
        })(Rn),
        Ll = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.handleCancel = function(e) {
                return t.internalHandleCallbacks(!1, e);
              }),
              (t.handleConfirm = function(e) {
                return t.internalHandleCallbacks(!0, e);
              }),
              t
            );
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.canEscapeKeyCancel,
                c = e.canOutsideClickCancel,
                n = e.children,
                r = e.className,
                o = e.icon,
                a = e.intent,
                l = e.cancelButtonText,
                s = e.confirmButtonText,
                i =
                  (e.onClose,
                  Hn(e, [
                    'canEscapeKeyCancel',
                    'canOutsideClickCancel',
                    'children',
                    'className',
                    'icon',
                    'intent',
                    'cancelButtonText',
                    'confirmButtonText',
                    'onClose'
                  ]));
              return Ln.createElement(
                El,
                Mn({}, i, {
                  className: Cr()(se, r),
                  canEscapeKeyClose: t,
                  canOutsideClickClose: c,
                  onClose: this.handleCancel,
                  portalContainer: this.props.portalContainer
                }),
                Ln.createElement(
                  'div',
                  { className: ie },
                  Ln.createElement(cl, { icon: o, iconSize: 40, intent: a }),
                  Ln.createElement('div', { className: he }, n)
                ),
                Ln.createElement(
                  'div',
                  { className: pe },
                  Ln.createElement(al, {
                    intent: a,
                    text: s,
                    onClick: this.handleConfirm
                  }),
                  l &&
                    Ln.createElement(al, {
                      text: l,
                      onClick: this.handleCancel
                    })
                )
              );
            }),
            (t.prototype.validateProps = function(e) {
              null == e.onClose &&
                (null == e.cancelButtonText) != (null == e.onCancel) &&
                console.warn(
                  '[Blueprint] <Alert> cancelButtonText and onCancel should be set together.'
                );
              var t = null != e.onCancel || null != e.onClose;
              e.canEscapeKeyCancel &&
                !t &&
                console.warn(
                  '[Blueprint] <Alert> canEscapeKeyCancel enabled without onCancel or onClose handler.'
                ),
                e.canOutsideClickCancel &&
                  !t &&
                  console.warn(
                    '[Blueprint] <Alert> canOutsideClickCancel enbaled without onCancel or onClose handler.'
                  );
            }),
            (t.prototype.internalHandleCallbacks = function(e, t) {
              var c = this.props,
                n = c.onCancel,
                r = c.onClose,
                o = c.onConfirm;
              pr(e ? o : n, t), pr(r, e, t);
            }),
            (t.defaultProps = {
              canEscapeKeyCancel: !1,
              canOutsideClickCancel: !1,
              confirmButtonText: 'OK',
              isOpen: !1
            }),
            (t.displayName = xn + '.Alert'),
            Vn([Ar.polyfill], t)
          );
        })(Rn),
        gl = function(e) {
          var t,
            c = Cr()(
              ue,
              (((t = {})[ve] = e.current), (t[M] = e.disabled), t),
              e.className
            ),
            n =
              null != e.icon ? Ln.createElement(cl, { icon: e.icon }) : void 0;
          return null == e.href && null == e.onClick
            ? Ln.createElement('span', { className: c }, n, e.text, e.children)
            : Ln.createElement(
                'a',
                {
                  className: c,
                  href: e.href,
                  onClick: e.disabled ? null : e.onClick,
                  tabIndex: e.disabled ? null : 0,
                  target: e.target
                },
                n,
                e.text,
                e.children
              );
        },
        Cl = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.className,
                c = e.title;
              return null == c
                ? Ln.createElement('li', { className: Cr()(Nt, t) })
                : Ln.createElement(
                    'li',
                    { className: Cr()(wt, t) },
                    Ln.createElement(dl, null, c)
                  );
            }),
            (t.displayName = xn + '.MenuDivider'),
            t
          );
        })(Ln.Component),
        bl = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = { isContentOverflowing: !1, textContent: '' }),
              (t.textRef = null),
              t
            );
          }
          return (
            yn(t, e),
            (t.prototype.componentDidMount = function() {
              this.update();
            }),
            (t.prototype.componentDidUpdate = function() {
              this.update();
            }),
            (t.prototype.render = function() {
              var e,
                t = this,
                c = Cr()(
                  (((e = {})[ee] = this.props.ellipsize), e),
                  this.props.className
                ),
                n = this.props,
                r = n.children,
                o = n.tagName,
                a = void 0 === o ? 'div' : o;
              return Ln.createElement(
                a,
                {
                  className: c,
                  ref: function(e) {
                    return (t.textRef = e);
                  },
                  title: this.state.isContentOverflowing
                    ? this.state.textContent
                    : void 0
                },
                r
              );
            }),
            (t.prototype.update = function() {
              if (null != this.textRef) {
                var e = {
                  isContentOverflowing:
                    this.props.ellipsize &&
                    this.textRef.scrollWidth > this.textRef.clientWidth,
                  textContent: this.textRef.textContent
                };
                this.setState(e);
              }
            }),
            (t.displayName = xn + '.Text'),
            Vn([Ar.polyfill], t)
          );
        })(Rn),
        Al = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              var e,
                t,
                c = this.props,
                n = c.active,
                r = c.className,
                o = c.children,
                a = c.disabled,
                l = c.icon,
                s = c.intent,
                i = (c.labelClassName, c.labelElement),
                h = c.multiline,
                p = (c.popoverProps, c.shouldDismissPopover),
                u = c.text,
                v = c.textClassName,
                m = c.tagName,
                f = void 0 === m ? 'a' : m,
                z = Hn(c, [
                  'active',
                  'className',
                  'children',
                  'disabled',
                  'icon',
                  'intent',
                  'labelClassName',
                  'labelElement',
                  'multiline',
                  'popoverProps',
                  'shouldDismissPopover',
                  'text',
                  'textClassName',
                  'tagName'
                ]),
                y = null != o,
                V = un(s),
                E = Cr()(
                  At,
                  V,
                  (((e = {})[d] = n),
                  (e[U] = n && null == V),
                  (e[M] = a),
                  (e[nc] = p && !a && !y),
                  e),
                  r
                ),
                L = Ln.createElement(
                  f,
                  Mn(Mn(Mn({}, z), a ? Ol : {}), { className: E }),
                  Ln.createElement(cl, { icon: l }),
                  Ln.createElement(
                    bl,
                    { className: Cr()(H, v), ellipsize: !h },
                    u
                  ),
                  this.maybeRenderLabel(i),
                  y ? Ln.createElement(cl, { icon: 'caret-right' }) : void 0
                ),
                g = Cr()((((t = {})[Ot] = y), t));
              return Ln.createElement(
                'li',
                { className: g },
                this.maybeRenderPopover(L, o)
              );
            }),
            (t.prototype.maybeRenderLabel = function(e) {
              var t = this.props,
                c = t.label,
                n = t.labelClassName;
              return null == c && null == e
                ? null
                : Ln.createElement('span', { className: Cr()(St, n) }, c, e);
            }),
            (t.prototype.maybeRenderPopover = function(e, t) {
              if (null == t) return e;
              var c = this.props,
                n = c.disabled,
                r = c.popoverProps;
              return Ln.createElement(
                Ya,
                Mn(
                  {
                    autoFocus: !1,
                    captureDismiss: !1,
                    disabled: n,
                    enforceFocus: !1,
                    hoverCloseDelay: 0,
                    interactionKind: Wa.HOVER,
                    modifiers: Sl,
                    position: h.RIGHT_TOP,
                    usePortal: !1
                  },
                  r,
                  {
                    content: Ln.createElement(Nl, null, t),
                    minimal: !0,
                    popoverClassName: Cr()(Ot, r.popoverClassName),
                    target: e
                  }
                )
              );
            }),
            (t.defaultProps = {
              disabled: !1,
              multiline: !1,
              popoverProps: {},
              shouldDismissPopover: !0,
              text: ''
            }),
            (t.displayName = xn + '.MenuItem'),
            Vn([Ar.polyfill], t)
          );
        })(Rn),
        Sl = {
          flip: { boundariesElement: 'viewport', padding: 20 },
          offset: { offset: -5 },
          preventOverflow: { boundariesElement: 'viewport', padding: 20 }
        },
        Ol = {
          href: void 0,
          onClick: void 0,
          onMouseDown: void 0,
          onMouseEnter: void 0,
          onMouseLeave: void 0,
          tabIndex: -1
        },
        Nl = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              var e,
                t = this.props,
                c = t.className,
                n = t.children,
                r = t.large,
                o = t.ulRef,
                a = Hn(t, ['className', 'children', 'large', 'ulRef']),
                l = Cr()(bt, (((e = {})[C] = r), e), c);
              return Ln.createElement(
                'ul',
                Mn({}, a, { className: l, ref: o }),
                n
              );
            }),
            (t.displayName = xn + '.Menu'),
            (t.Divider = Cl),
            (t.Item = Al),
            Vn([Ar.polyfill], t)
          );
        })(Rn);
      !(function(e) {
        (e[(e.NONE = 0)] = 'NONE'),
          (e[(e.GROW = 1)] = 'GROW'),
          (e[(e.SHRINK = 2)] = 'SHRINK');
      })(il || (il = {}));
      var wl,
        Tl = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = {
                direction: il.NONE,
                lastOverflowCount: 0,
                overflow: [],
                visible: t.props.items
              }),
              (t.previousWidths = new Map()),
              (t.spacer = null),
              (t.resize = function(e) {
                var c = e.some(function(e) {
                  var c = t.previousWidths.get(e.target) || 0;
                  return e.contentRect.width > c;
                });
                t.repartition(c),
                  e.forEach(function(e) {
                    return t.previousWidths.set(e.target, e.contentRect.width);
                  });
              }),
              t
            );
          }
          return (
            yn(t, e),
            (t.ofType = function() {
              return t;
            }),
            (t.prototype.componentDidMount = function() {
              this.repartition(!1);
            }),
            (t.prototype.shouldComponentUpdate = function(e, t) {
              return !(this.state !== t && nr(this.state, t));
            }),
            (t.prototype.componentDidUpdate = function(e, t) {
              e.observeParents !== this.props.observeParents &&
                console.warn(
                  '[Blueprint] <OverflowList> does not support changing observeParents after mounting.'
                ),
                (e.collapseFrom === this.props.collapseFrom &&
                  e.items === this.props.items &&
                  e.minVisibleItems === this.props.minVisibleItems &&
                  e.overflowRenderer === this.props.overflowRenderer &&
                  e.visibleItemRenderer === this.props.visibleItemRenderer) ||
                  this.setState({
                    direction: il.GROW,
                    lastOverflowCount: 0,
                    overflow: [],
                    visible: this.props.items
                  }),
                nr(t, this.state) || this.repartition(!1);
              var c = this.state,
                n = c.direction,
                r = c.overflow,
                o = c.lastOverflowCount;
              n === il.NONE &&
                n !== t.direction &&
                r.length !== o &&
                pr(this.props.onOverflow, r);
            }),
            (t.prototype.render = function() {
              var e = this,
                t = this.props,
                c = t.className,
                n = t.collapseFrom,
                r = t.observeParents,
                o = t.style,
                a = t.tagName,
                l = void 0 === a ? 'div' : a,
                s = t.visibleItemRenderer,
                i = this.maybeRenderOverflow(),
                h = Ln.createElement(
                  l,
                  { className: Cr()(Dt, c), style: o },
                  n === kn.START ? i : null,
                  this.state.visible.map(s),
                  n === kn.END ? i : null,
                  Ln.createElement('div', {
                    className: Ft,
                    ref: function(t) {
                      return (e.spacer = t);
                    }
                  })
                );
              return Ln.createElement(
                Pa,
                { onResize: this.resize, observeParents: r },
                h
              );
            }),
            (t.prototype.maybeRenderOverflow = function() {
              var e = this.state.overflow;
              return 0 === e.length ? null : this.props.overflowRenderer(e);
            }),
            (t.prototype.repartition = function(e) {
              var t = this;
              null != this.spacer &&
                (e
                  ? this.setState(function(e) {
                      return {
                        direction: il.GROW,
                        lastOverflowCount:
                          e.direction === il.NONE
                            ? e.overflow.length
                            : e.lastOverflowCount,
                        overflow: [],
                        visible: t.props.items
                      };
                    })
                  : this.spacer.getBoundingClientRect().width < 0.9
                  ? this.setState(function(e) {
                      if (e.visible.length <= t.props.minVisibleItems)
                        return null;
                      var c = t.props.collapseFrom === kn.START,
                        n = e.visible.slice(),
                        r = c ? n.shift() : n.pop();
                      if (void 0 === r) return null;
                      var o = c ? En(e.overflow, [r]) : En([r], e.overflow);
                      return {
                        direction:
                          e.direction === il.NONE ? il.SHRINK : e.direction,
                        overflow: o,
                        visible: n
                      };
                    })
                  : this.setState({ direction: il.NONE }));
            }),
            (t.displayName = xn + '.OverflowList'),
            (t.defaultProps = { collapseFrom: kn.START, minVisibleItems: 0 }),
            t
          );
        })(Ln.Component),
        Pl = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.renderOverflow = function(e) {
                var c = t.props.collapseFrom,
                  n = c === kn.END ? h.BOTTOM_RIGHT : h.BOTTOM_LEFT,
                  r = e;
                return (
                  c === kn.START && (r = e.slice().reverse()),
                  Ln.createElement(
                    'li',
                    null,
                    Ln.createElement(
                      Ya,
                      Mn({ position: n }, t.props.popoverProps),
                      Ln.createElement('span', { className: de }),
                      Ln.createElement(
                        Nl,
                        null,
                        r.map(t.renderOverflowBreadcrumb)
                      )
                    )
                  )
                );
              }),
              (t.renderOverflowBreadcrumb = function(e, t) {
                var c = null != e.href || null != e.onClick,
                  n = Fn(e);
                return Ln.createElement(
                  Al,
                  Mn({ disabled: !c }, n, { text: e.text, key: t })
                );
              }),
              (t.renderBreadcrumbWrapper = function(e, c) {
                var n = t.props.items[t.props.items.length - 1] === e;
                return Ln.createElement(
                  'li',
                  { key: c },
                  t.renderBreadcrumb(e, n)
                );
              }),
              t
            );
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.className,
                c = e.collapseFrom,
                n = e.items,
                r = e.minVisibleItems,
                o = e.overflowListProps,
                a = void 0 === o ? {} : o;
              return Ln.createElement(
                Tl,
                Mn({ collapseFrom: c, minVisibleItems: r, tagName: 'ul' }, a, {
                  className: Cr()(me, a.className, t),
                  items: n,
                  overflowRenderer: this.renderOverflow,
                  visibleItemRenderer: this.renderBreadcrumbWrapper
                })
              );
            }),
            (t.prototype.renderBreadcrumb = function(e, t) {
              return t && null != this.props.currentBreadcrumbRenderer
                ? this.props.currentBreadcrumbRenderer(e)
                : null != this.props.breadcrumbRenderer
                ? this.props.breadcrumbRenderer(e)
                : Ln.createElement(gl, Mn({ current: t }, e));
            }),
            (t.defaultProps = { collapseFrom: kn.START }),
            Vn([Ar.polyfill], t)
          );
        })(Rn),
        Il = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              var e,
                t = this.props,
                c = t.alignText,
                n = t.className,
                r = t.fill,
                o = t.minimal,
                a = t.large,
                l = t.vertical,
                s = Hn(t, [
                  'alignText',
                  'className',
                  'fill',
                  'minimal',
                  'large',
                  'vertical'
                ]),
                i = Cr()(
                  ze,
                  (((e = {})[H] = r), (e[C] = a), (e[A] = o), (e[T] = l), e),
                  sn(c),
                  n
                );
              return Ln.createElement(
                'div',
                Mn({}, s, { className: i }),
                this.props.children
              );
            }),
            (t.displayName = xn + '.ButtonGroup'),
            Vn([Ar.polyfill], t)
          );
        })(Rn),
        Rl = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              var e,
                t = this.props,
                c = t.className,
                n = t.children,
                r = t.icon,
                o = t.intent,
                a = t.title,
                l = Hn(t, ['className', 'children', 'icon', 'intent', 'title']),
                s = this.getIconName(r, o),
                i = Cr()(He, un(o), (((e = {})[Ve] = null != s), e), c);
              return Ln.createElement(
                'div',
                Mn({ className: i }, l),
                s && Ln.createElement(cl, { icon: s, iconSize: cl.SIZE_LARGE }),
                a && Ln.createElement(vl, null, a),
                n
              );
            }),
            (t.prototype.getIconName = function(e, t) {
              if (null !== e) {
                if (void 0 !== e) return e;
                switch (t) {
                  case i.DANGER:
                    return 'error';
                  case i.PRIMARY:
                    return 'info-sign';
                  case i.WARNING:
                    return 'warning-sign';
                  case i.SUCCESS:
                    return 'tick';
                  default:
                    return;
                }
              }
            }),
            (t.displayName = xn + '.Callout'),
            Vn([Ar.polyfill], t)
          );
        })(Rn),
        kl = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              var e,
                t = this.props,
                c = t.className,
                n = t.elevation,
                r = t.interactive,
                o = Hn(t, ['className', 'elevation', 'interactive']),
                a = Cr()(Ee, (((e = {})[g] = r), e), hn(n), c);
              return Ln.createElement('div', Mn({ className: a }, o));
            }),
            (t.displayName = xn + '.Card'),
            (t.defaultProps = { elevation: s.ZERO, interactive: !1 }),
            Vn([Ar.polyfill], t)
          );
        })(Rn);
      !(function(e) {
        (e[(e.OPEN_START = 0)] = 'OPEN_START'),
          (e[(e.OPENING = 1)] = 'OPENING'),
          (e[(e.OPEN = 2)] = 'OPEN'),
          (e[(e.CLOSING_START = 3)] = 'CLOSING_START'),
          (e[(e.CLOSING = 4)] = 'CLOSING'),
          (e[(e.CLOSED = 5)] = 'CLOSED');
      })(wl || (wl = {}));
      var _l = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = {
                animationState: t.props.isOpen ? wl.OPEN : wl.CLOSED,
                height: void 0,
                heightWhenOpen: void 0
              }),
              (t.contentsRefHandler = function(e) {
                if (((t.contents = e), null != t.contents)) {
                  var c = t.contents.clientHeight;
                  t.setState({
                    animationState: t.props.isOpen ? wl.OPEN : wl.CLOSED,
                    height: 0 === c ? void 0 : c + 'px',
                    heightWhenOpen: 0 === c ? void 0 : c
                  });
                }
              }),
              t
            );
          }
          return (
            yn(t, e),
            (t.getDerivedStateFromProps = function(e, t) {
              var c = e.isOpen,
                n = t.animationState;
              if (c)
                switch (n) {
                  case wl.OPEN:
                  case wl.OPENING:
                    break;
                  default:
                    return { animationState: wl.OPEN_START };
                }
              else
                switch (n) {
                  case wl.CLOSED:
                  case wl.CLOSING:
                    break;
                  default:
                    return {
                      animationState: wl.CLOSING_START,
                      height: t.heightWhenOpen + 'px'
                    };
                }
              return null;
            }),
            (t.prototype.render = function() {
              var e = this.state.animationState !== wl.CLOSED,
                t = e || this.props.keepChildrenMounted,
                c = e && this.state.animationState !== wl.CLOSING,
                n = 'auto' === this.state.height,
                r = {
                  height: e ? this.state.height : void 0,
                  overflowY: n ? 'visible' : void 0,
                  transition: n ? 'none' : void 0
                },
                o = {
                  transform: c
                    ? 'translateY(0)'
                    : 'translateY(-' + this.state.heightWhenOpen + 'px)',
                  transition: n ? 'none' : void 0
                };
              return Ln.createElement(
                this.props.component,
                { className: Cr()(Le, this.props.className), style: r },
                Ln.createElement(
                  'div',
                  {
                    className: ge,
                    ref: this.contentsRefHandler,
                    style: o,
                    'aria-hidden': !e && this.props.keepChildrenMounted
                  },
                  t ? this.props.children : null
                )
              );
            }),
            (t.prototype.componentDidMount = function() {
              this.forceUpdate(),
                this.props.isOpen
                  ? this.setState({ animationState: wl.OPEN, height: 'auto' })
                  : this.setState({ animationState: wl.CLOSED, height: '0px' });
            }),
            (t.prototype.componentDidUpdate = function() {
              var e = this,
                t = this.props.transitionDuration,
                c = this.state.animationState;
              if (c === wl.OPEN_START) {
                var n = this.contents.clientHeight;
                this.setState({
                  animationState: wl.OPENING,
                  height: n + 'px',
                  heightWhenOpen: n
                }),
                  this.setTimeout(function() {
                    return e.onDelayedStateChange();
                  }, t);
              } else
                c === wl.CLOSING_START &&
                  (this.setTimeout(function() {
                    return e.setState({
                      animationState: wl.CLOSING,
                      height: '0px'
                    });
                  }),
                  this.setTimeout(function() {
                    return e.onDelayedStateChange();
                  }, t));
            }),
            (t.prototype.onDelayedStateChange = function() {
              switch (this.state.animationState) {
                case wl.OPENING:
                  this.setState({ animationState: wl.OPEN, height: 'auto' });
                  break;
                case wl.CLOSING:
                  this.setState({ animationState: wl.CLOSED });
              }
            }),
            (t.displayName = xn + '.Collapse'),
            (t.defaultProps = {
              component: 'div',
              isOpen: !1,
              keepChildrenMounted: !1,
              transitionDuration: 200
            }),
            Vn([Ar.polyfill], t)
          );
        })(Rn),
        xl = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              var e,
                t = this,
                c = this.props.collapseFrom,
                n = Ln.Children.count(this.props.children),
                r = this.partitionChildren(),
                o = r[0],
                a = r[1],
                l = o.map(function(e, r) {
                  var o = c === kn.START ? n - 1 - r : r;
                  return Ln.createElement(
                    'li',
                    { className: t.props.visibleItemClassName, key: o },
                    t.props.visibleItemRenderer(e.props, o)
                  );
                });
              if ((c === kn.START && l.reverse(), a.length > 0)) {
                var s = c === kn.END ? h.BOTTOM_RIGHT : h.BOTTOM_LEFT;
                e = Ln.createElement(
                  'li',
                  { className: this.props.visibleItemClassName },
                  Ln.createElement(
                    Ya,
                    Mn(
                      { content: Ln.createElement(Nl, null, a), position: s },
                      this.props.dropdownProps
                    ),
                    this.props.dropdownTarget
                  )
                );
              }
              return Ln.createElement(
                'ul',
                { className: Cr()(Ce, this.props.className) },
                c === kn.START ? e : null,
                l,
                c === kn.END ? e : null
              );
            }),
            (t.prototype.partitionChildren = function() {
              if (null == this.props.children) return [[], []];
              var e = Ln.Children.map(this.props.children, function(e, t) {
                if (!Er(e, Al))
                  throw new Error(
                    '[Blueprint] <CollapsibleList> children must be <MenuItem>s'
                  );
                return Ln.cloneElement(e, { key: 'visible-' + t });
              });
              this.props.collapseFrom === kn.START && e.reverse();
              var t = this.props.visibleItemCount;
              return [e.slice(0, t), e.slice(t)];
            }),
            (t.displayName = xn + '.CollapsibleList'),
            (t.defaultProps = {
              collapseFrom: kn.START,
              dropdownTarget: null,
              visibleItemCount: 3,
              visibleItemRenderer: null
            }),
            t
          );
        })(Ln.Component);
      function Dl(e) {
        var t;
        return (
          hr(e.prototype.renderContextMenu) ||
            console.warn(
              '[Blueprint] @ContextMenuTarget-decorated class should implement renderContextMenu.'
            ),
          ((t = (function(e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              yn(t, e),
              (t.prototype.render = function() {
                var t = this,
                  c = e.prototype.render.call(this);
                if (null == c) return c;
                if (!Ln.isValidElement(c))
                  return (
                    console.warn(
                      '[Blueprint] "@ContextMenuTarget-decorated components must return a single JSX.Element or an empty render.'
                    ),
                    c
                  );
                var n = c.props.onContextMenu;
                return Ln.cloneElement(c, {
                  onContextMenu: function(e) {
                    if (!e.defaultPrevented) {
                      if (hr(t.renderContextMenu)) {
                        var c = t.renderContextMenu(e);
                        if (null != c) {
                          var r = (function(e) {
                            return (
                              e instanceof Element && null != e.closest('.' + y)
                            );
                          })(br.findDOMNode(t));
                          e.preventDefault(),
                            $a(
                              c,
                              { left: e.clientX, top: e.clientY },
                              t.onContextMenuClose,
                              r
                            );
                        }
                      }
                      pr(n, e);
                    }
                  }
                });
              }),
              t
            );
          })(e)).displayName = 'ContextMenuTarget(' + Vr(e) + ')'),
          t
        );
      }
      var Fl = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.className,
                c = e.tagName,
                n = void 0 === c ? 'div' : c,
                r = Hn(e, ['className', 'tagName']),
                o = Cr()(ke, t);
              return Ln.createElement(n, Mn(Mn({}, r), { className: o }));
            }),
            (t.displayName = xn + '.Divider'),
            Vn([Ar.polyfill], t)
          );
        })(Rn),
        Bl = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              var e,
                t,
                c = this.props,
                n = c.size,
                r = c.style,
                o = c.position,
                a = c.vertical,
                l = o ? v(o) : null,
                s = Cr()(
                  _e,
                  (((e = {})[T] = !l && a), (e[l ? vn(l) : ''] = !0), e),
                  this.props.className
                ),
                i =
                  null == n
                    ? r
                    : Mn(
                        Mn({}, r),
                        (((t = {})[(l ? p(l) : a) ? 'height' : 'width'] = n), t)
                      );
              return Ln.createElement(
                pa,
                Mn({}, this.props, { className: Gt }),
                Ln.createElement(
                  'div',
                  { className: s, style: i },
                  this.maybeRenderHeader(),
                  this.props.children
                )
              );
            }),
            (t.prototype.validateProps = function(e) {
              null == e.title &&
                (null != e.icon && console.warn(Cn),
                null != e.isCloseButtonShown && console.warn(bn)),
                null != e.position &&
                  (e.vertical &&
                    console.warn(
                      '[Blueprint] <Drawer> vertical is ignored if position is defined'
                    ),
                  e.position !== v(e.position) &&
                    console.warn(
                      '[Blueprint] <Drawer> all angle positions are casted into pure position (TOP, BOTTOM, LEFT or RIGHT)'
                    ));
            }),
            (t.prototype.maybeRenderCloseButton = function() {
              return !1 !== this.props.isCloseButtonShown
                ? Ln.createElement(al, {
                    'aria-label': 'Close',
                    className: Te,
                    icon: Ln.createElement(cl, {
                      icon: 'small-cross',
                      iconSize: cl.SIZE_LARGE
                    }),
                    minimal: !0,
                    onClick: this.props.onClose
                  })
                : null;
            }),
            (t.prototype.maybeRenderHeader = function() {
              var e = this.props,
                t = e.icon,
                c = e.title;
              return null == c
                ? null
                : Ln.createElement(
                    'div',
                    { className: Fe },
                    Ln.createElement(cl, { icon: t, iconSize: cl.SIZE_LARGE }),
                    Ln.createElement(vl, null, c),
                    this.maybeRenderCloseButton()
                  );
            }),
            (t.displayName = xn + '.Drawer'),
            (t.defaultProps = {
              canOutsideClickClose: !0,
              isOpen: !1,
              position: null,
              style: {},
              vertical: !1
            }),
            (t.SIZE_SMALL = '360px'),
            (t.SIZE_STANDARD = '50%'),
            (t.SIZE_LARGE = '90%'),
            Vn([Ar.polyfill], t)
          );
        })(Rn),
        Ul = 'undefined' != typeof navigator ? navigator.userAgent : '',
        Gl = {
          isEdge: /Edge/.test(Ul),
          isInternetExplorer: /Trident|rv:11/.test(Ul),
          isWebkit: /AppleWebKit/.test(Ul)
        },
        jl = (function(e) {
          function t(t, c) {
            var n = e.call(this, t, c) || this;
            (n.refHandlers = {
              content: function(e) {
                n.valueElement = e;
              },
              input: function(e) {
                if (
                  null != e &&
                  ((n.inputElement = e),
                  n.props.alwaysRenderInput || n.inputElement.focus(),
                  null != n.state && n.state.isEditing)
                ) {
                  var t = (function(e) {
                    switch (e.type) {
                      case 'textarea':
                        return !0;
                      case 'text':
                      case 'search':
                      case 'tel':
                      case 'url':
                      case 'password':
                        return !0;
                      default:
                        return !1;
                    }
                  })(e);
                  if (t) {
                    var c = e.value.length;
                    e.setSelectionRange(n.props.selectAllOnFocus ? 0 : c, c);
                  }
                  (t && n.props.selectAllOnFocus) ||
                    (e.scrollLeft = e.scrollWidth);
                }
              }
            }),
              (n.cancelEditing = function() {
                var e = n.state,
                  t = e.lastValue,
                  c = e.value;
                n.setState({ isEditing: !1, value: t }),
                  c !== t && pr(n.props.onChange, t),
                  pr(n.props.onCancel, t);
              }),
              (n.toggleEditing = function() {
                if (n.state.isEditing) {
                  var e = n.state.value;
                  n.setState({ isEditing: !1, lastValue: e }),
                    pr(n.props.onConfirm, e);
                } else n.props.disabled || n.setState({ isEditing: !0 });
              }),
              (n.handleFocus = function() {
                var e = n.props,
                  t = e.alwaysRenderInput,
                  c = e.disabled,
                  r = e.selectAllOnFocus;
                if (
                  (c || n.setState({ isEditing: !0 }),
                  t && r && null != n.inputElement)
                ) {
                  var o = n.inputElement.value.length;
                  n.inputElement.setSelectionRange(0, o);
                }
              }),
              (n.handleTextChange = function(e) {
                var t = e.target.value;
                null == n.props.value && n.setState({ value: t }),
                  pr(n.props.onChange, t);
              }),
              (n.handleKeyEvent = function(e) {
                var t = e.altKey,
                  c = e.ctrlKey,
                  r = e.metaKey,
                  o = e.shiftKey,
                  a = e.which;
                if (a !== qn) {
                  var l = t || c || r || o;
                  a === Wn &&
                    ((t || o) && e.preventDefault(),
                    n.props.confirmOnEnterKey && n.props.multiline
                      ? null != e.target && l
                        ? ((function(e, t) {
                            var c = e.selectionEnd,
                              n = e.selectionStart,
                              r = e.value;
                            if (n >= 0) {
                              var o = r.substring(0, n),
                                a = r.substring(c, r.length),
                                l = '\n'.length;
                              (e.value = o + '\n' + a),
                                (e.selectionStart = n + l),
                                (e.selectionEnd = n + l);
                            }
                          })(e.target),
                          n.handleTextChange(e))
                        : n.toggleEditing()
                      : (n.props.multiline && !l) || n.toggleEditing());
                } else n.cancelEditing();
              });
            var r = null == t.value ? t.defaultValue : t.value;
            return (
              (n.state = {
                inputHeight: 0,
                inputWidth: 0,
                isEditing: !0 === t.isEditing && !1 === t.disabled,
                lastValue: r,
                value: r
              }),
              n
            );
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              var e,
                t,
                c = this.props,
                n = c.alwaysRenderInput,
                r = c.disabled,
                o = c.multiline,
                a =
                  null == this.props.value
                    ? this.state.value
                    : this.props.value,
                l = null != a && '' !== a,
                s = Cr()(
                  Be,
                  un(this.props.intent),
                  (((e = {})[M] = r),
                  (e[Ge] = this.state.isEditing),
                  (e[Ke] = !l),
                  (e[O] = o),
                  e),
                  this.props.className
                );
              t = o
                ? {
                    height: this.state.isEditing ? null : this.state.inputHeight
                  }
                : {
                    height: this.state.inputHeight,
                    lineHeight:
                      null != this.state.inputHeight
                        ? this.state.inputHeight + 'px'
                        : null,
                    minWidth: this.props.minWidth
                  };
              var i = n || this.state.isEditing || r ? null : 0,
                h = n && !this.state.isEditing;
              return Ln.createElement(
                'div',
                { className: s, onFocus: this.handleFocus, tabIndex: i },
                n || this.state.isEditing ? this.renderInput(a) : void 0,
                h
                  ? void 0
                  : Ln.createElement(
                      'span',
                      {
                        className: Ue,
                        ref: this.refHandlers.content,
                        style: t
                      },
                      l ? a : this.props.placeholder
                    )
              );
            }),
            (t.prototype.componentDidMount = function() {
              this.updateInputDimensions();
            }),
            (t.prototype.componentDidUpdate = function(e, t) {
              var c = {};
              this.props.value === e.value ||
                (null == e.value && null == this.props.value) ||
                (c.value = this.props.value),
                null != this.props.isEditing &&
                  this.props.isEditing !== e.isEditing &&
                  (c.isEditing = this.props.isEditing),
                (this.props.disabled ||
                  (null == this.props.disabled && e.disabled)) &&
                  (c.isEditing = !1),
                this.setState(c),
                this.state.isEditing &&
                  !t.isEditing &&
                  pr(this.props.onEdit, this.state.value),
                this.updateInputDimensions();
            }),
            (t.prototype.renderInput = function(e) {
              var t = this.props,
                c = t.maxLength,
                n = t.multiline,
                r = t.type,
                o = t.placeholder,
                a = {
                  className: je,
                  maxLength: c,
                  onBlur: this.toggleEditing,
                  onChange: this.handleTextChange,
                  onKeyDown: this.handleKeyEvent,
                  placeholder: o,
                  value: e
                },
                l = this.state,
                s = l.inputHeight,
                i = l.inputWidth;
              return (
                0 !== s &&
                  0 !== i &&
                  (a.style = {
                    height: s,
                    lineHeight: n || null == s ? null : s + 'px',
                    width: n ? '100%' : i
                  }),
                n
                  ? Ln.createElement(
                      'textarea',
                      Mn({ ref: this.refHandlers.input }, a)
                    )
                  : Ln.createElement(
                      'input',
                      Mn({ ref: this.refHandlers.input, type: r }, a)
                    )
              );
            }),
            (t.prototype.updateInputDimensions = function() {
              if (null != this.valueElement) {
                var e = this.props,
                  t = e.maxLines,
                  c = e.minLines,
                  n = e.minWidth,
                  r = e.multiline,
                  o = this.valueElement,
                  a = o.parentElement,
                  l = o.textContent,
                  s = this.valueElement,
                  i = s.scrollHeight,
                  h = s.scrollWidth,
                  p = Kl(this.valueElement);
                r && this.state.isEditing && /\n$/.test(l) && (i += p),
                  p > 0 && (i = Nn(i, c * p, t * p)),
                  (i = Math.max(
                    i,
                    ((u = this.valueElement),
                    ('' === (v = getComputedStyle(u).fontSize)
                      ? 0
                      : parseInt(v.slice(0, -2), 10)) + 1),
                    Kl(a)
                  )),
                  Gl.isEdge ? (h += 5) : Gl.isInternetExplorer && (h += 30),
                  this.setState({ inputHeight: i, inputWidth: Math.max(h, n) }),
                  r &&
                    this.state.isEditing &&
                    this.setTimeout(function() {
                      return (a.style.height = i + 'px');
                    });
              }
              var u, v;
            }),
            (t.displayName = xn + '.EditableText'),
            (t.defaultProps = {
              alwaysRenderInput: !1,
              confirmOnEnterKey: !1,
              defaultValue: '',
              disabled: !1,
              maxLines: 1 / 0,
              minLines: 1,
              minWidth: 80,
              multiline: !1,
              placeholder: 'Click to Edit',
              type: 'text'
            }),
            Vn([Ar.polyfill], t)
          );
        })(Rn);
      function Kl(e) {
        var t = parseInt(getComputedStyle(e).lineHeight.slice(0, -2), 10);
        if (isNaN(t)) {
          var c = document.createElement('span');
          (c.innerHTML = '<br>'), e.appendChild(c);
          var n = e.offsetHeight;
          c.innerHTML = '<br><br>';
          var r = e.offsetHeight;
          e.removeChild(c), (t = r - n);
        }
        return t;
      }
      var Wl = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              var e,
                t = this.props,
                c = t.children,
                n = t.className,
                r = t.fill,
                o = t.vertical,
                a = Hn(t, ['children', 'className', 'fill', 'vertical']),
                l = Cr()(Se, (((e = {})[H] = r), (e[T] = o), e), n);
              return Ln.createElement('div', Mn({}, a, { className: l }), c);
            }),
            (t.displayName = xn + '.ControlGroup'),
            Vn([Ar.polyfill], t)
          );
        })(Rn),
        Yl = function(e) {
          var t,
            c = e.alignIndicator,
            n = e.children,
            r = e.className,
            o = e.indicatorChildren,
            a = e.inline,
            l = e.inputRef,
            s = e.label,
            i = e.labelElement,
            h = e.large,
            p = e.style,
            u = e.type,
            v = e.typeClassName,
            m = e.tagName,
            d = void 0 === m ? 'label' : m,
            f = Hn(e, [
              'alignIndicator',
              'children',
              'className',
              'indicatorChildren',
              'inline',
              'inputRef',
              'label',
              'labelElement',
              'large',
              'style',
              'type',
              'typeClassName',
              'tagName'
            ]),
            z = Cr()(
              rt,
              v,
              (((t = {})[M] = f.disabled), (t[L] = a), (t[C] = h), t),
              sn(c),
              r
            );
          return Ln.createElement(
            d,
            { className: z, style: p },
            Ln.createElement('input', Mn({}, f, { ref: l, type: u })),
            Ln.createElement('span', { className: ot }, o),
            s,
            i,
            n
          );
        },
        ql = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.innerLabelChecked,
                c = e.innerLabel,
                n = Hn(e, ['innerLabelChecked', 'innerLabel']),
                r =
                  c || t
                    ? [
                        Ln.createElement(
                          'div',
                          { key: 'checked', className: at },
                          Ln.createElement('div', { className: ht }, t || c)
                        ),
                        Ln.createElement(
                          'div',
                          { key: 'unchecked', className: at },
                          Ln.createElement('div', { className: ht }, c)
                        )
                      ]
                    : null;
              return Ln.createElement(
                Yl,
                Mn({}, n, {
                  type: 'checkbox',
                  typeClassName: it,
                  indicatorChildren: r
                })
              );
            }),
            (t.displayName = xn + '.Switch'),
            Vn([Ar.polyfill], t)
          );
        })(Rn),
        Xl = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              return Ln.createElement(
                Yl,
                Mn({}, this.props, { type: 'radio', typeClassName: st })
              );
            }),
            (t.displayName = xn + '.Radio'),
            Vn([Ar.polyfill], t)
          );
        })(Rn),
        $l = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = {
                indeterminate:
                  t.props.indeterminate || t.props.defaultIndeterminate || !1
              }),
              (t.handleChange = function(e) {
                var c = e.target.indeterminate;
                null == t.props.indeterminate &&
                  t.setState({ indeterminate: c }),
                  pr(t.props.onChange, e);
              }),
              (t.handleInputRef = function(e) {
                (t.input = e), pr(t.props.inputRef, e);
              }),
              t
            );
          }
          return (
            yn(t, e),
            (t.getDerivedStateFromProps = function(e) {
              var t = e.indeterminate;
              return null != t ? { indeterminate: t } : null;
            }),
            (t.prototype.render = function() {
              var e = this.props,
                t =
                  (e.defaultIndeterminate,
                  e.indeterminate,
                  Hn(e, ['defaultIndeterminate', 'indeterminate']));
              return Ln.createElement(
                Yl,
                Mn({}, t, {
                  inputRef: this.handleInputRef,
                  onChange: this.handleChange,
                  type: 'checkbox',
                  typeClassName: lt
                })
              );
            }),
            (t.prototype.componentDidMount = function() {
              this.updateIndeterminate();
            }),
            (t.prototype.componentDidUpdate = function() {
              this.updateIndeterminate();
            }),
            (t.prototype.updateIndeterminate = function() {
              null != this.input &&
                (this.input.indeterminate = this.state.indeterminate);
            }),
            (t.displayName = xn + '.Checkbox'),
            Vn([Ar.polyfill], t)
          );
        })(Rn),
        Zl = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.handleInputChange = function(e) {
                pr(t.props.onInputChange, e),
                  pr(t.props.inputProps.onChange, e);
              }),
              t
            );
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              var e,
                t,
                c,
                n = this.props,
                r = n.buttonText,
                o = n.className,
                a = n.disabled,
                l = n.fill,
                s = n.hasSelection,
                i = n.inputProps,
                h = n.large,
                p = (n.onInputChange, n.text),
                u = Hn(n, [
                  'buttonText',
                  'className',
                  'disabled',
                  'fill',
                  'hasSelection',
                  'inputProps',
                  'large',
                  'onInputChange',
                  'text'
                ]),
                v = Cr()(
                  pt,
                  (((e = {})[ut] = s), (e[M] = a), (e[H] = l), (e[C] = h), e),
                  o
                ),
                m =
                  (((t = {})[ln() + '-button-text'] = r),
                  (t.className = Cr()(vt, (((c = {})[mt] = !!r), c))),
                  t);
              return Ln.createElement(
                'label',
                Mn({}, u, { className: v }),
                Ln.createElement(
                  'input',
                  Mn({}, i, {
                    onChange: this.handleInputChange,
                    type: 'file',
                    disabled: a
                  })
                ),
                Ln.createElement('span', Mn({}, m), p)
              );
            }),
            (t.displayName = xn + '.FileInput'),
            (t.defaultProps = {
              hasSelection: !1,
              inputProps: {},
              text: 'Choose file...'
            }),
            Vn([Ar.polyfill], t)
          );
        })(Rn),
        Jl = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.children,
                c = e.contentClassName,
                n = e.helperText,
                r = e.label,
                o = e.labelFor,
                a = e.labelInfo,
                l = e.style;
              return Ln.createElement(
                'div',
                { className: this.getClassName(), style: l },
                r &&
                  Ln.createElement(
                    'label',
                    { className: Et, htmlFor: o },
                    r,
                    ' ',
                    Ln.createElement('span', { className: J }, a)
                  ),
                Ln.createElement(
                  'div',
                  { className: Cr()(gt, c) },
                  t,
                  n && Ln.createElement('div', { className: Ct }, n)
                )
              );
            }),
            (t.prototype.getClassName = function() {
              var e,
                t = this.props,
                c = t.className,
                n = t.disabled,
                r = t.inline,
                o = t.intent;
              return Cr()(Lt, un(o), (((e = {})[M] = n), (e[L] = r), e), c);
            }),
            (t.displayName = xn + '.FormGroup'),
            Vn([Ar.polyfill], t)
          );
        })(Rn),
        Ql = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = {}),
              (t.refHandlers = {
                leftElement: function(e) {
                  return (t.leftElement = e);
                },
                rightElement: function(e) {
                  return (t.rightElement = e);
                }
              }),
              t
            );
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              var e,
                t = this.props,
                c = t.className,
                n = t.disabled,
                r = t.fill,
                o = t.intent,
                a = t.large,
                l = t.small,
                s = t.round,
                i = Cr()(
                  tt,
                  un(o),
                  (((e = {})[M] = n),
                  (e[H] = r),
                  (e[C] = a),
                  (e[w] = l),
                  (e[N] = s),
                  e),
                  c
                ),
                h = Mn(Mn({}, this.props.style), {
                  paddingLeft: this.state.leftElementWidth,
                  paddingRight: this.state.rightElementWidth
                });
              return Ln.createElement(
                'div',
                { className: i },
                this.maybeRenderLeftElement(),
                Ln.createElement(
                  'input',
                  Mn({ type: 'text' }, Fn(this.props), {
                    className: Qe,
                    ref: this.props.inputRef,
                    style: h
                  })
                ),
                this.maybeRenderRightElement()
              );
            }),
            (t.prototype.componentDidMount = function() {
              this.updateInputWidth();
            }),
            (t.prototype.componentDidUpdate = function(e) {
              var t = this.props,
                c = t.leftElement,
                n = t.rightElement;
              (e.leftElement === c && e.rightElement === n) ||
                this.updateInputWidth();
            }),
            (t.prototype.validateProps = function(e) {
              null != e.leftElement &&
                null != e.leftIcon &&
                console.warn(
                  '[Blueprint] <InputGroup> leftElement and leftIcon prop are mutually exclusive, with leftElement taking priority.'
                );
            }),
            (t.prototype.maybeRenderLeftElement = function() {
              var e = this.props,
                t = e.leftElement,
                c = e.leftIcon;
              return null != t
                ? Ln.createElement(
                    'span',
                    { className: ct, ref: this.refHandlers.leftElement },
                    t
                  )
                : null != c
                ? Ln.createElement(cl, { icon: c })
                : void 0;
            }),
            (t.prototype.maybeRenderRightElement = function() {
              var e = this.props.rightElement;
              if (null != e)
                return Ln.createElement(
                  'span',
                  { className: nt, ref: this.refHandlers.rightElement },
                  e
                );
            }),
            (t.prototype.updateInputWidth = function() {
              var e = this.state,
                t = e.leftElementWidth,
                c = e.rightElementWidth;
              if (null != this.leftElement) {
                var n = this.leftElement.clientWidth;
                (void 0 === t || Math.abs(n - t) > 2) &&
                  this.setState({ leftElementWidth: n });
              } else this.setState({ leftElementWidth: void 0 });
              null != this.rightElement
                ? ((n = this.rightElement.clientWidth),
                  (void 0 === c || Math.abs(n - c) > 2) &&
                    this.setState({ rightElementWidth: n }))
                : this.setState({ rightElementWidth: void 0 });
            }),
            (t.displayName = xn + '.InputGroup'),
            Vn([Ar.polyfill], t)
          );
        })(Rn);
      function es(e) {
        return void 0 === e && (e = ''), e.toString();
      }
      function ts(e) {
        return (
          null == e.key ||
          !!(e.ctrlKey || e.altKey || e.metaKey) ||
          !(1 === e.key.length) ||
          rs(e.key)
        );
      }
      var cs,
        ns = /^[Ee0-9\+\-\.]$/;
      function rs(e) {
        return ns.test(e);
      }
      !(function(e) {
        (e[(e.DOWN = -1)] = 'DOWN'), (e[(e.UP = 1)] = 'UP');
      })(cs || (cs = {}));
      var os = [
          'allowNumericCharactersOnly',
          'buttonPosition',
          'clampValueOnBlur',
          'className',
          'majorStepSize',
          'minorStepSize',
          'onButtonClick',
          'onValueChange',
          'selectAllOnFocus',
          'selectAllOnIncrement',
          'stepSize'
        ],
        as = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = {
                shouldSelectAfterUpdate: !1,
                stepMaxPrecision: c.getStepMaxPrecision(t.props),
                value: es(t.props.value)
              }),
              (t.didPasteEventJustOccur = !1),
              (t.delta = 0),
              (t.inputElement = null),
              (t.intervalId = null),
              (t.incrementButtonHandlers = t.getButtonEventHandlers(cs.UP)),
              (t.decrementButtonHandlers = t.getButtonEventHandlers(cs.DOWN)),
              (t.inputRef = function(e) {
                (t.inputElement = e), pr(t.props.inputRef, e);
              }),
              (t.handleButtonClick = function(e, c) {
                var n,
                  r,
                  o = t.updateDelta(c, e),
                  a = t.incrementValue(o);
                null === (r = (n = t.props).onButtonClick) ||
                  void 0 === r ||
                  r.call(n, +a, a);
              }),
              (t.stopContinuousChange = function() {
                (t.delta = 0),
                  t.clearTimeouts(),
                  clearInterval(t.intervalId),
                  document.removeEventListener(
                    'mouseup',
                    t.stopContinuousChange
                  );
              }),
              (t.handleContinuousChange = function() {
                var e,
                  c,
                  n = t.incrementValue(t.delta);
                null === (c = (e = t.props).onButtonClick) ||
                  void 0 === c ||
                  c.call(e, +n, n);
              }),
              (t.handleInputFocus = function(e) {
                t.setState({
                  shouldSelectAfterUpdate: t.props.selectAllOnFocus
                }),
                  pr(t.props.onFocus, e);
              }),
              (t.handleInputBlur = function(e) {
                if (
                  (t.setState({ shouldSelectAfterUpdate: !1 }),
                  t.props.clampValueOnBlur)
                ) {
                  var c = e.target.value,
                    n = t.getSanitizedValue(c);
                  t.setState({ value: n });
                }
                pr(t.props.onBlur, e);
              }),
              (t.handleInputKeyDown = function(e) {
                if (!t.props.disabled && !t.props.readOnly) {
                  var c,
                    n = e.keyCode;
                  if (
                    (n === Zn ? (c = cs.UP) : n === Qn && (c = cs.DOWN),
                    null != c)
                  ) {
                    e.preventDefault();
                    var r = t.updateDelta(c, e);
                    t.incrementValue(r);
                  }
                  pr(t.props.onKeyDown, e);
                }
              }),
              (t.handleInputKeyPress = function(e) {
                t.props.allowNumericCharactersOnly &&
                  !ts(e) &&
                  e.preventDefault(),
                  pr(t.props.onKeyPress, e);
              }),
              (t.handleInputPaste = function(e) {
                (t.didPasteEventJustOccur = !0), pr(t.props.onPaste, e);
              }),
              (t.handleInputChange = function(e) {
                var c = e.target.value,
                  n = c;
                t.props.allowNumericCharactersOnly &&
                  t.didPasteEventJustOccur &&
                  ((t.didPasteEventJustOccur = !1),
                  (n = c
                    .split('')
                    .filter(rs)
                    .join(''))),
                  t.setState({ shouldSelectAfterUpdate: !1, value: n });
              }),
              t
            );
          }
          var c;
          return (
            yn(t, e),
            (c = t),
            (t.getDerivedStateFromProps = function(e, t) {
              var n = {
                  prevMaxProp: e.max,
                  prevMinProp: e.min,
                  prevValueProp: e.value
                },
                r = e.min !== t.prevMinProp,
                o = e.max !== t.prevMaxProp,
                a = r || o,
                l = es(e.value !== t.prevValueProp ? e.value : t.value),
                s = c.getStepMaxPrecision(e),
                i =
                  l !== c.VALUE_EMPTY
                    ? c.getSanitizedValue(l, s, e.min, e.max)
                    : c.VALUE_EMPTY;
              return a && i !== t.value
                ? Mn(Mn({}, n), { stepMaxPrecision: s, value: i })
                : Mn(Mn({}, n), { stepMaxPrecision: s, value: l });
            }),
            (t.getStepMaxPrecision = function(e) {
              return null != e.minorStepSize
                ? wn(e.minorStepSize)
                : wn(e.stepSize);
            }),
            (t.getSanitizedValue = function(e, t, n, r, o) {
              return (
                void 0 === o && (o = 0),
                (function(e) {
                  return null != e && e - parseFloat(e) + 1 >= 0;
                })(e)
                  ? (function(e, t, c) {
                      return Nn(
                        e,
                        null != t ? t : -1 / 0,
                        null != c ? c : 1 / 0
                      );
                    })(
                      (function(e, t) {
                        var c = Math.pow(10, t);
                        return Math.round(e * c) / c;
                      })(parseFloat(e) + o, t),
                      n,
                      r
                    ).toString()
                  : c.VALUE_EMPTY
              );
            }),
            (t.prototype.render = function() {
              var e,
                t = this.props,
                c = t.buttonPosition,
                n = t.className,
                r = t.fill,
                o = t.large,
                a = Cr()(xt, (((e = {})[C] = o), e), n),
                l = this.renderButtons();
              return Ln.createElement(
                Wl,
                { className: a, fill: r },
                c === h.LEFT && l,
                this.renderInput(),
                c === h.RIGHT && l
              );
            }),
            (t.prototype.componentDidUpdate = function(t, c) {
              var n, r;
              if (
                (e.prototype.componentDidUpdate.call(this, t, c),
                this.state.shouldSelectAfterUpdate &&
                  this.inputElement.setSelectionRange(
                    0,
                    this.state.value.length
                  ),
                this.props.value === t.value && this.state.value !== c.value)
              ) {
                var o = this.state.value;
                null === (r = (n = this.props).onValueChange) ||
                  void 0 === r ||
                  r.call(n, +o, o, this.inputElement);
              }
            }),
            (t.prototype.validateProps = function(e) {
              var t = e.majorStepSize,
                c = e.max,
                n = e.min,
                r = e.minorStepSize,
                o = e.stepSize;
              if (null != n && null != c && n > c)
                throw new Error(
                  '[Blueprint] <NumericInput> requires min to be no greater than max if both are defined.'
                );
              if (null == o)
                throw new Error(
                  '[Blueprint] <NumericInput> requires stepSize to be defined.'
                );
              if (o <= 0)
                throw new Error(
                  '[Blueprint] <NumericInput> requires stepSize to be strictly greater than zero.'
                );
              if (r && r <= 0)
                throw new Error(
                  '[Blueprint] <NumericInput> requires minorStepSize to be strictly greater than zero.'
                );
              if (t && t <= 0)
                throw new Error(
                  '[Blueprint] <NumericInput> requires majorStepSize to be strictly greater than zero.'
                );
              if (r && r > o)
                throw new Error(
                  '[Blueprint] <NumericInput> requires minorStepSize to be no greater than stepSize.'
                );
              if (t && t < o)
                throw new Error(
                  '[Blueprint] <NumericInput> requires stepSize to be no greater than majorStepSize.'
                );
            }),
            (t.prototype.renderButtons = function() {
              var e = this.props,
                t = e.intent,
                c = e.max,
                n = e.min,
                r = this.state.value,
                o = this.props.disabled || this.props.readOnly;
              return Ln.createElement(
                Il,
                { className: V, key: 'button-group', vertical: !0 },
                Ln.createElement(
                  al,
                  Mn(
                    {
                      disabled: o || ('' !== r && +r >= c),
                      icon: 'chevron-up',
                      intent: t
                    },
                    this.incrementButtonHandlers
                  )
                ),
                Ln.createElement(
                  al,
                  Mn(
                    {
                      disabled: o || ('' !== r && +r <= n),
                      icon: 'chevron-down',
                      intent: t
                    },
                    this.decrementButtonHandlers
                  )
                )
              );
            }),
            (t.prototype.renderInput = function() {
              var e = Fn(this.props, os, !0);
              return Ln.createElement(
                Ql,
                Mn({ autoComplete: 'off' }, e, {
                  intent: this.props.intent,
                  inputRef: this.inputRef,
                  large: this.props.large,
                  leftIcon: this.props.leftIcon,
                  onFocus: this.handleInputFocus,
                  onBlur: this.handleInputBlur,
                  onChange: this.handleInputChange,
                  onKeyDown: this.handleInputKeyDown,
                  onKeyPress: this.handleInputKeyPress,
                  onPaste: this.handleInputPaste,
                  rightElement: this.props.rightElement,
                  value: this.state.value
                })
              );
            }),
            (t.prototype.getButtonEventHandlers = function(e) {
              var t = this;
              return {
                onKeyDown: function(c) {
                  tr(c.keyCode) && t.handleButtonClick(c, e);
                },
                onMouseDown: function(c) {
                  t.handleButtonClick(c, e), t.startContinuousChange();
                }
              };
            }),
            (t.prototype.startContinuousChange = function() {
              var e = this;
              document.addEventListener('mouseup', this.stopContinuousChange),
                this.setTimeout(function() {
                  e.intervalId = window.setInterval(
                    e.handleContinuousChange,
                    c.CONTINUOUS_CHANGE_INTERVAL
                  );
                }, c.CONTINUOUS_CHANGE_DELAY);
            }),
            (t.prototype.incrementValue = function(e) {
              var t = this.state.value || c.VALUE_ZERO,
                n = this.getSanitizedValue(t, e);
              return (
                this.setState({
                  shouldSelectAfterUpdate: this.props.selectAllOnIncrement,
                  value: n
                }),
                n
              );
            }),
            (t.prototype.getIncrementDelta = function(e, t, c) {
              var n = this.props,
                r = n.majorStepSize,
                o = n.minorStepSize,
                a = n.stepSize;
              return t && null != r ? e * r : c && null != o ? e * o : e * a;
            }),
            (t.prototype.getSanitizedValue = function(e, t) {
              return (
                void 0 === t && (t = 0),
                c.getSanitizedValue(
                  e,
                  this.state.stepMaxPrecision,
                  this.props.min,
                  this.props.max,
                  t
                )
              );
            }),
            (t.prototype.updateDelta = function(e, t) {
              return (
                (this.delta = this.getIncrementDelta(e, t.shiftKey, t.altKey)),
                this.delta
              );
            }),
            (t.displayName = xn + '.NumericInput'),
            (t.VALUE_EMPTY = ''),
            (t.VALUE_ZERO = '0'),
            (t.defaultProps = {
              allowNumericCharactersOnly: !0,
              buttonPosition: h.RIGHT,
              clampValueOnBlur: !1,
              large: !1,
              majorStepSize: 10,
              minorStepSize: 0.1,
              selectAllOnFocus: !1,
              selectAllOnIncrement: !1,
              stepSize: 1,
              value: c.VALUE_EMPTY
            }),
            (t.CONTINUOUS_CHANGE_DELAY = 300),
            (t.CONTINUOUS_CHANGE_INTERVAL = 100),
            (c = Vn([Ar.polyfill], t))
          );
        })(Rn),
        ls = 0;
      function ss() {
        return is.displayName + '-' + ls++;
      }
      for (
        var is = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (t.autoGroupName = ss()), t;
            }
            return (
              yn(t, e),
              (t.prototype.render = function() {
                var e = this.props.label;
                return Ln.createElement(
                  'div',
                  { className: this.props.className },
                  null == e
                    ? null
                    : Ln.createElement('label', { className: Et }, e),
                  Array.isArray(this.props.options)
                    ? this.renderOptions()
                    : this.renderChildren()
                );
              }),
              (t.prototype.validateProps = function() {
                null != this.props.children &&
                  null != this.props.options &&
                  console.warn(
                    '[Blueprint] <RadioGroup> children and options prop are mutually exclusive, with options taking priority.'
                  );
              }),
              (t.prototype.renderChildren = function() {
                var e = this;
                return Ln.Children.map(this.props.children, function(t) {
                  return Er(t, Xl)
                    ? Ln.cloneElement(t, e.getRadioProps(t.props))
                    : t;
                });
              }),
              (t.prototype.renderOptions = function() {
                var e = this;
                return this.props.options.map(function(t) {
                  return Ln.createElement(
                    Xl,
                    Mn({}, e.getRadioProps(t), {
                      key: t.value,
                      labelElement: t.label || t.value
                    })
                  );
                });
              }),
              (t.prototype.getRadioProps = function(e) {
                var t = this.props.name,
                  c = e.className,
                  n = e.disabled,
                  r = e.value;
                return {
                  checked: r === this.props.selectedValue,
                  className: c,
                  disabled: n || this.props.disabled,
                  inline: this.props.inline,
                  name: null == t ? this.autoGroupName : t,
                  onChange: this.props.onChange,
                  value: r
                };
              }),
              (t.displayName = xn + '.RadioGroup'),
              Vn([Ar.polyfill], t)
            );
          })(Rn),
          hs = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.state = {}),
                (t.handleChange = function(e) {
                  t.props.growVertically &&
                    t.setState({ height: e.target.scrollHeight }),
                    null != t.props.onChange && t.props.onChange(e);
                }),
                (t.handleInternalRef = function(e) {
                  (t.internalTextAreaRef = e),
                    null != t.props.inputRef && t.props.inputRef(e);
                }),
                t
              );
            }
            return (
              yn(t, e),
              (t.prototype.componentDidMount = function() {
                this.props.growVertically &&
                  this.setState({
                    height: this.internalTextAreaRef.scrollHeight
                  });
              }),
              (t.prototype.render = function() {
                var e,
                  t = this.props,
                  c = t.className,
                  n = t.fill,
                  r = (t.inputRef, t.intent),
                  o = t.large,
                  a = t.small,
                  l = t.growVertically,
                  s = Hn(t, [
                    'className',
                    'fill',
                    'inputRef',
                    'intent',
                    'large',
                    'small',
                    'growVertically'
                  ]),
                  i = Cr()(
                    Qe,
                    un(r),
                    (((e = {})[H] = n), (e[C] = o), (e[w] = a), e),
                    c
                  ),
                  h = s.style,
                  p = void 0 === h ? {} : h;
                return (
                  l &&
                    null != this.state.height &&
                    (p = Mn(Mn({}, p), { height: this.state.height + 'px' })),
                  Ln.createElement(
                    'textarea',
                    Mn({}, s, {
                      className: i,
                      onChange: this.handleChange,
                      ref: this.handleInternalRef,
                      style: p
                    })
                  )
                );
              }),
              (t.displayName = xn + '.TextArea'),
              Vn([Ar.polyfill], t)
            );
          })(Rn),
          ps = (function(e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              yn(t, e),
              (t.prototype.render = function() {
                var e,
                  t = this.props,
                  c = t.className,
                  n = t.disabled,
                  r = t.elementRef,
                  o = t.fill,
                  a = t.iconProps,
                  l = t.large,
                  s = t.minimal,
                  i = t.options,
                  h = void 0 === i ? [] : i,
                  p = Hn(t, [
                    'className',
                    'disabled',
                    'elementRef',
                    'fill',
                    'iconProps',
                    'large',
                    'minimal',
                    'options'
                  ]),
                  u = Cr()(
                    Ye,
                    (((e = {})[M] = n), (e[H] = o), (e[C] = l), (e[A] = s), e),
                    c
                  ),
                  v = h.map(function(e) {
                    var t = 'object' == typeof e ? e : { value: e };
                    return Ln.createElement(
                      'option',
                      Mn({}, t, { key: t.value, children: t.label || t.value })
                    );
                  });
                return Ln.createElement(
                  'div',
                  { className: u },
                  Ln.createElement(
                    'select',
                    Mn({ disabled: n, ref: r }, p, { multiple: !1 }),
                    v,
                    p.children
                  ),
                  Ln.createElement(cl, Mn({ icon: 'double-caret-vertical' }, a))
                );
              }),
              Vn([Ar.polyfill], t)
            );
          })(Rn),
          us = (function(e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              yn(t, e),
              (t.prototype.render = function() {
                var e,
                  t = this.props,
                  c = t.bordered,
                  n = t.className,
                  r = t.condensed,
                  o = t.elementRef,
                  a = t.interactive,
                  l = t.small,
                  s = t.striped,
                  i = Hn(t, [
                    'bordered',
                    'className',
                    'condensed',
                    'elementRef',
                    'interactive',
                    'small',
                    'striped'
                  ]),
                  h = Cr()(
                    Xe,
                    (((e = {})[$e] = c),
                    (e[Ze] = r),
                    (e[Je] = s),
                    (e[g] = a),
                    (e[w] = l),
                    e),
                    n
                  );
                return Ln.createElement(
                  'table',
                  Mn({}, i, { ref: o, className: h })
                );
              }),
              Vn([Ar.polyfill], t)
            );
          })(Rn),
          vs = {
            8: 'backspace',
            9: 'tab',
            13: 'enter',
            20: 'capslock',
            27: 'esc',
            32: 'space',
            33: 'pageup',
            34: 'pagedown',
            35: 'end',
            36: 'home',
            37: 'left',
            38: 'up',
            39: 'right',
            40: 'down',
            45: 'ins',
            46: 'del',
            48: '0',
            49: '1',
            50: '2',
            51: '3',
            52: '4',
            53: '5',
            54: '6',
            55: '7',
            56: '8',
            57: '9',
            65: 'a',
            66: 'b',
            67: 'c',
            68: 'd',
            69: 'e',
            70: 'f',
            71: 'g',
            72: 'h',
            73: 'i',
            74: 'j',
            75: 'k',
            76: 'l',
            77: 'm',
            78: 'n',
            79: 'o',
            80: 'p',
            81: 'q',
            82: 'r',
            83: 's',
            84: 't',
            85: 'u',
            86: 'v',
            87: 'w',
            88: 'x',
            89: 'y',
            90: 'z',
            106: '*',
            107: '+',
            109: '-',
            110: '.',
            111: '/',
            186: ';',
            187: '=',
            188: ',',
            189: '-',
            190: '.',
            191: '/',
            192: '`',
            219: '[',
            220: '\\',
            221: ']',
            222: "'"
          },
          ms = {
            16: 'shift',
            17: 'ctrl',
            18: 'alt',
            91: 'meta',
            93: 'meta',
            224: 'meta'
          },
          ds = { alt: 1, ctrl: 2, meta: 4, shift: 8 },
          fs = {
            cmd: 'meta',
            command: 'meta',
            escape: 'esc',
            minus: '-',
            mod: Ls() ? 'meta' : 'ctrl',
            option: 'alt',
            plus: '+',
            return: 'enter',
            win: 'meta'
          },
          zs = {
            '~': '`',
            '!': '1',
            '@': '2',
            '#': '3',
            $: '4',
            '%': '5',
            '^': '6',
            '&': '7',
            '*': '8',
            '(': '9',
            ')': '0',
            _: '-',
            '+': '=',
            '{': '[',
            '}': ']',
            '|': '\\',
            ':': ';',
            '"': "'",
            '<': ',',
            '>': '.',
            '?': '/'
          },
          ys = 1;
        ys <= 12;
        ++ys
      )
        vs[111 + ys] = 'f' + ys;
      for (ys = 0; ys <= 9; ++ys) vs[96 + ys] = 'num' + ys.toString();
      function Ms(e, t) {
        return e.modifiers === t.modifiers && e.key === t.key;
      }
      var Hs = function(e) {
          for (
            var t = 0,
              c = null,
              n = 0,
              r = e
                .replace(/\s/g, '')
                .toLowerCase()
                .split('+');
            n < r.length;
            n++
          ) {
            var o = r[n];
            if ('' === o)
              throw new Error(
                'Failed to parse key combo "' +
                  e +
                  '".\n                Valid key combos look like "cmd + plus", "shift+p", or "!"'
              );
            null != fs[o] && (o = fs[o]),
              null != ds[o]
                ? (t += ds[o])
                : null != zs[o]
                ? ((t += ds.shift), (c = zs[o]))
                : (c = o.toLowerCase());
          }
          return { modifiers: t, key: c };
        },
        Vs = function(e) {
          var t = [];
          e.ctrlKey && t.push('ctrl'),
            e.altKey && t.push('alt'),
            e.shiftKey && t.push('shift'),
            e.metaKey && t.push('meta');
          var c = e.which;
          return (
            null != ms[c] ||
              (null != vs[c]
                ? t.push(vs[c])
                : t.push(String.fromCharCode(c).toLowerCase())),
            t.join(' + ')
          );
        },
        Es = function(e) {
          var t = null,
            c = e.which;
          null != ms[c] ||
            (t = null != vs[c] ? vs[c] : String.fromCharCode(c).toLowerCase());
          var n = 0;
          return (
            e.altKey && (n += ds.alt),
            e.ctrlKey && (n += ds.ctrl),
            e.metaKey && (n += ds.meta),
            e.shiftKey && (n += ds.shift),
            { modifiers: n, key: t }
          );
        };
      function Ls(e) {
        var t =
          null != e
            ? e
            : 'undefined' != typeof navigator
            ? navigator.platform
            : void 0;
        return null != t && /Mac|iPod|iPhone|iPad/.test(t);
      }
      var gs,
        Cs = {
          alt: 'key-option',
          cmd: 'key-command',
          ctrl: 'key-control',
          delete: 'key-delete',
          down: 'arrow-down',
          enter: 'key-enter',
          left: 'arrow-left',
          meta: 'key-command',
          right: 'arrow-right',
          shift: 'key-shift',
          up: 'arrow-up'
        },
        bs = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.renderKey = function(e, t) {
                var c = Cs[e],
                  n = 'key-' + t;
                return null == c
                  ? Ln.createElement('kbd', { className: dt, key: n }, e)
                  : Ln.createElement(
                      'kbd',
                      { className: Cr()(dt, zt), key: n },
                      Ln.createElement(cl, { icon: c }),
                      ' ',
                      e
                    );
              }),
              (t.renderMinimalKey = function(e, t) {
                var c = Cs[e];
                return null == c
                  ? e
                  : Ln.createElement(cl, { icon: c, key: 'key-' + t });
              }),
              t
            );
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.className,
                c = e.combo,
                n = e.minimal,
                r = (function(e, t) {
                  return e
                    .replace(/\s/g, '')
                    .split('+')
                    .map(function(e) {
                      var t = null != fs[e] ? fs[e] : e;
                      return 'meta' === t
                        ? Ls(undefined)
                          ? 'cmd'
                          : 'ctrl'
                        : t;
                    });
                })(c)
                  .map(function(e) {
                    return 1 === e.length ? e.toUpperCase() : e;
                  })
                  .map(n ? this.renderMinimalKey : this.renderKey);
              return Ln.createElement('span', { className: Cr()(ft, t) }, r);
            }),
            (t.displayName = xn + '.KeyCombo'),
            Vn([Ar.polyfill], t)
          );
        })(Rn),
        As = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.label,
                c = e.className,
                n = Hn(e, ['label', 'className']),
                r = Cr()(yt, c);
              return Ln.createElement(
                'div',
                { className: r },
                Ln.createElement('div', { className: Mt }, t),
                Ln.createElement(bs, Mn({}, n))
              );
            }),
            (t.prototype.validateProps = function(e) {
              if (!0 !== e.global && null == e.group)
                throw new Error('non-global <Hotkey>s must define a group');
            }),
            (t.displayName = xn + '.Hotkey'),
            (t.defaultProps = {
              allowInInput: !1,
              disabled: !1,
              global: !1,
              preventDefault: !1,
              stopPropagation: !1
            }),
            Vn([Ar.polyfill], t)
          );
        })(Rn),
        Ss = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              var e = Ln.Children.map(this.props.children, function(e) {
                return e.props;
              });
              e.sort(function(e, t) {
                return e.global === t.global
                  ? e.group.localeCompare(t.group)
                  : e.global
                  ? -1
                  : 1;
              });
              for (var t = null, c = [], n = 0, r = e; n < r.length; n++) {
                var o = r[n],
                  a = o.group;
                a !== t &&
                  (c.push(
                    Ln.createElement(vl, { key: 'group-' + c.length }, a)
                  ),
                  (t = a)),
                  c.push(Ln.createElement(As, Mn({ key: c.length }, o)));
              }
              var l = Cr()(Ht, this.props.className);
              return Ln.createElement('div', { className: l }, c);
            }),
            (t.prototype.validateProps = function(e) {
              Ln.Children.forEach(e.children, function(e) {
                if (!Er(e, As))
                  throw new Error(
                    '[Blueprint] <Hotkeys> only accepts <Hotkey> children.'
                  );
              });
            }),
            (t.displayName = xn + '.Hotkeys'),
            (t.defaultProps = { tabIndex: 0 }),
            Vn([Ar.polyfill], t)
          );
        })(Rn),
        Os = new ((function() {
          function e() {
            var e = this;
            (this.componentProps = { globalHotkeysGroup: 'Global hotkeys' }),
              (this.hotkeysQueue = []),
              (this.isDialogShowing = !1),
              (this.show = function() {
                (e.isDialogShowing = !0), e.render();
              }),
              (this.hide = function() {
                (e.isDialogShowing = !1), e.render();
              });
          }
          return (
            (e.prototype.render = function() {
              null == this.container && (this.container = this.getContainer()),
                br.render(this.renderComponent(), this.container);
            }),
            (e.prototype.unmount = function() {
              null != this.container &&
                (br.unmountComponentAtNode(this.container),
                this.container.remove(),
                delete this.container);
            }),
            (e.prototype.enqueueHotkeysForDisplay = function(e) {
              this.hotkeysQueue.push(e),
                window.clearTimeout(this.showTimeoutToken),
                (this.showTimeoutToken = window.setTimeout(this.show, 10));
            }),
            (e.prototype.hideAfterDelay = function() {
              window.clearTimeout(this.hideTimeoutToken),
                (this.hideTimeoutToken = window.setTimeout(this.hide, 10));
            }),
            (e.prototype.isShowing = function() {
              return this.isDialogShowing;
            }),
            (e.prototype.getContainer = function() {
              return (
                null == this.container &&
                  ((this.container = document.createElement('div')),
                  this.container.classList.add(vc),
                  document.body.appendChild(this.container)),
                this.container
              );
            }),
            (e.prototype.renderComponent = function() {
              return Ln.createElement(
                El,
                Mn({}, this.componentProps, {
                  className: Cr()(Vt, this.componentProps.className),
                  isOpen: this.isDialogShowing,
                  onClose: this.hide
                }),
                Ln.createElement('div', { className: we }, this.renderHotkeys())
              );
            }),
            (e.prototype.renderHotkeys = function() {
              var e = this,
                t = this.emptyHotkeyQueue().map(function(t, c) {
                  var n =
                    !0 === t.global && null == t.group
                      ? e.componentProps.globalHotkeysGroup
                      : t.group;
                  return Ln.createElement(As, Mn({ key: c }, t, { group: n }));
                });
              return Ln.createElement(Ss, null, t);
            }),
            (e.prototype.emptyHotkeyQueue = function() {
              var e = this.hotkeysQueue.reduce(function(e, t) {
                return e.concat(t);
              }, []);
              return (this.hotkeysQueue.length = 0), e;
            }),
            e
          );
        })())();
      function Ns() {
        return Os.isShowing();
      }
      function ws(e) {
        for (var t in e) e.hasOwnProperty(t) && (Os.componentProps[t] = e[t]);
      }
      function Ts() {
        Os.hide();
      }
      !(function(e) {
        (e.LOCAL = 'local'), (e.GLOBAL = 'global');
      })(gs || (gs = {}));
      var Ps = (function() {
        function e(e) {
          var t = this;
          (this.scope = e),
            (this.actions = []),
            (this.handleKeyDown = function(e) {
              var c,
                n = Es(e);
              t.isTextInput(e) || !Ms(Hs('?'), n)
                ? Ns() ||
                  t.invokeNamedCallbackIfComboRecognized(n, 'onKeyDown', e)
                : Ns()
                ? Os.hideAfterDelay()
                : ((c = t.actions.map(function(e) {
                    return e.props;
                  })),
                  Os.enqueueHotkeysForDisplay(c));
            }),
            (this.handleKeyUp = function(e) {
              Ns() ||
                t.invokeNamedCallbackIfComboRecognized(Es(e), 'onKeyUp', e);
            });
        }
        return (
          (e.prototype.count = function() {
            return this.actions.length;
          }),
          (e.prototype.clear = function() {
            this.actions = [];
          }),
          (e.prototype.setHotkeys = function(e) {
            var t = this,
              c = [];
            Ln.Children.forEach(e.children, function(e) {
              Er(e, As) &&
                t.isScope(e.props) &&
                c.push({ combo: Hs(e.props.combo), props: e.props });
            }),
              (this.actions = c);
          }),
          (e.prototype.invokeNamedCallbackIfComboRecognized = function(
            e,
            t,
            c
          ) {
            for (
              var n = this.isTextInput(c), r = 0, o = this.actions;
              r < o.length;
              r++
            ) {
              var a = o[r];
              !((n && !a.props.allowInInput) || a.props.disabled) &&
                Ms(a.combo, e) &&
                (a.props.preventDefault && c.preventDefault(),
                a.props.stopPropagation &&
                  ((c.isPropagationStopped = !0), c.stopPropagation()),
                pr(a.props[t], c));
            }
          }),
          (e.prototype.isScope = function(e) {
            return (e.global ? gs.GLOBAL : gs.LOCAL) === this.scope;
          }),
          (e.prototype.isTextInput = function(e) {
            var t = e.target;
            if (null == t || null == t.closest) return !1;
            var c = t.closest('input, textarea, [contenteditable=true]');
            if (null == c) return !1;
            if ('input' === c.tagName.toLowerCase()) {
              var n = c.type;
              if ('checkbox' === n || 'radio' === n) return !1;
            }
            return !c.readOnly;
          }),
          e
        );
      })();
      function Is(e) {
        var t;
        return (
          hr(e.prototype.renderHotkeys) ||
            console.warn(
              '[Blueprint] @HotkeysTarget-decorated class should implement renderHotkeys.'
            ),
          ((t = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.globalHotkeysEvents = new Ps(gs.GLOBAL)),
                (t.localHotkeysEvents = new Ps(gs.LOCAL)),
                t
              );
            }
            return (
              yn(t, e),
              (t.prototype.componentDidMount = function() {
                null != e.prototype.componentDidMount &&
                  e.prototype.componentDidMount.call(this),
                  document.addEventListener(
                    'keydown',
                    this.globalHotkeysEvents.handleKeyDown
                  ),
                  document.addEventListener(
                    'keyup',
                    this.globalHotkeysEvents.handleKeyUp
                  );
              }),
              (t.prototype.componentWillUnmount = function() {
                null != e.prototype.componentWillUnmount &&
                  e.prototype.componentWillUnmount.call(this),
                  document.removeEventListener(
                    'keydown',
                    this.globalHotkeysEvents.handleKeyDown
                  ),
                  document.removeEventListener(
                    'keyup',
                    this.globalHotkeysEvents.handleKeyUp
                  ),
                  this.globalHotkeysEvents.clear(),
                  this.localHotkeysEvents.clear();
              }),
              (t.prototype.render = function() {
                var t = this,
                  c = e.prototype.render.call(this);
                if (null == c) return c;
                if (!Ln.isValidElement(c))
                  return (
                    console.warn(
                      '[Blueprint] "@HotkeysTarget-decorated components must return a single JSX.Element or an empty render.'
                    ),
                    c
                  );
                if (hr(this.renderHotkeys)) {
                  var n = this.renderHotkeys();
                  if (
                    (this.localHotkeysEvents &&
                      this.localHotkeysEvents.setHotkeys(n.props),
                    this.globalHotkeysEvents &&
                      this.globalHotkeysEvents.setHotkeys(n.props),
                    this.localHotkeysEvents.count() > 0)
                  ) {
                    var r = void 0 === n.props.tabIndex ? 0 : n.props.tabIndex,
                      o = c.props,
                      a = o.onKeyDown,
                      l = o.onKeyUp;
                    return Ln.cloneElement(c, {
                      onKeyDown: function(e) {
                        t.localHotkeysEvents.handleKeyDown(e.nativeEvent),
                          pr(a, e);
                      },
                      onKeyUp: function(e) {
                        t.localHotkeysEvents.handleKeyUp(e.nativeEvent),
                          pr(l, e);
                      },
                      tabIndex: r
                    });
                  }
                }
                return c;
              }),
              t
            );
          })(e)).displayName = 'HotkeysTarget(' + Vr(e) + ')'),
          t
        );
      }
      var Rs = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.className,
                c = Hn(e, ['className']);
              return Ln.createElement('div', Mn({ className: Cr()(Rt, t) }, c));
            }),
            (t.displayName = xn + '.NavbarDivider'),
            Vn([Ar.polyfill], t)
          );
        })(Rn),
        ks = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.align,
                c = e.children,
                n = e.className,
                r = Hn(e, ['align', 'children', 'className']),
                o = Cr()(Pt, sn(t), n);
              return Ln.createElement('div', Mn({ className: o }, r), c);
            }),
            (t.displayName = xn + '.NavbarGroup'),
            (t.defaultProps = { align: l.LEFT }),
            Vn([Ar.polyfill], t)
          );
        })(Rn),
        _s = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.children,
                c = e.className,
                n = Hn(e, ['children', 'className']);
              return Ln.createElement(
                'div',
                Mn({ className: Cr()(It, c) }, n),
                t
              );
            }),
            (t.displayName = xn + '.NavbarHeading'),
            Vn([Ar.polyfill], t)
          );
        })(Rn),
        xs = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              var e,
                t = this.props,
                c = t.children,
                n = t.className,
                r = t.fixedToTop,
                o = Hn(t, ['children', 'className', 'fixedToTop']),
                a = Cr()(Tt, (((e = {})[E] = r), e), n);
              return Ln.createElement('div', Mn({ className: a }, o), c);
            }),
            (t.displayName = xn + '.Navbar'),
            (t.Divider = Rs),
            (t.Group = ks),
            (t.Heading = _s),
            Vn([Ar.polyfill], t)
          );
        })(Rn),
        Ds = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.action,
                c = e.children,
                n = e.className,
                r = e.description,
                o = e.title;
              return Ln.createElement(
                'div',
                { className: Cr()(kt, n) },
                this.maybeRenderVisual(),
                o && Ln.createElement(vl, null, o),
                r && Mr(r, 'div'),
                t,
                c
              );
            }),
            (t.prototype.maybeRenderVisual = function() {
              var e = this.props.icon;
              return null == e
                ? null
                : Ln.createElement(
                    'div',
                    { className: _t },
                    Ln.createElement(cl, {
                      icon: e,
                      iconSize: 3 * cl.SIZE_LARGE
                    })
                  );
            }),
            (t.displayName = xn + '.NonIdealState'),
            Vn([Ar.polyfill], t)
          );
        })(Rn),
        Fs = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.handleClose = function() {
                return t.props.onClose(t.props.panel);
              }),
              t
            );
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.panel,
                c = e.onOpen;
              return Ln.createElement(
                'div',
                { className: Zt },
                this.maybeRenderHeader(),
                Ln.createElement(
                  t.component,
                  Mn({ openPanel: c, closePanel: this.handleClose }, t.props)
                )
              );
            }),
            (t.prototype.maybeRenderHeader = function() {
              return this.props.showHeader
                ? Ln.createElement(
                    'div',
                    { className: Xt },
                    Ln.createElement('span', null, this.maybeRenderBack()),
                    Ln.createElement(
                      bl,
                      { className: re, ellipsize: !0 },
                      this.props.panel.title
                    ),
                    Ln.createElement('span', null)
                  )
                : null;
            }),
            (t.prototype.maybeRenderBack = function() {
              return void 0 === this.props.previousPanel
                ? null
                : Ln.createElement(al, {
                    className: $t,
                    icon: 'chevron-left',
                    minimal: !0,
                    onClick: this.handleClose,
                    small: !0,
                    text: this.props.previousPanel.title
                  });
            }),
            Vn([Ar.polyfill], t)
          );
        })(Rn),
        Bs = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = {
                direction: 'push',
                stack:
                  null != t.props.stack
                    ? t.props.stack.slice().reverse()
                    : [t.props.initialPanel]
              }),
              (t.renderPanel = function(e, c) {
                var n = t.props,
                  r = n.renderActivePanelOnly,
                  o = n.showPanelHeader,
                  a = void 0 === o || o,
                  l = t.state.stack,
                  s = l.length - c,
                  i = r ? l.length : s;
                return Ln.createElement(
                  aa.CSSTransition,
                  { classNames: qt, key: i, timeout: 400 },
                  Ln.createElement(Fs, {
                    onClose: t.handlePanelClose,
                    onOpen: t.handlePanelOpen,
                    panel: e,
                    previousPanel: l[c + 1],
                    showHeader: a
                  })
                );
              }),
              (t.handlePanelClose = function(e) {
                var c = t.state.stack;
                c[0] !== e ||
                  c.length <= 1 ||
                  (pr(t.props.onClose, e),
                  null == t.props.stack &&
                    t.setState(function(e) {
                      return { direction: 'pop', stack: e.stack.slice(1) };
                    }));
              }),
              (t.handlePanelOpen = function(e) {
                pr(t.props.onOpen, e),
                  null == t.props.stack &&
                    t.setState(function(t) {
                      return { direction: 'push', stack: En([e], t.stack) };
                    });
              }),
              t
            );
          }
          return (
            yn(t, e),
            (t.prototype.componentDidUpdate = function(t, c, n) {
              e.prototype.componentDidUpdate.call(this, t, c, n),
                this.props.stack !== t.stack &&
                  null != t.stack &&
                  this.setState({ stack: this.props.stack.slice().reverse() }),
                (null != this.props.stack ? this.props.stack.length : 0) !==
                  (null != t.stack ? t.stack.length : 0) &&
                  null != t.stack &&
                  this.setState({
                    direction:
                      t.stack.length - this.props.stack.length < 0
                        ? 'push'
                        : 'pop'
                  });
            }),
            (t.prototype.render = function() {
              var e = Cr()(
                qt,
                qt + '-' + this.state.direction,
                this.props.className
              );
              return Ln.createElement(
                aa.TransitionGroup,
                { className: e, component: 'div' },
                this.renderPanels()
              );
            }),
            (t.prototype.validateProps = function(e) {
              if (
                (null == e.initialPanel && null == e.stack) ||
                (null != e.initialPanel && null != e.stack)
              )
                throw new Error(
                  '[Blueprint] <PanelStack> requires exactly one of initialPanel and stack prop'
                );
              if (null != e.stack && 0 === e.stack.length)
                throw new Error(
                  '[Blueprint] <PanelStack> requires at least one panel in the stack'
                );
            }),
            (t.prototype.renderPanels = function() {
              var e = this.props.renderActivePanelOnly,
                t = void 0 === e || e,
                c = this.state.stack;
              return 0 === c.length
                ? null
                : (t ? [c[0]] : c).map(this.renderPanel).reverse();
            }),
            Vn([Ar.polyfill], t)
          );
        })(Rn),
        Us = Mn(Mn({}, h), {
          AUTO: 'auto',
          AUTO_END: 'auto-end',
          AUTO_START: 'auto-start'
        }),
        Gs = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              var e,
                t = this.props,
                c = t.animate,
                n = void 0 === c || c,
                r = t.className,
                o = t.intent,
                a = t.stripes,
                l = void 0 === a || a,
                s = t.value,
                i = Cr()(ic, un(o), (((e = {})[uc] = !n), (e[pc] = !l), e), r),
                h = null == s ? null : 100 * Nn(s, 0, 1) + '%';
              return Ln.createElement(
                'div',
                { className: i },
                Ln.createElement('div', { className: hc, style: { width: h } })
              );
            }),
            (t.displayName = xn + '.ProgressBar'),
            Vn([Ar.polyfill], t)
          );
        })(Rn),
        js = { FULL: 'full', START: 'start', END: 'end' },
        Ks = { LOCK: 'lock', PUSH: 'push', NONE: 'none' };
      function Ws(e) {
        return (100 * e).toFixed(2) + '%';
      }
      function Ys(e, t, c, n) {
        for (var r = t < c ? 1 : -1, o = t; o !== c + r; o += r) e[o] = n;
      }
      var qs = ['max', 'min', 'stepSize', 'tickSize', 'value'],
        Xs = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = { isMoving: !1 }),
              (t.refHandlers = {
                handle: function(e) {
                  return (t.handleElement = e);
                }
              }),
              (t.beginHandleMovement = function(e) {
                document.addEventListener('mousemove', t.handleHandleMovement),
                  document.addEventListener('mouseup', t.endHandleMovement),
                  t.setState({ isMoving: !0 }),
                  t.changeValue(t.clientToValue(t.mouseEventClientOffset(e)));
              }),
              (t.beginHandleTouchMovement = function(e) {
                document.addEventListener(
                  'touchmove',
                  t.handleHandleTouchMovement
                ),
                  document.addEventListener(
                    'touchend',
                    t.endHandleTouchMovement
                  ),
                  document.addEventListener(
                    'touchcancel',
                    t.endHandleTouchMovement
                  ),
                  t.setState({ isMoving: !0 }),
                  t.changeValue(t.clientToValue(t.touchEventClientOffset(e)));
              }),
              (t.endHandleMovement = function(e) {
                t.handleMoveEndedAt(t.mouseEventClientOffset(e));
              }),
              (t.endHandleTouchMovement = function(e) {
                t.handleMoveEndedAt(t.touchEventClientOffset(e));
              }),
              (t.handleMoveEndedAt = function(e) {
                t.removeDocumentEventListeners(),
                  t.setState({ isMoving: !1 }),
                  pr(t.props.onRelease, t.changeValue(t.clientToValue(e)));
              }),
              (t.handleHandleMovement = function(e) {
                t.handleMovedTo(t.mouseEventClientOffset(e));
              }),
              (t.handleHandleTouchMovement = function(e) {
                t.handleMovedTo(t.touchEventClientOffset(e));
              }),
              (t.handleMovedTo = function(e) {
                t.state.isMoving &&
                  !t.props.disabled &&
                  t.changeValue(t.clientToValue(e));
              }),
              (t.handleKeyDown = function(e) {
                var c = t.props,
                  n = c.stepSize,
                  r = c.value,
                  o = e.which;
                o === Qn || o === $n
                  ? (t.changeValue(r - n), e.preventDefault())
                  : (o !== Zn && o !== Jn) ||
                    (t.changeValue(r + n), e.preventDefault());
              }),
              (t.handleKeyUp = function(e) {
                [Zn, Qn, $n, Jn].indexOf(e.which) >= 0 &&
                  pr(t.props.onRelease, t.props.value);
              }),
              t
            );
          }
          return (
            yn(t, e),
            (t.prototype.componentDidMount = function() {
              this.forceUpdate();
            }),
            (t.prototype.render = function() {
              var e,
                t = this.props,
                c = t.className,
                n = t.disabled,
                r = t.label,
                o = t.min,
                a = t.tickSizeRatio,
                l = t.value,
                s = t.vertical,
                i = this.state.isMoving,
                h = this.getHandleMidpointAndOffset(this.handleElement, !0)
                  .handleMidpoint,
                p = 'calc(' + Ws((l - o) * a) + ' - ' + h + 'px)',
                u = s ? { bottom: p } : { left: p };
              return Ln.createElement(
                'span',
                {
                  className: Cr()(zc, ((e = {}), (e[d] = i), e), c),
                  onKeyDown: n ? null : this.handleKeyDown,
                  onKeyUp: n ? null : this.handleKeyUp,
                  onMouseDown: n ? null : this.beginHandleMovement,
                  onTouchStart: n ? null : this.beginHandleTouchMovement,
                  ref: this.refHandlers.handle,
                  style: u,
                  tabIndex: 0
                },
                null == r
                  ? null
                  : Ln.createElement('span', { className: yc }, r)
              );
            }),
            (t.prototype.componentWillUnmount = function() {
              this.removeDocumentEventListeners();
            }),
            (t.prototype.clientToValue = function(e) {
              var t = this.props,
                c = t.stepSize,
                n = t.tickSize,
                r = t.value,
                o = t.vertical;
              if (null == this.handleElement) return r;
              var a =
                (o ? window.innerHeight - e : e) -
                this.getHandleElementCenterPixel(this.handleElement);
              return isNaN(a) ? r : r + Math.round(a / (n * c)) * c;
            }),
            (t.prototype.mouseEventClientOffset = function(e) {
              return this.props.vertical ? e.clientY : e.clientX;
            }),
            (t.prototype.touchEventClientOffset = function(e) {
              var t = e.changedTouches[0];
              return this.props.vertical ? t.clientY : t.clientX;
            }),
            (t.prototype.validateProps = function(e) {
              for (var t = 0, c = qs; t < c.length; t++) {
                var n = c[t];
                if ('number' != typeof e[n])
                  throw new Error(
                    '[Blueprint] <Handle> requires number value for ' +
                      n +
                      ' prop'
                  );
              }
            }),
            (t.prototype.changeValue = function(e, t) {
              return (
                void 0 === t && (t = this.props.onChange),
                (e = this.clamp(e)),
                isNaN(e) || this.props.value === e || pr(t, e),
                e
              );
            }),
            (t.prototype.clamp = function(e) {
              return Nn(e, this.props.min, this.props.max);
            }),
            (t.prototype.getHandleElementCenterPixel = function(e) {
              var t = this.getHandleMidpointAndOffset(e),
                c = t.handleMidpoint;
              return t.handleOffset + c;
            }),
            (t.prototype.getHandleMidpointAndOffset = function(e, t) {
              if ((void 0 === t && (t = !1), null == e))
                return { handleMidpoint: 0, handleOffset: 0 };
              var c = this.props.vertical,
                n = e.getBoundingClientRect(),
                r = c ? (t ? 'width' : 'height') : t ? 'height' : 'width',
                o = c ? window.innerHeight - (n.top + n[r]) : n.left;
              return { handleMidpoint: n[r] / 2, handleOffset: o };
            }),
            (t.prototype.removeDocumentEventListeners = function() {
              document.removeEventListener(
                'mousemove',
                this.handleHandleMovement
              ),
                document.removeEventListener('mouseup', this.endHandleMovement),
                document.removeEventListener(
                  'touchmove',
                  this.handleHandleTouchMovement
                ),
                document.removeEventListener(
                  'touchend',
                  this.endHandleTouchMovement
                ),
                document.removeEventListener(
                  'touchcancel',
                  this.endHandleTouchMovement
                );
            }),
            (t.displayName = xn + '.SliderHandle'),
            Vn([Ar.polyfill], t)
          );
        })(Rn),
        $s = function() {
          return null;
        };
      $s.displayName = xn + '.MultiSliderHandle';
      var Zs,
        Js = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = {
                labelPrecision: Qs(t.props),
                tickSize: 0,
                tickSizeRatio: 0
              }),
              (t.handleElements = []),
              (t.addHandleRef = function(e) {
                null != e && t.handleElements.push(e);
              }),
              (t.maybeHandleTrackClick = function(e) {
                if (t.canHandleTrackEvent(e)) {
                  var c = t.nearestHandleForValue(t.handleElements, function(
                    t
                  ) {
                    return t.mouseEventClientOffset(e);
                  });
                  c && c.beginHandleMovement(e);
                }
              }),
              (t.maybeHandleTrackTouch = function(e) {
                if (t.canHandleTrackEvent(e)) {
                  var c = t.nearestHandleForValue(t.handleElements, function(
                    t
                  ) {
                    return t.touchEventClientOffset(e);
                  });
                  c && c.beginHandleTouchMovement(e);
                }
              }),
              (t.canHandleTrackEvent = function(e) {
                var c = e.target;
                return !t.props.disabled && null == c.closest('.' + zc);
              }),
              (t.getHandlerForIndex = function(e, c) {
                return function(n) {
                  pr(c, t.getNewHandleValues(n, e));
                };
              }),
              (t.handleChange = function(e) {
                var c = ei(t.props),
                  n = c.map(function(e) {
                    return e.value;
                  });
                cr(e, n) ||
                  (pr(t.props.onChange, e),
                  c.forEach(function(t, c) {
                    n[c] !== e[c] && pr(t.onChange, e[c]);
                  }));
              }),
              (t.handleRelease = function(e) {
                var c = ei(t.props);
                pr(t.props.onRelease, e),
                  c.forEach(function(t, c) {
                    pr(t.onRelease, e[c]);
                  });
              }),
              t
            );
          }
          var c;
          return (
            yn(t, e),
            (c = t),
            (t.getDerivedStateFromProps = function(e) {
              return { labelPrecision: c.getLabelPrecision(e) };
            }),
            (t.getLabelPrecision = function(e) {
              var t = e.labelPrecision,
                c = e.stepSize;
              return null == t ? wn(c) : t;
            }),
            (t.prototype.getSnapshotBeforeUpdate = function(e) {
              var t = ei(e);
              return (
                ei(this.props).length !== t.length &&
                  (this.handleElements = []),
                null
              );
            }),
            (t.prototype.render = function() {
              var e,
                t = this,
                c = Cr()(
                  dc,
                  (((e = {})[M] = this.props.disabled),
                  (e[dc + '-unlabeled'] = !1 === this.props.labelRenderer),
                  (e[T] = this.props.vertical),
                  e),
                  this.props.className
                );
              return Ln.createElement(
                'div',
                {
                  className: c,
                  onMouseDown: this.maybeHandleTrackClick,
                  onTouchStart: this.maybeHandleTrackTouch
                },
                Ln.createElement(
                  'div',
                  {
                    className: Mc,
                    ref: function(e) {
                      return (t.trackElement = e);
                    }
                  },
                  this.renderTracks()
                ),
                Ln.createElement('div', { className: fc }, this.renderLabels()),
                this.renderHandles()
              );
            }),
            (t.prototype.componentDidMount = function() {
              this.updateTickSize();
            }),
            (t.prototype.componentDidUpdate = function(t, c, n) {
              e.prototype.componentDidUpdate.call(this, t, c, n),
                this.updateTickSize();
            }),
            (t.prototype.validateProps = function(e) {
              if (e.stepSize <= 0)
                throw new Error(
                  '[Blueprint] <Slider> stepSize must be greater than zero.'
                );
              if (e.labelStepSize <= 0)
                throw new Error(
                  '[Blueprint] <Slider> labelStepSize must be greater than zero.'
                );
              var t = !1;
              if (
                (Ln.Children.forEach(e.children, function(e) {
                  e && !Er(e, c.Handle) && (t = !0);
                }),
                t)
              )
                throw new Error(
                  '[Blueprint] <MultiSlider> children must be <SliderHandle>s or <SliderTrackStop>s'
                );
            }),
            (t.prototype.formatLabel = function(e) {
              var t = this.props.labelRenderer;
              return !1 === t
                ? null
                : hr(t)
                ? t(e)
                : e.toFixed(this.state.labelPrecision);
            }),
            (t.prototype.renderLabels = function() {
              if (!1 === this.props.labelRenderer) return null;
              for (
                var e = this.props,
                  t = e.labelStepSize,
                  c = e.max,
                  n = e.min,
                  r = [],
                  o = this.state.tickSizeRatio * t,
                  a = n,
                  l = 0;
                a < c || On(a, c);
                a += t, l += o
              ) {
                var s = Ws(l),
                  i = this.props.vertical ? { bottom: s } : { left: s };
                r.push(
                  Ln.createElement(
                    'div',
                    { className: yc, key: a, style: i },
                    this.formatLabel(a)
                  )
                );
              }
              return r;
            }),
            (t.prototype.renderTracks = function() {
              var e = ti(this.props);
              e.push({ value: this.props.max });
              for (
                var t = { value: this.props.min }, c = [], n = 0;
                n < e.length;
                n++
              ) {
                var r = e[n];
                c.push(this.renderTrackFill(n, t, r)), (t = r);
              }
              return c;
            }),
            (t.prototype.renderTrackFill = function(e, t, c) {
              var n = [
                  this.getOffsetRatio(t.value),
                  this.getOffsetRatio(c.value)
                ].sort(function(e, t) {
                  return e - t;
                }),
                r = n[0],
                o = n[1],
                a = Ws(r),
                l = Ws(1 - o),
                s = this.props.vertical
                  ? { bottom: a, top: l, left: 0 }
                  : { left: a, right: l, top: 0 },
                i = Mn(
                  Mn({}, s),
                  t.trackStyleAfter || c.trackStyleBefore || {}
                ),
                h = Cr()(Hc, un(this.getTrackIntent(t, c)));
              return Ln.createElement('div', {
                key: 'track-' + e,
                className: h,
                style: i
              });
            }),
            (t.prototype.renderHandles = function() {
              var e = this,
                t = this.props,
                c = t.disabled,
                n = t.max,
                r = t.min,
                o = t.stepSize,
                a = t.vertical,
                l = ei(this.props);
              return 0 === l.length
                ? null
                : l.map(function(t, s) {
                    var i,
                      h = t.value,
                      p = t.type;
                    return Ln.createElement(Xs, {
                      className: Cr()(
                        ((i = {}),
                        (i[Vc] = p === js.START),
                        (i[Ec] = p === js.END),
                        i)
                      ),
                      disabled: c,
                      key: s + '-' + l.length,
                      label: e.formatLabel(h),
                      max: n,
                      min: r,
                      onChange: e.getHandlerForIndex(s, e.handleChange),
                      onRelease: e.getHandlerForIndex(s, e.handleRelease),
                      ref: e.addHandleRef,
                      stepSize: o,
                      tickSize: e.state.tickSize,
                      tickSizeRatio: e.state.tickSizeRatio,
                      value: h,
                      vertical: a
                    });
                  });
            }),
            (t.prototype.nearestHandleForValue = function(e, t) {
              return (function(e, t) {
                if (0 !== e.length) {
                  for (var c = e[0], n = t(c), r = 1; r < e.length; r++) {
                    var o = e[r],
                      a = t(o);
                    a < n && ((c = o), (n = a));
                  }
                  return c;
                }
              })(e, function(e) {
                var c = t(e),
                  n = e.clientToValue(c),
                  r = e.props.value;
                return Math.abs(n - r);
              });
            }),
            (t.prototype.getNewHandleValues = function(e, t) {
              var c = ei(this.props).map(function(e) {
                  return e.value;
                }),
                n = c.slice();
              (n[t] = e),
                n.sort(function(e, t) {
                  return e - t;
                });
              var r = n.indexOf(e),
                o = this.findFirstLockedHandleIndex(t, r);
              return -1 !== o ? (Ys(c, t, o, c[o]), c) : (Ys(n, t, r, e), n);
            }),
            (t.prototype.findFirstLockedHandleIndex = function(e, t) {
              for (
                var c = e < t ? 1 : -1, n = ei(this.props), r = e + c;
                r !== t + c;
                r += c
              )
                if (n[r].interactionKind !== Ks.PUSH) return r;
              return -1;
            }),
            (t.prototype.getOffsetRatio = function(e) {
              return Nn((e - this.props.min) * this.state.tickSizeRatio, 0, 1);
            }),
            (t.prototype.getTrackIntent = function(e, t) {
              return this.props.showTrackFill
                ? void 0 !== e.intentAfter
                  ? e.intentAfter
                  : void 0 !== t && void 0 !== t.intentBefore
                  ? t.intentBefore
                  : this.props.defaultTrackIntent
                : i.NONE;
            }),
            (t.prototype.updateTickSize = function() {
              if (null != this.trackElement) {
                var e = this.props.vertical
                    ? this.trackElement.clientHeight
                    : this.trackElement.clientWidth,
                  t = 1 / (this.props.max - this.props.min),
                  c = e * t;
                this.setState({ tickSize: c, tickSizeRatio: t });
              }
            }),
            (t.defaultSliderProps = {
              disabled: !1,
              labelStepSize: 1,
              max: 10,
              min: 0,
              showTrackFill: !0,
              stepSize: 1,
              vertical: !1
            }),
            (t.defaultProps = Mn(Mn({}, c.defaultSliderProps), {
              defaultTrackIntent: i.NONE
            })),
            (t.displayName = xn + '.MultiSlider'),
            (t.Handle = $s),
            (c = Vn([Ar.polyfill], t))
          );
        })(Rn);
      function Qs(e) {
        var t = e.labelPrecision,
          c = e.stepSize;
        return null == t ? wn(c) : t;
      }
      function ei(e) {
        return ti(e, function(e) {
          return e.interactionKind !== Ks.NONE;
        });
      }
      function ti(e, t) {
        var c = e.children;
        void 0 === t &&
          (t = function() {
            return !0;
          });
        var n = Ln.Children.map(c, function(e) {
            return Er(e, Js.Handle) && t(e.props) ? e.props : null;
          }),
          r = null != n ? n : [];
        return (
          (r = r.filter(function(e) {
            return null !== e;
          })).sort(function(e, t) {
            return e.value - t.value;
          }),
          r
        );
      }
      !(function(e) {
        (e[(e.START = 0)] = 'START'), (e[(e.END = 1)] = 'END');
      })(Zs || (Zs = {}));
      var ci = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.value,
                c = Hn(e, ['value']);
              return Ln.createElement(
                Js,
                Mn({}, c),
                Ln.createElement(Js.Handle, {
                  value: t[Zs.START],
                  type: 'start',
                  intentAfter: c.intent
                }),
                Ln.createElement(Js.Handle, { value: t[Zs.END], type: 'end' })
              );
            }),
            (t.prototype.validateProps = function(e) {
              var t = e.value;
              if (null == t || null == t[Zs.START] || null == t[Zs.END])
                throw new Error(
                  '[Blueprint] <RangeSlider> value prop must be an array of two non-null numbers.'
                );
            }),
            (t.defaultProps = Mn(Mn({}, Js.defaultSliderProps), {
              intent: i.PRIMARY,
              value: [0, 10]
            })),
            (t.displayName = xn + '.RangeSlider'),
            Vn([Ar.polyfill], t)
          );
        })(Rn),
        ni = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.initialValue,
                c = e.intent,
                n = e.value,
                r = e.onChange,
                o = e.onRelease,
                a = Hn(e, [
                  'initialValue',
                  'intent',
                  'value',
                  'onChange',
                  'onRelease'
                ]);
              return Ln.createElement(
                Js,
                Mn({}, a),
                Ln.createElement(Js.Handle, {
                  value: n,
                  intentAfter: n < t ? c : void 0,
                  intentBefore: n >= t ? c : void 0,
                  onChange: r,
                  onRelease: o
                }),
                Ln.createElement(Js.Handle, {
                  value: t,
                  interactionKind: 'none'
                })
              );
            }),
            (t.defaultProps = Mn(Mn({}, Js.defaultSliderProps), {
              initialValue: 0,
              intent: i.PRIMARY,
              value: 0
            })),
            (t.displayName = xn + '.Slider'),
            Vn([Ar.polyfill], t)
          );
        })(Rn),
        ri = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.className,
                c = e.panel;
              return Ln.createElement(
                'div',
                { className: Cr()(Tc, t), role: 'tablist' },
                c
              );
            }),
            (t.defaultProps = { disabled: !1, id: void 0 }),
            (t.displayName = xn + '.Tab'),
            Vn([Ar.polyfill], t)
          );
        })(Rn),
        oi = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.handleClick = function(e) {
                return t.props.onClick(t.props.id, e);
              }),
              t
            );
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.className,
                c = e.children,
                n = e.disabled,
                r = e.id,
                o = e.parentId,
                a = e.selected,
                l = e.title,
                s = Hn(e, [
                  'className',
                  'children',
                  'disabled',
                  'id',
                  'parentId',
                  'selected',
                  'title'
                ]);
              return Ln.createElement(
                'div',
                Mn({}, Fn(s), {
                  'aria-controls': ai(o, r),
                  'aria-disabled': n,
                  'aria-expanded': a,
                  'aria-selected': a,
                  className: Cr()(Sc, t),
                  'data-tab-id': r,
                  id: li(o, r),
                  onClick: n ? void 0 : this.handleClick,
                  role: 'tab',
                  tabIndex: n ? void 0 : 0
                }),
                l,
                c
              );
            }),
            (t.displayName = xn + '.TabTitle'),
            Vn([Ar.polyfill], t)
          );
        })(Rn);
      function ai(e, t) {
        return Tc + '_' + e + '_' + t;
      }
      function li(e, t) {
        return Sc + '-title_' + e + '_' + t;
      }
      var si = function() {
          return Ln.createElement('div', { className: We });
        },
        ii = '.' + Sc,
        hi = (function(e) {
          function t(t) {
            var c = e.call(this, t) || this;
            (c.refHandlers = {
              tablist: function(e) {
                return (c.tablistElement = e);
              }
            }),
              (c.handleKeyDown = function(e) {
                var t = document.activeElement.closest(ii);
                if (null != t) {
                  var n = c.getTabElements().filter(function(e) {
                      return 'false' === e.getAttribute('aria-disabled');
                    }),
                    r = n.indexOf(t),
                    o = c.getKeyCodeDirection(e);
                  if (r >= 0 && void 0 !== o) {
                    e.preventDefault();
                    var a = n.length;
                    n[(r + o + a) % a].focus();
                  }
                }
              }),
              (c.handleKeyPress = function(e) {
                var t = e.target.closest(ii);
                null != t && tr(e.which) && (e.preventDefault(), t.click());
              }),
              (c.handleTabClick = function(e, t) {
                pr(c.props.onChange, e, c.state.selectedTabId, t),
                  void 0 === c.props.selectedTabId &&
                    c.setState({ selectedTabId: e });
              }),
              (c.renderTabPanel = function(e) {
                var t = e.props,
                  n = t.className,
                  r = t.panel,
                  o = t.id,
                  a = t.panelClassName;
                if (void 0 !== r)
                  return Ln.createElement(
                    'div',
                    {
                      'aria-labelledby': li(c.props.id, o),
                      'aria-hidden': o !== c.state.selectedTabId,
                      className: Cr()(Tc, n, a),
                      id: ai(c.props.id, o),
                      key: o,
                      role: 'tabpanel'
                    },
                    r
                  );
              }),
              (c.renderTabTitle = function(e) {
                if (ui(e)) {
                  var t = e.props.id;
                  return Ln.createElement(
                    oi,
                    Mn({}, e.props, {
                      parentId: c.props.id,
                      onClick: c.handleTabClick,
                      selected: t === c.state.selectedTabId
                    })
                  );
                }
                return e;
              });
            var n = c.getInitialSelectedTabId();
            return (c.state = { selectedTabId: n }), c;
          }
          return (
            yn(t, e),
            (t.getDerivedStateFromProps = function(e) {
              var t = e.selectedTabId;
              return void 0 !== t ? { selectedTabId: t } : null;
            }),
            (t.prototype.render = function() {
              var e,
                t,
                c = this.state,
                n = c.indicatorWrapperStyle,
                r = c.selectedTabId,
                o = Ln.Children.map(this.props.children, this.renderTabTitle),
                a = this.getTabChildren()
                  .filter(
                    this.props.renderActiveTabPanelOnly
                      ? function(e) {
                          return e.props.id === r;
                        }
                      : function() {
                          return !0;
                        }
                  )
                  .map(this.renderTabPanel),
                l = this.props.animate
                  ? Ln.createElement(
                      'div',
                      { className: Nc, style: n },
                      Ln.createElement('div', { className: Oc })
                    )
                  : null,
                s = Cr()(
                  Pc,
                  (((e = {})[T] = this.props.vertical), e),
                  this.props.className
                ),
                i = Cr()(wc, (((t = {})[C] = this.props.large), t));
              return Ln.createElement(
                'div',
                { className: s },
                Ln.createElement(
                  'div',
                  {
                    className: i,
                    onKeyDown: this.handleKeyDown,
                    onKeyPress: this.handleKeyPress,
                    ref: this.refHandlers.tablist,
                    role: 'tablist'
                  },
                  l,
                  o
                ),
                a
              );
            }),
            (t.prototype.componentDidMount = function() {
              this.moveSelectionIndicator();
            }),
            (t.prototype.componentDidUpdate = function(e, t) {
              (this.state.selectedTabId !== t.selectedTabId ||
                (null != t.selectedTabId &&
                  !cr(
                    this.getTabChildrenProps(e),
                    this.getTabChildrenProps(),
                    nr
                  ))) &&
                this.moveSelectionIndicator();
            }),
            (t.prototype.getInitialSelectedTabId = function() {
              var e = this.props,
                t = e.defaultSelectedTabId,
                c = e.selectedTabId;
              if (void 0 !== c) return c;
              if (void 0 !== t) return t;
              var n = this.getTabChildren();
              return 0 === n.length ? void 0 : n[0].props.id;
            }),
            (t.prototype.getKeyCodeDirection = function(e) {
              return pi(e, $n, Zn) ? -1 : pi(e, Jn, Qn) ? 1 : void 0;
            }),
            (t.prototype.getTabChildrenProps = function(e) {
              return (
                void 0 === e && (e = this.props),
                this.getTabChildren(e).map(function(e) {
                  return e.props;
                })
              );
            }),
            (t.prototype.getTabChildren = function(e) {
              return (
                void 0 === e && (e = this.props),
                Ln.Children.toArray(e.children).filter(ui)
              );
            }),
            (t.prototype.getTabElements = function(e) {
              return (
                void 0 === e && (e = ''),
                null == this.tablistElement
                  ? []
                  : Array.from(this.tablistElement.querySelectorAll(ii + e))
              );
            }),
            (t.prototype.moveSelectionIndicator = function() {
              if (null != this.tablistElement && this.props.animate) {
                var e = ii + '[data-tab-id="' + this.state.selectedTabId + '"]',
                  t = this.tablistElement.querySelector(e),
                  c = { display: 'none' };
                if (null != t) {
                  var n = t.clientHeight,
                    r = t.clientWidth,
                    o = t.offsetLeft,
                    a = t.offsetTop;
                  c = {
                    height: n,
                    transform:
                      'translateX(' +
                      Math.floor(o) +
                      'px) translateY(' +
                      Math.floor(a) +
                      'px)',
                    width: r
                  };
                }
                this.setState({ indicatorWrapperStyle: c });
              }
            }),
            (t.Expander = si),
            (t.Tab = ri),
            (t.defaultProps = {
              animate: !0,
              large: !1,
              renderActiveTabPanelOnly: !1,
              vertical: !1
            }),
            (t.displayName = xn + '.Tabs'),
            Vn([Ar.polyfill], t)
          );
        })(Rn);
      function pi(e) {
        for (var t = [], c = 1; c < arguments.length; c++)
          t[c - 1] = arguments[c];
        return t.indexOf(e.which) >= 0;
      }
      function ui(e) {
        return Er(e, ri);
      }
      var vi = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.onRemoveClick = function(e) {
                pr(t.props.onRemove, e, t.props);
              }),
              t
            );
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              var e,
                t = this.props,
                c = t.active,
                n = t.children,
                r = t.className,
                o = t.fill,
                a = t.icon,
                l = t.intent,
                s = t.interactive,
                i = t.large,
                h = t.minimal,
                p = t.multiline,
                u = t.onRemove,
                v = t.rightIcon,
                m = t.round,
                f = t.tabIndex,
                z = void 0 === f ? 0 : f,
                y = Hn(t, [
                  'active',
                  'children',
                  'className',
                  'fill',
                  'icon',
                  'intent',
                  'interactive',
                  'large',
                  'minimal',
                  'multiline',
                  'onRemove',
                  'rightIcon',
                  'round',
                  'tabIndex'
                ]),
                M = hr(u),
                V = Cr()(
                  Ic,
                  un(l),
                  (((e = {})[d] = c),
                  (e[H] = o),
                  (e[g] = s),
                  (e[C] = i),
                  (e[A] = h),
                  (e[N] = m),
                  e),
                  r
                ),
                E = i || V.indexOf(C) >= 0,
                L = M
                  ? Ln.createElement(
                      'button',
                      {
                        type: 'button',
                        className: Rc,
                        onClick: this.onRemoveClick
                      },
                      Ln.createElement(cl, {
                        icon: 'small-cross',
                        iconSize: E ? cl.SIZE_LARGE : cl.SIZE_STANDARD
                      })
                    )
                  : null;
              return Ln.createElement(
                'span',
                Mn({}, y, { className: V, tabIndex: s ? z : void 0 }),
                Ln.createElement(cl, { icon: a }),
                !yr(n) &&
                  Ln.createElement(
                    bl,
                    { className: H, ellipsize: !p, tagName: 'span' },
                    n
                  ),
                Ln.createElement(cl, { icon: v }),
                L
              );
            }),
            (t.displayName = xn + '.Tag'),
            Vn([Ar.polyfill], t)
          );
        })(Rn),
        mi = -1,
        di = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = {
                activeIndex: mi,
                inputValue: t.props.inputValue || '',
                isInputFocused: !1
              }),
              (t.refHandlers = {
                input: function(e) {
                  (t.inputElement = e), pr(t.props.inputRef, e);
                }
              }),
              (t.addTags = function(e, c) {
                void 0 === c && (c = 'default');
                var n = t.props,
                  r = n.inputValue,
                  o = n.onAdd,
                  a = n.onChange,
                  l = n.values,
                  s = t.getValues(e),
                  i = !1 !== pr(o, s, c) && void 0 === r;
                hr(a) && (i = !1 !== a(En(l, s)) && i),
                  i && t.setState({ inputValue: '' });
              }),
              (t.maybeRenderTag = function(e, c) {
                if (!e) return null;
                var n = t.props,
                  r = n.large,
                  o = n.tagProps,
                  a = hr(o) ? o(e, c) : o;
                return Ln.createElement(
                  vi,
                  Mn(
                    {
                      active: c === t.state.activeIndex,
                      'data-tag-index': c,
                      key: e + '__' + c,
                      large: r,
                      onRemove: t.props.disabled ? null : t.handleRemoveTag
                    },
                    a
                  ),
                  e
                );
              }),
              (t.handleContainerClick = function() {
                null != t.inputElement && t.inputElement.focus();
              }),
              (t.handleContainerBlur = function(e) {
                var c = e.currentTarget;
                requestAnimationFrame(function() {
                  c.contains(document.activeElement) ||
                    (t.props.addOnBlur &&
                      void 0 !== t.state.inputValue &&
                      t.state.inputValue.length > 0 &&
                      t.addTags(t.state.inputValue, 'blur'),
                    t.setState({ activeIndex: mi, isInputFocused: !1 }));
                });
              }),
              (t.handleInputFocus = function(e) {
                t.setState({ isInputFocused: !0 }),
                  pr(t.props.inputProps.onFocus, e);
              }),
              (t.handleInputChange = function(e) {
                t.setState({
                  activeIndex: mi,
                  inputValue: e.currentTarget.value
                }),
                  pr(t.props.onInputChange, e),
                  pr(t.props.inputProps.onChange, e);
              }),
              (t.handleInputKeyDown = function(e) {
                var c = e.currentTarget,
                  n = c.selectionEnd,
                  r = c.value,
                  o = t.state.activeIndex,
                  a = o;
                if (e.which === Wn && r.length > 0) t.addTags(r, 'default');
                else if (0 === n && t.props.values.length > 0)
                  if (e.which === $n || e.which === Jn) {
                    var l = t.getNextActiveIndex(e.which === Jn ? 1 : -1);
                    l !== o &&
                      (e.stopPropagation(),
                      (a = l),
                      t.setState({ activeIndex: l }));
                  } else
                    e.which === jn
                      ? t.handleBackspaceToRemove(e)
                      : e.which === er && t.handleDeleteToRemove(e);
                t.invokeKeyPressCallback('onKeyDown', e, a);
              }),
              (t.handleInputKeyUp = function(e) {
                t.invokeKeyPressCallback('onKeyUp', e, t.state.activeIndex);
              }),
              (t.handleInputPaste = function(e) {
                var c = t.props.separator,
                  n = e.clipboardData.getData('text');
                t.props.addOnPaste &&
                  0 !== n.length &&
                  !1 !== c &&
                  1 !== n.split(c).length &&
                  (e.preventDefault(), t.addTags(n, 'paste'));
              }),
              (t.handleRemoveTag = function(e) {
                var c = +e.currentTarget.parentElement.getAttribute(
                  'data-tag-index'
                );
                t.removeIndexFromValues(c);
              }),
              t
            );
          }
          return (
            yn(t, e),
            (t.getDerivedStateFromProps = function(e, t) {
              return e.inputValue !== t.prevInputValueProp
                ? { inputValue: e.inputValue, prevInputValueProp: e.inputValue }
                : null;
            }),
            (t.prototype.render = function() {
              var e,
                t = this.props,
                c = t.className,
                n = t.disabled,
                r = t.fill,
                o = t.inputProps,
                a = t.intent,
                l = t.large,
                s = t.leftIcon,
                i = t.placeholder,
                h = t.values,
                p = Cr()(
                  Qe,
                  kc,
                  (((e = {})[d] = this.state.isInputFocused),
                  (e[M] = n),
                  (e[H] = r),
                  (e[C] = l),
                  e),
                  un(a),
                  c
                ),
                u = p.indexOf(C) > mi,
                v = h.some(function(e) {
                  return !!e;
                }),
                m = null == i || v ? o.placeholder : i;
              return Ln.createElement(
                'div',
                {
                  className: p,
                  onBlur: this.handleContainerBlur,
                  onClick: this.handleContainerClick
                },
                Ln.createElement(cl, {
                  className: _c,
                  icon: s,
                  iconSize: u ? cl.SIZE_LARGE : cl.SIZE_STANDARD
                }),
                Ln.createElement(
                  'div',
                  { className: xc },
                  h.map(this.maybeRenderTag),
                  this.props.children,
                  Ln.createElement(
                    'input',
                    Mn({ value: this.state.inputValue }, o, {
                      onFocus: this.handleInputFocus,
                      onChange: this.handleInputChange,
                      onKeyDown: this.handleInputKeyDown,
                      onKeyUp: this.handleInputKeyUp,
                      onPaste: this.handleInputPaste,
                      placeholder: m,
                      ref: this.refHandlers.input,
                      className: Cr()(et, o.className),
                      disabled: n
                    })
                  )
                ),
                this.props.rightElement
              );
            }),
            (t.prototype.getNextActiveIndex = function(e) {
              var t = this.state.activeIndex;
              return t === mi
                ? e < 0
                  ? this.findNextIndex(this.props.values.length, -1)
                  : mi
                : this.findNextIndex(t, e);
            }),
            (t.prototype.findNextIndex = function(e, t) {
              for (
                var c = this.props.values, n = e + t;
                n > 0 && n < c.length && !c[n];

              )
                n += t;
              return Nn(n, 0, c.length);
            }),
            (t.prototype.getValues = function(e) {
              var t = this.props.separator;
              return (!1 === t ? [e] : e.split(t))
                .map(function(e) {
                  return e.trim();
                })
                .filter(function(e) {
                  return e.length > 0;
                });
            }),
            (t.prototype.handleBackspaceToRemove = function(e) {
              var t = this.state.activeIndex;
              this.setState({ activeIndex: this.getNextActiveIndex(-1) }),
                this.isValidIndex(t) &&
                  (e.stopPropagation(), this.removeIndexFromValues(t));
            }),
            (t.prototype.handleDeleteToRemove = function(e) {
              var t = this.state.activeIndex;
              this.isValidIndex(t) &&
                (e.stopPropagation(), this.removeIndexFromValues(t));
            }),
            (t.prototype.removeIndexFromValues = function(e) {
              var t = this.props,
                c = t.onChange,
                n = t.onRemove,
                r = t.values;
              pr(n, r[e], e),
                hr(c) &&
                  c(
                    r.filter(function(t, c) {
                      return c !== e;
                    })
                  );
            }),
            (t.prototype.invokeKeyPressCallback = function(e, t, c) {
              pr(this.props[e], t, c === mi ? void 0 : c),
                pr(this.props.inputProps[e], t);
            }),
            (t.prototype.isValidIndex = function(e) {
              return e !== mi && e < this.props.values.length;
            }),
            (t.displayName = xn + '.TagInput'),
            (t.defaultProps = {
              addOnBlur: !1,
              addOnPaste: !0,
              inputProps: {},
              separator: /[,\n\r]/,
              tagProps: {}
            }),
            Vn([Ar.polyfill], t)
          );
        })(Rn),
        fi = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.handleActionClick = function(e) {
                pr(t.props.action.onClick, e), t.triggerDismiss(!1);
              }),
              (t.handleCloseClick = function() {
                return t.triggerDismiss(!1);
              }),
              (t.startTimeout = function() {
                t.clearTimeouts(),
                  t.props.timeout > 0 &&
                    t.setTimeout(function() {
                      return t.triggerDismiss(!0);
                    }, t.props.timeout);
              }),
              t
            );
          }
          return (
            yn(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.className,
                c = e.icon,
                n = e.intent,
                r = e.message;
              return Ln.createElement(
                'div',
                {
                  className: Cr()(Dc, un(n), t),
                  onBlur: this.startTimeout,
                  onFocus: this.clearTimeouts,
                  onMouseEnter: this.clearTimeouts,
                  onMouseLeave: this.startTimeout,
                  tabIndex: 0
                },
                Ln.createElement(cl, { icon: c }),
                Ln.createElement('span', { className: Bc }, r),
                Ln.createElement(
                  Il,
                  { minimal: !0 },
                  this.maybeRenderActionButton(),
                  Ln.createElement(al, {
                    icon: 'cross',
                    onClick: this.handleCloseClick
                  })
                )
              );
            }),
            (t.prototype.componentDidMount = function() {
              this.startTimeout();
            }),
            (t.prototype.componentDidUpdate = function(e) {
              e.timeout !== this.props.timeout &&
                (this.props.timeout > 0
                  ? this.startTimeout()
                  : this.clearTimeouts());
            }),
            (t.prototype.componentWillUnmount = function() {
              this.clearTimeouts();
            }),
            (t.prototype.maybeRenderActionButton = function() {
              var e = this.props.action;
              return null == e
                ? void 0
                : Ln.createElement(
                    ll,
                    Mn({}, e, {
                      intent: void 0,
                      onClick: this.handleActionClick
                    })
                  );
            }),
            (t.prototype.triggerDismiss = function(e) {
              this.clearTimeouts(), pr(this.props.onDismiss, e);
            }),
            (t.defaultProps = { className: '', message: '', timeout: 5e3 }),
            (t.displayName = xn + '.Toast'),
            Vn([Ar.polyfill], t)
          );
        })(Rn),
        zi = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = { toasts: [] }),
              (t.toastId = 0),
              (t.getDismissHandler = function(e) {
                return function(c) {
                  t.dismiss(e.key, c);
                };
              }),
              (t.handleClose = function(e) {
                e.which === qn && t.clear();
              }),
              t
            );
          }
          var c;
          return (
            yn(t, e),
            (c = t),
            (t.create = function(e, t) {
              void 0 === t && (t = document.body),
                null == e ||
                  null == e.usePortal ||
                  An('production') ||
                  console.warn(
                    '[Blueprint] Toaster.create() ignores inline prop as it always creates a new element.'
                  );
              var n = document.createElement('div');
              t.appendChild(n);
              var r = br.render(
                Ln.createElement(c, Mn({}, e, { usePortal: !1 })),
                n
              );
              if (null == r)
                throw new Error(
                  '[Blueprint] Toaster.create() is not supported inside React lifecycle methods in React 16. See usage example on the docs site.'
                );
              return r;
            }),
            (t.prototype.show = function(e, t) {
              this.props.maxToasts && this.dismissIfAtLimit();
              var c = this.createToastOptions(e, t);
              return (
                void 0 === t || this.isNewToastKey(t)
                  ? this.setState(function(e) {
                      return { toasts: En([c], e.toasts) };
                    })
                  : this.setState(function(e) {
                      return {
                        toasts: e.toasts.map(function(e) {
                          return e.key === t ? c : e;
                        })
                      };
                    }),
                c.key
              );
            }),
            (t.prototype.dismiss = function(e, t) {
              void 0 === t && (t = !1),
                this.setState(function(c) {
                  return {
                    toasts: c.toasts.filter(function(c) {
                      var n = c.key === e;
                      return n && pr(c.onDismiss, t), !n;
                    })
                  };
                });
            }),
            (t.prototype.clear = function() {
              this.state.toasts.map(function(e) {
                return pr(e.onDismiss, !1);
              }),
                this.setState({ toasts: [] });
            }),
            (t.prototype.getToasts = function() {
              return this.state.toasts;
            }),
            (t.prototype.render = function() {
              var e = Cr()(Fc, this.getPositionClasses(), this.props.className);
              return Ln.createElement(
                pa,
                {
                  autoFocus: this.props.autoFocus,
                  canEscapeKeyClose: this.props.canEscapeKeyClear,
                  canOutsideClickClose: !1,
                  className: e,
                  enforceFocus: !1,
                  hasBackdrop: !1,
                  isOpen:
                    this.state.toasts.length > 0 || null != this.props.children,
                  onClose: this.handleClose,
                  transitionDuration: 350,
                  transitionName: Dc,
                  usePortal: this.props.usePortal
                },
                this.state.toasts.map(this.renderToast, this),
                this.props.children
              );
            }),
            (t.prototype.validateProps = function(e) {
              if (e.maxToasts < 1)
                throw new Error(
                  '[Blueprint] <Toaster> maxToasts is set to an invalid number, must be greater than 0'
                );
            }),
            (t.prototype.isNewToastKey = function(e) {
              return this.state.toasts.every(function(t) {
                return t.key !== e;
              });
            }),
            (t.prototype.dismissIfAtLimit = function() {
              this.state.toasts.length === this.props.maxToasts &&
                this.dismiss(
                  this.state.toasts[this.state.toasts.length - 1].key
                );
            }),
            (t.prototype.renderToast = function(e) {
              return Ln.createElement(
                fi,
                Mn({}, e, { onDismiss: this.getDismissHandler(e) })
              );
            }),
            (t.prototype.createToastOptions = function(e, t) {
              return (
                void 0 === t && (t = 'toast-' + this.toastId++),
                Mn(Mn({}, e), { key: t })
              );
            }),
            (t.prototype.getPositionClasses = function() {
              return this.props.position.split('-').map(function(e) {
                return Fc + '-' + e.toLowerCase();
              });
            }),
            (t.displayName = xn + '.Toaster'),
            (t.defaultProps = {
              autoFocus: !1,
              canEscapeKeyClear: !0,
              position: h.TOP,
              usePortal: !0
            }),
            (c = Vn([Ar.polyfill], t))
          );
        })(Rn),
        yi = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.handleCaretClick = function(e) {
                e.stopPropagation();
                var c = t.props,
                  n = c.isExpanded,
                  r = c.onCollapse,
                  o = c.onExpand;
                pr(n ? r : o, t, e);
              }),
              (t.handleClick = function(e) {
                pr(t.props.onClick, t, e);
              }),
              (t.handleContentRef = function(e) {
                pr(t.props.contentRef, t, e);
              }),
              (t.handleContextMenu = function(e) {
                pr(t.props.onContextMenu, t, e);
              }),
              (t.handleDoubleClick = function(e) {
                pr(t.props.onDoubleClick, t, e);
              }),
              (t.handleMouseEnter = function(e) {
                pr(t.props.onMouseEnter, t, e);
              }),
              (t.handleMouseLeave = function(e) {
                pr(t.props.onMouseLeave, t, e);
              }),
              t
            );
          }
          return (
            yn(t, e),
            (t.ofType = function() {
              return t;
            }),
            (t.prototype.render = function() {
              var e,
                t = this.props,
                c = t.children,
                n = t.className,
                r = t.disabled,
                o = t.icon,
                a = t.isExpanded,
                l = t.isSelected,
                s = t.label,
                i = Cr()(
                  Kc,
                  (((e = {})[M] = r), (e[cn] = l), (e[Zc] = a), e),
                  n
                ),
                h = Cr()($c, $c + '-' + this.props.depth),
                p =
                  !0 === r
                    ? {}
                    : {
                        onClick: this.handleClick,
                        onContextMenu: this.handleContextMenu,
                        onDoubleClick: this.handleDoubleClick,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave
                      };
              return Ln.createElement(
                'li',
                { className: i },
                Ln.createElement(
                  'div',
                  Mn({ className: h, ref: this.handleContentRef }, p),
                  this.maybeRenderCaret(),
                  Ln.createElement(cl, { className: Jc, icon: o }),
                  Ln.createElement('span', { className: Qc }, s),
                  this.maybeRenderSecondaryLabel()
                ),
                Ln.createElement(_l, { isOpen: a }, c)
              );
            }),
            (t.prototype.maybeRenderCaret = function() {
              var e = this.props,
                t = e.children,
                c = e.isExpanded,
                n = e.disabled,
                r = e.hasCaret;
              if (void 0 === r ? Ln.Children.count(t) > 0 : r) {
                var o = Cr()(Wc, c ? Xc : Yc),
                  a = !0 === n ? void 0 : this.handleCaretClick;
                return Ln.createElement(cl, {
                  className: o,
                  onClick: a,
                  icon: 'chevron-right'
                });
              }
              return Ln.createElement('span', { className: qc });
            }),
            (t.prototype.maybeRenderSecondaryLabel = function() {
              return null != this.props.secondaryLabel
                ? Ln.createElement(
                    'span',
                    { className: tn },
                    this.props.secondaryLabel
                  )
                : void 0;
            }),
            (t.displayName = xn + '.TreeNode'),
            t
          );
        })(Ln.Component),
        Mi = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.nodeRefs = {}),
              (t.handleNodeCollapse = function(e, c) {
                t.handlerHelper(t.props.onNodeCollapse, e, c);
              }),
              (t.handleNodeClick = function(e, c) {
                t.handlerHelper(t.props.onNodeClick, e, c);
              }),
              (t.handleContentRef = function(e, c) {
                null != c
                  ? (t.nodeRefs[e.props.id] = c)
                  : delete t.nodeRefs[e.props.id];
              }),
              (t.handleNodeContextMenu = function(e, c) {
                t.handlerHelper(t.props.onNodeContextMenu, e, c);
              }),
              (t.handleNodeDoubleClick = function(e, c) {
                t.handlerHelper(t.props.onNodeDoubleClick, e, c);
              }),
              (t.handleNodeExpand = function(e, c) {
                t.handlerHelper(t.props.onNodeExpand, e, c);
              }),
              (t.handleNodeMouseEnter = function(e, c) {
                t.handlerHelper(t.props.onNodeMouseEnter, e, c);
              }),
              (t.handleNodeMouseLeave = function(e, c) {
                t.handlerHelper(t.props.onNodeMouseLeave, e, c);
              }),
              t
            );
          }
          return (
            yn(t, e),
            (t.ofType = function() {
              return t;
            }),
            (t.nodeFromPath = function(e, c) {
              return 1 === e.length
                ? c[e[0]]
                : t.nodeFromPath(e.slice(1), c[e[0]].childNodes);
            }),
            (t.prototype.render = function() {
              return Ln.createElement(
                'div',
                { className: Cr()(jc, this.props.className) },
                this.renderNodes(this.props.contents, [], nn)
              );
            }),
            (t.prototype.getNodeContentElement = function(e) {
              return this.nodeRefs[e];
            }),
            (t.prototype.renderNodes = function(e, t, c) {
              var n = this;
              if (null == e) return null;
              var r = e.map(function(e, c) {
                var r = t.concat(c),
                  o = yi.ofType();
                return Ln.createElement(
                  o,
                  Mn({}, e, {
                    key: e.id,
                    contentRef: n.handleContentRef,
                    depth: r.length - 1,
                    onClick: n.handleNodeClick,
                    onContextMenu: n.handleNodeContextMenu,
                    onCollapse: n.handleNodeCollapse,
                    onDoubleClick: n.handleNodeDoubleClick,
                    onExpand: n.handleNodeExpand,
                    onMouseEnter: n.handleNodeMouseEnter,
                    onMouseLeave: n.handleNodeMouseLeave,
                    path: r
                  }),
                  n.renderNodes(e.childNodes, r)
                );
              });
              return Ln.createElement('ul', { className: Cr()(en, c) }, r);
            }),
            (t.prototype.handlerHelper = function(e, c, n) {
              hr(e) &&
                e(
                  t.nodeFromPath(c.props.path, this.props.contents),
                  c.props.path,
                  n
                );
            }),
            (t.displayName = xn + '.Tree'),
            t
          );
        })(Ln.Component),
        Hi = a;
    },
    2779: (e, t) => {
      var c;
      !(function() {
        'use strict';
        var n = {}.hasOwnProperty;
        function r() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var c = arguments[t];
            if (c) {
              var o = typeof c;
              if ('string' === o || 'number' === o) e.push(c);
              else if (Array.isArray(c) && c.length) {
                var a = r.apply(null, c);
                a && e.push(a);
              } else if ('object' === o)
                for (var l in c) n.call(c, l) && c[l] && e.push(l);
            }
          }
          return e.join(' ');
        }
        e.exports
          ? ((r.default = r), (e.exports = r))
          : void 0 ===
              (c = function() {
                return r;
              }.apply(t, [])) || (e.exports = c);
      })();
    },
    9693: (e, t, c) => {
      'use strict';
      t.__esModule = !0;
      var n = c(2959),
        r = (a(n), a(c(3980))),
        o = a(c(8051));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function l(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function s(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      function i(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      a(c(2973));
      var h = 1073741823;
      function p(e) {
        var t = [];
        return {
          on: function(e) {
            t.push(e);
          },
          off: function(e) {
            t = t.filter(function(t) {
              return t !== e;
            });
          },
          get: function() {
            return e;
          },
          set: function(c, n) {
            (e = c),
              t.forEach(function(t) {
                return t(e, n);
              });
          }
        };
      }
      (t.default = function(e, t) {
        var c,
          a,
          u = '__create-react-context-' + (0, o.default)() + '__',
          v = (function(e) {
            function c() {
              var t, n;
              l(this, c);
              for (var r = arguments.length, o = Array(r), a = 0; a < r; a++)
                o[a] = arguments[a];
              return (
                (t = n = s(this, e.call.apply(e, [this].concat(o)))),
                (n.emitter = p(n.props.value)),
                s(n, t)
              );
            }
            return (
              i(c, e),
              (c.prototype.getChildContext = function() {
                var e;
                return ((e = {})[u] = this.emitter), e;
              }),
              (c.prototype.componentWillReceiveProps = function(e) {
                if (this.props.value !== e.value) {
                  var c = this.props.value,
                    n = e.value,
                    r = void 0;
                  ((o = c) === (a = n)
                  ? 0 !== o || 1 / o == 1 / a
                  : o != o && a != a)
                    ? (r = 0)
                    : ((r = 'function' == typeof t ? t(c, n) : h),
                      0 != (r |= 0) && this.emitter.set(e.value, r));
                }
                var o, a;
              }),
              (c.prototype.render = function() {
                return this.props.children;
              }),
              c
            );
          })(n.Component);
        v.childContextTypes = (((c = {})[u] = r.default.object.isRequired), c);
        var m = (function(t) {
          function c() {
            var e, n;
            l(this, c);
            for (var r = arguments.length, o = Array(r), a = 0; a < r; a++)
              o[a] = arguments[a];
            return (
              (e = n = s(this, t.call.apply(t, [this].concat(o)))),
              (n.state = { value: n.getValue() }),
              (n.onUpdate = function(e, t) {
                0 != ((0 | n.observedBits) & t) &&
                  n.setState({ value: n.getValue() });
              }),
              s(n, e)
            );
          }
          return (
            i(c, t),
            (c.prototype.componentWillReceiveProps = function(e) {
              var t = e.observedBits;
              this.observedBits = null == t ? h : t;
            }),
            (c.prototype.componentDidMount = function() {
              this.context[u] && this.context[u].on(this.onUpdate);
              var e = this.props.observedBits;
              this.observedBits = null == e ? h : e;
            }),
            (c.prototype.componentWillUnmount = function() {
              this.context[u] && this.context[u].off(this.onUpdate);
            }),
            (c.prototype.getValue = function() {
              return this.context[u] ? this.context[u].get() : e;
            }),
            (c.prototype.render = function() {
              return ((e = this.props.children), Array.isArray(e) ? e[0] : e)(
                this.state.value
              );
              var e;
            }),
            c
          );
        })(n.Component);
        return (
          (m.contextTypes = (((a = {})[u] = r.default.object), a)),
          { Provider: v, Consumer: m }
        );
      }),
        (e.exports = t.default);
    },
    5315: (e, t, c) => {
      'use strict';
      t.__esModule = !0;
      var n = o(c(2959)),
        r = o(c(9693));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (t.default = n.default.createContext || r.default),
        (e.exports = t.default);
    },
    2973: e => {
      'use strict';
      e.exports = function() {};
    },
    3185: (e, t, c) => {
      var n = c(3464),
        r = c(2635),
        o = c(4679),
        a = c(8786),
        l = c(2201),
        s = c(4277),
        i = Date.prototype.getTime;
      function h(e) {
        return null == e;
      }
      function p(e) {
        return !(
          !e ||
          'object' != typeof e ||
          'number' != typeof e.length ||
          'function' != typeof e.copy ||
          'function' != typeof e.slice ||
          (e.length > 0 && 'number' != typeof e[0])
        );
      }
      e.exports = function e(t, c, u) {
        var v = u || {};
        return (
          !!(v.strict ? o(t, c) : t === c) ||
          (!t || !c || ('object' != typeof t && 'object' != typeof c)
            ? v.strict
              ? o(t, c)
              : t == c
            : (function(t, c, o) {
                var u, v;
                if (typeof t != typeof c) return !1;
                if (h(t) || h(c)) return !1;
                if (t.prototype !== c.prototype) return !1;
                if (r(t) !== r(c)) return !1;
                var m = a(t),
                  d = a(c);
                if (m !== d) return !1;
                if (m || d) return t.source === c.source && l(t) === l(c);
                if (s(t) && s(c)) return i.call(t) === i.call(c);
                var f = p(t),
                  z = p(c);
                if (f !== z) return !1;
                if (f || z) {
                  if (t.length !== c.length) return !1;
                  for (u = 0; u < t.length; u++) if (t[u] !== c[u]) return !1;
                  return !0;
                }
                if (typeof t != typeof c) return !1;
                try {
                  var y = n(t),
                    M = n(c);
                } catch (e) {
                  return !1;
                }
                if (y.length !== M.length) return !1;
                for (y.sort(), M.sort(), u = y.length - 1; u >= 0; u--)
                  if (y[u] != M[u]) return !1;
                for (u = y.length - 1; u >= 0; u--)
                  if (!e(t[(v = y[u])], c[v], o)) return !1;
                return !0;
              })(t, c, v))
        );
      };
    },
    4926: (e, t, c) => {
      'use strict';
      var n = c(3464),
        r = 'function' == typeof Symbol && 'symbol' == typeof Symbol('foo'),
        o = Object.prototype.toString,
        a = Array.prototype.concat,
        l = Object.defineProperty,
        s =
          l &&
          (function() {
            var e = {};
            try {
              for (var t in (l(e, 'x', { enumerable: !1, value: e }), e))
                return !1;
              return e.x === e;
            } catch (e) {
              return !1;
            }
          })(),
        i = function(e, t, c, n) {
          var r;
          (!(t in e) ||
            ('function' == typeof (r = n) &&
              '[object Function]' === o.call(r) &&
              n())) &&
            (s
              ? l(e, t, {
                  configurable: !0,
                  enumerable: !1,
                  value: c,
                  writable: !0
                })
              : (e[t] = c));
        },
        h = function(e, t) {
          var c = arguments.length > 2 ? arguments[2] : {},
            o = n(t);
          r && (o = a.call(o, Object.getOwnPropertySymbols(t)));
          for (var l = 0; l < o.length; l += 1) i(e, o[l], t[o[l]], c[o[l]]);
        };
      (h.supportsDescriptors = !!s), (e.exports = h);
    },
    1722: () => {
      !(function(e) {
        'use strict';
        function t() {
          return p.createDocumentFragment();
        }
        function c(e) {
          return p.createElement(e);
        }
        function n(e, t) {
          if (!e)
            throw new Error(
              'Failed to construct ' +
                t +
                ': 1 argument required, but only 0 present.'
            );
        }
        function r(e) {
          if (1 === e.length) return o(e[0]);
          for (var c = t(), n = P.call(e), r = 0; r < e.length; r++)
            c.appendChild(o(n[r]));
          return c;
        }
        function o(e) {
          return 'object' == typeof e ? e : p.createTextNode(e);
        }
        for (
          var a,
            l,
            s,
            i,
            h,
            p = e.document,
            u = Object.prototype.hasOwnProperty,
            v =
              Object.defineProperty ||
              function(e, t, c) {
                return (
                  u.call(c, 'value')
                    ? (e[t] = c.value)
                    : (u.call(c, 'get') && e.__defineGetter__(t, c.get),
                      u.call(c, 'set') && e.__defineSetter__(t, c.set)),
                  e
                );
              },
            m =
              [].indexOf ||
              function(e) {
                for (var t = this.length; t-- && this[t] !== e; );
                return t;
              },
            d = function(e) {
              var t = void 0 === e.className,
                c = t ? e.getAttribute('class') || '' : e.className,
                n = t || 'object' == typeof c,
                r = (n ? (t ? c : c.baseVal) : c).replace(z, '');
              r.length && T.push.apply(this, r.split(y)),
                (this._isSVG = n),
                (this._ = e);
            },
            f = {
              get: function() {
                return new d(this);
              },
              set: function() {}
            },
            z = /^\s+|\s+$/g,
            y = /\s+/,
            M = 'classList',
            H = function(e, t) {
              return (
                this.contains(e)
                  ? t || this.remove(e)
                  : (void 0 === t || t) && ((t = !0), this.add(e)),
                !!t
              );
            },
            V = e.DocumentFragment && DocumentFragment.prototype,
            E = e.Node,
            L = (E || Element).prototype,
            g = e.CharacterData || E,
            C = g && g.prototype,
            b = e.DocumentType,
            A = b && b.prototype,
            S = (e.Element || E || e.HTMLElement).prototype,
            O = e.HTMLSelectElement || c('select').constructor,
            N = O.prototype.remove,
            w = e.SVGElement,
            T = [
              'matches',
              S.matchesSelector ||
                S.webkitMatchesSelector ||
                S.khtmlMatchesSelector ||
                S.mozMatchesSelector ||
                S.msMatchesSelector ||
                S.oMatchesSelector ||
                function(e) {
                  var t = this.parentNode;
                  return !!t && -1 < m.call(t.querySelectorAll(e), this);
                },
              'closest',
              function(e) {
                for (var t, c = this; (t = c && c.matches) && !c.matches(e); )
                  c = c.parentNode;
                return t ? c : null;
              },
              'prepend',
              function() {
                var e = this.firstChild,
                  t = r(arguments);
                e ? this.insertBefore(t, e) : this.appendChild(t);
              },
              'append',
              function() {
                this.appendChild(r(arguments));
              },
              'before',
              function() {
                var e = this.parentNode;
                e && e.insertBefore(r(arguments), this);
              },
              'after',
              function() {
                var e = this.parentNode,
                  t = this.nextSibling,
                  c = r(arguments);
                e && (t ? e.insertBefore(c, t) : e.appendChild(c));
              },
              'toggleAttribute',
              function(e, t) {
                var c = this.hasAttribute(e);
                return (
                  1 < arguments.length
                    ? c && !t
                      ? this.removeAttribute(e)
                      : t && !c && this.setAttribute(e, '')
                    : c
                    ? this.removeAttribute(e)
                    : this.setAttribute(e, ''),
                  this.hasAttribute(e)
                );
              },
              'replace',
              function() {
                this.replaceWith.apply(this, arguments);
              },
              'replaceWith',
              function() {
                var e = this.parentNode;
                e && e.replaceChild(r(arguments), this);
              },
              'remove',
              function() {
                var e = this.parentNode;
                e && e.removeChild(this);
              }
            ],
            P = T.slice,
            I = T.length;
          I;
          I -= 2
        )
          if (
            ((l = T[I - 2]) in S || (S[l] = T[I - 1]),
            'remove' !== l ||
              N._dom4 ||
              ((O.prototype[l] = function() {
                return 0 < arguments.length
                  ? N.apply(this, arguments)
                  : S.remove.call(this);
              })._dom4 = !0),
            /^(?:before|after|replace|replaceWith|remove)$/.test(l) &&
              (g && !(l in C) && (C[l] = T[I - 1]),
              b && !(l in A) && (A[l] = T[I - 1])),
            /^(?:append|prepend)$/.test(l))
          )
            if (V) l in V || (V[l] = T[I - 1]);
            else
              try {
                t().constructor.prototype[l] = T[I - 1];
              } catch (e) {}
        var R;
        c('a').matches('a') ||
          (S[l] =
            ((R = S[l]),
            function(e) {
              return R.call(this.parentNode ? this : t().appendChild(this), e);
            })),
          (d.prototype = {
            length: 0,
            add: function() {
              for (var e, t = 0; t < arguments.length; t++)
                (e = arguments[t]), this.contains(e) || T.push.call(this, l);
              this._isSVG
                ? this._.setAttribute('class', '' + this)
                : (this._.className = '' + this);
            },
            contains: (function(e) {
              return function(t) {
                return (
                  -1 <
                  (I = e.call(
                    this,
                    (l = (function(e) {
                      if (!e) throw 'SyntaxError';
                      if (y.test(e)) throw 'InvalidCharacterError';
                      return e;
                    })(t))
                  ))
                );
              };
            })(
              [].indexOf ||
                function(e) {
                  for (I = this.length; I-- && this[I] !== e; );
                  return I;
                }
            ),
            item: function(e) {
              return this[e] || null;
            },
            remove: function() {
              for (var e, t = 0; t < arguments.length; t++)
                (e = arguments[t]),
                  this.contains(e) && T.splice.call(this, I, 1);
              this._isSVG
                ? this._.setAttribute('class', '' + this)
                : (this._.className = '' + this);
            },
            toggle: H,
            toString: function() {
              return T.join.call(this, ' ');
            }
          }),
          w && !(M in w.prototype) && v(w.prototype, M, f),
          M in p.documentElement
            ? ((i = c('div').classList).add('a', 'b', 'a'),
              'a b' != i &&
                ('add' in (s = i.constructor.prototype) ||
                  (s = e.TemporaryTokenList.prototype),
                (h = function(e) {
                  return function() {
                    for (var t = 0; t < arguments.length; )
                      e.call(this, arguments[t++]);
                  };
                }),
                (s.add = h(s.add)),
                (s.remove = h(s.remove)),
                (s.toggle = H)))
            : v(S, M, f),
          'contains' in L ||
            v(L, 'contains', {
              value: function(e) {
                for (; e && e !== this; ) e = e.parentNode;
                return this === e;
              }
            }),
          'head' in p ||
            v(p, 'head', {
              get: function() {
                return a || (a = p.getElementsByTagName('head')[0]);
              }
            }),
          (function() {
            for (
              var t,
                c = e.requestAnimationFrame,
                n = e.cancelAnimationFrame,
                r = ['o', 'ms', 'moz', 'webkit'],
                o = r.length;
              !n && o--;

            )
              (c = c || e[r[o] + 'RequestAnimationFrame']),
                (n =
                  e[r[o] + 'CancelAnimationFrame'] ||
                  e[r[o] + 'CancelRequestAnimationFrame']);
            n ||
              (c
                ? ((t = c),
                  (c = function(e) {
                    var c = !0;
                    return (
                      t(function() {
                        c && e.apply(this, arguments);
                      }),
                      function() {
                        c = !1;
                      }
                    );
                  }),
                  (n = function(e) {
                    e();
                  }))
                : ((c = function(e) {
                    return setTimeout(e, 15, 15);
                  }),
                  (n = function(e) {
                    clearTimeout(e);
                  }))),
              (e.requestAnimationFrame = c),
              (e.cancelAnimationFrame = n);
          })();
        try {
          new e.CustomEvent('?');
        } catch (t) {
          e.CustomEvent = (function(e, t) {
            function c(e, t, c, n) {
              this.initEvent(e, t, c), (this.detail = n);
            }
            return function(n, r) {
              var o = p.createEvent(e);
              if ('string' != typeof n)
                throw new Error('An event name must be provided');
              return (
                'Event' == e && (o.initCustomEvent = c),
                null == r && (r = t),
                o.initCustomEvent(n, r.bubbles, r.cancelable, r.detail),
                o
              );
            };
          })(e.CustomEvent ? 'CustomEvent' : 'Event', {
            bubbles: !1,
            cancelable: !1,
            detail: null
          });
        }
        try {
          new Event('_');
        } catch (t) {
          (t = (function(e) {
            function t(e, t) {
              n(arguments.length, 'Event');
              var c = p.createEvent('Event');
              return (
                t || (t = {}), c.initEvent(e, !!t.bubbles, !!t.cancelable), c
              );
            }
            return (t.prototype = e.prototype), t;
          })(e.Event || function() {})),
            v(e, 'Event', { value: t }),
            Event !== t && (Event = t);
        }
        try {
          new KeyboardEvent('_', {});
        } catch (t) {
          (t = (function(t) {
            var c,
              r = 0,
              o = {
                char: '',
                key: '',
                location: 0,
                ctrlKey: !1,
                shiftKey: !1,
                altKey: !1,
                metaKey: !1,
                altGraphKey: !1,
                repeat: !1,
                locale: navigator.language,
                detail: 0,
                bubbles: !1,
                cancelable: !1,
                keyCode: 0,
                charCode: 0,
                which: 0
              };
            try {
              var a = p.createEvent('KeyboardEvent');
              a.initKeyboardEvent(
                'keyup',
                !1,
                !1,
                e,
                '+',
                3,
                !0,
                !1,
                !0,
                !1,
                !1
              ),
                (r =
                  ('+' == (a.keyIdentifier || a.key) &&
                    3 == (a.keyLocation || a.location) &&
                    (a.ctrlKey ? (a.altKey ? 1 : 3) : a.shiftKey ? 2 : 4)) ||
                  9);
            } catch (e) {}
            function l(e) {
              for (
                var t = [],
                  c = [
                    'ctrlKey',
                    'Control',
                    'shiftKey',
                    'Shift',
                    'altKey',
                    'Alt',
                    'metaKey',
                    'Meta',
                    'altGraphKey',
                    'AltGraph'
                  ],
                  n = 0;
                n < c.length;
                n += 2
              )
                e[c[n]] && t.push(c[n + 1]);
              return t.join(' ');
            }
            function s(e, t) {
              for (var c in t)
                t.hasOwnProperty(c) &&
                  !t.hasOwnProperty.call(e, c) &&
                  (e[c] = t[c]);
              return e;
            }
            function i(e, t, c) {
              try {
                t[e] = c[e];
              } catch (e) {}
            }
            function h(t, a) {
              n(arguments.length, 'KeyboardEvent'), (a = s(a || {}, o));
              var h,
                u = p.createEvent(c),
                v = a.ctrlKey,
                m = a.shiftKey,
                d = a.altKey,
                f = a.metaKey,
                z = a.altGraphKey,
                y = r > 3 ? l(a) : null,
                M = String(a.key),
                H = String(a.char),
                V = a.location,
                E = a.keyCode || ((a.keyCode = M) && M.charCodeAt(0)) || 0,
                L = a.charCode || ((a.charCode = H) && H.charCodeAt(0)) || 0,
                g = a.bubbles,
                C = a.cancelable,
                b = a.repeat,
                A = a.locale,
                S = a.view || e;
              if ((a.which || (a.which = a.keyCode), 'initKeyEvent' in u))
                u.initKeyEvent(t, g, C, S, v, d, m, f, E, L);
              else if (0 < r && 'initKeyboardEvent' in u) {
                switch (((h = [t, g, C, S]), r)) {
                  case 1:
                    h.push(M, V, v, m, d, f, z);
                    break;
                  case 2:
                    h.push(v, d, m, f, E, L);
                    break;
                  case 3:
                    h.push(M, V, v, d, m, f, z);
                    break;
                  case 4:
                    h.push(M, V, y, b, A);
                    break;
                  default:
                    h.push(char, M, V, y, b, A);
                }
                u.initKeyboardEvent.apply(u, h);
              } else u.initEvent(t, g, C);
              for (M in u) o.hasOwnProperty(M) && u[M] !== a[M] && i(M, u, a);
              return u;
            }
            return (
              (c = 0 < r ? 'KeyboardEvent' : 'Event'),
              (h.prototype = t.prototype),
              h
            );
          })(e.KeyboardEvent || function() {})),
            v(e, 'KeyboardEvent', { value: t }),
            KeyboardEvent !== t && (KeyboardEvent = t);
        }
        try {
          new MouseEvent('_', {});
        } catch (t) {
          (t = (function(t) {
            function c(t, c) {
              n(arguments.length, 'MouseEvent');
              var r = p.createEvent('MouseEvent');
              return (
                c || (c = {}),
                r.initMouseEvent(
                  t,
                  !!c.bubbles,
                  !!c.cancelable,
                  c.view || e,
                  c.detail || 1,
                  c.screenX || 0,
                  c.screenY || 0,
                  c.clientX || 0,
                  c.clientY || 0,
                  !!c.ctrlKey,
                  !!c.altKey,
                  !!c.shiftKey,
                  !!c.metaKey,
                  c.button || 0,
                  c.relatedTarget || null
                ),
                r
              );
            }
            return (c.prototype = t.prototype), c;
          })(e.MouseEvent || function() {})),
            v(e, 'MouseEvent', { value: t }),
            MouseEvent !== t && (MouseEvent = t);
        }
        p.querySelectorAll('*').forEach ||
          (function() {
            function e(e) {
              var t = e.querySelectorAll;
              e.querySelectorAll = function(e) {
                var c = t.call(this, e);
                return (c.forEach = Array.prototype.forEach), c;
              };
            }
            e(p), e(Element.prototype);
          })();
        try {
          p.querySelector(':scope *');
        } catch (e) {
          !(function() {
            var e = 'data-scope-' + ((1e9 * Math.random()) >>> 0),
              t = Element.prototype,
              c = t.querySelector,
              n = t.querySelectorAll;
            function r(t, c, n) {
              t.setAttribute(e, null);
              var r = c.call(
                t,
                String(n).replace(/(^|,\s*)(:scope([ >]|$))/g, function(
                  t,
                  c,
                  n,
                  r
                ) {
                  return c + '[' + e + ']' + (r || ' ');
                })
              );
              return t.removeAttribute(e), r;
            }
            (t.querySelector = function(e) {
              return r(this, c, e);
            }),
              (t.querySelectorAll = function(e) {
                return r(this, n, e);
              });
          })();
        }
      })(window),
        (function(e) {
          'use strict';
          var t =
            e.WeakMap ||
            (function() {
              var e,
                t = 0,
                c = !1,
                n = !1;
              function r(t, r, o) {
                (n = o), (c = !1), (e = void 0), t.dispatchEvent(r);
              }
              function o(e) {
                this.value = e;
              }
              function l() {
                t++, (this.__ce__ = new a('@DOMMap:' + t + Math.random()));
              }
              return (
                (o.prototype.handleEvent = function(t) {
                  (c = !0),
                    n
                      ? t.currentTarget.removeEventListener(t.type, this, !1)
                      : (e = this.value);
                }),
                (l.prototype = {
                  constructor: l,
                  delete: function(e) {
                    return r(e, this.__ce__, !0), c;
                  },
                  get: function(t) {
                    r(t, this.__ce__, !1);
                    var c = e;
                    return (e = void 0), c;
                  },
                  has: function(e) {
                    return r(e, this.__ce__, !1), c;
                  },
                  set: function(e, t) {
                    return (
                      r(e, this.__ce__, !0),
                      e.addEventListener(this.__ce__.type, new o(t), !1),
                      this
                    );
                  }
                }),
                l
              );
            })();
          function c() {}
          function n(e, t, c) {
            function r(e) {
              r.once &&
                (e.currentTarget.removeEventListener(e.type, t, r),
                (r.removed = !0)),
                r.passive && (e.preventDefault = n.preventDefault),
                'function' == typeof r.callback
                  ? r.callback.call(this, e)
                  : r.callback && r.callback.handleEvent(e),
                r.passive && delete e.preventDefault;
            }
            return (
              (r.type = e),
              (r.callback = t),
              (r.capture = !!c.capture),
              (r.passive = !!c.passive),
              (r.once = !!c.once),
              (r.removed = !1),
              r
            );
          }
          (c.prototype = (Object.create || Object)(null)),
            (n.preventDefault = function() {});
          var r,
            o,
            a = e.CustomEvent,
            l = e.dispatchEvent,
            s = e.addEventListener,
            i = e.removeEventListener,
            h = 0,
            p = function() {
              h++;
            },
            u =
              [].indexOf ||
              function(e) {
                for (var t = this.length; t-- && this[t] !== e; );
                return t;
              },
            v = function(e) {
              return ''.concat(
                e.capture ? '1' : '0',
                e.passive ? '1' : '0',
                e.once ? '1' : '0'
              );
            };
          try {
            s('_', p, { once: !0 }),
              l(new a('_')),
              l(new a('_')),
              i('_', p, { once: !0 });
          } catch (e) {}
          1 !== h &&
            ((o = new t()),
            (r = function(e) {
              if (e) {
                var t = e.prototype;
                (t.addEventListener = (function(e) {
                  return function(t, r, a) {
                    if (a && 'boolean' != typeof a) {
                      var l,
                        s,
                        i,
                        h = o.get(this),
                        p = v(a);
                      h || o.set(this, (h = new c())),
                        t in h || (h[t] = { handler: [], wrap: [] }),
                        (s = h[t]),
                        (l = u.call(s.handler, r)) < 0
                          ? ((l = s.handler.push(r) - 1),
                            (s.wrap[l] = i = new c()))
                          : (i = s.wrap[l]),
                        p in i ||
                          ((i[p] = n(t, r, a)),
                          e.call(this, t, i[p], i[p].capture));
                    } else e.call(this, t, r, a);
                  };
                })(t.addEventListener)),
                  (t.removeEventListener = (function(e) {
                    return function(t, c, n) {
                      if (n && 'boolean' != typeof n) {
                        var r,
                          a,
                          l,
                          s,
                          i = o.get(this);
                        if (
                          i &&
                          t in i &&
                          ((l = i[t]),
                          -1 < (a = u.call(l.handler, c)) &&
                            (r = v(n)) in (s = l.wrap[a]))
                        ) {
                          for (r in (e.call(this, t, s[r], s[r].capture),
                          delete s[r],
                          s))
                            return;
                          l.handler.splice(a, 1),
                            l.wrap.splice(a, 1),
                            0 === l.handler.length && delete i[t];
                        }
                      } else e.call(this, t, c, n);
                    };
                  })(t.removeEventListener));
              }
            }),
            e.EventTarget
              ? r(EventTarget)
              : (r(e.Text),
                r(e.Element || e.HTMLElement),
                r(e.HTMLDocument),
                r(e.Window || { prototype: e }),
                r(e.XMLHttpRequest)));
        })(self);
    },
    5945: (e, t, c) => {
      'use strict';
      var n,
        r = TypeError,
        o = Object.getOwnPropertyDescriptor;
      if (o)
        try {
          o({}, '');
        } catch (e) {
          o = null;
        }
      var a = function() {
          throw new r();
        },
        l = o
          ? (function() {
              try {
                return a;
              } catch (e) {
                try {
                  return o(arguments, 'callee').get;
                } catch (e) {
                  return a;
                }
              }
            })()
          : a,
        s = c(2636)(),
        i =
          Object.getPrototypeOf ||
          function(e) {
            return e.__proto__;
          },
        h = n,
        p = 'undefined' == typeof Uint8Array ? n : i(Uint8Array),
        u = {
          '%Array%': Array,
          '%ArrayBuffer%': 'undefined' == typeof ArrayBuffer ? n : ArrayBuffer,
          '%ArrayBufferPrototype%':
            'undefined' == typeof ArrayBuffer ? n : ArrayBuffer.prototype,
          '%ArrayIteratorPrototype%': s ? i([][Symbol.iterator]()) : n,
          '%ArrayPrototype%': Array.prototype,
          '%ArrayProto_entries%': Array.prototype.entries,
          '%ArrayProto_forEach%': Array.prototype.forEach,
          '%ArrayProto_keys%': Array.prototype.keys,
          '%ArrayProto_values%': Array.prototype.values,
          '%AsyncFromSyncIteratorPrototype%': n,
          '%AsyncFunction%': undefined,
          '%AsyncFunctionPrototype%': n,
          '%AsyncGenerator%': n,
          '%AsyncGeneratorFunction%': undefined,
          '%AsyncGeneratorPrototype%': n,
          '%AsyncIteratorPrototype%':
            h && s && Symbol.asyncIterator ? h[Symbol.asyncIterator]() : n,
          '%Atomics%': 'undefined' == typeof Atomics ? n : Atomics,
          '%Boolean%': Boolean,
          '%BooleanPrototype%': Boolean.prototype,
          '%DataView%': 'undefined' == typeof DataView ? n : DataView,
          '%DataViewPrototype%':
            'undefined' == typeof DataView ? n : DataView.prototype,
          '%Date%': Date,
          '%DatePrototype%': Date.prototype,
          '%decodeURI%': decodeURI,
          '%decodeURIComponent%': decodeURIComponent,
          '%encodeURI%': encodeURI,
          '%encodeURIComponent%': encodeURIComponent,
          '%Error%': Error,
          '%ErrorPrototype%': Error.prototype,
          '%eval%': eval,
          '%EvalError%': EvalError,
          '%EvalErrorPrototype%': EvalError.prototype,
          '%Float32Array%':
            'undefined' == typeof Float32Array ? n : Float32Array,
          '%Float32ArrayPrototype%':
            'undefined' == typeof Float32Array ? n : Float32Array.prototype,
          '%Float64Array%':
            'undefined' == typeof Float64Array ? n : Float64Array,
          '%Float64ArrayPrototype%':
            'undefined' == typeof Float64Array ? n : Float64Array.prototype,
          '%Function%': Function,
          '%FunctionPrototype%': Function.prototype,
          '%Generator%': n,
          '%GeneratorFunction%': undefined,
          '%GeneratorPrototype%': n,
          '%Int8Array%': 'undefined' == typeof Int8Array ? n : Int8Array,
          '%Int8ArrayPrototype%':
            'undefined' == typeof Int8Array ? n : Int8Array.prototype,
          '%Int16Array%': 'undefined' == typeof Int16Array ? n : Int16Array,
          '%Int16ArrayPrototype%':
            'undefined' == typeof Int16Array ? n : Int8Array.prototype,
          '%Int32Array%': 'undefined' == typeof Int32Array ? n : Int32Array,
          '%Int32ArrayPrototype%':
            'undefined' == typeof Int32Array ? n : Int32Array.prototype,
          '%isFinite%': isFinite,
          '%isNaN%': isNaN,
          '%IteratorPrototype%': s ? i(i([][Symbol.iterator]())) : n,
          '%JSON%': 'object' == typeof JSON ? JSON : n,
          '%JSONParse%': 'object' == typeof JSON ? JSON.parse : n,
          '%Map%': 'undefined' == typeof Map ? n : Map,
          '%MapIteratorPrototype%':
            'undefined' != typeof Map && s
              ? i(new Map()[Symbol.iterator]())
              : n,
          '%MapPrototype%': 'undefined' == typeof Map ? n : Map.prototype,
          '%Math%': Math,
          '%Number%': Number,
          '%NumberPrototype%': Number.prototype,
          '%Object%': Object,
          '%ObjectPrototype%': Object.prototype,
          '%ObjProto_toString%': Object.prototype.toString,
          '%ObjProto_valueOf%': Object.prototype.valueOf,
          '%parseFloat%': parseFloat,
          '%parseInt%': parseInt,
          '%Promise%': 'undefined' == typeof Promise ? n : Promise,
          '%PromisePrototype%':
            'undefined' == typeof Promise ? n : Promise.prototype,
          '%PromiseProto_then%':
            'undefined' == typeof Promise ? n : Promise.prototype.then,
          '%Promise_all%': 'undefined' == typeof Promise ? n : Promise.all,
          '%Promise_reject%':
            'undefined' == typeof Promise ? n : Promise.reject,
          '%Promise_resolve%':
            'undefined' == typeof Promise ? n : Promise.resolve,
          '%Proxy%': 'undefined' == typeof Proxy ? n : Proxy,
          '%RangeError%': RangeError,
          '%RangeErrorPrototype%': RangeError.prototype,
          '%ReferenceError%': ReferenceError,
          '%ReferenceErrorPrototype%': ReferenceError.prototype,
          '%Reflect%': 'undefined' == typeof Reflect ? n : Reflect,
          '%RegExp%': RegExp,
          '%RegExpPrototype%': RegExp.prototype,
          '%Set%': 'undefined' == typeof Set ? n : Set,
          '%SetIteratorPrototype%':
            'undefined' != typeof Set && s
              ? i(new Set()[Symbol.iterator]())
              : n,
          '%SetPrototype%': 'undefined' == typeof Set ? n : Set.prototype,
          '%SharedArrayBuffer%':
            'undefined' == typeof SharedArrayBuffer ? n : SharedArrayBuffer,
          '%SharedArrayBufferPrototype%':
            'undefined' == typeof SharedArrayBuffer
              ? n
              : SharedArrayBuffer.prototype,
          '%String%': String,
          '%StringIteratorPrototype%': s ? i(''[Symbol.iterator]()) : n,
          '%StringPrototype%': String.prototype,
          '%Symbol%': s ? Symbol : n,
          '%SymbolPrototype%': s ? Symbol.prototype : n,
          '%SyntaxError%': SyntaxError,
          '%SyntaxErrorPrototype%': SyntaxError.prototype,
          '%ThrowTypeError%': l,
          '%TypedArray%': p,
          '%TypedArrayPrototype%': p ? p.prototype : n,
          '%TypeError%': r,
          '%TypeErrorPrototype%': r.prototype,
          '%Uint8Array%': 'undefined' == typeof Uint8Array ? n : Uint8Array,
          '%Uint8ArrayPrototype%':
            'undefined' == typeof Uint8Array ? n : Uint8Array.prototype,
          '%Uint8ClampedArray%':
            'undefined' == typeof Uint8ClampedArray ? n : Uint8ClampedArray,
          '%Uint8ClampedArrayPrototype%':
            'undefined' == typeof Uint8ClampedArray
              ? n
              : Uint8ClampedArray.prototype,
          '%Uint16Array%': 'undefined' == typeof Uint16Array ? n : Uint16Array,
          '%Uint16ArrayPrototype%':
            'undefined' == typeof Uint16Array ? n : Uint16Array.prototype,
          '%Uint32Array%': 'undefined' == typeof Uint32Array ? n : Uint32Array,
          '%Uint32ArrayPrototype%':
            'undefined' == typeof Uint32Array ? n : Uint32Array.prototype,
          '%URIError%': URIError,
          '%URIErrorPrototype%': URIError.prototype,
          '%WeakMap%': 'undefined' == typeof WeakMap ? n : WeakMap,
          '%WeakMapPrototype%':
            'undefined' == typeof WeakMap ? n : WeakMap.prototype,
          '%WeakSet%': 'undefined' == typeof WeakSet ? n : WeakSet,
          '%WeakSetPrototype%':
            'undefined' == typeof WeakSet ? n : WeakSet.prototype
        },
        v = c(4090).call(Function.call, String.prototype.replace),
        m = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        d = /\\(\\)?/g,
        f = function(e) {
          var t = [];
          return (
            v(e, m, function(e, c, n, r) {
              t[t.length] = n ? v(r, d, '$1') : c || e;
            }),
            t
          );
        },
        z = function(e, t) {
          if (!(e in u))
            throw new SyntaxError('intrinsic ' + e + ' does not exist!');
          if (void 0 === u[e] && !t)
            throw new r(
              'intrinsic ' +
                e +
                ' exists, but is not available. Please file an issue!'
            );
          return u[e];
        };
      e.exports = function(e, t) {
        if ('string' != typeof e || 0 === e.length)
          throw new TypeError('intrinsic name must be a non-empty string');
        if (arguments.length > 1 && 'boolean' != typeof t)
          throw new TypeError('"allowMissing" argument must be a boolean');
        for (
          var c = f(e), n = z('%' + (c.length > 0 ? c[0] : '') + '%', t), a = 1;
          a < c.length;
          a += 1
        )
          if (null != n)
            if (o && a + 1 >= c.length) {
              var l = o(n, c[a]);
              if (!t && !(c[a] in n))
                throw new r(
                  'base intrinsic for ' +
                    e +
                    ' exists, but the property is not available.'
                );
              n =
                l && 'get' in l && !('originalValue' in l.get)
                  ? l.get
                  : n[c[a]];
            } else n = n[c[a]];
        return n;
      };
    },
    4030: (e, t, c) => {
      'use strict';
      var n = c(4090),
        r = c(5945),
        o = r('%Function.prototype.apply%'),
        a = r('%Function.prototype.call%'),
        l = r('%Reflect.apply%', !0) || n.call(a, o),
        s = r('%Object.defineProperty%', !0);
      if (s)
        try {
          s({}, 'a', { value: 1 });
        } catch (e) {
          s = null;
        }
      e.exports = function() {
        return l(n, a, arguments);
      };
      var i = function() {
        return l(n, o, arguments);
      };
      s ? s(e.exports, 'apply', { value: i }) : (e.exports.apply = i);
    },
    7795: e => {
      'use strict';
      var t = 'Function.prototype.bind called on incompatible ',
        c = Array.prototype.slice,
        n = Object.prototype.toString,
        r = '[object Function]';
      e.exports = function(e) {
        var o = this;
        if ('function' != typeof o || n.call(o) !== r)
          throw new TypeError(t + o);
        for (
          var a,
            l = c.call(arguments, 1),
            s = function() {
              if (this instanceof a) {
                var t = o.apply(this, l.concat(c.call(arguments)));
                return Object(t) === t ? t : this;
              }
              return o.apply(e, l.concat(c.call(arguments)));
            },
            i = Math.max(0, o.length - l.length),
            h = [],
            p = 0;
          p < i;
          p++
        )
          h.push('$' + p);
        if (
          ((a = Function(
            'binder',
            'return function (' +
              h.join(',') +
              '){ return binder.apply(this,arguments); }'
          )(s)),
          o.prototype)
        ) {
          var u = function() {};
          (u.prototype = o.prototype),
            (a.prototype = new u()),
            (u.prototype = null);
        }
        return a;
      };
    },
    4090: (e, t, c) => {
      'use strict';
      var n = c(7795);
      e.exports = Function.prototype.bind || n;
    },
    8051: (e, t, c) => {
      'use strict';
      var n = '__global_unique_id__';
      e.exports = function() {
        return (c.g[n] = (c.g[n] || 0) + 1);
      };
    },
    2636: (e, t, c) => {
      'use strict';
      var n = c.g.Symbol,
        r = c(6679);
      e.exports = function() {
        return (
          'function' == typeof n &&
          'function' == typeof Symbol &&
          'symbol' == typeof n('foo') &&
          'symbol' == typeof Symbol('bar') &&
          r()
        );
      };
    },
    6679: e => {
      'use strict';
      e.exports = function() {
        if (
          'function' != typeof Symbol ||
          'function' != typeof Object.getOwnPropertySymbols
        )
          return !1;
        if ('symbol' == typeof Symbol.iterator) return !0;
        var e = {},
          t = Symbol('test'),
          c = Object(t);
        if ('string' == typeof t) return !1;
        if ('[object Symbol]' !== Object.prototype.toString.call(t)) return !1;
        if ('[object Symbol]' !== Object.prototype.toString.call(c)) return !1;
        for (t in ((e[t] = 42), e)) return !1;
        if ('function' == typeof Object.keys && 0 !== Object.keys(e).length)
          return !1;
        if (
          'function' == typeof Object.getOwnPropertyNames &&
          0 !== Object.getOwnPropertyNames(e).length
        )
          return !1;
        var n = Object.getOwnPropertySymbols(e);
        if (1 !== n.length || n[0] !== t) return !1;
        if (!Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
        if ('function' == typeof Object.getOwnPropertyDescriptor) {
          var r = Object.getOwnPropertyDescriptor(e, t);
          if (42 !== r.value || !0 !== r.enumerable) return !1;
        }
        return !0;
      };
    },
    3198: (e, t, c) => {
      'use strict';
      var n = c(4090);
      e.exports = n.call(Function.call, Object.prototype.hasOwnProperty);
    },
    2635: e => {
      'use strict';
      var t =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.toStringTag,
        c = Object.prototype.toString,
        n = function(e) {
          return (
            !(t && e && 'object' == typeof e && Symbol.toStringTag in e) &&
            '[object Arguments]' === c.call(e)
          );
        },
        r = function(e) {
          return (
            !!n(e) ||
            (null !== e &&
              'object' == typeof e &&
              'number' == typeof e.length &&
              e.length >= 0 &&
              '[object Array]' !== c.call(e) &&
              '[object Function]' === c.call(e.callee))
          );
        },
        o = (function() {
          return n(arguments);
        })();
      (n.isLegacyArguments = r), (e.exports = o ? n : r);
    },
    4277: e => {
      'use strict';
      var t = Date.prototype.getDay,
        c = Object.prototype.toString,
        n =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.toStringTag;
      e.exports = function(e) {
        return (
          'object' == typeof e &&
          null !== e &&
          (n
            ? (function(e) {
                try {
                  return t.call(e), !0;
                } catch (e) {
                  return !1;
                }
              })(e)
            : '[object Date]' === c.call(e))
        );
      };
    },
    8786: (e, t, c) => {
      'use strict';
      var n,
        r,
        o,
        a,
        l = c(2636)() && 'symbol' == typeof Symbol.toStringTag;
      if (l) {
        (n = Function.call.bind(Object.prototype.hasOwnProperty)),
          (r = Function.call.bind(RegExp.prototype.exec)),
          (o = {});
        var s = function() {
          throw o;
        };
        (a = { toString: s, valueOf: s }),
          'symbol' == typeof Symbol.toPrimitive && (a[Symbol.toPrimitive] = s);
      }
      var i = Object.prototype.toString,
        h = Object.getOwnPropertyDescriptor;
      e.exports = l
        ? function(e) {
            if (!e || 'object' != typeof e) return !1;
            var t = h(e, 'lastIndex');
            if (!t || !n(t, 'value')) return !1;
            try {
              r(e, a);
            } catch (e) {
              return e === o;
            }
          }
        : function(e) {
            return (
              !(!e || ('object' != typeof e && 'function' != typeof e)) &&
              '[object RegExp]' === i.call(e)
            );
          };
    },
    8169: e => {
      'use strict';
      var t = function(e) {
        return e != e;
      };
      e.exports = function(e, c) {
        return 0 === e && 0 === c
          ? 1 / e == 1 / c
          : e === c || !(!t(e) || !t(c));
      };
    },
    4679: (e, t, c) => {
      'use strict';
      var n = c(4926),
        r = c(8539),
        o = c(8169),
        a = c(8070),
        l = c(191),
        s = r(a(), Object);
      n(s, { getPolyfill: a, implementation: o, shim: l }), (e.exports = s);
    },
    2130: (e, t, c) => {
      'use strict';
      var n,
        r = SyntaxError,
        o = Function,
        a = TypeError,
        l = function(e) {
          try {
            return Function('"use strict"; return (' + e + ').constructor;')();
          } catch (e) {}
        },
        s = Object.getOwnPropertyDescriptor;
      if (s)
        try {
          s({}, '');
        } catch (e) {
          s = null;
        }
      var i = function() {
          throw new a();
        },
        h = s
          ? (function() {
              try {
                return i;
              } catch (e) {
                try {
                  return s(arguments, 'callee').get;
                } catch (e) {
                  return i;
                }
              }
            })()
          : i,
        p = c(2636)(),
        u =
          Object.getPrototypeOf ||
          function(e) {
            return e.__proto__;
          },
        v = l('async function* () {}'),
        m = v ? v.prototype : n,
        d = m ? m.prototype : n,
        f = 'undefined' == typeof Uint8Array ? n : u(Uint8Array),
        z = {
          '%AggregateError%':
            'undefined' == typeof AggregateError ? n : AggregateError,
          '%Array%': Array,
          '%ArrayBuffer%': 'undefined' == typeof ArrayBuffer ? n : ArrayBuffer,
          '%ArrayIteratorPrototype%': p ? u([][Symbol.iterator]()) : n,
          '%AsyncFromSyncIteratorPrototype%': n,
          '%AsyncFunction%': l('async function () {}'),
          '%AsyncGenerator%': m,
          '%AsyncGeneratorFunction%': v,
          '%AsyncIteratorPrototype%': d ? u(d) : n,
          '%Atomics%': 'undefined' == typeof Atomics ? n : Atomics,
          '%BigInt%': 'undefined' == typeof BigInt ? n : BigInt,
          '%Boolean%': Boolean,
          '%DataView%': 'undefined' == typeof DataView ? n : DataView,
          '%Date%': Date,
          '%decodeURI%': decodeURI,
          '%decodeURIComponent%': decodeURIComponent,
          '%encodeURI%': encodeURI,
          '%encodeURIComponent%': encodeURIComponent,
          '%Error%': Error,
          '%eval%': eval,
          '%EvalError%': EvalError,
          '%Float32Array%':
            'undefined' == typeof Float32Array ? n : Float32Array,
          '%Float64Array%':
            'undefined' == typeof Float64Array ? n : Float64Array,
          '%FinalizationRegistry%':
            'undefined' == typeof FinalizationRegistry
              ? n
              : FinalizationRegistry,
          '%Function%': o,
          '%GeneratorFunction%': l('function* () {}'),
          '%Int8Array%': 'undefined' == typeof Int8Array ? n : Int8Array,
          '%Int16Array%': 'undefined' == typeof Int16Array ? n : Int16Array,
          '%Int32Array%': 'undefined' == typeof Int32Array ? n : Int32Array,
          '%isFinite%': isFinite,
          '%isNaN%': isNaN,
          '%IteratorPrototype%': p ? u(u([][Symbol.iterator]())) : n,
          '%JSON%': 'object' == typeof JSON ? JSON : n,
          '%Map%': 'undefined' == typeof Map ? n : Map,
          '%MapIteratorPrototype%':
            'undefined' != typeof Map && p
              ? u(new Map()[Symbol.iterator]())
              : n,
          '%Math%': Math,
          '%Number%': Number,
          '%Object%': Object,
          '%parseFloat%': parseFloat,
          '%parseInt%': parseInt,
          '%Promise%': 'undefined' == typeof Promise ? n : Promise,
          '%Proxy%': 'undefined' == typeof Proxy ? n : Proxy,
          '%RangeError%': RangeError,
          '%ReferenceError%': ReferenceError,
          '%Reflect%': 'undefined' == typeof Reflect ? n : Reflect,
          '%RegExp%': RegExp,
          '%Set%': 'undefined' == typeof Set ? n : Set,
          '%SetIteratorPrototype%':
            'undefined' != typeof Set && p
              ? u(new Set()[Symbol.iterator]())
              : n,
          '%SharedArrayBuffer%':
            'undefined' == typeof SharedArrayBuffer ? n : SharedArrayBuffer,
          '%String%': String,
          '%StringIteratorPrototype%': p ? u(''[Symbol.iterator]()) : n,
          '%Symbol%': p ? Symbol : n,
          '%SyntaxError%': r,
          '%ThrowTypeError%': h,
          '%TypedArray%': f,
          '%TypeError%': a,
          '%Uint8Array%': 'undefined' == typeof Uint8Array ? n : Uint8Array,
          '%Uint8ClampedArray%':
            'undefined' == typeof Uint8ClampedArray ? n : Uint8ClampedArray,
          '%Uint16Array%': 'undefined' == typeof Uint16Array ? n : Uint16Array,
          '%Uint32Array%': 'undefined' == typeof Uint32Array ? n : Uint32Array,
          '%URIError%': URIError,
          '%WeakMap%': 'undefined' == typeof WeakMap ? n : WeakMap,
          '%WeakRef%': 'undefined' == typeof WeakRef ? n : WeakRef,
          '%WeakSet%': 'undefined' == typeof WeakSet ? n : WeakSet
        },
        y = {
          '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
          '%ArrayPrototype%': ['Array', 'prototype'],
          '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
          '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
          '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
          '%ArrayProto_values%': ['Array', 'prototype', 'values'],
          '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
          '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
          '%AsyncGeneratorPrototype%': [
            'AsyncGeneratorFunction',
            'prototype',
            'prototype'
          ],
          '%BooleanPrototype%': ['Boolean', 'prototype'],
          '%DataViewPrototype%': ['DataView', 'prototype'],
          '%DatePrototype%': ['Date', 'prototype'],
          '%ErrorPrototype%': ['Error', 'prototype'],
          '%EvalErrorPrototype%': ['EvalError', 'prototype'],
          '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
          '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
          '%FunctionPrototype%': ['Function', 'prototype'],
          '%Generator%': ['GeneratorFunction', 'prototype'],
          '%GeneratorPrototype%': [
            'GeneratorFunction',
            'prototype',
            'prototype'
          ],
          '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
          '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
          '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
          '%JSONParse%': ['JSON', 'parse'],
          '%JSONStringify%': ['JSON', 'stringify'],
          '%MapPrototype%': ['Map', 'prototype'],
          '%NumberPrototype%': ['Number', 'prototype'],
          '%ObjectPrototype%': ['Object', 'prototype'],
          '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
          '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
          '%PromisePrototype%': ['Promise', 'prototype'],
          '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
          '%Promise_all%': ['Promise', 'all'],
          '%Promise_reject%': ['Promise', 'reject'],
          '%Promise_resolve%': ['Promise', 'resolve'],
          '%RangeErrorPrototype%': ['RangeError', 'prototype'],
          '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
          '%RegExpPrototype%': ['RegExp', 'prototype'],
          '%SetPrototype%': ['Set', 'prototype'],
          '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
          '%StringPrototype%': ['String', 'prototype'],
          '%SymbolPrototype%': ['Symbol', 'prototype'],
          '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
          '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
          '%TypeErrorPrototype%': ['TypeError', 'prototype'],
          '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
          '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
          '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
          '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
          '%URIErrorPrototype%': ['URIError', 'prototype'],
          '%WeakMapPrototype%': ['WeakMap', 'prototype'],
          '%WeakSetPrototype%': ['WeakSet', 'prototype']
        },
        M = c(4090),
        H = c(3198),
        V = M.call(Function.call, Array.prototype.concat),
        E = M.call(Function.apply, Array.prototype.splice),
        L = M.call(Function.call, String.prototype.replace),
        g = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        C = /\\(\\)?/g,
        b = function(e) {
          var t = [];
          return (
            L(e, g, function(e, c, n, r) {
              t[t.length] = n ? L(r, C, '$1') : c || e;
            }),
            t
          );
        },
        A = function(e, t) {
          var c,
            n = e;
          if ((H(y, n) && (n = '%' + (c = y[n])[0] + '%'), H(z, n))) {
            var o = z[n];
            if (void 0 === o && !t)
              throw new a(
                'intrinsic ' +
                  e +
                  ' exists, but is not available. Please file an issue!'
              );
            return { alias: c, name: n, value: o };
          }
          throw new r('intrinsic ' + e + ' does not exist!');
        };
      e.exports = function(e, t) {
        if ('string' != typeof e || 0 === e.length)
          throw new a('intrinsic name must be a non-empty string');
        if (arguments.length > 1 && 'boolean' != typeof t)
          throw new a('"allowMissing" argument must be a boolean');
        var c = b(e),
          n = c.length > 0 ? c[0] : '',
          r = A('%' + n + '%', t),
          o = r.name,
          l = r.value,
          i = !1,
          h = r.alias;
        h && ((n = h[0]), E(c, V([0, 1], h)));
        for (var p = 1, u = !0; p < c.length; p += 1) {
          var v = c[p];
          if (
            (('constructor' !== v && u) || (i = !0),
            H(z, (o = '%' + (n += '.' + v) + '%')))
          )
            l = z[o];
          else if (null != l) {
            if (s && p + 1 >= c.length) {
              var m = s(l, v);
              if (((u = !!m), !t && !(v in l)))
                throw new a(
                  'base intrinsic for ' +
                    e +
                    ' exists, but the property is not available.'
                );
              l = u && 'get' in m && !('originalValue' in m.get) ? m.get : l[v];
            } else (u = H(l, v)), (l = l[v]);
            u && !i && (z[o] = l);
          }
        }
        return l;
      };
    },
    8539: (e, t, c) => {
      'use strict';
      var n = c(4090),
        r = c(2130),
        o = r('%Function.prototype.apply%'),
        a = r('%Function.prototype.call%'),
        l = r('%Reflect.apply%', !0) || n.call(a, o),
        s = r('%Object.defineProperty%', !0);
      if (s)
        try {
          s({}, 'a', { value: 1 });
        } catch (e) {
          s = null;
        }
      e.exports = function() {
        return l(n, a, arguments);
      };
      var i = function() {
        return l(n, o, arguments);
      };
      s ? s(e.exports, 'apply', { value: i }) : (e.exports.apply = i);
    },
    8070: (e, t, c) => {
      'use strict';
      var n = c(8169);
      e.exports = function() {
        return 'function' == typeof Object.is ? Object.is : n;
      };
    },
    191: (e, t, c) => {
      'use strict';
      var n = c(8070),
        r = c(4926);
      e.exports = function() {
        var e = n();
        return (
          r(
            Object,
            { is: e },
            {
              is: function() {
                return Object.is !== e;
              }
            }
          ),
          e
        );
      };
    },
    5691: (e, t, c) => {
      'use strict';
      var n;
      if (!Object.keys) {
        var r = Object.prototype.hasOwnProperty,
          o = Object.prototype.toString,
          a = c(801),
          l = Object.prototype.propertyIsEnumerable,
          s = !l.call({ toString: null }, 'toString'),
          i = l.call(function() {}, 'prototype'),
          h = [
            'toString',
            'toLocaleString',
            'valueOf',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'constructor'
          ],
          p = function(e) {
            var t = e.constructor;
            return t && t.prototype === e;
          },
          u = {
            $applicationCache: !0,
            $console: !0,
            $external: !0,
            $frame: !0,
            $frameElement: !0,
            $frames: !0,
            $innerHeight: !0,
            $innerWidth: !0,
            $onmozfullscreenchange: !0,
            $onmozfullscreenerror: !0,
            $outerHeight: !0,
            $outerWidth: !0,
            $pageXOffset: !0,
            $pageYOffset: !0,
            $parent: !0,
            $scrollLeft: !0,
            $scrollTop: !0,
            $scrollX: !0,
            $scrollY: !0,
            $self: !0,
            $webkitIndexedDB: !0,
            $webkitStorageInfo: !0,
            $window: !0
          },
          v = (function() {
            if ('undefined' == typeof window) return !1;
            for (var e in window)
              try {
                if (
                  !u['$' + e] &&
                  r.call(window, e) &&
                  null !== window[e] &&
                  'object' == typeof window[e]
                )
                  try {
                    p(window[e]);
                  } catch (e) {
                    return !0;
                  }
              } catch (e) {
                return !0;
              }
            return !1;
          })();
        n = function(e) {
          var t = null !== e && 'object' == typeof e,
            c = '[object Function]' === o.call(e),
            n = a(e),
            l = t && '[object String]' === o.call(e),
            u = [];
          if (!t && !c && !n)
            throw new TypeError('Object.keys called on a non-object');
          var m = i && c;
          if (l && e.length > 0 && !r.call(e, 0))
            for (var d = 0; d < e.length; ++d) u.push(String(d));
          if (n && e.length > 0)
            for (var f = 0; f < e.length; ++f) u.push(String(f));
          else
            for (var z in e)
              (m && 'prototype' === z) || !r.call(e, z) || u.push(String(z));
          if (s)
            for (
              var y = (function(e) {
                  if ('undefined' == typeof window || !v) return p(e);
                  try {
                    return p(e);
                  } catch (e) {
                    return !1;
                  }
                })(e),
                M = 0;
              M < h.length;
              ++M
            )
              (y && 'constructor' === h[M]) || !r.call(e, h[M]) || u.push(h[M]);
          return u;
        };
      }
      e.exports = n;
    },
    3464: (e, t, c) => {
      'use strict';
      var n = Array.prototype.slice,
        r = c(801),
        o = Object.keys,
        a = o
          ? function(e) {
              return o(e);
            }
          : c(5691),
        l = Object.keys;
      (a.shim = function() {
        return (
          Object.keys
            ? (function() {
                var e = Object.keys(arguments);
                return e && e.length === arguments.length;
              })(1, 2) ||
              (Object.keys = function(e) {
                return r(e) ? l(n.call(e)) : l(e);
              })
            : (Object.keys = a),
          Object.keys || a
        );
      }),
        (e.exports = a);
    },
    801: e => {
      'use strict';
      var t = Object.prototype.toString;
      e.exports = function(e) {
        var c = t.call(e),
          n = '[object Arguments]' === c;
        return (
          n ||
            (n =
              '[object Array]' !== c &&
              null !== e &&
              'object' == typeof e &&
              'number' == typeof e.length &&
              e.length >= 0 &&
              '[object Function]' === t.call(e.callee)),
          n
        );
      };
    },
    8262: (e, t, c) => {
      'use strict';
      var n = c(3586);
      function r() {}
      function o() {}
      (o.resetWarningCache = r),
        (e.exports = function() {
          function e(e, t, c, r, o, a) {
            if (a !== n) {
              var l = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
              );
              throw ((l.name = 'Invariant Violation'), l);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var c = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: o,
            resetWarningCache: r
          };
          return (c.PropTypes = c), c;
        });
    },
    3980: (e, t, c) => {
      e.exports = c(8262)();
    },
    3586: e => {
      'use strict';
      e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    },
    6847: (e, t, c) => {
      'use strict';
      function n() {
        var e = this.constructor.getDerivedStateFromProps(
          this.props,
          this.state
        );
        null != e && this.setState(e);
      }
      function r(e) {
        this.setState(
          function(t) {
            var c = this.constructor.getDerivedStateFromProps(e, t);
            return null != c ? c : null;
          }.bind(this)
        );
      }
      function o(e, t) {
        try {
          var c = this.props,
            n = this.state;
          (this.props = e),
            (this.state = t),
            (this.__reactInternalSnapshotFlag = !0),
            (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(c, n));
        } finally {
          (this.props = c), (this.state = n);
        }
      }
      function a(e) {
        var t = e.prototype;
        if (!t || !t.isReactComponent)
          throw new Error('Can only polyfill class components');
        if (
          'function' != typeof e.getDerivedStateFromProps &&
          'function' != typeof t.getSnapshotBeforeUpdate
        )
          return e;
        var c = null,
          a = null,
          l = null;
        if (
          ('function' == typeof t.componentWillMount
            ? (c = 'componentWillMount')
            : 'function' == typeof t.UNSAFE_componentWillMount &&
              (c = 'UNSAFE_componentWillMount'),
          'function' == typeof t.componentWillReceiveProps
            ? (a = 'componentWillReceiveProps')
            : 'function' == typeof t.UNSAFE_componentWillReceiveProps &&
              (a = 'UNSAFE_componentWillReceiveProps'),
          'function' == typeof t.componentWillUpdate
            ? (l = 'componentWillUpdate')
            : 'function' == typeof t.UNSAFE_componentWillUpdate &&
              (l = 'UNSAFE_componentWillUpdate'),
          null !== c || null !== a || null !== l)
        ) {
          var s = e.displayName || e.name,
            i =
              'function' == typeof e.getDerivedStateFromProps
                ? 'getDerivedStateFromProps()'
                : 'getSnapshotBeforeUpdate()';
          throw Error(
            'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
              s +
              ' uses ' +
              i +
              ' but also contains the following legacy lifecycles:' +
              (null !== c ? '\n  ' + c : '') +
              (null !== a ? '\n  ' + a : '') +
              (null !== l ? '\n  ' + l : '') +
              '\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks'
          );
        }
        if (
          ('function' == typeof e.getDerivedStateFromProps &&
            ((t.componentWillMount = n), (t.componentWillReceiveProps = r)),
          'function' == typeof t.getSnapshotBeforeUpdate)
        ) {
          if ('function' != typeof t.componentDidUpdate)
            throw new Error(
              'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
            );
          t.componentWillUpdate = o;
          var h = t.componentDidUpdate;
          t.componentDidUpdate = function(e, t, c) {
            var n = this.__reactInternalSnapshotFlag
              ? this.__reactInternalSnapshot
              : c;
            h.call(this, e, t, n);
          };
        }
        return e;
      }
      c.r(t),
        c.d(t, { polyfill: () => a }),
        (n.__suppressDeprecationWarning = !0),
        (r.__suppressDeprecationWarning = !0),
        (o.__suppressDeprecationWarning = !0);
    },
    2263: e => {
      'use strict';
      e.exports = function() {};
    },
    7817: (e, t, c) => {
      'use strict';
      (t.__esModule = !0),
        (t.default = void 0),
        (function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var c in e)
              if (Object.prototype.hasOwnProperty.call(e, c)) {
                var n =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, c)
                    : {};
                n.get || n.set ? Object.defineProperty(t, c, n) : (t[c] = e[c]);
              }
          t.default = e;
        })(c(3980));
      var n = l(c(4639)),
        r = l(c(4150)),
        o = l(c(2959)),
        a = l(c(5268));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s() {
        return (s =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var c = arguments[t];
              for (var n in c)
                Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      c(6530);
      var i = function(e, t) {
          return (
            e &&
            t &&
            t.split(' ').forEach(function(t) {
              return (0, n.default)(e, t);
            })
          );
        },
        h = function(e, t) {
          return (
            e &&
            t &&
            t.split(' ').forEach(function(t) {
              return (0, r.default)(e, t);
            })
          );
        },
        p = (function(e) {
          var t, c;
          function n() {
            for (
              var t, c = arguments.length, n = new Array(c), r = 0;
              r < c;
              r++
            )
              n[r] = arguments[r];
            return (
              ((t =
                e.call.apply(e, [this].concat(n)) || this).onEnter = function(
                e,
                c
              ) {
                var n = t.getClassNames(c ? 'appear' : 'enter').className;
                t.removeClasses(e, 'exit'),
                  i(e, n),
                  t.props.onEnter && t.props.onEnter(e, c);
              }),
              (t.onEntering = function(e, c) {
                var n = t.getClassNames(c ? 'appear' : 'enter').activeClassName;
                t.reflowAndAddClass(e, n),
                  t.props.onEntering && t.props.onEntering(e, c);
              }),
              (t.onEntered = function(e, c) {
                var n = t.getClassNames('appear').doneClassName,
                  r = t.getClassNames('enter').doneClassName,
                  o = c ? n + ' ' + r : r;
                t.removeClasses(e, c ? 'appear' : 'enter'),
                  i(e, o),
                  t.props.onEntered && t.props.onEntered(e, c);
              }),
              (t.onExit = function(e) {
                var c = t.getClassNames('exit').className;
                t.removeClasses(e, 'appear'),
                  t.removeClasses(e, 'enter'),
                  i(e, c),
                  t.props.onExit && t.props.onExit(e);
              }),
              (t.onExiting = function(e) {
                var c = t.getClassNames('exit').activeClassName;
                t.reflowAndAddClass(e, c),
                  t.props.onExiting && t.props.onExiting(e);
              }),
              (t.onExited = function(e) {
                var c = t.getClassNames('exit').doneClassName;
                t.removeClasses(e, 'exit'),
                  i(e, c),
                  t.props.onExited && t.props.onExited(e);
              }),
              (t.getClassNames = function(e) {
                var c = t.props.classNames,
                  n = 'string' == typeof c,
                  r = n ? (n && c ? c + '-' : '') + e : c[e];
                return {
                  className: r,
                  activeClassName: n ? r + '-active' : c[e + 'Active'],
                  doneClassName: n ? r + '-done' : c[e + 'Done']
                };
              }),
              t
            );
          }
          (c = e),
            ((t = n).prototype = Object.create(c.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = c);
          var r = n.prototype;
          return (
            (r.removeClasses = function(e, t) {
              var c = this.getClassNames(t),
                n = c.className,
                r = c.activeClassName,
                o = c.doneClassName;
              n && h(e, n), r && h(e, r), o && h(e, o);
            }),
            (r.reflowAndAddClass = function(e, t) {
              t && (e && e.scrollTop, i(e, t));
            }),
            (r.render = function() {
              var e = s({}, this.props);
              return (
                delete e.classNames,
                o.default.createElement(
                  a.default,
                  s({}, e, {
                    onEnter: this.onEnter,
                    onEntered: this.onEntered,
                    onEntering: this.onEntering,
                    onExit: this.onExit,
                    onExiting: this.onExiting,
                    onExited: this.onExited
                  })
                )
              );
            }),
            n
          );
        })(o.default.Component);
      (p.defaultProps = { classNames: '' }), (p.propTypes = {});
      var u = p;
      (t.default = u), (e.exports = t.default);
    },
    4674: (e, t, c) => {
      'use strict';
      (t.__esModule = !0), (t.default = void 0), a(c(3980));
      var n = a(c(2959)),
        r = c(8844),
        o = a(c(996));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var l = (function(e) {
        var t, c;
        function a() {
          for (var t, c = arguments.length, n = new Array(c), r = 0; r < c; r++)
            n[r] = arguments[r];
          return (
            ((t =
              e.call.apply(e, [this].concat(n)) ||
              this).handleEnter = function() {
              for (
                var e = arguments.length, c = new Array(e), n = 0;
                n < e;
                n++
              )
                c[n] = arguments[n];
              return t.handleLifecycle('onEnter', 0, c);
            }),
            (t.handleEntering = function() {
              for (
                var e = arguments.length, c = new Array(e), n = 0;
                n < e;
                n++
              )
                c[n] = arguments[n];
              return t.handleLifecycle('onEntering', 0, c);
            }),
            (t.handleEntered = function() {
              for (
                var e = arguments.length, c = new Array(e), n = 0;
                n < e;
                n++
              )
                c[n] = arguments[n];
              return t.handleLifecycle('onEntered', 0, c);
            }),
            (t.handleExit = function() {
              for (
                var e = arguments.length, c = new Array(e), n = 0;
                n < e;
                n++
              )
                c[n] = arguments[n];
              return t.handleLifecycle('onExit', 1, c);
            }),
            (t.handleExiting = function() {
              for (
                var e = arguments.length, c = new Array(e), n = 0;
                n < e;
                n++
              )
                c[n] = arguments[n];
              return t.handleLifecycle('onExiting', 1, c);
            }),
            (t.handleExited = function() {
              for (
                var e = arguments.length, c = new Array(e), n = 0;
                n < e;
                n++
              )
                c[n] = arguments[n];
              return t.handleLifecycle('onExited', 1, c);
            }),
            t
          );
        }
        (c = e),
          ((t = a).prototype = Object.create(c.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = c);
        var l = a.prototype;
        return (
          (l.handleLifecycle = function(e, t, c) {
            var o,
              a = this.props.children,
              l = n.default.Children.toArray(a)[t];
            l.props[e] && (o = l.props)[e].apply(o, c),
              this.props[e] && this.props[e]((0, r.findDOMNode)(this));
          }),
          (l.render = function() {
            var e = this.props,
              t = e.children,
              c = e.in,
              r = (function(e, t) {
                if (null == e) return {};
                var c,
                  n,
                  r = {},
                  o = Object.keys(e);
                for (n = 0; n < o.length; n++)
                  (c = o[n]), t.indexOf(c) >= 0 || (r[c] = e[c]);
                return r;
              })(e, ['children', 'in']),
              a = n.default.Children.toArray(t),
              l = a[0],
              s = a[1];
            return (
              delete r.onEnter,
              delete r.onEntering,
              delete r.onEntered,
              delete r.onExit,
              delete r.onExiting,
              delete r.onExited,
              n.default.createElement(
                o.default,
                r,
                c
                  ? n.default.cloneElement(l, {
                      key: 'first',
                      onEnter: this.handleEnter,
                      onEntering: this.handleEntering,
                      onEntered: this.handleEntered
                    })
                  : n.default.cloneElement(s, {
                      key: 'second',
                      onEnter: this.handleExit,
                      onEntering: this.handleExiting,
                      onEntered: this.handleExited
                    })
              )
            );
          }),
          a
        );
      })(n.default.Component);
      l.propTypes = {};
      var s = l;
      (t.default = s), (e.exports = t.default);
    },
    5268: (e, t, c) => {
      'use strict';
      (t.__esModule = !0),
        (t.default = t.EXITING = t.ENTERED = t.ENTERING = t.EXITED = t.UNMOUNTED = void 0);
      var n = (function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var c in e)
              if (Object.prototype.hasOwnProperty.call(e, c)) {
                var n =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, c)
                    : {};
                n.get || n.set ? Object.defineProperty(t, c, n) : (t[c] = e[c]);
              }
          return (t.default = e), t;
        })(c(3980)),
        r = l(c(2959)),
        o = l(c(8844)),
        a = c(6847);
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      c(6530);
      var s = 'unmounted';
      t.UNMOUNTED = s;
      var i = 'exited';
      t.EXITED = i;
      var h = 'entering';
      t.ENTERING = h;
      var p = 'entered';
      t.ENTERED = p;
      var u = 'exiting';
      t.EXITING = u;
      var v = (function(e) {
        var t, c;
        function n(t, c) {
          var n;
          n = e.call(this, t, c) || this;
          var r,
            o = c.transitionGroup,
            a = o && !o.isMounting ? t.enter : t.appear;
          return (
            (n.appearStatus = null),
            t.in
              ? a
                ? ((r = i), (n.appearStatus = h))
                : (r = p)
              : (r = t.unmountOnExit || t.mountOnEnter ? s : i),
            (n.state = { status: r }),
            (n.nextCallback = null),
            n
          );
        }
        (c = e),
          ((t = n).prototype = Object.create(c.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = c);
        var a = n.prototype;
        return (
          (a.getChildContext = function() {
            return { transitionGroup: null };
          }),
          (n.getDerivedStateFromProps = function(e, t) {
            return e.in && t.status === s ? { status: i } : null;
          }),
          (a.componentDidMount = function() {
            this.updateStatus(!0, this.appearStatus);
          }),
          (a.componentDidUpdate = function(e) {
            var t = null;
            if (e !== this.props) {
              var c = this.state.status;
              this.props.in
                ? c !== h && c !== p && (t = h)
                : (c !== h && c !== p) || (t = u);
            }
            this.updateStatus(!1, t);
          }),
          (a.componentWillUnmount = function() {
            this.cancelNextCallback();
          }),
          (a.getTimeouts = function() {
            var e,
              t,
              c,
              n = this.props.timeout;
            return (
              (e = t = c = n),
              null != n &&
                'number' != typeof n &&
                ((e = n.exit),
                (t = n.enter),
                (c = void 0 !== n.appear ? n.appear : t)),
              { exit: e, enter: t, appear: c }
            );
          }),
          (a.updateStatus = function(e, t) {
            if ((void 0 === e && (e = !1), null !== t)) {
              this.cancelNextCallback();
              var c = o.default.findDOMNode(this);
              t === h ? this.performEnter(c, e) : this.performExit(c);
            } else
              this.props.unmountOnExit &&
                this.state.status === i &&
                this.setState({ status: s });
          }),
          (a.performEnter = function(e, t) {
            var c = this,
              n = this.props.enter,
              r = this.context.transitionGroup
                ? this.context.transitionGroup.isMounting
                : t,
              o = this.getTimeouts(),
              a = r ? o.appear : o.enter;
            t || n
              ? (this.props.onEnter(e, r),
                this.safeSetState({ status: h }, function() {
                  c.props.onEntering(e, r),
                    c.onTransitionEnd(e, a, function() {
                      c.safeSetState({ status: p }, function() {
                        c.props.onEntered(e, r);
                      });
                    });
                }))
              : this.safeSetState({ status: p }, function() {
                  c.props.onEntered(e);
                });
          }),
          (a.performExit = function(e) {
            var t = this,
              c = this.props.exit,
              n = this.getTimeouts();
            c
              ? (this.props.onExit(e),
                this.safeSetState({ status: u }, function() {
                  t.props.onExiting(e),
                    t.onTransitionEnd(e, n.exit, function() {
                      t.safeSetState({ status: i }, function() {
                        t.props.onExited(e);
                      });
                    });
                }))
              : this.safeSetState({ status: i }, function() {
                  t.props.onExited(e);
                });
          }),
          (a.cancelNextCallback = function() {
            null !== this.nextCallback &&
              (this.nextCallback.cancel(), (this.nextCallback = null));
          }),
          (a.safeSetState = function(e, t) {
            (t = this.setNextCallback(t)), this.setState(e, t);
          }),
          (a.setNextCallback = function(e) {
            var t = this,
              c = !0;
            return (
              (this.nextCallback = function(n) {
                c && ((c = !1), (t.nextCallback = null), e(n));
              }),
              (this.nextCallback.cancel = function() {
                c = !1;
              }),
              this.nextCallback
            );
          }),
          (a.onTransitionEnd = function(e, t, c) {
            this.setNextCallback(c);
            var n = null == t && !this.props.addEndListener;
            e && !n
              ? (this.props.addEndListener &&
                  this.props.addEndListener(e, this.nextCallback),
                null != t && setTimeout(this.nextCallback, t))
              : setTimeout(this.nextCallback, 0);
          }),
          (a.render = function() {
            var e = this.state.status;
            if (e === s) return null;
            var t = this.props,
              c = t.children,
              n = (function(e, t) {
                if (null == e) return {};
                var c,
                  n,
                  r = {},
                  o = Object.keys(e);
                for (n = 0; n < o.length; n++)
                  (c = o[n]), t.indexOf(c) >= 0 || (r[c] = e[c]);
                return r;
              })(t, ['children']);
            if (
              (delete n.in,
              delete n.mountOnEnter,
              delete n.unmountOnExit,
              delete n.appear,
              delete n.enter,
              delete n.exit,
              delete n.timeout,
              delete n.addEndListener,
              delete n.onEnter,
              delete n.onEntering,
              delete n.onEntered,
              delete n.onExit,
              delete n.onExiting,
              delete n.onExited,
              'function' == typeof c)
            )
              return c(e, n);
            var o = r.default.Children.only(c);
            return r.default.cloneElement(o, n);
          }),
          n
        );
      })(r.default.Component);
      function m() {}
      (v.contextTypes = { transitionGroup: n.object }),
        (v.childContextTypes = { transitionGroup: function() {} }),
        (v.propTypes = {}),
        (v.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: m,
          onEntering: m,
          onEntered: m,
          onExit: m,
          onExiting: m,
          onExited: m
        }),
        (v.UNMOUNTED = 0),
        (v.EXITED = 1),
        (v.ENTERING = 2),
        (v.ENTERED = 3),
        (v.EXITING = 4);
      var d = (0, a.polyfill)(v);
      t.default = d;
    },
    996: (e, t, c) => {
      'use strict';
      (t.__esModule = !0), (t.default = void 0);
      var n = l(c(3980)),
        r = l(c(2959)),
        o = c(6847),
        a = c(8768);
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s() {
        return (s =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var c = arguments[t];
              for (var n in c)
                Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function i(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      var h =
          Object.values ||
          function(e) {
            return Object.keys(e).map(function(t) {
              return e[t];
            });
          },
        p = (function(e) {
          var t, c;
          function n(t, c) {
            var n,
              r = (n = e.call(this, t, c) || this).handleExited.bind(i(i(n)));
            return (n.state = { handleExited: r, firstRender: !0 }), n;
          }
          (c = e),
            ((t = n).prototype = Object.create(c.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = c);
          var o = n.prototype;
          return (
            (o.getChildContext = function() {
              return { transitionGroup: { isMounting: !this.appeared } };
            }),
            (o.componentDidMount = function() {
              (this.appeared = !0), (this.mounted = !0);
            }),
            (o.componentWillUnmount = function() {
              this.mounted = !1;
            }),
            (n.getDerivedStateFromProps = function(e, t) {
              var c = t.children,
                n = t.handleExited;
              return {
                children: t.firstRender
                  ? (0, a.getInitialChildMapping)(e, n)
                  : (0, a.getNextChildMapping)(e, c, n),
                firstRender: !1
              };
            }),
            (o.handleExited = function(e, t) {
              var c = (0, a.getChildMapping)(this.props.children);
              e.key in c ||
                (e.props.onExited && e.props.onExited(t),
                this.mounted &&
                  this.setState(function(t) {
                    var c = s({}, t.children);
                    return delete c[e.key], { children: c };
                  }));
            }),
            (o.render = function() {
              var e = this.props,
                t = e.component,
                c = e.childFactory,
                n = (function(e, t) {
                  if (null == e) return {};
                  var c,
                    n,
                    r = {},
                    o = Object.keys(e);
                  for (n = 0; n < o.length; n++)
                    (c = o[n]), t.indexOf(c) >= 0 || (r[c] = e[c]);
                  return r;
                })(e, ['component', 'childFactory']),
                o = h(this.state.children).map(c);
              return (
                delete n.appear,
                delete n.enter,
                delete n.exit,
                null === t ? o : r.default.createElement(t, n, o)
              );
            }),
            n
          );
        })(r.default.Component);
      (p.childContextTypes = { transitionGroup: n.default.object.isRequired }),
        (p.propTypes = {}),
        (p.defaultProps = {
          component: 'div',
          childFactory: function(e) {
            return e;
          }
        });
      var u = (0, o.polyfill)(p);
      (t.default = u), (e.exports = t.default);
    },
    6090: (e, t, c) => {
      'use strict';
      var n = l(c(7817)),
        r = l(c(4674)),
        o = l(c(996)),
        a = l(c(5268));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = {
        Transition: a.default,
        TransitionGroup: o.default,
        ReplaceTransition: r.default,
        CSSTransition: n.default
      };
    },
    4639: (e, t, c) => {
      'use strict';
      var n = c(4859);
      (t.__esModule = !0),
        (t.default = function(e, t) {
          e.classList
            ? e.classList.add(t)
            : (0, r.default)(e, t) ||
              ('string' == typeof e.className
                ? (e.className = e.className + ' ' + t)
                : e.setAttribute(
                    'class',
                    ((e.className && e.className.baseVal) || '') + ' ' + t
                  ));
        });
      var r = n(c(2546));
      e.exports = t.default;
    },
    2546: (e, t) => {
      'use strict';
      (t.__esModule = !0),
        (t.default = function(e, t) {
          return e.classList
            ? !!t && e.classList.contains(t)
            : -1 !==
                (' ' + (e.className.baseVal || e.className) + ' ').indexOf(
                  ' ' + t + ' '
                );
        }),
        (e.exports = t.default);
    },
    4150: e => {
      'use strict';
      function t(e, t) {
        return e
          .replace(new RegExp('(^|\\s)' + t + '(?:\\s|$)', 'g'), '$1')
          .replace(/\s+/g, ' ')
          .replace(/^\s*|\s*$/g, '');
      }
      e.exports = function(e, c) {
        e.classList
          ? e.classList.remove(c)
          : 'string' == typeof e.className
          ? (e.className = t(e.className, c))
          : e.setAttribute(
              'class',
              t((e.className && e.className.baseVal) || '', c)
            );
      };
    },
    8768: (e, t, c) => {
      'use strict';
      (t.__esModule = !0),
        (t.getChildMapping = r),
        (t.mergeChildMappings = o),
        (t.getInitialChildMapping = function(e, t) {
          return r(e.children, function(c) {
            return (0,
            n.cloneElement)(c, { onExited: t.bind(null, c), in: !0, appear: a(c, 'appear', e), enter: a(c, 'enter', e), exit: a(c, 'exit', e) });
          });
        }),
        (t.getNextChildMapping = function(e, t, c) {
          var l = r(e.children),
            s = o(t, l);
          return (
            Object.keys(s).forEach(function(r) {
              var o = s[r];
              if ((0, n.isValidElement)(o)) {
                var i = r in t,
                  h = r in l,
                  p = t[r],
                  u = (0, n.isValidElement)(p) && !p.props.in;
                !h || (i && !u)
                  ? h || !i || u
                    ? h &&
                      i &&
                      (0, n.isValidElement)(p) &&
                      (s[r] = (0, n.cloneElement)(o, {
                        onExited: c.bind(null, o),
                        in: p.props.in,
                        exit: a(o, 'exit', e),
                        enter: a(o, 'enter', e)
                      }))
                    : (s[r] = (0, n.cloneElement)(o, { in: !1 }))
                  : (s[r] = (0, n.cloneElement)(o, {
                      onExited: c.bind(null, o),
                      in: !0,
                      exit: a(o, 'exit', e),
                      enter: a(o, 'enter', e)
                    }));
              }
            }),
            s
          );
        });
      var n = c(2959);
      function r(e, t) {
        var c = Object.create(null);
        return (
          e &&
            n.Children.map(e, function(e) {
              return e;
            }).forEach(function(e) {
              c[e.key] = (function(e) {
                return t && (0, n.isValidElement)(e) ? t(e) : e;
              })(e);
            }),
          c
        );
      }
      function o(e, t) {
        function c(c) {
          return c in t ? t[c] : e[c];
        }
        (e = e || {}), (t = t || {});
        var n,
          r = Object.create(null),
          o = [];
        for (var a in e)
          a in t ? o.length && ((r[a] = o), (o = [])) : o.push(a);
        var l = {};
        for (var s in t) {
          if (r[s])
            for (n = 0; n < r[s].length; n++) {
              var i = r[s][n];
              l[r[s][n]] = c(i);
            }
          l[s] = c(s);
        }
        for (n = 0; n < o.length; n++) l[o[n]] = c(o[n]);
        return l;
      }
      function a(e, t, c) {
        return null != c[t] ? c[t] : e.props[t];
      }
    },
    6530: (e, t, c) => {
      'use strict';
      var n;
      (t.__esModule = !0),
        (t.classNamesShape = t.timeoutsShape = void 0),
        (n = c(3980)) && n.__esModule,
        (t.timeoutsShape = null),
        (t.classNamesShape = null);
    },
    961: e => {
      'use strict';
      var t = Object,
        c = TypeError;
      e.exports = function() {
        if (null != this && this !== t(this))
          throw new c('RegExp.prototype.flags getter called on non-object');
        var e = '';
        return (
          this.global && (e += 'g'),
          this.ignoreCase && (e += 'i'),
          this.multiline && (e += 'm'),
          this.dotAll && (e += 's'),
          this.unicode && (e += 'u'),
          this.sticky && (e += 'y'),
          e
        );
      };
    },
    2201: (e, t, c) => {
      'use strict';
      var n = c(4926),
        r = c(4030),
        o = c(961),
        a = c(4366),
        l = c(698),
        s = r(o);
      n(s, { getPolyfill: a, implementation: o, shim: l }), (e.exports = s);
    },
    4366: (e, t, c) => {
      'use strict';
      var n = c(961),
        r = c(4926).supportsDescriptors,
        o = Object.getOwnPropertyDescriptor,
        a = TypeError;
      e.exports = function() {
        if (!r)
          throw new a(
            'RegExp.prototype.flags requires a true ES5 environment that supports property descriptors'
          );
        if ('gim' === /a/gim.flags) {
          var e = o(RegExp.prototype, 'flags');
          if (e && 'function' == typeof e.get && 'boolean' == typeof /a/.dotAll)
            return e.get;
        }
        return n;
      };
    },
    698: (e, t, c) => {
      'use strict';
      var n = c(4926).supportsDescriptors,
        r = c(4366),
        o = Object.getOwnPropertyDescriptor,
        a = Object.defineProperty,
        l = TypeError,
        s = Object.getPrototypeOf,
        i = /a/;
      e.exports = function() {
        if (!n || !s)
          throw new l(
            'RegExp.prototype.flags requires a true ES5 environment that supports property descriptors'
          );
        var e = r(),
          t = s(i),
          c = o(t, 'flags');
        return (
          (c && c.get === e) ||
            a(t, 'flags', { configurable: !0, enumerable: !1, get: e }),
          e
        );
      };
    }
  }
]);
