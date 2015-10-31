describe('Controller: ClientCategory', function() {
    var $rootScope, $scope, $controller, ClientCategoryCtrl;

    beforeEach(function() {
        angular.mock.module('MSAAgency.controllers');

        inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $controller = $injector.get('$controller');

            /**
             * Controller
             **/
            ClientCategoryCtrl = $controller('ClientCategoryController as ClientCategoryCtrl', {
                $scope: $scope,
                $stateParams: {
                    category: 'creative'
                }
            });
        });
    });

    it('is defined', function() {
        expect(ClientCategoryCtrl).toBeDefined();
    });

    it('should assign talent category on instance', function() {
        expect(ClientCategoryCtrl.clientCategory).toBe('creative');
    });
});
