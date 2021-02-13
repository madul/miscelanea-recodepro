module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/Products/Products": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/Products/Products.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./src/actions/cartActions.js":
/*!************************************!*\
  !*** ./src/actions/cartActions.js ***!
  \************************************/
/*! exports provided: addItem, removeItem, deleteItem, alterQItem, discardCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItem", function() { return addItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItem", function() { return removeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteItem", function() { return deleteItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alterQItem", function() { return alterQItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "discardCart", function() { return discardCart; });
const indexAndList = (state, item) => {
  let indexItem = state.map((itemList, index) => itemList.product.productID == item.product.productID ? index : -1).find(value => value >= 0);
  let listCopy = [...state];
  return [indexItem, listCopy];
};

const addItem = (state, item) => {
  let [indexItem, listCopy] = indexAndList(state, item);

  if (indexItem >= 0) {
    listCopy[indexItem]["quantity"] += 1;
    return {
      type: "ADD_ITEM",
      items: listCopy
    };
  } else {
    if (listCopy[0].quantity == 0) {
      listCopy[0].quantity = 1;
      listCopy[0].product = item.product;
    } else {
      listCopy.push({
        quantity: 1,
        product: item.product
      });
    }

    return {
      type: "ADD_ITEM",
      items: listCopy
    };
  }
};
const removeItem = (state, item) => {
  let [indexItem, listCopy] = indexAndList(state, item);

  if (listCopy[indexItem]["quantity"] > 0) {
    listCopy[indexItem]["quantity"] -= 1;

    if (listCopy[indexItem]["quantity"] == 0) {
      let listAux = deleteItem(state, item).items;
      listCopy = listAux.length > 0 ? listAux : [{
        quantity: 0,
        product: {}
      }];
    }

    return {
      type: "REMOVE_ITEM",
      items: listCopy
    };
  }

  return {
    type: "REMOVE_ITEM",
    items: state
  };
};
const deleteItem = (state, item) => {
  let [indexItem, listCopy] = indexAndList(state, item);

  if (indexItem >= 0) {
    listCopy.splice(indexItem, 1);
    listCopy = listCopy.length > 0 ? listCopy : [{
      quantity: 0,
      product: {}
    }];
    return {
      type: "DELETE_ITEM",
      items: listCopy
    };
  }

  return {
    type: "DELETE_ITEM",
    items: state
  };
};
const alterQItem = (state, item, newQtd) => {
  let [indexItem, listCopy] = indexAndList(state, item);

  if (indexItem >= 0) {
    listCopy[indexItem]["quantity"] = newQtd;
    return {
      type: "ALTER_Q_ITEM",
      items: listCopy
    };
  }

  return {
    type: "DELETE_ITEM",
    items: state
  };
};
const discardCart = () => {
  return {
    type: "DISCARD_CART"
  };
};

/***/ }),

