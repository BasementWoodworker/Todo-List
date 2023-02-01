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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --blue: rgb(51, 146, 206);\n  --blue-border: rgb(2, 80, 128);\n  --lightgrey: rgb(235, 235, 235);\n  --modal: rgba(180, 180, 180, 0.3);\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  text-decoration: none;\n}\n\nbody {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-template-rows: 70px 1fr;\n}\n\n/* Header */\nheader {\n  grid-column: 1 / 3;\n  background-color: var(--blue);\n}\n\nheader > a {\n  color: white;\n  font-size: 48px;\n}\n\n/* Sidebar */\n.sidebar {\n  background-color: var(--lightgrey);\n}\n\nspan.projects-heading {\n  color: var(--blue);\n  font-size: 48px;\n}\n\nbutton.show-project-form {\n  background-color: var(--blue);\n  color: white;\n  font-size: 24px;\n  height: 30px;\n  width: 30px;\n  border: none;\n  border-radius: 50%;\n}\n\n.project-form {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 2;\n}\n\nbutton.close-project-form {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n.project-navigation > .project {\n  width: 90%;\n  background-color: white;\n  border: 2px solid darkgrey;\n  border-radius: 4px;\n  padding: 4px;\n  margin: 5%;\n}\n\n.project-navigation > .project:hover {\n  border-color: var(--blue);\n}\n\n.project-navigation > .project.highlighted {\n  background-color: var(--blue);\n  border-color: var(--blue-border);\n}\n\n/* Main */\nmain {\n  background-color: white;\n}\n\n/* Main -> Task Form */\nmain > button.show-task-form {\n  position: absolute;\n  bottom: 50px;\n  right: 50px;\n\n  color: white;\n  background-color: var(--blue);\n  font-size: 48px;\n  height: 80px;\n  width: 80px;\n  border: solid 1px var(--lightgrey);\n  border-radius: 50%;\n\n}\n\n.task-form {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 2;\n\n  background-color: var(--lightgrey);\n  border: 2px solid darkgrey;\n  border-radius: 8px;\n  padding: 10px;\n}\n\n.task-form > *,\n.project-form > *,\n.task-edit-form > * {\n  display: block;\n}\n\nbutton.submit-task-form {\n  background-color: var(--blue);\n  color: white;\n  border-radius: 8px;\n  font-size: 24px;\n}\n\nbutton.close-task-form {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n/* Main -> Task Edit Form */\n\n.task-edit-form {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 2;\n\n  background-color: var(--lightgrey);\n  border: 2px solid darkgrey;\n  border-radius: 8px;\n  padding: 10px;\n}\n\nbutton.submit-edit-form {\n  background-color: var(--blue);\n  color: white;\n  border-radius: 8px;\n  font-size: 24px;\n}\n\nbutton.close-edit-form {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n/* Main -> Displayed Tasks */\n.task-container {\n  display: flex;\n  background-color: var(--lightgrey);\n  padding: 12px;\n  margin: 8px;\n  border-radius: 4px;\n}\n\n.task-title {\n  width: 30%;\n}\n\n.task-description {\n  width: 30%;\n}\n\n.task-importance {\n  position: relative;\n\n  color: rgb(226, 166, 0);\n  font-size: 24px;\n  padding: 0px 8px;\n}\n\n.task-importance:hover::before {\n  position: absolute;\n  top: 5px;\n  left: 15px;\n\n  content: \"Important\";\n  font-size: 12px;\n  color: darkgrey;\n}\n\n/* Modal */\n#modal {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: var(--modal);\n  z-index: 1;\n}\n\n#modal.hidden {\n  z-index: -1;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,8BAA8B;EAC9B,+BAA+B;EAC/B,iCAAiC;AACnC;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,4BAA4B;AAC9B;;AAEA,WAAW;AACX;EACE,kBAAkB;EAClB,6BAA6B;AAC/B;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB;;AAEA,YAAY;AACZ;EACE,kCAAkC;AACpC;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,QAAQ;AACV;;AAEA;EACE,UAAU;EACV,uBAAuB;EACvB,0BAA0B;EAC1B,kBAAkB;EAClB,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,6BAA6B;EAC7B,gCAAgC;AAClC;;AAEA,SAAS;AACT;EACE,uBAAuB;AACzB;;AAEA,sBAAsB;AACtB;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;;EAEX,YAAY;EACZ,6BAA6B;EAC7B,eAAe;EACf,YAAY;EACZ,WAAW;EACX,kCAAkC;EAClC,kBAAkB;;AAEpB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,UAAU;;EAEV,kCAAkC;EAClC,0BAA0B;EAC1B,kBAAkB;EAClB,aAAa;AACf;;AAEA;;;EAGE,cAAc;AAChB;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,QAAQ;AACV;;AAEA,2BAA2B;;AAE3B;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,UAAU;;EAEV,kCAAkC;EAClC,0BAA0B;EAC1B,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,QAAQ;AACV;;AAEA,4BAA4B;AAC5B;EACE,aAAa;EACb,kCAAkC;EAClC,aAAa;EACb,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,kBAAkB;;EAElB,uBAAuB;EACvB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,UAAU;;EAEV,oBAAoB;EACpB,eAAe;EACf,eAAe;AACjB;;AAEA,UAAU;AACV;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,8BAA8B;EAC9B,UAAU;AACZ;;AAEA;EACE,WAAW;AACb","sourcesContent":[":root {\n  --blue: rgb(51, 146, 206);\n  --blue-border: rgb(2, 80, 128);\n  --lightgrey: rgb(235, 235, 235);\n  --modal: rgba(180, 180, 180, 0.3);\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  text-decoration: none;\n}\n\nbody {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-template-rows: 70px 1fr;\n}\n\n/* Header */\nheader {\n  grid-column: 1 / 3;\n  background-color: var(--blue);\n}\n\nheader > a {\n  color: white;\n  font-size: 48px;\n}\n\n/* Sidebar */\n.sidebar {\n  background-color: var(--lightgrey);\n}\n\nspan.projects-heading {\n  color: var(--blue);\n  font-size: 48px;\n}\n\nbutton.show-project-form {\n  background-color: var(--blue);\n  color: white;\n  font-size: 24px;\n  height: 30px;\n  width: 30px;\n  border: none;\n  border-radius: 50%;\n}\n\n.project-form {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 2;\n}\n\nbutton.close-project-form {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n.project-navigation > .project {\n  width: 90%;\n  background-color: white;\n  border: 2px solid darkgrey;\n  border-radius: 4px;\n  padding: 4px;\n  margin: 5%;\n}\n\n.project-navigation > .project:hover {\n  border-color: var(--blue);\n}\n\n.project-navigation > .project.highlighted {\n  background-color: var(--blue);\n  border-color: var(--blue-border);\n}\n\n/* Main */\nmain {\n  background-color: white;\n}\n\n/* Main -> Task Form */\nmain > button.show-task-form {\n  position: absolute;\n  bottom: 50px;\n  right: 50px;\n\n  color: white;\n  background-color: var(--blue);\n  font-size: 48px;\n  height: 80px;\n  width: 80px;\n  border: solid 1px var(--lightgrey);\n  border-radius: 50%;\n\n}\n\n.task-form {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 2;\n\n  background-color: var(--lightgrey);\n  border: 2px solid darkgrey;\n  border-radius: 8px;\n  padding: 10px;\n}\n\n.task-form > *,\n.project-form > *,\n.task-edit-form > * {\n  display: block;\n}\n\nbutton.submit-task-form {\n  background-color: var(--blue);\n  color: white;\n  border-radius: 8px;\n  font-size: 24px;\n}\n\nbutton.close-task-form {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n/* Main -> Task Edit Form */\n\n.task-edit-form {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 2;\n\n  background-color: var(--lightgrey);\n  border: 2px solid darkgrey;\n  border-radius: 8px;\n  padding: 10px;\n}\n\nbutton.submit-edit-form {\n  background-color: var(--blue);\n  color: white;\n  border-radius: 8px;\n  font-size: 24px;\n}\n\nbutton.close-edit-form {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n/* Main -> Displayed Tasks */\n.task-container {\n  display: flex;\n  background-color: var(--lightgrey);\n  padding: 12px;\n  margin: 8px;\n  border-radius: 4px;\n}\n\n.task-title {\n  width: 30%;\n}\n\n.task-description {\n  width: 30%;\n}\n\n.task-importance {\n  position: relative;\n\n  color: rgb(226, 166, 0);\n  font-size: 24px;\n  padding: 0px 8px;\n}\n\n.task-importance:hover::before {\n  position: absolute;\n  top: 5px;\n  left: 15px;\n\n  content: \"Important\";\n  font-size: 12px;\n  color: darkgrey;\n}\n\n/* Modal */\n#modal {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: var(--modal);\n  z-index: 1;\n}\n\n#modal.hidden {\n  z-index: -1;\n}"],"sourceRoot":""}]);
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
addTask("Walk my dog", "description placeholder", false, "2023-02-05T11:00");
// Initial Filling End

function addTask(title, description, importance, dueDate) {
  const task = _modules_task_creation_and_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].createTask(title, description, importance, dueDate, currentProject);
  _modules_task_creation_and_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].addTaskToProject(task, currentProject);
  const taskDOM = _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].displayTask(task);

  taskDOM.editTaskButton.addEventListener("click", () => {
    currentForm = _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].buildTaskEdit(task);
    currentForm.formElem.addEventListener("submit", (event) => {
      event.preventDefault();
      editTask(task, taskDOM.taskContainer);
      _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].removeForm(currentForm.formElem);
    })
    currentForm.closeEditForm.addEventListener("click", () => _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].removeForm(currentForm.formElem));
  })
  taskDOM.deleteTaskButton.addEventListener("click", (event) => {
    const taskElem = event.target.parentNode;
    _modules_task_creation_and_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].removeTask(task);
    _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].removeTask(taskElem)
  })
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

function addProject(projectName) {
  const project = _modules_task_creation_and_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].createNewProject(projectName);
  const projectElem = _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].displayProject(project);
  selectProject(project, projectElem);
  projectElem.addEventListener("click", () => selectProject(project, projectElem));

  return project;
}

function selectProject(project, projectElem) {
  currentProject = project;
  _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].highlightProject(projectElem);
}


_modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].showTaskForm.addEventListener("click", () => {
  currentForm = _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].buildTaskForm();
  currentForm.formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    addTask(
      currentForm.titleInput.value, 
      currentForm.descriptionInput.value, 
      currentForm.importanceInput.checked,
      currentForm.dateInput.value,
    );
    _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].removeForm(currentForm.formElem);
  });
  currentForm.closeTaskForm.addEventListener("click", () => _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].removeForm(currentForm.formElem));
})


_modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].showProjectForm.addEventListener("click", () => {
  currentForm = _modules_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"].buildProjectForm();
  currentForm.formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    const projectName = event.target.children[1].value
    currentProject = addProject(projectName);
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
const projectNav = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("nav", "project-navigation", "");
const projectsTop = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "projects-top-container", "");
const projectsHeading = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("span", "projects-heading", "Projects");
const showProjectForm = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "show-project-form", "+");
projectsTop.append(
  projectsHeading,
  showProjectForm
)
sidebar.append(
  projectsTop,
  projectNav,
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
  main.appendChild(taskContainer);
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

function removeTask(taskElem) {
  taskElem.remove();
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
  projectNav.appendChild(projectElem);
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
  buildTaskEdit,
  editTask,
  removeTask,
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
const allProjects = [];

class Task {
  constructor(title, description, importance, dueDate, itsProject) {
    this.title = title;
    this.description = description;
    this.importance = importance;
    this.dueDate = dueDate;
    this.itsProject = itsProject;
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

function createTask(title, description, importance, dueDate, itsProject) {
  return new Task(title, description, importance, dueDate, itsProject);
}

function editTask(task, newTitle, newDescription, newImportance, newDate) {
  task.title = newTitle;
  task.description = newDescription;
  task.importance = newImportance;
  task.dueDate = newDate;
}

function addTaskToProject(task, project) {
  project.tasks.push(task);
}

function removeTask(task) {
  const taskArray = task.itsProject.tasks;
  const taskIndex = taskArray.indexOf(task);
  taskArray.splice(taskIndex, 1);
}


function createNewProject(title) {
  const project = new Project(title);
  allProjects.push(project);
  return project;
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  createTask,
  editTask,
  addTaskToProject,
  removeTask,
  createNewProject
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL0RPTS1tYW5pcHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY3JlYXRlLWVsZW1lbnQtY3VzdG9tLWZ1bmN0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2stY3JlYXRpb24tYW5kLXN0b3JhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWJsdWU6IHJnYig1MSwgMTQ2LCAyMDYpO1xcbiAgLS1ibHVlLWJvcmRlcjogcmdiKDIsIDgwLCAxMjgpO1xcbiAgLS1saWdodGdyZXk6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG4gIC0tbW9kYWw6IHJnYmEoMTgwLCAxODAsIDE4MCwgMC4zKTtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDFmcjtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cXG5cXG5oZWFkZXIgPiBhIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG59XFxuXFxuLyogU2lkZWJhciAqL1xcbi5zaWRlYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Z3JleSk7XFxufVxcblxcbnNwYW4ucHJvamVjdHMtaGVhZGluZyB7XFxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBmb250LXNpemU6IDQ4cHg7XFxufVxcblxcbmJ1dHRvbi5zaG93LXByb2plY3QtZm9ybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgei1pbmRleDogMjtcXG59XFxuXFxuYnV0dG9uLmNsb3NlLXByb2plY3QtZm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG59XFxuXFxuLnByb2plY3QtbmF2aWdhdGlvbiA+IC5wcm9qZWN0IHtcXG4gIHdpZHRoOiA5MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGRhcmtncmV5O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgcGFkZGluZzogNHB4O1xcbiAgbWFyZ2luOiA1JTtcXG59XFxuXFxuLnByb2plY3QtbmF2aWdhdGlvbiA+IC5wcm9qZWN0OmhvdmVyIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbi5wcm9qZWN0LW5hdmlnYXRpb24gPiAucHJvamVjdC5oaWdobGlnaHRlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZS1ib3JkZXIpO1xcbn1cXG5cXG4vKiBNYWluICovXFxubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogTWFpbiAtPiBUYXNrIEZvcm0gKi9cXG5tYWluID4gYnV0dG9uLnNob3ctdGFzay1mb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogNTBweDtcXG4gIHJpZ2h0OiA1MHB4O1xcblxcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBmb250LXNpemU6IDQ4cHg7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB3aWR0aDogODBweDtcXG4gIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWxpZ2h0Z3JleSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuXFxufVxcblxcbi50YXNrLWZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB6LWluZGV4OiAyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRncmV5KTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGRhcmtncmV5O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnRhc2stZm9ybSA+ICosXFxuLnByb2plY3QtZm9ybSA+ICosXFxuLnRhc2stZWRpdC1mb3JtID4gKiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYnV0dG9uLnN1Ym1pdC10YXNrLWZvcm0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbmJ1dHRvbi5jbG9zZS10YXNrLWZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbi8qIE1haW4gLT4gVGFzayBFZGl0IEZvcm0gKi9cXG5cXG4udGFzay1lZGl0LWZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB6LWluZGV4OiAyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRncmV5KTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGRhcmtncmV5O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuYnV0dG9uLnN1Ym1pdC1lZGl0LWZvcm0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbmJ1dHRvbi5jbG9zZS1lZGl0LWZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbi8qIE1haW4gLT4gRGlzcGxheWVkIFRhc2tzICovXFxuLnRhc2stY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGdyZXkpO1xcbiAgcGFkZGluZzogMTJweDtcXG4gIG1hcmdpbjogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4udGFzay10aXRsZSB7XFxuICB3aWR0aDogMzAlO1xcbn1cXG5cXG4udGFzay1kZXNjcmlwdGlvbiB7XFxuICB3aWR0aDogMzAlO1xcbn1cXG5cXG4udGFzay1pbXBvcnRhbmNlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIGNvbG9yOiByZ2IoMjI2LCAxNjYsIDApO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgcGFkZGluZzogMHB4IDhweDtcXG59XFxuXFxuLnRhc2staW1wb3J0YW5jZTpob3Zlcjo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNXB4O1xcbiAgbGVmdDogMTVweDtcXG5cXG4gIGNvbnRlbnQ6IFxcXCJJbXBvcnRhbnRcXFwiO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6IGRhcmtncmV5O1xcbn1cXG5cXG4vKiBNb2RhbCAqL1xcbiNtb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vZGFsKTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbiNtb2RhbC5oaWRkZW4ge1xcbiAgei1pbmRleDogLTE7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixpQ0FBaUM7QUFDbkM7O0FBRUE7O0VBRUUsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qiw0QkFBNEI7QUFDOUI7O0FBRUEsV0FBVztBQUNYO0VBQ0Usa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBLFlBQVk7QUFDWjtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixnQ0FBZ0M7QUFDbEM7O0FBRUEsU0FBUztBQUNUO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBLHNCQUFzQjtBQUN0QjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVzs7RUFFWCxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLGtDQUFrQztFQUNsQyxrQkFBa0I7O0FBRXBCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTs7RUFFVixrQ0FBa0M7RUFDbEMsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7OztFQUdFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0FBQ1Y7O0FBRUEsMkJBQTJCOztBQUUzQjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7O0VBRVYsa0NBQWtDO0VBQ2xDLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtBQUNWOztBQUVBLDRCQUE0QjtBQUM1QjtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7O0VBRWxCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVOztFQUVWLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQSxVQUFVO0FBQ1Y7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tYmx1ZTogcmdiKDUxLCAxNDYsIDIwNik7XFxuICAtLWJsdWUtYm9yZGVyOiByZ2IoMiwgODAsIDEyOCk7XFxuICAtLWxpZ2h0Z3JleTogcmdiKDIzNSwgMjM1LCAyMzUpO1xcbiAgLS1tb2RhbDogcmdiYSgxODAsIDE4MCwgMTgwLCAwLjMpO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggMWZyO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG5oZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbmhlYWRlciA+IGEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiA0OHB4O1xcbn1cXG5cXG4vKiBTaWRlYmFyICovXFxuLnNpZGViYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRncmV5KTtcXG59XFxuXFxuc3Bhbi5wcm9qZWN0cy1oZWFkaW5nIHtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG59XFxuXFxuYnV0dG9uLnNob3ctcHJvamVjdC1mb3JtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG5idXR0b24uY2xvc2UtcHJvamVjdC1mb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4ucHJvamVjdC1uYXZpZ2F0aW9uID4gLnByb2plY3Qge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAycHggc29saWQgZGFya2dyZXk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBwYWRkaW5nOiA0cHg7XFxuICBtYXJnaW46IDUlO1xcbn1cXG5cXG4ucHJvamVjdC1uYXZpZ2F0aW9uID4gLnByb2plY3Q6aG92ZXIge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLnByb2plY3QtbmF2aWdhdGlvbiA+IC5wcm9qZWN0LmhpZ2hsaWdodGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlLWJvcmRlcik7XFxufVxcblxcbi8qIE1haW4gKi9cXG5tYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBNYWluIC0+IFRhc2sgRm9ybSAqL1xcbm1haW4gPiBidXR0b24uc2hvdy10YXNrLWZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA1MHB4O1xcbiAgcmlnaHQ6IDUwcHg7XFxuXFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG4gIGhlaWdodDogODBweDtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tbGlnaHRncmV5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXG59XFxuXFxuLnRhc2stZm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHotaW5kZXg6IDI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGdyZXkpO1xcbiAgYm9yZGVyOiAycHggc29saWQgZGFya2dyZXk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4udGFzay1mb3JtID4gKixcXG4ucHJvamVjdC1mb3JtID4gKixcXG4udGFzay1lZGl0LWZvcm0gPiAqIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5idXR0b24uc3VibWl0LXRhc2stZm9ybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuYnV0dG9uLmNsb3NlLXRhc2stZm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG59XFxuXFxuLyogTWFpbiAtPiBUYXNrIEVkaXQgRm9ybSAqL1xcblxcbi50YXNrLWVkaXQtZm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHotaW5kZXg6IDI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGdyZXkpO1xcbiAgYm9yZGVyOiAycHggc29saWQgZGFya2dyZXk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG5idXR0b24uc3VibWl0LWVkaXQtZm9ybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuYnV0dG9uLmNsb3NlLWVkaXQtZm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG59XFxuXFxuLyogTWFpbiAtPiBEaXNwbGF5ZWQgVGFza3MgKi9cXG4udGFzay1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Z3JleSk7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgbWFyZ2luOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi50YXNrLXRpdGxlIHtcXG4gIHdpZHRoOiAzMCU7XFxufVxcblxcbi50YXNrLWRlc2NyaXB0aW9uIHtcXG4gIHdpZHRoOiAzMCU7XFxufVxcblxcbi50YXNrLWltcG9ydGFuY2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgY29sb3I6IHJnYigyMjYsIDE2NiwgMCk7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBwYWRkaW5nOiAwcHggOHB4O1xcbn1cXG5cXG4udGFzay1pbXBvcnRhbmNlOmhvdmVyOjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1cHg7XFxuICBsZWZ0OiAxNXB4O1xcblxcbiAgY29udGVudDogXFxcIkltcG9ydGFudFxcXCI7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogZGFya2dyZXk7XFxufVxcblxcbi8qIE1vZGFsICovXFxuI21vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9kYWwpO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuI21vZGFsLmhpZGRlbiB7XFxuICB6LWluZGV4OiAtMTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFRhc2tfTW9kdWxlIGZyb20gXCIuL21vZHVsZXMvdGFzay1jcmVhdGlvbi1hbmQtc3RvcmFnZS5qc1wiO1xuaW1wb3J0IERPTV9Nb2R1bGUgZnJvbSBcIi4vbW9kdWxlcy9ET00tbWFuaXB1bGF0aW9uLmpzXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5cbi8vIE1haW4gTG9naWNcbmxldCBjdXJyZW50Rm9ybTtcbmxldCBjdXJyZW50UHJvamVjdDtcblxuLy8gSW5pdGlhbCBGaWxsaW5nXG5jdXJyZW50UHJvamVjdCA9IGFkZFByb2plY3QoXCJnZW5lcmFsLXRhc2tzXCIpO1xuYWRkVGFzayhcIldhbGsgbXkgZG9nXCIsIFwiZGVzY3JpcHRpb24gcGxhY2Vob2xkZXJcIiwgZmFsc2UsIFwiMjAyMy0wMi0wNVQxMTowMFwiKTtcbi8vIEluaXRpYWwgRmlsbGluZyBFbmRcblxuZnVuY3Rpb24gYWRkVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGltcG9ydGFuY2UsIGR1ZURhdGUpIHtcbiAgY29uc3QgdGFzayA9IFRhc2tfTW9kdWxlLmNyZWF0ZVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBpbXBvcnRhbmNlLCBkdWVEYXRlLCBjdXJyZW50UHJvamVjdCk7XG4gIFRhc2tfTW9kdWxlLmFkZFRhc2tUb1Byb2plY3QodGFzaywgY3VycmVudFByb2plY3QpO1xuICBjb25zdCB0YXNrRE9NID0gRE9NX01vZHVsZS5kaXNwbGF5VGFzayh0YXNrKTtcblxuICB0YXNrRE9NLmVkaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY3VycmVudEZvcm0gPSBET01fTW9kdWxlLmJ1aWxkVGFza0VkaXQodGFzayk7XG4gICAgY3VycmVudEZvcm0uZm9ybUVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlZGl0VGFzayh0YXNrLCB0YXNrRE9NLnRhc2tDb250YWluZXIpO1xuICAgICAgRE9NX01vZHVsZS5yZW1vdmVGb3JtKGN1cnJlbnRGb3JtLmZvcm1FbGVtKTtcbiAgICB9KVxuICAgIGN1cnJlbnRGb3JtLmNsb3NlRWRpdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IERPTV9Nb2R1bGUucmVtb3ZlRm9ybShjdXJyZW50Rm9ybS5mb3JtRWxlbSkpO1xuICB9KVxuICB0YXNrRE9NLmRlbGV0ZVRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHRhc2tFbGVtID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgVGFza19Nb2R1bGUucmVtb3ZlVGFzayh0YXNrKTtcbiAgICBET01fTW9kdWxlLnJlbW92ZVRhc2sodGFza0VsZW0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKHRhc2ssIHRhc2tDb250YWluZXIpIHtcbiAgVGFza19Nb2R1bGUuZWRpdFRhc2soXG4gICAgdGFzaywgXG4gICAgY3VycmVudEZvcm0udGl0bGVJbnB1dC52YWx1ZSxcbiAgICBjdXJyZW50Rm9ybS5kZXNjcmlwdGlvbklucHV0LnZhbHVlLFxuICAgIGN1cnJlbnRGb3JtLmltcG9ydGFuY2VJbnB1dC5jaGVja2VkLFxuICAgIGN1cnJlbnRGb3JtLmRhdGVJbnB1dC52YWx1ZVxuICApO1xuICBET01fTW9kdWxlLmVkaXRUYXNrKHRhc2ssIHRhc2tDb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gIGNvbnN0IHByb2plY3QgPSBUYXNrX01vZHVsZS5jcmVhdGVOZXdQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgY29uc3QgcHJvamVjdEVsZW0gPSBET01fTW9kdWxlLmRpc3BsYXlQcm9qZWN0KHByb2plY3QpO1xuICBzZWxlY3RQcm9qZWN0KHByb2plY3QsIHByb2plY3RFbGVtKTtcbiAgcHJvamVjdEVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHNlbGVjdFByb2plY3QocHJvamVjdCwgcHJvamVjdEVsZW0pKTtcblxuICByZXR1cm4gcHJvamVjdDtcbn1cblxuZnVuY3Rpb24gc2VsZWN0UHJvamVjdChwcm9qZWN0LCBwcm9qZWN0RWxlbSkge1xuICBjdXJyZW50UHJvamVjdCA9IHByb2plY3Q7XG4gIERPTV9Nb2R1bGUuaGlnaGxpZ2h0UHJvamVjdChwcm9qZWN0RWxlbSk7XG59XG5cblxuRE9NX01vZHVsZS5zaG93VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY3VycmVudEZvcm0gPSBET01fTW9kdWxlLmJ1aWxkVGFza0Zvcm0oKTtcbiAgY3VycmVudEZvcm0uZm9ybUVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGFkZFRhc2soXG4gICAgICBjdXJyZW50Rm9ybS50aXRsZUlucHV0LnZhbHVlLCBcbiAgICAgIGN1cnJlbnRGb3JtLmRlc2NyaXB0aW9uSW5wdXQudmFsdWUsIFxuICAgICAgY3VycmVudEZvcm0uaW1wb3J0YW5jZUlucHV0LmNoZWNrZWQsXG4gICAgICBjdXJyZW50Rm9ybS5kYXRlSW5wdXQudmFsdWUsXG4gICAgKTtcbiAgICBET01fTW9kdWxlLnJlbW92ZUZvcm0oY3VycmVudEZvcm0uZm9ybUVsZW0pO1xuICB9KTtcbiAgY3VycmVudEZvcm0uY2xvc2VUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gRE9NX01vZHVsZS5yZW1vdmVGb3JtKGN1cnJlbnRGb3JtLmZvcm1FbGVtKSk7XG59KVxuXG5cbkRPTV9Nb2R1bGUuc2hvd1Byb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGN1cnJlbnRGb3JtID0gRE9NX01vZHVsZS5idWlsZFByb2plY3RGb3JtKCk7XG4gIGN1cnJlbnRGb3JtLmZvcm1FbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGV2ZW50LnRhcmdldC5jaGlsZHJlblsxXS52YWx1ZVxuICAgIGN1cnJlbnRQcm9qZWN0ID0gYWRkUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgRE9NX01vZHVsZS5yZW1vdmVGb3JtKGN1cnJlbnRGb3JtLmZvcm1FbGVtKTtcbiAgfSk7XG4gIGN1cnJlbnRGb3JtLmNsb3NlUHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IERPTV9Nb2R1bGUucmVtb3ZlRm9ybShjdXJyZW50Rm9ybS5mb3JtRWxlbSkpO1xufSk7XG5cblxuRE9NX01vZHVsZS5tb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gRE9NX01vZHVsZS5yZW1vdmVGb3JtKGN1cnJlbnRGb3JtLmZvcm1FbGVtKSk7IiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50IGZyb20gXCIuL2NyZWF0ZS1lbGVtZW50LWN1c3RvbS1mdW5jdGlvbi5qc1wiXG5cbi8vIEluaXRpYWwgcGFnZSBidWlsZFxuY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5cbi8vIEhlYWRlclxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbmNvbnN0IGhlYWRlckxpbmsgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImFcIiwgXCJcIiwgXCJUb2RvIExpc3RcIik7XG5oZWFkZXJMaW5rLmhyZWYgPSBcIlwiO1xuaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckxpbmspO1xuXG4vLyBTaWRlYmFyXG5jb25zdCBzaWRlYmFyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJuYXZcIiwgXCJzaWRlYmFyXCIsIFwiXCIpO1xuY29uc3QgcHJvamVjdE5hdiA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwibmF2XCIsIFwicHJvamVjdC1uYXZpZ2F0aW9uXCIsIFwiXCIpO1xuY29uc3QgcHJvamVjdHNUb3AgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImRpdlwiLCBcInByb2plY3RzLXRvcC1jb250YWluZXJcIiwgXCJcIik7XG5jb25zdCBwcm9qZWN0c0hlYWRpbmcgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcInNwYW5cIiwgXCJwcm9qZWN0cy1oZWFkaW5nXCIsIFwiUHJvamVjdHNcIik7XG5jb25zdCBzaG93UHJvamVjdEZvcm0gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImJ1dHRvblwiLCBcInNob3ctcHJvamVjdC1mb3JtXCIsIFwiK1wiKTtcbnByb2plY3RzVG9wLmFwcGVuZChcbiAgcHJvamVjdHNIZWFkaW5nLFxuICBzaG93UHJvamVjdEZvcm1cbilcbnNpZGViYXIuYXBwZW5kKFxuICBwcm9qZWN0c1RvcCxcbiAgcHJvamVjdE5hdixcbilcblxuLy8gTWFpblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuY29uc3Qgc2hvd1Rhc2tGb3JtID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJidXR0b25cIiwgXCJzaG93LXRhc2stZm9ybVwiLCBcIitcIik7XG5tYWluLmFwcGVuZENoaWxkKHNob3dUYXNrRm9ybSk7XG5cbi8vIE1vZGFsXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5tb2RhbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1vZGFsXCIpO1xubW9kYWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblxuYm9keS5hcHBlbmQoXG4gIGhlYWRlcixcbiAgc2lkZWJhcixcbiAgbWFpbixcbiAgbW9kYWxcbilcbi8vIEluaXRpYWwgYnVpbGQgZW5kXG5cbmZ1bmN0aW9uIGJ1aWxkVGFza0Zvcm0oKSB7XG4gIGNvbnN0IGZvcm1FbGVtID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJmb3JtXCIsIFwidGFzay1mb3JtXCIsIFwiXCIpO1xuICBib2R5LmFwcGVuZENoaWxkKGZvcm1FbGVtKTtcblxuICBjb25zdCB0aXRsZUlucHV0ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJpbnB1dFwiLCBcInRpdGxlLWlucHV0XCIsIFwiXCIpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiVGFza1wiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRGVzY3JpcHRpb25cIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIDMwMCk7XG5cbiAgY29uc3QgaW1wb3J0YW5jZUxhYmVsID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJsYWJlbFwiLCBcImltcG9ydGFuY2UtbGFiZWxcIiwgXCJJbXBvcnRhbnRcIik7XG4gIGNvbnN0IGltcG9ydGFuY2VJbnB1dCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiaW5wdXRcIiwgXCJpbXBvcnRhbmNlLWlucHV0XCIsIFwiXCIpO1xuICBpbXBvcnRhbmNlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICBpbXBvcnRhbmNlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbXBvcnRhbmNlLWlucHV0XCIpO1xuICBpbXBvcnRhbmNlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiaW1wb3J0YW5jZS1pbnB1dFwiKTtcbiAgY29uc3QgaW1wb3J0YW5jZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiZGl2XCIsIFwiaW1wb3J0YW5jZS1jb250YWluZXJcIiwgXCJcIilcbiAgaW1wb3J0YW5jZUNvbnRhaW5lci5hcHBlbmQoaW1wb3J0YW5jZUxhYmVsLCBpbXBvcnRhbmNlSW5wdXQpO1xuXG4gIGNvbnN0IGRhdGVJbnB1dCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiaW5wdXRcIiwgXCJkYXRlLWlucHV0XCIsIFwiXCIpO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGV0aW1lLWxvY2FsXCIpO1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgY29uc3QgbW9udGggPSAoZGF0ZS5nZXRNb250aCgpKzEpIDwgMTAgPyBgMCR7ZGF0ZS5nZXRNb250aCgpKzF9YCA6IGRhdGUuZ2V0TW9udGgoKSsxO1xuICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKSA8IDEwID8gYDAke2RhdGUuZ2V0RGF0ZSgpfWAgOiBkYXRlLmdldERhdGUoKTtcbiAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCkgPCAxMCA/IGAwJHtkYXRlLmdldEhvdXJzKCl9YCA6IGRhdGUuZ2V0SG91cnMoKTtcbiAgY29uc3QgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpIDwgMTAgPyBgMCR7ZGF0ZS5nZXRNaW51dGVzKCl9YCA6IGRhdGUuZ2V0TWludXRlcygpO1xuICBkYXRlSW5wdXQudmFsdWUgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1UJHtob3Vyc306JHttaW51dGVzfWA7XG5cbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJidXR0b25cIiwgXCJzdWJtaXQtdGFzay1mb3JtXCIsIFwiQWRkXCIpO1xuICBjb25zdCBjbG9zZVRhc2tGb3JtID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJidXR0b25cIiwgXCJjbG9zZS10YXNrLWZvcm1cIiwgXCLiqIlcIik7XG5cbiAgZm9ybUVsZW0uYXBwZW5kKFxuICAgIHRpdGxlSW5wdXQsXG4gICAgZGVzY3JpcHRpb25JbnB1dCxcbiAgICBpbXBvcnRhbmNlQ29udGFpbmVyLFxuICAgIGRhdGVJbnB1dCxcbiAgICBzdWJtaXRCdXR0b24sXG4gICAgY2xvc2VUYXNrRm9ybVxuICApXG5cbiAgdG9nZ2xlTW9kYWwoKTtcblxuICByZXR1cm4ge1xuICAgIGZvcm1FbGVtLFxuICAgIHRpdGxlSW5wdXQsXG4gICAgZGVzY3JpcHRpb25JbnB1dCxcbiAgICBpbXBvcnRhbmNlSW5wdXQsXG4gICAgZGF0ZUlucHV0LFxuICAgIGNsb3NlVGFza0Zvcm1cbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5VGFzayh0YXNrKSB7XG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImRpdlwiLCBcInRhc2stY29udGFpbmVyXCIsIFwiXCIpO1xuICBtYWluLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICBjb25zdCBlZGl0VGFza0J1dHRvbiA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiYnV0dG9uXCIsIFwiZWRpdC10YXNrXCIsIFwiRURJVFwiKTtcbiAgY29uc3QgZGVsZXRlVGFza0J1dHRvbiA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiYnV0dG9uXCIsIFwiZGVsZXRlLXRhc2tcIiwgXCJ4XCIpO1xuICB0YXNrQ29udGFpbmVyLmFwcGVuZChcbiAgICBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImRpdlwiLCBcInRhc2stdGl0bGVcIiwgdGFzay50aXRsZSksXG4gICAgY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJkaXZcIiwgXCJ0YXNrLWRlc2NyaXB0aW9uXCIsIHRhc2suZGVzY3JpcHRpb24pLFxuICAgIGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiZGl2XCIsIFwidGFzay1pbXBvcnRhbmNlXCIsIHRhc2suaW1wb3J0YW5jZVN5bWJvbCksXG4gICAgY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJkaXZcIiwgXCJ0YXNrLWRhdGVcIiwgdGFzay50aW1lTGVmdCgpKSxcbiAgICBlZGl0VGFza0J1dHRvbixcbiAgICBkZWxldGVUYXNrQnV0dG9uXG4gIClcblxuICByZXR1cm4ge1xuICAgIHRhc2tDb250YWluZXIsXG4gICAgZWRpdFRhc2tCdXR0b24sXG4gICAgZGVsZXRlVGFza0J1dHRvblxuICB9XG59XG5cbmZ1bmN0aW9uIGJ1aWxkVGFza0VkaXQodGFzaykge1xuICBjb25zdCBmb3JtRWxlbSA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiZm9ybVwiLCBcInRhc2stZWRpdC1mb3JtXCIsIFwiXCIpO1xuICBib2R5LmFwcGVuZENoaWxkKGZvcm1FbGVtKTtcblxuICBjb25zdCB0aXRsZUlucHV0ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJpbnB1dFwiLCBcInRpdGxlLWlucHV0XCIsIFwiXCIpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHRhc2sudGl0bGUpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQudGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCAzMDApO1xuXG4gIGNvbnN0IGltcG9ydGFuY2VMYWJlbCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwibGFiZWxcIiwgXCJpbXBvcnRhbmNlLWxhYmVsXCIsIFwiSW1wb3J0YW50XCIpO1xuICBjb25zdCBpbXBvcnRhbmNlSW5wdXQgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImlucHV0XCIsIFwiaW1wb3J0YW5jZS1pbnB1dFwiLCBcIlwiKTtcbiAgaW1wb3J0YW5jZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgaW1wb3J0YW5jZUlucHV0LmNoZWNrZWQgPSB0YXNrLmltcG9ydGFuY2U7XG4gIGltcG9ydGFuY2VJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImltcG9ydGFuY2UtaW5wdXRcIik7XG4gIGltcG9ydGFuY2VMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJpbXBvcnRhbmNlLWlucHV0XCIpO1xuICBjb25zdCBpbXBvcnRhbmNlQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJkaXZcIiwgXCJpbXBvcnRhbmNlLWNvbnRhaW5lclwiLCBcIlwiKVxuICBpbXBvcnRhbmNlQ29udGFpbmVyLmFwcGVuZChpbXBvcnRhbmNlTGFiZWwsIGltcG9ydGFuY2VJbnB1dCk7XG5cbiAgY29uc3QgZGF0ZUlucHV0ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJpbnB1dFwiLCBcImRhdGUtaW5wdXRcIiwgXCJcIik7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZXRpbWUtbG9jYWxcIik7XG4gIGRhdGVJbnB1dC52YWx1ZSA9IHRhc2suZHVlRGF0ZTtcblxuICBjb25zdCBzdWJtaXRCdXR0b24gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImJ1dHRvblwiLCBcInN1Ym1pdC1lZGl0LWZvcm1cIiwgXCJTYXZlXCIpO1xuICBjb25zdCBjbG9zZUVkaXRGb3JtID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJidXR0b25cIiwgXCJjbG9zZS1lZGl0LWZvcm1cIiwgXCLiqIlcIik7XG5cbiAgZm9ybUVsZW0uYXBwZW5kKFxuICAgIHRpdGxlSW5wdXQsXG4gICAgZGVzY3JpcHRpb25JbnB1dCxcbiAgICBpbXBvcnRhbmNlQ29udGFpbmVyLFxuICAgIGRhdGVJbnB1dCxcbiAgICBzdWJtaXRCdXR0b24sXG4gICAgY2xvc2VFZGl0Rm9ybVxuICApXG5cbiAgdG9nZ2xlTW9kYWwoKTtcblxuICByZXR1cm4ge1xuICAgIGZvcm1FbGVtLFxuICAgIHRpdGxlSW5wdXQsXG4gICAgZGVzY3JpcHRpb25JbnB1dCxcbiAgICBpbXBvcnRhbmNlSW5wdXQsXG4gICAgZGF0ZUlucHV0LFxuICAgIGNsb3NlRWRpdEZvcm1cbiAgfVxufVxuXG5mdW5jdGlvbiBlZGl0VGFzayh1cGRhdGVkVGFzaywgdGFza0NvbnRhaW5lcikge1xuICB0YXNrQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay10aXRsZVwiKS50ZXh0Q29udGVudCA9IHVwZGF0ZWRUYXNrLnRpdGxlO1xuICB0YXNrQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kZXNjcmlwdGlvblwiKS50ZXh0Q29udGVudCA9IHVwZGF0ZWRUYXNrLmRlc2NyaXB0aW9uO1xuICB0YXNrQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1pbXBvcnRhbmNlXCIpLnRleHRDb250ZW50ID0gdXBkYXRlZFRhc2suaW1wb3J0YW5jZVN5bWJvbDtcbiAgdGFza0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGF0ZVwiKS50ZXh0Q29udGVudCA9IHVwZGF0ZWRUYXNrLnRpbWVMZWZ0KCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhc2sodGFza0VsZW0pIHtcbiAgdGFza0VsZW0ucmVtb3ZlKCk7XG59XG5cblxuZnVuY3Rpb24gYnVpbGRQcm9qZWN0Rm9ybSgpIHtcbiAgY29uc3QgZm9ybUVsZW0gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImZvcm1cIiwgXCJwcm9qZWN0LWZvcm1cIiwgXCJcIik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoZm9ybUVsZW0pO1xuXG4gIGNvbnN0IHRpdGxlTGFiZWwgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImxhYmVsXCIsIFwicHJvamVjdC10aXRsZS1sYWJlbFwiLCBcIlByb2plY3QgTmFtZVwiKTtcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiaW5wdXRcIiwgXCJwcm9qZWN0LXRpdGxlLWlucHV0XCIsIFwiXCIpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC10aXRsZS1pbnB1dFwiKTtcbiAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcm9qZWN0LXRpdGxlLWlucHV0XCIpO1xuXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiYnV0dG9uXCIsIFwicHJvamVjdC1mb3JtLXN1Ym1pdFwiLCBcIkFkZFwiKTtcbiAgY29uc3QgY2xvc2VQcm9qZWN0Rm9ybSA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiYnV0dG9uXCIsIFwiY2xvc2UtcHJvamVjdC1mb3JtXCIsIFwi4qiJXCIpO1xuXG4gIGZvcm1FbGVtLmFwcGVuZChcbiAgICB0aXRsZUxhYmVsLFxuICAgIHRpdGxlSW5wdXQsXG4gICAgc3VibWl0QnV0dG9uLFxuICAgIGNsb3NlUHJvamVjdEZvcm1cbiAgKVxuXG4gIHRvZ2dsZU1vZGFsKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBmb3JtRWxlbSxcbiAgICB0aXRsZUlucHV0LFxuICAgIGNsb3NlUHJvamVjdEZvcm1cbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdChwcm9qZWN0KSB7XG4gIGNvbnN0IHByb2plY3RFbGVtID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJkaXZcIiwgXCJwcm9qZWN0XCIsIHByb2plY3QudGl0bGUpO1xuICBwcm9qZWN0RWxlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtbmFtZVwiLCBwcm9qZWN0LnRpdGxlKTtcbiAgcHJvamVjdE5hdi5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbSk7XG4gIHJldHVybiBwcm9qZWN0RWxlbTtcbn1cblxubGV0IHByZXZpb3VzUHJvamVjdEVsZW07XG5mdW5jdGlvbiBoaWdobGlnaHRQcm9qZWN0KHByb2plY3RFbGVtKSB7XG4gIGlmIChwcmV2aW91c1Byb2plY3RFbGVtICE9PSB1bmRlZmluZWQpIHByZXZpb3VzUHJvamVjdEVsZW0uY2xhc3NMaXN0LnRvZ2dsZShcImhpZ2hsaWdodGVkXCIpO1xuICBwcm9qZWN0RWxlbS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlnaGxpZ2h0ZWRcIik7XG4gIHByZXZpb3VzUHJvamVjdEVsZW0gPSBwcm9qZWN0RWxlbTtcbn1cblxuXG5mdW5jdGlvbiByZW1vdmVGb3JtKGZvcm0pIHtcbiAgZm9ybS5yZW1vdmUoKTtcbiAgdG9nZ2xlTW9kYWwoKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlTW9kYWwoKSB7XG4gIG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBidWlsZFRhc2tGb3JtLFxuICBkaXNwbGF5VGFzayxcbiAgYnVpbGRUYXNrRWRpdCxcbiAgZWRpdFRhc2ssXG4gIHJlbW92ZVRhc2ssXG4gIGJ1aWxkUHJvamVjdEZvcm0sXG4gIGRpc3BsYXlQcm9qZWN0LFxuICBoaWdobGlnaHRQcm9qZWN0LFxuICByZW1vdmVGb3JtLFxuICBzaG93VGFza0Zvcm0sXG4gIHNob3dQcm9qZWN0Rm9ybSxcbiAgbW9kYWxcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChlbGVtVHlwZSwgY2xhc3NOYW1lLCBjb250ZW50KSB7XG4gIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1UeXBlKTtcbiAgdGVtcC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gIHRlbXAudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICByZXR1cm4gdGVtcDtcbn0iLCJjb25zdCBhbGxQcm9qZWN0cyA9IFtdO1xuXG5jbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBpbXBvcnRhbmNlLCBkdWVEYXRlLCBpdHNQcm9qZWN0KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmltcG9ydGFuY2UgPSBpbXBvcnRhbmNlO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5pdHNQcm9qZWN0ID0gaXRzUHJvamVjdDtcbiAgfVxuXG4gIGdldCBpbXBvcnRhbmNlU3ltYm9sKCkge1xuICAgIGlmICh0aGlzLmltcG9ydGFuY2UpIHJldHVybiBcIiFcIjtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIHRpbWVMZWZ0KCkge1xuICAgIGNvbnN0IG1zTGVmdCA9IG5ldyBEYXRlKHRoaXMuZHVlRGF0ZSkgLSBuZXcgRGF0ZSgpO1xuICAgIGlmIChtc0xlZnQgPCAtNjAwMDApIHJldHVybiBcIvCflZAgUGFzdCBEdWVcIjtcbiAgICBjb25zdCBtaW51dGVzTGVmdCA9IE1hdGguY2VpbChtc0xlZnQgLyAxMDAwIC8gNjApO1xuICAgIGlmIChtaW51dGVzTGVmdCA8IDYwKSByZXR1cm4gYPCflZAgJHttaW51dGVzTGVmdH0gbWludXRlcyBsZWZ0YDtcbiAgICBjb25zdCBocnNMZWZ0ID0gTWF0aC5jZWlsKG1pbnV0ZXNMZWZ0IC8gNjApO1xuICAgIGlmIChocnNMZWZ0IDwgMjQpIHJldHVybiBg8J+VkCAke2hyc0xlZnR9IGhvdXJzIGxlZnRgO1xuICAgIHJldHVybiBg8J+VkCAke01hdGguY2VpbChocnNMZWZ0IC8gMjQpfSBkYXlzIGxlZnRgO1xuICB9XG59XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGltcG9ydGFuY2UsIGR1ZURhdGUsIGl0c1Byb2plY3QpIHtcbiAgcmV0dXJuIG5ldyBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgaW1wb3J0YW5jZSwgZHVlRGF0ZSwgaXRzUHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKHRhc2ssIG5ld1RpdGxlLCBuZXdEZXNjcmlwdGlvbiwgbmV3SW1wb3J0YW5jZSwgbmV3RGF0ZSkge1xuICB0YXNrLnRpdGxlID0gbmV3VGl0bGU7XG4gIHRhc2suZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgdGFzay5pbXBvcnRhbmNlID0gbmV3SW1wb3J0YW5jZTtcbiAgdGFzay5kdWVEYXRlID0gbmV3RGF0ZTtcbn1cblxuZnVuY3Rpb24gYWRkVGFza1RvUHJvamVjdCh0YXNrLCBwcm9qZWN0KSB7XG4gIHByb2plY3QudGFza3MucHVzaCh0YXNrKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFzayh0YXNrKSB7XG4gIGNvbnN0IHRhc2tBcnJheSA9IHRhc2suaXRzUHJvamVjdC50YXNrcztcbiAgY29uc3QgdGFza0luZGV4ID0gdGFza0FycmF5LmluZGV4T2YodGFzayk7XG4gIHRhc2tBcnJheS5zcGxpY2UodGFza0luZGV4LCAxKTtcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KHRpdGxlKSB7XG4gIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZSk7XG4gIGFsbFByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIHJldHVybiBwcm9qZWN0O1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY3JlYXRlVGFzayxcbiAgZWRpdFRhc2ssXG4gIGFkZFRhc2tUb1Byb2plY3QsXG4gIHJlbW92ZVRhc2ssXG4gIGNyZWF0ZU5ld1Byb2plY3Rcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=