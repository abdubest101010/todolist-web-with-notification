"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/safe-regex-test";
exports.ids = ["vendor-chunks/safe-regex-test"];
exports.modules = {

/***/ "(rsc)/./node_modules/safe-regex-test/index.js":
/*!***********************************************!*\
  !*** ./node_modules/safe-regex-test/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"(rsc)/./node_modules/call-bind/callBound.js\");\nvar isRegex = __webpack_require__(/*! is-regex */ \"(rsc)/./node_modules/is-regex/index.js\");\n\nvar $exec = callBound('RegExp.prototype.exec');\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"(rsc)/./node_modules/es-errors/type.js\");\n\nmodule.exports = function regexTester(regex) {\n\tif (!isRegex(regex)) {\n\t\tthrow new $TypeError('`regex` must be a RegExp');\n\t}\n\treturn function test(s) {\n\t\treturn $exec(regex, s) !== null;\n\t};\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvc2FmZS1yZWdleC10ZXN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLGdCQUFnQixtQkFBTyxDQUFDLHdFQUFxQjtBQUM3QyxjQUFjLG1CQUFPLENBQUMsd0RBQVU7O0FBRWhDO0FBQ0EsaUJBQWlCLG1CQUFPLENBQUMsOERBQWdCOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3Qtd2ViLy4vbm9kZV9tb2R1bGVzL3NhZmUtcmVnZXgtdGVzdC9pbmRleC5qcz8zMjI0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGNhbGxCb3VuZCA9IHJlcXVpcmUoJ2NhbGwtYmluZC9jYWxsQm91bmQnKTtcbnZhciBpc1JlZ2V4ID0gcmVxdWlyZSgnaXMtcmVnZXgnKTtcblxudmFyICRleGVjID0gY2FsbEJvdW5kKCdSZWdFeHAucHJvdG90eXBlLmV4ZWMnKTtcbnZhciAkVHlwZUVycm9yID0gcmVxdWlyZSgnZXMtZXJyb3JzL3R5cGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByZWdleFRlc3RlcihyZWdleCkge1xuXHRpZiAoIWlzUmVnZXgocmVnZXgpKSB7XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2ByZWdleGAgbXVzdCBiZSBhIFJlZ0V4cCcpO1xuXHR9XG5cdHJldHVybiBmdW5jdGlvbiB0ZXN0KHMpIHtcblx0XHRyZXR1cm4gJGV4ZWMocmVnZXgsIHMpICE9PSBudWxsO1xuXHR9O1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/safe-regex-test/index.js\n");

/***/ })

};
;