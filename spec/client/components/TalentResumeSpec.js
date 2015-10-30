import { resume1, resume2 } from '../fixtures/resume';

describe('Component: TalentResume', function() {
    var $rootScope, $scope, $compile, element;

    beforeEach(function() {
        angular.mock.module('MSAAgency.directives');

        inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $compile = $injector.get('$compile');

            /**
             * Scope data
             */
            $scope.resume = [resume1(), resume2(), resume1(), resume2()];

            /**
             * Elements
             **/
            element = angular.element(`
                <talent-resume
                    title="Music Videos"
                    data="resume"></talent-resume>
            `);
            element = $compile(element)($scope);
        });
    });

    it('is defined', function() {
        expect(element).toBeDefined();
    });

    describe('isolate scope', () => {
        it('should pass in resume title', () => {
            expect(element.isolateScope().title).toBe('Music Videos');
        });

        it('should pass in resume data', () => {
            expect(element.isolateScope().resume).toEqual($scope.resume);
        });
    });
});
