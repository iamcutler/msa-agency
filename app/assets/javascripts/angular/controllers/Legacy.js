export default class LegacyController {
    // @ngInject
    constructor($rootScope, ClientService) {
        // Dependencies
        this.$rootScope = $rootScope;
        this.clientService = ClientService;

        // Client data
        this.clients = [];
    }

    initialize() {
        this.$rootScope.isLoadingPage = true;

        return this.getLegacy().then(response => {
            this.$rootScope.isLoadingPage = false;
        });
    }

    /**
     * Get legacy members
     *
     * @returns {Promise}
     */
    getLegacy() {
        return this.clientService.getByCategory(['legacy'])
            .then(response => {
                this.clients = response;
            });
    }
}
