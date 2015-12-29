export default function LatestNews() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            data: '='
        },
        template: `
            <section id="msa-news">
                <div>
                    <header class="section-header">
                        Highlights
                    </header>

                    <div class="articles">
                        <featured-news-article data="article" ng-repeat="article in data | limitTo: 8"></featured-news-article>
                    </div>

                    <a ui-sref="app.news" class="more-news">More News</a>
                </div>
            </section>
        `
    };
}
