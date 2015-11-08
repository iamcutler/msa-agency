export default function ClientImage() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            caption: '@',
            img: '='
        },
        template: `
            <figure>
                <div class="thumb">
                    <img ng-src="{{ img.thumb }}">
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
