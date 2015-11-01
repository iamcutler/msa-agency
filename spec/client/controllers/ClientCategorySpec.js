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
                    category: 'creative'
                },
                ClientService: ClientService
            });
        });
    });

    it('is defined', function() {
        expect(ClientCategoryCtrl).toBeDefined();
    });

    it('should assign talent category on instance', function() {
        expect(ClientCategoryCtrl.clientCategory).toBe('creative');
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

            it('should assign onCameraClients', () => {
                ClientCategoryCtrl.initialize();
                $scope.$digest();

                expect(ClientCategoryCtrl.onCameraClients).toEqual(categoryClients);
            });

            it('should assign onCameraClients', () => {
                ClientCategoryCtrl.initialize();
                $scope.$digest();

                expect(ClientCategoryCtrl.dancersClients).toEqual(categoryClients);
            });

            it('should assign onCameraClients', () => {
                ClientCategoryCtrl.initialize();
                $scope.$digest();

                expect(ClientCategoryCtrl.kidsAndTeensClients).toEqual(categoryClients);
            });

            it('should assign onCameraClients', () => {
                ClientCategoryCtrl.initialize();
                $scope.$digest();

                expect(ClientCategoryCtrl.specialityClients).toEqual(categoryClients);
            });

            it('should assign onCameraClients', () => {
                ClientCategoryCtrl.initialize();
                $scope.$digest();

                expect(ClientCategoryCtrl.stageDirectorsClients).toEqual(categoryClients);
            });

            it('should assign onCameraClients', () => {
                ClientCategoryCtrl.initialize();
                $scope.$digest();

                expect(ClientCategoryCtrl.creativeDirectorsClients).toEqual(categoryClients);
            });

            it('should assign onCameraClients', () => {
                ClientCategoryCtrl.initialize();
                $scope.$digest();

                expect(ClientCategoryCtrl.choreographyClients).toEqual(categoryClients);
            });

            it('should assign onCameraClients', () => {
                ClientCategoryCtrl.initialize();
                $scope.$digest();

                expect(ClientCategoryCtrl.productionClients).toEqual(categoryClients);
            });

            it('should assign onCameraClients', () => {
                ClientCategoryCtrl.initialize();
                $scope.$digest();

                expect(ClientCategoryCtrl.speakerClients).toEqual(categoryClients);
            });

            it('should assign onCameraClients', () => {
                ClientCategoryCtrl.initialize();
                $scope.$digest();

                expect(ClientCategoryCtrl.masterInstructorClients).toEqual(categoryClients);
            });

            it('should assign onCameraClients', () => {
                ClientCategoryCtrl.initialize();
                $scope.$digest();

                expect(ClientCategoryCtrl.instructorClients).toEqual(categoryClients);
            });

            it('should assign onCameraClients', () => {
                ClientCategoryCtrl.initialize();
                $scope.$digest();

                expect(ClientCategoryCtrl.sytycdClients).toEqual(categoryClients);
            });
        });
    });
});
