"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _formatText = _interopRequireDefault(require("./format-text"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = function _default(_ref) {
  var title = _ref.title,
    radius = _ref.radius;
  return "X-APPLE-RADIUS=".concat(radius, ";X-TITLE=").concat((0, _formatText["default"])(title));
};