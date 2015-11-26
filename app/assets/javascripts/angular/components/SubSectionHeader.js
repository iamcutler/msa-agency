export default function SubSectionHeader() {
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
