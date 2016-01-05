angular.module('MSAAgency.directives')
.directive('mainFooter', [function() {
    var year = new Date().getFullYear();

    return {
        restrict: 'E',
        replace: true,
        template: `
            <footer class="main">
                <go-to-top-button></go-to-top-button>

                <div class="app-container">
                    <div class="addresses">
                        <div class="address">
                            <span class="location">Los Angeles</span><br>
                            953 Cole Ave Hollywood CA 90038
                        </div>
                        <div class="address">
                            <span class="location">New York</span><br>
                            1115 Broadway, Suite 1056, New York, NY 10010
                        </div>
                    </div>

                    <div class="navigation">
                        <ul>
                            <li><a ui-sref="splash">Home</a></li>
                            <li><a ui-sref="app.news">News</a></li>
                            <li><a ui-sref="app.contact">Contact Us</a></li>
                        </ul>
                        <ul>
                            <li><a ui-sref="app.about">About Us</a></li>
                            <li class="sub"><a ui-sref="app.about.staff">Our staff</a></li>
                            <li class="sub"><a ui-sref="app.affiliates">Affliations</a></li>
                            <li class="sub"><a ui-sref="app.talent.legacy">Legacy</a></li>
                            <li class="sub"><a ui-sref="app.archives">Archives</a></li>
                            <li class="sub"><a ui-sref="app.faq">FAQ</a></li>
                        </ul>
                        <ul>
                            <li>Talent</li>
                            <li class="sub"><a ui-sref="app.talent.category({ category: 'dance' })">Dance</a></li>
                            <li class="sub"><a ui-sref="app.talent.category({ category: 'creative' })">Creative</a></li>
                            <li class="sub"><a ui-sref="app.talent.category({ category: 'educators' })">Educators</a></li>
                        </ul>
                    </div>
                </div>

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
