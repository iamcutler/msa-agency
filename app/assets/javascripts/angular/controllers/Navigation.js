export default class NavigationController {
    // @ngInject
    constructor($state) {
        this.$state = $state;
        this.q = ''; // Search string
    }

    /**
     * Perform a search
     * @param {Boolean} isValid
     **/
    search(isValid = true)
    {
        if(isValid) {
            this.$state.go('app.search', { q: this.q });

            // Clear search string
            this.q = '';
        }
    }
}
