angular.module('MSAAgency.directives')
.directive('socialIcons', [function() {
  return {
    restrict: 'E',
    replace: true,
    template: `
      <ul class="social-icons">
        <li class="facebook">
          <a href="https://www.facebook.com/MSAagency" target="_blank"></a>
        </li>
        <li class="twitter">
          <a href="https://twitter.com/MSAAGENCY" target="_blank"></a>
        </li>
        <li class="instagram">
          <a href="https://instagram.com/msaagency" target="_blank"></a>
        </li>
        <li class="youtube">
          <a href="https://www.youtube.com/user/MSAGlobalLeader" target="_blank"></a>
        </li>
      </ul>
    `
  };
}]);