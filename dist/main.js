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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createContact: () => (/* binding */ createContact)\n/* harmony export */ });\n// src/contact.js\nfunction createContact() {\n  const contentDiv = document.getElementById('content');\n  contentDiv.innerHTML = ''; // Clear existing content\n  \n  // Create and append contact content\n  const heading = document.createElement('h1');\n  heading.textContent = 'Contact Us';\n\n  const contactInfo = document.createElement('div');\n  contactInfo.innerHTML = `\n    <p>Email: info@example.com</p>\n    <p>Phone: 123-456-7890</p>\n    <p>Address: 123 Restaurant St, City, Country</p>\n  `;\n\n  contentDiv.appendChild(heading);\n  contentDiv.appendChild(contactInfo);\n}\n\n\n//# sourceURL=webpack://js-restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHomepage: () => (/* binding */ createHomepage)\n/* harmony export */ });\n// src/homepage.js\nfunction createHomepage() {\n  const contentDiv = document.getElementById('content');\n  contentDiv.innerHTML = ''; // Clear existing content\n  \n  // Create and append homepage content\n  const img = document.createElement('img');\n  img.src = '../restaurant.jpg';\n  img.alt = 'Restaurant Image';\n\n  const heading = document.createElement('h1');\n  heading.textContent = 'Welcome to Our Restaurant!';\n\n  const paragraph = document.createElement('p');\n  paragraph.textContent = 'Experience the finest dining experience with us. Our restaurant offers a delightful blend of exquisite flavors, cozy ambiance, and exceptional service. Whether you\\'re craving for a gourmet meal or just looking to unwind, we have something for everyone.';\n\n  contentDiv.appendChild(img);\n  contentDiv.appendChild(heading);\n  contentDiv.appendChild(paragraph);\n}\n\n\n//# sourceURL=webpack://js-restaurant-page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n// src/index.js\n\n // Importing from the stc directory\n // Importing from the src directory\n // Importing from the src directory\n\ndocument.addEventListener('DOMContentLoaded', _homepage__WEBPACK_IMPORTED_MODULE_0__.createHomepage);\n\ndocument.querySelector('button[data-target=\"home\"]').addEventListener('click', () => {\n  console.log('Home button clicked');\n  (0,_homepage__WEBPACK_IMPORTED_MODULE_0__.createHomepage)();\n});\n\ndocument.querySelector('button[data-target=\"menu\"]').addEventListener('click', () => {\n  console.log('Menu button clicked');\n  (0,_menu__WEBPACK_IMPORTED_MODULE_1__.createMenu)();\n});\n\ndocument.querySelector('button[data-target=\"contact\"]').addEventListener('click', () => {\n  console.log('Contact button clicked');\n  (0,_contact__WEBPACK_IMPORTED_MODULE_2__.createContact)();\n});\n\n\n//# sourceURL=webpack://js-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenu: () => (/* binding */ createMenu)\n/* harmony export */ });\n// src/menu.js\nfunction createMenu() {\n  const contentDiv = document.getElementById('content');\n  contentDiv.innerHTML = ''; // Clear existing content\n  \n  // Create and append menu content\n  const heading = document.createElement('h1');\n  heading.textContent = 'Our Menu';\n\n  const menuList = document.createElement('ul');\n  const items = ['Appetizers', 'Main Course', 'Desserts', 'Drinks'];\n  items.forEach(item => {\n    const listItem = document.createElement('li');\n    listItem.textContent = item;\n    menuList.appendChild(listItem);\n  });\n\n  contentDiv.appendChild(heading);\n  contentDiv.appendChild(menuList);\n}\n\n\n//# sourceURL=webpack://js-restaurant-page/./src/menu.js?");

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