// Angular configuration

// @ngInject
angular.module('MSAAgency')
.config(function($locationProvider) {
    // use the HTML5 History API
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
})
.run(($rootScope, smoothScroll) => {
    // Scroll to top on route change
    $rootScope.$on('$stateChangeSuccess', () => {
        smoothScroll('body');
    });
});
