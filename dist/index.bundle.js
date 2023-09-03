/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto-Regular.ttf */ "./src/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto-Bold.ttf */ "./src/Roboto-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --light-blue: rgb(111, 166, 222);
  --dark-blue: rgb(56, 96, 137);
  --content-background: rgb(216, 216, 135);
  --border-color: rgb(143, 143, 95);
}

@font-face {
  font-family: 'Roboto';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('ttf'), 
  url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('ttf');
  font-weight: 400, 700;
  font-style: normal;
}

body {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  font-family: 'Roboto';
}

#nav-bar {
  width: 100%;
  height: 50px;
  background-color: var(--light-blue);
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;
  border-radius: 0 0 20px 20px;
  border-top: 10px solid var(--dark-blue);
}

button {
  border: none;
  background-color: var(--light-blue);
  font-size: 25px;
  cursor: pointer;
  font-family: 'Roboto';
  color: white;
  font-weight: 700;
  transition: 0.5s;
  padding: 0 20px;
}

button:hover {
  background-color: white;
  color: var(--light-blue);
}

#content {
  max-width: 700px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#homepage-container, #menu-container, #contact-page-container {
  border-radius: 20px;
  border: 1px solid var(--border-color);
  width: 100%;
  background-color: var(--content-background);
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  width: 100%;
}

h1 {
  font-size: 40px;
  padding: 0 15px;
}

h2 {
  margin-top: 0;
  border-left: 7px solid var(--light-blue);
  padding: 0 15px;
}

h3, #contact-info {
  padding: 20px;
  background-color: var(--dark-blue);
  border-radius: 5px;
  color: white;
}

#restaurant-info {
  width: 80%;
  color: var(--dark-blue);
  padding: 0 0 20px 0;
  font-size: 20px;
  line-height: 30px;
}

#disclaimer-box {
  padding: 20px;
  border: 2px solid var(--dark-blue);
  color: var(--dark-blue);
  font-size: 10px;
  font-weight: 700;
  margin: 15px 0;
  border-radius: 10px;
  width: 60%
}

.menu-item {
  width: 70%;
  border: 2px solid var(--dark-blue);
  border-radius: 20px;
  padding: 20px;
  margin: 15px 0 25px 0;
  display: flex;
  box-shadow: -5px 5px 10px 1px gray;
}

.menu-item-container {
  padding-left: 20px;
  display: flex;
  flex-direction: column;
}

.menu-item-name {
  font-size: 20px;
  font-weight: 700;
  padding: 0 0 5px 5px;
  border-left: 7px solid var(--light-blue);
  border-bottom: 3px solid var(--light-blue);
}

.menu-item-price {
  margin-top: 5px;
  margin-bottom: 15px;
  font-size: 20px;
  font-style: italic;
}

.menu-image {
  width: 150px;
  min-width: 150px;
  height: 150px;
  object-fit: cover;
}

#smoothie-bowl-choice {
  font-weight: bold;
}

ul {
  padding-inline-start: 20px;
}

#contact-info {
  width: 80%;
  max-width: 500px;
}

#contact-phone, #contact-email, #contact-address {
  font-size: 23px;
  font-weight: bold;
}

@media (max-width: 600px) {
  button {
    font-size: 15px;
    padding: 0 10px;
  }

  h3 {
    width: 60%;
    font-size: 12px;
    padding: 10px;
  }

  #nav-bar {
    height: 30px;
  }

  .menu-item {
    flex-direction: column;
    align-items: center;
  }

  .menu-image {
    width: 80%;
    height: 223px;
  }

  .menu-item-container {
    padding-left: 0px;
    padding-top: 10px;
  }

  #contact-phone, #contact-email, #contact-address {
    font-size: 17px;
    font-weight: bold;
  }
}

