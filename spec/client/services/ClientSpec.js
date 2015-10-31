import { client1 } from '../fixtures/clients';

describe('Service: Talent', () => {
    var $rootScope, $scope, $q, $httpBackend;
    var ClientService;

    beforeEach(() => {
        angular.mock.module('MSAAgency.services');

        inject($injector => {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $q = $injector.get('$q');
            $httpBackend = $injector.get('$httpBackend');
            ClientService = $injector.get('ClientService');

            /**
             * Spies
             */
             spyOn($q, 'reject');
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

    describe('method: getByCatrgory', () => {
        it('should return client list', () => {
            $httpBackend.expectGET('api/v1/clients-by-category?categories=choregraphy,educator').respond([client1(), client1()]);

            ClientService.getByCategory(['choregraphy', 'educator'])
                .then(response => {
                    expect(response).toEqual([client1(), client1()]);
                });

            $httpBackend.flush();
        });

        it('should return rejected promise if arg is not a array', () => {
            ClientService.getByCategory('choregraphy', 'educator');

            expect($q.reject).toHaveBeenCalled();
        });
    });
});
