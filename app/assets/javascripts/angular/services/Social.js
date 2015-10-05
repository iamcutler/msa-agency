export default class SocialService {
    // @ngInject
    constructor($q, $http, CommonService)
    {
        this.$q = $q;
        this.$http = $http;
        this.CommonService = CommonService;
    }

    /**
     * Get twitter feed
     * @param {Number} count - tweet count
     */
    getTwitterFeed(count = 4)
    {
        return this.$http.get('/api/v1/social/twitter', {
                params: {
                    count: count
                }
            })
            .then(this.CommonService.handleHttpResponse('Error getting twitter feed'));
    }
}
