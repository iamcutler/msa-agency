import { MockPromise } from '../spec_helper';
import { client1, ClientCollectionWithCategories1 } from '../fixtures/clients';

describe('Controller: Directors', function() {
    var $rootScope, $scope, $controller, $q;
    var DirectorsCtrl, ClientService, getByCategorySpy, getCategoryFromParamSpy, filterByCategorySpy;

    beforeEach(function() {
        angular.mock.module('MSAAgency');

        inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $controller = $injector.get('$controller');
            $q = $injector.get('$q');
            ClientService = $injector.get('ClientService');

            /**
             * Spies
             */
            getByCategorySpy = spyOn(ClientService, 'getByCategory');
            getCategoryFromParamSpy = spyOn(ClientService, 'getCategoriesFromParam');
            filterByCategorySpy = spyOn(ClientService, 'filterByCategory');

            /**
             * Controller
             **/
            DirectorsCtrl = $controller('DirectorsController as DirectorsCtrl', {
                $scope: $scope,
                ClientService: ClientService
            });
        });
    });

    it('is defined', function() {
        expect(DirectorsCtrl).toBeDefined();
    });

    describe('method: get', () => {
        it('should call getByCategory from client service', () => {
            getByCategorySpy.and.callFake(MockPromise($q, []));

            DirectorsCtrl.get();
            $scope.$digest();

            expect(ClientService.getByCategory).toHaveBeenCalled();
        });

        it('should call client service filterByCategory method once per category', () => {
            getByCategorySpy.and.callFake(MockPromise($q, []));

            DirectorsCtrl.get();
            $scope.$digest();

            expect(filterByCategorySpy.calls.count()).toBe(4);
        });

        describe('instance variables', () => {
            let categoryClients;

            beforeEach(() => {
                categoryClients = ClientCollectionWithCategories1();
                getByCategorySpy.and.callFake(MockPromise($q, categoryClients));
                filterByCategorySpy.and.returnValue(categoryClients);
            });

            it('should assign stageClients', () => {
                DirectorsCtrl.get();
                $scope.$digest();

                expect(DirectorsCtrl.stageClients).toEqual(categoryClients);
            });

            it('should assign creativeClients', () => {
                DirectorsCtrl.get();
                $scope.$digest();

                expect(DirectorsCtrl.creativeClients).toEqual(categoryClients);
            });

            it('should assign musicClients', () => {
                DirectorsCtrl.get();
                $scope.$digest();

                expect(DirectorsCtrl.musicClients).toEqual(categoryClients);
            });

            it('should assign videoClients', () => {
                DirectorsCtrl.get();
                $scope.$digest();

                expect(DirectorsCtrl.videoClients).toEqual(categoryClients);
            });
        });
    });
});
