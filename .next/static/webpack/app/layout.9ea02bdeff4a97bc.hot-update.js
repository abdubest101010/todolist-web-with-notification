"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./context/userContext.jsx":
/*!*********************************!*\
  !*** ./context/userContext.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserContexts: function() { return /* binding */ UserContexts; },\n/* harmony export */   UserProvider: function() { return /* binding */ UserProvider; },\n/* harmony export */   useUser: function() { return /* binding */ useUser; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ UserContexts,UserProvider,useUser auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nconst UserContexts = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    username: \"\",\n    setUsername: ()=>{}\n});\nconst UserProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            username,\n            setUsername\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\context\\\\userContext.jsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_s(UserProvider, \"AfRD6VxGv+Gn/ZNWvgmLk5f6638=\");\n_c = UserProvider;\nconst useUser = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserContexts);\n};\n_s1(useUser, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"UserProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbnRleHQvdXNlckNvbnRleHQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQzREO0FBRXJELE1BQU1HLDZCQUFlSCxvREFBYUEsQ0FBQztJQUN4Q0ksVUFBVTtJQUNWQyxhQUFhLEtBQU87QUFDdEIsR0FBRztBQUVJLE1BQU1DLGVBQWU7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQ3ZDLE1BQU0sQ0FBQ0gsVUFBVUMsWUFBWSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUV6QyxxQkFDRSw4REFBQ00sWUFBWUMsUUFBUTtRQUFDQyxPQUFPO1lBQUVOO1lBQVVDO1FBQVk7a0JBQ2xERTs7Ozs7O0FBR1AsRUFBRTtHQVJXRDtLQUFBQTtBQVVOLE1BQU1LLFVBQVU7O0lBQU1WLE9BQUFBLGlEQUFVQSxDQUFDRTtBQUFZLEVBQUU7SUFBekNRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvdXNlckNvbnRleHQuanN4P2VhMTkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyQ29udGV4dHMgPSBjcmVhdGVDb250ZXh0KHtcclxuICB1c2VybmFtZTogJycsXHJcbiAgc2V0VXNlcm5hbWU6ICgpID0+IHt9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VybmFtZSwgc2V0VXNlcm5hbWUgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VVc2VyID0gKCkgPT4gdXNlQ29udGV4dChVc2VyQ29udGV4dHMpO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIlVzZXJDb250ZXh0cyIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJVc2VyUHJvdmlkZXIiLCJjaGlsZHJlbiIsIlVzZXJDb250ZXh0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZVVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./context/userContext.jsx\n"));

/***/ })

});