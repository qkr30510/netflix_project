webpackHotUpdate("static\\development\\pages\\LatestContents.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\SAMSUNG\\Desktop\\html\\netflix_project\\components\\Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var HeaderStyle = {
  display: "flex",
  flex: 1,
  background: "#141414",
  height: "68px",
  alignItems: "center",
  justifyContent: "spaceAround",
  color: "#fff",
  padding: "0 4%"
};
var li = {
  "float": "left"
};
var a = {
  color: "#fff"
};
var leftNavi = {
  border: "1px solid red"
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
      lineNumber: 38,
      columnNumber: 3
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: pageNames.enName,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx("a", {
    style: a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
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
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx("h1", {
    style: logo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, "logo"), __jsx("ul", {
    style: leftNavi,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, pageName), __jsx("ul", {
    className: "rightNavi",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, pageName));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=LatestContents.js.e1fe4428031c5af464ce.hot-update.js.map