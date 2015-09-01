angular.module('MSAAgency.directives')
.directive('mainFooter', [function() {
  var year = new Date().getFullYear();
  
  return {
    restrict: 'E',
    replace: true,
    template: `
      <footer class="main">
        <div class="credit-bar">
          <span>Copyright ${year} McDonald/Selznick Associates</span>
          <span class="powered-by">Powered By: <a href="">iamcutler</a></span>
        </div>
      </footer>
    `
  };
}]);