import { MockPromise } from '../spec_helper';
import { Affiliate1 } from '../fixtures/affiliates';

describe('Controller: Affiliates', () => {
    let $rootScope, $scope, $controller, $q;
    let AffiliatesCtrl, AffiliateService;

    beforeEach(() => {
        angular.mock.module('MSAAgency');

        inject($injector => {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $controller = $injector.get('$controller');
            $q = $injector.get('$q');
            AffiliateService = $injector.get('AffiliateService');

            AffiliatesCtrl = $controller('AffiliatesController as AffiliatesCtrl', {
                $scope: $scope
            });

            /**
             * Spies
             */
            affiliateSpy = spyOn(AffiliateService, 'get');
        });
    });

    it('is defined', () => {
        expect(AffiliatesCtrl).toBeDefined();
    });

    describe('method: getAffiliates', () => {
        describe('on success', () => {
            beforeEach(() => {
                affiliateSpy.and.callFake(MockPromise($q, [Affiliate1]));
            });

            it('should call affiliates service', () => {
                AffiliatesCtrl.getAffiliates();
                $scope.$digest();

                expect(AffiliateService.get).toHaveBeenCalled();
            });
        });
    });
});
