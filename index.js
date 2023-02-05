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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --blue: rgb(51, 146, 206);\n  --blue-input: rgb(23, 88, 129);\n  --lightblue: rgb(202, 227, 243);\n  --blue-border: rgb(2, 80, 128);\n  --darkblue: rgb(0, 58, 94);\n  --lightgrey: rgb(235, 235, 235);\n  --task-completed-background: rgb(211, 211, 211);\n  --modal: rgba(180, 180, 180, 0.3);\n  --red: rgb(255, 107, 107);\n  --important: rgb(226, 166, 0);\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  text-decoration: none;\n  font-family: inherit;\n  color: inherit;\n  background-color: inherit;\n}\n\n@font-face {\n  font-family: Roboto;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\nbody {\n  display: grid;\n  grid-template-columns: 400px minmax(550px, 1fr);\n  grid-template-rows: 70px 1fr;\n  font-family: Roboto;\n}\n\nform {\n  position: fixed;\n  z-index: 5;\n  color: var(--darkblue);\n  background-color: white;\n  border: 1px solid var(--blue-border);\n  border-radius: 8px;\n  overflow-wrap: break-word;\n  overflow: hidden;\n}\n\nform button:active {\n  transform: scale(0.95);\n  transition: 0.05s;\n}\n\ninput,\ntextarea {\n  color: var(--blue-input);\n  padding: 4px;\n}\n\n/* Header */\nheader {\n  grid-column: 1 / 3;\n  background-color: var(--blue);\n  padding: 8px;\n  padding-left: 20px;\n}\n\nheader > a {\n  color: white;\n  font-size: 48px;\n}\n\n/* Sidebar */\n.sidebar {\n  background-color: var(--lightgrey);\n}\n\nspan.projects-heading {\n  color: var(--blue);\n  font-size: 48px;\n  margin: 20px;\n}\n\nbutton.show-project-form {\n  position: relative;\n  bottom: 3px;\n  right: 15px;\n  background-color: var(--blue);\n  color: white;\n  font-size: 28px;\n  height: 35px;\n  width: 35px;\n  border: none;\n  border-radius: 50%;\n}\n\n.project-form {\n  top: calc(50% - 60px);\n  left: calc(50% - 150px);\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  gap: 8px;\n  padding: 12px;\n  height: 120px;\n  width: 300px;\n  font-size: 24px;\n}\n\ninput.project-title-input {\n  font-size: 18px;\n}\n\nbutton.project-form-submit {\n  align-self: flex-end;\n  color: white;\n  background-color: var(--blue);\n  border: none;\n  border-radius: 8px;\n  padding: 4px 20px;\n  font-size: 24px;\n}\n\n/* Sidebar -> Navigation */ \n.general-navigation > div {\n  display: flex;\n  justify-content: center;\n  width: 90%;\n  background-color: white;\n  border: 2px solid darkgrey;\n  border-radius: 4px;\n  padding: 4px;\n  margin: 5%;\n  color: var(--blue-border);\n  font-size: 30px;\n}\n\n.general-navigation > div.highlighted,\n.project-navigation > div.highlighted {\n  background-color: var(--lightblue);\n  border-color: var(--blue-border);\n}\n\n.project-navigation > div.highlighted {\n  border-left-color: var(--blue);\n}\n\n.general-navigation > div:hover,\n.project-container:hover {\n  border-color: var(--blue);\n  cursor: pointer;\n}\n\n\n.project-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 50px;\n  width: 90%;\n  text-overflow: ellipsis;\n  font-size: 30px;\n  background-color: white;\n  border: 2px solid darkgrey;\n  border-left: 2px solid var(--blue);\n  border-radius: 4px;\n  margin: 5%;\n  color: var(--blue-border);\n  font-size: 30px;\n}\n\n.project-container button:disabled {\n  color: darkgrey;\n}\n\n.select-container {\n  display: flex;\n  align-items: center;\n  width: 30px;\n  min-width: 30px;\n  height: 50px;\n  border-radius: 2px;\n  background-color: var(--blue);\n  color: white;\n  font-size: 30px;\n}\n\n.select-container.chosen::before {\n  content: \"➔\";\n}\n\n.project-title {\n  margin-right: auto;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  padding: 4px;\n}\n\n.project-button-container > * {\n  padding: 2px;\n  margin: 2px;\n  font-size: 14px;\n}\n\n.project-button-container {\n  display: flex;\n  justify-content: flex-end;\n  z-index: -1;\n  width: 0;\n}\n\n.project-container:hover > .project-button-container{\n  width: 120px;\n  z-index: 1;\n}\n\n/* Main */\nmain {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: white;\n\n  min-width: 0;\n}\n\nmain > .all-tasks-container {\n  width: min(1000px, 80%);\n}\n\n.main-top-container {\n  width: min(1000px, 80%);\n  display: grid;\n  grid-template-columns: 200px 1fr 200px;\n}\n\n.main-title {\n  position: relative;\n  text-align: center;\n  font-size: 52px;\n  color: var(--blue-border);\n  margin: 20px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\nselect.task-sort {\n  justify-self: end;\n  align-self: center;\n  height: 40px;\n\n  padding: 4px;\n  border: 2px solid var(--darkblue);\n  border-radius: 4px;\n  font-size: 18px;\n  color:var(--darkblue);\n}\n\nselect.task-sort:active {\n  pointer-events: none;\n}\n\n\n/* Main -> Task Form */\nmain > button.show-task-form {\n  position: fixed;\n  bottom: 50px;\n  right: 50px;\n  z-index: 3;\n\n  color: white;\n  background-color: var(--blue);\n  font-size: 48px;\n  height: 80px;\n  width: 80px;\n  border: solid 1px var(--lightgrey);\n  border-radius: 50%;\n}\n\n.task-form {\n  top: calc(50% - 175px);\n  left: calc(50% - 150px);\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  height: 350px;\n  width: 300px;\n  padding: 10px;\n}\n\n.task-form > * {\n  font-size: 18px;\n  width: 100%;\n}\n\n#importance-input {\n  height: 20px;\n  width: 20px;\n  position: relative;\n  top: 4px;\n  left: 4px;\n}\n\nbutton.submit-task-form {\n  background-color: var(--blue);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 24px;\n  padding: 8px;\n  width: 100px;\n  align-self: center;\n}\n\nbutton.close-form {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 30px;\n  height: 30px;\n  font-size: 25px;\n  text-align: center;\n  line-height: 25px;\n  color: white;\n  background-color: var(--red);\n  border: none;\n  border-radius: 6px;\n}\n\n/* Main -> Task Info, Edit and Deletion Forms */\n.task-form-label {\n  font-size: 24px;\n}\n\n.task-form-label.important {\n  color: var(--important)\n}\n\n.task-form-label.unimportant {\n  color: var(--blue);\n}\n\n.task-form-completion {\n  color: green;\n}\n\n/* Main -> Displayed Tasks */\n.task-container {\n  position: relative;\n  display: grid;\n  grid-template-columns: minmax(50px, 1fr) 30px 150px 140px;\n  align-items: center;\n  color: var(--darkblue);\n  background-color: var(--lightgrey);\n  padding: 4px 12px;\n  margin: 8px 0px;\n  border: 1px solid darkgrey;\n  border-radius: 4px;\n  width: 100%;\n}\n\n.task-container:hover {\n  border-color: var(--blue);\n}\n\n.task-container.completed {\n  background-color: var(--task-completed-background);\n}\n\n.task-container.completed > * {\n  color: grey;\n}\n\n.task-container.completed::before {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  z-index: 2;\n  content: \" \";\n  width: 100%;\n  border: 1px solid var(--blue);\n}\n\n.task-container.completed::after {\n  position: absolute;\n  top: 5px;\n  left: -30px;\n  content: \"✔\";\n  font-size: 34px;\n  color: var(--blue);\n}\n\n.task-title {\n  font-size: 28px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.task-importance {\n  position: relative;\n\n  color: var(--important);\n  font-size: 34px;\n  padding: 0px 8px;\n}\n\n.task-importance:hover::before {\n  position: absolute;\n  top: -8px;\n  left: -28px;\n  z-index: 1;\n\n  content: \"Important\";\n  font-size: 18px;\n  color: var(--important);\n}\n\n.task-date {\n  font-size: 18px;\n}\n\n.task-button-container {\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-self: end;\n}\n\n.task-button-container > button {\n  z-index: 3;\n  margin: 0px 4px;\n  padding: 2px;\n  border-color: var(--darkblue);\n  border-radius: 4px;\n}\n\n.task-button-container > button:hover {\n  transform: scale(1.1);\n}\n\n.task-info {\n  border: none;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.edit-task {\n  font-size: 20px;\n}\n\n.delete-task {\n  font-size: 20px;\n  width: 25px;\n}\n\n/* Modal */\n#modal {\n  position: fixed;\n  z-index: 4;\n  height: 100%;\n  width: 100%;\n  background-color: var(--modal);\n}\n\n#modal.hidden {\n  z-index: -1;\n}\n\n/* Deletion Form (Same for Tasks and Projects) */\n.deletion-form {\n  top: calc(50% - 75px);\n  right: calc(50% - 100px);\n  height: 150px;\n  width: 200px;\n\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr 50px;\n}\n\n.deletion-message {\n  grid-column: 1 / 3;\n  align-self: center;\n  justify-self: center;\n  padding: 8px;\n  font-size: 18px;\n}\n\n.deletion-title {\n  grid-column: 1 / 3;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding: 0px 8px;\n  font-size: 20px;\n  text-align: center;\n}\n\n.deletion-yes {\n  color: white;\n  background-color: var(--blue);\n}\n\n.deletion-no {\n  color: white;\n  background-color: var(--red);\n}\n\n.deletion-yes,\n.deletion-no {\n  font-size: 18px;\n  border: none;\n  margin: 8px;\n  border-radius: 8px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --blue: rgb(51, 146, 206);\n  --blue-input: rgb(23, 88, 129);\n  --lightblue: rgb(202, 227, 243);\n  --blue-border: rgb(2, 80, 128);\n  --darkblue: rgb(0, 58, 94);\n  --lightgrey: rgb(235, 235, 235);\n  --task-completed-background: rgb(211, 211, 211);\n  --modal: rgba(180, 180, 180, 0.3);\n  --red: rgb(255, 107, 107);\n  --important: rgb(226, 166, 0);\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  text-decoration: none;\n  font-family: inherit;\n  color: inherit;\n  background-color: inherit;\n}\n\n@font-face {\n  font-family: Roboto;\n  src: url(\"./assets/fonts/Roboto-Medium.ttf\");\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\nbody {\n  display: grid;\n  grid-template-columns: 400px minmax(550px, 1fr);\n  grid-template-rows: 70px 1fr;\n  font-family: Roboto;\n}\n\nform {\n  position: fixed;\n  z-index: 5;\n  color: var(--darkblue);\n  background-color: white;\n  border: 1px solid var(--blue-border);\n  border-radius: 8px;\n  overflow-wrap: break-word;\n  overflow: hidden;\n}\n\nform button:active {\n  transform: scale(0.95);\n  transition: 0.05s;\n}\n\ninput,\ntextarea {\n  color: var(--blue-input);\n  padding: 4px;\n}\n\n/* Header */\nheader {\n  grid-column: 1 / 3;\n  background-color: var(--blue);\n  padding: 8px;\n  padding-left: 20px;\n}\n\nheader > a {\n  color: white;\n  font-size: 48px;\n}\n\n/* Sidebar */\n.sidebar {\n  background-color: var(--lightgrey);\n}\n\nspan.projects-heading {\n  color: var(--blue);\n  font-size: 48px;\n  margin: 20px;\n}\n\nbutton.show-project-form {\n  position: relative;\n  bottom: 3px;\n  right: 15px;\n  background-color: var(--blue);\n  color: white;\n  font-size: 28px;\n  height: 35px;\n  width: 35px;\n  border: none;\n  border-radius: 50%;\n}\n\n.project-form {\n  top: calc(50% - 60px);\n  left: calc(50% - 150px);\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  gap: 8px;\n  padding: 12px;\n  height: 120px;\n  width: 300px;\n  font-size: 24px;\n}\n\ninput.project-title-input {\n  font-size: 18px;\n}\n\nbutton.project-form-submit {\n  align-self: flex-end;\n  color: white;\n  background-color: var(--blue);\n  border: none;\n  border-radius: 8px;\n  padding: 4px 20px;\n  font-size: 24px;\n}\n\n/* Sidebar -> Navigation */ \n.general-navigation > div {\n  display: flex;\n  justify-content: center;\n  width: 90%;\n  background-color: white;\n  border: 2px solid darkgrey;\n  border-radius: 4px;\n  padding: 4px;\n  margin: 5%;\n  color: var(--blue-border);\n  font-size: 30px;\n}\n\n.general-navigation > div.highlighted,\n.project-navigation > div.highlighted {\n  background-color: var(--lightblue);\n  border-color: var(--blue-border);\n}\n\n.project-navigation > div.highlighted {\n  border-left-color: var(--blue);\n}\n\n.general-navigation > div:hover,\n.project-container:hover {\n  border-color: var(--blue);\n  cursor: pointer;\n}\n\n\n.project-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 50px;\n  width: 90%;\n  text-overflow: ellipsis;\n  font-size: 30px;\n  background-color: white;\n  border: 2px solid darkgrey;\n  border-left: 2px solid var(--blue);\n  border-radius: 4px;\n  margin: 5%;\n  color: var(--blue-border);\n  font-size: 30px;\n}\n\n.project-container button:disabled {\n  color: darkgrey;\n}\n\n.select-container {\n  display: flex;\n  align-items: center;\n  width: 30px;\n  min-width: 30px;\n  height: 50px;\n  border-radius: 2px;\n  background-color: var(--blue);\n  color: white;\n  font-size: 30px;\n}\n\n.select-container.chosen::before {\n  content: \"➔\";\n}\n\n.project-title {\n  margin-right: auto;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  padding: 4px;\n}\n\n.project-button-container > * {\n  padding: 2px;\n  margin: 2px;\n  font-size: 14px;\n}\n\n.project-button-container {\n  display: flex;\n  justify-content: flex-end;\n  z-index: -1;\n  width: 0;\n}\n\n.project-container:hover > .project-button-container{\n  width: 120px;\n  z-index: 1;\n}\n\n/* Main */\nmain {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: white;\n\n  min-width: 0;\n}\n\nmain > .all-tasks-container {\n  width: min(1000px, 80%);\n}\n\n.main-top-container {\n  width: min(1000px, 80%);\n  display: grid;\n  grid-template-columns: 200px 1fr 200px;\n}\n\n.main-title {\n  position: relative;\n  text-align: center;\n  font-size: 52px;\n  color: var(--blue-border);\n  margin: 20px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\nselect.task-sort {\n  justify-self: end;\n  align-self: center;\n  height: 40px;\n\n  padding: 4px;\n  border: 2px solid var(--darkblue);\n  border-radius: 4px;\n  font-size: 18px;\n  color:var(--darkblue);\n}\n\nselect.task-sort:active {\n  pointer-events: none;\n}\n\n\n/* Main -> Task Form */\nmain > button.show-task-form {\n  position: fixed;\n  bottom: 50px;\n  right: 50px;\n  z-index: 3;\n\n  color: white;\n  background-color: var(--blue);\n  font-size: 48px;\n  height: 80px;\n  width: 80px;\n  border: solid 1px var(--lightgrey);\n  border-radius: 50%;\n}\n\n.task-form {\n  top: calc(50% - 175px);\n  left: calc(50% - 150px);\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  height: 350px;\n  width: 300px;\n  padding: 10px;\n}\n\n.task-form > * {\n  font-size: 18px;\n  width: 100%;\n}\n\n#importance-input {\n  height: 20px;\n  width: 20px;\n  position: relative;\n  top: 4px;\n  left: 4px;\n}\n\nbutton.submit-task-form {\n  background-color: var(--blue);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 24px;\n  padding: 8px;\n  width: 100px;\n  align-self: center;\n}\n\nbutton.close-form {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 30px;\n  height: 30px;\n  font-size: 25px;\n  text-align: center;\n  line-height: 25px;\n  color: white;\n  background-color: var(--red);\n  border: none;\n  border-radius: 6px;\n}\n\n/* Main -> Task Info, Edit and Deletion Forms */\n.task-form-label {\n  font-size: 24px;\n}\n\n.task-form-label.important {\n  color: var(--important)\n}\n\n.task-form-label.unimportant {\n  color: var(--blue);\n}\n\n.task-form-completion {\n  color: green;\n}\n\n/* Main -> Displayed Tasks */\n.task-container {\n  position: relative;\n  display: grid;\n  grid-template-columns: minmax(50px, 1fr) 30px 150px 140px;\n  align-items: center;\n  color: var(--darkblue);\n  background-color: var(--lightgrey);\n  padding: 4px 12px;\n  margin: 8px 0px;\n  border: 1px solid darkgrey;\n  border-radius: 4px;\n  width: 100%;\n}\n\n.task-container:hover {\n  border-color: var(--blue);\n}\n\n.task-container.completed {\n  background-color: var(--task-completed-background);\n}\n\n.task-container.completed > * {\n  color: grey;\n}\n\n.task-container.completed::before {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  z-index: 2;\n  content: \" \";\n  width: 100%;\n  border: 1px solid var(--blue);\n}\n\n.task-container.completed::after {\n  position: absolute;\n  top: 5px;\n  left: -30px;\n  content: \"✔\";\n  font-size: 34px;\n  color: var(--blue);\n}\n\n.task-title {\n  font-size: 28px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.task-importance {\n  position: relative;\n\n  color: var(--important);\n  font-size: 34px;\n  padding: 0px 8px;\n}\n\n.task-importance:hover::before {\n  position: absolute;\n  top: -8px;\n  left: -28px;\n  z-index: 1;\n\n  content: \"Important\";\n  font-size: 18px;\n  color: var(--important);\n}\n\n.task-date {\n  font-size: 18px;\n}\n\n.task-button-container {\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-self: end;\n}\n\n.task-button-container > button {\n  z-index: 3;\n  margin: 0px 4px;\n  padding: 2px;\n  border-color: var(--darkblue);\n  border-radius: 4px;\n}\n\n.task-button-container > button:hover {\n  transform: scale(1.1);\n}\n\n.task-info {\n  border: none;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.edit-task {\n  font-size: 20px;\n}\n\n.delete-task {\n  font-size: 20px;\n  width: 25px;\n}\n\n/* Modal */\n#modal {\n  position: fixed;\n  z-index: 4;\n  height: 100%;\n  width: 100%;\n  background-color: var(--modal);\n}\n\n#modal.hidden {\n  z-index: -1;\n}\n\n/* Deletion Form (Same for Tasks and Projects) */\n.deletion-form {\n  top: calc(50% - 75px);\n  right: calc(50% - 100px);\n  height: 150px;\n  width: 200px;\n\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr 50px;\n}\n\n.deletion-message {\n  grid-column: 1 / 3;\n  align-self: center;\n  justify-self: center;\n  padding: 8px;\n  font-size: 18px;\n}\n\n.deletion-title {\n  grid-column: 1 / 3;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding: 0px 8px;\n  font-size: 20px;\n  text-align: center;\n}\n\n.deletion-yes {\n  color: white;\n  background-color: var(--blue);\n}\n\n.deletion-no {\n  color: white;\n  background-color: var(--red);\n}\n\n.deletion-yes,\n.deletion-no {\n  font-size: 18px;\n  border: none;\n  margin: 8px;\n  border-radius: 8px;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _modules_Connecting_Logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Connecting-Logic.js */ "./src/modules/Connecting-Logic.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



_modules_Connecting_Logic_js__WEBPACK_IMPORTED_MODULE_0__["default"].initialLoad();

/***/ }),

