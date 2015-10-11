describe('Component: ChooseCity', function() {
    var $rootScope, $scope, $compile, element;

    beforeEach(function() {
        module('MSAAgency', 'MSAAgency.directives');

        inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $compile = $injector.get('$compile');

            element = angular.element('<choose-city city-name="Los Angeles" state="app.home.los-angeles"></choose-city>');
            element = $compile(element)($scope);
        });
    });

    describe('isolate scope', function() {
        it('should pass in city name', function() {
            expect(element.isolateScope().cityName).toBe('Los Angeles');
        });

        it('should pass in route state name', function() {
            expect(element.isolateScope().state).toBe('app.home.los-angeles');
        });
    });
});
