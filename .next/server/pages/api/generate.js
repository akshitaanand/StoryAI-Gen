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
exports.id = "pages/api/generate";
exports.ids = ["pages/api/generate"];
exports.modules = {

/***/ "./pages/api/generate.js":
/*!*******************************!*\
  !*** ./pages/api/generate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n  apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  const completion = await openai.createCompletion(\"text-curie-001\", {\n    prompt: generatePrompt(req.body.prompt),\n    temperature: 0.8,\n    max_tokens: 60,\n    top_p: 1,\n    frequency_penalty: 0.5,\n    presence_penalty: 0\n  });\n  res.status(200).json({\n    result: completion.data.choices[0].text\n  });\n}\n\nfunction generatePrompt(prompt) {\n  const capitalizedPromot = prompt[0].toUpperCase() + prompt.slice(1).toLowerCase();\n  return `Create a story about the entered topic.\n\nTopic: Breakfast\nStory: He always stops crying when I pour the milk on his cereal. I just have to remember not to let him see his face on the carton.\nTopic: Wind\nStory: The wind always seems to howl around my house at night. I can't help but feel like it's looking for a way inside.\nTopic: ${capitalizedPromot}\nStory:`;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQSxNQUFNRSxhQUFhLEdBQUcsSUFBSUYsaURBQUosQ0FBa0I7QUFDdENHLEVBQUFBLE1BQU0sRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDO0FBRGtCLENBQWxCLENBQXRCO0FBR0EsTUFBTUMsTUFBTSxHQUFHLElBQUlOLDZDQUFKLENBQWNDLGFBQWQsQ0FBZjtBQUVBLDZCQUFlLDBDQUFnQk0sR0FBaEIsRUFBcUJDLEdBQXJCLEVBQTBCO0FBQ3ZDLFFBQU1DLFVBQVUsR0FBRyxNQUFNSCxNQUFNLENBQUNJLGdCQUFQLENBQXdCLGdCQUF4QixFQUEwQztBQUNqRUMsSUFBQUEsTUFBTSxFQUFFQyxjQUFjLENBQUNMLEdBQUcsQ0FBQ00sSUFBSixDQUFTRixNQUFWLENBRDJDO0FBRWpFRyxJQUFBQSxXQUFXLEVBQUUsR0FGb0Q7QUFHakVDLElBQUFBLFVBQVUsRUFBRSxFQUhxRDtBQUlqRUMsSUFBQUEsS0FBSyxFQUFFLENBSjBEO0FBS2pFQyxJQUFBQSxpQkFBaUIsRUFBRSxHQUw4QztBQU1qRUMsSUFBQUEsZ0JBQWdCLEVBQUU7QUFOK0MsR0FBMUMsQ0FBekI7QUFRQVYsRUFBQUEsR0FBRyxDQUFDVyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsSUFBQUEsTUFBTSxFQUFFWixVQUFVLENBQUNhLElBQVgsQ0FBZ0JDLE9BQWhCLENBQXdCLENBQXhCLEVBQTJCQztBQUFyQyxHQUFyQjtBQUNEOztBQUVELFNBQVNaLGNBQVQsQ0FBd0JELE1BQXhCLEVBQWdDO0FBQzlCLFFBQU1jLGlCQUFpQixHQUNyQmQsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVZSxXQUFWLEtBQTBCZixNQUFNLENBQUNnQixLQUFQLENBQWEsQ0FBYixFQUFnQkMsV0FBaEIsRUFENUI7QUFFQSxTQUFRO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVNILGlCQUFrQjtBQUMzQixPQVBFO0FBUUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TdG9yeUFJLy4vcGFnZXMvYXBpL2dlbmVyYXRlLmpzPzEzZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgT3BlbkFJQXBpIH0gZnJvbSBcIm9wZW5haVwiO1xuXG5jb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oe1xuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZLFxufSk7XG5jb25zdCBvcGVuYWkgPSBuZXcgT3BlbkFJQXBpKGNvbmZpZ3VyYXRpb24pO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgY29uc3QgY29tcGxldGlvbiA9IGF3YWl0IG9wZW5haS5jcmVhdGVDb21wbGV0aW9uKFwidGV4dC1jdXJpZS0wMDFcIiwge1xuICAgIHByb21wdDogZ2VuZXJhdGVQcm9tcHQocmVxLmJvZHkucHJvbXB0KSxcbiAgICB0ZW1wZXJhdHVyZTogMC44LFxuICAgIG1heF90b2tlbnM6IDYwLFxuICAgIHRvcF9wOiAxLFxuICAgIGZyZXF1ZW5jeV9wZW5hbHR5OiAwLjUsXG4gICAgcHJlc2VuY2VfcGVuYWx0eTogMCxcbiAgfSk7XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgcmVzdWx0OiBjb21wbGV0aW9uLmRhdGEuY2hvaWNlc1swXS50ZXh0IH0pO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVByb21wdChwcm9tcHQpIHtcbiAgY29uc3QgY2FwaXRhbGl6ZWRQcm9tb3QgPVxuICAgIHByb21wdFswXS50b1VwcGVyQ2FzZSgpICsgcHJvbXB0LnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiBgQ3JlYXRlIGEgc3RvcnkgYWJvdXQgdGhlIGVudGVyZWQgdG9waWMuXG5cblRvcGljOiBCcmVha2Zhc3RcblN0b3J5OiBIZSBhbHdheXMgc3RvcHMgY3J5aW5nIHdoZW4gSSBwb3VyIHRoZSBtaWxrIG9uIGhpcyBjZXJlYWwuIEkganVzdCBoYXZlIHRvIHJlbWVtYmVyIG5vdCB0byBsZXQgaGltIHNlZSBoaXMgZmFjZSBvbiB0aGUgY2FydG9uLlxuVG9waWM6IFdpbmRcblN0b3J5OiBUaGUgd2luZCBhbHdheXMgc2VlbXMgdG8gaG93bCBhcm91bmQgbXkgaG91c2UgYXQgbmlnaHQuIEkgY2FuJ3QgaGVscCBidXQgZmVlbCBsaWtlIGl0J3MgbG9va2luZyBmb3IgYSB3YXkgaW5zaWRlLlxuVG9waWM6ICR7Y2FwaXRhbGl6ZWRQcm9tb3R9XG5TdG9yeTpgO1xufVxuIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJPcGVuQUlBcGkiLCJjb25maWd1cmF0aW9uIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk9QRU5BSV9BUElfS0VZIiwib3BlbmFpIiwicmVxIiwicmVzIiwiY29tcGxldGlvbiIsImNyZWF0ZUNvbXBsZXRpb24iLCJwcm9tcHQiLCJnZW5lcmF0ZVByb21wdCIsImJvZHkiLCJ0ZW1wZXJhdHVyZSIsIm1heF90b2tlbnMiLCJ0b3BfcCIsImZyZXF1ZW5jeV9wZW5hbHR5IiwicHJlc2VuY2VfcGVuYWx0eSIsInN0YXR1cyIsImpzb24iLCJyZXN1bHQiLCJkYXRhIiwiY2hvaWNlcyIsInRleHQiLCJjYXBpdGFsaXplZFByb21vdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJ0b0xvd2VyQ2FzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/generate.js\n");

/***/ }),

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/generate.js"));
module.exports = __webpack_exports__;

})();