'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/containers/TripMap/TripMap.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _polylineEncoded = require('polyline-encoded');

var _polylineEncoded2 = _interopRequireDefault(_polylineEncoded);

var _es = require('react-leaflet/es');

var _utils = require('utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_ZOOM = 15;

function TripMap(_ref) {
  var encodedPath = _ref.encodedPath,
      additionalMarkers = _ref.additionalMarkers;

  var latlngs = _polylineEncoded2.default.decode(encodedPath);
  var position = latlngs[Math.round(latlngs.length / 2)];
  var polyline = [latlngs];

  return _react2.default.createElement(
    _es.Map,
    { center: position, bounds: latlngs, zoom: DEFAULT_ZOOM, animate: true, __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    },
    _react2.default.createElement(_es.TileLayer, { url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }),
    _react2.default.createElement(_es.Polyline, { color: _utils.colors.pictonBlue, positions: polyline, __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    }),
    _react2.default.createElement(_es.Marker, { key: 'poi-trip-start', position: latlngs[0], __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    }),
    additionalMarkers.map(function (point, index) {
      return _react2.default.createElement(_es.Marker, { key: 'poi-' + index, position: [point.LT, point.LN], __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      });
    }),
    _react2.default.createElement(_es.Marker, { key: 'poi-trip-end', position: latlngs[latlngs.length - 1], __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      }
    })
  );
}

TripMap.propTypes = {
  encodedPath: _propTypes2.default.string,
  additionalMarkers: _propTypes2.default.array
};

exports.default = TripMap;