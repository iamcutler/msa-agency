export default class SplashController {
    // @ngInject
    constructor(SocialService) {
        this.socialService = SocialService;

        this.socialFeeds = {
            instagram: []
        };
    }

    initialize() {
        this.getInstagramFeed();
    }

    /**
     * Get instagram feed
     */
    getInstagramFeed() {
        this.socialService.getInstagramFeed(30)
            .then(feed => {
                this.socialFeeds.instagram = feed;
            })
            .catch(err => {
                console.log(err);
            });
    }
}
