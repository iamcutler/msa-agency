describe('Controller: SearchBar', function() {
    var $rootScope, $scope, $controller, $state, SearchBarCtrl;

    beforeEach(function() {
        angular.mock.module('MSAAgency', 'MSAAgency.controllers');

        inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $controller = $injector.get('$controller');
            $state = $injector.get('$state');

            // Spies
            spyOn($state, 'go');

            // Controller
            SearchBarCtrl = $controller('SearchBarController as SearchBarCtrl', {
                $scope: $scope
            });
        });
    });

    it('should be defined', function() {
        expect(SearchBarCtrl).toBeDefined();
    });

    describe('method: search', function() {
        beforeEach(function() {
            SearchBarCtrl.q = "MSA Agency";
        });

        describe('on valid search', function() {
            beforeEach(function() {
                SearchBarCtrl.search(true);
                $scope.$digest();
            });

            it('should redirect to search page', function() {
                expect($state.go).toHaveBeenCalledWith('app.search', { q: 'MSA Agency' });
            });

            it('should clear search string after redirect', function() {
                expect(SearchBarCtrl.q).toBe('');
            });
        });

        describe('on invalid search', function() {
            beforeEach(function() {
                SearchBarCtrl.search(false);
                $scope.$digest();
            });

            it('should NOT redirect to search page', function() {
                expect($state.go).not.toHaveBeenCalled();
            });
        });
    });
});
