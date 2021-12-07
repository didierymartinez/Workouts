/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cuenta.js":
/*!***********************!*\
  !*** ./src/cuenta.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconsole.log('cuenta')\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    debito: 0,\n    credito: 0,\n    gasto(){\n        this.debito++\n    },\n    ingreso(){\n        this.credito++\n    },\n    saldo(){\n        return this.credito - this.debito\n    }\n});\n\n//# sourceURL=webpack://wef/./src/cuenta.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _person_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./person.js */ \"./src/person.js\");\n/* harmony import */ var _cuenta_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cuenta.js */ \"./src/cuenta.js\");\n\n\n\nconst p1 = new _person_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Didier\", \"Martinez\");\np1.caminar();\n\nconsole.log(p1.nombreCompleto())\n\n_cuenta_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ingreso()\n_cuenta_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ingreso()\n\n_cuenta_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gasto()\n_cuenta_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gasto()\n_cuenta_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gasto()\n\nconsole.log(_cuenta_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].saldo())\n\n//# sourceURL=webpack://wef/./src/index.js?");

/***/ }),

/***/ "./src/person.js":
/*!***********************!*\
  !*** ./src/person.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Person)\n/* harmony export */ });\nclass Person\n{\n    constructor( nombre, apellido ){\n        this.nombre = nombre;\n        this.apellido = apellido;\n    }\n    \n    caminar(){\n        console.log('Camina..');\n    }\n\n    nombreCompleto(){\n        return this.nombre + \" \" + this.apellido;\n    }\n\n}\n\n//# sourceURL=webpack://wef/./src/person.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;