import { client1 } from '../fixtures/clients';

describe('Service: Talent', () => {
    var $rootScope, $scope, $httpBackend;
    var ClientService;

    beforeEach(() => {
        angular.mock.module('MSAAgency.services');

        inject($injector => {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $httpBackend = $injector.get('$httpBackend');
            ClientService = $injector.get('ClientService');
        });
    });

    afterEach(() => {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('is defined', () => {
        expect(ClientService).toBeDefined();
    });

    describe('method: getBySlug', () => {
        let slug = 'nappytabs';

        it('should return client', () => {
            $httpBackend.expectGET(`api/v1/clients/${slug}`).respond(client1());

            ClientService.getBySlug(slug)
                .then(response => {
                    expect(response).toEqual(client1());
                });

            $httpBackend.flush();
        });
    });
});
