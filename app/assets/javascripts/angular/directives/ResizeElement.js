// @ngInject
export default function ResizeElement($window) {
    return {
        restrict: 'A',
        scope: {
            resizeWidth: '@',
            resizeHeight: '@',
            offsetBottom: '@'
        },
        link: (scope, element) => {
            scope.$watch(() => {
                return {
                    'width': $window.innerWidth,
                    'height': $window.innerHeight
                };
            }, (newValue) => {
                if(scope.resizeWidth !== "false") element.css('width', `${newValue.width}px`);
                if(scope.resizeHeight !== "false") element.css('height', `${newValue.height - (scope.offsetBottom ? Number(scope.offsetBottom) : 0)}px`);
            }, true);

            angular.element($window).bind('resize', () => {
                scope.$apply();
            });
        }
    }
}
