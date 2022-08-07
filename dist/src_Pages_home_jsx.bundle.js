"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkecommerce"] = self["webpackChunkecommerce"] || []).push([["src_Pages_home_jsx"],{

/***/ "./src/Pages/home.jsx":
/*!****************************!*\
  !*** ./src/Pages/home.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components */ \"./src/Components/index.js\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks */ \"./src/hooks/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n/* harmony import */ var nuka_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nuka-carousel */ \"./node_modules/nuka-carousel/es-v5/carousel.js\");\n\n\n\n\n\n\n\nvar Home = function Home() {\n  var _useCategories = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useCategories)(),\n      categories = _useCategories.categories;\n\n  var classes = (0,_styles__WEBPACK_IMPORTED_MODULE_3__.useHomeStyles)();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    item: true,\n    xs: 12,\n    className: classes.home\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(nuka_carousel__WEBPACK_IMPORTED_MODULE_5__.Carousel, {\n    slidesToShow: 1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: \"../images/1.jpg\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"WELCOME TO OUR STORE\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: \"../images/2.jpg\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"Veniam incididunt aliquip est cupidatat. Aute officia esse exercitation consequat velit nisi dolore non nisi aute nisi deserunt minim elit. Qui nisi laboris et ipsum ut Lorem duis. Laboris duis culpa nulla quis sit laboris do duis labore ea. Cupidatat commodo magna anim quis esse. Qui irure consequat laboris labore Lorem nisi ullamco elit cillum.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: \"../images/3.jpg\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"fugiat.Dolor quis do esse qui tempor eu nulla. Non laborum dolor cupidatat dolore. Fugiat et eu irure nostrud nostrud id veniam magna mollit. Ut mollit ipsum deserunt nisi eu occaecat. Minim ad cillum dolore mollit commodo do deserunt aliqua elit sint deserunt dolor duis consectetur\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: \"../images/4.jpg\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \" ipsum occaecat fugiat. Laborum exercitation ad mollit elit. Deserunt laborum sunt irure esse sunt et ut adipisicing amet irure ad. Ea sit elit ipsum enim.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: \"../images/6.jpg\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \" tempor.Dolor quis do esse qui tempor eu nul consequat nisi laborum ex magna nulla voluptate \")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: \"../images/8.jpg\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"Id dolore laborum deserunt veniam dolore id tempor consequat nisi laborum ex magna nulla volupta\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    item: true,\n    xs: 12\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: \"text-center p-3 text-decoration-underline\"\n  }, \"Catagories\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    item: true,\n    xs: 12\n  }, categories.map(function (category) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components__WEBPACK_IMPORTED_MODULE_1__.CategorySlider, {\n      key: Math.random() * 10000,\n      category: category\n    });\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    item: true,\n    xs: 12\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components__WEBPACK_IMPORTED_MODULE_1__.Footer, null)));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://ecommerce/./src/Pages/home.jsx?");

/***/ })

}]);