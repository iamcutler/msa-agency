export default class ClientService {
    // @ngInject
    constructor($q, $http, CommonService) {
        this.$q = $q;
        this.$http = $http;
        this.commonService = CommonService;
    }

    /**
     * Get by slug
     *
     * @param {String} slug
     * @returns {Promise}
     */
    getBySlug(slug = '') {
        return this.$http.get(`api/v1/clients/${slug}`)
            .then(this.commonService.handleHttpResponse('Error getting client by slug'));
    }

    /**
     * Get clients by categories
     *
     * @param {Array} categories
     * @returns {Promise}
     */
    getByCategory(categories = []) {
        const ERR_MSG = 'Error getting clients by category';

        // Check if categories are an array
        if(!Array.isArray(categories)) return this.$q.reject(ERR_MSG);

        return this.$http.get('api/v1/clients-by-category', {
                params: {
                    categories: categories.join(',')
                }
            })
            .then(this.commonService.handleHttpResponse(ERR_MSG));
    }
}
