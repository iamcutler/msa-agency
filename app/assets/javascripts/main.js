'use strict';

require('angular/angular.min');
require('angular-ui-router/build/angular-ui-router.min');

// AngularJS
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
import AppController from './angular/controllers/AppController';

angular.module('MSAAgency.controllers', [])
    .controller('AppController', AppController);

// Services
angular.module('MSAAgency.services', []);

// Directives
angular.module('MSAAgency.directives', []);
require('./angular/directives/main-header');
require('./angular/directives/main-footer');
require('./angular/directives/navigation');
require('./angular/directives/social-icons');

// Filters
angular.module('MSAAgency.filters', []);
