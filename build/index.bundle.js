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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/logo.png */ \"./src/assets/logo.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: antiquewhite;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  gap: 12rem;\\r\\n  margin: 1rem 3rem;\\r\\n  text-align: center;\\r\\n  align-items: center;\\r\\n  color: brown;\\r\\n}\\r\\n\\r\\n.nav-items {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  gap: 5rem;\\r\\n  font-size: 25px;\\r\\n}\\r\\n\\r\\n.nav-items li {\\r\\n  list-style: none;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.info-links a {\\r\\n  text-decoration: none;\\r\\n  color: #e1362c;\\r\\n  background-color: transparent;\\r\\n}\\r\\n\\r\\n.nav-items li a {\\r\\n  text-decoration: none;\\r\\n  color: inherit;\\r\\n}\\r\\n\\r\\n#logo {\\r\\n  content: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  width: 5rem;\\r\\n}\\r\\n\\r\\n.intro {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  padding-top: 70px;\\r\\n}\\r\\n\\r\\n.intro h1 {\\r\\n  font-size: 2rem;\\r\\n}\\r\\n\\r\\n.intro p {\\r\\n  font-size: 1.3rem;\\r\\n}\\r\\n\\r\\n.mealscounter {\\r\\n  color: #e1362c;\\r\\n  font-size: 2rem;\\r\\n}\\r\\n\\r\\n.copyrights {\\r\\n  color: antiquewhite;\\r\\n  font-size: 25px;\\r\\n  word-spacing: 8px;\\r\\n}\\r\\n\\r\\n.creator-direct {\\r\\n  text-decoration: none;\\r\\n  color: brown;\\r\\n}\\r\\n\\r\\n.pop-container {\\r\\n  width: 80%;\\r\\n  background-color: azure;\\r\\n  margin-top: -5rem;\\r\\n  position: absolute;\\r\\n  z-index: 1;\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\n.pop-up {\\r\\n  justify-content: center;\\r\\n  width: 75%;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.close {\\r\\n  float: right;\\r\\n  font-size: xx-large;\\r\\n  position: relative;\\r\\n  top: 1rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.meal-img {\\r\\n  height: 20rem;\\r\\n  width: 75%;\\r\\n  border: solid 1px;\\r\\n  margin: 2rem auto;\\r\\n  background-size: cover;\\r\\n  background-repeat: no-repeat;\\r\\n}\\r\\n\\r\\nh3 {\\r\\n  font-size: 2em;\\r\\n  padding: 2em 0 1em 0;\\r\\n  font-weight: bold;\\r\\n  letter-spacing: 2px;\\r\\n}\\r\\n\\r\\n.pop-info h3 {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.meal-info {\\r\\n  height: 8rem;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  gap: 15rem;\\r\\n  font-size: large;\\r\\n}\\r\\n\\r\\n.pop-info h4 {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.comments-1 {\\r\\n  height: 8rem;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 1rem;\\r\\n  justify-content: flex-start;\\r\\n  margin-left: 20rem;\\r\\n  width: 50%;\\r\\n}\\r\\n\\r\\n.add-comment {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  text-align: center;\\r\\n  flex-direction: column;\\r\\n  gap: 0.5rem;\\r\\n  width: 50%;\\r\\n  margin-top: 2rem;\\r\\n  margin-left: 20rem;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  width: 100%;\\r\\n  align-items: center;\\r\\n  justify-content: space-evenly;\\r\\n  margin-top: 140px;\\r\\n}\\r\\n\\r\\n.mealCard {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  border-radius: 20px;\\r\\n  align-items: center;\\r\\n  padding: 40px 15px;\\r\\n  border: 1px solid black;\\r\\n  margin: 3em 0.5em;\\r\\n  box-shadow: 0 15px 15px -15px black;\\r\\n  gap: 20px;\\r\\n  background-color: rgb(248, 248, 248);\\r\\n}\\r\\n\\r\\n.mealImg {\\r\\n  width: 500px;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  padding: 10px 0 0 0;\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  align-items: center;\\r\\n  gap: 14px;\\r\\n}\\r\\n\\r\\n.meal-title {\\r\\n  font-size: 2em;\\r\\n}\\r\\n\\r\\n.fa-heart {\\r\\n  font-size: 2em;\\r\\n  color: red;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.Likes {\\r\\n  font-size: 2em;\\r\\n}\\r\\n\\r\\n.commentBtn {\\r\\n  background-color: #fbeee0;\\r\\n  border: 2px solid #422800;\\r\\n  border-radius: 30px;\\r\\n  box-shadow: #422800 4px 4px 0 0;\\r\\n  color: #422800;\\r\\n  cursor: pointer;\\r\\n  display: inline-block;\\r\\n  font-weight: 600;\\r\\n  font-size: 18px;\\r\\n  padding: 0 18px;\\r\\n  line-height: 50px;\\r\\n  text-align: center;\\r\\n  text-decoration: none;\\r\\n  user-select: none;\\r\\n  -webkit-user-select: none;\\r\\n  touch-action: manipulation;\\r\\n}\\r\\n\\r\\n.button-74:hover {\\r\\n  background-color: #fff;\\r\\n}\\r\\n\\r\\n.button-74:active {\\r\\n  box-shadow: #422800 2px 2px 0 0;\\r\\n  transform: translate(2px, 2px);\\r\\n}\\r\\n\\r\\n@media (min-width: 768px) {\\r\\n  .button-74 {\\r\\n    min-width: 120px;\\r\\n    padding: 0 25px;\\r\\n  }\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  width: 100%;\\r\\n  height: 5rem;\\r\\n  background-color: rgb(8, 7, 7);\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  margin-top: 5%;\\r\\n  bottom: 0;\\r\\n  padding-top: 2px;\\r\\n  float: left;\\r\\n  overflow: auto;\\r\\n}\\r\\n\\r\\n.popup-img {\\r\\n  width: 40%;\\r\\n  border-radius: 10px;\\r\\n  border: 2px solid #fff;\\r\\n  box-shadow: 10px 10px 5px #ccc;\\r\\n  -moz-box-shadow: 10px 10px 5px #ccc;\\r\\n  -webkit-box-shadow: 10px 10px 5px #ccc;\\r\\n  -khtml-box-shadow: 10px 10px 5px #ccc;\\r\\n}\\r\\n\\r\\n.modal-container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  z-index: 10;\\r\\n  width: 90%;\\r\\n  height: 100%;\\r\\n  padding: 30px 50px;\\r\\n  position: fixed;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -50%);\\r\\n  border-radius: 10px;\\r\\n  overflow-y: scroll;\\r\\n  background-color: antiquewhite;\\r\\n}\\r\\n\\r\\n.modal-container::-webkit-scrollbar {\\r\\n  width: 0.5em;\\r\\n}\\r\\n\\r\\n.item-info {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.popup-title {\\r\\n  font-size: 2rem;\\r\\n}\\r\\n\\r\\n.meal-popup-description {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 60%;\\r\\n  font-size: 1.1em;\\r\\n  padding: 2.5em 0;\\r\\n  gap: 12px;\\r\\n}\\r\\n\\r\\n.meal-popup-description b {\\r\\n  color: #000;\\r\\n  letter-spacing: 6px;\\r\\n  font-size: 1.3em;\\r\\n}\\r\\n\\r\\n.info-links button {\\r\\n  background-color: #fbeee0;\\r\\n  border: 2px solid #422800;\\r\\n  border-radius: 30px;\\r\\n  box-shadow: #422800 4px 4px 0 0;\\r\\n  color: #422800;\\r\\n  cursor: pointer;\\r\\n  display: inline-block;\\r\\n  font-weight: 600;\\r\\n  font-size: 18px;\\r\\n  padding: 0 18px;\\r\\n  line-height: 50px;\\r\\n  text-align: center;\\r\\n  text-decoration: none;\\r\\n  user-select: none;\\r\\n  -webkit-user-select: none;\\r\\n  touch-action: manipulation;\\r\\n}\\r\\n\\r\\n.meal-popup-description ul {\\r\\n  list-style-type: lower-roman;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 6px;\\r\\n}\\r\\n\\r\\n.meal-popup-description li {\\r\\n  letter-spacing: 3px;\\r\\n  font-style: italic;\\r\\n  color: #000;\\r\\n}\\r\\n\\r\\n.meal-popup-description p {\\r\\n  font-size: medium;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.count {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  text-align: center;\\r\\n  width: 15%;\\r\\n  height: 2rem;\\r\\n  margin: 1.5rem auto;\\r\\n  font-size: 2rem;\\r\\n  font-weight: bold;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.comments {\\r\\n  width: 20%;\\r\\n  margin: 0 auto;\\r\\n  padding: 0;\\r\\n  font-size: 2rem;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.commented {\\r\\n  font-size: 1.6rem;\\r\\n  display: flex;\\r\\n  margin-left: 20rem;\\r\\n  align-items: center;\\r\\n  text-align: center;\\r\\n  gap: 1rem;\\r\\n  width: 60%;\\r\\n}\\r\\n\\r\\nform {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  gap: 1rem;\\r\\n}\\r\\n\\r\\n.user-name {\\r\\n  width: 30%;\\r\\n  background: none;\\r\\n  font-size: 18px;\\r\\n  padding: 10px 10px 10px 5px;\\r\\n  display: block;\\r\\n  border: none;\\r\\n  border-radius: 0;\\r\\n}\\r\\n\\r\\n.user-comment {\\r\\n  width: 30%;\\r\\n  height: 300px;\\r\\n  background: none;\\r\\n  font-size: 18px;\\r\\n  padding: 10px 10px 10px 5px;\\r\\n  display: block;\\r\\n  border: none;\\r\\n  border-radius: 0;\\r\\n}\\r\\n\\r\\n.submit-btn {\\r\\n  background-color: #fbeee0;\\r\\n  border: 2px solid #422800;\\r\\n  border-radius: 30px;\\r\\n  box-shadow: #422800 4px 4px 0 0;\\r\\n  color: #422800;\\r\\n  cursor: pointer;\\r\\n  display: inline-block;\\r\\n  font-weight: 600;\\r\\n  font-size: 18px;\\r\\n  padding: 0 18px;\\r\\n  line-height: 50px;\\r\\n  text-align: center;\\r\\n  text-decoration: none;\\r\\n  user-select: none;\\r\\n  -webkit-user-select: none;\\r\\n  touch-action: manipulation;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpacktutorial/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpacktutorial/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://webpacktutorial/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpacktutorial/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpacktutorial/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpacktutorial/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpacktutorial/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpacktutorial/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpacktutorial/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpacktutorial/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpacktutorial/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_getmeals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getmeals.js */ \"./src/modules/getmeals.js\");\n/* harmony import */ var _modules_popUp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/popUp.js */ \"./src/modules/popUp.js\");\n/* harmony import */ var _modules_getLikes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/getLikes.js */ \"./src/modules/getLikes.js\");\n/* harmony import */ var _modules_mealCounter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/mealCounter.js */ \"./src/modules/mealCounter.js\");\n\n\n\n\n\n\nconst mealsSection = document.querySelector('.container');\nconst popUpSection = document.querySelector('.pop-up');\n\nconst parser = new DOMParser();\n\nconst initAll = async () => {\n  const likesArray = await (0,_modules_getLikes_js__WEBPACK_IMPORTED_MODULE_3__.getLikes)();\n  const mealsArray = await (0,_modules_getmeals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n  const combinedArray = mealsArray.meals.map((meal) => {\n    const likeForThisMeal = likesArray.filter(\n      (likeObj) => likeObj.item_id === meal.idMeal,\n    );\n    return {\n      strMealThumb: meal.strMealThumb,\n      strMeal: meal.strMeal,\n      idMeal: meal.idMeal,\n      likes: likeForThisMeal.length === 0 ? 0 : likeForThisMeal[0].likes,\n    };\n  });\n\n  combinedArray.forEach((likedMeals) => {\n    const string = `\n      <div class=\"mealCard\">\n        <img src=\"${likedMeals.strMealThumb}\" alt=\"meal\" class=\"mealImg\">\n        <div class=\"card\">\n            <h5 class=\"meal-title\">${likedMeals.strMeal}</h5>\n            <div class=\"like\" id=\"${likedMeals.idMeal}\">\n              <p class='likes'>${likedMeals.likes}</p>\n              <i class=\"fa-regular fa-heart like-btn\"></i> \n            </div>\n          </div>\n          <button type=\"button\" class=\"commentBtn\">Comments</button>\n        </div>\n      </div>`;\n\n    const stringItem = parser.parseFromString(string, 'text/html').body.firstChild;\n\n    const likeBtn = stringItem.querySelector('.like-btn');\n    const likeEl = stringItem.querySelector('.likes');\n\n    likeBtn.addEventListener('click', (e) => {\n      e.preventDefault();\n      (0,_modules_getLikes_js__WEBPACK_IMPORTED_MODULE_3__.postLike)(likedMeals.idMeal);\n      likedMeals.likes += 1;\n      likeEl.innerHTML = `${likedMeals.likes}`;\n      e.target.classList.add('fas');\n      likeEl.style.color = '#ff0d00';\n    });\n\n    mealsSection.append(stringItem);\n\n    const commentbtn = stringItem.querySelector('.commentBtn');\n    commentbtn.addEventListener('click', (e) => {\n      e.preventDefault();\n      popUpSection.style.display = 'flex';\n      (0,_modules_popUp_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(likedMeals.idMeal);\n    });\n  });\n  const allItems = (0,_modules_mealCounter_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  const generatedmeals = document.querySelector('.mealscounter');\n  generatedmeals.innerHTML = `(${allItems})`;\n};\n\ninitAll();\n\n//# sourceURL=webpack://webpacktutorial/./src/index.js?");

