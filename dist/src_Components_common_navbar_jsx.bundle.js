"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkecommerce"] = self["webpackChunkecommerce"] || []).push([["src_Components_common_navbar_jsx"],{

/***/ "./src/Components/common/navbar.jsx":
/*!******************************************!*\
  !*** ./src/Components/common/navbar.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_mode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contexts/mode */ \"./src/contexts/mode.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/InputBase/InputBase.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Menu/Menu.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/MenuItem/MenuItem.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/IconButton/IconButton.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Badge/Badge.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/AppBar/AppBar.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Toolbar/Toolbar.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/styled.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/system/esm/colorManipulator.js\");\n/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material */ \"./node_modules/@mui/icons-material/esm/ShoppingCart.js\");\n/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material */ \"./node_modules/@mui/icons-material/esm/Store.js\");\n/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material */ \"./node_modules/@mui/icons-material/esm/AccountCircle.js\");\n/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/icons-material */ \"./node_modules/@mui/icons-material/esm/Cloud.js\");\n/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/icons-material */ \"./node_modules/@mui/icons-material/esm/Search.js\");\n/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/icons-material */ \"./node_modules/@mui/icons-material/esm/More.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ \"./src/styles/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nvar SearchInput = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('div')(function (_ref) {\n  var theme = _ref.theme;\n  return _defineProperty({\n    position: 'relative',\n    borderRadius: theme.shape.borderRadius,\n    backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.alpha)(theme.palette.common.white, 0.15),\n    '&:hover': {\n      backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.alpha)(theme.palette.common.white, 0.25)\n    },\n    marginRight: theme.spacing(2),\n    marginLeft: 0,\n    width: '100%'\n  }, theme.breakpoints.up('sm'), {\n    marginLeft: theme.spacing(3),\n    width: 'auto'\n  });\n});\nvar SearchIconWrapper = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('div')(function (_ref3) {\n  var theme = _ref3.theme;\n  return {\n    padding: theme.spacing(0, 2),\n    height: '100%',\n    position: 'absolute',\n    pointerEvents: 'none',\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center'\n  };\n});\nvar StyledInputBase = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function (_ref4) {\n  var theme = _ref4.theme;\n  return {\n    color: 'inherit',\n    '& .MuiInputBase-input': _defineProperty({\n      padding: theme.spacing(1, 1, 1, 0),\n      // vertical padding + font size from searchIcon\n      paddingLeft: \"calc(1em + \".concat(theme.spacing(4), \")\"),\n      transition: theme.transitions.create('width'),\n      width: '100%'\n    }, theme.breakpoints.up('md'), {\n      width: '20ch'\n    })\n  };\n});\n\nvar NavigationBar = function NavigationBar(props) {\n  var _props$mode = props.mode,\n      setDarkMode = _props$mode.setDarkMode,\n      darkMode = _props$mode.darkMode;\n  var classes = (0,_styles__WEBPACK_IMPORTED_MODULE_2__.useHeaderStyles)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      _useState2 = _slicedToArray(_useState, 2),\n      anchorEl = _useState2[0],\n      setAnchorEl = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      _useState4 = _slicedToArray(_useState3, 2),\n      mobileMoreAnchorEl = _useState4[0],\n      setMobileMoreAnchorEl = _useState4[1];\n\n  var isMenuOpen = Boolean(anchorEl);\n  var isMobileMenuOpen = Boolean(mobileMoreAnchorEl);\n\n  var handleProfileMenuOpen = function handleProfileMenuOpen(event) {\n    setAnchorEl(event.currentTarget);\n  };\n\n  var handleMobileMenuClose = function handleMobileMenuClose() {\n    setMobileMoreAnchorEl(null);\n  };\n\n  var handleMenuClose = function handleMenuClose() {\n    setAnchorEl(null);\n    handleMobileMenuClose();\n  };\n\n  var handleMobileMenuOpen = function handleMobileMenuOpen(event) {\n    setMobileMoreAnchorEl(event.currentTarget);\n  };\n\n  var menuId = 'primary-search-account-menu';\n  var renderMenu = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    anchorEl: anchorEl,\n    anchorOrigin: {\n      vertical: 'top',\n      horizontal: 'right'\n    },\n    id: menuId,\n    keepMounted: true,\n    transformOrigin: {\n      vertical: 'top',\n      horizontal: 'right'\n    },\n    open: isMenuOpen,\n    onClose: handleMenuClose\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onClick: handleMenuClose\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: \"/settings\"\n  }, \"account\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onClick: handleMenuClose\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: \"/signIn\"\n  }, \"Sign-in\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onClick: handleMenuClose\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: \"/signUp\"\n  }, \"Sign-up\")));\n  var mobileMenuId = 'primary-search-account-menu-mobile';\n  var renderMobileMenu = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    anchorEl: mobileMoreAnchorEl,\n    anchorOrigin: {\n      vertical: 'top',\n      horizontal: 'right'\n    },\n    id: mobileMenuId,\n    keepMounted: true,\n    transformOrigin: {\n      vertical: 'top',\n      horizontal: 'right'\n    },\n    open: isMobileMenuOpen,\n    onClose: handleMobileMenuClose\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: \"/carts\",\n    className: \"text-decoration-none\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    size: \"large\",\n    color: \"inherit\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    color: \"error\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Carts\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: \"/store\",\n    className: \"text-decoration-none\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    size: \"large\",\n    color: \"inherit\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"store\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onClick: handleProfileMenuOpen\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    size: \"large\",\n    \"aria-label\": \"account of current user\",\n    \"aria-controls\": \"primary-search-account-menu\",\n    \"aria-haspopup\": \"true\",\n    color: \"inherit\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_12__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Profile\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onClick: function onClick() {\n      (0,_contexts_mode__WEBPACK_IMPORTED_MODULE_1__.toggleTheme)(darkMode, setDarkMode);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    size: \"large\",\n    \"aria-label\": \"account of current user\",\n    \"aria-controls\": \"primary-search-account-menu\",\n    \"aria-haspopup\": \"true\",\n    color: \"inherit\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_13__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Dark mode\")));\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n    sx: {\n      flexGrow: 1\n    },\n    className: classes.header\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {\n    position: \"static\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__[\"default\"], {\n    variant: \"h6\",\n    noWrap: true,\n    component: \"div\",\n    sx: {\n      display: {\n        xs: 'none',\n        sm: 'block'\n      }\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: \"/\"\n  }, \"E-commerce\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SearchInput, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SearchIconWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_18__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledInputBase, {\n    placeholder: \"Search\\u2026\",\n    inputProps: {\n      'aria-label': 'search'\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n    sx: {\n      flexGrow: 2\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n    sx: {\n      display: {\n        xs: 'none',\n        md: 'flex'\n      }\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    size: \"large\",\n    color: \"inherit\",\n    onClick: function onClick() {\n      (0,_contexts_mode__WEBPACK_IMPORTED_MODULE_1__.toggleTheme)(darkMode, setDarkMode);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_13__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    size: \"large\",\n    color: \"inherit\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    color: \"error\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: \"/carts\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    size: \"large\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: \"/store\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    size: \"large\",\n    edge: \"end\",\n    \"aria-label\": \"account of current user\",\n    \"aria-controls\": menuId,\n    \"aria-haspopup\": \"true\",\n    onClick: handleProfileMenuOpen,\n    color: \"inherit\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_12__[\"default\"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n    sx: {\n      display: {\n        xs: 'flex',\n        md: 'none'\n      }\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    size: \"large\",\n    \"aria-label\": \"show more\",\n    \"aria-controls\": mobileMenuId,\n    \"aria-haspopup\": \"true\",\n    onClick: handleMobileMenuOpen,\n    color: \"inherit\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_19__[\"default\"], null))))), renderMobileMenu, renderMenu);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavigationBar);\n\n//# sourceURL=webpack://ecommerce/./src/Components/common/navbar.jsx?");

/***/ }),

