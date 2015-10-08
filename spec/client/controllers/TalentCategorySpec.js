describe('Controller: TalentCategory', function() {
    var $rootScope, $scope, $controller, TalentCategoryCtrl;

    beforeEach(function() {
        module('MSAAgency.controllers');

        inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $controller = $injector.get('$controller');

            /**
             * Controller
             **/
            TalentCategoryCtrl = $controller('TalentCategoryController as TalentCategoryCtrl', {
                $scope: $scope,
                $stateParams: {
                    category: 'creative'
                }
            });
        });
    });

    it('is defined', function() {
        expect(TalentCategoryCtrl).toBeDefined();
    });

    it('should assign talent category on instance', function() {
        expect(TalentCategoryCtrl.talentCategory).toBe('creative');
    });
});
