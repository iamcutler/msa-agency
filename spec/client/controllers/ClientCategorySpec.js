import { MockPromise } from '../spec_helper';
import { client1, ClientCollectionWithCategories1 } from '../fixtures/clients';

describe('Controller: ClientCategory', function() {
    var $rootScope, $scope, $controller, $q;
    var ClientCategoryCtrl, ClientService, getByCategorySpy, getCategoryFromParamSpy, filterByCategorySpy;

    beforeEach(function() {
        angular.mock.module('MSAAgency.controllers', 'MSAAgency.services');

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
            ClientCategoryCtrl = $controller('ClientCategoryController as ClientCategoryCtrl', {
                $scope: $scope,
                $stateParams: {
                    category: 'director'
                },
                ClientService: ClientService
            });
        });
    });

    it('is defined', function() {
        expect(ClientCategoryCtrl).toBeDefined();
    });

    it('should assign talent category on instance', () => {
        expect(ClientCategoryCtrl.category).toBe('director');
    });

    describe('method: initialize', () => {
        it('should call getByCategory from client service', () => {
            getByCategorySpy.and.callFake(MockPromise($q, []));

            ClientCategoryCtrl.initialize();
            $scope.$digest();

            expect(ClientService.getByCategory).toHaveBeenCalled();
        });

        describe('instance variables', () => {
            let categoryClients;

            beforeEach(() => {
                categoryClients = ClientCollectionWithCategories1();
                getByCategorySpy.and.callFake(MockPromise($q, categoryClients));
                filterByCategorySpy.and.returnValue(categoryClients);
            });

            it('should assign clients', () => {
                ClientCategoryCtrl.initialize();
                $scope.$digest();

                expect(ClientCategoryCtrl.clients).toEqual(categoryClients);
            });
        });
    });
});
