'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/helpers/redux/provider.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reduxSaga = require('redux-saga');

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _sagas = require('../../redux/sagas');

var _sagas2 = _interopRequireDefault(_sagas);

var _reducers = require('../../redux/reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ReduxProvider(_ref) {
  var story = _ref.story;

  var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
  var sagaMiddleware = (0, _reduxSaga2.default)();
  var newStore = (0, _redux.createStore)(_reducers2.default, composeEnhancers((0, _redux.applyMiddleware)(sagaMiddleware)));
  var state = newStore.getState();

  sagaMiddleware.run(_sagas2.default);

  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: newStore, state: state, __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    },
    story
  );
}

ReduxProvider.propTypes = {
  story: _propTypes2.default.object.isRequired
};

exports.default = ReduxProvider;