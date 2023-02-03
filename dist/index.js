"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Roboto-Medium.ttf */ "./src/assets/fonts/Roboto-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --blue: rgb(51, 146, 206);\n  --lightblue: rgb(202, 227, 243);\n  --blue-border: rgb(2, 80, 128);\n  --lightgrey: rgb(235, 235, 235);\n  --modal: rgba(180, 180, 180, 0.3);\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  text-decoration: none;\n}\n\n@font-face {\n  font-family: Roboto;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\nbody {\n  display: grid;\n  grid-template-columns: 400px 1fr;\n  grid-template-rows: 70px 1fr;\n  font-family: Roboto;\n}\n\n/* Header */\nheader {\n  grid-column: 1 / 3;\n  background-color: var(--blue);\n  padding: 8px;\n  padding-left: 20px;\n}\n\nheader > a {\n  color: white;\n  font-size: 48px;\n}\n\n/* Sidebar */\n.sidebar {\n  background-color: var(--lightgrey);\n}\n\nspan.projects-heading {\n  color: var(--blue);\n  font-size: 48px;\n}\n\nbutton.show-project-form {\n  background-color: var(--blue);\n  color: white;\n  font-size: 24px;\n  height: 30px;\n  width: 30px;\n  border: none;\n  border-radius: 50%;\n}\n\n.project-form {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 2;\n}\n\nbutton.close-project-form {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n\n/* Sidebar -> General Navigation */ \n\n.general-navigation > div {\n  display: flex;\n  justify-content: center;\n  width: 90%;\n  background-color: white;\n  border: 2px solid darkgrey;\n  border-radius: 4px;\n  padding: 4px;\n  margin: 5%;\n  color: var(--blue-border);\n  font-size: 30px;\n}\n\n.general-navigation > div.highlighted,\n.project-navigation > div.highlighted {\n  background-color: var(--lightblue);\n  border-color: var(--blue-border);\n}\n\n.project-navigation > div.highlighted {\n  border-left-color: var(--blue);\n}\n\n.general-navigation > div:hover,\n.project-container:hover {\n  border-color: var(--blue);\n  cursor: pointer;\n}\n\n\n.project-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 50px;\n  width: 90%;\n  text-overflow: ellipsis;\n  font-size: 30px;\n  background-color: white;\n  border: 2px solid darkgrey;\n  border-left: 2px solid var(--blue);\n  border-radius: 4px;\n  margin: 5%;\n  color: var(--blue-border);\n  font-size: 30px;\n}\n\n.select-container {\n  display: flex;\n  align-items: center;\n  width: 30px;\n  height: 50px;\n  border-radius: 2px;\n  background-color: var(--blue);\n  color: white;\n  font-size: 30px;\n}\n\n.select-container.chosen::before {\n  content: \"➔\";\n}\n\n/* Main */\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: white;\n\n  min-width: 0;\n}\n\nmain > * {\n  width: 80%;\n}\n\nmain > h1 {\n  text-align: center;\n  font-size: 52px;\n  color: var(--blue-border);\n  margin: 20px;\n}\n\n/* Main -> Task Form */\nmain > button.show-task-form {\n  position: absolute;\n  bottom: 50px;\n  right: 50px;\n\n  color: white;\n  background-color: var(--blue);\n  font-size: 48px;\n  height: 80px;\n  width: 80px;\n  border: solid 1px var(--lightgrey);\n  border-radius: 50%;\n\n}\n\n.task-form {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 2;\n\n  background-color: var(--lightgrey);\n  border: 2px solid darkgrey;\n  border-radius: 8px;\n  padding: 10px;\n}\n\n.task-form > *,\n.project-form > *,\n.task-edit-form > * {\n  display: block;\n}\n\nbutton.submit-task-form {\n  background-color: var(--blue);\n  color: white;\n  border-radius: 8px;\n  font-size: 24px;\n}\n\nbutton.close-task-form {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n/* Main -> Task Edit Form */\n\n.task-edit-form {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 2;\n\n  background-color: var(--lightgrey);\n  border: 2px solid darkgrey;\n  border-radius: 8px;\n  padding: 10px;\n}\n\nbutton.submit-edit-form {\n  background-color: var(--blue);\n  color: white;\n  border-radius: 8px;\n  font-size: 24px;\n}\n\nbutton.close-edit-form {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n/* Main -> Displayed Tasks */\n.task-container {\n  display: flex;\n  background-color: var(--lightgrey);\n  padding: 12px;\n  margin: 8px;\n  border-radius: 4px;\n  width: 100%;\n}\n\n.task-container > * {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.task-title {\n  width: 30%;\n}\n\n.task-description {\n  width: 30%;\n}\n\n.task-importance {\n  position: relative;\n\n  color: rgb(226, 166, 0);\n  font-size: 24px;\n  padding: 0px 8px;\n}\n\n.task-importance:hover::before {\n  position: absolute;\n  top: 5px;\n  left: 15px;\n\n  content: \"Important\";\n  font-size: 12px;\n  color: darkgrey;\n}\n\n/* Modal */\n#modal {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: var(--modal);\n  z-index: 1;\n}\n\n#modal.hidden {\n  z-index: -1;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --blue: rgb(51, 146, 206);\n  --lightblue: rgb(202, 227, 243);\n  --blue-border: rgb(2, 80, 128);\n  --lightgrey: rgb(235, 235, 235);\n  --modal: rgba(180, 180, 180, 0.3);\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  text-decoration: none;\n}\n\n@font-face {\n  font-family: Roboto;\n  src: url(\"./assets/fonts/Roboto-Medium.ttf\");\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\nbody {\n  display: grid;\n  grid-template-columns: 400px 1fr;\n  grid-template-rows: 70px 1fr;\n  font-family: Roboto;\n}\n\n/* Header */\nheader {\n  grid-column: 1 / 3;\n  background-color: var(--blue);\n  padding: 8px;\n  padding-left: 20px;\n}\n\nheader > a {\n  color: white;\n  font-size: 48px;\n}\n\n/* Sidebar */\n.sidebar {\n  background-color: var(--lightgrey);\n}\n\nspan.projects-heading {\n  color: var(--blue);\n  font-size: 48px;\n}\n\nbutton.show-project-form {\n  background-color: var(--blue);\n  color: white;\n  font-size: 24px;\n  height: 30px;\n  width: 30px;\n  border: none;\n  border-radius: 50%;\n}\n\n.project-form {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 2;\n}\n\nbutton.close-project-form {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n\n/* Sidebar -> General Navigation */ \n\n.general-navigation > div {\n  display: flex;\n  justify-content: center;\n  width: 90%;\n  background-color: white;\n  border: 2px solid darkgrey;\n  border-radius: 4px;\n  padding: 4px;\n  margin: 5%;\n  color: var(--blue-border);\n  font-size: 30px;\n}\n\n.general-navigation > div.highlighted,\n.project-navigation > div.highlighted {\n  background-color: var(--lightblue);\n  border-color: var(--blue-border);\n}\n\n.project-navigation > div.highlighted {\n  border-left-color: var(--blue);\n}\n\n.general-navigation > div:hover,\n.project-container:hover {\n  border-color: var(--blue);\n  cursor: pointer;\n}\n\n\n.project-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 50px;\n  width: 90%;\n  text-overflow: ellipsis;\n  font-size: 30px;\n  background-color: white;\n  border: 2px solid darkgrey;\n  border-left: 2px solid var(--blue);\n  border-radius: 4px;\n  margin: 5%;\n  color: var(--blue-border);\n  font-size: 30px;\n}\n\n.select-container {\n  display: flex;\n  align-items: center;\n  width: 30px;\n  height: 50px;\n  border-radius: 2px;\n  background-color: var(--blue);\n  color: white;\n  font-size: 30px;\n}\n\n.select-container.chosen::before {\n  content: \"➔\";\n}\n\n/* Main */\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: white;\n\n  min-width: 0;\n}\n\nmain > * {\n  width: 80%;\n}\n\nmain > h1 {\n  text-align: center;\n  font-size: 52px;\n  color: var(--blue-border);\n  margin: 20px;\n}\n\n/* Main -> Task Form */\nmain > button.show-task-form {\n  position: absolute;\n  bottom: 50px;\n  right: 50px;\n\n  color: white;\n  background-color: var(--blue);\n  font-size: 48px;\n  height: 80px;\n  width: 80px;\n  border: solid 1px var(--lightgrey);\n  border-radius: 50%;\n\n}\n\n.task-form {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 2;\n\n  background-color: var(--lightgrey);\n  border: 2px solid darkgrey;\n  border-radius: 8px;\n  padding: 10px;\n}\n\n.task-form > *,\n.project-form > *,\n.task-edit-form > * {\n  display: block;\n}\n\nbutton.submit-task-form {\n  background-color: var(--blue);\n  color: white;\n  border-radius: 8px;\n  font-size: 24px;\n}\n\nbutton.close-task-form {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n/* Main -> Task Edit Form */\n\n.task-edit-form {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 2;\n\n  background-color: var(--lightgrey);\n  border: 2px solid darkgrey;\n  border-radius: 8px;\n  padding: 10px;\n}\n\nbutton.submit-edit-form {\n  background-color: var(--blue);\n  color: white;\n  border-radius: 8px;\n  font-size: 24px;\n}\n\nbutton.close-edit-form {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n/* Main -> Displayed Tasks */\n.task-container {\n  display: flex;\n  background-color: var(--lightgrey);\n  padding: 12px;\n  margin: 8px;\n  border-radius: 4px;\n  width: 100%;\n}\n\n.task-container > * {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.task-title {\n  width: 30%;\n}\n\n.task-description {\n  width: 30%;\n}\n\n.task-importance {\n  position: relative;\n\n  color: rgb(226, 166, 0);\n  font-size: 24px;\n  padding: 0px 8px;\n}\n\n.task-importance:hover::before {\n  position: absolute;\n  top: 5px;\n  left: 15px;\n\n  content: \"Important\";\n  font-size: 12px;\n  color: darkgrey;\n}\n\n/* Modal */\n#modal {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: var(--modal);\n  z-index: 1;\n}\n\n#modal.hidden {\n  z-index: -1;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_task_creation_and_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/task-creation-and-storage.js */ "./src/modules/task-creation-and-storage.js");
/* harmony import */ var _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/DOM-manipulation.js */ "./src/modules/DOM-manipulation.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





// Main Logic
let currentForm;
let currentProject;


function addTaskToStorage(title, description, importance, dueDate) {
  const task = _modules_task_creation_and_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].createTask(title, description, importance, dueDate, currentProject.title);
  _modules_task_creation_and_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].addTaskToProject(task, currentProject);
  return task;
}

function addTaskToDOM(task) {
  const taskDOM = _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].displayTask(task);
  taskDOM.editTaskButton.addEventListener("click", () => taskEditButton_Callback(task, taskDOM.taskContainer));
  taskDOM.deleteTaskButton.addEventListener("click", () => taskDeleteButton_Callback(task, taskDOM.taskContainer));
}


