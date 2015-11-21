export default class AffiliateService {
    // @ngInject
    constructor($http, CommonService) {
        this.$http = $http;
        this.commonService = CommonService;
    }

    /**
     * Get affiliates
     *
     * @returns {Promise}
     */
    get() {
        return this.$http.get('/api/v1/affiliates')
            .then(this.commonService.handleHttpResponse('Error getting affiliates'));
    }
}
