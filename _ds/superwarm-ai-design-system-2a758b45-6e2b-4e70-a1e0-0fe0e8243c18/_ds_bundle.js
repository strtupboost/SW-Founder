/* @ds-bundle: {"format":3,"namespace":"SuperWarmAIDesignSystem_2a758b","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Checkbox","sourcePath":"components/core/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"MetricStat","sourcePath":"components/core/MetricStat.jsx"},{"name":"Select","sourcePath":"components/core/Select.jsx"},{"name":"StatusPill","sourcePath":"components/core/StatusPill.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Toggle","sourcePath":"components/core/Toggle.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"3ed637c3bdce","components/core/Badge.jsx":"adc96c8390ed","components/core/Button.jsx":"13fdc7c1ac4c","components/core/Card.jsx":"0d2c40df5314","components/core/Checkbox.jsx":"99d83ae24918","components/core/IconButton.jsx":"a4592a0709da","components/core/Input.jsx":"7682a522a368","components/core/MetricStat.jsx":"34fbc31823dd","components/core/Select.jsx":"e632fe1d6e1e","components/core/StatusPill.jsx":"658e173ddc21","components/core/Tag.jsx":"39e0fbcb0e63","components/core/Toggle.jsx":"ac7947f818d4","ui_kits/investor-dashboard/Dashboard.jsx":"215370aadf8d","ui_kits/investor-dashboard/DealsTable.jsx":"8387bfdc450d","ui_kits/investor-dashboard/GlanceRow.jsx":"b10f629ef89e","ui_kits/investor-dashboard/HeroMatches.jsx":"f1ea1d6608ba","ui_kits/investor-dashboard/Icon.jsx":"dcb9e00566d3","ui_kits/investor-dashboard/NavRail.jsx":"29fdc6756ba0","ui_kits/investor-dashboard/Rails.jsx":"4a4e8f3e00bb","ui_kits/investor-dashboard/TopBar.jsx":"465da19d171f","ui_kits/investor-dashboard/kit-data.js":"9286068118cb"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SuperWarmAIDesignSystem_2a758b = window.SuperWarmAIDesignSystem_2a758b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SuperWarm.AI Avatar. shape: 'circle' (people) | 'square' (startup logo tile).
 * Falls back to initials on a tinted fill when no src.
 */
function Avatar({
  src,
  alt = '',
  name = '',
  size = 36,
  shape = 'circle',
  bg,
  style = {},
  ...rest
}) {
  const radius = shape === 'square' ? 'var(--radius-sm)' : '50%';
  const initials = name ? name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase() : '';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: size,
      height: size,
      flexShrink: 0,
      borderRadius: radius,
      overflow: 'hidden',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: bg || 'var(--blue-075)',
      color: 'var(--blue-600)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-bold)',
      fontSize: Math.max(10, Math.round(size * 0.38)),
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt || name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SuperWarm.AI Badge — compact status/label pill.
 * tone: success | info | danger | warning | neutral
 * fill: 'solid' (colored bg, white text) | 'soft' (tinted bg) | 'outline'
 */
function Badge({
  children,
  tone = 'success',
  fill = 'solid',
  style = {},
  ...rest
}) {
  const palette = {
    success: {
      solid: 'var(--green-500)',
      soft: 'var(--green-050)',
      text: 'var(--green-400)',
      border: 'var(--green-400)'
    },
    info: {
      solid: 'var(--blue-600)',
      soft: 'var(--blue-075)',
      text: 'var(--blue-600)',
      border: 'var(--blue-600)'
    },
    danger: {
      solid: 'var(--red-500)',
      soft: '#fdecec',
      text: 'var(--red-500)',
      border: 'var(--red-500)'
    },
    warning: {
      solid: 'var(--amber-500)',
      soft: 'var(--amber-050)',
      text: 'var(--amber-500)',
      border: 'var(--amber-500)'
    },
    neutral: {
      solid: 'var(--ink-500)',
      soft: 'var(--surface-fill)',
      text: 'var(--ink-400)',
      border: 'var(--border-mid)'
    }
  };
  const p = palette[tone] || palette.success;
  const styles = {
    solid: {
      background: p.solid,
      color: '#fff',
      border: '1px solid ' + p.solid
    },
    soft: {
      background: p.soft,
      color: p.text,
      border: '1px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: p.text,
      border: '1px solid ' + p.border
    }
  };
  const v = styles[fill] || styles.solid;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '3px 11px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-bold)',
      lineHeight: 1,
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...v,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SuperWarm.AI Button.
 * Variants: primary (filled blue), secondary (outlined blue),
 * ghost (text), success (filled green). Sizes: sm | md | lg.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '7px 14px',
      fontSize: 'var(--text-sm)',
      height: 32,
      radius: 'var(--radius-md)'
    },
    md: {
      padding: '10px 20px',
      fontSize: 'var(--text-base)',
      height: 40,
      radius: 'var(--radius-md)'
    },
    lg: {
      padding: '13px 26px',
      fontSize: 'var(--text-lg)',
      height: 48,
      radius: 'var(--radius-md)'
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--text-on-accent)',
      border: '1px solid var(--color-primary)'
    },
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--color-primary)',
      border: '1px solid var(--color-primary)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-link)',
      border: '1px solid transparent'
    },
    success: {
      background: 'var(--green-500)',
      color: 'var(--text-on-accent)',
      border: '1px solid var(--green-500)'
    }
  };
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      width: fullWidth ? '100%' : 'auto',
      minHeight: s.height,
      padding: s.padding,
      fontFamily: 'var(--font-sans)',
      fontSize: s.fontSize,
      fontWeight: 'var(--fw-bold)',
      lineHeight: 1,
      borderRadius: s.radius,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'translateY(1px)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'translateY(0)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SuperWarm.AI Card — white surface, 10px radius, signature soft lift shadow.
 * variant: 'elevated' (shadow) | 'outline' (hairline border) | 'plain'.
 * Hover lift available via `hoverable`.
 */