function taskEditButton_Callback(task, taskContainer) {
  currentForm = _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].buildTaskEdit(task);
  currentForm.formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(taskContainer);
    editTask(task, taskContainer);
    _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].removeForm(currentForm.formElem);
  })
  currentForm.closeEditForm.addEventListener("click", () => _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].removeForm(currentForm.formElem));
}

function taskDeleteButton_Callback(task, taskContainer) {
  _modules_task_creation_and_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].removeTask(task);
  _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].removeTask(taskContainer);
}

function editTask(task, taskContainer) {
  _modules_task_creation_and_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].editTask(
    task, 
    currentForm.titleInput.value,
    currentForm.descriptionInput.value,
    currentForm.importanceInput.checked,
    currentForm.dateInput.value
  );
  _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].editTask(task, taskContainer);
}


function addProject(project) {
  const projectDOM = _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].displayProject(project);
  selectProject(project, projectDOM.projectContainer);
  projectDOM.projectContainer.addEventListener("click", () => projectClick_Callback(project, projectDOM.projectContainer));
  projectDOM.editProjectButton.addEventListener("click", (event) => projectEditButton_Callback(event, project, projectDOM.projectContainer));
  projectDOM.deleteProjectButton.addEventListener("click", (event) => projectDeleteButton_Callback(event, project, projectDOM.projectContainer));
}

function projectClick_Callback(project, projectContainer) {
  selectProject(project, projectContainer);
}

function projectEditButton_Callback(event, project, projectContainer) {
  event.stopPropagation();
  currentForm = _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].buildProjectEdit(project.title);
  currentForm.formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    editProject(project, currentForm.titleInput.value, projectContainer);
    _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].removeForm(currentForm.formElem);
  })
  currentForm.closeProjectFormButton.addEventListener("click", () => _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].removeForm(currentForm.formElem));
}

function projectDeleteButton_Callback(event, project, projectContainer) {
  event.stopPropagation();
  _modules_task_creation_and_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].removeProject(project);
  _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].removeProject(projectContainer);
  selectGeneralProject();
}

function selectProject(project, projectContainer) {
  currentProject = project;
  _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].clearTaskContainer();
  _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].highlightProject(projectContainer);
  _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].highlightNav(projectContainer);
  _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].setMainTitle(project.title);
  project.tasks.forEach(task => addTaskToDOM(task));
}

function selectGeneralProject() {
  selectProject(_modules_task_creation_and_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].getAllProjectsAndTasks()[0], document.querySelector(".project-container"));
}

function editProject(project, newTitle, projectContainer) {
  _modules_task_creation_and_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].editProject(project, newTitle);
  _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].editProject(projectContainer, newTitle);
}



_modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].showTaskForm.addEventListener("click", () => {
  currentForm = _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].buildTaskForm();
  currentForm.formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    const task = addTaskToStorage(
      currentForm.titleInput.value, 
      currentForm.descriptionInput.value, 
      currentForm.importanceInput.checked,
      currentForm.dateInput.value,
    );
    addTaskToDOM(task);
    _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].removeForm(currentForm.formElem);
  });
  currentForm.closeTaskForm.addEventListener("click", () => _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].removeForm(currentForm.formElem));
})


_modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].showProjectForm.addEventListener("click", () => {
  currentForm = _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].buildProjectForm();
  currentForm.formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    const projectName = event.target.children[1].value
    const project = _modules_task_creation_and_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].createNewProject(projectName);
    addProject(project);
    _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].removeForm(currentForm.formElem);
  });
  currentForm.closeProjectFormButton.addEventListener("click", () => _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].removeForm(currentForm.formElem));
});


_modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].navAll.addEventListener("click", event => topNav_Callback(event, "All"));
_modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].navToday.addEventListener("click", event => topNav_Callback(event, "Today"));
_modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].navWeek.addEventListener("click", event => topNav_Callback(event, "Week"));
_modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].navImportant.addEventListener("click", event => topNav_Callback(event, "Important"));

function topNav_Callback(event, criteria) {
  _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].highlightNav(event.target);
  _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].clearTaskContainer();
  _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].setMainTitle(criteria);

  const filteredArray = _modules_task_creation_and_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].getFilteredTasks(criteria);
  filteredArray.forEach(task => addTaskToDOM(task));
}


//!!!!!!
function initialLoad() {            
  const allProjects = _modules_task_creation_and_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].getAllProjectsAndTasks();
  console.log(allProjects);
  allProjects.forEach(project => addProject(project));
  selectGeneralProject();
  _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].navAll.click();
}//!!!!!

initialLoad();
window.addEventListener("beforeunload", _modules_task_creation_and_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].saveChanges);
_modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].modal.addEventListener("click", () => _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].removeForm(currentForm.formElem));


/***/ }),

/***/ "./src/modules/DOM-manipulation.js":
/*!*****************************************!*\
  !*** ./src/modules/DOM-manipulation.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-element-custom-function.js */ "./src/modules/create-element-custom-function.js");


// Initial page build
const body = document.body;

// Header
const header = document.createElement("header");
const headerLink = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("a", "", "Todo List");
headerLink.href = "";
header.appendChild(headerLink);

// Sidebar
const sidebar = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("nav", "sidebar", "");
const projectsTop = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "projects-top-container", "");
const projectsHeading = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("span", "projects-heading", "Projects");
const generalNav = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("nav", "general-navigation", "");
const navAll = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "all-projects", "All");
const navToday = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "today-projects", "Today");
const navWeek = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "this-week-projects", "Week");
const navImportant = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "important-projects", "Important");
generalNav.append(
  navAll,
  navToday,
  navWeek,
  navImportant
)
const projectNav = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("nav", "project-navigation", "");
const showProjectForm = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "show-project-form", "+");
projectsTop.append(
  projectsHeading,
  showProjectForm
)
sidebar.append(
  generalNav,
  projectsTop,
  projectNav
)

// Main
const main = document.createElement("main");
const showTaskForm = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "show-task-form", "+");
const mainTitle = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("h1", "main-title", "")
const containerOfAllTasks = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "all-tasks-container", "");
main.append(
  mainTitle,
  containerOfAllTasks,
  showTaskForm
);

// Modal
const modal = document.createElement("div");
modal.setAttribute("id", "modal");
modal.classList.add("hidden");

body.append(
  header,
  sidebar,
  main,
  modal
)

// Initial build end

function buildTaskForm() {
  const formElem = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("form", "task-form", "");
  body.appendChild(formElem);

  const titleInput = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("input", "title-input", "");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("placeholder", "Task");
  titleInput.setAttribute("required", "");

  const descriptionInput = document.createElement("textarea");
  descriptionInput.setAttribute("placeholder", "Description");
  descriptionInput.setAttribute("maxlength", 300);

  const importanceLabel = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("label", "importance-label", "Important");
  const importanceInput = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("input", "importance-input", "");
  importanceInput.setAttribute("type", "checkbox");
  importanceInput.setAttribute("id", "importance-input");
  importanceLabel.setAttribute("for", "importance-input");
  const importanceContainer = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "importance-container", "")
  importanceContainer.append(importanceLabel, importanceInput);

  const dateInput = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("input", "date-input", "");
  dateInput.setAttribute("type", "datetime-local");
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth()+1) < 10 ? `0${date.getMonth()+1}` : date.getMonth()+1;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  dateInput.value = `${year}-${month}-${day}T${hours}:${minutes}`;

  const submitButton = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "submit-task-form", "Add");
  const closeTaskForm = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "close-task-form", "⨉");

  formElem.append(
    titleInput,
    descriptionInput,
    importanceContainer,
    dateInput,
    submitButton,
    closeTaskForm
  )

  toggleModal();

  return {
    formElem,
    titleInput,
    descriptionInput,
    importanceInput,
    dateInput,
    closeTaskForm
  }
}

function displayTask(task) {
  const taskContainer = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "task-container", "");
  containerOfAllTasks.appendChild(taskContainer);
  const editTaskButton = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "edit-task", "EDIT");
  const deleteTaskButton = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "delete-task", "x");
  taskContainer.append(
    (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "task-title", task.title),
    (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "task-description", task.description),
    (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "task-importance", task.importanceSymbol),
    (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "task-date", task.timeLeft()),
    editTaskButton,
    deleteTaskButton
  )

  return {
    taskContainer,
    editTaskButton,
    deleteTaskButton
  }
}

function buildTaskEdit(task) {
  const formElem = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("form", "task-edit-form", "");
  body.appendChild(formElem);

  const titleInput = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("input", "title-input", "");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("value", task.title);
  titleInput.setAttribute("required", "");

  const descriptionInput = document.createElement("textarea");
  descriptionInput.textContent = task.description;
  descriptionInput.setAttribute("maxlength", 300);

  const importanceLabel = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("label", "importance-label", "Important");
  const importanceInput = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("input", "importance-input", "");
  importanceInput.setAttribute("type", "checkbox");
  importanceInput.checked = task.importance;
  importanceInput.setAttribute("id", "importance-input");
  importanceLabel.setAttribute("for", "importance-input");
  const importanceContainer = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "importance-container", "")
  importanceContainer.append(importanceLabel, importanceInput);

  const dateInput = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("input", "date-input", "");
  dateInput.setAttribute("type", "datetime-local");
  dateInput.value = task.dueDate;

  const submitButton = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "submit-edit-form", "Save");
  const closeEditForm = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "close-edit-form", "⨉");

  formElem.append(
    titleInput,
    descriptionInput,
    importanceContainer,
    dateInput,
    submitButton,
    closeEditForm
  )

  toggleModal();

  return {
    formElem,
    titleInput,
    descriptionInput,
    importanceInput,
    dateInput,
    closeEditForm
  }
}

function editTask(updatedTask, taskContainer) {
  taskContainer.querySelector(".task-title").textContent = updatedTask.title;
  taskContainer.querySelector(".task-description").textContent = updatedTask.description;
  taskContainer.querySelector(".task-importance").textContent = updatedTask.importanceSymbol;
  taskContainer.querySelector(".task-date").textContent = updatedTask.timeLeft();
}

function removeTask(taskContainer) {
  taskContainer.remove();
}

function clearTaskContainer() {
  containerOfAllTasks.replaceChildren();
  mainTitle.textContent = "";
}


function buildProjectForm() {
  const formElem = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("form", "project-form", "");
  body.appendChild(formElem);

  const titleLabel = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("label", "project-title-label", "Project Name");
  const titleInput = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("input", "project-title-input", "");
  titleInput.setAttribute("id", "project-title-input");
  titleLabel.setAttribute("for", "project-title-input");

  const submitButton = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "project-form-submit", "Add");
  const closeProjectFormButton = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "close-project-form", "⨉");

  formElem.append(
    titleLabel,
    titleInput,
    submitButton,
    closeProjectFormButton
  )

  toggleModal();

  return {
    formElem,
    titleInput,
    closeProjectFormButton
  }
}

