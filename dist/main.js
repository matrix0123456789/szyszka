/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
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
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + "." + chunkId + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Common/global.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Common/global.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"html, body {\\n  margin: 0;\\n  padding: 0;\\n  background: #f0f0f0; }\\n  html main-layout, body main-layout {\\n    height: 100vh; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/Common/global.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/fast-creator/dist/entry.js":
/*!*************************************************!*\
  !*** ./node_modules/fast-creator/dist/entry.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _createForOfIteratorHelper(o) { if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n/**\n *\n * @param attributes\n * @param documentObject\n * @returns {HTMLElement}\n */\nfunction createFromDefinition() {\n  var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var documentObject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  if (!documentObject) documentObject = document;\n  var element = documentObject.createElement(attributes.tagName || 'div');\n  repairClasses(attributes);\n\n  for (var attrName in attributes) {\n    if (attrName === 'className') {\n      element.className = attributes[attrName];\n    } else if (attrName === 'classList') {\n      var _iterator = _createForOfIteratorHelper(attributes.classList),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var x = _step.value;\n          element.classList.add(x);\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    } else if (attrName === 'text') {\n      element.textContent = attributes.text;\n    } else if (attrName === 'html') {\n      element.innerHTML = attributes.html;\n    } else if (attrName === 'data') {\n      Object.assign(element.dataset, attributes.data);\n    } else if (attrName === 'children') {\n      attributes.children.forEach(function (x) {\n        return element.appendChild(x instanceof Node ? x : create(x, {}, documentObject));\n      });\n    } else if (attrName === 'tagName') {//nothing\n    } else {\n      element.setAttribute(attrName, attributes[attrName]);\n    }\n  }\n\n  return element;\n}\n\nfunction repairClasses(obj) {\n  if (obj.className) {\n    if (!obj.classList) obj.classList = [];\n    obj.classList = [].concat(_toConsumableArray(obj.classList), _toConsumableArray(obj.className.split(' ')));\n    delete obj.className;\n  }\n}\n/**\n *\n * @param {string} selector\n * $returns {object}\n */\n\n\nfunction parseSelector(selector) {\n  selector = (selector + \"\").trim();\n  var position = 0;\n\n  function parseElement() {\n    var ret = {};\n    var canBeTagname = true;\n\n    while (position < selector.length) {\n      var _char = selector[position];\n      position++;\n\n      if (_char === '#') {\n        ret.id = parseText();\n      } else if (_char === '.') {\n        if (!ret.classList) ret.classList = [];\n        ret.classList.push(parseText());\n      } else if (/\\s/.test(_char)) {\n        while (position < selector.length && /\\s/.test(selector[position])) {\n          position++;\n        }\n\n        ret.children = [parseElement()];\n      } else if (canBeTagname) {\n        ret.tagName = _char + parseText();\n      } else {\n        throw new Error(\"Syntax error in position \" + position);\n      }\n\n      canBeTagname = false;\n    }\n\n    return ret;\n  }\n\n  function parseText() {\n    var text = '';\n    var escape = ['.', '#', ','];\n\n    while (position < selector.length) {\n      var _char2 = selector[position];\n\n      if (/\\s/.test(_char2) || escape.includes(_char2)) {\n        return text;\n      } else {\n        text += _char2;\n        position++;\n      }\n    }\n\n    return text;\n  }\n\n  if (selector === \"\") return {};else return parseElement();\n}\n/**\n *\n * @param {string} selector\n * @param {object} attributes\n * @param documentObject\n * @returns {HTMLElement}\n */\n\n\nfunction create() {\n  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n  var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  var documentObject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n  var definition;\n  if (typeof selector == \"string\") definition = mergeObjects(parseSelector(selector), attributes);else definition = selector;\n  if (attributes instanceof Document) documentObject = attributes;\n  return createFromDefinition(definition, documentObject);\n}\n\nfunction mergeObjects(a, b) {\n  repairClasses(a);\n  repairClasses(b);\n\n  var ret = _objectSpread({}, a, {}, b);\n\n  if (a.data && b.data) {\n    ret.data = _objectSpread({}, a.data, {}, b.data);\n  }\n\n  if (a.children && b.children) {\n    ret.children = [].concat(_toConsumableArray(a.children), _toConsumableArray(b.children));\n  }\n\n  if (a.classList && b.classList) {\n    ret.classList = [].concat(_toConsumableArray(a.classList), _toConsumableArray(b.classList));\n  }\n\n  return ret;\n}\n\nmodule.exports = {\n  createFromDefinition: createFromDefinition,\n  parseSelector: parseSelector,\n  create: create,\n  mergeObjects: mergeObjects,\n  \"default\": create\n};\n\n//# sourceURL=webpack:///./node_modules/fast-creator/dist/entry.js?");

/***/ }),

/***/ "./node_modules/prototype-extensions/dist/DomExtensions.js":
/*!*****************************************************************!*\
  !*** ./node_modules/prototype-extensions/dist/DomExtensions.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _fastCreator = __webpack_require__(/*! fast-creator */ \"./node_modules/fast-creator/dist/entry.js\");\n\nfunction _createForOfIteratorHelper(o) { if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nif (!HTMLDocument.prototype.create && !HTMLElement.prototype.addChild) {\n  HTMLDocument.prototype.create = function (selector) {\n    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    return (0, _fastCreator.create)(selector, attributes, this);\n  };\n\n  HTMLElement.prototype.addChild = function (selector) {\n    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    var element = this.ownerDocument.create(selector, attributes);\n    this.appendChild(element);\n    return element;\n  };\n\n  if (window.ShadowRoot) {\n    ShadowRoot.prototype.addChild = HTMLElement.prototype.addChild;\n  }\n}\n\nif (!HTMLCollection.prototype.removeAll) {\n  HTMLCollection.prototype.removeAll = function () {\n    var copy = Array.prototype.slice.call(this);\n\n    var _iterator = _createForOfIteratorHelper(copy),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var element = _step.value;\n        element.remove();\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  };\n}\n\nHTMLElement.prototype.__defineGetter__('offsetTopFull', function () {\n  if (this.offsetParent) return this.offsetParent.offsetTopFull + this.offsetTop;else return this.offsetTop;\n});\n\nHTMLElement.prototype.__defineGetter__('offsetLeftFull', function () {\n  if (this.offsetParent) return this.offsetParent.offsetLeftFull + this.offsetLeft;else return this.offsetLeft;\n});\n\nif (!Node.prototype.findParent) {\n  Node.prototype.findParent = function (fun) {\n    var ret = fun(this);\n    if (ret) return this;else if (this.parentNode && this.parentNode instanceof Element) return this.parentNode.findParent(fun);else return null;\n  };\n}\n\n//# sourceURL=webpack:///./node_modules/prototype-extensions/dist/DomExtensions.js?");

