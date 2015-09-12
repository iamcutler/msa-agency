describe('Controller: Navigation', function() {
    var $rootScope, $scope, $controller, $state, NavCtrl;

    beforeEach(function() {
        module('MSAAgency', 'MSAAgency.controllers');

        inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $controller = $injector.get('$controller');
            $state = $injector.get('$state');

            // Spies
            spyOn($state, 'go');

            // Controller
            NavCtrl = $controller('NavigationController as NavCtrl', {
                $scope: $scope
            });
        });
    });

    it('should be defined', function() {
        expect(NavCtrl).toBeDefined();
    });

    describe('method: search', function() {
        it('should redirect to search page if form is valid', function() {
            NavCtrl.q = "MSA Agency";
            NavCtrl.search(true);
            $scope.$digest();

            expect($state.go).toHaveBeenCalledWith('app.search', { q: 'MSA Agency' });
        });

        it('should NOT redirect to search page if form is invalid', function() {
            NavCtrl.search(false);
            $scope.$digest();

            expect($state.go).not.toHaveBeenCalled();
        });
    });
});
