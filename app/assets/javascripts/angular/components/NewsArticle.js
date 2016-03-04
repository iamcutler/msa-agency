export default function NewsArticle() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            data: '=',
            full: '@'
        },
        template: `
            <article ng-class="{ 'full-article': full }">
                <a ui-sref="app.news-page({ slug: data.slug })" ng-if="!full">
                    <figure>
                        <img src="{{ data.image.thumb }}">
                    </figure>

                    <header>
                        <span class="type" ng-if="!full">news</span>

                        <h2>{{ data.subject }}</h2>
                    </header>

                    <span class="timestamp">{{ data.created_at | date:'MMMM d, yyyy hh:mm a' : 'UTC' }}</span>

                    <p>{{ data.body | limitTo: 400 | stripHTML }}</p>
                </a>

                <div ng-if="full">
                    <figure>
                        <img src="{{ data.image.thumb }}">
                    </figure>

                    <header>
                        <span class="type" ng-if="!full">news</span>

                        <h2>{{ data.subject }}</h2>
                    </header>

                    <span class="timestamp">{{ data.created_at | date:'MMMM d, yyyy hh:mm a' : 'UTC' }}</span>

                    <p ng-bind-html="data.body"></p>
                </div>
            </article>
        `
    };
}
