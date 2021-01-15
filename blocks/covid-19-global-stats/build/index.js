(window["webpackJsonp_covid_19_global_stats"] = window["webpackJsonp_covid_19_global_stats"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp_covid_19_global_stats"] = window["webpackJsonp_covid_19_global_stats"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _global_widget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global-widget */ "./src/global-widget.js");


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */




/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */



/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} [props]           Properties passed from the editor.
 * @param {string} [props.className] Class name generated for the block.
 *
 * @return {WPElement} Element to render.
 */
// export default function Edit( { className } ) {
// 	return (
// 		<div className={className}>
// 			<GlobalWidget></GlobalWidget>
// 		</div>
// 	);
// }

function Edit(_ref) {
  var attributes = _ref.attributes,
      isSelected = _ref.isSelected;
  var _props = props,
      content = _props.attributes.content,
      setAttributes = _props.setAttributes,
      className = _props.className;
  var blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"])();

  var onChangeContent = function onChangeContent(newContent) {
    setAttributes({
      content: newContent
    });
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_global_widget__WEBPACK_IMPORTED_MODULE_6__["GlobalWidget"], null), isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'form-edit'
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Shows only when the block is selected.'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MySelectControl, null)));
}
var MySelectControl = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["withState"])({
  size: '50%'
})(function (_ref2) {
  var size = _ref2.size,
      setState = _ref2.setState;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
    label: "Size",
    value: size,
    options: [{
      label: 'Big',
      value: '100%'
    }, {
      label: 'Medium',
      value: '50%'
    }, {
      label: 'Small',
      value: '25%'
    }],
    onChange: function onChange(size) {
      setState({
        size: size
      });
    }
  });
});

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/global-widget.js":
/*!******************************!*\
  !*** ./src/global-widget.js ***!
  \******************************/
/*! exports provided: GlobalWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalWidget", function() { return GlobalWidget; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);




console.log('===== DEBUG START =====');
console.log('===== DEBUG STOP =====');
var GlobalWidget = function GlobalWidget() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "wsb-main-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "wsb-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ItemData, null)));
};

var ItemData = function ItemData() {
  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      CvGlobal = _useState2[0],
      setCvGlobal = _useState2[1];

  var fetchData = _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
    path: '/sand-block/v1/covid-19/global'
  }).then(function (corona) {
    setCvGlobal(corona.data.human_readable);
  }); // Validate data

  if (CvGlobal) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "item-data"
    }, "New Confirmed: ", CvGlobal.today_cases, " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("br", null), "Total Confirmed: ", CvGlobal.cases);
  } else {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, "Please Wait...");
  }
};

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/*! exports provided: iconVirusGlobal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconVirusGlobal", function() { return iconVirusGlobal; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Icon virusGlobal
 * @returns {JSX.Element}
 */

