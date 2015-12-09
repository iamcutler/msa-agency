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

                <div class="articles">
                    <featured-news-article data="article" ng-repeat="article in data | limitTo: 8"></featured-news-article>
                </div>
            </section>
        `
    };
}
