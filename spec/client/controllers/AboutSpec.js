import { MockPromise } from '../spec_helper';
import { Company1 } from '../fixtures/company';
import { staffMembers1 } from '../fixtures/staff';

describe('Controller: About', () => {
    let $scope, $rootScope, $controller, $q;
    let AboutCtrl, StaffService, CompanyService, GetCompanySpy, GetStaffSpy;

    beforeEach(() => {
        angular.mock.module('MSAAgency');

        inject($injector => {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $controller = $injector.get('$controller');
            $q = $injector.get('$q');
            StaffService = $injector.get('StaffService');
            CompanyService = $injector.get('CompanyService');

            /**
             * Spies
             */
            GetCompanySpy = spyOn(CompanyService, 'get');
            GetStaffSpy = spyOn(StaffService, 'all');

            AboutCtrl = $controller('AboutController as AboutCtrl', {
                $scope: $scope,
                CompanyService: CompanyService,
                StaffService: StaffService
            });
        });
    });

    it('should be defined', () => {
        expect(AboutCtrl).toBeDefined();
    });

    describe('method: getCompanySetting', () => {
        beforeEach(() => {
            GetCompanySpy.and.callFake(MockPromise($q, Company1));
        });

        it('should call company service', () => {
            AboutCtrl.getCompanySetting();
            $scope.$digest();

            expect(CompanyService.get).toHaveBeenCalled();
        });

        it('should set company instance variable', () => {
            AboutCtrl.getCompanySetting();
            $scope.$digest();

            expect(AboutCtrl.company).toEqual(Company1);
        });
    });

    describe('method: getStaff', () => {
        beforeEach(() => {
            GetStaffSpy.and.callFake(MockPromise($q, staffMembers1));
        });

        it('should call staff service', () => {
            AboutCtrl.getStaff();
            $scope.$digest();

            expect(StaffService.all).toHaveBeenCalled();
        });

        it('should set staff instance variable', () => {
            AboutCtrl.getStaff();
            $scope.$digest();

            expect(AboutCtrl.staff).toEqual(staffMembers1);
        });
    });
});
