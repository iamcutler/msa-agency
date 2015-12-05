import { MockPromise } from '../spec_helper';
import { article1 } from '../fixtures/news';

describe('Controller: News', () => {
    let $rootScope, $scope, $controller, $q;
    let NewsCtrl, NewsService, newsSpy;

    beforeEach(() => {
        angular.mock.module('MSAAgency');

        inject($injector => {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $controller = $injector.get('$controller');
            $q = $injector.get('$q');
            NewsService = $injector.get('NewsService');

            /**
             * Spies
             */
            newsSpy = spyOn(NewsService, 'all');

            /**
             * Controller
             */
            NewsCtrl = $controller('NewsController as NewsCtrl', {
                $scope: $scope
            });
            $scope.$digest();
        });
    });

    it('is defined', () => {
        expect(NewsCtrl).toBeDefined();
    });

    describe('method: getNews', () => {
        beforeEach(() => {
            newsSpy.and.callFake(MockPromise($q, {
                pagination: {
                    count: 21,
                    pages: 2
                },
                data: [
                    article1()
                ]
            }));
        });

        it('should call news service', () => {
            NewsCtrl.getNews();
            $scope.$digest();

            expect(NewsService.all).toHaveBeenCalled();
        });

        it('should call news service with passed in args', () => {
            NewsCtrl.getNews({
                limit: 10,
                offset: 5
            });
            $scope.$digest();

            expect(NewsService.all).toHaveBeenCalledWith({ limit: 10, offset: 5 });
        });

        it('should set news instance variable with results', () => {
            NewsCtrl.getNews();
            $scope.$digest();

            expect(NewsCtrl.news).toEqual({
                pagination: {
                    count: 21,
                    pages: 2
                },
                data: [
                    article1()
                ]
            });
        });
    });
});
