describe('Component: SocialIcons', () => {
    var $rootScope, $scope, $compile, element, social;

    beforeEach(() => {
        module('MSAAgency.directives');

        inject($injector => {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $compile = $injector.get('$compile');

            social = {
                website: 'http://msaagency.com',
                facebook: "https://www.facebook.com/MSAagency",
                twitter: "https://twitter.com/MSAAGENCY",
                instagram: "https://instagram.com/msaagency",
                youtube: "https://www.youtube.com/user/MSAGlobalLeader"
            };

            /**
             * Elements
             **/
            element = angular.element(`<social-icons
                website="${social.website}"
                facebook="${social.facebook}"
                twitter="${social.twitter}"
                instagram="${social.instagram}"
                youtube="${social.youtube}"></social-icons>`);
            element = $compile(element)($scope);
        });
    });

    it('is defined', () => {
        expect(element).toBeDefined();
    });

    describe('isolate scope:', () => {
        it('should pass website url', () => {
            expect(element.isolateScope().website).toEqual(social.website);
        });

        it('should pass facebook url', () => {
            expect(element.isolateScope().facebook).toEqual(social.facebook);
        });

        it('should pass twitter url', () => {
            expect(element.isolateScope().twitter).toEqual(social.twitter);
        });

        it('should pass instagram url', () => {
            expect(element.isolateScope().instagram).toEqual(social.instagram);
        });

        it('should pass youtube url', () => {
            expect(element.isolateScope().youtube).toEqual(social.youtube);
        });
    });
});
