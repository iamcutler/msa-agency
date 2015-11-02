import { MockPromise } from '../spec_helper';

describe('Controller: Staff', () => {
    var $rootScope, $scope, $controller, $q;
    var StaffCtrl;

    beforeEach(() => {
        angular.mock.module('MSAAgency.controllers');

        inject($injector => {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $q = $injector.get('$q');
            $controller = $injector.get('$controller');

            StaffCtrl = $controller('StaffController as StaffCtrl', {
                $scope: $scope,
                $stateParams: {
                    slug: 'tonyselznick'
                }
            });
        });
    });

    it('is defined', () => {
        expect(StaffCtrl).toBeDefined();
    });
});
