export default class NewsPageController {
    // @ngInject
    constructor($stateParams, NewsService) {
        this.$stateParams = $stateParams;
        this.newsService = NewsService;

        this.article = {};
    }

    initialize() {
        this.getBySlug(this.$stateParams.slug);
    }

    /**
     * Get article by slug
     *
     * @param {String} slug
     */
    getBySlug(slug) {
        return this.newsService.getBySlug(slug)
            .then(response => {
                if(Object.keys(response).length) {
                    this.article = response;
                }
            })
            .catch(err => {

            });
    }
}
