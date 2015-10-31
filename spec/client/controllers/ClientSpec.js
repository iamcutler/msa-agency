import { MockPromise } from '../spec_helper';
import { client1 } from '../fixtures/clients';

xdescribe('Controller: Client', () => {
    var $rootScope, $scope, $controller, $q;
    var ClientCtrl, ClientService, clientSpy;

    beforeEach(() => {
        angular.mock.module('MSAAgency.controllers');

        inject($injector => {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $q = $injector.get('$q');
            $controller = $injector.get('$controller');
            ClientService = $injector.get('ClientService');

            /**
             * Spies
             */
            spyOn(ClientService, 'getBySlug').and.callFake(MockPromise($q, client1(), true));

            ClientCtrl = $controller('ClientController as ClientCtrl', {
                $scope: $scope,
                $stateParams: {
                    slug: 'nappytabs'
                },
                ClientService: ClientService
            });
        });
    });

    it('is defined', () => {
        $scope.$digest();

        expect(ClientCtrl).toBeDefined();
    });

    describe('method: getBySlug', () => {
        it('should call client service getBySlug', () => {
            ClientCtrl.getBySlug();
            $scope.$digest();

            expect(ClientService.getBySlug).toHaveBeenCalledWith('');
        });

        describe('on success', () => {
        });
    });
});
