webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);


var _HeaderStyle,
    _this = undefined,
    _jsxFileName = "C:\\Users\\SAMSUNG\\Desktop\\html\\netflix_project\\components\\Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var HeaderStyle = (_HeaderStyle = {
  display: "flex",
  flex: "1",
  justifyContent: "space-around",
  background: "#141414",
  height: "68px",
  alignItems: "center"
}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_HeaderStyle, "justifyContent", "spaceAround"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_HeaderStyle, "color", "#fff"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_HeaderStyle, "padding", "0 4%"), _HeaderStyle);
var li = {
  "float": "left",
  "margin-left": "20px"
};
var a = {
  color: "#fff"
};
var leftNavi = {
  border: "1px solid red"
};
var rightNavi = {
  "float": "right"
};
var logo = {
  "margin-righ": "25px"
};
var pageNameList = [{
  id: 1,
  koName: "홈",
  enName: "/"
}, {
  id: 2,
  koName: "티비 프로그램",
  enName: "/TvProgram"
}, {
  id: 3,
  koName: "영화",
  enName: "/Movie"
}, {
  id: 4,
  koName: "최신 콘텐츠",
  enName: "/LatestContents"
}, {
  id: 5,
  koName: "티비 프로그램",
  enName: "/MyList"
}];
var pageName = pageNameList.map(function (pageNames) {
  return __jsx("li", {
    key: pageNames.id,
    style: li,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 3
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: pageNames.enName,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx("a", {
    style: a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, pageNames.koName)));
});

var Header = function Header() {
  return __jsx("div", {
    style: HeaderStyle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, __jsx("h1", {
    style: logo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, "logo"), __jsx("ul", {
    style: leftNavi,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, pageName), __jsx("ul", {
    style: rightNavi,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, pageName));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ })

})
//# sourceMappingURL=_app.js.e147840bb8a013f5b981.hot-update.js.map