var iconVirusGlobal = function iconVirusGlobal() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
    viewBox: "0 0 350 350",
    xmlns: "http://www.w3.org/2000/svg",
    width: "350",
    height: "350"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
    fill: "#B04848",
    d: "M189.52098,0.741750477 L189.947945,0.791153082 L197.150685,1.71242545 C207.34589,3.01709742 214.753425,12.3641153 213.662329,22.5496024 C213.0141,28.5936572 209.492157,33.8971967 204.447578,36.8704464 L204.116438,37.0610338 L205.178847,46.4630984 C216.548018,49.2122252 227.32104,53.5323556 237.2653,59.1862632 L252.049315,46.9925447 C249.6,44.3866799 248.055479,40.9757455 247.730822,37.3588469 C247.334932,32.9507952 248.699315,28.6833002 251.571918,25.3426441 C257.045775,18.977021 266.48631,18.1169876 273.216003,23.3080159 L273.50274,23.5341948 L290.386301,37.1514911 C293.75,39.8638171 295.90274,43.9114314 296.292466,48.2575547 C296.688356,52.6656064 295.323973,56.9331014 292.45137,60.2737575 C288.276182,65.1297761 281.791366,66.7827383 275.962258,64.9875171 L275.626712,64.8801193 L267.392791,83.0413333 C274.915575,91.1225017 281.418702,100.200497 286.691965,110.060941 L295.326027,108.837475 C295.327397,106.101491 295.943151,103.378728 297.164384,100.840358 C299.310959,96.377336 303.057534,93.0638171 307.713014,91.5107356 C316.80536,88.4792038 326.586875,93.2762049 330.137554,102.453219 L330.260274,102.778926 L334.058219,113.133499 C337.460959,122.408847 333.267123,132.702187 324.511644,136.567495 C318.123101,139.386953 310.842558,138.126895 305.740113,133.773839 L305.458904,133.528827 L297.872941,138.757302 C300.565897,149.210784 302,160.184592 302,171.5 C302,172.609807 301.986205,173.716327 301.958779,174.819393 L319.257534,182.494036 C320.363699,179.19165 322.491096,176.360338 325.389726,174.381412 C328.889726,171.992644 333.094521,171.131213 337.233562,171.95507 C345.671174,173.636989 351.224285,181.897325 349.743678,190.462562 L349.685616,190.77992 L345.476712,212.571074 C344.65,216.852485 342.099315,220.653777 338.478767,223.002187 C334.806849,225.3833 330.44863,226.113917 326.208904,225.055567 C320.040934,223.517059 315.614707,218.418199 314.51,212.328015 L314.452055,211.988668 L295.325523,212.876624 C292.804569,220.440435 289.611574,227.687499 285.819085,234.543829 L292.925342,243.122664 C298.90137,240.131312 306.158904,240.713022 311.718493,245.034791 C315.529452,247.996918 317.976027,252.289463 318.608904,257.121272 C319.222603,261.806663 318.058725,266.455413 315.328987,270.262386 L315.068493,270.616799 L311.509589,275.342147 C305.579452,283.214016 294.758904,285.059344 286.875342,279.540755 C281.755298,275.956092 278.918576,269.956975 279.119121,263.849716 L279.135616,263.467893 L268.519264,258.732726 C260.558742,267.509774 251.412359,275.151803 241.339712,281.394065 L244.226712,299.286183 C247.669178,298.419185 251.35137,298.749702 254.60274,300.25825 C258.565753,302.097316 261.535616,305.418489 262.965068,309.609443 C265.690375,317.601589 261.731418,326.364883 253.941049,329.717694 L253.627397,329.848907 L233.611644,337.983101 C229.623288,339.602982 225.09726,339.493042 221.189041,337.680417 C217.226027,335.841352 214.256164,332.520875 212.826027,328.32992 C210.74811,322.235369 212.555747,315.692392 216.985508,311.441716 L217.239041,311.203579 L206.673208,296.165649 C196.854636,298.670234 186.579588,300 176,300 C167.779207,300 159.742294,299.197093 151.960545,297.663977 L141.000685,315.125249 C143.225342,316.889861 145.023288,319.176342 146.24863,321.851093 C148.160959,326.022565 148.466438,330.66998 147.134247,335.034195 C146.90137,340.042048 144.752055,344.324155 141.157534,346.87992 C138.866438,348.508151 136.128767,349.336183 133.224658,349.336183 C131.457249,349.336183 129.627683,349.029807 127.800323,348.410088 L127.302055,348.2333 L107.44726,340.878429 C98.2486301,337.470974 93.3513699,327.046819 96.5308219,317.641352 C98.089726,313.031511 101.380822,309.315109 105.79726,307.174751 C108.331735,305.946504 111.104477,305.325882 113.875455,305.332229 L114.364384,305.339861 L116.597966,284.852183 C104.347759,278.16122 93.3083106,269.465201 83.9013528,259.194225 L67.5383562,266.011133 C68.4732877,272.320875 65.7945205,278.79831 60.2363014,282.511928 C52.8993941,287.413677 42.8091247,285.410356 37.5694792,278.072388 L37.3678082,277.783797 L31.1616438,268.708847 C26.0760274,261.27326 27.4623288,251.149006 34.3178082,245.660338 C37.8458904,242.83668 42.2308219,241.600895 46.6739726,242.180517 C48.8788128,242.468867 50.9577595,243.18394 52.8233835,244.273689 L53.219863,244.512922 L64.5501713,231.500203 C58.0028405,218.877379 53.4569803,205.008428 51.3436239,190.332935 L33.0972603,186.051789 C31.5561644,193.868688 24.7239726,199.793638 16.6075342,199.792942 C12.1431507,199.792942 7.95342466,198.019284 4.81164384,194.79831 C1.76804366,191.677991 0.0691647046,187.571619 0.00145811128,183.195307 L7.58503938e-06,182.770974 L0.178767123,162.643539 C0.220547945,158.016302 2.1369863,153.508052 5.43561644,150.273857 C8.68493151,147.089066 12.8952055,145.405865 17.3383562,145.519284 C24.0432829,145.699076 29.7962117,149.979134 32.2842332,155.930581 L32.4143836,156.250994 L51.4856617,151.706063 C53.8200988,136.307698 58.8351466,121.812222 66.0292615,108.731129 L58.6945205,99.9775348 C56.569863,101.552187 54.0575342,102.567396 51.4130137,102.875646 C47.2184932,103.365507 43.1205479,102.119284 39.8705479,99.3686879 C33.6807524,94.1303152 32.6417731,84.8675395 37.4308254,78.1305506 L37.6458904,77.8349901 L46.2479452,66.2815109 C48.7116438,62.9714712 52.2972603,60.8338966 56.3438356,60.2640159 C60.3917808,59.6913519 64.4130137,60.7580517 67.6712329,63.2616302 C72.2371005,66.770473 74.3436641,72.5135487 73.5446756,77.9883113 L73.489726,78.3373757 L84.4887312,83.1687787 C92.6896137,74.3351818 102.107038,66.688258 112.46751,60.5069289 L109.65137,41.4628231 C106.195205,42.2832008 102.520548,41.9025845 99.2890411,40.3501988 C95.35,38.4575547 92.4246575,35.0967197 91.0506849,30.8862823 C88.430146,22.8570563 92.5038757,14.1481632 100.338717,10.9017784 L100.65411,10.7748509 L120.773973,2.91341948 C124.782877,1.3471173 129.307534,1.51898608 133.191096,3.38449304 C137.129452,5.27713718 140.055479,8.63797217 141.430137,12.8484095 C143.427385,18.9702783 141.53314,25.4882899 137.04904,29.6775072 L136.792466,29.9121272 L147.91686,46.203449 C156.365184,44.2422153 165.136411,43.1468672 174.136046,43.0137746 L176.89863,35.1649105 C171.24589,31.2919483 167.991096,24.4436382 168.829452,17.2766402 C169.405479,12.3467197 171.891781,7.90944334 175.828767,4.78170974 C179.708493,1.70007952 184.677968,0.23967282 189.52098,0.741750477 Z M126.408677,289.664564 L123.963014,312.106064 C123.789726,313.698111 122.906164,315.121074 121.565753,315.965805 C120.300457,316.763607 118.760236,316.962474 117.346107,316.519027 L117.097945,316.434095 L116.643151,316.265706 C114.576712,315.500298 112.234932,315.621372 110.220548,316.597614 C108.313699,317.52167 106.90274,319.097018 106.24726,321.034195 C104.901438,325.016541 106.907149,329.421902 110.730121,330.982302 L110.966438,331.074254 L130.821233,338.429125 C132.647945,339.106859 134.226027,339.070676 135.266438,338.330318 C136.307534,337.590656 136.880822,336.095328 136.880822,334.121272 C136.880822,333.51173 136.985616,332.906362 137.191781,332.333698 C137.906849,330.340159 137.815753,328.182406 136.934247,326.259145 C136.094716,324.426806 134.633933,323.015433 132.801581,322.257644 L132.523973,322.148907 L131.952055,321.93668 C130.488356,321.394632 129.34589,320.207555 128.846575,318.708748 C128.375342,317.298105 128.521145,315.754944 129.238301,314.466198 L129.379452,314.227634 L141.390645,295.091815 C136.255261,293.59896 131.253741,291.782195 126.408677,289.664564 Z M217.081244,293.015186 L228.792466,309.685288 C229.708904,310.989264 229.984247,312.648111 229.541096,314.185189 C229.12062,315.641368 228.098938,316.835253 226.747436,317.462743 L226.519178,317.562028 L225.977397,317.781909 C223.132877,318.93837 221.587671,322.138469 222.534247,324.914115 C223.035616,326.383002 224.073288,327.545726 225.456849,328.187276 C226.755865,328.789382 228.19093,328.86065 229.529526,328.393626 L229.79589,328.293042 L249.810959,320.158847 C252.657534,319.002386 254.203425,315.802286 253.256849,313.02664 C252.755479,311.557058 251.718493,310.394334 250.334247,309.752783 C249.035873,309.150025 247.600246,309.079328 246.261577,309.545853 L245.995205,309.646322 L242.076027,311.239761 C240.628767,311.827038 238.999315,311.717097 237.642466,310.939165 C236.360997,310.204451 235.455257,308.949625 235.146239,307.497085 L235.097945,307.238767 L231.791008,286.748532 C227.04888,289.14073 222.137917,291.237476 217.081244,293.015186 Z M176.766774,54.0025462 L176.634736,54.0185266 C176.546821,54.0251404 176.458564,54.030126 176.370001,54.0334582 L176.103425,54.0384692 C171.475561,54.0384692 166.863646,54.3175114 162.297569,54.8716501 L168.923257,55.9882245 C169.149358,56.0268452 169.372645,56.0825043 169.590309,56.1552019 C171.880342,56.9192285 173.154141,59.3627226 172.51433,61.6842449 L172.450869,61.8949063 L167.951365,75.5257103 C167.534379,76.8098456 166.569057,77.83207 165.329259,78.3172729 L165.107678,78.3972663 L153.188491,82.4138099 L140.544884,103.691495 C140.213186,104.24908 139.766944,104.727525 139.237809,105.094869 L139.006054,105.245407 L116.508532,118.876211 C116.067902,119.143472 115.585537,119.332703 115.083042,119.436037 L114.830217,119.48051 L87.194262,123.465248 L87.194262,131.275699 L94.8749158,139.031626 C95.662329,139.826756 96.1283377,140.886082 96.1869725,142.003656 L96.1932705,142.243952 L96.1932705,149.450104 L102.033627,143.575227 C103.047703,142.529631 104.506105,142.053689 105.934697,142.303019 C107.284455,142.522942 108.457119,143.349769 109.128604,144.542359 L109.241833,144.756564 L116.971981,160.418358 L145.687817,160.418358 C147.191937,160.418899 148.590967,161.177221 149.423344,162.430356 L149.543893,162.622004 L161.73305,183.136364 L177.184347,183.136364 C177.479627,183.136364 177.773782,183.165898 178.063438,183.224397 C180.430852,183.702189 181.989922,185.974373 181.630575,188.359783 L181.593861,188.570511 L177.094357,211.288518 C176.937943,212.079786 176.576065,212.81355 176.048084,213.414867 L175.865993,213.610298 L159.18633,230.453429 L159.18633,242.203182 C159.18633,243.549157 158.595447,244.821176 157.58155,245.681633 L157.386529,245.838063 L141.188313,258.105786 L141.188313,278.551992 C141.188313,279.940585 140.571323,281.183768 139.599096,282.017222 C143.242218,283.253532 146.96765,284.309284 150.76398,285.174064 C151.505236,285.081333 152.264319,285.109111 153.015753,285.264612 C160.581507,286.83161 168.345205,287.626243 176.089726,287.626243 C185.870548,287.626243 195.60274,286.368887 205.017123,283.889662 C205.71119,283.706782 206.418034,283.635288 207.114951,283.666867 C216.084674,281.108393 224.611753,277.47036 232.551588,272.899543 C232.98394,272.446741 233.47944,272.051745 234.028767,271.725944 C244.107534,265.73837 253.217808,258.240159 261.106849,249.439364 C261.441435,249.066385 261.807366,248.735056 262.197624,248.446898 C265.061529,245.153888 267.744116,241.693613 270.231413,238.08387 L268.492787,236.328305 C267.705374,235.533175 267.239365,234.473849 267.180731,233.356276 L267.174433,233.115979 L267.174433,216.013864 L249.626366,180.623753 C249.360614,180.070143 249.209406,179.468702 249.181031,178.855955 L249.176416,178.592763 L249.176416,162.849184 L239.353998,156.224614 L223.286268,160.28205 C222.412895,160.505917 221.494153,160.456327 220.652209,160.142469 L220.424583,160.050326 L188.928053,146.419522 C187.54767,145.829936 186.553468,144.587657 186.266113,143.112164 L186.228351,142.889144 L181.728847,111.083934 C181.539867,109.750788 181.946753,108.406071 182.830871,107.409172 L183.002206,107.226417 L196.500719,93.5956128 C197.288132,92.8004826 198.337177,92.3299068 199.443904,92.2706973 L199.681869,92.2643376 L226.678894,92.2643376 C228.096238,92.2713323 229.422719,92.9516926 230.264281,94.0919718 L230.399984,94.2862402 L238.319112,106.281348 L262.287971,110.316066 L272.259095,106.959247 C268.74965,101.510249 264.805267,96.3772957 260.476134,91.6114518 L260.650151,91.5010126 C259.724153,92.1275752 258.602177,92.3801086 257.505547,92.2152068 L257.271024,92.1734656 L234.773502,87.6298642 C234.650891,87.6079035 234.529779,87.5788749 234.410667,87.5431151 L221.976912,83.3634226 L205.247755,87.5844282 C204.510837,87.7737449 203.740144,87.7669576 203.00915,87.5680551 L202.737032,87.484469 L189.238519,82.9408677 C189.037729,82.8732816 188.842,82.7914968 188.652459,82.6960811 C186.495969,81.6105735 185.580731,79.0121008 186.538052,76.8079678 L186.633306,76.6025438 L195.632315,58.4281385 C196.163564,57.3548337 197.081357,56.5571383 198.16565,56.1721998 C191.235548,54.7946708 184.082233,54.0511436 176.766774,54.0025462 Z M69.9994506,240.997052 L57.519863,255.326044 C56.4993151,256.498509 55.009589,257.142843 53.4753425,257.083002 C51.9356164,257.022465 50.5041096,256.26332 49.5753425,255.01501 C48.5486301,253.635885 47.0527397,252.75497 45.3616438,252.533698 C43.6835616,252.314513 42.0184932,252.784891 40.6767123,253.859245 C38.146387,255.885035 37.6325586,259.649826 39.4532797,262.53455 L39.5979452,262.754672 L45.8041096,271.830318 C47.8315068,274.794533 51.7739726,275.674751 54.589726,273.792545 C57.3212329,271.968091 58.2219178,268.388072 56.6842466,265.465606 C56,264.163718 55.889726,262.628032 56.3821918,261.239165 C56.8450443,259.931996 57.8005546,258.870143 59.0323015,258.282751 L59.2664384,258.178231 L76.8800415,250.84201 C74.4405867,247.676733 72.1437643,244.391723 69.9994506,240.997052 Z M103.676949,153.816725 L86.8085106,170.847505 L86.8085106,181.588871 L94.4142478,196.905603 L114.877303,201.042172 C116.915025,201.461923 118.398032,203.22602 118.494123,205.305363 L118.499082,205.52155 L118.499082,250.351901 L126.448889,270.426829 L132.080756,272.309996 L132.080756,255.800287 C132.080756,254.446257 132.675279,253.166624 133.695422,252.301018 L133.891646,252.143652 L150.189654,239.802507 L150.189654,228.375522 C150.191239,227.243412 150.608392,226.155599 151.355536,225.319261 L151.520658,225.14397 L168.66073,207.838943 L171.829787,191.809167 L159.244103,191.809167 C157.730717,191.808623 156.323068,191.045762 155.485563,189.785128 L155.364272,189.592332 L143.10002,168.955196 L113.971858,168.955196 C112.33064,168.955742 110.823524,168.060301 110.024506,166.626385 L109.919992,166.427547 L103.676949,153.816725 Z M275.442855,250.42125 L286.974658,255.566103 C289.411644,256.652982 290.627397,259.450199 289.776712,262.011531 C288.684932,265.300696 289.889041,268.974652 292.704795,270.945924 C295.947319,273.215765 300.590607,272.42823 303.183819,269.212185 L303.35,268.999006 L306.908904,264.273658 C308.156164,262.616899 308.695205,260.565606 308.423973,258.497614 C308.15274,256.429622 307.106164,254.592644 305.474658,253.324851 C302.460959,250.982008 298.276027,251.209543 295.522603,253.869682 C294.49726,254.861233 293.112329,255.377535 291.697945,255.299602 C290.372603,255.224584 289.129733,254.632181 288.227816,253.650823 L288.052055,253.449404 L280.124672,243.880838 C278.630257,246.112494 277.068662,248.293641 275.442855,250.42125 Z M62.1691781,155.068787 C62.1150281,155.476271 62.0271498,155.874048 61.9084236,156.258887 C61.3074728,161.086125 61,166.006531 61,171 C61,175.948371 61.301944,180.824993 61.88811,185.611836 C62.0426273,186.051911 62.1521736,186.510772 62.2164384,186.982803 C62.6410959,190.107058 63.2157534,193.315507 63.9232877,196.519085 C64.0219904,196.965453 64.061191,197.411277 64.0462258,197.848013 C65.4544948,203.967823 67.338752,209.90149 69.6538528,215.608113 C69.9568072,215.975901 70.2104546,216.394936 70.4061644,216.857356 C71.9363014,220.478429 73.6431507,224.018787 75.4780822,227.381014 C75.7713418,227.919082 75.9917645,228.483378 76.1408157,229.060281 C80.0820399,236.06988 84.7190863,242.622801 89.9534606,248.624266 C90.5111794,248.968366 91.0253145,249.394115 91.4794521,249.895825 C99.0570476,258.260194 107.701455,265.399029 117.243184,271.180452 L110.033746,252.97606 C109.857515,252.529273 109.752761,252.057243 109.723064,251.578377 L109.714281,251.290384 L109.714281,209.57558 L90.8163629,205.763499 C89.5326808,205.506919 88.4273597,204.69995 87.7822134,203.559457 L87.6667099,203.341759 L78.6677014,185.167354 C78.3950596,184.615236 78.2373924,184.01398 78.2026124,183.400115 L78.1952535,183.136364 L78.1952535,169.50556 C78.1952535,168.380716 78.6087679,167.29941 79.3498276,166.467588 L79.5136082,166.293234 L84.6295446,161.122616 L63.5384495,146.926162 C62.9894995,149.614163 62.5328059,152.329167 62.1691781,155.068787 Z M223.644862,101.540282 L200.837526,101.540282 L190.212766,112.242618 L194.046349,139.307879 L221.910944,151.357108 L238.500561,147.17992 C239.656355,146.886349 240.87656,147.065465 241.897306,147.671485 L242.112889,147.807864 L255.659119,156.908489 C256.84887,157.708147 257.587768,159.025444 257.662251,160.455102 L257.668476,160.69435 L257.668476,177.821727 L275.278576,213.264114 C275.545267,213.818542 275.697009,214.420872 275.725484,215.034524 L275.730117,215.298104 L275.730877,229.128498 C279.604875,222.306754 282.801638,215.063564 285.241096,207.580616 C285.294704,207.416269 285.353878,207.254736 285.418362,207.096214 C289.043344,195.728419 291,183.596684 291,171 C291,150.71472 285.925843,131.635184 276.998408,115.003504 L263.59721,119.504917 C262.986783,119.711459 262.34092,119.783002 261.702729,119.715355 L261.429813,119.677829 L234.337353,115.127516 C233.188407,114.935872 232.160413,114.304243 231.464926,113.370901 L231.321059,113.166331 L223.644862,101.540282 Z M331.119863,183.045825 C329.974315,183.827976 329.173708,184.991132 328.844459,186.34265 L328.784932,186.615408 L327.971233,190.825149 C327.671233,192.378231 326.694521,193.708648 325.314384,194.442744 C324.01672,195.133657 322.493357,195.22669 321.128597,194.706761 L320.874658,194.602087 L301.219727,185.88137 C300.609916,191.465883 299.649174,196.942342 298.360502,202.287289 L319.471233,201.308449 C321.034247,201.229821 322.566438,201.900596 323.59589,203.114811 C324.568151,204.260255 325.000338,205.77437 324.790324,207.263246 L324.746575,207.525646 L324.634247,208.108052 C324.044521,211.164115 325.849315,214.219483 328.657534,214.920179 C330.143151,215.288966 331.667808,215.037078 332.95,214.205567 C334.158058,213.422313 334.997836,212.230406 335.336855,210.828243 L335.394521,210.562922 L339.603425,188.771769 C340.188356,185.742147 338.237671,182.793241 335.254795,182.199006 C333.809589,181.910239 332.341096,182.211531 331.119863,183.045825 Z M12.5705479,157.784592 C11.3110671,159.01862 10.551977,160.704166 10.462167,162.447201 L10.4534247,162.738171 L10.2753425,182.864215 C10.260274,184.59334 10.9116438,186.221571 12.110274,187.450398 C13.3082192,188.678529 14.9061644,189.354871 16.6082192,189.354871 C20.1051668,189.354871 22.9885892,186.527457 23.1424404,183.005392 L23.1486301,182.769583 L23.1767123,179.526342 C23.190411,177.944036 23.910274,176.453579 25.1335616,175.473857 C26.288242,174.549221 27.7771076,174.174489 29.215876,174.435243 L29.4691781,174.487873 L50.2318946,179.360761 C50.0780398,176.760609 50,174.139599 50,171.5 C50,168.546145 50.0977279,165.615568 50.2900661,162.711449 L29.6349315,167.6333 C28.1047945,167.999304 26.4910959,167.630517 25.260274,166.6334 C24.0294521,165.636978 23.3164384,164.122167 23.3253425,162.523857 C23.3445205,158.993936 20.5363014,156.046421 17.0664384,155.953181 C15.3986301,155.903082 13.819863,156.55994 12.5705479,157.784592 Z M121.575701,67.9058772 L120.263246,68.6394031 C120.017634,68.82821 119.758361,69.0019316 119.486301,69.1587475 C108.910959,75.2486083 99.3821918,82.9750497 91.1616438,92.1230616 C90.9418004,92.3675944 90.7083091,92.5941825 90.4631891,92.802388 C85.3517751,98.5786439 80.8013457,104.878988 76.8949205,111.612119 C76.7742615,111.928735 76.627327,112.236661 76.4575342,112.535785 C72.4010595,119.675568 69.130797,127.150091 66.6681333,134.896281 L68.357376,139.999677 L87.1737565,152.655026 L87.1737565,144.817287 L79.452708,137.02973 C78.6611536,136.231357 78.1926941,135.167712 78.1337508,134.045581 L78.1274197,133.804304 L78.1274197,120.117913 C78.1301555,117.920364 79.6827589,116.048063 81.8034211,115.641676 L82.0173445,115.605966 L112.77489,111.176138 L133.640265,98.5481611 L146.630805,76.7138055 C147.144359,75.8536685 147.923361,75.1908099 148.844629,74.8239062 L149.077839,74.7384031 L160.498839,70.8925273 L162.638298,64.4371129 L140.719024,60.7509116 C140.177213,60.6609725 139.657002,60.4721561 139.183316,60.1945179 L139.113899,60.148191 C133.022916,62.2453684 127.160798,64.8475947 121.575701,67.9058772 Z M310.917808,101.427634 C308.919863,102.094235 307.313699,103.513022 306.394521,105.423757 C305.473288,107.34006 305.355479,109.500596 306.064384,111.507356 C306.586301,112.985984 306.424658,114.625348 305.624658,115.969682 C304.869102,117.239331 303.619294,118.118585 302.192585,118.395249 L301.939041,118.437773 L291.441222,119.926507 C292.62427,122.67682 293.715589,125.477489 294.711232,128.324487 L303.478767,122.282207 C304.643836,121.47992 306.082877,121.19672 307.457534,121.502187 C308.832192,121.806958 310.024658,122.671869 310.75411,123.894433 C312.738356,127.21839 316.890411,128.552286 320.416438,126.996421 C324.024825,125.402783 325.826403,120.972029 324.516739,117.024959 L324.430822,116.778926 L320.632877,106.424354 C319.14863,102.377435 314.793151,100.136183 310.917808,101.427634 Z M54.586437,72.3902148 L54.439726,72.5780318 L45.8383562,84.1315109 C44.15,86.3992048 44.4226027,89.6375746 46.4458904,91.35 C47.5164384,92.2559642 48.8664384,92.666501 50.239726,92.5064612 C51.5316781,92.3557716 52.6839683,91.7256151 53.512049,90.7220599 L53.6732877,90.5164016 L54.7924658,89.0134195 C55.7321918,87.7518887 57.1849315,86.9913519 58.7417808,86.9454274 C60.2205479,86.9013972 61.626613,87.5022314 62.6287775,88.5832141 L62.8013699,88.7789264 L71.6943182,99.3902104 C73.509691,96.664378 75.4251045,94.0134441 77.435177,91.4428972 L64.9732877,85.9684891 C63.5938356,85.3624254 62.5445205,84.1718688 62.1027397,82.711332 C61.6609589,81.2507952 61.8712329,79.6677932 62.6780822,78.3784294 C64.0684932,76.1580517 63.5390411,73.1750497 61.4719178,71.5871769 C59.327456,69.9385487 56.2890897,70.3116893 54.586437,72.3902148 Z M221.376887,63.4606772 L219.860235,64.2409588 C219.311307,64.5214038 218.713527,64.6835835 218.103209,64.7193589 L217.840983,64.7269284 L202.563332,64.7269284 L197.106383,75.9088573 L204.46965,78.4220143 L221.265128,74.1223405 C222.014216,73.9270849 222.798065,73.9366134 223.54011,74.1467084 L223.785805,74.2241627 L237.071308,78.7552506 L249.943834,81.3891448 C241.393249,74.0783017 231.781254,68.0109064 221.376887,63.4606772 Z M259.309589,32.2076541 C258.302055,33.3787276 257.823973,34.8705765 257.961644,36.4090457 C258.091861,37.8596363 258.748713,39.1653797 259.819135,40.1151145 L260.024658,40.2889662 L263.330822,42.9560636 C264.55,43.9399602 265.264384,45.4332008 265.273288,47.0148111 C265.28105,48.5092114 264.658932,49.9309946 263.5708,50.9243508 L263.373973,51.0951292 L246.517815,64.9940579 C251.093318,68.1510903 255.454525,71.6067167 259.574544,75.3335091 L268.593836,55.44334 C269.253425,53.9883698 270.534247,52.92167 272.068493,52.5500994 C273.515563,52.1991716 275.039001,52.5049008 276.244715,53.3799465 L276.45411,53.5402584 L276.909589,53.9076541 C279.308219,55.8420477 282.810959,55.617992 284.713699,53.4059642 C285.721233,52.2341948 286.199315,50.7423459 286.061644,49.2038767 C285.931426,47.7539411 285.274575,46.4482362 284.204153,45.4985037 L283.99863,45.3246521 L267.115068,31.70666 C264.712329,29.7701789 261.211644,29.9942346 259.309589,32.2076541 Z M124.727954,12.5580545 L124.460274,12.6549702 L104.339726,20.5170974 C101.477397,21.6352883 99.890411,24.8131213 100.800685,27.6019881 C101.282192,29.077833 102.30411,30.2544732 103.679452,30.9148111 C104.969478,31.5345303 106.403379,31.6240227 107.748073,31.1764081 L108.015753,31.0797217 L111.956164,29.5398608 C113.407534,28.9720676 115.037671,29.1042744 116.384932,29.900994 C117.65605,30.6527943 118.545941,31.9197414 118.835921,33.3765066 L118.880822,33.6354871 L122.087766,55.3234656 C127.02829,52.9346934 132.145479,50.8640467 137.413896,49.1374682 L125.217123,31.2759443 C124.317808,29.9601392 124.064384,28.2978131 124.527397,26.766998 C124.966691,25.3167521 126.004117,24.1369181 127.363048,23.5274569 L127.592466,23.4312127 L128.136301,23.2182903 C130.99863,22.0994036 132.585616,18.9215706 131.676027,16.1327038 C131.194521,14.6568588 130.171918,13.4802187 128.796575,12.8198807 C127.50655,12.2001615 126.072648,12.1094461 124.727954,12.5580545 Z M182.153425,13.0028827 C180.389041,14.4049702 179.278767,16.3595427 179.027397,18.5068588 C178.556164,22.5426441 180.985616,26.3529821 184.804795,27.566501 C186.139726,27.9902584 187.24589,28.9491054 187.869178,30.2203777 C188.454152,31.4115432 188.566564,32.7825089 188.190611,34.0511902 L188.108904,34.3034791 L184.937652,43.318284 C188.193261,43.5509656 191.41476,43.9097805 194.597483,44.3899678 L193.463014,34.3327038 C193.171918,31.7525845 194.793151,29.3478131 197.265753,28.6902584 C200.641781,27.7926441 203.067123,24.9383698 203.444521,21.4188867 C203.923833,16.9442677 200.656809,12.8202117 196.121738,12.1045427 L195.863699,12.0676938 L188.660959,11.1464215 C186.376712,10.8534791 184.006164,11.5305169 182.153425,13.0028827 Z"
  }));
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ "./src/icon.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */



/**
 * Internal dependencies
 */

 // import save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('wp-sand-block/covid-19-global-stats', {
  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Covid-19 Global', 'wp-sand-block'),

  /**
   * This is a short description for your block, can be translated with `i18n` functions.
   * It will be shown in the Block Tab in the Settings Sidebar.
   */
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Covid19 Global Stats', 'wp-sand-block'),

  /**
   * Blocks are grouped into categories to help users browse and discover them.
   * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
   */
  category: 'widgets',

  /**
   * An icon property should be specified to make it easier to identify a block.
   * These can be any of WordPress’ Dashicons, or a custom svg element.
   */
  icon: _icon__WEBPACK_IMPORTED_MODULE_2__["iconVirusGlobal"],
  example: {
    attributes: {
      content: ' Hello World :) '
    }
  },
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('statistic'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('corona'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('world'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('covid-19')],
  attributes: {
    title: {
      source: 'text',
      selector: '.slider__title'
    },
    content: {
      type: 'array',
      source: 'children',
      selector: 'p'
    }
  },

  /**
   * Optional block extended support features.
   */
  supports: {
    // Removes support for an HTML mode.
    html: false
  },

  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"]
  /**
   * @see ./save.js
   */
  // save,

});

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["apiFetch"]; }());

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map