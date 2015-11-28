export default class AppController {
    // @ngInject
    constructor($rootScope) {
        this.$rootScope = $rootScope;

        // Default page loader
        $rootScope.isLoadingPage = false;
    }
}
