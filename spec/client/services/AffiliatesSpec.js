import { Affiliate1 } from '../fixtures/affiliates';

describe('Service: Affiliate', () => {
    let $rootScope, $scope, $httpBackend, $q;
    let AffiliateService;

    beforeEach(() => {
        angular.mock.module('MSAAgency');

        inject($injector => {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $httpBackend = $injector.get('$httpBackend');
            $q = $injector.get('$q');
            AffiliateService = $injector.get('AffiliateService');
        });
    });

    afterEach(() => {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('is defined', () => {
        expect(AffiliateService).toBeDefined();
    });

    describe('method: get', () => {
        it('return affiliates collection', () => {
            $httpBackend.expectGET('/api/v1/affiliates').respond(Affiliate1);

            AffiliateService.get().then(response => {
                expect(response).toEqual(Affiliate1);
            });
            $httpBackend.flush();
        });
    });
});
