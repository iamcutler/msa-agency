import { MockPromise } from '../spec_helper';
import { article1 } from '../fixtures/news';

describe('Controller: NewsPage', () => {
    let $rootScope, $scope, $controller, $q;
    let NewsPageCtrl, NewsService, newsBySlugSpy;

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
             newsBySlugSpy = spyOn(NewsService, 'getBySlug');

            /**
             * Controller
             */
            NewsPageCtrl = $controller('NewsPageController as NewsPageCtrl', {
                $scope: $scope
            });
        });
    });

    it('is defined', () => {
        expect(NewsPageCtrl).toBeDefined();
    });

    describe('method: getBySlug', () => {
        describe('on success', () => {
            beforeEach(() => {
                newsBySlugSpy.and.callFake(MockPromise($q, article1()));
            });

            it('should call news service', () => {
                NewsPageCtrl.getBySlug('testing');
                $scope.$digest();

                expect(NewsService.getBySlug).toHaveBeenCalled();
            });

            it('should set instance variable to result', () => {
                NewsPageCtrl.getBySlug('testing')
                    .then(response => {
                        expect(NewsPageCtrl.article).toEqual(article1());
                    });
                $scope.$digest();
            });
        });
    });
});
