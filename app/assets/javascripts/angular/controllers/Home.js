export default class HomeController {
    // @ngInject
    constructor($state, SocialService, NewsService) {
        this.$state = $state;
        this.socialService = SocialService;
        this.newsService = NewsService;

        this.latestNews = [];
        this.slides = [
            { type: 'image', src: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg' },
            { type: 'image', src: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg' },
            { type: 'image', src: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg' }
        ];
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
        this.getLatestNews();
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
     * Get latest news
     *
     * @param {Object} config
     * @param {Number} config.limit
     */
    getLatestNews(config = { limit: 6 }) {
        this.newsService.all(config)
            .then(response => {
                this.latestNews = response;
            });
    }
}
