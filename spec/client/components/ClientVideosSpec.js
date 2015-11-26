import { ClientVideo1 } from '../fixtures/client_videos';

describe('Component: ClientVideo', function() {
    var $rootScope, $scope, $compile, element;

    beforeEach(function() {
        angular.mock.module('MSAAgency.directives');

        inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $compile = $injector.get('$compile');

            /**
             * Scope
             */
            $scope.video_data = ClientVideo1;

            /**
             * Elements
             **/
            element = angular.element('<client-video data="video_data"></client-video>');
        });
    });

    it('is defined', function() {
        element = $compile(element)($scope);

        expect(element).toBeDefined();
    });

    it('should pass data in isolate scope', () => {
        element = $compile(element)($scope);

        expect(element.isolateScope().data).toEqual(ClientVideo1);
    });
});