@media (max-width: 500px) {
  #content {
    width: 100%;
  }

  #nav-bar, #homepage-container, #menu-container, #contact-page-container {
    border-radius: 0;
    border-right: none;
    border-left: none;
  }

  #nav-bar {
    border-top: none;
  }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,gCAAgC;EAChC,6BAA6B;EAC7B,wCAAwC;EACxC,iCAAiC;AACnC;;AAEA;EACE,qBAAqB;EACrB;uDACsC;EACtC,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mCAAmC;EACnC,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,4BAA4B;EAC5B,uCAAuC;AACzC;;AAEA;EACE,YAAY;EACZ,mCAAmC;EACnC,eAAe;EACf,eAAe;EACf,qBAAqB;EACrB,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,wBAAwB;AAC1B;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,qCAAqC;EACrC,WAAW;EACX,2CAA2C;EAC3C,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,wCAAwC;EACxC,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,UAAU;EACV,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,uBAAuB;EACvB,eAAe;EACf,gBAAgB;EAChB,cAAc;EACd,mBAAmB;EACnB;AACF;;AAEA;EACE,UAAU;EACV,kCAAkC;EAClC,mBAAmB;EACnB,aAAa;EACb,qBAAqB;EACrB,aAAa;EACb,kCAAkC;AACpC;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,oBAAoB;EACpB,wCAAwC;EACxC,0CAA0C;AAC5C;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE;IACE,eAAe;IACf,eAAe;EACjB;;EAEA;IACE,UAAU;IACV,eAAe;IACf,aAAa;EACf;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,sBAAsB;IACtB,mBAAmB;EACrB;;EAEA;IACE,UAAU;IACV,aAAa;EACf;;EAEA;IACE,iBAAiB;IACjB,iBAAiB;EACnB;;EAEA;IACE,eAAe;IACf,iBAAiB;EACnB;AACF;;AAEA;EACE;IACE,WAAW;EACb;;EAEA;IACE,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;EACnB;;EAEA;IACE,gBAAgB;EAClB;AACF","sourcesContent":[":root {\r\n  --light-blue: rgb(111, 166, 222);\r\n  --dark-blue: rgb(56, 96, 137);\r\n  --content-background: rgb(216, 216, 135);\r\n  --border-color: rgb(143, 143, 95);\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Roboto';\r\n  src: url('./Roboto-Regular.ttf') format('ttf'), \r\n  url('./Roboto-Bold.ttf') format('ttf');\r\n  font-weight: 400, 700;\r\n  font-style: normal;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin: 0;\r\n  font-family: 'Roboto';\r\n}\r\n\r\n#nav-bar {\r\n  width: 100%;\r\n  height: 50px;\r\n  background-color: var(--light-blue);\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  margin-bottom: 20px;\r\n  border-radius: 0 0 20px 20px;\r\n  border-top: 10px solid var(--dark-blue);\r\n}\r\n\r\nbutton {\r\n  border: none;\r\n  background-color: var(--light-blue);\r\n  font-size: 25px;\r\n  cursor: pointer;\r\n  font-family: 'Roboto';\r\n  color: white;\r\n  font-weight: 700;\r\n  transition: 0.5s;\r\n  padding: 0 20px;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: white;\r\n  color: var(--light-blue);\r\n}\r\n\r\n#content {\r\n  max-width: 700px;\r\n  width: 80%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n#homepage-container, #menu-container, #contact-page-container {\r\n  border-radius: 20px;\r\n  border: 1px solid var(--border-color);\r\n  width: 100%;\r\n  background-color: var(--content-background);\r\n  height: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n}\r\n\r\nh1 {\r\n  font-size: 40px;\r\n  padding: 0 15px;\r\n}\r\n\r\nh2 {\r\n  margin-top: 0;\r\n  border-left: 7px solid var(--light-blue);\r\n  padding: 0 15px;\r\n}\r\n\r\nh3, #contact-info {\r\n  padding: 20px;\r\n  background-color: var(--dark-blue);\r\n  border-radius: 5px;\r\n  color: white;\r\n}\r\n\r\n#restaurant-info {\r\n  width: 80%;\r\n  color: var(--dark-blue);\r\n  padding: 0 0 20px 0;\r\n  font-size: 20px;\r\n  line-height: 30px;\r\n}\r\n\r\n#disclaimer-box {\r\n  padding: 20px;\r\n  border: 2px solid var(--dark-blue);\r\n  color: var(--dark-blue);\r\n  font-size: 10px;\r\n  font-weight: 700;\r\n  margin: 15px 0;\r\n  border-radius: 10px;\r\n  width: 60%\r\n}\r\n\r\n.menu-item {\r\n  width: 70%;\r\n  border: 2px solid var(--dark-blue);\r\n  border-radius: 20px;\r\n  padding: 20px;\r\n  margin: 15px 0 25px 0;\r\n  display: flex;\r\n  box-shadow: -5px 5px 10px 1px gray;\r\n}\r\n\r\n.menu-item-container {\r\n  padding-left: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.menu-item-name {\r\n  font-size: 20px;\r\n  font-weight: 700;\r\n  padding: 0 0 5px 5px;\r\n  border-left: 7px solid var(--light-blue);\r\n  border-bottom: 3px solid var(--light-blue);\r\n}\r\n\r\n.menu-item-price {\r\n  margin-top: 5px;\r\n  margin-bottom: 15px;\r\n  font-size: 20px;\r\n  font-style: italic;\r\n}\r\n\r\n.menu-image {\r\n  width: 150px;\r\n  min-width: 150px;\r\n  height: 150px;\r\n  object-fit: cover;\r\n}\r\n\r\n#smoothie-bowl-choice {\r\n  font-weight: bold;\r\n}\r\n\r\nul {\r\n  padding-inline-start: 20px;\r\n}\r\n\r\n#contact-info {\r\n  width: 80%;\r\n  max-width: 500px;\r\n}\r\n\r\n#contact-phone, #contact-email, #contact-address {\r\n  font-size: 23px;\r\n  font-weight: bold;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  button {\r\n    font-size: 15px;\r\n    padding: 0 10px;\r\n  }\r\n\r\n  h3 {\r\n    width: 60%;\r\n    font-size: 12px;\r\n    padding: 10px;\r\n  }\r\n\r\n  #nav-bar {\r\n    height: 30px;\r\n  }\r\n\r\n  .menu-item {\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .menu-image {\r\n    width: 80%;\r\n    height: 223px;\r\n  }\r\n\r\n  .menu-item-container {\r\n    padding-left: 0px;\r\n    padding-top: 10px;\r\n  }\r\n\r\n  #contact-phone, #contact-email, #contact-address {\r\n    font-size: 17px;\r\n    font-weight: bold;\r\n  }\r\n}\r\n\r\n@media (max-width: 500px) {\r\n  #content {\r\n    width: 100%;\r\n  }\r\n\r\n  #nav-bar, #homepage-container, #menu-container, #contact-page-container {\r\n    border-radius: 0;\r\n    border-right: none;\r\n    border-left: none;\r\n  }\r\n\r\n  #nav-bar {\r\n    border-top: none;\r\n  }\r\n}"],"sourceRoot":""}]);
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayContactPage: () => (/* binding */ displayContactPage)
/* harmony export */ });
function displayContactPage () {
  const body = document.querySelector("body");
  const content = document.querySelector("#content");

  body.appendChild(content);

  const contactPageContainer = document.createElement("div");
  contactPageContainer.setAttribute("id", "contact-page-container");

  content.appendChild(contactPageContainer);

  const restaurantName = document.createElement("h1");
  restaurantName.textContent = "SUNRISE CAFE";

  contactPageContainer.appendChild(restaurantName);

  const pageSelected = document.createElement("h2");
  pageSelected.textContent = "CONTACT";

  contactPageContainer.appendChild(pageSelected);

  const contactInfo = document.createElement("p");
  contactInfo.setAttribute("id", "contact-info");
  contactInfo.textContent = "If you would like to get in touch with us, please do so at the following:";

  contactPageContainer.appendChild(contactInfo);
  
  const contactPhone = document.createElement("p");
  contactPhone.setAttribute("id", "contact-phone");
  contactPhone.textContent = "PHONE: 1-800-NOT-A-NUM";

  contactPageContainer.appendChild(contactPhone);

  const contactEmail = document.createElement("p");
  contactEmail.setAttribute("id", "contact-email");
  contactEmail.textContent = "EMAIL: realemail@notarealemail.com";

  contactPageContainer.appendChild(contactEmail);

  const contactAddress = document.createElement("p");
  contactAddress.setAttribute("id", "contact-address");
  contactAddress.textContent = "ADDRESS: 123 A Real Place, Authentic Town";

  contactPageContainer.appendChild(contactAddress);
};



/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayHomepage: () => (/* binding */ displayHomepage)
/* harmony export */ });
/* harmony import */ var _cafe_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cafe.jpg */ "./src/cafe.jpg");


function displayHomepage () {
  const body = document.querySelector("body");
  const content = document.querySelector("#content");

  body.appendChild(content);

  const homepageContainer = document.createElement("div");
  homepageContainer.setAttribute("id", "homepage-container");

  content.appendChild(homepageContainer);

  const restaurantName = document.createElement("h1");
  restaurantName.textContent = "SUNRISE CAFE";

  homepageContainer.appendChild(restaurantName);

  const pageSelected = document.createElement("h2");
  pageSelected.textContent = "HOME";

  homepageContainer.appendChild(pageSelected);

  const cafeImage = document.createElement("img");
  cafeImage.src = _cafe_jpg__WEBPACK_IMPORTED_MODULE_0__;

  homepageContainer.appendChild(cafeImage);

  const restaurantTagline = document.createElement("h3");
  restaurantTagline.textContent = "Enjoy breakfast with a view like no other!";

  homepageContainer.appendChild(restaurantTagline);

  const restaurantInfo = document.createElement("p");
  restaurantInfo.setAttribute("id", "restaurant-info");
  restaurantInfo.textContent = "The Sunrise Cafe is where you want to be if you crave breakfast and the sights of the city surrounding you. We offer a wide selection of plant-based breakfast options for you to choose from. Please see the menu above for more!";

  homepageContainer.appendChild(restaurantInfo);
};



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayMenu: () => (/* binding */ displayMenu)
/* harmony export */ });
/* harmony import */ var _tofu_scramble_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tofu-scramble.jpg */ "./src/tofu-scramble.jpg");
/* harmony import */ var _smoothie_bowl_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smoothie-bowl.jpg */ "./src/smoothie-bowl.jpg");
/* harmony import */ var _pancakes_waffles_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pancakes-waffles.jpg */ "./src/pancakes-waffles.jpg");




