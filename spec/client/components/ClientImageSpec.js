import { Photo1 } from '../fixtures/client_photos';

describe('Component: ClientImage', function() {
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
            element = angular.element(`
                <client-image caption="{{ ::client.images[0].caption }}"
                              group="clientphotos"
                              img="client.images[0].sizes"></client-image>
            `);
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

        it('should pass in caption', () => {
            expect(element.isolateScope().caption).toEqual($scope.client.images[0].caption);
        });

        it('should pass in image sizes', () => {
            expect(element.isolateScope().img).toEqual($scope.client.images[0].sizes);
        });

        it('should pass in group name', () => {
            expect(element.isolateScope().group).toEqual('clientphotos');
        });
    });
});
