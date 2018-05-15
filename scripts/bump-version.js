'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable no-console */

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sourcePath = '../..';

function bumpPackageVersion() {
  return new Promise(function (resolve) {
    _fsExtra2.default.readFile(_path2.default.resolve(__dirname, sourcePath + '/package.json'), 'utf8', function (err, data) {
      if (err) {
        throw err;
      }

      resolve(data);
    });
  }).then(function (data) {
    return JSON.parse(data);
  }).then(function (packageData) {
    if (process.argv[2]) {
      var updatedPackage = _extends({}, packageData, {
        version: process.argv[2]
      });

      return new Promise(function (resolve) {
        var buildPath = _path2.default.resolve(__dirname, sourcePath + '/package.json');
        var data = JSON.stringify(updatedPackage, null, 2);

        _fsExtra2.default.writeFile(buildPath, data, function (err) {
          if (err) throw err;
          console.log('Updated package.json version');
          resolve();
        });
      });
    }

    console.log('Could not update package.json version');

    return false;
  });
}

Promise.resolve(bumpPackageVersion());