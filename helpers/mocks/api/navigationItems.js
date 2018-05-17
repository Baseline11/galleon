'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{
  type: 'link',
  label: 'workplace',
  icon: 'workplace',
  url: '/home'
}, {
  type: 'main',
  label: 'basedrive',
  icon: 'basedrive',
  children: [{
    type: 'link',
    label: 'app configuration',
    url: '/application/settings/edit'
  }, {
    type: 'link',
    label: 'drivescore',
    url: '/scoring/cohorts'
  }, {
    type: 'link',
    label: 'marketing lists',
    url: '/communications/marketinglists'
  }, {
    type: 'link',
    label: 'vin database',
    url: '/application/vehicle'
  }]
}, {
  type: 'main',
  label: 'reports',
  icon: 'reports',
  children: [{
    type: 'link',
    label: 'user invitations',
    url: '/application/userinvitations'
  }, {
    type: 'link',
    label: 'communication logs',
    url: '/communications'
  }, {
    type: 'link',
    label: 'trip stats',
    url: '/telemetry/trips/report'
  }, {
    type: 'link',
    label: 'policies',
    url: '/insurance/policies'
  }, {
    type: 'link',
    label: 'vehicles',
    url: '/insurance/vehicles'
  }, {
    type: 'link',
    label: 'road index',
    url: '/roads'
  }]
}, {
  type: 'link',
  label: 'triggers',
  icon: 'triggers',
  url: '/communications/templates'
}, {
  type: 'main',
  label: 'settings',
  icon: 'settings',
  children: [{
    type: 'link',
    label: 'users',
    url: '/adminusers'
  }, {
    type: 'link',
    label: 'e-mail gateway',
    url: '/communications/mailserverconfigs/view'
  }, {
    type: 'link',
    label: 'notifications',
    url: '/communications/notificationsettings'
  }]
}, {
  type: 'link',
  label: 'user guide',
  icon: 'help',
  url: '/userguide'
}];