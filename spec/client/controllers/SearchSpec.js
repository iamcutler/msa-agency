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
        })
    });

    it('is defined', () => {
        expect(SearchCtrl).toBeDefined();
    });

    describe('method: getResults', () => {
        it('should call search service', () => {
            searchResultsSpy.and.callFake(MockPromise($q, SearchResultsTypeAll));

            SearchCtrl.getResults();
            $scope.$digest();

            expect(SearchService.getResults).toHaveBeenCalled();
        });

        it('should assign results to instance variable', () => {
            searchResultsSpy.and.callFake(MockPromise($q, SearchResultsTypeAll));

            SearchCtrl.getResults();
            $scope.$digest();

            expect(SearchCtrl.results).toEqual(SearchResultsTypeAll);
        });
    });
});
