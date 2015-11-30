export default class PageSlideService {
    // @ngInject
    constructor($http, CommonService) {
        this.$http = $http;
        this.commonService = CommonService;
    }

    /**
     * Get slides by page
     *
     * @param {String} page
     * @returns {Promise}
     */
    getByPage(page = 'home') {
        return this.$http.get('/api/v1/page-slides', {
                params: {
                    section: page
                }
            }).then(this.commonService.handleHttpResponse('Error getting page slides'));
    }
}