/***/ "./src/contexts/mode.js":
/*!******************************!*\
  !*** ./src/contexts/mode.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"themes\": () => (/* binding */ themes),\n/* harmony export */   \"toggleTheme\": () => (/* binding */ toggleTheme)\n/* harmony export */ });\nvar themes = {\n  light: {\n    foreground: \"#000000\",\n    background: \"#fff\",\n    background2: \"#fff\",\n    dark: false\n  },\n  dark: {\n    foreground: \"#ffffff\",\n    background: \"#222222\",\n    background2: \"#999999\",\n    dark: true\n  }\n};\n\nvar toggleTheme = function toggleTheme(darkMode, setDarkMode) {\n  if (!darkMode) setDarkMode(true);else setDarkMode(false);\n};\n\n\n\n//# sourceURL=webpack://ecommerce/./src/contexts/mode.js?");

/***/ }),

/***/ "./src/styles/adminDashboard.js":
/*!**************************************!*\
  !*** ./src/styles/adminDashboard.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jss */ \"./node_modules/react-jss/dist/react-jss.esm.js\");\n\nvar useAdminDashboardStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_0__.createUseStyles)(function (theme) {\n  return {\n    adminDashboard: {\n      \"& a\": {\n        textDecoration: \"none\"\n      },\n      \"& .MuiListItemIcon-root\": {\n        minWidth: \"0 !important\",\n        marginRight: \"1.5vw\"\n      },\n      form: {\n        \"& > div\": {\n          marginBottom: \"1vw\",\n          marginTop: \"1vw\"\n        }\n      }\n    }\n  };\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAdminDashboardStyles);\n\n//# sourceURL=webpack://ecommerce/./src/styles/adminDashboard.js?");

