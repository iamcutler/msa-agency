describe('Component: TalentHeader', function() {
    var $rootScope, $scope, $compile, element;

    beforeEach(function() {
        angular.mock.module('MSAAgency.directives');

        inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $compile = $injector.get('$compile');

            /**
             * Elements
             **/
            element = angular.element('<talent-header></talent-header>');
        });
    });

    it('is defined', function() {
        element = $compile(element)($scope);

        expect(element).toBeDefined();
    });
});
