export default class HomeController {
    // @ngInject
    constructor($state, SocialService, NewsService, PageSlideService) {
        this.$state = $state;
        this.socialService = SocialService;
        this.newsService = NewsService;
        this.pageSlideService = PageSlideService;

        this.latestNews = [];
        this.slides = [];
        this.socialFeeds = {
            twitter: [],
            instagram: []
        };
    }

    /**
     * Initialize method
     */
    initialize() {
        this.getTwitterFeed();
        this.getInstagramFeed();
        this.getLatestNews({
            location: this.$state.current.name === 'app.home.los-angeles' ? 'Los Angeles' : 'New York',
            limit: 8
        });

        // Fetch page slides
        this.getPageSlides('home');
    }

    /**
     * Get twitter feed
     */
    getTwitterFeed() {
        this.socialService.getTwitterFeed()
            .then(feed => {
                this.socialFeeds.twitter = feed;
            })
            .catch(err => {
                console.log('ERROR');
                console.log(err);
            });
    }

    /**
     * Get instagram feed
     */
    getInstagramFeed() {
        this.socialService.getInstagramFeed(6)
            .then(feed => {
                this.socialFeeds.instagram = feed;
            })
            .catch(err => {
                console.log('ERROR');
                console.log(err);
            });
    }

    /**
     * Get latest news
     *
     * @param {Object} config
     * @param {Number} config.limit
     */
    getLatestNews(config = { limit: 6 }) {
        this.newsService.getFeaturedArticles(config)
            .then(response => {
                this.latestNews = response;
            });
    }

    /**
     * Get page slides
     *
     * @param {String} page
     */
    getPageSlides(page = 'home') {
        return this.pageSlideService.getByPage(page)
            .then(response => {
                this.slides = response;
            });
    }
}