/***/ }),

/***/ "./src/modules/commentsCounter.js":
/*!****************************************!*\
  !*** ./src/modules/commentsCounter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentCounter = () => {\n  const commentContainer = document.querySelector('.user-comments');\n  if (commentContainer) {\n    return commentContainer.children.length;\n  }\n  return 0;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);\n\n//# sourceURL=webpack://webpacktutorial/./src/modules/commentsCounter.js?");

/***/ }),

/***/ "./src/modules/getComments.js":
/*!************************************!*\
  !*** ./src/modules/getComments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment)\n/* harmony export */ });\nconst baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';\nconst id = 'yCqbqc7XvLe9pKWmDo61';\n\nconst postComment = async (itemId, name, message) => {\n  const response = await fetch(`${baseUrl}/apps/${id}/comments`, {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: itemId,\n      username: name,\n      comment: message,\n    }),\n    headers: {\n      'Content-Type': 'application/json',\n    },\n  });\n  const responseData = await response.text();\n  return responseData;\n};\n\nconst getComments = async (itemId) => {\n  const response = await fetch(`${baseUrl}/apps/${id}/comments?item_id=${itemId}`);\n  if (response.ok) {\n    const responseJson = await response.json();\n    return responseJson;\n  }\n  return [];\n};\n\n\n\n//# sourceURL=webpack://webpacktutorial/./src/modules/getComments.js?");

