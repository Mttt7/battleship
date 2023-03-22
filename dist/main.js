/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  height: 100vh;\n  width: 100vw;\n  background-color: aqua;\n  font-family: \"Ubuntu\", sans-serif;\n}\n\n#container {\n  height: 100%;\n  width: 100%;\n  background-color: rgb(224, 224, 224);\n}\n\n.game-area {\n  padding: 40px 0px 0px 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.fleet {\n  margin: 0px 10px 0px 0px;\n  background-color: rgba(0, 0, 0, 0.242);\n  border-radius: 5px;\n  height: 525px;\n  width: 400px;\n}\n.fleet .ship {\n  background-color: rgba(0, 0, 0, 0.806);\n  margin: 10px;\n  height: 33px;\n  z-index: 100;\n}\n.fleet .ship-1 {\n  width: 35px;\n}\n.fleet .ship-2 {\n  width: 70px;\n}\n.fleet .ship-3 {\n  width: 105px;\n}\n.fleet .ship-4 {\n  width: 140px;\n}\n.fleet .ship-5 {\n  width: 175px;\n}\n\n.fleet-horizontal {\n  height: 50%;\n}\n\n.fleet-vertical {\n  padding: 10px;\n  height: 40%;\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-start;\n}\n\n.boards {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  background-color: rgba(0, 0, 0, 0.807);\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.boards .board {\n  margin: 5px;\n  padding: 20px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  display: grid;\n  grid-template-rows: repeat(10, 37px);\n  grid-template-columns: repeat(10, 37px);\n}\n.boards .board .cell {\n  height: 35px;\n  width: 35px;\n  background-color: rgba(235, 207, 207, 0.517);\n}\n.boards .board .cell-drop-hover {\n  background-color: rgba(0, 0, 0, 0.807);\n}\n.boards .cell::before {\n  font-family: \"Ubuntu\", sans-serif;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  left: -40px;\n  top: 7px;\n  font-size: 15px;\n  color: rgb(195, 195, 195);\n  content: attr(data-displayx);\n}\n.boards .cell[data-displayy=\"1\"]::after {\n  top: -33px;\n}\n.boards .cell::after {\n  font-family: \"Ubuntu\", sans-serif;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  top: -18px;\n  left: 12px;\n  font-size: 15px;\n  color: rgb(195, 195, 195);\n  content: attr(data-displayy);\n}\n\n.draggable.dragging {\n  opacity: 0.2;\n}\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}/*# sourceMappingURL=style.css.map */", "",{"version":3,"sources":["webpack://./src/styles/style.scss","webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,YAAA;EACA,sBAAA;EACA,iCAAA;ACCJ;;ADMA;EACI,YAAA;EACA,WAAA;EACA,oCAAA;ACHJ;;ADOA;EACI,yBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;ACJJ;;ADOA;EACI,wBAAA;EACA,sCAAA;EACA,kBAAA;EACA,aAAA;EACA,YArBQ;ACiBZ;ADKI;EACI,sCAAA;EACA,YAAA;EACA,YAAA;EACA,YAAA;ACHR;ADMI;EACI,WA/BG;AC2BX;ADMI;EACI,WAAA;ACJR;ADMI;EACI,YAAA;ACJR;ADMI;EACI,YAAA;ACJR;ADMI;EACI,YAAA;ACJR;;ADOA;EACI,WAAA;ACJJ;;ADMA;EACI,aAAA;EACA,WAAA;EACA,aAAA;EAEA,qBAAA;EACA,2BAAA;ACJJ;;ADOA;EACI,0BAAA;EAAA,uBAAA;EAAA,kBAAA;EACA,sCAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;ACJJ;ADKI;EAEI,WAAA;EACA,aAAA;EACA,2BAAA;EAAA,wBAAA;EAAA,mBAAA;EACA,0BAAA;EAAA,uBAAA;EAAA,kBAAA;EACA,aAAA;EACA,oCAAA;EACA,uCAAA;ACJR;ADKQ;EACI,YA5ED;EA6EC,WA7ED;EA8EC,4CAAA;ACHZ;ADKQ;EACI,sCAAA;ACHZ;ADOI;EACI,iCAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,yBAAA;EACA,WAAA;EACA,QAAA;EACA,eAAA;EACA,yBAAA;EACA,4BAAA;ACLR;ADOI;EACI,UAAA;ACLR;ADOI;EACI,iCAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,2BAAA;EACA,UAAA;EACA,UAAA;EACA,eAAA;EACA,yBAAA;EACA,4BAAA;ACLR;;ADWA;EACI,YAAA;ACRJ;;ADqCA;;;;;;;;;;;;;EAaC,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;AClCD;;ADoCA,gDAAA;AACA;;EAEC,cAAA;ACjCD;;ADmCA;EACC,cAAA;AChCD;;ADkCA;EACC,gBAAA;AC/BD;;ADiCA;EACC,YAAA;AC9BD;;ADgCA;;EAEC,WAAA;EACA,aAAA;AC7BD;;AD+BA;EACC,yBAAA;EACA,iBAAA;AC5BD,CAAA,oCAAA","sourceRoot":""}]);
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

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/drawing.js":
/*!************************!*\
  !*** ./src/drawing.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawGame": () => (/* binding */ drawGame)
