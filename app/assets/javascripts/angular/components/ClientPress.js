export default function ClientPress() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            caption: '@',
            img: '=',
            destination: '@'
        },
        template: `
            <figure>
                <div class="thumb">
                    <a ng-href="{{ destination }}" class="talent-press-link" target="_blank" title="{{ caption }}">
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
