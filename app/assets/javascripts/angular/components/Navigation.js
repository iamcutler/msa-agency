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

                <div class="nav-sidebar" resize-element resize-width="false">
                    <div class="brand">
                        <a ui-sref="splash">McDonald/Selznick Associates</a>
                    </div>

                    <!-- Search -->
                    <search-bar placeholder="Search:"></search-bar>
                    <!-- END Search -->

                    <div class="main-links">
                        <ul>
                            <li>
                                <a ui-sref="app.home" toggle-navigation>Home</a>
                            </li>
                            <li>
                                <a ui-sref="app.about" toggle-navigation>About Us</a>
                                <ul class="about-us" resize-element resize-width="false" offset-top="80">
                                    <li><a ui-sref="app.staff" toggle-navigation>Staff</a></li>
                                    <li><a ui-sref="app.affiliates" toggle-navigation>Affiliations</a></li>
                                    <li><a ui-sref="app.talent.legacy" toggle-navigation>Legacy</a></li>
                                    <!--<li><a ui-sref="app.archives" toggle-navigation>Archives</a></li>-->
                                    <li><a ui-sref="app.faq" toggle-navigation>FAQ</a></li>
                                </ul>
                            </li>
                            <li ng-if="AppCtrl.companyReelURL">
                                <a ng-href="{{ AppCtrl.companyReelURL }}" class="fancybox" toggle-navigation>Reel</a>
                            </li>
                            <li>
                                <a href="" toggle-navigation>Talent</a>
                                <ul class="talent" resize-element resize-width="false" offset-top="112">
                                    <li><a ui-sref="app.client-page({ slug: 'dance' })" toggle-navigation>Dance</a></li>
                                    <li><a ui-sref="app.client-page({ slug: 'commercial' })" toggle-navigation>Commercial</a></li>
                                    <li><a ui-sref="app.client-page({ slug: 'television-film' })" toggle-navigation>Television/Film</a></li>
                                    <li><a ui-sref="app.client-page({ slug: 'musical-theatre' })" toggle-navigation>Musical Theatre</a></li>
                                    <li><a ui-sref="app.client-page({ slug: 'kids-teen' })" toggle-navigation>Kids and Teens</a></li>
                                </ul>
                            </li>
                            <li>
                                <a ui-sref="app.talent.categories({ category: 'creative' })" toggle-navigation>Creative</a>

                                <ul class="creative" resize-element resize-width="false" offset-top="112">
                                    <li><a ui-sref="app.talent.category({ category: 'choreographers' })" toggle-navigation>Choreographers</a></li>
                                    <li><a ui-sref="app.directors" toggle-navigation>Directors</a></li>
                                    <li><a ui-sref="app.talent.category({ category: 'producers' })" toggle-navigation>Producers</a></li>
                                    <li><a ui-sref="app.talent.category({ category: 'designer' })" toggle-navigation>Designers</a></li>
                                </ul>
                            </li>
                            <li>
                                <a ui-sref="app.talent.categories({ category: 'educators' })" toggle-navigation>Educators</a>

                                <ul class="educators" resize-element resize-width="false" offset-top="112">
                                    <li><a ui-sref="app.talent.category({ category: 'speaker' })" toggle-navigation>Speakers</a></li>
                                    <li><a ui-sref="app.talent.category({ category: 'master_instructor' })" toggle-navigation>Masters</a></li>
                                    <li><a ui-sref="app.talent.category({ category: 'instructor' })" toggle-navigation>Instructors</a></li>
                                    <li><a ui-sref="app.talent.category({ category: 'sytycd' })" toggle-navigation>SYTYCD/DWTS</a></li>
                                </ul>
                            </li>
                            <li><a ui-sref="app.talent.category({ category: 'specialty_act' })" toggle-navigation>Specialty Acts</a></li>
                            <li><a ui-sref="app.news" toggle-navigation>News</a></li>
                            <li><a ui-sref="app.contact" toggle-navigation>Contact Us</a></li>
                        <ul>
                    </div>
                </div>
            </nav>
        `
    };
}
