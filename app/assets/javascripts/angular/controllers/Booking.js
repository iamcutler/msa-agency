const SUBMISSION_SUCCESS_MESSAGE = 'Thank you for your interest. We\'ll get back to you asap';
const SUBMISSION_FAILURE_MESSAGE = 'Something went wrong. Please try again later';

export default class BookingController {
    // @ngInject
    constructor($stateParams, ContactService) {
        this.client = $stateParams.client.replace('+', ' ');
        this.contactService = ContactService;

        this.booking_form = {
            client_name: this.client,
            name: '',
            email: '',
            phone: '',
            message: ''
        };
        this.isSubmitting = false;
        this.submitted = false;
        this.submissionMessage = '';
    }

    /**
     * Submit contact form
     */
    submitForm() {
        // Check if contact form is valid
        if(this.bookingForm.$valid) {
            this.isSubmitting = true;

            this.contactService.submitBooking(this.booking_form)
                .then(response => {
                    if(response.success) {
                        this.submissionMessage = SUBMISSION_SUCCESS_MESSAGE;
                    } else {
                        this.submissionMessage = SUBMISSION_FAILURE_MESSAGE;
                    }
                })
                .catch(() => {
                    this.submissionMessage = SUBMISSION_FAILURE_MESSAGE;
                })
                .finally(() => {
                    this.isSubmitting = false;
                    this.submitted = true;
                });
        }
    }
}
