export default class ClientController {
    // @ngInject
    constructor($state, $stateParams, $location, smoothScroll, ClientService) {
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.$location = $location;
        this.smoothScroll = smoothScroll;
        this.clientService = ClientService;

        this.client = {};
        this.clientReelUrl = null;
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
                if(response.hasOwnProperty('reel') && response.reel.video_id) {
                    this.reelPresent = true;

                    this.clientReelUrl = this._getReelUrl(response.reel.video_id, response.reel.video_type);
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

    /**
     * Map resume title from category
     *
     * @param {string} category
     * @returns {string}
     */
    mapResumeTitleFromCategory(category) {
        return this.clientService.mapResumeTitleFromCategory(category);
    }

    /**
     * Get reel url
     * 
     * @param {String} id
     * @param {String} type
     * @returns {String}
     * @private
     */
    _getReelUrl(id, type) {
        switch(type) {
            case 'youtube':
                return `https://www.youtube.com/embed/${id}`;
            case 'vimeo':
                return `https://player.vimeo.com/video/${id}`;
            default:
                return null;
        }
    }
}
