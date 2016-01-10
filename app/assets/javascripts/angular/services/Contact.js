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

    /**
     * Submit booking form
     *
     * @param {Object} fields
     * @param {String} fields.client_name
     * @param {String} fields.name
     * @param {String} fields.email
     * @param {String} fields.phone
     * @param {String} fields.message
     * @returns {Promise}
     */
    submitBooking(fields) {
        return this.$http.post('api/v1/contact/booking', fields)
            .then(this.commonService.handleHttpResponse('Error while submitting booking form'));
    }

    /**
     * Submit representation form
     *
     * @param {Object} form
     * @returns {promise}
     */
    submitRepresentationForm(form) {
        return this.$http.post('api/v1/contact/representation', form)
            .then(this.commonService.handleHttpResponse('Error while submitting representation form', true));
    }
}
