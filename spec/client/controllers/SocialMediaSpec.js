import { client1 } from '../fixtures/clients';

describe('Controller: SocialMedia', () => {
    let $scope, $rootScope, $controller;
    let SocialMediaCtrl;

    beforeEach(() => {
        angular.mock.module('MSAAgency');

        inject($injector => {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $controller = $injector.get('$controller');

            SocialMediaCtrl = $controller('SocialMediaController as SocialMediaCtrl', {
                $scope: $scope
            });
        });
    });

    it('should be defined', () => {
        expect(SocialMediaCtrl).toBeDefined();
    });

    describe('method: getTotalClientCount', () => {
        it('should return client count from collection', () => {
            // given
            const clients = {
                top: [client1(), client1()],
                trending: [client1(), client1(), client1()],
                emerging: [client1(), client1(), client1(), client1()],
                youtube: [client1()]
            };
            // when
            const result = SocialMediaCtrl.getTotalClientCount(clients);
            // then
            expect(result).toEqual(10);
        });

        it('should return 0 if no clients are found', () => {
            // given
            // when
            const result = SocialMediaCtrl.getTotalClientCount(SocialMediaCtrl.clients);
            // then
            expect(result).toEqual(0);
        });
    });
});
