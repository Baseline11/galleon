'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

/**
 * Creates an easy to use interface to reduce boilerplate.
 * Inspired by these suggestions: https://github.com/reactjs/redux/blob/master/docs/recipes/ReducingBoilerplate.md
 *
 * @method Reducer
 * @param initialState {Object} The initial state of the reducer.
 * @param cases {Object} The cases the reducer should handle.
 * @constructor
 */
function Reducer() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var cases = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!(0, _lodash.isPlainObject)(initialState)) throw new Error('Reducer Init - A reducer initial state MUST be an object. Received: ' + initialState);
  if (!(0, _lodash.isPlainObject)(cases)) throw new Error('Reducer Init - Reducer\'s cases MUST be an object. Received: ' + cases);

  this.initialState = initialState;
  this.cases = cases;
}

/**
 * Thunk that exports the reducer to be passed to Redux.
 *
 * @method bindReducer
 * @returns {function(Object, Object)}
 */
Reducer.prototype.bindReducer = function bindReducer() {
  var _this = this;

  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.initialState;
    var action = arguments[1];

    if (!(0, _lodash.isPlainObject)(state)) throw new Error('Reducer Runtime - State must be a plain object.');

    if ((0, _lodash.isUndefined)(action)) {
      throw new Error('Reducer Runtime - No action provided.');
    } else if (!(0, _lodash.isPlainObject)(action)) {
      throw new Error('Reducer Runtime - Action must be a plain object.');
    } else if (!action.type) {
      throw new Error('Reducer Runtime - No action type provided.');
    }

    for (var i in _this.cases) {
      if (_this.cases.hasOwnProperty(i) && action.type === i) {
        return _this.cases[i](state, action);
      }
    }

    return state;
  };
};

/**
 * Creates a synchronous action to be dispatched in Redux.
 *
 * @method createAction
 * @param type {String} The type of the action.
 * @returns {function(Object): {type: String, payload: Object}}
 */
Reducer.prototype.createAction = function createAction(type) {
  if (!(0, _lodash.isString)(type)) throw new Error('Reducer Action Creator - Type must be a string.');

  return function () {
    var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    return {
      type: type,
      payload: payload
    };
  };
};

exports.default = Reducer;