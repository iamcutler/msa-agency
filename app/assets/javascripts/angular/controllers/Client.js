export default class ClientController {
    // @ngInject
    constructor($state, $stateParams, $location, smoothScroll, ClientService) {
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.$location = $location;
        this.smoothScroll = smoothScroll;
        this.clientService = ClientService;

        this.client = {};
        this.reelPresent = false;
        this.resumeCount = 0;
        this.currentNavDestination = 'talent-bio';
    }

    /**
     * Get client by slug
     */
    getBySlug() {
        this.clientService.getBySlug(this.$stateParams.slug)
            .then(response => {
                this.client = response;
                this.resumeCount = this.clientService.getResumeCountFromCollection(this.client.resume);

                // Check if client has a current reel
                if(response.hasOwnProperty('reel')) {
                    this.reelPresent = true;
                }
            })
            .catch(err => {
                if(err.hasOwnProperty('status') && err.status === 404) {
                    this.$state.go('app.error-404');
                } else {
                    console.log(err);
                }
            });
    }

    /**
     * Set current navigation destination
     *
     * @param {String} destination
     */
    setCurrentNavDestination(destination = 'talent-bio') {
        this.currentNavDestination = destination;

        // todo: Refactor to directive
        this.smoothScroll(document.getElementById(destination), {
            offset: 112
        });
    }
}
