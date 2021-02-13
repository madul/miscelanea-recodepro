webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/Main/Main.js":
/*!********************************!*\
  !*** ./src/pages/Main/Main.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _Home_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Home/Home */ "./src/pages/Home/Home.js");
/* harmony import */ var _Stores_Stores__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Stores/Stores */ "./src/pages/Stores/Stores.js");
/* harmony import */ var _Contact_Contact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Contact/Contact */ "./src/pages/Contact/Contact.js");
/* harmony import */ var _Products_Products__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Products/Products */ "./src/pages/Products/Products.js");
/* harmony import */ var _components_Login_Login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Login/Login */ "./src/components/Login/Login.js");
/* harmony import */ var _BuyPage_BuyPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../BuyPage/BuyPage */ "./src/pages/BuyPage/BuyPage.js");
/* harmony import */ var _components_ShopCart_ShopCart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/ShopCart/ShopCart */ "./src/components/ShopCart/ShopCart.js");
/* harmony import */ var _components_ShopButton_ShopButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/ShopButton/ShopButton */ "./src/components/ShopButton/ShopButton.js");
/* harmony import */ var _MyOrders_MyOrders__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../MyOrders/MyOrders */ "./src/pages/MyOrders/MyOrders.js");
/* harmony import */ var _SignUp___WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../SignUp/ */ "./src/pages/SignUp/index.js");
/* harmony import */ var _actions_cartActions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../actions/cartActions */ "./src/actions/cartActions.js");


var _jsxFileName = "C:\\Users\\maria\\Documents\\Recode\\Curso\\ModuloNoSQL\\PitangaCos\\frontend\\src\\pages\\Main\\Main.js",
    _s = $RefreshSig$();


















function Main() {
  _s();

  const {
    0: showList,
    1: setShowList
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: showButton,
    1: setShowButton
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: showLogin,
    1: setShowLogin
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [showButton && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ShopCart_ShopCart__WEBPACK_IMPORTED_MODULE_11__["default"], {
      show: showList,
      setShowList: setShowList
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 26
    }, this), showButton && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ShopButton_ShopButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
      setShowList: setShowList
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 26
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Home_Home__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

_s(Main, "4mKubU8DvgZ7CSV82F1uTUZ2HLA=");

_c = Main;

const mapStateToProps = state => ({
  itemsCart: state.itemsCart
});

const mapDispatchToProps = dispatch => Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_actions_cartActions__WEBPACK_IMPORTED_MODULE_15__, dispatch);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Main));

var _c;

$RefreshReg$(_c, "Main");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL01haW4vTWFpbi5qcyJdLCJuYW1lcyI6WyJNYWluIiwic2hvd0xpc3QiLCJzZXRTaG93TGlzdCIsInVzZVN0YXRlIiwic2hvd0J1dHRvbiIsInNldFNob3dCdXR0b24iLCJzaG93TG9naW4iLCJzZXRTaG93TG9naW4iLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIml0ZW1zQ2FydCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiQ2FydEFjdGlvbiIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQ2QsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQyxzREFBUSxDQUFDLEtBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJGLHNEQUFRLENBQUMsSUFBRCxDQUE1QztBQUNBLFFBQU07QUFBQSxPQUFDRyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0Qkosc0RBQVEsQ0FBQyxJQUFELENBQTFDO0FBRUEsc0JBQ0U7QUFBQSxlQUVPQyxVQUFVLGlCQUFJLHFFQUFDLHNFQUFEO0FBQVcsVUFBSSxFQUFFSCxRQUFqQjtBQUEyQixpQkFBVyxFQUFFQztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRnJCLEVBSU9FLFVBQVUsaUJBQUkscUVBQUMsMEVBQUQ7QUFBWSxpQkFBVyxFQUFFRjtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSnJCLGVBS00scUVBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7O0dBZFFGLEk7O0tBQUFBLEk7O0FBZ0JULE1BQU1RLGVBQWUsR0FBR0MsS0FBSyxLQUFJO0FBQy9CQyxXQUFTLEVBQUVELEtBQUssQ0FBQ0M7QUFEYyxDQUFKLENBQTdCOztBQUdBLE1BQU1DLGtCQUFrQixHQUFJQyxRQUFELElBQ3JCQyxnRUFBa0IsQ0FBQ0Msa0RBQUQsRUFBYUYsUUFBYixDQUR4Qjs7QUFHZUcsMEhBQU8sQ0FBQ1AsZUFBRCxFQUFrQkcsa0JBQWxCLENBQVAsQ0FBNkNYLElBQTdDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzdmYjQ3YTZjNjRlZjdhOGY0Y2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtTd2l0Y2gsIFJvdXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4uL0hvbWUvSG9tZVwiO1xyXG5pbXBvcnQgU3RvcmVzIGZyb20gXCIuLi9TdG9yZXMvU3RvcmVzXCI7XHJcbmltcG9ydCBDb250YWN0IGZyb20gXCIuLi9Db250YWN0L0NvbnRhY3RcIjtcclxuaW1wb3J0IFByb2R1Y3RzIGZyb20gXCIuLi9Qcm9kdWN0cy9Qcm9kdWN0c1wiO1xyXG5pbXBvcnQgTG9naW4gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTG9naW4vTG9naW5cIjtcclxuaW1wb3J0IEJ1eVBhZ2UgZnJvbSBcIi4uL0J1eVBhZ2UvQnV5UGFnZVwiO1xyXG5pbXBvcnQgU2hvcENhcnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2hvcENhcnQvU2hvcENhcnRcIjtcclxuaW1wb3J0IFNob3BCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2hvcEJ1dHRvbi9TaG9wQnV0dG9uXCI7XHJcbmltcG9ydCBNeU9yZGVycyBmcm9tIFwiLi4vTXlPcmRlcnMvTXlPcmRlcnNcIjtcclxuaW1wb3J0IFNpZ25VcCBmcm9tIFwiLi4vU2lnblVwL1wiO1xyXG5cclxuaW1wb3J0ICogYXMgQ2FydEFjdGlvbiBmcm9tICcuLi8uLi9hY3Rpb25zL2NhcnRBY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIE1haW4gKCl7XHJcbiAgY29uc3QgW3Nob3dMaXN0LCBzZXRTaG93TGlzdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dCdXR0b24sIHNldFNob3dCdXR0b25dID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3Nob3dMb2dpbiwgc2V0U2hvd0xvZ2luXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICByZXR1cm4oXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgICAge3Nob3dCdXR0b24gJiYgPFNob3BDYXJ0ICBzaG93PXtzaG93TGlzdH0gc2V0U2hvd0xpc3Q9e3NldFNob3dMaXN0fS8+fVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB7c2hvd0J1dHRvbiAmJiA8U2hvcEJ1dHRvbiBzZXRTaG93TGlzdD17c2V0U2hvd0xpc3R9Lz59XHJcbiAgICAgICAgICA8SG9tZS8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9Pih7XHJcbiAgaXRlbXNDYXJ0OiBzdGF0ZS5pdGVtc0NhcnRcclxufSlcclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiBcclxuICAgICAgYmluZEFjdGlvbkNyZWF0b3JzKENhcnRBY3Rpb24sIGRpc3BhdGNoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1haW4pIl0sInNvdXJjZVJvb3QiOiIifQ==