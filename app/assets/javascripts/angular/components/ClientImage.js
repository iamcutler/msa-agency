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
                    <a ng-href="{{ img.large }}" data-lightbox="{{ group || '' }}" data-title="{{ caption }}">
                        <img ng-src="{{ img.thumb }}">
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
