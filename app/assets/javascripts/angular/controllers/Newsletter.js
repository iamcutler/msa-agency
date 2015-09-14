export default class NewsletterController {
    constructor() {
        this.email = ''; // User email
    }

    /**
     * Submit newsletter
     */
    submit()
    {
        if(this.email) console.log(this.email);
    }
}
