angular.module('MSAAgency.directives')
.directive('mainFooter', [function() {
    var year = new Date().getFullYear();

    return {
        restrict: 'E',
        replace: true,
        template: `
            <footer class="main">
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
                            <li class="sub"><a ui-sref="app.home.los-angeles">Archives</a></li>
                            <li class="sub"><a ui-sref="app.home.los-angeles">FAQ</a></li>
                        </ul>
                        <ul>
                            <li><a ui-sref="app.home.los-angeles">Talent</a></li>
                            <li class="sub"><a ui-sref="app.talent.category({ category: 'dance' })">Dance</a></li>
                            <li class="sub"><a ui-sref="app.talent.category({ category: 'creative' })">Creative</a></li>
                            <li class="sub"><a ui-sref="app.talent.category({ category: 'educators' })">Educators</a></li>
                        </ul>
                        <ul>
                            <li><a ui-sref="app.home.los-angeles">Submissions</a></li>
                            <li class="sub"><a ui-sref="app.home.los-angeles">Choreography</a></li>
                            <li class="sub"><a ui-sref="app.home.los-angeles">LA Dance</a></li>
                            <li class="sub"><a ui-sref="app.home.los-angeles">NY Dance</a></li>
                            <li class="sub"><a ui-sref="app.home.los-angeles">LA Commerical</a></li>
                            <li class="sub"><a ui-sref="app.home.los-angeles">LA Print</a></li>
                            <li class="sub"><a ui-sref="app.home.los-angeles">New York</a></li>
                        </ul>
                    </div>
                </div>

                <div class="clearfix"></div>

                <div class="credit-bar">
                    <span>Copyright ${year} McDonald/Selznick Associates</span>
                    <span class="powered-by">Powered By: <a href="">iamcutler</a></span>
                </div>
            </footer>
        `
    };
}]);
