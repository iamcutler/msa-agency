export default class NewsController {
    // @ngInject
    constructor(NewsService) {
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
        return this.newsService.all(params)
            .then(response => {
                this.news = response;
            });
    }
}
