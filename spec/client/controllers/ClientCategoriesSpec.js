import { MockPromise } from '../spec_helper';
import { client1, ClientCollectionWithCategories1 } from '../fixtures/clients';

describe('Controller: ClientCategories', function() {
    var $rootScope, $scope, $controller, $q;
    var ClientCategoriesCtrl, ClientService, getByCategorySpy, getCategoryFromParamSpy, filterByCategorySpy;

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
            ClientCategoriesCtrl = $controller('ClientCategoriesController as ClientCategoriesCtrl', {
                $scope: $scope,
                $stateParams: {
                    category: 'creative'
                },
                ClientService: ClientService
            });
        });
    });

    it('is defined', function() {
        expect(ClientCategoriesCtrl).toBeDefined();
    });

    it('should assign talent category on instance', function() {
        expect(ClientCategoriesCtrl.clientCategory).toBe('creative');
    });

    describe('method: initialize', () => {
        it('should call getByCategory from client service', () => {
            getByCategorySpy.and.callFake(MockPromise($q, []));

            ClientCategoriesCtrl.initialize();
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
                ClientCategoriesCtrl.initialize();
                $scope.$digest();

                expect(ClientCategoriesCtrl.onCameraClients).toEqual(categoryClients);
            });

            it('should assign onCameraClients', () => {
                ClientCategoriesCtrl.initialize();
                $scope.$digest();

                expect(ClientCategoriesCtrl.dancersClients).toEqual(categoryClients);
            });

            it('should assign onCameraClients', () => {
                ClientCategoriesCtrl.initialize();
                $scope.$digest();

                expect(ClientCategoriesCtrl.kidsAndTeensClients).toEqual(categoryClients);
            });

            it('should assign onCameraClients', () => {
                ClientCategoriesCtrl.initialize();
                $scope.$digest();

                expect(ClientCategoriesCtrl.specialityClients).toEqual(categoryClients);
            });

            it('should assign onCameraClients', () => {
                ClientCategoriesCtrl.initialize();
                $scope.$digest();

                expect(ClientCategoriesCtrl.stageDirectorsClients).toEqual(categoryClients);
            });

            it('should assign onCameraClients', () => {
                ClientCategoriesCtrl.initialize();
                $scope.$digest();

                expect(ClientCategoriesCtrl.creativeDirectorsClients).toEqual(categoryClients);
            });

            it('should assign onCameraClients', () => {
                ClientCategoriesCtrl.initialize();
                $scope.$digest();

                expect(ClientCategoriesCtrl.choreographyClients).toEqual(categoryClients);
            });

            it('should assign onCameraClients', () => {
                ClientCategoriesCtrl.initialize();
                $scope.$digest();

                expect(ClientCategoriesCtrl.productionClients).toEqual(categoryClients);
            });

            it('should assign onCameraClients', () => {
                ClientCategoriesCtrl.initialize();
                $scope.$digest();

                expect(ClientCategoriesCtrl.speakerClients).toEqual(categoryClients);
            });

            it('should assign onCameraClients', () => {
                ClientCategoriesCtrl.initialize();
                $scope.$digest();

                expect(ClientCategoriesCtrl.masterInstructorClients).toEqual(categoryClients);
            });

            it('should assign onCameraClients', () => {
                ClientCategoriesCtrl.initialize();
                $scope.$digest();

                expect(ClientCategoriesCtrl.instructorClients).toEqual(categoryClients);
            });

            it('should assign onCameraClients', () => {
                ClientCategoriesCtrl.initialize();
                $scope.$digest();

                expect(ClientCategoriesCtrl.sytycdClients).toEqual(categoryClients);
            });
        });
    });
});
