webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/Products/Products.js":
/*!****************************************!*\
  !*** ./src/pages/Products/Products.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _components_SideMenu_SideMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/SideMenu/SideMenu */ "./src/components/SideMenu/SideMenu.js");
/* harmony import */ var _actions_cartActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/cartActions */ "./src/actions/cartActions.js");
/* harmony import */ var _Product_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Product.module.css */ "./src/pages/Products/Product.module.css");
/* harmony import */ var _Product_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Product_module_css__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\maria\\Documents\\Recode\\Curso\\ModuloNoSQL\\PitangaCos\\frontend\\src\\pages\\Products\\Products.js",
    _s = $RefreshSig$();







 //import Product from './Product';

const Product = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(_c = () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./Product */ "./src/pages/Products/Product.js")));
_c2 = Product;

function Products(props) {
  _s();

  const {
    0: products,
    1: setProducts
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: categories,
    1: setCategories
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(['todos']);
  const {
    0: currentProducts,
    1: setCurrentProducts
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const mounted = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const url = 'http://localhost:3001/products';
    fetch(url).then(response => response.json()).then(products => {
      if (mounted.current) {
        setProducts(products.products);
        setCurrentProducts(products.products);
      }
    });
    return () => mounted.current = false;
  }, [products]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    async function Categories() {
      if (products) {
        await products.forEach(product => {
          if (categories.indexOf(product["category"]) === -1) {
            setCategories([...categories, product["category"]]);
          }
        });
      }
    }

    Categories();
  });

  const selectCategory = category => {
    if (category === 'todos') {
      setCurrentProducts(products);
    } else if (category === 'perfume') {
      setCurrentProducts(products.filter(product => product["category"] === category));
    } else if (category === 'dailycare') {
      setCurrentProducts(products.filter(product => product["category"] === category));
    } else if (category === 'beard') {
      setCurrentProducts(products.filter(product => product["category"] === category));
    } else if (category === 'hair') {
      setCurrentProducts(products.filter(product => product["category"] === category));
    } else if (category === 'makeup') {
      setCurrentProducts(products.filter(product => product["category"] === category));
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "sectionTitle",
      children: " Products"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      id: "prodBody",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        id: "sectionSideMenu",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SideMenu_SideMenu__WEBPACK_IMPORTED_MODULE_4__["default"], {
          categories: categories,
          selectCategory: selectCategory
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
        fallback: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: __webpack_require__(/*! ../../images/suspense-prod.svg */ "./src/images/suspense-prod.svg").default,
          alt: "card produto loading"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 29
        }, this),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          id: "sectionShowcase",
          children: currentProducts && currentProducts.map(product => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Product, {
            itemsCart: props.itemsCart.itemsCart,
            addItem: props.addItem,
            product: product
          }, product.productID, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 17
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 5
  }, this);
}

_s(Products, "Y7XhcFCktmvjo58D2cjYYmzca5I=");

_c3 = Products;

const mapStateToProps = state => ({
  itemsCart: state.itemsCart
});

const mapDispatchToProps = dispatch => Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])(_actions_cartActions__WEBPACK_IMPORTED_MODULE_5__, dispatch);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Products));

var _c, _c2, _c3;

