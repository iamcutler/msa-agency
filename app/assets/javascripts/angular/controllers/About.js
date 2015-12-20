export default class AboutController {
    // @ngInject
    constructor(StaffService, CompanyService) {
        this.company = {};
        this.staff = [];
        this.staffService = StaffService;
        this.companyService = CompanyService;
    }

    initialize() {
        this.getCompanySetting();
        this.getStaff();
    }

    /**
     * Get company settings
     */
    getCompanySetting() {
        this.companyService.get()
            .then(response => {
                this.company = response;
            })
            .catch(err => console.log(err));
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
