"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (collection, key, value) {
  return collection.filter(function (item) {
    return item[key] === value;
  });
};