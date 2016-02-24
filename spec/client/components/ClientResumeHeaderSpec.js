import { client1 } from '../fixtures/clients';

describe('Component: ClientResumeHeader', function() {
    var $rootScope, $scope, $compile, element;

    beforeEach(function() {
        angular.mock.module('MSAAgency.directives');

        inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $compile = $injector.get('$compile');

            $scope.client = client1();

            /**
             * Elements
             **/
            element = angular.element('<client-resume-header title="Photos" client="client"></client-resume-header>');
            element = $compile(element)($scope);
        });
    });

    it('is defined', function() {
        expect(element).toBeDefined();
    });

    it('should pass title scope to component', function() {
        expect(element.isolateScope().title).toEqual('Photos');
    });

    it('should pass client to isolate scope', () => {
        expect(element.isolateScope().client).toEqual(client1());
    });
});
