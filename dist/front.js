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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/front/front.js");
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

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var templateStr = "<style>:host {\n    display: flex;\n  }\n\n  .category-info, .featured-work-slot-container {\n    flex-grow: 1;\n    min-width: 50%;\n  }\n\n  .category-info {\n    background-color: grey;\n  }\n\n  .featured-work-slot-container {\n    background-color: green;\n  }\n\n  .category-info h1 {\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n  }\n\n  .category-info p {\n    font-family: var(--font-family-p);\n    font-weight: var(--font-weight-p);\n  }\n\n  /*\n  .featured-work-slot-container {\n    display: flex;\n    flex-direction: column;\n  }\n  */\n\n  @media (max-width: 1500px) {\n    :host {\n      flex-direction: column;\n    }\n  }\n\n  @media (min-width: 1501px) {\n    .category-info, .featured-work-slot-container {\n      min-width: 50%;\n\n      /*\n      flex-grow: 1;\n      */\n    }\n  }</style><div class=\"category-info\"><h1 class=\"title\"></h1><p class=\"description\"></p></div><div class=\"featured-work-slot-container\"><slot name=\"featured-work\"></slot></div>";

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

    shadowRoot.innerHTML = templateStr;
    if (!catInfo) return _possibleConstructorReturn(_this, _assertThisInitialized(_assertThisInitialized(_this)));
    var h = shadowRoot.querySelector('div h1');
    h.innerText = catInfo.name || '';
    var p = shadowRoot.querySelector('div p');
    p.innerText = catInfo.description || '';
    return _this;
  }

  return ProductCategory;
}(_wrapNativeSuper(HTMLElement));

window.customElements.define('product-category', ProductCategory); // console.log('running from within component module', document.createElement('product-category'))



/***/ }),

/***/ "./src/front/front.js":
/*!****************************!*\
  !*** ./src/front/front.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_product_category_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/product-category.js */ "./src/components/product-category.js");


const categoriesData = [
  {
    name: "web design",
    description: "we specialize in websites for artists, craftsmen or any small business that appreciates (understands) ([the harmony of brand, product and identity], [good (excellent) aestethics and (straight to the point) design]). We can create all sorts of functionality - from simple landing page to a blog, a store, a catalogue. With us, the subtleties (all the (subtle) shades) of your (occupation) will be (instilled) tranferred to a prospects' (mind, consciousness, cognition..). Come see what we've done in the past."// "we focus on websites for small business: landing page, portfolio website, a catalogue, a store. We craft the site carefully and make sure, that the brand is reflected in tiniest details (that the brand is felt..., that it carries the feel of the brand. )"
  },
  {
    name: "photography editing",
    description: "we have over a decade of professional experience behind, and we consider photography an artform. We do album art design, retouch, and also technical neccessities like (mixing, ...)"
  },
  {
    name: "polygraphy",
    description: "we have a decade of experience of working in printing press, label and package design, ..." //
  },
  {
    name: "3d graphics",
    description: "we have over a decade of experience in ..."
  }
]

function main() {
  const categoriesSection = document.querySelector('section.categories')

  categoriesData.forEach((categoryData) => {
    const category = new _components_product_category_js__WEBPACK_IMPORTED_MODULE_0__["ProductCategory"](categoryData)
    const featuredWorkPlaceholder = document.createElement('div')
    featuredWorkPlaceholder.className = 'feat-work-placeholder'
    featuredWorkPlaceholder.setAttribute('slot', 'featured-work')
    category.appendChild(featuredWorkPlaceholder)
    
    categoriesSection.appendChild(category)
  })
}

