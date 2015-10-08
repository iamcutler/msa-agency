export default function Navigation() {
    return {
        restrict: 'E',
        replace: true,
        template: `
            <nav role="navigation" id="sidebar-nav" ng-controller="NavigationController as NavCtrl">
                <a href="" class="nav-btn" toggle-navigation>
                    <div class="btn">
                        <div class="nav-lines">
                            <div class="line"></div>
                            <div class="line"></div>
                            <div class="line"></div>
                        </div>
                        MENU
                    </div>
                </a>

                <div class="nav-sidebar" resize-element resize-width="false">
                    <div class="brand">
                        <a ui-sref="splash">McDonald/Selznick Associates</a>
                    </div>

                    <!-- Search -->
                    <form name="NavCtrl.SidebarSearch" id="sidebar-search" ng-submit="NavCtrl.search(NavCtrl.SidebarSearch.$valid)" novalidate>
                        <input type="search" ng-model="NavCtrl.q" placeholder="Search" required>
                    </form>
                    <!-- End Search -->

                    <ul class="main-links">
                        <li>
                            <a href="">Home</a>
                            <ul class="home" resize-element resize-width="false" offset-top="112">
                                <li><a ui-sref="app.home.los-angeles" toggle-navigation>Los Angeles</a></li>
                                <li><a ui-sref="app.home.new-york" toggle-navigation>New York</a></li>
                            </ul>
                        </li>
                        <li>
                            <a ui-sref="app.about" toggle-navigation>About Us</a>
                            <ul class="about-us" resize-element resize-width="false" offset-top="112">
                                <li><a ui-sref="app.home.los-angeles" toggle-navigation>Staff</a></li>
                                <li><a ui-sref="app.home.new-york" toggle-navigation>Affiliations</a></li>
                                <li><a ui-sref="app.home.new-york" toggle-navigation>Legacy</a></li>
                                <li><a ui-sref="app.home.new-york" toggle-navigation>Archives</a></li>
                                <li><a ui-sref="app.home.new-york" toggle-navigation>FAQ</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="">Talent</a>
                            <ul class="talent" resize-element resize-width="false" offset-top="112">
                                <li><a ui-sref="app.home.los-angeles" toggle-navigation>Dance</a></li>
                                <li><a ui-sref="app.home.new-york" toggle-navigation>Creative</a></li>
                                <li><a ui-sref="app.home.new-york" toggle-navigation>Educators</a></li>
                            </ul>
                        </li>
                        <li><a href="">News</a></li>
                        <li><a href="">Contact Us</a></li>
                        <li><a href="">Submissions</a></li>
                    <ul>
                </div>
            </nav>
        `
    };
}