/* harmony export */ });
function drawShip(i){
    let length = 0
    if(i==0) length = 1
    else if(i==1) length = 2
    else if(i==2) length = 3
    else if(i==3) length = 3
    else if(i==4) length = 4
    else if(i==5) length = 5

    const ship = document.createElement('div')
    ship.draggable = true
    ship.classList.add('draggable')
    ship.classList.add('ship')
    ship.classList.add(`ship-${length}`)
    ship.classList.add(`id-${i}`)
    ship.dataset.length = length
    ship.dataset.direction = 'h'
    ship.classList.add('ship-horizontal')

    
    

    return ship
}



function drawGame(){
    const gameArea = document.createElement('div')
    gameArea.classList.add('game-area')

    const boards = document.createElement('div')
    boards.classList.add('boards')

    const playerBoard = drawBoard()
    playerBoard.classList.add('player-board')

    const aiBoard = drawBoard()
    aiBoard.classList.add('ai-board')

    
    

    const fleet = document.createElement('div')
    const fleetHorizontal = document.createElement('div')
    const fleetVertical = document.createElement('div')
    for(let i = 0 ; i<6; i++){
        fleetHorizontal.appendChild(drawShip(i))
    }
    fleet.classList.add('fleet')
    fleetHorizontal.classList.add('fleet-horizontal')
    fleetVertical.classList.add('fleet-vertical')
    fleet.appendChild(fleetHorizontal)
    fleet.appendChild(fleetVertical)
    
    boards.appendChild(playerBoard)
    boards.appendChild(aiBoard)
    gameArea.appendChild(fleet)
    
    gameArea.appendChild(boards)
    
    
    return gameArea

}


function drawBoard(){
    const board = document.createElement('div')
    board.classList.add('board')

    for(let i=0;i<10;i++){
        for(let j = 0;j<10;j++){
            const cell = document.createElement('div')
            cell.classList.add('cell')
            cell.dataset.id = `${j}-${i}`
            if(j===0) cell.dataset.displayx = `${i+1}`
            if(i===0) cell.dataset.displayy = `${j+1}`
            cell.dataset.vacant = 1
            board.appendChild(cell)
        }
        
    }

    return board
}

/***/ }),

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ applyEffects)
/* harmony export */ });
function makeShipsDragging(){
    const draggables = document.querySelectorAll('.draggable')
    const board = document.querySelector('.player-board')
    const fleet = document.querySelector('fleet')
    const cells = board.querySelectorAll('.cell')

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart',(e)=>{ 
            draggable.classList.add('dragging')
        })
        draggable.addEventListener('dragend',()=>{ 
            draggable.classList.remove('dragging')
        })
    })

    cells.forEach(cell=>{
        //hover effect
        cell.addEventListener('dragover',(e)=>{
            e.preventDefault()
            cell.classList.add('cell-drop-hover')
           
        })
        cell.addEventListener('dragleave',(e)=>{
            cell.classList.remove('cell-drop-hover')
        })
        
        cell.addEventListener('drop',()=>{
            const dragging = document.querySelector('.dragging')
            console.log(dragging)
            
            if(checkPositionIsValid(convertIdToXY(cell.dataset.id),Number(dragging.dataset.length),dragging.dataset.direction)){
                placeShip(convertIdToXY(cell.dataset.id),Number(dragging.dataset.length),dragging.dataset.direction)
            }
             
            cell.classList.remove('cell-drop-hover')
        })
        
    })

}



function placeShip(pos,length,direction){
    const board = document.querySelector('.player-board')
    const fleetHoriontal = document.querySelector('.fleet-horizontal')
    const fleetVertical = document.querySelector('.fleet-vertical')
    let startingCell = board.querySelector(`[data-id="${pos[0]}-${pos[1]}"]`)
    
    if(direction==='h'){
        for(let i = 1;i<=length;i++){
            console.log(startingCell)
            console.log(i,'/',length)
            startingCell.style.backgroundColor = 'black'
            startingCell.dataset.vacant = "0"
            
    
    
            startingCell = board.querySelector(`[data-id="${pos[0]+i}-${pos[1]}"]`)
        }
        const placedShip = document.querySelector('.dragging')
        fleetHoriontal.removeChild(placedShip)
    }
    else if(direction==='v'){
        for(let i = 1;i<=length;i++){
            startingCell.style.backgroundColor = 'black'
            startingCell.dataset.vacant = "0"
            startingCell = board.querySelector(`[data-id="${pos[0]}-${pos[1]+i}"]`)
        }
        const placedShip = document.querySelector('.dragging')
        fleetVertical.removeChild(placedShip)
    }
    
    
    
}
function convertIdToXY(str){
    return [Number(str[0]),Number(str[2])]
}

