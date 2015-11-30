import { PageSlide1 } from '../fixtures/page_slides';

describe('Service: PageSlide', () => {
    let $rootScope, $scope, $httpBackend;
    let PageSlideService;

    beforeEach(() => {
        angular.mock.module('MSAAgency.services');

        inject($injector => {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $httpBackend = $injector.get('$httpBackend');
            PageSlideService = $injector.get('PageSlideService');
        });
    });

    it('should be defined', () => {
        expect(PageSlideService).toBeDefined();
    });

    describe('method: getByPage', () => {
        it('should return page slides', () => {
            $httpBackend.expectGET('/api/v1/page-slides?section=home').respond([PageSlide1]);

            PageSlideService.getByPage('home').then(response => {
                expect(response[0]).toEqual(jasmine.objectContaining(PageSlide1));
            });
            $httpBackend.flush();
        });
    });
});