function Card({
  children,
  variant = 'elevated',
  hoverable = false,
  padding = 'var(--space-5)',
  style = {},
  ...rest
}) {
  const base = {
    elevated: {
      background: 'var(--surface-card)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-card)'
    },
    outline: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-card)',
      boxShadow: 'none'
    },
    plain: {
      background: 'var(--surface-card)',
      border: '1px solid transparent',
      boxShadow: 'none'
    }
  };
  const v = base[variant] || base.elevated;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: 'var(--radius-lg)',
      padding,
      transition: 'box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)',
      ...v,
      ...style
    },
    onMouseEnter: hoverable ? e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-pop)';
      e.currentTarget.style.transform = 'translateY(-2px)';
    } : undefined,
    onMouseLeave: hoverable ? e => {
      e.currentTarget.style.boxShadow = v.boxShadow;
      e.currentTarget.style.transform = 'translateY(0)';
    } : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SuperWarm.AI Checkbox — 20px square, 2px radius, blue-tinted border;
 * checked fills brand blue with a white tick. Matches the deals-table selector.
 */
function Checkbox({
  checked = false,
  onChange,
  disabled = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    role: "checkbox",
    "aria-checked": checked,
    disabled: disabled,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 20,
      height: 20,
      flexShrink: 0,
      padding: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: checked ? 'var(--color-primary)' : 'var(--surface-card)',
      border: '1px solid ' + (checked ? 'var(--color-primary)' : 'var(--border-blue)'),
      borderRadius: 'var(--radius-xs)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--dur-fast), border-color var(--dur-fast)',
      ...style
    }
  }, rest), checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12l5 5 9-10",
    stroke: "#fff",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SuperWarm.AI IconButton — square/circle icon-only control for nav rail,
 * carousels, and toolbar actions.
 * variant: 'ghost' | 'outline' | 'filled'. shape: 'circle' | 'square'.
 */
function IconButton({
  children,
  variant = 'ghost',
  shape = 'circle',
  size = 40,
  active = false,
  style = {},
  ...rest
}) {
  const variants = {
    ghost: {
      background: active ? 'var(--blue-075)' : 'transparent',
      border: '1px solid transparent',
      color: active ? 'var(--color-primary)' : 'var(--ink-500)'
    },
    outline: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-card)',
      color: 'var(--ink-500)'
    },
    filled: {
      background: 'var(--color-primary)',
      border: '1px solid var(--color-primary)',
      color: '#fff'
    }
  };
  const v = variants[variant] || variants.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    style: {
      width: size,
      height: size,
      flexShrink: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      borderRadius: shape === 'circle' ? '50%' : 'var(--radius-md)',
      cursor: 'pointer',
      transition: 'background var(--dur-base), color var(--dur-base)',
      ...v,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SuperWarm.AI Input — text field with optional leading icon and trailing slot.
 * Rounded, hairline border, soft blue focus ring.
 */
function Input({
  iconLeft = null,
  trailing = null,
  size = 'md',
  style = {},
  containerStyle = {},
  ...rest
}) {
  const heights = {
    sm: 36,
    md: 44,
    lg: 52
  };
  const h = heights[size] || heights.md;
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: h,
      padding: '0 14px',
      background: 'var(--surface-card)',
      border: '1px solid ' + (focused ? 'var(--color-primary)' : 'var(--border-input)'),
      borderRadius: 'var(--radius-md)',
      boxShadow: focused ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--dur-base), box-shadow var(--dur-base)',
      ...containerStyle
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--ink-200)',
      flexShrink: 0
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    onFocus: e => {
      setFocused(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      ...style
    }
  }, rest)), trailing && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexShrink: 0
    }
  }, trailing));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/MetricStat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SuperWarm.AI MetricStat — large headline figure with caption and optional
 * delta. Powers "Deals at a glance" stat cards.
 */
function MetricStat({
  label,
  value,
  caption,
  delta,
  deltaDirection = 'up',
  valueColor = 'var(--ink-900)',
  style = {},
  ...rest
}) {
  const up = deltaDirection === 'up';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-data)',
      fontSize: 'var(--text-stat)',
      fontWeight: 'var(--fw-bold)',
      lineHeight: 1,
      color: valueColor,
      fontVariantNumeric: 'tabular-nums'
    }
  }, value), delta != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      paddingBottom: 4,
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--fw-bold)',
      color: up ? 'var(--green-400)' : 'var(--red-500)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, up ? '▲' : '▼'), delta)), caption && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, caption));
}
Object.assign(__ds_scope, { MetricStat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/MetricStat.jsx", error: String((e && e.message) || e) }); }

// components/core/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SuperWarm.AI Select — native dropdown styled to match Input, with optional
 * label above (the filter row uses "Vertical", "Stage", "Valuation" labels).
 */
function Select({
  label,
  options = [],
  value,
  onChange,
  size = 'md',
  style = {},
  containerStyle = {},
  ...rest
}) {
  const heights = {
    sm: 36,
    md: 44,
    lg: 52
  };
  const h = heights[size] || heights.md;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: 6,
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    value: value,
    onChange: onChange,
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: h,
      padding: '0 38px 0 14px',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-input)',
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      cursor: 'pointer',
      outline: 'none',
      ...style
    }
  }, rest), options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6",
    stroke: "var(--ink-500)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Select.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TrendingArrow = ({
  color
}) => /*#__PURE__*/React.createElement("svg", {
  width: "15",
  height: "10",
  viewBox: "0 0 18.157 11.5",
  fill: color,
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M 13 0.75 C 13 0.336 13.336 0 13.75 0 L 17.601 0 L 18.15 3.876 C 18.208 4.286 17.922 4.665 17.512 4.723 C 17.102 4.781 16.723 4.496 16.665 4.086 L 16.441 2.504 L 10.856 9.082 L 6.787 5.07 L 1.311 11.247 C 1.037 11.557 0.563 11.586 0.253 11.311 C -0.057 11.036 -0.086 10.563 0.189 10.253 L 6.713 2.891 L 10.758 6.879 L 15.325 1.5 L 13.75 1.5 C 13.336 1.5 13 1.164 13 0.75 Z",
  fillRule: "evenodd"
}));
const Flame = ({
  color
}) => /*#__PURE__*/React.createElement("svg", {
  width: "12",
  height: "14",
  viewBox: "0 0 24 24",
  fill: color,
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 2c0 4-5 5-5 10a5 5 0 0010 0c0-2-1-3-1.5-4-.6 1.2-1.5 1.5-1.5 1.5.5-3-2-5-2-7.5zM10.5 17.5A2 2 0 0114 16c-.2 1 .5 1.5.5 2.5a2 2 0 01-4 0c0-.6.4-.8 1-1z"
}));

