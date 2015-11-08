import { Photo1 } from '../fixtures/client_photos';

describe('Component: TalentPhotos', function() {
    var $rootScope, $scope, $compile, element;

    beforeEach(function() {
        angular.mock.module('MSAAgency.directives');

        inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $compile = $injector.get('$compile');

            $scope.client = {};
            $scope.client.images = [];
            $scope.client.images.push(Photo1());

            /**
             * Elements
             **/
            element = angular.element('<talent-photos data="client.images"></talent-photos>');
        });
    });

    it('is defined', function() {
        element = $compile(element)($scope);

        expect(element).toBeDefined();
    });

    describe('isolate scope', () => {
        beforeEach(() => {
            element = $compile(element)($scope);
        });

        it('should pass in image data', () => {
            expect(element.isolateScope().data[0]).toEqual(Photo1());
        });
    });
});
