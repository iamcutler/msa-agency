import { MockPromise } from '../spec_helper';

describe('Controller: Contact', () => {
    var $rootScope, $scope, $controller, $q;
    var ContactCtrl, ContactService, formSubmissionSpy;

    beforeEach(() => {
        angular.mock.module('MSAAgency');

        inject($injector => {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $controller = $injector.get('$controller');
            $q = $injector.get('$q');
            ContactService = $injector.get('ContactService');

            /**
             * Spies
             */
            formSubmissionSpy = spyOn(ContactService, 'submitForm');

            /**
             * Controller
             */
            ContactCtrl = $controller('ContactController as ContactCtrl', {
                $scope: $scope,
                ContactService: ContactService
            });

            /**
             * Scope
             */
            ContactCtrl.contactForm = {};
        });
    });

    it('is defined', () => {
        $scope.$digest();

        expect(ContactCtrl).toBeDefined();
    });

    describe('Contact Form', () => {
        describe('Default props', () => {
            it('should have regarding', () => {
                expect(ContactCtrl.contact_form.hasOwnProperty('regarding')).toBe(true);
            });

            it('should have name', () => {
                expect(ContactCtrl.contact_form.hasOwnProperty('name')).toBe(true);
            });

            it('should have email', () => {
                expect(ContactCtrl.contact_form.hasOwnProperty('email')).toBe(true);
            });

            it('should have phone', () => {
                expect(ContactCtrl.contact_form.hasOwnProperty('phone')).toBe(true);
            });

            it('should have message', () => {
                expect(ContactCtrl.contact_form.hasOwnProperty('message')).toBe(true);
            });
        });
    });

    describe('method: submitContactForm', () => {
        beforeEach(() => {
            // Mock successful validation
            ContactCtrl.contactForm.$valid = true;
        });

        it('should call ContactService to submit form', () => {
            formSubmissionSpy.and.callFake(MockPromise($q, { success: true }));

            ContactCtrl.submitContactForm();
            $scope.$digest();

            expect(ContactService.submitForm).toHaveBeenCalled();
        });

        describe('', () => {
            beforeEach(() => {
                formSubmissionSpy.and.callFake(MockPromise($q, { success: true }));

                ContactCtrl.submitContactForm();
                $scope.$digest();
            });

            it('should set isSubmitting to false', () => {
                expect(ContactCtrl.isSubmitting).toBe(false);
            });

            it('should set showSubmissionMessage to true', () => {
                expect(ContactCtrl.showSubmissionMessage).toBe(true);
            });

            it('should set showContactForm to false', () => {
                expect(ContactCtrl.showContactForm).toBe(false);
            });
        });

        describe('on success', () => {
            it('when success flag is true, should set submission message', () => {
                formSubmissionSpy.and.callFake(MockPromise($q, { success: true }));

                ContactCtrl.submitContactForm();
                $scope.$digest();

                expect(ContactCtrl.submissionMessage).toBe("Thank you for contact us. We'll get back to you asap");
            });
        });

        describe('on failure', () => {
            it('when success flag is false, should set submission message', () => {
                formSubmissionSpy.and.callFake(MockPromise($q, { success: false }));

                ContactCtrl.submitContactForm();
                $scope.$digest();

                expect(ContactCtrl.submissionMessage).toBe('Something went wrong. Please try again later');
            });

            it('when success flag is false, should set submission message', () => {
                formSubmissionSpy.and.callFake(MockPromise($q, {}, false));

                ContactCtrl.submitContactForm();
                $scope.$digest();

                expect(ContactCtrl.submissionMessage).toBe('Something went wrong. Please try again later');
            });
        });
    });

    describe('method toggleContactForms', () => {
        it('should set showContactForm to false if true', () => {
            ContactCtrl.showContactForm = true;

            ContactCtrl.toggleContactForms();

            expect(ContactCtrl.showContactForm).toBe(false);
        });

        it('should set showContactForm to true if false', () => {
            ContactCtrl.showContactForm = false;

            ContactCtrl.toggleContactForms();

            expect(ContactCtrl.showContactForm).toBe(true);
        });

        it('should set showRepresentationForm to false if true', () => {
            ContactCtrl.showRepresentationForm = true;

            ContactCtrl.toggleContactForms();

            expect(ContactCtrl.showRepresentationForm).toBe(false);
        });

        it('should set showRepresentationForm to true if false', () => {
            ContactCtrl.showRepresentationForm = false;

            ContactCtrl.toggleContactForms();

            expect(ContactCtrl.showRepresentationForm).toBe(true);
        });
    });
});
