export default class ClientController {
    // @ngInject
    constructor($stateParams, $location, smoothScroll, ClientService) {
        this.$stateParams = $stateParams;
        this.$location = $location;
        this.smoothScroll = smoothScroll;
        this.clientService = ClientService;

        this.client = {};
        this.reelPresent = false;
        this.currentNavDestination = 'talent-bio';
    }

    /**
     * Get client by slug
     */
    getBySlug() {
        this.clientService.getBySlug(this.$stateParams.slug)
            .then(response => {
                this.client = response;

                // Check if client has a current reel
                if(response.hasOwnProperty('reel')) {
                    this.reelPresent = true;
                }
            })
            .catch(err => console.log(err));
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
