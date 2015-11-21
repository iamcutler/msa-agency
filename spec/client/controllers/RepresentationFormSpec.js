describe('Controller: RepresentationForm', () => {
    let $rootScope, $scope, $controller;
    let RepresentationFormCtrl;

    beforeEach(() => {
        angular.mock.module('MSAAgency');

        inject($injector => {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $controller = $injector.get('$controller');

            RepresentationFormCtrl = $controller('RepresentationFormController as RepresentationFormCtrl', {
                $scope: $scope
            });
        });
    });

    it('is defined', () => {
        expect(RepresentationFormCtrl).toBeDefined();
    });
});
