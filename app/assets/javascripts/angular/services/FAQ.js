export default class FAQService {
    // @ngInject
    constructor($http, CommonService) {
        this.$http = $http;
        this.commonService = CommonService;
    }

    /**
     * Get all frequent asked questions
     *
     * @returns {Promise}
     */
    get() {
        return this.$http.get('/api/v1/faq')
            .then(this.commonService.handleHttpResponse('Error getting frequent asked questions'));
    }
}
