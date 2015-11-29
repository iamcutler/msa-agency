import { MockPromise } from '../spec_helper';
import { client1 } from '../fixtures/clients';

describe('Controller: Client', () => {
    var $rootScope, $scope, $controller, $q, $location;
    var ClientCtrl, ClientService, clientSpy, getBySlugSpy;

    beforeEach(() => {
        angular.mock.module('MSAAgency');

        inject($injector => {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $q = $injector.get('$q');
            $controller = $injector.get('$controller');
            $location = $injector.get('$location');
            ClientService = $injector.get('ClientService');

            /**
             * Spies
             */
            getBySlugSpy = spyOn(ClientService, 'getBySlug');
            spyOn($location, 'hash');

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
            getBySlugSpy.and.callFake(MockPromise($q, client1()));

            ClientCtrl.getBySlug();
            $scope.$digest();

            expect(ClientService.getBySlug).toHaveBeenCalledWith('nappytabs');
        });

        describe('on success', () => {
            beforeEach(() => {
                getBySlugSpy.and.callFake(MockPromise($q, client1()))
            });

            it('should assign client to client scope', () => {
                ClientCtrl.getBySlug();
                $scope.$digest();

                expect(ClientCtrl.client).toEqual(client1());
            });
        });
    });

    describe('method: setCurrentNavDestination', () => {
        beforeEach(() => {
            ClientCtrl.setCurrentNavDestination('talent-press');
        });

        it('should set destination for currentNavDestination', () => {
            expect(ClientCtrl.currentNavDestination).toBe('talent-press');
        });

        it('should set location hash', () => {
            expect($location.hash).toHaveBeenCalledWith('section-talent-press');
        });
    });
});
