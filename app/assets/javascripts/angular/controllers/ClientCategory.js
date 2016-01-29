export default class ClientCategoryController {
    // @ngInject
    constructor($rootScope, $stateParams, ClientService) {
        // Dependencies
        this.$rootScope = $rootScope;
        this.clientService = ClientService;

        this.category = $stateParams.category;
        this.clients = [];
        this.clientTitle = this.clientService.mapTitleFromCategory(this.category);
        this.$rootScope.isLoadingPage = true;
    }

    initialize() {
        this.getByCategory(this.category);
    }

    /**
     * Get by category
     *
     * @param {String} category
     */
    getByCategory(category) {
        this.clientService.getByCategory([category])
            .then(response => {
                this.clients = response;
            })
            .catch(err => console.log(err))
            .finally(() => this.$rootScope.isLoadingPage = false);
    }
}