/***/ }),

/***/ "./node_modules/prototype-extensions/dist/PrototypeExtensions.js":
/*!***********************************************************************!*\
  !*** ./node_modules/prototype-extensions/dist/PrototypeExtensions.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _createForOfIteratorHelper(o) { if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nif (!Array.prototype.max) {\n  Array.prototype.max = function () {\n    var fun = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (x) {\n      return x;\n    };\n    var value = null;\n    var object = null;\n\n    var _iterator = _createForOfIteratorHelper(this),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var item = _step.value;\n        var itemValue = fun(item);\n\n        if (typeof itemValue === 'number' && !isNaN(itemValue) && (value == null || itemValue > value)) {\n          value = itemValue;\n          object = item;\n        }\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n\n    return object;\n  };\n}\n\nif (!Array.prototype.min) {\n  Array.prototype.min = function () {\n    var fun = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (x) {\n      return x;\n    };\n    var value = null;\n    var object = null;\n\n    var _iterator2 = _createForOfIteratorHelper(this),\n        _step2;\n\n    try {\n      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n        var item = _step2.value;\n        var itemValue = fun(item);\n\n        if (typeof itemValue === 'number' && !isNaN(itemValue) && (value == null || itemValue < value)) {\n          value = itemValue;\n          object = item;\n        }\n      }\n    } catch (err) {\n      _iterator2.e(err);\n    } finally {\n      _iterator2.f();\n    }\n\n    return object;\n  };\n}\n\nif (!Array.prototype.sum) {\n  Array.prototype.sum = function () {\n    var fun = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (x) {\n      return x;\n    };\n    return this.reduce(function (sum, item) {\n      return sum + Number(fun(item));\n    }, 0);\n  };\n}\n\nif (!Array.prototype.sortBy) {\n  Array.prototype.sortBy = function () {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    var orders = args.map(function (x) {\n      return typeof x == 'function' ? x : function (y) {\n        return y[x];\n      };\n    });\n\n    var compareFunction = function compareFunction(a, b) {\n      var _iterator3 = _createForOfIteratorHelper(orders),\n          _step3;\n\n      try {\n        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n          var order = _step3.value;\n          var valueA = order(a);\n          var valueB = order(b);\n          if (valueA > valueB) return 1;else if (valueA < valueB) return -1;\n        }\n      } catch (err) {\n        _iterator3.e(err);\n      } finally {\n        _iterator3.f();\n      }\n\n      return 0;\n    };\n\n    return this.sort(compareFunction);\n  };\n}\n\nif (!Array.prototype.groupBy) {\n  Array.prototype.groupBy = function () {\n    var fun = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (x) {\n      return x;\n    };\n    var ret = new Map();\n\n    var _iterator4 = _createForOfIteratorHelper(this),\n        _step4;\n\n    try {\n      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {\n        var value = _step4.value;\n        var key = fun(value);\n        if (ret.has(key)) ret.get(key).push(value);else ret.set(key, [value]);\n      }\n    } catch (err) {\n      _iterator4.e(err);\n    } finally {\n      _iterator4.f();\n    }\n\n    return ret;\n  };\n}\n\nif (!Array.prototype.replaceContent) {\n  Array.prototype.replaceContent = function (newContent) {\n    this.splice(0, this.length);\n\n    var _iterator5 = _createForOfIteratorHelper(newContent),\n        _step5;\n\n    try {\n      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {\n        var item = _step5.value;\n        this.push(item);\n      }\n    } catch (err) {\n      _iterator5.e(err);\n    } finally {\n      _iterator5.f();\n    }\n  };\n}\n\nif (!Array.prototype.removeItem) {\n  Array.prototype.removeItem = function (item) {\n    for (var i = 0; i < this.length;) {\n      if (this[i] === item || Number.isNaN(this[i]) && Number.isNaN(item)) this.splice(i, 1);else i++;\n    }\n  };\n}\n\n//# sourceURL=webpack:///./node_modules/prototype-extensions/dist/PrototypeExtensions.js?");

/***/ }),

