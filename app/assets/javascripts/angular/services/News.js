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

    /**
     * Find by news slug
     *
     * @param {String} slug
     * @returns {Promise}
     */
    getBySlug(slug = '') {
        return this.$http.get(`api/v1/news/${slug}`)
            .then(this.commonService.handleHttpResponse('Error getting news articles by slug'));
    }

    /**
     * Get featured news articles
     *
     * @param {Object} params
     * @param {Number} params.limit
     * @param {Number} params.offset
     * @returns {Promise}
     */
    getFeaturedArticles(params = {}) {
        return this.$http.get('api/v1/featured-news', {
            params: params
        }).then(this.commonService.handleHttpResponse('Error getting featured news articles'));
    }
}
