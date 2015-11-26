import {
    SearchResultsTypeAll,
    SearchResultsNews,
    SearchResultsClients
} from '../fixtures/search';

describe('Service: Search', () => {
    let $rootScope, $scope, $httpBackend, SearchService;

    beforeEach(() => {
        angular.mock.module('MSAAgency');

        inject($injector => {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $httpBackend = $injector.get('$httpBackend');
            SearchService = $injector.get('SearchService');
        });
    });

    it('is defined', () => {
        expect(SearchService).toBeDefined();
    });

    describe('method: getResults', () => {
        let query;

        beforeEach(() => {
            query = 'Testa';
        });

        it('should return search results', () => {
            $httpBackend.expectGET(`/api/v1/search?limit=20&page=1&q=${query}&type=`).respond(SearchResultsTypeAll);

            SearchService.getResults({q: query})
                .then(response => {
                    expect(response).toEqual(SearchResultsTypeAll);
                })
            $httpBackend.flush();
        });

        it('should call type and return search results', () => {
            $httpBackend.expectGET(`/api/v1/search?limit=20&page=1&q=${query}&type=clients`).respond(SearchResultsClients);

            SearchService.getResults({
                q: query,
                type: 'clients'
            })
                .then(response => {
                    expect(response).toEqual(SearchResultsClients);
                })
            $httpBackend.flush();
        });

        it('should call page and return search results', () => {
            $httpBackend.expectGET(`/api/v1/search?limit=20&page=1&q=${query}&type=`).respond(SearchResultsTypeAll);

            SearchService.getResults({
                q: query,
                page: 1
            })
                .then(response => {
                    expect(response).toEqual(SearchResultsTypeAll);
                })
            $httpBackend.flush();
        });

        it('should call limit of 20 records and return search results', () => {
            $httpBackend.expectGET(`/api/v1/search?limit=20&page=1&q=${query}&type=`).respond(SearchResultsTypeAll);

            SearchService.getResults({
                q: query,
                limit: 20
            })
                .then(response => {
                    expect(response).toEqual(SearchResultsTypeAll);
                })
            $httpBackend.flush();
        });
    });

    describe('method: getResultsCount', () => {
        it('should return count from results colection', () => {
            expect(SearchService.getResultsCount(SearchResultsTypeAll)).toBe(3);
        });

        it('should return count from results array', () => {
            expect(SearchService.getResultsCount(SearchResultsClients)).toBe(1);
        });
    });
});