/***/ "./node_modules/prototype-extensions/dist/entry.js":
/*!*********************************************************!*\
  !*** ./node_modules/prototype-extensions/dist/entry.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./PrototypeExtensions */ \"./node_modules/prototype-extensions/dist/PrototypeExtensions.js\");\n\n__webpack_require__(/*! ./DomExtensions */ \"./node_modules/prototype-extensions/dist/DomExtensions.js\");\n\n//# sourceURL=webpack:///./node_modules/prototype-extensions/dist/entry.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./src/Common/global.scss":
/*!************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./src/Common/global.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./global.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Common/global.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/Common/global.scss?./node_modules/style-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/Common/mainLayout.js":
/*!**********************************!*\
  !*** ./src/Common/mainLayout.js ***!
  \**********************************/
/*! exports provided: MainLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MainLayout\", function() { return MainLayout; });\n/* harmony import */ var _mainLayout_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainLayout.scss */ \"./src/Common/mainLayout.scss\");\n/* harmony import */ var _mainLayout_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mainLayout_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _FileDecoders_fileDecoratedFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FileDecoders/fileDecoratedFactory */ \"./src/FileDecoders/fileDecoratedFactory.js\");\n/* harmony import */ var _FileViewer_fileViewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FileViewer/fileViewer */ \"./src/FileViewer/fileViewer.js\");\n\r\n\r\n\r\n\r\nclass MainLayout extends HTMLElement {\r\n    constructor() {\r\n        super();\r\n        const shadow = this.attachShadow({mode: 'open'});\r\n        shadow.addChild('style', {text: _mainLayout_scss__WEBPACK_IMPORTED_MODULE_0___default.a[0][1]});\r\n        const startPage = shadow.addChild('start-page');\r\n        startPage.addEventListener('selectfile', async e => {\r\n            let file = await Object(_FileDecoders_fileDecoratedFactory__WEBPACK_IMPORTED_MODULE_1__[\"fileDecoratedFactory\"])(e.detail);\r\n            startPage.remove();\r\n            shadow.append(new _FileViewer_fileViewer__WEBPACK_IMPORTED_MODULE_2__[\"FileViewer\"](file))\r\n        });\r\n    }\r\n}\r\n\r\ncustomElements.define('main-layout', MainLayout);\n\n//# sourceURL=webpack:///./src/Common/mainLayout.js?");

