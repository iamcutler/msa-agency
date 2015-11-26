describe('Component: SubSectionHeader', function() {
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
            element = angular.element('<sub-section-header title="Photos"></sub-section-header>');
            element = $compile(element)($scope);
        });
    });

    it('is defined', function() {
        expect(element).toBeDefined();
    });

    it('should pass title scope to component', function() {
        expect(element.isolateScope().title).toEqual('Photos');
    });
});