function displayProject(project) {
  const projectContainer = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "project-container", "");
  projectNav.appendChild(projectContainer);

  const selectContainer = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "select-container", "");
  const projectTitle = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "project-title", project.title);
  const editProjectButton = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "edit-project", "RENAME");
  const deleteProjectButton = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "delete-project", "DELETE");
  const buttonContainer = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "project-button-container", "");
  buttonContainer.append(
    editProjectButton,
    deleteProjectButton
  )
  projectContainer.append(
    selectContainer,
    projectTitle,
    buttonContainer
  )
  return {
    projectContainer,
    editProjectButton,
    deleteProjectButton
  };
}

function buildProjectEdit(projectTitle) {
  const formElem = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("form", "project-form", "");
  body.appendChild(formElem);

  const titleLabel = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("label", "project-title-label", "Project Name");
  const titleInput = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("input", "project-title-input", "");
  titleInput.setAttribute("id", "project-title-input");
  titleInput.value = projectTitle;
  titleLabel.setAttribute("for", "project-title-input");

  const submitButton = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "project-form-submit", "Save");
  const closeProjectFormButton = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "close-project-form", "⨉");

  formElem.append(
    titleLabel,
    titleInput,
    submitButton,
    closeProjectFormButton
  )

  toggleModal();

  return {
    formElem,
    titleInput,
    closeProjectFormButton
  }
}

function editProject(projectContainer, newTitle) {
  projectContainer.querySelector(".project-title").textContent = newTitle;
}

function removeProject(projectContainer) {
  projectContainer.remove();
}

let previousProject;
function highlightProject(currentProject) {
  if (previousProject !== undefined) previousProject.querySelector(".select-container").classList.toggle("chosen");
  currentProject.querySelector(".select-container").classList.toggle("chosen");
  previousProject = currentProject;
}

let previousNav;
function highlightNav(currentNav) {
  if (previousNav !== undefined) previousNav.classList.toggle("highlighted");
  currentNav.classList.toggle("highlighted");
  previousNav = currentNav;
}


function removeForm(form) {
  form.remove();
  toggleModal();
}

function toggleModal() {
  modal.classList.toggle("hidden");
}

function setMainTitle(title) {
  mainTitle.textContent = title;
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  buildTaskForm,
  displayTask,
  clearTaskContainer,
  buildTaskEdit,
  editTask,
  removeTask,
  buildProjectForm,
  displayProject,
  buildProjectEdit,
  editProject,
  removeProject,
  highlightProject,
  highlightNav,
  removeForm,
  setMainTitle,
  showTaskForm,
  showProjectForm,
  navAll,
  navToday,
  navWeek,
  navImportant,
  modal
});

/***/ }),

/***/ "./src/modules/create-element-custom-function.js":
/*!*******************************************************!*\
  !*** ./src/modules/create-element-custom-function.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createElementWithClassAndContent)
/* harmony export */ });
function createElementWithClassAndContent(elemType, className, content) {
  const temp = document.createElement(elemType);
  temp.className = className;
  temp.textContent = content;
  return temp;
}

/***/ }),

/***/ "./src/modules/task-creation-and-storage.js":
/*!**************************************************!*\
  !*** ./src/modules/task-creation-and-storage.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Task {
  constructor(title, description, importance, dueDate, projectName) {
    this.title = title;
    this.description = description;
    this.importance = importance;
    this.dueDate = dueDate;
    this.projectName = projectName;
  }

  get importanceSymbol() {
    if (this.importance) return "!";
    return "";
  }

  timeLeft() {
    const msLeft = new Date(this.dueDate) - new Date();
    if (msLeft < -60000) return "🕐 Past Due";
    const minutesLeft = Math.ceil(msLeft / 1000 / 60);
    if (minutesLeft < 60) return `🕐 ${minutesLeft} minutes left`;
    const hrsLeft = Math.ceil(minutesLeft / 60);
    if (hrsLeft < 24) return `🕐 ${hrsLeft} hours left`;
    return `🕐 ${Math.ceil(hrsLeft / 24)} days left`;
  }
}

class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }
}

if (localStorage.getItem("allProjects") === null) {
  localStorage.setItem("allProjects", "[]");
} 
//localStorage.setItem("allProjects", "[]");
const allProjects = JSON.parse(localStorage.getItem("allProjects"));
allProjects.forEach(project => {
  project.tasks.forEach(task => regainTaskMethods(task));
});


function regainTaskMethods(task) {
  Object.setPrototypeOf(task, Task.prototype);
}

function createTask(title, description, importance, dueDate, projectName) {
  return new Task(title, description, importance, dueDate, projectName);
}

function editTask(task, newTitle, newDescription, newImportance, newDate) {
  task.title = newTitle;
  task.description = newDescription;
  task.importance = newImportance;
  task.dueDate = newDate;
}

function addTaskToProject(task, project) {
  project.tasks.push(task);
  console.log(allProjects);
}

function removeTask(task) {
  const taskArray = allProjects.find(project => task.projectName === project.title).tasks;
  console.log(allProjects);
  const taskIndex = taskArray.indexOf(task);
  taskArray.splice(taskIndex, 1);
}


function createNewProject(title) {
  const project = new Project(title);
  allProjects.push(project);
  return project;
}

function editProject(project, newTitle) {
  project.title = newTitle;
}

function removeProject(project) {
  const projectIndex = allProjects.indexOf(project);
  allProjects.splice(projectIndex, 1);
  console.log(allProjects);
}


function getAllProjectsAndTasks() {
  return allProjects;
}

function saveChanges() {
  localStorage.setItem("allProjects", JSON.stringify(allProjects));
}

function getFilteredTasks(criteria) {
  const filteredTasks = [];

  if (criteria === "All") {
    allProjects.forEach(project => {
      project.tasks.forEach(task => filteredTasks.push(task));
    })
  }
  if (criteria === "Today") {
    allProjects.forEach(project => {
      project.tasks.forEach(task => {
        const today = new Date().getDate();
        const dueDay = new Date(task.dueDate).getDate();
        if (today === dueDay) filteredTasks.push(task);
      })
    })
  }
  if (criteria === "Week") {
    allProjects.forEach(project => {
      project.tasks.forEach(task => {
        const dayDifference = ((new Date(task.dueDate) - new Date()) / (1000 * 60 * 60 * 24));
        if ((dayDifference <= 7) && (dayDifference > 0)) filteredTasks.push(task);
      })
    })
  }
  if (criteria === "Important") {
    allProjects.forEach(project => {
      project.tasks.forEach(task => {
        if (task.importance) filteredTasks.push(task);
      })
    })
  }

  return filteredTasks;
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  createTask,
  editTask,
  addTaskToProject,
  removeTask,
  createNewProject,
  editProject,
  removeProject,
  getAllProjectsAndTasks,
  saveChanges,
  regainTaskMethods,
  getFilteredTasks
});

/***/ }),

