export default class AppController {
    constructor($rootScope) {
        this.$rootScope = $rootScope;

        // Default page loader
        $rootScope.isLoadingPage = false;
    }
}
