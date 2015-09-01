angular.module('MSAAgency.directives')
.directive('mainHeader', [function() {
  return {
    restrict: 'E',
    replace: true,
    template: `
      <header class="main">
        <a href="" class="nav">
          <div class="nav-btn">
            <div class="nav-lines">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
          MENU
        </div>
      </a>

      <h1 class="logo">
        <a ui-sref="home">McDonald / Selznick Agency</a>
      </h1>

      <h2>A Talent Agency</h2>
    </header>
    `
  };
}]);