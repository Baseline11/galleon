'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/containers/UserGuide/UserGuide.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _laelia = require('laelia');

var _lodash = require('lodash');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _SvgIcon = require('components/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UserGuide(_ref) {
  var data = _ref.data,
      containerStyle = _ref.containerStyle,
      wrapperStyleOverride = _ref.wrapperStyleOverride,
      svgFillColor = _ref.svgFillColor;

  return _react2.default.createElement(
    'div',
    { style: containerStyle, __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    },
    (0, _lodash.sortBy)(data, 'order').map(function (d) {
      return _react2.default.createElement(
        _laelia.TileElement,
        { key: 'tile-' + d.order, wrapperStyleOverride: wrapperStyleOverride, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        _react2.default.createElement(
          'a',
          { style: _styles2.default.linkStyles, href: d.link, target: '_blank', __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          },
          _react2.default.createElement(
            'span',
            { style: _styles2.default.svgImageStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              }
            },
            _react2.default.createElement(_SvgIcon2.default, { icon: d.icon, fill: svgFillColor, width: 35, height: 35, __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              }
            })
          ),
          _react2.default.createElement(
            'h2',
            { style: _styles2.default.titleStyles, __source: {
                fileName: _jsxFileName,
                lineNumber: 18
              }
            },
            d.external ? _react2.default.createElement(_SvgIcon2.default, { icon: 'externalLink', fill: svgFillColor, width: 20, height: 20, __source: {
                fileName: _jsxFileName,
                lineNumber: 19
              }
            }) : '',
            d.name
          ),
          _react2.default.createElement(
            'p',
            { style: _styles2.default.textStyles, __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              }
            },
            d.description
          )
        )
      );
    })
  );
}

UserGuide.propTypes = {
  data: _propTypes2.default.array,
  containerStyle: _propTypes2.default.object,
  wrapperStyleOverride: _propTypes2.default.object,
  svgFillColor: _propTypes2.default.string
};

exports.default = UserGuide;