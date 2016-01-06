import { MockPromise } from '../spec_helper';
import { staff1 } from '../fixtures/staff';

describe('Controller: Staff', () => {
    var $rootScope, $scope, $controller, $q;
    var StaffCtrl, StaffService, getBySlugSpy, smoothScroll;

    beforeEach(() => {
        angular.mock.module('MSAAgency');

        inject($injector => {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $q = $injector.get('$q');
            $controller = $injector.get('$controller');
            StaffService = $injector.get('StaffService');

            /**
             * Spies
             */
            getBySlugSpy = spyOn(StaffService, 'getBySlug');

            /**
             * Controller
             */
            StaffCtrl = $controller('StaffController as StaffCtrl', {
                $scope: $scope,
                $stateParams: {
                    slug: 'tonyselznick'
                },
                StaffService: StaffService,
                smoothScroll: jasmine.createSpy('smoothScroll')
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

        it('should call smooth scroll on destination', () => {
            expect(StaffCtrl.smoothScroll).toHaveBeenCalledWith(null, { offset: 112 });
        });
    });
});