$RefreshReg$(_c, "Product$lazy");
$RefreshReg$(_c2, "Product");
$RefreshReg$(_c3, "Products");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL1Byb2R1Y3RzL1Byb2R1Y3RzLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3QiLCJsYXp5IiwiUHJvZHVjdHMiLCJwcm9wcyIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJ1c2VTdGF0ZSIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwiY3VycmVudFByb2R1Y3RzIiwic2V0Q3VycmVudFByb2R1Y3RzIiwibW91bnRlZCIsInVzZVJlZiIsInVzZUVmZmVjdCIsInVybCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImN1cnJlbnQiLCJDYXRlZ29yaWVzIiwiZm9yRWFjaCIsInByb2R1Y3QiLCJpbmRleE9mIiwic2VsZWN0Q2F0ZWdvcnkiLCJjYXRlZ29yeSIsImZpbHRlciIsInJlcXVpcmUiLCJkZWZhdWx0IiwibWFwIiwiaXRlbXNDYXJ0IiwiYWRkSXRlbSIsInByb2R1Y3RJRCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJDYXJ0QWN0aW9uIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Q0FHQTs7QUFDQSxNQUFNQSxPQUFPLGdCQUFHQyxrREFBSSxNQUFFLE1BQU0seUhBQVIsQ0FBcEI7TUFBTUQsTzs7QUFJTixTQUFTRSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUFBOztBQUN2QixRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLHNEQUFRLENBQUMsRUFBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDQyxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4QkYsc0RBQVEsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUE1QztBQUNBLFFBQU07QUFBQSxPQUFDRyxlQUFE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QjtBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUUscUVBQUMsOENBQUQ7QUFBVSxnQkFBUSxlQUFFO0FBQUssYUFBRyxFQUFFRyxtQkFBTyxDQUFDLHNFQUFELENBQVAsQ0FBMENDLE9BQXBEO0FBQTZELGFBQUcsRUFBQztBQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFwQjtBQUFBLCtCQUNBO0FBQVMsWUFBRSxFQUFDLGlCQUFaO0FBQUEsb0JBRUtuQixlQUFlLElBQ2RBLGVBQWUsQ0FBQ29CLEdBQWhCLENBQW9CUCxPQUFPLGlCQUN6QixxRUFBQyxPQUFEO0FBQWtDLHFCQUFTLEVBQUVuQixLQUFLLENBQUMyQixTQUFOLENBQWdCQSxTQUE3RDtBQUF3RSxtQkFBTyxFQUFFM0IsS0FBSyxDQUFDNEIsT0FBdkY7QUFBZ0csbUJBQU8sRUFBRVQ7QUFBekcsYUFBZUEsT0FBTyxDQUFDVSxTQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFCRDs7R0F4RVE5QixROztNQUFBQSxROztBQTBFVCxNQUFNK0IsZUFBZSxHQUFHQyxLQUFLLEtBQUk7QUFDL0JKLFdBQVMsRUFBRUksS0FBSyxDQUFDSjtBQURjLENBQUosQ0FBN0I7O0FBR0EsTUFBTUssa0JBQWtCLEdBQUlDLFFBQUQsSUFDckJDLGdFQUFrQixDQUFDQyxpREFBRCxFQUFhRixRQUFiLENBRHhCOztBQUdlRywwSEFBTyxDQUFDTixlQUFELEVBQWtCRSxrQkFBbEIsQ0FBUCxDQUE2Q2pDLFFBQTdDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjFhNTA4MzYzYjBlODlkOTMwY2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmLCBsYXp5LCBTdXNwZW5zZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNpZGVNZW51IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NpZGVNZW51L1NpZGVNZW51XCI7XHJcblxyXG5pbXBvcnQgKiBhcyBDYXJ0QWN0aW9uIGZyb20gJy4uLy4uL2FjdGlvbnMvY2FydEFjdGlvbnMnO1xyXG5pbXBvcnQgJy4vUHJvZHVjdC5tb2R1bGUuY3NzJztcclxuXHJcbi8vaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi9Qcm9kdWN0JztcclxuY29uc3QgUHJvZHVjdCA9IGxhenkgKCgpID0+IGltcG9ydCgnLi9Qcm9kdWN0JykpXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RzKHByb3BzKSB7XHJcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoWyd0b2RvcyddKTtcclxuICBjb25zdCBbY3VycmVudFByb2R1Y3RzLCBzZXRDdXJyZW50UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IG1vdW50ZWQgPSB1c2VSZWYodHJ1ZSk7XHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT57XHJcbiAgICBjb25zdCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAxL3Byb2R1Y3RzJztcclxuICAgIGZldGNoKHVybClcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbiggcHJvZHVjdHMgPT4ge1xyXG4gICAgICAgIGlmKG1vdW50ZWQuY3VycmVudCkgeyAgICAgICAgIFxyXG4gICAgICAgIHNldFByb2R1Y3RzKHByb2R1Y3RzLnByb2R1Y3RzKTtcclxuICAgICAgICBzZXRDdXJyZW50UHJvZHVjdHMocHJvZHVjdHMucHJvZHVjdHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IG1vdW50ZWQuY3VycmVudCA9IGZhbHNlO1xyXG4gIH0sW3Byb2R1Y3RzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBDYXRlZ29yaWVzKCl7XHJcblxyXG4gICAgICBpZiAocHJvZHVjdHMpe1xyXG4gICAgICAgIGF3YWl0IHByb2R1Y3RzLmZvckVhY2gocHJvZHVjdCA9PiB7XHJcbiAgICAgICAgICBpZiAoY2F0ZWdvcmllcy5pbmRleE9mKHByb2R1Y3RbXCJjYXRlZ29yeVwiXSkgPT09IC0xKXtcclxuICAgICAgICAgICAgc2V0Q2F0ZWdvcmllcyhbLi4uY2F0ZWdvcmllcyxwcm9kdWN0W1wiY2F0ZWdvcnlcIl1dKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTsgIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBDYXRlZ29yaWVzKClcclxuICB9KVxyXG5cclxuICBjb25zdCBzZWxlY3RDYXRlZ29yeSA9IChjYXRlZ29yeSkgPT57XHJcbiAgICBcclxuICAgIGlmIChjYXRlZ29yeSA9PT0gJ3RvZG9zJyl7XHJcbiAgICAgIHNldEN1cnJlbnRQcm9kdWN0cyhwcm9kdWN0cyk7XHJcbiAgICB9IGVsc2UgaWYgKGNhdGVnb3J5ID09PSAncGVyZnVtZScpe1xyXG4gICAgICBzZXRDdXJyZW50UHJvZHVjdHMocHJvZHVjdHMuZmlsdGVyKHByb2R1Y3QgPT4gcHJvZHVjdFtcImNhdGVnb3J5XCJdID09PSBjYXRlZ29yeSkpO1xyXG4gICAgfSBlbHNlIGlmIChjYXRlZ29yeSA9PT0gJ2RhaWx5Y2FyZScpe1xyXG4gICAgICBzZXRDdXJyZW50UHJvZHVjdHMocHJvZHVjdHMuZmlsdGVyKHByb2R1Y3QgPT4gcHJvZHVjdFtcImNhdGVnb3J5XCJdID09PSBjYXRlZ29yeSkpO1xyXG4gICAgfSBlbHNlIGlmIChjYXRlZ29yeSA9PT0gJ2JlYXJkJyl7XHJcbiAgICAgIHNldEN1cnJlbnRQcm9kdWN0cyhwcm9kdWN0cy5maWx0ZXIocHJvZHVjdCA9PiBwcm9kdWN0W1wiY2F0ZWdvcnlcIl0gPT09IGNhdGVnb3J5KSk7XHJcbiAgICB9IGVsc2UgaWYgKGNhdGVnb3J5ID09PSAnaGFpcicpe1xyXG4gICAgICBzZXRDdXJyZW50UHJvZHVjdHMocHJvZHVjdHMuZmlsdGVyKHByb2R1Y3QgPT4gcHJvZHVjdFtcImNhdGVnb3J5XCJdID09PSBjYXRlZ29yeSkpO1xyXG4gICAgfSBlbHNlIGlmIChjYXRlZ29yeSA9PT0gJ21ha2V1cCcpe1xyXG4gICAgICBzZXRDdXJyZW50UHJvZHVjdHMocHJvZHVjdHMuZmlsdGVyKHByb2R1Y3QgPT4gcHJvZHVjdFtcImNhdGVnb3J5XCJdID09PSBjYXRlZ29yeSkpO1xyXG4gICAgfSAgICBcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwic2VjdGlvblRpdGxlXCI+IFByb2R1Y3RzPC9oMT5cclxuICAgICAgPHNlY3Rpb24gaWQ9XCJwcm9kQm9keVwiPlxyXG4gICAgICAgIDxzZWN0aW9uIGlkPVwic2VjdGlvblNpZGVNZW51XCI+XHJcbiAgICAgICAgICA8U2lkZU1lbnUgIGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9IHNlbGVjdENhdGVnb3J5PXtzZWxlY3RDYXRlZ29yeX0gLz5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8aW1nIHNyYz17cmVxdWlyZSgnLi4vLi4vaW1hZ2VzL3N1c3BlbnNlLXByb2Quc3ZnJykuZGVmYXVsdH0gYWx0PVwiY2FyZCBwcm9kdXRvIGxvYWRpbmdcIi8+fT5cclxuICAgICAgICA8c2VjdGlvbiBpZD1cInNlY3Rpb25TaG93Y2FzZVwiPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIHtjdXJyZW50UHJvZHVjdHMgJiZcclxuICAgICAgICAgICAgICBjdXJyZW50UHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8UHJvZHVjdCAga2V5PXtwcm9kdWN0LnByb2R1Y3RJRH0gaXRlbXNDYXJ0PXtwcm9wcy5pdGVtc0NhcnQuaXRlbXNDYXJ0fSBhZGRJdGVtPXtwcm9wcy5hZGRJdGVtfSBwcm9kdWN0PXtwcm9kdWN0fSAvPiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9TdXNwZW5zZT5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+KHtcclxuICBpdGVtc0NhcnQ6IHN0YXRlLml0ZW1zQ2FydFxyXG59KVxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IFxyXG4gICAgICBiaW5kQWN0aW9uQ3JlYXRvcnMoQ2FydEFjdGlvbiwgZGlzcGF0Y2gpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUHJvZHVjdHMpIl0sInNvdXJjZVJvb3QiOiIifQ==