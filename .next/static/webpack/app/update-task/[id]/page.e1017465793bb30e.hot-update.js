"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/update-task/[id]/page",{

/***/ "(app-pages-browser)/./app/update-task/[id]/page.jsx":
/*!***************************************!*\
  !*** ./app/update-task/[id]/page.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/UserContext */ \"(app-pages-browser)/./context/UserContext.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst UpdateTaskPage = (param)=>{\n    let { params } = param;\n    _s();\n    const { username } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_UserContext__WEBPACK_IMPORTED_MODULE_3__.UserContext);\n    const [task, setTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [scheduledAt, setScheduledAt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id } = params;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchTask = async ()=>{\n            try {\n                const response = await fetch(\"/api/tasks/\".concat(id, \"?username=\").concat(username));\n                if (response.ok) {\n                    const data = await response.json();\n                    setTask(data);\n                    setTitle(data.title);\n                    setDescription(data.description);\n                    setScheduledAt(new Date(data.scheduledAt).toISOString().slice(0, 16));\n                } else {\n                    console.error(\"Error fetching task:\", response.statusText);\n                }\n            } catch (error) {\n                console.error(\"Error fetching task:\", error);\n            }\n        };\n        fetchTask();\n    }, [\n        id,\n        username\n    ]);\n    const handleUpdate = async (e)=>{\n        e.preventDefault();\n        if (!username) {\n            console.error(\"Username is not set\");\n            return;\n        }\n        try {\n            const response = await fetch(\"/api/tasks/\".concat(id), {\n                method: \"PUT\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    title,\n                    description,\n                    scheduledAt,\n                    username\n                })\n            });\n            if (response.ok) {\n                router.push(\"/\"); // Redirect to homepage or tasks list\n            } else {\n                console.error(\"Error updating task:\", response.statusText);\n            }\n        } catch (error) {\n            console.error(\"Error updating task:\", error);\n        }\n    };\n    if (!task) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\update-task\\\\[id]\\\\page.jsx\",\n        lineNumber: 65,\n        columnNumber: 21\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mb-4\",\n                children: \"Update Task\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\update-task\\\\[id]\\\\page.jsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleUpdate,\n                className: \"space-y-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"title\",\n                                className: \"block mb-2\",\n                                children: \"Title\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\update-task\\\\[id]\\\\page.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"title\",\n                                value: title,\n                                onChange: (e)=>setTitle(e.target.value),\n                                className: \"border p-2 rounded w-full\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\update-task\\\\[id]\\\\page.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\update-task\\\\[id]\\\\page.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"description\",\n                                className: \"block mb-2\",\n                                children: \"Description\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\update-task\\\\[id]\\\\page.jsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                id: \"description\",\n                                value: description,\n                                onChange: (e)=>setDescription(e.target.value),\n                                className: \"border p-2 rounded w-full\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\update-task\\\\[id]\\\\page.jsx\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\update-task\\\\[id]\\\\page.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"scheduledAt\",\n                                className: \"block mb-2\",\n                                children: \"Scheduled At\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\update-task\\\\[id]\\\\page.jsx\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"datetime-local\",\n                                id: \"scheduledAt\",\n                                value: scheduledAt,\n                                onChange: (e)=>setScheduledAt(e.target.value),\n                                className: \"border p-2 rounded w-full\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\update-task\\\\[id]\\\\page.jsx\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\update-task\\\\[id]\\\\page.jsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        children: \"Update Task\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\update-task\\\\[id]\\\\page.jsx\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\update-task\\\\[id]\\\\page.jsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\update-task\\\\[id]\\\\page.jsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, undefined);\n};\n_s(UpdateTaskPage, \"TCvNWgoD6mY0FyIuFwDICyLMZfg=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = UpdateTaskPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UpdateTaskPage);\nvar _c;\n$RefreshReg$(_c, \"UpdateTaskPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91cGRhdGUtdGFzay9baWRdL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRXdEO0FBRVo7QUFDUTtBQUVwRCxNQUFNSyxpQkFBaUI7UUFBQyxFQUFFQyxNQUFNLEVBQUU7O0lBQ2hDLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdMLGlEQUFVQSxDQUFDRSw2REFBV0E7SUFDM0MsTUFBTSxDQUFDSSxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1UsT0FBT0MsU0FBUyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNZLGFBQWFDLGVBQWUsR0FBR2IsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDYyxhQUFhQyxlQUFlLEdBQUdmLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU1nQixTQUFTYiwwREFBU0E7SUFDeEIsTUFBTSxFQUFFYyxFQUFFLEVBQUUsR0FBR1g7SUFFZkwsZ0RBQVNBLENBQUM7UUFDUixNQUFNaUIsWUFBWTtZQUNoQixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxjQUE2QmIsT0FBZlUsSUFBRyxjQUFxQixPQUFUVjtnQkFDMUQsSUFBSVksU0FBU0UsRUFBRSxFQUFFO29CQUNmLE1BQU1DLE9BQU8sTUFBTUgsU0FBU0ksSUFBSTtvQkFDaENkLFFBQVFhO29CQUNSWCxTQUFTVyxLQUFLWixLQUFLO29CQUNuQkcsZUFBZVMsS0FBS1YsV0FBVztvQkFDL0JHLGVBQWUsSUFBSVMsS0FBS0YsS0FBS1IsV0FBVyxFQUFFVyxXQUFXLEdBQUdDLEtBQUssQ0FBQyxHQUFHO2dCQUNuRSxPQUFPO29CQUNMQyxRQUFRQyxLQUFLLENBQUMsd0JBQXdCVCxTQUFTVSxVQUFVO2dCQUMzRDtZQUNGLEVBQUUsT0FBT0QsT0FBTztnQkFDZEQsUUFBUUMsS0FBSyxDQUFDLHdCQUF3QkE7WUFDeEM7UUFDRjtRQUVBVjtJQUNGLEdBQUc7UUFBQ0Q7UUFBSVY7S0FBUztJQUVqQixNQUFNdUIsZUFBZSxPQUFPQztRQUMxQkEsRUFBRUMsY0FBYztRQUVoQixJQUFJLENBQUN6QixVQUFVO1lBQ2JvQixRQUFRQyxLQUFLLENBQUM7WUFDZDtRQUNGO1FBRUEsSUFBSTtZQUNGLE1BQU1ULFdBQVcsTUFBTUMsTUFBTSxjQUFpQixPQUFISCxLQUFNO2dCQUMvQ2dCLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFM0I7b0JBQU9FO29CQUFhRTtvQkFBYVA7Z0JBQVM7WUFDbkU7WUFFQSxJQUFJWSxTQUFTRSxFQUFFLEVBQUU7Z0JBQ2ZMLE9BQU9zQixJQUFJLENBQUMsTUFBTSxxQ0FBcUM7WUFDekQsT0FBTztnQkFDTFgsUUFBUUMsS0FBSyxDQUFDLHdCQUF3QlQsU0FBU1UsVUFBVTtZQUMzRDtRQUNGLEVBQUUsT0FBT0QsT0FBTztZQUNkRCxRQUFRQyxLQUFLLENBQUMsd0JBQXdCQTtRQUN4QztJQUNGO0lBRUEsSUFBSSxDQUFDcEIsTUFBTSxxQkFBTyw4REFBQytCO2tCQUFFOzs7Ozs7SUFFckIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBMEI7Ozs7OzswQkFDeEMsOERBQUNFO2dCQUFLQyxVQUFVZDtnQkFBY1csV0FBVTs7a0NBQ3RDLDhEQUFDRDs7MENBQ0MsOERBQUNLO2dDQUFNQyxTQUFRO2dDQUFRTCxXQUFVOzBDQUFhOzs7Ozs7MENBRzlDLDhEQUFDTTtnQ0FDQ0MsTUFBSztnQ0FDTC9CLElBQUc7Z0NBQ0hnQyxPQUFPdkM7Z0NBQ1B3QyxVQUFVLENBQUNuQixJQUFNcEIsU0FBU29CLEVBQUVvQixNQUFNLENBQUNGLEtBQUs7Z0NBQ3hDUixXQUFVO2dDQUNWVyxRQUFROzs7Ozs7Ozs7Ozs7a0NBR1osOERBQUNaOzswQ0FDQyw4REFBQ0s7Z0NBQU1DLFNBQVE7Z0NBQWNMLFdBQVU7MENBQWE7Ozs7OzswQ0FHcEQsOERBQUNZO2dDQUNDcEMsSUFBRztnQ0FDSGdDLE9BQU9yQztnQ0FDUHNDLFVBQVUsQ0FBQ25CLElBQU1sQixlQUFla0IsRUFBRW9CLE1BQU0sQ0FBQ0YsS0FBSztnQ0FDOUNSLFdBQVU7Z0NBQ1ZXLFFBQVE7Ozs7Ozs7Ozs7OztrQ0FHWiw4REFBQ1o7OzBDQUNDLDhEQUFDSztnQ0FBTUMsU0FBUTtnQ0FBY0wsV0FBVTswQ0FBYTs7Ozs7OzBDQUdwRCw4REFBQ007Z0NBQ0NDLE1BQUs7Z0NBQ0wvQixJQUFHO2dDQUNIZ0MsT0FBT25DO2dDQUNQb0MsVUFBVSxDQUFDbkIsSUFBTWhCLGVBQWVnQixFQUFFb0IsTUFBTSxDQUFDRixLQUFLO2dDQUM5Q1IsV0FBVTtnQ0FDVlcsUUFBUTs7Ozs7Ozs7Ozs7O2tDQUdaLDhEQUFDRTt3QkFDQ04sTUFBSzt3QkFDTFAsV0FBVTtrQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQ7R0E5R01wQzs7UUFNV0Ysc0RBQVNBOzs7S0FOcEJFO0FBZ0hOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC91cGRhdGUtdGFzay9baWRdL3BhZ2UuanN4P2VjMDIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIkAvY29udGV4dC9Vc2VyQ29udGV4dFwiO1xyXG5cclxuY29uc3QgVXBkYXRlVGFza1BhZ2UgPSAoeyBwYXJhbXMgfSkgPT4ge1xyXG4gIGNvbnN0IHsgdXNlcm5hbWUgfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gIGNvbnN0IFt0YXNrLCBzZXRUYXNrXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc2NoZWR1bGVkQXQsIHNldFNjaGVkdWxlZEF0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHBhcmFtcztcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoVGFzayA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL3Rhc2tzLyR7aWR9P3VzZXJuYW1lPSR7dXNlcm5hbWV9YCk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgc2V0VGFzayhkYXRhKTtcclxuICAgICAgICAgIHNldFRpdGxlKGRhdGEudGl0bGUpO1xyXG4gICAgICAgICAgc2V0RGVzY3JpcHRpb24oZGF0YS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICBzZXRTY2hlZHVsZWRBdChuZXcgRGF0ZShkYXRhLnNjaGVkdWxlZEF0KS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDE2KSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB0YXNrOlwiLCByZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHRhc2s6XCIsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaFRhc2soKTtcclxuICB9LCBbaWQsIHVzZXJuYW1lXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVVwZGF0ZSA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKCF1c2VybmFtZSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiVXNlcm5hbWUgaXMgbm90IHNldFwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvdGFza3MvJHtpZH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB0aXRsZSwgZGVzY3JpcHRpb24sIHNjaGVkdWxlZEF0LCB1c2VybmFtZSB9KSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7IC8vIFJlZGlyZWN0IHRvIGhvbWVwYWdlIG9yIHRhc2tzIGxpc3RcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgdGFzazpcIiwgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyB0YXNrOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaWYgKCF0YXNrKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTRcIj5VcGRhdGUgVGFzazwvaDE+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVVcGRhdGV9IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCIgY2xhc3NOYW1lPVwiYmxvY2sgbWItMlwiPlxyXG4gICAgICAgICAgICBUaXRsZVxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwidGl0bGVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dGl0bGV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgcC0yIHJvdW5kZWQgdy1mdWxsXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb25cIiBjbGFzc05hbWU9XCJibG9jayBtYi0yXCI+XHJcbiAgICAgICAgICAgIERlc2NyaXB0aW9uXHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgcC0yIHJvdW5kZWQgdy1mdWxsXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2NoZWR1bGVkQXRcIiBjbGFzc05hbWU9XCJibG9jayBtYi0yXCI+XHJcbiAgICAgICAgICAgIFNjaGVkdWxlZCBBdFxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIlxyXG4gICAgICAgICAgICBpZD1cInNjaGVkdWxlZEF0XCJcclxuICAgICAgICAgICAgdmFsdWU9e3NjaGVkdWxlZEF0fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNjaGVkdWxlZEF0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIHAtMiByb3VuZGVkIHctZnVsbFwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgVXBkYXRlIFRhc2tcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVwZGF0ZVRhc2tQYWdlO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwidXNlUm91dGVyIiwiVXNlckNvbnRleHQiLCJVcGRhdGVUYXNrUGFnZSIsInBhcmFtcyIsInVzZXJuYW1lIiwidGFzayIsInNldFRhc2siLCJ0aXRsZSIsInNldFRpdGxlIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsInNjaGVkdWxlZEF0Iiwic2V0U2NoZWR1bGVkQXQiLCJyb3V0ZXIiLCJpZCIsImZldGNoVGFzayIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsImRhdGEiLCJqc29uIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwic2xpY2UiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGF0dXNUZXh0IiwiaGFuZGxlVXBkYXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicHVzaCIsInAiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsInRleHRhcmVhIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/update-task/[id]/page.jsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./context/UserContext.jsx":
/*!*********************************!*\
  !*** ./context/UserContext.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserContext: function() { return /* binding */ UserContext; },\n/* harmony export */   UserProvider: function() { return /* binding */ UserProvider; },\n/* harmony export */   useUser: function() { return /* binding */ useUser; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ UserContext,UserProvider,useUser auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    username: \"\",\n    setUsername: ()=>{}\n});\nconst UserProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const storedUsername = localStorage.getItem(\"username\");\n        if (storedUsername) {\n            setUsername(storedUsername);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            username,\n            setUsername\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\context\\\\UserContext.jsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(UserProvider, \"vvPqiwmcocEAjsjiwnE6bJ+J4Yk=\");\n_c = UserProvider;\nconst useUser = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserContext);\n};\n_s1(useUser, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"UserProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbnRleHQvVXNlckNvbnRleHQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ3VFO0FBRWhFLE1BQU1JLDRCQUFjSixvREFBYUEsQ0FBQztJQUN2Q0ssVUFBVTtJQUNWQyxhQUFhLEtBQU87QUFDdEIsR0FBRztBQUVJLE1BQU1DLGVBQWU7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQ3ZDLE1BQU0sQ0FBQ0gsVUFBVUMsWUFBWSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUV6Q0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNTSxpQkFBaUJDLGFBQWFDLE9BQU8sQ0FBQztRQUM1QyxJQUFJRixnQkFBZ0I7WUFDbEJILFlBQVlHO1FBQ2Q7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0wsWUFBWVEsUUFBUTtRQUFDQyxPQUFPO1lBQUVSO1lBQVVDO1FBQVk7a0JBQ2xERTs7Ozs7O0FBR1AsRUFBRTtHQWZXRDtLQUFBQTtBQWlCTixNQUFNTyxVQUFVOztJQUFNYixPQUFBQSxpREFBVUEsQ0FBQ0c7QUFBVyxFQUFFO0lBQXhDVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L1VzZXJDb250ZXh0LmpzeD85ZTEyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xyXG4gIHVzZXJuYW1lOiAnJyxcclxuICBzZXRVc2VybmFtZTogKCkgPT4ge31cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgVXNlclByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVkVXNlcm5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcm5hbWUnKTtcclxuICAgIGlmIChzdG9yZWRVc2VybmFtZSkge1xyXG4gICAgICBzZXRVc2VybmFtZShzdG9yZWRVc2VybmFtZSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXJuYW1lLCBzZXRVc2VybmFtZSB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVVzZXIgPSAoKSA9PiB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJVc2VyQ29udGV4dCIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJVc2VyUHJvdmlkZXIiLCJjaGlsZHJlbiIsInN0b3JlZFVzZXJuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VVc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./context/UserContext.jsx\n"));

/***/ })

});