export default function ClientImage() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            caption: '@',
            img: '=',
            group: '@'
        },
        template: `
            <figure>
                <div class="thumb">
                    <a ng-href="{{ img.large }}" class="fancybox" data-fancybox-group="{{ group || '' }}" title="{{ caption }}">
                        <img ng-src="{{ img.square }}">
                    </a>
                </div>
                <figcaption ng-if="caption">
                    <span class="title">
                        {{ caption }}
                    </span>
                </figcaption>
            </figure>
        `
    };
}
