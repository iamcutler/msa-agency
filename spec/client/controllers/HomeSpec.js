import { MockPromise } from '../spec_helper';
import { article1 } from '../fixtures/news';

describe('Controller: Home', function() {
    var $rootScope, $scope, $q, $controller;
    var HomeCtrl, NewsService, NewsSpy, SocialService, TwitterSpy, InstagramSpy;

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
            NewsSpy = spyOn(NewsService, 'getFeaturedArticles');
            TwitterSpy = spyOn(SocialService, 'getTwitterFeed');
            InstagramSpy = spyOn(SocialService, 'getInstagramFeed');

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

    describe('method: getInstagramFeed', () => {
        it('should call social service for feed', () => {
            InstagramSpy.and.callFake(MockPromise($q, []));

            HomeCtrl.getInstagramFeed();
            $scope.$digest();

            expect(SocialService.getInstagramFeed).toHaveBeenCalled();
        });

        describe('on success', () => {
            it('should assign feed to scope', () => {
                InstagramSpy.and.callFake(MockPromise($q, ['test']));

                HomeCtrl.getInstagramFeed();
                $scope.$digest();

                expect(HomeCtrl.socialFeeds.instagram).toEqual(['test']);
            });
        });
    });

    describe('method: getLatestNews', () => {
        it('should call NewsService getFeaturedArticles method', () => {
            NewsSpy.and.callFake(MockPromise($q, [article1(), article1()]));

            HomeCtrl.getLatestNews();
            $scope.$digest();

            expect(NewsService.getFeaturedArticles).toHaveBeenCalledWith({ limit: 6 });
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
