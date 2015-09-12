// @ngInject
export default function ToggleNavigation($document) {
    return {
        restrict: 'EA',
        link: function(scope, element) {
            element.bind('click', function() {
                var sidebar = angular.element($document[0].querySelector('#sidebar-nav'));

                if(sidebar.hasClass('open')) {
                    sidebar.removeClass('open');
                } else {
                    sidebar.addClass('open');
                }
            });
        }
    };
}
