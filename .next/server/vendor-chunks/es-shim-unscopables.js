"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/es-shim-unscopables";
exports.ids = ["vendor-chunks/es-shim-unscopables"];
exports.modules = {

/***/ "(rsc)/./node_modules/es-shim-unscopables/index.js":
/*!***************************************************!*\
  !*** ./node_modules/es-shim-unscopables/index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar hasOwn = __webpack_require__(/*! hasown */ \"(rsc)/./node_modules/hasown/index.js\");\n\nvar hasUnscopables = typeof Symbol === 'function' && typeof Symbol.unscopables === 'symbol';\n\nvar map = hasUnscopables && Array.prototype[Symbol.unscopables];\n\nvar $TypeError = TypeError;\n\nmodule.exports = function shimUnscopables(method) {\n\tif (typeof method !== 'string' || !method) {\n\t\tthrow new $TypeError('method must be a non-empty string');\n\t}\n\tif (!hasOwn(Array.prototype, method)) {\n\t\tthrow new $TypeError('method must be on Array.prototype');\n\t}\n\tif (hasUnscopables) {\n\t\tmap[method] = true;\n\t}\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZXMtc2hpbS11bnNjb3BhYmxlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixhQUFhLG1CQUFPLENBQUMsb0RBQVE7O0FBRTdCOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC13ZWIvLi9ub2RlX21vZHVsZXMvZXMtc2hpbS11bnNjb3BhYmxlcy9pbmRleC5qcz9hOWE3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGhhc093biA9IHJlcXVpcmUoJ2hhc293bicpO1xuXG52YXIgaGFzVW5zY29wYWJsZXMgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wudW5zY29wYWJsZXMgPT09ICdzeW1ib2wnO1xuXG52YXIgbWFwID0gaGFzVW5zY29wYWJsZXMgJiYgQXJyYXkucHJvdG90eXBlW1N5bWJvbC51bnNjb3BhYmxlc107XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNoaW1VbnNjb3BhYmxlcyhtZXRob2QpIHtcblx0aWYgKHR5cGVvZiBtZXRob2QgIT09ICdzdHJpbmcnIHx8ICFtZXRob2QpIHtcblx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignbWV0aG9kIG11c3QgYmUgYSBub24tZW1wdHkgc3RyaW5nJyk7XG5cdH1cblx0aWYgKCFoYXNPd24oQXJyYXkucHJvdG90eXBlLCBtZXRob2QpKSB7XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ21ldGhvZCBtdXN0IGJlIG9uIEFycmF5LnByb3RvdHlwZScpO1xuXHR9XG5cdGlmIChoYXNVbnNjb3BhYmxlcykge1xuXHRcdG1hcFttZXRob2RdID0gdHJ1ZTtcblx0fVxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/es-shim-unscopables/index.js\n");

/***/ })

};
;