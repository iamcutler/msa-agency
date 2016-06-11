import { MockPromise } from '../spec_helper';
import { client1 } from '../fixtures/clients';

describe('Controller: Client', () => {
    var $rootScope, $scope, $controller, $q;
    var ClientCtrl, ClientService, clientSpy, getBySlugSpy, mapResumeTitleSpy;

    beforeEach(() => {
        angular.mock.module('MSAAgency');

        inject($injector => {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $q = $injector.get('$q');
            $controller = $injector.get('$controller');
            ClientService = $injector.get('ClientService');

            /**
             * Spies
             */
            getBySlugSpy = spyOn(ClientService, 'getBySlug');
            mapResumeTitleSpy = spyOn(ClientService, 'mapResumeTitleFromCategory').and.callThrough();

            ClientCtrl = $controller('ClientController as ClientCtrl', {
                $scope: $scope,
                $stateParams: {
                    slug: 'nappytabs'
                },
                ClientService: ClientService,
                smoothScroll: jasmine.createSpy('smoothScroll')
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

        it('should call smooth scroll on destination', () => {
            expect(ClientCtrl.smoothScroll).toHaveBeenCalledWith(null, { offset: 112 });
        });
    });

    describe('method: mapResumeTitleFromCategory', () => {
        it('should call client service for title', () => {
            const title = 'commercials';

            ClientCtrl.mapResumeTitleFromCategory(title);

            expect(ClientService.mapResumeTitleFromCategory).toHaveBeenCalledWith(title)
        });
    });
});
