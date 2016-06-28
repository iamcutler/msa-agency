import { MockPromise } from '../spec_helper';
import { client1 } from '../fixtures/clients';

describe('Controller: ClientResume', () => {
    var $rootScope, $scope, $controller, $q;
    var ClientResumeCtrl, ClientService, clientSpy, getBySlugSpy, mapResumeTitleSpy;

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

            ClientResumeCtrl = $controller('ClientResumeController as ClientResumeCtrl', {
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

        expect(ClientResumeCtrl).toBeDefined();
    });

    describe('method: getBySlug', () => {
        describe('on success', () => {
            beforeEach(() => {
                getBySlugSpy.and.callFake(MockPromise($q, client1()));
            });

            it('should call client service getBySlug', () => {
                ClientResumeCtrl.getBySlug();
                $scope.$digest();

                expect(ClientService.getBySlug).toHaveBeenCalledWith('nappytabs');
            });

            it('should assign resolved value to client instance variable', () => {
                ClientResumeCtrl.getBySlug();
                $scope.$digest();

                expect(ClientResumeCtrl.client).toEqual({
                    name: client1().full_name,
                    resume: client1().resume,
                    resume_order: client1().resume_order
                });
            });
        });
    });

    describe('method: mapResumeTitleFromCategory', () => {
        it('should call client service for title', () => {
            const title = 'commercials';

            ClientResumeCtrl.mapResumeTitleFromCategory(title);

            expect(ClientService.mapResumeTitleFromCategory).toHaveBeenCalledWith(title)
        });
    });
});
