describe('Service: Social', function() {
    var $rootScope, $scope, $httpBackend, $q, SocialService;
    var responses;

    beforeEach(function() {
        module('MSAAgency', 'MSAAgency.services');

        inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $httpBackend = $injector.get('$httpBackend');
            $q = $injector.get('$q');
            SocialService = $injector.get('SocialService');

            // Spies
            spyOn($q, 'reject').and.callThrough();

            responses = {};
            responses.twitterFeed = [
                {"created_at":"Mon Sep 14 17:27:22 +0000 2015","id":643476145170550784,"id_str":"643476145170550784","text":"RT @fbOpenSource: The countdown is over! We're super excited to launch @reactjs native for Android. https://t.co/dWeMC0JYbV #androiddev","source":"\u003ca href=\"http://twitter.com/download/iphone\" rel=\"nofollow\"\u003eTwitter for iPhone\u003c/a\u003e","truncated":false,"in_reply_to_status_id":null,"in_reply_to_status_id_str":null}
            ];
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
        var response;

        it('should call api and return data', function() {
            $httpBackend.expectGET('/api/v1/social/twitter?count=4').respond(200, responses.twitterFeed);

            SocialService.getTwitterFeed()
                .then(function(feed) {
                    response = feed;
                });

            $httpBackend.flush();

            expect(response).toContain(responses.twitterFeed[0]);
            expect(response.length).toEqual(responses.twitterFeed.length);
        });

        it('should return rejected promise if api fails', function() {
            $httpBackend.expectGET('/api/v1/social/twitter?count=4').respond(500, '');

            SocialService.getTwitterFeed().catch(function(err) {
                response = err;
            });
            $httpBackend.flush();

            expect(response.status).toBe(500);
        });
    });
});
