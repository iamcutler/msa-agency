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
                    <featured-news-article data="article" spotlight="{{ $index === 0 }}" ng-repeat-start="article in data | limitTo: 6"></featured-news-article>
                    <newsletter-widget ng-repeat-end ng-if="$index === 0"></newsletter-widget>
                </div>
            </section>
        `
    };
}
