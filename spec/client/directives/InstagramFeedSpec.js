describe('Directive: InstagramFeed', function() {
    var $rootScope, $scope, $compile, element, mocks;

    beforeEach(function() {
        angular.mock.module('MSAAgency', 'MSAAgency.directives');

        inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $compile = $injector.get('$compile');

            // Mocks
            mocks = {}
            mocks.feedData = [];

            // Scope
            $scope.feedData = mocks.feedData;

            element = angular.element('<instagram-feed data="feedData"></instagram-feed>');
        });
    });

    describe('isolate scope', function() {
        it('should pass in twitter data', function() {
            element = $compile(element)($scope);

            expect(element.isolateScope().data).toBe(mocks.feedData);
        });

        it('should throw error if no data is provided', function() {
            $scope.feedData = undefined;
            $scope.$digest();

            expect(function() {
                $compile(element)($scope);
            }).toThrow(new Error('No data provided'));
        });

        it('should throw type error if no collection is provided', function() {
            $scope.feedData = {};
            $scope.$digest();

            expect(function() {
                $compile(element)($scope);
            }).toThrow(new TypeError('No collection provided'));
        });
    });
});
