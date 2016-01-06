export default function BGTransparentScroll($window) {
    return {
        restrict: 'A',
        link: (scope, element) => {
            angular.element($window).bind('scroll', () => {
                if($window.scrollY === 0) {
                    element.removeClass('transparent');
                } else {
                    element.addClass('transparent');
                }
            });
        }
    };
}

BGTransparentScroll.$inject = ['$window'];