/***/ }),

/***/ "./src/Common/mainLayout.scss":
/*!************************************!*\
  !*** ./src/Common/mainLayout.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \":host {\\n  --main:red;\\n  --second:blue;\\n  display: flex; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/Common/mainLayout.scss?");

/***/ }),

/***/ "./src/FileDecoders/fileDecoratedFactory.js":
/*!**************************************************!*\
  !*** ./src/FileDecoders/fileDecoratedFactory.js ***!
  \**************************************************/
/*! exports provided: fileDecoratedFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fileDecoratedFactory\", function() { return fileDecoratedFactory; });\nasync function fileDecoratedFactory(file) {\r\n    const {PsdFile} = await Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./psd/PsdFile */ \"./src/FileDecoders/psd/PsdFile.js\"));\r\n    return PsdFile.fromFile(file);\r\n}\n\n//# sourceURL=webpack:///./src/FileDecoders/fileDecoratedFactory.js?");

/***/ }),

/***/ "./src/FileViewer/Tree/TreeNode.js":
/*!*****************************************!*\
  !*** ./src/FileViewer/Tree/TreeNode.js ***!
  \*****************************************/
/*! exports provided: TreeNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TreeNode\", function() { return TreeNode; });\n/* harmony import */ var _TreeNode_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TreeNode.scss */ \"./src/FileViewer/Tree/TreeNode.scss\");\n/* harmony import */ var _TreeNode_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_TreeNode_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nclass TreeNode extends HTMLElement {\r\n    constructor(node) {\r\n        super();\r\n        this.dbg = node;\r\n        const shadow = this.attachShadow({mode: 'open'});\r\n        shadow.addChild('style', {text: _TreeNode_scss__WEBPACK_IMPORTED_MODULE_0___default.a[0][1]});\r\n        shadow.addChild('div.title', {text: node.name}).addChild('.openButton');\r\n        shadow.addChild('slot')\r\n        for (let child of node.children) {\r\n            this.append(new TreeNode(child));\r\n        }\r\n    }\r\n}\r\n\r\ncustomElements.define('tree-node', TreeNode);\n\n//# sourceURL=webpack:///./src/FileViewer/Tree/TreeNode.js?");

/***/ }),

/***/ "./src/FileViewer/Tree/TreeNode.scss":
/*!*******************************************!*\
  !*** ./src/FileViewer/Tree/TreeNode.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \":host {\\n  display: block; }\\n\\n.title {\\n  margin: 5px; }\\n  .title:hover {\\n    background: rgba(0, 0, 0, 0.05); }\\n  .title .openButton::before {\\n    content: '';\\n    border: 1px black solid;\\n    border-top-color: transparent;\\n    border-left-color: transparent;\\n    width: .5em;\\n    height: .5em;\\n    display: inline-block;\\n    transform: rotate(45deg); }\\n\\nslot {\\n  margin-left: 10px;\\n  display: block; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/FileViewer/Tree/TreeNode.scss?");

/***/ }),

