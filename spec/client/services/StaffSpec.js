import { staff1, staffMembers1 } from './../fixtures/staff';

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

    afterEach(() => {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('is defined', () => {
        expect(StaffService).toBeDefined();
    });

    describe('method: all', () => {
        it('should return collection of staff members', () => {
            $httpBackend.expectGET('api/v1/staff').respond([
                staff1(), staff1(), staff1()
            ]);

            StaffService.all()
                .then(response => {
                    expect(response[0].member).toEqual(jasmine.objectContaining({ first_name: 'Tony' }));
                });

            $httpBackend.flush();
        });
    });

    describe('method: getBySlug', () => {
        let slug = 'tonyselznick';

        it('should return staff member by slug', () => {
            $httpBackend.expectGET(`api/v1/staff/${slug}`).respond(staff1());

            StaffService.getBySlug(slug)
                .then(response => {
                    expect(response.member).toEqual(jasmine.objectContaining({ first_name: 'Tony' }));
                });

            $httpBackend.flush();
        });
    });

    describe('method: filterByLocation', () => {
        it('should return only Los Angeles based staff members', () => {
            let clients = StaffService.filterByLocation(staffMembers1(), 'Los Angeles');

            expect(clients.length).toEqual(2);
        });

        it('should return only New York based staff members', () => {
            let clients = StaffService.filterByLocation(staffMembers1(), 'New York');

            expect(clients.length).toEqual(1);
        });

        it('should return empty array if location not found', () => {
            let clients = StaffService.filterByLocation(staffMembers1(), 'LA');

            expect(clients.length).toEqual(0);
        });
    });
});
