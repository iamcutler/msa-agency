export default function ClientVideo() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            data: '='
        },
        template: `
            <figure ng-switch="data.video_type">
                <a ng-href="https://player.vimeo.com/video/{{ data.video_id }}" class="fancybox"
                    ng-switch-when="vimeo" data-fancybox-group="clent-video" title="{{ data.title }}">

                    <div class="thumb">
                        <img ng-src="{{ data.thumbnail }}">
                    </div>
                    <figcaption>
                        <span class="title">{{ data.title }}</span>
                    </figcaption>
                </a>

                <a ng-href="http://www.youtube.com/embed/{{ data.video_id }}" class="fancybox"
                    ng-switch-default data-fancybox-group="clent-video" title="{{ data.title }}">

                    <div class="thumb">
                        <img ng-src="http://img.youtube.com/vi/{{ data.video_id }}/hqdefault.jpg">
                    </div>
                    <figcaption>
                        <span class="title">{{ data.title }}</span>
                    </figcaption>
                </a>
            </figure>
        `
    };
}
