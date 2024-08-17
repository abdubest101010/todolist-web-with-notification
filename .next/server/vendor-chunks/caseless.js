/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/caseless";
exports.ids = ["vendor-chunks/caseless"];
exports.modules = {

/***/ "(rsc)/./node_modules/caseless/index.js":
/*!****************************************!*\
  !*** ./node_modules/caseless/index.js ***!
  \****************************************/
/***/ ((module) => {

eval("function Caseless (dict) {\n  this.dict = dict || {}\n}\nCaseless.prototype.set = function (name, value, clobber) {\n  if (typeof name === 'object') {\n    for (var i in name) {\n      this.set(i, name[i], value)\n    }\n  } else {\n    if (typeof clobber === 'undefined') clobber = true\n    var has = this.has(name)\n\n    if (!clobber && has) this.dict[has] = this.dict[has] + ',' + value\n    else this.dict[has || name] = value\n    return has\n  }\n}\nCaseless.prototype.has = function (name) {\n  var keys = Object.keys(this.dict)\n    , name = name.toLowerCase()\n    ;\n  for (var i=0;i<keys.length;i++) {\n    if (keys[i].toLowerCase() === name) return keys[i]\n  }\n  return false\n}\nCaseless.prototype.get = function (name) {\n  name = name.toLowerCase()\n  var result, _key\n  var headers = this.dict\n  Object.keys(headers).forEach(function (key) {\n    _key = key.toLowerCase()\n    if (name === _key) result = headers[key]\n  })\n  return result\n}\nCaseless.prototype.swap = function (name) {\n  var has = this.has(name)\n  if (has === name) return\n  if (!has) throw new Error('There is no header than matches \"'+name+'\"')\n  this.dict[name] = this.dict[has]\n  delete this.dict[has]\n}\nCaseless.prototype.del = function (name) {\n  var has = this.has(name)\n  return delete this.dict[has || name]\n}\n\nmodule.exports = function (dict) {return new Caseless(dict)}\nmodule.exports.httpify = function (resp, headers) {\n  var c = new Caseless(headers)\n  resp.setHeader = function (key, value, clobber) {\n    if (typeof value === 'undefined') return\n    return c.set(key, value, clobber)\n  }\n  resp.hasHeader = function (key) {\n    return c.has(key)\n  }\n  resp.getHeader = function (key) {\n    return c.get(key)\n  }\n  resp.removeHeader = function (key) {\n    return c.del(key)\n  }\n  resp.headers = c.dict\n  return c\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvY2FzZWxlc3MvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsY0FBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtDQUFrQztBQUNsQyxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0LXdlYi8uL25vZGVfbW9kdWxlcy9jYXNlbGVzcy9pbmRleC5qcz9lN2M1Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIENhc2VsZXNzIChkaWN0KSB7XG4gIHRoaXMuZGljdCA9IGRpY3QgfHwge31cbn1cbkNhc2VsZXNzLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIGNsb2JiZXIpIHtcbiAgaWYgKHR5cGVvZiBuYW1lID09PSAnb2JqZWN0Jykge1xuICAgIGZvciAodmFyIGkgaW4gbmFtZSkge1xuICAgICAgdGhpcy5zZXQoaSwgbmFtZVtpXSwgdmFsdWUpXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgY2xvYmJlciA9PT0gJ3VuZGVmaW5lZCcpIGNsb2JiZXIgPSB0cnVlXG4gICAgdmFyIGhhcyA9IHRoaXMuaGFzKG5hbWUpXG5cbiAgICBpZiAoIWNsb2JiZXIgJiYgaGFzKSB0aGlzLmRpY3RbaGFzXSA9IHRoaXMuZGljdFtoYXNdICsgJywnICsgdmFsdWVcbiAgICBlbHNlIHRoaXMuZGljdFtoYXMgfHwgbmFtZV0gPSB2YWx1ZVxuICAgIHJldHVybiBoYXNcbiAgfVxufVxuQ2FzZWxlc3MucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5kaWN0KVxuICAgICwgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKVxuICAgIDtcbiAgZm9yICh2YXIgaT0wO2k8a2V5cy5sZW5ndGg7aSsrKSB7XG4gICAgaWYgKGtleXNbaV0udG9Mb3dlckNhc2UoKSA9PT0gbmFtZSkgcmV0dXJuIGtleXNbaV1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cbkNhc2VsZXNzLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAobmFtZSkge1xuICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpXG4gIHZhciByZXN1bHQsIF9rZXlcbiAgdmFyIGhlYWRlcnMgPSB0aGlzLmRpY3RcbiAgT2JqZWN0LmtleXMoaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgX2tleSA9IGtleS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKG5hbWUgPT09IF9rZXkpIHJlc3VsdCA9IGhlYWRlcnNba2V5XVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5DYXNlbGVzcy5wcm90b3R5cGUuc3dhcCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciBoYXMgPSB0aGlzLmhhcyhuYW1lKVxuICBpZiAoaGFzID09PSBuYW1lKSByZXR1cm5cbiAgaWYgKCFoYXMpIHRocm93IG5ldyBFcnJvcignVGhlcmUgaXMgbm8gaGVhZGVyIHRoYW4gbWF0Y2hlcyBcIicrbmFtZSsnXCInKVxuICB0aGlzLmRpY3RbbmFtZV0gPSB0aGlzLmRpY3RbaGFzXVxuICBkZWxldGUgdGhpcy5kaWN0W2hhc11cbn1cbkNhc2VsZXNzLnByb3RvdHlwZS5kZWwgPSBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgaGFzID0gdGhpcy5oYXMobmFtZSlcbiAgcmV0dXJuIGRlbGV0ZSB0aGlzLmRpY3RbaGFzIHx8IG5hbWVdXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRpY3QpIHtyZXR1cm4gbmV3IENhc2VsZXNzKGRpY3QpfVxubW9kdWxlLmV4cG9ydHMuaHR0cGlmeSA9IGZ1bmN0aW9uIChyZXNwLCBoZWFkZXJzKSB7XG4gIHZhciBjID0gbmV3IENhc2VsZXNzKGhlYWRlcnMpXG4gIHJlc3Auc2V0SGVhZGVyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUsIGNsb2JiZXIpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gICAgcmV0dXJuIGMuc2V0KGtleSwgdmFsdWUsIGNsb2JiZXIpXG4gIH1cbiAgcmVzcC5oYXNIZWFkZXIgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGMuaGFzKGtleSlcbiAgfVxuICByZXNwLmdldEhlYWRlciA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gYy5nZXQoa2V5KVxuICB9XG4gIHJlc3AucmVtb3ZlSGVhZGVyID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBjLmRlbChrZXkpXG4gIH1cbiAgcmVzcC5oZWFkZXJzID0gYy5kaWN0XG4gIHJldHVybiBjXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/caseless/index.js\n");

/***/ })

};
;