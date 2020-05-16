(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/FileDecoders/psd/PsdFile.js":
/*!*****************************************!*\
  !*** ./src/FileDecoders/psd/PsdFile.js ***!
  \*****************************************/
/*! exports provided: PsdFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PsdFile\", function() { return PsdFile; });\n/* harmony import */ var psd_webpack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! psd-webpack */ \"./node_modules/psd-webpack/index.js\");\n/* harmony import */ var psd_webpack__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(psd_webpack__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _PsdNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PsdNode */ \"./src/FileDecoders/psd/PsdNode.js\");\n\r\n\r\n\r\nclass PsdFile {\r\n    constructor(parsedFile) {\r\n        this.size = {width: parsedFile.header.width, height: parsedFile.header.height}\r\n        this.tree = new _PsdNode__WEBPACK_IMPORTED_MODULE_1__[\"PsdNode\"](parsedFile.tree());\r\n        console.log(this.tree);\r\n    }\r\n\r\n    static async fromFile(file) {\r\n        const filePromise = psd_webpack__WEBPACK_IMPORTED_MODULE_0___default.a.fromDroppedFile(file);\r\n        return new PsdFile(await filePromise)\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/FileDecoders/psd/PsdFile.js?");

/***/ }),

/***/ "./src/FileDecoders/psd/PsdNode.js":
/*!*****************************************!*\
  !*** ./src/FileDecoders/psd/PsdNode.js ***!
  \*****************************************/
/*! exports provided: PsdNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PsdNode\", function() { return PsdNode; });\nclass PsdNode {\r\n    constructor(node) {\r\n        this._node = node;\r\n        this.name = node.name;\r\n        this._imageLoaded = false;\r\n        this._image = null;\r\n    }\r\n\r\n    get rect() {\r\n        return {\r\n            left: this._node.left,\r\n            top: this._node.top,\r\n            width: this._node.width,\r\n            height: this._node.height\r\n        }\r\n    }\r\n\r\n    get children() {\r\n        if (!this._children) {\r\n            this._children = this._node.children().map(x => new PsdNode(x));\r\n        }\r\n        return this._children;\r\n    }\r\n\r\n    get image() {\r\n        if (!this._imageLoaded) {\r\n            this._imageLoaded = true;\r\n\r\n            if (this._node.layer && this._node.layer.image) {\r\n                try {\r\n                    var pixelData=this._node.layer.image.pixelData;\r\n                    var imageData = new ImageData(this.rect.width, this.rect.height)\r\n                    if (pixelData.length === imageData.data.length) {\r\n                        for (let i = 0; i < pixelData.length; i++) {\r\n                            imageData.data[i] = pixelData[i];\r\n                        }\r\n                    }\r\n                    this._image = imageData;\r\n                } catch (ex) {\r\n                    console.error(ex);\r\n                }\r\n            }\r\n        }\r\n        return this._image;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/FileDecoders/psd/PsdNode.js?");

/***/ }),

/***/ 0:
/*!***********************!*\
  !*** vertx (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///vertx_(ignored)?");

/***/ }),

/***/ 1:
/*!***************************!*\
  !*** ./streams (ignored) ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///./streams_(ignored)?");

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** ./extend-node (ignored) ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///./extend-node_(ignored)?");

/***/ })

}]);