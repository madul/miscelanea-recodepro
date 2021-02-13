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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Login_Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Login/Login */ "./src/components/Login/Login.js");
/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header.module.css */ "./src/components/Header/header.module.css");
/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_header_module_css__WEBPACK_IMPORTED_MODULE_6__);



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
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
        layout: "fill",
        id: "logo",
        src: __webpack_require__(/*! ../../images/pitanga2_logo_dark_menu.png */ "./src/images/pitanga2_logo_dark_menu.png"),
        alt: "Pitanga logo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
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
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Login_Login__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
    lineNumber: 20,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJ1c2VybmFtZSIsInNldFVzZXJOYW1lIiwidXNlU3RhdGUiLCJ0b2tlbiIsInNldFRva2VuIiwiTGluayIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUdBLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFDaEIsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXlCQyxzREFBUSxDQUFDLEVBQUQsQ0FBdkM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQU9DO0FBQVAsTUFBbUJGLHNEQUFRLENBQUMsRUFBRCxDQUFqQztBQUlBLHNCQUNFLHFFQUFDLHNEQUFEO0FBQVEsYUFBUyxFQUFDLFFBQWxCO0FBQTJCLFVBQU0sRUFBQyxJQUFsQztBQUFBLDRCQUNFLHFFQUFDLHNEQUFELENBQVEsS0FBUjtBQUFjLFFBQUUsRUFBRUcsZ0RBQWxCO0FBQXdCLFVBQUksRUFBQyxHQUE3QjtBQUFBLDZCQUNFLHFFQUFDLGlEQUFEO0FBQU8sY0FBTSxFQUFDLE1BQWQ7QUFBcUIsVUFBRSxFQUFDLE1BQXhCO0FBQStCLFdBQUcsRUFBRUMsbUJBQU8sQ0FBRSwwRkFBRixDQUEzQztBQUF5RixXQUFHLEVBQUM7QUFBN0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFLHFFQUFDLHNEQUFELENBQVEsTUFBUjtBQUFlLHVCQUFjO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQUtFLHFFQUFDLHNEQUFELENBQVEsUUFBUjtBQUFpQixRQUFFLEVBQUMsYUFBcEI7QUFBQSw2QkFDRSxxRUFBQyxtREFBRDtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUFBLGdDQUNFLHFFQUFDLG1EQUFELENBQUssSUFBTDtBQUFVLFlBQUUsRUFBRUQsZ0RBQWQ7QUFBb0IsbUJBQVMsRUFBQyxhQUE5QjtBQUE0QyxjQUFJLEVBQUMsb0JBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUscUVBQUMsbURBQUQsQ0FBSyxJQUFMO0FBQVUsWUFBRSxFQUFFQSxnREFBZDtBQUFvQixtQkFBUyxFQUFDLGFBQTlCO0FBQTRDLGNBQUksRUFBQyxnQkFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRSxxRUFBQyxtREFBRCxDQUFLLElBQUw7QUFBVSxZQUFFLEVBQUVBLGdEQUFkO0FBQW9CLG1CQUFTLEVBQUMsYUFBOUI7QUFBNEMsY0FBSSxFQUFDLGtCQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRixlQUlFLHFFQUFDLDJEQUFEO0FBQWEsZUFBSyxFQUFFTCxRQUFRLEtBQUssRUFBYixHQUFrQkEsUUFBbEIsR0FBMkIsT0FBL0M7QUFBQSxxQkFDR0EsUUFBUSxLQUFLLEVBQWIsaUJBQ0M7QUFBSyxxQkFBUyxFQUFDLE1BQWY7QUFBQSxtQ0FDRSxxRUFBQyxvREFBRDtBQUFPLHdCQUFVLEVBQUVDLFdBQW5CO0FBQWdDLHlCQUFXLEVBQUVHO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKLEVBTUdKLFFBQVEsaUJBQ1Q7QUFBQSxvQ0FDRSxxRUFBQywyREFBRCxDQUFhLElBQWI7QUFBa0Isa0JBQUksRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFLHFFQUFDLDJEQUFELENBQWEsSUFBYjtBQUFrQixnQkFBRSxFQUFFSyxnREFBdEI7QUFBNEIsa0JBQUksRUFBQyxXQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRjtBQUFBLDBCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE2QkQ7O0dBbkNRTixNOztLQUFBQSxNO0FBcUNNQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lYTNjYTk4NmQ0ZDFlYTdmZDVlMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5hdiwgTmF2YmFyLCBOYXZEcm9wZG93biB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbi8vaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbmltcG9ydCBMb2dpbiBmcm9tICcuLi9Mb2dpbi9Mb2dpbic7XHJcblxyXG5pbXBvcnQgJy4vaGVhZGVyLm1vZHVsZS5jc3MnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEhlYWRlciAoKXtcclxuICBjb25zdCBbdXNlcm5hbWUsc2V0VXNlck5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Rva2VuLHNldFRva2VuXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPE5hdmJhciBjbGFzc05hbWU9XCJuYXZiYXJcIiBleHBhbmQ9J3NtJz5cclxuICAgICAgPE5hdmJhci5CcmFuZCBhcz17TGlua30gaHJlZj1cIi9cIj5cclxuICAgICAgICA8SW1hZ2UgbGF5b3V0PSdmaWxsJyBpZD1cImxvZ29cIiBzcmM9e3JlcXVpcmUoYC4uLy4uL2ltYWdlcy9waXRhbmdhMl9sb2dvX2RhcmtfbWVudS5wbmdgKX0gYWx0PVwiUGl0YW5nYSBsb2dvXCIvPlxyXG4gICAgICA8L05hdmJhci5CcmFuZD5cclxuICAgICAgPE5hdmJhci5Ub2dnbGUgYXJpYS1jb250cm9scz1cIm1haW4tbmF2YmFyXCIgLz5cclxuICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cIm1haW4tbmF2YmFyXCI+XHJcbiAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+XHJcbiAgICAgICAgICA8TmF2LkxpbmsgYXM9e0xpbmt9IGNsYXNzTmFtZT1cIm5hdmJhci1saW5rXCIgaHJlZj1cIi9Qcm9kdWN0cy9Qcm9kdWN0c1wiID5Qcm9kdXRvczwvTmF2Lkxpbms+XHJcbiAgICAgICAgICA8TmF2LkxpbmsgYXM9e0xpbmt9IGNsYXNzTmFtZT1cIm5hdmJhci1saW5rXCIgaHJlZj1cIi9TdG9yZXMvU3RvcmVzXCI+TG9qYXM8L05hdi5MaW5rPlxyXG4gICAgICAgICAgPE5hdi5MaW5rIGFzPXtMaW5rfSBjbGFzc05hbWU9XCJuYXZiYXItbGlua1wiIGhyZWY9XCIvQ29udGFjdC9Db250YWN0XCI+Q29udGF0b3M8L05hdi5MaW5rPlxyXG4gICAgICAgICAgPE5hdkRyb3Bkb3duIHRpdGxlPXt1c2VybmFtZSAhPT0gXCJcIiA/IHVzZXJuYW1lOidMb2dpbicgfT5cclxuICAgICAgICAgICAge3VzZXJuYW1lID09PSBcIlwiICYmXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93XCI+XHJcbiAgICAgICAgICAgICAgICA8TG9naW4gY2hhbmdlTmFtZT17c2V0VXNlck5hbWV9IGNoYW5nZVRva2VuPXtzZXRUb2tlbn0vPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHt1c2VybmFtZSAmJlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIvXCI+U2FpcjwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBhcz17TGlua30gaHJlZj1cIi9teU9yZGVyc1wiPk1ldXMgUGVkaWRvczwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvTmF2RHJvcGRvd24+XHJcbiAgICAgICAgPC9OYXY+XHJcbiAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxyXG4gICAgPC9OYXZiYXI+XHJcbiAgICBcclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=