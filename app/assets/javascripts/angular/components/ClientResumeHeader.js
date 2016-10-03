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

                    <a ng-href="/clients/resume/{{client.slug}}.pdf" class="resume-download-btn" target="_blank">
                        Download Resume
                    </a>
                </div>
            </div>
        `
    };
}
