export default function ClientReel($timeout, $sce) {
    return {
        restrict: 'E',
        replace: '',
        scope: {
            type: '@',
            src: '@'
        },
        template: `
            <div ng-href="{{ getVideoSrc(type) }}" class="reel-container fancybox">
                <div ng-bind-html="getVideoHTML()"></div>
            </div>
        `,
        link: scope => {
            scope.getVideoHTML = () => {
                let url = scope.getVideoSrc(scope.type);

                return $sce.trustAsHtml(`<iframe src="${url}" width="560" height="315" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>`);
            };

            scope.getVideoSrc = (type) => {
                switch(type) {
                    case 'youtube':
                        return `https://www.youtube.com/embed/${scope.src}`;
                    case 'vimeo':
                        return `https://player.vimeo.com/video/${scope.src}`;
                    default:
                        return null;
                }
            };
        }
    };
}

ClientReel.$inject = ['$timeout', '$sce'];
