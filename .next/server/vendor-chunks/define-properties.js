"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/define-properties";
exports.ids = ["vendor-chunks/define-properties"];
exports.modules = {

/***/ "(rsc)/./node_modules/define-properties/index.js":
/*!*************************************************!*\
  !*** ./node_modules/define-properties/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar keys = __webpack_require__(/*! object-keys */ \"(rsc)/./node_modules/object-keys/index.js\");\nvar hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';\n\nvar toStr = Object.prototype.toString;\nvar concat = Array.prototype.concat;\nvar defineDataProperty = __webpack_require__(/*! define-data-property */ \"(rsc)/./node_modules/define-data-property/index.js\");\n\nvar isFunction = function (fn) {\n\treturn typeof fn === 'function' && toStr.call(fn) === '[object Function]';\n};\n\nvar supportsDescriptors = __webpack_require__(/*! has-property-descriptors */ \"(rsc)/./node_modules/has-property-descriptors/index.js\")();\n\nvar defineProperty = function (object, name, value, predicate) {\n\tif (name in object) {\n\t\tif (predicate === true) {\n\t\t\tif (object[name] === value) {\n\t\t\t\treturn;\n\t\t\t}\n\t\t} else if (!isFunction(predicate) || !predicate()) {\n\t\t\treturn;\n\t\t}\n\t}\n\n\tif (supportsDescriptors) {\n\t\tdefineDataProperty(object, name, value, true);\n\t} else {\n\t\tdefineDataProperty(object, name, value);\n\t}\n};\n\nvar defineProperties = function (object, map) {\n\tvar predicates = arguments.length > 2 ? arguments[2] : {};\n\tvar props = keys(map);\n\tif (hasSymbols) {\n\t\tprops = concat.call(props, Object.getOwnPropertySymbols(map));\n\t}\n\tfor (var i = 0; i < props.length; i += 1) {\n\t\tdefineProperty(object, props[i], map[props[i]], predicates[props[i]]);\n\t}\n};\n\ndefineProperties.supportsDescriptors = !!supportsDescriptors;\n\nmodule.exports = defineProperties;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZGVmaW5lLXByb3BlcnRpZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsV0FBVyxtQkFBTyxDQUFDLDhEQUFhO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsbUJBQU8sQ0FBQyxnRkFBc0I7O0FBRXZEO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsbUJBQU8sQ0FBQyx3RkFBMEI7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC13ZWIvLi9ub2RlX21vZHVsZXMvZGVmaW5lLXByb3BlcnRpZXMvaW5kZXguanM/OTFhZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBrZXlzID0gcmVxdWlyZSgnb2JqZWN0LWtleXMnKTtcbnZhciBoYXNTeW1ib2xzID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sKCdmb28nKSA9PT0gJ3N5bWJvbCc7XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgY29uY2F0ID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdDtcbnZhciBkZWZpbmVEYXRhUHJvcGVydHkgPSByZXF1aXJlKCdkZWZpbmUtZGF0YS1wcm9wZXJ0eScpO1xuXG52YXIgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIChmbikge1xuXHRyZXR1cm4gdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nICYmIHRvU3RyLmNhbGwoZm4pID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufTtcblxudmFyIHN1cHBvcnRzRGVzY3JpcHRvcnMgPSByZXF1aXJlKCdoYXMtcHJvcGVydHktZGVzY3JpcHRvcnMnKSgpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lLCB2YWx1ZSwgcHJlZGljYXRlKSB7XG5cdGlmIChuYW1lIGluIG9iamVjdCkge1xuXHRcdGlmIChwcmVkaWNhdGUgPT09IHRydWUpIHtcblx0XHRcdGlmIChvYmplY3RbbmFtZV0gPT09IHZhbHVlKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKCFpc0Z1bmN0aW9uKHByZWRpY2F0ZSkgfHwgIXByZWRpY2F0ZSgpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG5cblx0aWYgKHN1cHBvcnRzRGVzY3JpcHRvcnMpIHtcblx0XHRkZWZpbmVEYXRhUHJvcGVydHkob2JqZWN0LCBuYW1lLCB2YWx1ZSwgdHJ1ZSk7XG5cdH0gZWxzZSB7XG5cdFx0ZGVmaW5lRGF0YVByb3BlcnR5KG9iamVjdCwgbmFtZSwgdmFsdWUpO1xuXHR9XG59O1xuXG52YXIgZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIChvYmplY3QsIG1hcCkge1xuXHR2YXIgcHJlZGljYXRlcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDoge307XG5cdHZhciBwcm9wcyA9IGtleXMobWFwKTtcblx0aWYgKGhhc1N5bWJvbHMpIHtcblx0XHRwcm9wcyA9IGNvbmNhdC5jYWxsKHByb3BzLCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG1hcCkpO1xuXHR9XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRkZWZpbmVQcm9wZXJ0eShvYmplY3QsIHByb3BzW2ldLCBtYXBbcHJvcHNbaV1dLCBwcmVkaWNhdGVzW3Byb3BzW2ldXSk7XG5cdH1cbn07XG5cbmRlZmluZVByb3BlcnRpZXMuc3VwcG9ydHNEZXNjcmlwdG9ycyA9ICEhc3VwcG9ydHNEZXNjcmlwdG9ycztcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVQcm9wZXJ0aWVzO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/define-properties/index.js\n");

/***/ })

};
;