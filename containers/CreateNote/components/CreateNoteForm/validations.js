'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (values) {
  var errors = {};

  if (!values.note) {
    errors.note = 'Required';
  }

  return errors;
};