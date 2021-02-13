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
/* harmony import */ var _Stores_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stores.css */ "./src/pages/Stores/Stores.css");
/* harmony import */ var _Stores_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Stores_css__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\maria\\Documents\\Recode\\Curso\\ModuloNoSQL\\PitangaCos\\frontend\\src\\pages\\Stores\\Stores.js",
    _s = $RefreshSig$();




const Store = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(_c = () => __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./Store */ "./src/pages/Stores/Store.js")));
_c2 = Store;

function Stores(props) {
  _s();

  const {
    0: stores,
    1: setStores
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const mounted = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(true); //console.log("store props: ",props);

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
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
      fallback: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Em breve sua Loja..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 27
      }, this),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        id: "stores",
        children: stores && stores.map(store => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Store, {
          store: store
        }, store.store_id, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 15
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

_s(Stores, "kq8PNBGdLlkEtAiBbw2K8Rtb4vE=");

_c3 = Stores;
/* harmony default export */ __webpack_exports__["default"] = (Stores);

var _c, _c2, _c3;

$RefreshReg$(_c, "Store$lazy");
$RefreshReg$(_c2, "Store");
$RefreshReg$(_c3, "Stores");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL1N0b3Jlcy9TdG9yZXMuanMiXSwibmFtZXMiOlsiU3RvcmUiLCJsYXp5IiwiU3RvcmVzIiwicHJvcHMiLCJzdG9yZXMiLCJzZXRTdG9yZXMiLCJ1c2VTdGF0ZSIsIm1vdW50ZWQiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJjdXJyZW50IiwibWFwIiwic3RvcmUiLCJzdG9yZV9pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBLE1BQU1BLEtBQUssZ0JBQUdDLGtEQUFJLE1BQUMsTUFBSywySEFBTixDQUFsQjtNQUFNRCxLOztBQUVOLFNBQVNFLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXNCO0FBQUE7O0FBQ3BCLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkMsc0RBQVEsQ0FBQyxFQUFELENBQXBDO0FBQ0EsUUFBTUMsT0FBTyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBdEIsQ0FGb0IsQ0FJcEI7O0FBQ0FDLHlEQUFTLENBQUMsTUFBSztBQUNiLFVBQU1DLEdBQUcsR0FBRyw4QkFBWjtBQUVBQyxTQUFLLENBQUNELEdBQUQsQ0FBTCxDQUNHRSxJQURILENBQ1FDLFFBQVEsSUFBSUEsUUFBUSxDQUFDQyxJQUFULEVBRHBCLEVBRUdGLElBRkgsQ0FFU1IsTUFBTSxJQUFJO0FBQ2YsVUFBR0csT0FBTyxDQUFDUSxPQUFYLEVBQW9CO0FBQ3BCVixpQkFBUyxDQUFDRCxNQUFNLENBQUNBLE1BQVIsQ0FBVDtBQUNDO0FBQ0YsS0FOSDtBQVFBLFdBQU8sTUFBTUcsT0FBTyxDQUFDUSxPQUFSLEdBQWtCLEtBQS9CO0FBQ0QsR0FaUSxFQVlQLENBQUNYLE1BQUQsQ0FaTyxDQUFUO0FBY0Esc0JBQ0U7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQyxjQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyw4Q0FBRDtBQUFVLGNBQVEsZUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFwQjtBQUFBLDZCQUNBO0FBQVMsVUFBRSxFQUFDLFFBQVo7QUFBQSxrQkFHTUEsTUFBTSxJQUFJQSxNQUFNLENBQUNZLEdBQVAsQ0FBV0MsS0FBSyxpQkFDeEIscUVBQUMsS0FBRDtBQUE0QixlQUFLLEVBQUVBO0FBQW5DLFdBQVlBLEtBQUssQ0FBQ0MsUUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEUTtBQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZUQ7O0dBbENRaEIsTTs7TUFBQUEsTTtBQW1DTUEscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvU3RvcmVzL1N0b3Jlcy5kMzk4NzlmYWVmZTIxYWY2NjRmOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIGxhenksIFN1c3BlbnNlfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgJy4vU3RvcmVzLmNzcyc7XHJcblxyXG5jb25zdCBTdG9yZSA9IGxhenkoKCk9PiBpbXBvcnQoXCIuL1N0b3JlXCIpKVxyXG5cclxuZnVuY3Rpb24gU3RvcmVzKHByb3BzKXtcclxuICBjb25zdCBbc3RvcmVzLCBzZXRTdG9yZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IG1vdW50ZWQgPSB1c2VSZWYodHJ1ZSk7XHJcblxyXG4gIC8vY29uc29sZS5sb2coXCJzdG9yZSBwcm9wczogXCIscHJvcHMpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PntcclxuICAgIGNvbnN0IHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3N0b3Jlc1wiO1xyXG4gICAgXHJcbiAgICBmZXRjaCh1cmwpXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oIHN0b3JlcyA9PiB7XHJcbiAgICAgICAgaWYobW91bnRlZC5jdXJyZW50KSB7ICAgICAgICAgXHJcbiAgICAgICAgc2V0U3RvcmVzKHN0b3Jlcy5zdG9yZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IG1vdW50ZWQuY3VycmVudCA9IGZhbHNlO1xyXG4gIH0sW3N0b3Jlc10pO1xyXG5cclxuICByZXR1cm4oXHJcbiAgICA8bWFpbj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInNlY3Rpb25UaXRsZVwiPkxvamFzPC9oMT5cclxuICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8aDE+RW0gYnJldmUgc3VhIExvamEuLi48L2gxPn0+XHJcbiAgICAgIDxzZWN0aW9uIGlkPSdzdG9yZXMnPlxyXG4gICAgICAgXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0b3JlcyAmJiBzdG9yZXMubWFwKHN0b3JlID0+XHJcbiAgICAgICAgICAgICAgPFN0b3JlIGtleT17c3RvcmUuc3RvcmVfaWR9IHN0b3JlPXtzdG9yZX0vPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIDwvc2VjdGlvbj48L1N1c3BlbnNlPlxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmVzOyJdLCJzb3VyY2VSb290IjoiIn0=