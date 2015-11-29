export default function ClientVideo() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            data: '='
        },
        template: `
            <figure>
                <a ng-href="http://www.youtube.com/embed/{{ data.video_id }}" class="fancybox" data-fancybox-group="clent-video" title="{{ data.title }}">
                    <div class="thumb">
                        <img ng-src="http://img.youtube.com/vi/{{ data.video_id }}/hqdefault.jpg" ng-if="data.video_type === 'youtube'">
                    </div>
                    <figcaption>
                        <span class="title">{{ data.title }}</span>
                    </figcaption>
                </a>
            </figure>
        `
    };
}
