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
}
