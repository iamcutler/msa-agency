export default function TalentResume($timeout, $filter) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            title: '@',
            resume: '=data'
        },
        template: `
            <div class="app-container" ng-show="resume.length">
                <div class="resume-list">
                    <span class="resume-category">{{ title }}:</span>

                    <div class="resume-row" ng-repeat="res in resume track by $index">
                        <div>{{ res.project }}</div>
                        <div>{{ res.credit }}</div>
                        <div>{{ res.company }}</div>
                    </div>
                </div>
            </div>
        `
    };
}

TalentResume.$inject = ['$timeout', '$filter'];
