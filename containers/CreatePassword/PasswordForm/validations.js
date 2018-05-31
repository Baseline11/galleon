"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (values) {
  var errors = {
    passwordUpperCaseChar: false,
    passwordLowerCaseChar: false,
    passwordSpecialChar: false,
    passwordLength: false,
    passwordMatches: false
  };

  if (!/([A-Z]+)/g.test(values.password)) {
    errors.passwordUpperCaseChar = true;
  }

  if (!/([a-z]+)/g.test(values.password)) {
    errors.passwordLowerCaseChar = true;
  }

  if (!/[^a-zA-Z]/.test(values.password)) {
    errors.passwordSpecialChar = true;
  }

  if (values.password.length < 12) {
    errors.passwordLength = true;
  }

  if (values.password.length && values.confirmPassword !== values.password) {
    errors.passwordMatches = true;
  }

  return errors;
};