/***/ "./src/FileViewer/fileViewer.js":
/*!**************************************!*\
  !*** ./src/FileViewer/fileViewer.js ***!
  \**************************************/
/*! exports provided: FileViewer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FileViewer\", function() { return FileViewer; });\n/* harmony import */ var _fileViewer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fileViewer.scss */ \"./src/FileViewer/fileViewer.scss\");\n/* harmony import */ var _fileViewer_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fileViewer_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Tree_TreeNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tree/TreeNode */ \"./src/FileViewer/Tree/TreeNode.js\");\n/* harmony import */ var _imageCanvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imageCanvas */ \"./src/FileViewer/imageCanvas.js\");\n\r\n\r\n\r\n\r\nconsole.log(_fileViewer_scss__WEBPACK_IMPORTED_MODULE_0___default.a[0][1])\r\n\r\nclass FileViewer extends HTMLElement {\r\n    constructor(file) {\r\n        super();\r\n        this.dbg = file;\r\n        const shadow = this.attachShadow({mode: 'open'});\r\n        shadow.addChild('style', {text: _fileViewer_scss__WEBPACK_IMPORTED_MODULE_0___default.a[0][1]});\r\n        this.mainView = shadow.addChild('section.mainView');\r\n        this.mainView.append(new _imageCanvas__WEBPACK_IMPORTED_MODULE_2__[\"ImageCanvas\"](file));\r\n        const aside = shadow.addChild('aside');\r\n        this.elementsTree = aside.addChild('section.elementsTree');\r\n        this.elementsTree.append(new _Tree_TreeNode__WEBPACK_IMPORTED_MODULE_1__[\"TreeNode\"](file.tree))\r\n    }\r\n\r\n    set file(value) {\r\n        console.log({value});\r\n\r\n    }\r\n}\r\n\r\ncustomElements.define('file-viewer', FileViewer);\n\n//# sourceURL=webpack:///./src/FileViewer/fileViewer.js?");

/***/ }),

/***/ "./src/FileViewer/fileViewer.scss":
/*!****************************************!*\
  !*** ./src/FileViewer/fileViewer.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \":host section.mainView {\\n  flex: 1 1 auto; }\\n\\n:host aside {\\n  border-left: 1px solid black;\\n  flex: 0 1 250px; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/FileViewer/fileViewer.scss?");

/***/ }),

/***/ "./src/FileViewer/imageCanvas.js":
/*!***************************************!*\
  !*** ./src/FileViewer/imageCanvas.js ***!
  \***************************************/
/*! exports provided: ImageCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImageCanvas\", function() { return ImageCanvas; });\nclass ImageCanvas extends HTMLElement {\r\n    constructor(file) {\r\n        super();\r\n        console.log(file);\r\n        this._file = file;\r\n        const shadow = this.attachShadow({mode: 'open'});\r\n        this.canvas = shadow.addChild('canvas');\r\n        this.ctx = this.canvas.getContext('2d');\r\n        this.canvas.width = file.size.width;\r\n        this.canvas.height = file.size.height;\r\n        setTimeout(() => this.render(), 2000);\r\n    }\r\n\r\n    render() {\r\n        this.renderNode(this._file.tree);\r\n    }\r\n\r\n    renderNode(node) {\r\n        var isVisible = (node._node.layer.visible!==false);\r\n        var isMask = node._node.layer.mask && node._node.layer.mask.width > 0;\r\n        var isRenderable = isVisible && !isMask && node.image && node._node.layer.opacity == 255 && !node._node.layer.clipped && node._node.layer.blendMode&&node._node.layer.blendMode.mode == 'normal'\r\n        if (isVisible) {\r\n            if (isRenderable) {\r\n                this.ctx.putImageData(node.image, node.rect.left, node.rect.top);\r\n                console.log(node._node.layer)\r\n                this.ctx.beginPath();\r\n                this.ctx.rect(node.rect.left, node.rect.top, node.rect.width, node.rect.height);\r\n                this.ctx.stroke();\r\n                this.ctx.closePath();\r\n            }\r\n\r\n            for (let child of node.children.reverse()) {\r\n                this.renderNode(child);\r\n            }\r\n        }\r\n\r\n    }\r\n}\r\n\r\ncustomElements.define('image-canvas', ImageCanvas);\n\n//# sourceURL=webpack:///./src/FileViewer/imageCanvas.js?");

/***/ }),

