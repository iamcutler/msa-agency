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

    /**
     * Filter data by category
     *
     * @param {Array} data
     * @param {String} category
     * @returns {Array}
     */
    filterByCategory(data = [], category) {
        try {
            return data.filter(cur => {
                return cur.categories.indexOf(category) !== -1;
            });
        } catch(err) {
            return [];
        }
    }

    /**
     * Get categories based on parameter
     */
    getCategoriesFromParam(category = '') {
        switch(category) {
            case 'dance':
                return ['on_camera', 'dancer', 'kids_teen', 'speciality_act'];
                break;
            case 'creative':
                return ['stage_director', 'creative_director', 'choreographer', 'production'];
                break;
            case 'educators':
                return ['speaker', 'master_instructor', 'sytycd'];
                break;
            default:
                return [];
        }
    }
}
