export default function LatestNews() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            data: '='
        },
        template: `
            <section id="msa-news">
                <header class="section-header">
                    Latest News
                </header>

                <ul>
                    <li ng-repeat="article in data">
                        <news-article data="article"></news-article>
                    </li>
                </ul>
            </section>
        `
    };
}
