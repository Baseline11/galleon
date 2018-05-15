'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var userId = _ref.userId,
      statusId = _ref.statusId,
      activateAction = _ref.activateAction,
      cancelAction = _ref.cancelAction,
      suspendAction = _ref.suspendAction,
      reinviteAction = _ref.reinviteAction;

  var actions = [];

  if (statusId === '1') {
    actions.push({
      text: 'Suspend',
      type: 'function',
      value: suspendAction
    });
  }

  if (statusId === '2' || statusId === '3') {
    actions.push({
      text: 'Re-Invite',
      type: 'function',
      value: reinviteAction
    }, {
      text: 'Cancel',
      type: 'function',
      value: cancelAction
    });
  }

  if (statusId === '5') {
    actions.push({
      text: 'Activate',
      type: 'function',
      value: activateAction
    });
  }

  if (statusId !== '1') {
    actions.push({
      text: 'Edit',
      type: 'url',
      value: '/admin_users/edit/' + userId
    });
  }

  return actions;
};