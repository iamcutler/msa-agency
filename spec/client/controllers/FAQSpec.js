import { MockPromise } from '../spec_helper';
import { FAQ1 } from '../fixtures/faq';

describe('Controller: FAQ', () => {
    let $rootScope, $scope, $controller, $q;
    let FAQCtrl, FAQService, faqSpy;

    beforeEach(() => {
        angular.mock.module('MSAAgency');

        inject($injector => {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $controller = $injector.get('$controller');
            $q = $injector.get('$q');
            FAQService = $injector.get('FAQService');

            FAQCtrl = $controller('FAQController as FAQCtrl', {
                $scope: $scope
            });

            /**
             * Spies
             */
             faqSpy = spyOn(FAQService, 'get');
        });
    });

    it('is defined', () => {
        expect(FAQCtrl).toBeDefined();
    });

    describe('method: getQuestions', () => {
        describe('on success', () => {
            beforeEach(() => {
                faqSpy.and.callFake(MockPromise($q, [FAQ1]));
            });

            it('should call faq service', () => {
                FAQCtrl.getQuestions();
                $scope.$digest();

                expect(FAQService.get).toHaveBeenCalled();
            });
        });
    });

    describe('method: toggleQuestion', () => {
        it('should add question index to array if closed', () => {
            FAQCtrl.openedQuestions = [];

            FAQCtrl.toggleQuestion(1);
            $scope.$digest();

            expect(FAQCtrl.openedQuestions).toContain(1);
        });

        it('should remove question index from array if open', () => {
            FAQCtrl.openedQuestions = [1];

            FAQCtrl.toggleQuestion(1);
            $scope.$digest();

            expect(FAQCtrl.openedQuestions).not.toContain(1);
        });
    });
});
