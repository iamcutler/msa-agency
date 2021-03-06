import { MockPromise } from '../spec_helper';
import { article1 } from '../fixtures/news';
import { PageSlide1 } from '../fixtures/page_slides';

describe('Controller: Home', function() {
    var $rootScope, $scope, $q, $controller;
    var HomeCtrl, NewsService, NewsSpy, SocialService, TwitterSpy, InstagramSpy, SlidesSpy;
    var PageSlideService;

    beforeEach(function() {
        angular.mock.module('MSAAgency', 'MSAAgency.controllers');

        inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $controller = $injector.get('$controller');
            $q = $injector.get('$q');
            NewsService = $injector.get('NewsService');
            SocialService = $injector.get('SocialService');
            PageSlideService = $injector.get('PageSlideService');

            /**
             * Spies
             */
            NewsSpy = spyOn(NewsService, 'getFeaturedArticles');
            TwitterSpy = spyOn(SocialService, 'getTwitterFeed');
            InstagramSpy = spyOn(SocialService, 'getInstagramFeed');
            SlidesSpy = spyOn(PageSlideService, 'getByPage');

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

    describe('method: getPageSlides', () => {
        let response;

        beforeEach(() => {
            response = [PageSlide1];
            SlidesSpy.and.callFake(MockPromise($q, response));

            HomeCtrl.getPageSlides('home');
            $scope.$digest();
        });

        it('should call page slide service', () => {
            expect(PageSlideService.getByPage).toHaveBeenCalledWith('home');
        });

        it('should set slides instance variable with results', () => {
            expect(HomeCtrl.slides).toEqual(response);
        });
    });
});
