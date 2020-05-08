(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("rstate", [], factory);
	else if(typeof exports === 'object')
		exports["rstate"] = factory();
	else
		root["rstate"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let angalware_data_store = {},\r\n\telement_checked = false,\r\n\telement_name = '',\r\n\tobj_check_list = [],\r\n\tready_check_list = {};\r\nconsole.log(\"printed\")\r\nfunction rstate(fn) {\r\n\tlet myNode = document.querySelectorAll('*[angalware]');\r\n\r\n\t//set default value\r\n\tmyNode.forEach(element => {\r\n\r\n\t\tlet custom_attribute = element.getAttribute(\"angalware\");\r\n\t\tobj_check_list.push(custom_attribute);\r\n\t\tobj_check_list.forEach(x => ready_check_list[x] = (ready_check_list[x] || 0) + 1);\r\n\t\tconsole.log(ready_check_list)\r\n\t\tif (ready_check_list[custom_attribute] == 1)\r\n\t\t\twatching(angalware_data_store, element.getAttribute(\"angalware\"), element.value, (obj, set_val) => {\r\n\t\t\t\tdata_bind(obj, set_val);\r\n\t\t\t});\r\n\r\n\t\tif (element.type != \"radio\" && element.type != \"checkbox\")\r\n\t\t\tangalware_data_store[element.getAttribute(\"angalware\")] = element.value;\r\n\t\telse\r\n\t\tif (element.checked) {\r\n\t\t\telement_checked = true;\r\n\t\t\telement_name = element.getAttribute(\"angalware\");\r\n\t\t\tangalware_data_store[element.getAttribute(\"angalware\")] = element.value;\r\n\t\t} else\r\n\t\tif (!element_checked && element_name != element.getAttribute(\"angalware\"))\r\n\t\t\tif (ready_check_list[custom_attribute] == 1)\r\n\t\t\t\tangalware_data_store[element.getAttribute(\"angalware\")] = \"\";\r\n\t\t\telse\r\n\t\t\t\telement_name = \"\",\r\n\t\t\t\telement_checked = false;\r\n\t}); //end loop\r\n\r\n\tfn(true, angalware_data_store);\r\n\r\n\tdocument.addEventListener('input', (e) => {\r\n\t\tfn(false, angalware_data_store)\r\n\t\tangalware_data_store[e.target.getAttribute('angalware')] = e.target.value;\r\n\r\n\r\n\t})\r\n}\r\n//data bind to input by watchin while set the value\r\nfunction data_bind(angalware, value) {\r\n\t\r\n\tvalidation();\r\n\r\n\tlet options = [];\r\n\tlet myNode = document.querySelectorAll('*[angalware]');\r\n\tmyNode.forEach(element => {\r\n\t\tif (element.getAttribute(\"angalware\") == angalware) {\r\n\t\t\tif (element.getAttribute(\"type\") != \"radio\" && element.getAttribute(\"type\") != \"checkbox\" && element.tagName != \"SELECT\")\r\n\t\t\t\telement.value = value;\r\n\t\t\tif (element.getAttribute(\"type\") == \"radio\" && element.getAttribute(\"value\") == value)\r\n\t\t\t\telement.checked = true;\r\n\t\t\tif (element.getAttribute(\"type\") == \"checkbox\" && element.getAttribute(\"value\") == value)\r\n\t\t\t\telement.checked = true;\r\n\t\t\tif (element.tagName == \"SELECT\")\r\n\t\t\t\toptions = element.childNodes,\r\n\t\t\t\toptions.forEach(el => {\r\n\t\t\t\t\tif (el.value == value)\r\n\t\t\t\t\t\tel.selected = true;\r\n\r\n\t\t\t\t});\r\n\t\t}\r\n\r\n\t})\r\n\t\r\n}\r\n\r\n//watch data changes\r\nfunction watching(obj_parent, inside_obj, arg, watcher_set) {\r\n\r\n\tObject.defineProperty(obj_parent, inside_obj, {\r\n\t\tget: function () {\r\n\r\n\r\n\t\t\treturn arg;\r\n\t\t},\r\n\r\n\t\tset: function (val) {\r\n\t\t\targ = val;\r\n\t\t\twatcher_set(inside_obj, val)\r\n\r\n\r\n\t\t}\r\n\t})\r\n\r\n\r\n}\r\n\r\nfunction validation(){\r\n\r\n\tlet myNode = document.querySelectorAll('*[validate]');\r\n\r\n\t//set default value\r\n\tmyNode.forEach(element => {\r\n// console.log(element)\r\n\r\n\t})\r\n\r\n}\r\nmodule.exports = { \r\n\r\n    rstate\r\n}\n\n//# sourceURL=webpack://rstate/./src/index.js?");

/***/ })

/******/ })["default"];
});