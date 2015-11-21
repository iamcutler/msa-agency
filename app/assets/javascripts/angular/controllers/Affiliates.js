export default class AffiliatesController {
    // @ngInject
    constructor($rootScope, AffiliateService) {
        this.$rootScope = $rootScope;
        this.affiliateService = AffiliateService;

        this.affiliates = [];
    }

    initialize() {
        return this.getAffiliates();
    }

    /**
     * Get affiliates
     */
    getAffiliates() {
        // Show page loader
        this.$rootScope.isLoadingPage = true;

        return this.affiliateService.get()
            .then(response => {
                this.affiliates = response;
            })
            .finally(() => this.$rootScope.isLoadingPage = false);
    }
}
