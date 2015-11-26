export default function ClientSearchResult() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            data: '='
        },
        template: `
            <article>
                <figure>
                    <a ui-sref="app.talent.page({ slug: data.slug })">
                        <img src="http://www.msaagency.com/images/staff/78643616031915.jpeg">
                    </a>
                </figure>

                <header>
                    <span class="type">client</span>

                    <h2>
                        <a ui-sref="app.talent.page({ slug: data.slug })">
                            {{ data.first_name }} {{ data.last_name }}
                        </a>
                    </h2>
                    <h4>{{ data.title }}</h4>
                </header>

                <span class="timestamp"></span>

                <p>
                    {{ data.biography | limitTo: 400 }}
                </p>
            </article>
        `
    };
}
