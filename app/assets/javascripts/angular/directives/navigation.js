angular.module('MSAAgency.directives')
.directive('navigation', [function() {
  return {
    restrict: 'E',
    replace: true,
    template: `
      <nav role="navigation" class="main">
        <a href="" class="nav-btn" ng-click="AppCtrl.toggleNavigation()">
          <div class="btn">
            <div class="nav-lines">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
            </div>
            MENU
          </div>
        </a>
    
        <div class="nav-sidebar">
          <div class="brand">
            <a ui-sref="home">McDonald/Selznick Associates</a>
          </div>
        </div>
      </nav>
    `
  };
}]);