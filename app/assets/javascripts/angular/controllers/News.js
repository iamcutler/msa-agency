export default class NewsController {
    // @ngInject
    constructor($rootScope, NewsService) {
        this.$rootScope = $rootScope;
        this.newsService = NewsService;

        this.currentPage = 1;
        this.news = {};
    }

    initialize() {
        this.getNews();
    }

    /**
     * Get news
     *
     * @param {Object} params
     * @param {Number} params.limit
     * @param {Number} params.offset
     */
    getNews(params = {}) {
        this.$rootScope.isLoadingPage = true;

        return this.newsService.all(params)
            .then(response => {
                this.news = response;
            })
            .finally(() => this.$rootScope.isLoadingPage = false);
    }

    /**
     * Pagination on news articles
     *
     * @param {Number} page
     */
    paginate(page = 1) {
        this.getNews({
            offset: page
        });
    }
}