/***/ "./src/components/SideMenu/SideMenu.js":
/*!*********************************************!*\
  !*** ./src/components/SideMenu/SideMenu.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SideMenu; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\maria\\Documents\\Recode\\Curso\\ModuloNoSQL\\PitangaCos\\frontend\\src\\components\\SideMenu\\SideMenu.js";


const PortugueseCategory = {
  "todos": "Todos",
  "perfume": "Perfume",
  "dailycare": "Cuidados diários",
  "beard": "Barba",
  "hair": "Cabelo",
  "makeup": "Maquiagem"
};

function SMenuItem(props) {
  const handleClick = e => {
    e.preventDefault();
    props.selectCategory(props.category);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    onClick: handleClick,
    children: PortugueseCategory[props.category]
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

function SideMenu(props) {
  let history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();

  function clickToOrder(e) {
    e.preventDefault();
    history.push('./buy');
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
    id: "sideMenu",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      id: "order",
      className: "sideMenuMainLinks",
      onClick: clickToOrder,
      children: "Fazer pedido"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      className: "sideMenuMainLinks",
      children: "Categorias"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: props.categories && props.categories.map(category => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SMenuItem, {
        selectCategory: props.selectCategory,
        category: category
      }, category, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/images/suspense-prod.svg":
/*!**************************************!*\
  !*** ./src/images/suspense-prod.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDMwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjEiIHk9IjEiIHdpZHRoPSIyOTgiIGhlaWdodD0iMzk4IiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSIjRkZCOEFBIiBzdHJva2Utd2lkdGg9IjIiLz4KPHJlY3QgeD0iMzUiIHk9IjMwIiB3aWR0aD0iMjMwIiBoZWlnaHQ9IjE4MCIgZmlsbD0iI0U2RTFFMSIvPgo8cmVjdCB4PSI1OSIgeT0iMjQzIiB3aWR0aD0iMTgyIiBoZWlnaHQ9IjM1IiBmaWxsPSIjRTZFMUUxIi8+CjxyZWN0IHg9Ijc2IiB5PSIzMzQiIHdpZHRoPSIxNDciIGhlaWdodD0iNDUiIGZpbGw9IiNFNkUxRTEiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./src/pages/Products/Product.module.css":
/*!***********************************************!*\
  !*** ./src/pages/Products/Product.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/Products/Products.js":
/*!****************************************!*\
  !*** ./src/pages/Products/Products.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_SideMenu_SideMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/SideMenu/SideMenu */ "./src/components/SideMenu/SideMenu.js");
/* harmony import */ var _actions_cartActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/cartActions */ "./src/actions/cartActions.js");
/* harmony import */ var _Product_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Product.module.css */ "./src/pages/Products/Product.module.css");
/* harmony import */ var _Product_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Product_module_css__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\maria\\Documents\\Recode\\Curso\\ModuloNoSQL\\PitangaCos\\frontend\\src\\pages\\Products\\Products.js";






 //import Product from './Product';

const Product = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./Product */ "./src/pages/Products/Product.js")));

function Products(props) {
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

const mapStateToProps = state => ({
  itemsCart: state.itemsCart
});

const mapDispatchToProps = dispatch => Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])(_actions_cartActions__WEBPACK_IMPORTED_MODULE_5__, dispatch);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Products));

/***/ }),

/***/ "@testing-library/jest-dom":
/*!********************************************!*\
  !*** external "@testing-library/jest-dom" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@testing-library/jest-dom");

/***/ }),

/***/ "@testing-library/react":
/*!*****************************************!*\
  !*** external "@testing-library/react" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@testing-library/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-bootstrap/Button":
/*!*****************************************!*\
  !*** external "react-bootstrap/Button" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ "react-bootstrap/Form":
/*!***************************************!*\
  !*** external "react-bootstrap/Form" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Form");

/***/ }),

/***/ "react-bootstrap/ListGroup":
/*!********************************************!*\
  !*** external "react-bootstrap/ListGroup" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/ListGroup");

/***/ }),

