"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(source) {
  return function (type, sink) {
    if (type !== 0) return;
    source(0, function (t, d) {
      if (t !== 1) return sink(t, d);
    });
  };
};

exports["default"] = _default;