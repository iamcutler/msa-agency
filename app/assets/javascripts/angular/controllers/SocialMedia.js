const SOCIAL_INFLUENCER = 'social-media-influencer';

export default class SocialMediaController {
    // @ngInject
    constructor($rootScope, $stateParams, ClientService, SocialService, PageSlideService) {
        // Dependencies
        this.$rootScope = $rootScope;
        this.clientService = ClientService;
        this.socialService = SocialService;
        this.pageSlideService = PageSlideService;

        this.$rootScope.isLoadingPage = true;
        this.clients = {
            influencer: []
        };
        this.slides = [];
        this.socialFeeds = {
            twitter: [],
            instagram: []
        };
        this.socialVideos = [];
        this.totalClientCount = 0;
    }

    initialize() {
        this.getByCategory();
        this.getTwitterFeed();
        this.getInstagramFeed();
        this.getSocialVideos();
        this.getPageSlides();
    }

    /**
     * Get page slides
     *
     * @param {String} page
     */
    getPageSlides(page = 'social-media') {
        return this.pageSlideService.getByPage(page)
            .then(response => {
                this.slides = response;
            });
    }

    /**
     * Get by category
     *
     * @param {String} category
     */
    getByCategory(category) {
        this.clientService.getByCategory([SOCIAL_INFLUENCER])
            .then(response => {
                this.clients.influencer = this.clientService.filterByCategory(response, SOCIAL_INFLUENCER);
            })
            .catch(err => console.log(err))
            .finally(() => this.$rootScope.isLoadingPage = false);
    }

    /**
     * Get twitter feed
     */
    getTwitterFeed() {
        this.socialService.getTwitterFeed()
            .then(feed => this.socialFeeds.twitter = feed)
            .catch(err => console.log(err));
    }

    /**
     * Get instagram feed
     */
    getInstagramFeed() {
        this.socialService.getInstagramFeed(6)
            .then(feed => this.socialFeeds.instagram = feed)
            .catch(err => console.log(err));
    }

    getSocialVideos() {
        this.socialService.getVideos()
            .then(vids => this.socialVideos = vids)
            .catch(err => console.log(err));
    }

    /**
     * Calculate client totals
     * @param {Object} clients
     * @param {Array} clients.top
     * @param {Array} clients.trending
     * @param {Array} clients.emerging
     * @param {Array} clients.youtube
     * @returns {Number}
     */
    getTotalClientCount(clients = {}) {
        return Object.keys(clients).reduce((acc, cur) => acc += clients[cur].length, 0);
    }
}
