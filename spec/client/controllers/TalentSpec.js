describe('Controller: Talent', function() {
    var $rootScope, $scope, $controller;
    var TalentCtrl;

    beforeEach(function() {
        angular.mock.module('MSAAgency.controllers');

        inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $controller = $injector.get('$controller');

            /**
             *
             **/
            TalentCtrl = $controller('TalentController as TalentCtrl', {
                $scope: $scope,
                $stateParams: {}
            });
            $scope.$digest();
        });
    });

    it('is defined', function() {
        expect(TalentCtrl).toBeDefined();
    });
});
