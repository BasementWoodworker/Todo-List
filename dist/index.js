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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --blue: rgb(51, 146, 206);\n  --blue-border: rgb(2, 80, 128);\n  --lightgrey: rgb(235, 235, 235);\n  --modal: rgba(180, 180, 180, 0.3);\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  text-decoration: none;\n}\n\nbody {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-template-rows: 70px 1fr;\n}\n\n/* Header */\nheader {\n  grid-column: 1 / 3;\n  background-color: var(--blue);\n}\n\nheader > a {\n  color: white;\n  font-size: 48px;\n}\n\n/* Sidebar */\n.sidebar {\n  background-color: var(--lightgrey);\n}\n\n.project-form {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 2;\n}\n\nbutton.close-project-form {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n.sidebar > .project {\n  width: 90%;\n  background-color: white;\n  border: 2px solid darkgrey;\n  border-radius: 4px;\n  padding: 4px;\n  margin: 5%;\n}\n\n.sidebar > .project.highlighted {\n  background-color: var(--blue);\n  border-color: var(--blue-border);\n}\n\n/* Main */\nmain {\n  background-color: white;\n}\n\n/* Main -> Task Form */\nmain > .show-task-form {\n  position: absolute;\n  bottom: 50px;\n  right: 50px;\n\n  color: white;\n  background-color: var(--blue);\n  font-size: 48px;\n  height: 80px;\n  width: 80px;\n  border: solid 1px var(--lightgrey);\n  border-radius: 50%;\n\n}\n\n.task-form {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 2;\n\n  background-color: var(--lightgrey);\n  border: 2px solid darkgrey;\n  border-radius: 8px;\n  padding: 10px;\n}\n\n.task-form > *,\n.project-form > * {\n  display: block;\n}\n\nbutton.task-form-submit {\n  background-color: var(--blue);\n  color: white;\n  border-radius: 8px;\n  font-size: 24px;\n}\n\nbutton.close-task-form {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n/* Main -> Displayed Tasks */\n.task-container {\n  display: flex;\n  background-color: var(--lightgrey);\n  padding: 12px;\n  margin: 8px;\n  border-radius: 4px;\n}\n\n.task-title {\n  width: 30%;\n}\n\n.task-description {\n  width: 30%;\n}\n\n.task-importance {\n  position: relative;\n\n  color: rgb(226, 166, 0);\n  font-size: 24px;\n  padding: 0px 8px;\n}\n\n.task-importance:hover::before {\n  position: absolute;\n  top: 5px;\n  left: 15px;\n\n  content: \"Important\";\n  font-size: 12px;\n  color: darkgrey;\n}\n\n/* Modal */\n#modal {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: var(--modal);\n  z-index: 1;\n}\n\n#modal.hidden {\n  z-index: -1;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,8BAA8B;EAC9B,+BAA+B;EAC/B,iCAAiC;AACnC;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,4BAA4B;AAC9B;;AAEA,WAAW;AACX;EACE,kBAAkB;EAClB,6BAA6B;AAC/B;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB;;AAEA,YAAY;AACZ;EACE,kCAAkC;AACpC;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,QAAQ;AACV;;AAEA;EACE,UAAU;EACV,uBAAuB;EACvB,0BAA0B;EAC1B,kBAAkB;EAClB,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,6BAA6B;EAC7B,gCAAgC;AAClC;;AAEA,SAAS;AACT;EACE,uBAAuB;AACzB;;AAEA,sBAAsB;AACtB;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;;EAEX,YAAY;EACZ,6BAA6B;EAC7B,eAAe;EACf,YAAY;EACZ,WAAW;EACX,kCAAkC;EAClC,kBAAkB;;AAEpB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,UAAU;;EAEV,kCAAkC;EAClC,0BAA0B;EAC1B,kBAAkB;EAClB,aAAa;AACf;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,QAAQ;AACV;;AAEA,4BAA4B;AAC5B;EACE,aAAa;EACb,kCAAkC;EAClC,aAAa;EACb,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,kBAAkB;;EAElB,uBAAuB;EACvB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,UAAU;;EAEV,oBAAoB;EACpB,eAAe;EACf,eAAe;AACjB;;AAEA,UAAU;AACV;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,8BAA8B;EAC9B,UAAU;AACZ;;AAEA;EACE,WAAW;AACb","sourcesContent":[":root {\n  --blue: rgb(51, 146, 206);\n  --blue-border: rgb(2, 80, 128);\n  --lightgrey: rgb(235, 235, 235);\n  --modal: rgba(180, 180, 180, 0.3);\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  text-decoration: none;\n}\n\nbody {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-template-rows: 70px 1fr;\n}\n\n/* Header */\nheader {\n  grid-column: 1 / 3;\n  background-color: var(--blue);\n}\n\nheader > a {\n  color: white;\n  font-size: 48px;\n}\n\n/* Sidebar */\n.sidebar {\n  background-color: var(--lightgrey);\n}\n\n.project-form {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 2;\n}\n\nbutton.close-project-form {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n.sidebar > .project {\n  width: 90%;\n  background-color: white;\n  border: 2px solid darkgrey;\n  border-radius: 4px;\n  padding: 4px;\n  margin: 5%;\n}\n\n.sidebar > .project.highlighted {\n  background-color: var(--blue);\n  border-color: var(--blue-border);\n}\n\n/* Main */\nmain {\n  background-color: white;\n}\n\n/* Main -> Task Form */\nmain > .show-task-form {\n  position: absolute;\n  bottom: 50px;\n  right: 50px;\n\n  color: white;\n  background-color: var(--blue);\n  font-size: 48px;\n  height: 80px;\n  width: 80px;\n  border: solid 1px var(--lightgrey);\n  border-radius: 50%;\n\n}\n\n.task-form {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 2;\n\n  background-color: var(--lightgrey);\n  border: 2px solid darkgrey;\n  border-radius: 8px;\n  padding: 10px;\n}\n\n.task-form > *,\n.project-form > * {\n  display: block;\n}\n\nbutton.task-form-submit {\n  background-color: var(--blue);\n  color: white;\n  border-radius: 8px;\n  font-size: 24px;\n}\n\nbutton.close-task-form {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n/* Main -> Displayed Tasks */\n.task-container {\n  display: flex;\n  background-color: var(--lightgrey);\n  padding: 12px;\n  margin: 8px;\n  border-radius: 4px;\n}\n\n.task-title {\n  width: 30%;\n}\n\n.task-description {\n  width: 30%;\n}\n\n.task-importance {\n  position: relative;\n\n  color: rgb(226, 166, 0);\n  font-size: 24px;\n  padding: 0px 8px;\n}\n\n.task-importance:hover::before {\n  position: absolute;\n  top: 5px;\n  left: 15px;\n\n  content: \"Important\";\n  font-size: 12px;\n  color: darkgrey;\n}\n\n/* Modal */\n#modal {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: var(--modal);\n  z-index: 1;\n}\n\n#modal.hidden {\n  z-index: -1;\n}"],"sourceRoot":""}]);
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

