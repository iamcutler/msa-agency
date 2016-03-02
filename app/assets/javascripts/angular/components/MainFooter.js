angular.module('MSAAgency.directives')
.directive('mainFooter', [function() {
    var year = new Date().getFullYear();

    return {
        restrict: 'E',
        replace: true,
        template: `
            <footer class="main">
                <go-to-top-button></go-to-top-button>

                <office-locations></office-locations>

                <div class="clearfix"></div>

                <div class="credit-bar">
                    <span>Copyright ${year} McDonald/Selznick Associates</span>

                    <social-icons
                        facebook="https://www.facebook.com/MSAagency"
                        twitter="https://twitter.com/MSAAGENCY"
                        instagram="https://instagram.com/msaagency"
                        youtube="https://www.youtube.com/user/MSAGlobalLeader"></social-icons>

                    <span class="powered-by">Powered By: <a href="">iamcutler</a></span>
                </div>
            </footer>
        `
    };
}]);
