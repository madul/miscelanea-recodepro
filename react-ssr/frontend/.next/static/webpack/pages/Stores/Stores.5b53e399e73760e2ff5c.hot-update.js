webpackHotUpdate_N_E("pages/Stores/Stores",{

/***/ "./src/pages/Stores/Stores.js":
/*!************************************!*\
  !*** ./src/pages/Stores/Stores.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Stores_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stores.module.css */ "./src/pages/Stores/Stores.module.css");
/* harmony import */ var _Stores_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Stores_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Store */ "./src/pages/Stores/Store.js");


var _jsxFileName = "C:\\Users\\maria\\Documents\\Recode\\Curso\\ModuloNoSQL\\PitangaCos\\frontend\\src\\pages\\Stores\\Stores.js",
    _s = $RefreshSig$();






function Stores(props) {
  _s();

  const {
    0: stores,
    1: setStores
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const mounted = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const url = "http://localhost:3001/stores";
    fetch(url).then(response => response.json()).then(stores => {
      if (mounted.current) {
        setStores(stores.stores);
      }
    });
    return () => mounted.current = false;
  }, [stores]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "sectionTitle",
      children: "Lojas"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      id: "stores",
      children: stores && stores.map(store => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Store__WEBPACK_IMPORTED_MODULE_3__["default"], {
        store: store
      }, store.store_id, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

_s(Stores, "kq8PNBGdLlkEtAiBbw2K8Rtb4vE=");

_c = Stores;
/* harmony default export */ __webpack_exports__["default"] = (Stores);

var _c;

$RefreshReg$(_c, "Stores");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL1N0b3Jlcy9TdG9yZXMuanMiXSwibmFtZXMiOlsiU3RvcmVzIiwicHJvcHMiLCJzdG9yZXMiLCJzZXRTdG9yZXMiLCJ1c2VTdGF0ZSIsIm1vdW50ZWQiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJjdXJyZW50IiwibWFwIiwic3RvcmUiLCJzdG9yZV9pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUFzQjtBQUFBOztBQUNwQixRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JDLHNEQUFRLENBQUMsRUFBRCxDQUFwQztBQUNBLFFBQU1DLE9BQU8sR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXRCO0FBRUFDLHlEQUFTLENBQUMsTUFBSztBQUNiLFVBQU1DLEdBQUcsR0FBRyw4QkFBWjtBQUVBQyxTQUFLLENBQUNELEdBQUQsQ0FBTCxDQUNHRSxJQURILENBQ1FDLFFBQVEsSUFBSUEsUUFBUSxDQUFDQyxJQUFULEVBRHBCLEVBRUdGLElBRkgsQ0FFU1IsTUFBTSxJQUFJO0FBQ2YsVUFBR0csT0FBTyxDQUFDUSxPQUFYLEVBQW9CO0FBQ3BCVixpQkFBUyxDQUFDRCxNQUFNLENBQUNBLE1BQVIsQ0FBVDtBQUNDO0FBQ0YsS0FOSDtBQVFBLFdBQU8sTUFBTUcsT0FBTyxDQUFDUSxPQUFSLEdBQWtCLEtBQS9CO0FBQ0QsR0FaUSxFQVlQLENBQUNYLE1BQUQsQ0FaTyxDQUFUO0FBY0Esc0JBQ0U7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQyxjQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFTLFFBQUUsRUFBQyxRQUFaO0FBQUEsZ0JBRUlBLE1BQU0sSUFBSUEsTUFBTSxDQUFDWSxHQUFQLENBQVdDLEtBQUssaUJBQ3hCLHFFQUFDLDhDQUFEO0FBQTRCLGFBQUssRUFBRUE7QUFBbkMsU0FBWUEsS0FBSyxDQUFDQyxRQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRFE7QUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFZRDs7R0E5QlFoQixNOztLQUFBQSxNO0FBK0JNQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9TdG9yZXMvU3RvcmVzLjViNTNlMzk5ZTczNzYwZTJmZjVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0ICcuL1N0b3Jlcy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IFN0b3JlIGZyb20gJy4vU3RvcmUnXHJcblxyXG5mdW5jdGlvbiBTdG9yZXMocHJvcHMpe1xyXG4gIGNvbnN0IFtzdG9yZXMsIHNldFN0b3Jlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgbW91bnRlZCA9IHVzZVJlZih0cnVlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+e1xyXG4gICAgY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvc3RvcmVzXCI7XHJcbiAgICBcclxuICAgIGZldGNoKHVybClcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbiggc3RvcmVzID0+IHtcclxuICAgICAgICBpZihtb3VudGVkLmN1cnJlbnQpIHsgICAgICAgICBcclxuICAgICAgICBzZXRTdG9yZXMoc3RvcmVzLnN0b3Jlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gbW91bnRlZC5jdXJyZW50ID0gZmFsc2U7XHJcbiAgfSxbc3RvcmVzXSk7XHJcblxyXG4gIHJldHVybihcclxuICAgIDxtYWluPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwic2VjdGlvblRpdGxlXCI+TG9qYXM8L2gxPlxyXG4gICAgICA8c2VjdGlvbiBpZD0nc3RvcmVzJz5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBzdG9yZXMgJiYgc3RvcmVzLm1hcChzdG9yZSA9PlxyXG4gICAgICAgICAgICA8U3RvcmUga2V5PXtzdG9yZS5zdG9yZV9pZH0gc3RvcmU9e3N0b3JlfS8+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBTdG9yZXM7Il0sInNvdXJjZVJvb3QiOiIifQ==