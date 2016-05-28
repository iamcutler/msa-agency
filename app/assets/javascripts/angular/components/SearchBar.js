export function SearchBar() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            placeholder: '@',
            showSubmitButton: '@'
        },
        controller: 'SearchBarController as SearchBarCtrl',
        template: `
            <form name="SearchBarCtrl.searchForm" id="search-bar" ng-submit="SearchBarCtrl.search(SearchBarCtrl.searchForm.$valid)" novalidate>
                <input type="search" ng-model="SearchBarCtrl.q" placeholder="{{ placeholder }}" required>
                <button type="submit" ng-if="showSubmitButton">Submit</button>
            </form>
        `
    };
}

export class SearchBarController {
    // @ngInject
    constructor($state, $document) {
        this.$state = $state;
        this.$document = $document;
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

            var sidebar = angular.element(this.$document[0].querySelector('#sidebar-nav'));
            sidebar.removeClass('open');

            // Clear search string
            this.q = '';
        }
    }
}