/**
 * SuperWarm.AI StatusPill — state chip with a leading icon.
 * variant: 'trending' | 'hot' (predefined) — or pass custom `icon` + `label`.
 */
function StatusPill({
  variant = 'trending',
  label,
  icon,
  style = {},
  ...rest
}) {
  const presets = {
    trending: {
      label: 'Trending',
      node: /*#__PURE__*/React.createElement(TrendingArrow, {
        color: "var(--green-500)"
      })
    },
    hot: {
      label: 'Hot',
      node: /*#__PURE__*/React.createElement(Flame, {
        color: "#f4683b"
      })
    }
  };
  const p = presets[variant] || presets.trending;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 12px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      lineHeight: 1,
      color: 'var(--ink-400)',
      background: 'var(--surface-fill)',
      border: '1px solid var(--border-mid)',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), icon || p.node, label || p.label);
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SuperWarm.AI Tag — thin outlined domain/industry label
 * (HealthTech, AI, SaaS, Fintech, Series A …). Fully rounded, hairline border.
 */
function Tag({
  children,
  color = 'var(--ink-500)',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '3px 12px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      lineHeight: 1.3,
      color: color,
      background: 'transparent',
      border: '1px solid ' + color,
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/Toggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SuperWarm.AI Toggle — pill switch. ON track is brand mint-green with an
 * inline "ON" label, matching the SMS-updates control.
 */
function Toggle({
  checked = false,
  onChange,
  showLabel = true,
  disabled = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    role: "switch",
    "aria-checked": checked,
    disabled: disabled,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      position: 'relative',
      width: 59,
      height: 24,
      flexShrink: 0,
      padding: 0,
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--mint-400)' : 'var(--border-mid)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--dur-base) var(--ease-standard)',
      ...style
    }
  }, rest), showLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: checked ? 9 : 'auto',
      right: checked ? 'auto' : 10,
      display: 'flex',
      alignItems: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-bold)',
      color: checked ? 'var(--ink-700)' : 'var(--ink-300)',
      lineHeight: 1
    }
  }, checked ? 'ON' : 'OFF'), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 38 : 3,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
      transition: 'left var(--dur-base) var(--ease-standard)'
    }
  }));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Toggle.jsx", error: String((e && e.message) || e) }); }

