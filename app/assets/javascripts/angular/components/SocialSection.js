export default function SocialSection() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            title: '@',
            hideIcon: '@',
            twitter: '=',
            instagram: '='
        },
        template: `
            <section id="get-social">
                <div class="app-container">
                    <header ng-if="title">
                        <i ng-hide="hideIcon"></i>

                        <header class="section-header no-padding">
                            {{ title }}
                        </header>
                    </header>

                    <div class="social-feeds">
                        <twitter-feed data="twitter"></twitter-feed>
                        <instagram-feed data="instagram"></instagram-feed>
                    </div>
                </div>
            </section>
        `
    };
}
