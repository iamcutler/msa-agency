export default class ContactService {
    // @ngInject
    constructor($http, CommonService) {
        this.$http = $http;
        this.commonService = CommonService;
    }

    submitForm(form_fields) {
        return this.$http.post('api/v1/contact')
            .then(this.commonService.handleHttpResponse('Error while submitting contact form'));
    }

    /**
     * Signup for newsletter
     *
     * @param {String} email_address
     * @returns {Promise}
     */
    newsletterSignup(email_address = '') {
        return this.$http.post('api/v1/newsletter', {
                email_address: email_address
            })
            .then(this.commonService.handleHttpResponse('Error while submitting contact form'));
    }
}
