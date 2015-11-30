describe('Controller: Archives', () => {
    let $scope, $rootScope, $controller;
    let ArchivesCtrl;

    beforeEach(() => {
        angular.mock.module('MSAAgency');

        inject($injector => {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $controller = $injector.get('$controller');

            ArchivesCtrl = $controller('ArchivesController as ArchivesCtrl', {
                $scope: $scope
            });
        });
    });

    it('should be defined', () => {
        expect(ArchivesCtrl).toBeDefined();
    });
});
