import { FAQ1 } from '../fixtures/faq';

describe('Service: FAQ', () => {
    let $rootScope, $scope, $httpBackend, $q;
    let FAQService;

    beforeEach(() => {
        angular.mock.module('MSAAgency');

        inject($injector => {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $httpBackend = $injector.get('$httpBackend');
            $q = $injector.get('$q');
            FAQService = $injector.get('FAQService');
        });
    });

    afterEach(() => {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('is defined', () => {
        expect(FAQService).toBeDefined();
    });

    describe('method: get', () => {
        it('return FAQ collection', () => {
            $httpBackend.expectGET('/api/v1/faq').respond([FAQ1]);

            FAQService.get().then(response => {
                expect(response[0]).toEqual(FAQ1);
            });
            $httpBackend.flush();
        });
    });
});
