"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst HomePage = ()=>{\n    _s();\n    const { username } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserContext);\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchTasks = async ()=>{\n            if (!username) return;\n            try {\n                const response = await fetch(\"/api/tasks?username=\".concat(username));\n                if (response.ok) {\n                    const data = await response.json();\n                    setTasks(data);\n                } else {\n                    console.error(\"Error fetching tasks:\", response.statusText);\n                }\n            } catch (error) {\n                console.error(\"Error fetching tasks:\", error);\n            } finally{\n                setLoading(false);\n            }\n        };\n        fetchTasks();\n    }, [\n        username\n    ]);\n    const handleDelete = async (id)=>{\n        try {\n            const response = await fetch(\"/api/tasks/\".concat(id), {\n                method: \"DELETE\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    id\n                })\n            });\n            if (response.ok) {\n                setTasks(tasks.filter((task)=>task.id !== id));\n            } else {\n                console.error(\"Error deleting task\");\n            }\n        } catch (error) {\n            console.error(\"Error deleting task:\", error);\n        }\n    };\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\page.js\",\n        lineNumber: 59,\n        columnNumber: 23\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl font-bold\",\n                        children: \"Your Tasks\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\page.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        href: \"/add-task\",\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        children: \"Add New Task\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\page.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\page.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            tasks.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"space-y-4\",\n                children: tasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"border p-4 rounded\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl font-semibold\",\n                                children: task.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\page.js\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-700\",\n                                children: task.description\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\page.js\",\n                                lineNumber: 77,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-500\",\n                                children: [\n                                    \"Scheduled at: \",\n                                    new Date(task.scheduledAt).toLocaleString()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\page.js\",\n                                lineNumber: 78,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        href: \"/update-task/\".concat(task.id),\n                                        className: \"bg-yellow-500 text-white px-4 py-2 rounded mr-2\",\n                                        children: \"Update\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\page.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>handleDelete(task.id),\n                                        className: \"bg-red-500 text-white px-4 py-2 rounded\",\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\page.js\",\n                                        lineNumber: 88,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\page.js\",\n                                lineNumber: 81,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, task.id, true, {\n                        fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\page.js\",\n                        lineNumber: 75,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\page.js\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"You didn't provide any tasks yet\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\page.js\",\n                lineNumber: 99,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\page.js\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"yuHlokJaVm3W6h/ImDjQzuR4il0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuXG5cblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdXNlcm5hbWUgfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuICBjb25zdCBbdGFza3MsIHNldFRhc2tzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hUYXNrcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmICghdXNlcm5hbWUpIHJldHVybjtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS90YXNrcz91c2VybmFtZT0ke3VzZXJuYW1lfWApO1xuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgIHNldFRhc2tzKGRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB0YXNrczpcIiwgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB0YXNrczpcIiwgZXJyb3IpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoVGFza3MoKTtcbiAgfSwgW3VzZXJuYW1lXSk7XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvdGFza3MvJHtpZH1gLCB7XG4gICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGlkIH0pLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICBzZXRUYXNrcyh0YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgIT09IGlkKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZGVsZXRpbmcgdGFza1wiKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIHRhc2s6XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtYi00XCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj5Zb3VyIFRhc2tzPC9oMT5cbiAgICAgICAgPExpbmtcbiAgICAgICAgICBocmVmPVwiL2FkZC10YXNrXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkXCJcbiAgICAgICAgPlxuICAgICAgICAgIEFkZCBOZXcgVGFza1xuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIHt0YXNrcy5sZW5ndGggPiAwID8gKFxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAge3Rhc2tzLm1hcCgodGFzaykgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17dGFzay5pZH0gY2xhc3NOYW1lPVwiYm9yZGVyIHAtNCByb3VuZGVkXCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj57dGFzay50aXRsZX08L2gyPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwXCI+e3Rhc2suZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgU2NoZWR1bGVkIGF0OiB7bmV3IERhdGUodGFzay5zY2hlZHVsZWRBdCkudG9Mb2NhbGVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgaHJlZj17YC91cGRhdGUtdGFzay8ke3Rhc2suaWR9YH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXllbGxvdy01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZCBtci0yXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBVcGRhdGVcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKHRhc2suaWQpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcmVkLTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgKSA6IChcbiAgICAgICAgPHA+WW91IGRpZG4ndCBwcm92aWRlIGFueSB0YXNrcyB5ZXQ8L3A+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwidXNlUm91dGVyIiwiTGluayIsIkhvbWVQYWdlIiwidXNlcm5hbWUiLCJVc2VyQ29udGV4dCIsInRhc2tzIiwic2V0VGFza3MiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsImZldGNoVGFza3MiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJlcnJvciIsInN0YXR1c1RleHQiLCJoYW5kbGVEZWxldGUiLCJpZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImZpbHRlciIsInRhc2siLCJwIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJocmVmIiwibGVuZ3RoIiwidWwiLCJtYXAiLCJsaSIsImgyIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkRhdGUiLCJzY2hlZHVsZWRBdCIsInRvTG9jYWxlU3RyaW5nIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});