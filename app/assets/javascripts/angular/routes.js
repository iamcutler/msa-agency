// Angular routes

angular.module('MSAAgency')
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/error/404");

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
        .state('app.staff-page', {
            url: 'staff/:slug',
            controller: 'StaffController as StaffCtrl',
            templateUrl: 'templates/staff-page.html'
        })
        // Talent
        .state('app.talent', {
            url: 'talent',
            template: '<ui-view></ui-view>',
            abstract: true
        })
            .state('app.talent.category', {
                url: '/category/:category',
                controller: 'ClientCategoryController as ClientCategoryCtrl',
                templateUrl: 'templates/talent-category.html'
            })
            .state('app.talent.legacy', {
                url: '/legacy',
                controller: 'LegacyController as LegacyCtrl',
                templateUrl: 'templates/talent-legacy.html'
            })
            .state('app.talent.page', {
                url: '/:slug',
                controller: 'ClientController as ClientCtrl',
                templateUrl: 'templates/talent.html'
            })
        // Archives
        .state('app.archives', {
            url: 'archives',
            controller: 'ArchivesController as ArchivesCtrl',
            templateUrl: 'templates/archives.html'
        })
        // Affiliate
        .state('app.affiliates', {
            url: 'affiliates',
            controller: 'AffiliatesController as AffiliatesCtrl',
            templateUrl: 'templates/affiliates.html'
        })
        // News
        .state('app.news', {
            url: 'news',
            controller: 'NewsController as NewsCtrl',
            templateUrl: 'templates/news.html'
        })
        .state('app.news-page', {
            url: 'news/:slug',
            controller: 'NewsPageController as NewsPageCtrl',
            templateUrl: 'templates/news-page.html'
        })
        // Frequent Asked questions
        .state('app.faq', {
            url: 'faq',
            controller: 'FAQController as FAQCtrl',
            templateUrl: 'templates/faq.html'
        })
        // Contact
        .state('app.contact', {
            url: 'contact',
            controller: 'ContactController as ContactCtrl',
            templateUrl: 'templates/contact.html'
        })
        .state('app.book-client', {
            url: 'contact/booking/:client',
            controller: 'BookingController as BookingCtrl',
            templateUrl: 'templates/booking.html'
        })
        // Error pages
        .state('app.error-404', {
            url: 'error/404',
            templateUrl: 'templates/404.html'
        });
});
