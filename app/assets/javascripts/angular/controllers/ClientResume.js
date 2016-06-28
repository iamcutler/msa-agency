export default class ClientResumeController {
    // @ngInject
    constructor($state, $stateParams, ClientService) {
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.clientService = ClientService;
        this.resumeCount = 0;
    }

    /**
     * Get resume by client slug
     */
    getBySlug() {
        this.clientService.getBySlug(this.$stateParams.slug)
            .then(response => {
                this.client = {
                    name: response.full_name,
                    resume: response.resume,
                    resume_order: response.resume_order
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

    /**
     * Map resume title from category
     *
     * @param {string} category
     * @returns {string}
     */
    mapResumeTitleFromCategory(category) {
        return this.clientService.mapResumeTitleFromCategory(category);
    }
}
