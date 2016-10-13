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
                    <header>
                        <i ng-hide="hideIcon"></i>

                        <div ng-if="!title">Social Media</div>

                        <header class="section-header no-padding" ng-if="title">
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
