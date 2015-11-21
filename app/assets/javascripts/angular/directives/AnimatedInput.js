export default function AnimatedInput() {
    return {
        restrict: 'E',
        require: 'ngModel',
        replace: true,
        scope: {
            type: '@',
            placeholder: '@',
            ngModel: '=ngModel'
        },
        template: `
            <div class="animated-input">
                <input type="{{ type }}" ng-model="ngModel">
                <span class="placeholder">{{ placeholder }}</span>
            </div>
        `,
        link: (scope, element, attrs, ngModel) => {
            var input = angular.element(element[0].querySelector('input'));

            // Event listener for element click
            element.on('click', () => {
                element.addClass('active');
                input.focus();
            });

            // Event listener for input focus
            input.on('focus', () => {
                element.addClass('active');
            });

            // Event listener for input blur
            input.on('blur', () => {
                if(!ngModel.$modelValue) {
                    element.removeClass('active');
                }
            });
        }
    };
}