window.addEventListener("load", main)


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcHJvZHVjdC1jYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvZnJvbnQuanMiXSwibmFtZXMiOlsidGVtcGxhdGVTdHIiLCJQcm9kdWN0Q2F0ZWdvcnkiLCJuYW1lIiwidmFsT2xkIiwidmFsTmV3IiwiY2F0SW5mbyIsInNoYWRvd1Jvb3QiLCJhdHRhY2hTaGFkb3ciLCJtb2RlIiwiaW5uZXJIVE1MIiwiaCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lclRleHQiLCJwIiwiZGVzY3JpcHRpb24iLCJIVE1MRWxlbWVudCIsIndpbmRvdyIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxJQUFNQSxXQUFXLEdBQUcsbWdDQUFwQjs7SUFFTUMsZTs7Ozs7Ozs2Q0FLcUJDLEksRUFBTUMsTSxFQUFRQyxNLEVBQVE7QUFDN0MsVUFBSUQsTUFBTSxJQUFJQyxNQUFkLEVBQ0U7QUFDSDs7O3dCQVArQjtBQUM5QixhQUFPLEVBQVA7QUFDRDs7O0FBT0QsMkJBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFBQTs7QUFDbkI7O0FBRUEsUUFBTUMsVUFBVSxHQUFHLE1BQUtDLFlBQUwsQ0FBa0I7QUFBQ0MsVUFBSSxFQUFFO0FBQVAsS0FBbEIsQ0FBbkI7O0FBQ0FGLGNBQVUsQ0FBQ0csU0FBWCxHQUF1QlQsV0FBdkI7QUFDQSxRQUFJLENBQUNLLE9BQUwsRUFDRTtBQUVGLFFBQU1LLENBQUMsR0FBR0osVUFBVSxDQUFDSyxhQUFYLENBQXlCLFFBQXpCLENBQVY7QUFDQUQsS0FBQyxDQUFDRSxTQUFGLEdBQWNQLE9BQU8sQ0FBQ0gsSUFBUixJQUFnQixFQUE5QjtBQUVBLFFBQU1XLENBQUMsR0FBR1AsVUFBVSxDQUFDSyxhQUFYLENBQXlCLE9BQXpCLENBQVY7QUFDQUUsS0FBQyxDQUFDRCxTQUFGLEdBQWNQLE9BQU8sQ0FBQ1MsV0FBUixJQUF1QixFQUFyQztBQVptQjtBQWFwQjs7O21CQXZCMkJDLFc7O0FBMEI5QkMsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxNQUF0QixDQUE2QixrQkFBN0IsRUFBaURqQixlQUFqRCxFLENBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQUE7QUFBaUU7O0FBRWpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLCtFQUFlO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBIiwiZmlsZSI6ImZyb250LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZnJvbnQvZnJvbnQuanNcIik7XG4iLCJjb25zdCB0ZW1wbGF0ZVN0ciA9IFwiPHN0eWxlPjpob3N0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG5cXG4gIC5jYXRlZ29yeS1pbmZvLCAuZmVhdHVyZWQtd29yay1zbG90LWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgbWluLXdpZHRoOiA1MCU7XFxuICB9XFxuXFxuICAuY2F0ZWdvcnktaW5mbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICB9XFxuXFxuICAuZmVhdHVyZWQtd29yay1zbG90LWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgfVxcblxcbiAgLmNhdGVnb3J5LWluZm8gaDEge1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktaCk7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1oKTtcXG4gIH1cXG5cXG4gIC5jYXRlZ29yeS1pbmZvIHAge1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktcCk7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1wKTtcXG4gIH1cXG5cXG4gIC8qXFxuICAuZmVhdHVyZWQtd29yay1zbG90LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAqL1xcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE1MDBweCkge1xcbiAgICA6aG9zdCB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDE1MDFweCkge1xcbiAgICAuY2F0ZWdvcnktaW5mbywgLmZlYXR1cmVkLXdvcmstc2xvdC1jb250YWluZXIge1xcbiAgICAgIG1pbi13aWR0aDogNTAlO1xcblxcbiAgICAgIC8qXFxuICAgICAgZmxleC1ncm93OiAxO1xcbiAgICAgICovXFxuICAgIH1cXG4gIH08L3N0eWxlPjxkaXYgY2xhc3M9XFxcImNhdGVnb3J5LWluZm9cXFwiPjxoMSBjbGFzcz1cXFwidGl0bGVcXFwiPjwvaDE+PHAgY2xhc3M9XFxcImRlc2NyaXB0aW9uXFxcIj48L3A+PC9kaXY+PGRpdiBjbGFzcz1cXFwiZmVhdHVyZWQtd29yay1zbG90LWNvbnRhaW5lclxcXCI+PHNsb3QgbmFtZT1cXFwiZmVhdHVyZWQtd29ya1xcXCI+PC9zbG90PjwvZGl2PlwiXG5cbmNsYXNzIFByb2R1Y3RDYXRlZ29yeSBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cblxuICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgdmFsT2xkLCB2YWxOZXcpIHtcbiAgICBpZiAodmFsT2xkID09IHZhbE5ldylcbiAgICAgIHJldHVyblxuICB9XG5cbiAgY29uc3RydWN0b3IoY2F0SW5mbykge1xuICAgIHN1cGVyKClcblxuICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nfSlcbiAgICBzaGFkb3dSb290LmlubmVySFRNTCA9IHRlbXBsYXRlU3RyO1xuICAgIGlmICghY2F0SW5mbylcbiAgICAgIHJldHVybiB0aGlzXG5cbiAgICBjb25zdCBoID0gc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdkaXYgaDEnKVxuICAgIGguaW5uZXJUZXh0ID0gY2F0SW5mby5uYW1lIHx8ICcnXG5cbiAgICBjb25zdCBwID0gc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdkaXYgcCcpXG4gICAgcC5pbm5lclRleHQgPSBjYXRJbmZvLmRlc2NyaXB0aW9uIHx8ICcnXG4gIH1cbn1cblxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncHJvZHVjdC1jYXRlZ29yeScsIFByb2R1Y3RDYXRlZ29yeSlcbi8vIGNvbnNvbGUubG9nKCdydW5uaW5nIGZyb20gd2l0aGluIGNvbXBvbmVudCBtb2R1bGUnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcm9kdWN0LWNhdGVnb3J5JykpXG5cbmV4cG9ydCB7UHJvZHVjdENhdGVnb3J5fVxuIiwiaW1wb3J0IHtQcm9kdWN0Q2F0ZWdvcnl9IGZyb20gJy4uL2NvbXBvbmVudHMvcHJvZHVjdC1jYXRlZ29yeS5qcydcblxuY29uc3QgY2F0ZWdvcmllc0RhdGEgPSBbXG4gIHtcbiAgICBuYW1lOiBcIndlYiBkZXNpZ25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJ3ZSBzcGVjaWFsaXplIGluIHdlYnNpdGVzIGZvciBhcnRpc3RzLCBjcmFmdHNtZW4gb3IgYW55IHNtYWxsIGJ1c2luZXNzIHRoYXQgYXBwcmVjaWF0ZXMgKHVuZGVyc3RhbmRzKSAoW3RoZSBoYXJtb255IG9mIGJyYW5kLCBwcm9kdWN0IGFuZCBpZGVudGl0eV0sIFtnb29kIChleGNlbGxlbnQpIGFlc3RldGhpY3MgYW5kIChzdHJhaWdodCB0byB0aGUgcG9pbnQpIGRlc2lnbl0pLiBXZSBjYW4gY3JlYXRlIGFsbCBzb3J0cyBvZiBmdW5jdGlvbmFsaXR5IC0gZnJvbSBzaW1wbGUgbGFuZGluZyBwYWdlIHRvIGEgYmxvZywgYSBzdG9yZSwgYSBjYXRhbG9ndWUuIFdpdGggdXMsIHRoZSBzdWJ0bGV0aWVzIChhbGwgdGhlIChzdWJ0bGUpIHNoYWRlcykgb2YgeW91ciAob2NjdXBhdGlvbikgd2lsbCBiZSAoaW5zdGlsbGVkKSB0cmFuZmVycmVkIHRvIGEgcHJvc3BlY3RzJyAobWluZCwgY29uc2Npb3VzbmVzcywgY29nbml0aW9uLi4pLiBDb21lIHNlZSB3aGF0IHdlJ3ZlIGRvbmUgaW4gdGhlIHBhc3QuXCIvLyBcIndlIGZvY3VzIG9uIHdlYnNpdGVzIGZvciBzbWFsbCBidXNpbmVzczogbGFuZGluZyBwYWdlLCBwb3J0Zm9saW8gd2Vic2l0ZSwgYSBjYXRhbG9ndWUsIGEgc3RvcmUuIFdlIGNyYWZ0IHRoZSBzaXRlIGNhcmVmdWxseSBhbmQgbWFrZSBzdXJlLCB0aGF0IHRoZSBicmFuZCBpcyByZWZsZWN0ZWQgaW4gdGluaWVzdCBkZXRhaWxzICh0aGF0IHRoZSBicmFuZCBpcyBmZWx0Li4uLCB0aGF0IGl0IGNhcnJpZXMgdGhlIGZlZWwgb2YgdGhlIGJyYW5kLiApXCJcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwicGhvdG9ncmFwaHkgZWRpdGluZ1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIndlIGhhdmUgb3ZlciBhIGRlY2FkZSBvZiBwcm9mZXNzaW9uYWwgZXhwZXJpZW5jZSBiZWhpbmQsIGFuZCB3ZSBjb25zaWRlciBwaG90b2dyYXBoeSBhbiBhcnRmb3JtLiBXZSBkbyBhbGJ1bSBhcnQgZGVzaWduLCByZXRvdWNoLCBhbmQgYWxzbyB0ZWNobmljYWwgbmVjY2Vzc2l0aWVzIGxpa2UgKG1peGluZywgLi4uKVwiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcInBvbHlncmFwaHlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJ3ZSBoYXZlIGEgZGVjYWRlIG9mIGV4cGVyaWVuY2Ugb2Ygd29ya2luZyBpbiBwcmludGluZyBwcmVzcywgbGFiZWwgYW5kIHBhY2thZ2UgZGVzaWduLCAuLi5cIiAvL1xuICB9LFxuICB7XG4gICAgbmFtZTogXCIzZCBncmFwaGljc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIndlIGhhdmUgb3ZlciBhIGRlY2FkZSBvZiBleHBlcmllbmNlIGluIC4uLlwiXG4gIH1cbl1cblxuZnVuY3Rpb24gbWFpbigpIHtcbiAgY29uc3QgY2F0ZWdvcmllc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uLmNhdGVnb3JpZXMnKVxuXG4gIGNhdGVnb3JpZXNEYXRhLmZvckVhY2goKGNhdGVnb3J5RGF0YSkgPT4ge1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gbmV3IFByb2R1Y3RDYXRlZ29yeShjYXRlZ29yeURhdGEpXG4gICAgY29uc3QgZmVhdHVyZWRXb3JrUGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZlYXR1cmVkV29ya1BsYWNlaG9sZGVyLmNsYXNzTmFtZSA9ICdmZWF0LXdvcmstcGxhY2Vob2xkZXInXG4gICAgZmVhdHVyZWRXb3JrUGxhY2Vob2xkZXIuc2V0QXR0cmlidXRlKCdzbG90JywgJ2ZlYXR1cmVkLXdvcmsnKVxuICAgIGNhdGVnb3J5LmFwcGVuZENoaWxkKGZlYXR1cmVkV29ya1BsYWNlaG9sZGVyKVxuICAgIFxuICAgIGNhdGVnb3JpZXNTZWN0aW9uLmFwcGVuZENoaWxkKGNhdGVnb3J5KVxuICB9KVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgbWFpbilcbiJdLCJzb3VyY2VSb290IjoiIn0=