/***/ }),

/***/ "./src/modules/getLikes.js":
/*!*********************************!*\
  !*** ./src/modules/getLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"postLike\": () => (/* binding */ postLike)\n/* harmony export */ });\nconst postLike = async (itemId) => {\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IrjR8YGC9Yzx2yywDZF3/likes/',\n    {\n      method: 'POST',\n      body: JSON.stringify({\n        item_id: itemId,\n      }),\n      headers: {\n        'Content-Type': 'application/json',\n      },\n    });\n  const responseText = await response.text();\n  return responseText;\n};\n\nconst getLikes = async () => {\n  const response = await fetch(\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IrjR8YGC9Yzx2yywDZF3/likes/',\n  );\n  const responseJSON = await response.json();\n  return responseJSON;\n};\n\n\n\n//# sourceURL=webpack://webpacktutorial/./src/modules/getLikes.js?");

/***/ }),

/***/ "./src/modules/getmeals.js":
/*!*********************************!*\
  !*** ./src/modules/getmeals.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getMeals = async () => {\n  const response = await fetch(\n    'https://www.themealdb.com/api/json/v1/1/filter.php?a=Chinese',\n\n  );\n  const responseData = await response.json();\n  return responseData;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMeals);\n\n//# sourceURL=webpack://webpacktutorial/./src/modules/getmeals.js?");

/***/ }),

