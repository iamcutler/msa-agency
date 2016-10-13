import { twitterFeed1, instagramFeed1 } from '../fixtures/social';

describe('Service: Social', function() {
    var $rootScope, $scope, $httpBackend, $q, SocialService;

    beforeEach(function() {
        angular.mock.module('MSAAgency', 'MSAAgency.services');

        inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $httpBackend = $injector.get('$httpBackend');
            $q = $injector.get('$q');
            SocialService = $injector.get('SocialService');

            /**
             * Spies
             */
            spyOn($q, 'reject').and.callThrough();
        });
    });

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('is defined', function() {
        expect(SocialService).toBeDefined();
    });

    describe('method: getTwitterFeed', function() {
        it('should call api and return data', function() {
            $httpBackend.expectGET('api/v1/social/twitter?count=4').respond(200, twitterFeed1());

            SocialService.getTwitterFeed()
                .then(function(feed) {
                    expect(feed).toContain(twitterFeed1()[0]);
                    expect(feed.length).toEqual(twitterFeed1().length);
                });

            $httpBackend.flush();
        });

        it('should return rejected promise if api fails', function() {
            $httpBackend.expectGET('api/v1/social/twitter?count=4').respond(500);

            SocialService.getTwitterFeed();
            $httpBackend.flush();

            expect($q.reject).toHaveBeenCalled();
        });
    });

    describe('method: getInstagramFeed', function() {
        it('should call api and return data', function() {
            $httpBackend.expectGET('api/v1/social/instagram?count=4').respond(200, instagramFeed1());

            SocialService.getInstagramFeed()
                .then(function(feed) {
                    expect(feed).toContain(instagramFeed1()[0]);
                    expect(feed.length).toEqual(instagramFeed1().length);
                });

            $httpBackend.flush();
        });

        it('should return rejected promise if api fails', function() {
            $httpBackend.expectGET('api/v1/social/instagram?count=4').respond(500);

            SocialService.getInstagramFeed();
            $httpBackend.flush();

            expect($q.reject).toHaveBeenCalled();
        });
    });

    describe('method: getVideos', function() {
        it('should call backend for video content', () => {
            $httpBackend.expectGET('api/v1/social/videos').respond(200);

            SocialService.getVideos();
            $httpBackend.flush();
        });
    });
});