// ui_kits/investor-dashboard/Dashboard.jsx
try { (() => {
// SuperWarm.AI kit — Dashboard composition + toast
function Toast({
  msg
}) {
  if (!msg) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 28,
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--ink-900)',
      color: '#fff',
      padding: '12px 20px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 14,
      fontWeight: 600,
      boxShadow: 'var(--shadow-pop)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      animation: 'swToastIn 240ms cubic-bezier(0.16,1,0.3,1)'
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    n: "Sparkles",
    s: 16,
    c: "var(--mint-400)"
  }), msg);
}
function Dashboard() {
  const D = window.SWData;
  const [matches, setMatches] = React.useState(D.topMatches);
  const [toast, setToast] = React.useState('');
  const tRef = React.useRef(null);
  const say = msg => {
    setToast(msg);
    clearTimeout(tRef.current);
    tRef.current = setTimeout(() => setToast(''), 2600);
  };
  const skip = id => setMatches(m => m.filter(x => x.id !== id));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100vh',
      overflow: 'hidden',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(window.NavRail, null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(window.TopBar, {
    user: D.user,
    onAsk: q => say('Asked SuperWarm AI: \u201C' + q + '\u201D')
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1340,
      margin: '0 auto',
      padding: '28px 32px 80px',
      display: 'flex',
      flexDirection: 'column',
      gap: 44
    }
  }, /*#__PURE__*/React.createElement(window.HeroMatches, {
    user: D.user,
    matches: matches,
    onSkip: skip,
    onRequest: n => say('Meeting requested with ' + n)
  }), /*#__PURE__*/React.createElement(window.GlanceRow, {
    glance: D.glance,
    onReview: () => say('Opening deals to review…')
  }), /*#__PURE__*/React.createElement(window.TrendingRail, {
    items: D.trending,
    onOpen: n => say('Opening ' + n)
  }), /*#__PURE__*/React.createElement(window.RecommendationsRail, {
    items: D.recommendations,
    onOpen: n => say('Opening ' + n)
  }), /*#__PURE__*/React.createElement(window.DealsTable, {
    deals: D.deals,
    onOpen: n => say('Opening ' + n),
    onToast: say
  })))), /*#__PURE__*/React.createElement(Toast, {
    msg: toast
  }));
}
window.Dashboard = Dashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/investor-dashboard/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/investor-dashboard/DealsTable.jsx
try { (() => {
// SuperWarm.AI kit — "Your active deals" filterable table
const {
  Card,
  Input,
  Select,
  Button,
  Checkbox,
  Badge,
  Tag,
  StatusPill,
  Avatar
} = window.SuperWarmAIDesignSystem_2a758b;
function DealRow({
  d,
  checked,
  onCheck,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "sw-row",
    style: {
      display: 'grid',
      gridTemplateColumns: '40px 1.6fr 1fr 0.8fr 1fr 1.5fr 0.9fr 1.1fr 1fr 1.1fr 40px',
      alignItems: 'center',
      gap: 8,
      padding: '16px 8px',
      borderBottom: '1px solid var(--border-strong)',
      cursor: 'pointer'
    },
    onClick: onOpen
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => {
      e.stopPropagation();
      onCheck();
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: checked,
    onChange: onCheck
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      minWidth: 0
    }
  }, d.logo ? /*#__PURE__*/React.createElement(Avatar, {
    src: d.logo,
    name: d.name,
    shape: "square",
    size: 36,
    style: {
      background: d.logoBg || '#fff',
      border: '1px solid var(--border-soft)'
    }
  }) : /*#__PURE__*/React.createElement(Avatar, {
    name: d.initials || d.name,
    shape: "square",
    size: 36,
    bg: d.logoBg,
    style: {
      color: d.logoColor
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--ink-700)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, d.name)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StatusPill, {
    variant: d.state
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, d.matched, "%")), /*#__PURE__*/React.createElement("div", null, d.status === 'Reviewed' ? /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "Reviewed") : /*#__PURE__*/React.createElement(Badge, {
    tone: "warning",
    fill: "solid",
    style: {
      color: '#fff'
    }
  }, "Pending")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, d.industry.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    style: {
      fontSize: 11,
      padding: '2px 9px'
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--ink-600)'
    }
  }, d.stage), /*#__PURE__*/React.createElement("div", {
    className: "sw-figure",
    style: {
      fontSize: 14
    }
  }, d.raised), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--blue-500)'
    }
  }, d.valuation), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--ink-600)'
    }
  }, d.seeking), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    n: "ChevronRight",
    s: 16,
    c: "var(--ink-550)"
  })));
}
function DealsTable({
  deals,
  onOpen,
  onToast
}) {
  const [sel, setSel] = React.useState({});
  const allOn = deals.length > 0 && deals.every(d => sel[d.name]);
  const toggleAll = () => {
    const next = {};
    if (!allOn) deals.forEach(d => next[d.name] = true);
    setSel(next);
  };
  const cols = ['Startup name', 'State', 'Matched', 'Status', 'Industry', 'Stage', 'Amount raised', 'Valuation range', 'Seeking toward'];
  const sortable = {
    State: 1,
    Status: 1,
    Industry: 1,
    Stage: 1,
    'Amount raised': 1,
    'Valuation range': 1
  };
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-h2)',
      fontWeight: 700,
      color: 'var(--ink-900)',
      marginBottom: 16,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, "Your active deals in", /*#__PURE__*/React.createElement(Tag, {
    style: {
      fontSize: 13
    }
  }, "HealthTech"), /*#__PURE__*/React.createElement(Tag, {
    style: {
      fontSize: 13
    }
  }, "AI"), /*#__PURE__*/React.createElement(Tag, {
    style: {
      fontSize: 13
    }
  }, "SaaS")), /*#__PURE__*/React.createElement(Card, {
    variant: "elevated",
    padding: "22px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 14,
      flexWrap: 'wrap',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 220px',
      minWidth: 200
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      marginBottom: 6
    }
  }, "Select Investor"), /*#__PURE__*/React.createElement(Input, {
    iconLeft: /*#__PURE__*/React.createElement(window.Icon, {
      n: "Search",
      s: 18,
      c: "var(--ink-200)"
    }),
    placeholder: "Search startup"
  })), /*#__PURE__*/React.createElement(Select, {
    label: "Vertical",
    options: ['All', 'HealthTech', 'Fintech', 'SaaS'],
    containerStyle: {
      flex: '1 1 130px'
    }
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Stage",
    options: ['All', 'Pre-Seed', 'Seed', 'Series A'],
    containerStyle: {
      flex: '1 1 130px'
    }
  }), /*#__PURE__*/React.createElement(Select, {
    label: "target investment ammount",
    options: ['All', '$500K', '$1M', '$5M'],
    containerStyle: {
      flex: '1 1 160px'
    }
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Valuation",
    options: ['All', 'Up to $5M', 'Up to $10M'],
    containerStyle: {
      flex: '1 1 130px'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(window.Icon, {
      n: "SlidersHorizontal",
      s: 16
    }),
    style: {
      borderColor: 'var(--border-strong)',
      color: 'var(--ink-600)'
    }
  }, "Advance Filter")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '40px 1.6fr 1fr 0.8fr 1fr 1.5fr 0.9fr 1.1fr 1fr 1.1fr 40px',
      alignItems: 'center',
      gap: 8,
      padding: '12px 8px',
      background: 'var(--surface-header)',
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Checkbox, {
    checked: allOn,
    onChange: toggleAll
  })), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--ink-600)'
    }
  }, c, sortable[c] && /*#__PURE__*/React.createElement(window.Icon, {
    n: "ChevronDown",
    s: 13,
    c: "var(--ink-400)"
  }))), /*#__PURE__*/React.createElement("div", null)), deals.map(d => /*#__PURE__*/React.createElement(DealRow, {
    key: d.name,
    d: d,
    checked: !!sel[d.name],
    onCheck: () => setSel(s => ({
      ...s,
      [d.name]: !s[d.name]
    })),
    onOpen: () => onOpen(d.name)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onToast && onToast('Loading 120 more deals…'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--ink-600)',
      fontFamily: 'var(--font-sans)'
    }
  }, "View more active details (120)"))));
}
window.DealsTable = DealsTable;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/investor-dashboard/DealsTable.jsx", error: String((e && e.message) || e) }); }