/***/ "react-bootstrap/Modal":
/*!****************************************!*\
  !*** external "react-bootstrap/Modal" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Modal");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "web-vitals":
/*!*****************************!*\
  !*** external "web-vitals" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web-vitals");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jYXJ0QWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaWRlTWVudS9TaWRlTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3N1c3BlbnNlLXByb2Quc3ZnIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Qcm9kdWN0cy9Qcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAdGVzdGluZy1saWJyYXJ5L2plc3QtZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHRlc3RpbmctbGlicmFyeS9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL0xpc3RHcm91cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9Nb2RhbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2ViLXZpdGFsc1wiIl0sIm5hbWVzIjpbImluZGV4QW5kTGlzdCIsInN0YXRlIiwiaXRlbSIsImluZGV4SXRlbSIsIm1hcCIsIml0ZW1MaXN0IiwiaW5kZXgiLCJwcm9kdWN0IiwicHJvZHVjdElEIiwiZmluZCIsInZhbHVlIiwibGlzdENvcHkiLCJhZGRJdGVtIiwidHlwZSIsIml0ZW1zIiwicXVhbnRpdHkiLCJwdXNoIiwicmVtb3ZlSXRlbSIsImxpc3RBdXgiLCJkZWxldGVJdGVtIiwibGVuZ3RoIiwic3BsaWNlIiwiYWx0ZXJRSXRlbSIsIm5ld1F0ZCIsImRpc2NhcmRDYXJ0IiwiUG9ydHVndWVzZUNhdGVnb3J5IiwiU01lbnVJdGVtIiwicHJvcHMiLCJoYW5kbGVDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNlbGVjdENhdGVnb3J5IiwiY2F0ZWdvcnkiLCJTaWRlTWVudSIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5IiwiY2xpY2tUb09yZGVyIiwiY2F0ZWdvcmllcyIsIlByb2R1Y3QiLCJsYXp5IiwiUHJvZHVjdHMiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwidXNlU3RhdGUiLCJzZXRDYXRlZ29yaWVzIiwiY3VycmVudFByb2R1Y3RzIiwic2V0Q3VycmVudFByb2R1Y3RzIiwibW91bnRlZCIsInVzZVJlZiIsInVzZUVmZmVjdCIsInVybCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImN1cnJlbnQiLCJDYXRlZ29yaWVzIiwiZm9yRWFjaCIsImluZGV4T2YiLCJmaWx0ZXIiLCJyZXF1aXJlIiwiZGVmYXVsdCIsIml0ZW1zQ2FydCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiQ2FydEFjdGlvbiIsImNvbm5lY3QiXSwi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Q0FBN0I7O0FBR0EsTUFBTUUsa0JBQWtCLEdBQUlDLFFBQUQsSUFDckJDLGdFQUFrQixDQUFDQyxpREFBRCxFQUFhRixRQUFiLENBRHhCOztBQUdlRywwSEFBTyxDQUFDTCxlQUFELEVBQWtCQyxrQkFBbEIsQ0FBUCxDQUE2Q3hCLFFBQTdDLENBQWYsRTs7Ozs7Ozs7Ozs7QUM5RkEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoicGFnZXMvUHJvZHVjdHMvUHJvZHVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwYWdlcy9Qcm9kdWN0cy9Qcm9kdWN0c1wiOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyByZXF1aXJlKCkgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IDApIHtcbiBcdFx0XHR2YXIgY2h1bmsgPSByZXF1aXJlKFwiLi4vLi4vXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIik7XG4gXHRcdFx0dmFyIG1vcmVNb2R1bGVzID0gY2h1bmsubW9kdWxlcywgY2h1bmtJZHMgPSBjaHVuay5pZHM7XG4gXHRcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0lkcy5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvUHJvZHVjdHMvUHJvZHVjdHMuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwiY29uc3QgaW5kZXhBbmRMaXN0ID0gKHN0YXRlLCBpdGVtKSA9PiB7XHJcbiAgbGV0IGluZGV4SXRlbSA9IHN0YXRlLm1hcCgoaXRlbUxpc3QsIGluZGV4KSA9PiAgXHJcbiAgICAgIGl0ZW1MaXN0LnByb2R1Y3QucHJvZHVjdElEID09IGl0ZW0ucHJvZHVjdC5wcm9kdWN0SUQ/IGluZGV4Oi0xKS5maW5kKCh2YWx1ZSk9PnZhbHVlID49IDApO1xyXG4gIFxyXG4gIGxldCBsaXN0Q29weSA9IFsuLi5zdGF0ZV07XHJcblxyXG4gIHJldHVybiBbaW5kZXhJdGVtLCAgbGlzdENvcHldXHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWRkSXRlbSA9IChzdGF0ZSxpdGVtKSA9PiB7XHJcbiAgXHJcbiAgbGV0IFtpbmRleEl0ZW0sIGxpc3RDb3B5XSA9IGluZGV4QW5kTGlzdChzdGF0ZSxpdGVtKVxyXG5cclxuICBpZihpbmRleEl0ZW0gPj0wKXtcclxuICAgbGlzdENvcHlbaW5kZXhJdGVtXVtcInF1YW50aXR5XCJdICs9MTtcclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgIHR5cGU6IFwiQUREX0lURU1cIixcclxuICAgICAgaXRlbXM6IGxpc3RDb3B5XHJcbiAgICB9XHJcbiAgfSBlbHNle1xyXG4gICAgaWYobGlzdENvcHlbMF0ucXVhbnRpdHkgPT0gMCl7XHJcbiAgICAgIGxpc3RDb3B5WzBdLnF1YW50aXR5ID0gMTtcclxuICAgICAgbGlzdENvcHlbMF0ucHJvZHVjdCA9IGl0ZW0ucHJvZHVjdCAgIFxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICBsaXN0Q29weS5wdXNoKHtxdWFudGl0eTogMSwgcHJvZHVjdDppdGVtLnByb2R1Y3R9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJue1xyXG4gICAgICB0eXBlOiBcIkFERF9JVEVNXCIsXHJcbiAgICAgIGl0ZW1zOiBsaXN0Q29weVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUl0ZW0gPSAoc3RhdGUsaXRlbSkgPT4ge1xyXG4gIGxldCBbaW5kZXhJdGVtLCBsaXN0Q29weV0gPSBpbmRleEFuZExpc3Qoc3RhdGUsaXRlbSlcclxuICBcclxuICBpZihsaXN0Q29weVtpbmRleEl0ZW1dW1wicXVhbnRpdHlcIl0gPiAwKXtcclxuICAgIGxpc3RDb3B5W2luZGV4SXRlbV1bXCJxdWFudGl0eVwiXSAtPTE7XHJcblxyXG4gICAgaWYobGlzdENvcHlbaW5kZXhJdGVtXVtcInF1YW50aXR5XCJdID09IDApe1xyXG4gICAgICBsZXQgbGlzdEF1eCA9IGRlbGV0ZUl0ZW0oc3RhdGUsIGl0ZW0pLml0ZW1zXHJcblxyXG4gICAgICBsaXN0Q29weSA9IGxpc3RBdXgubGVuZ3RoID4gMCA/IGxpc3RBdXggOiBbe3F1YW50aXR5OjAsIHByb2R1Y3Q6e319XVxyXG4gIFxyXG4gICAgfSBcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IFwiUkVNT1ZFX0lURU1cIixcclxuICAgICAgaXRlbXM6IGxpc3RDb3B5XHJcbiAgICB9XHJcbiAgfSAgICAgXHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFwiUkVNT1ZFX0lURU1cIixcclxuICAgIGl0ZW1zOiBzdGF0ZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUl0ZW0gPSAoc3RhdGUsaXRlbSkgPT4ge1xyXG4gIGxldCBbaW5kZXhJdGVtLCBsaXN0Q29weV0gPSBpbmRleEFuZExpc3Qoc3RhdGUsaXRlbSlcclxuXHJcbiAgaWYgKGluZGV4SXRlbSA+PTApIHtcclxuICAgIGxpc3RDb3B5LnNwbGljZShpbmRleEl0ZW0sMSlcclxuICAgIFxyXG4gICAgbGlzdENvcHkgPSBsaXN0Q29weS5sZW5ndGggPiAwID8gbGlzdENvcHkgOiBbe3F1YW50aXR5OjAsIHByb2R1Y3Q6e319XVxyXG4gICAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBcIkRFTEVURV9JVEVNXCIsXHJcbiAgICAgIGl0ZW1zOiBsaXN0Q29weVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogXCJERUxFVEVfSVRFTVwiLFxyXG4gICAgaXRlbXM6IHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWx0ZXJRSXRlbSA9IChzdGF0ZSwgaXRlbSxuZXdRdGQpID0+IHtcclxuICBsZXQgW2luZGV4SXRlbSwgbGlzdENvcHldID0gaW5kZXhBbmRMaXN0KHN0YXRlLGl0ZW0pXHJcblxyXG4gICAgaWYgKGluZGV4SXRlbSA+PTApIHtcclxuICAgICAgbGlzdENvcHlbaW5kZXhJdGVtXVtcInF1YW50aXR5XCJdID0gbmV3UXRkO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFwiQUxURVJfUV9JVEVNXCIsXHJcbiAgICAgICAgaXRlbXM6IGxpc3RDb3B5XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IFwiREVMRVRFX0lURU1cIixcclxuICAgICAgaXRlbXM6IHN0YXRlXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IGRpc2NhcmRDYXJ0ID0gKCkgPT57XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFwiRElTQ0FSRF9DQVJUXCJcclxuICB9XHJcbn0iLCJpbXBvcnQgIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7dXNlSGlzdG9yeX0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmNvbnN0IFBvcnR1Z3Vlc2VDYXRlZ29yeSA9IHtcInRvZG9zXCI6IFwiVG9kb3NcIiwgXCJwZXJmdW1lXCI6XCJQZXJmdW1lXCIsIFwiZGFpbHljYXJlXCI6XCJDdWlkYWRvcyBkacOhcmlvc1wiLCBcImJlYXJkXCI6XCJCYXJiYVwiLCBcImhhaXJcIjpcIkNhYmVsb1wiLFwibWFrZXVwXCI6XCJNYXF1aWFnZW1cIn1cclxuXHJcbmZ1bmN0aW9uIFNNZW51SXRlbShwcm9wcyl7XHJcbiAgXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgcHJvcHMuc2VsZWN0Q2F0ZWdvcnkocHJvcHMuY2F0ZWdvcnkpO1xyXG4gIH1cclxuIFxyXG4gIFxyXG4gIHJldHVybihcclxuICAgIDxsaSAgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgIHtQb3J0dWd1ZXNlQ2F0ZWdvcnlbcHJvcHMuY2F0ZWdvcnldfSAgIFxyXG4gICAgPC9saT5cclxuICApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZU1lbnUocHJvcHMpe1xyXG4gIGxldCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG4gIGZ1bmN0aW9uIGNsaWNrVG9PcmRlcihlKXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGhpc3RvcnkucHVzaCgnLi9idXknKTtcclxuICB9ICBcclxuICByZXR1cm4oXHJcbiAgICA8bmF2IGlkPVwic2lkZU1lbnVcIj5cclxuICAgICAgPGxpIGlkPVwib3JkZXJcIiBjbGFzc05hbWU9XCJzaWRlTWVudU1haW5MaW5rc1wiIG9uQ2xpY2s9e2NsaWNrVG9PcmRlcn0+RmF6ZXIgcGVkaWRvPC9saT5cclxuICAgICAgPGxpIGNsYXNzTmFtZT1cInNpZGVNZW51TWFpbkxpbmtzXCI+Q2F0ZWdvcmlhczwvbGk+XHJcbiAgICAgIFxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgeyBwcm9wcy5jYXRlZ29yaWVzICYmXHJcbiAgICAgICAgICBwcm9wcy5jYXRlZ29yaWVzLm1hcCggY2F0ZWdvcnkgPT5cclxuICAgICAgICAgICAgPFNNZW51SXRlbSBrZXk9e2NhdGVnb3J5fSBzZWxlY3RDYXRlZ29yeT17cHJvcHMuc2VsZWN0Q2F0ZWdvcnl9ICBjYXRlZ29yeT17Y2F0ZWdvcnl9Lz5cclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L25hdj5cclxuKTtcclxufSIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTXpBd0lpQm9aV2xuYUhROUlqUXdNQ0lnZG1sbGQwSnZlRDBpTUNBd0lETXdNQ0EwTURBaUlHWnBiR3c5SW01dmJtVWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStDanh5WldOMElIZzlJakVpSUhrOUlqRWlJSGRwWkhSb1BTSXlPVGdpSUdobGFXZG9kRDBpTXprNElpQm1hV3hzUFNKM2FHbDBaU0lnYzNSeWIydGxQU0lqUmtaQ09FRkJJaUJ6ZEhKdmEyVXRkMmxrZEdnOUlqSWlMejRLUEhKbFkzUWdlRDBpTXpVaUlIazlJak13SWlCM2FXUjBhRDBpTWpNd0lpQm9aV2xuYUhROUlqRTRNQ0lnWm1sc2JEMGlJMFUyUlRGRk1TSXZQZ284Y21WamRDQjRQU0kxT1NJZ2VUMGlNalF6SWlCM2FXUjBhRDBpTVRneUlpQm9aV2xuYUhROUlqTTFJaUJtYVd4c1BTSWpSVFpGTVVVeElpOCtDanh5WldOMElIZzlJamMySWlCNVBTSXpNelFpSUhkcFpIUm9QU0l4TkRjaUlHaGxhV2RvZEQwaU5EVWlJR1pwYkd3OUlpTkZOa1V4UlRFaUx6NEtQQzl6ZG1jK0NnPT1cIiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmLCBsYXp5LCBTdXNwZW5zZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNpZGVNZW51IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NpZGVNZW51L1NpZGVNZW51XCI7XHJcblxyXG5pbXBvcnQgKiBhcyBDYXJ0QWN0aW9uIGZyb20gJy4uLy4uL2FjdGlvbnMvY2FydEFjdGlvbnMnO1xyXG5pbXBvcnQgJy4vUHJvZHVjdC5tb2R1bGUuY3NzJztcclxuXHJcbi8vaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi9Qcm9kdWN0JztcclxuY29uc3QgUHJvZHVjdCA9IGxhenkgKCgpID0+IGltcG9ydCgnLi9Qcm9kdWN0JykpXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RzKHByb3BzKSB7XHJcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoWyd0b2RvcyddKTtcclxuICBjb25zdCBbY3VycmVudFByb2R1Y3RzLCBzZXRDdXJyZW50UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IG1vdW50ZWQgPSB1c2VSZWYodHJ1ZSk7XHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT57XHJcbiAgICBjb25zdCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAxL3Byb2R1Y3RzJztcclxuICAgIGZldGNoKHVybClcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbiggcHJvZHVjdHMgPT4ge1xyXG4gICAgICAgIGlmKG1vdW50ZWQuY3VycmVudCkgeyAgICAgICAgIFxyXG4gICAgICAgIHNldFByb2R1Y3RzKHByb2R1Y3RzLnByb2R1Y3RzKTtcclxuICAgICAgICBzZXRDdXJyZW50UHJvZHVjdHMocHJvZHVjdHMucHJvZHVjdHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IG1vdW50ZWQuY3VycmVudCA9IGZhbHNlO1xyXG4gIH0sW3Byb2R1Y3RzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBDYXRlZ29yaWVzKCl7XHJcblxyXG4gICAgICBpZiAocHJvZHVjdHMpe1xyXG4gICAgICAgIGF3YWl0IHByb2R1Y3RzLmZvckVhY2gocHJvZHVjdCA9PiB7XHJcbiAgICAgICAgICBpZiAoY2F0ZWdvcmllcy5pbmRleE9mKHByb2R1Y3RbXCJjYXRlZ29yeVwiXSkgPT09IC0xKXtcclxuICAgICAgICAgICAgc2V0Q2F0ZWdvcmllcyhbLi4uY2F0ZWdvcmllcyxwcm9kdWN0W1wiY2F0ZWdvcnlcIl1dKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTsgIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBDYXRlZ29yaWVzKClcclxuICB9KVxyXG5cclxuICBjb25zdCBzZWxlY3RDYXRlZ29yeSA9IChjYXRlZ29yeSkgPT57XHJcbiAgICBcclxuICAgIGlmIChjYXRlZ29yeSA9PT0gJ3RvZG9zJyl7XHJcbiAgICAgIHNldEN1cnJlbnRQcm9kdWN0cyhwcm9kdWN0cyk7XHJcbiAgICB9IGVsc2UgaWYgKGNhdGVnb3J5ID09PSAncGVyZnVtZScpe1xyXG4gICAgICBzZXRDdXJyZW50UHJvZHVjdHMocHJvZHVjdHMuZmlsdGVyKHByb2R1Y3QgPT4gcHJvZHVjdFtcImNhdGVnb3J5XCJdID09PSBjYXRlZ29yeSkpO1xyXG4gICAgfSBlbHNlIGlmIChjYXRlZ29yeSA9PT0gJ2RhaWx5Y2FyZScpe1xyXG4gICAgICBzZXRDdXJyZW50UHJvZHVjdHMocHJvZHVjdHMuZmlsdGVyKHByb2R1Y3QgPT4gcHJvZHVjdFtcImNhdGVnb3J5XCJdID09PSBjYXRlZ29yeSkpO1xyXG4gICAgfSBlbHNlIGlmIChjYXRlZ29yeSA9PT0gJ2JlYXJkJyl7XHJcbiAgICAgIHNldEN1cnJlbnRQcm9kdWN0cyhwcm9kdWN0cy5maWx0ZXIocHJvZHVjdCA9PiBwcm9kdWN0W1wiY2F0ZWdvcnlcIl0gPT09IGNhdGVnb3J5KSk7XHJcbiAgICB9IGVsc2UgaWYgKGNhdGVnb3J5ID09PSAnaGFpcicpe1xyXG4gICAgICBzZXRDdXJyZW50UHJvZHVjdHMocHJvZHVjdHMuZmlsdGVyKHByb2R1Y3QgPT4gcHJvZHVjdFtcImNhdGVnb3J5XCJdID09PSBjYXRlZ29yeSkpO1xyXG4gICAgfSBlbHNlIGlmIChjYXRlZ29yeSA9PT0gJ21ha2V1cCcpe1xyXG4gICAgICBzZXRDdXJyZW50UHJvZHVjdHMocHJvZHVjdHMuZmlsdGVyKHByb2R1Y3QgPT4gcHJvZHVjdFtcImNhdGVnb3J5XCJdID09PSBjYXRlZ29yeSkpO1xyXG4gICAgfSAgICBcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwic2VjdGlvblRpdGxlXCI+IFByb2R1Y3RzPC9oMT5cclxuICAgICAgPHNlY3Rpb24gaWQ9XCJwcm9kQm9keVwiPlxyXG4gICAgICAgIDxzZWN0aW9uIGlkPVwic2VjdGlvblNpZGVNZW51XCI+XHJcbiAgICAgICAgICA8U2lkZU1lbnUgIGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9IHNlbGVjdENhdGVnb3J5PXtzZWxlY3RDYXRlZ29yeX0gLz5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8aW1nIHNyYz17cmVxdWlyZSgnLi4vLi4vaW1hZ2VzL3N1c3BlbnNlLXByb2Quc3ZnJykuZGVmYXVsdH0gYWx0PVwiY2FyZCBwcm9kdXRvIGxvYWRpbmdcIi8+fT5cclxuICAgICAgICA8c2VjdGlvbiBpZD1cInNlY3Rpb25TaG93Y2FzZVwiPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIHtjdXJyZW50UHJvZHVjdHMgJiZcclxuICAgICAgICAgICAgICBjdXJyZW50UHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8UHJvZHVjdCAga2V5PXtwcm9kdWN0LnByb2R1Y3RJRH0gaXRlbXNDYXJ0PXtwcm9wcy5pdGVtc0NhcnQuaXRlbXNDYXJ0fSBhZGRJdGVtPXtwcm9wcy5hZGRJdGVtfSBwcm9kdWN0PXtwcm9kdWN0fSAvPiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9TdXNwZW5zZT5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+KHtcclxuICBpdGVtc0NhcnQ6IHN0YXRlLml0ZW1zQ2FydFxyXG59KVxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IFxyXG4gICAgICBiaW5kQWN0aW9uQ3JlYXRvcnMoQ2FydEFjdGlvbiwgZGlzcGF0Y2gpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUHJvZHVjdHMpIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHRlc3RpbmctbGlicmFyeS9qZXN0LWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAdGVzdGluZy1saWJyYXJ5L3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9Gb3JtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9MaXN0R3JvdXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL01vZGFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWItdml0YWxzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=