/***/ }),

/***/ "./src/styles/carts.js":
/*!*****************************!*\
  !*** ./src/styles/carts.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jss */ \"./node_modules/react-jss/dist/react-jss.esm.js\");\n\nvar useCartsStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_0__.createUseStyles)(function (theme) {\n  return {\n    carts: {\n      \"& .cart\": {\n        padding: \"2vw\",\n        margin: \"1vw auto\",\n        width: \"95vw\",\n        \"& svg\": {\n          width: \"25px\",\n          height: \"25px\",\n          margin: \".1vw\"\n        },\n        \"& .cartProduct:first-of-type\": {\n          marginTop: 0\n        },\n        \"& .cartProduct\": {\n          margin: \"1vw\",\n          padding: \"1vw\"\n        },\n        \"& .paycard\": {\n          color: \"#fff\",\n          padding: \"2vw\",\n          \"& .checkoutButton\": {\n            width: \"100% !important\",\n            display: \"flex\",\n            justifyContent: \"space-between\"\n          },\n          \"& .MuiOutlinedInput-root\": {\n            marginBottom: \"1vw\"\n          }\n        },\n        \"& ::placeholder, & label\": {\n          color: \"#fff\"\n        }\n      },\n      \"& .MuiButton-containedSuccess , & .addToCartForm\": {\n        marginLeft: \"2vw\",\n        marginBottom: \"1vw\"\n      },\n      \"& .addToCartForm\": {\n        marginTop: \"-.5vw\",\n        marginRight: \"2vw\",\n        marginBottom: \"1vw\"\n      }\n    }\n  };\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCartsStyles);\n\n//# sourceURL=webpack://ecommerce/./src/styles/carts.js?");

/***/ }),

/***/ "./src/styles/categorySlider.js":
/*!**************************************!*\
  !*** ./src/styles/categorySlider.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jss */ \"./node_modules/react-jss/dist/react-jss.esm.js\");\n\nvar useCategorySliderStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_0__.createUseStyles)(function (theme) {\n  return {\n    categorySlider: {\n      \"& .product > div\": {\n        margin: 'auto',\n        boxShadow: 'none !important',\n        '& img': {\n          width: '20vw !important',\n          margin: 'auto'\n        }\n      }\n    }\n  };\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCategorySliderStyles);\n\n//# sourceURL=webpack://ecommerce/./src/styles/categorySlider.js?");

/***/ }),

