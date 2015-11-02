export default class SocialService {
    // @ngInject
    constructor($q, $http, CommonService) {
        this.$q = $q;
        this.$http = $http;
        this.CommonService = CommonService;
    }

    /**
     * Get latest tweets
     *
     * @param {Number} count - tweet count
     */
    getTwitterFeed(count = 4) {
        return this.$http.get('api/v1/social/twitter', {
                params: {
                    count: count
                }
            })
            .then(this.CommonService.handleHttpResponse('Error getting twitter feed'));
    }

    /**
     * Get latest instagram feed
     *
     * @param {Number} count - media count
     */
    getInstagramFeed(count = 4) {
        return this.$http.get('api/v1/social/instagram', {
                params: {
                    count: count
                }
            })
            .then(this.CommonService.handleHttpResponse('Error getting instagram feed'));
    }
}
