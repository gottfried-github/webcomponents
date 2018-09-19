/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/product-category.js":
/*!********************************************!*\
  !*** ./src/components/product-category.js ***!
  \********************************************/
/*! exports provided: ProductCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCategory", function() { return ProductCategory; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var templateStr = "<style>:host {\n    display: flex;\n  }\n\n  .category-info-slot-container, .featured-work-slot-container {\n    /**/\n    flex-grow: 1;\n    min-width: 50%;\n  }\n\n  .category-info-slot-container {\n    /*\n    background-color: blue;\n    */\n  }\n\n  .featured-work-slot-container {\n    /*\n    background-color: yellow;\n    */\n  }\n\n  /*\n  .category-info h1 {\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n  }\n\n  .category-info p {\n    font-family: var(--font-family-p);\n    font-weight: var(--font-weight-p);\n  }\n\n  .featured-work-slot-container {\n    display: flex;\n    flex-direction: column;\n  }\n  */\n\n  @media (max-width: 1500px) {\n    :host {\n      flex-direction: column;\n    }\n  }\n\n  @media (min-width: 1501px) {\n    .category-info, .featured-work-slot-container {\n      min-width: 50%;\n\n      /*\n      flex-grow: 1;\n      */\n    }\n  }</style><div class=\"category-info-slot-container\"><slot name=\"info\"></slot></div><div class=\"featured-work-slot-container\"><slot name=\"featured-work\"></slot></div>";

var ProductCategory =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(ProductCategory, _HTMLElement);

  _createClass(ProductCategory, [{
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, valOld, valNew) {
      if (valOld == valNew) return;
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return [];
    }
  }]);

  function ProductCategory(catInfo) {
    var _this;

    _classCallCheck(this, ProductCategory);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProductCategory).call(this));

    var shadowRoot = _this.attachShadow({
      mode: 'open'
    });

    shadowRoot.innerHTML = templateStr; //if (!catInfo)
    //  return this
    //const h = shadowRoot.querySelector('div h1')
    //h.innerText = catInfo.name || ''
    //const p = shadowRoot.querySelector('div p')
    //p.innerText = catInfo.description || ''

    return _this;
  }

  return ProductCategory;
}(_wrapNativeSuper(HTMLElement));

window.customElements.define('product-category', ProductCategory); // console.log('running from within component module', document.createElement('product-category'))



/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! exports provided: categoriesData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoriesData", function() { return categoriesData; });
var categoriesData = [{
  name: "Neque porro quisquam",
  description: "Aenean et ante porttitor tellus accumsan pulvinar. Ut dictum condimentum est et pretium. Nullam vel aliquam metus, ac sodales nisl. Vivamus euismod porttitor metus at tincidunt. Duis eget iaculis est, ut facilisis eros. Nunc scelerisque eros eu purus laoreet, vitae tempor turpis porttitor. Donec ornare nunc sed bibendum vestibulum. Duis posuere, velit et ullamcorper scelerisque, mi metus fermentum diam, sed bibendum lorem nibh ut quam." // "we focus on websites for small business: landing page, portfolio website, a catalogue, a store. We craft the site carefully and make sure, that the brand is reflected in tiniest details (that the brand is felt..., that it carries the feel of the brand. )"

}, {
  name: "Nunc quis tincidunt fringilla",
  description: "Nunc tincidunt nunc quis tincidunt fringilla. Quisque sodales fermentum est sit amet rhoncus. Phasellus a aliquam erat. Nunc sollicitudin in est non maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum magna eros, facilisis vitae ex sed, efficitur ornare leo. Pellentesque sit amet consectetur lorem. Maecenas est felis, euismod ac ex vitae, ultricies iaculis sem."
}, {
  name: "Curabitur scelerisque",
  description: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ipsum lectus, tristique quis tortor non, accumsan iaculis elit. In quis feugiat nulla, sit amet rutrum arcu. Nulla condimentum consequat ligula id elementum. Vivamus vel lobortis tellus. Aliquam erat volutpat. Integer elementum vel mauris vitae vestibulum. Nam molestie egestas massa ut ultricies." //

}, {
  name: "Maecenas vel commodo leo",
  description: "Proin tincidunt dui ac viverra bibendum. Nam tempus, leo vitae suscipit pulvinar, sapien sapien laoreet mauris, eu accumsan dolor purus ut ipsum. Donec fermentum suscipit varius. Morbi tincidunt sit amet lorem sed blandit. Nulla ut lorem fermentum, eleifend nisl ut, malesuada ipsum. Etiam urna est, malesuada a ultricies id, vehicula et nisl. Ut consectetur nisi ut mauris consequat pulvinar."
}];


