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
        beforeEach(function() {
            NavCtrl.q = "MSA Agency";
        });

        describe('on valid search', function() {
            beforeEach(function() {
                NavCtrl.search(true);
                $scope.$digest();
            });

            it('should redirect to search page', function() {
                expect($state.go).toHaveBeenCalledWith('app.search', { q: 'MSA Agency' });
            });

            it('should clear search string after redirect', function() {
                expect(NavCtrl.q).toBe('');
            });
        });

        describe('on invalid search', function() {
            beforeEach(function() {
                NavCtrl.search(false);
                $scope.$digest();
            });

            it('should NOT redirect to search page', function() {
                expect($state.go).not.toHaveBeenCalled();
            });
        });
    });
});
