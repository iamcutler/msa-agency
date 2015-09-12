export default function Navigation() {
    return {
        restrict: 'E',
        replace: true,
        template: `
            <nav role="navigation" id="sidebar-nav">
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

                <div class="nav-sidebar" ng-controller="NavigationController as NavCtrl">
                    <div class="brand">
                        <a ui-sref="splash">McDonald/Selznick Associates</a>
                    </div>

                    <!-- Search -->
                    <form name="NavCtrl.SidebarSearch" id="sidebar-search" ng-submit="NavCtrl.search(NavCtrl.SidebarSearch.$valid)" novalidate>
                        <input type="search" ng-model="NavCtrl.q" placeholder="Search" required>
                    </form>
                    <!-- End Search -->

                    <ul class="main-links">
                        <li><a href="">Home</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Talent</a></li>
                        <li><a href="">News</a></li>
                        <li><a href="">Contact Us</a></li>
                        <li><a href="">Submissions</a></li>
                    <ul>
                </div>
            </nav>
        `
    };
}
