"use strict";
(() => {
var exports = {};
exports.id = 565;
exports.ids = [565];
exports.modules = {

/***/ 837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ generate)
});

;// CONCATENATED MODULE: external "openai"
const external_openai_namespaceObject = require("openai");
;// CONCATENATED MODULE: ./pages/api/generate.js

const configuration = new external_openai_namespaceObject.Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new external_openai_namespaceObject.OpenAIApi(configuration);
/* harmony default export */ async function generate(req, res) {
  const completion = await openai.createCompletion("text-curie-001", {
    prompt: generatePrompt(req.body.prompt),
    temperature: 0.8,
    max_tokens: 60,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0
  });
  res.status(200).json({
    result: completion.data.choices[0].text
  });
}

function generatePrompt(prompt) {
  const capitalizedPromot = prompt[0].toUpperCase() + prompt.slice(1).toLowerCase();
  return `Create a story about the entered topic.

Topic: Breakfast
Story: He always stops crying when I pour the milk on his cereal. I just have to remember not to let him see his face on the carton.
Topic: Wind
Story: The wind always seems to howl around my house at night. I can't help but feel like it's looking for a way inside.
Topic: ${capitalizedPromot}
Story:`;
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(837));
module.exports = __webpack_exports__;

})();