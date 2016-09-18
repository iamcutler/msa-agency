export default function ClientNavScroll() {
    return {
        restrict: 'A',
        scope: false,
        controller: function($window, $element) {
            const navHeight = 112;
            const scrollHeight = 485;
            const el = $element[0];
            const winEl = angular.element($window);
            
            // Bind scrolling event and eval height to fix navigation
            winEl.bind('scroll', () => {
                const scrollY = $window.scrollY || winEl[0].document.documentElement.scrollTop; 

                if(scrollY >= scrollHeight) {
                    el.style.position = 'fixed';
                    el.style.top = `${navHeight}px`;
                    return;
                }

                el.style.position = 'absolute';
                el.style.top = 'inherit';
            });
        }
    };
}
