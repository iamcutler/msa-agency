export default function SocialSection() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            twitter: '=',
            instagram: '='
        },
        template: `
            <section id="get-social">
                <div class="app-container">
                    <header>
                        <i></i>
                        Social Media
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
