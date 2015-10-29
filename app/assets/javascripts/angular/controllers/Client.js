export default class ClientController {
    constructor($stateParams, ClientService) {
        this.$stateParams = $stateParams;
        this.clientService = ClientService;
        this.client = {};
    }

    /**
     * Get client by slug
     */
    getClientBySlug() {
        this.clientService.getBySlug(this.$stateParams.slug)
            .then(response => {
                this.client = response;
            })
            .catch(err => console.log(err));
    }
}
