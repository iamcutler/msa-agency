// Angular routes

angular.module('MSAAgency')
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('splash', {
            url: '/',
            templateUrl: 'templates/splash.html',
            controller: 'SplashController as SplashCtrl'
        })
        .state('app', {
            url: '/',
            templateUrl: 'templates/app.html'
        })
        // Home
        .state('app.home', {
            templateUrl: 'templates/home.html',
            controller: 'HomeController as HomeCtrl',
            abstract: true
        })
            // Los Angeles
            .state('app.home.los-angeles', {
                url: 'los-angeles'
            })
            .state('app.home.new-york', {
                url: 'new-york'
            })
        // Search
        .state('app.search', {
            url: 'search/:q',
            templateUrl: 'templates/search.html',
            controller: 'SearchController as SearchCtrl'
        })
        // About
        .state('app.about', {
            url: 'about',
            controller: 'AboutController as AboutCtrl',
            templateUrl: 'templates/about.html'
        })
        .state('app.staff', {
            url: 'about/staff',
            controller: 'AboutController as AboutCtrl',
            templateUrl: 'templates/about.html'
        })
        // Talent
        .state('app.talent', {
            url: 'talent',
            template: '<ui-view></ui-view>',
            abstract: true
        })
            .state('app.talent.category', {
                url: '/category/:category',
                controller: 'TalentCategoryController as TalentCategoryCtrl',
                templateUrl: 'templates/talent-category.html'
            })
            .state('app.talent.page', {
                url: '/:slug',
                controller: 'TalentController as TalentCtrl',
                templateUrl: 'templates/talent.html'
            })
        // Contact
        .state('app.contact', {
            url: 'contact',
            controller: 'ContactController as ContactCtrl',
            templateUrl: 'templates/contact.html'
        });
});
