angular.module('MSAAgency.directives')
.directive('mainHeader', [function() {
    return {
        restrict: 'E',
        replace: true,
        template: `
            <header class="main">
                <h1 class="logo">
                    <a ui-sref="home">McDonald / Selznick Agency</a>
                </h1>

                <div class="right-col">
                    <search-bar placeholder="Search:"></search-bar>
                </div>
            </header>
        `
    };
}]);
