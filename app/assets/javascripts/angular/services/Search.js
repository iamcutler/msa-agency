export default class SearchService {
    // @ngInject
    constructor($http, CommonService) {
        this.$http = $http;
        this.commonService = CommonService;
    }

    /**
     * Get search results
     *
     * @param {Object} params
     * @param {String} params.q
     * @param {String} params.type
     * @param {Number} params.page
     * @param {Number} params.limit
     * @returns {Promise}
     */
    getResults(params) {
            return this.$http.get('/api/v1/search', {
                params: {
                    q: params.q,
                    type: params.type || '',
                    page: params.page || 1,
                    limit: params.limit || 20
                }
            })
                .then(this.commonService.handleHttpResponse('Error performing search'));
    }

    /**
     * Calculate results count
     *
     * @param {Array|Object} results
     * @returns {Number}
     */
    getResultsCount(results) {
        let count = 0;

        try {
            if(Array.isArray(results)) return results.length;

            for(let result in results) {
                if(Array.isArray(results[result])) {
                    count += results[result].length;
                }
            }

            return count;
        } catch(exception) {
            throw exception;
        }
    }
}
