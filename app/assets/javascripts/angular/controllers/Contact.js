export default class ContactController {
    // @ngInject
    constructor() {
        this.contact_form = {
            regarding: '',
            name: '',
            email: '',
            phone: '',
            message: ''
        };
        this.showContactForm = true;
        this.showRepresentationForm = false;
    }

    /**
     * Submit contact form
     */
    submitContactForm() {
        // Check if contact form is valid
        if(this.contactForm.$valid) {
            alert('submitted');
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
