export default class NewsPageController {
    // @ngInject
    constructor($stateParams, $state, NewsService) {
        this.$stateParams = $stateParams;
        this.$state = $state;
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
                } else {
                    // Redirect to 404 if object is empty
                    this.$state.go('app.error-404');
                }
            })
            .catch(err => {
                // Redirect to 404 if api call fails
                console.log(err.message);
                this.$state.go('app.error-404');
            });
    }
}
