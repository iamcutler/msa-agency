export default class NewsletterController {
    // @ngInject
    constructor(ContactService) {
        this.contactService = ContactService;
        this.email = ''; // User email
        this.successfulSubmission = false;
    }

    /**
     * Submit newsletter
     */
    submit()
    {
        if(this.email) {
            this.contactService.newsletterSignup(this.email)
                .then(response => {
                    this.successfulSubmission = true;
                });
        }
    }
}
