export default function ClientReel($timeout, $sce) {
    return {
        restrict: 'E',
        replace: '',
        scope: {
            type: '@',
            src: '@'
        },
        template: `
            <div ng-bind-html="getVideoHTML()"></div>
        `,
        link: scope => {
            scope.getVideoHTML = () => {
                let url = '';

                switch(scope.type) {
                    case 'youtube':
                        url = `https://www.youtube.com/embed/${scope.src}`;
                        break;
                    case 'vimeo':
                        url = `https://player.vimeo.com/video/${scope.src}`;
                        break;
                }

                return $sce.trustAsHtml(`<iframe src="${url}" width="560" height="315" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>`);
            };
        }
    };
}

ClientReel.$inject = ['$timeout', '$sce'];
