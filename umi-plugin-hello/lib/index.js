"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = function _default(api) {
  api.modifyHTML(function ($) {
    $("body").prepend("<h1>hello umi plugin</h1>");
    return $;
  });
};
exports["default"] = _default;