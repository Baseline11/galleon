'use strict';

/* eslint no-unused-vars: 0 */

/**
 * Basic Transform plugin function used by Jest CLI
 */
var path = require('path');

module.exports = {
  process: function process(src, filename, config, options) {
    return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';';
  }
};