describe('Component: TalentPhotos', function() {
    var $rootScope, $scope, $compile, element;

    beforeEach(function() {
        module('MSAAgency.directives');

        inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $compile = $injector.get('$compile');

            /**
             * Elements
             **/
            element = angular.element('<talent-photos></talent-photos>');
        });
    });

    it('is defined', function() {
        element = $compile(element)($scope);

        expect(element).toBeDefined();
    });
});