/***/ "./src/styles/footer.js":
/*!******************************!*\
  !*** ./src/styles/footer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jss */ \"./node_modules/react-jss/dist/react-jss.esm.js\");\n\nvar useFooterStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_0__.createUseStyles)(function (theme) {\n  return {\n    footer: {\n      backgroundColor: \"#3f51b5\",\n      marginTop: \"5vw !important\"\n    }\n  };\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFooterStyles);\n\n//# sourceURL=webpack://ecommerce/./src/styles/footer.js?");

/***/ }),

/***/ "./src/styles/header.js":
/*!******************************!*\
  !*** ./src/styles/header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jss */ \"./node_modules/react-jss/dist/react-jss.esm.js\");\n\nvar useHeaderStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_0__.createUseStyles)(function (theme) {\n  return {\n    header: {\n      \"& button\": {\n        width: \"3vw\",\n        height: \"3vw\",\n        padding: \"2vw !important\",\n        marginLeft: \".4vw !important\"\n      },\n      \"& a\": {\n        color: \"#fff\",\n        textDecoration: \"none\",\n        \"&:hover\": {\n          color: \"#fff\"\n        }\n      }\n    }\n  };\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useHeaderStyles);\n\n//# sourceURL=webpack://ecommerce/./src/styles/header.js?");

/***/ }),

/***/ "./src/styles/home.js":
/*!****************************!*\
  !*** ./src/styles/home.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jss */ \"./node_modules/react-jss/dist/react-jss.esm.js\");\n\nvar useHomeStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_0__.createUseStyles)(function (theme) {\n  return {\n    home: {\n      \"& .slider-container\": {\n        padding: 0,\n        '& div': {\n          position: \"relative\",\n          '& span': {\n            position: \"absolute\",\n            color: \"rgba($color: #000000, $alpha: 0.8)\",\n            background: \"rgba($color: #fff, $alpha: 0.3)\",\n            fontSize: \"2vw\",\n            left: \"50%\",\n            top: \"50%\",\n            transform: \"translate(-50%,-50%)\",\n            fontWeight: 700\n          },\n          '& img': {\n            width: \"100% !important\",\n            height: \"86vh\",\n            display: \"block !important\",\n            margin: \"auto\"\n          }\n        }\n      }\n    }\n  };\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useHomeStyles);\n\n//# sourceURL=webpack://ecommerce/./src/styles/home.js?");

/***/ }),

/***/ "./src/styles/index.js":
/*!*****************************!*\
  !*** ./src/styles/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAdminDashboardStyles\": () => (/* reexport safe */ _adminDashboard__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   \"useCartsStyles\": () => (/* reexport safe */ _carts__WEBPACK_IMPORTED_MODULE_9__[\"default\"]),\n/* harmony export */   \"useCategorySliderStyles\": () => (/* reexport safe */ _categorySlider__WEBPACK_IMPORTED_MODULE_8__[\"default\"]),\n/* harmony export */   \"useFooterStyles\": () => (/* reexport safe */ _footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   \"useHeaderStyles\": () => (/* reexport safe */ _header__WEBPACK_IMPORTED_MODULE_7__[\"default\"]),\n/* harmony export */   \"useHomeStyles\": () => (/* reexport safe */ _home__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   \"useSignInStyles\": () => (/* reexport safe */ _signIn__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"useSignUpStyles\": () => (/* reexport safe */ _signUp__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"useSingleProductStyles\": () => (/* reexport safe */ _singleProduct__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n/* harmony export */   \"useStoreStyles\": () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_5__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _signIn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signIn */ \"./src/styles/signIn.js\");\n/* harmony import */ var _signUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signUp */ \"./src/styles/signUp.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/styles/home.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ \"./src/styles/footer.js\");\n/* harmony import */ var _adminDashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adminDashboard */ \"./src/styles/adminDashboard.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store */ \"./src/styles/store.js\");\n/* harmony import */ var _singleProduct__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./singleProduct */ \"./src/styles/singleProduct.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header */ \"./src/styles/header.js\");\n/* harmony import */ var _categorySlider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./categorySlider */ \"./src/styles/categorySlider.js\");\n/* harmony import */ var _carts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./carts */ \"./src/styles/carts.js\");\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://ecommerce/./src/styles/index.js?");