/***/ "./src/StartPage/startPage.js":
/*!************************************!*\
  !*** ./src/StartPage/startPage.js ***!
  \************************************/
/*! exports provided: StartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StartPage\", function() { return StartPage; });\n/* harmony import */ var _startPage_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startPage.scss */ \"./src/StartPage/startPage.scss\");\n/* harmony import */ var _startPage_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_startPage_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nclass StartPage extends HTMLElement {\r\n    constructor() {\r\n        super();\r\n        const shadow = this.attachShadow({mode: 'open'});\r\n        shadow.addChild('style', {text: _startPage_scss__WEBPACK_IMPORTED_MODULE_0___default.a[0][1]});\r\n        shadow.addChild(\"h1\", {text: \"Gruszka\"});\r\n        const openButton = shadow.addChild('button', {text: 'open'});\r\n        openButton.onclick = this.openFileDialog.bind(this);\r\n\r\n        this.addEventListener('dragover', this.onDragOver, true);\r\n        this.addEventListener('drop', this.onDrop, true);\r\n    }\r\n\r\n    openFileDialog() {\r\n        const fileInput = document.create('input', {type: 'file', accept: '.psd'});\r\n        fileInput.addEventListener('change', e => this.dispatchEvent(new CustomEvent('selectfile', {detail: fileInput.files[0]})))\r\n        fileInput.click();\r\n    }\r\n\r\n    onDragOver(e) {\r\n        e.stopPropagation();\r\n        e.preventDefault();\r\n        e.dataTransfer.dropEffect = 'copy';\r\n    }\r\n\r\n    onDrop(e) {\r\n        e.stopPropagation();\r\n        e.preventDefault();\r\n        this.dispatchEvent(new CustomEvent('selectfile', {detail: e}))\r\n    }\r\n}\r\n\r\ncustomElements.define('start-page', StartPage);\n\n//# sourceURL=webpack:///./src/StartPage/startPage.js?");

/***/ }),

/***/ "./src/StartPage/startPage.scss":
/*!**************************************!*\
  !*** ./src/StartPage/startPage.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"button {\\n  display: inline-block;\\n  font-weight: 400;\\n  text-align: center;\\n  vertical-align: middle;\\n  cursor: pointer;\\n  -webkit-user-select: none;\\n  -moz-user-select: none;\\n  -ms-user-select: none;\\n  user-select: none;\\n  background-color: transparent;\\n  border: 1px solid var(--second);\\n  padding: .375rem .75rem;\\n  font-size: 1rem;\\n  line-height: 1.5;\\n  border-radius: .25rem;\\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\\n  color: var(--second);\\n  text-decoration: none; }\\n  button:active {\\n    opacity: .5; }\\n  button:not(:disabled):hover, button:not(:disabled):focus {\\n    background: var(--second);\\n    color: #fff; }\\n  button:disabled {\\n    filter: grayscale(100%); }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/StartPage/startPage.scss?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var prototype_extensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prototype-extensions */ \"./node_modules/prototype-extensions/dist/entry.js\");\n/* harmony import */ var prototype_extensions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prototype_extensions__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _StartPage_startPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StartPage/startPage */ \"./src/StartPage/startPage.js\");\n/* harmony import */ var _Common_mainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Common/mainLayout */ \"./src/Common/mainLayout.js\");\n/* harmony import */ var _FileViewer_fileViewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FileViewer/fileViewer */ \"./src/FileViewer/fileViewer.js\");\n/* harmony import */ var style_loader_Common_global_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! style-loader!./Common/global.scss */ \"./node_modules/style-loader/dist/cjs.js!./src/Common/global.scss\");\n/* harmony import */ var style_loader_Common_global_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(style_loader_Common_global_scss__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });