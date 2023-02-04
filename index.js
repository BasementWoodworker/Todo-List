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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --blue: rgb(51, 146, 206);\n  --blue-input: rgb(23, 88, 129);\n  --lightblue: rgb(202, 227, 243);\n  --blue-border: rgb(2, 80, 128);\n  --darkblue: rgb(0, 58, 94);\n  --lightgrey: rgb(235, 235, 235);\n  --task-completed-background: rgb(211, 211, 211);\n  --modal: rgba(180, 180, 180, 0.3);\n  --red: rgb(255, 107, 107);\n  --important: rgb(226, 166, 0);\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  text-decoration: none;\n  font-family: inherit;\n  color: inherit;\n  background-color: inherit;\n}\n\n@font-face {\n  font-family: Roboto;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n\n\nhtml,\nbody {\n  height: 100%;\n}\n\nbody {\n  display: grid;\n  grid-template-columns: 400px 1fr;\n  grid-template-rows: 70px 1fr;\n  font-family: Roboto;\n}\n\nform {\n  position: absolute;\n  z-index: 5;\n  color: var(--darkblue);\n  background-color: white;\n  border: 1px solid var(--blue-border);\n  border-radius: 8px;\n  overflow-wrap: break-word;\n  overflow: hidden;\n}\n\nform button:active {\n  transform: scale(0.95);\n  transition: 0.05s;\n}\n\ninput,\ntextarea {\n  color: var(--blue-input);\n}\n\n\ninput,\ntextarea {\n  padding: 4px;\n}\n\n\n/* Header */\nheader {\n  grid-column: 1 / 3;\n  background-color: var(--blue);\n  padding: 8px;\n  padding-left: 20px;\n}\n\nheader > a {\n  color: white;\n  font-size: 48px;\n}\n\n/* Sidebar */\n.sidebar {\n  background-color: var(--lightgrey);\n}\n\nspan.projects-heading {\n  color: var(--blue);\n  font-size: 48px;\n  margin: 20px;\n}\n\nbutton.show-project-form {\n  position: relative;\n  bottom: 3px;\n  right: 15px;\n  background-color: var(--blue);\n  color: white;\n  font-size: 28px;\n  height: 35px;\n  width: 35px;\n  border: none;\n  border-radius: 50%;\n}\n\n.project-form {\n  top: calc(50% - 60px);\n  left: calc(50% - 150px);\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  gap: 8px;\n  padding: 12px;\n  height: 120px;\n  width: 300px;\n  font-size: 24px;\n}\n\ninput.project-title-input {\n  font-size: 18px;\n}\n\nbutton.project-form-submit {\n  align-self: flex-end;\n  color: white;\n  background-color: var(--blue);\n  border: none;\n  border-radius: 8px;\n  padding: 4px 20px;\n  font-size: 24px;\n}\n\n\n/* Sidebar -> General Navigation */ \n\n.general-navigation > div {\n  display: flex;\n  justify-content: center;\n  width: 90%;\n  background-color: white;\n  border: 2px solid darkgrey;\n  border-radius: 4px;\n  padding: 4px;\n  margin: 5%;\n  color: var(--blue-border);\n  font-size: 30px;\n}\n\n.general-navigation > div.highlighted,\n.project-navigation > div.highlighted {\n  background-color: var(--lightblue);\n  border-color: var(--blue-border);\n}\n\n.project-navigation > div.highlighted {\n  border-left-color: var(--blue);\n}\n\n.general-navigation > div:hover,\n.project-container:hover {\n  border-color: var(--blue);\n  cursor: pointer;\n}\n\n\n.project-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 50px;\n  width: 90%;\n  text-overflow: ellipsis;\n  font-size: 30px;\n  background-color: white;\n  border: 2px solid darkgrey;\n  border-left: 2px solid var(--blue);\n  border-radius: 4px;\n  margin: 5%;\n  color: var(--blue-border);\n  font-size: 30px;\n}\n\n.project-container button:disabled {\n  color: darkgrey;\n}\n\n.select-container {\n  display: flex;\n  align-items: center;\n  width: 30px;\n  min-width: 30px;\n  height: 50px;\n  border-radius: 2px;\n  background-color: var(--blue);\n  color: white;\n  font-size: 30px;\n}\n\n.select-container.chosen::before {\n  content: \"➔\";\n}\n\n.project-title {\n  margin-right: auto;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  padding: 4px;\n}\n\n.project-button-container > * {\n  padding: 2px;\n  margin: 2px;\n  font-size: 14px;\n}\n\n.project-button-container {\n  display: flex;\n  justify-content: flex-end;\n  z-index: -1;\n  width: 0;\n}\n\n.project-container:hover > .project-button-container{\n  width: 120px;\n  z-index: 1;\n}\n\n/* Main */\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: white;\n\n  min-width: 0;\n}\n\nmain > .all-tasks-container {\n  width: min(1000px, 80%);\n}\n\nmain > h1 {\n  text-align: center;\n  font-size: 52px;\n  color: var(--blue-border);\n  margin: 20px;\n}\n\n/* Main -> Task Form */\nmain > button.show-task-form {\n  position: absolute;\n  bottom: 50px;\n  right: 50px;\n\n  color: white;\n  background-color: var(--blue);\n  font-size: 48px;\n  height: 80px;\n  width: 80px;\n  border: solid 1px var(--lightgrey);\n  border-radius: 50%;\n\n}\n\n.task-form {\n  top: calc(50% - 175px);\n  left: calc(50% - 150px);\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  height: 350px;\n  width: 300px;\n  padding: 10px;\n}\n\n.task-form > * {\n  font-size: 18px;\n  width: 100%;\n}\n\n#importance-input {\n  height: 20px;\n  width: 20px;\n  position: relative;\n  top: 4px;\n  left: 4px;\n}\n\n\nbutton.submit-task-form {\n  background-color: var(--blue);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 24px;\n  padding: 8px;\n  width: 100px;\n  align-self: center;\n}\n\nbutton.close-form {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 30px;\n  height: 30px;\n  font-size: 25px;\n  text-align: center;\n  line-height: 25px;\n  color: white;\n  background-color: var(--red);\n  border: none;\n  border-radius: 6px;\n}\n\n/* Main -> Task Edit Form */\n\n.task-edit-form {\n  top: 50%;\n  left: 50%;\n\n  background-color: var(--lightgrey);\n  border: 2px solid darkgrey;\n  border-radius: 8px;\n  padding: 10px;\n}\n\n.task-form-label {\n  font-size: 24px;\n}\n\n.task-form-label.important {\n  color: var(--important)\n}\n\n.task-form-label.unimportant {\n  color: var(--blue);\n}\n\nbutton.submit-edit-form {\n  background-color: var(--blue);\n  color: white;\n  border-radius: 8px;\n  font-size: 24px;\n}\n\nbutton.close-edit-form {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n/* Main -> Displayed Tasks */\n.task-container {\n  position: relative;\n  display: grid;\n  grid-template-columns: 1fr 30px 150px 140px;\n  align-items: center;\n  color: var(--darkblue);\n  background-color: var(--lightgrey);\n  padding: 4px 12px;\n  margin: 8px 0px;\n  border: 1px solid darkgrey;\n  border-radius: 4px;\n  width: 100%;\n}\n\n.task-container:hover {\n  border-color: var(--blue);\n}\n\n.task-container.completed {\n  background-color: var(--task-completed-background);\n}\n\n.task-container.completed > * {\n  color: grey;\n}\n\n.task-container.completed::before {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  z-index: 2;\n  content: \" \";\n  width: 100%;\n  border: 1px solid grey;\n}\n\n.task-container.completed::after {\n  position: absolute;\n  top: 5px;\n  left: -30px;\n  content: \"✔\";\n  font-size: 34px;\n  color: var(--blue);\n}\n\n.task-title {\n  font-size: 28px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.task-importance {\n  position: relative;\n\n  color: var(--important);\n  font-size: 34px;\n  padding: 0px 8px;\n}\n\n.task-date {\n  font-size: 18px;\n}\n\n.task-importance:hover::before {\n  position: absolute;\n  top: -8px;\n  left: -28px;\n  z-index: 1;\n\n  content: \"Important\";\n  font-size: 18px;\n  color: var(--important);\n}\n\n.task-button-container {\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-self: end;\n}\n\n.task-button-container > button {\n  z-index: 3;\n  margin: 0px 4px;\n  padding: 2px;\n  border-color: var(--darkblue);\n  border-radius: 4px;\n}\n\n.task-button-container > button:hover {\n  transform: scale(1.1);\n}\n\n.task-info {\n  border: none;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.edit-task {\n  font-size: 20px;\n}\n\n.delete-task {\n  font-size: 20px;\n  width: 25px;\n}\n\n/* Modal */\n#modal {\n  position: absolute;\n  z-index: 4;\n  height: 100%;\n  width: 100%;\n  background-color: var(--modal);\n}\n\n#modal.hidden {\n  z-index: -1;\n}\n\n/* Other */\n\n\n.deletion-form {\n  top: calc(50% - 75px);\n  right: calc(50% - 100px);\n  height: 150px;\n  width: 200px;\n\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 2fr 1fr;\n}\n\n.deletion-message {\n  grid-column: 1 / 3;\n  align-self: center;\n  padding: 8px;\n  font-size: 18px;\n  white-space: pre-wrap;\n}\n\n.deletion-yes {\n  color: white;\n  background-color: var(--blue);\n}\n\n.deletion-no {\n  color: white;\n  background-color: var(--red);\n}\n\n.deletion-yes,\n.deletion-no {\n  font-size: 18px;\n  border: none;\n  margin: 8px;\n  border-radius: 8px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,8BAA8B;EAC9B,+BAA+B;EAC/B,8BAA8B;EAC9B,0BAA0B;EAC1B,+BAA+B;EAC/B,+CAA+C;EAC/C,iCAAiC;EACjC,yBAAyB;EACzB,6BAA6B;AAC/B;;AAEA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,qBAAqB;EACrB,oBAAoB;EACpB,cAAc;EACd,yBAAyB;AAC3B;;AAEA;EACE,mBAAmB;EACnB,4CAA4C;AAC9C;;;;AAIA;;EAEE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,4BAA4B;EAC5B,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,sBAAsB;EACtB,uBAAuB;EACvB,oCAAoC;EACpC,kBAAkB;EAClB,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;;EAEE,wBAAwB;AAC1B;;;AAGA;;EAEE,YAAY;AACd;;;AAGA,WAAW;AACX;EACE,kBAAkB;EAClB,6BAA6B;EAC7B,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB;;AAEA,YAAY;AACZ;EACE,kCAAkC;AACpC;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,6BAA6B;EAC7B,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,uBAAuB;;EAEvB,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,QAAQ;EACR,aAAa;EACb,aAAa;EACb,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,oBAAoB;EACpB,YAAY;EACZ,6BAA6B;EAC7B,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;AACjB;;;AAGA,kCAAkC;;AAElC;EACE,aAAa;EACb,uBAAuB;EACvB,UAAU;EACV,uBAAuB;EACvB,0BAA0B;EAC1B,kBAAkB;EAClB,YAAY;EACZ,UAAU;EACV,yBAAyB;EACzB,eAAe;AACjB;;AAEA;;EAEE,kCAAkC;EAClC,gCAAgC;AAClC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;;EAEE,yBAAyB;EACzB,eAAe;AACjB;;;AAGA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,YAAY;EACZ,UAAU;EACV,uBAAuB;EACvB,eAAe;EACf,uBAAuB;EACvB,0BAA0B;EAC1B,kCAAkC;EAClC,kBAAkB;EAClB,UAAU;EACV,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,6BAA6B;EAC7B,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,WAAW;EACX,QAAQ;AACV;;AAEA;EACE,YAAY;EACZ,UAAU;AACZ;;AAEA,SAAS;AACT;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;;EAEvB,YAAY;AACd;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,yBAAyB;EACzB,YAAY;AACd;;AAEA,sBAAsB;AACtB;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;;EAEX,YAAY;EACZ,6BAA6B;EAC7B,eAAe;EACf,YAAY;EACZ,WAAW;EACX,kCAAkC;EAClC,kBAAkB;;AAEpB;;AAEA;EACE,sBAAsB;EACtB,uBAAuB;;EAEvB,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,aAAa;EACb,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,eAAe;EACf,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,QAAQ;EACR,SAAS;AACX;;;AAGA;EACE,6BAA6B;EAC7B,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;EACZ,4BAA4B;EAC5B,YAAY;EACZ,kBAAkB;AACpB;;AAEA,2BAA2B;;AAE3B;EACE,QAAQ;EACR,SAAS;;EAET,kCAAkC;EAClC,0BAA0B;EAC1B,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE;AACF;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,QAAQ;AACV;;AAEA,4BAA4B;AAC5B;EACE,kBAAkB;EAClB,aAAa;EACb,2CAA2C;EAC3C,mBAAmB;EACnB,sBAAsB;EACtB,kCAAkC;EAClC,iBAAiB;EACjB,eAAe;EACf,0BAA0B;EAC1B,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kDAAkD;AACpD;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,OAAO;EACP,UAAU;EACV,YAAY;EACZ,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;;EAElB,uBAAuB;EACvB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,UAAU;;EAEV,oBAAoB;EACpB,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,eAAe;EACf,YAAY;EACZ,6BAA6B;EAC7B,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,WAAW;AACb;;AAEA,UAAU;AACV;EACE,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,WAAW;EACX,8BAA8B;AAChC;;AAEA;EACE,WAAW;AACb;;AAEA,UAAU;;;AAGV;EACE,qBAAqB;EACrB,wBAAwB;EACxB,aAAa;EACb,YAAY;;EAEZ,aAAa;EACb,8BAA8B;EAC9B,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,6BAA6B;AAC/B;;AAEA;EACE,YAAY;EACZ,4BAA4B;AAC9B;;AAEA;;EAEE,eAAe;EACf,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB","sourcesContent":[":root {\n  --blue: rgb(51, 146, 206);\n  --blue-input: rgb(23, 88, 129);\n  --lightblue: rgb(202, 227, 243);\n  --blue-border: rgb(2, 80, 128);\n  --darkblue: rgb(0, 58, 94);\n  --lightgrey: rgb(235, 235, 235);\n  --task-completed-background: rgb(211, 211, 211);\n  --modal: rgba(180, 180, 180, 0.3);\n  --red: rgb(255, 107, 107);\n  --important: rgb(226, 166, 0);\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  text-decoration: none;\n  font-family: inherit;\n  color: inherit;\n  background-color: inherit;\n}\n\n@font-face {\n  font-family: Roboto;\n  src: url(\"./assets/fonts/Roboto-Medium.ttf\");\n}\n\n\n\nhtml,\nbody {\n  height: 100%;\n}\n\nbody {\n  display: grid;\n  grid-template-columns: 400px 1fr;\n  grid-template-rows: 70px 1fr;\n  font-family: Roboto;\n}\n\nform {\n  position: absolute;\n  z-index: 5;\n  color: var(--darkblue);\n  background-color: white;\n  border: 1px solid var(--blue-border);\n  border-radius: 8px;\n  overflow-wrap: break-word;\n  overflow: hidden;\n}\n\nform button:active {\n  transform: scale(0.95);\n  transition: 0.05s;\n}\n\ninput,\ntextarea {\n  color: var(--blue-input);\n}\n\n\ninput,\ntextarea {\n  padding: 4px;\n}\n\n\n/* Header */\nheader {\n  grid-column: 1 / 3;\n  background-color: var(--blue);\n  padding: 8px;\n  padding-left: 20px;\n}\n\nheader > a {\n  color: white;\n  font-size: 48px;\n}\n\n/* Sidebar */\n.sidebar {\n  background-color: var(--lightgrey);\n}\n\nspan.projects-heading {\n  color: var(--blue);\n  font-size: 48px;\n  margin: 20px;\n}\n\nbutton.show-project-form {\n  position: relative;\n  bottom: 3px;\n  right: 15px;\n  background-color: var(--blue);\n  color: white;\n  font-size: 28px;\n  height: 35px;\n  width: 35px;\n  border: none;\n  border-radius: 50%;\n}\n\n.project-form {\n  top: calc(50% - 60px);\n  left: calc(50% - 150px);\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  gap: 8px;\n  padding: 12px;\n  height: 120px;\n  width: 300px;\n  font-size: 24px;\n}\n\ninput.project-title-input {\n  font-size: 18px;\n}\n\nbutton.project-form-submit {\n  align-self: flex-end;\n  color: white;\n  background-color: var(--blue);\n  border: none;\n  border-radius: 8px;\n  padding: 4px 20px;\n  font-size: 24px;\n}\n\n\n/* Sidebar -> General Navigation */ \n\n.general-navigation > div {\n  display: flex;\n  justify-content: center;\n  width: 90%;\n  background-color: white;\n  border: 2px solid darkgrey;\n  border-radius: 4px;\n  padding: 4px;\n  margin: 5%;\n  color: var(--blue-border);\n  font-size: 30px;\n}\n\n.general-navigation > div.highlighted,\n.project-navigation > div.highlighted {\n  background-color: var(--lightblue);\n  border-color: var(--blue-border);\n}\n\n.project-navigation > div.highlighted {\n  border-left-color: var(--blue);\n}\n\n.general-navigation > div:hover,\n.project-container:hover {\n  border-color: var(--blue);\n  cursor: pointer;\n}\n\n\n.project-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 50px;\n  width: 90%;\n  text-overflow: ellipsis;\n  font-size: 30px;\n  background-color: white;\n  border: 2px solid darkgrey;\n  border-left: 2px solid var(--blue);\n  border-radius: 4px;\n  margin: 5%;\n  color: var(--blue-border);\n  font-size: 30px;\n}\n\n.project-container button:disabled {\n  color: darkgrey;\n}\n\n.select-container {\n  display: flex;\n  align-items: center;\n  width: 30px;\n  min-width: 30px;\n  height: 50px;\n  border-radius: 2px;\n  background-color: var(--blue);\n  color: white;\n  font-size: 30px;\n}\n\n.select-container.chosen::before {\n  content: \"➔\";\n}\n\n.project-title {\n  margin-right: auto;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  padding: 4px;\n}\n\n.project-button-container > * {\n  padding: 2px;\n  margin: 2px;\n  font-size: 14px;\n}\n\n.project-button-container {\n  display: flex;\n  justify-content: flex-end;\n  z-index: -1;\n  width: 0;\n}\n\n.project-container:hover > .project-button-container{\n  width: 120px;\n  z-index: 1;\n}\n\n/* Main */\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: white;\n\n  min-width: 0;\n}\n\nmain > .all-tasks-container {\n  width: min(1000px, 80%);\n}\n\nmain > h1 {\n  text-align: center;\n  font-size: 52px;\n  color: var(--blue-border);\n  margin: 20px;\n}\n\n/* Main -> Task Form */\nmain > button.show-task-form {\n  position: absolute;\n  bottom: 50px;\n  right: 50px;\n\n  color: white;\n  background-color: var(--blue);\n  font-size: 48px;\n  height: 80px;\n  width: 80px;\n  border: solid 1px var(--lightgrey);\n  border-radius: 50%;\n\n}\n\n.task-form {\n  top: calc(50% - 175px);\n  left: calc(50% - 150px);\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  height: 350px;\n  width: 300px;\n  padding: 10px;\n}\n\n.task-form > * {\n  font-size: 18px;\n  width: 100%;\n}\n\n#importance-input {\n  height: 20px;\n  width: 20px;\n  position: relative;\n  top: 4px;\n  left: 4px;\n}\n\n\nbutton.submit-task-form {\n  background-color: var(--blue);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 24px;\n  padding: 8px;\n  width: 100px;\n  align-self: center;\n}\n\nbutton.close-form {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 30px;\n  height: 30px;\n  font-size: 25px;\n  text-align: center;\n  line-height: 25px;\n  color: white;\n  background-color: var(--red);\n  border: none;\n  border-radius: 6px;\n}\n\n/* Main -> Task Edit Form */\n\n.task-edit-form {\n  top: 50%;\n  left: 50%;\n\n  background-color: var(--lightgrey);\n  border: 2px solid darkgrey;\n  border-radius: 8px;\n  padding: 10px;\n}\n\n.task-form-label {\n  font-size: 24px;\n}\n\n.task-form-label.important {\n  color: var(--important)\n}\n\n.task-form-label.unimportant {\n  color: var(--blue);\n}\n\nbutton.submit-edit-form {\n  background-color: var(--blue);\n  color: white;\n  border-radius: 8px;\n  font-size: 24px;\n}\n\nbutton.close-edit-form {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n/* Main -> Displayed Tasks */\n.task-container {\n  position: relative;\n  display: grid;\n  grid-template-columns: 1fr 30px 150px 140px;\n  align-items: center;\n  color: var(--darkblue);\n  background-color: var(--lightgrey);\n  padding: 4px 12px;\n  margin: 8px 0px;\n  border: 1px solid darkgrey;\n  border-radius: 4px;\n  width: 100%;\n}\n\n.task-container:hover {\n  border-color: var(--blue);\n}\n\n.task-container.completed {\n  background-color: var(--task-completed-background);\n}\n\n.task-container.completed > * {\n  color: grey;\n}\n\n.task-container.completed::before {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  z-index: 2;\n  content: \" \";\n  width: 100%;\n  border: 1px solid grey;\n}\n\n.task-container.completed::after {\n  position: absolute;\n  top: 5px;\n  left: -30px;\n  content: \"✔\";\n  font-size: 34px;\n  color: var(--blue);\n}\n\n.task-title {\n  font-size: 28px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.task-importance {\n  position: relative;\n\n  color: var(--important);\n  font-size: 34px;\n  padding: 0px 8px;\n}\n\n.task-date {\n  font-size: 18px;\n}\n\n.task-importance:hover::before {\n  position: absolute;\n  top: -8px;\n  left: -28px;\n  z-index: 1;\n\n  content: \"Important\";\n  font-size: 18px;\n  color: var(--important);\n}\n\n.task-button-container {\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-self: end;\n}\n\n.task-button-container > button {\n  z-index: 3;\n  margin: 0px 4px;\n  padding: 2px;\n  border-color: var(--darkblue);\n  border-radius: 4px;\n}\n\n.task-button-container > button:hover {\n  transform: scale(1.1);\n}\n\n.task-info {\n  border: none;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.edit-task {\n  font-size: 20px;\n}\n\n.delete-task {\n  font-size: 20px;\n  width: 25px;\n}\n\n/* Modal */\n#modal {\n  position: absolute;\n  z-index: 4;\n  height: 100%;\n  width: 100%;\n  background-color: var(--modal);\n}\n\n#modal.hidden {\n  z-index: -1;\n}\n\n/* Other */\n\n\n.deletion-form {\n  top: calc(50% - 75px);\n  right: calc(50% - 100px);\n  height: 150px;\n  width: 200px;\n\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 2fr 1fr;\n}\n\n.deletion-message {\n  grid-column: 1 / 3;\n  align-self: center;\n  padding: 8px;\n  font-size: 18px;\n  white-space: pre-wrap;\n}\n\n.deletion-yes {\n  color: white;\n  background-color: var(--blue);\n}\n\n.deletion-no {\n  color: white;\n  background-color: var(--red);\n}\n\n.deletion-yes,\n.deletion-no {\n  font-size: 18px;\n  border: none;\n  margin: 8px;\n  border-radius: 8px;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _modules_Storage_Module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Storage_Module */ "./src/modules/Storage_Module.js");
/* harmony import */ var _modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/DOM_Module */ "./src/modules/DOM_Module.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





// Main Logic
let currentForm;
let currentProject;


function addTaskToStorage(title, description, importance, dueDate) {
  const task = _modules_Storage_Module__WEBPACK_IMPORTED_MODULE_0__["default"].createTask(title, description, importance, dueDate, currentProject.title);
  _modules_Storage_Module__WEBPACK_IMPORTED_MODULE_0__["default"].addTaskToProject(task, currentProject);
  return task;
}

function addTaskToDOM(task) {
  const taskDOM = _modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].displayTask(task);
  taskDOM.taskContainer.addEventListener("click", () => taskClick_Callback(task, taskDOM.taskContainer));
  taskDOM.editTaskButton.addEventListener("click", (event) => taskEditButton_Callback(event, task, taskDOM.taskContainer));
  taskDOM.deleteTaskButton.addEventListener("click", (event) => taskDeleteButton_Callback(event, task, taskDOM.taskContainer));
  taskDOM.infoTaskButton.addEventListener("click", (event) => taskInfoButton_Callback(event, task));
}

function taskClick_Callback(task, taskContainer) {
  _modules_Storage_Module__WEBPACK_IMPORTED_MODULE_0__["default"].toggleTaskCompletion(task);
  _modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].toggleTaskCompletion(taskContainer);
}

function taskEditButton_Callback(event, task, taskContainer) {
  event.stopPropagation();
  currentForm = _modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].buildTaskEdit(task);
  currentForm.formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(taskContainer);
    editTask(task, taskContainer);
    _modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].removeForm(currentForm.formElem);
  })
  currentForm.closeEditForm.addEventListener("click", () => _modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].removeForm(currentForm.formElem));
}

function taskDeleteButton_Callback(event, task, taskContainer) {
  event.stopPropagation();
  currentForm = _modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].buildDeletionForm(task);
  currentForm.yesButton.addEventListener("click", () => {
    console.log(task);
    _modules_Storage_Module__WEBPACK_IMPORTED_MODULE_0__["default"].removeTask(task);
    _modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].removeTask(taskContainer);
  });
  currentForm.formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    _modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].removeForm(currentForm.formElem);
  });
}

function taskInfoButton_Callback(event, task) {
  event.stopPropagation();
  currentForm = _modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].buildTaskInfo(task);
  currentForm.formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    _modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].removeForm(currentForm.formElem);
  })
}

function editTask(task, taskContainer) {
  _modules_Storage_Module__WEBPACK_IMPORTED_MODULE_0__["default"].editTask(
    task, 
    currentForm.titleInput.value,
    currentForm.descriptionInput.value,
    currentForm.importanceInput.checked,
    currentForm.dateInput.value
  );
  _modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].editTask(task, taskContainer);
}


function addProjectToDOM(project) {
  const projectDOM = _modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].displayProject(project);
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
  currentForm = _modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].buildProjectEdit(project.title);
  currentForm.formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    editProject(project, currentForm.titleInput.value, projectContainer);
    _modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].removeForm(currentForm.formElem);
  })
  currentForm.closeProjectFormButton.addEventListener("click", () => _modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].removeForm(currentForm.formElem));
}

function projectDeleteButton_Callback(event, project, projectContainer) {
  event.stopPropagation();
  currentForm = _modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].buildDeletionForm(project);
  currentForm.yesButton.addEventListener("click", () => deleteProject(project, projectContainer));
  currentForm.formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    _modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].removeForm(currentForm.formElem);
  });
}

function deleteProject(project, projectContainer) {
  _modules_Storage_Module__WEBPACK_IMPORTED_MODULE_0__["default"].removeProject(project);
  _modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].removeProject(projectContainer);
  selectGeneralProject();
}

function selectProject(project, projectContainer) {
  currentProject = project;
  _modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].clearTaskContainer();
  _modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].highlightProject(projectContainer);
  _modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].highlightNav(projectContainer);
  _modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].setMainTitle(project.title);
  project.tasks.forEach(task => addTaskToDOM(task));
}

function selectGeneralProject() {
  selectProject(_modules_Storage_Module__WEBPACK_IMPORTED_MODULE_0__["default"].getAllProjectsAndTasks()[0], document.querySelector(".project-container"));
}

function editProject(project, newTitle, projectContainer) {
  _modules_Storage_Module__WEBPACK_IMPORTED_MODULE_0__["default"].editProject(project, newTitle);
  _modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].editProject(projectContainer, newTitle);
}



_modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].showTaskForm.addEventListener("click", () => {
  currentForm = _modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].buildTaskForm(currentProject);
  currentForm.formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    const task = addTaskToStorage(
      currentForm.titleInput.value, 
      currentForm.descriptionInput.value, 
      currentForm.importanceInput.checked,
      currentForm.dateInput.value,
    );
    addTaskToDOM(task);
    _modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].removeForm(currentForm.formElem);
  });
  currentForm.closeTaskForm.addEventListener("click", () => _modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].removeForm(currentForm.formElem));
})


_modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].showProjectForm.addEventListener("click", () => {
  currentForm = _modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].buildProjectForm();
  currentForm.formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    const projectName = event.target.children[1].value
    const project = _modules_Storage_Module__WEBPACK_IMPORTED_MODULE_0__["default"].createNewProject(projectName);
    addProjectToDOM(project);
    _modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].removeForm(currentForm.formElem);
  });
  currentForm.closeProjectFormButton.addEventListener("click", () => _modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].removeForm(currentForm.formElem));
});


_modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].navAll.addEventListener("click", event => topNav_Callback(event, "All"));
_modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].navToday.addEventListener("click", event => topNav_Callback(event, "Today"));
_modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].navWeek.addEventListener("click", event => topNav_Callback(event, "Week"));
_modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].navImportant.addEventListener("click", event => topNav_Callback(event, "Important"));

function topNav_Callback(event, criteria) {
  _modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].highlightNav(event.target);
  _modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].clearTaskContainer();
  _modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].setMainTitle(criteria);

  const filteredArray = _modules_Storage_Module__WEBPACK_IMPORTED_MODULE_0__["default"].getFilteredTasks(criteria);
  filteredArray.forEach(task => addTaskToDOM(task));
}


function initialLoad() {            
  const allProjects = _modules_Storage_Module__WEBPACK_IMPORTED_MODULE_0__["default"].getAllProjectsAndTasks();
  console.log(allProjects);
  allProjects.forEach(project => addProjectToDOM(project));
  selectGeneralProject();
  document.querySelector(".project-container:first-child button.delete-project").disabled = true;
  _modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].navAll.click();
  window.addEventListener("beforeunload", _modules_Storage_Module__WEBPACK_IMPORTED_MODULE_0__["default"].saveChanges);
  _modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].modal.addEventListener("click", () => _modules_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].removeForm(currentForm.formElem));
}

initialLoad();



/***/ }),

/***/ "./src/modules/DOM_Module.js":
/*!***********************************!*\
  !*** ./src/modules/DOM_Module.js ***!
  \***********************************/
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

function buildTaskForm(currentProject) {
  const formElem = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("form", "task-form", "");
  body.appendChild(formElem);

  const selectedProject = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "selected-project", `Project # ${currentProject.title}`);

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
  const closeTaskForm = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "close-form", "✕");

  formElem.append(
    selectedProject,
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
  const buttonContainer = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "task-button-container", "");
  const editTaskButton = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "edit-task", "EDIT");
  const deleteTaskButton = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "delete-task", "X");
  const infoTaskButton = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "task-info", "ⓘ");
  buttonContainer.append(
    infoTaskButton,
    editTaskButton,
    deleteTaskButton
  )
  taskContainer.append(
    (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "task-title", task.title),
    (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "task-importance", task.importanceSymbol),
    (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "task-date", task.timeLeft()),
    buttonContainer
  )
  if (task.completion) toggleTaskCompletion(taskContainer);

  return {
    taskContainer,
    editTaskButton,
    deleteTaskButton,
    infoTaskButton
  }
}

function toggleTaskCompletion(taskContainer) {
  taskContainer.classList.toggle("completed");
}

function buildTaskEdit(task) {
  const formElem = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("form", "task-form", "");
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

  const submitButton = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "submit-task-form", "Save");
  const closeEditForm = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "close-form", "✕");

  formElem.append(
    (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "task-form-label", "Task:"),
    titleInput,
    (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "task-form-label", "Description:"),
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

function buildTaskInfo(task) {
  const formElem = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("form", "task-form", "");
  body.appendChild(formElem);

  const titleInput = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("input", "title-input", "");
  titleInput.setAttribute("disabled", true);
  titleInput.setAttribute("value", task.title);

  const descriptionInput = document.createElement("textarea");
  descriptionInput.textContent = task.description;
  descriptionInput.setAttribute("disabled", true);

  const importanceLabel = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("span", "task-form-label", "Important: ");
  const importance = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("span", "task-form-label", task.importance ? "yes" : "no");
  task.importance ? importance.classList.add("important") : importance.classList.add("unimportant");
  const importanceContainer = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "importance-container", "")
  importanceContainer.append(importanceLabel, importance);

  const dateInput = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("input", "date-input", "");
  dateInput.setAttribute("type", "datetime-local");
  dateInput.setAttribute("disabled", true);
  dateInput.value = task.dueDate;

  const closeEditForm = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "close-form", "✕");

  formElem.append(
    (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "task-form-label", "Task:"),
    titleInput,
    (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "task-form-label", "Description:"),
    descriptionInput,
    importanceContainer,
    (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "task-form-label", "Due Date"),
    dateInput,
    closeEditForm
  )

  toggleModal();

  return {
    formElem
  }
}

function editTask(updatedTask, taskContainer) {
  taskContainer.querySelector(".task-title").textContent = updatedTask.title;
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
  const closeProjectFormButton = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "close-form", "✕");

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
  const closeProjectFormButton = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "close-form", "⨉");

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


function buildDeletionForm(object) {
  const formElem = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("form", "deletion-form", "");
  body.appendChild(formElem);

  const deletionMessage = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "deletion-message", `Are you sure?\n${object.title} will be gone forever`);
  const yesButton = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "deletion-yes", "Yes");
  const noButton = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "deletion-no", "No")
  const closeDeletionFormButton = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "close-form", "✕");

  formElem.append(
    deletionMessage,
    yesButton,
    noButton,
    closeDeletionFormButton
  )

  toggleModal();

  return {
    formElem,
    yesButton,
    noButton,
    closeDeletionFormButton
  }
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
  toggleTaskCompletion,
  buildTaskEdit,
  buildTaskInfo,
  editTask,
  removeTask,
  clearTaskContainer,
  buildProjectForm,
  displayProject,
  buildProjectEdit,
  editProject,
  removeProject,
  highlightProject,
  highlightNav,
  removeForm,
  buildDeletionForm,
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

/***/ "./src/modules/Storage_Module.js":
/*!***************************************!*\
  !*** ./src/modules/Storage_Module.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Task {
  constructor(title, description, importance, dueDate, projectName, completion) {
    this.title = title;
    this.description = description;
    this.importance = importance;
    this.dueDate = dueDate;
    this.projectName = projectName;
    this.completion = false;
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


let allProjects = JSON.parse(localStorage.getItem("allProjects"));
if ((allProjects === null) || (allProjects.length === 0)) {
  allProjects = [];
  createNewProject("General Tasks");
} else {
  allProjects.forEach(project => {
    project.tasks.forEach(task => regainTaskMethods(task));
  });
}

function regainTaskMethods(task) {
  Object.setPrototypeOf(task, Task.prototype);
}


function createTask(title, description, importance, dueDate, projectName) {
  return new Task(title, description, importance, dueDate, projectName);
}

function toggleTaskCompletion(task) {
  task.completion = !task.completion;
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
  console.log(taskArray);
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
  toggleTaskCompletion,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLGNBQWMsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLGNBQWMsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFV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Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7OztBQUdBLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDekplO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9ET01fTW9kdWxlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1N0b3JhZ2VfTW9kdWxlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NyZWF0ZS1lbGVtZW50LWN1c3RvbS1mdW5jdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvUm9ib3RvLU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWJsdWU6IHJnYig1MSwgMTQ2LCAyMDYpO1xcbiAgLS1ibHVlLWlucHV0OiByZ2IoMjMsIDg4LCAxMjkpO1xcbiAgLS1saWdodGJsdWU6IHJnYigyMDIsIDIyNywgMjQzKTtcXG4gIC0tYmx1ZS1ib3JkZXI6IHJnYigyLCA4MCwgMTI4KTtcXG4gIC0tZGFya2JsdWU6IHJnYigwLCA1OCwgOTQpO1xcbiAgLS1saWdodGdyZXk6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG4gIC0tdGFzay1jb21wbGV0ZWQtYmFja2dyb3VuZDogcmdiKDIxMSwgMjExLCAyMTEpO1xcbiAgLS1tb2RhbDogcmdiYSgxODAsIDE4MCwgMTgwLCAwLjMpO1xcbiAgLS1yZWQ6IHJnYigyNTUsIDEwNywgMTA3KTtcXG4gIC0taW1wb3J0YW50OiByZ2IoMjI2LCAxNjYsIDApO1xcbn1cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuXFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MDBweCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggMWZyO1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG59XFxuXFxuZm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA1O1xcbiAgY29sb3I6IHZhcigtLWRhcmtibHVlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZS1ib3JkZXIpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmZvcm0gYnV0dG9uOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgdHJhbnNpdGlvbjogMC4wNXM7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlLWlucHV0KTtcXG59XFxuXFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgcGFkZGluZzogNHB4O1xcbn1cXG5cXG5cXG4vKiBIZWFkZXIgKi9cXG5oZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcbmhlYWRlciA+IGEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiA0OHB4O1xcbn1cXG5cXG4vKiBTaWRlYmFyICovXFxuLnNpZGViYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRncmV5KTtcXG59XFxuXFxuc3Bhbi5wcm9qZWN0cy1oZWFkaW5nIHtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG4gIG1hcmdpbjogMjBweDtcXG59XFxuXFxuYnV0dG9uLnNob3ctcHJvamVjdC1mb3JtIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogM3B4O1xcbiAgcmlnaHQ6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGhlaWdodDogMzVweDtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtIHtcXG4gIHRvcDogY2FsYyg1MCUgLSA2MHB4KTtcXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTUwcHgpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGdhcDogOHB4O1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGhlaWdodDogMTIwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbmlucHV0LnByb2plY3QtdGl0bGUtaW5wdXQge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG5idXR0b24ucHJvamVjdC1mb3JtLXN1Ym1pdCB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogNHB4IDIwcHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcblxcbi8qIFNpZGViYXIgLT4gR2VuZXJhbCBOYXZpZ2F0aW9uICovIFxcblxcbi5nZW5lcmFsLW5hdmlnYXRpb24gPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAycHggc29saWQgZGFya2dyZXk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBwYWRkaW5nOiA0cHg7XFxuICBtYXJnaW46IDUlO1xcbiAgY29sb3I6IHZhcigtLWJsdWUtYm9yZGVyKTtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLmdlbmVyYWwtbmF2aWdhdGlvbiA+IGRpdi5oaWdobGlnaHRlZCxcXG4ucHJvamVjdC1uYXZpZ2F0aW9uID4gZGl2LmhpZ2hsaWdodGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Ymx1ZSk7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWJsdWUtYm9yZGVyKTtcXG59XFxuXFxuLnByb2plY3QtbmF2aWdhdGlvbiA+IGRpdi5oaWdobGlnaHRlZCB7XFxuICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbi5nZW5lcmFsLW5hdmlnYXRpb24gPiBkaXY6aG92ZXIsXFxuLnByb2plY3QtY29udGFpbmVyOmhvdmVyIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA5MCU7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAycHggc29saWQgZGFya2dyZXk7XFxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLWJsdWUpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWFyZ2luOiA1JTtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlLWJvcmRlcik7XFxuICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciBidXR0b246ZGlzYWJsZWQge1xcbiAgY29sb3I6IGRhcmtncmV5O1xcbn1cXG5cXG4uc2VsZWN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgbWluLXdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbi5zZWxlY3QtY29udGFpbmVyLmNob3Nlbjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLinpRcXFwiO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgcGFkZGluZzogNHB4O1xcbn1cXG5cXG4ucHJvamVjdC1idXR0b24tY29udGFpbmVyID4gKiB7XFxuICBwYWRkaW5nOiAycHg7XFxuICBtYXJnaW46IDJweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIHotaW5kZXg6IC0xO1xcbiAgd2lkdGg6IDA7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lcjpob3ZlciA+IC5wcm9qZWN0LWJ1dHRvbi1jb250YWluZXJ7XFxuICB3aWR0aDogMTIwcHg7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4vKiBNYWluICovXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXG4gIG1pbi13aWR0aDogMDtcXG59XFxuXFxubWFpbiA+IC5hbGwtdGFza3MtY29udGFpbmVyIHtcXG4gIHdpZHRoOiBtaW4oMTAwMHB4LCA4MCUpO1xcbn1cXG5cXG5tYWluID4gaDEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiA1MnB4O1xcbiAgY29sb3I6IHZhcigtLWJsdWUtYm9yZGVyKTtcXG4gIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLyogTWFpbiAtPiBUYXNrIEZvcm0gKi9cXG5tYWluID4gYnV0dG9uLnNob3ctdGFzay1mb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogNTBweDtcXG4gIHJpZ2h0OiA1MHB4O1xcblxcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBmb250LXNpemU6IDQ4cHg7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB3aWR0aDogODBweDtcXG4gIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWxpZ2h0Z3JleSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuXFxufVxcblxcbi50YXNrLWZvcm0ge1xcbiAgdG9wOiBjYWxjKDUwJSAtIDE3NXB4KTtcXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTUwcHgpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGhlaWdodDogMzUwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4udGFzay1mb3JtID4gKiB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2ltcG9ydGFuY2UtaW5wdXQge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDRweDtcXG4gIGxlZnQ6IDRweDtcXG59XFxuXFxuXFxuYnV0dG9uLnN1Ym1pdC10YXNrLWZvcm0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBwYWRkaW5nOiA4cHg7XFxuICB3aWR0aDogMTAwcHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbi5jbG9zZS1mb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMjVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbi8qIE1haW4gLT4gVGFzayBFZGl0IEZvcm0gKi9cXG5cXG4udGFzay1lZGl0LWZvcm0ge1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGdyZXkpO1xcbiAgYm9yZGVyOiAycHggc29saWQgZGFya2dyZXk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4udGFzay1mb3JtLWxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLnRhc2stZm9ybS1sYWJlbC5pbXBvcnRhbnQge1xcbiAgY29sb3I6IHZhcigtLWltcG9ydGFudClcXG59XFxuXFxuLnRhc2stZm9ybS1sYWJlbC51bmltcG9ydGFudCB7XFxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbmJ1dHRvbi5zdWJtaXQtZWRpdC1mb3JtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG5idXR0b24uY2xvc2UtZWRpdC1mb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4vKiBNYWluIC0+IERpc3BsYXllZCBUYXNrcyAqL1xcbi50YXNrLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMzBweCAxNTBweCAxNDBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tZGFya2JsdWUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRncmV5KTtcXG4gIHBhZGRpbmc6IDRweCAxMnB4O1xcbiAgbWFyZ2luOiA4cHggMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgZGFya2dyZXk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyOmhvdmVyIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lci5jb21wbGV0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFzay1jb21wbGV0ZWQtYmFja2dyb3VuZCk7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lci5jb21wbGV0ZWQgPiAqIHtcXG4gIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4udGFzay1jb250YWluZXIuY29tcGxldGVkOjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMjtcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyLmNvbXBsZXRlZDo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1cHg7XFxuICBsZWZ0OiAtMzBweDtcXG4gIGNvbnRlbnQ6IFxcXCLinJRcXFwiO1xcbiAgZm9udC1zaXplOiAzNHB4O1xcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cXG5cXG4udGFzay10aXRsZSB7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4udGFzay1pbXBvcnRhbmNlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIGNvbG9yOiB2YXIoLS1pbXBvcnRhbnQpO1xcbiAgZm9udC1zaXplOiAzNHB4O1xcbiAgcGFkZGluZzogMHB4IDhweDtcXG59XFxuXFxuLnRhc2stZGF0ZSB7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi50YXNrLWltcG9ydGFuY2U6aG92ZXI6OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC04cHg7XFxuICBsZWZ0OiAtMjhweDtcXG4gIHotaW5kZXg6IDE7XFxuXFxuICBjb250ZW50OiBcXFwiSW1wb3J0YW50XFxcIjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGNvbG9yOiB2YXIoLS1pbXBvcnRhbnQpO1xcbn1cXG5cXG4udGFzay1idXR0b24tY29udGFpbmVyIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi50YXNrLWJ1dHRvbi1jb250YWluZXIgPiBidXR0b24ge1xcbiAgei1pbmRleDogMztcXG4gIG1hcmdpbjogMHB4IDRweDtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFya2JsdWUpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4udGFzay1idXR0b24tY29udGFpbmVyID4gYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLnRhc2staW5mbyB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmVkaXQtdGFzayB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5kZWxldGUtdGFzayB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICB3aWR0aDogMjVweDtcXG59XFxuXFxuLyogTW9kYWwgKi9cXG4jbW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogNDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9kYWwpO1xcbn1cXG5cXG4jbW9kYWwuaGlkZGVuIHtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4vKiBPdGhlciAqL1xcblxcblxcbi5kZWxldGlvbi1mb3JtIHtcXG4gIHRvcDogY2FsYyg1MCUgLSA3NXB4KTtcXG4gIHJpZ2h0OiBjYWxjKDUwJSAtIDEwMHB4KTtcXG4gIGhlaWdodDogMTUwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyO1xcbn1cXG5cXG4uZGVsZXRpb24tbWVzc2FnZSB7XFxuICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxufVxcblxcbi5kZWxldGlvbi15ZXMge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbi5kZWxldGlvbi1ubyB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbn1cXG5cXG4uZGVsZXRpb24teWVzLFxcbi5kZWxldGlvbi1ubyB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW46IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUIsK0JBQStCO0VBQy9CLCtDQUErQztFQUMvQyxpQ0FBaUM7RUFDakMseUJBQXlCO0VBQ3pCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLHlC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RUFDRSxXQUFXO0FBQ2I7O0FBRUEsVUFBVTs7O0FBR1Y7RUFDRSxxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixZQUFZOztFQUVaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNEJBQTRCO0FBQzlCOztBQUVBOztFQUVFLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWJsdWU6IHJnYig1MSwgMTQ2LCAyMDYpO1xcbiAgLS1ibHVlLWlucHV0OiByZ2IoMjMsIDg4LCAxMjkpO1xcbiAgLS1saWdodGJsdWU6IHJnYigyMDIsIDIyNywgMjQzKTtcXG4gIC0tYmx1ZS1ib3JkZXI6IHJnYigyLCA4MCwgMTI4KTtcXG4gIC0tZGFya2JsdWU6IHJnYigwLCA1OCwgOTQpO1xcbiAgLS1saWdodGdyZXk6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG4gIC0tdGFzay1jb21wbGV0ZWQtYmFja2dyb3VuZDogcmdiKDIxMSwgMjExLCAyMTEpO1xcbiAgLS1tb2RhbDogcmdiYSgxODAsIDE4MCwgMTgwLCAwLjMpO1xcbiAgLS1yZWQ6IHJnYigyNTUsIDEwNywgMTA3KTtcXG4gIC0taW1wb3J0YW50OiByZ2IoMjI2LCAxNjYsIDApO1xcbn1cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIHNyYzogdXJsKFxcXCIuL2Fzc2V0cy9mb250cy9Sb2JvdG8tTWVkaXVtLnR0ZlxcXCIpO1xcbn1cXG5cXG5cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwMHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNzBweCAxZnI7XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbn1cXG5cXG5mb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDU7XFxuICBjb2xvcjogdmFyKC0tZGFya2JsdWUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlLWJvcmRlcik7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuZm9ybSBidXR0b246YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICB0cmFuc2l0aW9uOiAwLjA1cztcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgY29sb3I6IHZhcigtLWJsdWUtaW5wdXQpO1xcbn1cXG5cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBwYWRkaW5nOiA0cHg7XFxufVxcblxcblxcbi8qIEhlYWRlciAqL1xcbmhlYWRlciB7XFxuICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuXFxuaGVhZGVyID4gYSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDQ4cHg7XFxufVxcblxcbi8qIFNpZGViYXIgKi9cXG4uc2lkZWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGdyZXkpO1xcbn1cXG5cXG5zcGFuLnByb2plY3RzLWhlYWRpbmcge1xcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgZm9udC1zaXplOiA0OHB4O1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG5idXR0b24uc2hvdy1wcm9qZWN0LWZvcm0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiAzcHg7XFxuICByaWdodDogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgd2lkdGg6IDM1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0ge1xcbiAgdG9wOiBjYWxjKDUwJSAtIDYwcHgpO1xcbiAgbGVmdDogY2FsYyg1MCUgLSAxNTBweCk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgZ2FwOiA4cHg7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgaGVpZ2h0OiAxMjBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuaW5wdXQucHJvamVjdC10aXRsZS1pbnB1dCB7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbmJ1dHRvbi5wcm9qZWN0LWZvcm0tc3VibWl0IHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiA0cHggMjBweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuXFxuLyogU2lkZWJhciAtPiBHZW5lcmFsIE5hdmlnYXRpb24gKi8gXFxuXFxuLmdlbmVyYWwtbmF2aWdhdGlvbiA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogOTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBkYXJrZ3JleTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIG1hcmdpbjogNSU7XFxuICBjb2xvcjogdmFyKC0tYmx1ZS1ib3JkZXIpO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4uZ2VuZXJhbC1uYXZpZ2F0aW9uID4gZGl2LmhpZ2hsaWdodGVkLFxcbi5wcm9qZWN0LW5hdmlnYXRpb24gPiBkaXYuaGlnaGxpZ2h0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRibHVlKTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZS1ib3JkZXIpO1xcbn1cXG5cXG4ucHJvamVjdC1uYXZpZ2F0aW9uID4gZGl2LmhpZ2hsaWdodGVkIHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLmdlbmVyYWwtbmF2aWdhdGlvbiA+IGRpdjpob3ZlcixcXG4ucHJvamVjdC1jb250YWluZXI6aG92ZXIge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDkwJTtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBkYXJrZ3JleTtcXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tYmx1ZSk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBtYXJnaW46IDUlO1xcbiAgY29sb3I6IHZhcigtLWJsdWUtYm9yZGVyKTtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIGJ1dHRvbjpkaXNhYmxlZCB7XFxuICBjb2xvcjogZGFya2dyZXk7XFxufVxcblxcbi5zZWxlY3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBtaW4td2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLnNlbGVjdC1jb250YWluZXIuY2hvc2VuOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIuKelFxcXCI7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBwYWRkaW5nOiA0cHg7XFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbi1jb250YWluZXIgPiAqIHtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIG1hcmdpbjogMnB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4ucHJvamVjdC1idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgei1pbmRleDogLTE7XFxuICB3aWR0aDogMDtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyOmhvdmVyID4gLnByb2plY3QtYnV0dG9uLWNvbnRhaW5lcntcXG4gIHdpZHRoOiAxMjBweDtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi8qIE1haW4gKi9cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcbiAgbWluLXdpZHRoOiAwO1xcbn1cXG5cXG5tYWluID4gLmFsbC10YXNrcy1jb250YWluZXIge1xcbiAgd2lkdGg6IG1pbigxMDAwcHgsIDgwJSk7XFxufVxcblxcbm1haW4gPiBoMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDUycHg7XFxuICBjb2xvcjogdmFyKC0tYmx1ZS1ib3JkZXIpO1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4vKiBNYWluIC0+IFRhc2sgRm9ybSAqL1xcbm1haW4gPiBidXR0b24uc2hvdy10YXNrLWZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA1MHB4O1xcbiAgcmlnaHQ6IDUwcHg7XFxuXFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG4gIGhlaWdodDogODBweDtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tbGlnaHRncmV5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXG59XFxuXFxuLnRhc2stZm9ybSB7XFxuICB0b3A6IGNhbGMoNTAlIC0gMTc1cHgpO1xcbiAgbGVmdDogY2FsYyg1MCUgLSAxNTBweCk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi50YXNrLWZvcm0gPiAqIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jaW1wb3J0YW5jZS1pbnB1dCB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogNHB4O1xcbiAgbGVmdDogNHB4O1xcbn1cXG5cXG5cXG5idXR0b24uc3VibWl0LXRhc2stZm9ybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuYnV0dG9uLmNsb3NlLWZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLyogTWFpbiAtPiBUYXNrIEVkaXQgRm9ybSAqL1xcblxcbi50YXNrLWVkaXQtZm9ybSB7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Z3JleSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCBkYXJrZ3JleTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi50YXNrLWZvcm0tbGFiZWwge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4udGFzay1mb3JtLWxhYmVsLmltcG9ydGFudCB7XFxuICBjb2xvcjogdmFyKC0taW1wb3J0YW50KVxcbn1cXG5cXG4udGFzay1mb3JtLWxhYmVsLnVuaW1wb3J0YW50IHtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuYnV0dG9uLnN1Ym1pdC1lZGl0LWZvcm0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbmJ1dHRvbi5jbG9zZS1lZGl0LWZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbi8qIE1haW4gLT4gRGlzcGxheWVkIFRhc2tzICovXFxuLnRhc2stY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzMHB4IDE1MHB4IDE0MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrYmx1ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGdyZXkpO1xcbiAgcGFkZGluZzogNHB4IDEycHg7XFxuICBtYXJnaW46IDhweCAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JleTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFzay1jb250YWluZXI6aG92ZXIge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyLmNvbXBsZXRlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YXNrLWNvbXBsZXRlZC1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyLmNvbXBsZXRlZCA+ICoge1xcbiAgY29sb3I6IGdyZXk7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lci5jb21wbGV0ZWQ6OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAyO1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbn1cXG5cXG4udGFzay1jb250YWluZXIuY29tcGxldGVkOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDVweDtcXG4gIGxlZnQ6IC0zMHB4O1xcbiAgY29udGVudDogXFxcIuKclFxcXCI7XFxuICBmb250LXNpemU6IDM0cHg7XFxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbi50YXNrLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi50YXNrLWltcG9ydGFuY2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgY29sb3I6IHZhcigtLWltcG9ydGFudCk7XFxuICBmb250LXNpemU6IDM0cHg7XFxuICBwYWRkaW5nOiAwcHggOHB4O1xcbn1cXG5cXG4udGFzay1kYXRlIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLnRhc2staW1wb3J0YW5jZTpob3Zlcjo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLThweDtcXG4gIGxlZnQ6IC0yOHB4O1xcbiAgei1pbmRleDogMTtcXG5cXG4gIGNvbnRlbnQ6IFxcXCJJbXBvcnRhbnRcXFwiO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgY29sb3I6IHZhcigtLWltcG9ydGFudCk7XFxufVxcblxcbi50YXNrLWJ1dHRvbi1jb250YWluZXIge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLnRhc2stYnV0dG9uLWNvbnRhaW5lciA+IGJ1dHRvbiB7XFxuICB6LWluZGV4OiAzO1xcbiAgbWFyZ2luOiAwcHggNHB4O1xcbiAgcGFkZGluZzogMnB4O1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrYmx1ZSk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi50YXNrLWJ1dHRvbi1jb250YWluZXIgPiBidXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4udGFzay1pbmZvIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZWRpdC10YXNrIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmRlbGV0ZS10YXNrIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHdpZHRoOiAyNXB4O1xcbn1cXG5cXG4vKiBNb2RhbCAqL1xcbiNtb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA0O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb2RhbCk7XFxufVxcblxcbiNtb2RhbC5oaWRkZW4ge1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbi8qIE90aGVyICovXFxuXFxuXFxuLmRlbGV0aW9uLWZvcm0ge1xcbiAgdG9wOiBjYWxjKDUwJSAtIDc1cHgpO1xcbiAgcmlnaHQ6IGNhbGMoNTAlIC0gMTAwcHgpO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnI7XFxufVxcblxcbi5kZWxldGlvbi1tZXNzYWdlIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG59XFxuXFxuLmRlbGV0aW9uLXllcyB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLmRlbGV0aW9uLW5vIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxufVxcblxcbi5kZWxldGlvbi15ZXMsXFxuLmRlbGV0aW9uLW5vIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbjogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFN0b3JhZ2VfTW9kdWxlIGZyb20gXCIuL21vZHVsZXMvU3RvcmFnZV9Nb2R1bGVcIjtcbmltcG9ydCBET01fTW9kdWxlIGZyb20gXCIuL21vZHVsZXMvRE9NX01vZHVsZVwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuXG4vLyBNYWluIExvZ2ljXG5sZXQgY3VycmVudEZvcm07XG5sZXQgY3VycmVudFByb2plY3Q7XG5cblxuZnVuY3Rpb24gYWRkVGFza1RvU3RvcmFnZSh0aXRsZSwgZGVzY3JpcHRpb24sIGltcG9ydGFuY2UsIGR1ZURhdGUpIHtcbiAgY29uc3QgdGFzayA9IFN0b3JhZ2VfTW9kdWxlLmNyZWF0ZVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBpbXBvcnRhbmNlLCBkdWVEYXRlLCBjdXJyZW50UHJvamVjdC50aXRsZSk7XG4gIFN0b3JhZ2VfTW9kdWxlLmFkZFRhc2tUb1Byb2plY3QodGFzaywgY3VycmVudFByb2plY3QpO1xuICByZXR1cm4gdGFzaztcbn1cblxuZnVuY3Rpb24gYWRkVGFza1RvRE9NKHRhc2spIHtcbiAgY29uc3QgdGFza0RPTSA9IERPTV9Nb2R1bGUuZGlzcGxheVRhc2sodGFzayk7XG4gIHRhc2tET00udGFza0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGFza0NsaWNrX0NhbGxiYWNrKHRhc2ssIHRhc2tET00udGFza0NvbnRhaW5lcikpO1xuICB0YXNrRE9NLmVkaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHRhc2tFZGl0QnV0dG9uX0NhbGxiYWNrKGV2ZW50LCB0YXNrLCB0YXNrRE9NLnRhc2tDb250YWluZXIpKTtcbiAgdGFza0RPTS5kZWxldGVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHRhc2tEZWxldGVCdXR0b25fQ2FsbGJhY2soZXZlbnQsIHRhc2ssIHRhc2tET00udGFza0NvbnRhaW5lcikpO1xuICB0YXNrRE9NLmluZm9UYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHRhc2tJbmZvQnV0dG9uX0NhbGxiYWNrKGV2ZW50LCB0YXNrKSk7XG59XG5cbmZ1bmN0aW9uIHRhc2tDbGlja19DYWxsYmFjayh0YXNrLCB0YXNrQ29udGFpbmVyKSB7XG4gIFN0b3JhZ2VfTW9kdWxlLnRvZ2dsZVRhc2tDb21wbGV0aW9uKHRhc2spO1xuICBET01fTW9kdWxlLnRvZ2dsZVRhc2tDb21wbGV0aW9uKHRhc2tDb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiB0YXNrRWRpdEJ1dHRvbl9DYWxsYmFjayhldmVudCwgdGFzaywgdGFza0NvbnRhaW5lcikge1xuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgY3VycmVudEZvcm0gPSBET01fTW9kdWxlLmJ1aWxkVGFza0VkaXQodGFzayk7XG4gIGN1cnJlbnRGb3JtLmZvcm1FbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyh0YXNrQ29udGFpbmVyKTtcbiAgICBlZGl0VGFzayh0YXNrLCB0YXNrQ29udGFpbmVyKTtcbiAgICBET01fTW9kdWxlLnJlbW92ZUZvcm0oY3VycmVudEZvcm0uZm9ybUVsZW0pO1xuICB9KVxuICBjdXJyZW50Rm9ybS5jbG9zZUVkaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBET01fTW9kdWxlLnJlbW92ZUZvcm0oY3VycmVudEZvcm0uZm9ybUVsZW0pKTtcbn1cblxuZnVuY3Rpb24gdGFza0RlbGV0ZUJ1dHRvbl9DYWxsYmFjayhldmVudCwgdGFzaywgdGFza0NvbnRhaW5lcikge1xuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgY3VycmVudEZvcm0gPSBET01fTW9kdWxlLmJ1aWxkRGVsZXRpb25Gb3JtKHRhc2spO1xuICBjdXJyZW50Rm9ybS55ZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyh0YXNrKTtcbiAgICBTdG9yYWdlX01vZHVsZS5yZW1vdmVUYXNrKHRhc2spO1xuICAgIERPTV9Nb2R1bGUucmVtb3ZlVGFzayh0YXNrQ29udGFpbmVyKTtcbiAgfSk7XG4gIGN1cnJlbnRGb3JtLmZvcm1FbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBET01fTW9kdWxlLnJlbW92ZUZvcm0oY3VycmVudEZvcm0uZm9ybUVsZW0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdGFza0luZm9CdXR0b25fQ2FsbGJhY2soZXZlbnQsIHRhc2spIHtcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIGN1cnJlbnRGb3JtID0gRE9NX01vZHVsZS5idWlsZFRhc2tJbmZvKHRhc2spO1xuICBjdXJyZW50Rm9ybS5mb3JtRWxlbS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgRE9NX01vZHVsZS5yZW1vdmVGb3JtKGN1cnJlbnRGb3JtLmZvcm1FbGVtKTtcbiAgfSlcbn1cblxuZnVuY3Rpb24gZWRpdFRhc2sodGFzaywgdGFza0NvbnRhaW5lcikge1xuICBTdG9yYWdlX01vZHVsZS5lZGl0VGFzayhcbiAgICB0YXNrLCBcbiAgICBjdXJyZW50Rm9ybS50aXRsZUlucHV0LnZhbHVlLFxuICAgIGN1cnJlbnRGb3JtLmRlc2NyaXB0aW9uSW5wdXQudmFsdWUsXG4gICAgY3VycmVudEZvcm0uaW1wb3J0YW5jZUlucHV0LmNoZWNrZWQsXG4gICAgY3VycmVudEZvcm0uZGF0ZUlucHV0LnZhbHVlXG4gICk7XG4gIERPTV9Nb2R1bGUuZWRpdFRhc2sodGFzaywgdGFza0NvbnRhaW5lcik7XG59XG5cblxuZnVuY3Rpb24gYWRkUHJvamVjdFRvRE9NKHByb2plY3QpIHtcbiAgY29uc3QgcHJvamVjdERPTSA9IERPTV9Nb2R1bGUuZGlzcGxheVByb2plY3QocHJvamVjdCk7XG4gIHNlbGVjdFByb2plY3QocHJvamVjdCwgcHJvamVjdERPTS5wcm9qZWN0Q29udGFpbmVyKTtcbiAgcHJvamVjdERPTS5wcm9qZWN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBwcm9qZWN0Q2xpY2tfQ2FsbGJhY2socHJvamVjdCwgcHJvamVjdERPTS5wcm9qZWN0Q29udGFpbmVyKSk7XG4gIHByb2plY3RET00uZWRpdFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4gcHJvamVjdEVkaXRCdXR0b25fQ2FsbGJhY2soZXZlbnQsIHByb2plY3QsIHByb2plY3RET00ucHJvamVjdENvbnRhaW5lcikpO1xuICBwcm9qZWN0RE9NLmRlbGV0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4gcHJvamVjdERlbGV0ZUJ1dHRvbl9DYWxsYmFjayhldmVudCwgcHJvamVjdCwgcHJvamVjdERPTS5wcm9qZWN0Q29udGFpbmVyKSk7XG59XG5cbmZ1bmN0aW9uIHByb2plY3RDbGlja19DYWxsYmFjayhwcm9qZWN0LCBwcm9qZWN0Q29udGFpbmVyKSB7XG4gIHNlbGVjdFByb2plY3QocHJvamVjdCwgcHJvamVjdENvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIHByb2plY3RFZGl0QnV0dG9uX0NhbGxiYWNrKGV2ZW50LCBwcm9qZWN0LCBwcm9qZWN0Q29udGFpbmVyKSB7XG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICBjdXJyZW50Rm9ybSA9IERPTV9Nb2R1bGUuYnVpbGRQcm9qZWN0RWRpdChwcm9qZWN0LnRpdGxlKTtcbiAgY3VycmVudEZvcm0uZm9ybUVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGVkaXRQcm9qZWN0KHByb2plY3QsIGN1cnJlbnRGb3JtLnRpdGxlSW5wdXQudmFsdWUsIHByb2plY3RDb250YWluZXIpO1xuICAgIERPTV9Nb2R1bGUucmVtb3ZlRm9ybShjdXJyZW50Rm9ybS5mb3JtRWxlbSk7XG4gIH0pXG4gIGN1cnJlbnRGb3JtLmNsb3NlUHJvamVjdEZvcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IERPTV9Nb2R1bGUucmVtb3ZlRm9ybShjdXJyZW50Rm9ybS5mb3JtRWxlbSkpO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0RGVsZXRlQnV0dG9uX0NhbGxiYWNrKGV2ZW50LCBwcm9qZWN0LCBwcm9qZWN0Q29udGFpbmVyKSB7XG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICBjdXJyZW50Rm9ybSA9IERPTV9Nb2R1bGUuYnVpbGREZWxldGlvbkZvcm0ocHJvamVjdCk7XG4gIGN1cnJlbnRGb3JtLnllc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZGVsZXRlUHJvamVjdChwcm9qZWN0LCBwcm9qZWN0Q29udGFpbmVyKSk7XG4gIGN1cnJlbnRGb3JtLmZvcm1FbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBET01fTW9kdWxlLnJlbW92ZUZvcm0oY3VycmVudEZvcm0uZm9ybUVsZW0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0LCBwcm9qZWN0Q29udGFpbmVyKSB7XG4gIFN0b3JhZ2VfTW9kdWxlLnJlbW92ZVByb2plY3QocHJvamVjdCk7XG4gIERPTV9Nb2R1bGUucmVtb3ZlUHJvamVjdChwcm9qZWN0Q29udGFpbmVyKTtcbiAgc2VsZWN0R2VuZXJhbFByb2plY3QoKTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0UHJvamVjdChwcm9qZWN0LCBwcm9qZWN0Q29udGFpbmVyKSB7XG4gIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdDtcbiAgRE9NX01vZHVsZS5jbGVhclRhc2tDb250YWluZXIoKTtcbiAgRE9NX01vZHVsZS5oaWdobGlnaHRQcm9qZWN0KHByb2plY3RDb250YWluZXIpO1xuICBET01fTW9kdWxlLmhpZ2hsaWdodE5hdihwcm9qZWN0Q29udGFpbmVyKTtcbiAgRE9NX01vZHVsZS5zZXRNYWluVGl0bGUocHJvamVjdC50aXRsZSk7XG4gIHByb2plY3QudGFza3MuZm9yRWFjaCh0YXNrID0+IGFkZFRhc2tUb0RPTSh0YXNrKSk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdEdlbmVyYWxQcm9qZWN0KCkge1xuICBzZWxlY3RQcm9qZWN0KFN0b3JhZ2VfTW9kdWxlLmdldEFsbFByb2plY3RzQW5kVGFza3MoKVswXSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNvbnRhaW5lclwiKSk7XG59XG5cbmZ1bmN0aW9uIGVkaXRQcm9qZWN0KHByb2plY3QsIG5ld1RpdGxlLCBwcm9qZWN0Q29udGFpbmVyKSB7XG4gIFN0b3JhZ2VfTW9kdWxlLmVkaXRQcm9qZWN0KHByb2plY3QsIG5ld1RpdGxlKTtcbiAgRE9NX01vZHVsZS5lZGl0UHJvamVjdChwcm9qZWN0Q29udGFpbmVyLCBuZXdUaXRsZSk7XG59XG5cblxuXG5ET01fTW9kdWxlLnNob3dUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjdXJyZW50Rm9ybSA9IERPTV9Nb2R1bGUuYnVpbGRUYXNrRm9ybShjdXJyZW50UHJvamVjdCk7XG4gIGN1cnJlbnRGb3JtLmZvcm1FbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0YXNrID0gYWRkVGFza1RvU3RvcmFnZShcbiAgICAgIGN1cnJlbnRGb3JtLnRpdGxlSW5wdXQudmFsdWUsIFxuICAgICAgY3VycmVudEZvcm0uZGVzY3JpcHRpb25JbnB1dC52YWx1ZSwgXG4gICAgICBjdXJyZW50Rm9ybS5pbXBvcnRhbmNlSW5wdXQuY2hlY2tlZCxcbiAgICAgIGN1cnJlbnRGb3JtLmRhdGVJbnB1dC52YWx1ZSxcbiAgICApO1xuICAgIGFkZFRhc2tUb0RPTSh0YXNrKTtcbiAgICBET01fTW9kdWxlLnJlbW92ZUZvcm0oY3VycmVudEZvcm0uZm9ybUVsZW0pO1xuICB9KTtcbiAgY3VycmVudEZvcm0uY2xvc2VUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gRE9NX01vZHVsZS5yZW1vdmVGb3JtKGN1cnJlbnRGb3JtLmZvcm1FbGVtKSk7XG59KVxuXG5cbkRPTV9Nb2R1bGUuc2hvd1Byb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGN1cnJlbnRGb3JtID0gRE9NX01vZHVsZS5idWlsZFByb2plY3RGb3JtKCk7XG4gIGN1cnJlbnRGb3JtLmZvcm1FbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGV2ZW50LnRhcmdldC5jaGlsZHJlblsxXS52YWx1ZVxuICAgIGNvbnN0IHByb2plY3QgPSBTdG9yYWdlX01vZHVsZS5jcmVhdGVOZXdQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICBhZGRQcm9qZWN0VG9ET00ocHJvamVjdCk7XG4gICAgRE9NX01vZHVsZS5yZW1vdmVGb3JtKGN1cnJlbnRGb3JtLmZvcm1FbGVtKTtcbiAgfSk7XG4gIGN1cnJlbnRGb3JtLmNsb3NlUHJvamVjdEZvcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IERPTV9Nb2R1bGUucmVtb3ZlRm9ybShjdXJyZW50Rm9ybS5mb3JtRWxlbSkpO1xufSk7XG5cblxuRE9NX01vZHVsZS5uYXZBbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHRvcE5hdl9DYWxsYmFjayhldmVudCwgXCJBbGxcIikpO1xuRE9NX01vZHVsZS5uYXZUb2RheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4gdG9wTmF2X0NhbGxiYWNrKGV2ZW50LCBcIlRvZGF5XCIpKTtcbkRPTV9Nb2R1bGUubmF2V2Vlay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4gdG9wTmF2X0NhbGxiYWNrKGV2ZW50LCBcIldlZWtcIikpO1xuRE9NX01vZHVsZS5uYXZJbXBvcnRhbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHRvcE5hdl9DYWxsYmFjayhldmVudCwgXCJJbXBvcnRhbnRcIikpO1xuXG5mdW5jdGlvbiB0b3BOYXZfQ2FsbGJhY2soZXZlbnQsIGNyaXRlcmlhKSB7XG4gIERPTV9Nb2R1bGUuaGlnaGxpZ2h0TmF2KGV2ZW50LnRhcmdldCk7XG4gIERPTV9Nb2R1bGUuY2xlYXJUYXNrQ29udGFpbmVyKCk7XG4gIERPTV9Nb2R1bGUuc2V0TWFpblRpdGxlKGNyaXRlcmlhKTtcblxuICBjb25zdCBmaWx0ZXJlZEFycmF5ID0gU3RvcmFnZV9Nb2R1bGUuZ2V0RmlsdGVyZWRUYXNrcyhjcml0ZXJpYSk7XG4gIGZpbHRlcmVkQXJyYXkuZm9yRWFjaCh0YXNrID0+IGFkZFRhc2tUb0RPTSh0YXNrKSk7XG59XG5cblxuZnVuY3Rpb24gaW5pdGlhbExvYWQoKSB7ICAgICAgICAgICAgXG4gIGNvbnN0IGFsbFByb2plY3RzID0gU3RvcmFnZV9Nb2R1bGUuZ2V0QWxsUHJvamVjdHNBbmRUYXNrcygpO1xuICBjb25zb2xlLmxvZyhhbGxQcm9qZWN0cyk7XG4gIGFsbFByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiBhZGRQcm9qZWN0VG9ET00ocHJvamVjdCkpO1xuICBzZWxlY3RHZW5lcmFsUHJvamVjdCgpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29udGFpbmVyOmZpcnN0LWNoaWxkIGJ1dHRvbi5kZWxldGUtcHJvamVjdFwiKS5kaXNhYmxlZCA9IHRydWU7XG4gIERPTV9Nb2R1bGUubmF2QWxsLmNsaWNrKCk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsIFN0b3JhZ2VfTW9kdWxlLnNhdmVDaGFuZ2VzKTtcbiAgRE9NX01vZHVsZS5tb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gRE9NX01vZHVsZS5yZW1vdmVGb3JtKGN1cnJlbnRGb3JtLmZvcm1FbGVtKSk7XG59XG5cbmluaXRpYWxMb2FkKCk7XG5cbiIsImltcG9ydCBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudCBmcm9tIFwiLi9jcmVhdGUtZWxlbWVudC1jdXN0b20tZnVuY3Rpb24uanNcIlxuXG4vLyBJbml0aWFsIHBhZ2UgYnVpbGRcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuXG4vLyBIZWFkZXJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5jb25zdCBoZWFkZXJMaW5rID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJhXCIsIFwiXCIsIFwiVG9kbyBMaXN0XCIpO1xuaGVhZGVyTGluay5ocmVmID0gXCJcIjtcbmhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJMaW5rKTtcblxuLy8gU2lkZWJhclxuY29uc3Qgc2lkZWJhciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwibmF2XCIsIFwic2lkZWJhclwiLCBcIlwiKTtcbmNvbnN0IHByb2plY3RzVG9wID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJkaXZcIiwgXCJwcm9qZWN0cy10b3AtY29udGFpbmVyXCIsIFwiXCIpO1xuY29uc3QgcHJvamVjdHNIZWFkaW5nID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJzcGFuXCIsIFwicHJvamVjdHMtaGVhZGluZ1wiLCBcIlByb2plY3RzXCIpO1xuY29uc3QgZ2VuZXJhbE5hdiA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwibmF2XCIsIFwiZ2VuZXJhbC1uYXZpZ2F0aW9uXCIsIFwiXCIpO1xuY29uc3QgbmF2QWxsID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJkaXZcIiwgXCJhbGwtcHJvamVjdHNcIiwgXCJBbGxcIik7XG5jb25zdCBuYXZUb2RheSA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiZGl2XCIsIFwidG9kYXktcHJvamVjdHNcIiwgXCJUb2RheVwiKTtcbmNvbnN0IG5hdldlZWsgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImRpdlwiLCBcInRoaXMtd2Vlay1wcm9qZWN0c1wiLCBcIldlZWtcIik7XG5jb25zdCBuYXZJbXBvcnRhbnQgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImRpdlwiLCBcImltcG9ydGFudC1wcm9qZWN0c1wiLCBcIkltcG9ydGFudFwiKTtcbmdlbmVyYWxOYXYuYXBwZW5kKFxuICBuYXZBbGwsXG4gIG5hdlRvZGF5LFxuICBuYXZXZWVrLFxuICBuYXZJbXBvcnRhbnRcbilcbmNvbnN0IHByb2plY3ROYXYgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcIm5hdlwiLCBcInByb2plY3QtbmF2aWdhdGlvblwiLCBcIlwiKTtcbmNvbnN0IHNob3dQcm9qZWN0Rm9ybSA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiYnV0dG9uXCIsIFwic2hvdy1wcm9qZWN0LWZvcm1cIiwgXCIrXCIpO1xucHJvamVjdHNUb3AuYXBwZW5kKFxuICBwcm9qZWN0c0hlYWRpbmcsXG4gIHNob3dQcm9qZWN0Rm9ybVxuKVxuc2lkZWJhci5hcHBlbmQoXG4gIGdlbmVyYWxOYXYsXG4gIHByb2plY3RzVG9wLFxuICBwcm9qZWN0TmF2XG4pXG5cbi8vIE1haW5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbmNvbnN0IHNob3dUYXNrRm9ybSA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiYnV0dG9uXCIsIFwic2hvdy10YXNrLWZvcm1cIiwgXCIrXCIpO1xuY29uc3QgbWFpblRpdGxlID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJoMVwiLCBcIm1haW4tdGl0bGVcIiwgXCJcIilcbmNvbnN0IGNvbnRhaW5lck9mQWxsVGFza3MgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImRpdlwiLCBcImFsbC10YXNrcy1jb250YWluZXJcIiwgXCJcIik7XG5tYWluLmFwcGVuZChcbiAgbWFpblRpdGxlLFxuICBjb250YWluZXJPZkFsbFRhc2tzLFxuICBzaG93VGFza0Zvcm1cbik7XG5cbi8vIE1vZGFsXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5tb2RhbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1vZGFsXCIpO1xubW9kYWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblxuYm9keS5hcHBlbmQoXG4gIGhlYWRlcixcbiAgc2lkZWJhcixcbiAgbWFpbixcbiAgbW9kYWxcbilcblxuLy8gSW5pdGlhbCBidWlsZCBlbmRcblxuZnVuY3Rpb24gYnVpbGRUYXNrRm9ybShjdXJyZW50UHJvamVjdCkge1xuICBjb25zdCBmb3JtRWxlbSA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiZm9ybVwiLCBcInRhc2stZm9ybVwiLCBcIlwiKTtcbiAgYm9keS5hcHBlbmRDaGlsZChmb3JtRWxlbSk7XG5cbiAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJkaXZcIiwgXCJzZWxlY3RlZC1wcm9qZWN0XCIsIGBQcm9qZWN0ICMgJHtjdXJyZW50UHJvamVjdC50aXRsZX1gKTtcblxuICBjb25zdCB0aXRsZUlucHV0ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJpbnB1dFwiLCBcInRpdGxlLWlucHV0XCIsIFwiXCIpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiVGFza1wiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRGVzY3JpcHRpb25cIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIDMwMCk7XG5cbiAgY29uc3QgaW1wb3J0YW5jZUxhYmVsID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJsYWJlbFwiLCBcImltcG9ydGFuY2UtbGFiZWxcIiwgXCJJbXBvcnRhbnRcIik7XG4gIGNvbnN0IGltcG9ydGFuY2VJbnB1dCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiaW5wdXRcIiwgXCJpbXBvcnRhbmNlLWlucHV0XCIsIFwiXCIpO1xuICBpbXBvcnRhbmNlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICBpbXBvcnRhbmNlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbXBvcnRhbmNlLWlucHV0XCIpO1xuICBpbXBvcnRhbmNlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiaW1wb3J0YW5jZS1pbnB1dFwiKTtcbiAgY29uc3QgaW1wb3J0YW5jZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiZGl2XCIsIFwiaW1wb3J0YW5jZS1jb250YWluZXJcIiwgXCJcIilcbiAgaW1wb3J0YW5jZUNvbnRhaW5lci5hcHBlbmQoaW1wb3J0YW5jZUxhYmVsLCBpbXBvcnRhbmNlSW5wdXQpO1xuXG4gIGNvbnN0IGRhdGVJbnB1dCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiaW5wdXRcIiwgXCJkYXRlLWlucHV0XCIsIFwiXCIpO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGV0aW1lLWxvY2FsXCIpO1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgY29uc3QgbW9udGggPSAoZGF0ZS5nZXRNb250aCgpKzEpIDwgMTAgPyBgMCR7ZGF0ZS5nZXRNb250aCgpKzF9YCA6IGRhdGUuZ2V0TW9udGgoKSsxO1xuICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKSA8IDEwID8gYDAke2RhdGUuZ2V0RGF0ZSgpfWAgOiBkYXRlLmdldERhdGUoKTtcbiAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCkgPCAxMCA/IGAwJHtkYXRlLmdldEhvdXJzKCl9YCA6IGRhdGUuZ2V0SG91cnMoKTtcbiAgY29uc3QgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpIDwgMTAgPyBgMCR7ZGF0ZS5nZXRNaW51dGVzKCl9YCA6IGRhdGUuZ2V0TWludXRlcygpO1xuICBkYXRlSW5wdXQudmFsdWUgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1UJHtob3Vyc306JHttaW51dGVzfWA7XG5cbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJidXR0b25cIiwgXCJzdWJtaXQtdGFzay1mb3JtXCIsIFwiQWRkXCIpO1xuICBjb25zdCBjbG9zZVRhc2tGb3JtID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJidXR0b25cIiwgXCJjbG9zZS1mb3JtXCIsIFwi4pyVXCIpO1xuXG4gIGZvcm1FbGVtLmFwcGVuZChcbiAgICBzZWxlY3RlZFByb2plY3QsXG4gICAgdGl0bGVJbnB1dCxcbiAgICBkZXNjcmlwdGlvbklucHV0LFxuICAgIGltcG9ydGFuY2VDb250YWluZXIsXG4gICAgZGF0ZUlucHV0LFxuICAgIHN1Ym1pdEJ1dHRvbixcbiAgICBjbG9zZVRhc2tGb3JtXG4gIClcblxuICB0b2dnbGVNb2RhbCgpO1xuXG4gIHJldHVybiB7XG4gICAgZm9ybUVsZW0sXG4gICAgdGl0bGVJbnB1dCxcbiAgICBkZXNjcmlwdGlvbklucHV0LFxuICAgIGltcG9ydGFuY2VJbnB1dCxcbiAgICBkYXRlSW5wdXQsXG4gICAgY2xvc2VUYXNrRm9ybVxuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrKHRhc2spIHtcbiAgY29uc3QgdGFza0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiZGl2XCIsIFwidGFzay1jb250YWluZXJcIiwgXCJcIik7XG4gIGNvbnRhaW5lck9mQWxsVGFza3MuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG4gIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiYnV0dG9uXCIsIFwidGFzay1idXR0b24tY29udGFpbmVyXCIsIFwiXCIpO1xuICBjb25zdCBlZGl0VGFza0J1dHRvbiA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiYnV0dG9uXCIsIFwiZWRpdC10YXNrXCIsIFwiRURJVFwiKTtcbiAgY29uc3QgZGVsZXRlVGFza0J1dHRvbiA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiYnV0dG9uXCIsIFwiZGVsZXRlLXRhc2tcIiwgXCJYXCIpO1xuICBjb25zdCBpbmZvVGFza0J1dHRvbiA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiYnV0dG9uXCIsIFwidGFzay1pbmZvXCIsIFwi4pOYXCIpO1xuICBidXR0b25Db250YWluZXIuYXBwZW5kKFxuICAgIGluZm9UYXNrQnV0dG9uLFxuICAgIGVkaXRUYXNrQnV0dG9uLFxuICAgIGRlbGV0ZVRhc2tCdXR0b25cbiAgKVxuICB0YXNrQ29udGFpbmVyLmFwcGVuZChcbiAgICBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImRpdlwiLCBcInRhc2stdGl0bGVcIiwgdGFzay50aXRsZSksXG4gICAgY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJkaXZcIiwgXCJ0YXNrLWltcG9ydGFuY2VcIiwgdGFzay5pbXBvcnRhbmNlU3ltYm9sKSxcbiAgICBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImRpdlwiLCBcInRhc2stZGF0ZVwiLCB0YXNrLnRpbWVMZWZ0KCkpLFxuICAgIGJ1dHRvbkNvbnRhaW5lclxuICApXG4gIGlmICh0YXNrLmNvbXBsZXRpb24pIHRvZ2dsZVRhc2tDb21wbGV0aW9uKHRhc2tDb250YWluZXIpO1xuXG4gIHJldHVybiB7XG4gICAgdGFza0NvbnRhaW5lcixcbiAgICBlZGl0VGFza0J1dHRvbixcbiAgICBkZWxldGVUYXNrQnV0dG9uLFxuICAgIGluZm9UYXNrQnV0dG9uXG4gIH1cbn1cblxuZnVuY3Rpb24gdG9nZ2xlVGFza0NvbXBsZXRpb24odGFza0NvbnRhaW5lcikge1xuICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZWRcIik7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkVGFza0VkaXQodGFzaykge1xuICBjb25zdCBmb3JtRWxlbSA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiZm9ybVwiLCBcInRhc2stZm9ybVwiLCBcIlwiKTtcbiAgYm9keS5hcHBlbmRDaGlsZChmb3JtRWxlbSk7XG5cbiAgY29uc3QgdGl0bGVJbnB1dCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiaW5wdXRcIiwgXCJ0aXRsZS1pbnB1dFwiLCBcIlwiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB0YXNrLnRpdGxlKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBkZXNjcmlwdGlvbklucHV0LnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgMzAwKTtcblxuICBjb25zdCBpbXBvcnRhbmNlTGFiZWwgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImxhYmVsXCIsIFwiaW1wb3J0YW5jZS1sYWJlbFwiLCBcIkltcG9ydGFudFwiKTtcbiAgY29uc3QgaW1wb3J0YW5jZUlucHV0ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJpbnB1dFwiLCBcImltcG9ydGFuY2UtaW5wdXRcIiwgXCJcIik7XG4gIGltcG9ydGFuY2VJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gIGltcG9ydGFuY2VJbnB1dC5jaGVja2VkID0gdGFzay5pbXBvcnRhbmNlO1xuICBpbXBvcnRhbmNlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbXBvcnRhbmNlLWlucHV0XCIpO1xuICBpbXBvcnRhbmNlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiaW1wb3J0YW5jZS1pbnB1dFwiKTtcbiAgY29uc3QgaW1wb3J0YW5jZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiZGl2XCIsIFwiaW1wb3J0YW5jZS1jb250YWluZXJcIiwgXCJcIilcbiAgaW1wb3J0YW5jZUNvbnRhaW5lci5hcHBlbmQoaW1wb3J0YW5jZUxhYmVsLCBpbXBvcnRhbmNlSW5wdXQpO1xuXG4gIGNvbnN0IGRhdGVJbnB1dCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiaW5wdXRcIiwgXCJkYXRlLWlucHV0XCIsIFwiXCIpO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGV0aW1lLWxvY2FsXCIpO1xuICBkYXRlSW5wdXQudmFsdWUgPSB0YXNrLmR1ZURhdGU7XG5cbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJidXR0b25cIiwgXCJzdWJtaXQtdGFzay1mb3JtXCIsIFwiU2F2ZVwiKTtcbiAgY29uc3QgY2xvc2VFZGl0Rm9ybSA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiYnV0dG9uXCIsIFwiY2xvc2UtZm9ybVwiLCBcIuKclVwiKTtcblxuICBmb3JtRWxlbS5hcHBlbmQoXG4gICAgY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJkaXZcIiwgXCJ0YXNrLWZvcm0tbGFiZWxcIiwgXCJUYXNrOlwiKSxcbiAgICB0aXRsZUlucHV0LFxuICAgIGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiZGl2XCIsIFwidGFzay1mb3JtLWxhYmVsXCIsIFwiRGVzY3JpcHRpb246XCIpLFxuICAgIGRlc2NyaXB0aW9uSW5wdXQsXG4gICAgaW1wb3J0YW5jZUNvbnRhaW5lcixcbiAgICBkYXRlSW5wdXQsXG4gICAgc3VibWl0QnV0dG9uLFxuICAgIGNsb3NlRWRpdEZvcm1cbiAgKVxuXG4gIHRvZ2dsZU1vZGFsKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBmb3JtRWxlbSxcbiAgICB0aXRsZUlucHV0LFxuICAgIGRlc2NyaXB0aW9uSW5wdXQsXG4gICAgaW1wb3J0YW5jZUlucHV0LFxuICAgIGRhdGVJbnB1dCxcbiAgICBjbG9zZUVkaXRGb3JtXG4gIH1cbn1cblxuZnVuY3Rpb24gYnVpbGRUYXNrSW5mbyh0YXNrKSB7XG4gIGNvbnN0IGZvcm1FbGVtID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJmb3JtXCIsIFwidGFzay1mb3JtXCIsIFwiXCIpO1xuICBib2R5LmFwcGVuZENoaWxkKGZvcm1FbGVtKTtcblxuICBjb25zdCB0aXRsZUlucHV0ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJpbnB1dFwiLCBcInRpdGxlLWlucHV0XCIsIFwiXCIpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIHRydWUpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHRhc2sudGl0bGUpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQudGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIHRydWUpO1xuXG4gIGNvbnN0IGltcG9ydGFuY2VMYWJlbCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwic3BhblwiLCBcInRhc2stZm9ybS1sYWJlbFwiLCBcIkltcG9ydGFudDogXCIpO1xuICBjb25zdCBpbXBvcnRhbmNlID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJzcGFuXCIsIFwidGFzay1mb3JtLWxhYmVsXCIsIHRhc2suaW1wb3J0YW5jZSA/IFwieWVzXCIgOiBcIm5vXCIpO1xuICB0YXNrLmltcG9ydGFuY2UgPyBpbXBvcnRhbmNlLmNsYXNzTGlzdC5hZGQoXCJpbXBvcnRhbnRcIikgOiBpbXBvcnRhbmNlLmNsYXNzTGlzdC5hZGQoXCJ1bmltcG9ydGFudFwiKTtcbiAgY29uc3QgaW1wb3J0YW5jZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiZGl2XCIsIFwiaW1wb3J0YW5jZS1jb250YWluZXJcIiwgXCJcIilcbiAgaW1wb3J0YW5jZUNvbnRhaW5lci5hcHBlbmQoaW1wb3J0YW5jZUxhYmVsLCBpbXBvcnRhbmNlKTtcblxuICBjb25zdCBkYXRlSW5wdXQgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImlucHV0XCIsIFwiZGF0ZS1pbnB1dFwiLCBcIlwiKTtcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRldGltZS1sb2NhbFwiKTtcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIHRydWUpO1xuICBkYXRlSW5wdXQudmFsdWUgPSB0YXNrLmR1ZURhdGU7XG5cbiAgY29uc3QgY2xvc2VFZGl0Rm9ybSA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiYnV0dG9uXCIsIFwiY2xvc2UtZm9ybVwiLCBcIuKclVwiKTtcblxuICBmb3JtRWxlbS5hcHBlbmQoXG4gICAgY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJkaXZcIiwgXCJ0YXNrLWZvcm0tbGFiZWxcIiwgXCJUYXNrOlwiKSxcbiAgICB0aXRsZUlucHV0LFxuICAgIGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiZGl2XCIsIFwidGFzay1mb3JtLWxhYmVsXCIsIFwiRGVzY3JpcHRpb246XCIpLFxuICAgIGRlc2NyaXB0aW9uSW5wdXQsXG4gICAgaW1wb3J0YW5jZUNvbnRhaW5lcixcbiAgICBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImRpdlwiLCBcInRhc2stZm9ybS1sYWJlbFwiLCBcIkR1ZSBEYXRlXCIpLFxuICAgIGRhdGVJbnB1dCxcbiAgICBjbG9zZUVkaXRGb3JtXG4gIClcblxuICB0b2dnbGVNb2RhbCgpO1xuXG4gIHJldHVybiB7XG4gICAgZm9ybUVsZW1cbiAgfVxufVxuXG5mdW5jdGlvbiBlZGl0VGFzayh1cGRhdGVkVGFzaywgdGFza0NvbnRhaW5lcikge1xuICB0YXNrQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay10aXRsZVwiKS50ZXh0Q29udGVudCA9IHVwZGF0ZWRUYXNrLnRpdGxlO1xuICB0YXNrQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1pbXBvcnRhbmNlXCIpLnRleHRDb250ZW50ID0gdXBkYXRlZFRhc2suaW1wb3J0YW5jZVN5bWJvbDtcbiAgdGFza0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGF0ZVwiKS50ZXh0Q29udGVudCA9IHVwZGF0ZWRUYXNrLnRpbWVMZWZ0KCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhc2sodGFza0NvbnRhaW5lcikge1xuICB0YXNrQ29udGFpbmVyLnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBjbGVhclRhc2tDb250YWluZXIoKSB7XG4gIGNvbnRhaW5lck9mQWxsVGFza3MucmVwbGFjZUNoaWxkcmVuKCk7XG4gIG1haW5UaXRsZS50ZXh0Q29udGVudCA9IFwiXCI7XG59XG5cblxuZnVuY3Rpb24gYnVpbGRQcm9qZWN0Rm9ybSgpIHtcbiAgY29uc3QgZm9ybUVsZW0gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImZvcm1cIiwgXCJwcm9qZWN0LWZvcm1cIiwgXCJcIik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoZm9ybUVsZW0pO1xuXG4gIGNvbnN0IHRpdGxlTGFiZWwgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImxhYmVsXCIsIFwicHJvamVjdC10aXRsZS1sYWJlbFwiLCBcIlByb2plY3QgTmFtZVwiKTtcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiaW5wdXRcIiwgXCJwcm9qZWN0LXRpdGxlLWlucHV0XCIsIFwiXCIpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC10aXRsZS1pbnB1dFwiKTtcbiAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcm9qZWN0LXRpdGxlLWlucHV0XCIpO1xuXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiYnV0dG9uXCIsIFwicHJvamVjdC1mb3JtLXN1Ym1pdFwiLCBcIkFkZFwiKTtcbiAgY29uc3QgY2xvc2VQcm9qZWN0Rm9ybUJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiYnV0dG9uXCIsIFwiY2xvc2UtZm9ybVwiLCBcIuKclVwiKTtcblxuICBmb3JtRWxlbS5hcHBlbmQoXG4gICAgdGl0bGVMYWJlbCxcbiAgICB0aXRsZUlucHV0LFxuICAgIHN1Ym1pdEJ1dHRvbixcbiAgICBjbG9zZVByb2plY3RGb3JtQnV0dG9uXG4gIClcblxuICB0b2dnbGVNb2RhbCgpO1xuXG4gIHJldHVybiB7XG4gICAgZm9ybUVsZW0sXG4gICAgdGl0bGVJbnB1dCxcbiAgICBjbG9zZVByb2plY3RGb3JtQnV0dG9uXG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3QocHJvamVjdCkge1xuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJkaXZcIiwgXCJwcm9qZWN0LWNvbnRhaW5lclwiLCBcIlwiKTtcbiAgcHJvamVjdE5hdi5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcblxuICBjb25zdCBzZWxlY3RDb250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImRpdlwiLCBcInNlbGVjdC1jb250YWluZXJcIiwgXCJcIik7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiZGl2XCIsIFwicHJvamVjdC10aXRsZVwiLCBwcm9qZWN0LnRpdGxlKTtcbiAgY29uc3QgZWRpdFByb2plY3RCdXR0b24gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImJ1dHRvblwiLCBcImVkaXQtcHJvamVjdFwiLCBcIlJFTkFNRVwiKTtcbiAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiYnV0dG9uXCIsIFwiZGVsZXRlLXByb2plY3RcIiwgXCJERUxFVEVcIik7XG4gIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiZGl2XCIsIFwicHJvamVjdC1idXR0b24tY29udGFpbmVyXCIsIFwiXCIpO1xuICBidXR0b25Db250YWluZXIuYXBwZW5kKFxuICAgIGVkaXRQcm9qZWN0QnV0dG9uLFxuICAgIGRlbGV0ZVByb2plY3RCdXR0b25cbiAgKVxuICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChcbiAgICBzZWxlY3RDb250YWluZXIsXG4gICAgcHJvamVjdFRpdGxlLFxuICAgIGJ1dHRvbkNvbnRhaW5lclxuICApXG4gIHJldHVybiB7XG4gICAgcHJvamVjdENvbnRhaW5lcixcbiAgICBlZGl0UHJvamVjdEJ1dHRvbixcbiAgICBkZWxldGVQcm9qZWN0QnV0dG9uXG4gIH07XG59XG5cbmZ1bmN0aW9uIGJ1aWxkUHJvamVjdEVkaXQocHJvamVjdFRpdGxlKSB7XG4gIGNvbnN0IGZvcm1FbGVtID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJmb3JtXCIsIFwicHJvamVjdC1mb3JtXCIsIFwiXCIpO1xuICBib2R5LmFwcGVuZENoaWxkKGZvcm1FbGVtKTtcblxuICBjb25zdCB0aXRsZUxhYmVsID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJsYWJlbFwiLCBcInByb2plY3QtdGl0bGUtbGFiZWxcIiwgXCJQcm9qZWN0IE5hbWVcIik7XG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImlucHV0XCIsIFwicHJvamVjdC10aXRsZS1pbnB1dFwiLCBcIlwiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3QtdGl0bGUtaW5wdXRcIik7XG4gIHRpdGxlSW5wdXQudmFsdWUgPSBwcm9qZWN0VGl0bGU7XG4gIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJvamVjdC10aXRsZS1pbnB1dFwiKTtcblxuICBjb25zdCBzdWJtaXRCdXR0b24gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImJ1dHRvblwiLCBcInByb2plY3QtZm9ybS1zdWJtaXRcIiwgXCJTYXZlXCIpO1xuICBjb25zdCBjbG9zZVByb2plY3RGb3JtQnV0dG9uID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJidXR0b25cIiwgXCJjbG9zZS1mb3JtXCIsIFwi4qiJXCIpO1xuXG4gIGZvcm1FbGVtLmFwcGVuZChcbiAgICB0aXRsZUxhYmVsLFxuICAgIHRpdGxlSW5wdXQsXG4gICAgc3VibWl0QnV0dG9uLFxuICAgIGNsb3NlUHJvamVjdEZvcm1CdXR0b25cbiAgKVxuXG4gIHRvZ2dsZU1vZGFsKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBmb3JtRWxlbSxcbiAgICB0aXRsZUlucHV0LFxuICAgIGNsb3NlUHJvamVjdEZvcm1CdXR0b25cbiAgfVxufVxuXG5mdW5jdGlvbiBlZGl0UHJvamVjdChwcm9qZWN0Q29udGFpbmVyLCBuZXdUaXRsZSkge1xuICBwcm9qZWN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZVwiKS50ZXh0Q29udGVudCA9IG5ld1RpdGxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0KHByb2plY3RDb250YWluZXIpIHtcbiAgcHJvamVjdENvbnRhaW5lci5yZW1vdmUoKTtcbn1cblxubGV0IHByZXZpb3VzUHJvamVjdDtcbmZ1bmN0aW9uIGhpZ2hsaWdodFByb2plY3QoY3VycmVudFByb2plY3QpIHtcbiAgaWYgKHByZXZpb3VzUHJvamVjdCAhPT0gdW5kZWZpbmVkKSBwcmV2aW91c1Byb2plY3QucXVlcnlTZWxlY3RvcihcIi5zZWxlY3QtY29udGFpbmVyXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJjaG9zZW5cIik7XG4gIGN1cnJlbnRQcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0LWNvbnRhaW5lclwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiY2hvc2VuXCIpO1xuICBwcmV2aW91c1Byb2plY3QgPSBjdXJyZW50UHJvamVjdDtcbn1cblxubGV0IHByZXZpb3VzTmF2O1xuZnVuY3Rpb24gaGlnaGxpZ2h0TmF2KGN1cnJlbnROYXYpIHtcbiAgaWYgKHByZXZpb3VzTmF2ICE9PSB1bmRlZmluZWQpIHByZXZpb3VzTmF2LmNsYXNzTGlzdC50b2dnbGUoXCJoaWdobGlnaHRlZFwiKTtcbiAgY3VycmVudE5hdi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlnaGxpZ2h0ZWRcIik7XG4gIHByZXZpb3VzTmF2ID0gY3VycmVudE5hdjtcbn1cblxuXG5mdW5jdGlvbiBidWlsZERlbGV0aW9uRm9ybShvYmplY3QpIHtcbiAgY29uc3QgZm9ybUVsZW0gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImZvcm1cIiwgXCJkZWxldGlvbi1mb3JtXCIsIFwiXCIpO1xuICBib2R5LmFwcGVuZENoaWxkKGZvcm1FbGVtKTtcblxuICBjb25zdCBkZWxldGlvbk1lc3NhZ2UgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImRpdlwiLCBcImRlbGV0aW9uLW1lc3NhZ2VcIiwgYEFyZSB5b3Ugc3VyZT9cXG4ke29iamVjdC50aXRsZX0gd2lsbCBiZSBnb25lIGZvcmV2ZXJgKTtcbiAgY29uc3QgeWVzQnV0dG9uID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJidXR0b25cIiwgXCJkZWxldGlvbi15ZXNcIiwgXCJZZXNcIik7XG4gIGNvbnN0IG5vQnV0dG9uID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJidXR0b25cIiwgXCJkZWxldGlvbi1ub1wiLCBcIk5vXCIpXG4gIGNvbnN0IGNsb3NlRGVsZXRpb25Gb3JtQnV0dG9uID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJidXR0b25cIiwgXCJjbG9zZS1mb3JtXCIsIFwi4pyVXCIpO1xuXG4gIGZvcm1FbGVtLmFwcGVuZChcbiAgICBkZWxldGlvbk1lc3NhZ2UsXG4gICAgeWVzQnV0dG9uLFxuICAgIG5vQnV0dG9uLFxuICAgIGNsb3NlRGVsZXRpb25Gb3JtQnV0dG9uXG4gIClcblxuICB0b2dnbGVNb2RhbCgpO1xuXG4gIHJldHVybiB7XG4gICAgZm9ybUVsZW0sXG4gICAgeWVzQnV0dG9uLFxuICAgIG5vQnV0dG9uLFxuICAgIGNsb3NlRGVsZXRpb25Gb3JtQnV0dG9uXG4gIH1cbn1cblxuXG5mdW5jdGlvbiByZW1vdmVGb3JtKGZvcm0pIHtcbiAgZm9ybS5yZW1vdmUoKTtcbiAgdG9nZ2xlTW9kYWwoKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlTW9kYWwoKSB7XG4gIG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG59XG5cbmZ1bmN0aW9uIHNldE1haW5UaXRsZSh0aXRsZSkge1xuICBtYWluVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGJ1aWxkVGFza0Zvcm0sXG4gIGRpc3BsYXlUYXNrLFxuICB0b2dnbGVUYXNrQ29tcGxldGlvbixcbiAgYnVpbGRUYXNrRWRpdCxcbiAgYnVpbGRUYXNrSW5mbyxcbiAgZWRpdFRhc2ssXG4gIHJlbW92ZVRhc2ssXG4gIGNsZWFyVGFza0NvbnRhaW5lcixcbiAgYnVpbGRQcm9qZWN0Rm9ybSxcbiAgZGlzcGxheVByb2plY3QsXG4gIGJ1aWxkUHJvamVjdEVkaXQsXG4gIGVkaXRQcm9qZWN0LFxuICByZW1vdmVQcm9qZWN0LFxuICBoaWdobGlnaHRQcm9qZWN0LFxuICBoaWdobGlnaHROYXYsXG4gIHJlbW92ZUZvcm0sXG4gIGJ1aWxkRGVsZXRpb25Gb3JtLFxuICBzZXRNYWluVGl0bGUsXG4gIHNob3dUYXNrRm9ybSxcbiAgc2hvd1Byb2plY3RGb3JtLFxuICBuYXZBbGwsXG4gIG5hdlRvZGF5LFxuICBuYXZXZWVrLFxuICBuYXZJbXBvcnRhbnQsXG4gIG1vZGFsXG59IiwiY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgaW1wb3J0YW5jZSwgZHVlRGF0ZSwgcHJvamVjdE5hbWUsIGNvbXBsZXRpb24pIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuaW1wb3J0YW5jZSA9IGltcG9ydGFuY2U7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XG4gICAgdGhpcy5jb21wbGV0aW9uID0gZmFsc2U7XG4gIH1cblxuICBnZXQgaW1wb3J0YW5jZVN5bWJvbCgpIHtcbiAgICBpZiAodGhpcy5pbXBvcnRhbmNlKSByZXR1cm4gXCIhXCI7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICB0aW1lTGVmdCgpIHtcbiAgICBjb25zdCBtc0xlZnQgPSBuZXcgRGF0ZSh0aGlzLmR1ZURhdGUpIC0gbmV3IERhdGUoKTtcbiAgICBpZiAobXNMZWZ0IDwgLTYwMDAwKSByZXR1cm4gXCLwn5WQIFBhc3QgRHVlXCI7XG4gICAgY29uc3QgbWludXRlc0xlZnQgPSBNYXRoLmNlaWwobXNMZWZ0IC8gMTAwMCAvIDYwKTtcbiAgICBpZiAobWludXRlc0xlZnQgPCA2MCkgcmV0dXJuIGDwn5WQICR7bWludXRlc0xlZnR9IG1pbnV0ZXMgbGVmdGA7XG4gICAgY29uc3QgaHJzTGVmdCA9IE1hdGguY2VpbChtaW51dGVzTGVmdCAvIDYwKTtcbiAgICBpZiAoaHJzTGVmdCA8IDI0KSByZXR1cm4gYPCflZAgJHtocnNMZWZ0fSBob3VycyBsZWZ0YDtcbiAgICByZXR1cm4gYPCflZAgJHtNYXRoLmNlaWwoaHJzTGVmdCAvIDI0KX0gZGF5cyBsZWZ0YDtcbiAgfVxufVxuXG5jbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICB9XG59XG5cblxubGV0IGFsbFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFsbFByb2plY3RzXCIpKTtcbmlmICgoYWxsUHJvamVjdHMgPT09IG51bGwpIHx8IChhbGxQcm9qZWN0cy5sZW5ndGggPT09IDApKSB7XG4gIGFsbFByb2plY3RzID0gW107XG4gIGNyZWF0ZU5ld1Byb2plY3QoXCJHZW5lcmFsIFRhc2tzXCIpO1xufSBlbHNlIHtcbiAgYWxsUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2godGFzayA9PiByZWdhaW5UYXNrTWV0aG9kcyh0YXNrKSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZWdhaW5UYXNrTWV0aG9kcyh0YXNrKSB7XG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZih0YXNrLCBUYXNrLnByb3RvdHlwZSk7XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGltcG9ydGFuY2UsIGR1ZURhdGUsIHByb2plY3ROYW1lKSB7XG4gIHJldHVybiBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGltcG9ydGFuY2UsIGR1ZURhdGUsIHByb2plY3ROYW1lKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlVGFza0NvbXBsZXRpb24odGFzaykge1xuICB0YXNrLmNvbXBsZXRpb24gPSAhdGFzay5jb21wbGV0aW9uO1xufVxuXG5mdW5jdGlvbiBlZGl0VGFzayh0YXNrLCBuZXdUaXRsZSwgbmV3RGVzY3JpcHRpb24sIG5ld0ltcG9ydGFuY2UsIG5ld0RhdGUpIHtcbiAgdGFzay50aXRsZSA9IG5ld1RpdGxlO1xuICB0YXNrLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gIHRhc2suaW1wb3J0YW5jZSA9IG5ld0ltcG9ydGFuY2U7XG4gIHRhc2suZHVlRGF0ZSA9IG5ld0RhdGU7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tUb1Byb2plY3QodGFzaywgcHJvamVjdCkge1xuICBwcm9qZWN0LnRhc2tzLnB1c2godGFzayk7XG4gIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFzayh0YXNrKSB7XG4gIGNvbnN0IHRhc2tBcnJheSA9IGFsbFByb2plY3RzLmZpbmQocHJvamVjdCA9PiB0YXNrLnByb2plY3ROYW1lID09PSBwcm9qZWN0LnRpdGxlKS50YXNrcztcbiAgY29uc29sZS5sb2codGFza0FycmF5KTtcbiAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xuICBjb25zdCB0YXNrSW5kZXggPSB0YXNrQXJyYXkuaW5kZXhPZih0YXNrKTtcbiAgdGFza0FycmF5LnNwbGljZSh0YXNrSW5kZXgsIDEpO1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QodGl0bGUpIHtcbiAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlKTtcbiAgYWxsUHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgcmV0dXJuIHByb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGVkaXRQcm9qZWN0KHByb2plY3QsIG5ld1RpdGxlKSB7XG4gIHByb2plY3QudGl0bGUgPSBuZXdUaXRsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChwcm9qZWN0KSB7XG4gIGNvbnN0IHByb2plY3RJbmRleCA9IGFsbFByb2plY3RzLmluZGV4T2YocHJvamVjdCk7XG4gIGFsbFByb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xuICBjb25zb2xlLmxvZyhhbGxQcm9qZWN0cyk7XG59XG5cblxuZnVuY3Rpb24gZ2V0QWxsUHJvamVjdHNBbmRUYXNrcygpIHtcbiAgcmV0dXJuIGFsbFByb2plY3RzO1xufVxuXG5mdW5jdGlvbiBzYXZlQ2hhbmdlcygpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhbGxQcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0cykpO1xufVxuXG5mdW5jdGlvbiBnZXRGaWx0ZXJlZFRhc2tzKGNyaXRlcmlhKSB7XG4gIGNvbnN0IGZpbHRlcmVkVGFza3MgPSBbXTtcblxuICBpZiAoY3JpdGVyaWEgPT09IFwiQWxsXCIpIHtcbiAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKHRhc2sgPT4gZmlsdGVyZWRUYXNrcy5wdXNoKHRhc2spKTtcbiAgICB9KVxuICB9XG4gIGlmIChjcml0ZXJpYSA9PT0gXCJUb2RheVwiKSB7XG4gICAgYWxsUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgIHByb2plY3QudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLmdldERhdGUoKTtcbiAgICAgICAgY29uc3QgZHVlRGF5ID0gbmV3IERhdGUodGFzay5kdWVEYXRlKS5nZXREYXRlKCk7XG4gICAgICAgIGlmICh0b2RheSA9PT0gZHVlRGF5KSBmaWx0ZXJlZFRhc2tzLnB1c2godGFzayk7XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbiAgaWYgKGNyaXRlcmlhID09PSBcIldlZWtcIikge1xuICAgIGFsbFByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGNvbnN0IGRheURpZmZlcmVuY2UgPSAoKG5ldyBEYXRlKHRhc2suZHVlRGF0ZSkgLSBuZXcgRGF0ZSgpKSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgIGlmICgoZGF5RGlmZmVyZW5jZSA8PSA3KSAmJiAoZGF5RGlmZmVyZW5jZSA+IDApKSBmaWx0ZXJlZFRhc2tzLnB1c2godGFzayk7XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbiAgaWYgKGNyaXRlcmlhID09PSBcIkltcG9ydGFudFwiKSB7XG4gICAgYWxsUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgIHByb2plY3QudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgaWYgKHRhc2suaW1wb3J0YW5jZSkgZmlsdGVyZWRUYXNrcy5wdXNoKHRhc2spO1xuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGZpbHRlcmVkVGFza3M7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGVUYXNrLFxuICB0b2dnbGVUYXNrQ29tcGxldGlvbixcbiAgZWRpdFRhc2ssXG4gIGFkZFRhc2tUb1Byb2plY3QsXG4gIHJlbW92ZVRhc2ssXG4gIGNyZWF0ZU5ld1Byb2plY3QsXG4gIGVkaXRQcm9qZWN0LFxuICByZW1vdmVQcm9qZWN0LFxuICBnZXRBbGxQcm9qZWN0c0FuZFRhc2tzLFxuICBzYXZlQ2hhbmdlcyxcbiAgcmVnYWluVGFza01ldGhvZHMsXG4gIGdldEZpbHRlcmVkVGFza3Ncbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChlbGVtVHlwZSwgY2xhc3NOYW1lLCBjb250ZW50KSB7XG4gIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1UeXBlKTtcbiAgdGVtcC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gIHRlbXAudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICByZXR1cm4gdGVtcDtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=