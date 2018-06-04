'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var NAVIGATION_OPEN = exports.NAVIGATION_OPEN = 'NAVIGATION/OPEN';
var NAVIGATION_CLOSE = exports.NAVIGATION_CLOSE = 'NAVIGATION/CLOSE';

var APP_MESSAGE_SHOW = exports.APP_MESSAGE_SHOW = 'APP/MESSAGE_SHOW';
var APP_MESSAGE_HIDE = exports.APP_MESSAGE_HIDE = 'APP/MESSAGE_HIDE';

var NAVIGATION_FETCH = exports.NAVIGATION_FETCH = 'NAVIGATION/FETCH';
var NAVIGATION_FETCH_SUCCESS = exports.NAVIGATION_FETCH_SUCCESS = 'NAVIGATION/FETCH_SUCCESS';
var NAVIGATION_FETCH_FAILURE = exports.NAVIGATION_FETCH_FAILURE = 'NAVIGATION/FETCH_FAILURE';

var ADMINUSER_FETCH = exports.ADMINUSER_FETCH = 'ADMINUSER/FETCH';
var ADMINUSER_FETCH_SUCCESS = exports.ADMINUSER_FETCH_SUCCESS = 'ADMINUSER/FETCH_SUCCESS';
var ADMINUSER_FETCH_FAILURE = exports.ADMINUSER_FETCH_FAILURE = 'ADMINUSER/FETCH_FAILURE';
var ADMINUSER_SAVE = exports.ADMINUSER_SAVE = 'ADMINUSER/SAVE';
var ADMINUSER_SAVE_SUCCESS = exports.ADMINUSER_SAVE_SUCCESS = 'ADMINUSER/SAVE_SUCCESS';
var ADMINUSER_SAVE_FAILURE = exports.ADMINUSER_SAVE_FAILURE = 'ADMINUSER/SAVE_FAILURE';
var ADMINUSER_UPDATE_STATUS = exports.ADMINUSER_UPDATE_STATUS = 'ADMINUSER/UPDATE_STATUS';
var ADMINUSER_UPDATE_STATUS_SUCCESS = exports.ADMINUSER_UPDATE_STATUS_SUCCESS = 'ADMINUSER/UPDATE_STATUS_SUCCESS';
var ADMINUSER_UPDATE_STATUS_FAILURE = exports.ADMINUSER_UPDATE_STATUS_FAILURE = 'ADMINUSER/UPDATE_STATUS_FAILURE';
var ADMINUSER_REINVITE = exports.ADMINUSER_REINVITE = 'ADMINUSER/REINVITE';
var ADMINUSER_REINVITE_SUCCESS = exports.ADMINUSER_REINVITE_SUCCESS = 'ADMINUSER/REINVITE_SUCCESS';
var ADMINUSER_REINVITE_FAILURE = exports.ADMINUSER_REINVITE_FAILURE = 'ADMINUSER/REINVITE_FAILURE';
var ADMINUSER_FETCH_INVITATION_TEXT = exports.ADMINUSER_FETCH_INVITATION_TEXT = 'ADMINUSER/FETCH_INVITATION_TEXT';
var ADMINUSER_FETCH_INVITATION_TEXT_SUCCESS = exports.ADMINUSER_FETCH_INVITATION_TEXT_SUCCESS = 'ADMINUSER/FETCH_INVITATION_TEXT_SUCCESS';
var ADMINUSER_FETCH_INVITATION_TEXT_FAILURE = exports.ADMINUSER_FETCH_INVITATION_TEXT_FAILURE = 'ADMINUSER/FETCH_INVITATION_TEXT_FAILURE';

var ACTIVATE_ADMIN_ROLE = exports.ACTIVATE_ADMIN_ROLE = 'USERROLES/ACTIVATE_ADMIN_ROLE';
var DEACTIVATE_ADMIN_ROLE = exports.DEACTIVATE_ADMIN_ROLE = 'USERROLES/DEACTIVATE_ADMIN_ROLE';
var SELECT_USER_ROLE = exports.SELECT_USER_ROLE = 'USERROLES/SELECT_USER_ROLE';
var UNSELECT_USER_ROLE = exports.UNSELECT_USER_ROLE = 'USERROLES/UNSELECT_USER_ROLE';

var ADMINUSERS_FETCH = exports.ADMINUSERS_FETCH = 'ADMINUSERS/FETCH';
var ADMINUSERS_FETCH_SUCCESS = exports.ADMINUSERS_FETCH_SUCCESS = 'ADMINUSERS/FETCH_SUCCESS';
var ADMINUSERS_FETCH_FAILURE = exports.ADMINUSERS_FETCH_FAILURE = 'ADMINUSERS/FETCH_FAILURE';
var ADMINUSERS_SORT = exports.ADMINUSERS_SORT = 'ADMINUSERS/SORT';
var ADMINUSERS_UPDATE_FILTER = exports.ADMINUSERS_UPDATE_FILTER = 'ADMINUSERS/UPDATE_FILTER';

