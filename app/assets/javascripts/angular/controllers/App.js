export default class AppController {
    // @ngInject
    constructor($rootScope, CompanyService) {
        this.$rootScope = $rootScope;
        this.companyService = CompanyService;

        // Default page loader
        $rootScope.isLoadingPage = false;
        this.company = {};
        this.companyReelURL = '';
    }

    initialize() {
        this.getCompanySettings();
    }

    /**
     * Get company settings
     */
    getCompanySettings() {
        this.companyService.get()
            .then(response => {
                this.company = response;

                this.companyReelURL = this.getCompanyReelURL(response);
            })
            .catch(err => console.log(err));
    }

    /**
     * Get company reel url
     *
     * @param {Object} company
     * @param {String} company.reel_type
     * @param {String} company.reel_id
     * @returns {String}
     */
    getCompanyReelURL(company) {
        // Set company reel url
        if (company.reel_type === 'youtube') {
            return `https://www.youtube.com/embed/${company.reel_id}`;
        } else if (company.reel_type === 'vimeo') {
            return `https://player.vimeo.com/video/${company.reel_id}`;
        }

        return '';
    }
}
