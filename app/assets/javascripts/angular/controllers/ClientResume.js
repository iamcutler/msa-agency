export default class ClientResumeController {
    constructor($stateParams, ClientService) {
        this.$stateParams = $stateParams;
        this.clientService = ClientService;
    }

    /**
     * Get resume by client slug
     */
    getBySlug() {
        this.clientService.getBySlug(this.$stateParams.slug)
            .then(response => {
                this.client = {
                    name: response.full_name,
                    resume: response.resume
                };
                this.resumeCount = this.clientService.getResumeCountFromCollection(this.client.resume);
            })
            .catch(err => {
                if(err.hasOwnProperty('status') && err.status === 404) {
                    this.$state.go('app.error-404');
                } else {
                    console.error(err);
                }
            });
    }
}
