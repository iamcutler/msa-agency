describe('Component: TalentVideos', function() {
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
            element = angular.element('<talent-videos></talent-videos>');
        });
    });

    it('is defined', function() {
        element = $compile(element)($scope);

        expect(element).toBeDefined();
    });
});
