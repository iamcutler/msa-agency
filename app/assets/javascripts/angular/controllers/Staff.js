export default class StaffController {
    // @ngInject
    constructor($stateParams, StaffService) {
        this.$stateParams = $stateParams;
        this.staffService = StaffService;

        this.member = {};
    }

    getBySlug() {
        this.staffService.getBySlug(this.$stateParams.slug)
            .then(response => {
                this.member = response;
            });
    }
}
