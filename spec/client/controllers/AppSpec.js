import { MockPromise } from '../spec_helper';
import { Company1 } from '../fixtures/company';

describe('Controller: App', () => {
    let $scope, $rootScope, $controller, $q;
    let AppCtrl, CompanyService, GetCompanySpy, getReelURLSpy;

    beforeEach(() => {
        angular.mock.module('MSAAgency');

        inject($injector => {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $controller = $injector.get('$controller');
            $q = $injector.get('$q');
            CompanyService = $injector.get('CompanyService');

            /**
             * Controller
             */
            AppCtrl = $controller('AppController as AppCtrl', {
                $scope: $scope,
                CompanyService: CompanyService
            });

            /**
             * Spies
             */
            GetCompanySpy = spyOn(CompanyService, 'get');
            getReelURLSpy = spyOn(AppCtrl, 'getCompanyReelURL').and.callThrough();
        });
    });

    it('should be defined', () => {
        expect(AppCtrl).toBeDefined();
    });

    describe('method: getCompanySettings', () => {
        beforeEach(() => {
            GetCompanySpy.and.callFake(MockPromise($q, Company1));

            AppCtrl.getCompanySettings();
            $scope.$digest();
        });

        it('should call company service', () => {
            expect(CompanyService.get).toHaveBeenCalled();
        });

        it('should set company instance variable', () => {
            expect(AppCtrl.company).toEqual(Company1);
        });

        it('should call getCompanyReelURL method', () => {
            expect(AppCtrl.getCompanyReelURL).toHaveBeenCalled();
        });
    });

    describe('method: getCompanyReelURL', () => {
        it('should return youtube formatted URL', () => {
            var company = Company1;
            company.reel_type = 'youtube';

            expect(AppCtrl.getCompanyReelURL(company)).toBe(`https://www.youtube.com/embed/${Company1.reel_id}`);
        });

        it('should return vimeo formatted string', () => {
            var company = Company1;
            company.reel_type = 'vimeo';

            expect(AppCtrl.getCompanyReelURL(company)).toBe(`https://player.vimeo.com/video/${Company1.reel_id}`);
        });

        it('should return any empty string if not matched', () => {
            var company = Company1;
            company.reel_type = 'msa';

            expect(AppCtrl.getCompanyReelURL(company)).toBe('');
        });
    });
});
