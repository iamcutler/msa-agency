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
                    <a href="">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg" alt="{{ data.subject }}" />
                    </a>
                </figure>

                <header>
                    <h1>{{ data.subject }}</h1>
                </header>

                <p>{{ data.body }}</p>

                <footer>
                    <time>{{ data.created_at | date: 'M/dd' }}</time>
                    <a href="" class="view-more">View More</a>
                </footer>
            </article>
        `
    };
}
