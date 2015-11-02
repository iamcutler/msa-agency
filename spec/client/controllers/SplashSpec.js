import { MockPromise } from '../spec_helper';

describe('Controller: Splash', function() {
    var $rootScope, $scope, $q, $controller;
    var SocialService, SplashCtrl, InstagramSpy;

    beforeEach(function() {
        angular.mock.module('MSAAgency', 'MSAAgency.controllers');

        inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $q = $injector.get('$q');
            $controller = $injector.get('$controller');
            SocialService = $injector.get('SocialService');

            /**
             * Spies
             */
            InstagramSpy = spyOn(SocialService, 'getInstagramFeed');

            /**
             * Controller
             */
            SplashCtrl = $controller('SplashController as SplashCtrl', {
                $scope: $scope
            });
        });
    });

    it('to be defined', function() {
        expect(SplashCtrl).toBeDefined();
    });

    describe('method: getInstagramFeed', () => {
        it('should call social service for feed', () => {
            InstagramSpy.and.callFake(MockPromise($q, []));

            SplashCtrl.getInstagramFeed();
            $scope.$digest();

            expect(SocialService.getInstagramFeed).toHaveBeenCalled();
        });

        describe('on success', () => {
            it('should assign feed to scope', () => {
                InstagramSpy.and.callFake(MockPromise($q, ['test']));

                SplashCtrl.getInstagramFeed();
                $scope.$digest();

                expect(SplashCtrl.socialFeeds.instagram).toEqual(['test']);
            });
        });
    });
});
