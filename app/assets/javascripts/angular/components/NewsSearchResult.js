export default function NewsSearchResult() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            data: '='
        },
        template: `
            <article>
                <figure>
                    <a ui-sref="app.news-page({ slug: data.slug })">
                        <img ng-src="{{ data.image.medium }}">
                    </a>
                </figure>

                <header>
                    <span class="type">news</span>

                    <h2>{{ data.subject }}</h2>
                </header>

                <span class="timestamp">{{ data.created_at | date:'MMMM d, yyyy hh:mm a' : 'UTC' }}</span>

                <p>
                    {{ data.body | limitTo: 400 | stripHTML }}
                </p>
            </article>
        `
    };
}