// Initial Filling
currentProject = addProject("general-tasks");
// Initial Filling End

function submitTaskForm(event) {
  event.preventDefault();
  const task = _modules_task_creation_and_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].createTask(
    currentForm.titleInput.value, 
    currentForm.descriptionInput.value, 
    currentForm.importanceInput.checked, 
    currentForm.dateInput.value,
  );
  _modules_task_creation_and_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].addTaskToProject(task, currentProject);
  _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].displayTask(task);
  _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].removeForm(currentForm.formElem);
}

function addProject(projectName) {
  const project = _modules_task_creation_and_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].addNewProject(projectName);
  const projectElem = _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].displayProject(project);

  projectElem.addEventListener("click", () => {
    currentProject = project;
    _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].highlightProject(projectElem);
  });

  return project;
}


_modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].showTaskForm.addEventListener("click", () => {
  currentForm = _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].buildTaskForm();
  currentForm.formElem.addEventListener("submit", submitTaskForm);
  currentForm.closeTaskForm.addEventListener("click", () => _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].removeForm(currentForm.formElem));
})


_modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].showProjectForm.addEventListener("click", () => {
  currentForm = _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].buildProjectForm();
  currentForm.formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    const projectName = event.target.children[1].value
    addProject(projectName);
    _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].removeForm(currentForm.formElem);
  });
  currentForm.closeProjectForm.addEventListener("click", () => _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].removeForm(currentForm.formElem));
});


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
const showProjectForm = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "show-project-form", "+ Add New Project");
sidebar.append(
  showProjectForm
)

// Main
const main = document.createElement("main");
const showTaskForm = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "show-task-form", "+");
main.appendChild(showTaskForm);

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

  const submitButton = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "task-form-submit", "Add");
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
  taskContainer.append(
    (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "task-title", task.title),
    (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "task-description", task.description),
    (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "task-importance", task.importanceSymbol),
    (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "task-date", task.timeLeft())
  )
  main.appendChild(taskContainer);
}


