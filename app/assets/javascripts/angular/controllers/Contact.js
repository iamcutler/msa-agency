const SUBMISSION_SUCCESS_MESSAGE = 'Thank you for contact us. We\'ll get back to you asap';
const SUBMISSION_FAILURE_MESSAGE = 'Something went wrong. Please try again later';

export default class ContactController {
    // @ngInject
    constructor(ContactService) {
        this.contactService = ContactService;

        this.contact_form = {
            regarding: '',
            name: '',
            email: '',
            phone: '',
            message: ''
        };
        this.isSubmitting = false;
        this.showContactForm = true;
        this.showRepresentationForm = false;
        this.showSubmissionMessage = false;
        this.submissionMessage = '';
    }

    /**
     * Submit contact form
     */
    submitContactForm() {
        // Check if contact form is valid
        if(this.contactForm.$valid) {
            this.isSubmitting = true;

            this.contactService.submitForm(this.contact_form)
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
                    this.showSubmissionMessage = true;
                    this.showContactForm = false; // Hide contact form
                });
        }
    }

    /**
     * Toggle between contact forms
     */
    toggleContactForms() {
        this.showContactForm = this.showContactForm ? false : true;
        this.showRepresentationForm = this.showRepresentationForm ? false : true;
    }
}
