export default class ClientController {
    // @ngInject
    constructor($stateParams, $location, $anchorScroll, ClientService) {
        this.$anchorScroll = $anchorScroll;
        this.$stateParams = $stateParams;
        this.$location = $location;
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

        this.$location.hash(`section-${destination}`);
        this.$anchorScroll();
    }
}
