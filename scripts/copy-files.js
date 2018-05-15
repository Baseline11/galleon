'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */

var files = ['src/index.js'];

function copyFile(file) {
  var buildPath = _path2.default.resolve(__dirname, '../../lib/', _path2.default.basename(file));

  return new Promise(function (resolve) {
    _fsExtra2.default.copy(file, buildPath, function (err) {
      if (err) throw err;
      resolve();
    });
  }).then(function () {
    return console.log('Copied ' + file + ' to ' + buildPath);
  });
}

function createPackageFile() {
  return new Promise(function (resolve) {
    _fsExtra2.default.readFile(_path2.default.resolve(__dirname, '../../package.json'), 'utf8', function (err, data) {
      if (err) {
        throw err;
      }

      resolve(data);
    });
  }).then(function (data) {
    return JSON.parse(data);
  }).then(function (packageData) {
    var name = packageData.name,
        version = packageData.version,
        author = packageData.author,
        license = packageData.license,
        description = packageData.description,
        peerDependencies = packageData.peerDependencies;


    var minimalPackage = {
      name: name,
      version: version,
      author: author,
      license: license,
      description: description,
      peerDependencies: peerDependencies,
      main: './index.js',
      module: './index.js',
      private: true
    };

    return new Promise(function (resolve) {
      var buildPath = _path2.default.resolve(__dirname, '../../lib/package.json');
      var data = JSON.stringify(minimalPackage, null, 2);
      _fsExtra2.default.writeFile(buildPath, data, function (err) {
        if (err) throw err;
        console.log('Created package.json in ' + buildPath);
        resolve();
      });
    });
  });
}

Promise.all(files.map(function (file) {
  return copyFile(file);
})).then(function () {
  return createPackageFile();
});