webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/*! exports provided: initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeStore\", function() { return initializeStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-promise */ \"./node_modules/redux-promise/lib/index.js\");\n/* harmony import */ var redux_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_promise__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ \"./store/reducers/index.js\");\n\n\n\n\nvar exampleInitialState = {\n  users: [{\n    name: \"Steve\",\n    lastname: \"Jones\"\n  }]\n};\nfunction initializeStore() {\n  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_3__[\"default\"], initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_promise__WEBPACK_IMPORTED_MODULE_2___default.a)));\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9pbmRleC5qcz85MTAxIl0sIm5hbWVzIjpbImV4YW1wbGVJbml0aWFsU3RhdGUiLCJ1c2VycyIsIm5hbWUiLCJsYXN0bmFtZSIsImluaXRpYWxpemVTdG9yZSIsImluaXRpYWxTdGF0ZSIsImNyZWF0ZVN0b3JlIiwicm9vdFJlZHVjZXIiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwicHJvbWlzZU1pZGRsZXdhcmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLG1CQUFtQixHQUFHO0FBQ3hCQyxPQUFLLEVBQUUsQ0FBQztBQUNKQyxRQUFJLEVBQUUsT0FERjtBQUVKQyxZQUFRLEVBQUU7QUFGTixHQUFEO0FBRGlCLENBQTVCO0FBT08sU0FBU0MsZUFBVCxHQUE2RDtBQUFBLE1BQXBDQyxZQUFvQyx1RUFBckJMLG1CQUFxQjtBQUNoRSxTQUFPTSx5REFBVyxDQUNkQyxpREFEYyxFQUVkRixZQUZjLEVBR2RHLG9GQUFtQixDQUFDQyw2REFBZSxDQUFDQyxvREFBRCxDQUFoQixDQUhMLENBQWxCO0FBS0giLCJmaWxlIjoiLi9zdG9yZS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nXG5pbXBvcnQgcHJvbWlzZU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtcHJvbWlzZSdcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3JlZHVjZXJzJ1xuXG5jb25zdCBleGFtcGxlSW5pdGlhbFN0YXRlID0ge1xuICAgIHVzZXJzOiBbe1xuICAgICAgICBuYW1lOiBcIlN0ZXZlXCIsXG4gICAgICAgIGxhc3RuYW1lOiBcIkpvbmVzXCJcbiAgICB9XVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZVN0b3JlKGluaXRpYWxTdGF0ZSA9IGV4YW1wbGVJbml0aWFsU3RhdGUpIHtcbiAgICByZXR1cm4gY3JlYXRlU3RvcmUoXG4gICAgICAgIHJvb3RSZWR1Y2VyLFxuICAgICAgICBpbml0aWFsU3RhdGUsXG4gICAgICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKHByb21pc2VNaWRkbGV3YXJlKSlcbiAgICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/index.js\n");

/***/ })

})