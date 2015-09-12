describe('Controller: Splash', function() {
    var $rootScope, $scope, $controller, SplashCtrl;

    beforeEach(function() {
        module('MSAAgency', 'MSAAgency.controllers');

        inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $controller = $injector.get('$controller');

            SplashCtrl = $controller('SplashController as SplashCtrl', {
                $scope: $scope
            });
        });
    });

    it('to be defined', function() {
        expect(SplashCtrl).toBeDefined();
    });
});