// ui_kits/investor-dashboard/GlanceRow.jsx
try { (() => {
// SuperWarm.AI kit — "Deals at a glance" stat row + stage bar chart
const {
  Card,
  MetricStat,
  Button,
  Select
} = window.SuperWarmAIDesignSystem_2a758b;
function StageChart({
  stages
}) {
  const max = Math.max(...stages.map(s => s.value));
  return /*#__PURE__*/React.createElement(Card, {
    variant: "elevated",
    padding: "18px",
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, "Startups by"), /*#__PURE__*/React.createElement(Select, {
    options: ['Stages', 'Industry', 'Geography'],
    size: "sm",
    containerStyle: {
      width: 110
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 8,
      minHeight: 120
    }
  }, stages.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      height: '100%',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--ink-700)'
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '78%',
      height: s.value / max * 108,
      background: s.color,
      borderRadius: '6px 6px 0 0'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-muted)',
      textAlign: 'center'
    }
  }, s.label)))));
}
function GlanceRow({
  glance,
  onReview
}) {
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-h2)',
      fontWeight: 700,
      color: 'var(--ink-900)',
      marginBottom: 16
    }
  }, "Deals at a glance"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "elevated",
    padding: "20px"
  }, /*#__PURE__*/React.createElement(MetricStat, {
    label: "Deals in funnel",
    value: glance.funnel.value,
    caption: glance.funnel.caption,
    delta: glance.funnel.delta
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, "previous week")), /*#__PURE__*/React.createElement(Card, {
    variant: "elevated",
    padding: "20px",
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, "Deals reviewed"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-data)',
      fontSize: 'var(--text-stat)',
      fontWeight: 700,
      lineHeight: 1,
      color: 'var(--ink-900)',
      margin: '10px 0'
    }
  }, glance.reviewed.value), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8,
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--amber-500)'
    }
  }, glance.reviewed.pending, " deals pending"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: onReview,
    iconRight: /*#__PURE__*/React.createElement(window.Icon, {
      n: "ChevronRight",
      s: 15
    }),
    style: {
      border: '1px solid var(--border-strong)',
      color: 'var(--ink-600)',
      padding: '6px 12px'
    }
  }, "Review now"))), /*#__PURE__*/React.createElement(Card, {
    variant: "elevated",
    padding: "20px"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, "Deals status"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 0,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--ink-700)',
      marginBottom: 8
    }
  }, "Rejected"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-data)',
      fontSize: 40,
      fontWeight: 700,
      lineHeight: 1,
      color: 'var(--red-500)'
    }
  }, glance.status.rejected)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      background: 'var(--border-strong)',
      margin: '0 16px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--ink-700)',
      marginBottom: 8
    }
  }, "Accepted"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-data)',
      fontSize: 40,
      fontWeight: 700,
      lineHeight: 1,
      color: 'var(--green-400)'
    }
  }, glance.status.accepted)))), /*#__PURE__*/React.createElement(StageChart, {
    stages: glance.stages
  })));
}
window.GlanceRow = GlanceRow;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/investor-dashboard/GlanceRow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/investor-dashboard/HeroMatches.jsx
try { (() => {
// SuperWarm.AI kit — Hero: welcome banner + AI top-match cards
const {
  Card,
  Button,
  Tag,
  Toggle,
  Avatar
} = window.SuperWarmAIDesignSystem_2a758b;
function MatchCard({
  m,
  onSkip,
  onRequest
}) {
  return /*#__PURE__*/React.createElement(Card, {
    variant: "elevated",
    hoverable: true,
    padding: "18px",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12
    }
  }, m.logo ? /*#__PURE__*/React.createElement(Avatar, {
    src: m.logo,
    name: m.name,
    shape: "square",
    size: 44
  }) : /*#__PURE__*/React.createElement(Avatar, {
    name: m.initials || m.name,
    shape: "square",
    size: 44,
    bg: m.logoBg,
    style: {
      color: m.logoColor
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--ink-700)'
    }
  }, m.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, m.url)), /*#__PURE__*/React.createElement("button", {
    onClick: onSkip,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: 13,
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-sans)'
    }
  }, "Skip")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, m.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    style: {
      fontSize: 11,
      padding: '2px 9px'
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      marginBottom: 3
    }
  }, "Check Size"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--ink-600)'
    }
  }, m.check)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      marginBottom: 3
    }
  }, "Activity"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--ink-600)'
    }
  }, m.activity))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    fullWidth: true,
    onClick: onRequest
  }, "Request Meeting"));
}
function HeroMatches({
  user,
  matches,
  onSkip,
  onRequest
}) {
  const [sms, setSms] = React.useState(true);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-2xl)',
      background: 'var(--surface-subtle)',
      overflow: 'hidden',
      padding: '28px 32px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: -90,
      top: -200,
      width: 380,
      height: 380,
      borderRadius: '50%',
      background: 'var(--blue-150)',
      filter: 'blur(8px)',
      opacity: 0.7
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -160,
      bottom: -360,
      width: 720,
      height: 720,
      borderRadius: '50%',
      background: 'var(--blue-100)',
      filter: 'blur(10px)',
      opacity: 0.55
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-h1)',
      fontWeight: 800,
      color: 'var(--ink-900)'
    }
  }, "Welcome back Investor ", user.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    n: "Info",
    s: 16,
    c: "var(--ink-300)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--ink-800)'
    }
  }, "Want instant text updates on investor matches?"), /*#__PURE__*/React.createElement(Toggle, {
    checked: sms,
    onChange: setSms
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--ink-700)',
      margin: '20px 0 14px'
    }
  }, "AI's Top Startup Match"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 18
    }
  }, matches.map(m => /*#__PURE__*/React.createElement(MatchCard, {
    key: m.id,
    m: m,
    onSkip: () => onSkip(m.id),
    onRequest: () => onRequest(m.name)
  })))));
}
window.HeroMatches = HeroMatches;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/investor-dashboard/HeroMatches.jsx", error: String((e && e.message) || e) }); }