/***/ }),

/***/ "./src/index/index.js":
/*!****************************!*\
  !*** ./src/index/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_product_category_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/product-category.js */ "./src/components/product-category.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.js */ "./src/data.js");



function htmlToElement(html) {
  var template = document.createElement('template');
  html = html.trim(); // Never return a text node of whitespace as the result

  template.innerHTML = html;
  return template.content.firstChild;
}

function main() {
  var categoriesSection = document.querySelector('section.categories');
  _data_js__WEBPACK_IMPORTED_MODULE_1__["categoriesData"].forEach(function (categoryData) {
    var category = new _components_product_category_js__WEBPACK_IMPORTED_MODULE_0__["ProductCategory"](categoryData);
    var infoStr = "<div slot='info' class='info'>\n      <h1 class=\"title\">".concat(categoryData.name, "</h1>\n      <p class=\"description\">").concat(categoryData.description, "</p>\n    </div>");
    var featWorkStr = "<div slot=\"featured-work\" class=\"feat-work_container\">\n      <div class=\"feat-work\"></div>\n    </div>";
    category.appendChild(htmlToElement(infoStr));
    category.appendChild(htmlToElement(featWorkStr));
    categoriesSection.appendChild(category);
  });
}

window.addEventListener("load", main);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcHJvZHVjdC1jYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgvaW5kZXguanMiXSwibmFtZXMiOlsidGVtcGxhdGVTdHIiLCJQcm9kdWN0Q2F0ZWdvcnkiLCJuYW1lIiwidmFsT2xkIiwidmFsTmV3IiwiY2F0SW5mbyIsInNoYWRvd1Jvb3QiLCJhdHRhY2hTaGFkb3ciLCJtb2RlIiwiaW5uZXJIVE1MIiwiSFRNTEVsZW1lbnQiLCJ3aW5kb3ciLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSIsImNhdGVnb3JpZXNEYXRhIiwiZGVzY3JpcHRpb24iLCJodG1sVG9FbGVtZW50IiwiaHRtbCIsInRlbXBsYXRlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidHJpbSIsImNvbnRlbnQiLCJmaXJzdENoaWxkIiwibWFpbiIsImNhdGVnb3JpZXNTZWN0aW9uIiwicXVlcnlTZWxlY3RvciIsImZvckVhY2giLCJjYXRlZ29yeURhdGEiLCJjYXRlZ29yeSIsImluZm9TdHIiLCJmZWF0V29ya1N0ciIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsSUFBTUEsV0FBVyxHQUFHLGdrQ0FBcEI7O0lBRU1DLGU7Ozs7Ozs7NkNBS3FCQyxJLEVBQU1DLE0sRUFBUUMsTSxFQUFRO0FBQzdDLFVBQUlELE1BQU0sSUFBSUMsTUFBZCxFQUNFO0FBQ0g7Ozt3QkFQK0I7QUFDOUIsYUFBTyxFQUFQO0FBQ0Q7OztBQU9ELDJCQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQUE7O0FBQ25COztBQUVBLFFBQU1DLFVBQVUsR0FBRyxNQUFLQyxZQUFMLENBQWtCO0FBQUNDLFVBQUksRUFBRTtBQUFQLEtBQWxCLENBQW5COztBQUNBRixjQUFVLENBQUNHLFNBQVgsR0FBdUJULFdBQXZCLENBSm1CLENBS25CO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFabUI7QUFhcEI7OzttQkF2QjJCVSxXOztBQTBCOUJDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsTUFBdEIsQ0FBNkIsa0JBQTdCLEVBQWlEWixlQUFqRCxFLENBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQUE7QUFBQSxJQUFNYSxjQUFjLEdBQUcsQ0FDckI7QUFDRVosTUFBSSxFQUFFLHNCQURSO0FBRUVhLGFBQVcsRUFBRSx5YkFGZixDQUV3Yzs7QUFGeGMsQ0FEcUIsRUFLckI7QUFDRWIsTUFBSSxFQUFFLCtCQURSO0FBRUVhLGFBQVcsRUFBRTtBQUZmLENBTHFCLEVBU3JCO0FBQ0ViLE1BQUksRUFBRSx1QkFEUjtBQUVFYSxhQUFXLEVBQUUsa1pBRmYsQ0FFa2E7O0FBRmxhLENBVHFCLEVBYXJCO0FBQ0ViLE1BQUksRUFBRSwwQkFEUjtBQUVFYSxhQUFXLEVBQUU7QUFGZixDQWJxQixDQUF2Qjs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUEsU0FBU0MsYUFBVCxDQUF1QkMsSUFBdkIsRUFBNkI7QUFDM0IsTUFBTUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBakI7QUFDQUgsTUFBSSxHQUFHQSxJQUFJLENBQUNJLElBQUwsRUFBUCxDQUYyQixDQUVSOztBQUNuQkgsVUFBUSxDQUFDVCxTQUFULEdBQXFCUSxJQUFyQjtBQUNBLFNBQU9DLFFBQVEsQ0FBQ0ksT0FBVCxDQUFpQkMsVUFBeEI7QUFDRDs7QUFFRCxTQUFTQyxJQUFULEdBQWdCO0FBQ2QsTUFBTUMsaUJBQWlCLEdBQUdOLFFBQVEsQ0FBQ08sYUFBVCxDQUF1QixvQkFBdkIsQ0FBMUI7QUFFQVosRUFBQSx1REFBYyxDQUFDYSxPQUFmLENBQXVCLFVBQUNDLFlBQUQsRUFBa0I7QUFDdkMsUUFBTUMsUUFBUSxHQUFHLElBQUksK0VBQUosQ0FBb0JELFlBQXBCLENBQWpCO0FBRUEsUUFBTUUsT0FBTyx1RUFFVUYsWUFBWSxDQUFDMUIsSUFGdkIsbURBR2UwQixZQUFZLENBQUNiLFdBSDVCLHFCQUFiO0FBTUEsUUFBTWdCLFdBQVcsa0hBQWpCO0FBS0FGLFlBQVEsQ0FBQ0csV0FBVCxDQUFxQmhCLGFBQWEsQ0FBQ2MsT0FBRCxDQUFsQztBQUNBRCxZQUFRLENBQUNHLFdBQVQsQ0FBcUJoQixhQUFhLENBQUNlLFdBQUQsQ0FBbEM7QUFFQU4scUJBQWlCLENBQUNPLFdBQWxCLENBQThCSCxRQUE5QjtBQUNELEdBbEJEO0FBbUJEOztBQUVEbEIsTUFBTSxDQUFDc0IsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0NULElBQWhDLEUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC9pbmRleC5qc1wiKTtcbiIsImNvbnN0IHRlbXBsYXRlU3RyID0gXCI8c3R5bGU+Omhvc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcblxcbiAgLmNhdGVnb3J5LWluZm8tc2xvdC1jb250YWluZXIsIC5mZWF0dXJlZC13b3JrLXNsb3QtY29udGFpbmVyIHtcXG4gICAgLyoqL1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIG1pbi13aWR0aDogNTAlO1xcbiAgfVxcblxcbiAgLmNhdGVnb3J5LWluZm8tc2xvdC1jb250YWluZXIge1xcbiAgICAvKlxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgICAqL1xcbiAgfVxcblxcbiAgLmZlYXR1cmVkLXdvcmstc2xvdC1jb250YWluZXIge1xcbiAgICAvKlxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxuICAgICovXFxuICB9XFxuXFxuICAvKlxcbiAgLmNhdGVnb3J5LWluZm8gaDEge1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktaCk7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1oKTtcXG4gIH1cXG5cXG4gIC5jYXRlZ29yeS1pbmZvIHAge1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktcCk7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1wKTtcXG4gIH1cXG5cXG4gIC5mZWF0dXJlZC13b3JrLXNsb3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gICovXFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogMTUwMHB4KSB7XFxuICAgIDpob3N0IHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTUwMXB4KSB7XFxuICAgIC5jYXRlZ29yeS1pbmZvLCAuZmVhdHVyZWQtd29yay1zbG90LWNvbnRhaW5lciB7XFxuICAgICAgbWluLXdpZHRoOiA1MCU7XFxuXFxuICAgICAgLypcXG4gICAgICBmbGV4LWdyb3c6IDE7XFxuICAgICAgKi9cXG4gICAgfVxcbiAgfTwvc3R5bGU+PGRpdiBjbGFzcz1cXFwiY2F0ZWdvcnktaW5mby1zbG90LWNvbnRhaW5lclxcXCI+PHNsb3QgbmFtZT1cXFwiaW5mb1xcXCI+PC9zbG90PjwvZGl2PjxkaXYgY2xhc3M9XFxcImZlYXR1cmVkLXdvcmstc2xvdC1jb250YWluZXJcXFwiPjxzbG90IG5hbWU9XFxcImZlYXR1cmVkLXdvcmtcXFwiPjwvc2xvdD48L2Rpdj5cIlxuXG5jbGFzcyBQcm9kdWN0Q2F0ZWdvcnkgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuICAgIHJldHVybiBbXVxuICB9XG5cbiAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIHZhbE9sZCwgdmFsTmV3KSB7XG4gICAgaWYgKHZhbE9sZCA9PSB2YWxOZXcpXG4gICAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGNhdEluZm8pIHtcbiAgICBzdXBlcigpXG5cbiAgICBjb25zdCBzaGFkb3dSb290ID0gdGhpcy5hdHRhY2hTaGFkb3coe21vZGU6ICdvcGVuJ30pXG4gICAgc2hhZG93Um9vdC5pbm5lckhUTUwgPSB0ZW1wbGF0ZVN0cjtcbiAgICAvL2lmICghY2F0SW5mbylcbiAgICAvLyAgcmV0dXJuIHRoaXNcblxuICAgIC8vY29uc3QgaCA9IHNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignZGl2IGgxJylcbiAgICAvL2guaW5uZXJUZXh0ID0gY2F0SW5mby5uYW1lIHx8ICcnXG5cbiAgICAvL2NvbnN0IHAgPSBzaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ2RpdiBwJylcbiAgICAvL3AuaW5uZXJUZXh0ID0gY2F0SW5mby5kZXNjcmlwdGlvbiB8fCAnJ1xuICB9XG59XG5cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3Byb2R1Y3QtY2F0ZWdvcnknLCBQcm9kdWN0Q2F0ZWdvcnkpXG4vLyBjb25zb2xlLmxvZygncnVubmluZyBmcm9tIHdpdGhpbiBjb21wb25lbnQgbW9kdWxlJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJvZHVjdC1jYXRlZ29yeScpKVxuXG5leHBvcnQge1Byb2R1Y3RDYXRlZ29yeX1cbiIsImNvbnN0IGNhdGVnb3JpZXNEYXRhID0gW1xuICB7XG4gICAgbmFtZTogXCJOZXF1ZSBwb3JybyBxdWlzcXVhbVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFlbmVhbiBldCBhbnRlIHBvcnR0aXRvciB0ZWxsdXMgYWNjdW1zYW4gcHVsdmluYXIuIFV0IGRpY3R1bSBjb25kaW1lbnR1bSBlc3QgZXQgcHJldGl1bS4gTnVsbGFtIHZlbCBhbGlxdWFtIG1ldHVzLCBhYyBzb2RhbGVzIG5pc2wuIFZpdmFtdXMgZXVpc21vZCBwb3J0dGl0b3IgbWV0dXMgYXQgdGluY2lkdW50LiBEdWlzIGVnZXQgaWFjdWxpcyBlc3QsIHV0IGZhY2lsaXNpcyBlcm9zLiBOdW5jIHNjZWxlcmlzcXVlIGVyb3MgZXUgcHVydXMgbGFvcmVldCwgdml0YWUgdGVtcG9yIHR1cnBpcyBwb3J0dGl0b3IuIERvbmVjIG9ybmFyZSBudW5jIHNlZCBiaWJlbmR1bSB2ZXN0aWJ1bHVtLiBEdWlzIHBvc3VlcmUsIHZlbGl0IGV0IHVsbGFtY29ycGVyIHNjZWxlcmlzcXVlLCBtaSBtZXR1cyBmZXJtZW50dW0gZGlhbSwgc2VkIGJpYmVuZHVtIGxvcmVtIG5pYmggdXQgcXVhbS5cIi8vIFwid2UgZm9jdXMgb24gd2Vic2l0ZXMgZm9yIHNtYWxsIGJ1c2luZXNzOiBsYW5kaW5nIHBhZ2UsIHBvcnRmb2xpbyB3ZWJzaXRlLCBhIGNhdGFsb2d1ZSwgYSBzdG9yZS4gV2UgY3JhZnQgdGhlIHNpdGUgY2FyZWZ1bGx5IGFuZCBtYWtlIHN1cmUsIHRoYXQgdGhlIGJyYW5kIGlzIHJlZmxlY3RlZCBpbiB0aW5pZXN0IGRldGFpbHMgKHRoYXQgdGhlIGJyYW5kIGlzIGZlbHQuLi4sIHRoYXQgaXQgY2FycmllcyB0aGUgZmVlbCBvZiB0aGUgYnJhbmQuIClcIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJOdW5jIHF1aXMgdGluY2lkdW50IGZyaW5naWxsYVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk51bmMgdGluY2lkdW50IG51bmMgcXVpcyB0aW5jaWR1bnQgZnJpbmdpbGxhLiBRdWlzcXVlIHNvZGFsZXMgZmVybWVudHVtIGVzdCBzaXQgYW1ldCByaG9uY3VzLiBQaGFzZWxsdXMgYSBhbGlxdWFtIGVyYXQuIE51bmMgc29sbGljaXR1ZGluIGluIGVzdCBub24gbWF4aW11cy4gSW50ZXJkdW0gZXQgbWFsZXN1YWRhIGZhbWVzIGFjIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzLiBWZXN0aWJ1bHVtIG1hZ25hIGVyb3MsIGZhY2lsaXNpcyB2aXRhZSBleCBzZWQsIGVmZmljaXR1ciBvcm5hcmUgbGVvLiBQZWxsZW50ZXNxdWUgc2l0IGFtZXQgY29uc2VjdGV0dXIgbG9yZW0uIE1hZWNlbmFzIGVzdCBmZWxpcywgZXVpc21vZCBhYyBleCB2aXRhZSwgdWx0cmljaWVzIGlhY3VsaXMgc2VtLlwiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkN1cmFiaXR1ciBzY2VsZXJpc3F1ZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNsYXNzIGFwdGVudCB0YWNpdGkgc29jaW9zcXUgYWQgbGl0b3JhIHRvcnF1ZW50IHBlciBjb251YmlhIG5vc3RyYSwgcGVyIGluY2VwdG9zIGhpbWVuYWVvcy4gVmVzdGlidWx1bSBpcHN1bSBsZWN0dXMsIHRyaXN0aXF1ZSBxdWlzIHRvcnRvciBub24sIGFjY3Vtc2FuIGlhY3VsaXMgZWxpdC4gSW4gcXVpcyBmZXVnaWF0IG51bGxhLCBzaXQgYW1ldCBydXRydW0gYXJjdS4gTnVsbGEgY29uZGltZW50dW0gY29uc2VxdWF0IGxpZ3VsYSBpZCBlbGVtZW50dW0uIFZpdmFtdXMgdmVsIGxvYm9ydGlzIHRlbGx1cy4gQWxpcXVhbSBlcmF0IHZvbHV0cGF0LiBJbnRlZ2VyIGVsZW1lbnR1bSB2ZWwgbWF1cmlzIHZpdGFlIHZlc3RpYnVsdW0uIE5hbSBtb2xlc3RpZSBlZ2VzdGFzIG1hc3NhIHV0IHVsdHJpY2llcy5cIiAvL1xuICB9LFxuICB7XG4gICAgbmFtZTogXCJNYWVjZW5hcyB2ZWwgY29tbW9kbyBsZW9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJQcm9pbiB0aW5jaWR1bnQgZHVpIGFjIHZpdmVycmEgYmliZW5kdW0uIE5hbSB0ZW1wdXMsIGxlbyB2aXRhZSBzdXNjaXBpdCBwdWx2aW5hciwgc2FwaWVuIHNhcGllbiBsYW9yZWV0IG1hdXJpcywgZXUgYWNjdW1zYW4gZG9sb3IgcHVydXMgdXQgaXBzdW0uIERvbmVjIGZlcm1lbnR1bSBzdXNjaXBpdCB2YXJpdXMuIE1vcmJpIHRpbmNpZHVudCBzaXQgYW1ldCBsb3JlbSBzZWQgYmxhbmRpdC4gTnVsbGEgdXQgbG9yZW0gZmVybWVudHVtLCBlbGVpZmVuZCBuaXNsIHV0LCBtYWxlc3VhZGEgaXBzdW0uIEV0aWFtIHVybmEgZXN0LCBtYWxlc3VhZGEgYSB1bHRyaWNpZXMgaWQsIHZlaGljdWxhIGV0IG5pc2wuIFV0IGNvbnNlY3RldHVyIG5pc2kgdXQgbWF1cmlzIGNvbnNlcXVhdCBwdWx2aW5hci5cIlxuICB9XG5dXG5cbmV4cG9ydCB7Y2F0ZWdvcmllc0RhdGF9XG4iLCJpbXBvcnQge1Byb2R1Y3RDYXRlZ29yeX0gZnJvbSAnLi4vY29tcG9uZW50cy9wcm9kdWN0LWNhdGVnb3J5LmpzJ1xuaW1wb3J0IHtjYXRlZ29yaWVzRGF0YX0gZnJvbSAnLi4vZGF0YS5qcydcblxuZnVuY3Rpb24gaHRtbFRvRWxlbWVudChodG1sKSB7XG4gIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKVxuICBodG1sID0gaHRtbC50cmltKCkgLy8gTmV2ZXIgcmV0dXJuIGEgdGV4dCBub2RlIG9mIHdoaXRlc3BhY2UgYXMgdGhlIHJlc3VsdFxuICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sXG4gIHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0Q2hpbGRcbn1cblxuZnVuY3Rpb24gbWFpbigpIHtcbiAgY29uc3QgY2F0ZWdvcmllc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uLmNhdGVnb3JpZXMnKVxuXG4gIGNhdGVnb3JpZXNEYXRhLmZvckVhY2goKGNhdGVnb3J5RGF0YSkgPT4ge1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gbmV3IFByb2R1Y3RDYXRlZ29yeShjYXRlZ29yeURhdGEpXG5cbiAgICBjb25zdCBpbmZvU3RyID1cbiAgICBgPGRpdiBzbG90PSdpbmZvJyBjbGFzcz0naW5mbyc+XG4gICAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPiR7IGNhdGVnb3J5RGF0YS5uYW1lIH08L2gxPlxuICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPiR7IGNhdGVnb3J5RGF0YS5kZXNjcmlwdGlvbiB9PC9wPlxuICAgIDwvZGl2PmBcblxuICAgIGNvbnN0IGZlYXRXb3JrU3RyID1cbiAgICBgPGRpdiBzbG90PVwiZmVhdHVyZWQtd29ya1wiIGNsYXNzPVwiZmVhdC13b3JrX2NvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZlYXQtd29ya1wiPjwvZGl2PlxuICAgIDwvZGl2PmBcblxuICAgIGNhdGVnb3J5LmFwcGVuZENoaWxkKGh0bWxUb0VsZW1lbnQoaW5mb1N0cikpXG4gICAgY2F0ZWdvcnkuYXBwZW5kQ2hpbGQoaHRtbFRvRWxlbWVudChmZWF0V29ya1N0cikpXG5cbiAgICBjYXRlZ29yaWVzU2VjdGlvbi5hcHBlbmRDaGlsZChjYXRlZ29yeSlcbiAgfSlcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIG1haW4pXG4iXSwic291cmNlUm9vdCI6IiJ9