'use strict';

require('angular/angular.min');
require('angular-ui-router/build/angular-ui-router.min');

angular.module('MSAAgency.controllers', []);
angular.module('MSAAgency.services', []);
angular.module('MSAAgency.directives', []);
angular.module('MSAAgency.filters', []);

angular.module('MSAAgency', [
  'MSAAgency.controllers',
  'MSAAgency.services',
  'MSAAgency.directives',
  'MSAAgency.filters',
  'ui.router'
]);

// Configuration
require('./angular/config');
require('./angular/routes');

// Controllers
require('./angular/controllers/AppController');

// Directives
require('./angular/directives/main-header');
require('./angular/directives/main-footer');
require('./angular/directives/social-icons');

// Filters

// Services