/***/ "./src/modules/Connecting-Logic.js":
/*!*****************************************!*\
  !*** ./src/modules/Connecting-Logic.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Storage_Module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage_Module */ "./src/modules/Storage_Module.js");
/* harmony import */ var _DOM_Module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM_Module */ "./src/modules/DOM_Module.js");



// Variables
let currentForm;
let currentProject;
let displayedTasks = [];

// Tasks
function addTaskToStorage(title, description, importance, dueDate) {
  const task = _Storage_Module__WEBPACK_IMPORTED_MODULE_0__["default"].createTask(title, description, importance, dueDate);
  _Storage_Module__WEBPACK_IMPORTED_MODULE_0__["default"].addTaskToProject(task, currentProject);
  return task;
}

function addTaskToDOM(task) {
  displayedTasks.push(task);
  const taskDOM = _DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].displayTask(task);
  taskDOM.taskContainer.addEventListener("click", () => taskClick_Callback(task, taskDOM.taskContainer));
  taskDOM.editTaskButton.addEventListener("click", (event) => taskEditButton_Callback(event, task, taskDOM.taskContainer));
  taskDOM.deleteTaskButton.addEventListener("click", (event) => taskDeleteButton_Callback(event, task, taskDOM.taskContainer));
  taskDOM.infoTaskButton.addEventListener("click", (event) => taskInfoButton_Callback(event, task));
}

function taskClick_Callback(task, taskContainer) {
  _Storage_Module__WEBPACK_IMPORTED_MODULE_0__["default"].toggleTaskCompletion(task);
  _DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].toggleTaskCompletion(taskContainer);
}

function taskInfoButton_Callback(event, task) {
  event.stopPropagation();
  currentForm = _DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].buildTaskInfo(task);
  currentForm.formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    _DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].removeForm(currentForm.formElem);
  })
}

function taskEditButton_Callback(event, task, taskContainer) {
  event.stopPropagation();
  currentForm = _DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].buildTaskEdit(task);
  currentForm.formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    editTask(task, taskContainer);
    _DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].removeForm(currentForm.formElem);
  })
  currentForm.closeEditForm.addEventListener("click", () => _DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].removeForm(currentForm.formElem));
}

function taskDeleteButton_Callback(event, task, taskContainer) {
  event.stopPropagation();
  currentForm = _DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].buildDeletionForm(task);
  currentForm.yesButton.addEventListener("click", () => {
    _Storage_Module__WEBPACK_IMPORTED_MODULE_0__["default"].removeTask(task);
    _DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].removeTask(taskContainer);
    displayedTasks.splice(displayedTasks.indexOf(task), 1);
  });
  currentForm.formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    _DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].removeForm(currentForm.formElem);
  });
}

function editTask(task, taskContainer) {
  _Storage_Module__WEBPACK_IMPORTED_MODULE_0__["default"].editTask(
    task, 
    currentForm.titleInput.value,
    currentForm.descriptionInput.value,
    currentForm.importanceInput.checked,
    currentForm.dateInput.value
  );
  _DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].editTask(task, taskContainer);
}

function replaceAllTasks(taskArray) {
  _DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].clearTaskContainer();
  displayedTasks = [];
  taskArray.forEach(task => addTaskToDOM(task));
}

// Projects
function addProjectToDOM(project) {
  const projectDOM = _DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].displayProject(project);
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
  currentForm = _DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].buildProjectEdit(project.title);
  currentForm.formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    editProject(project, currentForm.titleInput.value, projectContainer);
    _DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].removeForm(currentForm.formElem);
  })
  currentForm.closeProjectFormButton.addEventListener("click", () => _DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].removeForm(currentForm.formElem));
}

function projectDeleteButton_Callback(event, project, projectContainer) {
  event.stopPropagation();
  currentForm = _DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].buildDeletionForm(project);
  currentForm.yesButton.addEventListener("click", () => deleteProject(project, projectContainer));
  currentForm.formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    _DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].removeForm(currentForm.formElem);
  });
}

function deleteProject(project, projectContainer) {
  _Storage_Module__WEBPACK_IMPORTED_MODULE_0__["default"].removeProject(project);
  _DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].removeProject(projectContainer);
  selectGeneralProject();
}

function selectProject(project, projectContainer) {
  currentProject = project;
  _DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].highlightProject(projectContainer);
  _DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].highlightNav(projectContainer);
  replaceAllTasks(project.tasks);
  _DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].setMainTitle(project.title);
}

function selectGeneralProject() {
  selectProject(_Storage_Module__WEBPACK_IMPORTED_MODULE_0__["default"].getAllProjectsAndTasks()[0], document.querySelector(".project-container"));
}

function editProject(project, newTitle, projectContainer) {
  _Storage_Module__WEBPACK_IMPORTED_MODULE_0__["default"].editProject(project, newTitle);
  _DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].editProject(projectContainer, newTitle);
}

// 2 main Buttons (Add task, Add project)
_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].showTaskForm.addEventListener("click", () => {
  currentForm = _DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].buildTaskForm(currentProject);
  currentForm.formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    const task = addTaskToStorage(
      currentForm.titleInput.value, 
      currentForm.descriptionInput.value, 
      currentForm.importanceInput.checked,
      currentForm.dateInput.value,
    );
    addTaskToDOM(task);
    _DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].removeForm(currentForm.formElem);
  });
  currentForm.closeTaskForm.addEventListener("click", () => _DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].removeForm(currentForm.formElem));
})

_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].showProjectForm.addEventListener("click", () => {
  currentForm = _DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].buildProjectForm();
  currentForm.formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    const projectName = event.target.children[1].value
    const project = _Storage_Module__WEBPACK_IMPORTED_MODULE_0__["default"].createNewProject(projectName);
    addProjectToDOM(project);
    _DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].removeForm(currentForm.formElem);
  });
  currentForm.closeProjectFormButton.addEventListener("click", () => _DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].removeForm(currentForm.formElem));
});

// Task filtering and sorting
_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].navAll.addEventListener("click", event => topNav_Callback(event, "All"));
_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].navToday.addEventListener("click", event => topNav_Callback(event, "Today"));
_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].navTomorrow.addEventListener("click", event => topNav_Callback(event, "Tomorrow"));
_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].navWeek.addEventListener("click", event => topNav_Callback(event, "Week"));
_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].navImportant.addEventListener("click", event => topNav_Callback(event, "Important"));
_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].navCompleted.addEventListener("click", event => topNav_Callback(event, "Completed"));

function topNav_Callback(event, criteria) {
  _DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].highlightNav(event.target);
  const filteredArray = _Storage_Module__WEBPACK_IMPORTED_MODULE_0__["default"].getFilteredTasks(criteria);
  replaceAllTasks(filteredArray);
  _DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].setMainTitle(criteria);
}

_DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].taskSort.addEventListener("click", (event) => sortTasks(event))

function sortTasks(event) {
  const criteria = event.target.value;
  if (criteria === "default") return;
  const sorted = _Storage_Module__WEBPACK_IMPORTED_MODULE_0__["default"].sortTasks(displayedTasks, criteria);
  replaceAllTasks(sorted);
}

// Initial page load
function initialLoad() {            
  const allProjects = _Storage_Module__WEBPACK_IMPORTED_MODULE_0__["default"].getAllProjectsAndTasks();
  allProjects.forEach(project => addProjectToDOM(project));
  selectGeneralProject();
  document.querySelector(".project-container:first-child button.delete-project").disabled = true;
  _DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].navAll.click();
  window.addEventListener("beforeunload", _Storage_Module__WEBPACK_IMPORTED_MODULE_0__["default"].saveChanges);
  _DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].modal.addEventListener("click", () => _DOM_Module__WEBPACK_IMPORTED_MODULE_1__["default"].removeForm(currentForm.formElem));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  initialLoad
});


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
const navTomorrow = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "tomorrow-projects", "Tomorrow");
const navWeek = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "this-week-projects", "Week");
const navImportant = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "important-projects", "Important");
const navCompleted = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "completed-projects", "Completed");
generalNav.append(
  navAll,
  navToday,
  navTomorrow,
  navWeek,
  navImportant,
  navCompleted
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
const mainTopContainer = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "main-top-container", "")
const mainTitle = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("span", "main-title", "")
const taskSort = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("select", "task-sort", "");
taskSort.innerHTML = `
<option value = "default">Sort By</option>
<option value = "recent">Recently Added</option>
<option value = "time left">Time Left</option>
<option value = "alphabetic">A-Z</option>
`;
mainTopContainer.append(
  document.createElement("span"),
  mainTitle,
  taskSort
)
const containerOfAllTasks = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "all-tasks-container", "");
main.append(
  mainTopContainer,
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

// Task (Creation Form)
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

// Displayed Tasks
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
}

// Task (Edit, Info, Deletion Forms)
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

  const titleLabel = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("span", "task-form-label", "Task:");
  const taskCompletion = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("span", "task-form-completion", "")
  titleLabel.appendChild(taskCompletion);
  if (task.completion) taskCompletion.textContent = " Done";

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
    titleLabel,
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

// Project (Creation Form)
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

// Displayed projects
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

function editProject(projectContainer, newTitle) {
  projectContainer.querySelector(".project-title").textContent = newTitle;
}

function removeProject(projectContainer) {
  projectContainer.remove();
}

// Project (Edit and Deletion Forms)
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

