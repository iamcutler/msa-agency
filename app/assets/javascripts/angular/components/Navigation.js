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

                    <div class="main-links">
                        <ul>
                            <li>
                                <a ui-sref="app.home">Home</a>
                            </li>
                            <li>
                                <a ui-sref="app.about" toggle-navigation>About Us</a>
                                <ul class="about-us" resize-element resize-width="false" offset-top="112">
                                    <li><a ui-sref="app.staff" toggle-navigation>Staff</a></li>
                                    <li><a ui-sref="app.affiliates" toggle-navigation>Affiliations</a></li>
                                    <li><a ui-sref="app.talent.legacy" toggle-navigation>Legacy</a></li>
                                    <li><a ui-sref="app.archives" toggle-navigation>Archives</a></li>
                                    <li><a ui-sref="app.faq" toggle-navigation>FAQ</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="">Talent</a>
                                <ul class="talent" resize-element resize-width="false" offset-top="112">
                                    <li><a ui-sref="app.talent.category({ category: 'dance' })" toggle-navigation>Dance</a></li>
                                    <li><a ui-sref="app.talent.category({ category: 'creative' })" toggle-navigation>Creative</a></li>
                                    <li><a ui-sref="app.talent.category({ category: 'educators' })" toggle-navigation>Educators</a></li>
                                </ul>
                            </li>
                            <li><a ui-sref="app.news" toggle-navigation>News</a></li>
                            <li><a ui-sref="app.contact" toggle-navigation>Contact Us</a></li>
                        <ul>
                    </div>
                </div>
            </nav>
        `
    };
}
