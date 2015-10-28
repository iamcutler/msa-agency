describe('Controller: Newsletter', function() {
    var $rootScope, $scope, $controller, $state, NewsletterCtrl;

    beforeEach(function() {
        angular.mock.module('MSAAgency', 'MSAAgency.controllers');

        inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $controller = $injector.get('$controller');
            $state = $injector.get('$state');

            // Controller
            NewsletterCtrl = $controller('NewsletterController as NewsletterCtrl', {
                $scope: $scope
            });
        });
    });

    it('should be defined', function() {
        expect(NewsletterCtrl).toBeDefined();
    });
});
