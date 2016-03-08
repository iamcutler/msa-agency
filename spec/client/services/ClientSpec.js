import { client1, ClientCollectionWithCategories1 } from '../fixtures/clients';
import { ClientResume1 } from '../fixtures/resume';

describe('Service: Talent', () => {
    var $rootScope, $scope, $q, $httpBackend;
    var ClientService;

    beforeEach(() => {
        angular.mock.module('MSAAgency.services');

        inject($injector => {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $q = $injector.get('$q');
            $httpBackend = $injector.get('$httpBackend');
            ClientService = $injector.get('ClientService');

            /**
             * Spies
             */
             spyOn($q, 'reject');
        });
    });

    afterEach(() => {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('is defined', () => {
        expect(ClientService).toBeDefined();
    });

    describe('method: getBySlug', () => {
        let slug = 'nappytabs';

        it('should return client', () => {
            $httpBackend.expectGET(`api/v1/clients/${slug}`).respond(client1());

            ClientService.getBySlug(slug)
                .then(response => {
                    expect(response).toEqual(client1());
                });

            $httpBackend.flush();
        });
    });

    describe('method: getByCategory', () => {
        it('should return client list', () => {
            $httpBackend.expectGET('api/v1/clients-by-category?categories=choregraphy,educator').respond([client1(), client1()]);

            ClientService.getByCategory(['choregraphy', 'educator'])
                .then(response => {
                    expect(response).toEqual([client1(), client1()]);
                });

            $httpBackend.flush();
        });

        it('should return rejected promise if arg is not a array', () => {
            ClientService.getByCategory('choregraphy', 'educator');

            expect($q.reject).toHaveBeenCalled();
        });
    });

    describe('method: filterByCategory', () => {
        it('should return choregraphy category from collection', () => {
            var data = ClientService.filterByCategory(ClientCollectionWithCategories1(), 'choreography');

            expect(data.length).toEqual(1);
        });

        it('should return educator category from collection', () => {
            var data = ClientService.filterByCategory(ClientCollectionWithCategories1(), 'educator');

            expect(data.length).toEqual(3);
        });
    });

    describe('method: getCategoriesFromParam', () => {
        it('should return dance categories', () => {
            var categories = ClientService.getCategoriesFromParam('dance');

            expect(categories).toEqual(['on_camera', 'dance', 'kids_teen', 'specialty_act']);
        });

        it('should return creative categories', () => {
            var categories = ClientService.getCategoriesFromParam('creative');

            expect(categories).toEqual(['choreography', 'director', 'production', 'designer']);
        });

        it('should return educators categories', () => {
            var categories = ClientService.getCategoriesFromParam('educators');

            expect(categories).toEqual(['speaker', 'master_instructor', 'instructor', 'sytycd']);
        });
    });

    describe('method: mapTitleFromCategory', () => {
        it('should return designers from designer', () => {
            expect(ClientService.mapTitleFromCategory('designer')).toBe('Designers');
        });

        it('should return choreographers from choreography', () => {
            expect(ClientService.mapTitleFromCategory('choreography')).toBe('Choreographers');
        });

        it('should return producers from production', () => {
            expect(ClientService.mapTitleFromCategory('production')).toBe('Producers');
        });

        it('should return speakers from speaker', () => {
            expect(ClientService.mapTitleFromCategory('speaker')).toBe('Speakers');
        });

        it('should return Master Instructors from master_instructor', () => {
            expect(ClientService.mapTitleFromCategory('master_instructor')).toBe('Master Instructors');
        });

        it('should return Instructors from instructor', () => {
            expect(ClientService.mapTitleFromCategory('instructor')).toBe('Instructors');
        });

        it('should return Master SYTYCD/DWTS from sytycd', () => {
            expect(ClientService.mapTitleFromCategory('sytycd')).toBe('SYTYCD/DWTS');
        });
    });

    describe('method: getResumeCountFromCollection', () => {
        it('should return a count of 3', () => {
            var result = ClientService.getResumeCountFromCollection(ClientResume1);

            expect(result).toBe(3);
        });

        it('should return a count of 0', () => {
            ClientResume1.television.length = 0;

            var result = ClientService.getResumeCountFromCollection(ClientResume1);

            expect(result).toBe(0);
        });
    });
});
