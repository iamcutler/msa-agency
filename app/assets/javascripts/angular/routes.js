// Angular routes

angular.module('MSAAgency')
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    // Default page if no routes are found
    $urlRouterProvider.otherwise("/");

    // Enable HTML5 push state
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    // Routes
    $stateProvider
        .state('app', {
            url: '/',
            templateUrl: 'templates/app.html'
        })
        .state('app.search', {
            url: 'search/:q',
            templateUrl: 'templates/search.html',
            controller: 'SearchController as SearchCtrl'
        });
});
