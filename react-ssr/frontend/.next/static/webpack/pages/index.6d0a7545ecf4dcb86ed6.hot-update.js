webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Login_Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Login/Login */ "./src/components/Login/Login.js");
/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header.module.css */ "./src/components/Header/header.module.css");
/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_header_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "C:\\Users\\maria\\Documents\\Recode\\Curso\\ModuloNoSQL\\PitangaCos\\frontend\\src\\components\\Header\\Header.js",
    _s = $RefreshSig$();



 //import {Link} from 'react-router-dom';






function Header() {
  _s();

  const {
    0: username,
    1: setUserName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: token,
    1: setToken
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    className: "navbar",
    expand: "sm",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Brand, {
      as: next_link__WEBPACK_IMPORTED_MODULE_3___default.a,
      href: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        id: "logo",
        src: __webpack_require__(/*! ../../images/pitanga_logo_menu.png */ "./src/images/pitanga_logo_menu.png").default,
        alt: "Pitanga logo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Toggle, {
      "aria-controls": "main-navbar"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Collapse, {
      id: "main-navbar",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
        className: "mr-auto",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
          as: next_link__WEBPACK_IMPORTED_MODULE_3___default.a,
          className: "navbar-link",
          href: "/Products/Products",
          children: "Produtos"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
          as: next_link__WEBPACK_IMPORTED_MODULE_3___default.a,
          className: "navbar-link",
          href: "/Stores/Stores",
          children: "Lojas"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
          as: next_link__WEBPACK_IMPORTED_MODULE_3___default.a,
          className: "navbar-link",
          href: "/Contact/Contact",
          children: "Contatos"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"], {
          title: username !== "" ? username : 'Login',
          children: [username === "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "show",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Login_Login__WEBPACK_IMPORTED_MODULE_4__["default"], {
              changeName: setUserName,
              changeToken: setToken
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 15
          }, this), username && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Item, {
              href: "/",
              children: "Sair"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Item, {
              as: next_link__WEBPACK_IMPORTED_MODULE_3___default.a,
              href: "/myOrders",
              children: "Meus Pedidos"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, this)]
          }, void 0, true)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

_s(Header, "U0l85aafcZtFS4/2WDc6rkhaiaE=");

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJ1c2VybmFtZSIsInNldFVzZXJOYW1lIiwidXNlU3RhdGUiLCJ0b2tlbiIsInNldFRva2VuIiwiTGluayIsInJlcXVpcmUiLCJkZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFDQTtBQUVBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQ2hCLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF5QkMsc0RBQVEsQ0FBQyxFQUFELENBQXZDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQW1CRixzREFBUSxDQUFDLEVBQUQsQ0FBakM7QUFJQSxzQkFDRSxxRUFBQyxzREFBRDtBQUFRLGFBQVMsRUFBQyxRQUFsQjtBQUEyQixVQUFNLEVBQUMsSUFBbEM7QUFBQSw0QkFDRSxxRUFBQyxzREFBRCxDQUFRLEtBQVI7QUFBYyxRQUFFLEVBQUVHLGdEQUFsQjtBQUF3QixVQUFJLEVBQUMsR0FBN0I7QUFBQSw2QkFDRTtBQUFLLFVBQUUsRUFBQyxNQUFSO0FBQWUsV0FBRyxFQUFFQyxtQkFBTyxDQUFFLDhFQUFGLENBQVAsQ0FBOENDLE9BQWxFO0FBQTJFLFdBQUcsRUFBQztBQUEvRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0UscUVBQUMsc0RBQUQsQ0FBUSxNQUFSO0FBQWUsdUJBQWM7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBTUUscUVBQUMsc0RBQUQsQ0FBUSxRQUFSO0FBQWlCLFFBQUUsRUFBQyxhQUFwQjtBQUFBLDZCQUNFLHFFQUFDLG1EQUFEO0FBQUssaUJBQVMsRUFBQyxTQUFmO0FBQUEsZ0NBQ0UscUVBQUMsbURBQUQsQ0FBSyxJQUFMO0FBQVUsWUFBRSxFQUFFRixnREFBZDtBQUFvQixtQkFBUyxFQUFDLGFBQTlCO0FBQTRDLGNBQUksRUFBQyxvQkFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRSxxRUFBQyxtREFBRCxDQUFLLElBQUw7QUFBVSxZQUFFLEVBQUVBLGdEQUFkO0FBQW9CLG1CQUFTLEVBQUMsYUFBOUI7QUFBNEMsY0FBSSxFQUFDLGdCQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUdFLHFFQUFDLG1EQUFELENBQUssSUFBTDtBQUFVLFlBQUUsRUFBRUEsZ0RBQWQ7QUFBb0IsbUJBQVMsRUFBQyxhQUE5QjtBQUE0QyxjQUFJLEVBQUMsa0JBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGLGVBSUUscUVBQUMsMkRBQUQ7QUFBYSxlQUFLLEVBQUVMLFFBQVEsS0FBSyxFQUFiLEdBQWtCQSxRQUFsQixHQUEyQixPQUEvQztBQUFBLHFCQUNHQSxRQUFRLEtBQUssRUFBYixpQkFDQztBQUFLLHFCQUFTLEVBQUMsTUFBZjtBQUFBLG1DQUNFLHFFQUFDLG9EQUFEO0FBQU8sd0JBQVUsRUFBRUMsV0FBbkI7QUFBZ0MseUJBQVcsRUFBRUc7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkosRUFNR0osUUFBUSxpQkFDVDtBQUFBLG9DQUNFLHFFQUFDLDJEQUFELENBQWEsSUFBYjtBQUFrQixrQkFBSSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUUscUVBQUMsMkRBQUQsQ0FBYSxJQUFiO0FBQWtCLGdCQUFFLEVBQUVLLGdEQUF0QjtBQUE0QixrQkFBSSxFQUFDLFdBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUEsMEJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQThCRDs7R0FwQ1FOLE07O0tBQUFBLE07QUFzQ01BLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZkMGE3NTQ1ZWNmNGRjYjg2ZWQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2LCBOYXZiYXIsIE5hdkRyb3Bkb3duIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuLy9pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vTG9naW4vTG9naW4nO1xyXG5cclxuaW1wb3J0ICcuL2hlYWRlci5tb2R1bGUuY3NzJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyICgpe1xyXG4gIGNvbnN0IFt1c2VybmFtZSxzZXRVc2VyTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdG9rZW4sc2V0VG9rZW5dID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIFxyXG5cclxuICByZXR1cm4oXHJcbiAgICA8TmF2YmFyIGNsYXNzTmFtZT1cIm5hdmJhclwiIGV4cGFuZD0nc20nPlxyXG4gICAgICA8TmF2YmFyLkJyYW5kIGFzPXtMaW5rfSBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxpbWcgaWQ9XCJsb2dvXCIgc3JjPXtyZXF1aXJlKGAuLi8uLi9pbWFnZXMvcGl0YW5nYV9sb2dvX21lbnUucG5nYCkuZGVmYXVsdH0gYWx0PVwiUGl0YW5nYSBsb2dvXCIvPlxyXG4gICAgICA8L05hdmJhci5CcmFuZD5cclxuICAgey8qICAgIDxJbWFnZSBzcmM9e3JlcXVpcmUoJy4uLy4uL2ltYWdlcy9waXRhbmdhMl9sb2dvX2RhcmtfbWVudS5wbmcnKX0gd2lkdGg9ezEwMH0gaGVpZ2h0PXsxMDB9IGFsdD1cIlBpdGFuZ2EgbG9nb1wiLz4gKi99XHJcbiAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJtYWluLW5hdmJhclwiIC8+XHJcbiAgICAgIDxOYXZiYXIuQ29sbGFwc2UgaWQ9XCJtYWluLW5hdmJhclwiPlxyXG4gICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPlxyXG4gICAgICAgICAgPE5hdi5MaW5rIGFzPXtMaW5rfSBjbGFzc05hbWU9XCJuYXZiYXItbGlua1wiIGhyZWY9XCIvUHJvZHVjdHMvUHJvZHVjdHNcIiA+UHJvZHV0b3M8L05hdi5MaW5rPlxyXG4gICAgICAgICAgPE5hdi5MaW5rIGFzPXtMaW5rfSBjbGFzc05hbWU9XCJuYXZiYXItbGlua1wiIGhyZWY9XCIvU3RvcmVzL1N0b3Jlc1wiPkxvamFzPC9OYXYuTGluaz5cclxuICAgICAgICAgIDxOYXYuTGluayBhcz17TGlua30gY2xhc3NOYW1lPVwibmF2YmFyLWxpbmtcIiBocmVmPVwiL0NvbnRhY3QvQ29udGFjdFwiPkNvbnRhdG9zPC9OYXYuTGluaz5cclxuICAgICAgICAgIDxOYXZEcm9wZG93biB0aXRsZT17dXNlcm5hbWUgIT09IFwiXCIgPyB1c2VybmFtZTonTG9naW4nIH0+XHJcbiAgICAgICAgICAgIHt1c2VybmFtZSA9PT0gXCJcIiAmJlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvd1wiPlxyXG4gICAgICAgICAgICAgICAgPExvZ2luIGNoYW5nZU5hbWU9e3NldFVzZXJOYW1lfSBjaGFuZ2VUb2tlbj17c2V0VG9rZW59Lz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7dXNlcm5hbWUgJiZcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiL1wiPlNhaXI8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gYXM9e0xpbmt9IGhyZWY9XCIvbXlPcmRlcnNcIj5NZXVzIFBlZGlkb3M8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L05hdkRyb3Bkb3duPlxyXG4gICAgICAgIDwvTmF2PlxyXG4gICAgICA8L05hdmJhci5Db2xsYXBzZT5cclxuICAgIDwvTmF2YmFyPlxyXG4gICAgXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9