function displayMenu() {
  const body = document.querySelector("body");
  const content = document.querySelector("#content");
  body.appendChild(content);

  const menuContainer = document.createElement("div");
  menuContainer.setAttribute("id", "menu-container");
  content.appendChild(menuContainer);

  const restaurantName = document.createElement("h1");
  restaurantName.textContent = "SUNRISE CAFE";
  menuContainer.appendChild(restaurantName);

  const pageSelected = document.createElement("h2");
  pageSelected.textContent = "MENU";
  menuContainer.appendChild(pageSelected);

  const menuItemTofuScramble = document.createElement("div");
  menuItemTofuScramble.classList.add("menu-item");
  menuContainer.appendChild(menuItemTofuScramble);

  const tofuScrambleImage = document.createElement("img");
  tofuScrambleImage.classList.add("menu-image");
  tofuScrambleImage.src = _tofu_scramble_jpg__WEBPACK_IMPORTED_MODULE_0__;
  menuItemTofuScramble.appendChild(tofuScrambleImage);

  const tofuItemContainer = document.createElement("div");
  tofuItemContainer.classList.add("menu-item-container");
  menuItemTofuScramble.appendChild(tofuItemContainer);

  const tofuScrambleItemName = document.createElement("div");
  tofuScrambleItemName.classList.add("menu-item-name");
  tofuScrambleItemName.textContent = "TOFU SCRAMBLE";
  tofuItemContainer.appendChild(tofuScrambleItemName);

  const tofuScrambleItemPrice = document.createElement("div");
  tofuScrambleItemPrice.classList.add("menu-item-price");
  tofuScrambleItemPrice.textContent = "$9.99";
  tofuItemContainer.appendChild(tofuScrambleItemPrice);

  const tofuScrambleItemIngredients = document.createElement("div");
  tofuScrambleItemIngredients.classList.add("menu-item-ingredients");
  tofuScrambleItemIngredients.textContent = "INGREDIENTS: tofu, onion, red bell pepper, kale, spice blend.";
  tofuItemContainer.appendChild(tofuScrambleItemIngredients);

  const menuItemSmoothieBowl = document.createElement("div");
  menuItemSmoothieBowl.classList.add("menu-item");
  menuContainer.appendChild(menuItemSmoothieBowl);

  const smoothieBowlImage = document.createElement("img");
  smoothieBowlImage.classList.add("menu-image");
  smoothieBowlImage.src = _smoothie_bowl_jpg__WEBPACK_IMPORTED_MODULE_1__;
  menuItemSmoothieBowl.appendChild(smoothieBowlImage);

  const smoothieItemContainer = document.createElement("div");
  smoothieItemContainer.classList.add("menu-item-container");
  menuItemSmoothieBowl.appendChild(smoothieItemContainer);

  const smoothieBowlItemName = document.createElement("div");
  smoothieBowlItemName.classList.add("menu-item-name");
  smoothieBowlItemName.textContent = "SMOOTHIE BOWL";
  smoothieItemContainer.appendChild(smoothieBowlItemName);

  const smoothieBowlItemPrice = document.createElement("div");
  smoothieBowlItemPrice.classList.add("menu-item-price");
  smoothieBowlItemPrice.textContent = "$11.49";
  smoothieItemContainer.appendChild(smoothieBowlItemPrice);

  const smoothieBowlItemIngredients = document.createElement("div");
  smoothieBowlItemIngredients.setAttribute("id", "smoothie-bowl-choice");
  smoothieBowlItemIngredients.textContent = "CHOOSE FROM:";
  smoothieItemContainer.appendChild(smoothieBowlItemIngredients);

  const smoothieBowlTypeContainer = document.createElement("ul");
  smoothieBowlTypeContainer.setAttribute("id", "smoothie-bowl-type-container");
  smoothieItemContainer.appendChild(smoothieBowlTypeContainer);

  const smoothieBowlTypeBanana = document.createElement("li");
  smoothieBowlTypeBanana.classList.add("smoothie-bowl-type");
  smoothieBowlTypeBanana.textContent = "Pineapple, Banana, and Peach";
  smoothieBowlTypeContainer.appendChild(smoothieBowlTypeBanana);

  const smoothieBowlTypeRaspberry = document.createElement("li");
  smoothieBowlTypeRaspberry.classList.add("smoothie-bowl-type");
  smoothieBowlTypeRaspberry.textContent = "Almond Butter and Raspberry";
  smoothieBowlTypeContainer.appendChild(smoothieBowlTypeRaspberry);

  const smoothieBowlTypeBlueberry = document.createElement("li");
  smoothieBowlTypeBlueberry.classList.add("smoothie-bowl-type");
  smoothieBowlTypeBlueberry.textContent = "Blueberry, Spinach, and Pineapple";
  smoothieBowlTypeContainer.appendChild(smoothieBowlTypeBlueberry);

  const smoothieBowlTypeCoconut = document.createElement("li");
  smoothieBowlTypeCoconut.classList.add("smoothie-bowl-type");
  smoothieBowlTypeCoconut.textContent = "Coconut Açai";
  smoothieBowlTypeContainer.appendChild(smoothieBowlTypeCoconut);

  const menuItemPancakesWaffles = document.createElement("div");
  menuItemPancakesWaffles.classList.add("menu-item");
  menuContainer.appendChild(menuItemPancakesWaffles);

  const pancakesWafflesImage = document.createElement("img");
  pancakesWafflesImage.classList.add("menu-image");
  pancakesWafflesImage.src = _pancakes_waffles_jpg__WEBPACK_IMPORTED_MODULE_2__;
  menuItemPancakesWaffles.appendChild(pancakesWafflesImage);

  const pancakesItemContainer = document.createElement("div");
  pancakesItemContainer.classList.add("menu-item-container");
  menuItemPancakesWaffles.appendChild(pancakesItemContainer);

  const pancakesWafflesItemName = document.createElement("div");
  pancakesWafflesItemName.classList.add("menu-item-name");
  pancakesWafflesItemName.textContent = "PANCAKES AND WAFFLES";
  pancakesItemContainer.appendChild(pancakesWafflesItemName);

  const pancakesWafflesItemPrice = document.createElement("div");
  pancakesWafflesItemPrice.classList.add("menu-item-price");
  pancakesWafflesItemPrice.textContent = "$8.99";
  pancakesItemContainer.appendChild(pancakesWafflesItemPrice);

  const pancakesWafflesItemIngredients = document.createElement("div");
  pancakesWafflesItemIngredients.classList.add("menu-item-ingredients");
  pancakesWafflesItemIngredients.textContent = "Light and fluffy, made with gluten-free flour.";
  pancakesItemContainer.appendChild(pancakesWafflesItemIngredients);
};