/***/ "./src/modules/mealCounter.js":
/*!************************************!*\
  !*** ./src/modules/mealCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mealCounter = () => {\n  const cardCounter = document.querySelectorAll('.container > div');\n  return cardCounter.length;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mealCounter);\n\n\n//# sourceURL=webpack://webpacktutorial/./src/modules/mealCounter.js?");

/***/ }),

/***/ "./src/modules/popUp.js":
/*!******************************!*\
  !*** ./src/modules/popUp.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComments.js */ \"./src/modules/getComments.js\");\n/* harmony import */ var _commentsCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentsCounter.js */ \"./src/modules/commentsCounter.js\");\n\n\n\nconst mealData = async (idMeal) => {\n  const information = await fetch(\n    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`,\n  );\n  const dataJson = await information.json();\n  return dataJson;\n};\nconst popUpSection = document.querySelector('.pop-up');\nconst parser = new DOMParser();\n\nconst displayModal = async (idMeal) => {\n  popUpSection.innerHTML = '<div class=\"backdrop\"></div>';\n  const commentItems = await (0,_getComments_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(idMeal);\n\n  mealData(idMeal).then((meal) => {\n    const string = `\n    <div class=\"modal-container\">\n      <div class=\"modal-popup\">\n        <i class=\"fa-solid fa-xmark close\"></i>\n        <div class=\"item-info\">\n          <img src=${\n  meal.meals[0].strMealThumb\n} alt=\"Thumbnail\" class=\"popup-img\">  \n          <h3 class=\"popup-title\">${meal.meals[0].strMeal}</h3>\n          <div class=\"info-links\">\n            <button> <a href=\"${\n  meal.meals[0].strSource\n}\" target=\"_blank\"> Source</a></button>\n            \n          </div>\n          <div class=\"meal-popup-description\">    \n            <p><b> Food Ingredients </b></p>\n            <ul>\n              <li>${meal.meals[0].strIngredient1}: \n              ${meal.meals[0].strMeasure1}</li>\n              <li>${meal.meals[0].strIngredient2}: \n              ${meal.meals[0].strMeasure2}</li>\n              <li>${meal.meals[0].strIngredient3}: \n              ${meal.meals[0].strMeasure3}</li>\n              <li>${meal.meals[0].strIngredient4}: \n              ${meal.meals[0].strMeasure4}</li>\n              <li>${meal.meals[0].strIngredient5}: \n              ${meal.meals[0].strMeasure5}</li>\n            </ul>\n            <p><b>Recipe</b></p>\n            <p>${meal.meals[0].strInstructions}</p>  \n            <div class=\"tags\"> <b>Tags:</b> \n            ${(meal.meals[0].strTags || '')\n    .split(',')\n    .map((el) => `<code class='tag'>${el}</code>`)}\n              </div>\n          </div>\n        </div>\n\n        <h3 class='count'>Comments(<b class='comments'>0</b>)</h3>\n        <div class='user-comments'>\n        ${commentItems ? commentItems.map((comment) => `\n        <div class=\"comment\">\n            <div class=\"commented\">\n              <div class=\"username\"><b>${comment.username}:</b></div>\n              <div class=\"message\">${comment.comment}</div>\n            </div>\n          </div>`).join('') : ''}\n      </div>\n      <form class=\"comments-posted\">\n            <h3>Your Comment</h3>\n            <input type=\"text\" name=\"username\" class=\"user-name\" placeholder=\"your name\" required>\n            <textarea class=\"user-comment\" name=\"comment\" placeholder=\"your comment\" required></textarea>\n            <button type=\"submit\" class=\"submit-btn\">Submit</button>\n          </form>\n        </div>\n      </div>`;\n    const stringItem = parser.parseFromString(string, 'text/html').body.firstChild;\n    popUpSection.append(stringItem);\n    const closeBtn = stringItem.querySelector('.close');\n    closeBtn.addEventListener('click', (e) => {\n      e.preventDefault();\n      popUpSection.style.display = 'none';\n    });\n    const form = stringItem.querySelector('form');\n    const commentContainer = document.querySelector('.user-comments');\n    const counter = stringItem.querySelector('.comments');\n\n    counter.innerHTML = `${(0,_commentsCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()}`;\n    form.addEventListener('submit', (e) => {\n      e.preventDefault();\n      const formData = new FormData(form);\n      const user = formData.get('username');\n      const message = formData.get('comment');\n      (0,_getComments_js__WEBPACK_IMPORTED_MODULE_0__.postComment)(idMeal, user, message);\n      const commentText = `\n      <div class=\"comment\">\n        <div class=\"commented\">\n          <div class=\"username\"><b>${user}:</b></div>\n          <div class=\"message\">${message}</div>\n        </div>\n        \n      </div>`;\n      const userComment = parser.parseFromString(commentText, 'text/html').body.firstChild;\n      commentContainer.append(userComment);\n      form.reset();\n      counter.innerHTML = `${(0,_commentsCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()}`;\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayModal);\n\n\n//# sourceURL=webpack://webpacktutorial/./src/modules/popUp.js?");

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a88369a9f36ed185a018.png\";\n\n//# sourceURL=webpack://webpacktutorial/./src/assets/logo.png?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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