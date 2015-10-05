export default function TwitterFeed() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            data: '='
        },
        template: `
            <div class="social-feed">
                <div class="connect-bar">
                    <span class="username">@MSAAgency</span>
                    <a href="https://twitter.com/MSAAGENCY" target="_blank" class="follow-us">Follow</a>
                </div>
                <article ng-repeat="item in data">
                    <figure>
                        <img ng-src="{{ item.user.profile_image_url_https }}">
                    </figure>
                    <div class="tweet">
                        <span class="timestamp">{{ item.created_at | date: 'MMM dd' }}</span>
                        <span class="author">{{ item.user.name }}</span>
                        <span class="text" ng-bind-html="item.text | getTwitterLinks"></span>
                    </div>
                </article>
            </div>
        `,
        link: (scope) => {
            if(!scope.data) throw new Error('No data provided');
            if(!Array.isArray(scope.data)) throw new TypeError('No collection provided');
        }
    };
}