/***/ }),

/***/ "./src/Roboto-Bold.ttf":
/*!*****************************!*\
  !*** ./src/Roboto-Bold.ttf ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f80816a5455d171f948d.ttf";

/***/ }),

/***/ "./src/Roboto-Regular.ttf":
/*!********************************!*\
  !*** ./src/Roboto-Regular.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

/***/ }),

/***/ "./src/cafe.jpg":
/*!**********************!*\
  !*** ./src/cafe.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "304c66d6b4cb09028305.jpg";

/***/ }),

/***/ "./src/pancakes-waffles.jpg":
/*!**********************************!*\
  !*** ./src/pancakes-waffles.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6b0cb307ac1281475d05.jpg";

/***/ }),

/***/ "./src/smoothie-bowl.jpg":
/*!*******************************!*\
  !*** ./src/smoothie-bowl.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "59093d5d5fc6decb446b.jpg";

/***/ }),

/***/ "./src/tofu-scramble.jpg":
/*!*******************************!*\
  !*** ./src/tofu-scramble.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "044de2aa29d79fdaff93.jpg";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.js */ "./src/homepage.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





const body = document.querySelector("body");

const content = document.createElement("div");
content.setAttribute("id", "content");

body.appendChild(content);

const navBar = document.createElement("div");
navBar.setAttribute("id", "nav-bar");

content.appendChild(navBar);

const homePageBtn = document.createElement("button");
homePageBtn.textContent = "HOME";

const menuBtn = document.createElement("button");
menuBtn.textContent = "MENU";

const contactBtn = document.createElement("button");
contactBtn.textContent = "CONTACT";

navBar.appendChild(homePageBtn);
navBar.appendChild(menuBtn);
navBar.appendChild(contactBtn);

homePageBtn.addEventListener("click", displayHomepageContainer);
menuBtn.addEventListener("click", displayMenuContainer);
contactBtn.addEventListener("click", displayContactPageContainer);

(0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__.displayHomepage)();

const disclaimerBox = document.createElement("div");
disclaimerBox.setAttribute("id", "disclaimer-box");
disclaimerBox.textContent = "DISCLAIMER: This it a project for theOdinProject. I do not own the pictures used here. They are taken from Google search.";

content.appendChild(disclaimerBox);

function displayHomepageContainer () {
  content.innerHTML = "";
  content.appendChild(navBar);
  (0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__.displayHomepage)();
  content.appendChild(disclaimerBox);
}

function displayMenuContainer () {
  content.innerHTML = "";
  content.appendChild(navBar);
  (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.displayMenu)();
  content.appendChild(disclaimerBox);
}

