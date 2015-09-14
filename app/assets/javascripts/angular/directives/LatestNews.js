export default function LatestNews() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            title: '@',
            data: '='
        },
        template: `
            <section id="msa-news">
                <ul>
                    <li ng-repeat="article in data">
                        <news-article data="article"></news-article>
                    </li>
                </ul>
            </section>
        `
    };
}
