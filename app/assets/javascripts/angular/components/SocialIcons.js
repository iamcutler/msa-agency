angular.module('MSAAgency.directives')
.directive('socialIcons', [function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            website: '@',
            facebook: '@',
            twitter: '@',
            instagram: '@',
            youtube: '@'
        },
        template: `
            <ul class="social-icons">
                <li class="website" ng-if="website">
                    <a href="{{ website }}" target="_blank"></a>
                </li>
                <li class="facebook" ng-if="facebook">
                    <a href="{{ facebook }}" target="_blank"></a>
                </li>
                <li class="twitter" ng-if="twitter">
                    <a href="{{ twitter }}" target="_blank"></a>
                </li>
                <li class="instagram" ng-if="instagram">
                    <a href="{{ instagram }}" target="_blank"></a>
                </li>
                <li class="youtube" ng-if="youtube">
                    <a href="{{ youtube }}" target="_blank"></a>
                </li>
            </ul>
        `
        };
}]);
