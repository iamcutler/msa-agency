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
import AppController from './angular/controllers/App';
import NavigationController from './angular/controllers/Navigation';
import SearchController from './angular/controllers/Search';

angular.module('MSAAgency.controllers', [])
    .controller('AppController', AppController)
    .controller('NavigationController', NavigationController)
    .controller('SearchController', SearchController);

// Services
angular.module('MSAAgency.services', []);

// Directives
import Navigation from './angular/directives/Navigation';
import ToggleNavigation from './angular/directives/ToggleNavigation';

angular.module('MSAAgency.directives', [])
    .directive('navigation', Navigation)
    .directive('toggleNavigation', ToggleNavigation);

require('./angular/directives/MainHeader');
require('./angular/directives/MainFooter');
require('./angular/directives/SocialIcons');

// Filters
angular.module('MSAAgency.filters', []);