// ui_kits/investor-dashboard/Icon.jsx
try { (() => {
// SuperWarm.AI kit — Lucide icon helper. Exposes window.Icon.
function Icon({
  n,
  s = 18,
  c = 'currentColor',
  strokeWidth = 2,
  style
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current || !window.lucide || !lucide[n]) return;
    ref.current.innerHTML = '';
    const el = lucide.createElement(lucide[n]);
    el.setAttribute('width', s);
    el.setAttribute('height', s);
    el.setAttribute('stroke', c);
    el.setAttribute('stroke-width', strokeWidth);
    ref.current.appendChild(el);
  }, [n, s, c, strokeWidth]);
  return React.createElement('span', {
    ref,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      ...style
    }
  });
}
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/investor-dashboard/Icon.jsx", error: String((e && e.message) || e) }); }

// ui_kits/investor-dashboard/NavRail.jsx
try { (() => {
// SuperWarm.AI kit — Left icon navigation rail
const {
  IconButton
} = window.SuperWarmAIDesignSystem_2a758b;
function NavRail() {
  const items = [{
    icon: 'LayoutGrid',
    label: 'Dashboard'
  }, {
    icon: 'History',
    label: 'Activity'
  }, {
    icon: 'Users',
    label: 'Investors'
  }, {
    icon: 'Calendar',
    label: 'Calendar'
  }, {
    icon: 'Share2',
    label: 'Referrals'
  }];
  const [active, setActive] = React.useState(0);
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      width: 'var(--rail-width)',
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 14,
      padding: '32px 0',
      background: '#fff',
      borderRight: '1px solid var(--border-soft)'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(IconButton, {
    key: it.label,
    active: i === active,
    title: it.label,
    onClick: () => setActive(i),
    shape: "square",
    size: 42
  }, /*#__PURE__*/React.createElement(window.Icon, {
    n: it.icon,
    s: 21,
    c: i === active ? 'var(--blue-600)' : 'var(--ink-400)'
  }))));
}
window.NavRail = NavRail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/investor-dashboard/NavRail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/investor-dashboard/Rails.jsx
try { (() => {
// SuperWarm.AI kit — Trending deals + Investor recommendations rails
const {
  Card,
  Tag,
  Avatar,
  IconButton
} = window.SuperWarmAIDesignSystem_2a758b;
function SectionHead({
  title,
  subtitle,
  onPrev,
  onNext
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-h2)',
      fontWeight: 700,
      color: 'var(--ink-900)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, subtitle)));
}
function TrendingCard({
  d,
  onOpen
}) {
  return /*#__PURE__*/React.createElement(Card, {
    variant: "elevated",
    hoverable: true,
    padding: "18px",
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--green-400)',
      marginBottom: 8
    }
  }, d.match), /*#__PURE__*/React.createElement("button", {
    onClick: onOpen,
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: 'var(--ink-700)'
    }
  }, d.name), /*#__PURE__*/React.createElement(window.Icon, {
    n: "ExternalLink",
    s: 15,
    c: "var(--blue-500)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    style: {
      fontSize: 11,
      padding: '2px 9px'
    }
  }, d.tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      marginBottom: 3
    }
  }, "Amount raised"), /*#__PURE__*/React.createElement("div", {
    className: "sw-figure",
    style: {
      fontSize: 15
    }
  }, d.raised)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      marginBottom: 3
    }
  }, "Stage"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--ink-700)'
    }
  }, d.stage))));
}
function RecCard({
  r,
  onOpen
}) {
  return /*#__PURE__*/React.createElement(Card, {
    variant: "elevated",
    hoverable: true,
    padding: "18px",
    style: {
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: r.avatar,
    name: r.rec,
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, r.rec)), /*#__PURE__*/React.createElement("button", {
    onClick: onOpen,
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: 'var(--ink-700)'
    }
  }, r.name), /*#__PURE__*/React.createElement(window.Icon, {
    n: "ExternalLink",
    s: 15,
    c: "var(--blue-500)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      marginBottom: 3
    }
  }, "Amount raised"), /*#__PURE__*/React.createElement("div", {
    className: "sw-figure",
    style: {
      fontSize: 15
    }
  }, r.raised)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      marginBottom: 3
    }
  }, "Stage"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--ink-700)'
    }
  }, r.stage))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      marginBottom: 3
    }
  }, "Growth"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--ink-600)'
    }
  }, r.growth)), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-soft)',
      paddingTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      marginBottom: 4
    }
  }, "AI generated summary"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-600)',
      lineHeight: 1.45,
      minHeight: 56
    }
  }, r.summary), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 10,
      color: 'var(--green-400)',
      fontWeight: 700,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    n: "TrendingUp",
    s: 16,
    c: "var(--green-400)"
  }), r.verdict)));
}
function Rail({
  title,
  subtitle,
  items,
  render
}) {
  const scroller = React.useRef(null);
  const scroll = dir => {
    if (scroller.current) scroller.current.scrollBy({
      left: dir * 340,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(SectionHead, {
    title: title,
    subtitle: subtitle
  }), /*#__PURE__*/React.createElement("div", {
    ref: scroller,
    style: {
      display: 'grid',
      gridAutoFlow: 'column',
      gridAutoColumns: 'minmax(0, 1fr)',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 18,
      overflowX: 'auto',
      paddingBottom: 4,
      scrollbarWidth: 'none'
    }
  }, items.map((it, i) => render(it, i))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "outline",
    onClick: () => scroll(-1)
  }, /*#__PURE__*/React.createElement(window.Icon, {
    n: "ChevronLeft",
    s: 18,
    c: "var(--ink-500)"
  })), /*#__PURE__*/React.createElement(IconButton, {
    variant: "outline",
    onClick: () => scroll(1)
  }, /*#__PURE__*/React.createElement(window.Icon, {
    n: "ChevronRight",
    s: 18,
    c: "var(--ink-500)"
  }))));
}
function TrendingRail({
  items,
  onOpen
}) {
  return /*#__PURE__*/React.createElement(Rail, {
    title: "Trending deals added this week",
    subtitle: "AI recommended startups based on your preferences",
    items: items,
    render: (d, i) => /*#__PURE__*/React.createElement(TrendingCard, {
      key: i,
      d: d,
      onOpen: () => onOpen(d.name)
    })
  });
}
function RecommendationsRail({
  items,
  onOpen
}) {
  return /*#__PURE__*/React.createElement(Rail, {
    title: "Investor recommendations",
    subtitle: "Recommended by top investors in your network.",
    items: items,
    render: (r, i) => /*#__PURE__*/React.createElement(RecCard, {
      key: i,
      r: r,
      onOpen: () => onOpen(r.name)
    })
  });
}
window.TrendingRail = TrendingRail;
window.RecommendationsRail = RecommendationsRail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/investor-dashboard/Rails.jsx", error: String((e && e.message) || e) }); }

