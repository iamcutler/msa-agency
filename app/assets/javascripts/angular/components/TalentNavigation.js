export default function TalentNavigation() {
    return {
        restrict: 'E',
        replace: true,
        scope: false,
        template: `
            <nav class="talent-navigation">
                <div class="app-container">
                    <a href="#" ng-class="{active: ClientCtrl.currentNavDestination === 'talent-bio'}"
                               ng-click="ClientCtrl.setCurrentNavDestination('talent-bio')">Biography</a>

                    <a href="#" ng-class="{active: ClientCtrl.currentNavDestination === 'reel'}"
                               ng-click="ClientCtrl.setCurrentNavDestination('reel')">Reel</a>

                    <a href="#" ng-class="{active: ClientCtrl.currentNavDestination === 'talent-resume'}"
                               ng-click="ClientCtrl.setCurrentNavDestination('talent-resume')">Resume</a>

                    <a href="#" ng-class="{active: ClientCtrl.currentNavDestination === 'talent-photos'}"
                               ng-click="ClientCtrl.setCurrentNavDestination('talent-photos')">Photos</a>

                    <a href="#" ng-class="{active: ClientCtrl.currentNavDestination === 'talent-videos'}"
                               ng-click="ClientCtrl.setCurrentNavDestination('talent-videos')">Videos</a>

                    <a href="#" ng-class="{active: ClientCtrl.currentNavDestination === 'talent-press'}"
                               ng-click="ClientCtrl.setCurrentNavDestination('talent-press')">Press</a>
                </div>
            </nav>
        `
    };
}