//arrays of adjacent cells-------------------------------
    const horizontalFromEvery = [[0,-1],[0,1],[0,0]]
    const horizontalLeftEdge = [[-1,-1],[-1,0],[-1,1]]
    const horizontalRightEdge = [[1,-1],[1,0],[1,1]]

    const verticalFromEvery = [[-1,0],[1,0],[0,0]]
    const verticalTopEdge = [[-1,-1],[0,-1],[1,-1]]
    const verticalBottomEdge = [[-1,1],[0,1],[1,1]]
//-------------------------------------------------------

function checkVacancy(pos,length,direction){
    let legalPositioning = true
    

    const startingCell = document.querySelector(`[data-id="${pos[0]}-${pos[1]}"]`)

    if(direction==='h'){
        for(let i=0; i<length; i++){
            if(i === 0 && pos[0]!==0){
                horizontalLeftEdge.forEach(v=>{
                    try{
                        let t = document.querySelector(`[data-id="${pos[0]+i+v[0]}-${pos[1]+v[1]}"]`)
                        if(t.dataset.vacant==="0") legalPositioning = false
                    }catch(e){}
                })
            }
            if(i === length-1){
                horizontalRightEdge.forEach(v=>{
                    try{
                        let t = document.querySelector(`[data-id="${pos[0]+i+v[0]}-${pos[1]+v[1]}"]`)
                        if(t.dataset.vacant==="0") legalPositioning = false
                    }catch(e){}
                })
            }
            horizontalFromEvery.forEach(v=>{
                try{
                    let t = document.querySelector(`[data-id="${pos[0]+i+v[0]}-${pos[1]+v[1]}"]`)
                    if(t.dataset.vacant==="0") legalPositioning = false
                }catch(e){}
            })
        }
    }
    else if(direction==='v'){
        for(let i=0; i<length; i++){
            let current = document.querySelector(`[data-id="${pos[0]}-${pos[1]+1}"]`)
            if(i === 0 && pos[1]!==0){
                verticalTopEdge.forEach(v=>{
                    try{
                        let t = document.querySelector(`[data-id="${pos[0]+v[0]}-${pos[1]+i+v[1]}"]`)
                        if(t.dataset.vacant==="0") legalPositioning = false
                    }catch(e){}
                })
            }
            if(i === length-1){
                verticalBottomEdge.forEach(v=>{
                    try{
                        let t = document.querySelector(`[data-id="${pos[0]+v[0]}-${pos[1]+i+v[1]}"]`)
                        if(t.dataset.vacant==="0") legalPositioning = false
                    }catch(e){}
                })
            }
            verticalFromEvery.forEach(v=>{
                try{
                    let t = document.querySelector(`[data-id="${pos[0]+v[0]}-${pos[1]+i+v[1]}"]`)
                    if(t.dataset.vacant==="0") legalPositioning = false
                }catch(e){}
            })
        }
    }

    return legalPositioning
}
function checkPositionIsValid(pos,length,direction){
   if(checkVacancy(pos,length,direction)){
    if(direction === 'h'){
        if((pos[0]+length-1)<=9 && (pos[0]+length-1)>=0) return true
        else return false
    }
    else if(direction === 'v'){
        if(pos[1]+length-1<=9 && pos[1]+length-1>=0) return true
        else return false
    }
   }else return false
}

function addEventsListeners(){
    const ships = document.querySelectorAll('.ship')

    const fleetHorizontal = document.querySelector('.fleet-horizontal')
    const fleetVertical = document.querySelector('.fleet-vertical')
    ships.forEach(ship=>{
        ship.addEventListener('click',()=>{
        
            if(ship.classList.contains('ship-vertical')){
                ship.classList.remove('ship-vertical')
                ship.classList.add('ship-horizontal')
                ship.dataset.direction = 'h'
                fleetHorizontal.appendChild(ship)
                ship.style.height = '35px'
                ship.style.width = `${ship.dataset.length * 35}px`
            }
            else if(ship.classList.contains('ship-horizontal')){
                ship.classList.remove('ship-horizontal')
                ship.classList.add('ship-vertical')
                ship.dataset.direction = 'v'
                fleetVertical.appendChild(ship)
                console.log(ship.dataset.length)
                ship.style.height = `${ship.dataset.length * 35}px`
                ship.style.width = '35px'

            }
    
        })
    })
   
}

function applyEffects(){
    makeShipsDragging()
    addEventsListeners()
}

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _drawing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawing */ "./src/drawing.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings */ "./src/settings.js");




const CONTAINER = document.querySelector('#container')

