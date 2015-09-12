export default class SearchController {
    // @ngInject
    constructor($stateParams) {
        this.$stateParams = $stateParams;
        this.q = this.$stateParams.q; // Active search keywords
    }
}
