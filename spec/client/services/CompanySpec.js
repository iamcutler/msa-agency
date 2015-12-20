describe('Service: Company', () => {
    let $rootScope, $scope, $httpBackend, CompanyService;

    beforeEach(() => {
        angular.mock.module('MSAAgency.services');

        inject($injector => {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $httpBackend = $injector.get('$httpBackend');
            CompanyService = $injector.get('CompanyService');
        });
    });

    it('should be defined', () => {
        expect(CompanyService).toBeDefined();
    });

    describe('method: get', () => {
        it('should call backend for company settings', () => {
            let response = {
                reel_id: 12345,
                reel_type: 'youtube'
            };

            $httpBackend.expectGET('api/v1/company').respond(response);

            CompanyService.get().then(data => {
                expect(data).toEqual(response);
            });
            $httpBackend.flush();
        });
    });
});
