describe('filter: getTwitterLinks', function() {
    var $filter, twitterLinkFilter;

    beforeEach(function() {
        angular.mock.module('MSAAgency.filters');

        inject(function($injector) {
            $filter = $injector.get('$filter');

            twitterLinkFilter = $filter('getTwitterLinks');
        });
    });

    it('should return a tag from link', function() {
        var input = 'https://t.co/dWeMC0JYbV';

        expect(twitterLinkFilter(input).$$unwrapTrustedValue()).toBe("<a href='https://t.co/dWeMC0JYbV' target='_blank'>https://t.co/dWeMC0JYbV</a>");
    });

    it('should return link from hashtags', function() {
        var input = '#msaagency';

        expect(twitterLinkFilter(input).$$unwrapTrustedValue()).toBe("<a href='https://twitter.com/hashtag/msaagency?src=hash' target='_blank'>#msaagency</a>");
    });

    it('should return link from usernames', function() {
        var input = '@msaagency';

        expect(twitterLinkFilter(input).$$unwrapTrustedValue()).toBe("<a href='http://www.twitter.com/msaagency' target='_blank'>@msaagency</a>");
    });
});
