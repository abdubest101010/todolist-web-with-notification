"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/tasks/route";
exports.ids = ["app/api/tasks/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftasks%2Froute&page=%2Fapi%2Ftasks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2Froute.jsx&appDir=C%3A%5CUsers%5CAbdu%5CDocuments%5CAbdu_Projects%5Ctodolist-web%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAbdu%5CDocuments%5CAbdu_Projects%5Ctodolist-web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftasks%2Froute&page=%2Fapi%2Ftasks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2Froute.jsx&appDir=C%3A%5CUsers%5CAbdu%5CDocuments%5CAbdu_Projects%5Ctodolist-web%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAbdu%5CDocuments%5CAbdu_Projects%5Ctodolist-web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Abdu_Documents_Abdu_Projects_todolist_web_app_api_tasks_route_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/tasks/route.jsx */ \"(rsc)/./app/api/tasks/route.jsx\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/tasks/route\",\n        pathname: \"/api/tasks\",\n        filename: \"route\",\n        bundlePath: \"app/api/tasks/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Abdu\\\\Documents\\\\Abdu_Projects\\\\todolist-web\\\\app\\\\api\\\\tasks\\\\route.jsx\",\n    nextConfigOutput,\n    userland: C_Users_Abdu_Documents_Abdu_Projects_todolist_web_app_api_tasks_route_jsx__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/tasks/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ0YXNrcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdGFza3MlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ0YXNrcyUyRnJvdXRlLmpzeCZhcHBEaXI9QyUzQSU1Q1VzZXJzJTVDQWJkdSU1Q0RvY3VtZW50cyU1Q0FiZHVfUHJvamVjdHMlNUN0b2RvbGlzdC13ZWIlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q0FiZHUlNUNEb2N1bWVudHMlNUNBYmR1X1Byb2plY3RzJTVDdG9kb2xpc3Qtd2ViJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNtQztBQUNoSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0LXdlYi8/OThiZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxBYmR1XFxcXERvY3VtZW50c1xcXFxBYmR1X1Byb2plY3RzXFxcXHRvZG9saXN0LXdlYlxcXFxhcHBcXFxcYXBpXFxcXHRhc2tzXFxcXHJvdXRlLmpzeFwiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdGFza3Mvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS90YXNrc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvdGFza3Mvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxBYmR1XFxcXERvY3VtZW50c1xcXFxBYmR1X1Byb2plY3RzXFxcXHRvZG9saXN0LXdlYlxcXFxhcHBcXFxcYXBpXFxcXHRhc2tzXFxcXHJvdXRlLmpzeFwiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvdGFza3Mvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftasks%2Froute&page=%2Fapi%2Ftasks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2Froute.jsx&appDir=C%3A%5CUsers%5CAbdu%5CDocuments%5CAbdu_Projects%5Ctodolist-web%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAbdu%5CDocuments%5CAbdu_Projects%5Ctodolist-web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/tasks/route.jsx":
/*!*********************************!*\
  !*** ./app/api/tasks/route.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/prisma/client */ \"(rsc)/./prisma/client.jsx\");\n\n\nasync function GET(request) {\n    const url = new URL(request.url);\n    const username = url.searchParams.get(\"username\");\n    if (!username) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Username is required\"\n        }, {\n            status: 400\n        });\n    }\n    try {\n        let user = await _prisma_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.findUnique({\n            where: {\n                username\n            }\n        });\n        if (!user) {\n            user = await _prisma_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.create({\n                data: {\n                    username\n                }\n            });\n        }\n        const tasks = await _prisma_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].task.findMany({\n            where: {\n                userId: user.id\n            },\n            orderBy: {\n                scheduledAt: \"asc\"\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(tasks);\n    } catch (error) {\n        console.error(error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Internal Server Error\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(request) {\n    try {\n        const { title, description, scheduledAt, username } = await request.json();\n        if (!username || !title || !description || !scheduledAt) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"All fields are required\"\n            }, {\n                status: 400\n            });\n        }\n        let user = await _prisma_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.findUnique({\n            where: {\n                username\n            }\n        });\n        if (!user) {\n            user = await _prisma_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.create({\n                data: {\n                    username\n                }\n            });\n        }\n        const newTask = await _prisma_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].task.create({\n            data: {\n                title,\n                description,\n                scheduledAt: new Date(scheduledAt),\n                userId: user.id\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(newTask, {\n            status: 201\n        });\n    } catch (error) {\n        console.error(error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Internal Server Error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Rhc2tzL3JvdXRlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJDO0FBQ047QUFFOUIsZUFBZUUsSUFBSUMsT0FBTztJQUMvQixNQUFNQyxNQUFNLElBQUlDLElBQUlGLFFBQVFDLEdBQUc7SUFDL0IsTUFBTUUsV0FBV0YsSUFBSUcsWUFBWSxDQUFDQyxHQUFHLENBQUM7SUFFdEMsSUFBSSxDQUFDRixVQUFVO1FBQ2IsT0FBT04scURBQVlBLENBQUNTLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXVCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQzVFO0lBRUEsSUFBSTtRQUNGLElBQUlDLE9BQU8sTUFBTVgsc0RBQU1BLENBQUNXLElBQUksQ0FBQ0MsVUFBVSxDQUFDO1lBQ3RDQyxPQUFPO2dCQUFFUjtZQUFTO1FBQ3BCO1FBRUEsSUFBSSxDQUFDTSxNQUFNO1lBQ1RBLE9BQU8sTUFBTVgsc0RBQU1BLENBQUNXLElBQUksQ0FBQ0csTUFBTSxDQUFDO2dCQUM5QkMsTUFBTTtvQkFBRVY7Z0JBQVM7WUFDbkI7UUFDRjtRQUVBLE1BQU1XLFFBQVEsTUFBTWhCLHNEQUFNQSxDQUFDaUIsSUFBSSxDQUFDQyxRQUFRLENBQUM7WUFDdkNMLE9BQU87Z0JBQUVNLFFBQVFSLEtBQUtTLEVBQUU7WUFBQztZQUN6QkMsU0FBUztnQkFBRUMsYUFBYTtZQUFNO1FBQ2hDO1FBRUEsT0FBT3ZCLHFEQUFZQSxDQUFDUyxJQUFJLENBQUNRO0lBQzNCLEVBQUUsT0FBT1AsT0FBTztRQUNkYyxRQUFRZCxLQUFLLENBQUNBO1FBQ2QsT0FBT1YscURBQVlBLENBQUNTLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXdCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQzdFO0FBQ0Y7QUFFTyxlQUFlYyxLQUFLdEIsT0FBTztJQUNoQyxJQUFJO1FBQ0YsTUFBTSxFQUFFdUIsS0FBSyxFQUFFQyxXQUFXLEVBQUVKLFdBQVcsRUFBRWpCLFFBQVEsRUFBRSxHQUFHLE1BQU1ILFFBQVFNLElBQUk7UUFFeEUsSUFBSSxDQUFDSCxZQUFZLENBQUNvQixTQUFTLENBQUNDLGVBQWUsQ0FBQ0osYUFBYTtZQUN2RCxPQUFPdkIscURBQVlBLENBQUNTLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUEwQixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDL0U7UUFFQSxJQUFJQyxPQUFPLE1BQU1YLHNEQUFNQSxDQUFDVyxJQUFJLENBQUNDLFVBQVUsQ0FBQztZQUN0Q0MsT0FBTztnQkFBRVI7WUFBUztRQUNwQjtRQUVBLElBQUksQ0FBQ00sTUFBTTtZQUNUQSxPQUFPLE1BQU1YLHNEQUFNQSxDQUFDVyxJQUFJLENBQUNHLE1BQU0sQ0FBQztnQkFDOUJDLE1BQU07b0JBQUVWO2dCQUFTO1lBQ25CO1FBQ0Y7UUFFQSxNQUFNc0IsVUFBVSxNQUFNM0Isc0RBQU1BLENBQUNpQixJQUFJLENBQUNILE1BQU0sQ0FBQztZQUN2Q0MsTUFBTTtnQkFDSlU7Z0JBQ0FDO2dCQUNBSixhQUFhLElBQUlNLEtBQUtOO2dCQUN0QkgsUUFBUVIsS0FBS1MsRUFBRTtZQUNqQjtRQUNGO1FBRUEsT0FBT3JCLHFEQUFZQSxDQUFDUyxJQUFJLENBQUNtQixTQUFTO1lBQUVqQixRQUFRO1FBQUk7SUFDbEQsRUFBRSxPQUFPRCxPQUFPO1FBQ2RjLFFBQVFkLEtBQUssQ0FBQ0E7UUFDZCxPQUFPVixxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBd0IsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDN0U7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0LXdlYi8uL2FwcC9hcGkvdGFza3Mvcm91dGUuanN4PzBjNDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5pbXBvcnQgcHJpc21hIGZyb20gJ0AvcHJpc21hL2NsaWVudCc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcXVlc3QpIHtcclxuICBjb25zdCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcclxuICBjb25zdCB1c2VybmFtZSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KCd1c2VybmFtZScpO1xyXG5cclxuICBpZiAoIXVzZXJuYW1lKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ1VzZXJuYW1lIGlzIHJlcXVpcmVkJyB9LCB7IHN0YXR1czogNDAwIH0pO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGxldCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7IHVzZXJuYW1lIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7IHVzZXJuYW1lIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdGFza3MgPSBhd2FpdCBwcmlzbWEudGFzay5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7IHVzZXJJZDogdXNlci5pZCB9LFxyXG4gICAgICBvcmRlckJ5OiB7IHNjaGVkdWxlZEF0OiAnYXNjJyB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24odGFza3MpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyB9LCB7IHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgc2NoZWR1bGVkQXQsIHVzZXJuYW1lIH0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuXHJcbiAgICBpZiAoIXVzZXJuYW1lIHx8ICF0aXRsZSB8fCAhZGVzY3JpcHRpb24gfHwgIXNjaGVkdWxlZEF0KSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnQWxsIGZpZWxkcyBhcmUgcmVxdWlyZWQnIH0sIHsgc3RhdHVzOiA0MDAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcclxuICAgICAgd2hlcmU6IHsgdXNlcm5hbWUgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgIHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHsgdXNlcm5hbWUgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuZXdUYXNrID0gYXdhaXQgcHJpc21hLnRhc2suY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIHNjaGVkdWxlZEF0OiBuZXcgRGF0ZShzY2hlZHVsZWRBdCksXHJcbiAgICAgICAgdXNlcklkOiB1c2VyLmlkLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKG5ld1Rhc2ssIHsgc3RhdHVzOiAyMDEgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJwcmlzbWEiLCJHRVQiLCJyZXF1ZXN0IiwidXJsIiwiVVJMIiwidXNlcm5hbWUiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiY3JlYXRlIiwiZGF0YSIsInRhc2tzIiwidGFzayIsImZpbmRNYW55IiwidXNlcklkIiwiaWQiLCJvcmRlckJ5Iiwic2NoZWR1bGVkQXQiLCJjb25zb2xlIiwiUE9TVCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJuZXdUYXNrIiwiRGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/tasks/route.jsx\n");

