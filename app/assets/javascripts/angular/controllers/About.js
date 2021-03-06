export default class AboutController {
    // @ngInject
    constructor(StaffService) {
        this.staff = [];
        this.staffService = StaffService;
    }

    initialize() {
        this.getStaff();
    }

    /**
     * Get staff
     */
    getStaff() {
        this.staffService.all()
            .then(response => {
                this.staff = response;
            })
            .catch(err => console.log(err));
    }
}
