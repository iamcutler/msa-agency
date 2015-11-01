export default class StaffService {
    // @ngInject
    constructor($http, CommonService) {
        this.$http = $http;
        this.commonService = CommonService;
    }

    /**
     * Get all staff members
     *
     * @returns {Promise}
     */
    all() {
        return this.$http.get('api/v1/staff')
            .then(this.commonService.handleHttpResponse('Error getting staff members'));
    }

    /**
     * Get staff member by slug
     *
     * @param {String} slug
     * @returns {Promise}
     */
    getBySlug(slug = '') {
        return this.$http.get(`api/v1/staff/${slug}`)
            .then(this.commonService.handleHttpResponse('Error getting staff member'));
    }

    /**
     * Filter staff by location
     *
     * @param {Array} clients
     * @param {String} location
     * @returns {Array}
     */
    filterByLocation(clients = [], location = 'Los Angeles') {
        try {
            return clients.filter(client => {
                client.location.split(',').forEach(loc => {
                    loc = loc.trim();
                });

                return client.location.indexOf(location) !== -1;
            });
        } catch(err) {
            return [];
        }
    }
}
