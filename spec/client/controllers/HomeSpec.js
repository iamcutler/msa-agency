describe('Controller: Home', function() {
    var $rootScope, $scope, $controller, HomeCtrl;

    beforeEach(function() {
        module('MSAAgency', 'MSAAgency.controllers');

        inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $controller = $injector.get('$controller');

            HomeCtrl = $controller('HomeController as HomeCtrl', {
                $scope: $scope
            });
        });
    });

    it('to be defined', function() {
        expect(HomeCtrl).toBeDefined();
    });
});