var PASSWORD_SAVE = exports.PASSWORD_SAVE = 'PASSWORD/SAVE';
var PASSWORD_SAVE_SUCCESS = exports.PASSWORD_SAVE_SUCCESS = 'PASSWORD/SAVE_SUCCESS';
var PASSWORD_SAVE_FAILURE = exports.PASSWORD_SAVE_FAILURE = 'PASSWORD/SAVE_FAILURE';
var PASSWORD_TOGGLE_VISIBILITY = exports.PASSWORD_TOGGLE_VISIBILITY = 'PASSWORD/TOGGLE_VISIBILITY';
var PASSWORD_SET_USER_INFO = exports.PASSWORD_SET_USER_INFO = 'PASSWORD/SET_USER_INFO';

var REQUEST_RESET_PASSWORD = exports.REQUEST_RESET_PASSWORD = 'REQUEST/RESET_PASSWORD';
var REQUEST_RESET_PASSWORD_SUCCESS = exports.REQUEST_RESET_PASSWORD_SUCCESS = 'REQUEST/RESET_PASSWORD_SUCCESS';
var REQUEST_RESET_PASSWORD_FAILURE = exports.REQUEST_RESET_PASSWORD_FAILURE = 'REQUEST/RESET_PASSWORD_FAILURE';

var COMMUNICATIONS_FETCH = exports.COMMUNICATIONS_FETCH = 'COMMUNICATIONS/FETCH';
var COMMUNICATIONS_FETCH_SUCCESS = exports.COMMUNICATIONS_FETCH_SUCCESS = 'COMMUNICATIONS/FETCH_SUCCESS';
var COMMUNICATIONS_FETCH_FAILURE = exports.COMMUNICATIONS_FETCH_FAILURE = 'COMMUNICATIONS/FETCH_FAILURE';
var COMMUNICATIONS_SORT = exports.COMMUNICATIONS_SORT = 'COMMUNICATIONS/SORT';

var TRIPHISTORY_FETCH = exports.TRIPHISTORY_FETCH = 'TRIP_HISTORY/FETCH';
var TRIPHISTORY_FETCH_SUCCESS = exports.TRIPHISTORY_FETCH_SUCCESS = 'TRIP_HISTORY/FETCH_SUCCESS';
var TRIPHISTORY_FETCH_FAILURE = exports.TRIPHISTORY_FETCH_FAILURE = 'TRIP_HISTORY/FETCH_FAILURE';
var TRIPHISTORY_SORT = exports.TRIPHISTORY_SORT = 'TRIP_HISTORY/SORT';
var TRIPHISTORY_SET_LIMIT = exports.TRIPHISTORY_SET_LIMIT = 'TRIP_HISTORY/SET_LIMIT';
var TRIPHISTORY_SET_OFFSET = exports.TRIPHISTORY_SET_OFFSET = 'TRIPHISTORY/SET_OFFSET';

var POLICY_FETCH = exports.POLICY_FETCH = 'POLICY/FETCH';
var POLICY_FETCH_SUCCESS = exports.POLICY_FETCH_SUCCESS = 'POLICY/FETCH_SUCCESS';
var POLICY_FETCH_FAILURE = exports.POLICY_FETCH_FAILURE = 'POLICY/FETCH_FAILURE';
var POLICY_SORT = exports.POLICY_SORT = 'POLICY/SORT';

var USER_INFO_FETCH = exports.USER_INFO_FETCH = 'USER_INFO/FETCH';
var USER_INFO_FETCH_SUCCESS = exports.USER_INFO_FETCH_SUCCESS = 'USER_INFO/FETCH_SUCCESS';
var USER_INFO_FETCH_FAILURE = exports.USER_INFO_FETCH_FAILURE = 'USER_INFO/FETCH_FAILURE';

var USER_DELETE_PICTURE = exports.USER_DELETE_PICTURE = 'USER/DELETE_PICTURE';
var USER_DELETE_PICTURE_SUCCESS = exports.USER_DELETE_PICTURE_SUCCESS = 'USER/DELETE_PICTURE_SUCCESS';
var USER_DELETE_PICTURE_FAILURE = exports.USER_DELETE_PICTURE_FAILURE = 'USER/DELETE_PICTURE_FAILURE';

var NOTES_FETCH = exports.NOTES_FETCH = 'NOTES/FETCH';
var NOTES_FETCH_SUCCESS = exports.NOTES_FETCH_SUCCESS = 'NOTES/FETCH_SUCCESS';
var NOTES_FETCH_FAILURE = exports.NOTES_FETCH_FAILURE = 'NOTES/FETCH_FAILURE';

var SAVE_USER_NOTE = exports.SAVE_USER_NOTE = 'USER/SAVE_NOTE';
var SAVE_USER_NOTE_SUCCESS = exports.SAVE_USER_NOTE_SUCCESS = 'USER/SAVE_NOTE_SUCCESS';
var SAVE_USER_NOTE_FAILURE = exports.SAVE_USER_NOTE_FAILURE = 'USER/SAVE_NOTE_FAILURE';

var USERS_FETCH = exports.USERS_FETCH = 'USERS/FETCH';
var USERS_FETCH_SUCCESS = exports.USERS_FETCH_SUCCESS = 'USERS/FETCH_SUCCESS';
var USERS_FETCH_FAILURE = exports.USERS_FETCH_FAILURE = 'USERS/FETCH_FAILURE';
var USERS_SORT = exports.USERS_SORT = 'USERS/SORT';