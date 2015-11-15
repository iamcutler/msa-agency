export default class ContactService {
    // @ngInject
    constructor($http, CommonService) {
        this.$http = $http;
        this.commonService = CommonService;
    }

    /**
     * Submit contact form
     *
     * @param {Object} fields
     * @param {String} fields.regarding
     * @param {String} fields.name
     * @param {String} fields.email
     * @param {String} fields.phone
     * @param {String} fields.message
     */
    submitForm(fields) {
        return this.$http.post('api/v1/contact/form', fields)
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
