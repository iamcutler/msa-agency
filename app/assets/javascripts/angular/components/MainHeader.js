angular.module('MSAAgency.directives')
.directive('mainHeader', [function() {
    return {
        restrict: 'E',
        replace: true,
        template: `
            <header class="main" bg-transparent-scroll>
                <h1 class="logo">
                    <a ui-sref="app.home">McDonald / Selznick Agency</a>
                </h1>

                <div class="right-col">
                    <search-bar placeholder="Search:"></search-bar>
                </div>
            </header>
        `
    };
}]);
