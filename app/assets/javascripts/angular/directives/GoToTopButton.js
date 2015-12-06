export default function GoToTopButton(smoothScroll) {
    return {
        restrict: 'EA',
        replace: true,
        scope: false,
        template: `
            <div class="go-to-top-btn"></div>
        `,
        link: (scope, element) => {
            // Click event handler
            element.bind('click', () => {
                smoothScroll('body');
            });
        }
    };
}

GoToTopButton.$inject = ['smoothScroll'];
