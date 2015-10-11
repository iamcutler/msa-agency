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

                <h2>A Talent Agency</h2>

                <div class="right-col">
                    <ul class="contact-numbers">
                        <li>
                            <span>Los Angeles:</span>
                            <a href="tel:3239576680">323-957-6680</a>
                        </li>
                        <li>
                            <span>New York:</span>
                            <a href="tel:6462376928">646-237-6928</a>
                        </li>
                    </ul>

                    <social-icons
                        facebook="https://www.facebook.com/MSAagency"
                        twitter="https://twitter.com/MSAAGENCY"
                        instagram="https://instagram.com/msaagency"
                        youtube="https://www.youtube.com/user/MSAGlobalLeader"></social-icons>
                </div>
            </header>
        `
    };
}]);
