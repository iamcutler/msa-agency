import { MockPromise } from '../spec_helper';

describe('Controller: Booking', () => {
    var $rootScope, $scope, $controller, $q;
    var BookingCtrl, ContactService, formSubmissionSpy;

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
            formSubmissionSpy = spyOn(ContactService, 'submitBooking');

            /**
             * Controller
             */
            BookingCtrl = $controller('BookingController as BookingCtrl', {
                $scope: $scope,
                ContactService: ContactService,
                $stateParams: {
                    client: 'tony+selznick'
                }
            });

            /**
             * Scope
             */
            BookingCtrl.bookingForm = {};
        });
    });

    it('is defined', () => {
        $scope.$digest();

        expect(BookingCtrl).toBeDefined();
    });

    describe('Booking Form', () => {
        describe('Default props', () => {
            it('should have a client name', () => {
                expect(BookingCtrl.booking_form.hasOwnProperty('client_name')).toBe(true);
            });

            it('should have name', () => {
                expect(BookingCtrl.booking_form.hasOwnProperty('name')).toBe(true);
            });

            it('should have email', () => {
                expect(BookingCtrl.booking_form.hasOwnProperty('email')).toBe(true);
            });

            it('should have phone', () => {
                expect(BookingCtrl.booking_form.hasOwnProperty('phone')).toBe(true);
            });

            it('should have message', () => {
                expect(BookingCtrl.booking_form.hasOwnProperty('message')).toBe(true);
            });
        });
    });

    describe('method: submitForm', () => {
        beforeEach(() => {
            // Mock successful validation
            BookingCtrl.bookingForm.$valid = true;
        });

        it('should call ContactService to submit form', () => {
            formSubmissionSpy.and.callFake(MockPromise($q, { success: true }));

            BookingCtrl.submitForm();
            $scope.$digest();

            expect(ContactService.submitBooking).toHaveBeenCalled();
        });

        describe('', () => {
            beforeEach(() => {
                formSubmissionSpy.and.callFake(MockPromise($q, { success: true }));

                BookingCtrl.submitForm();
                $scope.$digest();
            });

            it('should set isSubmitting to false', () => {
                expect(BookingCtrl.isSubmitting).toBe(false);
            });
        });

        describe('on success', () => {
            it('when success flag is true, should set submission message', () => {
                formSubmissionSpy.and.callFake(MockPromise($q, { success: true }));

                BookingCtrl.submitForm();
                $scope.$digest();

                expect(BookingCtrl.submissionMessage).toBe("Thank you for your interest. We'll get back to you asap");
            });
        });

        describe('on failure', () => {
            it('when success flag is false, should set submission message', () => {
                formSubmissionSpy.and.callFake(MockPromise($q, { success: false }));

                BookingCtrl.submitForm();
                $scope.$digest();

                expect(BookingCtrl.submissionMessage).toBe('Something went wrong. Please try again later');
            });

            it('when success flag is false, should set submission message', () => {
                formSubmissionSpy.and.callFake(MockPromise($q, {}, false));

                BookingCtrl.submitForm();
                $scope.$digest();

                expect(BookingCtrl.submissionMessage).toBe('Something went wrong. Please try again later');
            });
        });
    });
});
