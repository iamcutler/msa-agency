import {
    SearchResultsTypeAll,
    SearchResultsNews,
    SearchResultsClients
} from '../fixtures/search';
import { MockPromise } from '../spec_helper';

describe('Controller: Search', () => {
    let $rootScope, $scope, $controller, $q;
    let SearchCtrl, SearchService, searchResultsSpy;

    beforeEach(() => {
        angular.mock.module('MSAAgency');

        inject($injector => {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $q = $injector.get('$q');
            $controller = $injector.get('$controller');
            SearchService = $injector.get('SearchService');

            /**
             * Controller
             */
            SearchCtrl = $controller('SearchController as SearchCtrl', {
                $scope: $scope
            });

            /**
             * Spies
             */
            searchResultsSpy = spyOn(SearchService, 'getResults');
            spyOn(SearchService, 'getResultsCount').and.callThrough();
        })
    });

    it('is defined', () => {
        expect(SearchCtrl).toBeDefined();
    });

    describe('method: getResults', () => {
        describe('on success', () => {
            beforeEach(() => {
                searchResultsSpy.and.callFake(MockPromise($q, SearchResultsTypeAll));

                SearchCtrl.getResults();
                $scope.$digest();
            });

            it('should call search service', () => {
                expect(SearchService.getResults).toHaveBeenCalled();
            });

            it('should assign results to instance variable', () => {
                expect(SearchCtrl.results.clients).toEqual(SearchResultsTypeAll.clients);
                expect(SearchCtrl.results.news).toEqual(SearchResultsTypeAll.news);
            });

            it('should call getResultsCount method to calculate from response', () => {
                expect(SearchService.getResultsCount).toHaveBeenCalledWith(SearchResultsTypeAll);
            });
        });
    });
});