/***/ }),

/***/ "./src/styles/signIn.js":
/*!******************************!*\
  !*** ./src/styles/signIn.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jss */ \"./node_modules/react-jss/dist/react-jss.esm.js\");\n\nvar useSignInStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_0__.createUseStyles)(function (theme) {\n  return {\n    signIn: {\n      margin: \"20vh auto\",\n      padding: \"1vw\",\n      boxShadow: \"0px 2px 1px -1px rgb(0,0,0, 20%), 0px 1px 1px 0px rgb(0,0,0, 14%), 0px 1px 3px 0px rgb(0,0,0, 12%)\"\n    }\n  };\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSignInStyles);\n\n//# sourceURL=webpack://ecommerce/./src/styles/signIn.js?");

/***/ }),

/***/ "./src/styles/signUp.js":
/*!******************************!*\
  !*** ./src/styles/signUp.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jss */ \"./node_modules/react-jss/dist/react-jss.esm.js\");\n\nvar useSignUpStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_0__.createUseStyles)(function (theme) {\n  return {\n    signUp: {\n      margin: \"3vw auto\",\n      padding: \"1vw\",\n      width: \"90%\",\n      boxShadow: \"0px 2px 1px -1px rgb(0,0,0, 20%), 0px 1px 1px 0px rgb(0,0,0, 14%), 0px 1px 3px 0px rgb(0,0,0, 12%)\",\n      button: {\n        marginRight: \"1vw\"\n      }\n    }\n  };\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSignUpStyles);\n\n//# sourceURL=webpack://ecommerce/./src/styles/signUp.js?");

/***/ }),

/***/ "./src/styles/singleProduct.js":
/*!*************************************!*\
  !*** ./src/styles/singleProduct.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jss */ \"./node_modules/react-jss/dist/react-jss.esm.js\");\n\nvar useSingleProductStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_0__.createUseStyles)(function (theme) {\n  return {\n    singleProduct: {\n      \"& .image\": {\n        display: \"flex\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        height: \"90vh\",\n        \"& img\": {\n          width: \"50%\"\n        }\n      },\n      \"& > .MuiGrid-grid-md-6:nth-of-type(2)\": {\n        padding: \"2vw\",\n        \"& button\": {\n          marginRight: \"1vw\"\n        }\n      }\n    }\n  };\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSingleProductStyles);\n\n//# sourceURL=webpack://ecommerce/./src/styles/singleProduct.js?");

/***/ }),

/***/ "./src/styles/store.js":
/*!*****************************!*\
  !*** ./src/styles/store.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jss */ \"./node_modules/react-jss/dist/react-jss.esm.js\");\n\nvar useStoreStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_0__.createUseStyles)(function (theme) {\n  return {\n    store: {\n      paddingTop: \"1vw\",\n      \"& .filter-wrapper\": {\n        \"& .filter\": {\n          margin: \"1vw\",\n          padding: \"1vw\",\n          boxShadow: \"0px 2px 1px -1px rgb(0,0,0, 20%), 0px 1px 1px 0px rgb(0,0,0, 14%), 0px 1px 3px 0px rgb(0,0,0, 12%)\"\n        },\n        \"& form\": {\n          \"& > div\": {\n            marginBottom: \"1vw\",\n            marginTop: \"1vw\"\n          }\n        }\n      },\n      \"& .products\": {\n        paddingBottom: \"1vw\"\n      },\n      \"& .product\": {\n        marginBottom: \"1vw\",\n        \"& img\": {\n          width: \"50% !important\",\n          margin: \"1vw auto !important\"\n        }\n      },\n      \"& .footer\": {\n        width: \"100% !important\",\n        \"& > div\": {\n          width: \"auto !important\"\n        }\n      }\n    }\n  };\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStoreStyles);\n\n//# sourceURL=webpack://ecommerce/./src/styles/store.js?");

/***/ })

}]);