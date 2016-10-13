const SOCIAL_TOP = 'social-top';
const SOCIAL_TRENDING = 'social-trending';
const SOCIAL_EMERGING = 'social-emerging';
const SOCIAL_YOUTUBE = 'social-youtube';

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
            top: [],
            trending: [],
            emerging: [],
            youtube: []
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
        this.clientService.getByCategory([SOCIAL_TOP, SOCIAL_TRENDING, SOCIAL_EMERGING, SOCIAL_YOUTUBE])
            .then(response => {
                this.clients.top      = this.clientService.filterByCategory(response, SOCIAL_TOP);
                this.clients.trending = this.clientService.filterByCategory(response, SOCIAL_TRENDING);
                this.clients.emerging = this.clientService.filterByCategory(response, SOCIAL_EMERGING);
                this.clients.youtube  = this.clientService.filterByCategory(response, SOCIAL_YOUTUBE);
                this.totalClientCount = this.getTotalClientCount(this.clients);
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
