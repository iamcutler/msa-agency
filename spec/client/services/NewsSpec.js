import { MockPromise } from '../spec_helper';
import { article1 } from '../fixtures/news';

describe('Service: News', () => {
    var $rootScope, $scope, $httpBackend, $q;
    var NewsService;

    beforeEach(() => {
        angular.mock.module('MSAAgency.services');

        inject($injector => {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $httpBackend = $injector.get('$httpBackend');
            $q = $injector.get('$q');
            NewsService = $injector.get('NewsService');
        });
    });

    it('is defined', () => {
        expect(NewsService).toBeDefined();
    });

    describe('method: get', () => {
        it('should call api for news articles', () => {
            $httpBackend.expectGET('api/v1/news').respond(MockPromise($q, article1()));

            NewsService.all().then(response => {
                expect(response).toEqual(article1());
            });

            $httpBackend.flush();
        });

        it('should call api for news articles with pagination', () => {
            $httpBackend.expectGET('api/v1/news?limit=10&offset=20').respond(MockPromise($q, article1()));

            NewsService.all({
                limit: 10,
                offset: 20
            }).then(response => {
                expect(response).toEqual(article1());
            });

            $httpBackend.flush();
        });
    });
});
