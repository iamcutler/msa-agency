export default function InstagramFeed() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            data: '='
        },
        template: `
            <div class="social-feed">
                <div class="connect-bar">
                    <span class="username">msaagency</span>
                    <a href="https://instagram.com/msaagency" target="_blank" class="follow-us">Follow</a>
                </div>
            </div>
        `,
        link: (scope) => {
            if(!scope.data) throw new Error('No data provided');
            if(!Array.isArray(scope.data)) throw new TypeError('No collection provided');
        }
    };
}
