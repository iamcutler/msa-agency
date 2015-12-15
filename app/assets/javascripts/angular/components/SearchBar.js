export function SearchBar() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            placeholder: '@'
        },
        controller: 'SearchBarController as SearchBarCtrl',
        template: `
            <form name="SearchBarCtrl.searchForm" id="search-bar" ng-submit="SearchBarCtrl.search(SearchBarCtrl.searchForm.$valid)" novalidate>
                <input type="search" ng-model="SearchBarCtrl.q" placeholder="{{ placeholder }}" required>
            </form>
        `
    };
}

export class SearchBarController {
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
