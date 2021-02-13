webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Header/Header */ "./src/components/Header/Header.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Footer/Footer */ "./src/components/Footer/Footer.js");
/* harmony import */ var _Stores_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Stores.module.css */ "./src/pages/Stores/Stores.module.css");
/* harmony import */ var _Stores_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Stores_module_css__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "C:\\Users\\maria\\Documents\\Recode\\Curso\\ModuloNoSQL\\PitangaCos\\frontend\\src\\pages\\Stores\\Stores.js",
    _s = $RefreshSig$();







function Store(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "store",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: props.store.store_name ? props.store.store_name : props.store.city
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: [props.store.logradouro, ", ", props.store.store_number]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), props.store.complement ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: props.store.complement
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 33
    }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: props.store.nbh
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["(", props.store.phone.toString().slice(0, 2), ") ", props.store.phone.toString().slice(2, 6), "-", props.store.phone.toString().slice(6)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

_c = Store;

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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "sectionTitle",
        children: "Lojas"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        id: "stores",
        children: stores && stores.map(store => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Store, {
          store: store
        }, store.store_id, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 15
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Stores, "kq8PNBGdLlkEtAiBbw2K8Rtb4vE=");

_c2 = Stores;
/* harmony default export */ __webpack_exports__["default"] = (Stores);

var _c, _c2;

$RefreshReg$(_c, "Store");
$RefreshReg$(_c2, "Stores");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL1N0b3Jlcy9TdG9yZXMuanMiXSwibmFtZXMiOlsiU3RvcmUiLCJwcm9wcyIsInN0b3JlIiwic3RvcmVfbmFtZSIsImNpdHkiLCJsb2dyYWRvdXJvIiwic3RvcmVfbnVtYmVyIiwiY29tcGxlbWVudCIsIm5iaCIsInBob25lIiwidG9TdHJpbmciLCJzbGljZSIsIlN0b3JlcyIsInN0b3JlcyIsInNldFN0b3JlcyIsInVzZVN0YXRlIiwibW91bnRlZCIsInVzZVJlZiIsInVzZUVmZmVjdCIsInVybCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImN1cnJlbnQiLCJtYXAiLCJzdG9yZV9pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXFCO0FBQ25CLHNCQUNFO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQSw0QkFDRTtBQUFBLGdCQUFLQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsVUFBWixHQUF3QkYsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFVBQXBDLEdBQWlERixLQUFLLENBQUNDLEtBQU4sQ0FBWUU7QUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBQSxpQkFBSUgsS0FBSyxDQUFDQyxLQUFOLENBQVlHLFVBQWhCLFFBQThCSixLQUFLLENBQUNDLEtBQU4sQ0FBWUksWUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsRUFJSUwsS0FBSyxDQUFDQyxLQUFOLENBQVlLLFVBQVosZ0JBQXdCO0FBQUEsZ0JBQUlOLEtBQUssQ0FBQ0MsS0FBTixDQUFZSztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXhCLEdBQTBELElBSjlELGVBTUU7QUFBQSxnQkFBSU4sS0FBSyxDQUFDQyxLQUFOLENBQVlNO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQU9FO0FBQUEsc0JBQUtQLEtBQUssQ0FBQ0MsS0FBTixDQUFZTyxLQUFaLENBQWtCQyxRQUFsQixHQUE2QkMsS0FBN0IsQ0FBbUMsQ0FBbkMsRUFBcUMsQ0FBckMsQ0FBTCxRQUFnRFYsS0FBSyxDQUFDQyxLQUFOLENBQVlPLEtBQVosQ0FBa0JDLFFBQWxCLEdBQTZCQyxLQUE3QixDQUFtQyxDQUFuQyxFQUFxQyxDQUFyQyxDQUFoRCxPQUEwRlYsS0FBSyxDQUFDQyxLQUFOLENBQVlPLEtBQVosQ0FBa0JDLFFBQWxCLEdBQTZCQyxLQUE3QixDQUFtQyxDQUFuQyxDQUExRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVdEOztLQVpRWCxLOztBQWNULFNBQVNZLE1BQVQsQ0FBZ0JYLEtBQWhCLEVBQXNCO0FBQUE7O0FBQ3BCLFFBQU07QUFBQSxPQUFDWSxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkMsc0RBQVEsQ0FBQyxFQUFELENBQXBDO0FBQ0EsUUFBTUMsT0FBTyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBdEIsQ0FGb0IsQ0FJcEI7O0FBQ0FDLHlEQUFTLENBQUMsTUFBSztBQUNiLFVBQU1DLEdBQUcsR0FBRyw4QkFBWjtBQUVBQyxTQUFLLENBQUNELEdBQUQsQ0FBTCxDQUNHRSxJQURILENBQ1FDLFFBQVEsSUFBSUEsUUFBUSxDQUFDQyxJQUFULEVBRHBCLEVBRUdGLElBRkgsQ0FFU1IsTUFBTSxJQUFJO0FBQ2YsVUFBR0csT0FBTyxDQUFDUSxPQUFYLEVBQW9CO0FBQ3BCVixpQkFBUyxDQUFDRCxNQUFNLENBQUNBLE1BQVIsQ0FBVDtBQUNDO0FBQ0YsS0FOSDtBQVFBLFdBQU8sTUFBTUcsT0FBTyxDQUFDUSxPQUFSLEdBQWtCLEtBQS9CO0FBQ0QsR0FaUSxFQVlQLENBQUNYLE1BQUQsQ0FaTyxDQUFUO0FBY0Esc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBQyxjQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFHRTtBQUFTLFVBQUUsRUFBQyxRQUFaO0FBQUEsa0JBRUlBLE1BQU0sSUFBSUEsTUFBTSxDQUFDWSxHQUFQLENBQVd2QixLQUFLLGlCQUN4QixxRUFBQyxLQUFEO0FBQTRCLGVBQUssRUFBRUE7QUFBbkMsV0FBWUEsS0FBSyxDQUFDd0IsUUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEUTtBQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQWFFLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRjtBQUFBLGtCQURGO0FBa0JEOztHQXJDUWQsTTs7TUFBQUEsTTtBQXNDTUEscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzYxM2Y4ZWEzYTFhYjlmNjA1YjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXInO1xyXG5cclxuaW1wb3J0ICcuL1N0b3Jlcy5tb2R1bGUuY3NzJztcclxuXHJcbmZ1bmN0aW9uIFN0b3JlKHByb3BzKXtcclxuICByZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nc3RvcmUnPlxyXG4gICAgICA8aDM+e3Byb3BzLnN0b3JlLnN0b3JlX25hbWU/IHByb3BzLnN0b3JlLnN0b3JlX25hbWUgOiBwcm9wcy5zdG9yZS5jaXR5fTwvaDM+XHJcbiAgICAgIDxwPntwcm9wcy5zdG9yZS5sb2dyYWRvdXJvfSwge3Byb3BzLnN0b3JlLnN0b3JlX251bWJlcn08L3A+XHJcbiAgICAgIHtcclxuICAgICAgICBwcm9wcy5zdG9yZS5jb21wbGVtZW50PyA8cD57cHJvcHMuc3RvcmUuY29tcGxlbWVudH08L3A+IDogbnVsbFxyXG4gICAgICB9XHJcbiAgICAgIDxwPntwcm9wcy5zdG9yZS5uYmh9PC9wPlxyXG4gICAgICA8cD4oe3Byb3BzLnN0b3JlLnBob25lLnRvU3RyaW5nKCkuc2xpY2UoMCwyKX0pIHtwcm9wcy5zdG9yZS5waG9uZS50b1N0cmluZygpLnNsaWNlKDIsNil9LXtwcm9wcy5zdG9yZS5waG9uZS50b1N0cmluZygpLnNsaWNlKDYpfTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFN0b3Jlcyhwcm9wcyl7XHJcbiAgY29uc3QgW3N0b3Jlcywgc2V0U3RvcmVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBtb3VudGVkID0gdXNlUmVmKHRydWUpO1xyXG5cclxuICAvL2NvbnNvbGUubG9nKFwic3RvcmUgcHJvcHM6IFwiLHByb3BzKTtcclxuICB1c2VFZmZlY3QoKCkgPT57XHJcbiAgICBjb25zdCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9zdG9yZXNcIjtcclxuICAgIFxyXG4gICAgZmV0Y2godXJsKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKCBzdG9yZXMgPT4ge1xyXG4gICAgICAgIGlmKG1vdW50ZWQuY3VycmVudCkgeyAgICAgICAgIFxyXG4gICAgICAgIHNldFN0b3JlcyhzdG9yZXMuc3RvcmVzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiBtb3VudGVkLmN1cnJlbnQgPSBmYWxzZTtcclxuICB9LFtzdG9yZXNdKTtcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlci8+XHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJzZWN0aW9uVGl0bGVcIj5Mb2phczwvaDE+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPHNlY3Rpb24gaWQ9J3N0b3Jlcyc+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0b3JlcyAmJiBzdG9yZXMubWFwKHN0b3JlID0+XHJcbiAgICAgICAgICAgICAgPFN0b3JlIGtleT17c3RvcmUuc3RvcmVfaWR9IHN0b3JlPXtzdG9yZX0vPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxGb290ZXIvPlxyXG4gICAgPC8+XHJcbiAgICBcclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFN0b3JlczsiXSwic291cmNlUm9vdCI6IiJ9