/***/ }),

/***/ "(rsc)/./prisma/client.jsx":
/*!***************************!*\
  !*** ./prisma/client.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prismaClientSingleton = ()=>{\n    return new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n};\nconst globalWithPrisma = global;\nconst prisma = globalWithPrisma.prismaGlobal || prismaClientSingleton();\nif (true) {\n    globalWithPrisma.prismaGlobal = prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9wcmlzbWEvY2xpZW50LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFFOUMsTUFBTUMsd0JBQXdCO0lBQzVCLE9BQU8sSUFBSUQsd0RBQVlBO0FBQ3pCO0FBRUEsTUFBTUUsbUJBQW1CQztBQUV6QixNQUFNQyxTQUFTRixpQkFBaUJHLFlBQVksSUFBSUo7QUFFaEQsSUFBSUssSUFBeUIsRUFBYztJQUN6Q0osaUJBQWlCRyxZQUFZLEdBQUdEO0FBQ2xDO0FBRUEsaUVBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC13ZWIvLi9wcmlzbWEvY2xpZW50LmpzeD9mOWNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuXHJcbmNvbnN0IHByaXNtYUNsaWVudFNpbmdsZXRvbiA9ICgpID0+IHtcclxuICByZXR1cm4gbmV3IFByaXNtYUNsaWVudCgpO1xyXG59O1xyXG5cclxuY29uc3QgZ2xvYmFsV2l0aFByaXNtYSA9IGdsb2JhbDtcclxuXHJcbmNvbnN0IHByaXNtYSA9IGdsb2JhbFdpdGhQcmlzbWEucHJpc21hR2xvYmFsIHx8IHByaXNtYUNsaWVudFNpbmdsZXRvbigpO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICBnbG9iYWxXaXRoUHJpc21hLnByaXNtYUdsb2JhbCA9IHByaXNtYTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJpc21hO1xyXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hQ2xpZW50U2luZ2xldG9uIiwiZ2xvYmFsV2l0aFByaXNtYSIsImdsb2JhbCIsInByaXNtYSIsInByaXNtYUdsb2JhbCIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./prisma/client.jsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftasks%2Froute&page=%2Fapi%2Ftasks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2Froute.jsx&appDir=C%3A%5CUsers%5CAbdu%5CDocuments%5CAbdu_Projects%5Ctodolist-web%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAbdu%5CDocuments%5CAbdu_Projects%5Ctodolist-web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();