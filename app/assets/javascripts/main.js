'use strict';

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