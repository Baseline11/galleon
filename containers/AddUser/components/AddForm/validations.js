'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (values) {
  var errors = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 50) {
    errors.firstName = 'Must be 50 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 50) {
    errors.lastName = 'Must be 50 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.emailContent) {
    errors.emailContent = 'Required';
  }

  if (!values.roles.length) {
    errors.roles = 'At least one role must be assigned';
  }

  return errors;
};