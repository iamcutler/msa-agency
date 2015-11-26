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
                    <img src="http://www.msaagency.com/images/staff/78643616031915.jpeg">
                </figure>

                <header>
                    <span class="type">news</span>

                    <h2>{{ data.subject }}</h2>
                </header>

                <span class="timestamp">{{ data.created_at | date:'MMMM d, yyyy hh:mm a' : 'UTC' }}</span>

                <p>
                    {{ data.body | limitTo: 400 }}
                </p>
            </article>
        `
    };
}
