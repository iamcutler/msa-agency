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
        let categoryArray = [];

        switch(category) {
            case 'dance':
                categoryArray = ['on_camera', 'dance', 'kids_teen', 'speciality_act'];
                break;
            case 'creative':
                categoryArray = ['choreography', 'director', 'production', 'designer'];
                break;
            case 'educators':
                categoryArray = ['speaker', 'master_instructor', 'instructor', 'sytycd'];
                break;
        }

        return categoryArray;
    }

    /**
     * Map title based on category
     *
     * @param {String} category
     * @returns {String}
     */
    mapTitleFromCategory(category) {
        let mappedTitle = '';

        switch(category) {
            case 'choreography':
                mappedTitle = 'Choreographers';
                break;
            case 'designer':
                mappedTitle = 'Designers';
                break;
            case 'production':
                mappedTitle = 'Producers';
                break;
            case 'speaker':
                mappedTitle = 'Speakers';
                break;
            case 'master_instructor':
                mappedTitle = 'Master Instructors';
                break;
            case 'sytycd':
                mappedTitle = 'SYTYCD/DTWS';
                break;
            default:
                mappedTitle = category;
        }

        return mappedTitle;
    }

    /**
     * Get count from collection of types
     * @param {object} resume
     * @param {array} resume.award_shows
     * @param {array} resume.awards
     * @param {array} resume.commercials
     * @param {array} resume.corporate
     * @param {array} resume.events
     * @param {array} resume.film
     * @param {array} resume.miscellaneous
     * @param {array} resume.music_videos
     * @param {array} resume.television
     * @param {array} resume.theater
     * @returns {number}
     */
    getResumeCountFromCollection(resume) {
        let count = 0;

        for(let res in resume) {
            if(Array.isArray(resume[res])) {
                count += resume[res].length;
            }
        }

        return count;
    }
}
