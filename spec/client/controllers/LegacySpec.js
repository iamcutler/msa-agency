import { MockPromise } from '../spec_helper';
import { client1, ClientCollectionWithCategories1 } from '../fixtures/clients';

describe('Controller: Legacy', function() {
    var $rootScope, $scope, $controller, $q;
    var LegacyCtrl, ClientService, getByCategorySpy, getCategoryFromParamSpy, filterByCategorySpy;
    var getCategorySpy;

    beforeEach(function() {
        angular.mock.module('MSAAgency.controllers', 'MSAAgency.services');

        inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $controller = $injector.get('$controller');
            $q = $injector.get('$q');
            ClientService = $injector.get('ClientService');

            /**
             * Controller
             **/
            LegacyCtrl = $controller('LegacyController as LegacyCtrl', {
                $scope: $scope,
                ClientService: ClientService
            });

            /**
             * Spies
             */
            getCategorySpy = spyOn(ClientService, 'getByCategory');
            spyOn(LegacyCtrl, 'initialize');
        });
    });

    it('is defined', function() {
        expect(LegacyCtrl).toBeDefined();
    });

    describe('method: getLegacy', () => {
        beforeEach(() => {
            getCategorySpy.and.callFake(MockPromise($q, ClientCollectionWithCategories1));
        });

        it('should call client service with legacy array', () => {
            LegacyCtrl.getLegacy();
            $scope.$digest();

            expect(ClientService.getByCategory).toHaveBeenCalledWith(['legacy']);
        });

        it('should assign response to clients instance variable', () => {
            LegacyCtrl.getLegacy();
            $scope.$digest();

            expect(LegacyCtrl.clients).toEqual(ClientCollectionWithCategories1);
        });
    });
});
