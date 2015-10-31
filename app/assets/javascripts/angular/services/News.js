export default class NewsService {
    // @ngInject
    constructor($http, CommonService) {
        this.$http = $http;
        this.commonService = CommonService;
    }

    /**
     * Get news articles
     *
     * @param {Object} params
     * @param {Number} params.limit
     * @param {Number} params.offset
     * @returns {Promise}
     */
    all(params = {}) {
        return this.$http.get('api/v1/news', {
            params: params
        }).then(this.commonService.handleHttpResponse('Error getting news articles'));
    }
}
