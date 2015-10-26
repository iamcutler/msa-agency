export default class ContactService {
    // @ngInject
    constructor($http, CommonService) {
        this.$http = $http;
        this.commonService = CommonService;
    }

    submitForm(form_fields) {
        return this.$http.post('api/v1/contact')
            .then(this.commonService.handleHttpResponse('Error while submitting contact form'));
    }
}
