export default function TalentSectionHeader() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            title: '@'
        },
        template: `
            <div class="section-header">
                <div class="app-container">
                    {{ title }}
                </div>
            </div>
        `
    };
}
