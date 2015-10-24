describe('Controller: Contact', () => {
    var $rootScope, $scope, $controller;
    var ContactCtrl;

    beforeEach(() => {
        module('MSAAgency.controllers');

        inject($injector => {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $controller = $injector.get('$controller');

            ContactCtrl = $controller('ContactController as ContactCtrl', {
                $scope: $scope
            });
        });
    });

    it('is defined', () => {
        $scope.$digest();

        expect(ContactCtrl).toBeDefined();
    });
});
