export default class StaffController {
    // @ngInject
    constructor($stateParams, $location, smoothScroll, StaffService) {
        this.$stateParams = $stateParams;
        this.$location = $location;
        this.smoothScroll = smoothScroll;
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

        // todo: Refactor to directive
        this.smoothScroll(document.getElementById(destination), {
            offset: 112
        });
    }
}