function displayContactPageContainer () {
  content.innerHTML = "";
  content.appendChild(navBar);
  (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.displayContactPage)();
  content.appendChild(disclaimerBox);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMscUhBQXVDO0FBQ25GLDRDQUE0QywrR0FBb0M7QUFDaEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRCxRQUFRLG1DQUFtQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxPQUFPLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdB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STtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDK0M7QUFDQTtBQUNNO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwrQ0FBWTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsK0NBQVk7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGtEQUFlO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaklBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FnRDtBQUNSO0FBQ1U7QUFDN0I7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkRBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxxREFBVztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0RBQWtCO0FBQ3BCO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL1JvYm90by1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcclxuICAtLWxpZ2h0LWJsdWU6IHJnYigxMTEsIDE2NiwgMjIyKTtcclxuICAtLWRhcmstYmx1ZTogcmdiKDU2LCA5NiwgMTM3KTtcclxuICAtLWNvbnRlbnQtYmFja2dyb3VuZDogcmdiKDIxNiwgMjE2LCAxMzUpO1xyXG4gIC0tYm9yZGVyLWNvbG9yOiByZ2IoMTQzLCAxNDMsIDk1KTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgndHRmJyksIFxyXG4gIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoJ3R0ZicpO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDAsIDcwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbn1cclxuXHJcbiNuYXYtYmFyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XHJcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XHJcbn1cclxuXHJcbiNjb250ZW50IHtcclxuICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNob21lcGFnZS1jb250YWluZXIsICNtZW51LWNvbnRhaW5lciwgI2NvbnRhY3QtcGFnZS1jb250YWluZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWJhY2tncm91bmQpO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaDEge1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBwYWRkaW5nOiAwIDE1cHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdmFyKC0tbGlnaHQtYmx1ZSk7XHJcbiAgcGFkZGluZzogMCAxNXB4O1xyXG59XHJcblxyXG5oMywgI2NvbnRhY3QtaW5mbyB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNyZXN0YXVyYW50LWluZm8ge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XHJcbiAgcGFkZGluZzogMCAwIDIwcHggMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbiNkaXNjbGFpbWVyLWJveCB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpO1xyXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbjogMTVweCAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgd2lkdGg6IDYwJVxyXG59XHJcblxyXG4ubWVudS1pdGVtIHtcclxuICB3aWR0aDogNzAlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbjogMTVweCAwIDI1cHggMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJveC1zaGFkb3c6IC01cHggNXB4IDEwcHggMXB4IGdyYXk7XHJcbn1cclxuXHJcbi5tZW51LWl0ZW0tY29udGFpbmVyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ubWVudS1pdGVtLW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHBhZGRpbmc6IDAgMCA1cHggNXB4O1xyXG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdmFyKC0tbGlnaHQtYmx1ZSk7XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWxpZ2h0LWJsdWUpO1xyXG59XHJcblxyXG4ubWVudS1pdGVtLXByaWNlIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4ubWVudS1pbWFnZSB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuI3Ntb290aGllLWJvd2wtY2hvaWNlIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxudWwge1xyXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAyMHB4O1xyXG59XHJcblxyXG4jY29udGFjdC1pbmZvIHtcclxuICB3aWR0aDogODAlO1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbn1cclxuXHJcbiNjb250YWN0LXBob25lLCAjY29udGFjdC1lbWFpbCwgI2NvbnRhY3QtYWRkcmVzcyB7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICBidXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gIH1cclxuXHJcbiAgaDMge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAjbmF2LWJhciB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgfVxyXG5cclxuICAubWVudS1pdGVtIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLm1lbnUtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogMjIzcHg7XHJcbiAgfVxyXG5cclxuICAubWVudS1pdGVtLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgI2NvbnRhY3QtcGhvbmUsICNjb250YWN0LWVtYWlsLCAjY29udGFjdC1hZGRyZXNzIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgI2NvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAjbmF2LWJhciwgI2hvbWVwYWdlLWNvbnRhaW5lciwgI21lbnUtY29udGFpbmVyLCAjY29udGFjdC1wYWdlLWNvbnRhaW5lciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAjbmF2LWJhciB7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gIH1cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0Isd0NBQXdDO0VBQ3hDLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQjt1REFDc0M7RUFDdEMscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1DQUFtQztFQUNuQyxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1DQUFtQztFQUNuQyxlQUFlO0VBQ2YsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIscUNBQXFDO0VBQ3JDLFdBQVc7RUFDWCwyQ0FBMkM7RUFDM0MsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0NBQXdDO0VBQ3hDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHdDQUF3QztFQUN4QywwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsYUFBYTtFQUNmOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLWxpZ2h0LWJsdWU6IHJnYigxMTEsIDE2NiwgMjIyKTtcXHJcXG4gIC0tZGFyay1ibHVlOiByZ2IoNTYsIDk2LCAxMzcpO1xcclxcbiAgLS1jb250ZW50LWJhY2tncm91bmQ6IHJnYigyMTYsIDIxNiwgMTM1KTtcXHJcXG4gIC0tYm9yZGVyLWNvbG9yOiByZ2IoMTQzLCAxNDMsIDk1KTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90byc7XFxyXFxuICBzcmM6IHVybCgnLi9Sb2JvdG8tUmVndWxhci50dGYnKSBmb3JtYXQoJ3R0ZicpLCBcXHJcXG4gIHVybCgnLi9Sb2JvdG8tQm9sZC50dGYnKSBmb3JtYXQoJ3R0ZicpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMCwgNzAwO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXHJcXG59XFxyXFxuXFxyXFxuI25hdi1iYXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDAgMjBweCAyMHB4O1xcclxcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90byc7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgdHJhbnNpdGlvbjogMC41cztcXHJcXG4gIHBhZGRpbmc6IDAgMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWVwYWdlLWNvbnRhaW5lciwgI21lbnUtY29udGFpbmVyLCAjY29udGFjdC1wYWdlLWNvbnRhaW5lciB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1iYWNrZ3JvdW5kKTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LXNpemU6IDQwcHg7XFxyXFxuICBwYWRkaW5nOiAwIDE1cHg7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxuICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHZhcigtLWxpZ2h0LWJsdWUpO1xcclxcbiAgcGFkZGluZzogMCAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5oMywgI2NvbnRhY3QtaW5mbyB7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI3Jlc3RhdXJhbnQtaW5mbyB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxyXFxuICBwYWRkaW5nOiAwIDAgMjBweCAwO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbiNkaXNjbGFpbWVyLWJveCB7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZGFyay1ibHVlKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcclxcbiAgZm9udC1zaXplOiAxMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIG1hcmdpbjogMTVweCAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHdpZHRoOiA2MCVcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbSB7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZGFyay1ibHVlKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgbWFyZ2luOiAxNXB4IDAgMjVweCAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJveC1zaGFkb3c6IC01cHggNXB4IDEwcHggMXB4IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0tY29udGFpbmVyIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtLW5hbWUge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIHBhZGRpbmc6IDAgMCA1cHggNXB4O1xcclxcbiAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB2YXIoLS1saWdodC1ibHVlKTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1saWdodC1ibHVlKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbS1wcmljZSB7XFxyXFxuICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pbWFnZSB7XFxyXFxuICB3aWR0aDogMTUwcHg7XFxyXFxuICBtaW4td2lkdGg6IDE1MHB4O1xcclxcbiAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc21vb3RoaWUtYm93bC1jaG9pY2Uge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFjdC1pbmZvIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFjdC1waG9uZSwgI2NvbnRhY3QtZW1haWwsICNjb250YWN0LWFkZHJlc3Mge1xcclxcbiAgZm9udC1zaXplOiAyM3B4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgYnV0dG9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoMyB7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNuYXYtYmFyIHtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lbnUtaXRlbSB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVudS1pbWFnZSB7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGhlaWdodDogMjIzcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVudS1pdGVtLWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNjb250YWN0LXBob25lLCAjY29udGFjdC1lbWFpbCwgI2NvbnRhY3QtYWRkcmVzcyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcclxcbiAgI2NvbnRlbnQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNuYXYtYmFyLCAjaG9tZXBhZ2UtY29udGFpbmVyLCAjbWVudS1jb250YWluZXIsICNjb250YWN0LXBhZ2UtY29udGFpbmVyIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcclxcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNuYXYtYmFyIHtcXHJcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBkaXNwbGF5Q29udGFjdFBhZ2UgKCkge1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5cclxuICBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG5cclxuICBjb25zdCBjb250YWN0UGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29udGFjdFBhZ2VDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0LXBhZ2UtY29udGFpbmVyXCIpO1xyXG5cclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RQYWdlQ29udGFpbmVyKTtcclxuXHJcbiAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgcmVzdGF1cmFudE5hbWUudGV4dENvbnRlbnQgPSBcIlNVTlJJU0UgQ0FGRVwiO1xyXG5cclxuICBjb250YWN0UGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSk7XHJcblxyXG4gIGNvbnN0IHBhZ2VTZWxlY3RlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICBwYWdlU2VsZWN0ZWQudGV4dENvbnRlbnQgPSBcIkNPTlRBQ1RcIjtcclxuXHJcbiAgY29udGFjdFBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZVNlbGVjdGVkKTtcclxuXHJcbiAgY29uc3QgY29udGFjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb250YWN0SW5mby5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhY3QtaW5mb1wiKTtcclxuICBjb250YWN0SW5mby50ZXh0Q29udGVudCA9IFwiSWYgeW91IHdvdWxkIGxpa2UgdG8gZ2V0IGluIHRvdWNoIHdpdGggdXMsIHBsZWFzZSBkbyBzbyBhdCB0aGUgZm9sbG93aW5nOlwiO1xyXG5cclxuICBjb250YWN0UGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0SW5mbyk7XHJcbiAgXHJcbiAgY29uc3QgY29udGFjdFBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY29udGFjdFBob25lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdC1waG9uZVwiKTtcclxuICBjb250YWN0UGhvbmUudGV4dENvbnRlbnQgPSBcIlBIT05FOiAxLTgwMC1OT1QtQS1OVU1cIjtcclxuXHJcbiAgY29udGFjdFBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdFBob25lKTtcclxuXHJcbiAgY29uc3QgY29udGFjdEVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY29udGFjdEVtYWlsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdC1lbWFpbFwiKTtcclxuICBjb250YWN0RW1haWwudGV4dENvbnRlbnQgPSBcIkVNQUlMOiByZWFsZW1haWxAbm90YXJlYWxlbWFpbC5jb21cIjtcclxuXHJcbiAgY29udGFjdFBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdEVtYWlsKTtcclxuXHJcbiAgY29uc3QgY29udGFjdEFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb250YWN0QWRkcmVzcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhY3QtYWRkcmVzc1wiKTtcclxuICBjb250YWN0QWRkcmVzcy50ZXh0Q29udGVudCA9IFwiQUREUkVTUzogMTIzIEEgUmVhbCBQbGFjZSwgQXV0aGVudGljIFRvd25cIjtcclxuXHJcbiAgY29udGFjdFBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdEFkZHJlc3MpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgZGlzcGxheUNvbnRhY3RQYWdlIH07IiwiaW1wb3J0IENhZmUgZnJvbSAnLi9jYWZlLmpwZyc7XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5SG9tZXBhZ2UgKCkge1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5cclxuICBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG5cclxuICBjb25zdCBob21lcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaG9tZXBhZ2VDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lcGFnZS1jb250YWluZXJcIik7XHJcblxyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZXBhZ2VDb250YWluZXIpO1xyXG5cclxuICBjb25zdCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICByZXN0YXVyYW50TmFtZS50ZXh0Q29udGVudCA9IFwiU1VOUklTRSBDQUZFXCI7XHJcblxyXG4gIGhvbWVwYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnROYW1lKTtcclxuXHJcbiAgY29uc3QgcGFnZVNlbGVjdGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIHBhZ2VTZWxlY3RlZC50ZXh0Q29udGVudCA9IFwiSE9NRVwiO1xyXG5cclxuICBob21lcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYWdlU2VsZWN0ZWQpO1xyXG5cclxuICBjb25zdCBjYWZlSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGNhZmVJbWFnZS5zcmMgPSBDYWZlO1xyXG5cclxuICBob21lcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYWZlSW1hZ2UpO1xyXG5cclxuICBjb25zdCByZXN0YXVyYW50VGFnbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICByZXN0YXVyYW50VGFnbGluZS50ZXh0Q29udGVudCA9IFwiRW5qb3kgYnJlYWtmYXN0IHdpdGggYSB2aWV3IGxpa2Ugbm8gb3RoZXIhXCI7XHJcblxyXG4gIGhvbWVwYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRUYWdsaW5lKTtcclxuXHJcbiAgY29uc3QgcmVzdGF1cmFudEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICByZXN0YXVyYW50SW5mby5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInJlc3RhdXJhbnQtaW5mb1wiKTtcclxuICByZXN0YXVyYW50SW5mby50ZXh0Q29udGVudCA9IFwiVGhlIFN1bnJpc2UgQ2FmZSBpcyB3aGVyZSB5b3Ugd2FudCB0byBiZSBpZiB5b3UgY3JhdmUgYnJlYWtmYXN0IGFuZCB0aGUgc2lnaHRzIG9mIHRoZSBjaXR5IHN1cnJvdW5kaW5nIHlvdS4gV2Ugb2ZmZXIgYSB3aWRlIHNlbGVjdGlvbiBvZiBwbGFudC1iYXNlZCBicmVha2Zhc3Qgb3B0aW9ucyBmb3IgeW91IHRvIGNob29zZSBmcm9tLiBQbGVhc2Ugc2VlIHRoZSBtZW51IGFib3ZlIGZvciBtb3JlIVwiO1xyXG5cclxuICBob21lcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN0YXVyYW50SW5mbyk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBkaXNwbGF5SG9tZXBhZ2UgfTsiLCJpbXBvcnQgVG9mdVNjcmFtYmxlIGZyb20gJy4vdG9mdS1zY3JhbWJsZS5qcGcnO1xyXG5pbXBvcnQgU21vb3RoaWVCb3dsIGZyb20gJy4vc21vb3RoaWUtYm93bC5qcGcnO1xyXG5pbXBvcnQgUGFuY2FrZXNXYWZmbGVzIGZyb20gJy4vcGFuY2FrZXMtd2FmZmxlcy5qcGcnO1xyXG5cclxuZnVuY3Rpb24gZGlzcGxheU1lbnUoKSB7XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuXHJcbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbWVudUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnUtY29udGFpbmVyXCIpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XHJcblxyXG4gIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIHJlc3RhdXJhbnROYW1lLnRleHRDb250ZW50ID0gXCJTVU5SSVNFIENBRkVcIjtcclxuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnROYW1lKTtcclxuXHJcbiAgY29uc3QgcGFnZVNlbGVjdGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIHBhZ2VTZWxlY3RlZC50ZXh0Q29udGVudCA9IFwiTUVOVVwiO1xyXG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZVNlbGVjdGVkKTtcclxuXHJcbiAgY29uc3QgbWVudUl0ZW1Ub2Z1U2NyYW1ibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lbnVJdGVtVG9mdVNjcmFtYmxlLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XHJcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SXRlbVRvZnVTY3JhbWJsZSk7XHJcblxyXG4gIGNvbnN0IHRvZnVTY3JhbWJsZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICB0b2Z1U2NyYW1ibGVJbWFnZS5jbGFzc0xpc3QuYWRkKFwibWVudS1pbWFnZVwiKTtcclxuICB0b2Z1U2NyYW1ibGVJbWFnZS5zcmMgPSBUb2Z1U2NyYW1ibGU7XHJcbiAgbWVudUl0ZW1Ub2Z1U2NyYW1ibGUuYXBwZW5kQ2hpbGQodG9mdVNjcmFtYmxlSW1hZ2UpO1xyXG5cclxuICBjb25zdCB0b2Z1SXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdG9mdUl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbS1jb250YWluZXJcIik7XHJcbiAgbWVudUl0ZW1Ub2Z1U2NyYW1ibGUuYXBwZW5kQ2hpbGQodG9mdUl0ZW1Db250YWluZXIpO1xyXG5cclxuICBjb25zdCB0b2Z1U2NyYW1ibGVJdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdG9mdVNjcmFtYmxlSXRlbU5hbWUuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbS1uYW1lXCIpO1xyXG4gIHRvZnVTY3JhbWJsZUl0ZW1OYW1lLnRleHRDb250ZW50ID0gXCJUT0ZVIFNDUkFNQkxFXCI7XHJcbiAgdG9mdUl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQodG9mdVNjcmFtYmxlSXRlbU5hbWUpO1xyXG5cclxuICBjb25zdCB0b2Z1U2NyYW1ibGVJdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRvZnVTY3JhbWJsZUl0ZW1QcmljZS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtLXByaWNlXCIpO1xyXG4gIHRvZnVTY3JhbWJsZUl0ZW1QcmljZS50ZXh0Q29udGVudCA9IFwiJDkuOTlcIjtcclxuICB0b2Z1SXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2Z1U2NyYW1ibGVJdGVtUHJpY2UpO1xyXG5cclxuICBjb25zdCB0b2Z1U2NyYW1ibGVJdGVtSW5ncmVkaWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRvZnVTY3JhbWJsZUl0ZW1JbmdyZWRpZW50cy5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtLWluZ3JlZGllbnRzXCIpO1xyXG4gIHRvZnVTY3JhbWJsZUl0ZW1JbmdyZWRpZW50cy50ZXh0Q29udGVudCA9IFwiSU5HUkVESUVOVFM6IHRvZnUsIG9uaW9uLCByZWQgYmVsbCBwZXBwZXIsIGthbGUsIHNwaWNlIGJsZW5kLlwiO1xyXG4gIHRvZnVJdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZnVTY3JhbWJsZUl0ZW1JbmdyZWRpZW50cyk7XHJcblxyXG4gIGNvbnN0IG1lbnVJdGVtU21vb3RoaWVCb3dsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtZW51SXRlbVNtb290aGllQm93bC5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xyXG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW1TbW9vdGhpZUJvd2wpO1xyXG5cclxuICBjb25zdCBzbW9vdGhpZUJvd2xJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgc21vb3RoaWVCb3dsSW1hZ2UuY2xhc3NMaXN0LmFkZChcIm1lbnUtaW1hZ2VcIik7XHJcbiAgc21vb3RoaWVCb3dsSW1hZ2Uuc3JjID0gU21vb3RoaWVCb3dsO1xyXG4gIG1lbnVJdGVtU21vb3RoaWVCb3dsLmFwcGVuZENoaWxkKHNtb290aGllQm93bEltYWdlKTtcclxuXHJcbiAgY29uc3Qgc21vb3RoaWVJdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBzbW9vdGhpZUl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbS1jb250YWluZXJcIik7XHJcbiAgbWVudUl0ZW1TbW9vdGhpZUJvd2wuYXBwZW5kQ2hpbGQoc21vb3RoaWVJdGVtQ29udGFpbmVyKTtcclxuXHJcbiAgY29uc3Qgc21vb3RoaWVCb3dsSXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHNtb290aGllQm93bEl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW0tbmFtZVwiKTtcclxuICBzbW9vdGhpZUJvd2xJdGVtTmFtZS50ZXh0Q29udGVudCA9IFwiU01PT1RISUUgQk9XTFwiO1xyXG4gIHNtb290aGllSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChzbW9vdGhpZUJvd2xJdGVtTmFtZSk7XHJcblxyXG4gIGNvbnN0IHNtb290aGllQm93bEl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc21vb3RoaWVCb3dsSXRlbVByaWNlLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW0tcHJpY2VcIik7XHJcbiAgc21vb3RoaWVCb3dsSXRlbVByaWNlLnRleHRDb250ZW50ID0gXCIkMTEuNDlcIjtcclxuICBzbW9vdGhpZUl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoc21vb3RoaWVCb3dsSXRlbVByaWNlKTtcclxuXHJcbiAgY29uc3Qgc21vb3RoaWVCb3dsSXRlbUluZ3JlZGllbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBzbW9vdGhpZUJvd2xJdGVtSW5ncmVkaWVudHMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzbW9vdGhpZS1ib3dsLWNob2ljZVwiKTtcclxuICBzbW9vdGhpZUJvd2xJdGVtSW5ncmVkaWVudHMudGV4dENvbnRlbnQgPSBcIkNIT09TRSBGUk9NOlwiO1xyXG4gIHNtb290aGllSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChzbW9vdGhpZUJvd2xJdGVtSW5ncmVkaWVudHMpO1xyXG5cclxuICBjb25zdCBzbW9vdGhpZUJvd2xUeXBlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gIHNtb290aGllQm93bFR5cGVDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzbW9vdGhpZS1ib3dsLXR5cGUtY29udGFpbmVyXCIpO1xyXG4gIHNtb290aGllSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChzbW9vdGhpZUJvd2xUeXBlQ29udGFpbmVyKTtcclxuXHJcbiAgY29uc3Qgc21vb3RoaWVCb3dsVHlwZUJhbmFuYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICBzbW9vdGhpZUJvd2xUeXBlQmFuYW5hLmNsYXNzTGlzdC5hZGQoXCJzbW9vdGhpZS1ib3dsLXR5cGVcIik7XHJcbiAgc21vb3RoaWVCb3dsVHlwZUJhbmFuYS50ZXh0Q29udGVudCA9IFwiUGluZWFwcGxlLCBCYW5hbmEsIGFuZCBQZWFjaFwiO1xyXG4gIHNtb290aGllQm93bFR5cGVDb250YWluZXIuYXBwZW5kQ2hpbGQoc21vb3RoaWVCb3dsVHlwZUJhbmFuYSk7XHJcblxyXG4gIGNvbnN0IHNtb290aGllQm93bFR5cGVSYXNwYmVycnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgc21vb3RoaWVCb3dsVHlwZVJhc3BiZXJyeS5jbGFzc0xpc3QuYWRkKFwic21vb3RoaWUtYm93bC10eXBlXCIpO1xyXG4gIHNtb290aGllQm93bFR5cGVSYXNwYmVycnkudGV4dENvbnRlbnQgPSBcIkFsbW9uZCBCdXR0ZXIgYW5kIFJhc3BiZXJyeVwiO1xyXG4gIHNtb290aGllQm93bFR5cGVDb250YWluZXIuYXBwZW5kQ2hpbGQoc21vb3RoaWVCb3dsVHlwZVJhc3BiZXJyeSk7XHJcblxyXG4gIGNvbnN0IHNtb290aGllQm93bFR5cGVCbHVlYmVycnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgc21vb3RoaWVCb3dsVHlwZUJsdWViZXJyeS5jbGFzc0xpc3QuYWRkKFwic21vb3RoaWUtYm93bC10eXBlXCIpO1xyXG4gIHNtb290aGllQm93bFR5cGVCbHVlYmVycnkudGV4dENvbnRlbnQgPSBcIkJsdWViZXJyeSwgU3BpbmFjaCwgYW5kIFBpbmVhcHBsZVwiO1xyXG4gIHNtb290aGllQm93bFR5cGVDb250YWluZXIuYXBwZW5kQ2hpbGQoc21vb3RoaWVCb3dsVHlwZUJsdWViZXJyeSk7XHJcblxyXG4gIGNvbnN0IHNtb290aGllQm93bFR5cGVDb2NvbnV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gIHNtb290aGllQm93bFR5cGVDb2NvbnV0LmNsYXNzTGlzdC5hZGQoXCJzbW9vdGhpZS1ib3dsLXR5cGVcIik7XHJcbiAgc21vb3RoaWVCb3dsVHlwZUNvY29udXQudGV4dENvbnRlbnQgPSBcIkNvY29udXQgQcOnYWlcIjtcclxuICBzbW9vdGhpZUJvd2xUeXBlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNtb290aGllQm93bFR5cGVDb2NvbnV0KTtcclxuXHJcbiAgY29uc3QgbWVudUl0ZW1QYW5jYWtlc1dhZmZsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lbnVJdGVtUGFuY2FrZXNXYWZmbGVzLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XHJcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SXRlbVBhbmNha2VzV2FmZmxlcyk7XHJcblxyXG4gIGNvbnN0IHBhbmNha2VzV2FmZmxlc0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBwYW5jYWtlc1dhZmZsZXNJbWFnZS5jbGFzc0xpc3QuYWRkKFwibWVudS1pbWFnZVwiKTtcclxuICBwYW5jYWtlc1dhZmZsZXNJbWFnZS5zcmMgPSBQYW5jYWtlc1dhZmZsZXM7XHJcbiAgbWVudUl0ZW1QYW5jYWtlc1dhZmZsZXMuYXBwZW5kQ2hpbGQocGFuY2FrZXNXYWZmbGVzSW1hZ2UpO1xyXG5cclxuICBjb25zdCBwYW5jYWtlc0l0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHBhbmNha2VzSXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtLWNvbnRhaW5lclwiKTtcclxuICBtZW51SXRlbVBhbmNha2VzV2FmZmxlcy5hcHBlbmRDaGlsZChwYW5jYWtlc0l0ZW1Db250YWluZXIpO1xyXG5cclxuICBjb25zdCBwYW5jYWtlc1dhZmZsZXNJdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcGFuY2FrZXNXYWZmbGVzSXRlbU5hbWUuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbS1uYW1lXCIpO1xyXG4gIHBhbmNha2VzV2FmZmxlc0l0ZW1OYW1lLnRleHRDb250ZW50ID0gXCJQQU5DQUtFUyBBTkQgV0FGRkxFU1wiO1xyXG4gIHBhbmNha2VzSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYW5jYWtlc1dhZmZsZXNJdGVtTmFtZSk7XHJcblxyXG4gIGNvbnN0IHBhbmNha2VzV2FmZmxlc0l0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcGFuY2FrZXNXYWZmbGVzSXRlbVByaWNlLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW0tcHJpY2VcIik7XHJcbiAgcGFuY2FrZXNXYWZmbGVzSXRlbVByaWNlLnRleHRDb250ZW50ID0gXCIkOC45OVwiO1xyXG4gIHBhbmNha2VzSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYW5jYWtlc1dhZmZsZXNJdGVtUHJpY2UpO1xyXG5cclxuICBjb25zdCBwYW5jYWtlc1dhZmZsZXNJdGVtSW5ncmVkaWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHBhbmNha2VzV2FmZmxlc0l0ZW1JbmdyZWRpZW50cy5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtLWluZ3JlZGllbnRzXCIpO1xyXG4gIHBhbmNha2VzV2FmZmxlc0l0ZW1JbmdyZWRpZW50cy50ZXh0Q29udGVudCA9IFwiTGlnaHQgYW5kIGZsdWZmeSwgbWFkZSB3aXRoIGdsdXRlbi1mcmVlIGZsb3VyLlwiO1xyXG4gIHBhbmNha2VzSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYW5jYWtlc1dhZmZsZXNJdGVtSW5ncmVkaWVudHMpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgZGlzcGxheU1lbnUgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBkaXNwbGF5SG9tZXBhZ2UgfSBmcm9tIFwiLi9ob21lcGFnZS5qc1wiO1xyXG5pbXBvcnQgeyBkaXNwbGF5TWVudSB9IGZyb20gXCIuL21lbnUuanNcIjtcclxuaW1wb3J0IHsgZGlzcGxheUNvbnRhY3RQYWdlIH0gZnJvbSBcIi4vY29udGFjdC5qc1wiO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5jb250ZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGVudFwiKTtcclxuXHJcbmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcblxyXG5jb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5uYXZCYXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuYXYtYmFyXCIpO1xyXG5cclxuY29udGVudC5hcHBlbmRDaGlsZChuYXZCYXIpO1xyXG5cclxuY29uc3QgaG9tZVBhZ2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5ob21lUGFnZUJ0bi50ZXh0Q29udGVudCA9IFwiSE9NRVwiO1xyXG5cclxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbm1lbnVCdG4udGV4dENvbnRlbnQgPSBcIk1FTlVcIjtcclxuXHJcbmNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5jb250YWN0QnRuLnRleHRDb250ZW50ID0gXCJDT05UQUNUXCI7XHJcblxyXG5uYXZCYXIuYXBwZW5kQ2hpbGQoaG9tZVBhZ2VCdG4pO1xyXG5uYXZCYXIuYXBwZW5kQ2hpbGQobWVudUJ0bik7XHJcbm5hdkJhci5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcclxuXHJcbmhvbWVQYWdlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5SG9tZXBhZ2VDb250YWluZXIpO1xyXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5TWVudUNvbnRhaW5lcik7XHJcbmNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlDb250YWN0UGFnZUNvbnRhaW5lcik7XHJcblxyXG5kaXNwbGF5SG9tZXBhZ2UoKTtcclxuXHJcbmNvbnN0IGRpc2NsYWltZXJCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5kaXNjbGFpbWVyQm94LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGlzY2xhaW1lci1ib3hcIik7XHJcbmRpc2NsYWltZXJCb3gudGV4dENvbnRlbnQgPSBcIkRJU0NMQUlNRVI6IFRoaXMgaXQgYSBwcm9qZWN0IGZvciB0aGVPZGluUHJvamVjdC4gSSBkbyBub3Qgb3duIHRoZSBwaWN0dXJlcyB1c2VkIGhlcmUuIFRoZXkgYXJlIHRha2VuIGZyb20gR29vZ2xlIHNlYXJjaC5cIjtcclxuXHJcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoZGlzY2xhaW1lckJveCk7XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5SG9tZXBhZ2VDb250YWluZXIgKCkge1xyXG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKG5hdkJhcik7XHJcbiAgZGlzcGxheUhvbWVwYWdlKCk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChkaXNjbGFpbWVyQm94KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheU1lbnVDb250YWluZXIgKCkge1xyXG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKG5hdkJhcik7XHJcbiAgZGlzcGxheU1lbnUoKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGRpc2NsYWltZXJCb3gpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5Q29udGFjdFBhZ2VDb250YWluZXIgKCkge1xyXG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKG5hdkJhcik7XHJcbiAgZGlzcGxheUNvbnRhY3RQYWdlKCk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChkaXNjbGFpbWVyQm94KTtcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==