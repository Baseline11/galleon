'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'src/components/SvgIcon/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _laelia = require('laelia');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SvgIcon = function (_Component) {
  _inherits(SvgIcon, _Component);

  function SvgIcon() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SvgIcon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SvgIcon.__proto__ || Object.getPrototypeOf(SvgIcon)).call.apply(_ref, [this].concat(args))), _this), _this.icons = {
      workplace: _laelia.IconWorkplace,
      person: _laelia.IconPerson,
      basedrive: _laelia.IconBasedrive,
      help: _laelia.IconHelp,
      reports: _laelia.IconReports,
      settings: _laelia.IconSettings,
      triggers: _laelia.IconTriggers,
      commandCenter: _laelia.IconCommandCenter,
      deploymentProcess: _laelia.IconDeploymentProcess,
      faq: _laelia.IconFaq,
      futureReleases: _laelia.IconFutureReleases,
      ideasSuggestions: _laelia.IconIdeasSuggestions,
      meetUp: _laelia.IconMeetUp,
      supportTickets: _laelia.IconSupportTickets,
      systemUsage: _laelia.IconSystemUsage,
      training: _laelia.IconTraining,
      university: _laelia.IconUniversity,
      userForum: _laelia.IconUserForum,
      whatsNew: _laelia.IconWhatsNew,
      externalLink: _laelia.IconExternalLink,
      apiGuide: _laelia.IconApiGuide
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SvgIcon, [{
    key: 'render',
    value: function render() {
      var Icon = this.icons[this.props.icon];

      return _react2.default.createElement(Icon, _extends({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }));
    }
  }]);

  return SvgIcon;
}(_react.Component);

SvgIcon.propTypes = {
  icon: _propTypes2.default.string.isRequired
};

exports.default = SvgIcon;