/***/ "./src/assets/fonts/Roboto-Medium.ttf":
/*!********************************************!*\
  !*** ./src/assets/fonts/Roboto-Medium.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d2d7f0c01bffaa5ec8f7.ttf";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLFVBQVUsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxjQUFjLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxZQUFZLE1BQU0sWUFBWSxXQUFXLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sT0FBTyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLGFBQWEsTUFBTSxZQUFZLFdBQVcsVUFBVSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFL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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7O0FBR0EsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvRE9NLW1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jcmVhdGUtZWxlbWVudC1jdXN0b20tZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFzay1jcmVhdGlvbi1hbmQtc3RvcmFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvUm9ib3RvLU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWJsdWU6IHJnYig1MSwgMTQ2LCAyMDYpO1xcbiAgLS1saWdodGJsdWU6IHJnYigyMDIsIDIyNywgMjQzKTtcXG4gIC0tYmx1ZS1ib3JkZXI6IHJnYigyLCA4MCwgMTI4KTtcXG4gIC0tbGlnaHRncmV5OiByZ2IoMjM1LCAyMzUsIDIzNSk7XFxuICAtLW1vZGFsOiByZ2JhKDE4MCwgMTgwLCAxODAsIDAuMyk7XFxufVxcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MDBweCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggMWZyO1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG59XFxuXFxuLyogSGVhZGVyICovXFxuaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG5cXG5oZWFkZXIgPiBhIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG59XFxuXFxuLyogU2lkZWJhciAqL1xcbi5zaWRlYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Z3JleSk7XFxufVxcblxcbnNwYW4ucHJvamVjdHMtaGVhZGluZyB7XFxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBmb250LXNpemU6IDQ4cHg7XFxufVxcblxcbmJ1dHRvbi5zaG93LXByb2plY3QtZm9ybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgei1pbmRleDogMjtcXG59XFxuXFxuYnV0dG9uLmNsb3NlLXByb2plY3QtZm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG59XFxuXFxuXFxuLyogU2lkZWJhciAtPiBHZW5lcmFsIE5hdmlnYXRpb24gKi8gXFxuXFxuLmdlbmVyYWwtbmF2aWdhdGlvbiA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogOTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBkYXJrZ3JleTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIG1hcmdpbjogNSU7XFxuICBjb2xvcjogdmFyKC0tYmx1ZS1ib3JkZXIpO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4uZ2VuZXJhbC1uYXZpZ2F0aW9uID4gZGl2LmhpZ2hsaWdodGVkLFxcbi5wcm9qZWN0LW5hdmlnYXRpb24gPiBkaXYuaGlnaGxpZ2h0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRibHVlKTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZS1ib3JkZXIpO1xcbn1cXG5cXG4ucHJvamVjdC1uYXZpZ2F0aW9uID4gZGl2LmhpZ2hsaWdodGVkIHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLmdlbmVyYWwtbmF2aWdhdGlvbiA+IGRpdjpob3ZlcixcXG4ucHJvamVjdC1jb250YWluZXI6aG92ZXIge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDkwJTtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBkYXJrZ3JleTtcXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tYmx1ZSk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBtYXJnaW46IDUlO1xcbiAgY29sb3I6IHZhcigtLWJsdWUtYm9yZGVyKTtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLnNlbGVjdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4uc2VsZWN0LWNvbnRhaW5lci5jaG9zZW46OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi4p6UXFxcIjtcXG59XFxuXFxuLyogTWFpbiAqL1xcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFxuICBtaW4td2lkdGg6IDA7XFxufVxcblxcbm1haW4gPiAqIHtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbm1haW4gPiBoMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDUycHg7XFxuICBjb2xvcjogdmFyKC0tYmx1ZS1ib3JkZXIpO1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4vKiBNYWluIC0+IFRhc2sgRm9ybSAqL1xcbm1haW4gPiBidXR0b24uc2hvdy10YXNrLWZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA1MHB4O1xcbiAgcmlnaHQ6IDUwcHg7XFxuXFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG4gIGhlaWdodDogODBweDtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tbGlnaHRncmV5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXG59XFxuXFxuLnRhc2stZm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHotaW5kZXg6IDI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGdyZXkpO1xcbiAgYm9yZGVyOiAycHggc29saWQgZGFya2dyZXk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4udGFzay1mb3JtID4gKixcXG4ucHJvamVjdC1mb3JtID4gKixcXG4udGFzay1lZGl0LWZvcm0gPiAqIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5idXR0b24uc3VibWl0LXRhc2stZm9ybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuYnV0dG9uLmNsb3NlLXRhc2stZm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG59XFxuXFxuLyogTWFpbiAtPiBUYXNrIEVkaXQgRm9ybSAqL1xcblxcbi50YXNrLWVkaXQtZm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHotaW5kZXg6IDI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGdyZXkpO1xcbiAgYm9yZGVyOiAycHggc29saWQgZGFya2dyZXk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG5idXR0b24uc3VibWl0LWVkaXQtZm9ybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuYnV0dG9uLmNsb3NlLWVkaXQtZm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG59XFxuXFxuLyogTWFpbiAtPiBEaXNwbGF5ZWQgVGFza3MgKi9cXG4udGFzay1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Z3JleSk7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgbWFyZ2luOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyID4gKiB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi50YXNrLXRpdGxlIHtcXG4gIHdpZHRoOiAzMCU7XFxufVxcblxcbi50YXNrLWRlc2NyaXB0aW9uIHtcXG4gIHdpZHRoOiAzMCU7XFxufVxcblxcbi50YXNrLWltcG9ydGFuY2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgY29sb3I6IHJnYigyMjYsIDE2NiwgMCk7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBwYWRkaW5nOiAwcHggOHB4O1xcbn1cXG5cXG4udGFzay1pbXBvcnRhbmNlOmhvdmVyOjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1cHg7XFxuICBsZWZ0OiAxNXB4O1xcblxcbiAgY29udGVudDogXFxcIkltcG9ydGFudFxcXCI7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogZGFya2dyZXk7XFxufVxcblxcbi8qIE1vZGFsICovXFxuI21vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9kYWwpO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuI21vZGFsLmhpZGRlbiB7XFxuICB6LWluZGV4OiAtMTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0IsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtFQUN0QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsNENBQTRDO0FBQzlDOztBQUVBOztFQUVFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsNEJBQTRCO0VBQzVCLG1CQUFtQjtBQUNyQjs7QUFFQSxXQUFXO0FBQ1g7RUFDRSxrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQSxZQUFZO0FBQ1o7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtBQUNWOzs7QUFHQSxrQ0FBa0M7O0FBRWxDO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxrQ0FBa0M7RUFDbEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOzs7QUFHQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUEsU0FBUztBQUNUO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCOztFQUV2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXOztFQUVYLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0NBQWtDO0VBQ2xDLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVOztFQUVWLGtDQUFrQztFQUNsQywwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTs7O0VBR0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7QUFDVjs7QUFFQSwyQkFBMkI7O0FBRTNCO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTs7RUFFVixrQ0FBa0M7RUFDbEMsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0FBQ1Y7O0FBRUEsNEJBQTRCO0FBQzVCO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCOztFQUVsQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTs7RUFFVixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUEsVUFBVTtBQUNWO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWJsdWU6IHJnYig1MSwgMTQ2LCAyMDYpO1xcbiAgLS1saWdodGJsdWU6IHJnYigyMDIsIDIyNywgMjQzKTtcXG4gIC0tYmx1ZS1ib3JkZXI6IHJnYigyLCA4MCwgMTI4KTtcXG4gIC0tbGlnaHRncmV5OiByZ2IoMjM1LCAyMzUsIDIzNSk7XFxuICAtLW1vZGFsOiByZ2JhKDE4MCwgMTgwLCAxODAsIDAuMyk7XFxufVxcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIHNyYzogdXJsKFxcXCIuL2Fzc2V0cy9mb250cy9Sb2JvdG8tTWVkaXVtLnR0ZlxcXCIpO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwMHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNzBweCAxZnI7XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG5oZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcbmhlYWRlciA+IGEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiA0OHB4O1xcbn1cXG5cXG4vKiBTaWRlYmFyICovXFxuLnNpZGViYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRncmV5KTtcXG59XFxuXFxuc3Bhbi5wcm9qZWN0cy1oZWFkaW5nIHtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG59XFxuXFxuYnV0dG9uLnNob3ctcHJvamVjdC1mb3JtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG5idXR0b24uY2xvc2UtcHJvamVjdC1mb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG5cXG4vKiBTaWRlYmFyIC0+IEdlbmVyYWwgTmF2aWdhdGlvbiAqLyBcXG5cXG4uZ2VuZXJhbC1uYXZpZ2F0aW9uID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiA5MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGRhcmtncmV5O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgcGFkZGluZzogNHB4O1xcbiAgbWFyZ2luOiA1JTtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlLWJvcmRlcik7XFxuICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbi5nZW5lcmFsLW5hdmlnYXRpb24gPiBkaXYuaGlnaGxpZ2h0ZWQsXFxuLnByb2plY3QtbmF2aWdhdGlvbiA+IGRpdi5oaWdobGlnaHRlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGJsdWUpO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlLWJvcmRlcik7XFxufVxcblxcbi5wcm9qZWN0LW5hdmlnYXRpb24gPiBkaXYuaGlnaGxpZ2h0ZWQge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cXG5cXG4uZ2VuZXJhbC1uYXZpZ2F0aW9uID4gZGl2OmhvdmVyLFxcbi5wcm9qZWN0LWNvbnRhaW5lcjpob3ZlciB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogOTAlO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGRhcmtncmV5O1xcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1ibHVlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIG1hcmdpbjogNSU7XFxuICBjb2xvcjogdmFyKC0tYmx1ZS1ib3JkZXIpO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4uc2VsZWN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbi5zZWxlY3QtY29udGFpbmVyLmNob3Nlbjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLinpRcXFwiO1xcbn1cXG5cXG4vKiBNYWluICovXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXG4gIG1pbi13aWR0aDogMDtcXG59XFxuXFxubWFpbiA+ICoge1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxubWFpbiA+IGgxIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNTJweDtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlLWJvcmRlcik7XFxuICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi8qIE1haW4gLT4gVGFzayBGb3JtICovXFxubWFpbiA+IGJ1dHRvbi5zaG93LXRhc2stZm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDUwcHg7XFxuICByaWdodDogNTBweDtcXG5cXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgZm9udC1zaXplOiA0OHB4O1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgd2lkdGg6IDgwcHg7XFxuICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1saWdodGdyZXkpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcblxcbn1cXG5cXG4udGFzay1mb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgei1pbmRleDogMjtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Z3JleSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCBkYXJrZ3JleTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi50YXNrLWZvcm0gPiAqLFxcbi5wcm9qZWN0LWZvcm0gPiAqLFxcbi50YXNrLWVkaXQtZm9ybSA+ICoge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJ1dHRvbi5zdWJtaXQtdGFzay1mb3JtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG5idXR0b24uY2xvc2UtdGFzay1mb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4vKiBNYWluIC0+IFRhc2sgRWRpdCBGb3JtICovXFxuXFxuLnRhc2stZWRpdC1mb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgei1pbmRleDogMjtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Z3JleSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCBkYXJrZ3JleTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbmJ1dHRvbi5zdWJtaXQtZWRpdC1mb3JtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG5idXR0b24uY2xvc2UtZWRpdC1mb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4vKiBNYWluIC0+IERpc3BsYXllZCBUYXNrcyAqL1xcbi50YXNrLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRncmV5KTtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBtYXJnaW46IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgPiAqIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuLnRhc2stdGl0bGUge1xcbiAgd2lkdGg6IDMwJTtcXG59XFxuXFxuLnRhc2stZGVzY3JpcHRpb24ge1xcbiAgd2lkdGg6IDMwJTtcXG59XFxuXFxuLnRhc2staW1wb3J0YW5jZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICBjb2xvcjogcmdiKDIyNiwgMTY2LCAwKTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIHBhZGRpbmc6IDBweCA4cHg7XFxufVxcblxcbi50YXNrLWltcG9ydGFuY2U6aG92ZXI6OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDVweDtcXG4gIGxlZnQ6IDE1cHg7XFxuXFxuICBjb250ZW50OiBcXFwiSW1wb3J0YW50XFxcIjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiBkYXJrZ3JleTtcXG59XFxuXFxuLyogTW9kYWwgKi9cXG4jbW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb2RhbCk7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jbW9kYWwuaGlkZGVuIHtcXG4gIHotaW5kZXg6IC0xO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFRhc2tfTW9kdWxlIGZyb20gXCIuL21vZHVsZXMvdGFzay1jcmVhdGlvbi1hbmQtc3RvcmFnZS5qc1wiO1xuaW1wb3J0IERPTV9Nb2R1bGUgZnJvbSBcIi4vbW9kdWxlcy9ET00tbWFuaXB1bGF0aW9uLmpzXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5cbi8vIE1haW4gTG9naWNcbmxldCBjdXJyZW50Rm9ybTtcbmxldCBjdXJyZW50UHJvamVjdDtcblxuXG5mdW5jdGlvbiBhZGRUYXNrVG9TdG9yYWdlKHRpdGxlLCBkZXNjcmlwdGlvbiwgaW1wb3J0YW5jZSwgZHVlRGF0ZSkge1xuICBjb25zdCB0YXNrID0gVGFza19Nb2R1bGUuY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGltcG9ydGFuY2UsIGR1ZURhdGUsIGN1cnJlbnRQcm9qZWN0LnRpdGxlKTtcbiAgVGFza19Nb2R1bGUuYWRkVGFza1RvUHJvamVjdCh0YXNrLCBjdXJyZW50UHJvamVjdCk7XG4gIHJldHVybiB0YXNrO1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrVG9ET00odGFzaykge1xuICBjb25zdCB0YXNrRE9NID0gRE9NX01vZHVsZS5kaXNwbGF5VGFzayh0YXNrKTtcbiAgdGFza0RPTS5lZGl0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGFza0VkaXRCdXR0b25fQ2FsbGJhY2sodGFzaywgdGFza0RPTS50YXNrQ29udGFpbmVyKSk7XG4gIHRhc2tET00uZGVsZXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGFza0RlbGV0ZUJ1dHRvbl9DYWxsYmFjayh0YXNrLCB0YXNrRE9NLnRhc2tDb250YWluZXIpKTtcbn1cblxuXG5mdW5jdGlvbiB0YXNrRWRpdEJ1dHRvbl9DYWxsYmFjayh0YXNrLCB0YXNrQ29udGFpbmVyKSB7XG4gIGN1cnJlbnRGb3JtID0gRE9NX01vZHVsZS5idWlsZFRhc2tFZGl0KHRhc2spO1xuICBjdXJyZW50Rm9ybS5mb3JtRWxlbS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2codGFza0NvbnRhaW5lcik7XG4gICAgZWRpdFRhc2sodGFzaywgdGFza0NvbnRhaW5lcik7XG4gICAgRE9NX01vZHVsZS5yZW1vdmVGb3JtKGN1cnJlbnRGb3JtLmZvcm1FbGVtKTtcbiAgfSlcbiAgY3VycmVudEZvcm0uY2xvc2VFZGl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gRE9NX01vZHVsZS5yZW1vdmVGb3JtKGN1cnJlbnRGb3JtLmZvcm1FbGVtKSk7XG59XG5cbmZ1bmN0aW9uIHRhc2tEZWxldGVCdXR0b25fQ2FsbGJhY2sodGFzaywgdGFza0NvbnRhaW5lcikge1xuICBUYXNrX01vZHVsZS5yZW1vdmVUYXNrKHRhc2spO1xuICBET01fTW9kdWxlLnJlbW92ZVRhc2sodGFza0NvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKHRhc2ssIHRhc2tDb250YWluZXIpIHtcbiAgVGFza19Nb2R1bGUuZWRpdFRhc2soXG4gICAgdGFzaywgXG4gICAgY3VycmVudEZvcm0udGl0bGVJbnB1dC52YWx1ZSxcbiAgICBjdXJyZW50Rm9ybS5kZXNjcmlwdGlvbklucHV0LnZhbHVlLFxuICAgIGN1cnJlbnRGb3JtLmltcG9ydGFuY2VJbnB1dC5jaGVja2VkLFxuICAgIGN1cnJlbnRGb3JtLmRhdGVJbnB1dC52YWx1ZVxuICApO1xuICBET01fTW9kdWxlLmVkaXRUYXNrKHRhc2ssIHRhc2tDb250YWluZXIpO1xufVxuXG5cbmZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdCkge1xuICBjb25zdCBwcm9qZWN0RE9NID0gRE9NX01vZHVsZS5kaXNwbGF5UHJvamVjdChwcm9qZWN0KTtcbiAgc2VsZWN0UHJvamVjdChwcm9qZWN0LCBwcm9qZWN0RE9NLnByb2plY3RDb250YWluZXIpO1xuICBwcm9qZWN0RE9NLnByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHByb2plY3RDbGlja19DYWxsYmFjayhwcm9qZWN0LCBwcm9qZWN0RE9NLnByb2plY3RDb250YWluZXIpKTtcbiAgcHJvamVjdERPTS5lZGl0UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiBwcm9qZWN0RWRpdEJ1dHRvbl9DYWxsYmFjayhldmVudCwgcHJvamVjdCwgcHJvamVjdERPTS5wcm9qZWN0Q29udGFpbmVyKSk7XG4gIHByb2plY3RET00uZGVsZXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiBwcm9qZWN0RGVsZXRlQnV0dG9uX0NhbGxiYWNrKGV2ZW50LCBwcm9qZWN0LCBwcm9qZWN0RE9NLnByb2plY3RDb250YWluZXIpKTtcbn1cblxuZnVuY3Rpb24gcHJvamVjdENsaWNrX0NhbGxiYWNrKHByb2plY3QsIHByb2plY3RDb250YWluZXIpIHtcbiAgc2VsZWN0UHJvamVjdChwcm9qZWN0LCBwcm9qZWN0Q29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gcHJvamVjdEVkaXRCdXR0b25fQ2FsbGJhY2soZXZlbnQsIHByb2plY3QsIHByb2plY3RDb250YWluZXIpIHtcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIGN1cnJlbnRGb3JtID0gRE9NX01vZHVsZS5idWlsZFByb2plY3RFZGl0KHByb2plY3QudGl0bGUpO1xuICBjdXJyZW50Rm9ybS5mb3JtRWxlbS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZWRpdFByb2plY3QocHJvamVjdCwgY3VycmVudEZvcm0udGl0bGVJbnB1dC52YWx1ZSwgcHJvamVjdENvbnRhaW5lcik7XG4gICAgRE9NX01vZHVsZS5yZW1vdmVGb3JtKGN1cnJlbnRGb3JtLmZvcm1FbGVtKTtcbiAgfSlcbiAgY3VycmVudEZvcm0uY2xvc2VQcm9qZWN0Rm9ybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gRE9NX01vZHVsZS5yZW1vdmVGb3JtKGN1cnJlbnRGb3JtLmZvcm1FbGVtKSk7XG59XG5cbmZ1bmN0aW9uIHByb2plY3REZWxldGVCdXR0b25fQ2FsbGJhY2soZXZlbnQsIHByb2plY3QsIHByb2plY3RDb250YWluZXIpIHtcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIFRhc2tfTW9kdWxlLnJlbW92ZVByb2plY3QocHJvamVjdCk7XG4gIERPTV9Nb2R1bGUucmVtb3ZlUHJvamVjdChwcm9qZWN0Q29udGFpbmVyKTtcbiAgc2VsZWN0R2VuZXJhbFByb2plY3QoKTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0UHJvamVjdChwcm9qZWN0LCBwcm9qZWN0Q29udGFpbmVyKSB7XG4gIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdDtcbiAgRE9NX01vZHVsZS5jbGVhclRhc2tDb250YWluZXIoKTtcbiAgRE9NX01vZHVsZS5oaWdobGlnaHRQcm9qZWN0KHByb2plY3RDb250YWluZXIpO1xuICBET01fTW9kdWxlLmhpZ2hsaWdodE5hdihwcm9qZWN0Q29udGFpbmVyKTtcbiAgRE9NX01vZHVsZS5zZXRNYWluVGl0bGUocHJvamVjdC50aXRsZSk7XG4gIHByb2plY3QudGFza3MuZm9yRWFjaCh0YXNrID0+IGFkZFRhc2tUb0RPTSh0YXNrKSk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdEdlbmVyYWxQcm9qZWN0KCkge1xuICBzZWxlY3RQcm9qZWN0KFRhc2tfTW9kdWxlLmdldEFsbFByb2plY3RzQW5kVGFza3MoKVswXSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNvbnRhaW5lclwiKSk7XG59XG5cbmZ1bmN0aW9uIGVkaXRQcm9qZWN0KHByb2plY3QsIG5ld1RpdGxlLCBwcm9qZWN0Q29udGFpbmVyKSB7XG4gIFRhc2tfTW9kdWxlLmVkaXRQcm9qZWN0KHByb2plY3QsIG5ld1RpdGxlKTtcbiAgRE9NX01vZHVsZS5lZGl0UHJvamVjdChwcm9qZWN0Q29udGFpbmVyLCBuZXdUaXRsZSk7XG59XG5cblxuXG5ET01fTW9kdWxlLnNob3dUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjdXJyZW50Rm9ybSA9IERPTV9Nb2R1bGUuYnVpbGRUYXNrRm9ybSgpO1xuICBjdXJyZW50Rm9ybS5mb3JtRWxlbS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFzayA9IGFkZFRhc2tUb1N0b3JhZ2UoXG4gICAgICBjdXJyZW50Rm9ybS50aXRsZUlucHV0LnZhbHVlLCBcbiAgICAgIGN1cnJlbnRGb3JtLmRlc2NyaXB0aW9uSW5wdXQudmFsdWUsIFxuICAgICAgY3VycmVudEZvcm0uaW1wb3J0YW5jZUlucHV0LmNoZWNrZWQsXG4gICAgICBjdXJyZW50Rm9ybS5kYXRlSW5wdXQudmFsdWUsXG4gICAgKTtcbiAgICBhZGRUYXNrVG9ET00odGFzayk7XG4gICAgRE9NX01vZHVsZS5yZW1vdmVGb3JtKGN1cnJlbnRGb3JtLmZvcm1FbGVtKTtcbiAgfSk7XG4gIGN1cnJlbnRGb3JtLmNsb3NlVGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IERPTV9Nb2R1bGUucmVtb3ZlRm9ybShjdXJyZW50Rm9ybS5mb3JtRWxlbSkpO1xufSlcblxuXG5ET01fTW9kdWxlLnNob3dQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjdXJyZW50Rm9ybSA9IERPTV9Nb2R1bGUuYnVpbGRQcm9qZWN0Rm9ybSgpO1xuICBjdXJyZW50Rm9ybS5mb3JtRWxlbS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBldmVudC50YXJnZXQuY2hpbGRyZW5bMV0udmFsdWVcbiAgICBjb25zdCBwcm9qZWN0ID0gVGFza19Nb2R1bGUuY3JlYXRlTmV3UHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICBET01fTW9kdWxlLnJlbW92ZUZvcm0oY3VycmVudEZvcm0uZm9ybUVsZW0pO1xuICB9KTtcbiAgY3VycmVudEZvcm0uY2xvc2VQcm9qZWN0Rm9ybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gRE9NX01vZHVsZS5yZW1vdmVGb3JtKGN1cnJlbnRGb3JtLmZvcm1FbGVtKSk7XG59KTtcblxuXG5ET01fTW9kdWxlLm5hdkFsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4gdG9wTmF2X0NhbGxiYWNrKGV2ZW50LCBcIkFsbFwiKSk7XG5ET01fTW9kdWxlLm5hdlRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB0b3BOYXZfQ2FsbGJhY2soZXZlbnQsIFwiVG9kYXlcIikpO1xuRE9NX01vZHVsZS5uYXZXZWVrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB0b3BOYXZfQ2FsbGJhY2soZXZlbnQsIFwiV2Vla1wiKSk7XG5ET01fTW9kdWxlLm5hdkltcG9ydGFudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4gdG9wTmF2X0NhbGxiYWNrKGV2ZW50LCBcIkltcG9ydGFudFwiKSk7XG5cbmZ1bmN0aW9uIHRvcE5hdl9DYWxsYmFjayhldmVudCwgY3JpdGVyaWEpIHtcbiAgRE9NX01vZHVsZS5oaWdobGlnaHROYXYoZXZlbnQudGFyZ2V0KTtcbiAgRE9NX01vZHVsZS5jbGVhclRhc2tDb250YWluZXIoKTtcbiAgRE9NX01vZHVsZS5zZXRNYWluVGl0bGUoY3JpdGVyaWEpO1xuXG4gIGNvbnN0IGZpbHRlcmVkQXJyYXkgPSBUYXNrX01vZHVsZS5nZXRGaWx0ZXJlZFRhc2tzKGNyaXRlcmlhKTtcbiAgZmlsdGVyZWRBcnJheS5mb3JFYWNoKHRhc2sgPT4gYWRkVGFza1RvRE9NKHRhc2spKTtcbn1cblxuXG4vLyEhISEhIVxuZnVuY3Rpb24gaW5pdGlhbExvYWQoKSB7ICAgICAgICAgICAgXG4gIGNvbnN0IGFsbFByb2plY3RzID0gVGFza19Nb2R1bGUuZ2V0QWxsUHJvamVjdHNBbmRUYXNrcygpO1xuICBjb25zb2xlLmxvZyhhbGxQcm9qZWN0cyk7XG4gIGFsbFByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiBhZGRQcm9qZWN0KHByb2plY3QpKTtcbiAgc2VsZWN0R2VuZXJhbFByb2plY3QoKTtcbiAgRE9NX01vZHVsZS5uYXZBbGwuY2xpY2soKTtcbn0vLyEhISEhXG5cbmluaXRpYWxMb2FkKCk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLCBUYXNrX01vZHVsZS5zYXZlQ2hhbmdlcyk7XG5ET01fTW9kdWxlLm1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBET01fTW9kdWxlLnJlbW92ZUZvcm0oY3VycmVudEZvcm0uZm9ybUVsZW0pKTtcbiIsImltcG9ydCBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudCBmcm9tIFwiLi9jcmVhdGUtZWxlbWVudC1jdXN0b20tZnVuY3Rpb24uanNcIlxuXG4vLyBJbml0aWFsIHBhZ2UgYnVpbGRcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuXG4vLyBIZWFkZXJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5jb25zdCBoZWFkZXJMaW5rID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJhXCIsIFwiXCIsIFwiVG9kbyBMaXN0XCIpO1xuaGVhZGVyTGluay5ocmVmID0gXCJcIjtcbmhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJMaW5rKTtcblxuLy8gU2lkZWJhclxuY29uc3Qgc2lkZWJhciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwibmF2XCIsIFwic2lkZWJhclwiLCBcIlwiKTtcbmNvbnN0IHByb2plY3RzVG9wID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJkaXZcIiwgXCJwcm9qZWN0cy10b3AtY29udGFpbmVyXCIsIFwiXCIpO1xuY29uc3QgcHJvamVjdHNIZWFkaW5nID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJzcGFuXCIsIFwicHJvamVjdHMtaGVhZGluZ1wiLCBcIlByb2plY3RzXCIpO1xuY29uc3QgZ2VuZXJhbE5hdiA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwibmF2XCIsIFwiZ2VuZXJhbC1uYXZpZ2F0aW9uXCIsIFwiXCIpO1xuY29uc3QgbmF2QWxsID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJkaXZcIiwgXCJhbGwtcHJvamVjdHNcIiwgXCJBbGxcIik7XG5jb25zdCBuYXZUb2RheSA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiZGl2XCIsIFwidG9kYXktcHJvamVjdHNcIiwgXCJUb2RheVwiKTtcbmNvbnN0IG5hdldlZWsgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImRpdlwiLCBcInRoaXMtd2Vlay1wcm9qZWN0c1wiLCBcIldlZWtcIik7XG5jb25zdCBuYXZJbXBvcnRhbnQgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImRpdlwiLCBcImltcG9ydGFudC1wcm9qZWN0c1wiLCBcIkltcG9ydGFudFwiKTtcbmdlbmVyYWxOYXYuYXBwZW5kKFxuICBuYXZBbGwsXG4gIG5hdlRvZGF5LFxuICBuYXZXZWVrLFxuICBuYXZJbXBvcnRhbnRcbilcbmNvbnN0IHByb2plY3ROYXYgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcIm5hdlwiLCBcInByb2plY3QtbmF2aWdhdGlvblwiLCBcIlwiKTtcbmNvbnN0IHNob3dQcm9qZWN0Rm9ybSA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiYnV0dG9uXCIsIFwic2hvdy1wcm9qZWN0LWZvcm1cIiwgXCIrXCIpO1xucHJvamVjdHNUb3AuYXBwZW5kKFxuICBwcm9qZWN0c0hlYWRpbmcsXG4gIHNob3dQcm9qZWN0Rm9ybVxuKVxuc2lkZWJhci5hcHBlbmQoXG4gIGdlbmVyYWxOYXYsXG4gIHByb2plY3RzVG9wLFxuICBwcm9qZWN0TmF2XG4pXG5cbi8vIE1haW5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbmNvbnN0IHNob3dUYXNrRm9ybSA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiYnV0dG9uXCIsIFwic2hvdy10YXNrLWZvcm1cIiwgXCIrXCIpO1xuY29uc3QgbWFpblRpdGxlID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJoMVwiLCBcIm1haW4tdGl0bGVcIiwgXCJcIilcbmNvbnN0IGNvbnRhaW5lck9mQWxsVGFza3MgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImRpdlwiLCBcImFsbC10YXNrcy1jb250YWluZXJcIiwgXCJcIik7XG5tYWluLmFwcGVuZChcbiAgbWFpblRpdGxlLFxuICBjb250YWluZXJPZkFsbFRhc2tzLFxuICBzaG93VGFza0Zvcm1cbik7XG5cbi8vIE1vZGFsXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5tb2RhbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1vZGFsXCIpO1xubW9kYWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblxuYm9keS5hcHBlbmQoXG4gIGhlYWRlcixcbiAgc2lkZWJhcixcbiAgbWFpbixcbiAgbW9kYWxcbilcblxuLy8gSW5pdGlhbCBidWlsZCBlbmRcblxuZnVuY3Rpb24gYnVpbGRUYXNrRm9ybSgpIHtcbiAgY29uc3QgZm9ybUVsZW0gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImZvcm1cIiwgXCJ0YXNrLWZvcm1cIiwgXCJcIik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoZm9ybUVsZW0pO1xuXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImlucHV0XCIsIFwidGl0bGUtaW5wdXRcIiwgXCJcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUYXNrXCIpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJEZXNjcmlwdGlvblwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgMzAwKTtcblxuICBjb25zdCBpbXBvcnRhbmNlTGFiZWwgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImxhYmVsXCIsIFwiaW1wb3J0YW5jZS1sYWJlbFwiLCBcIkltcG9ydGFudFwiKTtcbiAgY29uc3QgaW1wb3J0YW5jZUlucHV0ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJpbnB1dFwiLCBcImltcG9ydGFuY2UtaW5wdXRcIiwgXCJcIik7XG4gIGltcG9ydGFuY2VJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gIGltcG9ydGFuY2VJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImltcG9ydGFuY2UtaW5wdXRcIik7XG4gIGltcG9ydGFuY2VMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJpbXBvcnRhbmNlLWlucHV0XCIpO1xuICBjb25zdCBpbXBvcnRhbmNlQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJkaXZcIiwgXCJpbXBvcnRhbmNlLWNvbnRhaW5lclwiLCBcIlwiKVxuICBpbXBvcnRhbmNlQ29udGFpbmVyLmFwcGVuZChpbXBvcnRhbmNlTGFiZWwsIGltcG9ydGFuY2VJbnB1dCk7XG5cbiAgY29uc3QgZGF0ZUlucHV0ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJpbnB1dFwiLCBcImRhdGUtaW5wdXRcIiwgXCJcIik7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZXRpbWUtbG9jYWxcIik7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICBjb25zdCBtb250aCA9IChkYXRlLmdldE1vbnRoKCkrMSkgPCAxMCA/IGAwJHtkYXRlLmdldE1vbnRoKCkrMX1gIDogZGF0ZS5nZXRNb250aCgpKzE7XG4gIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpIDwgMTAgPyBgMCR7ZGF0ZS5nZXREYXRlKCl9YCA6IGRhdGUuZ2V0RGF0ZSgpO1xuICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKSA8IDEwID8gYDAke2RhdGUuZ2V0SG91cnMoKX1gIDogZGF0ZS5nZXRIb3VycygpO1xuICBjb25zdCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCkgPCAxMCA/IGAwJHtkYXRlLmdldE1pbnV0ZXMoKX1gIDogZGF0ZS5nZXRNaW51dGVzKCk7XG4gIGRhdGVJbnB1dC52YWx1ZSA9IGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fVQke2hvdXJzfToke21pbnV0ZXN9YDtcblxuICBjb25zdCBzdWJtaXRCdXR0b24gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImJ1dHRvblwiLCBcInN1Ym1pdC10YXNrLWZvcm1cIiwgXCJBZGRcIik7XG4gIGNvbnN0IGNsb3NlVGFza0Zvcm0gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImJ1dHRvblwiLCBcImNsb3NlLXRhc2stZm9ybVwiLCBcIuKoiVwiKTtcblxuICBmb3JtRWxlbS5hcHBlbmQoXG4gICAgdGl0bGVJbnB1dCxcbiAgICBkZXNjcmlwdGlvbklucHV0LFxuICAgIGltcG9ydGFuY2VDb250YWluZXIsXG4gICAgZGF0ZUlucHV0LFxuICAgIHN1Ym1pdEJ1dHRvbixcbiAgICBjbG9zZVRhc2tGb3JtXG4gIClcblxuICB0b2dnbGVNb2RhbCgpO1xuXG4gIHJldHVybiB7XG4gICAgZm9ybUVsZW0sXG4gICAgdGl0bGVJbnB1dCxcbiAgICBkZXNjcmlwdGlvbklucHV0LFxuICAgIGltcG9ydGFuY2VJbnB1dCxcbiAgICBkYXRlSW5wdXQsXG4gICAgY2xvc2VUYXNrRm9ybVxuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrKHRhc2spIHtcbiAgY29uc3QgdGFza0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiZGl2XCIsIFwidGFzay1jb250YWluZXJcIiwgXCJcIik7XG4gIGNvbnRhaW5lck9mQWxsVGFza3MuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG4gIGNvbnN0IGVkaXRUYXNrQnV0dG9uID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJidXR0b25cIiwgXCJlZGl0LXRhc2tcIiwgXCJFRElUXCIpO1xuICBjb25zdCBkZWxldGVUYXNrQnV0dG9uID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJidXR0b25cIiwgXCJkZWxldGUtdGFza1wiLCBcInhcIik7XG4gIHRhc2tDb250YWluZXIuYXBwZW5kKFxuICAgIGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiZGl2XCIsIFwidGFzay10aXRsZVwiLCB0YXNrLnRpdGxlKSxcbiAgICBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImRpdlwiLCBcInRhc2stZGVzY3JpcHRpb25cIiwgdGFzay5kZXNjcmlwdGlvbiksXG4gICAgY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJkaXZcIiwgXCJ0YXNrLWltcG9ydGFuY2VcIiwgdGFzay5pbXBvcnRhbmNlU3ltYm9sKSxcbiAgICBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImRpdlwiLCBcInRhc2stZGF0ZVwiLCB0YXNrLnRpbWVMZWZ0KCkpLFxuICAgIGVkaXRUYXNrQnV0dG9uLFxuICAgIGRlbGV0ZVRhc2tCdXR0b25cbiAgKVxuXG4gIHJldHVybiB7XG4gICAgdGFza0NvbnRhaW5lcixcbiAgICBlZGl0VGFza0J1dHRvbixcbiAgICBkZWxldGVUYXNrQnV0dG9uXG4gIH1cbn1cblxuZnVuY3Rpb24gYnVpbGRUYXNrRWRpdCh0YXNrKSB7XG4gIGNvbnN0IGZvcm1FbGVtID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJmb3JtXCIsIFwidGFzay1lZGl0LWZvcm1cIiwgXCJcIik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoZm9ybUVsZW0pO1xuXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImlucHV0XCIsIFwidGl0bGUtaW5wdXRcIiwgXCJcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgdGFzay50aXRsZSk7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIDMwMCk7XG5cbiAgY29uc3QgaW1wb3J0YW5jZUxhYmVsID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJsYWJlbFwiLCBcImltcG9ydGFuY2UtbGFiZWxcIiwgXCJJbXBvcnRhbnRcIik7XG4gIGNvbnN0IGltcG9ydGFuY2VJbnB1dCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiaW5wdXRcIiwgXCJpbXBvcnRhbmNlLWlucHV0XCIsIFwiXCIpO1xuICBpbXBvcnRhbmNlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICBpbXBvcnRhbmNlSW5wdXQuY2hlY2tlZCA9IHRhc2suaW1wb3J0YW5jZTtcbiAgaW1wb3J0YW5jZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaW1wb3J0YW5jZS1pbnB1dFwiKTtcbiAgaW1wb3J0YW5jZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImltcG9ydGFuY2UtaW5wdXRcIik7XG4gIGNvbnN0IGltcG9ydGFuY2VDb250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImRpdlwiLCBcImltcG9ydGFuY2UtY29udGFpbmVyXCIsIFwiXCIpXG4gIGltcG9ydGFuY2VDb250YWluZXIuYXBwZW5kKGltcG9ydGFuY2VMYWJlbCwgaW1wb3J0YW5jZUlucHV0KTtcblxuICBjb25zdCBkYXRlSW5wdXQgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImlucHV0XCIsIFwiZGF0ZS1pbnB1dFwiLCBcIlwiKTtcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRldGltZS1sb2NhbFwiKTtcbiAgZGF0ZUlucHV0LnZhbHVlID0gdGFzay5kdWVEYXRlO1xuXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiYnV0dG9uXCIsIFwic3VibWl0LWVkaXQtZm9ybVwiLCBcIlNhdmVcIik7XG4gIGNvbnN0IGNsb3NlRWRpdEZvcm0gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImJ1dHRvblwiLCBcImNsb3NlLWVkaXQtZm9ybVwiLCBcIuKoiVwiKTtcblxuICBmb3JtRWxlbS5hcHBlbmQoXG4gICAgdGl0bGVJbnB1dCxcbiAgICBkZXNjcmlwdGlvbklucHV0LFxuICAgIGltcG9ydGFuY2VDb250YWluZXIsXG4gICAgZGF0ZUlucHV0LFxuICAgIHN1Ym1pdEJ1dHRvbixcbiAgICBjbG9zZUVkaXRGb3JtXG4gIClcblxuICB0b2dnbGVNb2RhbCgpO1xuXG4gIHJldHVybiB7XG4gICAgZm9ybUVsZW0sXG4gICAgdGl0bGVJbnB1dCxcbiAgICBkZXNjcmlwdGlvbklucHV0LFxuICAgIGltcG9ydGFuY2VJbnB1dCxcbiAgICBkYXRlSW5wdXQsXG4gICAgY2xvc2VFZGl0Rm9ybVxuICB9XG59XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKHVwZGF0ZWRUYXNrLCB0YXNrQ29udGFpbmVyKSB7XG4gIHRhc2tDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi50YXNrLXRpdGxlXCIpLnRleHRDb250ZW50ID0gdXBkYXRlZFRhc2sudGl0bGU7XG4gIHRhc2tDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi50YXNrLWRlc2NyaXB0aW9uXCIpLnRleHRDb250ZW50ID0gdXBkYXRlZFRhc2suZGVzY3JpcHRpb247XG4gIHRhc2tDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi50YXNrLWltcG9ydGFuY2VcIikudGV4dENvbnRlbnQgPSB1cGRhdGVkVGFzay5pbXBvcnRhbmNlU3ltYm9sO1xuICB0YXNrQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kYXRlXCIpLnRleHRDb250ZW50ID0gdXBkYXRlZFRhc2sudGltZUxlZnQoKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFzayh0YXNrQ29udGFpbmVyKSB7XG4gIHRhc2tDb250YWluZXIucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyVGFza0NvbnRhaW5lcigpIHtcbiAgY29udGFpbmVyT2ZBbGxUYXNrcy5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgbWFpblRpdGxlLnRleHRDb250ZW50ID0gXCJcIjtcbn1cblxuXG5mdW5jdGlvbiBidWlsZFByb2plY3RGb3JtKCkge1xuICBjb25zdCBmb3JtRWxlbSA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiZm9ybVwiLCBcInByb2plY3QtZm9ybVwiLCBcIlwiKTtcbiAgYm9keS5hcHBlbmRDaGlsZChmb3JtRWxlbSk7XG5cbiAgY29uc3QgdGl0bGVMYWJlbCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwibGFiZWxcIiwgXCJwcm9qZWN0LXRpdGxlLWxhYmVsXCIsIFwiUHJvamVjdCBOYW1lXCIpO1xuICBjb25zdCB0aXRsZUlucHV0ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJpbnB1dFwiLCBcInByb2plY3QtdGl0bGUtaW5wdXRcIiwgXCJcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0LXRpdGxlLWlucHV0XCIpO1xuICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByb2plY3QtdGl0bGUtaW5wdXRcIik7XG5cbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJidXR0b25cIiwgXCJwcm9qZWN0LWZvcm0tc3VibWl0XCIsIFwiQWRkXCIpO1xuICBjb25zdCBjbG9zZVByb2plY3RGb3JtQnV0dG9uID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJidXR0b25cIiwgXCJjbG9zZS1wcm9qZWN0LWZvcm1cIiwgXCLiqIlcIik7XG5cbiAgZm9ybUVsZW0uYXBwZW5kKFxuICAgIHRpdGxlTGFiZWwsXG4gICAgdGl0bGVJbnB1dCxcbiAgICBzdWJtaXRCdXR0b24sXG4gICAgY2xvc2VQcm9qZWN0Rm9ybUJ1dHRvblxuICApXG5cbiAgdG9nZ2xlTW9kYWwoKTtcblxuICByZXR1cm4ge1xuICAgIGZvcm1FbGVtLFxuICAgIHRpdGxlSW5wdXQsXG4gICAgY2xvc2VQcm9qZWN0Rm9ybUJ1dHRvblxuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0KHByb2plY3QpIHtcbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiZGl2XCIsIFwicHJvamVjdC1jb250YWluZXJcIiwgXCJcIik7XG4gIHByb2plY3ROYXYuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG5cbiAgY29uc3Qgc2VsZWN0Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJkaXZcIiwgXCJzZWxlY3QtY29udGFpbmVyXCIsIFwiXCIpO1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImRpdlwiLCBcInByb2plY3QtdGl0bGVcIiwgcHJvamVjdC50aXRsZSk7XG4gIGNvbnN0IGVkaXRQcm9qZWN0QnV0dG9uID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJidXR0b25cIiwgXCJlZGl0LXByb2plY3RcIiwgXCJSRU5BTUVcIik7XG4gIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImJ1dHRvblwiLCBcImRlbGV0ZS1wcm9qZWN0XCIsIFwiREVMRVRFXCIpO1xuICBjb25zdCBidXR0b25Db250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImRpdlwiLCBcInByb2plY3QtYnV0dG9uLWNvbnRhaW5lclwiLCBcIlwiKTtcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChcbiAgICBlZGl0UHJvamVjdEJ1dHRvbixcbiAgICBkZWxldGVQcm9qZWN0QnV0dG9uXG4gIClcbiAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQoXG4gICAgc2VsZWN0Q29udGFpbmVyLFxuICAgIHByb2plY3RUaXRsZSxcbiAgICBidXR0b25Db250YWluZXJcbiAgKVxuICByZXR1cm4ge1xuICAgIHByb2plY3RDb250YWluZXIsXG4gICAgZWRpdFByb2plY3RCdXR0b24sXG4gICAgZGVsZXRlUHJvamVjdEJ1dHRvblxuICB9O1xufVxuXG5mdW5jdGlvbiBidWlsZFByb2plY3RFZGl0KHByb2plY3RUaXRsZSkge1xuICBjb25zdCBmb3JtRWxlbSA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiZm9ybVwiLCBcInByb2plY3QtZm9ybVwiLCBcIlwiKTtcbiAgYm9keS5hcHBlbmRDaGlsZChmb3JtRWxlbSk7XG5cbiAgY29uc3QgdGl0bGVMYWJlbCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwibGFiZWxcIiwgXCJwcm9qZWN0LXRpdGxlLWxhYmVsXCIsIFwiUHJvamVjdCBOYW1lXCIpO1xuICBjb25zdCB0aXRsZUlucHV0ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJpbnB1dFwiLCBcInByb2plY3QtdGl0bGUtaW5wdXRcIiwgXCJcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0LXRpdGxlLWlucHV0XCIpO1xuICB0aXRsZUlucHV0LnZhbHVlID0gcHJvamVjdFRpdGxlO1xuICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByb2plY3QtdGl0bGUtaW5wdXRcIik7XG5cbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJidXR0b25cIiwgXCJwcm9qZWN0LWZvcm0tc3VibWl0XCIsIFwiU2F2ZVwiKTtcbiAgY29uc3QgY2xvc2VQcm9qZWN0Rm9ybUJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiYnV0dG9uXCIsIFwiY2xvc2UtcHJvamVjdC1mb3JtXCIsIFwi4qiJXCIpO1xuXG4gIGZvcm1FbGVtLmFwcGVuZChcbiAgICB0aXRsZUxhYmVsLFxuICAgIHRpdGxlSW5wdXQsXG4gICAgc3VibWl0QnV0dG9uLFxuICAgIGNsb3NlUHJvamVjdEZvcm1CdXR0b25cbiAgKVxuXG4gIHRvZ2dsZU1vZGFsKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBmb3JtRWxlbSxcbiAgICB0aXRsZUlucHV0LFxuICAgIGNsb3NlUHJvamVjdEZvcm1CdXR0b25cbiAgfVxufVxuXG5mdW5jdGlvbiBlZGl0UHJvamVjdChwcm9qZWN0Q29udGFpbmVyLCBuZXdUaXRsZSkge1xuICBwcm9qZWN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZVwiKS50ZXh0Q29udGVudCA9IG5ld1RpdGxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0KHByb2plY3RDb250YWluZXIpIHtcbiAgcHJvamVjdENvbnRhaW5lci5yZW1vdmUoKTtcbn1cblxubGV0IHByZXZpb3VzUHJvamVjdDtcbmZ1bmN0aW9uIGhpZ2hsaWdodFByb2plY3QoY3VycmVudFByb2plY3QpIHtcbiAgaWYgKHByZXZpb3VzUHJvamVjdCAhPT0gdW5kZWZpbmVkKSBwcmV2aW91c1Byb2plY3QucXVlcnlTZWxlY3RvcihcIi5zZWxlY3QtY29udGFpbmVyXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJjaG9zZW5cIik7XG4gIGN1cnJlbnRQcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0LWNvbnRhaW5lclwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiY2hvc2VuXCIpO1xuICBwcmV2aW91c1Byb2plY3QgPSBjdXJyZW50UHJvamVjdDtcbn1cblxubGV0IHByZXZpb3VzTmF2O1xuZnVuY3Rpb24gaGlnaGxpZ2h0TmF2KGN1cnJlbnROYXYpIHtcbiAgaWYgKHByZXZpb3VzTmF2ICE9PSB1bmRlZmluZWQpIHByZXZpb3VzTmF2LmNsYXNzTGlzdC50b2dnbGUoXCJoaWdobGlnaHRlZFwiKTtcbiAgY3VycmVudE5hdi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlnaGxpZ2h0ZWRcIik7XG4gIHByZXZpb3VzTmF2ID0gY3VycmVudE5hdjtcbn1cblxuXG5mdW5jdGlvbiByZW1vdmVGb3JtKGZvcm0pIHtcbiAgZm9ybS5yZW1vdmUoKTtcbiAgdG9nZ2xlTW9kYWwoKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlTW9kYWwoKSB7XG4gIG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG59XG5cbmZ1bmN0aW9uIHNldE1haW5UaXRsZSh0aXRsZSkge1xuICBtYWluVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGJ1aWxkVGFza0Zvcm0sXG4gIGRpc3BsYXlUYXNrLFxuICBjbGVhclRhc2tDb250YWluZXIsXG4gIGJ1aWxkVGFza0VkaXQsXG4gIGVkaXRUYXNrLFxuICByZW1vdmVUYXNrLFxuICBidWlsZFByb2plY3RGb3JtLFxuICBkaXNwbGF5UHJvamVjdCxcbiAgYnVpbGRQcm9qZWN0RWRpdCxcbiAgZWRpdFByb2plY3QsXG4gIHJlbW92ZVByb2plY3QsXG4gIGhpZ2hsaWdodFByb2plY3QsXG4gIGhpZ2hsaWdodE5hdixcbiAgcmVtb3ZlRm9ybSxcbiAgc2V0TWFpblRpdGxlLFxuICBzaG93VGFza0Zvcm0sXG4gIHNob3dQcm9qZWN0Rm9ybSxcbiAgbmF2QWxsLFxuICBuYXZUb2RheSxcbiAgbmF2V2VlayxcbiAgbmF2SW1wb3J0YW50LFxuICBtb2RhbFxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KGVsZW1UeXBlLCBjbGFzc05hbWUsIGNvbnRlbnQpIHtcbiAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbVR5cGUpO1xuICB0ZW1wLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgdGVtcC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gIHJldHVybiB0ZW1wO1xufSIsImNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGltcG9ydGFuY2UsIGR1ZURhdGUsIHByb2plY3ROYW1lKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmltcG9ydGFuY2UgPSBpbXBvcnRhbmNlO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xuICB9XG5cbiAgZ2V0IGltcG9ydGFuY2VTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMuaW1wb3J0YW5jZSkgcmV0dXJuIFwiIVwiO1xuICAgIHJldHVybiBcIlwiO1xuICB9XG5cbiAgdGltZUxlZnQoKSB7XG4gICAgY29uc3QgbXNMZWZ0ID0gbmV3IERhdGUodGhpcy5kdWVEYXRlKSAtIG5ldyBEYXRlKCk7XG4gICAgaWYgKG1zTGVmdCA8IC02MDAwMCkgcmV0dXJuIFwi8J+VkCBQYXN0IER1ZVwiO1xuICAgIGNvbnN0IG1pbnV0ZXNMZWZ0ID0gTWF0aC5jZWlsKG1zTGVmdCAvIDEwMDAgLyA2MCk7XG4gICAgaWYgKG1pbnV0ZXNMZWZ0IDwgNjApIHJldHVybiBg8J+VkCAke21pbnV0ZXNMZWZ0fSBtaW51dGVzIGxlZnRgO1xuICAgIGNvbnN0IGhyc0xlZnQgPSBNYXRoLmNlaWwobWludXRlc0xlZnQgLyA2MCk7XG4gICAgaWYgKGhyc0xlZnQgPCAyNCkgcmV0dXJuIGDwn5WQICR7aHJzTGVmdH0gaG91cnMgbGVmdGA7XG4gICAgcmV0dXJuIGDwn5WQICR7TWF0aC5jZWlsKGhyc0xlZnQgLyAyNCl9IGRheXMgbGVmdGA7XG4gIH1cbn1cblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgfVxufVxuXG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhbGxQcm9qZWN0c1wiKSA9PT0gbnVsbCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFsbFByb2plY3RzXCIsIFwiW11cIik7XG59IFxuLy9sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFsbFByb2plY3RzXCIsIFwiW11cIik7XG5jb25zdCBhbGxQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhbGxQcm9qZWN0c1wiKSk7XG5hbGxQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICBwcm9qZWN0LnRhc2tzLmZvckVhY2godGFzayA9PiByZWdhaW5UYXNrTWV0aG9kcyh0YXNrKSk7XG59KTtcblxuXG5mdW5jdGlvbiByZWdhaW5UYXNrTWV0aG9kcyh0YXNrKSB7XG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZih0YXNrLCBUYXNrLnByb3RvdHlwZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBpbXBvcnRhbmNlLCBkdWVEYXRlLCBwcm9qZWN0TmFtZSkge1xuICByZXR1cm4gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBpbXBvcnRhbmNlLCBkdWVEYXRlLCBwcm9qZWN0TmFtZSk7XG59XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKHRhc2ssIG5ld1RpdGxlLCBuZXdEZXNjcmlwdGlvbiwgbmV3SW1wb3J0YW5jZSwgbmV3RGF0ZSkge1xuICB0YXNrLnRpdGxlID0gbmV3VGl0bGU7XG4gIHRhc2suZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgdGFzay5pbXBvcnRhbmNlID0gbmV3SW1wb3J0YW5jZTtcbiAgdGFzay5kdWVEYXRlID0gbmV3RGF0ZTtcbn1cblxuZnVuY3Rpb24gYWRkVGFza1RvUHJvamVjdCh0YXNrLCBwcm9qZWN0KSB7XG4gIHByb2plY3QudGFza3MucHVzaCh0YXNrKTtcbiAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVUYXNrKHRhc2spIHtcbiAgY29uc3QgdGFza0FycmF5ID0gYWxsUHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHRhc2sucHJvamVjdE5hbWUgPT09IHByb2plY3QudGl0bGUpLnRhc2tzO1xuICBjb25zb2xlLmxvZyhhbGxQcm9qZWN0cyk7XG4gIGNvbnN0IHRhc2tJbmRleCA9IHRhc2tBcnJheS5pbmRleE9mKHRhc2spO1xuICB0YXNrQXJyYXkuc3BsaWNlKHRhc2tJbmRleCwgMSk7XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdCh0aXRsZSkge1xuICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUpO1xuICBhbGxQcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICByZXR1cm4gcHJvamVjdDtcbn1cblxuZnVuY3Rpb24gZWRpdFByb2plY3QocHJvamVjdCwgbmV3VGl0bGUpIHtcbiAgcHJvamVjdC50aXRsZSA9IG5ld1RpdGxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0KHByb2plY3QpIHtcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gYWxsUHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcbiAgYWxsUHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG4gIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcbn1cblxuXG5mdW5jdGlvbiBnZXRBbGxQcm9qZWN0c0FuZFRhc2tzKCkge1xuICByZXR1cm4gYWxsUHJvamVjdHM7XG59XG5cbmZ1bmN0aW9uIHNhdmVDaGFuZ2VzKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFsbFByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XG59XG5cbmZ1bmN0aW9uIGdldEZpbHRlcmVkVGFza3MoY3JpdGVyaWEpIHtcbiAgY29uc3QgZmlsdGVyZWRUYXNrcyA9IFtdO1xuXG4gIGlmIChjcml0ZXJpYSA9PT0gXCJBbGxcIikge1xuICAgIGFsbFByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2godGFzayA9PiBmaWx0ZXJlZFRhc2tzLnB1c2godGFzaykpO1xuICAgIH0pXG4gIH1cbiAgaWYgKGNyaXRlcmlhID09PSBcIlRvZGF5XCIpIHtcbiAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpO1xuICAgICAgICBjb25zdCBkdWVEYXkgPSBuZXcgRGF0ZSh0YXNrLmR1ZURhdGUpLmdldERhdGUoKTtcbiAgICAgICAgaWYgKHRvZGF5ID09PSBkdWVEYXkpIGZpbHRlcmVkVGFza3MucHVzaCh0YXNrKTtcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuICBpZiAoY3JpdGVyaWEgPT09IFwiV2Vla1wiKSB7XG4gICAgYWxsUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgIHByb2plY3QudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgY29uc3QgZGF5RGlmZmVyZW5jZSA9ICgobmV3IERhdGUodGFzay5kdWVEYXRlKSAtIG5ldyBEYXRlKCkpIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgaWYgKChkYXlEaWZmZXJlbmNlIDw9IDcpICYmIChkYXlEaWZmZXJlbmNlID4gMCkpIGZpbHRlcmVkVGFza3MucHVzaCh0YXNrKTtcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuICBpZiAoY3JpdGVyaWEgPT09IFwiSW1wb3J0YW50XCIpIHtcbiAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBpZiAodGFzay5pbXBvcnRhbmNlKSBmaWx0ZXJlZFRhc2tzLnB1c2godGFzayk7XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZmlsdGVyZWRUYXNrcztcbn1cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNyZWF0ZVRhc2ssXG4gIGVkaXRUYXNrLFxuICBhZGRUYXNrVG9Qcm9qZWN0LFxuICByZW1vdmVUYXNrLFxuICBjcmVhdGVOZXdQcm9qZWN0LFxuICBlZGl0UHJvamVjdCxcbiAgcmVtb3ZlUHJvamVjdCxcbiAgZ2V0QWxsUHJvamVjdHNBbmRUYXNrcyxcbiAgc2F2ZUNoYW5nZXMsXG4gIHJlZ2FpblRhc2tNZXRob2RzLFxuICBnZXRGaWx0ZXJlZFRhc2tzXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9