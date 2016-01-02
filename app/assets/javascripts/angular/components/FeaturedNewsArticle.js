export default function FeaturedNewsArticle() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            data: '=',
            spotlight: '@'
        },
        template: `
            <article class="news-article" ng-class="{ 'spotlight': spotlight === 'true' }">
                <figure>
                    <a ui-sref="app.news-page({ slug: data.slug })">
                        <img ng-src="{{ data.image.medium }}" alt="{{ data.subject }}" />
                    </a>
                </figure>

                <header>
                    <h1>{{ data.subject }}</h1>
                </header>

                <p>{{ data.body | stripHTML }}</p>

                <footer>
                    <time>{{ data.created_at | date: 'M/dd' }}</time>
                    <a ui-sref="app.news-page({ slug: data.slug })" class="view-more">View More</a>
                </footer>
            </article>
        `
    };
}
