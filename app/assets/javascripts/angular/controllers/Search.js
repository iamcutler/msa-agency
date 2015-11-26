export default class SearchController {
    // @ngInject
    constructor($rootScope, $stateParams, SearchService) {
        this.$rootScope = $rootScope;
        this.$stateParams = $stateParams;
        this.searchService = SearchService
        this.query = this.$stateParams.q; // Active search keywords

        this.currentPage = 1;
        this.pageSize = 20;
        this.results = {
            count: 0,
            clients: [],
            news: []
        };
    }

    initialize() {
        this.getResults({
            q: this.query
        });
    }

    /**
     * Get search results
     *
     * @param {Object} params
     * @param {String} params.q
     * @param {String} params.type
     * @param {Number} params.page
     * @param {Number} params.limit
     */
    getResults(params) {
        this.$rootScope.isLoadingPage = true;

        return this.searchService.getResults(params)
            .then(response => {
                try {
                    if(response.hasOwnProperty('clients')) {
                        this.results.clients = response.clients;
                    }

                    if(response.hasOwnProperty('news')) {
                        this.results.news = response.news;
                    }

                    // Calculate results total
                    this.results.count = this.searchService.getResultsCount(response);
                } catch(exception) {
                    console.log(exception.message);
                }
            })
            .finally(() => this.$rootScope.isLoadingPage = false);
    }
}
