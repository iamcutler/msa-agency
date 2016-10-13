export function SocialMediaVideosView() {
    return {
        scope: {
            videos: '='
        },
        template: `
            <sub-section-header title="TOP VIRAL AND CONCEPT VIDEOS"></sub-section-header>

            <div class="margin-b20"></div>
            
            <div class="app-container">
                <client-video data="video" ng-repeat="video in videos"></client-video>
            </div>
        `
    };
};
