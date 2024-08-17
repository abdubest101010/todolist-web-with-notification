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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/UserContext */ \"(app-pages-browser)/./context/UserContext.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst HomePage = ()=>{\n    _s();\n    const { username } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_UserContext__WEBPACK_IMPORTED_MODULE_4__.UserContexts);\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchTasks = async ()=>{\n            if (!username) return;\n            try {\n                const response = await fetch(\"/api/tasks?username=\".concat(username));\n                if (response.ok) {\n                    const data = await response.json();\n                    setTasks(data);\n                } else {\n                    console.error(\"Error fetching tasks:\", response.statusText);\n                }\n            } catch (error) {\n                console.error(\"Error fetching tasks:\", error);\n            } finally{\n                setLoading(false);\n            }\n        };\n        fetchTasks();\n    }, [\n        username\n    ]);\n    const handleDelete = async (id)=>{\n        try {\n            const response = await fetch(\"/api/tasks/\".concat(id), {\n                method: \"DELETE\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    id\n                })\n            });\n            if (response.ok) {\n                setTasks(tasks.filter((task)=>task.id !== id));\n            } else {\n                console.error(\"Error deleting task\");\n            }\n        } catch (error) {\n            console.error(\"Error deleting task:\", error);\n        }\n    };\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\page.js\",\n        lineNumber: 59,\n        columnNumber: 23\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl font-bold\",\n                        children: \"Your Tasks\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\page.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        href: \"/add-task\",\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        children: \"Add New Task\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\page.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\page.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            tasks.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"space-y-4\",\n                children: tasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"border p-4 rounded\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl font-semibold\",\n                                children: task.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\page.js\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-700\",\n                                children: task.description\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\page.js\",\n                                lineNumber: 77,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-500\",\n                                children: [\n                                    \"Scheduled at: \",\n                                    new Date(task.scheduledAt).toLocaleString()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\page.js\",\n                                lineNumber: 78,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        href: \"/update-task/\".concat(task.id),\n                                        className: \"bg-yellow-500 text-white px-4 py-2 rounded mr-2\",\n                                        children: \"Update\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\page.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>handleDelete(task.id),\n                                        className: \"bg-red-500 text-white px-4 py-2 rounded\",\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\page.js\",\n                                        lineNumber: 88,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\page.js\",\n                                lineNumber: 81,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, task.id, true, {\n                        fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\page.js\",\n                        lineNumber: 75,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\page.js\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"You didn't provide any tasks yet\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\page.js\",\n                lineNumber: 99,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\page.js\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"yuHlokJaVm3W6h/ImDjQzuR4il0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dHMgfSBmcm9tIFwiQC9jb250ZXh0L1VzZXJDb250ZXh0XCI7XG5cblxuXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgeyB1c2VybmFtZSB9ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dHMpO1xuICBjb25zdCBbdGFza3MsIHNldFRhc2tzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hUYXNrcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmICghdXNlcm5hbWUpIHJldHVybjtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS90YXNrcz91c2VybmFtZT0ke3VzZXJuYW1lfWApO1xuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgIHNldFRhc2tzKGRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB0YXNrczpcIiwgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB0YXNrczpcIiwgZXJyb3IpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoVGFza3MoKTtcbiAgfSwgW3VzZXJuYW1lXSk7XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvdGFza3MvJHtpZH1gLCB7XG4gICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGlkIH0pLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICBzZXRUYXNrcyh0YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgIT09IGlkKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZGVsZXRpbmcgdGFza1wiKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIHRhc2s6XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtYi00XCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj5Zb3VyIFRhc2tzPC9oMT5cbiAgICAgICAgPExpbmtcbiAgICAgICAgICBocmVmPVwiL2FkZC10YXNrXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkXCJcbiAgICAgICAgPlxuICAgICAgICAgIEFkZCBOZXcgVGFza1xuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIHt0YXNrcy5sZW5ndGggPiAwID8gKFxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAge3Rhc2tzLm1hcCgodGFzaykgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17dGFzay5pZH0gY2xhc3NOYW1lPVwiYm9yZGVyIHAtNCByb3VuZGVkXCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj57dGFzay50aXRsZX08L2gyPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwXCI+e3Rhc2suZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgU2NoZWR1bGVkIGF0OiB7bmV3IERhdGUodGFzay5zY2hlZHVsZWRBdCkudG9Mb2NhbGVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgaHJlZj17YC91cGRhdGUtdGFzay8ke3Rhc2suaWR9YH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXllbGxvdy01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZCBtci0yXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBVcGRhdGVcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKHRhc2suaWQpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcmVkLTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgKSA6IChcbiAgICAgICAgPHA+WW91IGRpZG4ndCBwcm92aWRlIGFueSB0YXNrcyB5ZXQ8L3A+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwidXNlUm91dGVyIiwiTGluayIsIlVzZXJDb250ZXh0cyIsIkhvbWVQYWdlIiwidXNlcm5hbWUiLCJ0YXNrcyIsInNldFRhc2tzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJmZXRjaFRhc2tzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwiZXJyb3IiLCJzdGF0dXNUZXh0IiwiaGFuZGxlRGVsZXRlIiwiaWQiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmaWx0ZXIiLCJ0YXNrIiwicCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaHJlZiIsImxlbmd0aCIsInVsIiwibWFwIiwibGkiLCJoMiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJEYXRlIiwic2NoZWR1bGVkQXQiLCJ0b0xvY2FsZVN0cmluZyIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./context/UserContext.jsx":
/*!*********************************!*\
  !*** ./context/UserContext.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserContexts: function() { return /* binding */ UserContexts; },\n/* harmony export */   UserProvider: function() { return /* binding */ UserProvider; },\n/* harmony export */   useUser: function() { return /* binding */ useUser; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ UserContexts,UserProvider,useUser auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nconst UserContexts = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    username: \"\",\n    setUsername: ()=>{}\n});\nconst UserProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContexts.Provider, {\n        value: {\n            username,\n            setUsername\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\context\\\\UserContext.jsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_s(UserProvider, \"oX7frOsoM286qXdKn03TWCpXkD4=\");\n_c = UserProvider;\nconst useUser = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserContexts);\n};\n_s1(useUser, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"UserProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbnRleHQvVXNlckNvbnRleHQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQzREO0FBRXJELE1BQU1HLDZCQUFlSCxvREFBYUEsQ0FBQztJQUN4Q0ksVUFBVTtJQUNWQyxhQUFhLEtBQU87QUFDdEIsR0FBRztBQUVJLE1BQU1DLGVBQWU7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQ3ZDLE1BQU0sQ0FBQ0gsVUFBVUMsWUFBWSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUV6QyxxQkFDRSw4REFBQ0MsYUFBYUssUUFBUTtRQUFDQyxPQUFPO1lBQUVMO1lBQVVDO1FBQVk7a0JBQ25ERTs7Ozs7O0FBR1AsRUFBRTtHQVJXRDtLQUFBQTtBQVVOLE1BQU1JLFVBQVU7O0lBQU1ULE9BQUFBLGlEQUFVQSxDQUFDRTtBQUFZLEVBQUU7SUFBekNPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvVXNlckNvbnRleHQuanN4PzllMTIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgVXNlckNvbnRleHRzID0gY3JlYXRlQ29udGV4dCh7XHJcbiAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgc2V0VXNlcm5hbWU6ICgpID0+IHt9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VyQ29udGV4dHMuUHJvdmlkZXIgdmFsdWU9e3sgdXNlcm5hbWUsIHNldFVzZXJuYW1lIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1VzZXJDb250ZXh0cy5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVVzZXIgPSAoKSA9PiB1c2VDb250ZXh0KFVzZXJDb250ZXh0cyk7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiVXNlckNvbnRleHRzIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsIlVzZXJQcm92aWRlciIsImNoaWxkcmVuIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZVVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./context/UserContext.jsx\n"));

/***/ })

});