import { client1 } from '../fixtures/clients.js';

describe('Component: TalentHeader', function() {
    var $rootScope, $scope, $compile, element, elementWithHiddenElements;

    beforeEach(() => {
        angular.mock.module('MSAAgency.directives');

        inject($injector => {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $compile = $injector.get('$compile');

            /**
             * Scope
             */
             $scope.client = client1();
             $scope.social = client1().social;
             $scope.$digest();

            /**
             * Elements
             **/
            element = angular.element(`
                <talent-header
                    name="${client1().full_name}"
                    title="${client1().title}"
                    social="social"
                    slug="client.slug"></talent-header>
            `);
            elementWithHiddenElements = angular.element(`
                <talent-header
                    name="${client1().full_name}"
                    title="${client1().title}"
                    social="social"
                    hide-book-btn="true"
                    hide-social-icons="true"
                    hide-share-btn="true"></talent-header>
            `);
        });
    });

    it('is defined', () => {
        element = $compile(element)($scope);

        expect(element).toBeDefined();
    });

    describe('isolate scope', () => {
        beforeEach(() => {
            elementWithHiddenElements = $compile(elementWithHiddenElements)($scope);
            element = $compile(element)($scope);
        });

        it('should have name present', () => {
            expect(element.isolateScope().name).toBe(client1().full_name);
        });

        it('should have title present', () => {
            expect(element.isolateScope().title).toBe(client1().title);
        });

        it('should have social links object present', () => {
            expect(element.isolateScope().social).toEqual(client1().social);
        });

        it('should pass in hide-book-btn as true', () => {
            expect(elementWithHiddenElements.isolateScope().hideBookBtn).toBe(true);
        });

        it('should pass in hide-social-icons as true', () => {
            expect(elementWithHiddenElements.isolateScope().hideSocialIcons).toBe(true);
        });

        it('should pass in hide-share-btn as true', () => {
            expect(elementWithHiddenElements.isolateScope().hideShareBtn).toBe(true);
        });

        it('should pass client slug', () => {
            expect(element.isolateScope().slug).toBe(client1().slug);
        });
    });
});
