import { staff1 } from './../fixtures/staff';

describe('Service: Staff', () => {
    var $rootScope, $scope, $httpBackend;
    var StaffService;

    beforeEach(() => {
        angular.mock.module('MSAAgency', 'MSAAgency.services');

        inject($injector => {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $httpBackend = $injector.get('$httpBackend');
            StaffService = $injector.get('StaffService');
        });
    });

    it('is defined', () => {
        expect(StaffService).toBeDefined();
    });

    describe('method: all', () => {
        it('should return collection of staff members', (done) => {
            $httpBackend.expectGET('api/v1/staff').respond([
                staff1(), staff1(), staff1()
            ]);

            StaffService.all()
                .then(response => {
                    expect(response[0].member).toEqual(jasmine.objectContaining({ first_name: 'Tony' }));
                })
                .finally(done);

            $httpBackend.flush();
        });
    });

    describe('method: getBySlug', (done) => {
        let slug = 'tonyselznick';

        it('should return staff member by slug', () => {
            $httpBackend.expectGET(`api/v1/staff/${slug}`).respond(staff1());

            StaffService.getBySlug(slug)
                .then(response => {
                    expect(response.member).toEqual(jasmine.objectContaining({ first_name: 'Tony' }));
                })
                .finally(done);

            $httpBackend.flush();
        });
    });
});
