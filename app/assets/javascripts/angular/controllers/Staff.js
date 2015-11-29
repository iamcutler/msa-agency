export default class StaffController {
    // @ngInject
    constructor($stateParams, $location, $anchorScroll, StaffService) {
        this.$stateParams = $stateParams;
        this.$location = $location;
        this.$anchorScroll = $anchorScroll;
        this.staffService = StaffService;

        this.currentNavDestination = 'staff-bio';
        this.member = {};
    }

    /**
     * Get by slug
     */
    getBySlug() {
        this.staffService.getBySlug(this.$stateParams.slug)
            .then(response => {
                this.member = response;
            });
    }

    /**
     * Set current navigation destination
     *
     * @param {String} destination
     * @returns void
     */
    setCurrentNavDestination(destination = 'staff-bio') {
        this.currentNavDestination = destination;

        this.$location.hash(`section-${destination}`);
        this.$anchorScroll();
    }
}
