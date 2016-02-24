export default function ClientResumeHeader() {
    return {
        restrict: 'E',
        scope: {
            title: '@',
            client: '='
        },
        template: `
            <div class="section-header">
                <div class="app-container">
                    {{ title }}

                    <a class="resume-download-btn" ui-sref="app.client-resume({slug: client.slug})">
                        Download Resume
                    </a>
                </div>
            </div>
        `
    };
}