function buildProjectForm() {
  const formElem = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("form", "project-form", "");
  body.appendChild(formElem);

  const titleLabel = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("label", "project-title-label", "Project Name");
  const titleInput = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("input", "project-title-input", "");
  titleInput.setAttribute("id", "project-title-input");
  titleLabel.setAttribute("for", "project-title-input");

  const submitButton = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "project-form-submit", "Add");
  const closeProjectForm = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "close-project-form", "⨉");

  formElem.append(
    titleLabel,
    titleInput,
    submitButton,
    closeProjectForm
  )

  toggleModal();

  return {
    formElem,
    titleInput,
    closeProjectForm
  }
}

function displayProject(project) {
  const projectElem = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "project", project.title);
  projectElem.setAttribute("data-project-name", project.title);
  sidebar.appendChild(projectElem);
  highlightProject(projectElem);
  return projectElem;
}

let previousProjectElem;
function highlightProject(projectElem) {
  if (previousProjectElem !== undefined) previousProjectElem.classList.toggle("highlighted");
  projectElem.classList.toggle("highlighted");
  previousProjectElem = projectElem;
}


function removeForm(form) {
  form.remove();
  toggleModal();
}

function toggleModal() {
  modal.classList.toggle("hidden");
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  buildTaskForm,
  displayTask,
  buildProjectForm,
  displayProject,
  highlightProject,
  removeForm,
  showTaskForm,
  showProjectForm,
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
  constructor(title, description, importance, dueDate) {
    this.title = title;
    this.description = description;
    this.importance = importance;
    this.dueDate = dueDate;
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

function createTask(title, description, importance, dueDate) {
  return new Task(title, description, importance, dueDate);
}


const allProjects = [];

function addTaskToProject(task, project) {
  project.tasks.push(task);
}

function addNewProject(title) {
  const project = new Project(title);
  allProjects.push(project);
  return project;
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  createTask,
  addTaskToProject,
  addNewProject
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0EsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN4S2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGFBQWE7QUFDcEQ7QUFDQSxtQ0FBbUMsU0FBUztBQUM1QyxpQkFBaUIseUJBQXlCO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL0RPTS1tYW5pcHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY3JlYXRlLWVsZW1lbnQtY3VzdG9tLWZ1bmN0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2stY3JlYXRpb24tYW5kLXN0b3JhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWJsdWU6IHJnYig1MSwgMTQ2LCAyMDYpO1xcbiAgLS1ibHVlLWJvcmRlcjogcmdiKDIsIDgwLCAxMjgpO1xcbiAgLS1saWdodGdyZXk6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG4gIC0tbW9kYWw6IHJnYmEoMTgwLCAxODAsIDE4MCwgMC4zKTtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDFmcjtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cXG5cXG5oZWFkZXIgPiBhIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG59XFxuXFxuLyogU2lkZWJhciAqL1xcbi5zaWRlYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Z3JleSk7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG5idXR0b24uY2xvc2UtcHJvamVjdC1mb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4uc2lkZWJhciA+IC5wcm9qZWN0IHtcXG4gIHdpZHRoOiA5MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGRhcmtncmV5O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgcGFkZGluZzogNHB4O1xcbiAgbWFyZ2luOiA1JTtcXG59XFxuXFxuLnNpZGViYXIgPiAucHJvamVjdC5oaWdobGlnaHRlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZS1ib3JkZXIpO1xcbn1cXG5cXG4vKiBNYWluICovXFxubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogTWFpbiAtPiBUYXNrIEZvcm0gKi9cXG5tYWluID4gLnNob3ctdGFzay1mb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogNTBweDtcXG4gIHJpZ2h0OiA1MHB4O1xcblxcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBmb250LXNpemU6IDQ4cHg7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB3aWR0aDogODBweDtcXG4gIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWxpZ2h0Z3JleSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuXFxufVxcblxcbi50YXNrLWZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB6LWluZGV4OiAyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRncmV5KTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGRhcmtncmV5O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnRhc2stZm9ybSA+ICosXFxuLnByb2plY3QtZm9ybSA+ICoge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJ1dHRvbi50YXNrLWZvcm0tc3VibWl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG5idXR0b24uY2xvc2UtdGFzay1mb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4vKiBNYWluIC0+IERpc3BsYXllZCBUYXNrcyAqL1xcbi50YXNrLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRncmV5KTtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBtYXJnaW46IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLnRhc2stdGl0bGUge1xcbiAgd2lkdGg6IDMwJTtcXG59XFxuXFxuLnRhc2stZGVzY3JpcHRpb24ge1xcbiAgd2lkdGg6IDMwJTtcXG59XFxuXFxuLnRhc2staW1wb3J0YW5jZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICBjb2xvcjogcmdiKDIyNiwgMTY2LCAwKTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIHBhZGRpbmc6IDBweCA4cHg7XFxufVxcblxcbi50YXNrLWltcG9ydGFuY2U6aG92ZXI6OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDVweDtcXG4gIGxlZnQ6IDE1cHg7XFxuXFxuICBjb250ZW50OiBcXFwiSW1wb3J0YW50XFxcIjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiBkYXJrZ3JleTtcXG59XFxuXFxuLyogTW9kYWwgKi9cXG4jbW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb2RhbCk7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jbW9kYWwuaGlkZGVuIHtcXG4gIHotaW5kZXg6IC0xO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0IsaUNBQWlDO0FBQ25DOztBQUVBOztFQUVFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsNEJBQTRCO0FBQzlCOztBQUVBLFdBQVc7QUFDWDtFQUNFLGtCQUFrQjtFQUNsQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQSxZQUFZO0FBQ1o7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGdDQUFnQztBQUNsQzs7QUFFQSxTQUFTO0FBQ1Q7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXOztFQUVYLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0NBQWtDO0VBQ2xDLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVOztFQUVWLGtDQUFrQztFQUNsQywwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtBQUNWOztBQUVBLDRCQUE0QjtBQUM1QjtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7O0VBRWxCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVOztFQUVWLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQSxVQUFVO0FBQ1Y7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tYmx1ZTogcmdiKDUxLCAxNDYsIDIwNik7XFxuICAtLWJsdWUtYm9yZGVyOiByZ2IoMiwgODAsIDEyOCk7XFxuICAtLWxpZ2h0Z3JleTogcmdiKDIzNSwgMjM1LCAyMzUpO1xcbiAgLS1tb2RhbDogcmdiYSgxODAsIDE4MCwgMTgwLCAwLjMpO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggMWZyO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG5oZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbmhlYWRlciA+IGEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiA0OHB4O1xcbn1cXG5cXG4vKiBTaWRlYmFyICovXFxuLnNpZGViYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRncmV5KTtcXG59XFxuXFxuLnByb2plY3QtZm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbmJ1dHRvbi5jbG9zZS1wcm9qZWN0LWZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbi5zaWRlYmFyID4gLnByb2plY3Qge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAycHggc29saWQgZGFya2dyZXk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBwYWRkaW5nOiA0cHg7XFxuICBtYXJnaW46IDUlO1xcbn1cXG5cXG4uc2lkZWJhciA+IC5wcm9qZWN0LmhpZ2hsaWdodGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlLWJvcmRlcik7XFxufVxcblxcbi8qIE1haW4gKi9cXG5tYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBNYWluIC0+IFRhc2sgRm9ybSAqL1xcbm1haW4gPiAuc2hvdy10YXNrLWZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA1MHB4O1xcbiAgcmlnaHQ6IDUwcHg7XFxuXFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG4gIGhlaWdodDogODBweDtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tbGlnaHRncmV5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXG59XFxuXFxuLnRhc2stZm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHotaW5kZXg6IDI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGdyZXkpO1xcbiAgYm9yZGVyOiAycHggc29saWQgZGFya2dyZXk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4udGFzay1mb3JtID4gKixcXG4ucHJvamVjdC1mb3JtID4gKiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYnV0dG9uLnRhc2stZm9ybS1zdWJtaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbmJ1dHRvbi5jbG9zZS10YXNrLWZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbi8qIE1haW4gLT4gRGlzcGxheWVkIFRhc2tzICovXFxuLnRhc2stY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGdyZXkpO1xcbiAgcGFkZGluZzogMTJweDtcXG4gIG1hcmdpbjogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4udGFzay10aXRsZSB7XFxuICB3aWR0aDogMzAlO1xcbn1cXG5cXG4udGFzay1kZXNjcmlwdGlvbiB7XFxuICB3aWR0aDogMzAlO1xcbn1cXG5cXG4udGFzay1pbXBvcnRhbmNlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIGNvbG9yOiByZ2IoMjI2LCAxNjYsIDApO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgcGFkZGluZzogMHB4IDhweDtcXG59XFxuXFxuLnRhc2staW1wb3J0YW5jZTpob3Zlcjo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNXB4O1xcbiAgbGVmdDogMTVweDtcXG5cXG4gIGNvbnRlbnQ6IFxcXCJJbXBvcnRhbnRcXFwiO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6IGRhcmtncmV5O1xcbn1cXG5cXG4vKiBNb2RhbCAqL1xcbiNtb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vZGFsKTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbiNtb2RhbC5oaWRkZW4ge1xcbiAgei1pbmRleDogLTE7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB0YXNrX01vZHVsZSBmcm9tIFwiLi9tb2R1bGVzL3Rhc2stY3JlYXRpb24tYW5kLXN0b3JhZ2UuanNcIjtcbmltcG9ydCBET01fTW9kdWxlIGZyb20gXCIuL21vZHVsZXMvRE9NLW1hbmlwdWxhdGlvbi5qc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuXG4vLyBNYWluIExvZ2ljXG5sZXQgY3VycmVudEZvcm07XG5sZXQgY3VycmVudFByb2plY3Q7XG5cbi8vIEluaXRpYWwgRmlsbGluZ1xuY3VycmVudFByb2plY3QgPSBhZGRQcm9qZWN0KFwiZ2VuZXJhbC10YXNrc1wiKTtcbi8vIEluaXRpYWwgRmlsbGluZyBFbmRcblxuZnVuY3Rpb24gc3VibWl0VGFza0Zvcm0oZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgdGFzayA9IHRhc2tfTW9kdWxlLmNyZWF0ZVRhc2soXG4gICAgY3VycmVudEZvcm0udGl0bGVJbnB1dC52YWx1ZSwgXG4gICAgY3VycmVudEZvcm0uZGVzY3JpcHRpb25JbnB1dC52YWx1ZSwgXG4gICAgY3VycmVudEZvcm0uaW1wb3J0YW5jZUlucHV0LmNoZWNrZWQsIFxuICAgIGN1cnJlbnRGb3JtLmRhdGVJbnB1dC52YWx1ZSxcbiAgKTtcbiAgdGFza19Nb2R1bGUuYWRkVGFza1RvUHJvamVjdCh0YXNrLCBjdXJyZW50UHJvamVjdCk7XG4gIERPTV9Nb2R1bGUuZGlzcGxheVRhc2sodGFzayk7XG4gIERPTV9Nb2R1bGUucmVtb3ZlRm9ybShjdXJyZW50Rm9ybS5mb3JtRWxlbSk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgY29uc3QgcHJvamVjdCA9IHRhc2tfTW9kdWxlLmFkZE5ld1Byb2plY3QocHJvamVjdE5hbWUpO1xuICBjb25zdCBwcm9qZWN0RWxlbSA9IERPTV9Nb2R1bGUuZGlzcGxheVByb2plY3QocHJvamVjdCk7XG5cbiAgcHJvamVjdEVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3Q7XG4gICAgRE9NX01vZHVsZS5oaWdobGlnaHRQcm9qZWN0KHByb2plY3RFbGVtKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHByb2plY3Q7XG59XG5cblxuRE9NX01vZHVsZS5zaG93VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY3VycmVudEZvcm0gPSBET01fTW9kdWxlLmJ1aWxkVGFza0Zvcm0oKTtcbiAgY3VycmVudEZvcm0uZm9ybUVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBzdWJtaXRUYXNrRm9ybSk7XG4gIGN1cnJlbnRGb3JtLmNsb3NlVGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IERPTV9Nb2R1bGUucmVtb3ZlRm9ybShjdXJyZW50Rm9ybS5mb3JtRWxlbSkpO1xufSlcblxuXG5ET01fTW9kdWxlLnNob3dQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjdXJyZW50Rm9ybSA9IERPTV9Nb2R1bGUuYnVpbGRQcm9qZWN0Rm9ybSgpO1xuICBjdXJyZW50Rm9ybS5mb3JtRWxlbS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBldmVudC50YXJnZXQuY2hpbGRyZW5bMV0udmFsdWVcbiAgICBhZGRQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICBET01fTW9kdWxlLnJlbW92ZUZvcm0oY3VycmVudEZvcm0uZm9ybUVsZW0pO1xuICB9KTtcbiAgY3VycmVudEZvcm0uY2xvc2VQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gRE9NX01vZHVsZS5yZW1vdmVGb3JtKGN1cnJlbnRGb3JtLmZvcm1FbGVtKSk7XG59KTtcblxuXG5ET01fTW9kdWxlLm1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBET01fTW9kdWxlLnJlbW92ZUZvcm0oY3VycmVudEZvcm0uZm9ybUVsZW0pKTsiLCJpbXBvcnQgY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQgZnJvbSBcIi4vY3JlYXRlLWVsZW1lbnQtY3VzdG9tLWZ1bmN0aW9uLmpzXCJcblxuLy8gSW5pdGlhbCBwYWdlIGJ1aWxkXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcblxuLy8gSGVhZGVyXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuY29uc3QgaGVhZGVyTGluayA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiYVwiLCBcIlwiLCBcIlRvZG8gTGlzdFwiKTtcbmhlYWRlckxpbmsuaHJlZiA9IFwiXCI7XG5oZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyTGluayk7XG5cbi8vIFNpZGViYXJcbmNvbnN0IHNpZGViYXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcIm5hdlwiLCBcInNpZGViYXJcIiwgXCJcIik7XG5jb25zdCBzaG93UHJvamVjdEZvcm0gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImJ1dHRvblwiLCBcInNob3ctcHJvamVjdC1mb3JtXCIsIFwiKyBBZGQgTmV3IFByb2plY3RcIik7XG5zaWRlYmFyLmFwcGVuZChcbiAgc2hvd1Byb2plY3RGb3JtXG4pXG5cbi8vIE1haW5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbmNvbnN0IHNob3dUYXNrRm9ybSA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiYnV0dG9uXCIsIFwic2hvdy10YXNrLWZvcm1cIiwgXCIrXCIpO1xubWFpbi5hcHBlbmRDaGlsZChzaG93VGFza0Zvcm0pO1xuXG4vLyBNb2RhbFxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubW9kYWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtb2RhbFwiKTtcbm1vZGFsLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cbmJvZHkuYXBwZW5kKFxuICBoZWFkZXIsXG4gIHNpZGViYXIsXG4gIG1haW4sXG4gIG1vZGFsXG4pXG4vLyBJbml0aWFsIGJ1aWxkIGVuZFxuXG5mdW5jdGlvbiBidWlsZFRhc2tGb3JtKCkge1xuICBjb25zdCBmb3JtRWxlbSA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiZm9ybVwiLCBcInRhc2stZm9ybVwiLCBcIlwiKTtcbiAgYm9keS5hcHBlbmRDaGlsZChmb3JtRWxlbSk7XG5cbiAgY29uc3QgdGl0bGVJbnB1dCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiaW5wdXRcIiwgXCJ0aXRsZS1pbnB1dFwiLCBcIlwiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlRhc2tcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkRlc2NyaXB0aW9uXCIpO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCAzMDApO1xuXG4gIGNvbnN0IGltcG9ydGFuY2VMYWJlbCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwibGFiZWxcIiwgXCJpbXBvcnRhbmNlLWxhYmVsXCIsIFwiSW1wb3J0YW50XCIpO1xuICBjb25zdCBpbXBvcnRhbmNlSW5wdXQgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImlucHV0XCIsIFwiaW1wb3J0YW5jZS1pbnB1dFwiLCBcIlwiKTtcbiAgaW1wb3J0YW5jZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgaW1wb3J0YW5jZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaW1wb3J0YW5jZS1pbnB1dFwiKTtcbiAgaW1wb3J0YW5jZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImltcG9ydGFuY2UtaW5wdXRcIik7XG4gIGNvbnN0IGltcG9ydGFuY2VDb250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImRpdlwiLCBcImltcG9ydGFuY2UtY29udGFpbmVyXCIsIFwiXCIpXG4gIGltcG9ydGFuY2VDb250YWluZXIuYXBwZW5kKGltcG9ydGFuY2VMYWJlbCwgaW1wb3J0YW5jZUlucHV0KTtcblxuICBjb25zdCBkYXRlSW5wdXQgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImlucHV0XCIsIFwiZGF0ZS1pbnB1dFwiLCBcIlwiKTtcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRldGltZS1sb2NhbFwiKTtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IG1vbnRoID0gKGRhdGUuZ2V0TW9udGgoKSsxKSA8IDEwID8gYDAke2RhdGUuZ2V0TW9udGgoKSsxfWAgOiBkYXRlLmdldE1vbnRoKCkrMTtcbiAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCkgPCAxMCA/IGAwJHtkYXRlLmdldERhdGUoKX1gIDogZGF0ZS5nZXREYXRlKCk7XG4gIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpIDwgMTAgPyBgMCR7ZGF0ZS5nZXRIb3VycygpfWAgOiBkYXRlLmdldEhvdXJzKCk7XG4gIGNvbnN0IG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKSA8IDEwID8gYDAke2RhdGUuZ2V0TWludXRlcygpfWAgOiBkYXRlLmdldE1pbnV0ZXMoKTtcbiAgZGF0ZUlucHV0LnZhbHVlID0gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9VCR7aG91cnN9OiR7bWludXRlc31gO1xuXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiYnV0dG9uXCIsIFwidGFzay1mb3JtLXN1Ym1pdFwiLCBcIkFkZFwiKTtcbiAgY29uc3QgY2xvc2VUYXNrRm9ybSA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiYnV0dG9uXCIsIFwiY2xvc2UtdGFzay1mb3JtXCIsIFwi4qiJXCIpO1xuXG4gIGZvcm1FbGVtLmFwcGVuZChcbiAgICB0aXRsZUlucHV0LFxuICAgIGRlc2NyaXB0aW9uSW5wdXQsXG4gICAgaW1wb3J0YW5jZUNvbnRhaW5lcixcbiAgICBkYXRlSW5wdXQsXG4gICAgc3VibWl0QnV0dG9uLFxuICAgIGNsb3NlVGFza0Zvcm1cbiAgKVxuXG4gIHRvZ2dsZU1vZGFsKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBmb3JtRWxlbSxcbiAgICB0aXRsZUlucHV0LFxuICAgIGRlc2NyaXB0aW9uSW5wdXQsXG4gICAgaW1wb3J0YW5jZUlucHV0LFxuICAgIGRhdGVJbnB1dCxcbiAgICBjbG9zZVRhc2tGb3JtXG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheVRhc2sodGFzaykge1xuICBcbiAgY29uc3QgdGFza0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiZGl2XCIsIFwidGFzay1jb250YWluZXJcIiwgXCJcIik7XG4gIHRhc2tDb250YWluZXIuYXBwZW5kKFxuICAgIGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiZGl2XCIsIFwidGFzay10aXRsZVwiLCB0YXNrLnRpdGxlKSxcbiAgICBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImRpdlwiLCBcInRhc2stZGVzY3JpcHRpb25cIiwgdGFzay5kZXNjcmlwdGlvbiksXG4gICAgY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJkaXZcIiwgXCJ0YXNrLWltcG9ydGFuY2VcIiwgdGFzay5pbXBvcnRhbmNlU3ltYm9sKSxcbiAgICBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImRpdlwiLCBcInRhc2stZGF0ZVwiLCB0YXNrLnRpbWVMZWZ0KCkpXG4gIClcbiAgbWFpbi5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcbn1cblxuXG5mdW5jdGlvbiBidWlsZFByb2plY3RGb3JtKCkge1xuICBjb25zdCBmb3JtRWxlbSA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiZm9ybVwiLCBcInByb2plY3QtZm9ybVwiLCBcIlwiKTtcbiAgYm9keS5hcHBlbmRDaGlsZChmb3JtRWxlbSk7XG5cbiAgY29uc3QgdGl0bGVMYWJlbCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwibGFiZWxcIiwgXCJwcm9qZWN0LXRpdGxlLWxhYmVsXCIsIFwiUHJvamVjdCBOYW1lXCIpO1xuICBjb25zdCB0aXRsZUlucHV0ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJpbnB1dFwiLCBcInByb2plY3QtdGl0bGUtaW5wdXRcIiwgXCJcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0LXRpdGxlLWlucHV0XCIpO1xuICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByb2plY3QtdGl0bGUtaW5wdXRcIik7XG5cbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJidXR0b25cIiwgXCJwcm9qZWN0LWZvcm0tc3VibWl0XCIsIFwiQWRkXCIpO1xuICBjb25zdCBjbG9zZVByb2plY3RGb3JtID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJidXR0b25cIiwgXCJjbG9zZS1wcm9qZWN0LWZvcm1cIiwgXCLiqIlcIik7XG5cbiAgZm9ybUVsZW0uYXBwZW5kKFxuICAgIHRpdGxlTGFiZWwsXG4gICAgdGl0bGVJbnB1dCxcbiAgICBzdWJtaXRCdXR0b24sXG4gICAgY2xvc2VQcm9qZWN0Rm9ybVxuICApXG5cbiAgdG9nZ2xlTW9kYWwoKTtcblxuICByZXR1cm4ge1xuICAgIGZvcm1FbGVtLFxuICAgIHRpdGxlSW5wdXQsXG4gICAgY2xvc2VQcm9qZWN0Rm9ybVxuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0KHByb2plY3QpIHtcbiAgY29uc3QgcHJvamVjdEVsZW0gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImRpdlwiLCBcInByb2plY3RcIiwgcHJvamVjdC50aXRsZSk7XG4gIHByb2plY3RFbGVtLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1uYW1lXCIsIHByb2plY3QudGl0bGUpO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RFbGVtKTtcbiAgaGlnaGxpZ2h0UHJvamVjdChwcm9qZWN0RWxlbSk7XG4gIHJldHVybiBwcm9qZWN0RWxlbTtcbn1cblxubGV0IHByZXZpb3VzUHJvamVjdEVsZW07XG5mdW5jdGlvbiBoaWdobGlnaHRQcm9qZWN0KHByb2plY3RFbGVtKSB7XG4gIGlmIChwcmV2aW91c1Byb2plY3RFbGVtICE9PSB1bmRlZmluZWQpIHByZXZpb3VzUHJvamVjdEVsZW0uY2xhc3NMaXN0LnRvZ2dsZShcImhpZ2hsaWdodGVkXCIpO1xuICBwcm9qZWN0RWxlbS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlnaGxpZ2h0ZWRcIik7XG4gIHByZXZpb3VzUHJvamVjdEVsZW0gPSBwcm9qZWN0RWxlbTtcbn1cblxuXG5mdW5jdGlvbiByZW1vdmVGb3JtKGZvcm0pIHtcbiAgZm9ybS5yZW1vdmUoKTtcbiAgdG9nZ2xlTW9kYWwoKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlTW9kYWwoKSB7XG4gIG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBidWlsZFRhc2tGb3JtLFxuICBkaXNwbGF5VGFzayxcbiAgYnVpbGRQcm9qZWN0Rm9ybSxcbiAgZGlzcGxheVByb2plY3QsXG4gIGhpZ2hsaWdodFByb2plY3QsXG4gIHJlbW92ZUZvcm0sXG4gIHNob3dUYXNrRm9ybSxcbiAgc2hvd1Byb2plY3RGb3JtLFxuICBtb2RhbFxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KGVsZW1UeXBlLCBjbGFzc05hbWUsIGNvbnRlbnQpIHtcbiAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbVR5cGUpO1xuICB0ZW1wLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgdGVtcC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gIHJldHVybiB0ZW1wO1xufSIsImNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGltcG9ydGFuY2UsIGR1ZURhdGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuaW1wb3J0YW5jZSA9IGltcG9ydGFuY2U7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgfVxuXG4gIGdldCBpbXBvcnRhbmNlU3ltYm9sKCkge1xuICAgIGlmICh0aGlzLmltcG9ydGFuY2UpIHJldHVybiBcIiFcIjtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIHRpbWVMZWZ0KCkge1xuICAgIGNvbnN0IG1zTGVmdCA9IG5ldyBEYXRlKHRoaXMuZHVlRGF0ZSkgLSBuZXcgRGF0ZSgpO1xuICAgIGlmIChtc0xlZnQgPCAtNjAwMDApIHJldHVybiBcIvCflZAgUGFzdCBEdWVcIjtcbiAgICBjb25zdCBtaW51dGVzTGVmdCA9IE1hdGguY2VpbChtc0xlZnQgLyAxMDAwIC8gNjApO1xuICAgIGlmIChtaW51dGVzTGVmdCA8IDYwKSByZXR1cm4gYPCflZAgJHttaW51dGVzTGVmdH0gbWludXRlcyBsZWZ0YDtcbiAgICBjb25zdCBocnNMZWZ0ID0gTWF0aC5jZWlsKG1pbnV0ZXNMZWZ0IC8gNjApO1xuICAgIGlmIChocnNMZWZ0IDwgMjQpIHJldHVybiBg8J+VkCAke2hyc0xlZnR9IGhvdXJzIGxlZnRgO1xuICAgIHJldHVybiBg8J+VkCAke01hdGguY2VpbChocnNMZWZ0IC8gMjQpfSBkYXlzIGxlZnRgO1xuICB9XG59XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGltcG9ydGFuY2UsIGR1ZURhdGUpIHtcbiAgcmV0dXJuIG5ldyBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgaW1wb3J0YW5jZSwgZHVlRGF0ZSk7XG59XG5cblxuY29uc3QgYWxsUHJvamVjdHMgPSBbXTtcblxuZnVuY3Rpb24gYWRkVGFza1RvUHJvamVjdCh0YXNrLCBwcm9qZWN0KSB7XG4gIHByb2plY3QudGFza3MucHVzaCh0YXNrKTtcbn1cblxuZnVuY3Rpb24gYWRkTmV3UHJvamVjdCh0aXRsZSkge1xuICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUpO1xuICBhbGxQcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICByZXR1cm4gcHJvamVjdDtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNyZWF0ZVRhc2ssXG4gIGFkZFRhc2tUb1Byb2plY3QsXG4gIGFkZE5ld1Byb2plY3Rcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=