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
                    <li ng-repeat="article in data | limitTo: 6">
                        <news-article data="article" spotlight="{{ $index === 0 }}"></news-article>
                    </li>
                </ul>
            </section>
        `
    };
}
