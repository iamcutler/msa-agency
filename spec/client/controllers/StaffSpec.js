import { MockPromise } from '../spec_helper';
import { staff1 } from '../fixtures/staff';

describe('Controller: Staff', () => {
    var $rootScope, $scope, $controller, $q, $location;
    var StaffCtrl, StaffService, getBySlugSpy;

    beforeEach(() => {
        angular.mock.module('MSAAgency');

        inject($injector => {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $q = $injector.get('$q');
            $controller = $injector.get('$controller');
            $location = $injector.get('$location');
            StaffService = $injector.get('StaffService');

            /**
             * Spies
             */
            getBySlugSpy = spyOn(StaffService, 'getBySlug');
            spyOn($location, 'hash');

            /**
             * Controller
             */
            StaffCtrl = $controller('StaffController as StaffCtrl', {
                $scope: $scope,
                $stateParams: {
                    slug: 'tonyselznick'
                },
                StaffService: StaffService
            });
        });
    });

    it('is defined', () => {
        expect(StaffCtrl).toBeDefined();
    });

    describe('method: getBySlug', () => {
        describe('success', () => {
            beforeEach(() => {
                getBySlugSpy.and.callFake(MockPromise($q, staff1()));
            });

            it('should call staff service to get by slug', () => {
                StaffCtrl.getBySlug();
                $scope.$digest();

                expect(StaffService.getBySlug).toHaveBeenCalledWith('tonyselznick');
            });

            it('should assign staff member to member scope', () => {
                StaffCtrl.getBySlug();
                $scope.$digest();

                expect(StaffCtrl.member).toEqual(staff1());
            });
        });
    });

    describe('method: setCurrentNavDestination', () => {
        beforeEach(() => {
            StaffCtrl.setCurrentNavDestination('staff-press');
        });

        it('should set destination for currentNavDestination', () => {
            expect(StaffCtrl.currentNavDestination).toBe('staff-press');
        });

        it('should set location hash', () => {
            expect($location.hash).toHaveBeenCalledWith('section-staff-press');
        });
    });
});
