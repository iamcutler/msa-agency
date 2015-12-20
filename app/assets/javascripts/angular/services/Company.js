export default class CompanyService {
    // @ngInject
    constructor($http, CommonService) {
        this.$http = $http;
        this.commonService = CommonService;
    }

    /**
     * Get company settings
     */
    get() {
        return this.$http.get('api/v1/company')
            .then(this.commonService.handleHttpResponse('Error while getting company settings'));
    }
}