function buildDeletionForm(object) {
  const formElem = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("form", "deletion-form", "");
  body.appendChild(formElem);

  const deletionMessageStart = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "deletion-message", "Are you sure?");
  const objectTitle = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "deletion-title", object.title);
  const deletionMessageFinish = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "deletion-message", "will be gone forever");
  const yesButton = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "deletion-yes", "Yes");
  const noButton = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "deletion-no", "No")
  const closeDeletionFormButton = (0,_create_element_custom_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "close-form", "✕");

  formElem.append(
    deletionMessageStart,
    objectTitle,
    deletionMessageFinish,
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

// Sidebar Highlighting
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

// General functions
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
  navTomorrow,
  navWeek,
  navImportant,
  navCompleted,
  taskSort,
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
  constructor(title, description, importance, dueDate, completion) {
    this.title = title;
    this.description = description;
    this.importance = importance;
    this.dueDate = dueDate;
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

// Local storage
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

function saveChanges() {
  localStorage.setItem("allProjects", JSON.stringify(allProjects));
}

// Tasks
function createTask(title, description, importance, dueDate) {
  return new Task(title, description, importance, dueDate);
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
  const taskProject = allProjects.find(project => project.tasks.includes(task));
  const taskArray = taskProject.tasks;
  const taskIndex = taskArray.indexOf(task);
  taskArray.splice(taskIndex, 1);
}

function toggleTaskCompletion(task) {
  task.completion = !task.completion;
}

// Projects
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
}

function getAllProjectsAndTasks() {
  return allProjects;
}

// Filtering Tasks (sidebar navigation)
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
  if (criteria === "Tomorrow") {
    allProjects.forEach(project => {
      project.tasks.forEach(task => {
        const tomorrow = new Date().getDate() + 1;
        const dueDay = new Date(task.dueDate).getDate();
        if (tomorrow === dueDay) filteredTasks.push(task);
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
  if (criteria === "Completed") {
    allProjects.forEach(project => {
      project.tasks.forEach(task => {
        if (task.completion) filteredTasks.push(task);
      })
    })
  }

  return filteredTasks;
}

// Sorting Tasks
let previousCriteria;
let sorted;
function sortTasks(tasks, criteria) {
  if (previousCriteria === criteria) {
    sorted.reverse()
    return sorted;
  };
  previousCriteria = criteria;

  switch (criteria) {
    case "recent":
      sorted = [...tasks].reverse();
      break;
    case "time left":
      sorted = [...tasks].sort((task1, task2) => {return new Date(task1.dueDate) - new Date(task2.dueDate);});
      break;
    case "alphabetic":
      sorted = [...tasks].sort((task1, task2) => {if (task1.title < task2.title) return -1;});
      break;
  }
  return sorted;
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
  getFilteredTasks,
  sortTasks
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLFVBQVUsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxZQUFZLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxRQUFRLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksY0FBYyxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLFlBQVks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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCwwREFBMEQ7QUFDNUc7QUFDQTtBQUNBLGtEQUFrRCwwQ0FBMEM7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdMZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvQ29ubmVjdGluZy1Mb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9ET01fTW9kdWxlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1N0b3JhZ2VfTW9kdWxlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NyZWF0ZS1lbGVtZW50LWN1c3RvbS1mdW5jdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvUm9ib3RvLU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWJsdWU6IHJnYig1MSwgMTQ2LCAyMDYpO1xcbiAgLS1ibHVlLWlucHV0OiByZ2IoMjMsIDg4LCAxMjkpO1xcbiAgLS1saWdodGJsdWU6IHJnYigyMDIsIDIyNywgMjQzKTtcXG4gIC0tYmx1ZS1ib3JkZXI6IHJnYigyLCA4MCwgMTI4KTtcXG4gIC0tZGFya2JsdWU6IHJnYigwLCA1OCwgOTQpO1xcbiAgLS1saWdodGdyZXk6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG4gIC0tdGFzay1jb21wbGV0ZWQtYmFja2dyb3VuZDogcmdiKDIxMSwgMjExLCAyMTEpO1xcbiAgLS1tb2RhbDogcmdiYSgxODAsIDE4MCwgMTgwLCAwLjMpO1xcbiAgLS1yZWQ6IHJnYigyNTUsIDEwNywgMTA3KTtcXG4gIC0taW1wb3J0YW50OiByZ2IoMjI2LCAxNjYsIDApO1xcbn1cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MDBweCBtaW5tYXgoNTUwcHgsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggMWZyO1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG59XFxuXFxuZm9ybSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiA1O1xcbiAgY29sb3I6IHZhcigtLWRhcmtibHVlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZS1ib3JkZXIpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmZvcm0gYnV0dG9uOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgdHJhbnNpdGlvbjogMC4wNXM7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlLWlucHV0KTtcXG4gIHBhZGRpbmc6IDRweDtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG5cXG5oZWFkZXIgPiBhIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG59XFxuXFxuLyogU2lkZWJhciAqL1xcbi5zaWRlYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Z3JleSk7XFxufVxcblxcbnNwYW4ucHJvamVjdHMtaGVhZGluZyB7XFxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBmb250LXNpemU6IDQ4cHg7XFxuICBtYXJnaW46IDIwcHg7XFxufVxcblxcbmJ1dHRvbi5zaG93LXByb2plY3QtZm9ybSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDNweDtcXG4gIHJpZ2h0OiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICB3aWR0aDogMzVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnByb2plY3QtZm9ybSB7XFxuICB0b3A6IGNhbGMoNTAlIC0gNjBweCk7XFxuICBsZWZ0OiBjYWxjKDUwJSAtIDE1MHB4KTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBnYXA6IDhweDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG5pbnB1dC5wcm9qZWN0LXRpdGxlLWlucHV0IHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuYnV0dG9uLnByb2plY3QtZm9ybS1zdWJtaXQge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDRweCAyMHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4vKiBTaWRlYmFyIC0+IE5hdmlnYXRpb24gKi8gXFxuLmdlbmVyYWwtbmF2aWdhdGlvbiA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogOTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBkYXJrZ3JleTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIG1hcmdpbjogNSU7XFxuICBjb2xvcjogdmFyKC0tYmx1ZS1ib3JkZXIpO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4uZ2VuZXJhbC1uYXZpZ2F0aW9uID4gZGl2LmhpZ2hsaWdodGVkLFxcbi5wcm9qZWN0LW5hdmlnYXRpb24gPiBkaXYuaGlnaGxpZ2h0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRibHVlKTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZS1ib3JkZXIpO1xcbn1cXG5cXG4ucHJvamVjdC1uYXZpZ2F0aW9uID4gZGl2LmhpZ2hsaWdodGVkIHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLmdlbmVyYWwtbmF2aWdhdGlvbiA+IGRpdjpob3ZlcixcXG4ucHJvamVjdC1jb250YWluZXI6aG92ZXIge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDkwJTtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBkYXJrZ3JleTtcXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tYmx1ZSk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBtYXJnaW46IDUlO1xcbiAgY29sb3I6IHZhcigtLWJsdWUtYm9yZGVyKTtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIGJ1dHRvbjpkaXNhYmxlZCB7XFxuICBjb2xvcjogZGFya2dyZXk7XFxufVxcblxcbi5zZWxlY3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBtaW4td2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLnNlbGVjdC1jb250YWluZXIuY2hvc2VuOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIuKelFxcXCI7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBwYWRkaW5nOiA0cHg7XFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbi1jb250YWluZXIgPiAqIHtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIG1hcmdpbjogMnB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4ucHJvamVjdC1idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgei1pbmRleDogLTE7XFxuICB3aWR0aDogMDtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyOmhvdmVyID4gLnByb2plY3QtYnV0dG9uLWNvbnRhaW5lcntcXG4gIHdpZHRoOiAxMjBweDtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi8qIE1haW4gKi9cXG5tYWluIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcbiAgbWluLXdpZHRoOiAwO1xcbn1cXG5cXG5tYWluID4gLmFsbC10YXNrcy1jb250YWluZXIge1xcbiAgd2lkdGg6IG1pbigxMDAwcHgsIDgwJSk7XFxufVxcblxcbi5tYWluLXRvcC1jb250YWluZXIge1xcbiAgd2lkdGg6IG1pbigxMDAwcHgsIDgwJSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnIgMjAwcHg7XFxufVxcblxcbi5tYWluLXRpdGxlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNTJweDtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlLWJvcmRlcik7XFxuICBtYXJnaW46IDIwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbnNlbGVjdC50YXNrLXNvcnQge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDQwcHg7XFxuXFxuICBwYWRkaW5nOiA0cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kYXJrYmx1ZSk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBjb2xvcjp2YXIoLS1kYXJrYmx1ZSk7XFxufVxcblxcbnNlbGVjdC50YXNrLXNvcnQ6YWN0aXZlIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG5cXG4vKiBNYWluIC0+IFRhc2sgRm9ybSAqL1xcbm1haW4gPiBidXR0b24uc2hvdy10YXNrLWZvcm0ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiA1MHB4O1xcbiAgcmlnaHQ6IDUwcHg7XFxuICB6LWluZGV4OiAzO1xcblxcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBmb250LXNpemU6IDQ4cHg7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB3aWR0aDogODBweDtcXG4gIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWxpZ2h0Z3JleSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi50YXNrLWZvcm0ge1xcbiAgdG9wOiBjYWxjKDUwJSAtIDE3NXB4KTtcXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTUwcHgpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGhlaWdodDogMzUwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4udGFzay1mb3JtID4gKiB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2ltcG9ydGFuY2UtaW5wdXQge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDRweDtcXG4gIGxlZnQ6IDRweDtcXG59XFxuXFxuYnV0dG9uLnN1Ym1pdC10YXNrLWZvcm0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBwYWRkaW5nOiA4cHg7XFxuICB3aWR0aDogMTAwcHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbi5jbG9zZS1mb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMjVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbi8qIE1haW4gLT4gVGFzayBJbmZvLCBFZGl0IGFuZCBEZWxldGlvbiBGb3JtcyAqL1xcbi50YXNrLWZvcm0tbGFiZWwge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4udGFzay1mb3JtLWxhYmVsLmltcG9ydGFudCB7XFxuICBjb2xvcjogdmFyKC0taW1wb3J0YW50KVxcbn1cXG5cXG4udGFzay1mb3JtLWxhYmVsLnVuaW1wb3J0YW50IHtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLnRhc2stZm9ybS1jb21wbGV0aW9uIHtcXG4gIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLyogTWFpbiAtPiBEaXNwbGF5ZWQgVGFza3MgKi9cXG4udGFzay1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDUwcHgsIDFmcikgMzBweCAxNTBweCAxNDBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tZGFya2JsdWUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRncmV5KTtcXG4gIHBhZGRpbmc6IDRweCAxMnB4O1xcbiAgbWFyZ2luOiA4cHggMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgZGFya2dyZXk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyOmhvdmVyIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lci5jb21wbGV0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFzay1jb21wbGV0ZWQtYmFja2dyb3VuZCk7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lci5jb21wbGV0ZWQgPiAqIHtcXG4gIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4udGFzay1jb250YWluZXIuY29tcGxldGVkOjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMjtcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lci5jb21wbGV0ZWQ6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNXB4O1xcbiAgbGVmdDogLTMwcHg7XFxuICBjb250ZW50OiBcXFwi4pyUXFxcIjtcXG4gIGZvbnQtc2l6ZTogMzRweDtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLnRhc2stdGl0bGUge1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuLnRhc2staW1wb3J0YW5jZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICBjb2xvcjogdmFyKC0taW1wb3J0YW50KTtcXG4gIGZvbnQtc2l6ZTogMzRweDtcXG4gIHBhZGRpbmc6IDBweCA4cHg7XFxufVxcblxcbi50YXNrLWltcG9ydGFuY2U6aG92ZXI6OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC04cHg7XFxuICBsZWZ0OiAtMjhweDtcXG4gIHotaW5kZXg6IDE7XFxuXFxuICBjb250ZW50OiBcXFwiSW1wb3J0YW50XFxcIjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGNvbG9yOiB2YXIoLS1pbXBvcnRhbnQpO1xcbn1cXG5cXG4udGFzay1kYXRlIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLnRhc2stYnV0dG9uLWNvbnRhaW5lciB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4udGFzay1idXR0b24tY29udGFpbmVyID4gYnV0dG9uIHtcXG4gIHotaW5kZXg6IDM7XFxuICBtYXJnaW46IDBweCA0cHg7XFxuICBwYWRkaW5nOiAycHg7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmtibHVlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLnRhc2stYnV0dG9uLWNvbnRhaW5lciA+IGJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi50YXNrLWluZm8ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5lZGl0LXRhc2sge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uZGVsZXRlLXRhc2sge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgd2lkdGg6IDI1cHg7XFxufVxcblxcbi8qIE1vZGFsICovXFxuI21vZGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vZGFsKTtcXG59XFxuXFxuI21vZGFsLmhpZGRlbiB7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLyogRGVsZXRpb24gRm9ybSAoU2FtZSBmb3IgVGFza3MgYW5kIFByb2plY3RzKSAqL1xcbi5kZWxldGlvbi1mb3JtIHtcXG4gIHRvcDogY2FsYyg1MCUgLSA3NXB4KTtcXG4gIHJpZ2h0OiBjYWxjKDUwJSAtIDEwMHB4KTtcXG4gIGhlaWdodDogMTUwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciA1MHB4O1xcbn1cXG5cXG4uZGVsZXRpb24tbWVzc2FnZSB7XFxuICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmRlbGV0aW9uLXRpdGxlIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBwYWRkaW5nOiAwcHggOHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZGVsZXRpb24teWVzIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cXG5cXG4uZGVsZXRpb24tbm8ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXG59XFxuXFxuLmRlbGV0aW9uLXllcyxcXG4uZGVsZXRpb24tbm8ge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQiw4QkFBOEI7RUFDOUIsMEJBQTBCO0VBQzFCLCtCQUErQjtFQUMvQiwrQ0FBK0M7RUFDL0MsaUNBQWlDO0VBQ2pDLHlCQUF5QjtFQUN6Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsNENBQTRDO0FBQzlDOztBQUVBOztFQUVFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYiwrQ0FBK0M7RUFDL0MsNEJBQTRCO0VBQzVCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLHdCQUF3QjtFQUN4QixZQUFZO0FBQ2Q7O0FBRUEsV0FBVztBQUNYO0VBQ0Usa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtF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QjtBQUM5Qjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1ibHVlOiByZ2IoNTEsIDE0NiwgMjA2KTtcXG4gIC0tYmx1ZS1pbnB1dDogcmdiKDIzLCA4OCwgMTI5KTtcXG4gIC0tbGlnaHRibHVlOiByZ2IoMjAyLCAyMjcsIDI0Myk7XFxuICAtLWJsdWUtYm9yZGVyOiByZ2IoMiwgODAsIDEyOCk7XFxuICAtLWRhcmtibHVlOiByZ2IoMCwgNTgsIDk0KTtcXG4gIC0tbGlnaHRncmV5OiByZ2IoMjM1LCAyMzUsIDIzNSk7XFxuICAtLXRhc2stY29tcGxldGVkLWJhY2tncm91bmQ6IHJnYigyMTEsIDIxMSwgMjExKTtcXG4gIC0tbW9kYWw6IHJnYmEoMTgwLCAxODAsIDE4MCwgMC4zKTtcXG4gIC0tcmVkOiByZ2IoMjU1LCAxMDcsIDEwNyk7XFxuICAtLWltcG9ydGFudDogcmdiKDIyNiwgMTY2LCAwKTtcXG59XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICBzcmM6IHVybChcXFwiLi9hc3NldHMvZm9udHMvUm9ib3RvLU1lZGl1bS50dGZcXFwiKTtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MDBweCBtaW5tYXgoNTUwcHgsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggMWZyO1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG59XFxuXFxuZm9ybSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiA1O1xcbiAgY29sb3I6IHZhcigtLWRhcmtibHVlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZS1ib3JkZXIpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmZvcm0gYnV0dG9uOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgdHJhbnNpdGlvbjogMC4wNXM7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlLWlucHV0KTtcXG4gIHBhZGRpbmc6IDRweDtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG5cXG5oZWFkZXIgPiBhIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG59XFxuXFxuLyogU2lkZWJhciAqL1xcbi5zaWRlYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Z3JleSk7XFxufVxcblxcbnNwYW4ucHJvamVjdHMtaGVhZGluZyB7XFxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBmb250LXNpemU6IDQ4cHg7XFxuICBtYXJnaW46IDIwcHg7XFxufVxcblxcbmJ1dHRvbi5zaG93LXByb2plY3QtZm9ybSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDNweDtcXG4gIHJpZ2h0OiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICB3aWR0aDogMzVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnByb2plY3QtZm9ybSB7XFxuICB0b3A6IGNhbGMoNTAlIC0gNjBweCk7XFxuICBsZWZ0OiBjYWxjKDUwJSAtIDE1MHB4KTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBnYXA6IDhweDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG5pbnB1dC5wcm9qZWN0LXRpdGxlLWlucHV0IHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuYnV0dG9uLnByb2plY3QtZm9ybS1zdWJtaXQge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDRweCAyMHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4vKiBTaWRlYmFyIC0+IE5hdmlnYXRpb24gKi8gXFxuLmdlbmVyYWwtbmF2aWdhdGlvbiA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogOTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBkYXJrZ3JleTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIG1hcmdpbjogNSU7XFxuICBjb2xvcjogdmFyKC0tYmx1ZS1ib3JkZXIpO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4uZ2VuZXJhbC1uYXZpZ2F0aW9uID4gZGl2LmhpZ2hsaWdodGVkLFxcbi5wcm9qZWN0LW5hdmlnYXRpb24gPiBkaXYuaGlnaGxpZ2h0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRibHVlKTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZS1ib3JkZXIpO1xcbn1cXG5cXG4ucHJvamVjdC1uYXZpZ2F0aW9uID4gZGl2LmhpZ2hsaWdodGVkIHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLmdlbmVyYWwtbmF2aWdhdGlvbiA+IGRpdjpob3ZlcixcXG4ucHJvamVjdC1jb250YWluZXI6aG92ZXIge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDkwJTtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBkYXJrZ3JleTtcXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tYmx1ZSk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBtYXJnaW46IDUlO1xcbiAgY29sb3I6IHZhcigtLWJsdWUtYm9yZGVyKTtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIGJ1dHRvbjpkaXNhYmxlZCB7XFxuICBjb2xvcjogZGFya2dyZXk7XFxufVxcblxcbi5zZWxlY3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBtaW4td2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLnNlbGVjdC1jb250YWluZXIuY2hvc2VuOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIuKelFxcXCI7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBwYWRkaW5nOiA0cHg7XFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbi1jb250YWluZXIgPiAqIHtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIG1hcmdpbjogMnB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4ucHJvamVjdC1idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgei1pbmRleDogLTE7XFxuICB3aWR0aDogMDtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyOmhvdmVyID4gLnByb2plY3QtYnV0dG9uLWNvbnRhaW5lcntcXG4gIHdpZHRoOiAxMjBweDtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi8qIE1haW4gKi9cXG5tYWluIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcbiAgbWluLXdpZHRoOiAwO1xcbn1cXG5cXG5tYWluID4gLmFsbC10YXNrcy1jb250YWluZXIge1xcbiAgd2lkdGg6IG1pbigxMDAwcHgsIDgwJSk7XFxufVxcblxcbi5tYWluLXRvcC1jb250YWluZXIge1xcbiAgd2lkdGg6IG1pbigxMDAwcHgsIDgwJSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnIgMjAwcHg7XFxufVxcblxcbi5tYWluLXRpdGxlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNTJweDtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlLWJvcmRlcik7XFxuICBtYXJnaW46IDIwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbnNlbGVjdC50YXNrLXNvcnQge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDQwcHg7XFxuXFxuICBwYWRkaW5nOiA0cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kYXJrYmx1ZSk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBjb2xvcjp2YXIoLS1kYXJrYmx1ZSk7XFxufVxcblxcbnNlbGVjdC50YXNrLXNvcnQ6YWN0aXZlIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG5cXG4vKiBNYWluIC0+IFRhc2sgRm9ybSAqL1xcbm1haW4gPiBidXR0b24uc2hvdy10YXNrLWZvcm0ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiA1MHB4O1xcbiAgcmlnaHQ6IDUwcHg7XFxuICB6LWluZGV4OiAzO1xcblxcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBmb250LXNpemU6IDQ4cHg7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB3aWR0aDogODBweDtcXG4gIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWxpZ2h0Z3JleSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi50YXNrLWZvcm0ge1xcbiAgdG9wOiBjYWxjKDUwJSAtIDE3NXB4KTtcXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTUwcHgpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGhlaWdodDogMzUwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4udGFzay1mb3JtID4gKiB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2ltcG9ydGFuY2UtaW5wdXQge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDRweDtcXG4gIGxlZnQ6IDRweDtcXG59XFxuXFxuYnV0dG9uLnN1Ym1pdC10YXNrLWZvcm0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBwYWRkaW5nOiA4cHg7XFxuICB3aWR0aDogMTAwcHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbi5jbG9zZS1mb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMjVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbi8qIE1haW4gLT4gVGFzayBJbmZvLCBFZGl0IGFuZCBEZWxldGlvbiBGb3JtcyAqL1xcbi50YXNrLWZvcm0tbGFiZWwge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4udGFzay1mb3JtLWxhYmVsLmltcG9ydGFudCB7XFxuICBjb2xvcjogdmFyKC0taW1wb3J0YW50KVxcbn1cXG5cXG4udGFzay1mb3JtLWxhYmVsLnVuaW1wb3J0YW50IHtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLnRhc2stZm9ybS1jb21wbGV0aW9uIHtcXG4gIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLyogTWFpbiAtPiBEaXNwbGF5ZWQgVGFza3MgKi9cXG4udGFzay1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDUwcHgsIDFmcikgMzBweCAxNTBweCAxNDBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tZGFya2JsdWUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRncmV5KTtcXG4gIHBhZGRpbmc6IDRweCAxMnB4O1xcbiAgbWFyZ2luOiA4cHggMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgZGFya2dyZXk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyOmhvdmVyIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lci5jb21wbGV0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFzay1jb21wbGV0ZWQtYmFja2dyb3VuZCk7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lci5jb21wbGV0ZWQgPiAqIHtcXG4gIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4udGFzay1jb250YWluZXIuY29tcGxldGVkOjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMjtcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lci5jb21wbGV0ZWQ6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNXB4O1xcbiAgbGVmdDogLTMwcHg7XFxuICBjb250ZW50OiBcXFwi4pyUXFxcIjtcXG4gIGZvbnQtc2l6ZTogMzRweDtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLnRhc2stdGl0bGUge1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuLnRhc2staW1wb3J0YW5jZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICBjb2xvcjogdmFyKC0taW1wb3J0YW50KTtcXG4gIGZvbnQtc2l6ZTogMzRweDtcXG4gIHBhZGRpbmc6IDBweCA4cHg7XFxufVxcblxcbi50YXNrLWltcG9ydGFuY2U6aG92ZXI6OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC04cHg7XFxuICBsZWZ0OiAtMjhweDtcXG4gIHotaW5kZXg6IDE7XFxuXFxuICBjb250ZW50OiBcXFwiSW1wb3J0YW50XFxcIjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGNvbG9yOiB2YXIoLS1pbXBvcnRhbnQpO1xcbn1cXG5cXG4udGFzay1kYXRlIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLnRhc2stYnV0dG9uLWNvbnRhaW5lciB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4udGFzay1idXR0b24tY29udGFpbmVyID4gYnV0dG9uIHtcXG4gIHotaW5kZXg6IDM7XFxuICBtYXJnaW46IDBweCA0cHg7XFxuICBwYWRkaW5nOiAycHg7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmtibHVlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLnRhc2stYnV0dG9uLWNvbnRhaW5lciA+IGJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi50YXNrLWluZm8ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5lZGl0LXRhc2sge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uZGVsZXRlLXRhc2sge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgd2lkdGg6IDI1cHg7XFxufVxcblxcbi8qIE1vZGFsICovXFxuI21vZGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vZGFsKTtcXG59XFxuXFxuI21vZGFsLmhpZGRlbiB7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLyogRGVsZXRpb24gRm9ybSAoU2FtZSBmb3IgVGFza3MgYW5kIFByb2plY3RzKSAqL1xcbi5kZWxldGlvbi1mb3JtIHtcXG4gIHRvcDogY2FsYyg1MCUgLSA3NXB4KTtcXG4gIHJpZ2h0OiBjYWxjKDUwJSAtIDEwMHB4KTtcXG4gIGhlaWdodDogMTUwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciA1MHB4O1xcbn1cXG5cXG4uZGVsZXRpb24tbWVzc2FnZSB7XFxuICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmRlbGV0aW9uLXRpdGxlIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBwYWRkaW5nOiAwcHggOHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZGVsZXRpb24teWVzIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cXG5cXG4uZGVsZXRpb24tbm8ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXG59XFxuXFxuLmRlbGV0aW9uLXllcyxcXG4uZGVsZXRpb24tbm8ge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgQ29ubmVjdGluZ0xvZ2ljIGZyb20gXCIuL21vZHVsZXMvQ29ubmVjdGluZy1Mb2dpYy5qc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuQ29ubmVjdGluZ0xvZ2ljLmluaXRpYWxMb2FkKCk7IiwiaW1wb3J0IFN0b3JhZ2VfTW9kdWxlIGZyb20gXCIuL1N0b3JhZ2VfTW9kdWxlXCI7XG5pbXBvcnQgRE9NX01vZHVsZSBmcm9tIFwiLi9ET01fTW9kdWxlXCI7XG5cbi8vIFZhcmlhYmxlc1xubGV0IGN1cnJlbnRGb3JtO1xubGV0IGN1cnJlbnRQcm9qZWN0O1xubGV0IGRpc3BsYXllZFRhc2tzID0gW107XG5cbi8vIFRhc2tzXG5mdW5jdGlvbiBhZGRUYXNrVG9TdG9yYWdlKHRpdGxlLCBkZXNjcmlwdGlvbiwgaW1wb3J0YW5jZSwgZHVlRGF0ZSkge1xuICBjb25zdCB0YXNrID0gU3RvcmFnZV9Nb2R1bGUuY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGltcG9ydGFuY2UsIGR1ZURhdGUpO1xuICBTdG9yYWdlX01vZHVsZS5hZGRUYXNrVG9Qcm9qZWN0KHRhc2ssIGN1cnJlbnRQcm9qZWN0KTtcbiAgcmV0dXJuIHRhc2s7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tUb0RPTSh0YXNrKSB7XG4gIGRpc3BsYXllZFRhc2tzLnB1c2godGFzayk7XG4gIGNvbnN0IHRhc2tET00gPSBET01fTW9kdWxlLmRpc3BsYXlUYXNrKHRhc2spO1xuICB0YXNrRE9NLnRhc2tDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRhc2tDbGlja19DYWxsYmFjayh0YXNrLCB0YXNrRE9NLnRhc2tDb250YWluZXIpKTtcbiAgdGFza0RPTS5lZGl0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB0YXNrRWRpdEJ1dHRvbl9DYWxsYmFjayhldmVudCwgdGFzaywgdGFza0RPTS50YXNrQ29udGFpbmVyKSk7XG4gIHRhc2tET00uZGVsZXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB0YXNrRGVsZXRlQnV0dG9uX0NhbGxiYWNrKGV2ZW50LCB0YXNrLCB0YXNrRE9NLnRhc2tDb250YWluZXIpKTtcbiAgdGFza0RPTS5pbmZvVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB0YXNrSW5mb0J1dHRvbl9DYWxsYmFjayhldmVudCwgdGFzaykpO1xufVxuXG5mdW5jdGlvbiB0YXNrQ2xpY2tfQ2FsbGJhY2sodGFzaywgdGFza0NvbnRhaW5lcikge1xuICBTdG9yYWdlX01vZHVsZS50b2dnbGVUYXNrQ29tcGxldGlvbih0YXNrKTtcbiAgRE9NX01vZHVsZS50b2dnbGVUYXNrQ29tcGxldGlvbih0YXNrQ29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gdGFza0luZm9CdXR0b25fQ2FsbGJhY2soZXZlbnQsIHRhc2spIHtcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIGN1cnJlbnRGb3JtID0gRE9NX01vZHVsZS5idWlsZFRhc2tJbmZvKHRhc2spO1xuICBjdXJyZW50Rm9ybS5mb3JtRWxlbS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgRE9NX01vZHVsZS5yZW1vdmVGb3JtKGN1cnJlbnRGb3JtLmZvcm1FbGVtKTtcbiAgfSlcbn1cblxuZnVuY3Rpb24gdGFza0VkaXRCdXR0b25fQ2FsbGJhY2soZXZlbnQsIHRhc2ssIHRhc2tDb250YWluZXIpIHtcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIGN1cnJlbnRGb3JtID0gRE9NX01vZHVsZS5idWlsZFRhc2tFZGl0KHRhc2spO1xuICBjdXJyZW50Rm9ybS5mb3JtRWxlbS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZWRpdFRhc2sodGFzaywgdGFza0NvbnRhaW5lcik7XG4gICAgRE9NX01vZHVsZS5yZW1vdmVGb3JtKGN1cnJlbnRGb3JtLmZvcm1FbGVtKTtcbiAgfSlcbiAgY3VycmVudEZvcm0uY2xvc2VFZGl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gRE9NX01vZHVsZS5yZW1vdmVGb3JtKGN1cnJlbnRGb3JtLmZvcm1FbGVtKSk7XG59XG5cbmZ1bmN0aW9uIHRhc2tEZWxldGVCdXR0b25fQ2FsbGJhY2soZXZlbnQsIHRhc2ssIHRhc2tDb250YWluZXIpIHtcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIGN1cnJlbnRGb3JtID0gRE9NX01vZHVsZS5idWlsZERlbGV0aW9uRm9ybSh0YXNrKTtcbiAgY3VycmVudEZvcm0ueWVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgU3RvcmFnZV9Nb2R1bGUucmVtb3ZlVGFzayh0YXNrKTtcbiAgICBET01fTW9kdWxlLnJlbW92ZVRhc2sodGFza0NvbnRhaW5lcik7XG4gICAgZGlzcGxheWVkVGFza3Muc3BsaWNlKGRpc3BsYXllZFRhc2tzLmluZGV4T2YodGFzayksIDEpO1xuICB9KTtcbiAgY3VycmVudEZvcm0uZm9ybUVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIERPTV9Nb2R1bGUucmVtb3ZlRm9ybShjdXJyZW50Rm9ybS5mb3JtRWxlbSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlZGl0VGFzayh0YXNrLCB0YXNrQ29udGFpbmVyKSB7XG4gIFN0b3JhZ2VfTW9kdWxlLmVkaXRUYXNrKFxuICAgIHRhc2ssIFxuICAgIGN1cnJlbnRGb3JtLnRpdGxlSW5wdXQudmFsdWUsXG4gICAgY3VycmVudEZvcm0uZGVzY3JpcHRpb25JbnB1dC52YWx1ZSxcbiAgICBjdXJyZW50Rm9ybS5pbXBvcnRhbmNlSW5wdXQuY2hlY2tlZCxcbiAgICBjdXJyZW50Rm9ybS5kYXRlSW5wdXQudmFsdWVcbiAgKTtcbiAgRE9NX01vZHVsZS5lZGl0VGFzayh0YXNrLCB0YXNrQ29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUFsbFRhc2tzKHRhc2tBcnJheSkge1xuICBET01fTW9kdWxlLmNsZWFyVGFza0NvbnRhaW5lcigpO1xuICBkaXNwbGF5ZWRUYXNrcyA9IFtdO1xuICB0YXNrQXJyYXkuZm9yRWFjaCh0YXNrID0+IGFkZFRhc2tUb0RPTSh0YXNrKSk7XG59XG5cbi8vIFByb2plY3RzXG5mdW5jdGlvbiBhZGRQcm9qZWN0VG9ET00ocHJvamVjdCkge1xuICBjb25zdCBwcm9qZWN0RE9NID0gRE9NX01vZHVsZS5kaXNwbGF5UHJvamVjdChwcm9qZWN0KTtcbiAgc2VsZWN0UHJvamVjdChwcm9qZWN0LCBwcm9qZWN0RE9NLnByb2plY3RDb250YWluZXIpO1xuICBwcm9qZWN0RE9NLnByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHByb2plY3RDbGlja19DYWxsYmFjayhwcm9qZWN0LCBwcm9qZWN0RE9NLnByb2plY3RDb250YWluZXIpKTtcbiAgcHJvamVjdERPTS5lZGl0UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiBwcm9qZWN0RWRpdEJ1dHRvbl9DYWxsYmFjayhldmVudCwgcHJvamVjdCwgcHJvamVjdERPTS5wcm9qZWN0Q29udGFpbmVyKSk7XG4gIHByb2plY3RET00uZGVsZXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiBwcm9qZWN0RGVsZXRlQnV0dG9uX0NhbGxiYWNrKGV2ZW50LCBwcm9qZWN0LCBwcm9qZWN0RE9NLnByb2plY3RDb250YWluZXIpKTtcbn1cblxuZnVuY3Rpb24gcHJvamVjdENsaWNrX0NhbGxiYWNrKHByb2plY3QsIHByb2plY3RDb250YWluZXIpIHtcbiAgc2VsZWN0UHJvamVjdChwcm9qZWN0LCBwcm9qZWN0Q29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gcHJvamVjdEVkaXRCdXR0b25fQ2FsbGJhY2soZXZlbnQsIHByb2plY3QsIHByb2plY3RDb250YWluZXIpIHtcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIGN1cnJlbnRGb3JtID0gRE9NX01vZHVsZS5idWlsZFByb2plY3RFZGl0KHByb2plY3QudGl0bGUpO1xuICBjdXJyZW50Rm9ybS5mb3JtRWxlbS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZWRpdFByb2plY3QocHJvamVjdCwgY3VycmVudEZvcm0udGl0bGVJbnB1dC52YWx1ZSwgcHJvamVjdENvbnRhaW5lcik7XG4gICAgRE9NX01vZHVsZS5yZW1vdmVGb3JtKGN1cnJlbnRGb3JtLmZvcm1FbGVtKTtcbiAgfSlcbiAgY3VycmVudEZvcm0uY2xvc2VQcm9qZWN0Rm9ybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gRE9NX01vZHVsZS5yZW1vdmVGb3JtKGN1cnJlbnRGb3JtLmZvcm1FbGVtKSk7XG59XG5cbmZ1bmN0aW9uIHByb2plY3REZWxldGVCdXR0b25fQ2FsbGJhY2soZXZlbnQsIHByb2plY3QsIHByb2plY3RDb250YWluZXIpIHtcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIGN1cnJlbnRGb3JtID0gRE9NX01vZHVsZS5idWlsZERlbGV0aW9uRm9ybShwcm9qZWN0KTtcbiAgY3VycmVudEZvcm0ueWVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBkZWxldGVQcm9qZWN0KHByb2plY3QsIHByb2plY3RDb250YWluZXIpKTtcbiAgY3VycmVudEZvcm0uZm9ybUVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIERPTV9Nb2R1bGUucmVtb3ZlRm9ybShjdXJyZW50Rm9ybS5mb3JtRWxlbSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3QsIHByb2plY3RDb250YWluZXIpIHtcbiAgU3RvcmFnZV9Nb2R1bGUucmVtb3ZlUHJvamVjdChwcm9qZWN0KTtcbiAgRE9NX01vZHVsZS5yZW1vdmVQcm9qZWN0KHByb2plY3RDb250YWluZXIpO1xuICBzZWxlY3RHZW5lcmFsUHJvamVjdCgpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RQcm9qZWN0KHByb2plY3QsIHByb2plY3RDb250YWluZXIpIHtcbiAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0O1xuICBET01fTW9kdWxlLmhpZ2hsaWdodFByb2plY3QocHJvamVjdENvbnRhaW5lcik7XG4gIERPTV9Nb2R1bGUuaGlnaGxpZ2h0TmF2KHByb2plY3RDb250YWluZXIpO1xuICByZXBsYWNlQWxsVGFza3MocHJvamVjdC50YXNrcyk7XG4gIERPTV9Nb2R1bGUuc2V0TWFpblRpdGxlKHByb2plY3QudGl0bGUpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RHZW5lcmFsUHJvamVjdCgpIHtcbiAgc2VsZWN0UHJvamVjdChTdG9yYWdlX01vZHVsZS5nZXRBbGxQcm9qZWN0c0FuZFRhc2tzKClbMF0sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250YWluZXJcIikpO1xufVxuXG5mdW5jdGlvbiBlZGl0UHJvamVjdChwcm9qZWN0LCBuZXdUaXRsZSwgcHJvamVjdENvbnRhaW5lcikge1xuICBTdG9yYWdlX01vZHVsZS5lZGl0UHJvamVjdChwcm9qZWN0LCBuZXdUaXRsZSk7XG4gIERPTV9Nb2R1bGUuZWRpdFByb2plY3QocHJvamVjdENvbnRhaW5lciwgbmV3VGl0bGUpO1xufVxuXG4vLyAyIG1haW4gQnV0dG9ucyAoQWRkIHRhc2ssIEFkZCBwcm9qZWN0KVxuRE9NX01vZHVsZS5zaG93VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY3VycmVudEZvcm0gPSBET01fTW9kdWxlLmJ1aWxkVGFza0Zvcm0oY3VycmVudFByb2plY3QpO1xuICBjdXJyZW50Rm9ybS5mb3JtRWxlbS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFzayA9IGFkZFRhc2tUb1N0b3JhZ2UoXG4gICAgICBjdXJyZW50Rm9ybS50aXRsZUlucHV0LnZhbHVlLCBcbiAgICAgIGN1cnJlbnRGb3JtLmRlc2NyaXB0aW9uSW5wdXQudmFsdWUsIFxuICAgICAgY3VycmVudEZvcm0uaW1wb3J0YW5jZUlucHV0LmNoZWNrZWQsXG4gICAgICBjdXJyZW50Rm9ybS5kYXRlSW5wdXQudmFsdWUsXG4gICAgKTtcbiAgICBhZGRUYXNrVG9ET00odGFzayk7XG4gICAgRE9NX01vZHVsZS5yZW1vdmVGb3JtKGN1cnJlbnRGb3JtLmZvcm1FbGVtKTtcbiAgfSk7XG4gIGN1cnJlbnRGb3JtLmNsb3NlVGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IERPTV9Nb2R1bGUucmVtb3ZlRm9ybShjdXJyZW50Rm9ybS5mb3JtRWxlbSkpO1xufSlcblxuRE9NX01vZHVsZS5zaG93UHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY3VycmVudEZvcm0gPSBET01fTW9kdWxlLmJ1aWxkUHJvamVjdEZvcm0oKTtcbiAgY3VycmVudEZvcm0uZm9ybUVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzFdLnZhbHVlXG4gICAgY29uc3QgcHJvamVjdCA9IFN0b3JhZ2VfTW9kdWxlLmNyZWF0ZU5ld1Byb2plY3QocHJvamVjdE5hbWUpO1xuICAgIGFkZFByb2plY3RUb0RPTShwcm9qZWN0KTtcbiAgICBET01fTW9kdWxlLnJlbW92ZUZvcm0oY3VycmVudEZvcm0uZm9ybUVsZW0pO1xuICB9KTtcbiAgY3VycmVudEZvcm0uY2xvc2VQcm9qZWN0Rm9ybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gRE9NX01vZHVsZS5yZW1vdmVGb3JtKGN1cnJlbnRGb3JtLmZvcm1FbGVtKSk7XG59KTtcblxuLy8gVGFzayBmaWx0ZXJpbmcgYW5kIHNvcnRpbmdcbkRPTV9Nb2R1bGUubmF2QWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB0b3BOYXZfQ2FsbGJhY2soZXZlbnQsIFwiQWxsXCIpKTtcbkRPTV9Nb2R1bGUubmF2VG9kYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHRvcE5hdl9DYWxsYmFjayhldmVudCwgXCJUb2RheVwiKSk7XG5ET01fTW9kdWxlLm5hdlRvbW9ycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB0b3BOYXZfQ2FsbGJhY2soZXZlbnQsIFwiVG9tb3Jyb3dcIikpO1xuRE9NX01vZHVsZS5uYXZXZWVrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB0b3BOYXZfQ2FsbGJhY2soZXZlbnQsIFwiV2Vla1wiKSk7XG5ET01fTW9kdWxlLm5hdkltcG9ydGFudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4gdG9wTmF2X0NhbGxiYWNrKGV2ZW50LCBcIkltcG9ydGFudFwiKSk7XG5ET01fTW9kdWxlLm5hdkNvbXBsZXRlZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4gdG9wTmF2X0NhbGxiYWNrKGV2ZW50LCBcIkNvbXBsZXRlZFwiKSk7XG5cbmZ1bmN0aW9uIHRvcE5hdl9DYWxsYmFjayhldmVudCwgY3JpdGVyaWEpIHtcbiAgRE9NX01vZHVsZS5oaWdobGlnaHROYXYoZXZlbnQudGFyZ2V0KTtcbiAgY29uc3QgZmlsdGVyZWRBcnJheSA9IFN0b3JhZ2VfTW9kdWxlLmdldEZpbHRlcmVkVGFza3MoY3JpdGVyaWEpO1xuICByZXBsYWNlQWxsVGFza3MoZmlsdGVyZWRBcnJheSk7XG4gIERPTV9Nb2R1bGUuc2V0TWFpblRpdGxlKGNyaXRlcmlhKTtcbn1cblxuRE9NX01vZHVsZS50YXNrU29ydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiBzb3J0VGFza3MoZXZlbnQpKVxuXG5mdW5jdGlvbiBzb3J0VGFza3MoZXZlbnQpIHtcbiAgY29uc3QgY3JpdGVyaWEgPSBldmVudC50YXJnZXQudmFsdWU7XG4gIGlmIChjcml0ZXJpYSA9PT0gXCJkZWZhdWx0XCIpIHJldHVybjtcbiAgY29uc3Qgc29ydGVkID0gU3RvcmFnZV9Nb2R1bGUuc29ydFRhc2tzKGRpc3BsYXllZFRhc2tzLCBjcml0ZXJpYSk7XG4gIHJlcGxhY2VBbGxUYXNrcyhzb3J0ZWQpO1xufVxuXG4vLyBJbml0aWFsIHBhZ2UgbG9hZFxuZnVuY3Rpb24gaW5pdGlhbExvYWQoKSB7ICAgICAgICAgICAgXG4gIGNvbnN0IGFsbFByb2plY3RzID0gU3RvcmFnZV9Nb2R1bGUuZ2V0QWxsUHJvamVjdHNBbmRUYXNrcygpO1xuICBhbGxQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4gYWRkUHJvamVjdFRvRE9NKHByb2plY3QpKTtcbiAgc2VsZWN0R2VuZXJhbFByb2plY3QoKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNvbnRhaW5lcjpmaXJzdC1jaGlsZCBidXR0b24uZGVsZXRlLXByb2plY3RcIikuZGlzYWJsZWQgPSB0cnVlO1xuICBET01fTW9kdWxlLm5hdkFsbC5jbGljaygpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLCBTdG9yYWdlX01vZHVsZS5zYXZlQ2hhbmdlcyk7XG4gIERPTV9Nb2R1bGUubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IERPTV9Nb2R1bGUucmVtb3ZlRm9ybShjdXJyZW50Rm9ybS5mb3JtRWxlbSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXRpYWxMb2FkXG59XG4iLCJpbXBvcnQgY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQgZnJvbSBcIi4vY3JlYXRlLWVsZW1lbnQtY3VzdG9tLWZ1bmN0aW9uLmpzXCJcblxuLy8gSW5pdGlhbCBwYWdlIGJ1aWxkXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcblxuLy8gSGVhZGVyXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuY29uc3QgaGVhZGVyTGluayA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiYVwiLCBcIlwiLCBcIlRvZG8gTGlzdFwiKTtcbmhlYWRlckxpbmsuaHJlZiA9IFwiXCI7XG5oZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyTGluayk7XG5cbi8vIFNpZGViYXJcbmNvbnN0IHNpZGViYXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcIm5hdlwiLCBcInNpZGViYXJcIiwgXCJcIik7XG5jb25zdCBwcm9qZWN0c1RvcCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiZGl2XCIsIFwicHJvamVjdHMtdG9wLWNvbnRhaW5lclwiLCBcIlwiKTtcbmNvbnN0IHByb2plY3RzSGVhZGluZyA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwic3BhblwiLCBcInByb2plY3RzLWhlYWRpbmdcIiwgXCJQcm9qZWN0c1wiKTtcbmNvbnN0IGdlbmVyYWxOYXYgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcIm5hdlwiLCBcImdlbmVyYWwtbmF2aWdhdGlvblwiLCBcIlwiKTtcbmNvbnN0IG5hdkFsbCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiZGl2XCIsIFwiYWxsLXByb2plY3RzXCIsIFwiQWxsXCIpO1xuY29uc3QgbmF2VG9kYXkgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImRpdlwiLCBcInRvZGF5LXByb2plY3RzXCIsIFwiVG9kYXlcIik7XG5jb25zdCBuYXZUb21vcnJvdyA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiZGl2XCIsIFwidG9tb3Jyb3ctcHJvamVjdHNcIiwgXCJUb21vcnJvd1wiKTtcbmNvbnN0IG5hdldlZWsgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImRpdlwiLCBcInRoaXMtd2Vlay1wcm9qZWN0c1wiLCBcIldlZWtcIik7XG5jb25zdCBuYXZJbXBvcnRhbnQgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImRpdlwiLCBcImltcG9ydGFudC1wcm9qZWN0c1wiLCBcIkltcG9ydGFudFwiKTtcbmNvbnN0IG5hdkNvbXBsZXRlZCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiZGl2XCIsIFwiY29tcGxldGVkLXByb2plY3RzXCIsIFwiQ29tcGxldGVkXCIpO1xuZ2VuZXJhbE5hdi5hcHBlbmQoXG4gIG5hdkFsbCxcbiAgbmF2VG9kYXksXG4gIG5hdlRvbW9ycm93LFxuICBuYXZXZWVrLFxuICBuYXZJbXBvcnRhbnQsXG4gIG5hdkNvbXBsZXRlZFxuKVxuY29uc3QgcHJvamVjdE5hdiA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwibmF2XCIsIFwicHJvamVjdC1uYXZpZ2F0aW9uXCIsIFwiXCIpO1xuY29uc3Qgc2hvd1Byb2plY3RGb3JtID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJidXR0b25cIiwgXCJzaG93LXByb2plY3QtZm9ybVwiLCBcIitcIik7XG5wcm9qZWN0c1RvcC5hcHBlbmQoXG4gIHByb2plY3RzSGVhZGluZyxcbiAgc2hvd1Byb2plY3RGb3JtXG4pXG5zaWRlYmFyLmFwcGVuZChcbiAgZ2VuZXJhbE5hdixcbiAgcHJvamVjdHNUb3AsXG4gIHByb2plY3ROYXZcbilcblxuLy8gTWFpblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuY29uc3Qgc2hvd1Rhc2tGb3JtID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJidXR0b25cIiwgXCJzaG93LXRhc2stZm9ybVwiLCBcIitcIik7XG5jb25zdCBtYWluVG9wQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJkaXZcIiwgXCJtYWluLXRvcC1jb250YWluZXJcIiwgXCJcIilcbmNvbnN0IG1haW5UaXRsZSA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwic3BhblwiLCBcIm1haW4tdGl0bGVcIiwgXCJcIilcbmNvbnN0IHRhc2tTb3J0ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJzZWxlY3RcIiwgXCJ0YXNrLXNvcnRcIiwgXCJcIik7XG50YXNrU29ydC5pbm5lckhUTUwgPSBgXG48b3B0aW9uIHZhbHVlID0gXCJkZWZhdWx0XCI+U29ydCBCeTwvb3B0aW9uPlxuPG9wdGlvbiB2YWx1ZSA9IFwicmVjZW50XCI+UmVjZW50bHkgQWRkZWQ8L29wdGlvbj5cbjxvcHRpb24gdmFsdWUgPSBcInRpbWUgbGVmdFwiPlRpbWUgTGVmdDwvb3B0aW9uPlxuPG9wdGlvbiB2YWx1ZSA9IFwiYWxwaGFiZXRpY1wiPkEtWjwvb3B0aW9uPlxuYDtcbm1haW5Ub3BDb250YWluZXIuYXBwZW5kKFxuICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKSxcbiAgbWFpblRpdGxlLFxuICB0YXNrU29ydFxuKVxuY29uc3QgY29udGFpbmVyT2ZBbGxUYXNrcyA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiZGl2XCIsIFwiYWxsLXRhc2tzLWNvbnRhaW5lclwiLCBcIlwiKTtcbm1haW4uYXBwZW5kKFxuICBtYWluVG9wQ29udGFpbmVyLFxuICBjb250YWluZXJPZkFsbFRhc2tzLFxuICBzaG93VGFza0Zvcm1cbik7XG5cbi8vIE1vZGFsXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5tb2RhbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1vZGFsXCIpO1xubW9kYWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblxuYm9keS5hcHBlbmQoXG4gIGhlYWRlcixcbiAgc2lkZWJhcixcbiAgbWFpbixcbiAgbW9kYWxcbilcbi8vIEluaXRpYWwgYnVpbGQgZW5kXG5cbi8vIFRhc2sgKENyZWF0aW9uIEZvcm0pXG5mdW5jdGlvbiBidWlsZFRhc2tGb3JtKGN1cnJlbnRQcm9qZWN0KSB7XG4gIGNvbnN0IGZvcm1FbGVtID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJmb3JtXCIsIFwidGFzay1mb3JtXCIsIFwiXCIpO1xuICBib2R5LmFwcGVuZENoaWxkKGZvcm1FbGVtKTtcblxuICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImRpdlwiLCBcInNlbGVjdGVkLXByb2plY3RcIiwgYFByb2plY3QgIyAke2N1cnJlbnRQcm9qZWN0LnRpdGxlfWApO1xuXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImlucHV0XCIsIFwidGl0bGUtaW5wdXRcIiwgXCJcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUYXNrXCIpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJEZXNjcmlwdGlvblwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgMzAwKTtcblxuICBjb25zdCBpbXBvcnRhbmNlTGFiZWwgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImxhYmVsXCIsIFwiaW1wb3J0YW5jZS1sYWJlbFwiLCBcIkltcG9ydGFudFwiKTtcbiAgY29uc3QgaW1wb3J0YW5jZUlucHV0ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJpbnB1dFwiLCBcImltcG9ydGFuY2UtaW5wdXRcIiwgXCJcIik7XG4gIGltcG9ydGFuY2VJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gIGltcG9ydGFuY2VJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImltcG9ydGFuY2UtaW5wdXRcIik7XG4gIGltcG9ydGFuY2VMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJpbXBvcnRhbmNlLWlucHV0XCIpO1xuICBjb25zdCBpbXBvcnRhbmNlQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJkaXZcIiwgXCJpbXBvcnRhbmNlLWNvbnRhaW5lclwiLCBcIlwiKVxuICBpbXBvcnRhbmNlQ29udGFpbmVyLmFwcGVuZChpbXBvcnRhbmNlTGFiZWwsIGltcG9ydGFuY2VJbnB1dCk7XG5cbiAgY29uc3QgZGF0ZUlucHV0ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJpbnB1dFwiLCBcImRhdGUtaW5wdXRcIiwgXCJcIik7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZXRpbWUtbG9jYWxcIik7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICBjb25zdCBtb250aCA9IChkYXRlLmdldE1vbnRoKCkrMSkgPCAxMCA/IGAwJHtkYXRlLmdldE1vbnRoKCkrMX1gIDogZGF0ZS5nZXRNb250aCgpKzE7XG4gIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpIDwgMTAgPyBgMCR7ZGF0ZS5nZXREYXRlKCl9YCA6IGRhdGUuZ2V0RGF0ZSgpO1xuICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKSA8IDEwID8gYDAke2RhdGUuZ2V0SG91cnMoKX1gIDogZGF0ZS5nZXRIb3VycygpO1xuICBjb25zdCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCkgPCAxMCA/IGAwJHtkYXRlLmdldE1pbnV0ZXMoKX1gIDogZGF0ZS5nZXRNaW51dGVzKCk7XG4gIGRhdGVJbnB1dC52YWx1ZSA9IGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fVQke2hvdXJzfToke21pbnV0ZXN9YDtcblxuICBjb25zdCBzdWJtaXRCdXR0b24gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImJ1dHRvblwiLCBcInN1Ym1pdC10YXNrLWZvcm1cIiwgXCJBZGRcIik7XG4gIGNvbnN0IGNsb3NlVGFza0Zvcm0gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImJ1dHRvblwiLCBcImNsb3NlLWZvcm1cIiwgXCLinJVcIik7XG5cbiAgZm9ybUVsZW0uYXBwZW5kKFxuICAgIHNlbGVjdGVkUHJvamVjdCxcbiAgICB0aXRsZUlucHV0LFxuICAgIGRlc2NyaXB0aW9uSW5wdXQsXG4gICAgaW1wb3J0YW5jZUNvbnRhaW5lcixcbiAgICBkYXRlSW5wdXQsXG4gICAgc3VibWl0QnV0dG9uLFxuICAgIGNsb3NlVGFza0Zvcm1cbiAgKVxuXG4gIHRvZ2dsZU1vZGFsKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBmb3JtRWxlbSxcbiAgICB0aXRsZUlucHV0LFxuICAgIGRlc2NyaXB0aW9uSW5wdXQsXG4gICAgaW1wb3J0YW5jZUlucHV0LFxuICAgIGRhdGVJbnB1dCxcbiAgICBjbG9zZVRhc2tGb3JtXG4gIH1cbn1cblxuLy8gRGlzcGxheWVkIFRhc2tzXG5mdW5jdGlvbiBkaXNwbGF5VGFzayh0YXNrKSB7XG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImRpdlwiLCBcInRhc2stY29udGFpbmVyXCIsIFwiXCIpO1xuICBjb250YWluZXJPZkFsbFRhc2tzLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICBjb25zdCBidXR0b25Db250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImJ1dHRvblwiLCBcInRhc2stYnV0dG9uLWNvbnRhaW5lclwiLCBcIlwiKTtcbiAgY29uc3QgZWRpdFRhc2tCdXR0b24gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImJ1dHRvblwiLCBcImVkaXQtdGFza1wiLCBcIkVESVRcIik7XG4gIGNvbnN0IGRlbGV0ZVRhc2tCdXR0b24gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImJ1dHRvblwiLCBcImRlbGV0ZS10YXNrXCIsIFwiWFwiKTtcbiAgY29uc3QgaW5mb1Rhc2tCdXR0b24gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImJ1dHRvblwiLCBcInRhc2staW5mb1wiLCBcIuKTmFwiKTtcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChcbiAgICBpbmZvVGFza0J1dHRvbixcbiAgICBlZGl0VGFza0J1dHRvbixcbiAgICBkZWxldGVUYXNrQnV0dG9uXG4gIClcbiAgdGFza0NvbnRhaW5lci5hcHBlbmQoXG4gICAgY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJkaXZcIiwgXCJ0YXNrLXRpdGxlXCIsIHRhc2sudGl0bGUpLFxuICAgIGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiZGl2XCIsIFwidGFzay1pbXBvcnRhbmNlXCIsIHRhc2suaW1wb3J0YW5jZVN5bWJvbCksXG4gICAgY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJkaXZcIiwgXCJ0YXNrLWRhdGVcIiwgdGFzay50aW1lTGVmdCgpKSxcbiAgICBidXR0b25Db250YWluZXJcbiAgKVxuICBpZiAodGFzay5jb21wbGV0aW9uKSB0b2dnbGVUYXNrQ29tcGxldGlvbih0YXNrQ29udGFpbmVyKTtcblxuICByZXR1cm4ge1xuICAgIHRhc2tDb250YWluZXIsXG4gICAgZWRpdFRhc2tCdXR0b24sXG4gICAgZGVsZXRlVGFza0J1dHRvbixcbiAgICBpbmZvVGFza0J1dHRvblxuICB9XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVRhc2tDb21wbGV0aW9uKHRhc2tDb250YWluZXIpIHtcbiAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVkXCIpO1xufVxuXG5mdW5jdGlvbiBlZGl0VGFzayh1cGRhdGVkVGFzaywgdGFza0NvbnRhaW5lcikge1xuICB0YXNrQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay10aXRsZVwiKS50ZXh0Q29udGVudCA9IHVwZGF0ZWRUYXNrLnRpdGxlO1xuICB0YXNrQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1pbXBvcnRhbmNlXCIpLnRleHRDb250ZW50ID0gdXBkYXRlZFRhc2suaW1wb3J0YW5jZVN5bWJvbDtcbiAgdGFza0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGF0ZVwiKS50ZXh0Q29udGVudCA9IHVwZGF0ZWRUYXNrLnRpbWVMZWZ0KCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhc2sodGFza0NvbnRhaW5lcikge1xuICB0YXNrQ29udGFpbmVyLnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBjbGVhclRhc2tDb250YWluZXIoKSB7XG4gIGNvbnRhaW5lck9mQWxsVGFza3MucmVwbGFjZUNoaWxkcmVuKCk7XG59XG5cbi8vIFRhc2sgKEVkaXQsIEluZm8sIERlbGV0aW9uIEZvcm1zKVxuZnVuY3Rpb24gYnVpbGRUYXNrRWRpdCh0YXNrKSB7XG4gIGNvbnN0IGZvcm1FbGVtID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJmb3JtXCIsIFwidGFzay1mb3JtXCIsIFwiXCIpO1xuICBib2R5LmFwcGVuZENoaWxkKGZvcm1FbGVtKTtcblxuICBjb25zdCB0aXRsZUlucHV0ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJpbnB1dFwiLCBcInRpdGxlLWlucHV0XCIsIFwiXCIpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHRhc2sudGl0bGUpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQudGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCAzMDApO1xuXG4gIGNvbnN0IGltcG9ydGFuY2VMYWJlbCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwibGFiZWxcIiwgXCJpbXBvcnRhbmNlLWxhYmVsXCIsIFwiSW1wb3J0YW50XCIpO1xuICBjb25zdCBpbXBvcnRhbmNlSW5wdXQgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImlucHV0XCIsIFwiaW1wb3J0YW5jZS1pbnB1dFwiLCBcIlwiKTtcbiAgaW1wb3J0YW5jZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgaW1wb3J0YW5jZUlucHV0LmNoZWNrZWQgPSB0YXNrLmltcG9ydGFuY2U7XG4gIGltcG9ydGFuY2VJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImltcG9ydGFuY2UtaW5wdXRcIik7XG4gIGltcG9ydGFuY2VMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJpbXBvcnRhbmNlLWlucHV0XCIpO1xuICBjb25zdCBpbXBvcnRhbmNlQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJkaXZcIiwgXCJpbXBvcnRhbmNlLWNvbnRhaW5lclwiLCBcIlwiKVxuICBpbXBvcnRhbmNlQ29udGFpbmVyLmFwcGVuZChpbXBvcnRhbmNlTGFiZWwsIGltcG9ydGFuY2VJbnB1dCk7XG5cbiAgY29uc3QgZGF0ZUlucHV0ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJpbnB1dFwiLCBcImRhdGUtaW5wdXRcIiwgXCJcIik7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZXRpbWUtbG9jYWxcIik7XG4gIGRhdGVJbnB1dC52YWx1ZSA9IHRhc2suZHVlRGF0ZTtcblxuICBjb25zdCBzdWJtaXRCdXR0b24gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImJ1dHRvblwiLCBcInN1Ym1pdC10YXNrLWZvcm1cIiwgXCJTYXZlXCIpO1xuICBjb25zdCBjbG9zZUVkaXRGb3JtID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJidXR0b25cIiwgXCJjbG9zZS1mb3JtXCIsIFwi4pyVXCIpO1xuXG4gIGZvcm1FbGVtLmFwcGVuZChcbiAgICBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImRpdlwiLCBcInRhc2stZm9ybS1sYWJlbFwiLCBcIlRhc2s6XCIpLFxuICAgIHRpdGxlSW5wdXQsXG4gICAgY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJkaXZcIiwgXCJ0YXNrLWZvcm0tbGFiZWxcIiwgXCJEZXNjcmlwdGlvbjpcIiksXG4gICAgZGVzY3JpcHRpb25JbnB1dCxcbiAgICBpbXBvcnRhbmNlQ29udGFpbmVyLFxuICAgIGRhdGVJbnB1dCxcbiAgICBzdWJtaXRCdXR0b24sXG4gICAgY2xvc2VFZGl0Rm9ybVxuICApXG5cbiAgdG9nZ2xlTW9kYWwoKTtcblxuICByZXR1cm4ge1xuICAgIGZvcm1FbGVtLFxuICAgIHRpdGxlSW5wdXQsXG4gICAgZGVzY3JpcHRpb25JbnB1dCxcbiAgICBpbXBvcnRhbmNlSW5wdXQsXG4gICAgZGF0ZUlucHV0LFxuICAgIGNsb3NlRWRpdEZvcm1cbiAgfVxufVxuXG5mdW5jdGlvbiBidWlsZFRhc2tJbmZvKHRhc2spIHtcbiAgY29uc3QgZm9ybUVsZW0gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImZvcm1cIiwgXCJ0YXNrLWZvcm1cIiwgXCJcIik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoZm9ybUVsZW0pO1xuXG4gIGNvbnN0IHRpdGxlTGFiZWwgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcInNwYW5cIiwgXCJ0YXNrLWZvcm0tbGFiZWxcIiwgXCJUYXNrOlwiKTtcbiAgY29uc3QgdGFza0NvbXBsZXRpb24gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcInNwYW5cIiwgXCJ0YXNrLWZvcm0tY29tcGxldGlvblwiLCBcIlwiKVxuICB0aXRsZUxhYmVsLmFwcGVuZENoaWxkKHRhc2tDb21wbGV0aW9uKTtcbiAgaWYgKHRhc2suY29tcGxldGlvbikgdGFza0NvbXBsZXRpb24udGV4dENvbnRlbnQgPSBcIiBEb25lXCI7XG5cbiAgY29uc3QgdGl0bGVJbnB1dCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiaW5wdXRcIiwgXCJ0aXRsZS1pbnB1dFwiLCBcIlwiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCB0cnVlKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB0YXNrLnRpdGxlKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBkZXNjcmlwdGlvbklucHV0LnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCB0cnVlKTtcblxuICBjb25zdCBpbXBvcnRhbmNlTGFiZWwgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcInNwYW5cIiwgXCJ0YXNrLWZvcm0tbGFiZWxcIiwgXCJJbXBvcnRhbnQ6IFwiKTtcbiAgY29uc3QgaW1wb3J0YW5jZSA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwic3BhblwiLCBcInRhc2stZm9ybS1sYWJlbFwiLCB0YXNrLmltcG9ydGFuY2UgPyBcInllc1wiIDogXCJub1wiKTtcbiAgdGFzay5pbXBvcnRhbmNlID8gaW1wb3J0YW5jZS5jbGFzc0xpc3QuYWRkKFwiaW1wb3J0YW50XCIpIDogaW1wb3J0YW5jZS5jbGFzc0xpc3QuYWRkKFwidW5pbXBvcnRhbnRcIik7XG4gIGNvbnN0IGltcG9ydGFuY2VDb250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImRpdlwiLCBcImltcG9ydGFuY2UtY29udGFpbmVyXCIsIFwiXCIpXG4gIGltcG9ydGFuY2VDb250YWluZXIuYXBwZW5kKGltcG9ydGFuY2VMYWJlbCwgaW1wb3J0YW5jZSk7XG5cbiAgY29uc3QgZGF0ZUlucHV0ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJpbnB1dFwiLCBcImRhdGUtaW5wdXRcIiwgXCJcIik7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZXRpbWUtbG9jYWxcIik7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCB0cnVlKTtcbiAgZGF0ZUlucHV0LnZhbHVlID0gdGFzay5kdWVEYXRlO1xuXG4gIGNvbnN0IGNsb3NlRWRpdEZvcm0gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImJ1dHRvblwiLCBcImNsb3NlLWZvcm1cIiwgXCLinJVcIik7XG5cbiAgZm9ybUVsZW0uYXBwZW5kKFxuICAgIHRpdGxlTGFiZWwsXG4gICAgdGl0bGVJbnB1dCxcbiAgICBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImRpdlwiLCBcInRhc2stZm9ybS1sYWJlbFwiLCBcIkRlc2NyaXB0aW9uOlwiKSxcbiAgICBkZXNjcmlwdGlvbklucHV0LFxuICAgIGltcG9ydGFuY2VDb250YWluZXIsXG4gICAgY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJkaXZcIiwgXCJ0YXNrLWZvcm0tbGFiZWxcIiwgXCJEdWUgRGF0ZVwiKSxcbiAgICBkYXRlSW5wdXQsXG4gICAgY2xvc2VFZGl0Rm9ybVxuICApXG5cbiAgdG9nZ2xlTW9kYWwoKTtcblxuICByZXR1cm4ge1xuICAgIGZvcm1FbGVtXG4gIH1cbn1cblxuLy8gUHJvamVjdCAoQ3JlYXRpb24gRm9ybSlcbmZ1bmN0aW9uIGJ1aWxkUHJvamVjdEZvcm0oKSB7XG4gIGNvbnN0IGZvcm1FbGVtID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJmb3JtXCIsIFwicHJvamVjdC1mb3JtXCIsIFwiXCIpO1xuICBib2R5LmFwcGVuZENoaWxkKGZvcm1FbGVtKTtcblxuICBjb25zdCB0aXRsZUxhYmVsID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJsYWJlbFwiLCBcInByb2plY3QtdGl0bGUtbGFiZWxcIiwgXCJQcm9qZWN0IE5hbWVcIik7XG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImlucHV0XCIsIFwicHJvamVjdC10aXRsZS1pbnB1dFwiLCBcIlwiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3QtdGl0bGUtaW5wdXRcIik7XG4gIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJvamVjdC10aXRsZS1pbnB1dFwiKTtcblxuICBjb25zdCBzdWJtaXRCdXR0b24gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImJ1dHRvblwiLCBcInByb2plY3QtZm9ybS1zdWJtaXRcIiwgXCJBZGRcIik7XG4gIGNvbnN0IGNsb3NlUHJvamVjdEZvcm1CdXR0b24gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImJ1dHRvblwiLCBcImNsb3NlLWZvcm1cIiwgXCLinJVcIik7XG5cbiAgZm9ybUVsZW0uYXBwZW5kKFxuICAgIHRpdGxlTGFiZWwsXG4gICAgdGl0bGVJbnB1dCxcbiAgICBzdWJtaXRCdXR0b24sXG4gICAgY2xvc2VQcm9qZWN0Rm9ybUJ1dHRvblxuICApXG5cbiAgdG9nZ2xlTW9kYWwoKTtcblxuICByZXR1cm4ge1xuICAgIGZvcm1FbGVtLFxuICAgIHRpdGxlSW5wdXQsXG4gICAgY2xvc2VQcm9qZWN0Rm9ybUJ1dHRvblxuICB9XG59XG5cbi8vIERpc3BsYXllZCBwcm9qZWN0c1xuZnVuY3Rpb24gZGlzcGxheVByb2plY3QocHJvamVjdCkge1xuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJkaXZcIiwgXCJwcm9qZWN0LWNvbnRhaW5lclwiLCBcIlwiKTtcbiAgcHJvamVjdE5hdi5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcblxuICBjb25zdCBzZWxlY3RDb250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImRpdlwiLCBcInNlbGVjdC1jb250YWluZXJcIiwgXCJcIik7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiZGl2XCIsIFwicHJvamVjdC10aXRsZVwiLCBwcm9qZWN0LnRpdGxlKTtcbiAgY29uc3QgZWRpdFByb2plY3RCdXR0b24gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImJ1dHRvblwiLCBcImVkaXQtcHJvamVjdFwiLCBcIlJFTkFNRVwiKTtcbiAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiYnV0dG9uXCIsIFwiZGVsZXRlLXByb2plY3RcIiwgXCJERUxFVEVcIik7XG4gIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiZGl2XCIsIFwicHJvamVjdC1idXR0b24tY29udGFpbmVyXCIsIFwiXCIpO1xuICBidXR0b25Db250YWluZXIuYXBwZW5kKFxuICAgIGVkaXRQcm9qZWN0QnV0dG9uLFxuICAgIGRlbGV0ZVByb2plY3RCdXR0b25cbiAgKVxuICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChcbiAgICBzZWxlY3RDb250YWluZXIsXG4gICAgcHJvamVjdFRpdGxlLFxuICAgIGJ1dHRvbkNvbnRhaW5lclxuICApXG4gIHJldHVybiB7XG4gICAgcHJvamVjdENvbnRhaW5lcixcbiAgICBlZGl0UHJvamVjdEJ1dHRvbixcbiAgICBkZWxldGVQcm9qZWN0QnV0dG9uXG4gIH07XG59XG5cbmZ1bmN0aW9uIGVkaXRQcm9qZWN0KHByb2plY3RDb250YWluZXIsIG5ld1RpdGxlKSB7XG4gIHByb2plY3RDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRpdGxlXCIpLnRleHRDb250ZW50ID0gbmV3VGl0bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3QocHJvamVjdENvbnRhaW5lcikge1xuICBwcm9qZWN0Q29udGFpbmVyLnJlbW92ZSgpO1xufVxuXG4vLyBQcm9qZWN0IChFZGl0IGFuZCBEZWxldGlvbiBGb3JtcylcbmZ1bmN0aW9uIGJ1aWxkUHJvamVjdEVkaXQocHJvamVjdFRpdGxlKSB7XG4gIGNvbnN0IGZvcm1FbGVtID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJmb3JtXCIsIFwicHJvamVjdC1mb3JtXCIsIFwiXCIpO1xuICBib2R5LmFwcGVuZENoaWxkKGZvcm1FbGVtKTtcblxuICBjb25zdCB0aXRsZUxhYmVsID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJsYWJlbFwiLCBcInByb2plY3QtdGl0bGUtbGFiZWxcIiwgXCJQcm9qZWN0IE5hbWVcIik7XG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImlucHV0XCIsIFwicHJvamVjdC10aXRsZS1pbnB1dFwiLCBcIlwiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3QtdGl0bGUtaW5wdXRcIik7XG4gIHRpdGxlSW5wdXQudmFsdWUgPSBwcm9qZWN0VGl0bGU7XG4gIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJvamVjdC10aXRsZS1pbnB1dFwiKTtcblxuICBjb25zdCBzdWJtaXRCdXR0b24gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImJ1dHRvblwiLCBcInByb2plY3QtZm9ybS1zdWJtaXRcIiwgXCJTYXZlXCIpO1xuICBjb25zdCBjbG9zZVByb2plY3RGb3JtQnV0dG9uID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJidXR0b25cIiwgXCJjbG9zZS1mb3JtXCIsIFwi4qiJXCIpO1xuXG4gIGZvcm1FbGVtLmFwcGVuZChcbiAgICB0aXRsZUxhYmVsLFxuICAgIHRpdGxlSW5wdXQsXG4gICAgc3VibWl0QnV0dG9uLFxuICAgIGNsb3NlUHJvamVjdEZvcm1CdXR0b25cbiAgKVxuXG4gIHRvZ2dsZU1vZGFsKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBmb3JtRWxlbSxcbiAgICB0aXRsZUlucHV0LFxuICAgIGNsb3NlUHJvamVjdEZvcm1CdXR0b25cbiAgfVxufVxuXG5mdW5jdGlvbiBidWlsZERlbGV0aW9uRm9ybShvYmplY3QpIHtcbiAgY29uc3QgZm9ybUVsZW0gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImZvcm1cIiwgXCJkZWxldGlvbi1mb3JtXCIsIFwiXCIpO1xuICBib2R5LmFwcGVuZENoaWxkKGZvcm1FbGVtKTtcblxuICBjb25zdCBkZWxldGlvbk1lc3NhZ2VTdGFydCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRDb250ZW50KFwiZGl2XCIsIFwiZGVsZXRpb24tbWVzc2FnZVwiLCBcIkFyZSB5b3Ugc3VyZT9cIik7XG4gIGNvbnN0IG9iamVjdFRpdGxlID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJkaXZcIiwgXCJkZWxldGlvbi10aXRsZVwiLCBvYmplY3QudGl0bGUpO1xuICBjb25zdCBkZWxldGlvbk1lc3NhZ2VGaW5pc2ggPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChcImRpdlwiLCBcImRlbGV0aW9uLW1lc3NhZ2VcIiwgXCJ3aWxsIGJlIGdvbmUgZm9yZXZlclwiKTtcbiAgY29uc3QgeWVzQnV0dG9uID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJidXR0b25cIiwgXCJkZWxldGlvbi15ZXNcIiwgXCJZZXNcIik7XG4gIGNvbnN0IG5vQnV0dG9uID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJidXR0b25cIiwgXCJkZWxldGlvbi1ub1wiLCBcIk5vXCIpXG4gIGNvbnN0IGNsb3NlRGVsZXRpb25Gb3JtQnV0dG9uID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZENvbnRlbnQoXCJidXR0b25cIiwgXCJjbG9zZS1mb3JtXCIsIFwi4pyVXCIpO1xuXG4gIGZvcm1FbGVtLmFwcGVuZChcbiAgICBkZWxldGlvbk1lc3NhZ2VTdGFydCxcbiAgICBvYmplY3RUaXRsZSxcbiAgICBkZWxldGlvbk1lc3NhZ2VGaW5pc2gsXG4gICAgeWVzQnV0dG9uLFxuICAgIG5vQnV0dG9uLFxuICAgIGNsb3NlRGVsZXRpb25Gb3JtQnV0dG9uXG4gIClcblxuICB0b2dnbGVNb2RhbCgpO1xuXG4gIHJldHVybiB7XG4gICAgZm9ybUVsZW0sXG4gICAgeWVzQnV0dG9uLFxuICAgIG5vQnV0dG9uLFxuICAgIGNsb3NlRGVsZXRpb25Gb3JtQnV0dG9uXG4gIH1cbn1cblxuLy8gU2lkZWJhciBIaWdobGlnaHRpbmdcbmxldCBwcmV2aW91c1Byb2plY3Q7XG5mdW5jdGlvbiBoaWdobGlnaHRQcm9qZWN0KGN1cnJlbnRQcm9qZWN0KSB7XG4gIGlmIChwcmV2aW91c1Byb2plY3QgIT09IHVuZGVmaW5lZCkgcHJldmlvdXNQcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0LWNvbnRhaW5lclwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiY2hvc2VuXCIpO1xuICBjdXJyZW50UHJvamVjdC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdC1jb250YWluZXJcIikuY2xhc3NMaXN0LnRvZ2dsZShcImNob3NlblwiKTtcbiAgcHJldmlvdXNQcm9qZWN0ID0gY3VycmVudFByb2plY3Q7XG59XG5cbmxldCBwcmV2aW91c05hdjtcbmZ1bmN0aW9uIGhpZ2hsaWdodE5hdihjdXJyZW50TmF2KSB7XG4gIGlmIChwcmV2aW91c05hdiAhPT0gdW5kZWZpbmVkKSBwcmV2aW91c05hdi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlnaGxpZ2h0ZWRcIik7XG4gIGN1cnJlbnROYXYuY2xhc3NMaXN0LnRvZ2dsZShcImhpZ2hsaWdodGVkXCIpO1xuICBwcmV2aW91c05hdiA9IGN1cnJlbnROYXY7XG59XG5cbi8vIEdlbmVyYWwgZnVuY3Rpb25zXG5mdW5jdGlvbiByZW1vdmVGb3JtKGZvcm0pIHtcbiAgZm9ybS5yZW1vdmUoKTtcbiAgdG9nZ2xlTW9kYWwoKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlTW9kYWwoKSB7XG4gIG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG59XG5cbmZ1bmN0aW9uIHNldE1haW5UaXRsZSh0aXRsZSkge1xuICBtYWluVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGJ1aWxkVGFza0Zvcm0sXG4gIGRpc3BsYXlUYXNrLFxuICB0b2dnbGVUYXNrQ29tcGxldGlvbixcbiAgYnVpbGRUYXNrRWRpdCxcbiAgYnVpbGRUYXNrSW5mbyxcbiAgZWRpdFRhc2ssXG4gIHJlbW92ZVRhc2ssXG4gIGNsZWFyVGFza0NvbnRhaW5lcixcbiAgYnVpbGRQcm9qZWN0Rm9ybSxcbiAgZGlzcGxheVByb2plY3QsXG4gIGJ1aWxkUHJvamVjdEVkaXQsXG4gIGVkaXRQcm9qZWN0LFxuICByZW1vdmVQcm9qZWN0LFxuICBoaWdobGlnaHRQcm9qZWN0LFxuICBoaWdobGlnaHROYXYsXG4gIHJlbW92ZUZvcm0sXG4gIGJ1aWxkRGVsZXRpb25Gb3JtLFxuICBzZXRNYWluVGl0bGUsXG4gIHNob3dUYXNrRm9ybSxcbiAgc2hvd1Byb2plY3RGb3JtLFxuICBuYXZBbGwsXG4gIG5hdlRvZGF5LFxuICBuYXZUb21vcnJvdyxcbiAgbmF2V2VlayxcbiAgbmF2SW1wb3J0YW50LFxuICBuYXZDb21wbGV0ZWQsXG4gIHRhc2tTb3J0LFxuICBtb2RhbFxufSIsImNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGltcG9ydGFuY2UsIGR1ZURhdGUsIGNvbXBsZXRpb24pIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuaW1wb3J0YW5jZSA9IGltcG9ydGFuY2U7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLmNvbXBsZXRpb24gPSBmYWxzZTtcbiAgfVxuXG4gIGdldCBpbXBvcnRhbmNlU3ltYm9sKCkge1xuICAgIGlmICh0aGlzLmltcG9ydGFuY2UpIHJldHVybiBcIiFcIjtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIHRpbWVMZWZ0KCkge1xuICAgIGNvbnN0IG1zTGVmdCA9IG5ldyBEYXRlKHRoaXMuZHVlRGF0ZSkgLSBuZXcgRGF0ZSgpO1xuICAgIGlmIChtc0xlZnQgPCAtNjAwMDApIHJldHVybiBcIvCflZAgUGFzdCBEdWVcIjtcbiAgICBjb25zdCBtaW51dGVzTGVmdCA9IE1hdGguY2VpbChtc0xlZnQgLyAxMDAwIC8gNjApO1xuICAgIGlmIChtaW51dGVzTGVmdCA8IDYwKSByZXR1cm4gYPCflZAgJHttaW51dGVzTGVmdH0gbWludXRlcyBsZWZ0YDtcbiAgICBjb25zdCBocnNMZWZ0ID0gTWF0aC5jZWlsKG1pbnV0ZXNMZWZ0IC8gNjApO1xuICAgIGlmIChocnNMZWZ0IDwgMjQpIHJldHVybiBg8J+VkCAke2hyc0xlZnR9IGhvdXJzIGxlZnRgO1xuICAgIHJldHVybiBg8J+VkCAke01hdGguY2VpbChocnNMZWZ0IC8gMjQpfSBkYXlzIGxlZnRgO1xuICB9XG59XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gIH1cbn1cblxuLy8gTG9jYWwgc3RvcmFnZVxubGV0IGFsbFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFsbFByb2plY3RzXCIpKTtcbmlmICgoYWxsUHJvamVjdHMgPT09IG51bGwpIHx8IChhbGxQcm9qZWN0cy5sZW5ndGggPT09IDApKSB7XG4gIGFsbFByb2plY3RzID0gW107XG4gIGNyZWF0ZU5ld1Byb2plY3QoXCJHZW5lcmFsIFRhc2tzXCIpO1xufSBlbHNlIHtcbiAgYWxsUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2godGFzayA9PiByZWdhaW5UYXNrTWV0aG9kcyh0YXNrKSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZWdhaW5UYXNrTWV0aG9kcyh0YXNrKSB7XG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZih0YXNrLCBUYXNrLnByb3RvdHlwZSk7XG59XG5cbmZ1bmN0aW9uIHNhdmVDaGFuZ2VzKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFsbFByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XG59XG5cbi8vIFRhc2tzXG5mdW5jdGlvbiBjcmVhdGVUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgaW1wb3J0YW5jZSwgZHVlRGF0ZSkge1xuICByZXR1cm4gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBpbXBvcnRhbmNlLCBkdWVEYXRlKTtcbn1cblxuZnVuY3Rpb24gZWRpdFRhc2sodGFzaywgbmV3VGl0bGUsIG5ld0Rlc2NyaXB0aW9uLCBuZXdJbXBvcnRhbmNlLCBuZXdEYXRlKSB7XG4gIHRhc2sudGl0bGUgPSBuZXdUaXRsZTtcbiAgdGFzay5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICB0YXNrLmltcG9ydGFuY2UgPSBuZXdJbXBvcnRhbmNlO1xuICB0YXNrLmR1ZURhdGUgPSBuZXdEYXRlO1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrVG9Qcm9qZWN0KHRhc2ssIHByb2plY3QpIHtcbiAgcHJvamVjdC50YXNrcy5wdXNoKHRhc2spO1xufVxuXG5mdW5jdGlvbiByZW1vdmVUYXNrKHRhc2spIHtcbiAgY29uc3QgdGFza1Byb2plY3QgPSBhbGxQcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC50YXNrcy5pbmNsdWRlcyh0YXNrKSk7XG4gIGNvbnN0IHRhc2tBcnJheSA9IHRhc2tQcm9qZWN0LnRhc2tzO1xuICBjb25zdCB0YXNrSW5kZXggPSB0YXNrQXJyYXkuaW5kZXhPZih0YXNrKTtcbiAgdGFza0FycmF5LnNwbGljZSh0YXNrSW5kZXgsIDEpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVUYXNrQ29tcGxldGlvbih0YXNrKSB7XG4gIHRhc2suY29tcGxldGlvbiA9ICF0YXNrLmNvbXBsZXRpb247XG59XG5cbi8vIFByb2plY3RzXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KHRpdGxlKSB7XG4gIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZSk7XG4gIGFsbFByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIHJldHVybiBwcm9qZWN0O1xufVxuXG5mdW5jdGlvbiBlZGl0UHJvamVjdChwcm9qZWN0LCBuZXdUaXRsZSkge1xuICBwcm9qZWN0LnRpdGxlID0gbmV3VGl0bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3QocHJvamVjdCkge1xuICBjb25zdCBwcm9qZWN0SW5kZXggPSBhbGxQcm9qZWN0cy5pbmRleE9mKHByb2plY3QpO1xuICBhbGxQcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbn1cblxuZnVuY3Rpb24gZ2V0QWxsUHJvamVjdHNBbmRUYXNrcygpIHtcbiAgcmV0dXJuIGFsbFByb2plY3RzO1xufVxuXG4vLyBGaWx0ZXJpbmcgVGFza3MgKHNpZGViYXIgbmF2aWdhdGlvbilcbmZ1bmN0aW9uIGdldEZpbHRlcmVkVGFza3MoY3JpdGVyaWEpIHtcbiAgY29uc3QgZmlsdGVyZWRUYXNrcyA9IFtdO1xuXG4gIGlmIChjcml0ZXJpYSA9PT0gXCJBbGxcIikge1xuICAgIGFsbFByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2godGFzayA9PiBmaWx0ZXJlZFRhc2tzLnB1c2godGFzaykpO1xuICAgIH0pXG4gIH1cbiAgaWYgKGNyaXRlcmlhID09PSBcIlRvZGF5XCIpIHtcbiAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpO1xuICAgICAgICBjb25zdCBkdWVEYXkgPSBuZXcgRGF0ZSh0YXNrLmR1ZURhdGUpLmdldERhdGUoKTtcbiAgICAgICAgaWYgKHRvZGF5ID09PSBkdWVEYXkpIGZpbHRlcmVkVGFza3MucHVzaCh0YXNrKTtcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuICBpZiAoY3JpdGVyaWEgPT09IFwiVG9tb3Jyb3dcIikge1xuICAgIGFsbFByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGNvbnN0IHRvbW9ycm93ID0gbmV3IERhdGUoKS5nZXREYXRlKCkgKyAxO1xuICAgICAgICBjb25zdCBkdWVEYXkgPSBuZXcgRGF0ZSh0YXNrLmR1ZURhdGUpLmdldERhdGUoKTtcbiAgICAgICAgaWYgKHRvbW9ycm93ID09PSBkdWVEYXkpIGZpbHRlcmVkVGFza3MucHVzaCh0YXNrKTtcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuICBpZiAoY3JpdGVyaWEgPT09IFwiV2Vla1wiKSB7XG4gICAgYWxsUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgIHByb2plY3QudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgY29uc3QgZGF5RGlmZmVyZW5jZSA9ICgobmV3IERhdGUodGFzay5kdWVEYXRlKSAtIG5ldyBEYXRlKCkpIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgaWYgKChkYXlEaWZmZXJlbmNlIDw9IDcpICYmIChkYXlEaWZmZXJlbmNlID4gMCkpIGZpbHRlcmVkVGFza3MucHVzaCh0YXNrKTtcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuICBpZiAoY3JpdGVyaWEgPT09IFwiSW1wb3J0YW50XCIpIHtcbiAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBpZiAodGFzay5pbXBvcnRhbmNlKSBmaWx0ZXJlZFRhc2tzLnB1c2godGFzayk7XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbiAgaWYgKGNyaXRlcmlhID09PSBcIkNvbXBsZXRlZFwiKSB7XG4gICAgYWxsUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgIHByb2plY3QudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgaWYgKHRhc2suY29tcGxldGlvbikgZmlsdGVyZWRUYXNrcy5wdXNoKHRhc2spO1xuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGZpbHRlcmVkVGFza3M7XG59XG5cbi8vIFNvcnRpbmcgVGFza3NcbmxldCBwcmV2aW91c0NyaXRlcmlhO1xubGV0IHNvcnRlZDtcbmZ1bmN0aW9uIHNvcnRUYXNrcyh0YXNrcywgY3JpdGVyaWEpIHtcbiAgaWYgKHByZXZpb3VzQ3JpdGVyaWEgPT09IGNyaXRlcmlhKSB7XG4gICAgc29ydGVkLnJldmVyc2UoKVxuICAgIHJldHVybiBzb3J0ZWQ7XG4gIH07XG4gIHByZXZpb3VzQ3JpdGVyaWEgPSBjcml0ZXJpYTtcblxuICBzd2l0Y2ggKGNyaXRlcmlhKSB7XG4gICAgY2FzZSBcInJlY2VudFwiOlxuICAgICAgc29ydGVkID0gWy4uLnRhc2tzXS5yZXZlcnNlKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwidGltZSBsZWZ0XCI6XG4gICAgICBzb3J0ZWQgPSBbLi4udGFza3NdLnNvcnQoKHRhc2sxLCB0YXNrMikgPT4ge3JldHVybiBuZXcgRGF0ZSh0YXNrMS5kdWVEYXRlKSAtIG5ldyBEYXRlKHRhc2syLmR1ZURhdGUpO30pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImFscGhhYmV0aWNcIjpcbiAgICAgIHNvcnRlZCA9IFsuLi50YXNrc10uc29ydCgodGFzazEsIHRhc2syKSA9PiB7aWYgKHRhc2sxLnRpdGxlIDwgdGFzazIudGl0bGUpIHJldHVybiAtMTt9KTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHJldHVybiBzb3J0ZWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY3JlYXRlVGFzayxcbiAgdG9nZ2xlVGFza0NvbXBsZXRpb24sXG4gIGVkaXRUYXNrLFxuICBhZGRUYXNrVG9Qcm9qZWN0LFxuICByZW1vdmVUYXNrLFxuICBjcmVhdGVOZXdQcm9qZWN0LFxuICBlZGl0UHJvamVjdCxcbiAgcmVtb3ZlUHJvamVjdCxcbiAgZ2V0QWxsUHJvamVjdHNBbmRUYXNrcyxcbiAgc2F2ZUNoYW5nZXMsXG4gIHJlZ2FpblRhc2tNZXRob2RzLFxuICBnZXRGaWx0ZXJlZFRhc2tzLFxuICBzb3J0VGFza3Ncbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kQ29udGVudChlbGVtVHlwZSwgY2xhc3NOYW1lLCBjb250ZW50KSB7XG4gIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1UeXBlKTtcbiAgdGVtcC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gIHRlbXAudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICByZXR1cm4gdGVtcDtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=