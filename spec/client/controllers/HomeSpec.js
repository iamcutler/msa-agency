import { MockPromise } from '../spec_helper';
import { article1 } from '../fixtures/news';

describe('Controller: Home', function() {
    var $rootScope, $scope, $q, $controller;
    var HomeCtrl, NewsService, NewsSpy, SocialService, TwitterSpy;

    beforeEach(function() {
        angular.mock.module('MSAAgency', 'MSAAgency.controllers');

        inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $controller = $injector.get('$controller');
            $q = $injector.get('$q');
            NewsService = $injector.get('NewsService');
            SocialService = $injector.get('SocialService');

            /**
             * Spies
             */
            NewsSpy = spyOn(NewsService, 'all');
            TwitterSpy = spyOn(SocialService, 'getTwitterFeed');

            /**
             * Controller
             */
            HomeCtrl = $controller('HomeController as HomeCtrl', {
                $scope: $scope
            });
        });
    });

    it('to be defined', function() {
        expect(HomeCtrl).toBeDefined();
    });

    describe('method: getTwitterFeed', () => {
        it('should call social service for feed', () => {
            TwitterSpy.and.callFake(MockPromise($q, []));

            HomeCtrl.getTwitterFeed();
            $scope.$digest();

            expect(SocialService.getTwitterFeed).toHaveBeenCalled();
        });

        describe('on success', () => {
            it('should assign feed to scope', () => {
                TwitterSpy.and.callFake(MockPromise($q, ['test']));

                HomeCtrl.getTwitterFeed();
                $scope.$digest();

                expect(HomeCtrl.socialFeeds.twitter).toEqual(['test']);
            });
        });
    });

    describe('method: getLatestNews', () => {
        it('should call NewsService all method', () => {
            NewsSpy.and.callFake(MockPromise($q, [article1(), article1()]));

            HomeCtrl.getLatestNews();
            $scope.$digest();

            expect(NewsService.all).toHaveBeenCalledWith({ limit: 6 });
        });

        describe('on successful service call', () => {
            beforeEach(() => {
                NewsSpy.and.callFake(MockPromise($q, [article1(), article1()]));
            });

            it('should assign latestNews after service is resolved', () => {
                HomeCtrl.getLatestNews();
                $scope.$digest();

                expect(HomeCtrl.latestNews).toEqual([article1(), article1()]);
            });
        });
    });
});
