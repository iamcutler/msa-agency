import {
    client1,
    ClientCollectionWithCategories1,
    clientSocial1,
    clientSocial2,
    clientSocial3
} from '../fixtures/clients';
import { ClientResume1 } from '../fixtures/resume';

describe('Service: Client', () => {
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

            expect(categories).toEqual(['choreography', 'stage_director', 'creative_director', 'production', 'designer', 'music_director', 'video_director']);
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

    describe('method: mapCategoryFromParam', () => {
        it('return choregraphy from choreographers', () => {
            var category = ClientService.mapCategoryFromParam('choreographers');

            expect(category).toBe('choreography');
        });

        it('return production from producers', () => {
            var category = ClientService.mapCategoryFromParam('producers');

            expect(category).toBe('production');
        });

        it('return anything else not mapped', () => {
            var category = ClientService.mapCategoryFromParam('dance');

            expect(category).toBe('dance');
        });
    });

    describe('method: mapResumeTitleFromCategory', () => {
        it('should return events title', () => {
            const result = ClientService.mapResumeTitleFromCategory('event');

            expect(result).toBe('Concerts/Tours/Events');
        });

        it('should return televison title', () => {
            const result = ClientService.mapResumeTitleFromCategory('television');

            expect(result).toBe('Television');
        });

        it('should return award shows title', () => {
            const result = ClientService.mapResumeTitleFromCategory('award_show');

            expect(result).toBe('Award Shows');
        });

        it('should return film title', () => {
            const result = ClientService.mapResumeTitleFromCategory('film');

            expect(result).toBe('Film');
        });

        it('should return commercials title', () => {
            const result = ClientService.mapResumeTitleFromCategory('commercial');

            expect(result).toBe('Commercials');
        });

        it('should return music video title', () => {
            const result = ClientService.mapResumeTitleFromCategory('music_video');

            expect(result).toBe('Music Videos');
        });

        it('should return corporate title', () => {
            const result = ClientService.mapResumeTitleFromCategory('corporate');

            expect(result).toBe('Corporate');
        });

        it('should return misc title', () => {
            const result = ClientService.mapResumeTitleFromCategory('misc');

            expect(result).toBe('Miscellaneous');
        });

        it('should return awards title', () => {
            const result = ClientService.mapResumeTitleFromCategory('award');

            expect(result).toBe('Awards');
        });

        it('should return theater title', () => {
            const result = ClientService.mapResumeTitleFromCategory('theater');

            expect(result).toBe('Theatre');
        });

        it('should return print title', () => {
            const result = ClientService.mapResumeTitleFromCategory('print');

            expect(result).toBe('Print');
        });

        it('should return teaching title', () => {
            const result = ClientService.mapResumeTitleFromCategory('teaching');

            expect(result).toBe('Teaching');
        });

        it('should return industrials title', () => {
            const result = ClientService.mapResumeTitleFromCategory('industrials');

            expect(result).toBe('Industrials');
        });
    });

    describe('method: sortBySocialStats', () => {
        it('should sort by social sum', () => {
            // given
            const clients = [clientSocial1, clientSocial2, clientSocial3];
            // when
            const result = ClientService.sortBySocialStats(clients);
            // then
            expect(result[0].id).toEqual(3);
            expect(result[1].id).toEqual(2);
            expect(result[2].id).toEqual(1);
        });
    });

    describe('method: getSocialStatSum', () => {
        it('return sum from social stats', () => {
            // given
            const stats = {
                twitter: 400,
                instagram: 100,
                youtube: 10
            };
            // when
            const result = ClientService.getSocialStatSum(stats);
            // then
            expect(result).toEqual(510);
        });
    });
});
