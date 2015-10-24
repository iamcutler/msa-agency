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
                            1375 Broadway Suite 1000 New York NY 10018
                        </div>
                    </div>

                    <div class="navigation">
                        <ul>
                            <li><a ui-sref="splash">Home</a></li>
                            <li><a ui-sref="">News</a></li>
                            <li><a ui-sref="app.contact">Contact Us</a></li>
                        </ul>
                        <ul>
                            <li><a ui-sref="">About Us</a></li>
                            <li class="sub"><a ui-sref="">Our staff</a></li>
                            <li class="sub"><a ui-sref="">Affliations</a></li>
                            <li class="sub"><a ui-sref="">Legacy</a></li>
                            <li class="sub"><a ui-sref="">Archives</a></li>
                            <li class="sub"><a ui-sref="">FAQ</a></li>
                        </ul>
                        <ul>
                            <li><a ui-sref="">Talent</a></li>
                            <li class="sub"><a ui-sref="">Los Angeles</a></li>
                            <li class="sub"><a ui-sref="">New York</a></li>
                        </ul>
                        <ul>
                            <li><a ui-sref="">Submissions</a></li>
                            <li class="sub"><a ui-sref="">Choreography</a></li>
                            <li class="sub"><a ui-sref="">LA Dance</a></li>
                            <li class="sub"><a ui-sref="">NY Dance</a></li>
                            <li class="sub"><a ui-sref="">LA Commerical</a></li>
                            <li class="sub"><a ui-sref="">LA Print</a></li>
                            <li class="sub"><a ui-sref="">New York</a></li>
                        </ul>
                    </div>
                    <div class="clearfix"></div>
                </div>

                <div class="credit-bar">
                    <span>Copyright ${year} McDonald/Selznick Associates</span>
                    <span class="powered-by">Powered By: <a href="">iamcutler</a></span>
                </div>
            </footer>
        `
    };
}]);
