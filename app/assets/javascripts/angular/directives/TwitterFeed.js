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
            </div>
        `,
        link: (scope) => {
            if(!scope.data) throw new Error('No data provided');
            if(!Array.isArray(scope.data)) throw new TypeError('No collection provided');
        }
    };
}
