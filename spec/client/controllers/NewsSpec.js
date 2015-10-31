describe('Controller: News', () => {
    let $rootScope, $scope, $controller;
    let NewsCtrl;

    beforeEach(() => {
        angular.mock.module('MSAAgency.controllers');

        inject($injector => {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $controller = $injector.get('$controller');

            /**
             * Controller
             */
            NewsCtrl = $controller('NewsController as NewsCtrl', {
                $scope: $scope
            });
            $scope.$digest();
        });
    });

    it('is defined', () => {
        expect(NewsCtrl).toBeDefined();
    });
});