// ui_kits/investor-dashboard/TopBar.jsx
try { (() => {
// SuperWarm.AI kit — Top navigation bar
const {
  Input,
  IconButton,
  Avatar,
  Button
} = window.SuperWarmAIDesignSystem_2a758b;
function TopBar({
  user,
  onAsk
}) {
  const [q, setQ] = React.useState('');
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 'var(--nav-height)',
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      padding: '0 28px',
      background: '#fff',
      borderBottom: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 20,
      color: 'var(--ink-900)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800
    }
  }, "Super"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400
    }
  }, "Warm.AI")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      maxWidth: 720,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    value: q,
    onChange: e => setQ(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter' && q.trim()) {
        onAsk && onAsk(q);
        setQ('');
      }
    },
    placeholder: "Ask SuperWarm AI",
    iconLeft: /*#__PURE__*/React.createElement(window.Icon, {
      n: "Sparkles",
      s: 18,
      c: "var(--blue-500)"
    }),
    containerStyle: {
      borderColor: 'var(--border-blue)',
      background: '#fff'
    },
    trailing: /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(window.Icon, {
      n: "Paperclip",
      s: 18,
      c: "var(--ink-300)"
    }), /*#__PURE__*/React.createElement(IconButton, {
      variant: "ghost",
      size: 28,
      onClick: () => {
        if (q.trim()) {
          onAsk && onAsk(q);
          setQ('');
        }
      }
    }, /*#__PURE__*/React.createElement(window.Icon, {
      n: "SendHorizontal",
      s: 18,
      c: "var(--blue-500)"
    })))
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(window.Icon, {
      n: "Link2",
      s: 16
    }),
    style: {
      borderColor: 'var(--border-strong)',
      color: 'var(--ink-600)'
    }
  }, "Deal flow link"), /*#__PURE__*/React.createElement(IconButton, null, /*#__PURE__*/React.createElement(window.Icon, {
    n: "CircleHelp",
    s: 20,
    c: "var(--ink-500)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(IconButton, null, /*#__PURE__*/React.createElement(window.Icon, {
    n: "Bell",
    s: 20,
    c: "var(--ink-500)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 8,
      right: 9,
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--red-500)',
      border: '1.5px solid #fff'
    }
  })), /*#__PURE__*/React.createElement(Avatar, {
    src: user.avatar,
    name: user.name,
    size: 40
  })));
}
window.TopBar = TopBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/investor-dashboard/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/investor-dashboard/kit-data.js
try { (() => {
// SuperWarm.AI — investor dashboard mock data
window.SWData = {
  user: {
    name: 'Isabelle Morgan',
    avatar: '../../assets/avatars/isabelle.png'
  },
  topMatches: [{
    id: 'neatsy',
    name: 'Neatsy.ai',
    url: 'www.neatsy.ai',
    logo: '../../assets/logos/neatsy.png',
    tags: ['Fintech', 'SaaS', 'Healthtech'],
    stageTag: 'Series A-B',
    check: '$1M – $2.5M',
    activity: '3 deals in last 6 months'
  }, {
    id: 'spring',
    name: 'Spring Health',
    url: 'www.springhealth.com',
    logoBg: '#e8f8ec',
    logoColor: '#0c9b53',
    initials: 'S',
    tags: ['Healthtech', 'AI', 'Series A-B'],
    check: '$500K – $1.5M',
    activity: '4 angel deals in 2024'
  }, {
    id: 'schedx',
    name: 'SchedX',
    url: 'www.schedx.ai',
    logoBg: '#1d2433',
    logoColor: '#7aa2ff',
    initials: 'Sx',
    tags: ['DeepTech', 'SaaS', 'Healthtech', 'Pre-seed–Seed'],
    check: '$150K – $500K',
    activity: 'Closed 1 BioAI last month'
  }, {
    id: 'aidy',
    name: 'Aidy',
    url: 'www.aidy.com',
    logoBg: '#eaf0ff',
    logoColor: '#2a4aff',
    initials: 'A',
    tags: ['EdTech', 'SaaS', 'Seed'],
    check: '$1M – $3M',
    activity: '2 investments in Q1'
  }],
  glance: {
    funnel: {
      value: 34,
      caption: '7 new deals added today',
      delta: '57%'
    },
    reviewed: {
      value: 26,
      pending: 8
    },
    status: {
      rejected: 7,
      accepted: 19
    },
    stages: [{
      label: 'Pre-Seed',
      value: 160,
      color: 'var(--chart-preseed)'
    }, {
      label: 'Seed',
      value: 200,
      color: 'var(--chart-seed)'
    }, {
      label: 'Series A',
      value: 60,
      color: 'var(--chart-seriesa)'
    }, {
      label: 'Series B',
      value: 220,
      color: 'var(--chart-seriesb)'
    }, {
      label: 'Series C',
      value: 178,
      color: 'var(--chart-seriesc)'
    }]
  },
  trending: [{
    name: 'Neatsy.ai',
    match: '100% matched',
    tag: 'HealthTech',
    raised: '$2M',
    stage: 'Pre-Seed'
  }, {
    name: 'UpBrains AI',
    match: '100% matched',
    tag: 'HealthTech',
    raised: '$1M',
    stage: 'Series A'
  }, {
    name: 'Lockstry',
    match: '98% matched',
    tag: 'HealthTech',
    raised: '$1M',
    stage: 'Seed'
  }, {
    name: 'Prosperousprocess',
    match: '98% matched',
    tag: 'HealthTech',
    raised: '$1M',
    stage: 'Pre-Seed'
  }],
  recommendations: [{
    rec: 'Sarah K., Angel Investor',
    avatar: '../../assets/avatars/isabelle.png',
    name: 'FinX AI',
    raised: '$2M',
    stage: 'Pre-Seed',
    growth: '$500K ARR, 30% MoM',
    summary: 'Strong AI-driven fraud detection in fintech. Early traction with major banks.',
    verdict: 'Strong Market Fit'
  }, {
    rec: 'Rahul M., VC Partner',
    avatar: '../../assets/avatars/rahul.png',
    name: 'AgriNext',
    raised: '$5M',
    stage: 'Series A',
    growth: 'Profitable in 2 yrs',
    summary: 'Smart irrigation, strong patents, gov\u2019t partnerships',
    verdict: 'Rapid Scaling'
  }, {
    rec: 'David L., Healthcare VC',
    avatar: '../../assets/avatars/david.png',
    name: 'QuantumCompute',
    raised: '$2M',
    stage: 'Series B',
    growth: 'Partnered with 80+ hospitals',
    summary: 'AI-powered diagnostics reducing hospital costs by 30%',
    verdict: 'Highly Trustworthy'
  }, {
    rec: 'Anita P., E-commerce Angel',
    avatar: '../../assets/avatars/anita.png',
    name: 'ShopSphere',
    raised: '$1M',
    stage: 'Seed Round',
    growth: '500K+ users | $2M GMV',
    summary: 'Personalized shopping AI with 5x user engagement growth',
    verdict: 'High Investment Potential'
  }],
  deals: [{
    name: 'Neatsy.ai',
    logo: '../../assets/logos/neatsy.png',
    state: 'trending',
    matched: 100,
    status: 'Reviewed',
    industry: ['HealthTech', 'AI'],
    stage: 'Seed',
    raised: '$500,000',
    valuation: 'Up to $5M',
    seeking: 'Follow-On'
  }, {
    name: 'Taktile',
    initials: 'Y',
    logoBg: '#2a4aff',
    logoColor: '#fff',
    state: 'trending',
    matched: 100,
    status: 'Pending',
    industry: ['Generative AI', 'SaaS'],
    stage: 'Seed',
    raised: '$500,000',
    valuation: 'Up to $5M',
    seeking: 'Follow-On'
  }, {
    name: 'RenoFi',
    logo: '../../assets/logos/renofi.png',
    logoBg: '#fff',
    state: 'hot',
    matched: 90,
    status: 'Pending',
    industry: ['HealthTech', 'AI'],
    stage: 'Seed',
    raised: '$21.2M',
    valuation: 'Up to $5M',
    seeking: 'Follow-On'
  }, {
    name: 'Zkopru',
    logo: '../../assets/logos/zkopru.png',
    state: 'trending',
    matched: 90,
    status: 'Reviewed',
    industry: ['SaaS', 'AI'],
    stage: 'Seed',
    raised: '$500,000',
    valuation: 'Up to $5M',
    seeking: 'Follow-On'
  }, {
    name: 'Bayzat',
    initials: 'B',
    logoBg: '#6b4ce6',
    logoColor: '#fff',
    state: 'trending',
    matched: 80,
    status: 'Reviewed',
    industry: ['HealthTech', 'AI'],
    stage: 'Seed',
    raised: '$500,000',
    valuation: 'Up to $5M',
    seeking: 'Follow-On'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/investor-dashboard/kit-data.js", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.MetricStat = __ds_scope.MetricStat;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toggle = __ds_scope.Toggle;

})();