CONTAINER.appendChild((0,_drawing__WEBPACK_IMPORTED_MODULE_1__.drawGame)())
;(0,_settings__WEBPACK_IMPORTED_MODULE_2__["default"])()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0EyQjtBQUNTO0FBQ0M7O0FBRXJDOztBQUVBLHNCQUFzQixrREFBUTtBQUM5QixzREFBWSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZHJhd2luZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NldHRpbmdzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgMjI0LCAyMjQpO1xcbn1cXG5cXG4uZ2FtZS1hcmVhIHtcXG4gIHBhZGRpbmc6IDQwcHggMHB4IDBweCAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZmxlZXQge1xcbiAgbWFyZ2luOiAwcHggMTBweCAwcHggMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI0Mik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBoZWlnaHQ6IDUyNXB4O1xcbiAgd2lkdGg6IDQwMHB4O1xcbn1cXG4uZmxlZXQgLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgwNik7XFxuICBtYXJnaW46IDEwcHg7XFxuICBoZWlnaHQ6IDMzcHg7XFxuICB6LWluZGV4OiAxMDA7XFxufVxcbi5mbGVldCAuc2hpcC0xIHtcXG4gIHdpZHRoOiAzNXB4O1xcbn1cXG4uZmxlZXQgLnNoaXAtMiB7XFxuICB3aWR0aDogNzBweDtcXG59XFxuLmZsZWV0IC5zaGlwLTMge1xcbiAgd2lkdGg6IDEwNXB4O1xcbn1cXG4uZmxlZXQgLnNoaXAtNCB7XFxuICB3aWR0aDogMTQwcHg7XFxufVxcbi5mbGVldCAuc2hpcC01IHtcXG4gIHdpZHRoOiAxNzVweDtcXG59XFxuXFxuLmZsZWV0LWhvcml6b250YWwge1xcbiAgaGVpZ2h0OiA1MCU7XFxufVxcblxcbi5mbGVldC12ZXJ0aWNhbCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgaGVpZ2h0OiA0MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uYm9hcmRzIHtcXG4gIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50O1xcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODA3KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uYm9hcmRzIC5ib2FyZCB7XFxuICBtYXJnaW46IDVweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBoZWlnaHQ6IC13ZWJraXQtZml0LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IC1tb3otZml0LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgd2lkdGg6IC13ZWJraXQtZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzdweCk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzdweCk7XFxufVxcbi5ib2FyZHMgLmJvYXJkIC5jZWxsIHtcXG4gIGhlaWdodDogMzVweDtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzUsIDIwNywgMjA3LCAwLjUxNyk7XFxufVxcbi5ib2FyZHMgLmJvYXJkIC5jZWxsLWRyb3AtaG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgwNyk7XFxufVxcbi5ib2FyZHMgLmNlbGw6OmJlZm9yZSB7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCIsIHNhbnMtc2VyaWY7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBsZWZ0OiAtNDBweDtcXG4gIHRvcDogN3B4O1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgY29sb3I6IHJnYigxOTUsIDE5NSwgMTk1KTtcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1kaXNwbGF5eCk7XFxufVxcbi5ib2FyZHMgLmNlbGxbZGF0YS1kaXNwbGF5eT1cXFwiMVxcXCJdOjphZnRlciB7XFxuICB0b3A6IC0zM3B4O1xcbn1cXG4uYm9hcmRzIC5jZWxsOjphZnRlciB7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCIsIHNhbnMtc2VyaWY7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIHRvcDogLTE4cHg7XFxuICBsZWZ0OiAxMnB4O1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgY29sb3I6IHJnYigxOTUsIDE5NSwgMTk1KTtcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1kaXNwbGF5eSk7XFxufVxcblxcbi5kcmFnZ2FibGUuZHJhZ2dpbmcge1xcbiAgb3BhY2l0eTogMC4yO1xcbn1cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLCBxIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufS8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLmNzcy5tYXAgKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0FDQ0o7O0FETUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0FDSEo7O0FET0E7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDSko7O0FET0E7RUFDSSx3QkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFyQlE7QUNpQlo7QURLSTtFQUNJLHNDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDSFI7QURNSTtFQUNJLFdBL0JHO0FDMkJYO0FETUk7RUFDSSxXQUFBO0FDSlI7QURNSTtFQUNJLFlBQUE7QUNKUjtBRE1JO0VBQ0ksWUFBQTtBQ0pSO0FETUk7RUFDSSxZQUFBO0FDSlI7O0FET0E7RUFDSSxXQUFBO0FDSko7O0FETUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFFQSxxQkFBQTtFQUNBLDJCQUFBO0FDSko7O0FET0E7RUFDSSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0pKO0FES0k7RUFFSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLHVDQUFBO0FDSlI7QURLUTtFQUNJLFlBNUVEO0VBNkVDLFdBN0VEO0VBOEVDLDRDQUFBO0FDSFo7QURLUTtFQUNJLHNDQUFBO0FDSFo7QURPSTtFQUNJLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUNMUjtBRE9JO0VBQ0ksVUFBQTtBQ0xSO0FET0k7RUFDSSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FDTFI7O0FEV0E7RUFDSSxZQUFBO0FDUko7O0FEcUNBOzs7Ozs7Ozs7Ozs7O0VBYUMsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQ2xDRDs7QURvQ0EsZ0RBQUE7QUFDQTs7RUFFQyxjQUFBO0FDakNEOztBRG1DQTtFQUNDLGNBQUE7QUNoQ0Q7O0FEa0NBO0VBQ0MsZ0JBQUE7QUMvQkQ7O0FEaUNBO0VBQ0MsWUFBQTtBQzlCRDs7QURnQ0E7O0VBRUMsV0FBQTtFQUNBLGFBQUE7QUM3QkQ7O0FEK0JBO0VBQ0MseUJBQUE7RUFDQSxpQkFBQTtBQzVCRCxDQUFBLG9DQUFBXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBkcmF3U2hpcChpKXtcbiAgICBsZXQgbGVuZ3RoID0gMFxuICAgIGlmKGk9PTApIGxlbmd0aCA9IDFcbiAgICBlbHNlIGlmKGk9PTEpIGxlbmd0aCA9IDJcbiAgICBlbHNlIGlmKGk9PTIpIGxlbmd0aCA9IDNcbiAgICBlbHNlIGlmKGk9PTMpIGxlbmd0aCA9IDNcbiAgICBlbHNlIGlmKGk9PTQpIGxlbmd0aCA9IDRcbiAgICBlbHNlIGlmKGk9PTUpIGxlbmd0aCA9IDVcblxuICAgIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNoaXAuZHJhZ2dhYmxlID0gdHJ1ZVxuICAgIHNoaXAuY2xhc3NMaXN0LmFkZCgnZHJhZ2dhYmxlJylcbiAgICBzaGlwLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKVxuICAgIHNoaXAuY2xhc3NMaXN0LmFkZChgc2hpcC0ke2xlbmd0aH1gKVxuICAgIHNoaXAuY2xhc3NMaXN0LmFkZChgaWQtJHtpfWApXG4gICAgc2hpcC5kYXRhc2V0Lmxlbmd0aCA9IGxlbmd0aFxuICAgIHNoaXAuZGF0YXNldC5kaXJlY3Rpb24gPSAnaCdcbiAgICBzaGlwLmNsYXNzTGlzdC5hZGQoJ3NoaXAtaG9yaXpvbnRhbCcpXG5cbiAgICBcbiAgICBcblxuICAgIHJldHVybiBzaGlwXG59XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gZHJhd0dhbWUoKXtcbiAgICBjb25zdCBnYW1lQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZ2FtZUFyZWEuY2xhc3NMaXN0LmFkZCgnZ2FtZS1hcmVhJylcblxuICAgIGNvbnN0IGJvYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYm9hcmRzLmNsYXNzTGlzdC5hZGQoJ2JvYXJkcycpXG5cbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRyYXdCb2FyZCgpXG4gICAgcGxheWVyQm9hcmQuY2xhc3NMaXN0LmFkZCgncGxheWVyLWJvYXJkJylcblxuICAgIGNvbnN0IGFpQm9hcmQgPSBkcmF3Qm9hcmQoKVxuICAgIGFpQm9hcmQuY2xhc3NMaXN0LmFkZCgnYWktYm9hcmQnKVxuXG4gICAgXG4gICAgXG5cbiAgICBjb25zdCBmbGVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgZmxlZXRIb3Jpem9udGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBmbGVldFZlcnRpY2FsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmb3IobGV0IGkgPSAwIDsgaTw2OyBpKyspe1xuICAgICAgICBmbGVldEhvcml6b250YWwuYXBwZW5kQ2hpbGQoZHJhd1NoaXAoaSkpXG4gICAgfVxuICAgIGZsZWV0LmNsYXNzTGlzdC5hZGQoJ2ZsZWV0JylcbiAgICBmbGVldEhvcml6b250YWwuY2xhc3NMaXN0LmFkZCgnZmxlZXQtaG9yaXpvbnRhbCcpXG4gICAgZmxlZXRWZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKCdmbGVldC12ZXJ0aWNhbCcpXG4gICAgZmxlZXQuYXBwZW5kQ2hpbGQoZmxlZXRIb3Jpem9udGFsKVxuICAgIGZsZWV0LmFwcGVuZENoaWxkKGZsZWV0VmVydGljYWwpXG4gICAgXG4gICAgYm9hcmRzLmFwcGVuZENoaWxkKHBsYXllckJvYXJkKVxuICAgIGJvYXJkcy5hcHBlbmRDaGlsZChhaUJvYXJkKVxuICAgIGdhbWVBcmVhLmFwcGVuZENoaWxkKGZsZWV0KVxuICAgIFxuICAgIGdhbWVBcmVhLmFwcGVuZENoaWxkKGJvYXJkcylcbiAgICBcbiAgICBcbiAgICByZXR1cm4gZ2FtZUFyZWFcblxufVxuXG5cbmZ1bmN0aW9uIGRyYXdCb2FyZCgpe1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBib2FyZC5jbGFzc0xpc3QuYWRkKCdib2FyZCcpXG5cbiAgICBmb3IobGV0IGk9MDtpPDEwO2krKyl7XG4gICAgICAgIGZvcihsZXQgaiA9IDA7ajwxMDtqKyspe1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKVxuICAgICAgICAgICAgY2VsbC5kYXRhc2V0LmlkID0gYCR7an0tJHtpfWBcbiAgICAgICAgICAgIGlmKGo9PT0wKSBjZWxsLmRhdGFzZXQuZGlzcGxheXggPSBgJHtpKzF9YFxuICAgICAgICAgICAgaWYoaT09PTApIGNlbGwuZGF0YXNldC5kaXNwbGF5eSA9IGAke2orMX1gXG4gICAgICAgICAgICBjZWxsLmRhdGFzZXQudmFjYW50ID0gMVxuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoY2VsbClcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICByZXR1cm4gYm9hcmRcbn0iLCJmdW5jdGlvbiBtYWtlU2hpcHNEcmFnZ2luZygpe1xuICAgIGNvbnN0IGRyYWdnYWJsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJhZ2dhYmxlJylcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItYm9hcmQnKVxuICAgIGNvbnN0IGZsZWV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZmxlZXQnKVxuICAgIGNvbnN0IGNlbGxzID0gYm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKVxuXG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKGRyYWdnYWJsZSA9PiB7XG4gICAgICAgIGRyYWdnYWJsZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLChlKT0+eyBcbiAgICAgICAgICAgIGRyYWdnYWJsZS5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpXG4gICAgICAgIH0pXG4gICAgICAgIGRyYWdnYWJsZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywoKT0+eyBcbiAgICAgICAgICAgIGRyYWdnYWJsZS5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpXG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIGNlbGxzLmZvckVhY2goY2VsbD0+e1xuICAgICAgICAvL2hvdmVyIGVmZmVjdFxuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywoZSk9PntcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsLWRyb3AtaG92ZXInKVxuICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLChlKT0+e1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdjZWxsLWRyb3AtaG92ZXInKVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywoKT0+e1xuICAgICAgICAgICAgY29uc3QgZHJhZ2dpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJhZ2dpbmcnKVxuICAgICAgICAgICAgY29uc29sZS5sb2coZHJhZ2dpbmcpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKGNoZWNrUG9zaXRpb25Jc1ZhbGlkKGNvbnZlcnRJZFRvWFkoY2VsbC5kYXRhc2V0LmlkKSxOdW1iZXIoZHJhZ2dpbmcuZGF0YXNldC5sZW5ndGgpLGRyYWdnaW5nLmRhdGFzZXQuZGlyZWN0aW9uKSl7XG4gICAgICAgICAgICAgICAgcGxhY2VTaGlwKGNvbnZlcnRJZFRvWFkoY2VsbC5kYXRhc2V0LmlkKSxOdW1iZXIoZHJhZ2dpbmcuZGF0YXNldC5sZW5ndGgpLGRyYWdnaW5nLmRhdGFzZXQuZGlyZWN0aW9uKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdjZWxsLWRyb3AtaG92ZXInKVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9KVxuXG59XG5cblxuXG5mdW5jdGlvbiBwbGFjZVNoaXAocG9zLGxlbmd0aCxkaXJlY3Rpb24pe1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ib2FyZCcpXG4gICAgY29uc3QgZmxlZXRIb3Jpb250YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmxlZXQtaG9yaXpvbnRhbCcpXG4gICAgY29uc3QgZmxlZXRWZXJ0aWNhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbGVldC12ZXJ0aWNhbCcpXG4gICAgbGV0IHN0YXJ0aW5nQ2VsbCA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtwb3NbMF19LSR7cG9zWzFdfVwiXWApXG4gICAgXG4gICAgaWYoZGlyZWN0aW9uPT09J2gnKXtcbiAgICAgICAgZm9yKGxldCBpID0gMTtpPD1sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXJ0aW5nQ2VsbClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGksJy8nLGxlbmd0aClcbiAgICAgICAgICAgIHN0YXJ0aW5nQ2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmxhY2snXG4gICAgICAgICAgICBzdGFydGluZ0NlbGwuZGF0YXNldC52YWNhbnQgPSBcIjBcIlxuICAgICAgICAgICAgXG4gICAgXG4gICAgXG4gICAgICAgICAgICBzdGFydGluZ0NlbGwgPSBib2FyZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7cG9zWzBdK2l9LSR7cG9zWzFdfVwiXWApXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGxhY2VkU2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcmFnZ2luZycpXG4gICAgICAgIGZsZWV0SG9yaW9udGFsLnJlbW92ZUNoaWxkKHBsYWNlZFNoaXApXG4gICAgfVxuICAgIGVsc2UgaWYoZGlyZWN0aW9uPT09J3YnKXtcbiAgICAgICAgZm9yKGxldCBpID0gMTtpPD1sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIHN0YXJ0aW5nQ2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmxhY2snXG4gICAgICAgICAgICBzdGFydGluZ0NlbGwuZGF0YXNldC52YWNhbnQgPSBcIjBcIlxuICAgICAgICAgICAgc3RhcnRpbmdDZWxsID0gYm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke3Bvc1swXX0tJHtwb3NbMV0raX1cIl1gKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBsYWNlZFNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJhZ2dpbmcnKVxuICAgICAgICBmbGVldFZlcnRpY2FsLnJlbW92ZUNoaWxkKHBsYWNlZFNoaXApXG4gICAgfVxuICAgIFxuICAgIFxuICAgIFxufVxuZnVuY3Rpb24gY29udmVydElkVG9YWShzdHIpe1xuICAgIHJldHVybiBbTnVtYmVyKHN0clswXSksTnVtYmVyKHN0clsyXSldXG59XG5cbi8vYXJyYXlzIG9mIGFkamFjZW50IGNlbGxzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGNvbnN0IGhvcml6b250YWxGcm9tRXZlcnkgPSBbWzAsLTFdLFswLDFdLFswLDBdXVxuICAgIGNvbnN0IGhvcml6b250YWxMZWZ0RWRnZSA9IFtbLTEsLTFdLFstMSwwXSxbLTEsMV1dXG4gICAgY29uc3QgaG9yaXpvbnRhbFJpZ2h0RWRnZSA9IFtbMSwtMV0sWzEsMF0sWzEsMV1dXG5cbiAgICBjb25zdCB2ZXJ0aWNhbEZyb21FdmVyeSA9IFtbLTEsMF0sWzEsMF0sWzAsMF1dXG4gICAgY29uc3QgdmVydGljYWxUb3BFZGdlID0gW1stMSwtMV0sWzAsLTFdLFsxLC0xXV1cbiAgICBjb25zdCB2ZXJ0aWNhbEJvdHRvbUVkZ2UgPSBbWy0xLDFdLFswLDFdLFsxLDFdXVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGNoZWNrVmFjYW5jeShwb3MsbGVuZ3RoLGRpcmVjdGlvbil7XG4gICAgbGV0IGxlZ2FsUG9zaXRpb25pbmcgPSB0cnVlXG4gICAgXG5cbiAgICBjb25zdCBzdGFydGluZ0NlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7cG9zWzBdfS0ke3Bvc1sxXX1cIl1gKVxuXG4gICAgaWYoZGlyZWN0aW9uPT09J2gnKXtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8bGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYoaSA9PT0gMCAmJiBwb3NbMF0hPT0wKXtcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsTGVmdEVkZ2UuZm9yRWFjaCh2PT57XG4gICAgICAgICAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke3Bvc1swXStpK3ZbMF19LSR7cG9zWzFdK3ZbMV19XCJdYClcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHQuZGF0YXNldC52YWNhbnQ9PT1cIjBcIikgbGVnYWxQb3NpdGlvbmluZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1jYXRjaChlKXt9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGkgPT09IGxlbmd0aC0xKXtcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsUmlnaHRFZGdlLmZvckVhY2godj0+e1xuICAgICAgICAgICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtwb3NbMF0raSt2WzBdfS0ke3Bvc1sxXSt2WzFdfVwiXWApXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0LmRhdGFzZXQudmFjYW50PT09XCIwXCIpIGxlZ2FsUG9zaXRpb25pbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9Y2F0Y2goZSl7fVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBob3Jpem9udGFsRnJvbUV2ZXJ5LmZvckVhY2godj0+e1xuICAgICAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7cG9zWzBdK2krdlswXX0tJHtwb3NbMV0rdlsxXX1cIl1gKVxuICAgICAgICAgICAgICAgICAgICBpZih0LmRhdGFzZXQudmFjYW50PT09XCIwXCIpIGxlZ2FsUG9zaXRpb25pbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgIH1jYXRjaChlKXt9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYoZGlyZWN0aW9uPT09J3YnKXtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8bGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7cG9zWzBdfS0ke3Bvc1sxXSsxfVwiXWApXG4gICAgICAgICAgICBpZihpID09PSAwICYmIHBvc1sxXSE9PTApe1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsVG9wRWRnZS5mb3JFYWNoKHY9PntcbiAgICAgICAgICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7cG9zWzBdK3ZbMF19LSR7cG9zWzFdK2krdlsxXX1cIl1gKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodC5kYXRhc2V0LnZhY2FudD09PVwiMFwiKSBsZWdhbFBvc2l0aW9uaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfWNhdGNoKGUpe31cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoaSA9PT0gbGVuZ3RoLTEpe1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsQm90dG9tRWRnZS5mb3JFYWNoKHY9PntcbiAgICAgICAgICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7cG9zWzBdK3ZbMF19LSR7cG9zWzFdK2krdlsxXX1cIl1gKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodC5kYXRhc2V0LnZhY2FudD09PVwiMFwiKSBsZWdhbFBvc2l0aW9uaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfWNhdGNoKGUpe31cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmVydGljYWxGcm9tRXZlcnkuZm9yRWFjaCh2PT57XG4gICAgICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgICAgICBsZXQgdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtwb3NbMF0rdlswXX0tJHtwb3NbMV0raSt2WzFdfVwiXWApXG4gICAgICAgICAgICAgICAgICAgIGlmKHQuZGF0YXNldC52YWNhbnQ9PT1cIjBcIikgbGVnYWxQb3NpdGlvbmluZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgfWNhdGNoKGUpe31cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGVnYWxQb3NpdGlvbmluZ1xufVxuZnVuY3Rpb24gY2hlY2tQb3NpdGlvbklzVmFsaWQocG9zLGxlbmd0aCxkaXJlY3Rpb24pe1xuICAgaWYoY2hlY2tWYWNhbmN5KHBvcyxsZW5ndGgsZGlyZWN0aW9uKSl7XG4gICAgaWYoZGlyZWN0aW9uID09PSAnaCcpe1xuICAgICAgICBpZigocG9zWzBdK2xlbmd0aC0xKTw9OSAmJiAocG9zWzBdK2xlbmd0aC0xKT49MCkgcmV0dXJuIHRydWVcbiAgICAgICAgZWxzZSByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgZWxzZSBpZihkaXJlY3Rpb24gPT09ICd2Jyl7XG4gICAgICAgIGlmKHBvc1sxXStsZW5ndGgtMTw9OSAmJiBwb3NbMV0rbGVuZ3RoLTE+PTApIHJldHVybiB0cnVlXG4gICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgfWVsc2UgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50c0xpc3RlbmVycygpe1xuICAgIGNvbnN0IHNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKVxuXG4gICAgY29uc3QgZmxlZXRIb3Jpem9udGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZsZWV0LWhvcml6b250YWwnKVxuICAgIGNvbnN0IGZsZWV0VmVydGljYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmxlZXQtdmVydGljYWwnKVxuICAgIHNoaXBzLmZvckVhY2goc2hpcD0+e1xuICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBcbiAgICAgICAgICAgIGlmKHNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXZlcnRpY2FsJykpe1xuICAgICAgICAgICAgICAgIHNoaXAuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcC12ZXJ0aWNhbCcpXG4gICAgICAgICAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKCdzaGlwLWhvcml6b250YWwnKVxuICAgICAgICAgICAgICAgIHNoaXAuZGF0YXNldC5kaXJlY3Rpb24gPSAnaCdcbiAgICAgICAgICAgICAgICBmbGVldEhvcml6b250YWwuYXBwZW5kQ2hpbGQoc2hpcClcbiAgICAgICAgICAgICAgICBzaGlwLnN0eWxlLmhlaWdodCA9ICczNXB4J1xuICAgICAgICAgICAgICAgIHNoaXAuc3R5bGUud2lkdGggPSBgJHtzaGlwLmRhdGFzZXQubGVuZ3RoICogMzV9cHhgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKHNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLWhvcml6b250YWwnKSl7XG4gICAgICAgICAgICAgICAgc2hpcC5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwLWhvcml6b250YWwnKVxuICAgICAgICAgICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZCgnc2hpcC12ZXJ0aWNhbCcpXG4gICAgICAgICAgICAgICAgc2hpcC5kYXRhc2V0LmRpcmVjdGlvbiA9ICd2J1xuICAgICAgICAgICAgICAgIGZsZWV0VmVydGljYWwuYXBwZW5kQ2hpbGQoc2hpcClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzaGlwLmRhdGFzZXQubGVuZ3RoKVxuICAgICAgICAgICAgICAgIHNoaXAuc3R5bGUuaGVpZ2h0ID0gYCR7c2hpcC5kYXRhc2V0Lmxlbmd0aCAqIDM1fXB4YFxuICAgICAgICAgICAgICAgIHNoaXAuc3R5bGUud2lkdGggPSAnMzVweCdcblxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICB9KVxuICAgIH0pXG4gICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwbHlFZmZlY3RzKCl7XG4gICAgbWFrZVNoaXBzRHJhZ2dpbmcoKVxuICAgIGFkZEV2ZW50c0xpc3RlbmVycygpXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnXG5pbXBvcnQgeyBkcmF3R2FtZSB9IGZyb20gJy4vZHJhd2luZydcbmltcG9ydCBhcHBseUVmZmVjdHMgZnJvbSAnLi9zZXR0aW5ncydcblxuY29uc3QgQ09OVEFJTkVSID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpXG5cbkNPTlRBSU5FUi5hcHBlbmRDaGlsZChkcmF3R2FtZSgpKVxuYXBwbHlFZmZlY3RzKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=