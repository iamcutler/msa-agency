export default class AboutController {
    // @ngInject
    constructor(StaffService) {
        this.staff = {};
        this.staffService = StaffService;
    }

    initialize() {
        this.staffService.all()
            .then(response => {
                this.LAStaff = this.staffService.filterByLocation(response, 'Los Angeles');
                this.NYStaff = this.staffService.filterByLocation(response, 'New York');
            })
            .catch(err => console.log(err));
    }
}
