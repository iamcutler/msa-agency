export default function NewsArticle() {
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
                    <img ng-src="{{ data.image }}" alt="{{ data.title }}" />
                </figure>

                <header>
                    <h1>{{ data.title }}</h1>
                </header>

                <p>{{ data.description }}</p>

                <footer>
                    <time>{{ data.date | date: 'M/dd' }}</time>
                    <a href="" class="view-more">View More</a>
                </footer>
            </article>
        `
    };
}
